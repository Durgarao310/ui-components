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
      build: {
        lib: {
          entry: {
            index: './src/index.ts',
            styles: './src/styles.ts'
          },
          name: 'UIComponents',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'class-variance-authority', 'clsx', 'tailwind-merge'],
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
