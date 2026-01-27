import { Link } from "react-router-dom";
import { useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from "react";
import { GNB } from "./gnb";
import { Footer } from "./footer";

export function ProjectDetail3() {
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
              AI 학습분석 리포트 <br/>대시보드 구축
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 mb-12 font-medium">
              정교한 시각화 데이터로 효율적이고 밀접한 학습관리를
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-black">
              <div><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Period</p><p className="font-bold">19.08 ~ 20.02</p></div>
              <div><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Role</p><p className="font-bold">PM 및 기획100%</p></div>
              <div className="col-span-1"><p className="text-[10px] text-gray-400 uppercase font-black mb-2 tracking-widest">Collab</p><p className="font-bold text-sm">학습관리조직, AI 데이터팀, 디자인, 개발</p></div>
<div className="bg-yellow-400 p-4 rounded-sm"><p className="text-[10px] text-black uppercase font-black mb-1">Goal</p>
    <p className="font-bold text-sm leading-tight text-black">데이터 시각화 및 분석 지표 고도화</p>
  </div>
            </div>
          </div>
        </section>

        {/* STEP 1. 문제점 파악 (As-Is 분석) */}
        <section className="py-24 bg-zinc-950 text-white overflow-hidden">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-16">
              <span className="text-yellow-400 font-bold text-sm">STEP 01</span>
              <h2 className="text-3xl md:text-5xl font-black mt-2 italic">문제점 파악</h2>
            </div>
            
            <div className="grid md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-7">
                <div className="rounded-lg overflow-hidden shadow-2xl border border-white/10">
                  <ImageWithFallback src="/images/15.png" className="w-full object-cover" />
                </div>
                <p className="mt-4 text-zinc-500 text-sm">구시대적인 백오피스: 단순 테이블 형태의 리스트 위주 구조</p>
              </div>
              <div className="md:col-span-5 space-y-6">
                <div className="bg-zinc-900 p-6 rounded-xl border-l-4 border-yellow-500">
                  <p className="text-gray-400 text-sm mb-2">Pain Point</p>
                  <p className="text-lg italic font-medium">"데이터는 잘 맞지도 않고, 상담에 쓸 유용한 지표가 없어요"</p>
                </div>
                <div className="text-gray-400 leading-relaxed text-sm md:text-base space-y-4">
                  <p>기존 시스템은 오류가 많아 고객 신뢰가 낮은 <strong>단순 진도율, 학습률 등 단편적 수치</strong>만을 제공했습니다.</p>
                  <p>학습관리교사는 학생의 상태를 파악하기 위해 <strong>여러 번 클릭하여 팝업을 띄워야 했으며</strong>, 표 형태의 UI는 직관적인 상담을 방해하는 요소였습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* STEP 2. 해결점 찾기 (사용자 리서치 - 실제 문서 활용) */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-12">
              <div className="flex-1">
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 02</span>
                <h2 className="text-3xl md:text-5xl font-black text-black">사용자 리서치 및 니즈 도출</h2>
                <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                  학습관리교사 <strong>40명을 대상으로 심층 인터뷰</strong>를 진행했습니다. 
                  단순 요구사항 청취를 넘어, 실무 부서의 실제 페인포인트를 분석하여 
                  <strong> '상담 활용도를 높이는 유효 지표'</strong>를 도출하는 것에 집중했습니다.
                </p>
                
                {/* 실제 인터뷰 현황 요약 */}
                <div className="mt-8 bg-zinc-50 p-6 rounded-2xl border border-zinc-100">
                  <h4 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    인터뷰 그룹 및 구성
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-zinc-600">
                    <div className="p-3 bg-white rounded-lg border border-zinc-200">
                      <p className="font-bold text-zinc-900">저학년부 (키즈, 1~2학년)</p>
                      <p className="text-xs">상담 편의성 중심 니즈</p>
                    </div>
                    <div className="p-3 bg-white rounded-lg border border-zinc-200">
                      <p className="font-bold text-zinc-900">고학년부 (3~6학년)</p>
                      <p className="text-xs">학습 성취도 분석 중심 니즈</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 실제 인터뷰지 및 분석 문서 이미지 배치 */}
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute -top-6 -left-6 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold z-10 shadow-xl">
                  실제 인터뷰 진행 산출물
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <ImageWithFallback src="/images/image 30.png" className="w-full rounded-xl shadow-2xl border border-zinc-200" />
                    <p className="text-[10px] text-zinc-400 mt-2 text-center">인터뷰 그룹 및 일시 관리</p>
                  </div>
                  <div className="transform rotate-2 translate-y-8 group-hover:rotate-0 group-hover:translate-y-0 transition-all duration-500">
                    <ImageWithFallback src="/images/image 31.png" className="w-full rounded-xl shadow-2xl border border-zinc-200" />
                    <p className="text-[10px] text-zinc-400 mt-2 text-center">요구사항 및 기술 이슈 분석</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 도출된 핵심 인사이트 (Venn Diagram 분석) */}
            <div className="mt-20">
              <div className="text-center mb-12">
                <h4 className="text-xl font-bold text-zinc-900">도출된 핵심 리뉴얼 방향</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 bg-blue-50 rounded-2xl border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-blue-900">01</div>
                  <h4 className="font-black text-blue-900 mb-4 text-xl">가공된 학습지표 설계</h4>
                  <ul className="space-y-3 text-blue-800/80 text-sm font-medium leading-relaxed">
                    <li>• 메뉴/학년/과목별 통계 세분화 및 추이 데이터 제공</li>
                    <li>• 평소 학습 패턴을 반영한 '예상 학습 완료 시점' 알림</li>
                    <li>• 진단평가 점수 변화 및 또래 대비 성취도 지표 수립</li>
                  </ul>
                </div>
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-zinc-900">02</div>
                  <h4 className="font-black text-zinc-900 mb-4 text-xl">상담 최적화 UI/UX</h4>
                  <ul className="space-y-3 text-zinc-600 text-sm font-medium leading-relaxed">
                    <li>• 한 눈에 학습 수행여부를 판별하는 인포그래픽 도입</li>
                    <li>• 텍스트 인지 부하를 줄이기 위한 이모티콘/컬러 시스템</li>
                    <li>• 교사별 주요 관리 항목을 고정하는 개인화 기능</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

 {/* STEP 3. 해결점 구체화 (데이터 정책 및 AI 협업) */}
        <section className="py-24 bg-zinc-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 03</span>
              <h2 className="text-3xl md:text-5xl font-black text-black mb-6">데이터 정합성 및 정책 수립</h2>
