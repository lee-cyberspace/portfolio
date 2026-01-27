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
<p className="text-lg leading-relaxed">
  구축부터 운영까지 발로 뛰며 얻은 실전 감각을 바탕으로,<br className="hidden md:block" /> {' '}
  동료와는 합리적으로 소통하고 유저에게는 최적의 UI 경험을 선사하는<br className="hidden md:block" /> {' '}
  기획자가 되겠습니다.
</p>  
        </div>


{/* 3. 하단 감사 인사 및 연락처 (중앙 정렬 박스) */}
<div className="max-w-5xl w-full mx-auto px-6 mt-12">
  {/* 부모 div에 items-center를 추가하여 자식인 버튼을 중앙으로 모읍니다 */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
    {/* 이메일 버튼: w-fit을 추가하여 텍스트 사이즈에 맞게 가변되도록 설정 */}
    <a 
      href="mailto:jhlee.workspace@gmail.com" 
      className="w-fit px-8 py-4 bg-black text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2"
    >
      <span>📧</span> 협업제안 및 문의 메일 보내기
    </a>
  </div>
            </div>
      </section>
      </div>
  );
}