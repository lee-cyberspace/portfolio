export function Skills() {
  const pmSkills = [
    { name: "프로젝트 전략 기획" },
    { name: "서비스 전략 기획" },
    { name: "프로젝트 일정 및 과업 관리" },
    { name: "내외부 커뮤니케이션 및 협업" },
    { name: "이슈 및 리스크관리" },
    { name: "프로젝트 회고" },
  ];

  const uxSkills = [
    { name: "정보구조 설계" },
    { name: "프로세스 및 플로우 설계" },
    { name: "와이어프레임 설계" },
    { name: "프로토타이핑" },
    { name: "스토리보드 설계" },
    { name: "AI 프롬프트 설계" },
  ];

  const tools = [
    { name: "Figma", src: "/figma-logo.png" },
    { name: "Excel", src: "/excel-logo.png" },
    { name: "PPT", src: "/ppt-logo.png" },
    { name: "Midjourney", src: "/midj-logo.png" },
    { name: "Notion", src: "/notion-logo.png" },
    { name: "Jira", src: "/jira-logo.png" },
  ];

  return (
    <section className="w-full bg-white flex justify-center py-24 border-t border-gray-100">
      <div className="max-w-5xl w-full px-6">
        
        {/* 헤더 (정렬 및 폰트 통일) */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-black tracking-tighter">
            스킬
          </h2>
          <p className="text-xl md:text-2xl text-gray-500 font-bold leading-tight">
            저는 이런 일을 할 수 있습니다.
          </p>
          <div className="w-16 h-1.5 bg-yellow-400 mt-6"></div>
        </div>
        
        {/* 3열 그리드: 각 열의 높이 밸런스 최적화 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 items-start">
          
          {/* 1열: Project Management */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-black pb-2 border-b-4 border-black inline-block uppercase tracking-wider">
              Project Management
            </h3>
            <div className="flex flex-col">
              {pmSkills.map((skill, index) => (
                <div key={index} className="group py-3 border-b border-gray-50 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-yellow-400 transition-colors"></div>
                  <span className="text-base lg:text-lg font-medium text-gray-700 group-hover:text-black group-hover:font-bold transition-all">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2열: UI/UX Planning */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-black pb-2 border-b-4 border-black inline-block uppercase tracking-wider">
              UI/UX Planning
            </h3>
            <div className="flex flex-col">
              {uxSkills.map((skill, index) => (
                <div key={index} className="group py-3 border-b border-gray-50 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-gray-300 group-hover:bg-yellow-400 transition-colors"></div>
                  <span className="text-base lg:text-lg font-medium text-gray-700 group-hover:text-black group-hover:font-bold transition-all">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3열: SOFTWARE & TOOLS (리스트 형태로 높이 맞춤) */}
          <div className="space-y-6">
            <h3 className="text-lg font-black text-black pb-2 border-b-4 border-black inline-block uppercase tracking-wider">
              Software & Tools
            </h3>
            <div className="flex flex-col">
              {tools.map((tool, index) => (
                <div key={index} className="group py-3 border-b border-gray-50 flex items-center gap-4">
                  {/* 로고 사이즈를 작게 축소 (h-5) */}
                  <div className="w-8 flex justify-center">
                    <img 
                      src={tool.src} 
                      alt={tool.name} 
                      className="h-5 w-auto object-contain grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" 
                    />
                  </div>
                  <span className="text-base lg:text-lg font-medium text-gray-500 group-hover:text-black group-hover:font-bold transition-all uppercase tracking-tight">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}