import { twMerge } from "tailwind-merge";

export default function Footer() {
  return (
    <footer
      className={twMerge(
        "h-[40px] mt-auto p-4 bg-gray-800 text-white text-center flex justify-center items-center"
      )}
    >
      <p>© 2025 pil_d1v's den</p>
    </footer>
  );
}
