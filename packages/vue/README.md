# @m3-expressive/vue

Material 3 Expressive components, design tokens and dynamic color theming for Vue 3.

## Installation

```bash
npm install @m3-expressive/vue @m3-expressive/styles
```

## Usage

```vue
<script setup>
import '@m3-expressive/styles'
import '@m3-expressive/styles/fonts.css'
import { M3Button, useTheme } from '@m3-expressive/vue'

const { setSeed } = useTheme()
</script>

<template>
  <M3Button variant="filled" icon="add">Create</M3Button>
</template>
```

## Components

- **Actions**: `M3Button`, `M3IconButton`, `M3ButtonGroup`, `M3SplitButton`, `M3Fab`
- **Communication**: `M3Badge`, `M3Icon`, `M3LoadingIndicator`, `M3LinearProgress`, `M3CircularProgress`
- **Containment**: `M3Card`, `M3CardActionArea`, `M3CardHeader`, `M3CardContent`, `M3CardActions`, `M3Divider`
- **Selection & Inputs**: `M3Switch`, `M3Checkbox`, `M3Radio`, `M3Slider`, `M3TextField`
- **Directives**: `v-ripple`
- **Composables**: `useTheme`
