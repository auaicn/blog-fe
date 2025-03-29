"use client";

import { useState } from "react";
import Papa from "papaparse";

export default function CsvTransposer() {
  const [data, setData] = useState<string[][]>([[""]]); // Default with one empty cell

  // Handle File Upload
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        const parsedData: string[][] = result.data as string[][];
        setData(parsedData);
      },
      skipEmptyLines: true,
    });
  };

  // Handle CSV Text Input
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.target.value;
    const parsed = Papa.parse(text, { skipEmptyLines: true }).data as string[][];
    setData(parsed);
  };

  // Handle Table Cell Edit
  const handleCellChange = (rowIndex: number, colIndex: number, value: string) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = value;
    setData(newData);
  };

  // Add New Row
  const addRow = () => {
    setData([...data, new Array(data[0]?.length || 1).fill("")]);
  };

  // Add New Column
  const addColumn = () => {
    setData(data.map((row) => [...row, ""]));
  };

  // Transpose Function
  const transpose = (matrix: string[][]): string[][] => {
    return matrix[0]?.map((_, colIndex) => matrix.map((row) => row[colIndex])) || [];
  };

  // Copy to Clipboard
  const copyToClipboard = () => {
    const csv = Papa.unparse(transpose(data));
    navigator.clipboard.writeText(csv);
    alert("Transposed CSV copied to clipboard!");
  };

  return (
    <div className="flex p-4 gap-6">
      {/* Left Side - Input Controls */}
      <div className="w-1/2">
        <h2 className="text-lg font-bold mb-2">Upload CSV File</h2>
        <input type="file" accept=".csv" onChange={handleFileUpload} className="mb-4" />

        <h2 className="text-lg font-bold mt-4">Or Paste CSV Data</h2>
        <textarea
          onChange={handleTextChange}
          placeholder="Paste CSV here..."
          className="w-full h-32 p-2 border border-gray-300 rounded mb-2"
        />

        <h2 className="mt-4 font-bold">Edit Table</h2>
        <button onClick={addRow} className="px-2 py-1 bg-green-500 text-white rounded mr-2">+ Row</button>
        <button onClick={addColumn} className="px-2 py-1 bg-blue-500 text-white rounded">+ Column</button>

        <Table data={data} onCellChange={handleCellChange} />
      </div>

      {/* Right Side - Transposed Table & Copy Button */}
      <div className="w-1/2">
        <h2 className="font-bold">Transposed Table</h2>
        <button onClick={copyToClipboard} className="px-3 py-1 bg-gray-700 text-white rounded mb-2">
          Copy to Clipboard
        </button>
        <Table data={transpose(data)} />
      </div>
    </div>
  );
}

// Editable Table Component
const Table = ({ data, onCellChange }: { data: string[][]; onCellChange?: (r: number, c: number, v: string) => void }) => (
  <table className="border-collapse border border-gray-400 w-full mt-2">
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex} className="border border-gray-300">
          {row.map((cell, colIndex) => (
            <td key={colIndex} className="border border-gray-300 p-2">
              <input
                value={cell}
                onChange={(e) => onCellChange && onCellChange(rowIndex, colIndex, e.target.value)}
                className="w-full border-none focus:ring-0"
              />
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
