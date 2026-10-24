# Toolbars

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/toolbars](https://m3.material.io/components/toolbars)
> Last Updated: 2026-07-28T08:14:45.120Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Two expressive variants: **docked toolbar** and **floating toolbar**
- Use the vibrant color style for greater emphasis
- Can display a wide variety of control types, like buttons, icon buttons, and text fields
- Can be paired with FABs to emphasize certain actions
- Don’t show at the same time as a navigation bar

![2 variants of toolbars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aionfm-01.png?alt=media)

*Caption / Legend:*
Configurations of floating toolbars

## Availability & resources

## M3 Expressive update

The **bottom app bar** is no longer recommended and should be replaced with the **docked toolbar**, which functions similarly, but is shorter and has more flexibility. The **floating toolbar** was created for more versatility, greater amounts of actions, and more variety in where it's placed. [More on GM3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Added **docked toolbar **to replace **bottom app bar**

- Size: Shorter height
- Color: Standard or vibrant
- Flexibility: More layout and element options
- Added **floating toolbar** with the following configurations:

- Layout: Horizontal or vertical
- Color: Standard or vibrant
- Flexibility: Can hold many elements and components. Can be paired with FAB.
- **Bottom app bar **is still available, but not recommended

![2 examples of toolbar variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aiswog-02.png?alt=media)

*Caption / Legend:*
1. Floating, vibrant color scheme and paired with FAB
2. Docked with embedded primary action instead of FAB

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller and the FAB is now contained within the app bar container

![M2 bottom app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e7liab-2.png?alt=media)

*Caption / Legend:*
M2: Bottom app bar had higher elevation of 8dp and didn't contain the FAB

![M3 bottom app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e7mh6v-3.png?alt=media)

*Caption / Legend:*
M3: Bottom app bar has new colors, a taller container, no elevation or shadow, and contains the FAB

## Specs

## Variants

![2 variants of toolbars.](https://lh3.googleusercontent.com/j7SkkZwP6mNfPUFrpFyRIcGSsfI3_5Kv8VI0whqh3B1cGJq3v0lx_xaG3wOnjjjRl6GIEV4EZATztyOcGm6n3BbHH6QXE4KMPnSmk1EmvGpm=s2048)

*Caption / Legend:*
1. Docked toolbar
2. Floating toolbar

### Baseline variant

The baseline bottom app bar is no longer recommended. It should be replaced with the docked toolbar, which is very similar and more flexible.

![Baseline bottom app bar, which looks like the docked toolbar, but is not recommended.](https://lh3.googleusercontent.com/tIdFhkPyYLLkFb4gUvrKPLzfIPcmAx4al6ORcGUGmS8oukJMF7ZzittOV7r-Nxwq0V63i9VTRfaVICziXGg4J8hd5TKaoZaDr28KS-7jQkI=s2048)

*Caption / Legend:*
1. Bottom app bar (not recommended)

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Docked toolbar | -- | Available |
| Floating toolbar | -- | Available |
| Bottom app bar | Available | Not recommended. Use **docked toolbar**. |

starNote:Implementation differs per platform. On Jetpack Compose, the floating toolbar is a separate component from the docked toolbar and bottom app bar.

## Configurations

![Color configuration of toolbars.](https://lh3.googleusercontent.com/o4tXTZsCpct2GOpIk9NZcIqwhbbw1CLCMMGKI8rjcbmGoiECpJUHMaKtCGRJ_bL-ngPgBlo5zJAj0wdfLm7PRdk93iZI0BvB08Ull7JZB7SqoQ=s2048)

*Caption / Legend:*
1. Standard and vibrant toolbars
2. Vertical floating toolbar
3. Floating toolbar with FAB

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Standard (default) | Available as bottom app bar | Available |
| Vibrant | -- | Available |  |
| Floating toolbar layout | Horizontal (default) | -- | Available |
| Vertical | -- | Available |  |
| Other elements | With FAB | Available as bottom app bar | Available* |

starNote:*Implementation differs per platform. On Jetpack Compose, floating toolbar with FAB is [fully supported](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#HorizontalFloatingToolbar(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.material3.FloatingToolbarColors,androidx.compose.foundation.layout.PaddingValues,androidx.compose.material3.FloatingToolbarScrollBehavior,androidx.compose.ui.graphics.Shape,kotlin.Function1,kotlin.Function1,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp,kotlin.Function1)). On other platforms, each component needs to be added separately.

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Jump to baseline bottom app bar specs](/m3/pages/toolbars/specs#ad142675-3e3b-43b8-ba53-12c1f0b7138d)

#### Design Tokens: Toolbar - Color - Standard

*For standard docked and floating toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.standard.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Toolbar standard hovered state layer opacity |
| `md.comp.toolbar.standard.selected.button.container.color` | `md.sys.color.secondary-container` | COLOR |  Toolbar standard selected button container color |
| `md.comp.toolbar.standard.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected pressed label color |
| `md.comp.toolbar.standard.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Toolbar standard pressed state layer opacity |
| `md.comp.toolbar.standard.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard pressed label color |
| `md.comp.toolbar.standard.selected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected pressed icon color |
| `md.comp.toolbar.standard.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard pressed icon color |
| `md.comp.toolbar.standard.selected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected pressed state layer color |
| `md.comp.toolbar.standard.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard pressed state layer color |
| `md.comp.toolbar.standard.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Toolbar standard focused state layer opacity |
| `md.comp.toolbar.standard.selected.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected focused label color |
| `md.comp.toolbar.standard.focused.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard focused label color |
| `md.comp.toolbar.standard.selected.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected focused icon color |
| `md.comp.toolbar.standard.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard focused icon color |
| `md.comp.toolbar.standard.selected.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected focused state layer color |
| `md.comp.toolbar.standard.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard focused state layer color |
| `md.comp.toolbar.standard.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard hovered state layer color |
| `md.comp.toolbar.standard.selected.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected hovered state layer color |
| `md.comp.toolbar.standard.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard hovered icon color |
| `md.comp.toolbar.standard.selected.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected hovered icon color |
| `md.comp.toolbar.standard.hovered.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard hovered label color |
| `md.comp.toolbar.standard.selected.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected hovered label color |
| `md.comp.toolbar.standard.disabled.icon.opacity` | - | OPACITY | Toolbar standard disabled icon opacity |
| `md.comp.toolbar.standard.disabled.label-text.opacity` | - | OPACITY | Toolbar standard disabled label opacity |
| `md.comp.toolbar.standard.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar standard disabled label color |
| `md.comp.toolbar.standard.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar standard disabled icon color |
| `md.comp.toolbar.standard.container.shape` | `md.sys.shape.corner.full` | SHAPE | Toolbar standard container shape |
| `md.comp.toolbar.standard.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected label color |
| `md.comp.toolbar.standard.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard label color |
| `md.comp.toolbar.standard.selected.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected icon color |
| `md.comp.toolbar.standard.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard icon color |
| `md.comp.toolbar.standard.button.container.color` | `md.sys.color.surface-container` | COLOR | Toolbar standard button container color |
| `md.comp.toolbar.standard.container.color` | `md.sys.color.surface-container` | COLOR | Toolbar standard container color |

#### Design Tokens: Toolbar - Color - Vibrant

*For vibrant docked and floating toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.vibrant.container.shape` | `md.sys.shape.corner.full` | SHAPE | Toolbar vibrant container shape |
| `md.comp.toolbar.vibrant.selected.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected label color |
| `md.comp.toolbar.vibrant.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant label color |
| `md.comp.toolbar.vibrant.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant icon color |
| `md.comp.toolbar.vibrant.selected.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected icon color |
| `md.comp.toolbar.vibrant.selected.button.container.color` | `md.sys.color.surface-container` | COLOR |  Toolbar vibrant selected button container color |
| `md.comp.toolbar.vibrant.button.container.color` | `md.sys.color.primary-container` | COLOR | Toolbar vibrant button container color |
| `md.comp.toolbar.vibrant.container.color` | `md.sys.color.primary-container` | COLOR | Toolbar standard container color |
| `md.comp.toolbar.vibrant.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Toolbar vibrant pressed state layer opacity |
| `md.comp.toolbar.vibrant.selected.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected pressed label color |
| `md.comp.toolbar.vibrant.pressed.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant pressed label color |
| `md.comp.toolbar.vibrant.selected.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected pressed icon color |
| `md.comp.toolbar.vibrant.pressed.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant pressed icon color |
| `md.comp.toolbar.vibrant.selected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected pressed state layer color |
| `md.comp.toolbar.vibrant.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant pressed state layer color |
| `md.comp.toolbar.vibrant.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Toolbar vibrant focused state layer opacity |
| `md.comp.toolbar.vibrant.selected.focused.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected focused label color |
| `md.comp.toolbar.vibrant.focused.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant focused label color |
| `md.comp.toolbar.vibrant.selected.focused.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected focused icon color |
| `md.comp.toolbar.vibrant.focused.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant focused icon color |
| `md.comp.toolbar.vibrant.selected.focused.state-layer.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected focused state layer color |
| `md.comp.toolbar.vibrant.focused.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant focused state layer color |
| `md.comp.toolbar.vibrant.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Toolbar vibrant hovered state layer opacity |
| `md.comp.toolbar.vibrant.selected.hovered.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected hovered label color |
| `md.comp.toolbar.vibrant.hovered.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant hovered label color |
| `md.comp.toolbar.vibrant.selected.hovered.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected hovered icon color |
| `md.comp.toolbar.vibrant.hovered.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant hovered icon color |
| `md.comp.toolbar.vibrant.selected.hovered.state-layer.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected hovered state layer color |
| `md.comp.toolbar.vibrant.hovered.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant hovered state layer color |
| `md.comp.toolbar.vibrant.disabled.label-text.opacity` | - | OPACITY | Toolbar vibrant disabled label opacity |
| `md.comp.toolbar.vibrant.disabled.icon.opacity` | - | OPACITY | Toolbar vibrant disabled icon opacity |
| `md.comp.toolbar.vibrant.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant disabled label color |
| `md.comp.toolbar.vibrant.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant disabled icon color |

#### Design Tokens: Toolbar - Docked

*For docked toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.docked.container.color` | `md.sys.color.surface-container` | COLOR | Docked toolbar container color |
| `md.comp.toolbar.docked.container.height` | 64dp | LENGTH | Docked toolbar container height |
| `md.comp.toolbar.docked.container.leading-space` | `md.sys.measurement.space200` | LENGTH | Docked toolbar leading padding |
| `md.comp.toolbar.docked.container.trailing-space` | `md.sys.measurement.space200` | LENGTH | Docked toolbar trailing padding |
| `md.comp.toolbar.docked.container.max-spacing` | 32dp | LENGTH | Docked toolbar max space between actions |
| `md.comp.toolbar.docked.container.min-spacing` | 4dp | LENGTH | Docked toolbar min space between actions |
| `md.comp.toolbar.docked.container.shape` | `md.sys.shape.corner.none` | SHAPE | Docked toolbar container shape |

#### Design Tokens: Toolbar - Floating

*For floating toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.floating.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Floating toolbar container elevation |
| `md.comp.toolbar.floating.vertical.container.width` | 64dp | LENGTH | Floating toolbar container height - vertical |
| `md.comp.toolbar.floating.horizontal.container.height` | 64dp | LENGTH | Floating toolbar container height - horizontal |
| `md.comp.toolbar.floating.container.leading-space` | `md.sys.measurement.space100` | LENGTH | Floating toolbar leading space |
| `md.comp.toolbar.floating.container.between-space` | `md.sys.measurement.space50` | LENGTH | Floating toolbar space between actions |
| `md.comp.toolbar.floating.horizontal.container.external-space` | `md.sys.measurement.space200` | LENGTH | Floating toolbar margin from screen edge - horizontal |
| `md.comp.toolbar.floating.container.external-padding` | 16dp | LENGTH | Floating toolbar margin from screen edge |
| `md.comp.toolbar.floating.vertical.container.external-space` | `md.sys.measurement.space300` | LENGTH | Floating toolbar margin from screen edge - vertical |
| `md.comp.toolbar.floating.container.trailing-space` | `md.sys.measurement.space100` | LENGTH | Floating toolbar trailing space |
| `md.comp.toolbar.floating.container.height` | 64dp | LENGTH | Floating toolbar container height |
| `md.comp.toolbar.floating.vibrant.button.selected.container.color` | `md.sys.color.surface-container` | COLOR | Floating toolbar vibrant selected button container color |
| `md.comp.toolbar.floating.vibrant.button.selected.text.color` | `md.sys.color.on-surface` | COLOR | Floating toolbar vibrant selected button text color |
| `md.comp.toolbar.floating.vibrant.button.selected.icon.color` | `md.sys.color.on-surface` | COLOR | Floating toolbar vibrant selected button icon color |
| `md.comp.toolbar.floating.vibrant.button.unselected.text.color` | `md.sys.color.on-primary-container` | COLOR | Floating toolbar vibrant unselected button text color  |
| `md.comp.toolbar.floating.vibrant.button.unselected.icon.color` | `md.sys.color.on-primary-container` | COLOR | Floating toolbar vibrant unselected button icon color  |
| `md.comp.toolbar.floating.vibrant.container.color` | `md.sys.color.primary-container` | COLOR | Floating toolbar vibrant color |
| `md.comp.toolbar.floating.standard.container.color` | `md.sys.color.surface-container` | COLOR | Floating toolbar standard color |
| `md.comp.toolbar.floating.container.shape` | `md.sys.shape.corner.full` | SHAPE | Floating toolbar container shape |

#### Design Tokens: Toolbar - Floating - FAB

*For floating toolbars with a FAB in them.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.floating.fab.medium.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Toolbar floating FAB medium container elevation |
| `md.comp.toolbar.floating.fab.medium.container.shape` | `md.sys.shape.corner.large-increased` | SHAPE | Toolbar floating FAB medium container shape |
| `md.comp.toolbar.floating.fab.medium.icon.size` | 28dp | LENGTH | Toolbar floating FAB medium icon size |
| `md.comp.toolbar.floating.fab.medium.container.width` | 80dp | LENGTH | Toolbar floating FAB medium container width |
| `md.comp.toolbar.floating.fab.medium.container.height` | 80dp | LENGTH | Toolbar floating FAB medium container height |
| `md.comp.toolbar.floating.fab.icon.size` | 24dp | LENGTH | Toolbar floating FAB icon size |
| `md.comp.toolbar.floating.fab.container.shape` | `md.sys.shape.corner.large` | SHAPE | Toolbar floating FAB container shape |
| `md.comp.toolbar.floating.fab.container.width` | 56dp | LENGTH | Toolbar floating FAB container width |
| `md.comp.toolbar.floating.fab.container.height` | 56dp | LENGTH | Toolbar floating FAB container height |
| `md.comp.toolbar.floating.fab.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Toolbar floating FAB container elevation |
| `md.comp.toolbar.floating.fab.between-space` | `md.sys.measurement.space100` | LENGTH | Toolbar floating FAB space between toolbar and FAB |
| `md.comp.toolbar.floating.fab.vibrant.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Toolbar floating FAB vibrant icon color |
| `md.comp.toolbar.floating.fab.vibrant.container.color` | `md.sys.color.tertiary-container` | COLOR | Toolbar floating FAB vibrant container color |
| `md.comp.toolbar.floating.fab.standard.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar floating FAB standard icon color |
| `md.comp.toolbar.floating.fab.standard.container.color` | `md.sys.color.secondary-container` | COLOR | Toolbar floating FAB standard container color |


## Anatomy

![2 elements of a toolbar.](https://lh3.googleusercontent.com/q5KTYC5SjXAnSvSVvP72h2InKksCupfh4xqfQsa8eqO3ImcNxSiNEvyVzwrM54a_bgMyYUG2oOrljsquGFjeuEhoQ-lfYIhLhcYRjTURpOs0mQ=s2048)

*Caption / Legend:*
1. Container
2. Placed components

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.

Each slot can be a different element. The most common elements are icon buttons, buttons, and text fields.

![A toolbar with 5 slots, conceptual spaces for UI elements, next to each other.](https://lh3.googleusercontent.com/U8tAffspM1NK0nWpYaxRxJHvPJOXWBX8GEuuEMeW6b-RjRo7OKtlMaYohHO-8Rn9QzwodfT_aJgLSocPQnHQDqhiMpfonWKsTd8XBUj-kKs=s1352)

*Caption / Legend:*
A toolbar is essentially a container with configurable slots

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

### Standard

![4 color roles in the standard color scheme  of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/vnb-hvZkhHov6Q_xpnqsRpE-v1-ahJAuOOAS49Uw7K1JgYNot331UJ_viioRQnCmG5c_kqdBCgTXYkFkIfdYmd2lUUnIiqJes4VaQa_i30dvYg=s2048)

*Caption / Legend:*
Standard color schemes and icon button types:

1. Surface container
2. Filled button (Primary, On primary)
3. Toggle tonal button (Secondary container, On secondary container)
4. Standard button (Primary)

### Vibrant

![4 color roles in the vibrant color scheme of the floating toolbar in light and dark scheme.](https://lh3.googleusercontent.com/MSHjbfagavP64_aZ8he_iw3phiUh6IkZDUjRhPkoMvHcSGsAh-0j3khoUTMDeaPdCVcRwhCp9XyMVOQuvKVvIDxcYcqgTe1tZ5YBzAxchYzx=s2048)

*Caption / Legend:*
Vibrant color scheme and icon button types:

1. Primary container
2. Filled button (Primary, On primary)
3. Toggle tonal button: (Surface container, On surface)
4. Standard button (On primary container)

## Measurements

By default all toolbars are 64dp high, center-aligned, have equal padding between items, and have a minimum outside padding of 16dp.

### Docked toolbar

![Default internal padding of a docked toolbar.](https://lh3.googleusercontent.com/Eovie9hEPA5n7suVT8sw4C5TaWOwLmXIl0J3WBMBVOcBFDGyGqhwTTePHEyqXbPNsWb4kH1PH0QZ0llhRfnV9iozSM-bZFjevV4HNZio2qCD=s2048)

*Caption / Legend:*
1. Default margins and padding
2. Margins and padding with leading, middle, and trailing content

![2 docked toolbars with different margins and alignment.](https://lh3.googleusercontent.com/Vsgw_yvIWA9pxAKEs4qmxtfhofUIoJnSXq6bO3_6v_OmMq4BZhQnS5FaT70GZEHJOzMm7DPuYd-ZUVsVtbJ1WuLqVCQ9khS6P6J8EMzlyOo=s2048)

*Caption / Legend:*
Alignment and padding can be configured to create unique layouts:

1. Left and right alignment
2. Center-aligned, 8dp padding between items

### Floating toolbar

![Diagram noting margin around edge of floating toolbar.](https://lh3.googleusercontent.com/BmOWzjQZ3a-oyRtJT94Nez52vT0DHXNgDWueCiIVnteA35K89UKvwAP_gs8fdqn450QEN9oEnw_yWK0oIKbqEZ9xhqope0Jt4C0lM83X4pc3ng=s2048)

*Caption / Legend:*
Default padding of floating toolbar

![Diagram noting layout measurements.](https://lh3.googleusercontent.com/OStcy-GlT-NRB63inDLnhvNm3czBqigQcIhixAV3N7fMvikSrBtiJtNJc_r0m8yP6nyxDkzhLQnsxBdp_FG6qDARNyB0S52U-CDXNkkG89E=s2048)

*Caption / Legend:*
Floating toolbar size and padding measurements

![Diagram noting layout margins.](https://lh3.googleusercontent.com/l1zIH0wA5J3kRRwuwvmIpG4gmlFXXYK88L4lF0q5vQ0_ThjPiPwpPJk0mOT8zbMyO20rMum-TPkHfY651sPtrWzVPiiVl7MXQxtWq3IthryT=s2048)

*Caption / Legend:*
Floating toolbar margins

## Bottom app bar (baseline)

![Diagram of bottom app bar indicating the container.](https://lh3.googleusercontent.com/XW6h1Afu7o0EPJEU5KC5OEODx1r67sQMqU9pUmqzyOAPy1b_y8-pMDrw-GqoWeSbEXhBR7cA_qDpTDdG8qwlAYoSH0Vc9jh5lviGtvZ76pekyw=s2048)

*Caption / Legend:*
1. Container

### Tokens & specs

Bottom app bar tokens are in one token set.

#### Design Tokens: Bottom app bar (baseline)

*Baseline bottom app bar container tokens. For expressive, use `md.comp.toolbar.docked` and `md.comp.toolbar.standard` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.bottom-app-bar.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Bottom app bar container surface tint layer color |
| `md.comp.bottom-app-bar.with-fab.container.height` | 72dp | LENGTH | Bottom app bar with FAB container height |
| `md.comp.bottom-app-bar.container.height` | 80dp | LENGTH | Bottom app bar container height |
| `md.comp.bottom-app-bar.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Bottom app bar container elevation |
| `md.comp.bottom-app-bar.container.shape` | `md.sys.shape.corner.none` | SHAPE | Bottom app bar container shape |
| `md.comp.bottom-app-bar.container.color` | `md.sys.color.surface-container` | COLOR | Bottom app bar container color |

#### Design Tokens: Toolbar - Docked

*For docked toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.docked.container.color` | `md.sys.color.surface-container` | COLOR | Docked toolbar container color |
| `md.comp.toolbar.docked.container.height` | 64dp | LENGTH | Docked toolbar container height |
| `md.comp.toolbar.docked.container.leading-space` | `md.sys.measurement.space200` | LENGTH | Docked toolbar leading padding |
| `md.comp.toolbar.docked.container.trailing-space` | `md.sys.measurement.space200` | LENGTH | Docked toolbar trailing padding |
| `md.comp.toolbar.docked.container.max-spacing` | 32dp | LENGTH | Docked toolbar max space between actions |
| `md.comp.toolbar.docked.container.min-spacing` | 4dp | LENGTH | Docked toolbar min space between actions |
| `md.comp.toolbar.docked.container.shape` | `md.sys.shape.corner.none` | SHAPE | Docked toolbar container shape |

#### Design Tokens: Toolbar - Floating

*For floating toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.floating.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Floating toolbar container elevation |
| `md.comp.toolbar.floating.vertical.container.width` | 64dp | LENGTH | Floating toolbar container height - vertical |
| `md.comp.toolbar.floating.horizontal.container.height` | 64dp | LENGTH | Floating toolbar container height - horizontal |
| `md.comp.toolbar.floating.container.leading-space` | `md.sys.measurement.space100` | LENGTH | Floating toolbar leading space |
| `md.comp.toolbar.floating.container.between-space` | `md.sys.measurement.space50` | LENGTH | Floating toolbar space between actions |
| `md.comp.toolbar.floating.horizontal.container.external-space` | `md.sys.measurement.space200` | LENGTH | Floating toolbar margin from screen edge - horizontal |
| `md.comp.toolbar.floating.container.external-padding` | 16dp | LENGTH | Floating toolbar margin from screen edge |
| `md.comp.toolbar.floating.vertical.container.external-space` | `md.sys.measurement.space300` | LENGTH | Floating toolbar margin from screen edge - vertical |
| `md.comp.toolbar.floating.container.trailing-space` | `md.sys.measurement.space100` | LENGTH | Floating toolbar trailing space |
| `md.comp.toolbar.floating.container.height` | 64dp | LENGTH | Floating toolbar container height |
| `md.comp.toolbar.floating.vibrant.button.selected.container.color` | `md.sys.color.surface-container` | COLOR | Floating toolbar vibrant selected button container color |
| `md.comp.toolbar.floating.vibrant.button.selected.text.color` | `md.sys.color.on-surface` | COLOR | Floating toolbar vibrant selected button text color |
| `md.comp.toolbar.floating.vibrant.button.selected.icon.color` | `md.sys.color.on-surface` | COLOR | Floating toolbar vibrant selected button icon color |
| `md.comp.toolbar.floating.vibrant.button.unselected.text.color` | `md.sys.color.on-primary-container` | COLOR | Floating toolbar vibrant unselected button text color  |
| `md.comp.toolbar.floating.vibrant.button.unselected.icon.color` | `md.sys.color.on-primary-container` | COLOR | Floating toolbar vibrant unselected button icon color  |
| `md.comp.toolbar.floating.vibrant.container.color` | `md.sys.color.primary-container` | COLOR | Floating toolbar vibrant color |
| `md.comp.toolbar.floating.standard.container.color` | `md.sys.color.surface-container` | COLOR | Floating toolbar standard color |
| `md.comp.toolbar.floating.container.shape` | `md.sys.shape.corner.full` | SHAPE | Floating toolbar container shape |

#### Design Tokens: Toolbar - Color - Standard

*For standard docked and floating toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.standard.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Toolbar standard hovered state layer opacity |
| `md.comp.toolbar.standard.selected.button.container.color` | `md.sys.color.secondary-container` | COLOR |  Toolbar standard selected button container color |
| `md.comp.toolbar.standard.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected pressed label color |
| `md.comp.toolbar.standard.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Toolbar standard pressed state layer opacity |
| `md.comp.toolbar.standard.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard pressed label color |
| `md.comp.toolbar.standard.selected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected pressed icon color |
| `md.comp.toolbar.standard.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard pressed icon color |
| `md.comp.toolbar.standard.selected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected pressed state layer color |
| `md.comp.toolbar.standard.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard pressed state layer color |
| `md.comp.toolbar.standard.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Toolbar standard focused state layer opacity |
| `md.comp.toolbar.standard.selected.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected focused label color |
| `md.comp.toolbar.standard.focused.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard focused label color |
| `md.comp.toolbar.standard.selected.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected focused icon color |
| `md.comp.toolbar.standard.focused.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard focused icon color |
| `md.comp.toolbar.standard.selected.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected focused state layer color |
| `md.comp.toolbar.standard.focused.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard focused state layer color |
| `md.comp.toolbar.standard.hovered.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard hovered state layer color |
| `md.comp.toolbar.standard.selected.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected hovered state layer color |
| `md.comp.toolbar.standard.hovered.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard hovered icon color |
| `md.comp.toolbar.standard.selected.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected hovered icon color |
| `md.comp.toolbar.standard.hovered.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard hovered label color |
| `md.comp.toolbar.standard.selected.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected hovered label color |
| `md.comp.toolbar.standard.disabled.icon.opacity` | - | OPACITY | Toolbar standard disabled icon opacity |
| `md.comp.toolbar.standard.disabled.label-text.opacity` | - | OPACITY | Toolbar standard disabled label opacity |
| `md.comp.toolbar.standard.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar standard disabled label color |
| `md.comp.toolbar.standard.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar standard disabled icon color |
| `md.comp.toolbar.standard.container.shape` | `md.sys.shape.corner.full` | SHAPE | Toolbar standard container shape |
| `md.comp.toolbar.standard.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected label color |
| `md.comp.toolbar.standard.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard label color |
| `md.comp.toolbar.standard.selected.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar standard selected icon color |
| `md.comp.toolbar.standard.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Toolbar standard icon color |
| `md.comp.toolbar.standard.button.container.color` | `md.sys.color.surface-container` | COLOR | Toolbar standard button container color |
| `md.comp.toolbar.standard.container.color` | `md.sys.color.surface-container` | COLOR | Toolbar standard container color |

#### Design Tokens: Toolbar - Color - Vibrant

*For vibrant docked and floating toolbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.vibrant.container.shape` | `md.sys.shape.corner.full` | SHAPE | Toolbar vibrant container shape |
| `md.comp.toolbar.vibrant.selected.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected label color |
| `md.comp.toolbar.vibrant.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant label color |
| `md.comp.toolbar.vibrant.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant icon color |
| `md.comp.toolbar.vibrant.selected.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected icon color |
| `md.comp.toolbar.vibrant.selected.button.container.color` | `md.sys.color.surface-container` | COLOR |  Toolbar vibrant selected button container color |
| `md.comp.toolbar.vibrant.button.container.color` | `md.sys.color.primary-container` | COLOR | Toolbar vibrant button container color |
| `md.comp.toolbar.vibrant.container.color` | `md.sys.color.primary-container` | COLOR | Toolbar standard container color |
| `md.comp.toolbar.vibrant.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Toolbar vibrant pressed state layer opacity |
| `md.comp.toolbar.vibrant.selected.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected pressed label color |
| `md.comp.toolbar.vibrant.pressed.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant pressed label color |
| `md.comp.toolbar.vibrant.selected.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected pressed icon color |
| `md.comp.toolbar.vibrant.pressed.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant pressed icon color |
| `md.comp.toolbar.vibrant.selected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected pressed state layer color |
| `md.comp.toolbar.vibrant.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant pressed state layer color |
| `md.comp.toolbar.vibrant.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Toolbar vibrant focused state layer opacity |
| `md.comp.toolbar.vibrant.selected.focused.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected focused label color |
| `md.comp.toolbar.vibrant.focused.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant focused label color |
| `md.comp.toolbar.vibrant.selected.focused.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected focused icon color |
| `md.comp.toolbar.vibrant.focused.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant focused icon color |
| `md.comp.toolbar.vibrant.selected.focused.state-layer.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected focused state layer color |
| `md.comp.toolbar.vibrant.focused.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant focused state layer color |
| `md.comp.toolbar.vibrant.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Toolbar vibrant hovered state layer opacity |
| `md.comp.toolbar.vibrant.selected.hovered.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected hovered label color |
| `md.comp.toolbar.vibrant.hovered.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant hovered label color |
| `md.comp.toolbar.vibrant.selected.hovered.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected hovered icon color |
| `md.comp.toolbar.vibrant.hovered.icon.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant hovered icon color |
| `md.comp.toolbar.vibrant.selected.hovered.state-layer.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant selected hovered state layer color |
| `md.comp.toolbar.vibrant.hovered.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Toolbar vibrant hovered state layer color |
| `md.comp.toolbar.vibrant.disabled.label-text.opacity` | - | OPACITY | Toolbar vibrant disabled label opacity |
| `md.comp.toolbar.vibrant.disabled.icon.opacity` | - | OPACITY | Toolbar vibrant disabled icon opacity |
| `md.comp.toolbar.vibrant.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant disabled label color |
| `md.comp.toolbar.vibrant.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Toolbar vibrant disabled icon color |

#### Design Tokens: Toolbar - Floating - FAB

*For floating toolbars with a FAB in them.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.toolbar.floating.fab.medium.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Toolbar floating FAB medium container elevation |
| `md.comp.toolbar.floating.fab.medium.container.shape` | `md.sys.shape.corner.large-increased` | SHAPE | Toolbar floating FAB medium container shape |
| `md.comp.toolbar.floating.fab.medium.icon.size` | 28dp | LENGTH | Toolbar floating FAB medium icon size |
| `md.comp.toolbar.floating.fab.medium.container.width` | 80dp | LENGTH | Toolbar floating FAB medium container width |
| `md.comp.toolbar.floating.fab.medium.container.height` | 80dp | LENGTH | Toolbar floating FAB medium container height |
| `md.comp.toolbar.floating.fab.icon.size` | 24dp | LENGTH | Toolbar floating FAB icon size |
| `md.comp.toolbar.floating.fab.container.shape` | `md.sys.shape.corner.large` | SHAPE | Toolbar floating FAB container shape |
| `md.comp.toolbar.floating.fab.container.width` | 56dp | LENGTH | Toolbar floating FAB container width |
| `md.comp.toolbar.floating.fab.container.height` | 56dp | LENGTH | Toolbar floating FAB container height |
| `md.comp.toolbar.floating.fab.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Toolbar floating FAB container elevation |
| `md.comp.toolbar.floating.fab.between-space` | `md.sys.measurement.space100` | LENGTH | Toolbar floating FAB space between toolbar and FAB |
| `md.comp.toolbar.floating.fab.vibrant.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Toolbar floating FAB vibrant icon color |
| `md.comp.toolbar.floating.fab.vibrant.container.color` | `md.sys.color.tertiary-container` | COLOR | Toolbar floating FAB vibrant container color |
| `md.comp.toolbar.floating.fab.standard.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Toolbar floating FAB standard icon color |
| `md.comp.toolbar.floating.fab.standard.container.color` | `md.sys.color.secondary-container` | COLOR | Toolbar floating FAB standard container color |


### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Diagram of bottom app bar indicating its color mappings.](https://lh3.googleusercontent.com/RDMrnLfQpoptezvVbHosgCQV_qq-MEVY3hKWH4U1fo8wYZLg0Zv4Z1jqiQT1FxojqUYoCEZ8lekjZ3SYJe3-vuO50wNCzsNx7lBpp6iWgqN0rQ=s2048)

*Caption / Legend:*
Bottom app bar color role used for light and dark themes:

1. Surface container

### Measurements

![Diagram showing layout values and paddings for bottom app bar.](https://lh3.googleusercontent.com/42HaRTtyV44uEgw2rZzgGwWNqlOy1g0mCiaUjMy7iuiG2lAJ4ACu5xe9PEJgOfE2PFIJ_8TjIRqrk75Wc2YmtrtcrYklJzE3nSV8HbBbW7Y=s2048)

*Caption / Legend:*
Bottom app bar padding and size measurements

### Common layouts

![Side by side view of bottom app bars in different configurations.](https://lh3.googleusercontent.com/JvPTixMCyejczwwssuEezKtZO-2y_RmCjTIrMEpHFu5HOAApXlYpEt-Pq3GV4Bd1LJQlgRd4O3PPpK7YpOkaQMUvEo3Sg2E1I8iLh56BNKvC=s2048)

*Caption / Legend:*
1. Icon buttons and FAB
2. Icon buttons and no FAB

## Guidelines

![5 toolbars of various colors, elements, and actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xi1w6d-01.png?alt=media)

*Caption / Legend:*
Toolbars can be used for a wide variety of use cases

## Usage

Use a toolbar to provide actions related to the current page.

Toolbars can contain many actions and can scale to show more actions in larger windows.

![Vibrant toolbar at bottom of mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akotbi-02.png?alt=media)

*Caption / Legend:*
A toolbar provides actions related to the current page

There are two variants of toolbars:

- **Docked toolbar** 
Spans the full width of the window. It’s best used for global actions that remain the same across multiple pages.

- **Floating toolbar** 
Floats above the body content. It’s best used for contextual actions relevant to the body content or the specific page.

The baseline **bottom app bar **is no longer recommended, but is still supported.

![Docked toolbar example.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akx0bq-03.png?alt=media)

*Caption / Legend:*
Docked toolbar shows global controls

![Floating toolbar example.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0akxxgm-04.png?alt=media)

*Caption / Legend:*
Floating toolbar show controls relevant to the current page

When actions don’t fit in a toolbar, add a menu.

![Toolbar showing local navigation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2ytl4us-05.png?alt=media)

*Caption / Legend:*
Toolbar actions can open a menu

There are two color configurations:

- **Standard** 
A low-emphasis color scheme best used for focusing attention on the body content.

- **Vibrant** 
A high-emphasis color scheme that draws attention to the controls. It can also indicate a temporary change in the page behavior, such as entering edit mode.

Consider using alternative color roles to create greater or lesser emphasis depending on the needs of the app. Experiment with different color roles to achieve different effects.

![Toolbar with low-emphasis controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al28lo-06.png?alt=media)

*Caption / Legend:*
Use the standard color scheme to draw focus to content outside the toolbar

![Toolbar with high-emphasis controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al3avf-07.png?alt=media)

*Caption / Legend:*
Use the vibrant color scheme to emphasize controls or actions

### Toolbars & navigation bars

The toolbar and navigation bar are both placed at the bottom of the window, so should **not** be shown at the same time. Show the navigation bar on primary pages, and toolbars on subsequent pages with actions.

![A navigation bar shown on the main email Inbox page, and a toolbar shown when reading the email.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al4vpg-08.png?alt=media)

*Caption / Legend:*
1. Navigation bar on a primary page
2. Toolbar on a secondary page with contextual actions

Floating toolbars can be used as tabs between related subsequent pages in the product hierarchy.

This helps group similar pages together, and shows that the selection affects the body content underneath.

![Floating toolbar with secondary navigation labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alklw0-09.png?alt=media)

*Caption / Legend:*
Keep navigation distinct, and use a toolbar to display local navigation on a specific page

Consider the existing app hierarchy when using a toolbar for local navigation. 

Avoid redundant or confusing navigation combinations in the same view.

![Floating toolbar with secondary navigation labels displaying above a bottom navigation bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aln2r9-10.png?alt=media)

*Caption / Legend:*
Don’t show a navigation bar and a toolbar with navigation controls at the same time

## Anatomy

![Diagram of toolbar layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xiiwbe-11.png?alt=media)

*Caption / Legend:*
1. Container
2. Elements

### Container

The docked toolbar’s container spans the full width of the window. 

Avoid applying rounded corners to the container. This can imply the container expands or changes upon interaction.

![Docked toolbar with square corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0als248-12.png?alt=media)

*Caption / Legend:*
Use straight corners for docked toolbars

![Docked toolbar with rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alr7n0-13.png?alt=media)

*Caption / Legend:*
Avoid modifying the container shape

As long as there's a minimum of 16dp padding on the leading and trailing edge, arrange controls inside however you see fit. The 32dp padding between items is just the default. 

All elements need a minimum 48x48dp target area to be accessible.

Be cautious of including too many controls as it can be overwhelming.

![Docked toolbar with too many controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0altzpa-22.png?alt=media)

*Caption / Legend:*
Don’t overwhelm people with too many controls

The floating toolbar’s container should be fully visible on screen. If more actions are needed, use an overflow menu.

![Floating toolbar with overflow menu icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alvr9d-14.png?alt=media)

*Caption / Legend:*
Choose the most essential actions to show on screen by default

![Floating toolbar that expands off edge of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alwqwe-15.png?alt=media)

*Caption / Legend:*
Floating toolbars shouldn’t exceed the edge of the window or pane

#### Elevation

Floating toolbars have elevation by default. 

If the content beneath the toolbar is visually distinct, elevation can be removed.

![Vibrant floating toolbar that's easy to see in front of a neutral text background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xiazxd-17.png?alt=media)

*Caption / Legend:*
The elevation on floating toolbars can be removed if on a visually distinct background

### Flexibility & slots

When configuring a toolbar, think of it as a container with several slots.

These slots can be populated by buttons, icon buttons, images, text fields, or any kind of custom component.

Icon buttons provide an even hierarchy of controls. Mixing in a filled icon button can help add emphasis to a single action.

![5 toolbars with slots, and various combinations of buttons, icon buttons, filled icon buttons, and text fields.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aly7tp-16.png?alt=media)

*Caption / Legend:*
Toolbars are made of slots that can contain many kinds of actions

Visually emphasizing a single action more than others is an effective way to create hierarchy and guide people to controls they use most often. Avoid emphasizing more than one action at a time.

Some common ways to add emphasis to toolbar actions include:

- Use different icon button color styles, such as filled, tonal, and standard
- Customize the color roles of a single action, such as a primary or secondary palette
- Use wide and narrow icon buttons
- Pair the toolbar with a FAB

![2 floating toolbars, 1 with a filled action button and 1 paired with a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am06ae-18.png?alt=media)

*Caption / Legend:*
Two different ways to create a high emphasis action in toolbars

![Floating toolbar with primary action and FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am2tq8-19.png?alt=media)

*Caption / Legend:*
Don’t emphasize multiple buttons with bold, primary colors, such as a button and FAB together. Emphasize one action at a time.

![Floating toolbar with different control designs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am3wil-20.png?alt=media)

*Caption / Legend:*
Avoid mixing too many different controls in the same toolbar. A consistent control design keeps things clear.

Avoid using square icon buttons in floating toolbars. Their square shape conflicts with the fully-rounded shape of the floating toolbar container.

Square buttons can be used in the docked toolbar.

![A floating toolbar, which is rounded, with squared icon buttons inside.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xigk3q-22.png?alt=media)

*Caption / Legend:*
Don’t use square filled icon buttons in floating toolbars

### Floating toolbar with FAB

A FAB can be placed next to a floating toolbar to present one high-priority action alongside a unified set of toolbar actions.

Use a FAB for the highest-priority action in the view, or to complement the controls.

![3 toolbars paired with FABs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am631l-21.png?alt=media)

*Caption / Legend:*
Floating toolbars can be paired with FABs

## Position & orientation

Only place docked toolbars at the bottom of the window.

If using other bottom-aligned elements, such as a navigation bar, don't use a docked toolbar.

![Docked toolbar on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ama5z3-22.png?alt=media)

*Caption / Legend:*
Docked toolbars are always at the bottom of the window

Floating toolbars can be horizontal or vertical. 

Horizontal toolbars should have a minimum 16dp margin from the edge of the window.

![Floating toolbar on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amca2n-23.png?alt=media)

*Caption / Legend:*
Horizontal floating toolbars should be at least 16dp from the edge of the window

In larger breakpoints, floating toolbars can be vertical and placed on either side of the screen.

Vertical toolbars should have a minimum 24dp margin.

![Vertical floating toolbar with 24dp margin.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7ximrxw-26.png?alt=media)

*Caption / Legend:*
Maintain at least a 24dp margin for vertical toolbars

To keep vertical toolbars compact, don’t use wide icon buttons.

Use narrow or default icon buttons instead.

![Toolbar showing local navigation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amgeqc-24.png?alt=media)

*Caption / Legend:*
Using wide buttons with vertical toolbars can unnecessarily widen toolbar containers and hide other UI elements

Vertical toolbars should be positioned opposite the navigation rail to balance out the screen and keep actions easy to access.

When showing a navigation rail and vertical floating toolbar at once, use the centered configuration of the navigation rail.

![Large screen UI showing both a navigation rail and vertical floating toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amkwhr-TBD.png?alt=media)

*Caption / Legend:*
When a nav rail is visible, the floating toolbar should be vertical on the opposite edge of the window

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](/m3/pages/layout-overview/adaptive-design)

### Resizing

#### Docked

The docked toolbar should always span 100% of the screen width.

In compact breakpoints, elements in the toolbar should be evenly spaced.

In medium breakpoints and larger, adjust the padding between controls to create a comfortable layout. This can be achieved by:

- Centering all elements
- Customizing to center a key action, and aligning other elements to the edges

![Docked toolbar with evenly spaced elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma2vff01-29.png?alt=media)

*Caption / Legend:*
Docked toolbar items should be evenly spaced in compact windows

![Docked toolbar with centered elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma6y2uq6-30.png?alt=media)

*Caption / Legend:*
In medium breakpoints and larger, create a spacious layout by centering all elements

![Docked toolbar with central action and some elements pushed to the edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma6y2g0q-31.png?alt=media)

*Caption / Legend:*
Align controls to the edge of the screen to make them easier to reach on tablets, and to better highlight a primary action in the middle

On web and large screens, the docked toolbar can be rounded. Dividers can be used to organize large amounts of items. Only shrink the height and use extra small buttons if vertical space is limited.

![Docked toolbar with 15 actions for text editing on large screens, organized with dividers.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmbv5jv5l-33%20Old.png?alt=media)

*Caption / Legend:*
On web and other large screens, docked toolbars can be rounded and placed in different parts of the page

#### Floating

The container should only be as big as needed to hold the items inside before reaching the 16dp margin.

If there’s not enough space for all items, put them in an overflow menu in the trailing slot. As the breakpoint expands, more actions can be revealed.

The floating toolbar width can also be capped to keep it smaller and hide more elements.

![Floating toolbar in compact window with excess padding.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma1lkstz-32.png?alt=media)

*Caption / Legend:*
Don’t add extra space to a toolbar beyond its necessary items

![Floating toolbar in expanded window class.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fma1lm7ro-33%20(1).png?alt=media)

*Caption / Legend:*
At larger screen sizes, the container can display more controls before hitting the 16dp margin

Vertical toolbars aren’t recommended for compact windows.

They take up a significant area of the screen and may feel visually overwhelming, especially on screens with complex layouts.

Only use them when the screen is simple or when the toolbar has a few controls.

![Vertical toolbar in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmqa2l-34.png?alt=media)

*Caption / Legend:*
Vertical toolbars can cover important content in compact windows

### Presentation

In larger breakpoints, floating toolbars can be aligned to opposite edges of the screen so they're easy to reach and group similar actions. For example, consider placing the undo and redo actions in one toolbar, and editing controls like highlight, erase, and select in another. Stylistic differences can help emphasize each toolbar’s purpose and clarify hierarchy.

![2 toolbars, each with distinct stylistic treatment and actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0amsqw6-29.png?alt=media)

*Caption / Legend:*
Multiple toolbars with different stylistic treatments can create hierarchy and distinguish different kinds of actions

Don’t use multiple toolbars in compact windows. There typically isn’t enough room on screen. 

Instead, use one toolbar for all actions.

![Multiple toolbars in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmw01r-36.png?alt=media)

*Caption / Legend:*
Avoid using multiple toolbars in smaller windows

Actions at the trailing edge of the toolbar can collapse into an overflow menu at smaller breakpoints, and become visible again at larger sizes.

### Right-to-left languages

In right-to-left (RTL) languages, mirror individual items that need it, like icons and text direction. If the order of actions is important, flip the order of the actions as well.

![Next button is on trailing edge for a LTR language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmygdb-37.png?alt=media)

*Caption / Legend:*
In LTR languages, the **Next** button is intentionally placed on the trailing (right) edge

![Next button is now on the trailing edge, at left, for RTL language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7xmz6n4-38.png?alt=media)

*Caption / Legend:*
In RTL languages, reverse the order so **Next** remains on the trailing edge when flipped, now on the left. Text is not translated to illustrate mirroring.

## Behavior

### Scrolling

Docked toolbars can either remain on the screen during scroll, or animate offscreen.

Floating toolbars can remain on the screen, animate offscreen, or collapse into a single, high-emphasis action on scroll.

On Jetpack Compose, the floating toolbar can collapse to a FAB or key action on scroll.

Don't collapse actions and scroll at the same time.

## XR

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific toolbar with custom specs and guidance. Read [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There is one toolbar orbiter. It closely aligns with the floating toolbar. It can be configured to be horizontal or vertical.

![Horizontal and vertical toolbar orbiters.](https://lh3.googleusercontent.com/NPkjrCVlcMYcFjhskyX68C6Ajzx22mjakvKDZAVUHBJw8EP_xCeJMvYK864Ddwt9X84QyVHllfVaEdPwFYAmtqjrhAQI_fh7tgy9m0nu5U30lg=s2048)

*Caption / Legend:*
1. Horizontal floating toolbar
2. Vertical floating toolbar

## Anatomy

![2 elements of a toolbar orbiter: container and placed components. ](https://lh3.googleusercontent.com/x86RozsiCz4_T4cUwrQkf3UJneRZFflJsRYhfLXCzxOVE5zBfBtXAYmBQ9ri8SlRvOTv-XyBPFsGN5SYSiq_YuEOZYq0ahBdmGs4PssOnO-6=s1024)

*Caption / Legend:*
1. Container
2. Placed components

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the toolbar displays above the spatial panel on the Z-axis. Elevated toolbars can use any of these color options:

![4 versions of toolbar elevation color strategy.](https://lh3.googleusercontent.com/OILSCxFAWoe1XfIXg31uAZc78UpNfv62wl-DJVb4TAdCizAikgblMpziUQPW1muEROAz91Ae36E5OpoddORkfhpjpFN272ft671jgrL9wSkgaw=s2048)

*Caption / Legend:*
1. Surface container
2. Surface container high
3. Surface container highest
4. Tertiary container

## Measurements

![Diagram with measurements for toolbar orbiters.](https://lh3.googleusercontent.com/syZmjQHwtPXmvN0xfW_CSo3XrQw2K1PuwEfevjaOJfRXJSt3F1jWtQ6tDNyTxyByiw1I8LHGeYrGJc2zE43QZsIAAckSsTMhOPawWVVLDrE=s2048)

*Caption / Legend:*
Measurements for toolbar orbiters

![Diagram with 12dp padding for toolbar orbiters.](https://lh3.googleusercontent.com/sgQJWHiCNlNhFSu2kBf-ju1LPD-IIM0Qr0X7z2-IpqNJ1yhhZ6QWyEjcNEsMDv8aBSvxBrShLl-F1NjGmhSTmy-Iq7zXkarK1tBElHgpOMU=s2048)

*Caption / Legend:*
Padding for toolbar orbiters

## Usage

A toolbar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular toolbar on the same plane as the body content to mimic a 2D experience.

## Behavior

### Local context (recommended)

When placed in local context, the toolbar orbiter is centered at the bottom of the spatial panel it controls.

It repositions in response to layout or content changes.

### Global context

When placed in global context, the toolbar orbiter is centered at the bottom of the app.

It stays anchored to the app during layout or content changes.

### Expand & collapse

Toolbar orbiters with more than five items can expand and collapse to reveal or hide additional content.

When a toolbar orbiter expands, it stays within the bounds of the adjacent spatial panel.

Alternatively, more complex toolbars can be split into multiple toolbars.

### Additional toolbars

In some cases, full space apps can have more than one toolbar orbiter, placed in either global or local context.

## Placement

### Offset & inset positioning

In full space, a toolbar orbiter can be positioned adjacent to or overlap a spatial panel.

![Toolbar orbiter with offset positioning.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemeu04x-11-do.png?alt=media)

*Caption / Legend:*
The recommended toolbar orbiter position from the spatial panel is:

- Offset by 20dp or
- Inset by 12dp

![Toolbar orbiter with inset positioning above 12dp that obstructs content on the spatial panel. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemevhx8-12-don't.png?alt=media)

*Caption / Legend:*
To prevent content obstruction, don’t overlap the toolbar orbiter and spatial panel above a 12dp inset threshold

### Horizontal alignment

![A horizontal toolbar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemey1hz-13-do.png?alt=media)

*Caption / Legend:*
Always align the toolbar orbiter within the horizontal bounds of nearby spatial panels

![A horizontal toolbar orbiter that extends beyond the width of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemez2e1-14-don't.png?alt=media)

*Caption / Legend:*
The toolbar orbiter shouldn’t exceed the width of adjacent spatial panels

### Vertical alignment

![A vertical toolbar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemf0q6h-15-do.png?alt=media)

*Caption / Legend:*
Always align the toolbar orbiter within the vertical bounds of nearby spatial panels

![A vertical toolbar orbiter that extends beyond the height of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfyo8f-16-don't.png?alt=media)

*Caption / Legend:*
The toolbar orbiter shouldn’t exceed the height of adjacent spatial panels

### Spatial panel alignment

By default, toolbar orbiters are center-aligned to the spatial panel. Their placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/understanding-layout/bidirectionality-rtl).

![Toolbar orbiter alignment options in relation to spatial panels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfvpq3-17.png?alt=media)

*Caption / Legend:*
Depending on the configuration (horizontal or vertical) of the toolbar orbiter, it can align to the center, left, right, top, or bottom of a spatial panel

Avoid placing a vertical toolbar orbiter between spatial panels. 

This negatively affects the interface structure and can make it difficult to find.

![A vertical toolbar orbiter is placed between 2 spatial panels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfx943-18-don't.png?alt=media)

*Caption / Legend:*
Don't place a vertical toolbar orbiter between spatial panels

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR toolbars should follow applicable Material [toolbar accessibility standards](/m3/pages/toolbars/accessibility).

## Accessibility

## Use cases

People should be able to the following with assistive technology:

- Navigate and activate any actions in the toolbar
- Select a destination from a menu
- Activate a back button
- Maintain access to toolbar controls when the content is scrolled or collapsed

## Interaction & style

The toolbar has no interactions by default. All interactions are with the elements placed inside.

**Touch**

- When tapping on an icon button in the toolbar, a touch ripple appears, indicating interaction feedback.

**Cursor**

- When hovered, the hover state provides a visual cue to the user that the element is interactive.
- When clicked (in both active and inactive states), a ripple appears, showing the user feedback.

### Initial focus

Focus lands on the first interactive element.

Use **Tab** to navigate through all other actions.

![Navigating the top app bar using arrow or tab on a keyboard.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0anu1gy-3.png?alt=media)

*Caption / Legend:*
Use **Tab** to navigate through interactive elements

![Activating actions in the top app bar using space or enter on a keyboard.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0anv4t7-4.png?alt=media)

*Caption / Legend:*
Use **Space** or **Enter** to activate actions

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab or Arrows | Navigate between interactive elements |
| Space or Enter | Activate the focused element |

### Labeling elements

On web, the toolbar container should have the **toolbar** role.

On mobile, it can be a generic container.

All actions inside the toolbar should follow their respective accessibility guidelines.

![A toolbar on web, with a “toolbar” role label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0anynmv-5.png?alt=media)

*Caption / Legend:*
On web, use the **toolbar** role
