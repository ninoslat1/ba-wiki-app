import react from '@vitejs/plugin-react'
import { defineConfig } from '@tanstack/start/config'
import tailwindcss from '@tailwindcss/vite'
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    vite: {
        plugins: [
            tailwindcss()
        ],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, "app"),
            }
        },
    },
    server: {
        preset: "node-server",
        prerender: {
            routes: ['/'],
            crawlLinks: true
        }
    }
})
