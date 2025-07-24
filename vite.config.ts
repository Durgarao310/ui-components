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
          entry: './src/index.ts',
          name: 'UIComponents',
          fileName: 'index',
          formats: ['es']
        },
        rollupOptions: {
          external: ['react', 'react-dom', 'class-variance-authority', 'clsx', 'tailwind-merge'],
          output: {
            globals: {
              react: 'React',
              'react-dom': 'ReactDOM',
              'class-variance-authority': 'cva',
              'clsx': 'clsx',
              'tailwind-merge': 'twMerge'
            }
          }
        }
      }
    };
  }
  
  return commonConfig;
});
