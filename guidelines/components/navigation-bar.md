# Navigation bar

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/navigation-bar](https://m3.material.io/components/navigation-bar)
> Last Updated: 2026-07-28T07:36:27.700Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use navigation bars in compact or medium window sizes
- Can contain 3-5 destinations of equal importance
- Destinations don't change. They should be consistent across app screens.

![Two navigation bars of different widths with 4 destinations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fodjau-01.png?alt=media)

*Caption / Legend:*
Navigation bar for compact and medium window sizes

## Availability & resources

## M3 Expressive update

**May 2025**

A new flexible navigation bar was introduced to replace the baseline navigation bar. It’s shorter and supports horizontal navigation items in medium windows. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Baseline navigation bar is no longer recommended
- Added **flexible **navigation bar

- Shorter height
- Can be used in medium window sizes with horizontal navigation items

Color:

- Active label changed from **on-surface-variant** to **secondary**

![Navigation bar in M3 Expressive. It’s shorter than the baseline nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7qe43-02.png?alt=media)

*Caption / Legend:*
The flexible navigation bar is shorter and can be used in medium windows with horizontal nav items

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: No shadow
- Layout: Container height is taller
- States: The active destination can be indicated with a pill shape in a contrasting color
- Name: Bottom navigation has been renamed **navigation bar**

![M2 nav bar with a drop shadow and no active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ddmjvm-03.png?alt=media)

*Caption / Legend:*
M2: A drop shadow indicates placement on top of content. Filled and regular weight icons indicate active states.

![M3 nav bar with a surface color and active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmae7pvz8-04.png?alt=media)

*Caption / Legend:*
M3: Taller and no drop shadow. Filled icons and an active indicator indicate active state.

## Specs

## Variants

![The recommended flexible navigation bar.](https://lh3.googleusercontent.com/UvjUYsyF9gAgVOmfiC9h3zFaS-jU0wYws-HjqFyeiABhm3ubP8ZtHn__4wPEPmw3eR3D4C4O6sUeHVmdJ_IX9zTrzi1GmuiTUcQlauA2Fs-B=s2048)

*Caption / Legend:*
1. Flexible navigation bar

### Baseline variants

The baseline nav bar is no longer recommended, and should be replaced by the flexible nav bar, which is shorter and supports horizontal navigation items in medium windows. [View baseline nav bar specs](/m3/pages/navigation-bar/specs#46dc2521-acf0-44e3-bbc0-78dc225b9749)

![1 baseline navigation bar.](https://lh3.googleusercontent.com/PmEPtOw84s8SQu9KJJ0EX-gTgEL5PDGneaQfz9OVdFSXWjLd7P41B6qpIiWnAOuSfGl7JnCQOqa3Lfx8hZfXRG7HzJJNam-HCDFV1lfKvLlw=s2048)

*Caption / Legend:*
1. Navigation bar (not recommended)

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Flexible navigation bar | -- | Available |
| Navigation bar | Available | Not recommended. Use **flexible navigation bar**. |

## Configurations

In compact windows, navigation bars use vertical items. In medium windows, navigation bars should use horizontal items.

![Two size configurations for navigation bar and items.](https://lh3.googleusercontent.com/p7YCl5pH99g_eM4-BCFHmEgxIdJxmb5UuE-CUwR8M9OjjPkNJpYAwQPZTAxamQBoiRr25F23T4mxDVNRUG3kESL--vZihbUkQWN04W9DAFiH=s2048)

*Caption / Legend:*
1. Vertical navigation items
2. Horizontal navigation items

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Navigation item layout | Vertical (default) | Available | Available |
| Horizontal | -- | Available |  |

## Tokens & specs

Use the table's menu to switch between token sets for the navigation bar and the nav items. [](/m3/pages/navigation-bar/specs#3425f33a-0b11-492a-ae5a-40d63f939384)[Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: Nav bar - Common

*Common tokens for navigation bars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-bar.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav bar shape |
| `md.comp.nav-bar.item.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item inactive pressed state layer color |
| `md.comp.nav-bar.item.active.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Nav bar item active pressed state layer opacity |
| `md.comp.nav-bar.item.active.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active pressed state layer color |
| `md.comp.nav-bar.item.inactive.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item inactive focused state layer color |
| `md.comp.nav-bar.item.active.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Nav bar item active focused state layer opacity |
| `md.comp.nav-bar.item.active.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active focused state layer color |
| `md.comp.nav-bar.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Nav bar container elevation |
| `md.comp.nav-bar.container.shadow-color` | `md.sys.color.shadow` | COLOR | Nav bar container shadow color |
| `md.comp.nav-bar.container.color` | `md.sys.color.surface-container` | COLOR | Nav bar container color |
| `md.comp.nav-bar.item.active.indicator.color` | `md.sys.color.secondary-container` | COLOR | Nav bar item indicator color |
| `md.comp.nav-bar.item.active.label-text.color` | `md.sys.color.secondary` | COLOR | Nav bar item active label text color |
| `md.comp.nav-bar.item.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Nav bar item inactive label text color |
| `md.comp.nav-bar.item.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active icon color |
| `md.comp.nav-bar.item.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Nav bar item inactive icon color |
| `md.comp.nav-bar.item.active.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active hovered state layer color |
| `md.comp.nav-bar.item.inactive.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item inactive hovered state layer color |
| `md.comp.nav-bar.item.active.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Nav bar item active hovered state layer opacity |
| `md.comp.nav-bar.item.between-space` | `md.sys.measurement.space0` | LENGTH | Nav bar space between items |
| `md.comp.nav-bar.item.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Nav bar item shape |
| `md.comp.nav-bar.item.active-indicator.icon-label-space` | 4dp | LENGTH | Nav bar item space between icon label space |
| `md.comp.nav-bar.container.height` | 64dp | LENGTH | Nav bar height |
| `md.comp.nav-bar.item.icon.size` | 24dp | LENGTH | Nav bar item icon size |

#### Design Tokens: Nav bar - Item - Vertical

*For vertical nav items, where elements are stacked.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-bar.item.vertical.label-text.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | Nav bar item vertical label text |
| `md.comp.nav-bar.item.vertical.active-indicator.height` | 32dp | LENGTH | Nav bar item vertical active indicator height |
| `md.comp.nav-bar.item.vertical.active-indicator.width` | 56dp | LENGTH | Nav bar item vertical active indicator width |
| `md.comp.nav-bar.item.vertical.container.between-space` | `md.sys.measurement.space75` | LENGTH | Nav bar item vertical container between space |
| `md.comp.nav-bar.item.vertical.active-indicator.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Nav bar item vertical active indicator icon label space |

#### Design Tokens: Nav bar - Item - Horizontal

*For horizontal nav items, where elements are side-by-side.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-bar.item.horizontal.label-text.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | Nav bar item horizontal label text text |
| `md.comp.nav-bar.item.horizontal.active-indicator.height` | 40dp | LENGTH | Nav bar item horizontal active indicator height |
| `md.comp.nav-bar.item.horizontal.active-indicator.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav bar item horizontal active indicator leading space |
| `md.comp.nav-bar.item.horizontal.active-indicator.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav bar item horizontal active indicator trailing space |
| `md.comp.nav-bar.item.horizontal.active-indicator.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Nav bar item horizontal active indicator icon label space |


## Anatomy

![Seven elements of the navigation bar.](https://lh3.googleusercontent.com/NkOIeqvJB7WxPg28DI-4uEHBrBfN38qDD2CWuX-NM2tTrxYwRknjdhOMzMCD1D9d65WN-Lzfo1Zg_B3G8Zk7pjT7Os-D2EfYGXQPDxawqpA=s2048)

*Caption / Legend:*
1. Container
2. Icon
3. Label text
4. Active indicator
5. Small badge (optional)
6. Large badge (optional)
7. Large badge label

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Six color roles of the navigation bar.](https://lh3.googleusercontent.com/ec6ZkQGVtf5t0AOua9lhgucAZ31inD_mF4vm24sW2MeH8X2dK3xV1rpfoNuX6hlO5rU7wJVfCH0KMCt8Xqzl0qDIR668oCFEKb97YswmeuuC=s2048)

*Caption / Legend:*
Navigation bar color roles used for light and dark schemes:

1. Surface container
2. On-secondary container
3. Secondary
4. Secondary container
5. On-surface variant
6. On-surface variant

For badge color roles, go to [badge specs](/m3/pages/badges/specs).

## States

States are visual representations used to communicate the status of a component or an interactive element.

![Four states of the navigation bar items.](https://lh3.googleusercontent.com/FTJk0MWbkT2YuqVJl3k8F57gmzTtSUKbQCovcet18WLLqbCMFFYds_DS65Sx8fzuFpEK6G_W5lmDc55s5ZUEpvBZIGM31aOI1psEFpn7GWnk=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered (8% state layer)
3. Focused (10% state layer)
4. Pressed (10% state layer)

## Measurements

The navigation bar stretches the full window width.

![Navigation bar padding and size measurements.](https://lh3.googleusercontent.com/zjuYI8XOBcjHmnNU2V9qHk9gbz3xJW9E2cEVE0Ov9Bh2fz8VI7RoISP5ykh9u5mqCXhF1nYKXT696Hfw-YIUMzX37jseGZdsA2bN_-YfErA=s2048)

*Caption / Legend:*
Navigation bar padding and size measurements

Vertical navigation items dynamically change width to equally fit the container. Horizontal navigation items have a fixed width, so extra space is added to the ends of the navigation bar instead.

![Navigation bar and item widths.](https://lh3.googleusercontent.com/VMRrzRH_T07zMqRPwp1sLZPmkAVJVwQDqqrhuD-synkhADa-mjbbjtbh_tWZ4QZ9ael3lvNq52dhMRNCMOTZRh5aISTWk7bvSEt-vud2RGvW=s2048)

*Caption / Legend:*
Navigation bar width and margins for compact and medium windows.

1. Vertical navigation item
2. Margin from window edge
3. Horizontal navigation item

## Baseline navigation bar

![7 elements of baseline navigation bar.](https://lh3.googleusercontent.com/DBrM1eLC6HN2CNBg9Gr9UjPRuBgV0C7N3JLMzR2Y3nemUs8z0I71LTJM36azNtt45cWQiwISFwjAGc2G8coCUD9vfnIi-30wBlBw7OB1rSk=s2048)

*Caption / Legend:*
1. Container
2. Icon
3. Label text
4. Active indicator
5. Small badge
6. Large badge
7. Large badge label

### Tokens & specs

These tokens are for the baseline navigation bar.

#### Design Tokens: Navigation bar (baseline)

*For baseline navigation bar. For expressive, use `md.comp.nav-bar` and corresponding `.item` token sets instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.navigation-bar.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | Navigation bar focus indicator offset |
| `md.comp.navigation-bar.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Navigation bar focus indicator thickness |
| `md.comp.navigation-bar.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Navigation bar focus indicator color |
| `md.comp.navigation-bar.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Surface tint color |
| `md.comp.navigation-bar.active.label-text.weight` | `md.sys.typescale.label-medium.weight.prominent` | FONT_WEIGHT | Weight (active) |
| `md.comp.navigation-bar.active.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.inactive.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.active.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.active.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.active.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.label-text.tracking` | `md.sys.typescale.label-medium.tracking` | FONT_TRACKING | Tracking |
| `md.comp.navigation-bar.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.navigation-bar.label-text.font` | `md.sys.typescale.label-medium.font` | FONT_NAMES | Font |
| `md.comp.navigation-bar.label-text.weight` | `md.sys.typescale.label-medium.weight` | FONT_WEIGHT | Weight |
| `md.comp.navigation-bar.label-text.size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Size |
| `md.comp.navigation-bar.label-text.line-height` | `md.sys.typescale.label-medium.line-height` | LINE_HEIGHT | Line height |
| `md.comp.navigation-bar.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.inactive.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.inactive.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.large-badge.color` | `md.sys.color.error` | COLOR | Color |
| `md.comp.navigation-bar.large-badge.shape` | - | SHAPE | Shape |
| `md.comp.navigation-bar.large-badge.size` | 16dp | LENGTH | Size |
| `md.comp.navigation-bar.badge.shape` | - | SHAPE | Shape |
| `md.comp.navigation-bar.badge.size` | 6dp | LENGTH | Size |
| `md.comp.navigation-bar.badge.color` | `md.sys.color.error` | COLOR | Color |
| `md.comp.navigation-bar.container.shadow-color` | `md.sys.color.shadow` | COLOR | Navigation bar container shadow color |
| `md.comp.navigation-bar.inactive.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.active.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Color (active) |
| `md.comp.navigation-bar.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Opacity |
| `md.comp.navigation-bar.inactive.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.active.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.inactive.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.active.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Color (active) |
| `md.comp.navigation-bar.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Opacity |
| `md.comp.navigation-bar.inactive.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.active.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.inactive.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.active.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Color (active) |
| `md.comp.navigation-bar.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Opacity |
| `md.comp.navigation-bar.inactive.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Color (inactive) |
| `md.comp.navigation-bar.active.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Color (active) |
| `md.comp.navigation-bar.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Shape |
| `md.comp.navigation-bar.active-indicator.width` | 64dp | LENGTH | Width |
| `md.comp.navigation-bar.active-indicator.height` | 32dp | LENGTH | Height |
| `md.comp.navigation-bar.active-indicator.color` | `md.sys.color.secondary-container` | COLOR | Color |
| `md.comp.navigation-bar.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Size |
| `md.comp.navigation-bar.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Size |
| `md.comp.navigation-bar.icon.size` | 24dp | LENGTH | Size |
| `md.comp.navigation-bar.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Elevation |
| `md.comp.navigation-bar.container.height` | 80dp | LENGTH | Height |
| `md.comp.navigation-bar.container.shape` | `md.sys.shape.corner.none` | SHAPE | Shape |
| `md.comp.navigation-bar.container.color` | `md.sys.color.surface-container` | COLOR | Color |

#### Design Tokens: Nav bar - Common

*Common tokens for navigation bars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-bar.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav bar shape |
| `md.comp.nav-bar.item.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item inactive pressed state layer color |
| `md.comp.nav-bar.item.active.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Nav bar item active pressed state layer opacity |
| `md.comp.nav-bar.item.active.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active pressed state layer color |
| `md.comp.nav-bar.item.inactive.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item inactive focused state layer color |
| `md.comp.nav-bar.item.active.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Nav bar item active focused state layer opacity |
| `md.comp.nav-bar.item.active.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active focused state layer color |
| `md.comp.nav-bar.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Nav bar container elevation |
| `md.comp.nav-bar.container.shadow-color` | `md.sys.color.shadow` | COLOR | Nav bar container shadow color |
| `md.comp.nav-bar.container.color` | `md.sys.color.surface-container` | COLOR | Nav bar container color |
| `md.comp.nav-bar.item.active.indicator.color` | `md.sys.color.secondary-container` | COLOR | Nav bar item indicator color |
| `md.comp.nav-bar.item.active.label-text.color` | `md.sys.color.secondary` | COLOR | Nav bar item active label text color |
| `md.comp.nav-bar.item.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Nav bar item inactive label text color |
| `md.comp.nav-bar.item.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active icon color |
| `md.comp.nav-bar.item.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Nav bar item inactive icon color |
| `md.comp.nav-bar.item.active.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item active hovered state layer color |
| `md.comp.nav-bar.item.inactive.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav bar item inactive hovered state layer color |
| `md.comp.nav-bar.item.active.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Nav bar item active hovered state layer opacity |
| `md.comp.nav-bar.item.between-space` | `md.sys.measurement.space0` | LENGTH | Nav bar space between items |
| `md.comp.nav-bar.item.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Nav bar item shape |
| `md.comp.nav-bar.item.active-indicator.icon-label-space` | 4dp | LENGTH | Nav bar item space between icon label space |
| `md.comp.nav-bar.container.height` | 64dp | LENGTH | Nav bar height |
| `md.comp.nav-bar.item.icon.size` | 24dp | LENGTH | Nav bar item icon size |

#### Design Tokens: Nav bar - Item - Vertical

*For vertical nav items, where elements are stacked.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-bar.item.vertical.label-text.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | Nav bar item vertical label text |
| `md.comp.nav-bar.item.vertical.active-indicator.height` | 32dp | LENGTH | Nav bar item vertical active indicator height |
| `md.comp.nav-bar.item.vertical.active-indicator.width` | 56dp | LENGTH | Nav bar item vertical active indicator width |
| `md.comp.nav-bar.item.vertical.container.between-space` | `md.sys.measurement.space75` | LENGTH | Nav bar item vertical container between space |
| `md.comp.nav-bar.item.vertical.active-indicator.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Nav bar item vertical active indicator icon label space |

#### Design Tokens: Nav bar - Item - Horizontal

*For horizontal nav items, where elements are side-by-side.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-bar.item.horizontal.label-text.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | Nav bar item horizontal label text text |
| `md.comp.nav-bar.item.horizontal.active-indicator.height` | 40dp | LENGTH | Nav bar item horizontal active indicator height |
| `md.comp.nav-bar.item.horizontal.active-indicator.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav bar item horizontal active indicator leading space |
| `md.comp.nav-bar.item.horizontal.active-indicator.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav bar item horizontal active indicator trailing space |
| `md.comp.nav-bar.item.horizontal.active-indicator.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Nav bar item horizontal active indicator icon label space |


### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![6 color roles of baseline navigation bar.](https://lh3.googleusercontent.com/iFtbyGfchUzulQmxsrcS-I7WwK9b3AywZsdXqs8Z1jIytViyh4uD1UC9qpNKi44ejAswfg-jDNjzVCkq8diuRU4130swhkqbtGDL508M2zU=s2048)

*Caption / Legend:*
Navigation bar color roles used for light and dark schemes:

1. Surface
2. On secondary container
3. On surface
4. Secondary container
5. On surface variant
6. On surface variant

For badge color roles, go to [badge specs](/m3/pages/badges/specs).

### States

States are visual representations used to communicate the status of a component or an interactive element.

![4 states of baseline navigation bar.](https://lh3.googleusercontent.com/Tz8X4rigXztIPIhpYB584wZpWuKYAEz4C4mIBNVQksaN4sRvl_eXy8dk9cwcWhM3iOfOJVLvlckzcDdPOScuGYJVhjvzuSAMRwpvZk2mdNOpTw=s2048)

*Caption / Legend:*
Navigation bar states:

1. Enabled
2. Hovered
3. Focused
4. Pressed

## Measurements

![Baseline navigation bar padding and size measurements.](https://lh3.googleusercontent.com/yZAR82Wh75nazTTTOrRenBXPtuOb1BG45198tsOGQMOTUk0QS_Ety_wa_9wsQRVXkBVii9TYrwCmSAiwxxlvHY95EetWd78rd4DPR-qTy3X-4Q=s2048)

*Caption / Legend:*
Navigation bar padding and size measurements

![Baseline navigation bar target size and margins.](https://lh3.googleusercontent.com/Cx_HLEfaqKx72AHNtDdP7raUEXmHCDKOWC40CCuYLkfYn6d93KRaJHBWdxVHOkoU22j4UAJJExrl3uQYnpFQ_wu895nHHKn8qNUXZVMtCwqT=s2048)

*Caption / Legend:*
Navigation bar target size and margins

## Configurations

![3 configurations of the baseline navigation bar.](https://lh3.googleusercontent.com/ALYNjmr0KKRFb33P4hKrUxeXha7V6L7eyz_izrbW4nGMgFfZtYjbLa7cHF3mxpWOr4TiAswFklndquusmv_dRJsruNjzu4ZSh7WgBrOCWDQ=s2048)

*Caption / Legend:*
1. 3 destinations
2. 4 destinations
3. 5 destinations

## Guidelines

![A nav bar with vertical items in a compact window, and horizontal items in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqgvk7-01.png?alt=media)

*Caption / Legend:*
Navigation bars adapt to different breakpoints

## Usage

Navigation bars provide access to three to five destinations. The nav bar is positioned at the bottom of windows for convenient access.

Each destination is represented by an icon and label text. One navigation destination is always active.

When a navigation bar icon is tapped or focused, people are taken to the navigation destination associated with that icon.

![A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library, It’s in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalnqdza-02.png?alt=media)

*Caption / Legend:*
Navigation bars can have three to five destinations

Navigation bars should be used for:

- Three to five main pages in the product
- Mobile or tablet only

Navigation bars shouldn’t be used for accessing single tasks, such as viewing one email.

![A nav bar for a music app with 4 destinations: Home, Browse, Radio, Library. It’s in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqhln7-03.png?alt=media)

*Caption / Legend:*
On mobile or tablet, navigation bars should be used for top-level destinations

The navigation items can be **vertical** or **horizontal**.

- Use vertical items in compact windows, like mobile
- Use horizontal items in medium windows, like tablets

![A nav bar with vertical items in a compact window, and horizontal items in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqhs7x-04.png?alt=media)

*Caption / Legend:*
Vertical navigation items work best in compact windows. Horizontal items work best in medium windows.

For products with more than five navigation items, don’t use a navigation bar; the elements may collide and there likely won’t be enough space for translated text.

Instead, consider using tabs to organize similar content within a page, or hide the navigation behind a menu icon using a modal expanded navigation rail.

![A nav bar with 7 items in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqi614-05-don't.png?alt=media)

*Caption / Legend:*
Avoid putting more than five navigation items in a navigation bar

![A nav bar with no labels for each page item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqimzs-06-dont.png?alt=media)

*Caption / Legend:*
Don’t remove the labels from navigation items

![A nav bar with 2 page items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqir51-07-dont.png?alt=media)

*Caption / Legend:*
Don’t use a navigation bar for fewer than three destinations. Instead, use tabs.

![A nav bar is on the Library page of a music app. Tabs at the top of the page have secondary navigation for playlists, artists, albums, and songs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp4omq-08.png?alt=media)

*Caption / Legend:*
Use navigation for distinct pages and tabs for related content within a page

![Nav bar using horizontal items in a compact window. The items are too wide and flow off screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp4ti0-09.png?alt=media)

*Caption / Legend:*
Navigation bar destinations have fixed positions. Don’t scroll them or modify their positions.

## Anatomy

![6 elements of the nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t918of-10.png?alt=media)

*Caption / Legend:*
1. Container
2. Icon
3. Label text
4. Active indicator
5. Large badge (optional)
6. Small badge (optional)

### Container

The container should always be placed at the bottom of the product and span the full length of the window. Navigation items are centered within the container.

The container has a color fill to provide separation from other content.

![The nav bar at the bottom of a medium window has a color fill to differentiate from the background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t91cku-11.png?alt=media)

*Caption / Legend:*
The navigation bar container holds all elements

### Navigation items

Navigation items hold all elements for each destination: the icon, label text, and active indicator. They can be **vertical**, with the text below the icon and indicator, or **horizontal**, with the icon and text beside each other inside the indicator. 

Vertical items are best in compact windows, and horizontal items are best in medium windows.

Horizontal items are centered in the nav bar with outer margins.

![The nav bar in a medium window with padding on each side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3t91mur-12.png?alt=media)

*Caption / Legend:*
The navigation bar is divided into equal-width segments with padding from the window edge

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse [popular icon](https://fonts.google.com/icons).

Use a filled icon for the active destination and outlined icons for inactive destinations. If an icon doesn’t have a filled version, apply **semibold** weight to the icon instead.

![An active nav item with a filled icon compared to inactive items with outlined icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fp9y48-13.png?alt=media)

*Caption / Legend:*
Use filled icons when the navigation item is active

![An active nav item with a semibold icon compared to inactive items with outlined icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpa2te-14.png?alt=media)

*Caption / Legend:*
If a filled version of an icon is unavailable, the icon’s weight must increase

Active and inactive icons must have a minimum 3:1 contrast ratio with the container.

![4 nav items that are each different colors with low contrast with the background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqnpkt-15-dont.png?alt=media)

*Caption / Legend:*
Don’t use multiple or low-contrast colors in a navigation bar, as they make it harder for people to distinguish the active item and navigate to other destinations

### Active indicator

The active indicator shows which page from the nav bar is currently being displayed.

![The current page in a nav bar has an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqo0n5-16-do.png?alt=media)

*Caption / Legend:*
Use the active indicator only for the active destination

![All items in a nav bar have active indicators.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqo7ag-17-dont.png?alt=media)

*Caption / Legend:*
Don’t use the active indicator for more than one destination at a time

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for people to understand an icon’s meaning.

All navigation items require a label text. It should be 1-2 words.

![A nav bar on a music app with clearly labelled destinations: home, browse, radio, library.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpamvs-18.png?alt=media)

*Caption / Legend:*
Label text must be brief and clear

![A nav bar with 1-word labels for each page.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqoweq-19-do.png?alt=media)

*Caption / Legend:*
Use brief text labels to identify the purpose of a destination

![A nav bar with “Music catalog” for a label. The label is truncated.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqp27c-20-dont.png?alt=media)

*Caption / Legend:*
Don’t wrap or truncate text as it can make the label hard to understand

![A nav bar with “Music catalog” for a label. The label is a smaller size to make the text fit.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqpu1t-21-dont.png?alt=media)

*Caption / Legend:*
Don’t shrink longer text to fit on a single line

### Badges (optional)

Navigation bars can display badges in the upper right corners of the destination icon.

Badges can contain dynamic information, such as the number of new messages.

![A nav bar with a destination called “Go” with a small badge and one called “Saved” with a large badge saying “3.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqg5m-22.png?alt=media)

*Caption / Legend:*
Use a small badge to indicate an update, and a large badge to show the amount of updates

![Horizontal nav items with the badges in the same place of the icon as vertical nav items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqlk1-23.png?alt=media)

*Caption / Legend:*
Badges overlap the icon in both vertical and horizontal navigation items

## Placement

The floating action button (FAB) is placed above the navigation bar. Nav bars are always placed at the bottom of the window.

![The FAB should be right-aligned above the navigation bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqsyh-24-do.png?alt=media)

*Caption / Legend:*
The FAB should be right-aligned above the navigation bar

![A mobile page with a FAB overlapping a nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqqy0m-25-dont.png?alt=media)

*Caption / Legend:*
Don’t cover the navigation bar with a FAB

Navigation bars can be temporarily covered by dialogs, bottom sheets, navigation drawers, the on-screen keyboard, or other elements needed to complete a flow. They should not be permanently obstructed on any screen.

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. More on [adaptive design](/m3/pages/layout-overview/adaptive-design)

### Resizing

Only use navigation bars for compact and medium breakpoints.

**Compact**: For narrow windows, use a navigation bar or modal navigation rail.

**Medium**: Use a navigation bar or navigation rail. Decide based on whether horizontal or vertical space is more important.

**Expanded and extra-large**: Use a navigation rail instead. Decide based on available window space and the number of navigation destinations.

The navigation bar container spans 100% of the window width.

![Navigation bar spanning the full width of a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo8a44-28.png?alt=media)

*Caption / Legend:*
Navigation bars use 100% of the screen width

The navigation bar is used on smaller devices. It’s not intended for desktop.

![Navigation bar spanning the full width of an expanded window size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalqsfoq-29.png?alt=media)

*Caption / Legend:*
Don’t use navigation bars for desktop layouts. Instead, use a navigation rail or tabs.

### Presentation

In medium breakpoints, use horizontal nav items to better use available space.

Horizontal nav items should remain centered with the same padding at each breakpoint.

![Horizontal nav items have the same width in medium and expanded windows. Only the padding changes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fpt5k2-30.png?alt=media)

*Caption / Legend:*
A navigation bar in horizontal orientation keeps the same spacing between destinations

## Behavior

### Navigation

When selecting a navigation bar item not currently selected, the product navigates to that destination’s screen using a [top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. It can either remember where you left off, or reset to the default view.

1. **Preserve state**: If someone has interacted with this destination, it returns to their scroll position, current tab, and in-line search status.
2. **Reset state**: Any prior user interactions are reset, including scroll position, tab selection, and in-line search.

Choose the behavior that best suits the product and user needs. For example, an app that requires frequent switching between sections should preserve each section’s state.

Re-selecting the currently active destination should reset the scroll position to the top of the page.

**Don't swipe between destinations**
Swiping across the screen does not navigate between destinations, and is not supported by the navigation bar. Swipe behavior should be reserved for related items, such as cards in a carousel, or actions such as archiving a list item.

### Scrolling

Upon scroll, the navigation bar can appear or disappear.

Don’t hide the navigation bar on scroll when a [screen reader](https://m3.material.io/foundations/overview/assistive-technology#ec6f3e84-a51c-4dc0-a353-6844f5bde698) is active.

### Selection

The icon becomes filled and the active indicator expands from the center of the icon when switching between destinations.

The active indicator animation should only apply on one axis to better represent a flat, shared plane.

When a destination is tapped, the destination screens use a [top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

## XR

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific navigation bar with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Anatomy

![Diagram of navigation bar orbiter identifying 7 internal elements of the component.](https://lh3.googleusercontent.com/NW9kaqkcTarsiort-BDPnf0QKIkvHB7lo6Mbbh8SZUvS-c-EB3LLLFQrfeJMXk7uRlDFbNtkCWBCSRYRe00HwvDagwyWESwwQbf9Vpkiz-nKqw=s2048)

*Caption / Legend:*
1. Container
2. Icon
3. Active indicator
4. Small badge (optional)
5. Large badge (optional)
6. Large badge label (optional)
7. Label text

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav bars can use any of these color options:

![4 versions of elevation color strategy.](https://lh3.googleusercontent.com/EYtK3dWA1t7RZze6HZnobQWRtKQiC_cuLBnJ_ceCPtbTbbqbc0E1LXNz2qCjRKTlibK7HZk1ks2RuQC1UWfAoSsRwrvlbySXSPEUSz8or2QO=s2048)

*Caption / Legend:*
1. Surface container
2. Surface container high
3. Surface container highest
4. Tertiary container

## Measurements

![Measurements and padding for navigation bar orbiter.](https://lh3.googleusercontent.com/sHMs2ZBzr0w6PdPaUdjH4C-qlDH0Otnv-tBwkRLU3cO6-8MyE9Kkrjupxd5Y9oLtniqIjoeTHjjkN4aojalS0--hvHAYjrufQQMw7tiIPfGOjg=s2048)

*Caption / Legend:*
Navigation bar orbiter padding and measurements

## Usage

In full space, a navigation bar can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation bar on the same plane as the body content to mimic a 2D experience.

## Behavior

### Global context

When placed in global context, the navigation bar orbiter is centered at the bottom of the app it controls. It stays anchored to the app during layout or content changes. This ensures navigation elements are easy to find and use.

### Local context

When placed in local context, the navigation bar orbiter is centered at the bottom of the spatial panel it controls. It repositions in response to layout or content changes.

## Placement

### Navigation context

The position of the navigation bar orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation bar orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation bar orbiter should overlap spatial panels by 12dp and no more than half their height.

### Horizontal alignment

The navigation bar orbiter placement shouldn't exceed the width of adjacent spatial panels.

### Spatial panel alignment

A navigation bar orbiter should always be placed at the bottom of a spatial panel and within the immediate field of view (FOV). Follow common usability practices to make the experience easy to use and consistent across platforms.

Avoid placing the navigation bar orbiter at the top of a spatial panel, as this area is typically reserved for app bar orbiters or other critical UI elements.

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR navigation bars should follow applicable Material [nav bar accessibility standards](/m3/pages/navigation-bar/accessibility).

## Accessibility

## Use cases

People should be able to do the following using the assistive technology:

- Move between navigation destinations
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

## Interaction & style

**Touch**

- When a navigation item is tapped, the active indicator appears in place, providing feedback that it’s selected
- A touch ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color

**Cursor**

- When hovered, the active indicator appears in a reduced state providing a visual cue that the destination is interactive
- When clicked (in both active and inactive states), a ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color, becoming darker

### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation bar should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

![Nav bar with text scaled to 1.5x size. Some labels are on two lines, others are on one line.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kua3ge-03.png?alt=media)

*Caption / Legend:*
Text scaled to 1.5 size

![Nav bar with text scaled to 2x size. Some labels wrap to two lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kuaeol-04.png?alt=media)

*Caption / Legend:*
Text scaled to 2x size

## Initial focus

Initial focus lands directly on the first navigation item, since that is the first interactive element of the component.

![Focus order and keyboard navigation of a nav bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7kb3-03.png?alt=media)

*Caption / Legend:*
Focus lands on first navigation item

![Activating a nav item with space on a keyboard.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7nd7-04.png?alt=media)

*Caption / Legend:*
The navigation item is selected with Space/Enter

## Visual indicators

Use a filled icon with a bold label for selected destinations. For unselected destinations use an outlined icon with a medium label.

If an icon doesn’t have a filled style, use a thicker or heavier version of the icon instead.

![A nav bar with a filled icon for the selected nav item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7qqu-05.png?alt=media)

*Caption / Legend:*
Use a filled icon for the selected navigation destination to differentiate from the other destinations

![A nav bar with an outlined icon for the selected nav item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7ugl-06.png?alt=media)

*Caption / Legend:*
Don’t use outlined icons on selected nav items

![2 nav items, one selected, one unselected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr7yfn-07.png?alt=media)

*Caption / Legend:*
When selected, the icon fills, darkens, and is backed by an active indicator shape

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Move between navigation items |
| Space / Enter | Selects the focused navigation item |

## Labeling elements

The accessibility label for a navigation item is typically the same as the destination name.

![Accessibility label and role defined for a Home icon on a navigation bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr861i-08.png?alt=media)

*Caption / Legend:*
A navigation bar’s accessibility label can incorporate its adjacent UI text

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation destination visibly labeled **Library **would benefit from additional information in its accessibility label to clarify the destination’s intent.

Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

![Accessibility labels of a navigation bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fr8a8y-09.png?alt=media)

*Caption / Legend:*
While the visible label text reads **Library**, the accessibility label for this destination clarifies its function: **Music library**
