<script lang="ts" setup>
import { ref } from 'vue'
import siteConfig from '@/site-config'
import { getLinkTarget } from '@/utils/link'

// Add props for the license label and author with default values
const props = defineProps({
  licenseLabel: {
    type: String,
    required: false,
    default: 'CC BY-NC-SA 4.0',
  },
  author: {
    type: String,
    default: siteConfig.author,
  },
})
</script>

<template>
  <footer class="w-full mt-18 pt-6 pb-8 max-w-3xl text-sm flex flex-col gap-4 border-main border-t !border-op-50 text-dark dark:text-white">
    <div v-if="siteConfig.footer.navLinks && siteConfig.footer.navLinks.length > 0" class="flex flex-wrap gap-4">
      <template v-for="(link, index) in siteConfig.footer.navLinks" :key="link.text">
        <a
          :aria-label="`${link.text}`" :target="getLinkTarget(link.href)" class="nav-link flex items-center"
          :href="link.href"
        >
          {{ link.text }}
        </a>
        <span v-if="index < siteConfig.footer.navLinks.length - 1" op-70> / </span>
      </template>
    </div>
    <div flex>
      {{ props.licenseLabel }}
      <span op-70>&nbsp;&nbsp;&copy;&nbsp;&nbsp;{{ new Date().getFullYear() }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ props.author }}</span>
    </div>
  </footer>
</template>