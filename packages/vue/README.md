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
import { Button, useTheme } from '@m3-expressive/vue'

const { setSeed, setDark } = useTheme()
</script>

<template>
  <Button variant="filled" icon="add">Create</Button>
</template>
```

> All components are exported both directly (e.g. `Button`) and with the `M3` prefix (e.g. `M3Button`) for template flexibility.

## Components

- **Actions**: `Button`, `IconButton`, `ButtonGroup`, `SplitButton`, `Fab`
- **Communication**: `Badge`, `Icon`, `LoadingIndicator`, `LinearProgress`, `CircularProgress`
- **Containment**: `Card`, `CardActionArea`, `CardHeader`, `CardContent`, `CardActions`, `Divider`
- **Selection & Inputs**: `Switch`, `Checkbox`, `Radio`, `Slider`, `TextField`
- **Data**: `ListView` (virtualized list; standard, segmented; single and multiple selection)
- **Directives & Primitives**: `Ripple`, `v-ripple` directive
- **Composables**: `useTheme`
- **Core Utilities**: Re-exports all dynamic color, shape, and spring utilities from `@m3-expressive/core`
