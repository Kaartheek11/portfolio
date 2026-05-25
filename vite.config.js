import process from 'node:process'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const isUserPage = repoName?.endsWith('.github.io')
const base = process.env.PAGES_BASE_PATH ?? (repoName && !isUserPage ? `/${repoName}/` : '/')

// https://vite.dev/config/
export default defineConfig({
  base,
  plugins: [react()],
})
