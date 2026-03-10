import React, { useState, useMemo } from "react";
import Navbar from "./components/Navbar";
import ArtworkCard from "./components/ArtworkCard";
import ArtworkModal from "./components/ArtworkModal";
import { INITIAL_ARTWORKS } from "./constants";
import { Artwork, Category } from "./types";
import profileImage from "./src/assets/img_profile/Profile_artist_img.jpg";

const App: React.FC = () => {
  const [artworks, setArtworks] = useState<Artwork[]>(INITIAL_ARTWORKS);
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<Category>(Category.PAINTING);

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
        <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-22 flex flex-col items-center text-center">
          <h2 className="text-[10px] uppercase tracking-[0.5em] text-gray-400 mb-6">
            Portfolio
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 serif tracking-tight">
            {/* 보이지 않는 것을 <span className="italic">담다</span> */}
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
                  <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-gray-50 -z-10" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold mb-8 serif">작가 소개</h2>
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
      <footer className="bg-white py-12 border-t border-gray-100">
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
      </footer>

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
