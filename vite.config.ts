import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const commonConfig = {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };

  if (mode === 'lib') {
    return {
      ...commonConfig,
      plugins: [react()], // Remove tailwindcss plugin for library build
      build: {
        lib: {
          entry: {
            index: './src/index.ts',
            styles: './src/styles.ts',
            'tailwind-preset': './src/tailwind-preset.js'
          },
          name: 'UIComponents',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'class-variance-authority', 'clsx', 'tailwind-merge', 'tailwindcss', '@tailwindcss/vite'],
          output: {
            entryFileNames: '[name].js',
            assetFileNames: (assetInfo) => {
              if (assetInfo.name && assetInfo.name.endsWith('.css')) {
                return 'styles.css';
              }
              return 'assets/[name][extname]';
            }
          }
        }
      }
    };
  }
  
  return commonConfig;
});
