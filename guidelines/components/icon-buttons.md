# Icon buttons

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/icon-buttons](https://m3.material.io/components/icon-buttons)
> Last Updated: 2026-07-17T07:05:22.141Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Icon buttons must use a system icon with a clear meaning
- Two variants: default and toggle
- Many configurations: Color, size, width, and shape
- On web, display a tooltip describing the action while hovering
- In toggle buttons, use the outlined style of an icon for the unselected state, and the filled style for the selected state

![5 kinds of outline buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by1ftf-1.png?alt=media)

*Caption / Legend:*
Standard, filled unselected, filled selected, filled tonal, and outlined icon buttons

## Availability & resources

## M3 Expressive update

**May 2025**

Icon buttons now have a wider variety of shapes and sizes, changing shape when selected. When placed in button groups, icon buttons interact with each other when pressed. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Default and toggle (selection)
- Color styles are now configurations. (filled, tonal, outlined, standard)

Shapes:

- Round and square options
- Shape morphs when pressed
- Shape morphs when selected

Sizes:

- Extra small
- Small (default)
- Medium
- Large
- Extra large

Widths:

- Narrow
- Default
- Wide

![Icon buttons can vary in size, shape, and width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by3xdg-2.png?alt=media)

*Caption / Legend:*
1. Five sizes
2. Two shapes
3. Three widths

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Variants and naming: **Icon buttons were called toggle buttons. There are now two variants of icon buttons: default and toggle.

![Icon buttons were known as toggle buttons in M2.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0by5hfz-3.png?alt=media)

*Caption / Legend:*
1. Default icon buttons
2. Toggle icon buttons

## Specs

## Variants

![Side by side view of default and toggle icon buttons.](https://lh3.googleusercontent.com/eJRJf0S1ywGr8CdhzgukcRgQpKxbZOCEZ12g2HeJrldunvEVBgg_65CzvyHntvAMJWJYApy-BpompKTbjsHQl2sd6YGjoQriSC1O9nfooyw=s2048)

*Caption / Legend:*
1. Default icon button
2. Toggle icon button

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Default | Available | Available |
| Toggle (selection) | Available | Available |

## Configurations

![Side by side view of size, shape, color, and width variations.](https://lh3.googleusercontent.com/8uQEXQa18WJuSmuK5CLloUJ69m6TGCdj5C9FBDFAETglM5PWdtNDxW62KriOfOjurHZ9ThRY_yfM_pfRVEsYl-R5oeob6wY3nFADhcFPF5hk=s2048)

*Caption / Legend:*
1. Five sizes
2. Two shapes
3. Four color styles
4. Three widths

| Category | Options | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | Small (default) | Available | Available |
| XS, M, L, XL | -- | Available |  |
| Shape | Round (default) | Available | Available |
| Square | -- | Available |  |
| Color | Filled (default), tonal, outlined, standard | Available | Available |
| Width | Default | Available | Available |
| Narrow, wide | -- | Available |  |

## Tokens & specs

Icon button token sets are organized by common tokens, color, and size. Select the token set from the table’s menu. [Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: Icon button - Color - Filled

*For filled icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.filled.container.color` | `md.sys.color.primary` | COLOR | Icon button filled container color |
| `md.comp.icon-button.filled.unselected.container.color` | `md.sys.color.surface-container` | COLOR | Icon button filled container color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.container.color` | `md.sys.color.primary` | COLOR | Icon button filled container color - toggle (selected) |
| `md.comp.icon-button.filled.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled icon color |
| `md.comp.icon-button.filled.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled icon color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled icon color - toggle (selected) |
| `md.comp.icon-button.filled.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Icon button filled disabled container color |
| `md.comp.icon-button.filled.disabled.container.opacity` | - | OPACITY | Icon button filled disabled container opacity |
| `md.comp.icon-button.filled.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Icon button filled disabled icon color |
| `md.comp.icon-button.filled.disabled.icon.opacity` | - | OPACITY | Icon button filled disabled icon opacity |
| `md.comp.icon-button.filled.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Icon button filled hovered state layer color |
| `md.comp.icon-button.filled.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled hovered state layer color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Icon button filled hovered state layer color - toggle (selected) |
| `md.comp.icon-button.filled.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Icon button filled hovered state layer opacity |
| `md.comp.icon-button.filled.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled hovered icon color |
| `md.comp.icon-button.filled.unselected.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled hovered icon color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled hovered icon color - toggle (selected) |
| `md.comp.icon-button.filled.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Icon button filled focused state layer color |
| `md.comp.icon-button.filled.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled focused state layer color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Icon button filled focused state layer color - toggle (selected) |
| `md.comp.icon-button.filled.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Icon button filled focused state layer opacity |
| `md.comp.icon-button.filled.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled focused icon color |
| `md.comp.icon-button.filled.unselected.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled focused icon color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled focused icon color - toggle (selected) |
| `md.comp.icon-button.filled.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Icon button filled pressed state layer color |
| `md.comp.icon-button.filled.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled pressed state layer color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Icon button filled pressed state layer color - toggle (selected) |
| `md.comp.icon-button.filled.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Icon button filled pressed state layer opacity |
| `md.comp.icon-button.filled.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled pressed icon color |
| `md.comp.icon-button.filled.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button filled pressed icon color - toggle (unselected) |
| `md.comp.icon-button.filled.selected.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Icon button filled pressed icon color - toggle (selected) |

#### Design Tokens: Icon button - Color - Tonal

*For tonal icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.tonal.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Icon button tonal pressed state layer opacity |
| `md.comp.icon-button.tonal.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal pressed state layer color |
| `md.comp.icon-button.tonal.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal focused state layer color |
| `md.comp.icon-button.tonal.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal hovered state layer color |
| `md.comp.icon-button.tonal.disabled.icon.opacity` | - | OPACITY | Icon button tonal disabled icon opacity |
| `md.comp.icon-button.tonal.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Icon button tonal disabled icon color |
| `md.comp.icon-button.tonal.disabled.container.opacity` | - | OPACITY | Icon button tonal disabled container opacity |
| `md.comp.icon-button.tonal.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Icon button tonal disabled container color |
| `md.comp.icon-button.tonal.container.color` | `md.sys.color.secondary-container` | COLOR | Icon button tonal container color |
| `md.comp.icon-button.tonal.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal pressed icon color |
| `md.comp.icon-button.tonal.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Icon button tonal focused state layer opacity |
| `md.comp.icon-button.tonal.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal focused icon color |
| `md.comp.icon-button.tonal.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal hovered icon color |
| `md.comp.icon-button.tonal.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Icon button tonal hovered state layer opacity |
| `md.comp.icon-button.tonal.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal icon color |
| `md.comp.icon-button.tonal.unselected.container.color` | `md.sys.color.secondary-container` | COLOR | Icon button tonal container color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.container.color` | `md.sys.color.secondary` | COLOR | Icon button tonal container color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal icon color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.icon.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal icon color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal hovered state layer color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.hovered.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal hovered state layer color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal hovered icon color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.hovered.icon.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal hovered icon color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal focused state layer color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.focused.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal focused state layer color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal focused icon color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.focused.icon.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal focused icon color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal pressed state layer color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.pressed.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal pressed state layer color - toggle (selected) |
| `md.comp.icon-button.tonal.unselected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Icon button tonal pressed icon color - toggle (unselected) |
| `md.comp.icon-button.tonal.selected.pressed.icon.color` | `md.sys.color.on-secondary` | COLOR | Icon button tonal pressed icon color - toggle (selected) |

#### Design Tokens: Icon button - Color - Outlined

*For outlined icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.outlined.selected.container.color` | `md.sys.color.inverse-surface` | COLOR | Icon button outlined container color - toggle (selected) |
| `md.comp.icon-button.outlined.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined hovered state layer color |
| `md.comp.icon-button.outlined.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined focused state layer color |
| `md.comp.icon-button.outlined.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined icon color |
| `md.comp.icon-button.outlined.outline.color` | `md.sys.color.outline-variant` | COLOR | Icon button outlined color |
| `md.comp.icon-button.outlined.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined icon color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined icon color - toggle (selected) |
| `md.comp.icon-button.outlined.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined hovered icon color |
| `md.comp.icon-button.outlined.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Icon button outlined hovered state layer opacity |
| `md.comp.icon-button.outlined.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined hovered state layer color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.hovered.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined hovered state layer color - toggle (selected) |
| `md.comp.icon-button.outlined.unselected.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined hovered icon color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.hovered.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined hovered icon color - toggle (selected) |
| `md.comp.icon-button.outlined.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Icon button outlined focused state layer opacity |
| `md.comp.icon-button.outlined.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined focused icon color |
| `md.comp.icon-button.outlined.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined focused state layer color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.focused.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined focused state layer color - toggle (selected) |
| `md.comp.icon-button.outlined.unselected.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined focused icon color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.focused.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined focused icon color - toggle (selected) |
| `md.comp.icon-button.outlined.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined pressed state layer color |
| `md.comp.icon-button.outlined.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined pressed icon color |
| `md.comp.icon-button.outlined.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Icon button outlined pressed state layer opacity |
| `md.comp.icon-button.outlined.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined pressed state layer color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.pressed.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined pressed state layer color - toggle (selected) |
| `md.comp.icon-button.outlined.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button outlined pressed icon color - toggle (unselected) |
| `md.comp.icon-button.outlined.selected.pressed.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Icon button outlined pressed icon color - toggle (selected) |
| `md.comp.icon-button.outlined.unselected.outline.color` | `md.sys.color.outline-variant` | COLOR | Icon button outlined color - toggle (unselected) |
| `md.comp.icon-button.outlined.disabled.outline.color` | `md.sys.color.outline-variant` | COLOR | Icon button outlined disabled outline color |
| `md.comp.icon-button.outlined.disabled.icon.opacity` | - | OPACITY | Icon button outlined disabled icon opacity |
| `md.comp.icon-button.outlined.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Icon button outlined disabled icon color |
| `md.comp.icon-button.outlined.unselected.disabled.outline.color` | `md.sys.color.outline-variant` | COLOR | Icon button outlined disabled outline color (unselected) |
| `md.comp.icon-button.outlined.selected.disabled.container.opacity` | - | OPACITY | Icon button outlined disabled container opacity (selected) |
| `md.comp.icon-button.outlined.selected.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Icon button outlined disabled container color (selected) |

#### Design Tokens: Icon button - Color - Standard

*For standard icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.standard.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Icon button disabled icon color |
| `md.comp.icon-button.standard.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button icon color |
| `md.comp.icon-button.standard.disabled.icon.opacity` | - | OPACITY | Icon button disabled opacity |
| `md.comp.icon-button.standard.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button hovered state layer color |
| `md.comp.icon-button.standard.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button focused state layer color |
| `md.comp.icon-button.standard.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button pressed state layer color |
| `md.comp.icon-button.standard.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Icon button pressed state layer opacity |
| `md.comp.icon-button.standard.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button pressed icon color |
| `md.comp.icon-button.standard.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button focused icon color |
| `md.comp.icon-button.standard.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Icon button focused state layer opacity |
| `md.comp.icon-button.standard.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button hovered icon color |
| `md.comp.icon-button.standard.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Icon button hovered state layer opacity |
| `md.comp.icon-button.standard.unselected.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button hovered state layer color - toggle (unselected) |
| `md.comp.icon-button.standard.selected.hovered.state-layer.color` | `md.sys.color.primary` | COLOR | Icon button hovered state layer color - toggle (selected) |
| `md.comp.icon-button.standard.unselected.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button hovered icon color - toggle (unselected) |
| `md.comp.icon-button.standard.selected.hovered.icon.color` | `md.sys.color.primary` | COLOR | Icon button hovered icon color - toggle (selected) |
| `md.comp.icon-button.standard.unselected.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button focused state layer color - toggle (unselected) |
| `md.comp.icon-button.standard.selected.focused.state-layer.color` | `md.sys.color.primary` | COLOR | Icon button focused state layer color - toggle (selected) |
| `md.comp.icon-button.standard.unselected.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button focused icon color - toggle (unselected) |
| `md.comp.icon-button.standard.selected.focused.icon.color` | `md.sys.color.primary` | COLOR | Icon button focused icon color - toggle (selected) |
| `md.comp.icon-button.standard.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button pressed state layer color - toggle (unselected) |
| `md.comp.icon-button.standard.selected.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Icon button pressed state layer color - toggle (selected) |
| `md.comp.icon-button.standard.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button pressed icon color - toggle (unselected) |
| `md.comp.icon-button.standard.selected.pressed.icon.color` | `md.sys.color.primary` | COLOR | Icon button pressed icon color - toggle (selected) |
| `md.comp.icon-button.standard.selected.icon.color` | `md.sys.color.primary` | COLOR | Icon button icon color - toggle (selected) |
| `md.comp.icon-button.standard.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Icon button icon color - toggle (unselected) |

#### Design Tokens: Icon button - Size - Xsmall

*For XS icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.xsmall.default.leading-space` | `md.sys.measurement.space75` | LENGTH | Icon button xsmall default leading space |
| `md.comp.icon-button.xsmall.default.trailing-space` | `md.sys.measurement.space75` | LENGTH | Icon button xsmall default trailing space |
| `md.comp.icon-button.xsmall.container.shape.square` | `md.sys.shape.corner.medium` | SHAPE | Icon button xsmall container shape square |
| `md.comp.icon-button.xsmall.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Icon button xsmall container shape round |
| `md.comp.icon-button.xsmall.wide.trailing-space` | `md.sys.measurement.space125` | LENGTH | Icon button xsmall wide trailing space |
| `md.comp.icon-button.xsmall.wide.leading-space` | `md.sys.measurement.space125` | LENGTH | Icon button xsmall wide leading space |
| `md.comp.icon-button.xsmall.narrow.trailing-space` | `md.sys.measurement.space50` | LENGTH | Icon button xsmall narrow trailing space |
| `md.comp.icon-button.xsmall.narrow.leading-space` | `md.sys.measurement.space50` | LENGTH | Icon button xsmall narrow leading space |
| `md.comp.icon-button.xsmall.container.height` | 32dp | LENGTH | Icon button xsmall container height |
| `md.comp.icon-button.xsmall.icon.size` | 20dp | LENGTH | Icon button xsmall icon size |
| `md.comp.icon-button.xsmall.outlined.outline.width` | 1dp | LENGTH | Icon button xsmall outline width |
| `md.comp.icon-button.xsmall.pressed.container.shape` | `md.sys.shape.corner.small` | SHAPE | Icon button xsmall shape pressed morph |
| `md.comp.icon-button.xsmall.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Icon button xsmall selected container shape square |
| `md.comp.icon-button.xsmall.selected.container.shape.round` | `md.sys.shape.corner.medium` | SHAPE | Icon button xsmall selected container shape round |
| `md.comp.icon-button.xsmall.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Icon button xsmall shape spring animation stiffness |
| `md.comp.icon-button.xsmall.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Icon button xsmall shape spring animation damping |

#### Design Tokens: Icon button - Size - Small

*For small icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.small.default.trailing-space` | `md.sys.measurement.space100` | LENGTH | Icon button small default trailing space |
| `md.comp.icon-button.small.default.leading-space` | `md.sys.measurement.space100` | LENGTH | Icon button small default leading space |
| `md.comp.icon-button.small.container.height` | 40dp | LENGTH | Icon button small container height |
| `md.comp.icon-button.small.icon.size` | 24dp | LENGTH | Icon button small icon size |
| `md.comp.icon-button.small.narrow.leading-space` | `md.sys.measurement.space50` | LENGTH | Icon button small narrow leading space |
| `md.comp.icon-button.small.narrow.trailing-space` | `md.sys.measurement.space50` | LENGTH | Icon button small narrow trailing space |
| `md.comp.icon-button.small.wide.leading-space` | `md.sys.measurement.space175` | LENGTH | Icon button small wide leading space |
| `md.comp.icon-button.small.wide.trailing-space` | `md.sys.measurement.space175` | LENGTH | Icon button small wide trailing space |
| `md.comp.icon-button.small.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Icon button small container shape round |
| `md.comp.icon-button.small.container.shape.square` | `md.sys.shape.corner.medium` | SHAPE | Icon button small container shape square |
| `md.comp.icon-button.small.outlined.outline.width` | 1dp | LENGTH | Icon button small outline width |
| `md.comp.icon-button.small.pressed.container.shape` | `md.sys.shape.corner.small` | SHAPE | Icon button small shape pressed morph |
| `md.comp.icon-button.small.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Icon button small selected container shape square |
| `md.comp.icon-button.small.selected.container.shape.round` | `md.sys.shape.corner.medium` | SHAPE | Icon button small selected container shape round |
| `md.comp.icon-button.small.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Icon button small shape spring animation stiffness |
| `md.comp.icon-button.small.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Icon button small shape spring animation damping |

#### Design Tokens: Icon button - Size - Medium

*For medium icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.medium.default.trailing-space` | `md.sys.measurement.space200` | LENGTH | Icon button medium default trailing space |
| `md.comp.icon-button.medium.default.leading-space` | `md.sys.measurement.space200` | LENGTH | Icon button medium default leading space |
| `md.comp.icon-button.medium.container.height` | 56dp | LENGTH | Icon button medium container height |
| `md.comp.icon-button.medium.icon.size` | 24dp | LENGTH | Icon button medium icon size |
| `md.comp.icon-button.medium.narrow.trailing-space` | `md.sys.measurement.space150` | LENGTH | Icon button medium narrow trailing space |
| `md.comp.icon-button.medium.narrow.leading-space` | `md.sys.measurement.space150` | LENGTH | Icon button medium narrow leading space |
| `md.comp.icon-button.medium.wide.leading-space` | `md.sys.measurement.space300` | LENGTH | Icon button medium wide leading space |
| `md.comp.icon-button.medium.wide.trailing-space` | `md.sys.measurement.space300` | LENGTH | Icon button medium wide trailing space |
| `md.comp.icon-button.medium.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Icon button medium container shape round |
| `md.comp.icon-button.medium.container.shape.square` | `md.sys.shape.corner.large` | SHAPE | Icon button medium container shape square |
| `md.comp.icon-button.medium.outlined.outline.width` | 1dp | LENGTH | Icon button medium outline width |
| `md.comp.icon-button.medium.pressed.container.shape` | `md.sys.shape.corner.medium` | SHAPE | Icon button medium shape pressed morph |
| `md.comp.icon-button.medium.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Icon button medium selected container shape square |
| `md.comp.icon-button.medium.selected.container.shape.round` | `md.sys.shape.corner.large` | SHAPE | Icon button medium selected container shape round |
| `md.comp.icon-button.medium.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Icon button medium shape spring animation stiffness |
| `md.comp.icon-button.medium.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Icon button medium shape spring animation damping |

#### Design Tokens: Icon button - Size - Large

*For large icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.large.default.trailing-space` | `md.sys.measurement.space400` | LENGTH | Icon button large default trailing space |
| `md.comp.icon-button.large.default.leading-space` | `md.sys.measurement.space400` | LENGTH | Icon button large default leading space |
| `md.comp.icon-button.large.container.height` | 96dp | LENGTH | Icon button large container height |
| `md.comp.icon-button.large.icon.size` | 32dp | LENGTH | Icon button large icon size |
| `md.comp.icon-button.large.narrow.leading-space` | `md.sys.measurement.space200` | LENGTH | Icon button large narrow leading space |
| `md.comp.icon-button.large.narrow.trailing-space` | `md.sys.measurement.space200` | LENGTH | Icon button large narrow trailing space |
| `md.comp.icon-button.large.wide.leading-space` | `md.sys.measurement.space600` | LENGTH | Icon button large wide leading space |
| `md.comp.icon-button.large.wide.trailing-space` | `md.sys.measurement.space600` | LENGTH | Icon button large wide trailing space |
| `md.comp.icon-button.large.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Icon button large container shape round |
| `md.comp.icon-button.large.container.shape.square` | `md.sys.shape.corner.extra-large` | SHAPE | Icon button large container shape square |
| `md.comp.icon-button.large.outlined.outline.width` | 2dp | LENGTH | Icon button large outline width |
| `md.comp.icon-button.large.pressed.container.shape` | `md.sys.shape.corner.large` | SHAPE | Icon button large shape pressed morph |
| `md.comp.icon-button.large.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Icon button large selected container shape square |
| `md.comp.icon-button.large.selected.container.shape.round` | `md.sys.shape.corner.extra-large` | SHAPE | Icon button large selected container shape round |
| `md.comp.icon-button.large.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Icon button large shape spring animation stiffness |
| `md.comp.icon-button.large.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Icon button large shape spring animation damping |

#### Design Tokens: Icon button - Size - Xlarge

*For XL icon buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.icon-button.xlarge.default.trailing-space` | `md.sys.measurement.space600` | LENGTH | Icon button xlarge default trailing space |
| `md.comp.icon-button.xlarge.default.leading-space` | `md.sys.measurement.space600` | LENGTH | Icon button xlarge default leading space |
| `md.comp.icon-button.xlarge.container.height` | 136dp | LENGTH | Icon button xlarge container height |
| `md.comp.icon-button.xlarge.icon.size` | 40dp | LENGTH | Icon button xlarge icon size |
| `md.comp.icon-button.xlarge.narrow.leading-space` | `md.sys.measurement.space400` | LENGTH | Icon button xlarge narrow leading space |
| `md.comp.icon-button.xlarge.narrow.trailing-space` | `md.sys.measurement.space400` | LENGTH | Icon button xlarge narrow trailing space |
| `md.comp.icon-button.xlarge.wide.leading-space` | `md.sys.measurement.space900` | LENGTH | Icon button xlarge wide leading space |
| `md.comp.icon-button.xlarge.wide.trailing-space` | `md.sys.measurement.space900` | LENGTH | Icon button xlarge wide trailing space |
| `md.comp.icon-button.xlarge.container.shape.round` | `md.sys.shape.corner.full` | SHAPE | Icon button xlarge container shape round |
| `md.comp.icon-button.xlarge.container.shape.square` | `md.sys.shape.corner.extra-large` | SHAPE | Icon button xlarge container shape square |
| `md.comp.icon-button.xlarge.outlined.outline.width` | 3dp | LENGTH | Icon button xlarge outline width |
| `md.comp.icon-button.xlarge.pressed.container.shape` | `md.sys.shape.corner.large` | SHAPE | Icon button xlarge shape pressed morph |
| `md.comp.icon-button.xlarge.selected.container.shape.square` | `md.sys.shape.corner.full` | SHAPE | Icon button xlarge selected container shape square |
| `md.comp.icon-button.xlarge.selected.container.shape.round` | `md.sys.shape.corner.extra-large` | SHAPE | Icon button xlarge selected container shape round |
| `md.comp.icon-button.xlarge.pressed.container.corner-size.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Icon button xlarge shape spring animation stiffness |
| `md.comp.icon-button.xlarge.pressed.container.corner-size.motion.spring.damping` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Icon button xlarge shape spring animation damping |


## Anatomy

![Diagram indicating anatomy of filled icon button.](https://lh3.googleusercontent.com/awRYSAQ6XdaVBsLtLmUSRj56cqySERCiE8qj36eLHxsk8YXYMMkaU_tkx606qnJKv41RtQKLV9uSyAwkVXOmY4iJBuioKS30Lg9UvZEVFpW41w=s2048)

*Caption / Legend:*
1. Icon
2. Container

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

There are four built-in color styles: filled, tonal, outlined, and standard. Default and toggle buttons use different color roles per style.

starNote:These color roles were chosen to create design coherence and familiarity. Other color roles can be used as long as the container and text have a 3:1 contrast ratio. For example, tertiary and on tertiary.

![Color roles of default and toggle buttons in 4 visual styles.](https://lh3.googleusercontent.com/_CWKvmXvNaFk4LwtZcFhYyOOgq-OJEnRgXVifhpYTwewAHQXGsA8SAcHgpi4_BO2o6CIT-ERoIMpSI41hwGU2dvTE3OoJql9XZ_WQ6mxoPrK=s2048)

*Caption / Legend:*
A: Filled, B: Tonal, C: Outlined, D: Standard

1. Default
2. Toggle, unselected
3. Toggle, selected

|  | 1. Default | 2. Toggle, unselected | 3. Toggle, selected |
| --- | --- | --- | --- |
| Filled container Filled icon | Primary On primary | Surface container On surface variant | Primary On primary |
| Tonal container Tonal icon | Secondary container On secondary container | Secondary container On secondary container | Secondary On secondary |
| Outlined container Outlined icon | Outline variant (outline) On surface variant | Outline variant (outline) On surface variant | Inverse surface Inverse on surface |
| Standard icon | On surface variant | On surface variant | Primary |

## States

States are visual representations used to communicate the status of a component or interactive element. State layers slightly change button color. Disabled states have different base colors. [View tokens for details](/m3/pages/design-tokens/overview)

### Filled button states

#### Default

![5 states of filled icon button.](https://lh3.googleusercontent.com/f_CiuCyosU5CvebQEKN5zF51JfbHKIee5oqSFrP2od51IfqDJ3SLx35_e9J-heZw83g2JpUqslKhGoeMeZfW-wcc0zeBqKRkbVzZ7249PjU=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

#### Toggle

![5 states of filled toggle icon button.](https://lh3.googleusercontent.com/Sv4DWzeNFz0bHgKddC2o6jcm4_Mg65zw0e9QF5y_PHOChQFHOkMGw_c05fE1srSoY50_RoTis4N2-bKguC9xAl8oGJaDeQGTOWWXI7SehwOD=s2048)

*Caption / Legend:*
A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

### Tonal button states

#### Default

![5 states of tonal icon button.](https://lh3.googleusercontent.com/tgEuyiPL-Ux4Egj4kNTjvchlPIoplTaK_XukYj-4rC8T0MY8-7lsHzNq6wVpithFm43UqjQC-Ymy9Ek9CRxqm6805RePIN3eVccZY_92YFf8SA=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

#### Toggle

![5 states of tonal toggle icon button.](https://lh3.googleusercontent.com/3K-szMHugOwyybK3LjFoitWWxa6kcW8TKvzoBTvLDYFKK2hePutHe3uPnaZlY9-87q4g-CJ_cNUXZJF4SaZs44JyIk2K5RtADtMViVDZn-M=s2048)

*Caption / Legend:*
A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

### Outlined button states

#### Default

![5 states of outlined icon button.](https://lh3.googleusercontent.com/yinTmVHDt3kOx1KIpfsX9V_-EkqnaUvj7hBjMWu90VQ3MgbEsjFJFPlV_-i4k9ACyP1Vt4uJMABCGejEbVBWDjKzhfkR9vpVrLhYJHB01srG=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

#### Toggle

![5 states of outlined toggle icon button.](https://lh3.googleusercontent.com/BcxmjH6ecztV2npud8AveNazSZr__0H66nlq-j3xggQLcQvKLxLCXDbyXs13fVtB-A3l_zU1wq8aY84brugu8Mrtr2L_PRvoJBtDUAWT0-1H8w=s2048)

*Caption / Legend:*
A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

### Standard icon button states

The standard icon button’s container is invisible at rest, but visible when the state layer is applied.

#### Default

![5 states of standard icon button.](https://lh3.googleusercontent.com/dwZOlhE1Y0s7U-eyHTYVA9aLYhUf9oSQBoay9bRBmlE-yPvG59Cu80jkcB3VNU6876dcNy34dIYjt_OCu5vwgkNcpiB104tJ89iIK72pYSk=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

#### Toggle

![5 states of standard toggle icon button.](https://lh3.googleusercontent.com/Saes8VH33LRUx0xEd2BgfqFb39GzpjdT-z4HRzdjv3hST24J--BeF4JV_r0do5wk4jbPBb-AsSLMeWqIp9y8y8W8Jfa5zAJeK2WrBKNp4UE=s2048)

*Caption / Legend:*
A: Unselected. B: Selected

1. Enabled
2. Disabled (10% state layer)
3. Hovered (8% state layer)
4. Focused (10% state layer)
5. Pressed (10% state layer)

## Shape morph

### Pressed state

While pressed, icon buttons can morph to become more square.

Both round and square icon buttons should have the same pressed shape radius.

The corner radius value differs for each button size. [See full icon button corner measurements](/m3/pages/icon-buttons/specs#b3df1f02-d313-44e9-9542-37f7e0e24dc7)

![Shape changes for round and square icon buttons in 3 states.](https://lh3.googleusercontent.com/R4g7sI29Fu5i_IbuatO_g8K3lOfiXc5bWqBhR3s_5fhlg_yRXIbj6n26wEoi5SKZBszsh2CYiN6iioN9se4O1tXedkR6Lb5ANXj5oc45ZY0RQA=s1352)

*Caption / Legend:*
A. Round, B. Square

1. Enabled
2. Hovered
3. Pressed

### When selected

In addition to changing shape when pressed, toggle icon buttons also change the resting shape from round (unselected) to square (selected) by default.

If the resting shape is square, the selected shape should be round.

![Shape changes for round and square toggle icon buttons in 3 states.](https://lh3.googleusercontent.com/BnUdAgpdenC-evMYsprXRd489dyTMpWrSuPeQgbXSYXyJipJESFG-v4OLvX9K0aWOHkWjS7-k7qXXmQjGaDhSW4a4CoPGZ6-1RcxxeL5cgY=s1352)

*Caption / Legend:*
A. Round, B. Square

1. Enabled
2. Hovered
3. Pressed
4. Selected

## Measurements

![Diagram of 5 sizes of icon buttons in 4 widths.](https://lh3.googleusercontent.com/_jjXoUxycgTulKAlvK7SJG4QJ6ok6z-OJVsuMM4Q79_6fBauVYYA_TBTzTFzKa3-HvqYbWV9SR13zv35HwMK-BFmV8oFF6evAThLTcUCvA8=s2048)

*Caption / Legend:*
A. Extra small  B. Small  C. Medium  D. Large  E. Extra large

1. Icon size
2. Default width size
3. Narrow width size
4. Wide width size

### Target sizes

Extra small and small icon buttons must have a target size of 48x48dp or larger to be accessible.

![Diagram of target sizes.](https://lh3.googleusercontent.com/elGowRNNI3axprldZYy7RbpofXNr_DB-TAdJep-DZ_sRF0WCCACN-pxCEBBeF6_5FJADjm_fVuRgRNNGdsvbAXi7Msuc6MjYF0pnW5rVzfmN3Q=s1352)

*Caption / Legend:*
A. Extra small icon button size  B. Small icon button size

1. Narrow width
2. Default width
3. Wide width

### Button corner radius

![Diagram of icon button corner radius.](https://lh3.googleusercontent.com/qbTMBYNLCAPi3CIr8hTDFwdc0GclxQmGaA67KohT7UMz509-iBAlMzevRQwXVvthTGyaA_7lA4DR060wRA3zc6dp2ztd7-WdJpUolTX3F1U=s2048)

|  | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| A. Round button | Full | Full | Full | Full | Full |
| B. Square button | 12dp | 12dp | 16dp | 28dp | 28dp |
| C. Pressed state | 8dp | 8dp | 12dp | 16dp | 16dp |

## Baseline tokens

Use the table's menu to select a token set. Filled, tonal, and outlined icon button tokens are now deprecated in favor of the new token sets. All other tokens are still available in the module at the top of the page.

#### Design Tokens: [Deprecated] Icon button - Filled

*This token set is deprecated. Use `md.comp.icon-button.filled` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filled-icon-button.toggle.selected.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button toggle selected pressed icon color |
| `md.comp.filled-icon-button.toggle.unselected.pressed.icon.color` | `md.sys.color.primary` | COLOR | Filled icon button toggle unselected pressed icon color |
| `md.comp.filled-icon-button.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button pressed icon color |
| `md.comp.filled-icon-button.toggle.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled icon button toggle selected pressed state layer color |
| `md.comp.filled-icon-button.toggle.unselected.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Filled icon button toggle unselected pressed state layer color |
| `md.comp.filled-icon-button.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled icon button pressed state layer color |
| `md.comp.filled-icon-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filled icon button pressed state layer opacity |
| `md.comp.filled-icon-button.toggle.selected.focus.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button toggle selected focus icon color |
| `md.comp.filled-icon-button.toggle.unselected.focus.icon.color` | `md.sys.color.primary` | COLOR | Filled icon button toggle unselected focus icon color |
| `md.comp.filled-icon-button.focus.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button focus icon color |
| `md.comp.filled-icon-button.toggle.selected.focus.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled icon button toggle selected focus state layer color |
| `md.comp.filled-icon-button.toggle.unselected.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Filled icon button toggle unselected focus state layer color |
| `md.comp.filled-icon-button.focus.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled icon button focus state layer color |
| `md.comp.filled-icon-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filled icon button focus state layer opacity |
| `md.comp.filled-icon-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Filled icon button focus indicator offset |
| `md.comp.filled-icon-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filled icon button focus indicator thickness |
| `md.comp.filled-icon-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Filled icon button focus indicator color |
| `md.comp.filled-icon-button.toggle.selected.hover.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button toggle selected hover icon color |
| `md.comp.filled-icon-button.toggle.unselected.hover.icon.color` | `md.sys.color.primary` | COLOR | Filled icon button toggle unselected hover icon color |
| `md.comp.filled-icon-button.hover.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button hover icon color |
| `md.comp.filled-icon-button.toggle.selected.hover.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled icon button hover state layer color |
| `md.comp.filled-icon-button.toggle.unselected.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Filled icon button hover state layer color |
| `md.comp.filled-icon-button.hover.state-layer.color` | `md.sys.color.on-primary` | COLOR | Filled icon button hover state layer color |
| `md.comp.filled-icon-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled icon button hover state layer opacity |
| `md.comp.filled-icon-button.disabled.icon.opacity` | - | OPACITY | Filled icon button disabled icon color |
| `md.comp.filled-icon-button.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Filled icon button disabled icon color |
| `md.comp.filled-icon-button.disabled.container.opacity` | - | OPACITY | Filled icon button disabled container opacity |
| `md.comp.filled-icon-button.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filled icon button disabled container color |
| `md.comp.filled-icon-button.toggle.selected.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button toggle selected icon color |
| `md.comp.filled-icon-button.toggle.unselected.icon.color` | `md.sys.color.primary` | COLOR | Filled icon button toggle unselected icon color |
| `md.comp.filled-icon-button.icon.color` | `md.sys.color.on-primary` | COLOR | Filled icon button icon color |
| `md.comp.filled-icon-button.icon.size` | 24dp | LENGTH | Filled icon button icon size |
| `md.comp.filled-icon-button.selected.container.color` | `md.sys.color.primary` | COLOR | Filled icon button selected container color |
| `md.comp.filled-icon-button.unselected.container.color` | `md.sys.color.surface-container-highest` | COLOR | Filled icon button unselected container color |
| `md.comp.filled-icon-button.container.color` | `md.sys.color.primary` | COLOR | Filled icon button container color |
| `md.comp.filled-icon-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Filled icon button container shape |
| `md.comp.filled-icon-button.container.height` | 40dp | LENGTH | Filled icon button container height |
| `md.comp.filled-icon-button.container.width` | 40dp | LENGTH | Filled icon button container width |
| `md.comp.filled-icon-button.container.size` | 40dp | LENGTH | Filled icon button container size |

#### Design Tokens: [Deprecated] Icon button - Tonal

*This token set is deprecated. Use `md.comp.icon-button.tonal` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filled-tonal-icon-button.toggle.selected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected pressed icon color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected pressed icon color |
| `md.comp.filled-tonal-icon-button.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button pressed icon color |
| `md.comp.filled-tonal-icon-button.toggle.selected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected pressed state layer color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected pressed state layer color |
| `md.comp.filled-tonal-icon-button.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button pressed state layer color |
| `md.comp.filled-tonal-icon-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filled tonal icon button pressed state layer opacity |
| `md.comp.filled-tonal-icon-button.toggle.selected.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected focus icon color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.focus.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected focus icon color |
| `md.comp.filled-tonal-icon-button.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button focus icon color |
| `md.comp.filled-tonal-icon-button.toggle.selected.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected focus state layer color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected focus state layer color |
| `md.comp.filled-tonal-icon-button.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button focus state layer color |
| `md.comp.filled-tonal-icon-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filled tonal icon button focus state layer opacity |
| `md.comp.filled-tonal-icon-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Filled tonal icon button focus indicator offset |
| `md.comp.filled-tonal-icon-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filled tonal icon button focus indicator thickness |
| `md.comp.filled-tonal-icon-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Filled tonal icon button focus indicator color |
| `md.comp.filled-tonal-icon-button.toggle.selected.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected hover icon color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.hover.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected hover icon color |
| `md.comp.filled-tonal-icon-button.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button hover icon color |
| `md.comp.filled-tonal-icon-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled tonal icon button hover state layer opacity |
| `md.comp.filled-tonal-icon-button.toggle.selected.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected hover state layer color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected hover state layer color |
| `md.comp.filled-tonal-icon-button.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button hover state layer color |
| `md.comp.filled-tonal-icon-button.disabled.icon.opacity` | - | OPACITY | Filled tonal icon button disabled icon opacity |
| `md.comp.filled-tonal-icon-button.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Filled tonal icon button disabled icon color |
| `md.comp.filled-tonal-icon-button.disabled.container.opacity` | - | OPACITY | Filled tonal icon button disabled container opacity |
| `md.comp.filled-tonal-icon-button.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filled tonal icon button disabled container color |
| `md.comp.filled-tonal-icon-button.toggle.selected.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button toggle selected icon color |
| `md.comp.filled-tonal-icon-button.toggle.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled tonal icon button toggle unselected icon color |
| `md.comp.filled-tonal-icon-button.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Filled tonal icon button icon color |
| `md.comp.filled-tonal-icon-button.icon.size` | 24dp | LENGTH | Filled tonal icon button icon size |
| `md.comp.filled-tonal-icon-button.selected.container.color` | `md.sys.color.secondary-container` | COLOR | Filled tonal icon button selected container color |
| `md.comp.filled-tonal-icon-button.unselected.container.color` | `md.sys.color.surface-container-highest` | COLOR | Filled tonal icon button unselected container color |
| `md.comp.filled-tonal-icon-button.container.color` | `md.sys.color.secondary-container` | COLOR | Filled tonal icon button container color |
| `md.comp.filled-tonal-icon-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Filled tonal icon button container shape |
| `md.comp.filled-tonal-icon-button.container.height` | 40dp | LENGTH | Filled tonal icon button container height |
| `md.comp.filled-tonal-icon-button.container.width` | 40dp | LENGTH | Filled tonal icon button container width |
| `md.comp.filled-tonal-icon-button.container.size` | 40dp | LENGTH | Filled tonal icon button container size |

#### Design Tokens: [Deprecated] Icon button - Outlined

*This token set is deprecated. Use `md.comp.icon-button.outlined` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.outlined-icon-button.selected.pressed.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button selected pressed icon color |
| `md.outlined-icon-button.unselected.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined icon button unselected pressed icon color |
| `md.outlined-icon-button.selected.pressed.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button selected pressed state layer color |
| `md.outlined-icon-button.unselected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined icon button unselected pressed state layer color |
| `md.outlined-icon-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Outlined icon button pressed state layer opacity |
| `md.outlined-icon-button.selected.focus.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button focus icon color |
| `md.outlined-icon-button.unselected.focus.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined icon button focus icon color |
| `md.outlined-icon-button.selected.focus.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button selected focus state layer color |
| `md.outlined-icon-button.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined icon button unselected focus state layer color |
| `md.outlined-icon-button.focus.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Outlined icon button focus state layer opacity |
| `md.outlined-icon-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Outlined icon button focus indicator offset |
| `md.outlined-icon-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Outlined icon button focus indicator thickness |
| `md.outlined-icon-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Outlined icon button focus indicator color |
| `md.outlined-icon-button.selected.hover.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button selected hover icon color |
| `md.outlined-icon-button.unselected.hover.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined icon button unselected hover icon color |
| `md.outlined-icon-button.selected.hover.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button selected hover state layer color |
| `md.outlined-icon-button.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined icon button unselected hover state layer color |
| `md.outlined-icon-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Outlined icon button hover state layer opacity |
| `md.outlined-icon-button.disabled.unselected.outline.opacity` | - | OPACITY | Outlined icon button disabled unselected outline opacity |
| `md.outlined-icon-button.disabled.unselected.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined icon button disabled unselected outline color |
| `md.outlined-icon-button.disabled.icon.opacity` | - | OPACITY | Outlined icon button disabled icon opacity |
| `md.outlined-icon-button.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined icon button disabled icon color |
| `md.outlined-icon-button.disabled.selected.container.opacity` | - | OPACITY | Outlined icon button disabled selected container opacity |
| `md.outlined-icon-button.disabled.selected.container.color` | `md.sys.color.on-surface` | COLOR | Outlined icon button disabled selected container color |
| `md.outlined-icon-button.selected.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Outlined icon button selected icon color |
| `md.outlined-icon-button.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined icon button unselected icon color |
| `md.outlined-icon-button.icon.size` | 24dp | LENGTH | Outlined icon button icon size |
| `md.outlined-icon-button.unselected.outline.width` | 1dp | LENGTH | Outlined icon button unselected outline width |
| `md.outlined-icon-button.unselected.outline.color` | `md.sys.color.outline` | COLOR | Outlined icon button unselected outline color |
| `md.outlined-icon-button.selected.container.color` | `md.sys.color.inverse-surface` | COLOR | Outlined icon button selected container color |
| `md.outlined-icon-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Outlined icon button container shape |
| `md.outlined-icon-button.container.height` | 40dp | LENGTH | Outlined icon button container height |
| `md.outlined-icon-button.container.width` | 40dp | LENGTH | Outlined icon button container width |
| `md.outlined-icon-button.container.size` | 40dp | LENGTH | Outlined icon button container size |
| `md.outlined-icon-button.disabled.outline.opacity` | - | OPACITY | Outlined icon button disabled outline opacity |
| `md.outlined-icon-button.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined icon button disabled outline color |


## Guidelines

## Usage

Use icon buttons to display common actions. There are two variants: **default** and **toggle**.

- Default icon buttons can open other elements, such as a menu or search.
- Toggle icon buttons can represent binary actions that can be toggled on and off, such as **favorite** or **bookmark**.

Icon buttons can be placed directly on the background or in most container components, such as cards, app bars, and toolbars.

Multiple icon buttons can be placed in a standard button group to add interaction and motion between the buttons when pressed. [More about standard button groups](/m3/pages/button-groups/overview)

![Icon buttons in a toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0dz7i-2.png?alt=media)

*Caption / Legend:*
Icon buttons can be used within other components, such as in a toolbar or card

### Color

There are four icon button color styles, in order of emphasis:

1. Filled
2. Tonal
3. Outlined
4. Standard

For the highest emphasis, use the filled style. For the lowest emphasis, use standard.

![Diagram of default and toggle icon buttons in 4 color styles.](https://lh3.googleusercontent.com/zX0RmAg_m2LHij-KQp9s644fx6zWH5Vq47EOpwR4OcSeSxQE4MnZPtq4RtAJj0pKfTLaOsRCrEEAocb7CO7cEEdy4M0jI9TpzsmkCW96us9N=s1352)

*Caption / Legend:*
The default (left) and toggle (right) icon buttons are available in all four color styles

Use a filled, tonal, or outlined icon button when the button needs more visual separation from the background.

Choose the right style and emphasis for the situation.

![‘Heart” icon on a background about a cooking show.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0hfou-4.png?alt=media)

*Caption / Legend:*
Use icons with a background to make them easy to see on any surface

![Text button and icon button in an app together.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0ir4x-5.png?alt=media)

*Caption / Legend:*
When mixing button variants, use color styles to make the primary action clear

Use the **filled** style for visual impact and key actions that require high emphasis.

Avoid overusing the filled style on a screen. Use them sparingly.

Use the **tonal** style as a middle ground between filled and outlined icon buttons. It’s useful for secondary actions paired with a high emphasis action.

For example, use the tonal style for actions like **Raise hand **in a video meeting. When selected, its visual emphasis is greater than the outlined menu button, but less than the filled **End call** button.

![Icons found on the bottom of a telephone screen, including a “hang up” icon with a bright red tone.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0lz0p-7.png?alt=media)

*Caption / Legend:*
Leverage the different color styles to establish emphasis and direct people to important actions

Use the **outlined** style for medium-emphasis buttons. It’s useful when the button isn’t the main focus of the interaction, such as browsing through sets of cards.

Use the **standard** style for low-emphasis buttons, or when placing buttons on a colorful surface.

![Left and right arrow outlined icon buttons indicating that more cards are available to browse.  ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xjqza2-8.png?alt=media)

*Caption / Legend:*
Outlined buttons indicate that more content is available without grabbing attention

### Size & width

Icon buttons are available in five different sizes:

- Extra small - 32dp
- Small - 40dp (default)
- Medium - 56dp
- Large - 96dp
- Extra large - 136dp

And three widths:

- Default
- Narrow
- Wide

Use size and width to provide emphasis and visual hierarchy in a page with multiple buttons. The main action should be the most visually prominent, whether through color or size, like starting and stopping a timer or playing and pausing a song.

![Variety of buttons in a timer app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5xk0kj1-10.png?alt=media)

*Caption / Legend:*
Use different button colors and sizes to provide visual hierarchy and emphasize primary actions

Not all icon buttons will need to emphasize a primary and secondary action.

When buttons have a similar importance, they should be the same size.

![Uniform button sizes in a calculator app.](https://lh3.googleusercontent.com/xCB1ezQGhZ8n6LcIlfpkJhTP-cziJEyQRycEmz_Eu8GlnA9CBQiY4Zuf5BZHpCf50WOMBNVbzi8nNt2eyJyiuMgR184equbhVVrP6qI5I10=s1352)

*Caption / Legend:*
When everything should have the same emphasis, use icon buttons that are the same size

## Anatomy

![Diagram of anatomy of outlined, standard, and filled icon buttons. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dw9g2n-11.png?alt=media)

*Caption / Legend:*
1. Icon
2. Container

### Icon

Icons visually communicate the button’s action. Their meaning should be clear and unambiguous. [Browse popular icons](https://fonts.google.com/icons)

Default icon buttons should use filled icons.

Toggle buttons should use an outlined icon when unselected, and a filled version of the icon when selected.

![“Heart” icon in a restaurant app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0tpl2-12.png?alt=media)

*Caption / Legend:*
Ensure the meaning of the icon is clear, such as a heart indicating Favorite

#### Icon accessibility requirements

For selected toggle buttons, if a filled version of an icon doesn’t exist, increase the icon weight to semibold. If semibold doesn’t provide enough visual change, use bold.

This is to ensure that selection is communicated through at least two properties, rather than just color. This requirement doesn't apply to default non-toggle buttons.

![Selected, semi-bold icon in a text editing app.](https://lh3.googleusercontent.com/WlJwCfuBY1Q541JoSnQlMRnQK77D7bjNnaLrojXxV7WJxGkYJOIwZdwMo0FnRu_qw0HMjfx5hso_QMCL6QHjhGgy0bpZ9JCGSqT3j_Ju33g=s1352)

*Caption / Legend:*
Icons without a fill should be semibolded when selected

### Container

The container provides increased contrast and hierarchy in places that need more visual separation from the background or other elements.

![Container separating a video call preview with actions you can take.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0wdzg-13.png?alt=media)

*Caption / Legend:*
The container provides visual separation from the background image

## Placement

Icon buttons are commonly used in other components, such as app bars and cards.

These buttons should be used for common, easily understandable actions.

Only use a few icon buttons at once.

![App bar with icon buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0xugp-14.png?alt=media)

*Caption / Legend:*
App bars often contain icon buttons

In dense layouts, group popular actions by placing many icon buttons next to each other in components like a toolbar or button group.

These components draw attention or add interaction between buttons.

![Toolbar with icon buttons and FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c0z5xa-15.png?alt=media)

*Caption / Legend:*
A toolbar is a collection of icon buttons and other components

## Behavior

### Hover

On hover, the icon button displays a tooltip describing its action, rather than the name of the icon itself.

### Selection

Toggle icon buttons allow a single choice to be selected or deselected, such as adding or removing something from favorites. 

When placed in a button group, icon buttons change shape to help the selected button stand out.

[More on button groups](/m3/pages/button-groups/overview)

The icon should become filled to represent selection.

If a filled version of the icon doesn't exist, use semibold weight instead.

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Understand meaning of the icon
- Navigate to and activate an icon button
- When applicable, a tooltip should be available to help describe the icon button's purpose

## Interaction & style

Ensure the icon has contrast of at least 3:1 with the surface or background.

![Icon button with correct contrast ratio.](https://lh3.googleusercontent.com/sxEm_qQA7j39jtqbpiH6Lnec5G_ZIJs-b8cWfSYYldZIAEjGTT52yeEfaF8M1HLTZCe0_0zqKfBBPGW9s6i9C0qFg75AEtWXiQmEzv4VVEEozQ=s656)

*Caption / Legend:*
Icon buttons should have a 3:1 contrast ratio with the surface or background

![Icon button with insufficient contrast ratio.](https://lh3.googleusercontent.com/FqCMh3l6_zJ396vQUK3U2--BcmNuXzVzQHPsd2a9kOXz6CjN4pE_mugSVMkSsZep6dHnnmhA-1_JIycaz0vxATA36JS_voTYg8Fc_zJDH_5f=s656)

*Caption / Legend:*
Avoid using colors with contrast below 3:1

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| Tab | Focus lands on (non-disabled) icon button |
| Space or Enter | Activates the (non-disabled) icon button |

## Labeling elements

The accessibility label for icon buttons describes the action the button is executing, such as **Add to favorites**, **Bookmark**, or **Send message**.

![Icon button label and role.](https://lh3.googleusercontent.com/Veran4xIuwOjaUK-TME0CkyE4D03sjgbC1O1fGyyeie01_pz6s0p7PoibSPSPzTNT7bmFKJy4kG40AnFtMviria4wR7kDBMlNQI6OuqqES8tBQ=s1352)

*Caption / Legend:*
The icon button label describes the action, such as Add to favorites for the heart icon

## Layout & density

Groups of similar components can be nested together inside a component, or they can stand alone.

The target size of each icon button should be at least 48dp, even when nested.

![Icon buttons with 48dp target sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c1h7ba-4.png?alt=media)

*Caption / Legend:*
Icon buttons can be used within other components, such as an app bar

### Avoid applying density by default

Don't apply density to icon buttons by default. This lowers their targets below the required 48x48 CSS pixels minimum size.

Provide density options that allow people to choose a higher density, such as selecting a denser layout or changing the theme. Controls for adjusting density must maintain a target size of at least 48x48 CSS pixels.

## Hover

On web, icon buttons should display a tooltip with an accessibility label.

![“Heart” icon with "Add to favorites" tooltip on hover.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c1j2b9-5.png?alt=media)

*Caption / Legend:*
The tooltip label text should be clear and concise
