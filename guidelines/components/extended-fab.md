# Extended FABs

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/extended-fab](https://m3.material.io/components/extended-fab)
> Last Updated: 2026-07-27T13:55:35.429Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use for the most common or important action on a screen
- Three variants: small, medium, and large
- Use instead of FAB when label text is needed to understand action

![3 extended fab sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0df17xu-01.png?alt=media)

*Caption / Legend:*
1. Small extended FAB
2. Medium extended FAB
3. Large extended FAB

## Availability & resources

## M3 Expressive update

**May 2025**

The extended FAB now has three sizes: small, medium, and large, each with updated type styles. These align with the FAB sizes for an easier transition between FABs. The baseline extended FAB is no longer recommended and should be replaced with the small extended FAB. Surface and FABs are also no longer recommended. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Added new sizes

- Small: 56dp
- Medium: 80dp
- Large: 96dp
- No longer recommended

- Baseline extended FAB (56dp)
- Surface extended FAB

Updates:

- Adjusted typography to be larger

![The baseline extended FAB and the small, medium, and large extended FABs from the expressive update.](https://lh3.googleusercontent.com/o8RP_K8msVBonOVgmcnANIcH_obxNxoaP2OKhzTpcLR6f6W8f2TJH0x2t0k703n-EIp_WM4_fMyA4JBqwpHbw0Z7Xdvpub3Ulltel37QN-8=s1352)

*Caption / Legend:*
The baseline extended FAB is replaced with a set of small, medium, and large extended FABs with new typography

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Extended FAB is the same height as the FAB
- Shape: Boxier style with smaller corner radius

![Diagram comparing the M2 FAB and extended FAB.](https://lh3.googleusercontent.com/CLwhLFrMkpEgnOAWORcnTMHBqt8gZ67coHMiSw1taCuxR0nRqasV1w7XWJ50w6ZT6gD6aZql87KrxZHdqiWya-bPwCnZx20ibdoKjagt7kyW9Q=s1004)

*Caption / Legend:*
M2: Extended FABs are pill-shaped and have a different height and elevation

![Diagram comparing the M3 FAB and extended FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dff6p3-05.png?alt=media)

*Caption / Legend:*
M3: Extended FABs share the same height, boxier shape, and simpler elevation model as FABs

## Specs

## Variants

![3 variants of extended FABs.](https://lh3.googleusercontent.com/BU02XKNQEFAuGts8-NpS5UG9q4WN58-z0DM-KPlHoM4MBqV_R39vdorWW1ONyIKGphkVugmYfKEvEwPEUG4QsmAosBurPXcfoTs_RT4w4hta=s2048)

*Caption / Legend:*
1. Small extended FAB
2. Medium extended FAB
3. Large extended FAB

### Baseline variants

The baseline extended FAB is no longer recommended in the M3 expressive update. Use a small extended FAB; the type style was updated from **label large** to **title medium**, and the inner padding was reduced. [View baseline extended FAB specs](/m3/pages/extended-fab/specs#01e114e6-8c3d-4d39-9376-65aa5c10e01b)

![1 baseline extended FAB.](https://lh3.googleusercontent.com/pcW-KzjKYIkI08HsYSKw2bRaDPQgikxhsVRQWVzMTObgMoJCv-Mx_IIXFzbhIDUXMXq-MaTXPrPWHipLOx_6LBdmJSC9UwJDsmg-rL9oxDU=s2048)

*Caption / Legend:*
1. Extended FAB

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Small extended FAB | -- | Available |
| Medium extended FAB | -- | Available |
| Large extended FAB | -- | Available |
| Extended FAB (baseline) | Available | Not recommended. Use **small extended FAB.** |

## Tokens & specs

Use the table's menu to select a token set. Extended FAB tokens are organized by size and color.

#### Design Tokens: Extended FAB - Size - Small

*For expressive small extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.small.container.height` | 56dp | LENGTH | Extended FAB small container height |
| `md.comp.extended-fab.small.label-text` | `md.sys.typescale.title-medium` | TYPOGRAPHY | Extended FAB small label text |
| `md.comp.extended-fab.small.icon.size` | 24dp | LENGTH | Extended FAB small icon size |
| `md.comp.extended-fab.small.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB small container shape |
| `md.comp.extended-fab.small.leading-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB small leading space |
| `md.comp.extended-fab.small.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Extended FAB small icon label space |
| `md.comp.extended-fab.small.trailing-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB small trailing space |

#### Design Tokens: Extended FAB - Size - Medium

*For medium extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.medium.container.height` | 80dp | LENGTH | Extended FAB medium container height |
| `md.comp.extended-fab.medium.label-text` | `md.sys.typescale.title-large` | TYPOGRAPHY | Extended FAB medium label text |
| `md.comp.extended-fab.medium.icon.size` | 28dp | LENGTH | Extended FAB medium icon size |
| `md.comp.extended-fab.medium.container.shape` | `md.sys.shape.corner.large-increased` | SHAPE | Extended FAB medium container shape |
| `md.comp.extended-fab.medium.leading-space` | 26dp | LENGTH | Extended FAB medium leading space |
| `md.comp.extended-fab.medium.icon-label-space` | `md.sys.measurement.space150` | LENGTH | Extended FAB medium icon label space |
| `md.comp.extended-fab.medium.trailing-space` | 26dp | LENGTH | Extended FAB medium trailing space |

#### Design Tokens: Extended FAB - Size - Large

*For large extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.large.container.height` | 96dp | LENGTH | Extended FAB large container height |
| `md.comp.extended-fab.large.label-text` | `md.sys.typescale.headline-small` | TYPOGRAPHY | Extended FAB large label text |
| `md.comp.extended-fab.large.icon.size` | 36dp | LENGTH | Extended FAB large icon size |
| `md.comp.extended-fab.large.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Extended FAB large container shape |
| `md.comp.extended-fab.large.leading-space` | 28dp | LENGTH | Extended FAB large leading space |
| `md.comp.extended-fab.large.icon-label-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB large icon label space |
| `md.comp.extended-fab.large.trailing-space` | 28dp | LENGTH | Extended FAB large trailing space |

#### Design Tokens: Extended FAB - Color - Tonal primary

*For tonal primary container extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.primary-container.container.color` | `md.sys.color.primary-container` | COLOR | Extended FAB tonal primary container color |
| `md.comp.extended-fab.primary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tonal primary container shadow color |
| `md.comp.extended-fab.primary-container.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary label text color |
| `md.comp.extended-fab.primary-container.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary container icon color |
| `md.comp.extended-fab.primary-container.hovered.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary hovered state layer color |
| `md.comp.extended-fab.primary-container.hovered.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary hovered label text color |
| `md.comp.extended-fab.primary-container.hovered.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary hovered icon color |
| `md.comp.extended-fab.primary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tonal primary hovered state layer opacity |
| `md.comp.extended-fab.primary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tonal primary hovered container elevation |
| `md.comp.extended-fab.primary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal primary container elevation |
| `md.comp.extended-fab.primary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal primary pressed container elevation |
| `md.comp.extended-fab.primary-container.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary pressed state layer color |
| `md.comp.extended-fab.primary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tonal primary pressed state layer opacity |
| `md.comp.extended-fab.primary-container.pressed.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary pressed label text color |
| `md.comp.extended-fab.primary-container.pressed.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary pressed icon color |
| `md.comp.extended-fab.primary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal primary focused container elevation |
| `md.comp.extended-fab.primary-container.focused.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary focused state layer color |
| `md.comp.extended-fab.primary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tonal primary focused state layer opacity |
| `md.comp.extended-fab.primary-container.focused.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary focused label text color |
| `md.comp.extended-fab.primary-container.focused.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary focused icon color |

#### Design Tokens: Extended FAB - Color - Tonal secondary

*For tonal secondary container extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.secondary-container.container.color` | `md.sys.color.secondary-container` | COLOR | Extended FAB tonal secondary container color |
| `md.comp.extended-fab.secondary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal secondary container elevation |
| `md.comp.extended-fab.secondary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tonal secondary container shadow color |
| `md.comp.extended-fab.secondary-container.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary label text color |
| `md.comp.extended-fab.secondary-container.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary container icon color |
| `md.comp.extended-fab.secondary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tonal secondary hovered container elevation |
| `md.comp.extended-fab.secondary-container.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary hovered state layer color |
| `md.comp.extended-fab.secondary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tonal secondary hovered state layer opacity |
| `md.comp.extended-fab.secondary-container.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary hovered label text color |
| `md.comp.extended-fab.secondary-container.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary hovered icon color |
| `md.comp.extended-fab.secondary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal secondary focused container elevation |
| `md.comp.extended-fab.secondary-container.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary focused state layer color |
| `md.comp.extended-fab.secondary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tonal secondary focused state layer opacity |
| `md.comp.extended-fab.secondary-container.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary focused label text color |
| `md.comp.extended-fab.secondary-container.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary focused icon color |
| `md.comp.extended-fab.secondary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal secondary pressed container elevation |
| `md.comp.extended-fab.secondary-container.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary pressed state layer color |
| `md.comp.extended-fab.secondary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tonal secondary pressed state layer opacity |
| `md.comp.extended-fab.secondary-container.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary pressed label text color |
| `md.comp.extended-fab.secondary-container.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary pressed icon color |

#### Design Tokens: Extended FAB - Color - Tonal tertiary

*For tonal tertiary container extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.tertiary-container.container.color` | `md.sys.color.tertiary-container` | COLOR | Extended FAB tonal tertiary container color |
| `md.comp.extended-fab.tertiary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal tertiary container elevation |
| `md.comp.extended-fab.tertiary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tonal tertiary container shadow color |
| `md.comp.extended-fab.tertiary-container.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary label text color |
| `md.comp.extended-fab.tertiary-container.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary container icon color |
| `md.comp.extended-fab.tertiary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tonal tertiary hovered container elevation |
| `md.comp.extended-fab.tertiary-container.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary hovered state layer color |
| `md.comp.extended-fab.tertiary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tonal tertiary hovered state layer opacity |
| `md.comp.extended-fab.tertiary-container.hovered.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary hovered label text color |
| `md.comp.extended-fab.tertiary-container.hovered.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary hovered icon color |
| `md.comp.extended-fab.tertiary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal tertiary focused container elevation |
| `md.comp.extended-fab.tertiary-container.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary focused state layer color |
| `md.comp.extended-fab.tertiary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tonal tertiary focused state layer opacity |
| `md.comp.extended-fab.tertiary-container.focused.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary focused label text color |
| `md.comp.extended-fab.tertiary-container.focused.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary focused icon color |
| `md.comp.extended-fab.tertiary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal tertiary pressed container elevation |
| `md.comp.extended-fab.tertiary-container.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary pressed state layer color |
| `md.comp.extended-fab.tertiary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tonal tertiary pressed state layer opacity |
| `md.comp.extended-fab.tertiary-container.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary pressed label text color |
| `md.comp.extended-fab.tertiary-container.pressed.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary pressed icon color |

#### Design Tokens: Extended FAB - Color - Primary

*For primary color extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.primary.container.color` | `md.sys.color.primary` | COLOR | Extended FAB primary container color |
| `md.comp.extended-fab.primary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB primary container elevation |
| `md.comp.extended-fab.primary.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB primary container shadow color |
| `md.comp.extended-fab.primary.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary label text color |
| `md.comp.extended-fab.primary.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary container icon color |
| `md.comp.extended-fab.primary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB primary hovered container elevation |
| `md.comp.extended-fab.primary.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary hovered state layer color |
| `md.comp.extended-fab.primary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB primary hovered state layer opacity |
| `md.comp.extended-fab.primary.hovered.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary hovered label text color |
| `md.comp.extended-fab.primary.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary hovered icon color |
| `md.comp.extended-fab.primary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB primary focused container elevation |
| `md.comp.extended-fab.primary.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary focused state layer color |
| `md.comp.extended-fab.primary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB primary focused state layer opacity |
| `md.comp.extended-fab.primary.focused.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary focused label text color |
| `md.comp.extended-fab.primary.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary focused icon color |
| `md.comp.extended-fab.primary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB primary pressed container elevation |
| `md.comp.extended-fab.primary.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary pressed state layer color |
| `md.comp.extended-fab.primary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB primary pressed state layer opacity |
| `md.comp.extended-fab.primary.pressed.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary pressed label text color |
| `md.comp.extended-fab.primary.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary pressed icon color |
| `md.comp.extended-fab.primary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (primary) focus indicator offset |
| `md.comp.extended-fab.primary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (primary) focus indicator thickness |
| `md.comp.extended-fab.primary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (primary) focus indicator color |
| `md.comp.extended-fab.primary.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.primary.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (primary) font |
| `md.comp.extended-fab.primary.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (primary) weight |
| `md.comp.extended-fab.primary.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (primary) size |
| `md.comp.extended-fab.primary.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (primary) height |
| `md.comp.extended-fab.primary.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (primary) tracking |
| `md.comp.extended-fab.primary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Primary extended FAB lowered focus container elevation |
| `md.comp.extended-fab.primary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Primary extended FAB focus container elevation |
| `md.comp.extended-fab.primary.focus.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) focus label text color |
| `md.comp.extended-fab.primary.focus.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) focus icon color |
| `md.comp.extended-fab.primary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (primary) focus state layer opacity |
| `md.comp.extended-fab.primary.focus.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) focus state layer color |
| `md.comp.extended-fab.primary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Primary extended FAB lowered hover container elevation |
| `md.comp.extended-fab.primary.hover.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) hover label text color |
| `md.comp.extended-fab.primary.hover.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) hover icon color |
| `md.comp.extended-fab.primary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (primary) hover state layer opacity |
| `md.comp.extended-fab.primary.hover.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) hover state layer color |
| `md.comp.extended-fab.primary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (primary) hover container elevation |
| `md.comp.extended-fab.primary.icon.size` | 24dp | LENGTH | Extended FAB (primary) icon size |
| `md.comp.extended-fab.primary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Primary extended FAB lowered container elevation |
| `md.comp.extended-fab.primary.container.height` | 56dp | LENGTH | Extended FAB (primary) container height |
| `md.comp.extended-fab.primary.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (primary) container shape |
| `md.comp.extended-fab.primary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Primary extended FAB lowered pressed container elevation |

#### Design Tokens: Extended FAB - Color - Secondary

*For secondary color extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.secondary.container.color` | `md.sys.color.secondary` | COLOR | Extended FAB secondary container color |
| `md.comp.extended-fab.secondary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB secondary container elevation |
| `md.comp.extended-fab.secondary.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB secondary container shadow color |
| `md.comp.extended-fab.secondary.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary label text color |
| `md.comp.extended-fab.secondary.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary container icon color |
| `md.comp.extended-fab.secondary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB secondary pressed container elevation |
| `md.comp.extended-fab.secondary.pressed.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary pressed state layer color |
| `md.comp.extended-fab.secondary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB secondary pressed state layer opacity |
| `md.comp.extended-fab.secondary.pressed.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary pressed label text color |
| `md.comp.extended-fab.secondary.pressed.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary pressed icon color |
| `md.comp.extended-fab.secondary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB secondary hovered container elevation |
| `md.comp.extended-fab.secondary.hovered.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary hovered state layer color |
| `md.comp.extended-fab.secondary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB secondary hovered state layer opacity |
| `md.comp.extended-fab.secondary.hovered.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary hovered label text color |
| `md.comp.extended-fab.secondary.hovered.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary hovered icon color |
| `md.comp.extended-fab.secondary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB secondary focused container elevation |
| `md.comp.extended-fab.secondary.focused.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary focused state layer color |
| `md.comp.extended-fab.secondary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB secondary focused state layer opacity |
| `md.comp.extended-fab.secondary.focused.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary focused label text color |
| `md.comp.extended-fab.secondary.focused.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary focused icon color |
| `md.comp.extended-fab.secondary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Secondary extended FAB lowered pressed container elevation |
| `md.comp.extended-fab.secondary.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (secondary) container shape |
| `md.comp.extended-fab.secondary.container.height` | 56dp | LENGTH | Extended FAB (secondary) container height |
| `md.comp.extended-fab.secondary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Secondary extended FAB lowered container elevation |
| `md.comp.extended-fab.secondary.icon.size` | 24dp | LENGTH | Extended FAB (secondary) icon size |
| `md.comp.extended-fab.secondary.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (secondary) font |
| `md.comp.extended-fab.secondary.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (secondary) height |
| `md.comp.extended-fab.secondary.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (secondary) size |
| `md.comp.extended-fab.secondary.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (secondary) weight |
| `md.comp.extended-fab.secondary.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (secondary) tracking |
| `md.comp.extended-fab.secondary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (secondary) hover container elevation |
| `md.comp.extended-fab.secondary.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) hover state layer color |
| `md.comp.extended-fab.secondary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (secondary) hover state layer opacity |
| `md.comp.extended-fab.secondary.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) hover icon color |
| `md.comp.extended-fab.secondary.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) hover color |
| `md.comp.extended-fab.secondary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Secondary extended FAB lowered hover container elevation |
| `md.comp.extended-fab.secondary.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) focus state layer color |
| `md.comp.extended-fab.secondary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (secondary) focus state layer opacity |
| `md.comp.extended-fab.secondary.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) focus icon color |
| `md.comp.extended-fab.secondary.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) focus color |
| `md.comp.extended-fab.secondary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Secondary extended FAB focus container elevation |
| `md.comp.extended-fab.secondary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Secondary extended FAB lowered focus container elevation |
| `md.comp.extended-fab.secondary.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.secondary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (secondary) focus indicator color |
| `md.comp.extended-fab.secondary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (secondary) focus indicator thickness |
| `md.comp.extended-fab.secondary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (secondary) focus indicator offset |

#### Design Tokens: Extended FAB - Color - Tertiary

*For tertiary color extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.tertiary.container.color` | `md.sys.color.tertiary` | COLOR | Extended FAB tertiary container color |
| `md.comp.extended-fab.tertiary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tertiary container elevation |
| `md.comp.extended-fab.tertiary.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tertiary container shadow color |
| `md.comp.extended-fab.tertiary.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary label text color |
| `md.comp.extended-fab.tertiary.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary container icon color |
| `md.comp.extended-fab.tertiary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tertiary pressed container elevation |
| `md.comp.extended-fab.tertiary.pressed.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary pressed state layer color |
| `md.comp.extended-fab.tertiary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tertiary pressed state layer opacity |
| `md.comp.extended-fab.tertiary.pressed.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary pressed label text color |
| `md.comp.extended-fab.tertiary.pressed.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary pressed icon color |
| `md.comp.extended-fab.tertiary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tertiary hovered container elevation |
| `md.comp.extended-fab.tertiary.hovered.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary hovered state layer color |
| `md.comp.extended-fab.tertiary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tertiary hovered state layer opacity |
| `md.comp.extended-fab.tertiary.hovered.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary hovered label text color |
| `md.comp.extended-fab.tertiary.hovered.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary hovered icon color |
| `md.comp.extended-fab.tertiary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tertiary focused container elevation |
| `md.comp.extended-fab.tertiary.focused.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary focused state layer color |
| `md.comp.extended-fab.tertiary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tertiary focused state layer opacity |
| `md.comp.extended-fab.tertiary.focused.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary focused label text color |
| `md.comp.extended-fab.tertiary.focused.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary focused icon color |
| `md.comp.extended-fab.tertiary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Extended FAB (tertiary) lowered container elevation |
| `md.comp.extended-fab.tertiary.container.height` | 56dp | LENGTH | Extended FAB (tertiary) container height |
| `md.comp.extended-fab.tertiary.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (tertiary) container shape |
| `md.comp.extended-fab.tertiary.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (tertiary) label text font |
| `md.comp.extended-fab.tertiary.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (tertiary) label text line height |
| `md.comp.extended-fab.tertiary.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (tertiary) label text size |
| `md.comp.extended-fab.tertiary.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (tertiary) label text tracking |
| `md.comp.extended-fab.tertiary.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (tertiary) label text weight |
| `md.comp.extended-fab.tertiary.icon.size` | 24dp | LENGTH | Extended FAB (tertiary) icon size |
| `md.comp.extended-fab.tertiary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (tertiary) hover container elevation |
| `md.comp.extended-fab.tertiary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Extended FAB (tertiary) lowered hover container elevation |
| `md.comp.extended-fab.tertiary.hover.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) hover state layer color |
| `md.comp.extended-fab.tertiary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (tertiary) hover state layer opacity |
| `md.comp.extended-fab.tertiary.hover.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) hover label text color |
| `md.comp.extended-fab.tertiary.hover.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) hover icon color |
| `md.comp.extended-fab.tertiary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB (tertiary) focus container elevation |
| `md.comp.extended-fab.tertiary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Extended FAB (tertiary) lowered focus container elevation |
| `md.comp.extended-fab.tertiary.focus.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) focus state layer color |
| `md.comp.extended-fab.tertiary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (tertiary) focus state layer opacity |
| `md.comp.extended-fab.tertiary.focus.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) focus label text color |
| `md.comp.extended-fab.tertiary.focus.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) focus icon color |
| `md.comp.extended-fab.tertiary.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.tertiary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Extended FAB (tertiary) lowered pressed container elevation |
| `md.comp.extended-fab.tertiary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (tertiary) focus indicator color |
| `md.comp.extended-fab.tertiary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (tertiary) focus indicator thickness |
| `md.comp.extended-fab.tertiary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (tertiary) focus indicator offset |


