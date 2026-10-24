# FABs

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/floating-action-button](https://m3.material.io/components/floating-action-button)
> Last Updated: 2026-07-27T13:59:42.096Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use a FAB for the most common or important action on a screen
- Make sure the icon in a FAB is clear and understandable
- FABs persist on the screen when content is scrolling
- Three variants: FAB, medium FAB, large FAB

![The 3 sizes of floating action buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkap9gay-01.png?alt=media)

*Caption / Legend:*
1. FAB
2. Medium FAB
3. Large FAB

## Availability & resources

## M3 Expressive update

**May 2025**

The FAB has new sizes to match the extended FAB and more color options. The small FAB is no longer recommended. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Added **medium** FAB size
- **Small** FAB size is no longer recommended
- FAB and large FAB sizes are unchanged
- FAB variants are based on size, not color

Color:

- Added tone color styles:

- Primary
- Secondary
- Tertiary
- Renamed existing tonal color styles to match their token names:

- **Primary** to **Primary container**
- **Secondary** to **Secondary container**
- **Tertiary** to **Tertiary container**
- The values haven't changed
- Surface color FABs  are no longer recommended

![4 FABs showing the colors available after the expressive update.](https://lh3.googleusercontent.com/Kyq0kFrZiQkyIGco9EHQ5yzaPCDzbUydpq5bcHqcin1vLOhBpnqAeAW6D86dFvHrexhyJvo5jK0Brc4PwckWVOtXFqRcMhUA-h05047nERg=s1352)

*Caption / Legend:*
FABs have updated colors and sizes

## Differences from M2

![M2 circular FAB with a plus icon.](https://lh3.googleusercontent.com/biMTAbEZ8apVSF9QNSr9S8V1F1DCCRCRckdBmlU0g9XLCrNJMwkw_cbBk_gvb6b0JbaulKKD9lAeDTQp4h3sZK5yKXP0CrSWlefMrFoTxK3T=s1004)

*Caption / Legend:*
M2: FABs are circles and always have a drop shadow

![M3 rounded corner square FAB with an artist’s palette icon.](https://lh3.googleusercontent.com/eSZyi5bl8kk_aCpEVo6DV_KiYuZ3i_rEVB9y7rWbFd5SSILeUBlvQ3n2ztYzvPSTe1fyMK0LKDD_axvANAOOt6VLnf4GoSbWWSKy3j9bcRI=s1004)

*Caption / Legend:*
M3: FABs have a boxier shape, can use dynamic color, and include a new large FAB variation

## Specs

## Variants

![An icon on the container of a FAB, medium FAB, and large FAB.](https://lh3.googleusercontent.com/CdTXXgPJ5XavoUEXtTKTczb0ENYt1VwreirVIJMyIYnwI6gFCYn1S4LCQyptGlF6EzKq9xL2hzPOQKv2RdKrhf6kTIj5vkcNY2u-VuQRqghs=s2048)

*Caption / Legend:*
1. FAB
2. Medium FAB
3. Large FAB

### Baseline variants

The small FAB is still available, but no longer recommended. [Jump to baseline specs](/m3/pages/fab/specs#cd336045-e97d-4a6d-ac23-f778fa695e3c)

![An icon on the container of a small FAB.](https://lh3.googleusercontent.com/LVMfvx2rKsoVM1_1Pq9CQ8o0dDyfSQtfCxYgle_57GhDKX0oDkNepZr0yvyqmoI6mL-0QfWWfFkmVJV5RwLbJVGJ4YGXZBTcT9JW2-IPRQNpVg=s2048)

*Caption / Legend:*
1. Small FAB

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| FAB | Available | Available |
| Medium FAB | -- | Available |
| Large FAB | Available | Available |
| Small FAB | Available | Not recommended. Use a larger size. |

## Configurations

In the expressive update, the **primary**, **secondary**, and **tertiary** set colors were renamed to **primary container**, **secondary container**, and **tertiary container **to match the actual color roles used. New primary, secondary, and tertiary color styles were created to match the corresponding color roles. [View details in the color styles section](/m3/pages/fab/specs#67e71ec7-b520-405a-aa06-2decfa0b92a3)

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Primary container, secondary container, tertiary container | Available as primary, secondary, tertiary | Available |
| Primary. secondary, tertiary | -- | Available |  |

## Tokens & specs

Use the table's menu to select a token set. FAB tokens are organized by size and color. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: FAB - Size - Regular

*For the default, regular FAB size.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.container.height` | 56dp | LENGTH | FAB container height |
| `md.comp.fab.container.width` | 56dp | LENGTH | FAB container width |
| `md.comp.fab.icon.size` | 24dp | LENGTH | FAB icon size |
| `md.comp.fab.container.shape` | `md.sys.shape.corner.large` | SHAPE | FAB container shape |

#### Design Tokens: FAB - Size - Medium

*For medium FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.medium.container.height` | 80dp | LENGTH | FAB medium container height |
| `md.comp.fab.medium.container.width` | 80dp | LENGTH | FAB medium container width |
| `md.comp.fab.medium.container.shape` | `md.sys.shape.corner.large-increased` | SHAPE | FAB medium container shape |
| `md.comp.fab.medium.icon.size` | 28dp | LENGTH | FAB medium icon size |

#### Design Tokens: FAB - Size - Large

*For large FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.large.container.height` | 96dp | LENGTH | FAB large container height |
| `md.comp.fab.large.container.width` | 96dp | LENGTH | FAB large container width |
| `md.comp.fab.large.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | FAB large container shape |
| `md.comp.fab.large.icon.size` | 36dp | LENGTH | FAB large icon size |

#### Design Tokens: FAB - Color - Tonal primary

*For tonal primary container FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.primary-container.container.color` | `md.sys.color.primary-container` | COLOR | FAB tonal primary container color |
| `md.comp.fab.primary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB tonal primary container shadow color |
| `md.comp.fab.primary-container.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary icon color |
| `md.comp.fab.primary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal primary container elevation |
| `md.comp.fab.primary-container.hovered.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary hovered state layer color |
| `md.comp.fab.primary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB tonal primary hovered state layer opacity |
| `md.comp.fab.primary-container.hovered.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary hovered icon color |
| `md.comp.fab.primary-container.focused.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary focused state layer color |
| `md.comp.fab.primary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB tonal primary focused state layer opacity |
| `md.comp.fab.primary-container.focused.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary focused icon color |
| `md.comp.fab.primary-container.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary pressed state layer color |
| `md.comp.fab.primary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB tonal primary pressed state layer opacity |
| `md.comp.fab.primary-container.pressed.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB tonal primary pressed icon color |
| `md.comp.fab.primary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB tonal primary hovered container elevation |
| `md.comp.fab.primary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal primary focused container elevation |
| `md.comp.fab.primary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal primary pressed container elevation |

#### Design Tokens: FAB - Color - Tonal secondary

*For tonal secondary container FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.secondary-container.container.color` | `md.sys.color.secondary-container` | COLOR | FAB tonal secondary container color |
| `md.comp.fab.secondary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB tonal secondary container shadow color |
| `md.comp.fab.secondary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal secondary container elevation |
| `md.comp.fab.secondary-container.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary icon color |
| `md.comp.fab.secondary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB tonal secondary hovered container elevation |
| `md.comp.fab.secondary-container.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary hovered state layer color |
| `md.comp.fab.secondary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB tonal secondary hovered state layer opacity |
| `md.comp.fab.secondary-container.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary hovered icon color |
| `md.comp.fab.secondary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal secondary focused container elevation |
| `md.comp.fab.secondary-container.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary focused state layer color |
| `md.comp.fab.secondary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB tonal secondary focused state layer opacity |
| `md.comp.fab.secondary-container.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary focused icon color |
| `md.comp.fab.secondary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal secondary pressed container elevation |
| `md.comp.fab.secondary-container.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary pressed state layer color |
| `md.comp.fab.secondary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB tonal secondary pressed state layer opacity |
| `md.comp.fab.secondary-container.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB tonal secondary pressed icon color |

#### Design Tokens: FAB - Color - Tonal tertiary

*For tonal tertiary container FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.tertiary-container.container.color` | `md.sys.color.tertiary-container` | COLOR | FAB tonal tertiary container color |
| `md.comp.fab.tertiary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB tonal tertiary container shadow color |
| `md.comp.fab.tertiary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal tertiary container elevation |
| `md.comp.fab.tertiary-container.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary icon color |
| `md.comp.fab.tertiary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB tonal tertiary hovered container elevation |
| `md.comp.fab.tertiary-container.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary hovered state layer color |
| `md.comp.fab.tertiary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB tonal tertiary hovered state layer opacity |
| `md.comp.fab.tertiary-container.hovered.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary hovered icon color |
| `md.comp.fab.tertiary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal tertiary focused container elevation |
| `md.comp.fab.tertiary-container.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary focused state layer color |
| `md.comp.fab.tertiary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB tonal tertiary focused state layer opacity |
| `md.comp.fab.tertiary-container.focused.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary focused icon color |
| `md.comp.fab.tertiary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tonal tertiary pressed container elevation |
| `md.comp.fab.tertiary-container.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary pressed state layer color |
| `md.comp.fab.tertiary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB tonal tertiary pressed state layer opacity |
| `md.comp.fab.tertiary-container.pressed.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB tonal tertiary pressed icon color |

#### Design Tokens: FAB - Color - Primary

*For primary color FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.primary.container.color` | `md.sys.color.primary` | COLOR | FAB primary container color |
| `md.comp.fab.primary.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB primary container shadow color |
| `md.comp.fab.primary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB primary container elevation |
| `md.comp.fab.primary.icon.color` | `md.sys.color.on-primary` | COLOR | FAB primary icon color |
| `md.comp.fab.primary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB primary pressed container elevation |
| `md.comp.fab.primary.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | FAB primary pressed state layer color |
| `md.comp.fab.primary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB primary pressed state layer opacity |
| `md.comp.fab.primary.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | FAB primary pressed icon color |
| `md.comp.fab.primary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB primary hovered container elevation |
| `md.comp.fab.primary.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | FAB primary hovered state layer color |
| `md.comp.fab.primary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB primary hovered state layer opacity |
| `md.comp.fab.primary.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | FAB primary hovered icon color |
| `md.comp.fab.primary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB primary focused container elevation |
| `md.comp.fab.primary.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | FAB primary focused state layer color |
| `md.comp.fab.primary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB primary focused state layer opacity |
| `md.comp.fab.primary.focused.icon.color` | `md.sys.color.on-primary` | COLOR | FAB primary focused icon color |
| `md.comp.fab.primary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (primary) lowered pressed container elevation |
| `md.comp.fab.primary.container.shape` | `md.sys.shape.corner.large` | SHAPE | FAB (primary) container shape |
| `md.comp.fab.primary.container.width` | 56dp | LENGTH | FAB (primary) container width |
| `md.comp.fab.primary.container.height` | 56dp | LENGTH | FAB (primary) container height |
| `md.comp.fab.primary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (primary) lowered container elevation |
| `md.comp.fab.primary.icon.size` | 24dp | LENGTH | FAB (primary) icon size |
| `md.comp.fab.primary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB (primary) hover container elevation |
| `md.comp.fab.primary.hover.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB (primary) hover state layer color |
| `md.comp.fab.primary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB (primary) hover state layer opacity |
| `md.comp.fab.primary.hover.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB (primary) hover icon color |
| `md.comp.fab.primary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | FAB (primary) lowered hover container elevation |
| `md.comp.fab.primary.focus.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB (primary) focus state layer color |
| `md.comp.fab.primary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB (primary) focus state layer opacity |
| `md.comp.fab.primary.focus.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB (primary) focus icon color |
| `md.comp.fab.primary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB (primary) focus container elevation |
| `md.comp.fab.primary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (primary) lowered focus container elevation |
| `md.comp.fab.primary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | FAB (primary) focus indicator color |
| `md.comp.fab.primary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | FAB (primary) focus indicator thickness |
| `md.comp.fab.primary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | FAB (primary) focus indicator offset |

#### Design Tokens: FAB - Color - Secondary

*For secondary color FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.secondary.pressed.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary pressed icon color |
| `md.comp.fab.secondary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB secondary pressed state layer opacity |
| `md.comp.fab.secondary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB secondary pressed container elevation |
| `md.comp.fab.secondary.focused.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary focused icon color |
| `md.comp.fab.secondary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB secondary focused state layer opacity |
| `md.comp.fab.secondary.focused.state-layer.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary focused state layer color |
| `md.comp.fab.secondary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB secondary focused container elevation |
| `md.comp.fab.secondary.hovered.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary hovered icon color |
| `md.comp.fab.secondary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB secondary hovered state layer opacity |
| `md.comp.fab.secondary.hovered.state-layer.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary hovered state layer color |
| `md.comp.fab.secondary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB secondary hovered container elevation |
| `md.comp.fab.secondary.container.color` | `md.sys.color.secondary` | COLOR | FAB secondary container color |
| `md.comp.fab.secondary.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB secondary container shadow color |
| `md.comp.fab.secondary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB secondary container elevation |
| `md.comp.fab.secondary.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary icon color |
| `md.comp.fab.secondary.pressed.state-layer.color` | `md.sys.color.on-secondary` | COLOR | FAB secondary pressed state layer color |
| `md.comp.fab.secondary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (secondary) lowered pressed container elevation |
| `md.comp.fab.secondary.container.shape` | `md.sys.shape.corner.large` | SHAPE | FAB (secondary) container shape |
| `md.comp.fab.secondary.container.width` | 56dp | LENGTH | FAB (secondary) container width |
| `md.comp.fab.secondary.container.height` | 56dp | LENGTH | FAB (secondary) container height |
| `md.comp.fab.secondary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (secondary) lowered container elevation |
| `md.comp.fab.secondary.icon.size` | 24dp | LENGTH | FAB (secondary) icon size |
| `md.comp.fab.secondary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB (secondary) hover container elevation |
| `md.comp.fab.secondary.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB (secondary) hover state layer color |
| `md.comp.fab.secondary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB (secondary) hover state layer opacity |
| `md.comp.fab.secondary.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB (secondary) hover icon color |
| `md.comp.fab.secondary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | FAB (secondary) lowered hover container elevation |
| `md.comp.fab.secondary.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB (secondary) focus state layer color |
| `md.comp.fab.secondary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB (secondary) focus state layer opacity |
| `md.comp.fab.secondary.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB (secondary) focus icon color |
| `md.comp.fab.secondary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB (secondary) focus container elevation |
| `md.comp.fab.secondary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (secondary) lowered focus container elevation |
| `md.comp.fab.secondary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | FAB (secondary) focus indicator color |
| `md.comp.fab.secondary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | FAB (secondary) focus indicator thickness |
| `md.comp.fab.secondary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | FAB (secondary) focus indicator offset |

#### Design Tokens: FAB - Color - Tertiary

*For the tertiary style fab.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.tertiary.hovered.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary hovered state layer color |
| `md.comp.fab.tertiary.container.color` | `md.sys.color.tertiary` | COLOR | FAB tertiary container color |
| `md.comp.fab.tertiary.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB tertiary container shadow color |
| `md.comp.fab.tertiary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tertiary container elevation |
| `md.comp.fab.tertiary.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary icon color |
| `md.comp.fab.tertiary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tertiary pressed container elevation |
| `md.comp.fab.tertiary.pressed.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary pressed state layer color |
| `md.comp.fab.tertiary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB tertiary pressed state layer opacity |
| `md.comp.fab.tertiary.pressed.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary pressed icon color |
| `md.comp.fab.tertiary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB tertiary hovered container elevation |
| `md.comp.fab.tertiary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB tertiary hovered state layer opacity |
| `md.comp.fab.tertiary.hovered.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary hovered icon color |
| `md.comp.fab.tertiary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB tertiary focused container elevation |
| `md.comp.fab.tertiary.focused.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary focused state layer color |
| `md.comp.fab.tertiary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB tertiary focused state layer opacity |
| `md.comp.fab.tertiary.focused.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB tertiary focused icon color |
| `md.comp.fab.tertiary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (tertiary) lowered pressed container elevation |
| `md.comp.fab.tertiary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (tertiary) lowered container elevation |
| `md.comp.fab.tertiary.container.height` | 56dp | LENGTH | FAB (tertiary) container height |
| `md.comp.fab.tertiary.container.shape` | `md.sys.shape.corner.large` | SHAPE | FAB (tertiary) container shape |
| `md.comp.fab.tertiary.container.width` | 56dp | LENGTH | FAB (tertiary) container width |
| `md.comp.fab.tertiary.icon.size` | 24dp | LENGTH | FAB (tertiary) icon size |
| `md.comp.fab.tertiary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB (tertiary) hover container elevation |
| `md.comp.fab.tertiary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | FAB (tertiary) lowered hover container elevation |
| `md.comp.fab.tertiary.hover.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB (tertiary) hover state layer color |
| `md.comp.fab.tertiary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB (tertiary) hover state layer opacity |
| `md.comp.fab.tertiary.hover.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB (tertiary) hover icon color |
| `md.comp.fab.tertiary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB (tertiary) focus container elevation |
| `md.comp.fab.tertiary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | FAB (tertiary) lowered focus container elevation |
| `md.comp.fab.tertiary.focus.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB (tertiary) focus state layer color |
| `md.comp.fab.tertiary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB (tertiary) focus state layer opacity |
| `md.comp.fab.tertiary.focus.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB (tertiary) focus icon color |
| `md.comp.fab.tertiary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | FAB (tertiary) focus indicator color |
| `md.comp.fab.tertiary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | FAB (tertiary) focus indicator thickness |
| `md.comp.fab.tertiary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | FAB (tertiary) focus indicator offset |


## Anatomy

![2 elements of the FAB.](https://lh3.googleusercontent.com/ANFTHcXuJZA9FSSl3I315pOU3UzwgUh_BZgfudPuvatQY4tLh2hREtb6ESAQZulQZBDe8iHcqQ548uZe2aJd2UGGv-8q2XXCBeGLdERRlXs=s2048)

*Caption / Legend:*
1. Container

2. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens)

### Color styles

FABs can use several combinations of **color** and **on-color** styles, such as **primary** and **on-primary**. The following color mappings provide the same legibility and functionality, so the color mapping you use depends on style alone.

![6 FAB color styles in light and dark themes. Each style has 2 color roles, 1 for the container and icon.](https://lh3.googleusercontent.com/ZwUAoGfKU_nKPy45dUL885gk5_UbUfDoN2lY0oreRhS7vnkY12iBhnT3a1Fm1LydwMZVkqFYkQhYjVbGHx_hHsPwlmEm2KWwSQ75kOOKSkCsEA=s2048)

*Caption / Legend:*
1. Primary container & On primary container (default)
2. Secondary container & On secondary container
3. Tertiary container & On tertiary container
4. Primary & On primary
5. Secondary & On secondary
6. Tertiary & On tertiary

### Baseline color styles

Surface FAB color styles are still available, but no longer recommended.

![Baseline FAB style in all 3 sizes.](https://lh3.googleusercontent.com/Yt-382N_6b_TEqwyVAFZY_PG3zCmejVTFm6-tfbkUGpTqwgeECy2CNFH8n0bV1Spc6qU-ruc9l-Qja0_LpTeeYatxSxOi7qyzjF5tSeeXuEU=s2048)

*Caption / Legend:*
1. Surface FABs

## States

States are visual representations used to communicate the status of a component or interactive element.

When using a non-default color mapping for FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for the **primary** color style should be md.sys.color.primary.

![4 states of a FAB shown in light and dark themes.](https://lh3.googleusercontent.com/zCVGIf6lxv-ExBpOFiRo9G2yv-hIzjqPkEG0HKniNMzlBuWcEI8tXSvAndc3RL7Q0OOG56i6xP36k1rP1E-Fz92l4TGPZlkzdbNCF67rj2M=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered (8% state layer) - elevation 4
3. Focused (10% state layer)
4. Pressed (10% state layer)

## Measurements

### FAB

![FAB size measurements.](https://lh3.googleusercontent.com/bY4SJyZCamFkqUakHco1-HsHBRJ55wn7zAWPhJCBlE9W4aA7wFnRywl8NSl_e7oToqU6JODtUnjeguVn7BJd5irT8DYnHQmq1lQKEvgN3g3Q=s1004)

*Caption / Legend:*
FAB size measurements

![FAB padding measurements.](https://lh3.googleusercontent.com/beevX-JBo5BT5oaSR6WnfIvvspxwDFUOsGg0TBWuDEAgjCYevFNjOhNnz6om1Pbxkal9dwoBR5HwAeyyn7LB8z1N-NrDjH_F9ZcxN_lEL60=s1004)

*Caption / Legend:*
FAB padding measurements

### Medium FAB

![Medium FAB size measurements.](https://lh3.googleusercontent.com/l-yip97Leh5bLumalSFuxS1DEMG6p3xJlXkUCTioixjvr0uXlzTaKK85zQzLnZPpgD9E72Zajd1yO9VMW1FKpSUVCWXbP5XIxIz6dUiubWALJw=s1004)

*Caption / Legend:*
Medium FAB size measurements

![Medium FAB padding measurements.](https://lh3.googleusercontent.com/qQZXXxZh9x9LRJyZI_2tblBDG7aMd-Rx3HQVX-ssihAGa-xSIGuOA2FZNPKeHgfbI-q19SD0IIUCT-xnLHk4Q-P2KSb-KnSm95tRPJQs2rKx=s1004)

*Caption / Legend:*
Medium FAB padding measurements

### Large FAB

![Large FAB size measurements.](https://lh3.googleusercontent.com/_1q2AqUdfZfCbC9aKRbQaXHO48GA5OSdH6ywXyyosvlIznXjrr0Wx-WM9xomavwT1qj6RA42qG01crP9I7GQPJ92BWnvJqijQ01UxjQKKcgS=s1004)

*Caption / Legend:*
Large FAB size measurements

![Large FAB padding measurements.](https://lh3.googleusercontent.com/PsH6GvakYnsKOw9X05rxaShBXItlCIc3qS-LGjmdITmzFgAnhxdiyhzUEM34i8B0MGtZoBoDdXE7eA1hYAFqcWEqFyipPBdhE0TirWp_HMWxTA=s1004)

*Caption / Legend:*
Large FAB padding measurements

## Baseline tokens & specs

Use the table's menu to select a token set. This only includes tokens for small and surface FABs, which are both no longer recommended. It doesn't include other colors, or large or regular FABs, since those are still currently used.

#### Design Tokens: FAB - Color - Surface

*For surface color FABs. Not recommended with expressive FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab.surface.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | FAB (surface) focus indicator offset |
| `md.comp.fab.surface.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | FAB (surface) focus indicator thickness |
| `md.comp.fab.surface.focus.indicator.color` | `md.sys.color.secondary` | COLOR | FAB (surface) focus indicator color |
| `md.comp.fab.surface.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB (surface) container elevation |
| `md.comp.fab.surface.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | FAB (surface) container surface tint layer color |
| `md.comp.fab.surface.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB (surface) container shadow color |
| `md.comp.fab.surface.container.width` | 56dp | LENGTH | FAB (surface) container width |
| `md.comp.fab.surface.container.shape` | `md.sys.shape.corner.large` | SHAPE | FAB (surface) container shape |
| `md.comp.fab.surface.container.height` | 56dp | LENGTH | FAB (surface) container height |
| `md.comp.fab.surface.lowered.container.color` | `md.sys.color.surface-container-low` | COLOR | FAB (surface) lowered container color |
| `md.comp.fab.surface.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Surface FAB lowered container elevation |
| `md.comp.fab.surface.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Surface FAB lowered focus container elevation |
| `md.comp.fab.surface.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Surface FAB focus container elevation |
| `md.comp.fab.surface.focus.icon.color` | `md.sys.color.primary` | COLOR | FAB (surface) focus icon color |
| `md.comp.fab.surface.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB (surface) focus state layer opacity |
| `md.comp.fab.surface.focus.state-layer.color` | `md.sys.color.primary` | COLOR | FAB (surface) focus state layer color |
| `md.comp.fab.surface.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Surface FAB lowered hover container elevation |
| `md.comp.fab.surface.hover.icon.color` | `md.sys.color.primary` | COLOR | FAB (surface) hover icon color |
| `md.comp.fab.surface.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB (surface) hover state layer opacity |
| `md.comp.fab.surface.hover.state-layer.color` | `md.sys.color.primary` | COLOR | FAB (surface) hover state layer color |
| `md.comp.fab.surface.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB (surface) hover container elevation |
| `md.comp.fab.surface.icon.color` | `md.sys.color.primary` | COLOR | FAB (surface) icon color |
| `md.comp.fab.surface.icon.size` | 24dp | LENGTH | FAB (surface) icon size |
| `md.comp.fab.surface.container.color` | `md.sys.color.surface-container-high` | COLOR | FAB (surface) container color |
| `md.comp.fab.surface.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Surface FAB lowered pressed container elevation |
| `md.comp.fab.surface.pressed.icon.color` | `md.sys.color.primary` | COLOR | FAB (surface) pressed icon color |
| `md.comp.fab.surface.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB (surface) pressed state layer opacity |
| `md.comp.fab.surface.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | FAB (surface) pressed state layer color |
| `md.comp.fab.surface.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB (surface) pressed container elevation |


## Guidelines

![3 screens with various FAB sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapod2e-01.png?alt=media)

*Caption / Legend:*
FABs have multiple sizes that scale with the breakpoint

## Usage

Use a FAB for the most important action on a screen; it appears in front of all other content.

The FAB can be aligned left, center, or right. It can be positioned above the navigation bar, or nested within it.

![A Compose FAB is positioned above a nav bar on a mobile email inbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapp0w4-02.png?alt=media)

*Caption / Legend:*
FABs can use dynamic color

There are three FAB sizes:

1. FAB
2. Medium FAB (most recommended)
3. Large FAB

Choose the FAB size based on the visual hierarchy of your layout. 

Note: The small FAB is no longer recommended.

![3 FAB sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkappjdx-03.png?alt=media)

*Caption / Legend:*
1. FAB
2. Medium FAB
3. Large FAB

The FAB is the smallest size, and is best used in compact windows where other actions may be present on screen.

The medium FAB is recommended for most situations, and works best in compact and medium windows. Use it for important actions without taking up too much space. 

A large FAB is useful in any window size when the layout calls for a clear and prominent primary action, but is best suited for expanded and larger breakpoints, where its size helps draw attention.

![A medium FAB over an email app UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapq84r-04.png?alt=media)

*Caption / Legend:*
Use a medium FAB in most breakpoints

![A large FAB over an email app UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapqn1b-05.png?alt=media)

*Caption / Legend:*
Use a large FAB when the primary action needs to be prominent

![A photo feed with no FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapr8x3-06-do.png?alt=media)

*Caption / Legend:*
FABs are not needed on every screen, such as when images represent primary actions

![A screen with 3 FABs makes it hard to tell what the primary action should be.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaps2z9-07-don't.png?alt=media)

*Caption / Legend:*
Don't display multiple FABs on a single screen

A FAB can transform into an extended FAB on larger screens, or it can transition into a FAB menu when selected. Use a FAB menu when there are many kinds of actions relevant to the FAB.

[More on FAB menus](/m3/pages/fab-menu)

![A extended FAB saying “Share” with a less popular share icon.](https://lh3.googleusercontent.com/6gVz4SSpnVYq28cYhUlwX36JiaNZLx-0A1NhL4z0IUA-RwlUz5tsApAkIXx0RAVE780uol-6VkeZZq7jiXRPiGOzEUo_SGVtL7NG3ogNFwg=s656)

*Caption / Legend:*
Use the extended FAB when label text is necessary

![A FAB menu showing 3 actions related to sharing.](https://lh3.googleusercontent.com/YtrgWibQJDIheCADkeWKz14g7auX0_zMKtGJ8o45F48iJl9BvPomdwRJGi8bjtOnAH7gtd-8V5ki1gS2Qo-f172n73boNv3__OGeekLj-xg=s656)

*Caption / Legend:*
Use the FAB menu when there are many kinds of actions relevant to the FAB

## Actions

A FAB can trigger an action on the current screen, or it can perform an action that creates a new screen.

A FAB promotes an important, constructive action such as:

- Create
- Favorite
- Share
- Start a process

![FABS for 12 common actions including, create, edit, and navigate.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaptzjv-10.png?alt=media)

*Caption / Legend:*
Use FABs for primary, positive actions

Avoid using a FAB for minor or destructive actions, such as:

- Archive or trash
- Alerts or errors
- Limited tasks like cutting text
- Controls better suited to a toolbar, like to adjust volume or font color

![FABs for 18 minor or destructive actions, such as cut, trash, and volume.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapug9u-11.png?alt=media)

*Caption / Legend:*
Don’t use FABs for minor, overflow, unclear, or destructive actions

## Anatomy

![2 elements of a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkapv2og-12.png?alt=media)

*Caption / Legend:*
1. Container
2. Icon

### Container

The FAB is typically displayed in a square container. The container shouldn’t be covered by other elements, such as badges.

The container must have sufficient color contrast with the surface it’s placed on.

![A bright colored FAB has high contrast with the background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq0msf-13.png?alt=media)

*Caption / Legend:*
A FAB container color needs to stand out from its background

### Icon

An icon in a FAB should be clear and understandable. When hovering over a FAB on web products, FABs should display a tooltip with an accompanying icon text label. Use a filled icon instead of an outlined icon.

A FAB shouldn't contain notifications or actions found elsewhere on a screen.

![4 FABs each with a simple icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq1779-14.png?alt=media)

*Caption / Legend:*
Use clear and simple icons such as add, message, or edit

![4 FABs each with an ambiguous icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq1wxv-15.png?alt=media)

*Caption / Legend:*
Don’t use confusing or open-ended icons to symbolize less common actions

## Adaptive design

In compact and medium breakpoints, the best place for the FAB is typically the lower right corner of a screen, since it’s easy to reach and is less likely to cover important content.

In expanded breakpoints, consider placing the FAB in the upper left corner, like in the navigation rail. This positions it as one of the first interactive elements people see when they land on the page.

Adjust the size of the FAB based on the context. Use a medium FAB for mobile layouts, and large FAB for tablets and large screens.

![Large screen layout showing FAB in upper left region of the screen, below navigation rail icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq2b6m-16.png?alt=media)

*Caption / Legend:*
For large screens, place the FAB in the upper left corner

![A screen layout with several interactive elements. A single FAB is in the navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq2qmb-17.png?alt=media)

*Caption / Legend:*
A FAB can be used within a navigation component, such as a navigation rail

![A busy screen layout with 8 cards, each with their own FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaq35yc-18.png?alt=media)

*Caption / Legend:*
Individual components, such as cards, shouldn’t have their own FAB

## Behaviors

### Appearing

When a FAB animates on screen, it expands outward from a central point. The icon within it can be animated as well.

While FABs should be relevant to screen content, they aren't attached to the surface on which content appears. FABs move separately from other UI elements because of their relative importance.

**Screen transitions 
**FABs can morph to launch related actions. When a screen changes its layout, the FAB should disappear and reappear during the transition.

**Reappearance 
**The FAB should only reappear if it's relevant to the new screen. It should reappear in the same position, if possible.

### Expanding

The FAB can expand and adapt to any shape using a container transform transition pattern. This includes a surface that's part of the app structure, or a surface that spans the entire screen.

The FAB can also transition into a FAB menu. 

[More on FAB menus](/m3/pages/fab-menu)

### Scrolling

FABs remain in place on scroll.

Extended FABs can collapse into a FAB on scroll and expand on reaching the bottom of the view.

### Moving across tabs

When tabs are present, the FAB should briefly disappear, then reappear when the new content moves into place. This shows that the FAB is not connected to any particular tab.

Don't animate the FAB with body content.

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate to and activate the FAB
- Perform an action with the FAB
- Expand and minimize an extended FAB

## Interaction & style

Don't disable the FAB. If the action represented in the FAB is unavailable, the FAB shouldn't appear.

Ensure the icon has a minimum 3:1 contrast ratio with the container.

![FAB with highly contrasting bright container and dark icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo050e-1.png?alt=media)

*Caption / Legend:*
FAB icons are above the 3:1 contrast ratio

![FAB with low-contrasting dark container and dark icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmalo08ew-2.png?alt=media)

*Caption / Legend:*
Avoid using colors with a contrast below 3:1

## Focus

Ensure the FAB is prioritized in the overall focus order to create an efficient experience for people who navigate UIs with assistive tech. 

On mobile, the focus order may start with the app bar, move to the navigation bar, and then skip past any other content on the page to land on the FAB.

Consider displaying a tooltip when the FAB is focused. This is supported on web.

![A focused FAB with a tooltip saying “Compose” appearing below it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqbeez-03.png?alt=media)

*Caption / Legend:*
Tooltips surface the FAB’s label when focused

## Layout & position

To make it easier for users of screen readers to reach a primary action such as a FAB on expanded breakpoints, consider placing the FAB in the upper left region. 

However, it’s critical to test placement options with users to see if the upper left region is the best position in all browser windows. For compact and medium breakpoints, the best place for the FAB is the lower right corner of a screen.

![FAB in the lower right region of a small screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqbxv8-04.png?alt=media)

*Caption / Legend:*
In compact windows, place the FAB in the bottom trailing edge

![FAB in the upper left region of a large screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqcdup-05.png?alt=media)

*Caption / Legend:*
In expanded windows, place the FAB in the navigation rail

To ensure accessibility for keyboard users on the web, avoid positioning the FAB in a way that completely obscures the focus indicator of an actionable element. 

It’s okay to partially cover the desired element, as long as the focus indicators are still visible.

![FAB in the lower right region doesn’t obscure the focus indicator of an actionable icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqcwm1-06.png?alt=media)

*Caption / Legend:*
The FAB can partially cover an actionable element, as long as the focus indicator is still clearly visible

![FAB in the lower right region obscures an actionable icon and its focus indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkbecw5o-07.png?alt=media)

*Caption / Legend:*
Don’t completely obscure an actionable element and its focus indicator

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | Focus lands on the FAB |
| **Space** or **Enter** | Perform the default action on an item |

## Labeling elements

The accessibility label should describe the action that the button is performing, such as **Compose a new message**.

![Accessibility label and accessibility role of a FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmkaqdy3m-08.png?alt=media)

*Caption / Legend:*
The accessibility label of the FAB with a pencil icon describes the action of composing a new message
