import { twMerge } from "tailwind-merge";
import { Navigation } from "./navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-[#121212] overflow-hidden">
      <Navigation />
      <div className="h-[60px]" /> {/* 네비게이션 바 높이만큼의 여백 */}
      <main
        className={twMerge(
          "flex-grow min-h-0 p-4 overflow-auto scrollbar-hide"
        )}
      >
        <div className="min-h-full flex flex-col scrollbar-hide">
          {children}
          <footer
            className={twMerge(
              "mt-auto p-4 bg-gray-800 text-white text-center"
            )}
          >
            <p>© 2025 pil_d1v's den</p>
          </footer>
        </div>
      </main>
    </div>
  );
}
