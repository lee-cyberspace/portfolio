export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center bg-white">
      {/* 1. 상단 타이포그래피 영역 (중앙 정렬 박스) */}
      <div className="max-w-5xl w-full mx-auto px-6 mb-12 space-y-8">
        <div className="space-y-6">
          <p className="text-xl md:text-2xl text-gray-500 font-medium leading-relaxed tracking-tight">
            구축부터 운영까지의 풀 사이클 경험을 바탕으로,<p></p>
            사용자의 관점에서 UI를 설계합니다.
          </p>
        </div>
      </div>

      {/* 2. 가로로 꽉 차는 검정 라인 (박스 외부 독립) */}
      <div className="w-full border-t-[6px] border-black"></div>

      {/* 3. 이름 및 강조 문구 영역 (중앙 정렬 박스) */}
      <div className="max-w-5xl w-full mx-auto px-6 mt-12">
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-500 font-medium tracking-tight">
            프로젝트의{" "}
            <span className="font-black text-black bg-yellow-400 px-3 py-1 italic">
              완결
            </span>
            을 아는 기획자
          </p>
          <h1 className="text-3xl md:text-[5rem] font-black tracking-tighter leading-none">
            이지현
          </h1>
        </div>
      </div>
    </section>
  );
}