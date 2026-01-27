import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export function GNB() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    // z-index를 z-[100]으로 확실히 높여서 모든 콘텐츠 위에 오도록 합니다.
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-[100] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          to="/" 
          className="text-xl md:text-2xl font-bold text-black hover:text-yellow-400 transition-colors z-[101]"
        >
          이지현
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {["/", "/about", "/career"].map((path, idx) => (
            <Link
              key={path}
              to={path}
              className={`text-lg transition-colors ${
                isActive(path) ? "text-black font-bold" : "text-gray-600 hover:text-black"
              }`}
            >
              {["메인", "자기소개", "경력사항"][idx]}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button - 클릭 영역 확보 및 z-index 상향 */}
        <button
          type="button"
          className="md:hidden p-2 text-black focus:outline-none z-[101]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay - 애니메이션 없이 즉각적인 반응성 확보 */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="flex flex-col p-6 gap-6">
            {[
              { path: "/", label: "메인" },
              { path: "/about", label: "자기소개" },
              { path: "/career", label: "경력사항" }
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl transition-colors ${
                  isActive(item.path) ? "text-blue-600 font-black" : "text-gray-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}