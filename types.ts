export enum Category {
  PAINTING = "Painting",
  DRAWING = "Drawing",
  DIGITAL = "Digital",
  SCULPTURE = "Sculpture",
  ALL = "All",
}

export const CategoryLabels: Record<Category, string> = {
  [Category.PAINTING]: "작품",
  [Category.DRAWING]: "프로필",
  [Category.DIGITAL]: "디지털",
  [Category.SCULPTURE]: "조각",
  [Category.ALL]: "전체보기",
};

export interface Artwork {
  id: string;
  title: string;
  category: Category;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  aiInsight?: string;
}

export interface Message {
  role: "user" | "model";
  text: string;
}
