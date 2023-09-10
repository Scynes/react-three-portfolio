import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@components': '/src/components',
            '@assets': '/src/assets',
            '@common': '/src/common',
            '@services': '/src/services',
            '@hooks': '/src/hooks',
            '@interfaces': '/src/hooks'
        },
    },
})