## Anatomy

![3 elements of extended FABs.](https://lh3.googleusercontent.com/I81VtVjjXN2Snx8X1zpMv5Jp-q12chYm4QYjLJqDyHlxc6WVWKEa7y9y6NC761EXd6tsmGOBMY6xr0JQogHrvMTu0kC_4od3QLnE-OpJcy7J=s2048)

*Caption / Legend:*
1. Container
2. Label text
3. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

### Color styles

Extended FABs can use several combinations of **color** and **on color** styles, such as **primary** and **on primary**. The following color mappings provide the same level of contrast and functionality, so choose a color mapping based on visual preference.

![6 extended FAB color styles.](https://lh3.googleusercontent.com/1n9kpQw8OhgILXZOD3kA6RzO20NmwQzt184w4PvBbS4qJxqseyJ81kr9yk5cbyr824e7gKDu01_ZzLI6OHKLZGRg9wAoqMG-0062EIHSGDc=s2048)

*Caption / Legend:*
Extended FAB color roles used for light and dark schemes:

1. Primary container & on primary container (default)
2. Secondary container & on secondary container
3. Tertiary container & on tertiary container
4. Primary & on primary
5. Secondary & on secondary
6. Tertiary & on tertiary

### Baseline color styles

Extended FABs should no longer use surface color styles. They’re still available, but not recommended.

![1 baseline extended FAB color style.](https://lh3.googleusercontent.com/SSZr-dBlNa4O7kbOQi9byJEQSVaZzUOBXZnNoDoxhb5G8Fbd3pQdTfo14YWIS6QTQTIcd70uYAYZWbp1gKwJoUoGZTam2-L5DOYQOHRU0Xnr=s2048)

*Caption / Legend:*
1. Surface container FAB

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

When using a non-default color mapping for extended FABs, make sure the state layer color is the same as the icon color. For example, the state layer color for primary mapping should be md.sys.color.primary.

![4 states of extended FABs.](https://lh3.googleusercontent.com/vHxV15QsYc98EQyLenfT7dOu3npLcTkKTLpe5YY2K0m6eNsWU8yXQs_d6XBpaPJ44MJODwpB8iCIgKlZcfnnuHEoReYQZyiWB4QmGyekbJ1I1g=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered - elevation 4
3. Focused
4. Pressed

## Measurements

![Extended FAB padding and size measurements.](https://lh3.googleusercontent.com/9IwzFk5XDN4m9vzImfQxg0mR1AtQJ86eAkPH3xC5h2GPFNLw5Wqd0VWHGgMOUOSFF32Iv3M3ypdaXDq9lJRUf9xBuZXQcPS3iw7oWPLa3zqV_A=s2048)

*Caption / Legend:*
Size and padding measurements of the small, medium, and large extended FABs

![Extended FAB margin measurements.](https://lh3.googleusercontent.com/mirVSM4EDUYdZY4eF-l65mg6of6d1WI8u5nP3qZcTjDUZK8BdZl7QTjSzFtzkr-XBjVBzDFZpQ2CLi8k1gdYhc8LyHnqulU-U2XbkHumiIA=s2048)

*Caption / Legend:*
Extended FABs should have margins of 16dp

## Baseline extended FAB

![3 elements of baseline extended FAB.](https://lh3.googleusercontent.com/BfVkr1OjcKMdwpCyy_0JfIAuGNx2Z_AlwSDie5SKQmAIXXlRW1yGqf7UTrO1Vfn95sgY935-quSQmFr0p01AFg6fKCqv6G-a6Kt0XVpt1fM=s2048)

*Caption / Legend:*
1. Container
2. Label text
3. Icon

### Baseline configurations

![Baseline extended FAB with icon.](https://lh3.googleusercontent.com/6_OCmL-IgDTNGgDG2E6_5sUGlzaM1D_glmAKdNWtLl2P-8vOR1ur1HBHKt1pfb1gp8TmMRFu3_ukbqP80rXfE7QL4JDjql7OuYuJLR_2UPfiFw=s1004)

*Caption / Legend:*
With icon

![Baseline extended FAB without icon.](https://lh3.googleusercontent.com/BHRB4fj8KQKyqwOGul6DN_sqlayRB3Gs5AMUQ5xbnA0jWl5JIDr7a6oM3eKNUM927e8s92y-w1T_S_Q8FJWVz_NLhMSkZkARwYIKXh8ayw0=s1004)

*Caption / Legend:*
Without icon

### Baseline tokens

Use the table's menu to select a token set. The baseline extended FAB token sets are organized by common tokens, then by surface and branded color styles. Other color styles like primary, secondary, and tertiary are still used by the latest extended FABs.

#### Design Tokens: Extended FAB - Color - Tonal primary

*For tonal primary container extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.primary-container.container.color` | `md.sys.color.primary-container` | COLOR | Extended FAB tonal primary container color |
| `md.comp.extended-fab.primary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tonal primary container shadow color |
| `md.comp.extended-fab.primary-container.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary label text color |
| `md.comp.extended-fab.primary-container.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary container icon color |
| `md.comp.extended-fab.primary-container.hovered.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary hovered state layer color |
| `md.comp.extended-fab.primary-container.hovered.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary hovered label text color |
| `md.comp.extended-fab.primary-container.hovered.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary hovered icon color |
| `md.comp.extended-fab.primary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tonal primary hovered state layer opacity |
| `md.comp.extended-fab.primary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tonal primary hovered container elevation |
| `md.comp.extended-fab.primary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal primary container elevation |
| `md.comp.extended-fab.primary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal primary pressed container elevation |
| `md.comp.extended-fab.primary-container.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary pressed state layer color |
| `md.comp.extended-fab.primary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tonal primary pressed state layer opacity |
| `md.comp.extended-fab.primary-container.pressed.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary pressed label text color |
| `md.comp.extended-fab.primary-container.pressed.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary pressed icon color |
| `md.comp.extended-fab.primary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal primary focused container elevation |
| `md.comp.extended-fab.primary-container.focused.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary focused state layer color |
| `md.comp.extended-fab.primary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tonal primary focused state layer opacity |
| `md.comp.extended-fab.primary-container.focused.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary focused label text color |
| `md.comp.extended-fab.primary-container.focused.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB tonal primary focused icon color |

#### Design Tokens: Extended FAB - Color - Primary

*For primary color extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.primary.container.color` | `md.sys.color.primary` | COLOR | Extended FAB primary container color |
| `md.comp.extended-fab.primary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB primary container elevation |
| `md.comp.extended-fab.primary.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB primary container shadow color |
| `md.comp.extended-fab.primary.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary label text color |
| `md.comp.extended-fab.primary.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary container icon color |
| `md.comp.extended-fab.primary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB primary hovered container elevation |
| `md.comp.extended-fab.primary.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary hovered state layer color |
| `md.comp.extended-fab.primary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB primary hovered state layer opacity |
| `md.comp.extended-fab.primary.hovered.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary hovered label text color |
| `md.comp.extended-fab.primary.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary hovered icon color |
| `md.comp.extended-fab.primary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB primary focused container elevation |
| `md.comp.extended-fab.primary.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary focused state layer color |
| `md.comp.extended-fab.primary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB primary focused state layer opacity |
| `md.comp.extended-fab.primary.focused.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary focused label text color |
| `md.comp.extended-fab.primary.focused.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary focused icon color |
| `md.comp.extended-fab.primary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB primary pressed container elevation |
| `md.comp.extended-fab.primary.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary pressed state layer color |
| `md.comp.extended-fab.primary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB primary pressed state layer opacity |
| `md.comp.extended-fab.primary.pressed.label-text.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary pressed label text color |
| `md.comp.extended-fab.primary.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Extended FAB primary pressed icon color |
| `md.comp.extended-fab.primary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (primary) focus indicator offset |
| `md.comp.extended-fab.primary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (primary) focus indicator thickness |
| `md.comp.extended-fab.primary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (primary) focus indicator color |
| `md.comp.extended-fab.primary.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.primary.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (primary) font |
| `md.comp.extended-fab.primary.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (primary) weight |
| `md.comp.extended-fab.primary.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (primary) size |
| `md.comp.extended-fab.primary.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (primary) height |
| `md.comp.extended-fab.primary.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (primary) tracking |
| `md.comp.extended-fab.primary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Primary extended FAB lowered focus container elevation |
| `md.comp.extended-fab.primary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Primary extended FAB focus container elevation |
| `md.comp.extended-fab.primary.focus.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) focus label text color |
| `md.comp.extended-fab.primary.focus.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) focus icon color |
| `md.comp.extended-fab.primary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (primary) focus state layer opacity |
| `md.comp.extended-fab.primary.focus.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) focus state layer color |
| `md.comp.extended-fab.primary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Primary extended FAB lowered hover container elevation |
| `md.comp.extended-fab.primary.hover.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) hover label text color |
| `md.comp.extended-fab.primary.hover.icon.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) hover icon color |
| `md.comp.extended-fab.primary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (primary) hover state layer opacity |
| `md.comp.extended-fab.primary.hover.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Extended FAB (primary) hover state layer color |
| `md.comp.extended-fab.primary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (primary) hover container elevation |
| `md.comp.extended-fab.primary.icon.size` | 24dp | LENGTH | Extended FAB (primary) icon size |
| `md.comp.extended-fab.primary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Primary extended FAB lowered container elevation |
| `md.comp.extended-fab.primary.container.height` | 56dp | LENGTH | Extended FAB (primary) container height |
| `md.comp.extended-fab.primary.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (primary) container shape |
| `md.comp.extended-fab.primary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Primary extended FAB lowered pressed container elevation |

#### Design Tokens: Extended FAB - Size - Large

*For large extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.large.container.height` | 96dp | LENGTH | Extended FAB large container height |
| `md.comp.extended-fab.large.label-text` | `md.sys.typescale.headline-small` | TYPOGRAPHY | Extended FAB large label text |
| `md.comp.extended-fab.large.icon.size` | 36dp | LENGTH | Extended FAB large icon size |
| `md.comp.extended-fab.large.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Extended FAB large container shape |
| `md.comp.extended-fab.large.leading-space` | 28dp | LENGTH | Extended FAB large leading space |
| `md.comp.extended-fab.large.icon-label-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB large icon label space |
| `md.comp.extended-fab.large.trailing-space` | 28dp | LENGTH | Extended FAB large trailing space |

#### Design Tokens: Extended FAB - Size - Medium

*For medium extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.medium.container.height` | 80dp | LENGTH | Extended FAB medium container height |
| `md.comp.extended-fab.medium.label-text` | `md.sys.typescale.title-large` | TYPOGRAPHY | Extended FAB medium label text |
| `md.comp.extended-fab.medium.icon.size` | 28dp | LENGTH | Extended FAB medium icon size |
| `md.comp.extended-fab.medium.container.shape` | `md.sys.shape.corner.large-increased` | SHAPE | Extended FAB medium container shape |
| `md.comp.extended-fab.medium.leading-space` | 26dp | LENGTH | Extended FAB medium leading space |
| `md.comp.extended-fab.medium.icon-label-space` | `md.sys.measurement.space150` | LENGTH | Extended FAB medium icon label space |
| `md.comp.extended-fab.medium.trailing-space` | 26dp | LENGTH | Extended FAB medium trailing space |

#### Design Tokens: Extended FAB - Color - Tonal secondary

*For tonal secondary container extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.secondary-container.container.color` | `md.sys.color.secondary-container` | COLOR | Extended FAB tonal secondary container color |
| `md.comp.extended-fab.secondary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal secondary container elevation |
| `md.comp.extended-fab.secondary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tonal secondary container shadow color |
| `md.comp.extended-fab.secondary-container.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary label text color |
| `md.comp.extended-fab.secondary-container.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary container icon color |
| `md.comp.extended-fab.secondary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tonal secondary hovered container elevation |
| `md.comp.extended-fab.secondary-container.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary hovered state layer color |
| `md.comp.extended-fab.secondary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tonal secondary hovered state layer opacity |
| `md.comp.extended-fab.secondary-container.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary hovered label text color |
| `md.comp.extended-fab.secondary-container.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary hovered icon color |
| `md.comp.extended-fab.secondary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal secondary focused container elevation |
| `md.comp.extended-fab.secondary-container.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary focused state layer color |
| `md.comp.extended-fab.secondary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tonal secondary focused state layer opacity |
| `md.comp.extended-fab.secondary-container.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary focused label text color |
| `md.comp.extended-fab.secondary-container.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary focused icon color |
| `md.comp.extended-fab.secondary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal secondary pressed container elevation |
| `md.comp.extended-fab.secondary-container.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary pressed state layer color |
| `md.comp.extended-fab.secondary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tonal secondary pressed state layer opacity |
| `md.comp.extended-fab.secondary-container.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary pressed label text color |
| `md.comp.extended-fab.secondary-container.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB tonal secondary pressed icon color |

#### Design Tokens: Extended FAB - Color - Tonal tertiary

*For tonal tertiary container extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.tertiary-container.container.color` | `md.sys.color.tertiary-container` | COLOR | Extended FAB tonal tertiary container color |
| `md.comp.extended-fab.tertiary-container.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal tertiary container elevation |
| `md.comp.extended-fab.tertiary-container.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tonal tertiary container shadow color |
| `md.comp.extended-fab.tertiary-container.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary label text color |
| `md.comp.extended-fab.tertiary-container.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary container icon color |
| `md.comp.extended-fab.tertiary-container.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tonal tertiary hovered container elevation |
| `md.comp.extended-fab.tertiary-container.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary hovered state layer color |
| `md.comp.extended-fab.tertiary-container.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tonal tertiary hovered state layer opacity |
| `md.comp.extended-fab.tertiary-container.hovered.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary hovered label text color |
| `md.comp.extended-fab.tertiary-container.hovered.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary hovered icon color |
| `md.comp.extended-fab.tertiary-container.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal tertiary focused container elevation |
| `md.comp.extended-fab.tertiary-container.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary focused state layer color |
| `md.comp.extended-fab.tertiary-container.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tonal tertiary focused state layer opacity |
| `md.comp.extended-fab.tertiary-container.focused.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary focused label text color |
| `md.comp.extended-fab.tertiary-container.focused.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary focused icon color |
| `md.comp.extended-fab.tertiary-container.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tonal tertiary pressed container elevation |
| `md.comp.extended-fab.tertiary-container.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary pressed state layer color |
| `md.comp.extended-fab.tertiary-container.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tonal tertiary pressed state layer opacity |
| `md.comp.extended-fab.tertiary-container.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary pressed label text color |
| `md.comp.extended-fab.tertiary-container.pressed.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB tonal tertiary pressed icon color |

#### Design Tokens: Extended FAB - Size - Small

*For expressive small extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.small.container.height` | 56dp | LENGTH | Extended FAB small container height |
| `md.comp.extended-fab.small.label-text` | `md.sys.typescale.title-medium` | TYPOGRAPHY | Extended FAB small label text |
| `md.comp.extended-fab.small.icon.size` | 24dp | LENGTH | Extended FAB small icon size |
| `md.comp.extended-fab.small.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB small container shape |
| `md.comp.extended-fab.small.leading-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB small leading space |
| `md.comp.extended-fab.small.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Extended FAB small icon label space |
| `md.comp.extended-fab.small.trailing-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB small trailing space |

#### Design Tokens: Extended FAB - Size - Baseline

*For baseline extended FABs. For expressive, use the small extended FAB token set `md.comp.extended-fab.small` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.container.height` | 56dp | LENGTH | Extended FAB container height |
| `md.comp.extended-fab.leading-space` | `md.sys.measurement.space200` | LENGTH | Extended FAB leading space |
| `md.comp.extended-fab.icon-label-space` | `md.sys.measurement.space150` | LENGTH | Extended FAB icon label space |
| `md.comp.extended-fab.trailing-space` | `md.sys.measurement.space250` | LENGTH | Extended FAB trailing space |
| `md.comp.extended-fab.label-text` | `md.sys.typescale.label-large` | TYPOGRAPHY | Extended FAB label text |
| `md.comp.extended-fab.icon.size` | 24dp | LENGTH | Extended FAB icon size |
| `md.comp.extended-fab.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB container shape |

#### Design Tokens: Extended FAB - Color - Tertiary

*For tertiary color extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.tertiary.container.color` | `md.sys.color.tertiary` | COLOR | Extended FAB tertiary container color |
| `md.comp.extended-fab.tertiary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tertiary container elevation |
| `md.comp.extended-fab.tertiary.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB tertiary container shadow color |
| `md.comp.extended-fab.tertiary.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary label text color |
| `md.comp.extended-fab.tertiary.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary container icon color |
| `md.comp.extended-fab.tertiary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tertiary pressed container elevation |
| `md.comp.extended-fab.tertiary.pressed.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary pressed state layer color |
| `md.comp.extended-fab.tertiary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB tertiary pressed state layer opacity |
| `md.comp.extended-fab.tertiary.pressed.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary pressed label text color |
| `md.comp.extended-fab.tertiary.pressed.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary pressed icon color |
| `md.comp.extended-fab.tertiary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB tertiary hovered container elevation |
| `md.comp.extended-fab.tertiary.hovered.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary hovered state layer color |
| `md.comp.extended-fab.tertiary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB tertiary hovered state layer opacity |
| `md.comp.extended-fab.tertiary.hovered.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary hovered label text color |
| `md.comp.extended-fab.tertiary.hovered.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary hovered icon color |
| `md.comp.extended-fab.tertiary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB tertiary focused container elevation |
| `md.comp.extended-fab.tertiary.focused.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary focused state layer color |
| `md.comp.extended-fab.tertiary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB tertiary focused state layer opacity |
| `md.comp.extended-fab.tertiary.focused.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary focused label text color |
| `md.comp.extended-fab.tertiary.focused.icon.color` | `md.sys.color.on-tertiary` | COLOR | Extended FAB tertiary focused icon color |
| `md.comp.extended-fab.tertiary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Extended FAB (tertiary) lowered container elevation |
| `md.comp.extended-fab.tertiary.container.height` | 56dp | LENGTH | Extended FAB (tertiary) container height |
| `md.comp.extended-fab.tertiary.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (tertiary) container shape |
| `md.comp.extended-fab.tertiary.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (tertiary) label text font |
| `md.comp.extended-fab.tertiary.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (tertiary) label text line height |
| `md.comp.extended-fab.tertiary.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (tertiary) label text size |
| `md.comp.extended-fab.tertiary.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (tertiary) label text tracking |
| `md.comp.extended-fab.tertiary.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (tertiary) label text weight |
| `md.comp.extended-fab.tertiary.icon.size` | 24dp | LENGTH | Extended FAB (tertiary) icon size |
| `md.comp.extended-fab.tertiary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (tertiary) hover container elevation |
| `md.comp.extended-fab.tertiary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Extended FAB (tertiary) lowered hover container elevation |
| `md.comp.extended-fab.tertiary.hover.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) hover state layer color |
| `md.comp.extended-fab.tertiary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (tertiary) hover state layer opacity |
| `md.comp.extended-fab.tertiary.hover.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) hover label text color |
| `md.comp.extended-fab.tertiary.hover.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) hover icon color |
| `md.comp.extended-fab.tertiary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB (tertiary) focus container elevation |
| `md.comp.extended-fab.tertiary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Extended FAB (tertiary) lowered focus container elevation |
| `md.comp.extended-fab.tertiary.focus.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) focus state layer color |
| `md.comp.extended-fab.tertiary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (tertiary) focus state layer opacity |
| `md.comp.extended-fab.tertiary.focus.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) focus label text color |
| `md.comp.extended-fab.tertiary.focus.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Extended FAB (tertiary) focus icon color |
| `md.comp.extended-fab.tertiary.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.tertiary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Extended FAB (tertiary) lowered pressed container elevation |
| `md.comp.extended-fab.tertiary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (tertiary) focus indicator color |
| `md.comp.extended-fab.tertiary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (tertiary) focus indicator thickness |
| `md.comp.extended-fab.tertiary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (tertiary) focus indicator offset |

#### Design Tokens: Extended FAB - Color - Surface

*For surface color extended FABs. Not recommended with expressive extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.surface.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (primary) focus indicator offset |
| `md.comp.extended-fab.surface.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (primary) focus indicator thickness |
| `md.comp.extended-fab.surface.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (primary) focus indicator color |
| `md.comp.extended-fab.surface.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Extended FAB (primary) container surface tint layer color |
| `md.comp.extended-fab.surface.container.shadow-color` | `md.sys.color.shadow` | COLOR | Surface extended FAB container shadow color |
| `md.comp.extended-fab.surface.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (primary) container shape |
| `md.comp.extended-fab.surface.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB (primary) container elevation |
| `md.comp.extended-fab.surface.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Surface extended FAB lowered container elevation |
| `md.comp.extended-fab.surface.container.height` | 56dp | LENGTH | Extended FAB (primary) container height |
| `md.comp.extended-fab.surface.lowered.container.color` | `md.sys.color.surface-container-low` | COLOR | Extended FAB (surface) lowered container color |
| `md.comp.extended-fab.surface.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.surface.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (primary) font |
| `md.comp.extended-fab.surface.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (primary) weight |
| `md.comp.extended-fab.surface.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (primary) size |
| `md.comp.extended-fab.surface.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (primary) height |
| `md.comp.extended-fab.surface.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (primary) tracking |
| `md.comp.extended-fab.surface.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Surface extended FAB lowered focus container elevation |
| `md.comp.extended-fab.surface.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Surface extended FAB focus container elevation |
| `md.comp.extended-fab.surface.focus.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) focus color |
| `md.comp.extended-fab.surface.focus.icon.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) focus icon color |
| `md.comp.extended-fab.surface.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (primary) focus state layer opacity |
| `md.comp.extended-fab.surface.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) focus state layer color |
| `md.comp.extended-fab.surface.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Surface extended FAB lowered hover container elevation |
| `md.comp.extended-fab.surface.hover.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) hover color |
| `md.comp.extended-fab.surface.hover.icon.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) hover icon color |
| `md.comp.extended-fab.surface.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (primary) hover state layer opacity |
| `md.comp.extended-fab.surface.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) hover state layer color |
| `md.comp.extended-fab.surface.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (primary) hover container elevation |
| `md.comp.extended-fab.surface.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) color |
| `md.comp.extended-fab.surface.icon.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) icon color |
| `md.comp.extended-fab.surface.icon.size` | 24dp | LENGTH | Extended FAB (primary) icon size |
| `md.comp.extended-fab.surface.container.color` | `md.sys.color.surface-container-high` | COLOR | Extended FAB (primary) container color |
| `md.comp.extended-fab.surface.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Surface extended FAB lowered pressed container elevation |
| `md.comp.extended-fab.surface.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) pressed color |
| `md.comp.extended-fab.surface.pressed.icon.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) pressed icon color |
| `md.comp.extended-fab.surface.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB (primary) pressed state layer opacity |
| `md.comp.extended-fab.surface.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Extended FAB (primary) pressed state layer color |
| `md.comp.extended-fab.surface.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB (primary) pressed container elevation |

#### Design Tokens: Extended FAB - Color - Secondary

*For secondary color extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.secondary.container.color` | `md.sys.color.secondary` | COLOR | Extended FAB secondary container color |
| `md.comp.extended-fab.secondary.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB secondary container elevation |
| `md.comp.extended-fab.secondary.container.shadow-color` | `md.sys.color.shadow` | COLOR | Extended FAB secondary container shadow color |
| `md.comp.extended-fab.secondary.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary label text color |
| `md.comp.extended-fab.secondary.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary container icon color |
| `md.comp.extended-fab.secondary.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB secondary pressed container elevation |
| `md.comp.extended-fab.secondary.pressed.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary pressed state layer color |
| `md.comp.extended-fab.secondary.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB secondary pressed state layer opacity |
| `md.comp.extended-fab.secondary.pressed.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary pressed label text color |
| `md.comp.extended-fab.secondary.pressed.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary pressed icon color |
| `md.comp.extended-fab.secondary.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB secondary hovered container elevation |
| `md.comp.extended-fab.secondary.hovered.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary hovered state layer color |
| `md.comp.extended-fab.secondary.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB secondary hovered state layer opacity |
| `md.comp.extended-fab.secondary.hovered.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary hovered label text color |
| `md.comp.extended-fab.secondary.hovered.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary hovered icon color |
| `md.comp.extended-fab.secondary.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB secondary focused container elevation |
| `md.comp.extended-fab.secondary.focused.state-layer.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary focused state layer color |
| `md.comp.extended-fab.secondary.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB secondary focused state layer opacity |
| `md.comp.extended-fab.secondary.focused.label-text.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary focused label text color |
| `md.comp.extended-fab.secondary.focused.icon.color` | `md.sys.color.on-secondary` | COLOR | Extended FAB secondary focused icon color |
| `md.comp.extended-fab.secondary.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Secondary extended FAB lowered pressed container elevation |
| `md.comp.extended-fab.secondary.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (secondary) container shape |
| `md.comp.extended-fab.secondary.container.height` | 56dp | LENGTH | Extended FAB (secondary) container height |
| `md.comp.extended-fab.secondary.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Secondary extended FAB lowered container elevation |
| `md.comp.extended-fab.secondary.icon.size` | 24dp | LENGTH | Extended FAB (secondary) icon size |
| `md.comp.extended-fab.secondary.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (secondary) font |
| `md.comp.extended-fab.secondary.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (secondary) height |
| `md.comp.extended-fab.secondary.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (secondary) size |
| `md.comp.extended-fab.secondary.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (secondary) weight |
| `md.comp.extended-fab.secondary.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (secondary) tracking |
| `md.comp.extended-fab.secondary.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (secondary) hover container elevation |
| `md.comp.extended-fab.secondary.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) hover state layer color |
| `md.comp.extended-fab.secondary.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (secondary) hover state layer opacity |
| `md.comp.extended-fab.secondary.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) hover icon color |
| `md.comp.extended-fab.secondary.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) hover color |
| `md.comp.extended-fab.secondary.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Secondary extended FAB lowered hover container elevation |
| `md.comp.extended-fab.secondary.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) focus state layer color |
| `md.comp.extended-fab.secondary.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (secondary) focus state layer opacity |
| `md.comp.extended-fab.secondary.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) focus icon color |
| `md.comp.extended-fab.secondary.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Extended FAB (secondary) focus color |
| `md.comp.extended-fab.secondary.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Secondary extended FAB focus container elevation |
| `md.comp.extended-fab.secondary.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Secondary extended FAB lowered focus container elevation |
| `md.comp.extended-fab.secondary.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.secondary.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (secondary) focus indicator color |
| `md.comp.extended-fab.secondary.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (secondary) focus indicator thickness |
| `md.comp.extended-fab.secondary.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (secondary) focus indicator offset |

