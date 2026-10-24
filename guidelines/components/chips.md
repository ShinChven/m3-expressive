# Chips

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/chips](https://m3.material.io/components/chips)
> Last Updated: 2026-07-17T07:05:14.328Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use chips to show options for a specific context
- Four variants: assist, filter, input, and suggestion
- Chip elevation defaults to 0 but can be elevated if they need more visual separation

![4 chip variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzthj7vk-1.png?alt=media)

*Caption / Legend:*
1. Assist chip
2. Filter chip
3. Input chip
4. Suggestion chip

## Availability & resources

## Updates

**Aug 2024**

Updated stroke color from **outline** to **outline variant**.

![A chip with a clear outline is now a chip with a subtle outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sdpshu-02.png?alt=media)

*Caption / Legend:*
The stroke color was softened to improve visual hierarchy between chips and buttons

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Shape: Rounded rectangle
- Variants: Action chips have been separated into assist chips and suggestion chips. Choice chips are now a subset of filter chips

![M2 chip variants.](https://lh3.googleusercontent.com/2QvL9BG6dybkEq8-MxokwRvnU_5-Yxey0SZtSxa9o6KlczyP2t5hAtUxTyZRJbGF9i7m6oOrZCWKJT4CQikVZP3D0cxsKj0yYaMJT4QjnE5q=s1004)

*Caption / Legend:*
M2: Variants of chips are input, choice, filter, and action chips

![M3 chip variants.](https://lh3.googleusercontent.com/3W0HJhJSBgfi_3TWYvZlXCPDg42elT_0VwxJmTTK5l61ZFdC9l9mPQPqPcUOBXNIce2r3aDWGNECHLcoe41RXvv2rr1bjDL6BsCCvjkxUto=s1004)

*Caption / Legend:*
M3: Variants of chips updated to assist, filter, input, and suggestion chips

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and values.

#### Design Tokens: Chip - Assist

*For assist chips.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.assist-chip.elevated.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Assist chip elevated pressed container elevation |
| `md.comp.assist-chip.elevated.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Assist chip elevated focus container elevation |
| `md.comp.assist-chip.flat.focus.outline.color` | `md.sys.color.on-surface` | COLOR | Assist chip focus outline color |
| `md.comp.assist-chip.elevated.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Assist chip elevated hover container elevation |
| `md.comp.assist-chip.elevated.disabled.container.opacity` | - | OPACITY | Assist chip elevated disabled container opacity |
| `md.comp.assist-chip.elevated.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Assist chip elevated disabled container color |
| `md.comp.assist-chip.flat.disabled.outline.opacity` | - | OPACITY | Assist chip disabled outline opacity |
| `md.comp.assist-chip.flat.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Assist chip disabled outline color |
| `md.comp.assist-chip.elevated.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Assist chip elevated disabled container elevation |
| `md.comp.assist-chip.elevated.container.shadow-color` | `md.sys.color.shadow` | COLOR | Assist chip elevated container shadow color |
| `md.comp.assist-chip.elevated.container.color` | `md.sys.color.surface-container-low` | COLOR | Assist chip elevated container color |
| `md.comp.assist-chip.elevated.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Assist chip elevated container elevation |
| `md.comp.assist-chip.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Assist chip container surface tint |
| `md.comp.assist-chip.flat.outline.width` | 1dp | LENGTH | Assist chip container outline width |
| `md.comp.assist-chip.flat.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Assist chip container elevation |
| `md.comp.assist-chip.flat.outline.color` | `md.sys.color.outline-variant` | COLOR | Assist chip container outline color |
| `md.comp.assist-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Assist chip focus indicator offset |
| `md.comp.assist-chip.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Assist chip focus indicator thickness |
| `md.comp.assist-chip.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Assist chip focus indicator color |
| `md.comp.assist-chip.with-icon.dragged.icon.color` | `md.sys.color.primary` | COLOR | Assist chip with icon dragged icon color |
| `md.comp.assist-chip.dragged.label-text.color` | `md.sys.color.on-surface` | COLOR | Assist chip dragged label text color |
| `md.comp.assist-chip.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Assist chip dragged state layer opacity |
| `md.comp.assist-chip.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | Assist chip dragged state layer color |
| `md.comp.assist-chip.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Assist chip dragged container elevation |
| `md.comp.assist-chip.with-icon.pressed.icon.color` | `md.sys.color.primary` | COLOR | Assist chip with icon pressed icon color |
| `md.comp.assist-chip.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Assist chip pressed label text color |
| `md.comp.assist-chip.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Assist chip pressed state layer opacity |
| `md.comp.assist-chip.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Assist chip pressed state layer color |
| `md.comp.assist-chip.with-icon.focus.icon.color` | `md.sys.color.primary` | COLOR | Assist chip with icon focus icon color |
| `md.comp.assist-chip.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Assist chip focus label text color |
| `md.comp.assist-chip.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Assist chip focus state layer opacity |
| `md.comp.assist-chip.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Assist chip focus state layer color |
| `md.comp.assist-chip.with-icon.hover.icon.color` | `md.sys.color.primary` | COLOR | Assist chip with icon hover icon color |
| `md.comp.assist-chip.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Assist chip hover label text color |
| `md.comp.assist-chip.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Assist chip hover state layer opacity |
| `md.comp.assist-chip.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Assist chip hover state layer color |
| `md.comp.assist-chip.with-icon.disabled.icon.opacity` | - | OPACITY | Assist chip with icon disabled icon opacity |
| `md.comp.assist-chip.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Assist chip with icon disabled icon color |
| `md.comp.assist-chip.disabled.label-text.opacity` | - | OPACITY | Assist chip disabled label text opacity |
| `md.comp.assist-chip.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Assist chip disabled label text color |
| `md.comp.assist-chip.with-icon.icon.color` | `md.sys.color.primary` | COLOR | Assist chip icon color |
| `md.comp.assist-chip.with-icon.icon.size` | 18dp | LENGTH | Assist chip icon size |
| `md.comp.assist-chip.label-text.color` | `md.sys.color.on-surface` | COLOR | Assist chip label text color |
| `md.comp.assist-chip.label-text.type` | - | TYPOGRAPHY | Assist chip label text type |
| `md.comp.assist-chip.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Assist chip label text font |
| `md.comp.assist-chip.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Assist chip label text weight |
| `md.comp.assist-chip.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Assist chip label text size |
| `md.comp.assist-chip.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Assist chip label text line height |
| `md.comp.assist-chip.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Assist chip label text tracking |
| `md.comp.assist-chip.container.height` | 32dp | LENGTH | Assist chip container height |
| `md.comp.assist-chip.container.shape` | `md.sys.shape.corner.small` | SHAPE | Assist chip container shape |

#### Design Tokens: Chip - Filter

*For filter chips.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filter-chip.elevated.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Filter chip elevated hover container elevation |
| `md.comp.filter-chip.elevated.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filter chip elevated focus container elevation |
| `md.comp.filter-chip.with-trailing-icon.disabled.trailing-icon.opacity` | - | OPACITY | Filter chip with trailing icon disabled trailing icon opacity |
| `md.comp.filter-chip.with-leading-icon.disabled.leading-icon.opacity` | - | OPACITY | Filter chip with leading icon disabled leading icon opacity |
| `md.comp.filter-chip.elevated.disabled.container.opacity` | - | OPACITY | Filter chip elevated disabled container opacity |
| `md.comp.filter-chip.elevated.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filter chip elevated disabled container color |
| `md.comp.filter-chip.elevated.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip elevated disabled container elevation |
| `md.comp.filter-chip.with-trailing-icon.selected.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with trailing icon selected trailing icon color |
| `md.comp.filter-chip.with-trailing-icon.unselected.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with trailing icon unselected trailing icon color |
| `md.comp.filter-chip.with-leading-icon.unselected.leading-icon.color` | `md.sys.color.primary` | COLOR | Filter chip with leading icon unselected leading icon color |
| `md.comp.filter-chip.with-leading-icon.selected.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with leading icon selected leading icon color |
| `md.comp.filter-chip.elevated.selected.container.color` | `md.sys.color.secondary-container` | COLOR | Filter chip elevated (selected) container color |
| `md.comp.filter-chip.elevated.unselected.container.color` | `md.sys.color.surface-container-low` | COLOR | Filter chip elevated (unselected) container color |
| `md.comp.filter-chip.elevated.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filter chip elevated container elevation |
| `md.comp.filter-chip.elevated.container.shadow-color` | `md.sys.color.shadow` | COLOR | Filter chip elevated container shadow color |
| `md.comp.filter-chip.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Filter chip with icon disabled icon color |
| `md.comp.filter-chip.with-icon.disabled.icon.opacity` | - | OPACITY | Filter chip with icon disabled icon opacity |
| `md.comp.filter-chip.with-leading-icon.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Filter chip with leading icon disabled icon color |
| `md.comp.filter-chip.with-icon.selected.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with icon (selected) icon color |
| `md.comp.filter-chip.with-icon.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with icon (unselected) icon color |
| `md.comp.filter-chip.with-trailing-icon.trailing-icon.unselected.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) with trailing icon |
| `md.comp.filter-chip.with-leading-icon.leading-icon.unselected.color` | `md.sys.color.primary` | COLOR | Filter chip (unselected) with leading icon |
| `md.comp.filter-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Filter chip focus indicator offset |
| `md.comp.filter-chip.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filter chip focus indicator thickness |
| `md.comp.filter-chip.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Filter chip focus indicator color |
| `md.comp.filter-chip.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Filter chip container surface tint layer color |
| `md.comp.filter-chip.container.shadow-color` | `md.sys.color.shadow` | COLOR | Filter chip container shadow color |
| `md.comp.filter-chip.with-trailing-icon.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | Filter chip with trailing icon disabled icon color |
| `md.comp.filter-chip.with-leading-icon.unselected.dragged.leading-icon.color` | `md.sys.color.primary` | COLOR | Filter chip with leading icon (unselected) dragged icon color |
| `md.comp.filter-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with trailing icon (unselected) dragged icon color |
| `md.comp.filter-chip.with-leading-icon.selected.dragged.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with leading icon (selected) dragged icon color |
| `md.comp.filter-chip.with-trailing-icon.selected.dragged.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with trailing icon (selected) dragged icon color |
| `md.comp.filter-chip.with-leading-icon.unselected.pressed.leading-icon.color` | `md.sys.color.primary` | COLOR | Filter chip with leading icon (unselected) pressed icon color |
| `md.comp.filter-chip.with-trailing-icon.unselected.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with trailing icon (unselected) pressed icon color |
| `md.comp.filter-chip.with-leading-icon.selected.pressed.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with leading icon (selected) pressed icon color |
| `md.comp.filter-chip.with-trailing-icon.selected.pressed.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with trailing icon (selected) pressed icon color |
| `md.comp.filter-chip.with-leading-icon.unselected.focus.leading-icon.color` | `md.sys.color.primary` | COLOR | Filter chip with leading icon (unselected) focus icon color |
| `md.comp.filter-chip.with-trailing-icon.unselected.focus.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with trailing icon (unselected) focus icon color |
| `md.comp.filter-chip.with-leading-icon.selected.focus.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with leading icon (selected) focus icon color |
| `md.comp.filter-chip.with-trailing-icon.selected.focus.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with trailing icon (selected) focus icon color |
| `md.comp.filter-chip.with-icon.selected.dragged.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with icon (unselected) dragged icon color |
| `md.comp.filter-chip.with-icon.unselected.dragged.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with icon (unselected) dragged icon color |
| `md.comp.filter-chip.with-trailing-icon.selected.hover.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with trailing icon (selected) hover icon color |
| `md.comp.filter-chip.with-icon.selected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with icon (selected) pressed icon color |
| `md.comp.filter-chip.with-icon.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with icon (unselected) pressed icon color |
| `md.comp.filter-chip.with-leading-icon.selected.hover.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with leading icon (selected) hover icon color |
| `md.comp.filter-chip.with-trailing-icon.unselected.hover.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with trailing icon (unselected) hover icon color |
| `md.comp.filter-chip.with-icon.selected.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with icon (selected) focus icon color |
| `md.comp.filter-chip.with-icon.unselected.focus.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with icon (unselected) focus icon color |
| `md.comp.filter-chip.with-icon.selected.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip with icon (selected) hover icon color |
| `md.comp.filter-chip.with-icon.unselected.hover.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip with icon (unselected) hover icon color |
| `md.comp.filter-chip.with-leading-icon.unselected.hover.leading-icon.color` | `md.sys.color.primary` | COLOR | Filter chip with leading icon (unselected) hover icon color |
| `md.comp.filter-chip.elevated.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filter chip (Elevated style) pressed container elevation |
| `md.comp.filter-chip.flat.selected.hover.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filter chip (selected) hover container elevation |
| `md.comp.filter-chip.flat.unselected.hover.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip (unselected) hover container elevation |
| `md.comp.filter-chip.flat.selected.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip (selected) pressed container elevation |
| `md.comp.filter-chip.flat.unselected.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip (unselected) pressed container elevation |
| `md.comp.filter-chip.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) pressed label text color |
| `md.comp.filter-chip.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) pressed label text color |
| `md.comp.filter-chip.unselected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (unselected) pressed state layer color |
| `md.comp.filter-chip.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filter chip (unselected) pressed state layer opacity |
| `md.comp.filter-chip.selected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (selected) pressed state layer color |
| `md.comp.filter-chip.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filter chip (selected) pressed state layer opacity |
| `md.comp.filter-chip.container.shape` | `md.sys.shape.corner.small` | SHAPE | Filter chip container shape |
| `md.comp.filter-chip.container.height` | 32dp | LENGTH | Filter chip container height |
| `md.comp.filter-chip.flat.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip container elevation |
| `md.comp.filter-chip.flat.unselected.outline.color` | `md.sys.color.outline-variant` | COLOR | Filter chip (unselected) outline color |
| `md.comp.filter-chip.flat.unselected.outline.width` | 1dp | LENGTH | Filter chip (unselected) outline width |
| `md.comp.filter-chip.flat.selected.container.color` | `md.sys.color.secondary-container` | COLOR | Filter chip (selected) outline color |
| `md.comp.filter-chip.flat.selected.outline.width` | undefineddp | LENGTH | Filter chip (selected) outline width |
| `md.comp.filter-chip.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Filter chip label text font |
| `md.comp.filter-chip.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Filter chip label text line height |
| `md.comp.filter-chip.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Filter chip label text size |
| `md.comp.filter-chip.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Filter chip label text weight |
| `md.comp.filter-chip.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Filter chip label text tracking |
| `md.comp.filter-chip.label-text.type` | - | TYPOGRAPHY | Filter chip label text type style |
| `md.comp.filter-chip.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) label text color |
| `md.comp.filter-chip.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) label text color |
| `md.comp.filter-chip.with-icon.icon.size` | 18dp | LENGTH | Filter chip with icon icon size |
| `md.comp.filter-chip.flat.disabled.unselected.outline.color` | `md.sys.color.on-surface` | COLOR | Filter chip disabled (unselected) outline color |
| `md.comp.filter-chip.flat.disabled.unselected.outline.opacity` | - | OPACITY | Filter chip disabled (unselected) outline opacity |
| `md.comp.filter-chip.flat.disabled.selected.container.color` | `md.sys.color.on-surface` | COLOR | Filter chip disabled (selected) container color |
| `md.comp.filter-chip.flat.disabled.selected.container.opacity` | - | OPACITY | Filter chip disabled (selected) container opacity |
| `md.comp.filter-chip.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Filter chip disabled label text color |
| `md.comp.filter-chip.disabled.label-text.opacity` | - | OPACITY | Filter chip disabled label text opacity |
| `md.comp.filter-chip.flat.unselected.focus.outline.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) focus outline color |
| `md.comp.filter-chip.flat.selected.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip (selected) focus container elevation |
| `md.comp.filter-chip.flat.unselected.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filter chip (unselected) focus container elevation |
| `md.comp.filter-chip.unselected.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) focus label text color |
| `md.comp.filter-chip.selected.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) focus label text color |
| `md.comp.filter-chip.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) focus state layer color |
| `md.comp.filter-chip.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filter chip (unselected) focus state layer opacity |
| `md.comp.filter-chip.selected.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) focus state layer color |
| `md.comp.filter-chip.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filter chip (selected) focus state layer opacity |
| `md.comp.filter-chip.unselected.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) hover label text color |
| `md.comp.filter-chip.selected.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) hover label text color |
| `md.comp.filter-chip.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) hover state layer color |
| `md.comp.filter-chip.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filter chip (unselected) hover state layer opacity |
| `md.comp.filter-chip.selected.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) hover state layer color |
| `md.comp.filter-chip.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filter chip (selected) hover state layer opacity |
| `md.comp.filter-chip.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Filter chip dragged container elevation |
| `md.comp.filter-chip.unselected.dragged.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) dragged label text color |
| `md.comp.filter-chip.selected.dragged.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) dragged label text color |
| `md.comp.filter-chip.unselected.dragged.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filter chip (unselected) dragged state layer color |
| `md.comp.filter-chip.unselected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Filter chip (unselected) dragged state layer opacity |
| `md.comp.filter-chip.selected.dragged.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filter chip (selected) dragged state layer color |
| `md.comp.filter-chip.selected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Filter chip (selected) dragged state layer opacity |

#### Design Tokens: Chip - Input

*For input chips.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.input-chip.with-leading-icon.selected.pressed.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon selected pressed leading icon color |
| `md.comp.input-chip.with-leading-icon.unselected.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with leading icon unselected leading icon color |
| `md.comp.input-chip.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Input chip unselected focus state layer opacity |
| `md.comp.input-chip.selected.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected focus state layer color |
| `md.comp.input-chip.with-leading-icon.selected.dragged.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip with leading icon selected dragged leading icon color |
| `md.comp.input-chip.with-leading-icon.dragged.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with leading icon draged leading icon color |
| `md.comp.input-chip.with-leading-icon.unselected.dragged.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with leading icon unselected dragged leading icon color |
| `md.comp.input-chip.with-trailing-icon.dragged.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon dragged trailing icon color |
| `md.comp.input-chip.with-trailing-icon.selected.dragged.trailing-icon.color` | `md.sys.color.primary` | COLOR | Input chip with trailing icon selected dragged trailing icon color |
| `md.comp.input-chip.with-trailing-icon.unselected.dragged.trailing-icon.color` | `md.sys.color.primary` | COLOR | Input chip with trailing icon unselected dragged trailing icon color |
| `md.comp.input-chip.selected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Input chip selected dragged state layer opacity |
| `md.comp.input-chip.dragged.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip dragged state layer color |
| `md.comp.input-chip.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Input chip dragged state layer opacity |
| `md.comp.input-chip.selected.dragged.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected dragged state layer color |
| `md.comp.input-chip.unselected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Input chip unselected dragged state layer opacity |
| `md.comp.input-chip.unselected.dragged.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected dragged state layer color |
| `md.comp.input-chip.selected.dragged.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected dragged label text color |
| `md.comp.input-chip.dragged.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip dragged label text color |
| `md.comp.input-chip.unselected.dragged.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected dragged label text color |
| `md.comp.input-chip.with-trailing-icon.selected.pressed.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip with trailing icon selected pressed trailing icon color |
| `md.comp.input-chip.with-trailing-icon.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon pressed trailing icon color |
| `md.comp.input-chip.with-trailing-icon.unselected.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon unselected pressed trailing icon color |
| `md.comp.input-chip.with-leading-icon.pressed.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with leading icon pressed leading icon color |
| `md.comp.input-chip.with-leading-icon.unselected.pressed.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon unselected pressed leading icon color |
| `md.comp.input-chip.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Input chip selected pressed state layer opacity |
| `md.comp.input-chip.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip pressed state layer color |
| `md.comp.input-chip.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Input chip pressed state layer opacity |
| `md.comp.input-chip.selected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected pressed state layer color |
| `md.comp.input-chip.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Input chip unselected pressed state layer opacity |
| `md.comp.input-chip.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected pressed state layer color |
| `md.comp.input-chip.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip pressed label text color |
| `md.comp.input-chip.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected pressed label text color |
| `md.comp.input-chip.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected pressed label text color |
| `md.comp.input-chip.with-trailing-icon.focus.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon focus trailing icon color |
| `md.comp.input-chip.with-trailing-icon.selected.focus.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip with trailing icon selected focus trailing icon color |
| `md.comp.input-chip.with-trailing-icon.unselected.focus.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon unselected focus trailing icon color |
| `md.comp.input-chip.with-leading-icon.focus.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with leading icon focus leading icon color |
| `md.comp.input-chip.with-leading-icon.selected.focus.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon selected focus leading icon color |
| `md.comp.input-chip.with-leading-icon.unselected.focus.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon unselected focus leading icon color |
| `md.comp.input-chip.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Input chip selected focus state layer opacity |
| `md.comp.input-chip.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip focus state layer color |
| `md.comp.input-chip.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Input chip focus state layer opacity |
| `md.comp.input-chip.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected focus state layer color |
| `md.comp.input-chip.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip focus label text color |
| `md.comp.input-chip.selected.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected focus label text color |
| `md.comp.input-chip.unselected.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected focus label text color |
| `md.comp.input-chip.unselected.focus.outline.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected focus outline color |
| `md.comp.input-chip.focus.outline.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip focus outline color |
| `md.comp.input-chip.with-trailing-icon.hover.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon hover trailing icon color |
| `md.comp.input-chip.with-trailing-icon.selected.hover.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip with trailing icon selected hover trailing icon color |
| `md.comp.input-chip.with-trailing-icon.unselected.hover.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon unselected hover trailing icon color |
| `md.comp.input-chip.with-leading-icon.hover.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with leading icon hover leading icon color |
| `md.comp.input-chip.with-leading-icon.selected.hover.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon selected hover leading icon color |
| `md.comp.input-chip.with-leading-icon.unselected.hover.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon unselected hover leading icon color |
| `md.comp.input-chip.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Input chip selected hover state layer opacity |
| `md.comp.input-chip.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Input chip hover state layer opacity |
| `md.comp.input-chip.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip hover state layer color |
| `md.comp.input-chip.selected.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected hover state layer color |
| `md.comp.input-chip.selected.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected hover label text color |
| `md.comp.input-chip.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip hover label text color |
| `md.comp.input-chip.unselected.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected hover label text color |
| `md.comp.input-chip.with-leading-icon.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip leading icon color |
| `md.comp.input-chip.with-leading-icon.selected.leading-icon.color` | `md.sys.color.primary` | COLOR | Input chip with leading icon selected leading icon color |
| `md.comp.input-chip.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip label text color |
| `md.comp.input-chip.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected label text color |
| `md.comp.input-chip.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip selected label text color |
| `md.comp.input-chip.selected.outline.width` | undefineddp | LENGTH | Input chip selected outline width |
| `md.comp.input-chip.outline.color` | `md.sys.color.outline` | COLOR | Input chip outline color |
| `md.comp.input-chip.outline.width` | 1dp | LENGTH | Input chip outline width |
| `md.comp.input-chip.selected.container.color` | `md.sys.color.secondary-container` | COLOR | Input chip selected container color |
| `md.comp.input-chip.unselected.outline.width` | 1dp | LENGTH | Input chip unselected outline width |
| `md.comp.input-chip.unselected.outline.color` | `md.sys.color.outline-variant` | COLOR | Input chip unselected outline color |
| `md.comp.input-chip.with-trailing-icon.selected.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Input chip with trailing icon selected trailing icon color |
| `md.comp.input-chip.with-trailing-icon.unselected.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip with trailing icon unselected trailing icon color |
| `md.comp.input-chip.with-trailing-icon.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip trailing icon color |
| `md.comp.input-chip.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Input chip unselected hover state layer color |
| `md.comp.input-chip.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Input chip unselected hover state layer opacity |
| `md.comp.input-chip.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Input chip disabled outline color |
| `md.comp.input-chip.disabled.outline.opacity` | - | OPACITY | Input chip disabled outline opacity |
| `md.comp.input-chip.disabled.selected.container.opacity` | - | OPACITY | Input chip disabled selected container opacity |
| `md.comp.input-chip.disabled.selected.container.color` | `md.sys.color.on-surface` | COLOR | Input chip disabled selected container color |
| `md.comp.input-chip.disabled.unselected.outline.opacity` | - | OPACITY | Input chip disabled unselected outline opacity |
| `md.comp.input-chip.disabled.unselected.outline.color` | `md.sys.color.on-surface` | COLOR | Input chip disabled unselected outline color |
| `md.comp.input-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Input chip focus indicator offset |
| `md.comp.input-chip.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Input chip focus indicator thickness |
| `md.comp.input-chip.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Input chip focus indicator color |
| `md.comp.input-chip.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Input chip dragged container elevation |
| `md.comp.input-chip.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Input chip disabled label text color |
| `md.comp.input-chip.disabled.label-text.opacity` | - | OPACITY | Input chip disabled label text opacity |
| `md.comp.input-chip.with-leading-icon.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Input chip with leading icon disabled leading icon color |
| `md.comp.input-chip.with-leading-icon.disabled.leading-icon.opacity` | - | OPACITY | Input chip with leading icon disabled leading icon opacity |
| `md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | Input chip with trailing icon disabled trailing icon color |
| `md.comp.input-chip.with-trailing-icon.disabled.trailing-icon.opacity` | - | OPACITY | Input chip with trailing icon disabled trailing icon opacity |
| `md.comp.input-chip.with-avatar.disabled.avatar.opacity` | - | OPACITY | Input chip with avatar disabled avatar opacity |
| `md.comp.input-chip.with-avatar.avatar.size` | 24dp | LENGTH | Input chip with avatar avatar size |
| `md.comp.input-chip.with-avatar.avatar.shape` | `md.sys.shape.corner.full` | SHAPE | Input chip with avatar avatar shape |
| `md.comp.input-chip.container.shape` | `md.sys.shape.corner.small` | SHAPE | Input chip container shape |
| `md.comp.input-chip.container.height` | 32dp | LENGTH | Input chip container height |
| `md.comp.input-chip.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Input chip container elevation |
| `md.comp.input-chip.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Input chip label text font |
| `md.comp.input-chip.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Input chip label text line height |
| `md.comp.input-chip.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Input chip label text size |
| `md.comp.input-chip.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Input chip label text weight |
| `md.comp.input-chip.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Input chip label text tracking |
| `md.comp.input-chip.label-text.type` | - | TYPOGRAPHY | Input chip label text type style |
| `md.comp.input-chip.with-leading-icon.leading-icon.size` | 18dp | LENGTH | Input chip leading icon size |
| `md.comp.input-chip.with-trailing-icon.trailing-icon.size` | 18dp | LENGTH | Input chip trailing icon size |

