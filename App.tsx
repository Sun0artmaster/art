import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import ArtworkCard from "./components/ArtworkCard";
import ArtworkModal from "./components/ArtworkModal";
import { INITIAL_ARTWORKS } from "./constants";
import { Artwork, Category } from "./types";
import profileImage from "./src/assets/img_profile/Profile_artist_img.jpg";
import profileImage1 from "./src/assets/img_profile/Profile_artist_img(1).jpg";
import profileImage2 from "./src/assets/img_profile/Profile_artist_img(2).jpg";
import profileImage3 from "./src/assets/img_profile/Profile_artist_img(3).jpg";
import profileImage4 from "./src/assets/img_profile/Profile_artist_img(4).jpg";
import profileImage5 from "./src/assets/img_profile/Profile_artist_img(5).jpg";
import mainbackgroundimg from "./src/assets/img_profile/자연공감C-1_38x46__acrylic.jpg";

// App.tsx 상단에 추가
const subtleZoomStyle = `
  @keyframes subtleZoom {
    0% { transform: scale(1.05); }
    50% { transform: scale(1.15); }
    100% { transform: scale(1.05); }
  }
`;

const App: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>(INITIAL_ARTWORKS);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<Category>(Category.DRAWING);

  const filteredArtworks = useMemo(() => {
    if (filter === Category.ALL) return artworks;
    return artworks.filter((art) => art.category === filter);
  }, [artworks, filter]);

  const handleFilterChange = (newFilter: Category) => {
    setFilter(newFilter);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-black selection:text-white">
      <Navbar currentFilter={filter} onFilterChange={handleFilterChange} />

      <main className="flex-grow">
        {/* Hero Section */}
        {/* <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-22 flex flex-col items-center text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 serif tracking-tight">
            <span className="italic">‘ 자연공감 ’</span>
          </h1>
          <p className="text-2xl md:text-4xl font-bold mb-8 serif tracking-tight">
            Art is recreation of nature(reality)
          </p>
          <p className="max-w-2xl text-gray-500 text-lg leading-relaxed mb-12 font-light">
            자연 속에서 나의 존재가치를 찾다. 자연과 하나의 세계가 되어 느끼게
            되는 교감과 감성을 작품으로 재창조해 나가는 것, 그것이 바로
            예술이죠.
          </p>
        </header> */}

         <style>{subtleZoomStyle}</style> {/* 스타일 주입 */}
      
      <header className="relative overflow-hidden max-w-7xl mx-auto px-4 py-20 flex flex-col items-center text-center">
        {/* 배경 이미지 레이어 */}
        <div className="absolute inset-0 -z-10">
          <img 
            src={mainbackgroundimg}
            alt="background"
            className="w-full h-full object-cover opacity-40 filter blur-[3px]"
            style={{ animation: 'subtleZoom 15s infinite ease-in-out' }} // 애니메이션 직접 적용
          />
          {/* 그라데이션 오버레이: 위아래를 자연스럽게 뭉개줌 */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        {/* 기존 헤더 콘텐츠... */}
        <h1 className="text-4xl md:text-6xl font-bold mb-8 serif tracking-tight">
          <span className="italic">‘ 자연공감 ’</span>
        </h1>
            <p className="text-2xl md:text-4xl font-bold mb-8 serif tracking-tight">
            Art is recreation of nature(reality)
          </p>
          <p className="max-w-2xl text-gray-500 text-lg leading-relaxed mb-12 font-light">
            자연 속에서 나의 존재가치를 찾다. 자연과 하나의 세계가 되어 느끼게
            되는 교감과 감성을 작품으로 재창조해 나가는 것, 그것이 바로
            예술이죠.
          </p>
      </header>

        {/* Gallery Grid */}
        {filter !== Category.DRAWING && (
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
            <div className="masonry-grid">
              {filteredArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onClick={setSelectedArtwork}
                />
              ))}
            </div>
            {filteredArtworks.length === 0 && (
              <div className="text-center py-20 text-gray-400 italic">
                해당 카테고리의 작품이 준비 중입니다.
              </div>
            )}
          </section>
        )}

        {/* About Section */}
        {filter !== Category.PAINTING && (
          <section
            id="about"
            className="bg-white py-2 border-t border-gray-100"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="relative">
                  <img
                    src={profileImage}
                    alt="작가 안선영"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
                  />
                  <img
                    src={profileImage1}
                    alt="작가 안선영"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
                  />
                  <img
                    src={profileImage2}
                    alt="작가 안선영"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
                  />
                  <img
                    src={profileImage3}
                    alt="작가 안선영"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
                  />
                  <img
                    src={profileImage4}
                    alt="작가 안선영"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
                  />
                  <img
                    src={profileImage5}
                    alt="작가 안선영"
                    className="w-full grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl rounded-sm"
                  />
                  {/* Background accent for profile image */}
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-50 -z-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-8 serif">Profile</h2>

                  
                  <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                    
                    <p>
                      <strong>◈ 개인전 - 13회</strong>
                      <br />
                      &nbsp;&nbsp;- 제13회 (2024.5.9~5.12) 서울 아트페어 (서울
                      SETEC)
                      <br />
                      &nbsp;&nbsp;- 제12회 (2020.7.3~8.2) 코나 퀸즈 갤러리
                      초대전 (경기도 가평군)
                      <br />
                      &nbsp;&nbsp;- 제11회 (2018.1.20~26) L.A 올림픽 라이온스
                      클럽 초대전 (Ephatha Art Gallery)
                      <br />
                      &nbsp;&nbsp;- 제10회 (2013.10.26~) 시안갤러리 개관 기념전
                      (경기도 가평군)
                      <br />
                      &nbsp;&nbsp;- 제9회 (2012.2.1~28) 송파문화원 초대전 (서울)
                      <br />
                      &nbsp;&nbsp;- 제8회 (2010.10.19~24) KPAM 대한민국 미술제
                      (예술의 전당, 한가람미술관)
                      <br />
                      &nbsp;&nbsp;- 제7회 (2009.12.1~12.) 국민일보 초대전 (서울
                      여의도 국민일보사 갤러리)
                      <br />
                      &nbsp;&nbsp;- 제6회 (2008.9.1~9.10) 맥캔리 갤러리
                      개관기념초대전 (서울 역삼동)
                      <br />
                      &nbsp;&nbsp;- 제5회 (2008.4.19~4.26) 뉴욕 한인회 초대전
                      (뉴욕, 첼시)
                      <br />
                      &nbsp;&nbsp;- 제4회 (2006.10.15~11.15) Harmmorsjold Tower
                      초대전 (뉴욕, 맨하튼)
                      <br />
                      &nbsp;&nbsp;- 제3회 (2006.4.20~4.26) 뉴욕 중앙일보 초대전
                      (뉴욕, 퀸즈)
                      <br />
                      &nbsp;&nbsp;- 제2회 (2006.1.18~1.28) Ward Nasse 갤러리전
                      (뉴욕, 소호)
                      <br />
                      &nbsp;&nbsp;- 제1회 (2005.7.20~8.2) 리즈 갤러리 초대전
                      (한국, 남양주)
                      <br />
                      <br />
                      <strong>◈ 주요 단체전 및 수상 - 약 80회</strong>
                      <br />
                      &nbsp;&nbsp;- ‘Black and White’전 (뉴욕, Womb 갤러리)
                      <br />
                      &nbsp;&nbsp;- ’타워 49 outreach show’ 4인전 (뉴욕, 맨하튼
                      5th Ave.)
                      <br />
                      &nbsp;&nbsp;- ’people to people’ 3인전 (맨하튼 오픈센타)
                      <br />
                      &nbsp;&nbsp;- Columbia Hospital ‘Out Reach Show’ (뉴욕,
                      맨하튼 콜럼비아 대학병원)
                      <br />
                      &nbsp;&nbsp;- 아시아 13개국 대표 여성작가 13인전,
                      ‘Revelation’ (뉴욕, 아시아 문화 센터)
                      <br />
                      &nbsp;&nbsp;- ’The Professional Artists of Korea’ 백서
                      수록 및 ‘한국 미술전’
                      <br />
                      &nbsp;&nbsp;- ’대한민국 현대미술작가 업서’ 수록 및 기념전
                      (미술세계 창간 20주년 기념)
                      <br />
                      &nbsp;&nbsp;- ‘한국 유명화가 일본 북큐슈 초대전’ (일본
                      키타큐슈 갤러리)
                      <br />
                      &nbsp;&nbsp;- ‘대한민국 유명 화가 싱가포르 초대전’
                      (싱가포르 옥타곤 갤러리) 등<br />
                      &nbsp;&nbsp;- 일원회 100호 대작전 (세종문화회관) 5회
                      <br />
                      &nbsp;&nbsp;- 스위스 국교수립 50주년 기념전 및 스위스
                      평론가상 수상
                      <br />
                      &nbsp;&nbsp;- 미국 ‘아트 스튜던트 리그’ 클라스 쇼 ‘RED DOT
                      WINNER’ 선정
                      <br />
                      &nbsp;&nbsp;- 2023 경기미술협회 공로상 수상
                      <br />
                      &nbsp;&nbsp;- 2024 IAA (International Association of Art)
                      예술지도자상 수상
                      <br />
                      <br />
                      <strong>◈ 학력 및 수료</strong>
                      <br />
                      &nbsp;&nbsp;- 2004~2009 미국, 뉴욕 ’The Art Students
                      League of New York’
                      <br />
                      &nbsp;&nbsp;- 프랑스, 파리 ‘Academie de la Grande
                      Chaumiere’
                      <br />
                      &nbsp;&nbsp;- 홍익대학교 미술대학원 현대미술과정 수료
                      <br />
                      &nbsp;&nbsp;- 서울교육대학교 졸업
                      <br />
                      &nbsp;&nbsp;- 서울 창덕여자 중고등학교 졸업
                      <br />
                      <br />
                      <strong>◈ 주요 경력</strong>
                      <br />
                      &nbsp;&nbsp;- 한국미술협회 가평 지부장 역임
                      <br />
                      &nbsp;&nbsp;- 민주평화통일자문회의 가평군협의회 부회장
                      역임
                      <br />
                      &nbsp;&nbsp;- 시안갤러리 관장
                      <br />
                      &nbsp;&nbsp;- 한국예총 가평지부 수석부회장 역임
                      <br />
                      &nbsp;&nbsp;- 창미회 회장 역임
                      <br />
                      &nbsp;&nbsp;- (2010.12.2) 제2회 탈북청소년 돕기 ‘사랑나눔
                      희망콘서트’ 총기획 및 감독
                      <br />
                      &nbsp;&nbsp;- (2010~2021) 송파문화원 미술지도 강사 역임
                      <br />
                      &nbsp;&nbsp;- (2010~2012) 동부교육청 재능기부자
                      (현대미술사 강의)
                      <br />
                      &nbsp;&nbsp;- (2011~현재) 현대 미술사 강의 프로그램 (‘현대
                      미술의 이해’) 운영
                      <br />
                      &nbsp;&nbsp;- (2020~2021) 가평군 공공미술프로젝트 대표
                      (가평읍 철길공원 아트파크 조성)
                      <br />
                      &nbsp;&nbsp;- (2020~2021) 더불어민주당 문화예술 정책
                      부위원장
                      <br />
                      &nbsp;&nbsp;- (2020) 경기도지사상 표창
                      (민주평화통일자문회의)
                      <br />
                      &nbsp;&nbsp;- (2021) 대통령 표창 수여
                      (민주평화통일자문회의 의장상)
                      <br />
                      &nbsp;&nbsp;- (현재) 가평포럼 부회장, 가평지역정책개발원
                      회원
                      <br />
                      <br />
                      
                      <strong>◈ 주 소</strong>
                      <br />
                      &nbsp;&nbsp;경기도 가평군 설악면 묵안로 13 
                      <br />
                      <br />
                      <strong>◈ 연 락 처</strong>
                      <br />
                      &nbsp;&nbsp;시안갤러리 : 031 585 7234
                      <br />
                      &nbsp;&nbsp;HP : 010 7463 7233
                      <br />     
                      &nbsp;&nbsp;E-Mail : ahnsy807 @ naver.com
                      <br />
                    </p>
                  </div>

                  <h2 className="text-4xl font-bold mb-8 serif mt-8">
                    Artist Story
                  </h2>
                  <div className="space-y-6 text-gray-600 leading-relaxed text-lg font-light">
                    <p>
                      안선영 화백은 자연 속에서 평안함과 자유 의지의 발현, 그
                      속에서 자신의 존재적 가치를 느끼며 예술의 정체성을 구축해
                      나가고 있다. 마치 춤을 추듯, 음악의 선율을 그려내듯
                      말이다. 또한 다소 야수적인 강렬한 색상을 선호하지만, 때론
                      절제된 거칠지 않은 부드러움이 배어 나오는 색상을 사용한다.
                    </p>
                    <p>
                      파리, 뉴욕에서 미술을 공부한 유학파이다. 안 화백은 잭슨
                      폴락, 마크 로스코,죠지 오키프 같은 세계적 작가들이
                      작업하였던 뉴욕 미술학교(A.S.L)에서 약 5년간의 유학 생활을
                      하였는데, 그곳에서 미국 추상표현주의 유명 작가인 스승인
                      녹스 마틴(Knox Martin)을 만나 추상 세계에 눈을 뜨게
                      되었다. 또한 개념 주의 미술, 포스트모더니즘 미술등
                      실험적인 아방가르드 작품들이 넘쳐나는 맨해튼의 수많은
                      미술관과 챌시의 갤러리, 세계적인 아트페어를 찾아다니며
                      그것을 통해 점차 현대 미술에 대한 폭넓은 안목도 가지게
                      되었다.
                    </p>
                    {/*                     <div className="pt-8">
                      <button className="px-10 py-4 bg-black text-white text-[10px] uppercase tracking-[0.3em] hover:bg-gray-800 transition-all shadow-lg">
                        작가 노트 읽기
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {/* {filter !== Category.PAINTING && (
          <section id="contact" className="py-32 bg-gray-50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
              <h2 className="text-3xl font-bold mb-6 serif tracking-tight">
                작품 문의 및 의뢰
              </h2>
              <p className="text-gray-500 mb-12 font-light">
                맞춤형 작품 제작이나 갤러리 협업에 관심이 있으신가요? 프로젝트에
                대해 논의해 보세요.
              </p>
              <form
                className="space-y-6 text-left"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="성함"
                    className="w-full p-4 bg-white border border-gray-100 outline-none focus:border-black transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="이메일"
                    className="w-full p-4 bg-white border border-gray-100 outline-none focus:border-black transition-colors"
                  />
                </div>
                <textarea
                  placeholder="메시지 내용"
                  rows={6}
                  className="w-full p-4 bg-white border border-gray-100 outline-none focus:border-black transition-colors"
                ></textarea>
                <button className="w-full py-5 bg-black text-white uppercase tracking-[0.4em] text-[10px] font-bold hover:bg-gray-800 transition-all shadow-xl">
                  문의 보내기
                </button>
              </form>
            </div>
          </section>
        )} */}
      </main>

      {/* Footer */}
      {/*       <footer className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-widest text-gray-400">
            &copy; {new Date().getFullYear()} 안선영. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-medium">
            <a href="#" className="hover:text-black transition-colors">
              인스타그램
            </a>
            <a href="#" className="hover:text-black transition-colors">
              비핸스
            </a>
            <a href="#" className="hover:text-black transition-colors">
              아트시
            </a>
          </div>
        </div>
      </footer> */}

      {/* Overlays */}
      {selectedArtwork && (
        <ArtworkModal
          artwork={selectedArtwork}
          onClose={() => setSelectedArtwork(null)}
        />
      )}
    </div>
  );
};

export default App;
