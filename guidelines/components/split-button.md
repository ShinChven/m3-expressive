# Split buttons

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/split-button](https://m3.material.io/components/split-button)
> Last Updated: 2026-09-08T09:29:46.314Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use to show an action with a menu of related actions
- Same size range as buttons and icon buttons: XS, S, M, L, XL

## Availability & resources

## M3 Expressive update

**May 2025**

The split button has a separate menu button that spins and changes shape when activated. It can be used alongside other buttons of the same size. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

New component added to catalog.

Sizes:

- Extra small
- Small
- Medium
- Large
- Extra large

Color styles:

- Elevated
- Filled
- Tonal
- Outlined

![5 sizes of split buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmjd8r-2.png?alt=media)

*Caption / Legend:*
Split buttons have the same five recommended sizes as label and icon buttons

## Specs

## Variants

![1 type of split button.](https://lh3.googleusercontent.com/F2kUnhi2ZrsjiRH1K8Vru69-_x8fiFll-_4x9F4Nn-Y2X-KktX3SGtz5KBK4EkCQx5So3aXSeDexmjR-VUeVsm7EfqLTcZ5TKCRA9NwTSNlUNg=s2048)

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Split button | -- | Available |

## Configurations

![4 colors and 5 sizes of split buttons.](https://lh3.googleusercontent.com/1yQajxz3WCQRMH3AdX8Tg7OPVxOT2Lcj8f3T7pDYmRcVZhFzkHR55JK8u7zD0did-AL95AJrs_xn2391HKaueEvxnZKkfV6Z_rC5C7T5YPE5=s2048)

*Caption / Legend:*
1. Color configurations: Elevated, filled, tonal, outlined
2. Size configurations: XS, S, M, L, XL

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | XS, S, M, L, XL | -- | Available |
| Color | Elevated, filled, tonal, outlined | -- | Available |

## Tokens & specs

Use the table's menu to select a token set. Split button token sets are organized by size. [Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: Split button - Size - Xsmall

*For XS split buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.split-button.xsmall.trailing-button.inner-corner.selected.corner-size` | 50percent | LENGTH | Split button xsmall trailing button inner corner selected size |
| `md.comp.split-button.xsmall.inner-corner.pressed.corner-size` | `md.sys.shape.corner-value.small` | SHAPE | Split button xsmall inner corner pressed size |
| `md.comp.split-button.xsmall.inner-corner.hovered.corner-size` | `md.sys.shape.corner-value.small` | SHAPE | Split button xsmall inner corner hovered size |
| `md.comp.split-button.xsmall.outer-corner.corner-size` | 50percent | LENGTH | Split button xsmall outer corner size |
| `md.comp.split-button.xsmall.inner-corner.corner-size` | `md.sys.shape.corner-value.extra-small` | SHAPE | Split button xsmall inner corner size |
| `md.comp.split-button.xsmall.leading-button.leading-space` | `md.sys.measurement.space150` | LENGTH | Split button xsmall leading button leading space |
| `md.comp.split-button.xsmall.leading-button.trailing-space` | `md.sys.measurement.space125` | LENGTH | Split button xsmall leading button trailing space |
| `md.comp.split-button.xsmall.trailing-button.icon.size` | 22dp | LENGTH | Split button xsmall trailing button icon size |
| `md.comp.split-button.xsmall.trailing-button.trailing-space` | 13dp | LENGTH | Split button xsmall trailing button trailing space |
| `md.comp.split-button.xsmall.trailing-button.leading-space` | 13dp | LENGTH | Split button xsmall trailing button leading space |
| `md.comp.split-button.xsmall.container.height` | 32dp | LENGTH | Split button xsmall container height |
| `md.comp.split-button.xsmall.between-space` | `md.sys.measurement.space25` | LENGTH | Split button xsmall between space |
| `md.comp.split-button.xsmall.container.shape` | `md.sys.shape.corner.full` | SHAPE | Split button xsmall container shape |

#### Design Tokens: Split button - Size - Small

*For small split buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.split-button.small.trailing-button.inner-corner.selected.corner-size` | 50percent | LENGTH | Split button small trailing button inner corner selected size |
| `md.comp.split-button.small.inner-corner.pressed.corner-size` | `md.sys.shape.corner-value.medium` | SHAPE | Split button small inner corner pressed size |
| `md.comp.split-button.small.inner-corner.hovered.corner-size` | `md.sys.shape.corner-value.medium` | SHAPE | Split button small inner corner hovered size |
| `md.comp.split-button.small.inner-corner.corner-size` | `md.sys.shape.corner-value.extra-small` | SHAPE | Split button small inner corner size |
| `md.comp.split-button.small.container.height` | 40dp | LENGTH | Split button small container height |
| `md.comp.split-button.small.between-space` | `md.sys.measurement.space25` | LENGTH | Split button small between space |
| `md.comp.split-button.small.container.shape` | `md.sys.shape.corner.full` | SHAPE | Split button small container shape |
| `md.comp.split-button.small.leading-button.leading-space` | `md.sys.measurement.space200` | LENGTH | Split button small leading button leading space |
| `md.comp.split-button.small.leading-button.trailing-space` | `md.sys.measurement.space150` | LENGTH | Split button small leading button trailing space |
| `md.comp.split-button.small.trailing-button.icon.size` | 22dp | LENGTH | Split button small trailing button icon size |
| `md.comp.split-button.small.trailing-button.leading-space` | 13dp | LENGTH | Split button small trailing button leading space |
| `md.comp.split-button.small.trailing-button.trailing-space` | 13dp | LENGTH | Split button small trailing button trailing space |

#### Design Tokens: Split button - Size - Medium

*For medium split buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.split-button.medium.trailing-button.inner-corner.selected.corner-size` | 50percent | LENGTH | Split button medium trailing button inner corner selected size |
| `md.comp.split-button.medium.inner-corner.pressed.corner-size` | `md.sys.shape.corner-value.medium` | SHAPE | Split button medium inner corner pressed size |
| `md.comp.split-button.medium.inner-corner.hovered.corner-size` | `md.sys.shape.corner-value.medium` | SHAPE | Split button medium inner corner hovered size |
| `md.comp.split-button.medium.inner-corner.corner-size` | `md.sys.shape.corner-value.extra-small` | SHAPE | Split button medium inner corner size |
| `md.comp.split-button.medium.container.height` | 56dp | LENGTH | Split button medium container height |
| `md.comp.split-button.medium.between-space` | `md.sys.measurement.space25` | LENGTH | Split button medium between space |
| `md.comp.split-button.medium.container.shape` | `md.sys.shape.corner.full` | SHAPE | Split button medium container shape |
| `md.comp.split-button.medium.leading-button.leading-space` | `md.sys.measurement.space300` | LENGTH | Split button medium leading button leading space |
| `md.comp.split-button.medium.leading-button.trailing-space` | `md.sys.measurement.space300` | LENGTH | Split button medium leading button trailing space |
| `md.comp.split-button.medium.trailing-button.icon.size` | 26dp | LENGTH | Split button medium trailing button icon size |
| `md.comp.split-button.medium.trailing-button.leading-space` | 15dp | LENGTH | Split button medium trailing button leading space |
| `md.comp.split-button.medium.trailing-button.trailing-space` | 15dp | LENGTH | Split button medium trailing button trailing space |

#### Design Tokens: Split button - Size - Large

*For large split buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.split-button.large.trailing-button.inner-corner.selected.corner-size` | 50percent | LENGTH | Split button large trailing button inner corner selected size |
| `md.comp.split-button.large.inner-corner.pressed.corner-size` | `md.sys.shape.corner-value.large-increased` | SHAPE | Split button large inner corner pressed size |
| `md.comp.split-button.large.inner-corner.hovered.corner-size` | `md.sys.shape.corner-value.large-increased` | SHAPE | Split button large inner corner hovered size |
| `md.comp.split-button.large.inner-corner.corner-size` | `md.sys.shape.corner-value.small` | SHAPE | Split button large inner corner size |
| `md.comp.split-button.large.container.shape` | `md.sys.shape.corner.full` | SHAPE | Split button large container shape |
| `md.comp.split-button.large.between-space` | `md.sys.measurement.space25` | LENGTH | Split button large between space |
| `md.comp.split-button.large.container.height` | 96dp | LENGTH | Split button large container height |
| `md.comp.split-button.large.leading-button.leading-space` | `md.sys.measurement.space600` | LENGTH | Split button large leading button leading space |
| `md.comp.split-button.large.leading-button.trailing-space` | `md.sys.measurement.space600` | LENGTH | Split button large leading button trailing space |
| `md.comp.split-button.large.trailing-button.icon.size` | 38dp | LENGTH | Split button large trailing button icon size |
| `md.comp.split-button.large.trailing-button.leading-space` | 29dp | LENGTH | Split button large trailing button leading space |
| `md.comp.split-button.large.trailing-button.trailing-space` | 29dp | LENGTH | Split button large trailing button trailing space |

#### Design Tokens: Split button - Size - Xlarge

*For XL split buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.split-button.xlarge.inner-corner.corner-size` | `md.sys.shape.corner-value.medium` | SHAPE | Split button xlarge inner corner size |
| `md.comp.split-button.xlarge.inner-corner.hovered.corner-size` | `md.sys.shape.corner-value.large-increased` | SHAPE | Split button xlarge inner corner hovered size |
| `md.comp.split-button.xlarge.trailing-button.inner-corner.selected.corner-size` | 50percent | LENGTH | Split button xlarge trailing button inner corner selected size |
| `md.comp.split-button.xlarge.inner-corner.pressed.corner-size` | `md.sys.shape.corner-value.large-increased` | SHAPE | Split button xlarge inner corner pressed size |
| `md.comp.split-button.xlarge.container.height` | 136dp | LENGTH | Split button xlarge container height |
| `md.comp.split-button.xlarge.between-space` | `md.sys.measurement.space25` | LENGTH | Split button xlarge between space |
| `md.comp.split-button.xlarge.container.shape` | `md.sys.shape.corner.full` | SHAPE | Split button xlarge container shape |
| `md.comp.split-button.xlarge.leading-button.leading-space` | `md.sys.measurement.space800` | LENGTH | Split button xlarge leading button leading space |
| `md.comp.split-button.xlarge.leading-button.trailing-space` | `md.sys.measurement.space800` | LENGTH | Split button xlarge leading button trailing space |
| `md.comp.split-button.xlarge.trailing-button.icon.size` | 50dp | LENGTH | Split button xlarge trailing button icon size |
| `md.comp.split-button.xlarge.trailing-button.leading-space` | 43dp | LENGTH | Split button xlarge trailing button leading space |
| `md.comp.split-button.xlarge.trailing-button.trailing-space` | 43dp | LENGTH | Split button xlarge trailing button trailing space |


## Anatomy

![4 elements of a split button.](https://lh3.googleusercontent.com/y1PQA-NhEihuhB7tNeqbtGZu6b_yL6_kxPmh2Hghbj4dahZfyaxnimD4KhbRfGdnXlsy0NKEyxaMuWbrlq4Lq-YHo4BMsGJkg3zOnahM--N7=s2048)

*Caption / Legend:*
1. Leading button
2. Icon
3. Label text
4. Trailing button

The leading button in split buttons can have an icon, label text, or both. The trailing button should always have a menu icon.

![3 customizations of the leading button in the split button.](https://lh3.googleusercontent.com/136pHVBxZ_A3wzi6-X1sKmbfnuqeUu_FIMeP4lGM3iVNjPqQH-SA62_w0wEZPalIigsfGp_6G4V08WZH8fY1REmGTJzfISQTJCdyIJdQjQam=s1352)

*Caption / Legend:*
1. Label + icon
2. Label
3. Icon

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

Split buttons use the same color schemes as standard buttons. However, unlike toggle buttons, the split button color doesn’t change when selected—only a state layer is applied.

Split buttons use the same colors and state layers as buttons, shown in the following token module. [Go to buttons](/m3/pages/common-buttons/overview) for more details.

![4 color roles of the split button when unselected and selected in light and dark theme.](https://lh3.googleusercontent.com/ocKi_dfwn4Uv_N5ArrzqUKti6uAj79S5f8KVg0BvXDI_BLYgT1-VC55NzHO8NHePXEQ6ygQevbqAq8rZdMxm9hcJF63fW-UjWnfPjpoynjQC=s1352)

*Caption / Legend:*
A: Unselected, B: Selected trailing icon

1. Elevated
2. Filled
3. Tonal
4. Outlined

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


## States

States are visual representations used to communicate the status of a component or an interactive element.

Split button states use the same colors and state layers as buttons and icon buttons. Go to those specs for details.

### Leading button shape

The inner corners change shape for hovered, focused, and pressed states.

![5 states of the leading button in the split button.](https://lh3.googleusercontent.com/HXNWWohWOFX1IuFh8xMMnWtDczymOUA8I7CDja4WgwY3y_9LL-Ns0MjX2KsGanjBtco9oWxaL-tY3t7Vw50DPpdpKhM71bj7uUSY01gKkxiIAg=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed, pressed with focus

### Trailing button shape

The inner corners change shape for hovered, focused, and pressed states, and the icon becomes centered when selected.

![6 states of the trailing menu button in the split button.](https://lh3.googleusercontent.com/h_N1go5ViA5xTyg6nI2IBVOYKAqFx_-KIIRe4x3G3zHumq0gfQTZ3RUz1nUquSZJgSjeTLW5cRqDjcCAvuV2O6yCpoft71pelUWNsxAbTys=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed, pressed with focus
6. Selected, selected with focus

## Measurements

Text and icons are optically centered when the buttons are asymmetrical. They’re centered normally when symmetrical.

![Padding and size measurements of the split button.](https://lh3.googleusercontent.com/e6qwxAXA90nObGQBZ7-_IkTOn31Iw8LdEp8ua6AHcsG-8wRtfxpgADUbK2qbkwUwJkNad-EAPoVxOhilJKArd9vUhHVkesOXbCjlGTK-8tF4jw=s2048)

*Caption / Legend:*
Menu icon offset when unselected:

1. XS: -1dp from center
2. S: -1dp from center
3. M: -2dp from center
4. L: -3dp from center
5. XL: -6dp from center

The inner corner radius changes depending on button sizing. The space should always be 2dp.

![Inner padding and inner corner measurements of the split button.](https://lh3.googleusercontent.com/JOPyvu0AZccMCkuvHxbfK-M5B8_rVrEfV4GQ0Zgy0heMSDFJWtwU20dCLmW2HU4SM4JiEu-AfEg7BxqAHXYNCc58ehjVESFTlqZFhhYYuyD1=s2048)

*Caption / Legend:*
1. Extra small 4dp
2. Small 4dp
3. Medium 4dp
4. Large 8dp
5. Extra large 12dp

## High contrast

Maximize legibility by using a limited color palette, following the same guidance for buttons.

![4 states of the split button in high contrast mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4ikihat-10.png?alt=media)

*Caption / Legend:*
1. Enabled
2. Focused leading button
3. Focused trailing button
4. Selected trailing button

## Guidelines

![Split buttons of many colors and sizes scattered. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36akp9w-1.png?alt=media)

*Caption / Legend:*
Split buttons come in many sizes and colors

## Usage

Split buttons are used to add a menu of actions alongside a main action. This reduces visual complexity by hiding extra options. Split buttons work well alone or alongside common buttons and icon buttons.

![A split button applied a filter of “Canada” to a list of activities. Three narrow buttons are next to it to share, favorite, and bookmark.](https://lh3.googleusercontent.com/9UfkZE4_cZigzNlvBgN4B7ahe-tzvOBPxn_pzLUChLFUIKQitLU2y7pNJTXoW-K4aM2tVthNrk3BNxSYV5fVllZJH7GucTZT7TYcqGAu7_VISw=s1352)

*Caption / Legend:*
Split buttons on their own can grab attention

Split buttons have five recommended sizes. These sizes match the sizes offered on buttons and icon buttons:

- Extra small
- Small (default)
- Medium
- Large
- Extra large

Scale up the split button in large breakpoints, or to create more emphasis in smaller windows.

![A large split button in a compact window draws attention to buying an enamel mug in an online store.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dosrjf-3.png?alt=media)

*Caption / Legend:*
Using large split buttons on small screens can add extra emphasis for hero moments

Split buttons can be used alongside other buttons and button groups.

![A vibrant split button for starting a car drive is next to 2 muted icon buttons for bookmarking and sharing the trip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaehs3k3-4_ALT.png?alt=media)

*Caption / Legend:*
Split buttons work harmoniously with regular buttons

Split buttons can be of different sizes from other buttons on the page, especially since they take up more space.

![A media player has a split button for changing the speed quickly, or opening a menu of options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaehumyk-5-alt.png?alt=media)

*Caption / Legend:*
The most prominent controls can be larger while secondary controls in a split button can be smaller

The split button typically opens a menu, but can be customized to open other components like cards.

![A split button opens a menu with a vibrant color scheme.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4il1tni-6-alt.png?alt=media)

*Caption / Legend:*
Open a menu from a split button

![A split button opens a menu with an irregular shape highlighting the selected item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4il1xwy-7-alt.png?alt=media)

*Caption / Legend:*
Avoid modifying the menu in unusual ways

## Anatomy

![4 elements of a split button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dp22eb-8.png?alt=media)

*Caption / Legend:*
1. Leading button
2. Icon
3. Label text
4. Trailing button

The leading button should be brief, just one or two words, with an icon that best matches the action.

The trailing button should always have the expand and collapse icon since it rotates when selected. Avoid modifying the icon.

![A split button for starting driving directions has a label “32 minutes away” and a refresh icon instead of a menu icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dxuxjz-9.png?alt=media)

*Caption / Legend:*
Avoid using very long labels or changing the trailing icon

In right-to-left languages, the component layout is mirrored.

![The split button elements are reversed in a right-to-left language.](https://lh3.googleusercontent.com/43s7j0gcA5ez0PmFtHcj6TNeZLo7IqSGHqlOTKi2whopiRe66fXmJylV_V3M7SUNoFR4NtxZoeAqCATEMI3ACWzbwWg8dvl1R7ueH32Vt2U=s1352)

*Caption / Legend:*
Split buttons mirror the order of elements in right-to-left languages

## Behavior

The split button uses the standard motion scheme (not the expressive motion scheme) when rotating the menu button.

The menu button rotates inwards 180° when opened and closed.

### Menu placement

When using the split button with a menu, align the menu with the trailing button when possible.

![A split button with an open menu. The leading edge of the menu is aligned to the leading edge of the menu button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4il8isz-12.png?alt=media)

*Caption / Legend:*
Align the menu with the trailing button

If there’s not enough room, align the menu to one of the sides of the button.

![A split button with an open menu. The trailing edge of the menu is aligned to the trailing edge of the menu button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4ilatqh-13.png?alt=media)

*Caption / Legend:*
If not possible, align the menu to the side of the leading or trailing button

Depending on breakpoint, scroll position, and other factors, the menu may need to appear elsewhere around the button. Always try to align it with one of the edges of the button.

The menu should be 4dp from the split button.

![6 other ways the menu can align to the split button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4iz4b9v-14.png?alt=media)

*Caption / Legend:*
1. Top aligned to trailing button
2. Bottom aligned to trailing button
3. Top right-aligned
4. Top left-aligned
5. Bottom right-aligned
6. Bottom left-aligned

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate to each button and interact with them
- Navigate to any element opened by the trailing button
- Understand the current selection state of the button

## Interaction & style

Each button in the split button needs a minimum target area of 48x48dp. Extra small and small split buttons are shorter than 48dp, so the target areas around them need to be at least 48dp tall.

![Diagram showing extra small and small split buttons with visible 48x48dp target areas.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dpv69h-1.png?alt=media)

*Caption / Legend:*
Target areas should be at least 48x48dp

1. Extra small
2. Small

## Initial focus

Focus should land on the leading button then move to the trailing button. This can depend on the operating system’s settings.

![Focus on the leading button and trailing button for both LTR and RTL languages.](https://lh3.googleusercontent.com/Hxb_s-kioHaVoJt_tb0g2lLobKLWCPoTiVio9TRl21G3_8Ss0_qrmvpKS-bFeozlGusX8XxyQlG8s9rBSF2VaA_n569tXLPN4Qq9n93ibtBO=s1352)

*Caption / Legend:*
1. Left to right
2. Right to left

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Navigate between buttons |
| Space or enter | Activate focused button |

## Labeling elements

The accessibility label for the leading button is the same as buttons.

![“Watch later” is both the button label text and the accessibility label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dq2sfs-3.png?alt=media)

*Caption / Legend:*
Leading buttons should have the same labels as common buttons

The trailing icon button should have an extra state or similar label indicating that the menu is expanded or collapsed.

Label the button to clearly indicate that there are more options. The label of the secondary button should indicate that it provides additional choices related to the action of the main button. For instance, if the main button says "Watch later," the secondary button should be something like "More watch options."

Label the opened menu according to the [menu accessibility guidance](/m3/pages/menus/accessibility/).

![Collapsed state indicated for the trailing button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dq40tg-4.png?alt=media)

*Caption / Legend:*
Trailing buttons should communicate the state of the menu and that more options are available
