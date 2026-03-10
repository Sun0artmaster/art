import { Artwork, Category } from "./types";

// img_Art 폴더의 모든 이미지 파일을 가져와 배열로 자동 생성
const imageModules = import.meta.glob("./src/assets/img_art/*.{jpg,jpeg,png,webp,gif}", {
  eager: true,
}) as Record<string, { default: string }>;

// img_Art 폴더의 메타데이터 JSON 파일 로드
const metadataModules = import.meta.glob("./src/assets/img_art/*.json", {
  eager: true,
}) as Record<string, { default: Record<string, any> }>;

function normalizeName(path: string) {
  const name = path.split("/").pop() || "";
  return name.replace(/\.[^/.]+$/, "");
}

function getCategoryValue(categoryString: string | undefined): Category {
  switch (categoryString?.toUpperCase()) {
    case "PAINTING":
      return Category.PAINTING;
    case "DRAWING":
      return Category.DRAWING;
    case "DIGITAL":
      return Category.DIGITAL;
    case "SCULPTURE":
      return Category.SCULPTURE;
    case "ALL":
      return Category.ALL;
    default:
      return Category.PAINTING; // 기본값
  }
}

function getMetadata(baseFileName: string) {
  const metadataPath = `./src/assets/img_art/${baseFileName}.json`;
  const metadataFile = metadataModules[metadataPath];
  return metadataFile?.default;
}

export const INITIAL_ARTWORKS: Artwork[] = Object.keys(imageModules).map(
  (key, idx) => {
    const imageUrl = imageModules[key].default;
    const baseFileName = normalizeName(key);
    const metadata = getMetadata(baseFileName);

    return {
      id: String(idx + 1),
      title: metadata?.title || baseFileName,
      category: getCategoryValue(metadata?.category) || Category.PAINTING,
      year: metadata?.year || "",
      medium: metadata?.medium || "",
      dimensions: metadata?.dimensions || "",
      description: metadata?.description || "",
      imageUrl,
    };
  },
);
