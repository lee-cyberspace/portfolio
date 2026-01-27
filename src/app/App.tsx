import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/scroll-to-top";
import { GNB } from "./components/gnb";
import { Hero } from "./components/hero";
import { Career } from "./components/career";
import { Skills } from "./components/skills";
import { Projects } from "./components/projects";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

// 분리된 프로젝트 상세 컴포넌트들
import { ProjectDetail1 } from './components/project-detail1';
import { ProjectDetail2 } from './components/project-detail2';
import { ProjectDetail3 } from './components/project-detail3';


import { AboutPage } from "./components/about-page";
import { CareerPage } from "./components/career-page";

// 메인 홈 컴포넌트
function Home() {
  return (
    <div className="w-full flex flex-col min-h-screen">
      <GNB />
      <div className="pt-20 flex-grow">
        <Hero />
        <Career />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

// 최종 App 컴포넌트 (하나로 통합)
export default function App() {
  return (
    <BrowserRouter>
      {/* 페이지 이동 시 최상단으로 스크롤 이동 */}
      <ScrollToTop /> 
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* 일반 페이지 */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/career" element={<CareerPage />} />
        
        {/* 프로젝트별 개별 라우팅: 파일을 분리했으므로 :id 대신 명확한 경로 사용 */}
        <Route path="/project/1" element={<ProjectDetail1 />} />
        <Route path="/project/2" element={<ProjectDetail2 />} />
        <Route path="/project/3" element={<ProjectDetail3 />} />
      </Routes>
    </BrowserRouter>
  );
}