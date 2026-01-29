import { GNB } from "./gnb";
import { Footer } from "./footer";

interface ProjectTaskObject {
  text: string;
  hasSample: boolean;
  sampleUrl: string;
}

type ProjectTask = string | ProjectTaskObject;

interface Project {
  name: string;
  period: string;
  description: string;
  tasks: ProjectTask[];
  results: string;
  agency?: string;
  projectId?: string;
}

interface Career {
  company: string;
  position: string;
  period: string;
  logo: string;
  projects: Project[];
}

export function CareerPage() {
  const careerHistory: Career[] = [
    {
      company: "프리랜서 기획자",
      position: "시니어 기획자 / PM,PL",
      period: "2021.04 - 현재",
      logo: "🚀",
      projects: [
        {
          name: "브랜드 웹사이트 리뉴얼",
          agency: "엘루오씨앤씨",
          period: "2024.08 - 2025.01",
          projectId: "1",
          description: "삼성웰스토리 웹사이트 리뉴얼 및 브랜드 시스템 구축",
          tasks: [
            "리뉴얼 컨셉 기획",
            "정보구조 설계",
            { text: "프론트 화면설계", hasSample: true, sampleUrl: "https://buly.kr/APwTEk6" },
            "백오피스 어드민 화면설계",
            "통합 Test case 작성",
            "오픈 시나리오 작성 및 런칭",
          ],
          results: "AI 활용한 미래형 웹 브랜딩",
        },
        {
          name: "티커머스 플랫폼 서비스 고도화",
          agency: "티앤알",
          period: "2023.11 – 2024.02",
          description: "쇼핑앤티 커머스 플랫폼 서비스별 고도화",
          tasks: [
            "프로세스 정의 및 정책 고도화",
            "가입 및 로그인 사용성 개선 서비스 기획",
            "검색 솔루션 고도화 기획",
            "메인 페이지 리뉴얼 기획",
          ],
          results: "티커머스 도메인 운영 프로세스 최적화",
        },
        {
          name: "쇼핑몰 웹 사이트 리뉴얼",
          agency: "엘루오씨앤씨",
          period: "2023.04 – 2023.10",
          description: "IFC MALL 웹사이트 리뉴얼",
          tasks: [
            "요구사항정의",
            "다국어 지원 정책 수립",
            "프론트 화면설계",
            "백오피스 어드민 화면설계",
            "통합 Test case 작성",
            "오픈 시나리오 작성 및 런칭",
          ],
          results:`오프라인 몰의 브랜드 정체성을 디지털로 동기화
온·오프라인 통합 사용자 경험 구축`,
        },
        {
          name: "그로서리 브랜드 리뉴얼",
          agency: "TOV",
          period: "2021.10 – 2022.10",
          description: "CJ 더마켓 브랜드 페이지 리뉴얼",
          tasks: ["리뉴얼 컨셉 기획", "정보구조 설계", "프론트 화면설계"],
          results: "다양한 요구사항 발의 부서의 의견을 중재하며 컨셉 도출",
        },
        {
          name: "ESG 브랜딩 및 데이터 공시 플랫폼",
          agency: "TOV",
          period: "2022.01 – 2022.08",
          description: "SK 하이닉스 ESG 경영 지표 시각화 및 커뮤니케이션 플랫폼 구축",
          tasks: ["UI 전략 및 컨셉 수립", "유저 시나리오 및 와이어프레임 작성", "프론트 화면설계"],
          results: "복잡한 ESG 지표의 직관적 인포그래픽 시각화\n데이터 중심의 브랜드 커뮤니케이션 환경 구축",
        },
        {
          name: "B2B 웹 사이트 리뉴얼",
          agency: "TOV",
          period: "2021.10 – 2022.02",
          projectId: "2",
          description: "유도그룹 웹사이트 리뉴얼",
          tasks: ["다국어 지원 정책 수립", "요구사항정의", "프론트 화면설계", "WBS 작성 및 일정관리", "Test case 작성 및 수행", "오픈 시나리오 작성 및 상용 오픈"],
          results: "글로벌 다국어 운영 체계 수립\n일관된 글로벌 브랜드 보이스 확립",
        },
        {
          name: "글로벌 헬스케어 그룹 CRM 고도화",
          agency: "어솔루션",
          period: "2021.04 – 2022.07",
          description: "AAI 헬스케어 CRM 시스템 고도화",
          tasks: ["데이터 테이블 분석", "이관, 수정, 삭제 데이터 선별", "요구사항 및 기능정의", "화면설계", "Test case 작성 및 수행", "오픈 시나리오 작성 및 베타오픈", "내부 고객 사용 매뉴얼 배포 및 교육 진행"],
          results: "데이터 분석 기반의 CRM 시스템 모델링",
        },
      ],
    },
    {
      period: "2019.04 - 2021.04",
      company: "천재교과서",
      position: "정규직 / IT개발팀",
      logo: "📚",
      projects: [
        {
          name: "AI 학습 어플리케이션 구축",
          period: "2020.10 - 2021.03",
          description: `머신러닝 알고리즘 기반 문제풀이 학습어플리케이션
문제풀이 이력 데이터를 토대로 학습자 성적예측 서비스 제공`,
          tasks: [
            "마일스톤 및 일정, 과업 배분",
            "회원, 학습, 상품, 결제 등 서비스 항목의 정책 정의",
            "AI 알고리즘 기반 유저 플로우 및 앱 프로세스 정의",
            "프론트 및 백오피스 화면설계",
            "Test case 작성 및 수행",
          ],
          results: "AI 알고리즘의 비즈니스 모델 내재화 및 서비스 구현",
        },
        {
          name: "스마트 러닝 플랫폼 구축",
          period: "2020.02 - 2020.09",
          description: `이러닝 상품 판매 및 서비스를 제공하는 플랫폼 구축 
웹, 태블릿 앱, LMS, CRM 시스템`,
          tasks: [
            "정책 정의: 회원, 학습, 주문/결제, 이력 정책 수립",
            "일정 및 과업 진척 관리: WBS 작성 및 업무 배정 관리",
            "화면설계: 웹, 태블릿앱, 백오피스 스토리보드 작성 (약 500p)",
            "QA 실무 리딩: Test case 작성 및 수행, 이슈 관리",
          ],
          results: "복합 이슈의 선제적 관리와 효율적인 부서 간 협업",
        },
        {
          name: "학부모 어플리케이션 리뉴얼 구축",
          period: "2019.07 - 2020.02",
          description: `교육 포털 리뉴얼 및 기존 회원 DB 통합
자녀 학습 이력 데이터 연동 리포트 서비스`,
          tasks: [
            "정책 정의: 통합 회원 정책, 학습 서비스 및 앱 설정 정책 정의",
            "화면 설계: 앱 및 백오피스 스토리보드 작성 (약 100p)",
            "매뉴얼 제작 및 배포",
            "런칭 후 6개월 운영 및 서비스 안정화 병행",
          ],
          results: "데이터 기반의 서비스 기획 및 통합 로그인 로직 설계/구현",
        },
        {
          name: "CRM 학습 데이터 분석 서비스",
          period: "2019.09 - 2020.01",
          projectId: "3",
          description: "고객 및 학습 데이터를 수집하여 내부 고객용 분석 리포트를 제공하는 서비스",
          tasks: [
            "현업 인터뷰를 통한 요구사항 정의",
            "데이터 기준 정의 및 구축 방향/프로세스 설계",
            "화면 설계: 통계 분석 화면 스토리보드 작성 (약 100p)",
            "테스트 계획 수립 및 수행",
          ],
          results: "대용량 분석 데이터 구조 설계 및 백오피스 사용자 최적화  UI구현",
        },
      ],
    },
    {
      period: "2016.09 - 2019.02",
      company: "하이컨시(시대인재)",
      position: "정규직 / 온라인사업팀",
      logo: "💼",
      projects: [
        {
          name: "전사 통합 어드민 구축",
          period: "2016.12 - 2017.12",
          description: "3개 사이트의 회원, 결제, 학습, 배송, CS 기능을 통합 제어하는 관리 시스템",
          tasks: [
            "시스템 구조 및 메뉴 설계",
            "매출, 정산, 환불, 배송 프로세스 설계",
            "콘텐츠 및 상품 등록/운영 프로세스 정의",
            "화면 설계: 통합 어드민 스토리보드 작성 (약 200p)",
            "통합 테스트: Test case 작성 및 수행",
          ],
          results: "대형 백오피스 메뉴 구조 및 관리 기능",
        },
        {
          name: "입시 전문 도서 이커머스 구축",
          period: "2016.12 - 2017.09",
          description: "수험도서 전문 커머스 웹사이트 및 저자 정산 기능 포함 백오피스 구축",
          tasks: [
            "유저 플로우 및 서비스 메뉴 설계",
            "장바구니, 결제, 환불 프로세스 설계",
            "화면 설계: 프론트 및 백오피스 스토리보드 작성 (약 70p)",
            "통합 테스트 수행 및 오픈 관리",
          ],
          results: "결제부터 정산까지 이어지는 이커머스 풀 프로세스 기획",
        },
      ],
    },
    {
      period: "2009.01 - 2014.11",
      company: "메가스터디",
      position: "정규직 / 컨텐츠개발실",
      logo: "⚡",
      projects: [
        {
          name: "공무원 시험 이러닝 플랫폼 구축",
          period: "2013.06 - 2013.09",
          description: "이러닝 상품 판매 플랫폼 및 LMS 시스템 기획",
          tasks: [
            "서비스 운영 정책 수립",
            "시스템 구조 및 정보 구조(IA) 설계",
            "콘텐츠 및 상품 운영 프로세스 설계",
            "화면 설계: 핵심 기능 스토리보드 작성 (약 50p)",
          ],
          results: "교육 비즈니스 프로세스 전반 기획 경험",
        },
        {
          name: "마이크로 학습 어플리케이션 구축",
          period: "2012.01 - 2013.05",
          description: "수험생 대상 학습 앱 및 CMS 기획",
          tasks: [
            "유저 플로우 및 정보 구조(IA) 설계",
            "콘텐츠 및 학습 프로세스 설계",
            "화면 설계: 핵심 기능 스토리보드 작성",
          ],
          results: "앱을 통한 서비스 설계 역량",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      <GNB />
      <main className="pt-32 pb-24 px-6 flex-grow flex justify-center">
        <div className="max-w-5xl w-full">
          {/* 타이틀 섹션: Skills와 폰트 속성 및 여백 통일 */}
          <div className="mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter">경력사항</h1>
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-1.5 bg-yellow-400"></div>
              <p className="text-xl md:text-2xl text-gray-500 font-bold leading-tight tracking-tight border-l-4 border-gray-100 pl-6">
                15년간의 수행 이력 중 대형 플랫폼 구축 및 리뉴얼, 고도화 역량을 입증할 수 있는 <br className="hidden md:block" />
                <span className="text-black font-black border-b-2 border-yellow-400">주요 프로젝트를 선별했습니다.</span>
              </p>
            </div>
          </div>

          {/* 타임라인 섹션: 여백 보정 */}
          <div className="relative mt-32 mb-40">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-100 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-32">
              {careerHistory.map((career, careerIndex) => (
                <div key={careerIndex} className="relative">
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-yellow-400 rounded-full transform md:-translate-x-1/2 z-10"></div>

                  <div className={`ml-20 md:ml-0 md:flex ${careerIndex % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                    <div className="md:w-[48%] flex flex-col group">
                      <div className="bg-black text-white p-8 rounded-t-xl shadow-2xl transition-all group-hover:bg-zinc-900 relative z-20">
                        <div className="flex items-center gap-6">
                          <span className="text-4xl">{career.logo}</span>
                          <div>
                            <h2 className="text-2xl md:text-3xl font-black mb-1 tracking-tighter">{career.company}</h2>
                            <p className="text-yellow-400 font-black text-xs uppercase tracking-[0.2em]">{career.position}</p>
                            <p className="text-gray-400 text-xs mt-2 font-medium">{career.period}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col border border-gray-100 border-t-0 bg-white rounded-b-xl shadow-sm overflow-hidden">
                        {career.projects.map((project, projectIndex) => (
                          <div 
                            key={projectIndex} 
                            className={`p-8 transition-all hover:bg-gray-50/50 ${
                              projectIndex !== 0 ? 'border-t border-gray-100' : ''
                            }`}
                          >
                            <div className="mb-6">
                              {project.agency && (
                                <div className="flex mb-3">
                                  <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-black uppercase tracking-widest">
                                    Collab: {project.agency}
                                  </span>
                                </div>
                              )}
                              <h3 className="text-xl font-black text-black leading-tight mb-2 tracking-tight">{project.name}</h3>
                              <p className="text-gray-400 text-xs font-bold">{project.period}</p>
                            </div>

                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-8">
                              <p className="text-[15px] text-gray-600 leading-relaxed font-medium flex-grow whitespace-pre-wrap">
                                {project.description}
                              </p>
                              {project.projectId && (
                                <a href={`/project/${project.projectId}`} className="flex-shrink-0 flex items-center justify-center gap-1 text-[11px] font-black bg-black text-white px-4 py-2 rounded-lg hover:bg-yellow-400 hover:text-black transition-all shadow-md">
                                  VIEW PROJECT →
                                </a>
                              )}
                            </div>

                            <div className="mb-8">
                              <h4 className="font-black text-black mb-4 text-[11px] uppercase tracking-[0.2em] flex items-center">
                                <span className="w-4 h-[2px] bg-yellow-400 mr-3"></span>주요 수행업무
                              </h4>
                              <ul className="space-y-3">
                                {project.tasks.map((task, taskIndex) => {
                                  const isObject = typeof task === 'object' && task !== null;
                                  const taskText = isObject ? (task as ProjectTaskObject).text : task;
                                  const hasSample = isObject && (task as ProjectTaskObject).hasSample;

                                  return (
                                    <li key={taskIndex} className="flex items-center justify-between text-gray-700 text-[14px] leading-relaxed font-medium">
                                      <div className="flex items-start">
                                        <span className="mr-3 text-yellow-500 font-black">•</span>
                                        {taskText}
                                      </div>
                                      {hasSample && (
                                        <a href={(task as ProjectTaskObject).sampleUrl || "#"} target="_blank" rel="noopener noreferrer" className="ml-3 px-2 py-0.5 bg-yellow-400 text-black text-[10px] font-black rounded hover:bg-black hover:text-white transition-colors flex-shrink-0">
                                          SAMPLE
                                        </a>
                                      )}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>

                            <div className="pt-6 border-t border-gray-50 bg-gray-50/50 -mx-8 px-8 -mb-8 pb-8">
                              <p className="whitespace-pre-line text-black font-black text-[14px] leading-relaxed italic">
                                "{project.results}"
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
          <div className="mt-48 mb-24">
            <div className="p-12 bg-black text-white rounded-2xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-16 inline-block border-b-4 border-yellow-400 pb-2 tracking-tighter uppercase">
                  Core Competencies
                </h3>

                <div className="grid md:grid-cols-2 gap-20">
                  <div className="space-y-12">
                    <div>
                      <h4 className="text-yellow-400 text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 mr-3"></span>직무 역량 (Hard Skills)
                      </h4>
                      <ul className="space-y-4 text-gray-300 text-[14px] font-medium leading-relaxed">
                        <li>• 벤치마킹 및 시장·사용자 리서치 수행</li>
                        <li>• 정보구조(IA) 설계, UI 기획, Flow 설계, 프로토타이핑</li>
                        <li>• WBS 설계 및 프로젝트 진척/일정 관리</li>
                        <li>• 테스트 케이스 정의, 검수(QA) 수행 및 디버깅 관리</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-yellow-400 text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center">
                        <span className="w-2 h-2 bg-yellow-400 mr-3"></span>협업 역량 (Soft Skills)
                      </h4>
                      <ul className="space-y-4 text-gray-300 text-[14px] font-medium leading-relaxed">
                        <li>• 논리적 사고를 통한 문제해결 및 대안 제시</li>
                        <li>• 이해관계자와의 다각도 커뮤니케이션 및 조율</li>
                        <li>• 효율적인 협업을 위한 프로젝트 프로세스 표준화</li>
                        <li>• 선제적 이슈 대응 및 체계적인 리스크 관리</li>
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-10">
                    <h4 className="text-yellow-400 text-xs font-black uppercase tracking-[0.2em] mb-6 flex items-center">
                      <span className="w-2 h-2 bg-yellow-400 mr-3"></span>보유 기술 및 도구 (Tools)
                    </h4>
                    
                    <div className="grid grid-cols-1 gap-8">
                      <div className="border-l-2 border-zinc-800 pl-6 group">
                        <p className="text-white font-black text-base mb-2 group-hover:text-yellow-400 transition-colors">Figma</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          컴포넌트 중심의 와이어프레임 및 프로토타이핑, Figma AI 프롬프트 설계 및 실무 활용 역량
                        </p>
                      </div>

                      <div className="border-l-2 border-zinc-800 pl-6 group">
                        <p className="text-white font-black text-base mb-2 group-hover:text-yellow-400 transition-colors">MS Office (PPT, Excel)</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          슬라이드 마스터 기반의 템플릿 제작 및 제안서 작성, 엑셀 중급 함수/피봇 테이블을 활용한 데이터 분석 및 WBS 관리
                        </p>
                      </div>

                      <div className="border-l-2 border-zinc-800 pl-6 group">
                        <p className="text-white font-black text-base mb-2 group-hover:text-yellow-400 transition-colors">AI Tools (Midjourney)</p>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          의도에 부합하는 프롬프트 설계를 통한 서비스 컨셉 이미지 및 그래픽 산출물 생성
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}