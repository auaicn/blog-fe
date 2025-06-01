import { twMerge } from "tailwind-merge";
import { Navigation } from "./navigation";
import Footer from "./components/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col bg-[#121212] overflow-hidden">
      <Navigation />
      {/* 네비게이션 바 높이만큼의 여백 */}
      <div className="h-[60px] shrink-0" />{" "}
      <div className="h-[4px] bg-gray-200" />
      <main
        className={twMerge("flex-grow min-h-0 overflow-auto scrollbar-hide")}
      >
        <div className="min-h-full flex flex-col scrollbar-hide">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
