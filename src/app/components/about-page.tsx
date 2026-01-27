import { GNB } from "./gnb";
import { Footer } from "./footer";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col text-black">
      <GNB />

      {/* 메인과 동일한 px-6, pt-32(GNB 고려), pb-24 적용 */}
      <main className="flex-grow flex justify-center pt-32 pb-24 px-6">
        {/* 컨테이너 규격을 max-w-5xl로 통일 */}
        <div className="max-w-5xl w-full">
          
          {/* Header Section: 메인 페이지와 100% 동일한 스타일 */}
          <div className="mb-24">
            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter">
              자기소개
            </h1>
            <div className="w-16 h-1.5 bg-yellow-400"></div>
          </div>

          {/* 1. 핵심 경험: 메인 Skills 섹션과 동일한 카드 스타일 적용 */}
          <div className="mb-32">
            <h3 className="text-xl font-black mb-12 pb-2 border-b-4 border-black inline-block uppercase tracking-wider">핵심경험</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "다양한 개발 환경 및 운영체제 구축 경험", content: "신규 도메인 구축 프로젝트에서 기획 총괄뿐만 아니라 실무자로 참여하여 프로세스 정의, 스토리보드 작성, 테스트 수행까지 전 과정을 직접 수행한 경험이 있습니다. 웹·모바일 웹·스마트폰 앱·태블릿 앱 등 다양한 디바이스 환경에서 프론트와 백오피스를 동시에 기획했으며, 하이브리드 및 네이티브 앱 모두 구축·운영한 경험을 보유하고 있습니다. 이를 통해 각 운영체제 특성에 맞는 기획 방향성을 도출할 수 있습니다." },
                { title: "신규 서비스 런칭 경험", content: "복잡한 요구사항을 체계적으로 정리하고, 명확한 데이터 근거를 토대로 실행 가능한 서비스를 런칭한 경험을 가지고 있습니다. 콘텐츠개발, 인공지능 알앤디, 프로그램 개발 등 다양한 사업부와 함께 협업하여 빅데이터 알고리즘 기반 문제풀이 서비스를 설계하고 런칭한 경험은 제 기획 역량을 가장 잘 보여주는 사례입니다." },
                { title: "프로세스 개선 및 UI 고도화 운영 경험", content: "10년 이상 이러닝·스마트러닝 도메인의 웹사이트, 모바일앱, 태블릿앱 등 다양한 채널을 운영·유지보수 하며 안정적인 서비스 환경에 대한 이해도를 높였습니다. 또한 티커머스 서비스 고도화 프로젝트를 통해 도메인 별 고도화 방식에 대한 시야도 확장할 수 있었습니다. 고객 의견 모니터링과 데이터 분석을 기반으로 문제점을 파악하고, 이를 프로세스 개선과 UI 및 서비스 디테일을 향상시키는 실무 능력을 가지고 있습니다." },
              ].map((skill, i) => (
                <div key={i} className="p-10 border border-gray-100 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="font-black text-xl mb-5 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 mr-3"></span>
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">{skill.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 2. 핵심 스킬: 상동 */}
          <div className="mb-32">
            <h3 className="text-xl font-black mb-12 pb-2 border-b-4 border-black inline-block uppercase tracking-wider">핵심스킬</h3>
            <div className="grid grid-cols-1 gap-6">
              {[
                { title: "표준화된 화면설계 스킬", content: "목적과 상황에 맞게 피그마, 파워포인트 등 다양한 툴을 활용해 화면설계서를 작성할 수 있으며, 프로토타입 설계를 통해 구현 과정에서 발생할 수 있는 커뮤니케이션 미스를 사전에 최소화합니다. 더불어 개발·퍼블리싱 단계별 필요한 세부 기능 정의(디스크립션)를 체계적으로 정리하여 실행 단계에서의 오류와 오차를 줄이는 역량을 보유하고 있습니다." },
                { title: "도메인 지식을 기반으로 한 테스트 시나리오 작성 스킬", content: "테스트의 방향성을 명확히 하고 프로젝트 구성원 모두가 수월하게 참여할 수 있는 시나리오와 일정 설계를 할 수 있습니다. 요구분석 단계의 필수 요건들을 반영한 테스트 케이스를 나열하고 중요도와 긴급도를 분류하며 테스트 환경에 따른 결과 도출과 오류 수정에 대한 팔로우가 가능합니다." },
                { title: "AI 기반 실무 최적화 스킬", content: "AI 툴을 실무에 적극 도입함으로써 작업의 효율성과 결과물의 완성도를 동시에 확보하고 있습니다. 단순한 도구 활용을 넘어, 프롬프트 설계 스킬을 바탕으로 기획안 구성 및 프로토타이핑 속도를 획기적으로 개선할 수 있습니다. 이러한 기술적 유연함을 통해 확보된 리소스를 서비스 디테일 향상과 사용자 경험 최적화에 집중 투입하여, 보다 밀도 높은 프로젝트 성과를 만들어내는 역량을 갖추고 있습니다." },
              ].map((skill, i) => (
                <div key={i} className="p-10 border border-gray-100 bg-gray-50 rounded-xl group hover:bg-white hover:shadow-xl transition-all duration-300">
                  <h4 className="font-black text-xl mb-5 flex items-center">
                    <span className="w-2 h-2 bg-yellow-400 mr-3"></span>
                    {skill.title}
                  </h4>
                  <p className="text-gray-600 text-lg leading-relaxed font-medium">{skill.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Professional Story: 자기소개서 영역 */}
          <div className="space-y-32 pb-20">
            <h3 className="text-xl font-black mb-4 pb-2 border-b-4 border-black inline-block uppercase tracking-wider">자기소개서</h3>
            
            {[
              {
                num: "01",
                title: "전천후 기획자: 미시적 설계와 거시적 관점",
                content: (
                  <>
                    <p>콘텐츠 기획자로 시작한 저의 커리어는 <strong>웹과 모바일웹을 넘어 네이티브 앱, 하이브리드 앱, 그리고 백오피스 시스템 전반</strong>을 기획하고 운영하는 전문가로 확장되었습니다. 프론트엔드의 B2C 서비스 UI를 설계하는 것부터, 백엔드에서 서비스의 흐름을 시스템적으로 풀어내는 모든 과정에 깊은 흥미를 느끼며 역량을 쌓아왔습니다.</p>
                    <p>특히 <strong>천재교과서 밀크티 고등 신사업 구축 프로젝트</strong>에서는 기획 PL로 참여하여 웹, 모바일웹, 앱, 어드민, CRM에 이르는 방대한 시스템의 신규 구축과 리뉴얼을 주도했습니다. 프론트엔드의 와이어프레임부터 <strong>세부 단위의 스토리보드 설계</strong>는 물론, 어드민의 <strong>데이터 기능 정의와 구현</strong>까지 직접 수행하며 프로젝트의 완성도를 높였습니다.</p>
                    <p>저는 시스템 단위 간의 영향도 예측과 프로세스가 핵심인 백엔드, 그리고 유용한 UX/UI 설계가 중심인 프론트엔드라는 두 영역을 모두 깊이 있게 이해하고 있습니다. 이러한 <strong>미시적·거시적 관점의 타이트한 실전 경험</strong>은 일반적인 기획자와 차별화되는 저만의 강력한 무기입니다. 광범위한 업무 커버리지를 바탕으로 <strong>웹앱, 서비스 기획, UI 기획 영역 전반에서</strong>기여 할 준비가 되어있습니다.</p>
                  </>
                )
              },
              {
                num: "02",
                title: "모호한 요구사항을 가시적인 성과로 바꾸는 기획의 힘",
                content: (
                  <>
                    <p>기획자는 프로젝트의 <strong>명확한 목표를 정의하고, 이를 달성하기 위한 최적의 경로를 설계하여 구성원과 공유</strong>함으로써 프로젝트를 완수하는 사람이라고 생각합니다. 목표를 정확히 파악해야만 업무의 중요도와 긴급도를 구분할 수 있으며, 이를 바탕으로 효율적인 달성 방안을 제시할 수 있기 때문입니다. 구성원이 믿고 나아갈 수 있는 <strong>가시적인 이정표를 제시하는 것</strong>, 그것이 기획자에게 부여된 막중한 책임이자 역할입니다.</p>
                    <p>저는 실제로 3개 사업부의 협업이 필수적이었던 <strong>'CRM 고객 학습 패턴 분석 리포팅'</strong> 프로젝트에서 이러한 기획적 판단력을 발휘했습니다. 일정은 빠듯했고 사업부 간의 상이한 이해관계로 인해 요구사항 정의 단계에서 진척이 없던 상황이었습니다. 저는 지지부진한 논의를 끝내고 일정을 준수하기 위해, <strong>프로젝트의 목표와 서비스 성격을 간결하게 재정의한 후 프로토타입과 와이어프레임을 선제적으로 설계</strong>했습니다.</p>
                    <p>추상적인 언어가 아닌 <strong>가시적인 산출물을 바탕으로 소통</strong>하자, 협의에 속도가 붙기 시작했고 프로젝트 구성원과 결재자의 적극적인 참여를 이끌어낼 수 있었습니다. 이는 기획자가 내리는 판단과 과제의 우선순위, 그리고 <strong>목표에 대한 공감대를 전 구성원에게 전달하는 프로세스</strong>가 프로젝트 성공에 얼마나 결정적인지 다시 한번 증명한 계기가 되었습니다.</p>
                  </>
                )
              },
              {
                num: "03",
                title: "기획자의 '역할'을 가치로 증명합니다",
                content: (
                  <>
                    <p>기획자로서 <strong>목표를 달성하는 순간의 성취감</strong>은 제가 이 일에 지속적으로 열정을 쏟게 하는 가장 큰 원동력입니다. 저의 아이디어가 실제 서비스로 구현되는 기쁨도 크지만, 그 과정에서 동료들이 확신을 가지고 움직일 수 있는 <strong>신뢰도 높은 산출물을 만드는 과정</strong>에 깊은 흥미와 자부심을 느낍니다.</p>
                    <p>프로젝트는 결코 혼자서 완성할 수 없습니다. 저는 업무의 성패가 개인의 역량을 넘어, <strong>기획부터 디자인, 퍼블리싱, 개발, 운영에 이르는 '풀사이클(Full-cycle) 팀'의 유기적인 협업</strong>에 달려 있다고 믿습니다. 기획자는 이 팀의 일원이자, 전체를 이끌어가는 조력자가 되어야 합니다. 저는 다양한 환경에서 수많은 프로젝트를 경험하며 <strong>기획자의 책임감과 업무 태도가 결과에 미치는 결정적인 영향력</strong>을 배웠고, 이를 늘 가슴에 새기며 업무에 임해왔습니다.</p>
                    <p>웹, 모바일, 앱 기반의 신사업과 서비스를 총괄하며 <strong>추진력 있는 실행력과 유연한 위기대처 능력</strong>을 체득했습니다. 단순히 주어진 업무를 처리하는 것을 넘어, 기획자의 위치와 역할을 정확히 이해하고 행동하는 기획자는 드물다고 자부합니다. <strong>자율과 소통, 그리고 프로의식</strong>이 강조되는 환경에서 저의 역량은 더욱 빛을 발할 것입니다.</p>
                  </>
                )
              }
            ].map((story, i) => (
              <div key={i} className="flex flex-col gap-10 border-t border-gray-100 pt-16">
                <div className="flex items-baseline gap-4">
                  <span className="text-yellow-500 font-black text-2xl tracking-tighter">{story.num}</span>
                  <h4 className="text-3xl md:text-4xl font-black tracking-tighter text-black">{story.title}</h4>
                </div>
                <div className="text-gray-700 leading-relaxed space-y-6 text-lg font-medium max-w-none">
                  {story.content}
                </div>
              </div>
            ))}
{/* Key Stats Section (대시보드): 폰트 두께 및 정렬 보정 */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 items-start border-b border-gray-100 pb-16">
  
  {/* 1. 경력 */}
  <div className="flex flex-col">
    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">경력</p>
    <div className="min-h-[64px] flex items-end">
      <p className="text-5xl font-black text-black leading-none tracking-tighter">
        15<span className="text-2xl ml-1 font-bold">년+</span>
      </p>
    </div>
    <div className="min-h-[40px] mt-6">
      <p className="text-sm text-gray-500 font-medium leading-relaxed">웹/앱 구축 및 운영</p>
    </div>
  </div>

  {/* 2. 프로젝트 */}
  <div className="flex flex-col">
    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">프로젝트</p>
    <div className="min-h-[64px] flex items-end">
      <p className="text-5xl font-black text-black leading-none tracking-tighter">
        20<span className="text-2xl ml-1 font-bold">건+</span>
      </p>
    </div>
    <div className="min-h-[40px] mt-6">
      <p className="text-sm text-gray-500 font-medium leading-relaxed">완료 및 런칭</p>
    </div>
  </div>

  {/* 3. 수상 내역 */}
  <div className="flex flex-col">
    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">수상 내역</p>
    <div className="min-h-[64px] flex items-end justify-start">
      <img 
        src="/icon_web_award_2023.png" 
        alt="Web Award" 
        className="h-14 w-auto object-contain object-bottom grayscale opacity-80 mb-[-4px]" 
      />
    </div>
    <div className="min-h-[40px] mt-6">
      <p className="text-sm text-gray-500 font-medium leading-relaxed">웹어워드 코리아</p>
    </div>
  </div>

  {/* 4. 자격증 */}
  <div className="flex flex-col">
    <p className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6">자격증</p>
    <div className="min-h-[64px] flex items-end justify-start">
      <img 
        src="/logo_aipot_s.png" 
        alt="AI-pot" 
        className="h-10 w-auto object-contain object-bottom grayscale opacity-80 mb-[2px]" 
      />
    </div>
    <div className="min-h-[40px] mt-6">
      <p className="text-sm text-gray-500 font-medium leading-relaxed">AI 프롬프트 설계</p>
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