import { Artwork, Category } from "./types";

// img_Art 폴더의 모든 이미지 파일을 가져와 배열로 자동 생성
const imageModules = import.meta.glob("./img_art/*.{jpg,jpeg,png,webp,gif}", {
  eager: true,
}) as Record<string, { default: string }>;

// img_Art 폴더의 메타데이터 JSON 파일 로드
const metadataModules = import.meta.glob("./img_art/*.json", {
  eager: true,
}) as Record<string, { default: Record<string, any> }>;

function normalizeName(path: string) {
  const name = path.split("/").pop() || "";
  return name.replace(/\.[^/.]+$/, "");
}

function getMetadata(fileName: string) {
  // 메타데이터 파일명 구성 (같은 이름의 .json 찾기)
  const metaKey = `./img_art/${fileName}.json`;

  if (metadataModules[metaKey]) {
    return metadataModules[metaKey].default;
  }

  return null;
}

export const INITIAL_ARTWORKS: Artwork[] = Object.keys(imageModules).map(
  (key, idx) => {
    const imageUrl = imageModules[key].default;
    const baseFileName = normalizeName(key);
    const metadata = getMetadata(baseFileName);

    return {
      id: String(idx + 1),
      title: metadata?.title || baseFileName,
      category: metadata?.category || Category.PAINTING,
      year: metadata?.year || "",
      medium: metadata?.medium || "",
      dimensions: metadata?.dimensions || "",
      description: metadata?.description || "",
      imageUrl,
    };
  },
);
