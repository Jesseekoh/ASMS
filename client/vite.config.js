import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'process.env.VITE_API_BASE_URL': JSON.stringify(
//       process.env.VITE_API_BASE_URL
//     ),
//   },
// })

export default defineConfig(({ command, mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')
  return {
    // vite config
    plugins: [react()],
    define: {
      VITE_API_BASE_URL: JSON.stringify(env.VITE_API_BASE_URL),
    },
  }
})
