import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages 배포 시 리포지토리 이름을 base로 설정해야 합니다.
  // './'를 사용하면 상대 경로로 설정되어 대부분의 환경에서 호환됩니다.
  base: "/art/",
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  // 빌드 시 process.env.API_KEY를 실제 값으로 치환하도록 정의합니다.
  define: {
    "process.env.API_KEY": JSON.stringify(process.env.API_KEY),
  },
});
