import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const r = (p) => resolve(__dirname, p)

// Multi-page build: every HTML entry must be listed so Vite bundles it.
export default defineConfig({
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: r('index.html'),
        gallery: r('gallery.html'),
        contact: r('contact.html'),
        newRoofs: r('services/new-roofs.html'),
        flatRoofs: r('services/flat-roofs.html'),
        leadwork: r('services/leadwork.html'),
        slateRoofing: r('services/slate-roofing.html'),
        upvcGuttering: r('services/upvc-guttering.html'),
        roofRepairs: r('services/roof-repairs.html'),
      },
    },
  },
})
