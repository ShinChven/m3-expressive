# Buttons

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/buttons](https://m3.material.io/components/buttons)
> Last Updated: 2026-07-24T06:19:49.216Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Two variants: default and toggle
- Can contain an optional leading icon
- Five color options: elevated, filled, tonal, outlined, and text
- Five size recommendations: extra small, small, medium, large, and extra large
- Two shape options: round and square
- Keep labels concise and use sentence case

![5 variants of buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm1qv5u-01.png?alt=media)

*Caption / Legend:*
1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

## Availability & resources

## M3 Expressive update

**May 2025**

Buttons now have a wider variety of shapes and sizes, toggle functionality, and can change shape when selected. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Default and toggle (selection)
- Color styles are now configurations (elevated, filled, tonal, outlined, text)

Shapes:

- Round and square
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (existing, default)
- Medium
- Large
- Extra large

New padding for **small** buttons:

- 16dp (recommended to match padding of new sizes)
- 24dp (no longer recommended)

![4 button changes in the expressive update.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm1tos0-03.png?alt=media)

*Caption / Legend:*
1. Five sizes
2. Toggle (selection)
3. Two shapes
4. Two small padding widths

## Differences from M2

- Color: New color mappings and compatibility with dynamic color. Icons and labels now share the same color. Neutral text button is no longer recommended.
- Icons: Standard size for leading and trailing icons is now 20dp
- Shape: Fully-rounded corner radius and additional height options

![Rectangular M2 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm1vatd-04.png?alt=media)

*Caption / Legend:*
M2: Buttons have a height of 36dp and slightly rounded corner radius

![Round-cornered M3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm1vtk3-05.png?alt=media)

*Caption / Legend:*
M3: Default buttons are taller at 40dp and have fully rounded corners

## Specs

## Variants

![Diagram comparing buttons with toggle buttons.](https://lh3.googleusercontent.com/aWhLmNGkz1dTgFMtkYbi73APlAcBdOgT9xviQJI1Riu10oLOdnakrGGJv6HBp6_9LHBw9lPT-lqF_xNp_Es_lsO2J0W-zT4MewEEILa9OQZZzw=s2048)

*Caption / Legend:*
1. Default button
2. Toggle button

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Default | Available | Available |
| Toggle (selection) | -- | Available |

## Configurations

![Diagram showing configurations of buttons.](https://lh3.googleusercontent.com/qtqOoy4NuC3QFb7pfhfLLiZPXFCDrM-rLo38WY2V4ao1NGmIml-wNHF0Gk4ydIEttrZsWWGMlACpZAu5YiQZTrK5NaG52Zqr0PSE4IpQVBoi=s2048)

*Caption / Legend:*
1. Size
2. Shape
3. Color
4. Small button padding

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |  |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |  |
| Color | Elevated, filled (default), tonal, outlined, text | Available | Available |
| Small button padding | 24dp | Available | Not recommended. Use 16dp |
| 16dp | -- | Available |  |

## Tokens & specs

Use the table's menu to select a token set. Button token sets are separated into common tokens, color, and size. [View baseline tokens](/m3/pages/common-buttons/specs#c305d304-a6c0-466a-a48c-8d0718a29ae2)

#### Design Tokens: Button - Color - Elevated

*For elevated buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.elevated.hovered.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Button elevated hovered container elevation |
| `md.comp.button.elevated.selected.label-text.color` | `md.sys.color.on-primary` | COLOR | Button elevated label color - toggle (selected) |
| `md.comp.button.elevated.unselected.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated label color - toggle (unselected) |
| `md.comp.button.elevated.container.shadow-color` | `md.sys.color.shadow` | COLOR | Button elevated shadow color |
| `md.comp.button.elevated.container.color` | `md.sys.color.surface-container-low` | COLOR | Button elevated container color |
| `md.comp.button.elevated.unselected.container.color` | `md.sys.color.surface-container-low` | COLOR | Button elevated container color - toggle (unselected) |
| `md.comp.button.elevated.selected.container.color` | `md.sys.color.primary` | COLOR | Button elevated container color - toggle (selected) |
| `md.comp.button.elevated.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Button elevated elevation |
| `md.comp.button.elevated.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated label color |
| `md.comp.button.elevated.icon.color` | `md.sys.color.primary` | COLOR | Button elevated icon color |
| `md.comp.button.elevated.unselected.icon.color` | `md.sys.color.primary` | COLOR | Button elevated icon color - toggle (unselected) |
| `md.comp.button.elevated.selected.icon.color` | `md.sys.color.on-primary` | COLOR | Button elevated icon color - toggle (selected) |
| `md.comp.button.elevated.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Button elevated disabled container color |
| `md.comp.button.elevated.disabled.container.opacity` | - | OPACITY | Button elevated disabled container opacity |
| `md.comp.button.elevated.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button elevated disabled container elevation |
| `md.comp.button.elevated.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Button elevated disabled label color |
| `md.comp.button.elevated.disabled.label-text.opacity` | - | OPACITY | Button elevated disabled label opacity |
| `md.comp.button.elevated.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Button elevated disabled icon color |
| `md.comp.button.elevated.disabled.icon.opacity` | - | OPACITY | Button elevated disabled icon opacity |
| `md.comp.button.elevated.hovered.state-layer.color` | `md.sys.color.primary` | COLOR | Button elevated hovered container state layer color |
| `md.comp.button.elevated.unselected.hovered.state-layer.color` | `md.sys.color.primary` | COLOR | Button elevated hovered container state layer color - toggle (unselected) |
| `md.comp.button.elevated.selected.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button elevated hovered container state layer color - toggle (selected) |
| `md.comp.button.elevated.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Button elevated hovered container state layer opacity |
| `md.comp.button.elevated.hovered.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated hovered label color |
| `md.comp.button.elevated.unselected.hovered.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated hovered label color - toggle (unselected) |
| `md.comp.button.elevated.selected.hovered.label-text.color` | `md.sys.color.on-primary` | COLOR | Button elevated hovered label color - toggle (selected) |
| `md.comp.button.elevated.hovered.icon.color` | `md.sys.color.primary` | COLOR | Button elevated hovered icon color |
| `md.comp.button.elevated.unselected.hovered.icon.color` | `md.sys.color.primary` | COLOR | Button elevated hovered icon color - toggle (unselected) |
| `md.comp.button.elevated.selected.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Button elevated hovered icon color - toggle (selected) |
| `md.comp.button.elevated.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Button elevated pressed container state layer color |
| `md.comp.button.elevated.unselected.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Button elevated pressed container state layer color - toggle (unselected) |
| `md.comp.button.elevated.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button elevated pressed container state layer color - toggle (selected) |
| `md.comp.button.elevated.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Button elevated pressed container state layer opacity |
| `md.comp.button.elevated.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Button elevated pressed container state layer elevation |
| `md.comp.button.elevated.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated pressed label color |
| `md.comp.button.elevated.unselected.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated pressed label color - toggle (unselected) |
| `md.comp.button.elevated.selected.pressed.label-text.color` | `md.sys.color.on-primary` | COLOR | Button elevated pressed label color - toggle (selected) |
| `md.comp.button.elevated.pressed.icon.color` | `md.sys.color.primary` | COLOR | Button elevated pressed icon color |
| `md.comp.button.elevated.unselected.pressed.icon.color` | `md.sys.color.primary` | COLOR | Button elevated pressed icon color - toggle (unselected) |
| `md.comp.button.elevated.selected.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Button elevated pressed icon color - toggle (selected) |
| `md.comp.button.elevated.focused.state-layer.color` | `md.sys.color.primary` | COLOR | Button elevated focused container state layer color |
| `md.comp.button.elevated.unselected.focused.state-layer.color` | `md.sys.color.primary` | COLOR | Button elevated focused container state layer color - toggle (unselected) |
| `md.comp.button.elevated.selected.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button elevated focused container state layer color - toggle (selected) |
| `md.comp.button.elevated.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Button elevated focused container state layer opacity |
| `md.comp.button.elevated.focused.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Button elevated focused container state layer elevation |
| `md.comp.button.elevated.focused.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated focused label color |
| `md.comp.button.elevated.unselected.focused.label-text.color` | `md.sys.color.primary` | COLOR | Button elevated focused label color - toggle (unselected) |
| `md.comp.button.elevated.selected.focused.label-text.color` | `md.sys.color.on-primary` | COLOR | Button elevated focused label color - toggle (selected) |
| `md.comp.button.elevated.focused.icon.color` | `md.sys.color.primary` | COLOR | Button elevated focused icon color |
| `md.comp.button.elevated.unselected.focused.icon.color` | `md.sys.color.primary` | COLOR | Button elevated focused icon color - toggle (unselected) |
| `md.comp.button.elevated.selected.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Button elevated focused icon color - toggle (selected) |

#### Design Tokens: Button - Color - Filled

*For filled buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.filled.hovered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Button filled hovered container elevation |
| `md.comp.button.filled.selected.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled label color - toggle (selected) |
| `md.comp.button.filled.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled label color - toggle (unselected) |
| `md.comp.button.filled.container.color` | `md.sys.color.primary` | COLOR | Button filled container color |
| `md.comp.button.filled.unselected.container.color` | `md.sys.color.surface-container` | COLOR | Button filled container color - toggle (unselected) |
| `md.comp.button.filled.selected.container.color` | `md.sys.color.primary` | COLOR | Button filled container color - toggle (selected) |
| `md.comp.button.filled.container.shadow-color` | `md.sys.color.shadow` | COLOR | Button filled shadow color |
| `md.comp.button.filled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button filled elevation |
| `md.comp.button.filled.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled label color |
| `md.comp.button.filled.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled icon color |
| `md.comp.button.filled.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled icon color - toggle (unselected) |
| `md.comp.button.filled.selected.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled icon color - toggle (selected) |
| `md.comp.button.filled.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Button filled disabled container color |
| `md.comp.button.filled.disabled.container.opacity` | - | OPACITY | Button filled disabled container opacity |
| `md.comp.button.filled.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button filled disabled container elevation |
| `md.comp.button.filled.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Button filled disabled label color |
| `md.comp.button.filled.disabled.label-text.opacity` | - | OPACITY | Button filled disabled label opacity |
| `md.comp.button.filled.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Button filled disabled icon color |
| `md.comp.button.filled.disabled.icon.opacity` | - | OPACITY | Button filled disabled icon opacity |
| `md.comp.button.filled.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button filled hovered container state layer color |
| `md.comp.button.filled.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled hovered container state layer color - toggle (unselected) |
| `md.comp.button.filled.selected.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button filled hovered container state layer color - toggle (selected) |
| `md.comp.button.filled.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Button filled hovered container state layer opacity |
| `md.comp.button.filled.hovered.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled hovered label color |
| `md.comp.button.filled.unselected.hovered.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled hovered label color - toggle (unselected) |
| `md.comp.button.filled.selected.hovered.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled hovered label color - toggle (selected) |
| `md.comp.button.filled.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled hovered icon color |
| `md.comp.button.filled.unselected.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled hovered icon color - toggle (unselected) |
| `md.comp.button.filled.selected.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled hovered icon color - toggle (selected) |
| `md.comp.button.filled.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button filled focused container state layer color |
| `md.comp.button.filled.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled focused container state layer color - toggle (unselected) |
| `md.comp.button.filled.selected.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button filled focused container state layer color - toggle (selected) |
| `md.comp.button.filled.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Button filled focused container state layer opacity |
| `md.comp.button.filled.focused.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button filled focused container state layer elevation |
| `md.comp.button.filled.focused.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled focused label color |
| `md.comp.button.filled.unselected.focused.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled focused label color - toggle (unselected) |
| `md.comp.button.filled.selected.focused.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled focused label color - toggle (selected) |
| `md.comp.button.filled.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled focused icon color |
| `md.comp.button.filled.unselected.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled focused icon color - toggle (unselected) |
| `md.comp.button.filled.selected.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled focused icon color - toggle (selected) |
| `md.comp.button.filled.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button filled pressed container state layer color |
| `md.comp.button.filled.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled pressed container state layer color - toggle (unselected) |
| `md.comp.button.filled.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Button filled pressed container state layer color - toggle (selected) |
| `md.comp.button.filled.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Button filled pressed container state layer opacity |
| `md.comp.button.filled.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button filled pressed container state layer elevation |
| `md.comp.button.filled.pressed.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled pressed label color |
| `md.comp.button.filled.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled pressed label color - toggle (unselected) |
| `md.comp.button.filled.selected.pressed.label-text.color` | `md.sys.color.on-primary` | COLOR | Button filled pressed label color - toggle (selected) |
| `md.comp.button.filled.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled pressed icon color |
| `md.comp.button.filled.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button filled pressed icon color - toggle (unselected) |
| `md.comp.button.filled.selected.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Button filled pressed icon color - toggle (selected) |

#### Design Tokens: Button - Color - Tonal

*For tonal buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.tonal.hovered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Button tonal hovered container elevation |
| `md.comp.button.tonal.container.color` | `md.sys.color.secondary-container` | COLOR | Button tonal container color |
| `md.comp.button.tonal.unselected.container.color` | `md.sys.color.secondary-container` | COLOR | Button tonal container color - toggle (unselected) |
| `md.comp.button.tonal.selected.container.color` | `md.sys.color.secondary` | COLOR | Button tonal container color - toggle (selected) |
| `md.comp.button.tonal.container.shadow-color` | `md.sys.color.shadow` | COLOR | Button tonal shadow color |
| `md.comp.button.tonal.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button tonal elevation |
| `md.comp.button.tonal.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal label color |
| `md.comp.button.tonal.unselected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal label color - toggle (unselected) |
| `md.comp.button.tonal.selected.label-text.color` | `md.sys.color.on-secondary` | COLOR | Button tonal label color - toggle (selected) |
| `md.comp.button.tonal.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal icon color |
| `md.comp.button.tonal.unselected.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal icon color - toggle (unselected) |
| `md.comp.button.tonal.selected.icon.color` | `md.sys.color.on-secondary` | COLOR | Button tonal icon color - toggle (selected) |
| `md.comp.button.tonal.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Button tonal disabled container color |
| `md.comp.button.tonal.disabled.container.opacity` | - | OPACITY | Button tonal disabled container opacity |
| `md.comp.button.tonal.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button tonal disabled container elevation |
| `md.comp.button.tonal.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Button tonal disabled label color |
| `md.comp.button.tonal.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Button tonal disabled icon color |
| `md.comp.button.tonal.disabled.icon.opacity` | - | OPACITY | Button tonal disabled icon opacity |
| `md.comp.button.tonal.disabled.label-text.opacity` | - | OPACITY | Button tonal disabled label opacity |
| `md.comp.button.tonal.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal hovered container state layer color |
| `md.comp.button.tonal.unselected.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal hovered container state layer color - toggle (unselected) |
| `md.comp.button.tonal.selected.hovered.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Button tonal hovered container state layer color - toggle (selected) |
| `md.comp.button.tonal.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Button tonal hovered container state layer opacity |
| `md.comp.button.tonal.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal hovered label color |
| `md.comp.button.tonal.unselected.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal hovered label color - toggle (unselected) |
| `md.comp.button.tonal.selected.hovered.label-text.color` | `md.sys.color.on-secondary` | COLOR | Button tonal hovered label color - toggle (selected) |
| `md.comp.button.tonal.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal hovered icon color |
| `md.comp.button.tonal.unselected.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal hovered icon color - toggle (unselected) |
| `md.comp.button.tonal.selected.hovered.icon.color` | `md.sys.color.on-secondary` | COLOR | Button tonal hovered icon color - toggle (selected) |
| `md.comp.button.tonal.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal focused container state layer color |
| `md.comp.button.tonal.unselected.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal focused container state layer color - toggle (unselected) |
| `md.comp.button.tonal.selected.focused.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Button tonal focused container state layer color - toggle (selected) |
| `md.comp.button.tonal.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Button tonal focused container state layer opacity |
| `md.comp.button.tonal.focused.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button tonal focused container state layer elevation |
| `md.comp.button.tonal.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal focused label color |
| `md.comp.button.tonal.unselected.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal focused label color - toggle (unselected) |
| `md.comp.button.tonal.selected.focused.label-text.color` | `md.sys.color.on-secondary` | COLOR | Button tonal focused label color - toggle (selected) |
| `md.comp.button.tonal.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal focused icon color |
| `md.comp.button.tonal.unselected.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal focused icon color - toggle (unselected) |
| `md.comp.button.tonal.selected.focused.icon.color` | `md.sys.color.on-secondary` | COLOR | Button tonal focused icon color - toggle (selected) |
| `md.comp.button.tonal.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal pressed container state layer color |
| `md.comp.button.tonal.unselected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal pressed container state layer color - toggle (unselected) |
| `md.comp.button.tonal.selected.pressed.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Button tonal pressed container state layer color - toggle (selected) |
| `md.comp.button.tonal.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Button tonal pressed container state layer opacity |
| `md.comp.button.tonal.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Button tonal pressed container state layer elevation |
| `md.comp.button.tonal.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal pressed label color |
| `md.comp.button.tonal.unselected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal pressed label color - toggle (unselected) |
| `md.comp.button.tonal.selected.pressed.label-text.color` | `md.sys.color.on-secondary` | COLOR | Button tonal pressed label color - toggle (selected) |
| `md.comp.button.tonal.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal pressed icon color |
| `md.comp.button.tonal.unselected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Button tonal pressed icon color - toggle (unselected) |
| `md.comp.button.tonal.selected.pressed.icon.color` | `md.sys.color.on-secondary` | COLOR | Button tonal pressed icon color - toggle (selected) |

#### Design Tokens: Button - Color - Outlined

*For outlined buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.outlined.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined outline color |
| `md.comp.button.outlined.selected.container.color` | `md.sys.color.inverse-surface` | COLOR | Button outlined container color - toggle (selected) |
| `md.comp.button.outlined.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined label color |
| `md.comp.button.outlined.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined label color - toggle (unselected) |
| `md.comp.button.outlined.selected.label-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined label color - toggle (selected) |
| `md.comp.button.outlined.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined icon color |
| `md.comp.button.outlined.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined icon color - toggle (unselected) |
| `md.comp.button.outlined.selected.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined icon color - toggle (selected) |
| `md.comp.button.outlined.disabled.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined disabled outline color |
| `md.comp.button.outlined.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined hovered state layer color |
| `md.comp.button.outlined.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined hovered state layer color - toggle (unselected) |
| `md.comp.button.outlined.selected.hovered.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined hovered state layer color - toggle (selected) |
| `md.comp.button.outlined.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Button outlined hovered state layer opacity |
| `md.comp.button.outlined.hovered.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined hovered outline color |
| `md.comp.button.outlined.unselected.hovered.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined hovered outline color - toggle (unselected) |
| `md.comp.button.outlined.hovered.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined hovered label color |
| `md.comp.button.outlined.unselected.hovered.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined hovered label color - toggle (unselected) |
| `md.comp.button.outlined.selected.hovered.label-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined hovered label color - toggle (selected) |
| `md.comp.button.outlined.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined hovered icon color |
| `md.comp.button.outlined.unselected.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined hovered icon color - toggle (unselected) |
| `md.comp.button.outlined.selected.hovered.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined hovered icon color - toggle (selected) |
| `md.comp.button.outlined.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined focused container state layer color |
| `md.comp.button.outlined.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined focused container state layer color - toggle (unselected) |
| `md.comp.button.outlined.selected.focused.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined focused container state layer color - toggle (selected) |
| `md.comp.button.outlined.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Button outlined focused container state layer opacity |
| `md.comp.button.outlined.focused.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined focused outline color |
| `md.comp.button.outlined.unselected.focused.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined focused outline color - toggle (unselected) |
| `md.comp.button.outlined.focused.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined focused label color |
| `md.comp.button.outlined.unselected.focused.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined focused label color - toggle (unselected) |
| `md.comp.button.outlined.selected.focused.label-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined focused label color - toggle (selected) |
| `md.comp.button.outlined.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined focused icon color |
| `md.comp.button.outlined.unselected.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined focused icon color - toggle (unselected) |
| `md.comp.button.outlined.selected.focused.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined focused icon color - toggle (selected) |
| `md.comp.button.outlined.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined pressed container state layer color |
| `md.comp.button.outlined.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined pressed container state layer color - toggle (unselected) |
| `md.comp.button.outlined.selected.pressed.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined pressed container state layer color - toggle (selected) |
| `md.comp.button.outlined.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Button outlined pressed container state layer opacity |
| `md.comp.button.outlined.pressed.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined pressed outline color |
| `md.comp.button.outlined.unselected.pressed.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined pressed outline color - toggle (unselected) |
| `md.comp.button.outlined.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined pressed label color |
| `md.comp.button.outlined.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined pressed label color - toggle (unselected) |
| `md.comp.button.outlined.selected.pressed.label-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined pressed label color - toggle (selected) |
| `md.comp.button.outlined.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined pressed icon color |
| `md.comp.button.outlined.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Button outlined pressed icon color - toggle (unselected) |
| `md.comp.button.outlined.selected.pressed.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Button outlined pressed icon color - toggle (selected) |
| `md.comp.button.outlined.disabled.icon.opacity` | - | OPACITY | Button outlined disabled icon opacity |
| `md.comp.button.outlined.disabled.container.opacity` | - | OPACITY | Button outlined disabled container opacity |
| `md.comp.button.outlined.disabled.label-text.opacity` | - | OPACITY | Button outlined disabled label opacity |
| `md.comp.button.outlined.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Button outlined disabled icon color |
| `md.comp.button.outlined.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Button outlined disabled label color |
| `md.comp.button.outlined.unselected.disabled.outline.color` | `md.sys.color.outline-variant` | COLOR | Button outlined disabled outline color (unselected) |
| `md.comp.button.outlined.selected.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Button outlined disabled container color (selected) |

#### Design Tokens: Button - Color - Text

*For text buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.text.label-text.color` | `md.sys.color.primary` | COLOR | Button text label color |
| `md.comp.button.text.icon.color` | `md.sys.color.primary` | COLOR | Button text icon color |
| `md.comp.button.text.hovered.state-layer.color` | `md.sys.color.primary` | COLOR | Button text hovered state layer color |
| `md.comp.button.text.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Button text hovered state layer opacity |
| `md.comp.button.text.hovered.label-text.color` | `md.sys.color.primary` | COLOR | Button text hovered label color |
| `md.comp.button.text.hovered.icon.color` | `md.sys.color.primary` | COLOR | Button text hovered icon color |
| `md.comp.button.text.focused.state-layer.color` | `md.sys.color.primary` | COLOR | Button text focused state layer color |
| `md.comp.button.text.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Button text focused state layer opacity |
| `md.comp.button.text.focused.label-text.color` | `md.sys.color.primary` | COLOR | Button text focused label color |
| `md.comp.button.text.focused.icon.color` | `md.sys.color.primary` | COLOR | Button text focused icon color |
| `md.comp.button.text.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Button text pressed state layer color |
| `md.comp.button.text.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Button text pressed state layer opacity |
| `md.comp.button.text.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Button text pressed label color |
| `md.comp.button.text.pressed.icon.color` | `md.sys.color.primary` | COLOR | Button text pressed icon color |
| `md.comp.button.text.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Button text disabled label color |
| `md.comp.button.text.disabled.label-text.opacity` | - | OPACITY | Button text disabled label opacity |
| `md.comp.button.text.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Button text disabled icon color |
| `md.comp.button.text.disabled.icon.opacity` | - | OPACITY | Button text disabled icon opacity |
| `md.comp.button.text.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Button text disabled container color |
| `md.comp.button.text.disabled.container.opacity` | - | OPACITY | Button text disabled container opacity |

#### Design Tokens: Button - Size - Xsmall

*For XS buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.xsmall.container.height` | 32dp | LENGTH | Button xsmall container height |
| `md.comp.button.xsmall.outlined.outline.width` | 1dp | LENGTH | Button xsmall outline width |
| `md.comp.button.xsmall.icon.size` | 20dp | LENGTH | Button xsmall icon size |
| `md.comp.button.xsmall.label-text` | `md.sys.typescale.label-large` | TYPOGRAPHY | Button xsmall label size |
| `md.comp.button.xsmall.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Button xsmall shape round |
| `md.comp.button.xsmall.leading-space` | 12dp | LENGTH | Button xsmall leading space |
| `md.comp.button.xsmall.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Button xsmall between icon label space |
| `md.comp.button.xsmall.trailing-space` | 12dp | LENGTH | Button xsmall trailing space |
| `md.comp.button.xsmall.container.shape.square` | `md.sys.shape.corner.medium` | SHAPE | Button xsmall shape square |
| `md.comp.button.xsmall.pressed.container.shape` | `md.sys.shape.corner.small` | SHAPE | Button xsmall shape pressed morph |
| `md.comp.button.xsmall.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button xsmall shape spring animation damping |
| `md.comp.button.xsmall.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Button xsmall selected container shape square |
| `md.comp.button.xsmall.selected.container.shape.round` | `md.sys.shape.corner.medium` | SHAPE | Button xsmall selected container shape round |
| `md.comp.button.xsmall.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button xsmall shape spring animation stiffness |

#### Design Tokens: Button - Size - Small

*For small buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.small.container.height` | 40dp | LENGTH | Button small container height |
| `md.comp.button.small.outlined.outline.width` | 1dp | LENGTH | Button small outline width |
| `md.comp.button.small.label-text` | `md.sys.typescale.label-large` | TYPOGRAPHY | Button small label size |
| `md.comp.button.small.icon.size` | 20dp | LENGTH | Button small icon size |
| `md.comp.button.small.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Button small shape round |
| `md.comp.button.small.leading-space` | `md.sys.measurement.space200` | LENGTH | Button small leading space |
| `md.comp.button.small.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Button small between icon label space |
| `md.comp.button.small.trailing-space` | `md.sys.measurement.space200` | LENGTH | Button small trailing space |
| `md.comp.button.small.container.shape.square` | `md.sys.shape.corner.medium` | SHAPE | Button small shape square |
| `md.comp.button.small.pressed.container.shape` | `md.sys.shape.corner.small` | SHAPE | Button small shape pressed morph |
| `md.comp.button.small.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button small shape spring animation damping |
| `md.comp.button.small.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button small shape spring animation stiffness |
| `md.comp.button.small.selected.container.shape.round` | `md.sys.shape.corner.medium` | SHAPE | Button small selected container shape round |
| `md.comp.button.small.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Button small selected container shape square |

#### Design Tokens: Button - Size - Medium

*For medium buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.medium.container.height` | 56dp | LENGTH | Button medium container height |
| `md.comp.button.medium.outlined.outline.width` | 1dp | LENGTH | Button medium outline width |
| `md.comp.button.medium.label-text` | `md.sys.typescale.title-medium` | TYPOGRAPHY | Button medium label size |
| `md.comp.button.medium.icon.size` | 24dp | LENGTH | Button medium icon size |
| `md.comp.button.medium.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Button medium shape round |
| `md.comp.button.medium.leading-space` | `md.sys.measurement.space300` | LENGTH | Button medium leading space |
| `md.comp.button.medium.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Button medium between icon label space |
| `md.comp.button.medium.trailing-space` | `md.sys.measurement.space300` | LENGTH | Button medium trailing space |
| `md.comp.button.medium.container.shape.square` | `md.sys.shape.corner.large` | SHAPE | Button medium shape square |
| `md.comp.button.medium.pressed.container.shape` | `md.sys.shape.corner.medium` | SHAPE | Button medium shape pressed morph |
| `md.comp.button.medium.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button medium shape spring animation damping |
| `md.comp.button.medium.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button medium shape spring animation stiffness |
| `md.comp.button.medium.selected.container.shape.round` | `md.sys.shape.corner.large` | SHAPE | Button medium selected container shape round |
| `md.comp.button.medium.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Button medium selected container shape square |

#### Design Tokens: Button - Size - Large

*For large buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.large.container.height` | 96dp | LENGTH | Button large container height |
| `md.comp.button.large.outlined.outline.width` | 2dp | LENGTH | Button large outline width |
| `md.comp.button.large.label-text` | `md.sys.typescale.headline-small` | TYPOGRAPHY | Button large label size |
| `md.comp.button.large.icon.size` | 32dp | LENGTH | Button large icon size |
| `md.comp.button.large.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Button large shape round |
| `md.comp.button.large.leading-space` | `md.sys.measurement.space600` | LENGTH | Button large leading space |
| `md.comp.button.large.icon-label-space` | `md.sys.measurement.space150` | LENGTH | Button large between icon label space |
| `md.comp.button.large.trailing-space` | `md.sys.measurement.space600` | LENGTH | Button large trailing space |
| `md.comp.button.large.container.shape.square` | `md.sys.shape.corner.extra-large` | SHAPE | Button large shape square |
| `md.comp.button.large.pressed.container.shape` | `md.sys.shape.corner.large` | SHAPE | Button large shape pressed morph |
| `md.comp.button.large.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button large shape spring animation damping |
| `md.comp.button.large.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button large shape spring animation stiffness |
| `md.comp.button.large.selected.container.shape.round` | `md.sys.shape.corner.extra-large` | SHAPE | Button large selected container shape round |
| `md.comp.button.large.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Button large selected container shape square |

#### Design Tokens: Button - Size - Xlarge

*For XL buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button.xlarge.container.height` | 136dp | LENGTH | Button xlarge container height |
| `md.comp.button.xlarge.outlined.outline.width` | 3dp | LENGTH | Button xlarge outline width |
| `md.comp.button.xlarge.label-text` | `md.sys.typescale.headline-large` | TYPOGRAPHY | Button xlarge label size |
| `md.comp.button.xlarge.icon.size` | 40dp | LENGTH | Button xlarge icon size |
| `md.comp.button.xlarge.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Button xlarge shape round |
| `md.comp.button.xlarge.leading-space` | `md.sys.measurement.space800` | LENGTH | Button xlarge leading space |
| `md.comp.button.xlarge.icon-label-space` | `md.sys.measurement.space200` | LENGTH | Button xlarge between icon label space |
| `md.comp.button.xlarge.trailing-space` | `md.sys.measurement.space800` | LENGTH | Button xlarge trailing space |
| `md.comp.button.xlarge.container.shape.square` | `md.sys.shape.corner.extra-large` | SHAPE | Button xlarge shape square |
| `md.comp.button.xlarge.pressed.container.shape` | `md.sys.shape.corner.large` | SHAPE | Button xlarge shape pressed morph |
| `md.comp.button.xlarge.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button xlarge shape spring animation damping |
| `md.comp.button.xlarge.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button xlarge shape spring animation stiffness |
| `md.comp.button.xlarge.selected.container.shape.round` | `md.sys.shape.corner.extra-large` | SHAPE | Button xlarge selected container shape round |
| `md.comp.button.xlarge.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Button xlarge selected container shape square |


## Anatomy

![Diagram labeling 3 parts of a button.](https://lh3.googleusercontent.com/Vd3wDLwuuQXUGiUdmogIFMY3V4WzpDIz9WvepaTJAmdJhaiKXTxshhrlEwJizdXlvsISt1vMjtSw5AdEr74lkf-uocBR-renjDhE95DrK05r=s2048)

*Caption / Legend:*
1. Container
2. Label text
3. Icon (optional)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

- There are five built-in button color styles: elevated, filled, tonal, outlined, and text
- The default and toggle buttons use different colors
- Toggle buttons don’t use the text style

starNote:These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Diagram shows dark and light color schemes for buttons.](https://lh3.googleusercontent.com/rniAgyk0C8Ys1AH7Lxciu7xnv8p_HA8iVm0AmoTKx5Ntedg_FdE0W66BG1udiPwCbGek3f0g8R2vlirupxprvRfYX8ID2uslj_bVROAMHgI=s2048)

*Caption / Legend:*
A. Elevated, B. Filled, C. Tonal, D. Outlined, E. Text

1. Default
2. Toggle: unselected
3. Toggle: selected

|  | 1. Default | 2. Toggle unselected | 3. Toggle selected |
| --- | --- | --- | --- |
| Elevated container Elevated icon & label | Surface container low Primary | Surface container low Primary | Primary On primary |
| Filled container Filled icon & label | Primary On primary | Surface container On surface variant | Primary On primary |
| Tonal container Tonal icon & label | Secondary container On secondary container | Secondary container On secondary container | Secondary On secondary |
| Outlined container Outlined icon & label | Outline variant (outline) On surface variant | Outline variant (outline) On surface variant | Inverse surface Inverse on surface |
| Text icon & label | Primary | -- | -- |

### High contrast

High contrast mode is an accessibility feature that aims to maximize legibility by using a limited color palette, like black and white. Focus rings are shown when buttons are focused.

![High contrast mode for each variant and style of button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlpy0ie-05.png?alt=media)

*Caption / Legend:*
A. Elevated, B. Filled, C. Tonal, D. Outlined, E. Text

1. Enabled
2. Enabled & focused
3. Selected
4. Selected & focused

## States

States are visual representations used to communicate the status of a component or interactive element.

### Elevated button states

The elevated button style has an elevation of 1 by default and 0 when disabled.

#### Default

![Elevated button states.](https://lh3.googleusercontent.com/n_5apeWPNXiSqDwG3UYvNY5A-FyHJOvbkdqH0Mq47KIxzVbHAq76C6DM1jG_TYTWiHgMPMjgdWA8N3zSKVM2ISe5HiS3MdV5P_u6A8rscjg=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Toggle

![Toggle elevated button states.](https://lh3.googleusercontent.com/GQDxPmCDjJpgGWRA_VTNzseTsmouIs0lh8IVP8woIQk4cgCiAnDMZThBIfxG1GHEqTlUoL585KoCLj8c-1gmGB4OXQJs9qhHkSyjVB0ad6tE=s2048)

*Caption / Legend:*
A. Unselected, B. Selected

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Filled button states

#### Default

![Filled button states.](https://lh3.googleusercontent.com/RwG9SEB4yIRACbW517DyRW2mUveISG198EE64jJb0f277Q33MLyuP9uiKdCmeWhZeWKXDx_yRiSQtlWlpaFp2kRVRX7LlCN5TWc-QwwqszbX3Q=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Toggle

![Toggle filled button states.](https://lh3.googleusercontent.com/oM057IT2WiygsF0GMglnN22051Pgx_Xop2in-So8huFo-CUC5_gyPnBYksLf-wCXu4r6pZJQ1Qg9tPTvn5MUNHjXHilHCB-dPu7kkAF4PhVc=s2048)

*Caption / Legend:*
A. Unselected, B. Selected

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Tonal button states

#### Default

![Tonal button states.](https://lh3.googleusercontent.com/wdF2kYSVD8W-FnPza7kOisTKCDc5FZKUskKzi8j3yZ0m7Ras4cKeoBCwUjpRr4EXjlSia_UfiRWFCCXl4VhbU9ZiwpbpVZetlqdtRGey0LU=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Toggle

![Toggle tonal button states.](https://lh3.googleusercontent.com/SKh3_709LukNHRLX1h-4h3GWRx_g-PfrLaU28b33QM11qyAwNH2d-NPumu2KYhi9TECvF2QqeQ4ptDYUxgdMvdYTbcTiwmm-dsg6CS8Bd_0=s2048)

*Caption / Legend:*
A. Unselected, B. Selected

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Outlined button states

The outlined button’s container fill is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed.

#### Default

![Outlined button states.](https://lh3.googleusercontent.com/0RiSKbIPPzMC64WPAmZrA0Xi2bxyaBAQ8vmzHpEp1yjrhjSJqC0xv3_4jJgYaqh7v4BH7lAJZXkkN_HVyyIupF2JQQWfsYkCl5w2Pd_HEq90=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Toggle

![Outlined button states.](https://lh3.googleusercontent.com/U9yJ0EWfejvgr2j2FQRTLwN2Fk4H0pM4JxoYvRkql-jgBFGSqS26j--nqv_a23AL1Fhsjk5GAjgK4E1h_zDezwK_14acNyWL1Gy4_DWIgkY=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Text button style states

The text button’s container is invisible at rest, but the opacity and state layers behave the same as other button styles when disabled, hovered, focused, or pressed. There is no toggle text button.

![Default text button style states.](https://lh3.googleusercontent.com/BYjS_Tdp0yXd5Dh1aupX_ELYzONtiZU21cT0y1kA5Pb3ne2T43AcIQ85r6jYIkHW6yRp0kQb7TNPiw5qKB9OuAyLUK1GKAa84krq1YOktFnf=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

## Shape morph

### Pressed state

When pressed, buttons can morph to become more square. Both round and square buttons should have the same pressed shape.

The corner radius value differs for each button size. [See full button corner measurements](/m3/pages/common-buttons/specs#b1f39738-6f3a-409b-8f08-4cab6d78d756)

![Shape changes of a button.](https://lh3.googleusercontent.com/Si9asaI7X7SFuvDU46W5nHcZ9p9EVqCsu1Tb4Qfp1iPp2ho_kp85z_RXtK9EcyBqT5eoV-A4i8sJSQeDlY-tBGTl21KSLqLGpzM66hTvyZ67=s1352)

*Caption / Legend:*
A. Round button, B. Square button

1. Enabled
2. Hovered
3. Pressed

### When selected

In addition to changing shape when pressed, toggle buttons also change the resting shape from round (unselected) to square (selected).

If the resting unselected shape is square, the selected shape should be round.

![Shape changes of a toggle button.](https://lh3.googleusercontent.com/5hC5Vdz-txbFAuGYY8Bkij-tCNyyjHc1B2zDoFQ5WWkR9Aw6yCNB8hKYi3CO0DJ2xlNab2JbXSPsm4HrByy21SU6_KVLN7PYaiSOeDlSmsbc=s1352)

*Caption / Legend:*
A. Round button, B. Square button

1. Enabled
2. Hovered
3. Pressed
4. Selected

## Measurements

![Diagram of measurements of all button sizes.](https://lh3.googleusercontent.com/JI2E9iCMwHgDDeC9fzCaTP1M974jPyBdpsV1OJoM83PKO0IINS4OUaPbdn9iT6ogQQqtFeBYb_IBT_sycEUkj3S6t4KEjZbGE1xT7-RL0JDX=s2048)

*Caption / Legend:*
Padding and size measurements of each button size

1. Extra small
2. Small
3. Medium
4. Large
5. Extra large

### Target areas

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

![Diagram of small button target areas.](https://lh3.googleusercontent.com/35JMIvVuBd4UPv4LMpZ6rM_Hkn4S2UZlra92CcqY20cPp9334PxNr8KPaR-1P1d8q6Emonifwrp79hmxD5e2Ia_FQBDuKQhTKptbwn8uvPNZUQ=s1352)

*Caption / Legend:*
A. Extra small  B. Small

1. Round button
2. Button with icon
3. Square button

### Corner sizes

![Diagram of corner radii of buttons.](https://lh3.googleusercontent.com/sULNWNl9-8wPo3EiYHaqeFSTE3FnFXFotQmIJzabpV-JJPCaSWvwhK3u82A6CeaMqBYmQz3dyWBArTDULDf2FRWfTYV2ZtrX0IA2na9bdbJa=s2050)

|  | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

## Baseline tokens

Use the table's menu to switch token sets. The baseline button token sets are organized by color.

#### Design Tokens: [Deprecated] Button - Elevated

*This token set is deprecated. Use `md.comp.button.elevated` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.elevated-button.with-icon.pressed.icon.color` | `md.sys.color.primary` | COLOR | Elevated button with icon pressed icon color |
| `md.comp.elevated-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Elevated button pressed state layer opacity |
| `md.comp.elevated-button.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Elevated button pressed state layer color |
| `md.comp.elevated-button.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Elevated button pressed label color |
| `md.comp.elevated-button.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated button pressed container elevation |
| `md.comp.elevated-button.with-icon.focus.icon.color` | `md.sys.color.primary` | COLOR | Elevated button with icon focus icon color |
| `md.comp.elevated-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Elevated button focus state layer opacity |
| `md.comp.elevated-button.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Elevated button focus state layer color |
| `md.comp.elevated-button.focus.label-text.color` | `md.sys.color.primary` | COLOR | Elevated button focus label color |
| `md.comp.elevated-button.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated button focus container elevation |
| `md.comp.elevated-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Elevated button focus indicator offset |
| `md.comp.elevated-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Elevated button focus indicator thickness |
| `md.comp.elevated-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Elevated button focus indicator color |
| `md.comp.elevated-button.with-icon.hover.icon.color` | `md.sys.color.primary` | COLOR | Elevated button with icon hover icon color |
| `md.comp.elevated-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Elevated button hover state layer opacity |
| `md.comp.elevated-button.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Elevated button hover state layer color |
| `md.comp.elevated-button.hover.label-text.color` | `md.sys.color.primary` | COLOR | Elevated button hover label color |
| `md.comp.elevated-button.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Elevated button hover container elevation |
| `md.comp.elevated-button.with-icon.disabled.icon.opacity` | - | OPACITY | Elevated button with icon disabled icon opacity |
| `md.comp.elevated-button.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Elevated button with icon disabled icon color |
| `md.comp.elevated-button.disabled.label-text.opacity` | - | OPACITY | Elevated button disabled label opacity |
| `md.comp.elevated-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Elevated button disabled label color |
| `md.comp.elevated-button.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Elevated button disabled container elevation |
| `md.comp.elevated-button.disabled.container.opacity` | - | OPACITY | Elevated button disabled container opacity |
| `md.comp.elevated-button.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Elevated button disabled container color |
| `md.comp.elevated-button.with-icon.icon.color` | `md.sys.color.primary` | COLOR | Elevated button with icon icon color |
| `md.comp.elevated-button.with-icon.icon.size` | 18dp | LENGTH | Elevated button with icon icon size |
| `md.comp.elevated-button.label-text.color` | `md.sys.color.primary` | COLOR | Elevated button label color |
| `md.comp.elevated-button.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.elevated-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Elevated button label font |
| `md.comp.elevated-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Elevated button label weight |
| `md.comp.elevated-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Elevated button label size |
| `md.comp.elevated-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Elevated button label line height |
| `md.comp.elevated-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Elevated button label tracking |
| `md.comp.elevated-button.container.color` | `md.sys.color.surface-container-low` | COLOR | Elevated button container color |
| `md.comp.elevated-button.container.shadow-color` | `md.sys.color.shadow` | COLOR | Elevated button container shadow color |
| `md.comp.elevated-button.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated button container elevation |
| `md.comp.elevated-button.container.height` | 40dp | LENGTH | Elevated button container height |
| `md.comp.elevated-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Elevated button container shape |
| `md.comp.elevated-button.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Elevated button container surface tint layer color |

#### Design Tokens: [Deprecated] Button - Filled

*This token set is deprecated. Use `md.comp.button.filled` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filled-button.with-icon.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Filled button with icon pressed icon color |
| `md.comp.filled-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filled button pressed state layer opacity |
| `md.comp.filled-button.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled button pressed state layer color |
| `md.comp.filled-button.pressed.label-text.color` | `md.sys.color.on-primary` | COLOR | Filled button pressed label color |
| `md.comp.filled-button.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled button pressed container elevation |
| `md.comp.filled-button.with-icon.focus.icon.color` | `md.sys.color.on-primary` | COLOR | Filled button with icon focus icon color |
| `md.comp.filled-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filled button focus state layer opacity |
| `md.comp.filled-button.focus.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled button focus state layer color |
| `md.comp.filled-button.focus.label-text.color` | `md.sys.color.on-primary` | COLOR | Filled button focus label color |
| `md.comp.filled-button.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled button focus container elevation |
| `md.comp.filled-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Filled button focus indicator offset |
| `md.comp.filled-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filled button focus indicator thickness |
| `md.comp.filled-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Filled button focus indicator color |
| `md.comp.filled-button.with-icon.hover.icon.color` | `md.sys.color.on-primary` | COLOR | Filled button with icon hover icon color |
| `md.comp.filled-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled button hover state layer opacity |
| `md.comp.filled-button.hover.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled button hover state layer color |
| `md.comp.filled-button.hover.label-text.color` | `md.sys.color.on-primary` | COLOR | Filled button hover label color |
| `md.comp.filled-button.hover.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filled button hover container elevation |
| `md.comp.filled-button.with-icon.disabled.icon.opacity` | - | OPACITY | Filled button with icon disabled icon opacity |
| `md.comp.filled-button.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Filled button with icon disabled icon color |
| `md.comp.filled-button.disabled.label-text.opacity` | - | OPACITY | Filled button disabled label opacity |
| `md.comp.filled-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Filled button disabled label color |
| `md.comp.filled-button.disabled.container.opacity` | - | OPACITY | Filled button disabled container opacity |
| `md.comp.filled-button.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filled button disabled container color |
| `md.comp.filled-button.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled button disabled container elevation |
| `md.comp.filled-button.with-icon.icon.color` | `md.sys.color.on-primary` | COLOR | Filled button with icon icon color |
| `md.comp.filled-button.with-icon.icon.size` | 18dp | LENGTH | Filled button with icon icon size |
| `md.comp.filled-button.label-text.color` | `md.sys.color.on-primary` | COLOR | Filled button label color |
| `md.comp.filled-button.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.filled-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Filled button label font |
| `md.comp.filled-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Filled button label weight |
| `md.comp.filled-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Filled button label size |
| `md.comp.filled-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Filled button label line height |
| `md.comp.filled-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Filled button label tracking |
| `md.comp.filled-button.container.color` | `md.sys.color.primary` | COLOR | Filled button container color |
| `md.comp.filled-button.container.shadow-color` | `md.sys.color.shadow` | COLOR | Filled button container shadow color |
| `md.comp.filled-button.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled button container elevation |
| `md.comp.filled-button.container.height` | 40dp | LENGTH | Filled button container height |
| `md.comp.filled-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Filled button container shape |
| `md.comp.filled-button.with-icon.dragged.icon.color` | `md.sys.color.on-primary` | COLOR | Filled button with icon dragged icon color |
| `md.comp.filled-button.dragged.label-text.color` | `md.sys.color.on-primary` | COLOR | Filled button dragged label color |
| `md.comp.filled-button.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Filled button dragged state layer opacity |
| `md.comp.filled-button.dragged.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled button dragged state layer color |
| `md.comp.filled-button.dragged.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Filled button dragged container elevation |

#### Design Tokens: [Deprecated] Button - Tonal

*This token set is deprecated. Use `md.comp.button.tonal` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filled-tonal-button.with-icon.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button pressed icon color |
| `md.comp.filled-tonal-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filled tonal button pressed state layer opacity |
| `md.comp.filled-tonal-button.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button pressed state layer color |
| `md.comp.filled-tonal-button.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button pressed label text color |
| `md.comp.filled-tonal-button.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled tonal button pressed container elevation |
| `md.comp.filled-tonal-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filled tonal button focus state layer opacity |
| `md.comp.filled-tonal-button.with-icon.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button focus icon color |
| `md.comp.filled-tonal-button.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button focus state layer color |
| `md.comp.filled-tonal-button.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button focus label text color |
| `md.comp.filled-tonal-button.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled tonal button focus container elevation |
| `md.comp.filled-tonal-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Filled tonal button focus indicator offset |
| `md.comp.filled-tonal-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filled tonal button focus indicator thickness |
| `md.comp.filled-tonal-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Filled tonal button focus indicator color |
| `md.comp.filled-tonal-button.with-icon.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button hover icon color |
| `md.comp.filled-tonal-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled tonal button hover state layer opacity |
| `md.comp.filled-tonal-button.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button hover state layer color |
| `md.comp.filled-tonal-button.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button hover label text color |
| `md.comp.filled-tonal-button.hover.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filled tonal button hover container elevation |
| `md.comp.filled-tonal-button.with-icon.disabled.icon.opacity` | - | OPACITY | Filled tonal button disabled icon opacity |
| `md.comp.filled-tonal-button.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Filled tonal button disabled icon color |
| `md.comp.filled-tonal-button.disabled.label-text.opacity` | - | OPACITY | Filled tonal button disabled label text opacity |
| `md.comp.filled-tonal-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Filled tonal button disabled label text color |
| `md.comp.filled-tonal-button.disabled.container.opacity` | - | OPACITY | Filled tonal button disabled container opacity |
| `md.comp.filled-tonal-button.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled tonal button disabled container elevation |
| `md.comp.filled-tonal-button.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filled tonal button disabled container color |
| `md.comp.filled-tonal-button.with-icon.icon.size` | 18dp | LENGTH | Filled tonal button icon size |
| `md.comp.filled-tonal-button.with-icon.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button icon color |
| `md.comp.filled-tonal-button.label-text.type` | - | TYPOGRAPHY | Filled tonal button label text type |
| `md.comp.filled-tonal-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Filled tonal button label text font |
| `md.comp.filled-tonal-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Filled tonal button label text weight |
| `md.comp.filled-tonal-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Filled tonal button label text size |
| `md.comp.filled-tonal-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Filled tonal button label text line height |
| `md.comp.filled-tonal-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Filled tonal button label text tracking |
| `md.comp.filled-tonal-button.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal button label text color |
| `md.comp.filled-tonal-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Filled tonal button container shape |
| `md.comp.filled-tonal-button.container.height` | 40dp | LENGTH | Filled tonal button container height |
| `md.comp.filled-tonal-button.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled tonal button container elevation |
| `md.comp.filled-tonal-button.container.shadow-color` | `md.sys.color.shadow` | COLOR | Filled tonal button container shadow color |
| `md.comp.filled-tonal-button.container.color` | `md.sys.color.secondary-container` | COLOR | Filled tonal button container color |

#### Design Tokens: [Deprecated] Button – Outlined

*This token set is deprecated. Use `md.comp.button.outlined` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.outlined-button.pressed.outline.color` | `md.sys.color.outline` | COLOR | Outlined button pressed outline color |
| `md.comp.outlined-button.with-icon.pressed.icon.color` | `md.sys.color.primary` | COLOR | Outlined button with icon pressed icon color |
| `md.comp.outlined-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Outlined button pressed state layer opacity |
| `md.comp.outlined-button.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Outlined button pressed state layer color |
| `md.comp.outlined-button.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Outlined button pressed label color |
| `md.comp.outlined-button.focus.outline.color` | `md.sys.color.primary` | COLOR | Outlined button focus outline color |
| `md.comp.outlined-button.with-icon.focus.icon.color` | `md.sys.color.primary` | COLOR | Outlined button with icon focus icon color |
| `md.comp.outlined-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Outlined button focus state layer opacity |
| `md.comp.outlined-button.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Outlined button focus state layer color |
| `md.comp.outlined-button.focus.label-text.color` | `md.sys.color.primary` | COLOR | Outlined button focus label color |
| `md.comp.outlined-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Outlined button focus indicator offset |
| `md.comp.outlined-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Outlined button focus indicator thickness |
| `md.comp.outlined-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Outlined button focus indicator color |
| `md.comp.outlined-button.hover.outline.color` | `md.sys.color.outline` | COLOR | Outlined button hover outline color |
| `md.comp.outlined-button.with-icon.hover.icon.color` | `md.sys.color.primary` | COLOR | Outlined button with icon hover icon color |
| `md.comp.outlined-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Outlined button hover state layer opacity |
| `md.comp.outlined-button.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Outlined button hover state layer color |
| `md.comp.outlined-button.hover.label-text.color` | `md.sys.color.primary` | COLOR | Outlined button hover label color |
| `md.comp.outlined-button.disabled.outline.opacity` | - | OPACITY | Outlined button disabled outline opacity |
| `md.comp.outlined-button.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined button disabled outline color |
| `md.comp.outlined-button.with-icon.disabled.icon.opacity` | - | OPACITY | Outlined button with icon disabled icon opacity |
| `md.comp.outlined-button.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined button with icon disabled icon color |
| `md.comp.outlined-button.disabled.label-text.opacity` | - | OPACITY | Outlined button disabled label opacity |
| `md.comp.outlined-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined button disabled label color |
| `md.comp.outlined-button.with-icon.icon.color` | `md.sys.color.primary` | COLOR | Outlined button with icon icon color |
| `md.comp.outlined-button.label-text.color` | `md.sys.color.primary` | COLOR | Outlined button label color |
| `md.comp.outlined-button.with-icon.icon.size` | 18dp | LENGTH | Outlined button with icon icon size |
| `md.comp.outlined-button.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.outlined-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Outlined button label font |
| `md.comp.outlined-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Outlined button label weight |
| `md.comp.outlined-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Outlined button label size |
| `md.comp.outlined-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Outlined button label line height |
| `md.comp.outlined-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Outlined button label tracking |
| `md.comp.outlined-button.outline.width` | 1dp | LENGTH | Outlined button outline width |
| `md.comp.outlined-button.outline.color` | `md.sys.color.outline` | COLOR | Outlined button outline color |
| `md.comp.outlined-button.container.height` | 40dp | LENGTH | Outlined button container height |
| `md.comp.outlined-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Outlined button container shape |
| `md.comp.outlined-button.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Outlined button container elevation |

#### Design Tokens: [Deprecated] Button - Text

*This token set is deprecated. Use `md.comp.button.text` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.text-button.with-icon.pressed.icon.color` | `md.sys.color.primary` | COLOR | Text button with icon pressed icon color |
| `md.comp.text-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Text button pressed state layer opacity |
| `md.comp.text-button.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Text button pressed state layer color |
| `md.comp.text-button.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Text button pressed label color |
| `md.comp.text-button.with-icon.focus.icon.color` | `md.sys.color.primary` | COLOR | Text button with icon focus icon color |
| `md.comp.text-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Text button focus state layer opacity |
| `md.comp.text-button.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Text button focus state layer color |
| `md.comp.text-button.focus.label-text.color` | `md.sys.color.primary` | COLOR | Text button focus label color |
| `md.comp.text-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Text button focus indicator offset |
| `md.comp.text-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Text button focus indicator thickness |
| `md.comp.text-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Text button focus indicator color |
| `md.comp.text-button.with-icon.hover.icon.color` | `md.sys.color.primary` | COLOR | Text button with icon hover icon color |
| `md.comp.text-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Text button hover state layer opacity |
| `md.comp.text-button.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Text button hover state layer color |
| `md.comp.text-button.hover.label-text.color` | `md.sys.color.primary` | COLOR | Text button hover label color |
| `md.comp.text-button.with-icon.disabled.icon.opacity` | - | OPACITY | Text button with icon disabled icon opacity |
| `md.comp.text-button.with-icon.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Text button with icon disabled icon color |
| `md.comp.text-button.disabled.label-text.opacity` | - | OPACITY | Text button disabled label opacity |
| `md.comp.text-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Text button disabled label color |
| `md.comp.text-button.with-icon.icon.color` | `md.sys.color.primary` | COLOR | Text button with icon icon color |
| `md.comp.text-button.label-text.color` | `md.sys.color.primary` | COLOR | Text button label color |
| `md.comp.text-button.with-icon.icon.size` | 18dp | LENGTH | Text button with icon icon size |
| `md.comp.text-button.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.text-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Text button label font |
| `md.comp.text-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Text button label weight |
| `md.comp.text-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Text button label size |
| `md.comp.text-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Text button label line height |
| `md.comp.text-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Text button label tracking |
| `md.comp.text-button.container.height` | 40dp | LENGTH | Text button container height |
| `md.comp.text-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Text button container shape |
| `md.comp.text-button.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Text button container elevation |


## Guidelines

![Buttons in various shapes and sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlqkp7g-01.png?alt=media)

*Caption / Legend:*
Buttons and icon buttons come in many shapes, styles, and sizes

## Usage

Buttons communicate actions that people can take. They are typically placed throughout the UI, in places like:

- Dialogs
- Modal windows
- Forms
- Cards
- Toolbars

They can also be placed within standard button groups.

Buttons are just one option for representing actions in a product and shouldn’t be overused. Too many buttons on a screen can disrupt the visual hierarchy.

Consider placing additional actions in a navigation rail, set of chips, text links, or icon buttons.

![1 button placed on bottom right of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlqpj6e-03-do.png?alt=media)

*Caption / Legend:*
Use buttons for discrete actions

![3 buttons side by side on bottom of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlqpykn-04-don't.png?alt=media)

*Caption / Legend:*
Don’t clutter your UI with too many buttons. Consider presenting low-priority actions in overflow menus or as icon buttons.

![Filled button on menu screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlqs2ix-05-do.png?alt=media)

*Caption / Legend:*
A button container’s width is dynamically set to fit its label text

![Filled button as wide as layout grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlqslcx-06-do.png?alt=media)

*Caption / Legend:*
Button container width can be responsive, which allows it to stretch horizontally

![Filled button with label text overflowing the container. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlqt8jf-07-don't.png?alt=media)

*Caption / Legend:*
A button container’s width shouldn’t be narrower than its label text

![Diagram of button styles and toggle behaviors.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlquaj1-08.png?alt=media)

*Caption / Legend:*
A: Default button; B: Toggle (unselected); C: Toggle (selected) for five button styles, in order of emphasis:

1. Elevated button
2. Filled button
3. Filled tonal button
4. Outlined button
5. Text button

A button group is a collection of buttons that relate to each other and can respond to one another. Both buttons and icon buttons can be used inside a button group.

In some cases, there are primary and secondary actions within a button group. Buttons with primary actions should have a higher visual emphasis through size, color, or shape.

[More on button groups](/m3/pages/button-groups/overview)

![Audio app with play, next, and back buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t81e1q-9.png?alt=media)

*Caption / Legend:*
Different sized buttons in a button group help emphasize the main action from secondary actions

## Toggle buttons

Toggle buttons should be used for binary selections, such as **Save** or **Favorite**. When toggle buttons are pressed, they can change color, shape, and labels.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected. If a filled version doesn’t exist, increase the weight instead.

By default, toggle buttons change from round to square when selected.

If the label changes on selected or unselected states, be mindful of the character count. Changing the label significantly is disruptive to the user and the page layout.

![Toggleable “start” and “reset” buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlt4ivd-11-do.png?alt=media)

*Caption / Legend:*
When using toggleable buttons, keep the label character count a similar length for both states

![Toggleable “start” and “reset back to beginning” buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlt52gk-12-dont.png?alt=media)

*Caption / Legend:*
The label length shouldn’t change dramatically to be longer or shorter

## Anatomy

![3 parts of a button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlt6b63-13.png?alt=media)

*Caption / Legend:*
1. Label text
2. Container
3. Icon (optional)

### Label text

Label text is the most important element of a button. It describes the action that will occur if someone taps a button. It should be very brief, ideally 1–3 words.

Use sentence case, which only capitalizes the first word and proper nouns. This allows the text to distinguish proper nouns, for example: **Book with Flights**, not **BOOK WITH FLIGHTS**.

Don’t truncate or wrap label text. It should always be fully visible on a single line.

![Button with label text “See all recipes.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlt7k3u-14-do.png?alt=media)

*Caption / Legend:*
Use sentence case for button label text, capitalizing the first word and proper nouns

![Button with wrapped label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlt7yj0-15-dont.png?alt=media)

*Caption / Legend:*
Don’t wrap text. For maximum legibility, label text should remain on a single line.

Buttons with the **outlined** and **text** color style depend on the colors to be recognizable from other text and elements. Use caution when putting these buttons next to visually similar elements, such as chips or large text.

![Chips next to an outlined button, highlighting their similarities.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlt97u1-16-%20caution.png?alt=media)

*Caption / Legend:*
The outlined button style is very similar to chips. Consider using a filled or tonal button instead.

### Container

Button containers hold the label text and optional icon. Buttons with the **text** color style have a visible container only when hovered, focused, or pressed.

Buttons with a round shape have containers with fully rounded corners.

![Round button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltabq2-17.png?alt=media)

*Caption / Legend:*
Round buttons have containers with fully rounded corners

Buttons with a square shape have containers with more subtle rounding that changes based on button size.

![Square buttons with different radii.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltba1r-18.png?alt=media)

*Caption / Legend:*
Square buttons have square containers and change radius as the button size changes

![Button with the label text “Edit playlist” within the container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltc6hg-19-do.png?alt=media)

*Caption / Legend:*
A button’s width dynamically adjusts to the label text

![Button with text larger than its container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltdu8d-20-dont.png?alt=media)

*Caption / Legend:*
Avoid setting a fixed width smaller than the label text

### Icon (optional)

Icons visually communicate the button’s action and help draw attention. They should be placed on the leading side of the button, before the label text.

![Filled button with the icon to the left of the label in a left-to-right language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltfge9-21-do.png?alt=media)

*Caption / Legend:*
Place the icon to the left of the label in buttons with text in left-to-right languages

![Filled button with the icon to the right of the label in a right-to-left language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltfyz4-22-do.png?alt=media)

*Caption / Legend:*
Place the icon to the right of the label in buttons with text in right-to-left languages

![Button with shopping cart icon and text label “Add to cart”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlthjj7-23-do.png?alt=media)

*Caption / Legend:*
Use icons that clearly communicate their meaning

![Button with Plus icon vertically above the text label “Add to watch list”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltnhb2-24-dont.png?alt=media)

*Caption / Legend:*
Don’t vertically align an icon and text in the center of a button

![Button with two icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltof7i-25-dont.png?alt=media)

*Caption / Legend:*
Don’t use two icons in the same button

## Color styles

### Elevated style

The **elevated** button style is the same as the tonal button, but with a shadow.

To avoid overusing shadows, use the elevated style only when absolutely necessary, such as when the button requires visual separation from a visually prominent background.

![Elevated button on a scrim background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltpyn5-26.png?alt=media)

*Caption / Legend:*
Elevated buttons provide separation from a visually prominent background

Buttons at higher elevations typically have more emphasis in a design, and should be used sparingly. For high emphasis, consider the filled style instead.

![Elevated button in a shopping experience.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmltrnw9-27-caution.png?alt=media)

*Caption / Legend:*
Higher elevation increases the emphasis of a button

### Filled style

The **filled** button style has the most visual impact after the FAB, and should be used for important, final actions that complete a flow, like **Save**, **Join now**, or **Confirm**.

![Filled button reading “Make payment.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlz52ml-28.png?alt=media)

*Caption / Legend:*
Filled buttons have high visual impact when used for important actions

Since they have such strong emphasis, the filled style should be used sparingly, ideally for only one action on a page.

In some cases, filled buttons can use tertiary colors.

![Filled “pause” button in a music app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmlz6rew-29.png?alt=media)

*Caption / Legend:*
Filled buttons can be responsive to the layout grid and help emphasize main actions

### Tonal style

The **tonal** button style is useful in contexts where a lower-priority button requires slightly more emphasis than an outline would give, such as **Next** in an onboarding flow. Tonal buttons use the secondary color mapping.

![Shopping app with 2 tonal-style filled buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0gmxc-30.png?alt=media)

*Caption / Legend:*
The tonal style has less emphasis than filled or emphasis

### Outlined style

The **outlined** style is ideal for medium-emphasis buttons which contain actions that are important, but aren’t the primary action in a product.

Outlined buttons pair well with filled buttons to indicate alternative, secondary actions.

![Outlined buttons for less important actions, including a back button and a button that reads “Next movie.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0loal-31.png?alt=media)

*Caption / Legend:*
Outlined buttons contain less important supporting actions

Outlined buttons display a stroke around the button container, and have no fill by default. 

They should be placed on simple backgrounds, not visually prominent backgrounds such as images or videos.

![Outlined button for “add to cart” in shopping app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0mtua-32.png?alt=media)

*Caption / Legend:*
Outlined buttons display a stroke around the button container

![Outlined button labeled Add to calendar on a pink/purple background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0nymp-33-do.png?alt=media)

*Caption / Legend:*
Outlined buttons can be used on backgrounds with a color gradient

![2 photos, each with an outlined button with a custom fill.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0oqjx-34-caution.png?alt=media)

*Caption / Legend:*
Use caution when placing outlined buttons on top of images. Customizing the button to have a contrasting container fill can help ensure legibility of label text. Or, use a filled button instead.

### Text style

The text button style should be used for the lowest priority actions, especially when presenting multiple options.

They should be placed on simple backgrounds, not visually prominent backgrounds such as images or videos. The container isn’t visible until someone interacts with the button.

Don’t underline the text button. Use hyperlinked body text instead to emphasize links. [More on hyperlinks](/m3/pages/typography/applying-type#24856f70-f759-45df-a06c-92018f286083)

![Example calendar screen with 2 text buttons and 1 split button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0q822-35.png?alt=media)

*Caption / Legend:*
Use text buttons for the lowest priority actions

Text buttons are often placed within components such as cards, dialogs, and snackbars. Since text buttons don’t have a visible container in their default state, they don’t distract from nearby content.

However, since there’s no container, the label text color must always be recognizable from non-button text and elements.

![Text button labeled “Retry” in a snackbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0rpw4-36.png?alt=media)

*Caption / Legend:*
Text button in a snackbar

![Text button labeled “View album” on an album cover background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0s6c1-37.png?alt=media)

*Caption / Legend:*
Text button against an image background

In cards, text buttons help maintain an emphasis on card content.

![Text button labeled “Learn more” in an information card about sourdough bread.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0tlmd-38.png?alt=media)

*Caption / Legend:*
Text button in a card

Dialogs use text buttons because the absence of a container helps unify the action with the dialog text.

Align text buttons to the trailing edge of dialogs, on the right for left-to-right languages and on the left for right-to-left languages.

![Modal dialog with the title “Subscribe to our newsletter?” and trailing buttons “Cancel” and “Subscribe”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0v0go-39.png?alt=media)

*Caption / Legend:*
Text buttons in a dialog

## Adaptive design

### Resizing

When scaling layouts for large screen devices, buttons can adapt their visual presentation, size, alignment, and arrangement to fit different contexts and user needs.

Choose the best button position based on screen size.

![Flights app in compact screen with buttons below flight information.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0vwgx-41.png?alt=media)

*Caption / Legend:*
Filled buttons are end-aligned below flight information in a compact window

![Flights app in large screen with buttons to the left of flight information.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0wuqe-40.png?alt=media)

*Caption / Legend:*
Filled buttons are start-aligned beside flight information in a large window

The icon and label text in a button stay centered and grouped as the button's width changes.

![2 buttons with horizontally centered text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0y1g6-42-do.png?alt=media)

*Caption / Legend:*
Keep the icon and label text grouped and centered

![1 button with centered text label, 1 button with icon and label aligned to opposite edges.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0yith-43-dont.png?alt=media)

*Caption / Legend:*
Don't ungroup the icon and label text or let them anchor to opposite sides of the button

Buttons can be customized to change size and scaling behavior across different breakpoints.

To avoid creating very long buttons in large windows, constrain button width or place buttons beside other elements.

![Button width is over-stretched with screen width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm0zsof-44-dont.png?alt=media)

*Caption / Legend:*
Don’t allow the button to stretch in a way that creates long, flat buttons with very little content inside

### Presentation

The size and placement of buttons can change as parent containers, such as cards, adapt for larger screens.

Keep items, including buttons, in the same order between large and small screens to provide a consistent experience for screen readers and keyboard navigation.

![2 buttons scaling to accommodate different device sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm11hfb-45.png?alt=media)

*Caption / Legend:*
Buttons can move in the layout, but elements should remain in the same order

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Use a button to perform an action
- Navigate to and activate a button

## Interaction & style

### Color contrast

Enabled buttons need a 3:1 contrast ratio with the background to meet accessibility best practices.

This is measured from the container for elevated, filled, and tonal button styles, and the label text for outlined and text button styles.

![Diagram of color contrast ratios for buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm13hkn-01.png?alt=media)

*Caption / Legend:*
Higher contrast helps differentiate elements

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, button labels should be kept concise enough to fit within two lines after the text size is increased to 200%. If a button label exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

![200% text size on a mobile screen. The overly long button text wraps to a second line: “Download playlist for offline access”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm14hok-02-caution.png?alt=media)

*Caption / Legend:*
Avoid excessive text wrapping or truncation by choosing concise strings

### Rapid clicks

On the web, you can use a modified motion curve to avoid resonant effects from overlapping animations. This provides a smoother experience for interactions where you anticipate multiple clicks or taps in succession.

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Navigate to a button |
| Space or Enter | Activate a button |

## Labeling elements

The accessibility label for a button should match the visible label text on the button such as **Done**, **Send**, or **Reply**.

It can contain extra contextual information if necessary.

![Accessibility tags for a text-only button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmm17kt7-03.png?alt=media)
