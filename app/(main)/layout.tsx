import { twMerge } from "tailwind-merge";
import { Navigation } from "./navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full flex flex-col bg-[#121212]">
      <Navigation />
      <div className="h-[1px] w-full bg-gray-600" />
      <main className={twMerge("flex-grow min-h-0 p-4 overflow-auto")}>
        {children}
      </main>
      <footer
        className={twMerge(
          "p-4 bg-gray-800 text-white text-center fixed bottom-0 left-0 right-0 w-full"
        )}
      >
        <p>© 2025 pil_d1v's den</p>
      </footer>
    </div>
  );
}
