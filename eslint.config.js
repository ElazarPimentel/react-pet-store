// eslint.config.js
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
        runtime: "automatic", // Usa el nuevo runtime automático de JSX
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off", // Desactiva esta regla ya que no es necesaria
      "react/jsx-uses-react": "off", // Desactiva esta regla
      "react/jsx-uses-vars": "error", // Asegura que las variables JSX se utilizan
      // Otros ajustes de reglas que puedas necesitar
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
