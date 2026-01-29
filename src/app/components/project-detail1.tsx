import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";
import { GNB } from "./gnb";
import { Footer } from "./footer";

export function ProjectDetail1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fontStack = '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", sans-serif';

  return (
    <div className="min-h-screen bg-white overflow-x-hidden" style={{ fontFamily: fontStack }}>
      <GNB />
      <div className="pt-16">
        {/* 히어로 섹션 */}
        <section className="py-24 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6">
         <h1 className="text-3xl md:text-7xl font-black text-black mt-4 mb-8 tracking-tighter leading-tight break-keep">
  글로벌 F&B 브랜드 <br className="hidden md:block" /> 웹사이트 구축
</h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 font-medium">
              지속 가능한 브랜딩을 위한 디지털 아키텍처 설계
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t-2 border-black">
              <div><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Period</p><p className="font-bold">24.08 ~ 25.01</p></div>
              <div><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Role</p><p className="font-bold">기획 PL 100%</p></div>
              <div className="col-span-1"><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Collab</p><p className="font-bold text-sm whitespace-pre-line">고객사, 디자인 및 개발자 협업</p></div>
              <div className="bg-yellow-400 p-4 rounded-sm"><p className="text-[10px] text-black uppercase font-black mb-1">Goal</p><p className="font-bold text-sm leading-tight">새로운 브랜드 비전을 반영한 웹사이트 리뉴얼</p></div>
            </div>
          </div>
        </section>

        {/* STEP 1. 문제점 파악 */}
        <section className="py-24 bg-zinc-950 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-yellow-400 font-bold text-sm">STEP 01</span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 italic">문제점 파악</h2>
            </div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7 relative">
                <div className="absolute -top-4 left-4 z-20 bg-blue-600 text-white px-4 py-2 text-xs font-bold rounded-full shadow-lg">
                  회사소개서 책자를 그대로 옮겨놓은 구조
                </div>
                <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
                  <ImageWithFallback src="/images/05.png" className="w-full object-cover" />
                </div>
              </div>
              <div className="md:col-span-5 space-y-6">
                <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-400">
                  <p className="text-gray-400 text-sm mb-2">Pain Point</p>
                  <p className="text-lg italic font-medium">공급자 편의에 매몰되어 사용자 경험이 거세된 구조적 한계</p>
                </div>
                <div className="text-gray-400 leading-relaxed text-sm md:text-base space-y-4">
                  <p>기존 웹사이트는 사용자 경험에 대한 고려가 없는 <strong>내부 운영자 중심의 업무 보조 도구</strong>였습니다.</p>
                  <p>브랜드 가치를 전달하는 채널로서의 기능을 상실하고 <strong>단편적인 기업 정보만을 나열하는 수동적인 브로슈어 역할</strong>에 그치고 있었습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 2. IA */}
        <section className="py-24 bg-white" style={{ wordBreak: 'keep-all' }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-blue-600 font-bold text-sm uppercase tracking-widest block mb-2">STEP 02</span>
              <h2 className="text-3xl md:text-5xl font-black text-black mb-8 tracking-tight">Information Architecture</h2>
              <div className="inline-block relative">
                <p className="relative z-10 bg-blue-100 text-blue-600 px-8 py-3 rounded-full font-extrabold text-sm md:text-base shadow-sm border border-blue-200">
                  일회성 정보 나열을 넘어, 지속적인 브랜드 서사를 위한 IA 수립
                </p>
                <div className="absolute inset-0 bg-orange-300 blur-xl opacity-20 -z-10"></div>
              </div>
              <div className="max-w-3xl mt-8 text-gray-600 leading-relaxed font-medium text-lg">
                단편적인 기업 정보의 단순 나열에서 벗어나, 브랜드의 비전과 지향점이 사용자에게 자연스럽게 전달되는
                <span className="text-black font-bold border-b-2 border-blue-600">‘스토리텔링형 정보 구조’</span>를 설계하는데 집중했습니다.
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 mb-20">
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="whitespace-nowrap px-3 py-1 bg-gray-200 text-gray-600 text-[11px] font-black rounded uppercase">As-Is</span>
                  <h4 className="font-bold text-gray-500 tracking-tight">한정된 유저에게 일회적, 획일화된 정보만을 제공하는 구조</h4>
                </div>
                <div className="relative aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden border border-gray-200 grayscale hover:grayscale-0 transition-all duration-700 shadow-inner">
                  <ImageWithFallback src="/images/05.png" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="group">
                <div className="flex items-center gap-2 mb-4">
                  <span className="whitespace-nowrap px-3 py-1 bg-blue-100 text-blue-600 text-[11px] font-black rounded uppercase">To-Be</span>
                  <h4 className="font-bold text-black tracking-tight">기업의 아이덴티티를 투영한 새로운 IA 체계 수립</h4>
                </div>
                <div className="relative aspect-[16/10] bg-white rounded-2xl overflow-hidden border-[3px] border-blue-600 shadow-[0_20px_50px_rgba(234,179,8,0.15)] transition-transform duration-500 group-hover:-translate-y-2">
                  <ImageWithFallback src="/images/06.png" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            <div className="bg-zinc-50 rounded-[2rem] p-8 md:p-14 border border-gray-100">
              <div className="grid md:grid-cols-3 gap-12">
                {[
                  { id: "01", title: "메뉴 레이블링 재설계", desc: "내부 직원들에게만 익숙한 비즈니스 용어를 걷어내고 사용자 지향적 언어로 전환" },
                  { id: "02", title: "스토리텔링 메뉴 신설", desc: "브랜드의 과거와 현재, 미래 가치가 자연스럽게 흐를 수 있는 새로운 서사 구조 구축" },
                  { id: "03", title: "정보와 이야기의 결합", desc: "단순 정보 전달을 넘어 사용자의 탐색 동선을 고려한 유기적인 UX 플로우 설계" }
                ].map((item) => (
                  <div key={item.id} className="relative">
                    <span className="text-4xl font-black text-orange-200 absolute -top-6 -left-2 opacity-50">{item.id}</span>
                    <h5 className="text-gray-900 font-black mb-3 relative z-10 text-lg">{item.title}</h5>
                    <p className="text-sm text-gray-600 leading-relaxed font-medium italic">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

{/* STEP 03. 브랜드 컨셉 & 인터랙션 전략 */}
<section className="py-24 bg-zinc-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    {/* 제목 및 소타이틀: 좌측 정렬 */}
    <div className="mb-16">
      <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 03</span>
      <h2 className="text-3xl md:text-5xl font-black text-black mb-6">인터랙션을 활용한 자연스러운 브랜드 인지</h2>
      <p className="max-w-3xl text-gray-600 text-lg leading-relaxed break-keep">
        사용자가 정보를 탐색하는 모든 접점에서 기업의 정체성을 무의식적으로 경험하도록 플로우를 설계했습니다.
        기업 심볼의 형상을 인터랙션 모티프로 사용하여 웹 탐색을 지루하지 않도록 했습니다.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white p-8 rounded-2xl border-t-4 border-t-blue-500 shadow-sm relative group">
        <h4 className="text-lg font-black text-zinc-900 mb-3 italic">역동적인 섹션 전환</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">
          기업 심볼의 형상을 활용한 탭 전환과 상하 스크롤 애니메이션을 통해 브랜드 이미지를 연속적으로 노출합니다.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border-t-4 border-t-blue-500 shadow-sm relative">
        <h4 className="text-lg font-black text-zinc-900 mb-3 italic">인터랙티브 내비게이션</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">
          우측 내비게이션 바와 섹션 배너에 로고 모티프를 결합하여 사용자의 시선 흐름에 따라 정체성을 학습시킵니다.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl border-t-4 border-t-blue-500 shadow-sm relative">
        <h4 className="text-lg font-black text-zinc-900 mb-3 italic">무의식적 브랜드 인식</h4>
        <p className="text-zinc-500 text-sm leading-relaxed">
          직접적인 로고 노출 대신, 인터랙션 단계에 브랜드 모티브를 결합하여 거부감 없는 브랜드 인식을 유도합니다.
        </p>
      </div>
    </div>


    {/* 추가된 연결 요소: 화살표 및 안내 문구 */}
    <div className="py-16 flex flex-col items-center">
      <div className="w-px h-12 bg-gradient-to-b from-blue-600 to-transparent mb-4"></div>
      <div className="flex items-center gap-3 text-blue-600 animate-bounce mb-4">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
      <p className="text-sm md:text-base font-black text-zinc-400 tracking-[0.2em] uppercase">
        자연스러운 탐색 유도와 브랜드 각인
      </p>
    </div>

    {/* 3. 하단 프로토타입 영역: 2단 그리드 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      <div className="relative group">
        <div className="relative aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-xl border border-zinc-200">
          <ImageWithFallback 
            src="/images/image 50.png" 
            className="w-full h-full object-cover" 
          />
        </div>
        <p className="mt-4 text-sm font-bold text-zinc-400">기획 논리 장표</p>
      </div>

      <div className="relative group">
        <div className="relative aspect-[4/3] bg-white rounded-[2rem] overflow-hidden shadow-xl border border-zinc-200">
          <img 
            src="/images/1684.gif" 
            alt="Interaction Prototype"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="mt-4 text-sm font-bold text-zinc-400">로고를 형상화한 인터랙션</p>
      </div>


  </div>
  </div>
</section>
{/* STEP 04. 비주얼 큐레이션 및 프로젝트 완결 */}
<section className="py-24 bg-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-left mb-16">
      <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 04</span>
      <h2 className="text-3xl md:text-5xl font-black text-black mb-6">전략적 비주얼 큐레이션 및 퀄리티 컨트롤</h2>
      <p className="max-w-3xl text-gray-600 text-lg leading-relaxed break-keep">
        디자인 컨셉의 방향성을  <strong>전체 기획 전략에 부합하는 최적의 비주얼을 선별하고 고도화</strong>하는데 집중했습니다.
        단순한 컨펌을 넘어, 브랜드의 미래지향적 가치가 모든 이미지 요소에 녹아들 수 있도록 밀착 가이드를 제공하여 산출물의 완성도를 확보했습니다.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
      <div className="space-y-8">
        <div className="border-l-4 border-blue-600 pl-6">
          <h4 className="text-xl font-bold text-zinc-900 mb-2">기획 의도 기반의 비주얼 필터링</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">
            디자인 파트에서 도출한 다양한 시안 중, <strong>사용자 흐름(User Flow)과 브랜드 톤앤매너에 가장 적합한 결과물을 선별</strong>했습니다. 
            브랜드 컬러의 비중, 오브젝트 형상 등 세부 요소를 기획적 관점에서 점검하여 시각적 일관성을 유지했습니다.
          </p>
        </div>
<div className="border-l-4 border-zinc-200 pl-6">
  <h4 className="text-xl font-bold text-zinc-900 mb-2">비주얼 고도화 디자인 협업</h4>
  <p className="text-zinc-500 text-sm leading-relaxed whitespace-pre-line">
    빅 비주얼 중심의 미래지향적 브랜딩을 위해 Midjourney를 활용한 이미지 생성 및 고도화 작업에 참여했습니다. 
    스토리텔링의 밀도를 높이는 최적의 비주얼을 도출하고자 프롬프트 생성 결과물을 검증했으며
    최종 결과물의 완성도를 위해 디자인 팀 및 고객사와 긴밀하게 소통하며 이미지의 구도, 여백, 톤앤매너를 정교하게 큐레이션했습니다. 
    이러한 능동적 협업을 통해 기획적 의도와 디자인적 미학이 완벽히 동기화된 브랜드 경험을 구현했습니다.
  </p>
</div>
      </div>

{/* 큐레이션 결과물 강조 영역: 미드저니 프롬프트 엔지니어링 레이아웃 */}
      <div className="relative group">
        <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800 min-h-[360px] flex flex-col justify-between">
          {/* 상단 윈도우 컨트롤러 */}
          <div className="flex gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          </div>
          
          <div className="flex-grow overflow-hidde">
            <p className="text-blue-400 font-mono text-xs mb-4 uppercase tracking-widest opacity-70">Prompt Engineering</p>
            <code className="text-zinc-300 font-mono text-sm leading-relaxed block overflow-hidden">
              <span className="text-pink-500">/imagine prompt:</span> A modern "Welfit Lounge," 
              blending wellness and technology. The interior features seamless glass walls, 
              high-tech devices, and minimalist design. <span className="text-zinc-500">...</span>
              <br /><br />
              <span className="text-emerald-400">--ar 16:9 --v 6.0 --stylize 250</span>
            </code>
          </div>

          {/* 키워드 태그 영역 */}
          <div className="mt-8 flex flex-wrap gap-2">
            {['Visual-Curation', 'AI-Generation', 'Direct-Guiding'].map((tag) => (
              <span key={tag} className="text-[10px] font-mono bg-zinc-800 text-zinc-400 px-2 py-1 rounded border border-zinc-700">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 오버레이 플로팅 배지 */}
        <div className="absolute -top-4 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-zinc-100 max-w-[240px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[10px] font-black text-zinc-800 uppercase tracking-tighter">프롬프트 예시</span>
          </div>
          <p className="text-[11px] text-zinc-500 leading-tight">
            * 보안 규정에 따라 최종 결과물 대신 이미지 생성에 사용한 실제 프롬프트를 게시합니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
{/* STEP 4. 최종 결과 하단: 산출물 및 소감 섹션 */}
        <section className="py-24 bg-white border-t border-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            
            {/* 상단: 기획문서 텍스트(좌) + 이미지 스택(우) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              {/* 왼쪽: 기획문서 설명 */}
              <div className="space-y-6">
                <h4 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight">
                  구축 단계별 표준 산출물 작성 <br/>안정적 오픈 기반 마련
                </h4>
                <p className="text-zinc-500 text-lg leading-relaxed">
                프로젝트의 시작부터 종료까지 <strong>기획 단계별 필수 산출물을 꼼꼼하게 작성</strong>하여 원활한 협업 환경을 조성했습니다. 
  프론트와 어드민의 IA를 정교하게 설계하고, 상세한 디스크립션을 포함한 화면설계서를 기반으로 개발 효율을 높였습니다. 
  또한, 테스트 시나리오 작성 및 수행을 통해 오픈 전 결함을 점검하고, 실제 운영에 필요한 매뉴얼을 제작하여 안정적인 상용 런칭을 준비했습니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
            {["진척보고서", "프론트, 어드민 IA", "화면설계서", "오픈 시나리오", "QA 및 통합 테스트 케이스"].map(tag => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-[11px] font-bold text-zinc-500">{tag}</span>
            ))}
                </div>
              </div>
      {/* 우측 이미지 스택 영역 */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* 레이어 1~3 */}
        <div className="absolute w-full max-w-[200px] aspect-[3/4] bg-white rounded-xl shadow-sm border border-zinc-100 transform -rotate-[22deg] -translate-x-1/2 left-[30%] opacity-20 overflow-hidden ">
          <ImageWithFallback src="/images/image 52.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full max-w-[220px] aspect-[3/4] bg-white rounded-xl shadow-md border border-zinc-200 transform -rotate-12 -translate-x-1/4 left-[40%] opacity-40 overflow-hidden ">
          <ImageWithFallback src="/images/image 53.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full max-w-[240px] aspect-[3/4] bg-white rounded-xl shadow-lg border border-zinc-200 transform rotate-12 translate-x-1/3 left-[45%] opacity-60 overflow-hidden ">
          <ImageWithFallback src="/images/image 54.png" className="w-full h-full object-cover" />
        </div>
        
        {/* 최상단 메인 레이어 */}
        <div className="absolute w-full max-w-[340px] aspect-[16/10] bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-zinc-200 transform rotate-2 z-10 overflow-hidden flex items-center justify-center group hover:rotate-0 transition-all duration-500 cursor-pointer">
          <ImageWithFallback src="/images/image 51.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity "></div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded border border-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-black text-zinc-800 tracking-tighter ">기획 산출물 일부 발췌</span>
          </div>
        </div>
      </div>
    </div>

            {/* 하단: 프로젝트 소감 (한 줄 가로 배치) */}
            <div className="w-full p-10 bg-zinc-900 rounded-3xl relative overflow-hidden shadow-2xl">
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                   <div className="relative z-10">
                      <h4 className="text-lg font-black mb-4 text-yellow-400">프로젝트 소감</h4>
                      <p className="text-sm text-gray-300 leading-relaxed italic mb-6">"공급자 중심의 단순 정보 나열에서 벗어나, 사용자가 탐색을 통해 브랜드 가치를 자연스럽게 학습하도록 돕는 스토리텔링형 구조를 설계하는 데 집중했습니다. 
  이야기를 담는 틀이 웹 브랜딩을 결정짓는 핵심 요소임을 다시금 깨달았으며, 비주얼 컨셉과 아키텍처, 미디어 제작 방향이 원활하게 한 방향을 향할 때 
  비로소 의도했던 브랜드 경험의 질이 완성된다는 것을 배울 수 있었습니다."</p>
                      <div className="pt-4 border-t border-zinc-700 flex justify-between items-center">
                        <span className="text-xs font-bold text-white">기획 기여도 100%</span>
                      </div>
                   </div>
                   </div>
              {/* 배경 장식 요소 */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            </div>
          </div>
        </section>
        

        <section className="px-6 py-32 bg-white text-center">
          <Link to="/project/2" className="group inline-flex flex-col items-center">
            <span className="text-gray-400 font-bold text-sm mb-4 uppercase tracking-widest">다음 프로젝트</span>
            <span className="text-3xl font-black text-black group-hover:text-yellow-400 transition-colors italic">B2B 제조기업 리뉴얼 →</span>
          </Link>
        </section>
      </div>
      <Footer />
    </div>
  );
}