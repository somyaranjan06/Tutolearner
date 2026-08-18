import next from "eslint-config-next";

const eslintConfig = [
  ...(Array.isArray(next) ? next : [next]),
  {
    ignores: [".next/**", "node_modules/**", "public/**"],
  },
];

export default eslintConfig;
