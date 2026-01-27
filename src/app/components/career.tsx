import { Link } from "react-router-dom";

export function Career() {
  const careers = [
    {
     period: "2021.04 - 현재",
    company: "프리랜서 기획자",
    logo: "🚀",
    // 따옴표 대신 백틱(`)을 사용하고 엔터를 칩니다.
    project: `글로벌 대기업 브랜드 사이트 리뉴얼
티커머스 쇼핑 앱 서비스 고도화 및 운영
리테일 몰 다국어 웹사이트 구축
그로서리 커머스 브랜드 페이지 리뉴얼
글로벌 대기업 ESG 데이터 공시 플랫폼 구축
글로벌 브랜드 다국어  웹사이트 구축
헬스케어 상담 CRM 리뉴얼 구축
외 다수 구축, 운영 프로젝트 수행`
    },
    {
      period: "2019.04 - 2021.04",
      company: "천재교과서",
      logo: "📚",
      project: `고등 온라인 교육 플랫폼 구축
AI 기반 학습 앱 UI 기획 및 백오피스 시스템 구축
분석계 데이터 기반 CRM 서비스 기획, 개선 운영
초중등 스마트러닝 플랫폼 서비스 운영
학습관리 어플리케이션 구축 및 운영`

    },
    {
      period: "2016.09 - 2019.02",
      company: "시대인재",
      logo: "💼",
      project: `고등 온라인 학습 사이트 신규 구축
수험 도서 전문 커머스 사이트 구축
전사 통합 백오피스 구축
성적분석 서비스 기획`
    },
    {
      period: "2009.01 - 2014.11",
      company: "메가스터디",
      logo: "⚡",
      project: `공무원 이러닝 학습 플랫폼 구축
문제풀이 학습 어플리케이션 구축
CRM 플랫폼 운영 및 개선`
    },
    {
      period: "2007.01 - 2008.02",
      company: "스카이에듀",
      logo: "🌐",
      project: `반수생 웹 커뮤니티 신규 구축 기획
강사 관리 백오피스 시스템 리뉴얼 기획`
    },
  ];

return (
    <section className="w-full bg-black text-white flex justify-center py-24">
      {/* max-w-5xl과 px-6의 위치를 아래 Projects와 일치시킴 */}
      <div className="max-w-5xl w-full px-6">
        <div className="text-left mb-16">
          {/* font-black으로 프로젝트 섹션과 통일 */}
          <h2 className="text-4xl md:text-5xl font-black mb-8 text-white tracking-tighter">
            커리어
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-bold">
            교육 도메인은 물론 다양한 비즈니스의 전문적인 경험을 쌓을 수 있는<br className="hidden md:block" />
             서비스를 구축하고 운영했습니다.
          </p>
          {/* Projects 섹션의 노란 선과 일관성을 위해 추가 (선택사항) */}
          <div className="w-16 h-1.5 bg-yellow-400 mt-6"></div>
        </div>
        
        {/* Vertical Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-yellow-400 transform md:-translate-x-1/2"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {careers.map((career, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-yellow-400 rounded-full transform md:-translate-x-1/2 z-10 flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                }`}>
                  <div className="bg-white text-black p-6 hover:bg-yellow-400 transition-colors group">
                    <div className="flex items-center gap-3 mb-3 md:justify-end">
                      <span className="text-3xl">{career.logo}</span>
                      <h3 className="text-xl font-bold">{career.company}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{career.period}</p>
                    <p className={`whitespace-pre-wrap ${
  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
} text-left`}>
  {career.project}
</p>
                  </div>
                </div>
                
                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            to="/career"
            className="inline-block px-12 py-5 bg-yellow-400 text-black hover:bg-white transition-colors text-lg font-bold"
          >
            경력사항 자세히 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}