#### Design Tokens: Extended FAB - Color - Branded

*For branded color extended FABs. Not recommended with expressive extended FABs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.extended-fab.branded.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Extended FAB (branded) focus indicator offset |
| `md.comp.extended-fab.branded.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Extended FAB (branded) focus indicator thickness |
| `md.comp.extended-fab.branded.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Extended FAB (branded) focus indicator color |
| `md.comp.extended-fab.branded.container.shadow-color` | `md.sys.color.shadow` | COLOR | Branded extended FAB container shadow color |
| `md.comp.extended-fab.branded.container.shape` | `md.sys.shape.corner.large` | SHAPE | Extended FAB (branded) container shape |
| `md.comp.extended-fab.branded.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Extended FAB (branded) container surface tint layer color |
| `md.comp.extended-fab.branded.lowered.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Branded extended FAB lowered container elevation |
| `md.comp.extended-fab.branded.container.height` | 56dp | LENGTH | Extended FAB (branded) container height |
| `md.comp.extended-fab.branded.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB (branded) container elevation |
| `md.comp.extended-fab.branded.lowered.container.color` | `md.sys.color.surface-container-low` | COLOR | Extended FAB (branded) lowered container color |
| `md.comp.extended-fab.branded.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.extended-fab.branded.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Extended FAB (branded) font |
| `md.comp.extended-fab.branded.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Extended FAB (branded) weight |
| `md.comp.extended-fab.branded.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Extended FAB (branded) size |
| `md.comp.extended-fab.branded.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Extended FAB (branded) height |
| `md.comp.extended-fab.branded.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Extended FAB (branded) tracking |
| `md.comp.extended-fab.branded.lowered.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Branded extended FAB lowered focus container elevation |
| `md.comp.extended-fab.branded.focus.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Branded extended FAB focus container elevation |
| `md.comp.extended-fab.branded.focus.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (branded) focus color |
| `md.comp.extended-fab.branded.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Extended FAB (branded) focus state layer opacity |
| `md.comp.extended-fab.branded.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Extended FAB (branded) focus state layer color |
| `md.comp.extended-fab.branded.lowered.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Branded extended FAB lowered hover container elevation |
| `md.comp.extended-fab.branded.hover.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (branded) hover color |
| `md.comp.extended-fab.branded.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Extended FAB (branded) hover state layer opacity |
| `md.comp.extended-fab.branded.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Extended FAB (branded) hover state layer color |
| `md.comp.extended-fab.branded.hover.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Extended FAB (branded) hover container elevation |
| `md.comp.extended-fab.branded.label-text.color` | `md.sys.color.on-surface` | COLOR | Extended FAB (branded) color |
| `md.comp.extended-fab.branded.icon.size` | 36dp | LENGTH | Extended FAB (branded) icon size |
| `md.comp.extended-fab.branded.container.color` | `md.sys.color.surface-container-high` | COLOR | Extended FAB (branded) container color |
| `md.comp.extended-fab.branded.lowered.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Branded extended FAB lowered pressed container elevation |
| `md.comp.extended-fab.branded.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Extended FAB (branded) pressed color |
| `md.comp.extended-fab.branded.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Extended FAB (branded) pressed state layer opacity |
| `md.comp.extended-fab.branded.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Extended FAB (branded) pressed state layer color |
| `md.comp.extended-fab.branded.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Extended FAB (branded) pressed container elevation |


### Baseline colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![3 baseline extended FAB color roles.](https://lh3.googleusercontent.com/Z_RWOWfuQ9kdznoWiL_ox5ol2kDw2Th205LV2FDuX-rbxH3Rb1FZnDcgdSThvYwkuetWn9d2z62KhvWafnAuQ0e_Pwpt99WKFDwe8X6HegxGxA=s2048)

*Caption / Legend:*
Extended FAB color roles used for light and dark schemes:

1. Primary container + shadow
2. On primary container
3. On primary container

#### Additional color mappings

Extended FABs can use other combinations of container and icon colors. The color mappings below provide the same legibility and functionality as the default, so the color mapping you use depends on style alone.

![3 deprecated extended FABs with different container and icon colors.](https://lh3.googleusercontent.com/xbMM1zoCiBMpqJ8DQ-gHGAoRRZ79UMQ5YGIaQyTy66Y5xKkq336JfbSeJzydBNoWJ_ojOQ4O2LfNwOp5SPEFBvASSLg1i1-WW1_he1W705r9rA=s2048)

*Caption / Legend:*
Extended FABs can use different combinations of container and icon colors

### Baseline states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

![4 states of baseline extended FAB.](https://lh3.googleusercontent.com/9NboEFx6AmMw3XNkz0ES2hdV0_-I3cQ50CSV64-QsxrOzwZO38CynMks9fxg3wvvq6GSZAQnWv1R-opDSxGpXn1O9g9PHbkKu-ah-ppXsEXa=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered
3. Focused
4. Pressed

### Baseline measurements

![Margins of baseline extended FAB.](https://lh3.googleusercontent.com/60hw0Nm5mZX8sW8xBY_eU64kA2Ju_GszCM_g9H5tr_aDrtbv_7lq2939sVn0QF8aZfjIrSoz9dUBK3EDw96wDCoQn8XEPoAqrwF_JPTZu3JZ=s1004)

*Caption / Legend:*
Extended FABs have a padding of 16dp

![Size of baseline extended FAB while on screen.](https://lh3.googleusercontent.com/oOjTBewuhKfDILRyn0mW8Y_Qv5I9nnTgLUnNJEwEARSu_ocixeZ9V2CTUmz5fjkT8G04_iXPUQWdMq3qFHG7deqTR5G8nXh8SxWqipbdWWdoQw=s1004)

*Caption / Legend:*
Extended FAB height, width, and icon size

| Attribute | Value |
| --- | --- |
| Container height | 56dp |
| Container width | Dynamic, 80dp min |
| Container shape | 16dp corner radius |
| Icon size | 24dp |
| Padding | 16dp |

## Guidelines

![Vibrant extended FAB on an email screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfvsl8-01.png?alt=media)

*Caption / Legend:*
Extended FABs are more prominent than regular FABs

## Usage

Use an extended FAB on screens with long, scrolling views that require persistent access to an action, such as a checkout screen.

Use it when label text helps understand the main action, or to add further emphasis to the button.

![A centered extended FAB is used to check out in a shopping app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfxjts-02.png?alt=media)

*Caption / Legend:*
Extended FABs ensure the main action is visible at all times

![Extended FAB on an article with lots of body content to publish that article.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfymif-03.png?alt=media)

*Caption / Legend:*
Use an extended FAB to provide constant access to a primary action above long-scrolling surface content

![Extended FAB on a task list to create a new task.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dfzjai-04.png?alt=media)

*Caption / Legend:*
Use an extended FAB to emphasize a page’s primary action

### Additional emphasis

The extended FAB can provide more emphasis and clarity to a product’s primary action.

Since it has room for both a text label and icon, the extended FAB can be effective where an icon alone is ambiguous. However, the relationship between an extended FAB's icon and label should be clear.

![Extended FAB labeled “find flights” with an airplane icon, which would be unclear on its own.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg2hbe-05.png?alt=media)

*Caption / Legend:*
An extended FAB can be effective where an icon alone is too vague

Like the regular FAB, only one extended FAB should be used per screen.

Multiple FABs compete for attention.

If additional high-level actions are required, consider adding more buttons elsewhere on the page.

![An extended FAB used on a screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg63ur-06.png?alt=media)

*Caption / Legend:*
Only show one prominent action at a time with the extended FAB

![2 extended FABs used on 1 screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg6za4-07.png?alt=media)

*Caption / Legend:*
Don’t use multiple extended FABs in one screen as it disrupts visual hierarchy

The extended FAB shouldn't be used as an option in a set of actions.

Instead, use filled buttons for a similar level of emphasis.

![Filled button labeled “finish setup” next to a “back” button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dg9f6o-08.png?alt=media)

*Caption / Legend:*
Use a button with appropriate styling to emphasize it in a group of buttons

![Extended FAB labeled “finish setup” next to a “back” button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgacb3-09.png?alt=media)

*Caption / Legend:*
Don’t use the extended FAB to convey an option in a set of actions

### Choosing a size

There are three variants of extended FABs: small, medium, and large.

Choose an appropriately-sized extended FAB to add the right amount of emphasis for an action.

In compact windows with one prominent action, the large extended FAB can be appropriate.

In larger breakpoints, use a medium or large extended FAB.

![1 large, 1 medium, and 1 small extended FAB on 3 different screen sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhk1cf-10.png?alt=media)

*Caption / Legend:*
There are three sizes of extended FABs

## Anatomy

![3 extended FAB elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhlqdv-11.png?alt=media)

*Caption / Legend:*
1. Container
2. Label text
3. Icon (optional)

### Container

The extended FAB container is a rounded rectangle that hugs its contents.

The extended FAB grows and shrinks with text length.

![Fixed-width extended FAB, centered, ignoring layout grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhmym8-12.png?alt=media)

*Caption / Legend:*
The extended FAB container hugs the icon and text

### Icon (optional)

An extended FAB's icon should intuitively represent its action.

![Extended FAB without an icon, labeled “Save draft”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgr1oq-13.png?alt=media)

*Caption / Legend:*
Unlike standard FABs, extended FABs don't require an icon

![Extended FAB with icon only, with no label text. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e6c0j7-14.png?alt=media)

*Caption / Legend:*
An extended FAB can't have an icon without a text label

### Label text

The extended FAB’s label should clearly describe its action.

Use 1–2 words at most. Keep in mind that localization may increase the amount of characters and width of the extended FAB.

![Extended FAB with short text “Save”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhs8b9-15.png?alt=media)

*Caption / Legend:*
Shorten the text as much as needed. Include an icon for additional context.

![Extended FAB with wrapping text “Save draft in folder”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dhtaim-16.png?alt=media)

*Caption / Legend:*
Avoid wrapping or truncating text

## Placement

![Extended FAB placed above navigation bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0di65x4-17.png?alt=media)

*Caption / Legend:*
Place the extended FAB above the rest of the UI, off of elements like app bars

![Extended FAB overlaid on a docked toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0di94u1-18.png?alt=media)

*Caption / Legend:*
Don’t place the extended FAB on top of toolbars. It disrupts the consistency of the elevation and surface layers.

![Extended FAB below an app bar at the top of a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dia4hb-19.png?alt=media)

*Caption / Legend:*
Don’t place the extended FAB in the upper half of a mobile screen, as it disrupts the reading of the UI

![An extended FAB labeled "Confirm" on a dialog to "Confirm your location".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dib69h-20.png?alt=media)

*Caption / Legend:*
Don’t place extended FABs on cards or inside other containers

Avoid putting other floating components, like the floating toolbar, on screen with the extended FAB.

![The extended FAB is next to a floating toolbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dif190-21.png?alt=media)

*Caption / Legend:*
Floating toolbars can be paired with FABs, but not extended FABs

## Responsive layout

The FAB and extended FAB can transform into each other depending on available space and layout.

In a collapsed navigation rail, a FAB would be used. When the rail is expanded, the FAB can transform into an extended FAB.

![Example of extended FAB transforming into standard FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djhpqm-23.png?alt=media)

*Caption / Legend:*
When space is limited, an extended FAB can transform into a FAB

### Right-to-left languages

Extended FABs should mirror their elements in right-to-left (RTL) languages.

![Extended FAB in a left-to-right language placed at the bottom right of a screen. The icon is to the left of the text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djk489-24.png?alt=media)

*Caption / Legend:*
Icons should be placed to the left of labels for left-to-right (LTR) languages

![Extended FAB in a right-to-left language placed at the bottom left of a screen. The icon is to the right of the text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djl493-25.png?alt=media)

*Caption / Legend:*
Icons should be placed to the right of labels for RTL languages

### Breakpoints

In compact and medium breakpoints, the extended FAB should be placed at the bottom of the screen, either center-aligned or aligned to the trailing edge of the window.

![Extended FAB center-aligned on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djn9nf-26.png?alt=media)

*Caption / Legend:*
The extended FAB can be center-aligned

![Extended FAB right-aligned on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djo3i8-27.png?alt=media)

*Caption / Legend:*
The extended FAB can be aligned to the trailing edge of the window

In expanded and larger breakpoints, the extended FAB should appear either:

- At the bottom right edge of the window, in both LTR and RTL languages
- Within the navigation rail

![Extended FAB at bottom right of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djp9q0-28.png?alt=media)

*Caption / Legend:*
The extended FAB can be right-aligned in both LTR and RTL languages

![Extended FAB in navigation drawer.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djqcsu-29.png?alt=media)

*Caption / Legend:*
The extended FAB can be at the top of the expanded navigation rail

## Behavior

### Appearing

The extended FAB surface expands when appearing on screen using an [enter and exit](/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition pattern.

### Expanding

The extended FAB can expand and adapt to any shape using a [container transform](/m3/pages/motion-transitions/transition-patterns) transition pattern.

This includes a surface that is part of the app structure, or a surface that spans the entire screen.

### Transforming

The extended FAB can transform into a FAB on scroll to temporarily take up less space on screen.

### Scrolling

The extended FAB can transform into a FAB when scrolling down, and back to an extended FAB when scrolling up.

When the FAB switches to an extended FAB, the following transitions occur:

- The FAB shape changes
- FAB icon moves to the left
- FAB text label fades in

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate to and activate the extended FAB

## Interaction & style

To make it easier for users of screen readers to reach a primary action such as an extended FAB, consider placing the action in the upper left region of large web screens, like in an expanded navigation rail.

In smaller windows, the best place for the extended FAB is the lower right corner of a screen.

![On a large screen, the Compose FAB is placed on the upper left region in an email app with the expanded window on the right.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0e5baky-01.png?alt=media)

*Caption / Legend:*
Extended FABs can be placed in the expanded navigation rail

![In a compact window, the Compose FAB is placed on the lower right region in an email app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmgu83-02.png?alt=media)

*Caption / Legend:*
Place extended FABs in an easy-to-reach place that doesn’t obstruct other actions

![In a compact window, the Compose FAB is overlapping other buttons in an email app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmhng1-03.png?alt=media)

*Caption / Legend:*
Don’t place extended FABs over another actionable element

## Initial focus

Ensure the extended FAB is prioritized in the overall focus order to create an efficient experience for people who navigate UIs with assistive tech.

On mobile, the focus order may start with the app bar, move to the navigation bar, and then skip past any other content on the page to land on the extended FAB.

When using an extended FAB, both the visible label and icon should be treated as one focusable element. The extended FAB doesn’t need a tooltip because it already has a visible label.

![A focused extended FAB in the lower right region of a mobile screen. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmis8z-04.png?alt=media)

*Caption / Legend:*
Ensure extended FABs get focus when navigating with assistive technology

![A focused extended FAB with a tooltip matching the text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmjod6-05.png?alt=media)

*Caption / Legend:*
Tooltips aren’t required since the extended FAB has label text

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Moves focus to the extended FAB |
| **Space **or **Enter** | Activates the extended FAB |

## Labeling elements

To ensure the action is clear, use consistent icons and text labels, such as a **Compos****e **icon with a **Compose** text label.

The icon and text label combination should have one distinct purpose.

The accessibility label must include the same first word as the visible label. For example, if the visible button is **Create**, then the accessibility label might say **Create a new invite**.

![Accessibility labels of an extended FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dmmjzu-06.png?alt=media)

*Caption / Legend:*
The accessibility label reads **Compose **to match the extended FAB's displayed label
