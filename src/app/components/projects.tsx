import { Link } from "react-router-dom";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: "1",
    title: "글로벌 F&B 웹사이트 구축",
    subtitle: "웹사이트를 통한 브랜딩은 어떤 방식이어야 하는가?",
    period: "24.08 ~ 25.01",
    role: "기획 100%",
    image: "project1.png",
  },
  {
    id: "3",
    title: "AI 기반 학습 분석 서비스 프로젝트",
    subtitle: "단편적인 학습 데이터로 밀접한 학습관리가 가능할까?",
    period: "19.08 ~ 20.02",
    role: "PM 및 기획",
    image: "project2.jpg",
  },
  {
    id: "2",
    title: "B2B 기업 리브랜딩 및 웹사이트 구축",
    subtitle: "B2B 기업에게 대중친화적 이미지는 매출증대에 불필요할까?",
    period: "21.10 ~ 22.02",
    role: "PM 및 기획",
    image: "project3.png",
  },
];

function ProjectCard({ project }: { project: typeof projects[0] }) {
  return (
    /* 개별 섹션에서 px-6 중복 제거하여 부모의 max-w-5xl 라인에 밀착 */
    <div className="w-full py-10">
      <Link to={`/project/${project.id}`}>
        <div className="relative aspect-[16/10] md:aspect-video overflow-hidden bg-gray-900 group cursor-pointer border border-white/10">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 blur-sm group-hover:blur-none group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-end p-8">
            <p className="text-sm md:text-base text-yellow-400 mb-3 font-medium">
              {project.subtitle}
            </p>
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {project.title}
            </h3>
            <div className="flex flex-row gap-6 text-gray-400 text-sm md:text-base border-t border-white/20 pt-4">
              <span>{project.period}</span>
              {project.role && (
                <span className="text-yellow-400 font-bold">
                  {project.role}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function Projects() {
  return (
    /* 최상단 부모에서 전체 중앙 정렬 및 배경색 제어 */
    <section className="bg-black w-full flex justify-center py-24 border-t border-zinc-800">
      {/* 모든 요소(제목+카드)를 이 하나의 max-w-5xl 박스 안에 담습니다 */}
      <div className="max-w-5xl w-full px-6">
        
        {/* 상단 텍스트 영역 */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter">
            수행 프로젝트
          </h2>
          
          <div className="mt-6">
            <p className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
              3가지 프로젝트를 대표로 말씀드리겠습니다.
            </p>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl">
              문제점을 발견하고 해결하는 과정이 잘 드러난 프로젝트 중심으로 선정했습니다.
            </p>
            <div className="w-16 h-1.5 bg-yellow-400 mt-6"></div>
          </div>
        </div>

        {/* 프로젝트 리스트 영역: 이제 제목과 동일한 max-w-5xl 안에서 정렬됩니다 */}
        <div className="space-y-4">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
      </div>
    </section>
  );
}