<p className="text-gray-600 leading-relaxed whitespace-pre-line">
  AI 데이터팀과 협업하여 <strong className="text-black">신규 분석 지표의 산출 로직과 예외 처리 정책</strong>을 정의했습니다.{"\n"}
  모든 데이터는 상담 정합성을 위해 철저한 검증 과정을 거쳤습니다.
</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* 정책 문서 이미지 영역 (블러 처리 느낌의 스타일 적용) */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-2xl rounded-3xl"></div>
                <div className="relative space-y-4">
                  <div className="bg-white p-2 rounded-xl shadow-xl border border-zinc-200 transform -rotate-1">
                    <div className="relative overflow-hidden rounded-lg">
                      {/* 블러 처리된 실제 데이터 정의서/정책서 이미지 */}
                      <ImageWithFallback src="/images/18.png" className="w-full filter blur-[2px] hover:blur-0 transition-all duration-700 cursor-help" />
                      <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
                        <span className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold text-zinc-800 shadow-sm border border-zinc-200">
                          🔒 내부 데이터 처리 정책서 (Confidential)
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-zinc-400 text-center italic">※ 실제 수식 및 상세 정책은 대외비로 블러 처리되었습니다.</p>
                </div>
              </div>

              {/* 기획적 노력 강조 */}
              <div className="space-y-10">
                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">01</span>
                    <h5 className="font-black text-xl group-hover:text-blue-600 transition-colors">신규 데이터 수집 및 정제 협업</h5>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">
                    AI 데이터팀과 협업하여 기존에 수집되지 않던 <strong>행동 로그 기반의 새로운 데이터 항목</strong>을 발굴했습니다.
                    학습 진입 경로, 문항별 체류 시간 등 상담에 유의미한 원천 데이터를 선별하여 집계 기준을 수립했습니다.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">02</span>
                    <h5 className="font-black text-xl group-hover:text-blue-600 transition-colors">지표별 데이터 처리 정책 선언</h5>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">
                    단순 평균값이 아닌 <strong>'또래 평균 대비 성취도', '예상 학습 완료일'</strong> 등 복합 지표의 산출 로직을 정의했습니다.
                    학년 불일치 데이터, 중도 퇴소자 데이터 등 <strong>예외 상황에 대한 처리 정책</strong>을 선언하여 데이터 신뢰도를 확보했습니다.
                  </p>
                </div>

                <div className="group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold">03</span>
                    <h5 className="font-black text-xl group-hover:text-blue-600 transition-colors">내부 공감대 형성 및 테스트</h5>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed pl-11">
                    정의된 정책을 개발팀 및 실무 부서에 배포하고 <strong>공통 기준 마련을 위한 기술 협의</strong>를 주도했습니다.
                    파일럿 테스트를 통해 데이터 정합성을 꼼꼼하게 검증하여 오픈 후 현장 혼선을 최소화했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

