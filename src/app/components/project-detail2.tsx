import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";
import { GNB } from "./gnb";
import { Footer } from "./footer";

export function ProjectDetail2() {
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
            <h1 className="text-4xl md:text-7xl font-black text-black mt-4 mb-8 tracking-tighter leading-tight">
              B2B 제조기업의 <br/>브랜딩 및 웹 리뉴얼
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 font-medium">
              딱딱한 사출 기술에서 친근한 일상의 가치로, 비즈니스 언어의 재정의
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-black">
              <div><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Period</p><p className="font-bold">21.10 ~ 22.02</p></div>
              <div><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Role</p><p className="font-bold">PM 및 기획100%</p></div>
              <div className="col-span-1"><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Collab</p><p className="font-bold text-sm">고객사, 디자인 및 개발자 협업</p></div>
              <div className="bg-yellow-400 p-4 rounded-sm"><p className="text-[10px] text-black uppercase font-black mb-1">Goal</p><p className="font-bold text-sm leading-tight text-blck">B2B 밸류 고객 확장 및 브랜드 리포지셔닝</p></div>
            </div>
          </div>
        </section>

{/* 프로젝트 1번/2번 공통 적용 가능한 레이아웃 구조 */}
<section className="py-24 bg-zinc-950 text-white overflow-hidden">
  <div className="max-w-6xl mx-auto px-6">
    <div className="mb-16">
      <span className="text-yellow-400 font-bold text-sm tracking-widest">STEP 01</span>
      <h2 className="text-3xl md:text-5xl font-black mt-2 italic tracking-tighter">문제점 파악</h2>
    </div>
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
                  <ImageWithFallback src="/images/1.png" className="w-full object-cover" />
                </div>
                <p className="mt-4 text-zinc-500 text-sm">공급자 중심의 웹사이트: 난해한 설명과 제품만 노출되는 복합한 UI</p>
              </div>
              <div className="md:col-span-5 space-y-6">
                <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-gray-400 text-sm mb-2">Pain Point</p>
                  <p className="text-lg italic font-medium">"담당자만 아는 제품명, 일반 고객은 이해하기 어려운 사출 기술 설명뿐입니다"</p>
                </div>
                <div className="text-gray-400 leading-relaxed text-sm md:text-base space-y-4">
    <p>기존 사이트는 <strong className="font-bold">'구매 고객'만을 위한 기능적 플랫폼</strong>에 머물러 있었습니다.</p>
          <p>나열식 제품 정보와 복잡한 전문 용어는 잠재 고객 및 일반 방문자에게 심리적 거리감을 주었으며, 기업의 확장된 사업 목표를 담아내기에 한계가 있었습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
{/* STEP 2. 해결책 찾기 (사용자 그룹 및 니즈 도출) */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    {/* 상단: 타이틀 및 전략 설명 (Full Width) */}
    <div className="mb-16">
      <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 02</span>
      <h2 className="text-3xl md:text-5xl font-black text-black leading-tight tracking-tighter">
        사용자 그룹 및 니즈 재정의
      </h2>
      <p className="mt-6 text-gray-600 text-lg leading-relaxed">
        거래처 담당자를 넘어 <strong className="text-black font-bold">구직자, 투자자, 파트너사 등 밸류 고객을 확장</strong>했습니다. 
        <br className="hidden md:block" />
        단순 제품 사양 검색을 넘어 '기업의 지속 가능성과 비전'을 확인하려는 각 그룹의 니즈를 분석하여 UIUX전략을 수립했습니다.
      </p>
    </div>

   {/* 섹션 전체 컨테이너: 최대 너비와 중앙 정렬 */}
<div className="max-w-6xl mx-auto px-6 py-12">
  
  {/* 하단: 픽토그램 기반 타겟 인포그래픽 (반응형 그리드) */}
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {[
      { emoji: "🤝", title: "구매/거래처", desc: "기술 사양과 신뢰도" },
      { emoji: "🎯", title: "잠재고객/대중", desc: "친근한 브랜드 경험" },
      { emoji: "📈", title: "투자자/파트너", desc: "ESG 경영 및 비전" },
      { emoji: "👨‍💻", title: "미래 인재", desc: "기업 문화 리서치" }
    ].map((item, idx) => (
      <div 
        key={idx} 
        className="bg-zinc-50 p-6 md:p-10 rounded-2xl border border-zinc-100 flex flex-col items-center text-center group hover:bg-blue-50 transition-all"
      >
        {/* 이모지 박스 */}
        <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <span className="text-2xl md:text-4xl">{item.emoji}</span>
        </div>
        
        {/* 타이틀 */}
        <h4 className="text-sm md:text-lg font-black text-zinc-900 mb-2">
          {item.title}
        </h4>
        
        {/* 설명 */}
        <p className="text-[10px] md:text-sm text-zinc-500 leading-tight break-keep">
          {item.desc}
        </p>
      </div>
    ))}
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
        사용자 페르소나별 최적화된 탐색 경로 및 정보 구조(IA) 수립
      </p>
    </div>

    {/* 이미지 배치 UI */}
    <div className="grid md:grid-cols-2 gap-8">
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white group hover:border-blue-100 transition-colors">
        <ImageWithFallback src="/images/image 42.png" className="w-full h-auto" />
      </div>
      <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-lg bg-white group hover:border-blue-100 transition-colors">
        <ImageWithFallback src="/images/image 43.png" className="w-full h-auto" />
      </div>
    </div>
  </div>
</section>

{/* STEP 03. 브랜드 컨셉 전략 (P3 레이아웃 + 기획 역량 상세 박스) */}
<section className="py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-12">
      <div className="flex-1">
        <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 03</span>
        <h2 className="text-3xl md:text-5xl font-black text-black">브랜드 컨셉 전략 수립</h2>
        <p className="mt-6 text-gray-600 text-lg leading-relaxed">
          관성적인 디자인 교체를 거부하고, <strong>B2B 제조 기업의 대중 친화 마케팅 사례를 집중 벤치마킹</strong>했습니다. 
          '왜 이 기업이 대중과 소통해야 하는가'에 대한 근거를 찾고, 
          딱딱한 기술력을 <strong>'일상의 가치'로 번역하는 컨셉 내러티브</strong>를 도출했습니다.
        </p>
        
        {/* 리서치 그룹 요약 (P3 스타일 유지) */}
        <div className="mt-8 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
          <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            벤치마킹 및 타겟 확장
          </h4>
          <div className="grid grid-cols-2 gap-4 text-sm text-zinc-600">
            <div className="p-3 bg-white rounded-lg border border-zinc-200">
              <p className="font-bold text-zinc-900">글로벌 B2B 사례 분석</p>
              <p className="text-xs">하이닉스, 라이크라 등</p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-zinc-200">
              <p className="font-bold text-zinc-900">밸류 고객 확장</p>
              <p className="text-xs">구직자, 투자자, 잠재고객</p>
            </div>
          </div>
        </div>
      </div>

      {/* 우측 이미지 플로팅 영역 */}
      <div className="w-full md:w-1/2 relative group">
        <div className="absolute -top-6 -left-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold z-10 shadow-xl">
          컨셉 전략 및 벤치마킹 자료
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
            <ImageWithFallback src="/images/48.png" className="w-full rounded-xl shadow-2xl border border-zinc-200" />
            <p className="text-[10px] text-zinc-400 mt-2 text-center">B2B 대중 친화 사례 분석</p>
          </div>
          <div className="transform rotate-2 translate-y-8 group-hover:rotate-0 group-hover:translate-y-0 transition-all duration-500">
            <ImageWithFallback src="/images/image 35.png" className="w-full rounded-xl shadow-2xl border border-zinc-200" />
            <p className="text-[10px] text-zinc-400 mt-2 text-center">브랜드 컨셉 방향성 도출</p>
          </div>
        </div>
      </div>
    </div>

    {/* 주안점 */}
    <div className="mt-20">
      <div className="text-center mb-12">
        <h4 className="text-xl font-bold text-zinc-900 tracking-tight">도출된 3대 전략 방향</h4>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-blue-500">
          <h4 className="text-lg font-black text-zinc-900 mb-3 italic">B2B 소통의 기준 확립</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">
            국내외 B2B 제조 기업의 <strong>대중 친화 마케팅 성공 사례를 수집</strong>했습니다. 하이닉스, 라이크라 등 B2B기업이지만 대중적인 브랜드의 내러티브를 분석하여 차별화된 소통 방식을 도출했습니다.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-blue-500">
          <h4 className="text-lg font-black text-zinc-900 mb-3 italic">거리감을 좁히는 UX 라이팅</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">
            공급자 중심 기술 용어를 <strong>'일상의 가치'로 전환</strong>했습니다. 난해한 전문 용어를 걷어내고, 친절하고 상세한 UX 라이팅을 통해 기업과 고객의 심리적 거리감을 좁혔습니다.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm hover:shadow-md transition-shadow border-t-4 border-t-blue-500">
          <h4 className="text-lg font-black text-zinc-900 mb-3 italic">기업의 미래 가치와 ESG 브랜딩</h4>
          <p className="text-zinc-500 text-sm leading-relaxed">
            구매자를 넘어 <strong>구직자, 투자자, 파트너사를 아우르는 고객 확장</strong>에 집중했습니다. ESG 가치와 비전을 전면에 배치하여 제조업의 이미지 한계를 쇄신할 창구를 마련했습니다.
          </p>
        </div>
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
        단순한 시각적 리뉴얼을 넘어,비즈니스의 지속 가능성을 설계하는 전략적 기획 집중
      </p>
      </div>
  </div>
</section>

<section className="py-24 bg-zinc-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="mb-20">
      <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 04</span>
      <h2 className="text-3xl md:text-5xl font-black text-black">실무 기획 및 구체화</h2>
    </div>

    {/* 01. 비주얼 플로우: 제품 중심에서 경험 중심으로 (순서 변경) */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
      <div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div className="relative group">
            <ImageWithFallback src="/images/image 40.png" className="w-full rounded-xl shadow-lg grayscale" />
            <div className="absolute top-2 left-2 bg-zinc-800 text-white text-[9px] px-2 py-1 rounded">BEFORE</div>
          </div>
          <ImageWithFallback src="/images/5.png" className="w-full rounded-xl shadow-lg" />
        </div>
        <div className="pt-12 space-y-4">
          <div className="relative group">
            <ImageWithFallback src="/images/image 41.png" className="w-full rounded-xl shadow-2xl border-2 border-blue-500" />
            <div className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] px-2 py-1 rounded font-bold">AFTER</div>
          </div>
          <ImageWithFallback src="/images/yodo.png" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <h3 className="text-2xl font-black text-zinc-900 mb-6">01. 시네마틱 비주얼 & 플로우 설계</h3>
        <p className="text-gray-600 leading-relaxed mb-6">
          공급자 중심의 메인 화면에서 탈피하여, <strong>사용자 경험 중심의 시네마틱 비주얼</strong>을 적용했습니다.
        </p>
        <ul className="space-y-4 text-sm text-zinc-600">
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">01</span>
            <span>브랜드 메시지와 연계된 <strong>소비재 이미지</strong>를 전면에 배치하여 진입장벽을 완화했습니다.</span>
          </li>
          <li className="flex gap-3">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">02</span>
            <span>탐색 과정에서 <strong>실제 부품의 기술력과 연결</strong>되는 스토리텔링 플로우를 구성했습니다.</span>
          </li>
          <li className="flex gap-3">
           <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">03</span>
            <span>상세 페이지에서 전문 실사를 노출하여 <strong>B2B 신뢰도</strong>를 확보했습니다.</span>
          </li>
        </ul>
      </div>
    </div>

    {/* 02. UX 라이팅: 기술의 가치 번역 */}
    <div>
      <div className="max-w-4xl mb-12">
        <h3 className="text-2xl font-black text-zinc-900 mb-6">02. UX 라이팅: 기술을 공감의 언어로 전환</h3>
<p className="text-gray-600 leading-relaxed">
    파편화된 기술 용어를 전문가와 비전문가 모두 공감할 수 있는 <strong>'일상의 언어'로 재설계</strong>했습니다. <br className="hidden md:block" />
    내러티브가 가미된 텍스트와 <strong>직관적 아이콘 시스템</strong>을 도입하여 <br className="hidden md:block" />
    정보 습득 시 발생하는 사용자의 인지 부하를 최소화하는데 집중했습니다.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* AS-IS */}
        <div className="p-8 bg-zinc-100 rounded-3xl border border-zinc-200">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-0.5 bg-zinc-400 text-white text-[9px] font-bold rounded uppercase">AS-IS</span>
          </div>
          <p className="text-zinc-500 font-medium leading-relaxed">
            “공압, 유압 2가지 실린더로 작업, 따로 냉각”
          </p>
          <div className="h-px bg-zinc-200 w-full my-4"></div>
          <p className="text-zinc-400 text-xs">전문용어만 사용한 불친절한 설명</p>
        </div>

        {/* TO-BE (아이콘 영역 간소화) */}
        <div className="p-8 bg-blue-600 rounded-3xl shadow-xl shadow-blue-100 relative">
          <div className="flex items-center gap-2 mb-6">
            <span className="px-2 py-0.5 bg-white text-blue-600 text-[9px] font-bold rounded uppercase">TO-BE</span>
          </div>
          
          <h4 className="text-white text-xl font-bold leading-snug mb-6">
            “다이렉트 팁 히터로 경험하지 못했던 최상의 퍼포먼스 구현”
          </h4>

          <ul className="mb-8 space-y-3 text-blue-50/80 text-sm">
            <li className="flex gap-2"><span>•</span><strong>고강성·고광택 레진</strong> 제품군 특화 설계</li>
            <li className="flex gap-2"><span>•</span> 내마모성 강화 소재로<strong>사출 트러블 최소화</strong></li>
            <li className="flex gap-2"><span>•</span><strong>정밀 근접 냉각</strong>이 가능한 최소 직경 설계</li>
          </ul>

          {/* 간소화된 아이콘 영역 */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <ImageWithFallback src="/images/image 38.png"></ImageWithFallback>
            <p className="text-[10px] text-blue-100/60 mt-3 text-center">직관적 인지를 돕는 아이콘 시스템</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* 프로젝트 산출물 스택 및 소감 섹션 */}
<section className="py-24 bg-white border-t border-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    
    {/* 1. 상단 역량 설명 & 이미지 스택 영역 */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h4 className="text-3xl md:text-4xl font-black text-zinc-900 leading-tight">
          전략 수립부터 운영 이행까지,<br/>
          프로젝트 전 과정을 책임
        </h4>
        <p className="text-zinc-500 text-lg leading-relaxed">
          단순 기획을 넘어 <strong>PM으로서 일정 수립 및 리스크 관리 등 프로젝트 전반을 매니징</strong>했습니다. 
          디자인·개발 파트와의 유기적인 협업 리딩은 물론, UI 기획부터 오픈 후 교육까지 <strong>기획 실무와 프로젝트 마무리까지 전담</strong>했습니다.
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {["프로젝트 관리(WBS)", "IA 정의", "사용자 흐름(User Flow)", "상세 화면설계", "QA 체크리스트", "운영 가이드"].map(tag => (
            <span key={tag} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-[11px] font-bold text-zinc-500 tracking-tight">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* 우측 이미지 스택 영역 */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* 레이어 1~3 */}
        <div className="absolute w-full max-w-[200px] aspect-[3/4] bg-white rounded-xl shadow-sm border border-zinc-100 transform -rotate-[22deg] -translate-x-1/2 left-[30%] opacity-20 overflow-hidden ">
          <ImageWithFallback src="/images/46.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full max-w-[220px] aspect-[3/4] bg-white rounded-xl shadow-md border border-zinc-200 transform -rotate-12 -translate-x-1/4 left-[40%] opacity-40 overflow-hidden ">
          <ImageWithFallback src="/images/45.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full max-w-[240px] aspect-[3/4] bg-white rounded-xl shadow-lg border border-zinc-200 transform rotate-12 translate-x-1/3 left-[45%] opacity-60 overflow-hidden ">
          <ImageWithFallback src="/images/44.png" className="w-full h-full object-cover" />
        </div>
        
        {/* 최상단 메인 레이어 */}
        <div className="absolute w-full max-w-[340px] aspect-[16/10] bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-zinc-200 transform rotate-2 z-10 overflow-hidden flex items-center justify-center group hover:rotate-0 transition-all duration-500 cursor-pointer">
          <ImageWithFallback src="/images/47.png" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity "></div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded border border-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[10px] font-black text-zinc-800 tracking-tighter ">기획 산출물 일부 발췌</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-24">
      {/* 하단: 프로젝트 소감 (너비 및 정렬 통일) */}
      <div className="w-full p-10 bg-zinc-900 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8 ">
          <div className="relative z-10 ">
            <h4 className="text-lg font-black mb-4 text-yellow-400">프로젝트 소감</h4>
            <p className="text-sm text-gray-300 leading-relaxed italic mb-6">
              "B2B 제조기업의 웹사이트 리뉴얼은 단순한 UI 교체가 아닙니다. 기업의 정체성을 재정의하고, 기술의 가치를 대중의 언어로 번역하여 지속 가능한 비즈니스 토대를 설계하는 과정이었습니다. PM으로서 다양한 이해관계를 조정하고, 기획 실무자로서 철학을 관철해 오픈까지 성공시킨 경험은 저를 전략적 기획자로 성장시키는 큰 동력이 되었습니다."
            </p>
            <div className="pt-4 border-t border-zinc-700 flex justify-between items-center ">
              <span className="text-xs font-bold text-white ">기획 기여도 100%</span>
            </div>
          </div>
        </div>
        
        {/* 배경 장식 요소 */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full "></div>
      </div>
    </div>

  </div>
</section>


        {/* 하단 프로젝트 이동 */}
        <section className="px-6 py-32 bg-white text-center">
          <Link to="/project/3" className="group inline-flex flex-col items-center">
            <span className="text-gray-400 font-bold text-sm mb-4 uppercase tracking-widest">다음 프로젝트</span>
            <span className="text-3xl font-black text-black group-hover:text-yellow-400 transition-colors italic">AI 학습분석 리포트 구축 →</span>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}