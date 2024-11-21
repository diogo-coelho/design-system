import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { globSync } from 'glob'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: './tsconfig.json',
    }),
    {
      name: 'copy-dts',
      writeBundle() {
        const distDir = path.resolve(__dirname, 'dist', 'types')

        if (!fs.existsSync(distDir)) {
          fs.mkdirSync(distDir, { recursive: true })
        }

        const dtsFiles = fs
          .readdirSync(path.resolve(__dirname, 'src/types'))
          .filter((file) => file.endsWith('.d.ts'))
          .map((file) => path.resolve(__dirname, 'src/types', file))

        // Copiar os arquivos .d.ts para a pasta dist
        dtsFiles.forEach((file) => {
          const dest = path.resolve(distDir, path.basename(file))
          fs.copyFileSync(file, dest)
        })
      },
    },
  ],
  resolve: {
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: Object.fromEntries(
        globSync(['src/components/**/index.tsx', 'src/main.ts']).map((file) => {
          // This remove `src/` as well as the file extension from each
          // file, so e.g. src/nested/foo.js becomes nested/foo
          const entryName = path.relative(
            'src',
            file.slice(0, file.length - path.extname(file).length)
          )
          // This expands the relative paths to absolute paths, so e.g.
          // src/nested/foo becomes /project/src/nested/foo.js
          const entryUrl = fileURLToPath(new URL(file, import.meta.url))
          return [entryName, entryUrl]
        })
      ),
      output: {
        entryFileNames: '[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.scss')) {
            const scssName = path.basename(assetInfo.name, '.scss')
            console.log('scssName')
            return `assets/styles/${scssName}.css`
          }
          return 'assets/[name][extname]'
        },
        globals: {
          react: 'React',
          'react-dom': 'React-dom',
          'react/jsx-runtime': 'react/jsx-runtime',
        },
        exports: 'named',
      },
    },
  },
})
