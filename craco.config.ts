import path from "path";

export default {
  webpack: {
    // 配置路径别名
    alias: {
      "@": path.join(__dirname, "src"),
    },
  },
};