{/* STEP 4. 최종 결과 (획기적인 개선 결과) */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="text-blue-600 font-bold text-sm tracking-widest uppercase block mb-2">STEP 04</span>
                <h2 className="text-3xl md:text-5xl font-black text-black mb-6">데이터 시각화</h2>
                <p className="text-gray-600 leading-relaxed whitespace-pre-line">디자인팀과 협업하여 <strong className="text-black">상담 현장의 실질적인 도구로 쓰일 수 있도록<br/>
                디자인 시스템이 반영된 시각화 인텔리전스 대시보드</strong>를 구축했습니다.</p>
              </div>
            </div>

{/* 메인 비주얼: Before & After 대비 (높이 최적화 버전) */}
            <div className="mb-32">
              {/* items-start를 사용하여 각 카드가 컨텐츠 높이에 맞게 조절되도록 설정 */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
                
                {/* 왼쪽: As-Is 카드 (컨텐츠에 맞게 높이 축소) */}
                <div className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 shadow-sm">
                  <div className="mb-6">
                    <span className="text-[10px] font-black text-zinc-400 uppercase tracking-tighter px-2 py-1 bg-zinc-200/50 rounded">As-Is</span>
                    <h4 className="text-lg font-bold text-zinc-400 mt-3">구시대적 테이블 구조</h4>
                    <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                      파편화된 정보와 불필요한 팝업 클릭으로 <br/>직관적인 상태 파악이 불가능했던 구조
                    </p>
                  </div>
                  {/* mt-auto를 제거하여 이미지 위쪽 여백을 없앰 */}
                  <div className="rounded-xl overflow-hidden shadow-sm border border-zinc-200 grayscale opacity-60">
                    <ImageWithFallback src="/images/image 18.png" className="w-full h-auto" />
                  </div>
                </div>

                {/* 오른쪽: To-Be 카드 (포인트 테두리 및 그림자 강조) */}
                <div className="p-8 bg-white rounded-2xl border-2 border-blue-500 shadow-xl relative overflow-hidden">
                  <div className="mb-6">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-tighter px-2 py-1 bg-blue-50 rounded">To-Be</span>
                    <h4 className="text-lg font-bold text-black mt-3">백오피스 시스템 최초로 캐릭터, 컬러디자인 도입</h4>
                    <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                      한 페이지 내에서 학생의 모든 학습 상태(수행률, 성취도, 추이)를 <br/>즉각 판별할 수 있도록 통합
                    </p>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg border border-blue-100">
                    <ImageWithFallback src="/images/02학습_학습률_1계획학습수행률.jpg" className="w-full h-auto" />
                  </div>
                </div>

              </div>
            </div>


            {/* 상세 기능별 After 이미지 그리드 (카드 사이즈 축소) */}
            <div className="grid md:grid-cols-2 gap-16 max-w-4xl mx-auto"> {/* 그리드 전체 너비 축소 */}
              {/* 성취도 분석 뷰 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-2">
                   <h5 className="font-black text-lg text-zinc-900">다각도 성취도 분석</h5>
                   <span className="text-[10px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">성적 뷰</span>
                </div>
                <div className="aspect-[4/5] max-w-[520px] mx-auto rounded-xl overflow-hidden shadow-md border border-zinc-100 bg-zinc-50 group">
                  <ImageWithFallback 
                    src="/images/03평가_1월별전체평균.jpg" 
                    className="w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed px-2 text-center">
                  또래 평균 대비 강점/약점 과목을 레이더 차트로 시각화하여 보완 영역을 제시합니다.
                </p>
              </div>

              {/* 상세 학습 추이 뷰 */}
              <div className="space-y-4">
                <div className="flex justify-between items-center px-2">
                   <h5 className="font-black text-lg text-zinc-900">과목별 학습 히스토리</h5>
                   <span className="text-[10px] font-bold text-blue-600 px-2 py-0.5 bg-blue-50 rounded">상세 뷰</span>
                </div>
                <div className="aspect-[4/5] max-w-[520px] mx-auto rounded-xl overflow-hidden shadow-md border border-zinc-100 bg-zinc-50 group">
                  <ImageWithFallback 
                    src="/images/03평가_2과목별.jpg" 
                    className="w-full h-full object-top object-cover group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed px-2 text-center">
                  월별 점수 변화 추이와 상세 평가 내역을 매칭하여 학습 성취도 하락 구간을 분석합니다.
                </p>
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
                  시스템의 기본기를 다지고 <br/>사용성을 높인 방대한 기획 문서들
                </h4>
                <p className="text-zinc-500 text-lg leading-relaxed">
                <strong>데이터 항목 정의서, 처리 정책서, UI 설계서</strong> 등 100여 페이지의 기획서를 통해 데이터의 정합성과 시스템 안정성을 확보했습니다.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {["데이터 정의서", "지표별 데이터 처리기준안", "화면설계서", "사용자 매뉴얼"].map(tag => (
                    <span key={tag} className="px-3 py-1 bg-zinc-100 border border-zinc-200 rounded-md text-[11px] font-bold text-zinc-500">{tag}</span>
                  ))}
                </div>
              </div>
      {/* 우측 이미지 스택 영역 */}
      <div className="relative h-[400px] flex items-center justify-center">
        {/* 레이어 1~3 */}
        <div className="absolute w-full max-w-[200px] aspect-[3/4] bg-white rounded-xl shadow-sm border border-zinc-100 transform -rotate-[22deg] -translate-x-1/2 left-[30%] opacity-20 overflow-hidden ">
          <ImageWithFallback src="/images/34.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full max-w-[220px] aspect-[3/4] bg-white rounded-xl shadow-md border border-zinc-200 transform -rotate-12 -translate-x-1/4 left-[40%] opacity-40 overflow-hidden ">
          <ImageWithFallback src="/images/33.png" className="w-full h-full object-cover" />
        </div>
        <div className="absolute w-full max-w-[240px] aspect-[3/4] bg-white rounded-xl shadow-lg border border-zinc-200 transform rotate-12 translate-x-1/3 left-[45%] opacity-60 overflow-hidden ">
          <ImageWithFallback src="/images/18.png" className="w-full h-full object-cover" />
        </div>
        
        {/* 최상단 메인 레이어 */}
        <div className="absolute w-full max-w-[340px] aspect-[16/10] bg-white rounded-xl shadow-[0_30px_60px_rgba(0,0,0,0.18)] border border-zinc-200 transform rotate-2 z-10 overflow-hidden flex items-center justify-center group hover:rotate-0 transition-all duration-500 cursor-pointer">
          <ImageWithFallback src="/images/23.png" className="w-full h-full object-cover" />
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
                      <p className="text-sm text-gray-300 leading-relaxed italic mb-6">"방대한 데이터 속에서 핵심 지표를 추출하고 시각적 질서를 부여하여, 데이터에 숨겨진 '가치'를 발견했습니다. 이는 단순한 서비스 런칭을 넘어 데이터를 상담의 강력한 전략적 자산으로 탈바꿈시킨 경험이었으며, 기획자의 설계 능력이 어떻게 데이터의 비즈니스 가치를 결정짓는지 배울 수 있었습니다."</p>
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
          <Link to="/project/1" className="group inline-flex flex-col items-center">
            <span className="text-gray-400 font-bold text-sm mb-4 uppercase tracking-widest">다음 프로젝트</span>
            <span className="text-3xl font-black text-black group-hover:text-yellow-400 transition-colors italic">글로벌 F&B 브랜드 웹사이트 구축 →</span>
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}