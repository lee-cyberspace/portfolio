import React from 'react';

export function Contact() {
  return (
    <div className="w-full bg-white">
      {/* Contact 섹션 */}
      <section className="min-h-[80vh] flex flex-col justify-center py-24">
        
        {/* 1. 상단 소개 문구 (중앙 정렬 박스) */}
        <div className="max-w-5xl w-full mx-auto px-6 mb-12 space-y-10 text-left">
          <h2 className="text-2xl md:text-3xl leading-tight">
            <span className="font-black text-black bg-yellow-400 px-3 py-1 inline-block italic tracking-tighter">
              함께 성장하는 공유의 가치<br />
              사용자를 향한 합리적인 설계
            </span>
          </h2>
          <div className="text-xl md:text-2xl leading-relaxed text-gray-500 font-medium space-y-1 tracking-tight">
            구축부터 운영까지 발로 뛰며 얻은 실전 감각을 바탕으로,<br />
            동료와는 합리적으로 소통하고 유저에게는 최적의 UI 경험을 선사하는<br />
            기획자가 되겠습니다.
          </div>
        </div>
        
        {/* 2. 가로로 꽉 차는 검정 라인 (Hero와 동일 규격) */}
        <div className="w-full border-t-[6px] border-black"></div>

        {/* 3. 하단 감사 인사 및 연락처 (중앙 정렬 박스) */}
        <div className="max-w-5xl w-full mx-auto px-6 mt-12">
          <div className="text-left space-y-12">
            <p className="text-6xl md:text-[5rem] font-black text-black tracking-tighter italic leading-none">
              감사합니다.
            </p>

            <div className="space-y-8 pt-8">
              <h3 className="text-xl font-black uppercase tracking-[0.2em] text-gray-400">Contact</h3>
              <div className="flex flex-col md:flex-row gap-4 items-start justify-start">
                <a 
                  href="mailto:jee_hyun@naver.com" 
                  className="w-full md:w-auto min-w-[280px] flex items-center justify-center bg-black text-white px-10 py-5 rounded-sm font-bold text-lg hover:bg-zinc-800 transition-all cursor-pointer"
                >
                  jee_hyun@naver.com
                </a>

                <a 
                  href="tel:+821012345678" 
                  className="w-full md:w-auto min-w-[280px] flex items-center justify-center border-2 border-black text-black px-10 py-5 rounded-sm font-bold text-lg hover:bg-gray-50 transition-all cursor-pointer"
                >
                  +82 10-1234-5678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}