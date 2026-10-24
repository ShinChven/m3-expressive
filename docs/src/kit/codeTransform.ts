import type { Framework } from './framework'

function toVueTemplate(jsx: string): string {
  // In Vue 3 <script setup>, imported components are used directly
  const out = jsx
    // Convert {false} to :prop="false"
    .replace(/([a-zA-Z0-9]+)=\{false\}/g, ':$1="false"')
    .replace(/([a-zA-Z0-9]+)=\{true\}/g, '$1')
    .replace(/([a-zA-Z0-9]+)=\{([0-9.]+)\}/g, ':$1="$2"')
    // Convert onClick to @click
    .replace(/onClick=\{([^}]+)\}/g, '@click="$1"')

  // Indent template lines
  const indented = out
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n')

  return `<template>\n${indented}\n</template>`
}

function toHtmlSnippet(jsx: string): string {
  // Basic translation of common components to native HTML + M3 classes
  if (jsx.includes('Button')) {
    const variantMatch = jsx.match(/variant="([^"]+)"/)
    const variant = variantMatch ? variantMatch[1] : 'filled'
    const labelMatch = jsx.match(/>([^<]+)<\//)
    const label = labelMatch ? labelMatch[1] : 'Button'
    return `<button class="m3-button" data-variant="${variant}">\n  <span class="m3-button__label">${label}</span>\n</button>`
  }
  return `<!-- Material 3 Expressive (CSS) -->\n${jsx}`
}

export function formatFrameworkCode(
  rawCode: string,
  framework: Framework,
  imports: string[] = [],
): string {
  if (framework === 'react') {
    return rawCode
  }
  if (framework === 'vue') {
    const scriptHeader = imports.length
      ? `<script setup>\nimport { ${imports.join(', ')} } from '@m3-expressive/vue'\n</script>\n\n`
      : ''
    return `${scriptHeader}${toVueTemplate(rawCode)}`
  }
  return toHtmlSnippet(rawCode)
}