#### Design Tokens: Chip - Suggestion

*For suggestion chips.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.suggestion-chip.with-leading-icon.dragged.leading-icon.color` | `md.sys.color.primary` | COLOR | Suggestion chip dragged leading icon color |
| `md.comp.suggestion-chip.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Suggestion chip elevated pressed state layer opacity |
| `md.comp.suggestion-chip.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip elevated pressed state layer color |
| `md.comp.suggestion-chip.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip elevated pressed label text color |
| `md.comp.suggestion-chip.elevated.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Suggestion chip elevated pressed container elevation |
| `md.comp.suggestion-chip.with-leading-icon.pressed.leading-icon.color` | `md.sys.color.primary` | COLOR | Suggestion chip pressed leading icon color |
| `md.comp.suggestion-chip.elevated.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Suggestion chip elevated focus container elevation |
| `md.comp.suggestion-chip.with-leading-icon.focus.leading-icon.color` | `md.sys.color.primary` | COLOR | Suggestion chip focus leading icon color |
| `md.comp.suggestion-chip.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Suggestion chip elevated hover state layer opacity |
| `md.comp.suggestion-chip.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip elevated hover state layer color |
| `md.comp.suggestion-chip.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip hover label text color |
| `md.comp.suggestion-chip.elevated.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Suggestion chip elevated hover container elevation |
| `md.comp.suggestion-chip.with-leading-icon.hover.leading-icon.color` | `md.sys.color.primary` | COLOR | Suggestion chip hover leading icon color |
| `md.comp.suggestion-chip.elevated.disabled.container.opacity` | - | OPACITY | Suggestion chip elevated disabled container opacity |
| `md.comp.suggestion-chip.elevated.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Suggestion chip elevated disabled container color |
| `md.comp.suggestion-chip.elevated.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Suggestion chip elevated disabled container elevation |
| `md.comp.suggestion-chip.with-leading-icon.disabled.leading-icon.opacity` | - | OPACITY | Suggestion chip disabled leading icon opacity |
| `md.comp.suggestion-chip.with-leading-icon.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Suggestion chip disabled leading icon color |
| `md.comp.suggestion-chip.elevated.container.shadow-color` | `md.sys.color.shadow` | COLOR | Suggestion chip elevated container shadow color |
| `md.comp.suggestion-chip.elevated.container.color` | `md.sys.color.surface-container-low` | COLOR | Suggestion chip elevated container color |
| `md.comp.suggestion-chip.elevated.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Suggestion chip elevated container elevation |
| `md.comp.suggestion-chip.flat.outline.color` | `md.sys.color.outline-variant` | COLOR | Suggestion chip container outline color |
| `md.comp.suggestion-chip.flat.outline.width` | 1dp | LENGTH | Suggestion chip container outline width |
| `md.comp.suggestion-chip.flat.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Suggestion chip container elevation |
| `md.comp.suggestion-chip.container.height` | 32dp | LENGTH | Suggestion chip container height |
| `md.comp.suggestion-chip.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Suggestion chip container surface tint color |
| `md.comp.suggestion-chip.with-leading-icon.leading-icon.size` | 18dp | LENGTH | Suggestion chip leading icon size |
| `md.comp.suggestion-chip.with-leading-icon.leading-icon.color` | `md.sys.color.primary` | COLOR | Suggestion chip leading icon color |
| `md.comp.suggestion-chip.flat.disabled.outline.opacity` | - | OPACITY | Suggestion chip disabled outline opacity |
| `md.comp.suggestion-chip.flat.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Suggestion chip disabled outline color |
| `md.comp.suggestion-chip.flat.focus.outline.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip focus outline color |
| `md.comp.suggestion-chip.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Suggestion chip focus indicator offset |
| `md.comp.suggestion-chip.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Suggestion chip focus indicator thickness |
| `md.comp.suggestion-chip.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Suggestion chip focus indicator color |
| `md.comp.suggestion-chip.container.shape` | `md.sys.shape.corner.small` | SHAPE | Suggestion chip container shape |
| `md.comp.suggestion-chip.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Suggestion chip label text font |
| `md.comp.suggestion-chip.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Suggestion chip label text line height |
| `md.comp.suggestion-chip.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Suggestion chip label text size |
| `md.comp.suggestion-chip.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Suggestion chip label text weight |
| `md.comp.suggestion-chip.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Suggestion chip label text tracking |
| `md.comp.suggestion-chip.label-text.type` | - | TYPOGRAPHY | Suggestion chip label text type style |
| `md.comp.suggestion-chip.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip label text color |
| `md.comp.suggestion-chip.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Suggestion chip disabled label text color |
| `md.comp.suggestion-chip.disabled.label-text.opacity` | - | OPACITY | Suggestion chip disabled label text opacity |
| `md.comp.suggestion-chip.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip focus label text color |
| `md.comp.suggestion-chip.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip focus state layer color |
| `md.comp.suggestion-chip.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Suggestion chip focus state layer opacity |
| `md.comp.suggestion-chip.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Suggestion chip dragged container elevation |
| `md.comp.suggestion-chip.dragged.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip dragged label text color |
| `md.comp.suggestion-chip.dragged.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Suggestion chip dragged state layer color |
| `md.comp.suggestion-chip.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Suggestion chip dragged state layer opacity |


## Assist chip

![Assist chip diagram numbering 3 elements.](https://lh3.googleusercontent.com/UipTazZY6lB09YYRrq_uydfwLG0Xj5EIIlJVA252BfyovfvZXXXPGP66wGx4ZT0jOXqI6eQ7OLB6zVCjzqJ8CCJEqPW8Gw34jd-gSSA7qHsdIQ=s2048)

*Caption / Legend:*
1. Container
2. Label text
3. Leading icon

### Assist chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Assist chip diagram numbering 4 color elements.](https://lh3.googleusercontent.com/CgU4dUqBVfaebvIlmiYeW8i9Geq2Z3kASKWrVMHXl1kgDAx2tDJ40MrFVDf7tqkPEKuX4au-iLvzbSBoRQDxQokAEP5Y9-y3vwkFIyl6c0Hy=s2048)

*Caption / Legend:*
Assist chip color roles used for light and dark themes:

1. Surface container low (optional)
2. On surface
3. Outline
4. Primary

### Assist chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![36 assist chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](https://lh3.googleusercontent.com/s6LyjzP2TrQRGesL7fSbWcwEr94zeAaCTl8Zj7vDx6EsJ9Hn-9fNov0mtodXBs61mOtW6OnsmyPnirrfIzoRgYUxPDTIeH_4bXq-29iBOnxE=s2048)

*Caption / Legend:*
Selected and unselected assist chip states:

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Assist chip measurements

![3 assist chips with measurements shown for variants with and without a leading icon.](https://lh3.googleusercontent.com/tDL76BxJhx73568XEIJ3nbFUBxkn1ac2zO3Vqrf0CmFLPBi3yuLhjPYhZHmEFv6_cfjXMg-16mB2O5c11x-0yDMvb9L4QB7oHVHVLm29QvCH=s2048)

*Caption / Legend:*
Assist chip padding and size measurements

| Attribute | Value |
| --- | --- |
| Height | 32dp |
| Shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

## Filter chip

![Filter chip diagram numbering 4 elements.](https://lh3.googleusercontent.com/WczxPrTlNqVqk9HILdgclP7OR_TQ6sLWYPB9qIHvZ6QLGDS9Uo1Sjm30UFiVAJmo8DVAWcZPacF_gyj-dGZDZ1JROW93iccqf-sa_rjqQ-S7=s2048)

*Caption / Legend:*
1. Container
2. Label text
3. Leading icon
4. Trailing icon

### Filter chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Filter chip diagram numbering 4 color elements.](https://lh3.googleusercontent.com/2raflfeNVlaC3gjYDipGLH5aIA6hJB4NL7ruSwZGbqk7Ec8W1AHpbd2Eyhxbeo0g0rVWSvHwdbjU16hJSB8o4AfiMqPzGn3K9uK4NDJIY-gu=s2048)

*Caption / Legend:*
Filter chip color roles used for light and dark themes:

1. On surface variant
2. On secondary container
3. Secondary container
4. Outline variant
5. Surface container low (optional)

### Filter chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![24 filter chips showing combinations of elevated, non-elevated, selected, and non-selected styles, and 6 interaction states.](https://lh3.googleusercontent.com/KftllQmRE7STKHvBYUhxG13rWSMWMWOj_Y3mqpHMyKpj4Exvl-J7B4cBwB1_Cexx8oaCnXYw7hdPnk16YmZS-zyVWB7vbokHFJjfkahSM0Eo=s2048)

*Caption / Legend:*
Selected and unselected filter chip states:

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Filter chip measurements

![3 filter chips with measurements shown for types with and without a leading icon and trailing icon.](https://lh3.googleusercontent.com/22fmoqWkQTxchSh4qTgO2nrZ76sooCtX3ywKPLhqba5suVk8PW60_IA03iQ1yUdTipCKCFx0mRHhnWRs9Hm2oGdr2s9K9J8uaKukdPjGkNoA=s2048)

*Caption / Legend:*
Filter chip padding and size measurements

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

## Input chip

![Input chip diagram numbering 4 elements.](https://lh3.googleusercontent.com/MFMFJhZqnlfNlT6wWDldzAYdPhLBn9OvPgeAyUmocIf1YooTBamJN4doylmVzztWcDYbjHmV2OSQEaOoefcOMS8Uu0hEuGTGbTJYCxLfXKSu=s2048)

*Caption / Legend:*
1. Container
2. Label text
3. Trailing icon
4. Leading icon

### Input chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Input chip diagram numbering 5 color elements.](https://lh3.googleusercontent.com/YmMzczrJL0g0MAMFwW2zs8up57xJzcAxNJraHceXpaVZVPAEN2ukdjQwHpuYnVjEKQrnC-KGaC09_KYKNpWgMXg5iqhm8xGleC3-wuG0E0XYwg=s2046)

*Caption / Legend:*
Input chip color roles used for light and dark themes:

1. On surface variant
2. Surface container low (optional)
3. On surface variant
4. On surface variant
5. Outline variant
6. Primary
7. Secondary container
8. On secondary container
9. On secondary container

### Input chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![33 input chips illustrating combinations of styles, selection and non-selection, and 6 interaction states.](https://lh3.googleusercontent.com/ganq0HIgyGsa-HH5bnqU95oJCYypADT4v0LOgsmwQ9ek5B45GtD6EgJCpd589BbA4-tDKOpNCksyDIkrq7krkMG8_nJ0eHSu30BIj7OCqFE=s2048)

*Caption / Legend:*
Selected and unselected input chip states:

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Input chip measurements

![2 input chips with measurements: 1 with a trailing icon only; 1 with an avatar as a leading icon and a trailing icon.](https://lh3.googleusercontent.com/LwwDa1dknxPJeGchp4qkldM7ofBH7mypUCmVb5VQRgeY0cICTc5_H0fHVUTbuY0TQ7VNaBlqfYrlPFwKL4FnRQL5N5chlOoz8EhVdkbmers=s2048)

*Caption / Legend:*
Input chip padding and size measurements

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Avatar shape | 12dp corner radius |
| Avatar size | 24dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left padding for avatar | 4dp |
| Right padding for avatar | 8dp |
| Left/right padding for icon | 8dp |
| Padding between elements | 8dp |
| Target size for close icon | Min 48dp |

## Suggestion chip

![Suggestion chip diagram numbering 2 elements.](https://lh3.googleusercontent.com/ytfZyslYlVSL6feuGZznpeG6Wi6YP9sPrNyN7IDDr8cClF4pFIS2gdMGmX6GAG6oYN2ZAHE4hitoYzO2MSs88zdrks6vikOU8NHwkOGHeWU=s2048)

*Caption / Legend:*
1. Container
2. Label text

### Suggestion chip color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Suggestion chip diagram numbering 3 color elements.](https://lh3.googleusercontent.com/4Ni_EPMelCZDcAAcbhbIDdGj4ER5JGlUjPOtgO4Qx1IIooRh25eJo_y7LgMr7yD0tX-PcXu3vY6O7u-wlJRgFUK23JxG69NgKqYz6sSPywNx=s2048)

*Caption / Legend:*
Suggestion chip color roles used for light and dark themes:

1. Outline
2. Surface container low (optional)
3. On surface variant

### Suggestion chip states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![24 suggestion chips illustrating combinations of styles across 6 interaction states.](https://lh3.googleusercontent.com/YYoIuUfDsUQqPR--eP-zfow9SJVnjSlY060t1WUqtVUdBkynNCTTe1IK16I4rpfBRRpHrZqDKEYftwwhLFa18FYaI3-aRJpqPTUpr1w5ekG0=s2048)

*Caption / Legend:*
Selected and unselected suggestion chip states:

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Suggestion chip measurements

![2 suggestion chips with measurements shown for variants with and without a leading icon.](https://lh3.googleusercontent.com/ToyBZvY6HgToxkWV0wPdYIHq3FzSkIz4HUsgSzJD-Q30jS8TQTzRzN81nagH7Q1XDitG-Lgzav9wephSlFzWHaJn24mnANMqlm3KUNaeCRt6=s2048)

*Caption / Legend:*
Suggestion chip padding and size measurements

| Attribute | Value |
| --- | --- |
| Container height | 32dp |
| Container shape | 8dp corner radius |
| Icon size | 18dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding without icon | 16dp |
| Left/right padding with icon | 8dp |
| Padding between elements | 8dp |

## Guidelines

![4 chip variants: Assist, filter, input, and suggestion.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smcq59-01.png?alt=media)

*Caption / Legend:*
There are four variants of chips: Assist, filter, input, and suggestion

## Usage

Chips help people enter information, make selections, filter content, or trigger actions. They're best used to help people accomplish their current task faster and easier.

![3 assist chips in restaurant review app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smdd4g-02.png?alt=media)

*Caption / Legend:*
Chips appear as a group of interactive elements

### Chips aren’t buttons

Chips and buttons are similar. They both provide visual cues to prompt people to take actions and make selections.

While buttons appear consistently and with familiar calls to action, chips are dynamic to the situation, and appear as a group of interactive elements.

Use chips to enhance a person's current journey and encourage action. Use buttons to progress them through the product and for significant actions.

![Chips used for “Reserve a table” and “Order delivery” in a restaurant app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjonhj-3-do.png?alt=media)

*Caption / Legend:*
Use chips to present contextual, supplemental options

![Chips used for Save and Cancel actions in a dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjp9f8-4-dont.png?alt=media)

*Caption / Legend:*
Avoid replacing major actions with chips. Actions that progress people to the next or previous step should always be displayed as buttons.

Chips should dynamically offer various actions depending on the current task, whereas a button should be a persistent fixture of a layout.

Chips represent forking paths for a current task, while buttons represent linear steps.

![Button labeled “Save task” in a task management app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjqmoj-5-do.png?alt=media)

*Caption / Legend:*
Use buttons for the final step in a task

![Chip labeled “Save task” in a task management app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjqyzl-6-dont.png?alt=media)

*Caption / Legend:*
Avoid using chips to finish or progress a task

Multiple chips should appear together in a set, whereas there should be no more than 3 buttons in a single arrangement.

Chip sets can be scrolled horizontally.

![Multiple chips in event reminder.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smf6wp-07_do.png?alt=media)

*Caption / Legend:*
Chips can be scrolled horizontally

![Single chip in event reminder.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smfmgg-08_don't.png?alt=media)

*Caption / Legend:*
Don’t display a single chip by itself. Chips should appear in a set.

### Variants

Choose the chip variant based on its purpose and author.

Does the chip represent an action (assist chip) or filter results (filter chip)?

Is its content generated by the product (suggestion chip), or by the person using the product (input chip)?

![4 chip variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smgjsw-09.png?alt=media)

*Caption / Legend:*
There are four chip variants:

1. Assist
2. Filter
3. Input
4. Suggestion

| Purpose | Chip variant | Rationale | Example |
| --- | --- | --- | --- |
| Action | [Assist chip](/m3/pages/chips/guidelines#5dd1928c-1476-4029-bdc5-fde66fc0dcb1) | Assist chips represent smart or automated actions that can span multiple apps | **Add to calendar** action |
| Filter | [Filter chip](/m3/pages/chips/guidelines#8d453d50-8d8e-43aa-9ae3-87ed134d2e64) | Filter chips represent filters for a collection | Platform selector on material.io/components |
| Information, user-authored | [Input chip](/m3/pages/chips/guidelines#4d2d5ef5-3fcd-46e9-99f2-067747b2393f) | Input chips represent discrete pieces of information entered by a person | Gmail contact in the **To** field |
| Information, product-authored | [Suggestion chip](/m3/pages/chips/guidelines#36d7bb16-a9bf-4cf6-a73d-8e05510d66a7) | Suggestion chips help narrow a person’s intent by presenting dynamically-generated suggestions | Suggested chat response |

## Anatomy

![Diagram of 4 elements of a chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjtuyd-10.png?alt=media)

*Caption / Legend:*
1. Container
2. Label text
3. Leading icon or image (optional)
4. Trailing icon (required for input chips, optional for filter chips)

### Container

All chips are slightly rounded with an 8dp corner.

![Diagram of rounded corner of chip container.](https://lh3.googleusercontent.com/vQmC7jK0blnznQXHhWp0CdSBv5rz2kM_HaE4_6bNjPYJZ7m8esMLk2mjsq3d_YYoNHL1DVWS0mNeggD2YPKFRWq7LmdauD2q4_QeqAhbh7ZFng=s1352)

*Caption / Legend:*
Chips have rounded corners

**Shadows & elevation**

Chip containers can be elevated if placed on top of an image or dynamic background.

![3 elevated assist chips above image of restaurant photograph.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm99ytacz-13.png?alt=media)

*Caption / Legend:*
When on complicated backgrounds, chip containers can be elevated

![3 variants of chips in an outlined style.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smkogw-14_do.png?alt=media)

*Caption / Legend:*
Use an outline to define the edge of the chip's container on regular backgrounds

![3 variants of chips in an elevated style above restaurant photograph.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sml3zk-15_do.png?alt=media)

*Caption / Legend:*
Chips may use elevation when placed on an image

![4 elevated chips above blank background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smnajs-16_don't.png?alt=media)

*Caption / Legend:*
Chips shouldn't be elevated when placed directly on the page

![Elevated chip in pressed state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm9a01xre-17_don't.png?alt=media)

*Caption / Legend:*
Avoid using elevation to indicate a chip's pressed state. Instead, use the visual ripple effect.

### Label text

Chip label text should be 20 characters or fewer, and have the same typography style as buttons.

Chip labels should remain brief for the limited space available. Skip conventional grammar rules, such as articles (take "a" walk), to save space.

![Filter chip in maps app labeled “Walking.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjz5d8-17-do.png?alt=media)

*Caption / Legend:*
Keep chip labels short

![Filter chip in maps app labeled “Walking navigation session."](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztjzmjd-18-dont.png?alt=media)

*Caption / Legend:*
Avoid chip labels longer than 20 characters

### Leading icon or image (optional)

Chips can contain a leading icon, logo, or circular image. Use a system icon to help identify a chip's category.

![2 input chips, 1 with a leading circular avatar and the other with a leading icon.](https://lh3.googleusercontent.com/54paAbiWax0rtT9FkGkAokFuFZqCr77ChCZATiYDeSdKuytmj1yIEIO62QDdSfxj4J7O3l5DX-BNOXTkj8b7RTpJRIxe6Wvioy0UPzXRudFQ=s1352)

*Caption / Legend:*
Chips can contain a logo, icon, or circular image

The leading icon color for unselected chips can be customized through theming. While the default color role is **primary**, the **on surface variant** color role is a good alternative when the icon style requires less emphasis.

![2 screens of a restaurant page with chips labeled "Add photos" and "Add dishes." The leading icons are purple in 1, grey in the other.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztk48sd-20.png?alt=media)

*Caption / Legend:*
**Primary** color (left) and **on surface variant** color (right)

Leading circular images are sized larger than leading icons to provide more space for detail. Icons are designed to be legible at small sizes.

See the [Specs tab](/m3/pages/chips/specs/) for precise measurement values.

![2 input chips, 1 with a 24dp leading avatar and the other with an 18dp leading icon.](https://lh3.googleusercontent.com/iY2D7FmINqLpS43Y2mhnr_dlNru2sEZCNSyKFwJS_NVseYGAGlY-nRl_qYY4hn_zu4NTZV40NTysX2qaS3NPnh_J6StQbI4mlzvSQkQm3RU=s1352)

*Caption / Legend:*
Leading images, such as avatars, are sized larger than leading icons or logos

### Trailing icon (optional, input and filter chips only)

The trailing icon is present for input and filter chips.

On input chips, it's required and must be used to remove the chip. On filter chips, it's optional, and can be used to open a menu or remove the chip.

Secondary actions (such as a trailing icon button for **Remove**) must have a 48x48dp interaction target that doesn’t interfere with the chip's primary action (such as **Edit** or **Drag**). To achieve this, apply a minimum width of 88dp to the chip, or 42dp to the label text.

![A chip with 88dp min width has 2 touch targets of 48x48dp.](https://lh3.googleusercontent.com/FF2wTImHI_AYyfSWhT1XCU8XZj6mbCYc84FMCxjtZZ_lLum6wzABXhazLjGsceEqE9PWB44gmD3DO-j7lbjTrqCa507LWu-t7hdlSLxXt-M=s1352)

*Caption / Legend:*
Interaction targets for actions like **Edit** or **Close** have a size of 48x48. This can be achieved by setting the minimum container width to 88dp.

## Assist chips

Assist chips represent smart or automated actions that can span multiple apps, such as opening a calendar event from the home screen. Assist chips function as though the person asked an assistant to complete the action. They should appear dynamically and contextually in a UI.

An alternative to assist chips are buttons, which should appear persistently and consistently.

![2 assist chips labeled “Add to my itinerary” and “12 mins from hotel” on map screen about Los Cantantes.](https://lh3.googleusercontent.com/uNDidhMjsDIxQhluaJHdkbRj_xJDpjTTfZN_YLW9tgVUwfShHRsuZgBfzSHWqjR4XJaPR-Hd1AqajUFnrPbtW1LW0c6NrrNYgNb5efdO7pbr=s1352)

*Caption / Legend:*
The text in most assist chips begins with a short verb, like **Get **or **Add**

![2 assist chips labeled “Event location” and “Chat” on phone lock screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smwopa-25.png?alt=media)

*Caption / Legend:*
An assist chip can surface supplemental information like a calendar event, as well as provide contextual actions

![Assist chip transformed into time picker with radio buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8smx4qo-26.png?alt=media)

*Caption / Legend:*
During an interaction, assist chips can transform into modals, transition into full-screen views of new content, or readjust to display more results inline

Assist chips can trigger an action or show progress and confirmation.

Write assist chips like buttons: start with a verb. Adjust text dynamically if the state changes, like **Save** to **Saved**.

Assist chips are displayed after primary content, such as below a card or persistently at the bottom of a screen.

![3 assist chips labeled “Turn on lights”, “Set alarm”, and "Close Blinds" on Welcome Home screen.](https://lh3.googleusercontent.com/uqMzoI8CijB6iWV4gF5J6aL2rQ4W7JhsIrcJN98krkKJzpyDj1q9Oij6s5VAl7NVQ_LKzVyXwPf3B12ssVbtX8qsCHB7JUmPYjP8nXwY2pWNpw=s1352)

*Caption / Legend:*
Assist chips should be shown underneath primary content

## Filter chips

Filter chips use tags or descriptive words to filter content. They can be a good alternative to segmented buttons or checkboxes when viewing a list or search results.

Tapping on a filter chip activates it and appends a leading checkmark icon to the starting edge of the chip label.

Write filter chips with nouns that describe the category to **include** in the results. Avoid negative phrases like **Exclude images**.

![4 filter chips labeled “Docs” “Slides” “Sheets” and “Images” with “Slides” and “Sheets” selected](https://lh3.googleusercontent.com/_FpN2Q4Pn2ev44ZnzH3j7EUtUJdwZ7AqRLNVQjhY8btJIKk135AcrsJAjufT287fOoUU5QbPvcm586-RL9RJTPDGJSBQAW7WZ1QIQabJ5P1Naw=s1352)

*Caption / Legend:*
Filter chips rely on tags or descriptive words to filter content

![5 filter chips representing popular electronics categories in a shopping app. The chip “Game consoles” is selected. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sn3s8s-32.png?alt=media)

*Caption / Legend:*
Filter chips in a shopping app

![6 filter chips representing apartment amenities in a real estate app. 2 of the chips are selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sn4ehq-33.png?alt=media)

*Caption / Legend:*
Filter chips in a real estate app

Tap a chip to select it. Multiple chips can be selected or unselected.

![6 filter chips representing apartment amenities in a real estate app. 3 selected chips include checkmarks while 3 don’t.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm9a0g8g2-34.png?alt=media)

*Caption / Legend:*
An icon can be added to indicate when a filter chip is selected

![3 amenities chips are selected, and 2 neighborhoods. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm9a0gd06-35.png?alt=media)

*Caption / Legend:*
Filter chip suggestions can dynamically change as a person starts to select filters

Alternatively, a single chip can be selected. This offers an alternative to segmented buttons, radio buttons, or single select menus.

However, avoid mixing chip set behaviors. All chip sets on a page should be either single-select or multi-select.

In medium and expanded breakpoints, filter chips may contain a trailing icon to directly remove the chip or open a menu of options.

In compact windows, the trailing icon's target area is too small to be accessible on its own. However, if the whole chip can be selected to accomplish the action, the chip is likely still accessible.

![Filter chip with trailing remove icon.](https://lh3.googleusercontent.com/AuxLEZb_nITl-CQputrqxzcMPXUeBkAvV1sFuT342wVPxav9dFEaTYNz201yWxHk9c6yEh-UInDpcA3h2-7znxXB9F3PCNiJIl5mzaTD3l0DFQ=s656)

*Caption / Legend:*
The remove icon helps users remove the filter

![Filter chip with trailing menu icon.](https://lh3.googleusercontent.com/fi0lCD-KiEpAYuO3SZr2jI2I3WWk6us7PlDgn7VIJ2Q7BBCY9fy0LFaLaq3HFIm3JUbnOp8ULGZ5_QEXYFT27T6cbUGSVpuC8mDcsbWcjwiqzg=s656)

*Caption / Legend:*
Filter chips can open a menu for more filtering options

When combined with a menu, the filter chip opens a list of selectable options.

Filter chips can be used with other components, such as search fields and sheets.

![4 filter chips below search field](https://lh3.googleusercontent.com/gVJ_TV4PsMN0Mhs-oAUEG47Gu9cYDp-T3LPvFLnsFv6yImHWTuuocs9l9en82TB_OrYoW31ffefMMp-rM8UQLo9RnXM5KCNjnbaC2cHrJNim=s1352)

*Caption / Legend:*
Filter chips can be shown underneath a search field

![Filter chips used as tags in a side sheet on a file application.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sni3vn-41.png?alt=media)

*Caption / Legend:*
Use a side sheet to organize many filter chips

![6 filter chips wrapping to 2 rows](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl3mne-41.png?alt=media)

*Caption / Legend:*
Filter chips can wrap to a new row. If there are more than two rows, consider using horizontal scrolling to access them all.

![4 filter chips with right-most chip partly offscreen, indicating the chips are horizontally scrollable](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl40h2-42.png?alt=media)

*Caption / Legend:*
Filter chips can scroll horizontally to show many options

![Single filter chip option beneath the header “Category”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl535g-43-dont.png?alt=media)

*Caption / Legend:*
Filter chips should not present only a single option

## Input chips

Input chips represent discrete pieces of information entered by a person, such as Gmail contacts or filter options within a search field.

They enable user input and verify that input by converting text into chips.

![Contacts transformed into 2 input chips in a draft event invite](https://lh3.googleusercontent.com/UDjFkP1FOVQtew8xhKWpOI1bUKi2OeWXXgjETDRqn-1ZKzXFw0YNX3UYDJgk_b5s0rKIdh4CJEsU9LARx6SyEmwlGQ8CeeNVyhDxNu1EcQze=s1352)

*Caption / Legend:*
Input chips transform text based on a person's input

Input chips can support editing to change their contents, such as correcting an email address. In edit mode, the chip reverts back to a text string. Editing can be triggered by interacting with the chip, either by selecting it or by a second interaction after selection.

A single field can contain multiple input chips. These chips can be reordered or moved into other fields.

![2 input chips in the “To” field of an email draft](https://lh3.googleusercontent.com/RgxqbsfzegYgXFAqY6gFgnc_m2Y36fjQfW7cr4h2J7Ar-4eMA8m0sHuYBD9omPg3Fkq4HkU7pIYsAccWpS-kWnkS97zPCTRG7B6rcY7hQfE=s656)

*Caption / Legend:*
Multiple input chips in one field

![1 input chip moved from the “To” field to the “CC” field of an email draft](https://lh3.googleusercontent.com/ei0DgkxK6YByXQJYx-ZgaGig9oudQEyPHJ8RwkOQ5txRR4sS9ZrlCXyd0Q0Z2N7lQohHqVgD7hvMnuz21gYIfDzTZN3FrsZnHyvM0aPTsQNE=s656)

*Caption / Legend:*
Input chips being moved from one field to another

Input chips can expand to show more information or options. A container transform transition pattern is used to reveal additional content.

### Placement

Input chips can be integrated with other components.

They can appear:

- Inline with the cursor in a text field
- In a stacked list
- In a list that can be horizontally scrolled

![4 input chips wrapping to 2 rows.](https://lh3.googleusercontent.com/6ESM4iq-ENjgdXPRgFeaoVpZE2mUv1aL6soIeRHZgDxwAUJTQ2HYdWnCUQSYjaWVl5l7kvSbi9Rtn7NICABYNrE_6230Wv7OxhfoXLs6uN5kSg=s656)

*Caption / Legend:*
Input chips can wrap to a new row if all chips need to be visible

### Icons & images

The leading icon of input chips can be an icon, logo, or circular image.

![2 input chips, 1 with leading thumbnail, 1 with leading icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8snzt8q-60.png?alt=media)

*Caption / Legend:*
Input chips can contain an icon, logo, or circular image

The trailing icon is always aligned to the end side of the container. It’s placed:

- On the right for left-to-right (LTR) languages, such as English
- On the left for right-to-left (RTL) languages, such as Farsi

![2 input chips with trailing icons following the label text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztl8hee-55.png?alt=media)

*Caption / Legend:*
Input chips can be a more flexible way to filter search results, compared to filter chips

![3 input chips with trailing icons following the label text.](https://lh3.googleusercontent.com/OW0kvrMWhnBCzG4I54KY3xyHktBmFAy75DO82QINdcwZjOKXf4O1cd8TH6sxo2ptCx7Y7wkGkxDnPLfuaI-CLAcLAx-BbkdleTuyJDLH5fBw=s656)

*Caption / Legend:*
Input chips make it easier to add and remove contacts

## Suggestion chips

Suggestion chips help narrow a user’s intent by presenting dynamically generated suggestions, such as possible responses or search filters.

Write suggestion chips as nouns or short phrases, depending on context. Avoid exceeding 20 characters when possible.

![3 suggestion chips offering ID options in a photo-recognition app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm99yzvnz-65.png?alt=media)

*Caption / Legend:*
The text labels within suggestion chips are most often nouns or short phrases

![3 suggestion chips with automated reply options in a chat app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztlb0cw-60.png?alt=media)

*Caption / Legend:*
Suggestion chips can offer quick-reply options in a chat or email app

![2 suggestion chips with search options “What song is this?” and “What are the lyrics?”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztlbx06-61.png?alt=media)

*Caption / Legend:*
A suggestion chip can help the user start a search

### Placement

When displaying multiple chips together, place them inline as a row of options, not listed vertically. Overflowing chips should break to the next line.

If the field is only one row high, chip sets can scroll horizontally instead.

Keep an 8dp minimum space between chips. Chips must also have a minimum 48dp target size, regardless of placement or density. If required, the target can extend beyond the visible container of the chip.

Text labels for chips should be concise. Chip labels will truncate when in a wrapped layout, and when they are wider than the full width of the window.

![Diagram of margins between a set of chips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flztlcsh2-62.png?alt=media)

*Caption / Legend:*
1. Margins between chips
2. Margin between each line

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Use a chip to perform an action
- Navigate to a chip
- Activate a chip

## Interaction & style

The chip label needs at least 3:1 contrast with the background.

A chip that performs an action should present the same semantics as a button to a platform's accessibility API.

![The chip label needs to pass 3:1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm99z66s4-01.png?alt=media)

*Caption / Legend:*
High contrast helps differentiate chips clustered together

### Horizontal overflow

When there are too many chips to fit on one row, provide a way to display them all at once and avoid scrolling.

**Reflow method: **Use a filter chip as a leading element to reflow the horizontal list. This should shift down the content below and make room for all chips to show.

**Menu method: **Create a leading button to display all chip options in a menu. Use this option to avoid shifting the position of the content below.

Don’t use the menu method on chips with a second action, like a remove icon.

### Avoid applying density by default

Don't apply density to chips by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Moves focus to enabled chip or chip group |
| **Space** or **Enter** | Activates, selects, or deselects the focused chip |
| **Backspace** or **Delete** | Removes currently focused input chip |
| **Arrows** | Moves focus between chips |

## Labeling elements

| Element | A11y label | Role (Web) | Role (Android Views (MDC-Android)) | Role (Jetpack Compose) |
| --- | --- | --- | --- | --- |
| Image / Icon within chip | Hide image | - | - | - |
| Basic chip (one action) | “{chip content}” | gridcell | button | button |
| Selectable chip | “{chip content}” | gridcell | radio button | checkbox |
| Remove icon (no other action) | “Remove {chip content}” | - | - | - |
| Two actions (e.g., select + remove) | “{chip content}.” Then “Remove {chip content}”. | button or checkbox | button or checkbox | button or checkbox |

The accessibility label for a chip is the chip's label text. Additional actions, like remove, are labeled separately.

![Accessibility tags for a chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmderzcwe-02.png?alt=media)

*Caption / Legend:*
Accessibility tags should include both the label and role

### Multi-select

For multi-select chip sets, **Space** or **Enter** will select the focused chip and allow you to select all of the chips. **Space** or **Enter** will also deselect a focused selected chip.

![Accessibility tags for a multi-select chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmderoau5-25.png?alt=media)

*Caption / Legend:*
While multiple chips can be selected, only one can be in focus

### Drop-down list

The accessibility label should align with each list item’s text label.

For list items with text and an icon, the accessibility label should be marked as decorative to avoid redundant verbalizations.

![Accessibility tags for a drop-down list chip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd78nzr3-04.png?alt=media)

*Caption / Legend:*
The accessibility label should be the text label

### Input chip remove action

Display the remove icon whenever a chip can be removed. On mobile, if remove is the only chip action, the remove icon isn't necessary. Instead the chip can be removed by selecting it and pressing the **Delete** key on the keyboard.

Each chip is a focusable element.

- If a chip only has a remove icon, the entire chip and icon are one focusable element.
- If a chip has a second action, like select, then the chip content and remove icon are two separate focusable elements.

![A focused remove action within a chip.](https://lh3.googleusercontent.com/6ogPU6jU6ecd-bIOHVBsztMIVbrMh9QFdEYLITFw2dbd9atxkbPCtGrNHZfykUnYCCmQUR4-XY9KTUDAeDG3GCh60nDvFFCG41_E8r2o88yq=s1352)

*Caption / Legend:*
The remove action is focused when the chip can also be selected

### Showing chip interactivity

Material requires that chips use a secondary indicator to show that they are interactive in context, allowing users with low vision and cognitive disabilities to see them. 

Use one of the following methods:

- Add a label before the chip group suggesting interaction, such as **Select type**

![Label saying “Select type” above a series of chips, with “Extra soft” selected.](https://lh3.googleusercontent.com/gkYkp2thJm8NuXg0WkQDTthTjMCckk44U7U8HKxA322oYbQbIfE60aLw8mRpl4zG3yP9iM7xRKvISOEvSe0IzALT4v90lUxmkhX8Gk7tgYVg=s1352)

*Caption / Legend:*
Labels introducing a chip group can indicate that they are selectable

- Provide interactive page context, such as **Filter results**, indicating chips can be selected to narrow results

![Page context saying “Filter results” above chips listing different categories.](https://lh3.googleusercontent.com/jEO4v0siZwhGUJRWwN3qHEggxZU7YO42T-yV1X2_7zuBm9bW_mHSE1cJ1U2YAh6fDxdvjv10zK9Jzn9tbNH7qdhR7ftNlEZUoNmMlN4oCjcPQg=s1352)

*Caption / Legend:*
Page context can indicate how search results will be narrowed by selecting chips

- Use the **outline** color role, instead of **outline variant**, to ensure a minimum 3:1 contrast
- Include an interactive chip label, such as **Turn on lights**, or leading icon

![A selectable chip with more pronounced outline stroke.](https://lh3.googleusercontent.com/3mkdqveEbxIinncg25_qmQvewzApIKUm8jK3Nml2ratbJLBLBhBUCNYcrGFsb-7nevBxFssZdACgsezFIgK8Rh_1MrIi8kmE2fxWpLg1iDSQ=s656)

*Caption / Legend:*
Chips can show they are interactive with a darker outline color stroke

![A chip labeled “Turn on lights” with a leading icon related to lights.](https://lh3.googleusercontent.com/-PJSF2Rl5Xam0GLsqoqkWXhm3VNqDgZh7B3Ck1pLkVFTuPzwhSR9H-DXgfQOVggcz-CaZrqh4kh8DAR0LsSUZuwOBKeyMN75JYf5L_e2rKigVQ=s656)

*Caption / Legend:*
Chips can also use a leading icon or label to show interactivity
