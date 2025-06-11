import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import vue from '@astrojs/vue'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";


const traleLang = JSON.parse(fs.readFileSync('./src/languages/trale.tmLanguage.json', 'utf8'));

export default defineConfig({
  site: 'https://frankniujc.github.io/',
  integrations: [
    mdx(),
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    vue(),
  ],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, { test: "Table of contents" }]],
    shikiConfig: {
      themes: {
        light: 'github-light-default',
        dark: 'github-dark-default',
      },
      wrap: true,
      langs: [
        {
          id: 'trale',
          scopeName: 'source.trale',
          ...traleLang,
        },
      ],
    },
  },
})
