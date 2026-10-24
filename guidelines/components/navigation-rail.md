# Navigation rail

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/navigation-rail](https://m3.material.io/components/navigation-rail)
> Last Updated: 2026-07-24T07:30:37.949Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use navigation rails in medium, expanded, large, or extra-large window sizes
- Can contain 3-7 destinations plus an optional FAB
- Always put the rail in the same place, even on different screens of an app

## Availability & resources

## M3 Expressive update

**May 2025**

A **collapsed** and **expanded** navigation rail have been introduced to replace the baseline nav rail. The expanded nav rail is meant to replace the navigation drawer. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- The baseline **navigation rail** is no longer recommended
- Added two wider navigation rails:

- **Collapsed:** replaces baseline nav rail
- **Expanded**: replaces navigation drawer

Configurations:

- Expanded rail modality:

- Non-modal
- Modal
- Expanded behavior:

- Transition to collapsed navigation rail
- Hide when collapsed
- Color:

- Active label on vertical items changed from **on surface variant** to **secondary **

![A collapsed and expanded navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fsz2c4-2.png?alt=media)

*Caption / Legend:*
The collapsed and expanded navigation rails match visually and can transition into each other

## Differences from M2

- Behavior: Predictive back interaction
- Color: New color mappings and compatibility with dynamic color
- States: The active destination can be indicated with a pill shape in a contrasting color

![M2 navigation rail with 1 colored and filled icon showing the active state and 3 inactive icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dtdapc-3.png?alt=media)

*Caption / Legend:*
M2: The navigation rail uses icon color, weight, and fill to communicate which destination is active

![M3 navigation rail with 1 icon surrounded by a pill shape in contrasting color to show the active state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fszcgl-4.png?alt=media)

*Caption / Legend:*
M3: The navigation rail uses a pill-shaped active indicator to communicate which destination is active

## Specs

## Variants

![2 variants of navigation rails.](https://lh3.googleusercontent.com/iQ9mPuq7sZfsnSF_EfYMxQdypYp9K_fDEGHm0-4zuKdHXU48Kf7zItSC0hxmu3QW_ugdX67kQeQlrkgs7GzF6Kpo1FFERw1SFlVd6DCQC5gm=s2048)

*Caption / Legend:*
1. Collapsed navigation rail
2. Expanded navigation rail

### Baseline variants

The baseline navigation rail is no longer recommended, and should be replaced by the collapsed navigation rail. [View baseline tokens](/m3/pages/navigation-rail/specs#d4d97764-20ec-496f-a6f3-0d423940ec5a)

![Baseline navigation rail.](https://lh3.googleusercontent.com/_GDghBF084KxFoboNpBiBukL7eC9btnn0Mb6Jk_768f3C75CzUZ_lS1sJyKteHLGeR2sa__sSE-baRgcdfAxgBR3jxoUV13DucOJj2FXrDM=s2048)

*Caption / Legend:*
1. The baseline navigation rail is no longer recommended

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Collapsed navigation rail | -- | Available |
| Expanded navigation rail | -- | Available |
| Navigation rail (baseline) | Available | Not recommended. Use **collapsed navigation rail**. |

## Configurations

![Standard and modal layouts of navigation rail.](https://lh3.googleusercontent.com/Q6opw4o2Z-4QOi0ydyk2R1MLywKayfVfAMWjKN6nvzz6OZzoJOGsl_BvoY_XaQp0dSV2iH4gwgEJ0tYqAXEKQKJy1Gko4-M5s1umRBx2MaHD=s2048)

*Caption / Legend:*
1. Expanded layout: standard
2. Expanded layout: modal

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Expanded layout | Standard (default) | Available as navigation drawer | Available |
| Modal | Available as navigation drawer | Available |  |
| Expanded behavior | Hide when collapsed | -- | Available |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: Nav rail - Common

*Common tokens for nav rail.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.active.indicator.color` | `md.sys.color.secondary-container` | COLOR | Nav rail item active indicator color |
| `md.comp.nav-rail.item.active.label-text.color` | `md.sys.color.secondary` | COLOR | Nav rail item active label text color |
| `md.comp.nav-rail.item.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Nav rail item inactive label text color |
| `md.comp.nav-rail.item.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active icon color |
| `md.comp.nav-rail.item.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Nav rail item inactive icon color |
| `md.comp.nav-rail.item.active.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active hovered state layer color |
| `md.comp.nav-rail.item.inactive.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item inactive hovered state layer color |
| `md.comp.nav-rail.item.active.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active focused state layer color |
| `md.comp.nav-rail.item.inactive.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item inactive focused state layer color |
| `md.comp.nav-rail.item.active.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active pressed state layer color |
| `md.comp.nav-rail.item.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item inactive pressed state layer color |
| `md.comp.nav-rail.item.active.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Nav rail item active hovered state layer opacity |
| `md.comp.nav-rail.item.active.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Nav rail item active focused state layer opacity |
| `md.comp.nav-rail.item.active.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Nav rail item active pressed state layer opacity |

#### Design Tokens: Nav rail - Collapsed

*For collapsed nav rail.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.collapsed.container.color` | `md.sys.color.surface` | COLOR | Nav rail collapsed container color |
| `md.comp.nav-rail.collapsed.item.vertical-space` | `md.sys.measurement.space50` | LENGTH | Nav rail collapsed item vertical space |
| `md.comp.nav-rail.collapsed.container.width` | 96dp | LENGTH | Nav rail collapsed container width |
| `md.comp.nav-rail.collapsed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Nav rail collapsed container elevation |
| `md.comp.nav-rail.collapsed.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav rail collapsed container shape |
| `md.comp.nav-rail.collapsed.top-space` | 44dp | LENGTH | Nav rail collapsed item top space |
| `md.comp.nav-rail.collapsed.narrow.container.width` | 80dp | LENGTH | Nav rail collapsed narrow container width |

#### Design Tokens: Nav rail - Expanded

*For expanded nav rail.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.expanded.modal.container.color` | `md.sys.color.surface-container` | COLOR | Nav rail expanded modal container color |
| `md.comp.nav-rail.expanded.container.color` | `md.sys.color.surface` | COLOR | Nav rail expanded container color |
| `md.comp.nav-rail.expanded.modal.container.shape` | `md.sys.shape.corner.large` | SHAPE | Nav rail expanded modal container shape |
| `md.comp.nav-rail.expanded.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav rail expanded container shape |
| `md.comp.nav-rail.expanded.vertical.trailing-space` | 20dp | LENGTH | Nav rail expanded vertical trailing space |
| `md.comp.nav-rail.expanded.between-item-space` | undefineddp | LENGTH | Nav rail expanded between item space |
| `md.comp.nav-rail.expanded.container.width.minimum` | 220dp | LENGTH | Nav rail expanded container width minimum |
| `md.comp.nav-rail.expanded.container.width.maximum` | 360dp | LENGTH | Nav rail expanded container width maximum |
| `md.comp.nav-rail.expanded.top-space` | 44dp | LENGTH | Nav rail expanded top space |
| `md.comp.nav-rail.expanded.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Nav rail expanded container elevation |
| `md.comp.nav-rail.expanded.modal.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Nav rail expanded modal container elevation |

#### Design Tokens: Nav rail item - Common

*Common tokens for all nav items.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.icon.size` | 24dp | LENGTH | Nav rail item icon size |
| `md.comp.nav-rail.item.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Nav rail item active indicator shape |
| `md.comp.nav-rail.item.active-indicator.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item active indicator leading space |
| `md.comp.nav-rail.item.active-indicator.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Nav rail item active indicator icon label space |
| `md.comp.nav-rail.item.active-indicator.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item active indicator trailing space |
| `md.comp.nav-rail.item.container.height` | 64dp | LENGTH | Nav rail item container height |
| `md.comp.nav-rail.item.container.vertical-space` | `md.sys.measurement.space75` | LENGTH | Nav rail item container vertical space |
| `md.comp.nav-rail.item.header-space-minimum` | `md.sys.measurement.space500` | LENGTH | Nav rail item header space minimum |
| `md.comp.nav-rail.item.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav rail item container shape |
| `md.comp.nav-rail.item.short.container.height` | 56dp | LENGTH | Nav rail item short container height |

#### Design Tokens: Nav rail item - Vertical

*For vertical nav rail items, where elements are stacked. *

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.vertical.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item vertical icon trailing space |
| `md.comp.nav-rail.item.vertical.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item vertical icon leading-space |
| `md.comp.nav-rail.item.vertical.active-indicator.height` | 32dp | LENGTH | Nav rail item vertical active indicator height |
| `md.comp.nav-rail.item.vertical.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Nav rail item vertical icon label space |
| `md.comp.nav-rail.item.vertical.label-text.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | Nav rail item vertical label text |
| `md.comp.nav-rail.item.vertical.active-indicator.width` | 56dp | LENGTH | Nav rail item vertical active indicator width |

#### Design Tokens: Nav rail item - Horizontal

*For horizontal nav rail items, where elements are side-by-side.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.horizontal.label-text.font` | `md.sys.typescale.label-large` | TYPOGRAPHY | Nav rail item horizontal label text |
| `md.comp.nav-rail.item.horizontal.active-indicator.height` | 56dp | LENGTH | Nav rail item horizontal active indicator height |
| `md.comp.nav-rail.item.horizontal.full-width.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item horizontal full width leading space |
| `md.comp.nav-rail.item.horizontal.full-width.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item horizontal full width trailing space |
| `md.comp.nav-rail.item.horizontal.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Nav rail item horizontal icon-label-space |


## Anatomy

![9 elements of collapsed and expanded navigation rails.](https://lh3.googleusercontent.com/zju3SaKNZtIg8oswdNqjqbU2pgzAazbfcyzRL_wo1UneMQSp9D6yIVFbPDeEtmh09MwYuYYHofz5j6DGbwBVO9cBdpqUxwJehXqI242Tz80bUg=s2048)

*Caption / Legend:*
Collapsed and expanded navigation rail elements:

1. Container
2. Menu (optional)
3. FAB or Extended FAB (optional)
4. Icon
5. Active indicator
6. Label text
7. Large badge (optional)
8. Large badge label (optional)
9. Small badge (optional)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Color roles of 9 elements of collapsed and expanded navigation rails in light and dark color schemes.](https://lh3.googleusercontent.com/d3PlE8MkpZrvAvwFNjnOiUQXi8R7ep0qmhurwSRvAq_yf3Eb44NIbzr78sGxD1gNgCLxhWdlVv_Mti8eRMPEi3Nn0WQRUnjZNO_XRFQt6Yan=s2048)

*Caption / Legend:*
Navigation rail color roles used for light and dark schemes:

1. Surface container (optional)
2. On secondary container
3. Secondary container
4. Secondary (vertical), On secondary container (horizontal)
5. On surface variant
6. On surface variant
7. Error
8. On error
9. Error

## States

States are visual representations used to communicate the status of a component or an interactive element.

The navigation item’s target area always spans the full width of the nav rail, even if the item container hugs its contents.

![4 states of collapsed navigation rails.](https://lh3.googleusercontent.com/1IxCo2XIMga54ROSNhrWET0gIRcndin6fwUN_DdJMu2VZ4PFpdW1-c-vio2nIOXxmj3p_tGkbBc1N0KGdzg6iuqMCS1_ZsgFG1FfzS6Fppk=s2048)

![4 states of expanded navigation rails.](https://lh3.googleusercontent.com/uvOYTNSaWtfWdqdoR0tVR9eCjmd4f-AEfdMVEacZJc0VwURGK8_8FeAvzOY4Kr3sV9YzZfIF-gguMC8haBwaeJB7tgykjwBvSFhlQtuC4AzahA=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered
3. Focused
4. Pressed

## Measurements

![Padding and measurements for expanded and collapsed navigation rails.](https://lh3.googleusercontent.com/RTqY8bTqiMpwcsU_pJkWy9rMeFIjRoSs3m15t8w64kdPnvtTTTE6_Dklo68o5dm4vNj_CA14xM6FrVZkyBtYlf4hcPjBAMOTQ3rvBDY60BrmGw=s2048)

*Caption / Legend:*
Navigation rail padding and size measurements

## Common layouts

![4 common layouts of collapsed navigation rail.](https://lh3.googleusercontent.com/Q7TK1on1e6Srj9rXvfTaKHDKgYKSh07xaPRGq0zatThZiQkiwf-UMR1-H60g1esYikZSHRedr3h-lkPoU4ICPljobiH8pOBRjSINWIs7ANcD=s2048)

![4 common layouts of expanded navigation rail.](https://lh3.googleusercontent.com/z_uzDW3EjZiO_WRnWUJem6qKFygJFreR0EX_C_F4b4gyUdaq1KV9KFpJqgJpBWstqQ1O-CdNp0N6b7mAK8Xp6CkIKHupoRyeHFQkqfLEpnI=s2048)

*Caption / Legend:*
1. Three navigation items
2. Three navigation items with a menu
3. Three navigation items with a FAB
4. Three navigation items with a menu and FAB

## Baseline navigation rail

![8 elements of baseline navigation rail.](https://lh3.googleusercontent.com/ADBFvMHXuRRv0_6Z-N3tRHlMrh88FQQszAdMrNhAM-p2IdU_v8QQRA0cezT6n2vPpVmhQ7R8saOYcTsI1okUonFMqT8GzmCfjymxB9hHPv8=s2048)

*Caption / Legend:*
1. Container
2. Menu icon (optional)
3. Icon
4. Active indicator
5. Label text
6. Large badge label (optional)
7. Large badge (optional)
8. Badge (optional)

### Tokens & specs

#### Design Tokens: Navigation rail (baseline)

*For baseline navigation rails. For expressive, use all nav rail token sets`md.comp.nav-rail` and corresponding `.collapsed` and `.item` token sets.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.navigation-rail.menu.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation rail menu pressed icon color |
| `md.comp.navigation-rail.menu.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Navigation rail menu pressed state layer opacity |
| `md.comp.navigation-rail.menu.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail menu pressed state layer color |
| `md.comp.navigation-rail.menu.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation rail menu focus icon color |
| `md.comp.navigation-rail.menu.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Navigation rail menu focus state layer opacity |
| `md.comp.navigation-rail.menu.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail menu focus state layer color |
| `md.comp.navigation-rail.menu.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation rail menu hover icon color |
| `md.comp.navigation-rail.menu.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Navigation rail menu hover state layer opacity |
| `md.comp.navigation-rail.menu.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail menu hover state layer color |
| `md.comp.navigation-rail.menu.icon.size` | 24dp | LENGTH | Navigation rail menu icon size |
| `md.comp.navigation-rail.menu.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation rail menu icon color |
| `md.comp.navigation-rail.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.navigation-rail.label-text.font` | `md.sys.typescale.label-medium.font` | FONT_NAMES | Navigation rail label font |
| `md.comp.navigation-rail.label-text.weight` | `md.sys.typescale.label-medium.weight` | FONT_WEIGHT | Navigation rail label weight |
| `md.comp.navigation-rail.label-text.size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Navigation rail label size |
| `md.comp.navigation-rail.label-text.line-height` | `md.sys.typescale.label-medium.line-height` | LINE_HEIGHT | Navigation rail label line height |
| `md.comp.navigation-rail.label-text.tracking` | `md.sys.typescale.label-medium.tracking` | FONT_TRACKING | Navigation rail label tracking |
| `md.comp.navigation-rail.label-text.letter-spacing` | `md.sys.typescale.label-medium.tracking` | FONT_TRACKING | Navigation rail label letter spacing |
| `md.comp.navigation-rail.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation rail label inactive text color |
| `md.comp.navigation-rail.active.label-text.weight` | `md.sys.typescale.label-medium.weight.prominent` | FONT_WEIGHT | Navigation rail active label weight |
| `md.comp.navigation-rail.label-text.font-size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Navigation rail label font size |
| `md.comp.navigation-rail.active.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail label active text color |
| `md.comp.navigation-rail.label-text.font-family` | `md.sys.typescale.label-medium.font` | FONT_NAMES | Navigation rail label font family |
| `md.comp.navigation-rail.large-badge-label.color` | `md.sys.color.on-error` | COLOR | Navigation rail large badge label color |
| `md.comp.navigation-rail.large-badge-label.type` | - | TYPOGRAPHY | Navigation rail large badge label type style |
| `md.comp.navigation-rail.large-badge-label.font` | `md.sys.typescale.label-small.font` | FONT_NAMES | Navigation rail large badge label font |
| `md.comp.navigation-rail.large-badge-label.weight` | `md.sys.typescale.label-small.weight` | FONT_WEIGHT | Navigation rail large badge label weight |
| `md.comp.navigation-rail.large-badge-label.size` | `md.sys.typescale.label-small.size` | FONT_SIZE | Navigation rail large badge label size |
| `md.comp.navigation-rail.large-badge-label.line-height` | `md.sys.typescale.label-small.line-height` | LINE_HEIGHT | Navigation rail large badge label line height |
| `md.comp.navigation-rail.large-badge-label.tracking` | `md.sys.typescale.label-small.tracking` | FONT_TRACKING | Navigation rail large badge label tracking |
| `md.comp.navigation-rail.large-badge.color` | `md.sys.color.error` | COLOR | Navigation rail large badge color |
| `md.comp.navigation-rail.large-badge.shape` | - | SHAPE | Navigation rail large badge shape |
| `md.comp.navigation-rail.large-badge.size` | 16dp | LENGTH | Navigation rail large badge size |
| `md.comp.navigation-rail.badge.shape` | - | SHAPE | Navigation rail badge shape |
| `md.comp.navigation-rail.badge.size` | 6dp | LENGTH | Navigation rail badge size |
| `md.comp.navigation-rail.badge.color` | `md.sys.color.error` | COLOR | Navigation rail badge color |
| `md.comp.navigation-rail.large-badge-label.font-family` | `md.sys.typescale.label-small.font` | FONT_NAMES | Navigation rail large badge label font family |
| `md.comp.navigation-rail.inactive.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive focus label text color |
| `md.comp.navigation-rail.active.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail focus label text color |
| `md.comp.navigation-rail.inactive.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive focus icon color |
| `md.comp.navigation-rail.active.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation rail active focus icon color |
| `md.comp.navigation-rail.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Navigation rail active focus state layer color |
| `md.comp.navigation-rail.inactive.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive focus state layer color |
| `md.comp.navigation-rail.active.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail active focus state layer color |
| `md.comp.navigation-rail.inactive.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive hover label text color |
| `md.comp.navigation-rail.active.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail active hover label text color |
| `md.comp.navigation-rail.inactive.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive hover icon color |
| `md.comp.navigation-rail.active.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation rail active hover icon color |
| `md.comp.navigation-rail.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Navigation rail hover state layer opacity |
| `md.comp.navigation-rail.inactive.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive hover state layer color |
| `md.comp.navigation-rail.active.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail active hover state layer color |
| `md.comp.navigation-rail.active-indicator.width` | 56dp | LENGTH | Navigation rail active indicator width |
| `md.comp.navigation-rail.no-label.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Navigation rail no label active indicator shape |
| `md.comp.navigation-rail.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Navigation rail active indicator shape |
| `md.comp.navigation-rail.no-label.active-indicator.height` | 56dp | LENGTH | Navigation rail no label active indicator height |
| `md.comp.navigation-rail.active-indicator.height` | 32dp | LENGTH | Navigation rail active indicator height |
| `md.comp.navigation-rail.active-indicator.color` | `md.sys.color.secondary-container` | COLOR | Navigation rail active indicator color |
| `md.comp.navigation-rail.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation rail inactive icon color |
| `md.comp.navigation-rail.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation rail active icon color |
| `md.comp.navigation-rail.icon.size` | 24dp | LENGTH | Navigation rail icon size |
| `md.comp.navigation-rail.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Navigation rail container elevation |
| `md.comp.navigation-rail.container.width` | 80dp | LENGTH | Navigation rail container width |
| `md.comp.navigation-rail.container.shape` | `md.sys.shape.corner.none` | SHAPE | Navigation rail container shape |
| `md.comp.navigation-rail.container.color` | `md.sys.color.surface` | COLOR | Navigation rail container color |
| `md.comp.navigation-rail.inactive.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive pressed label text color |
| `md.comp.navigation-rail.active.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation rail active pressed label text color |
| `md.comp.navigation-rail.inactive.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive pressed icon color |
| `md.comp.navigation-rail.active.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation rail active pressed icon color |
| `md.comp.navigation-rail.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Navigation rail pressed state layer opacity |
| `md.comp.navigation-rail.inactive.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail inactive pressed state layer color |
| `md.comp.navigation-rail.active.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation rail active pressed state layer color |

#### Design Tokens: Nav rail item - Horizontal

*For horizontal nav rail items, where elements are side-by-side.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.horizontal.label-text.font` | `md.sys.typescale.label-large` | TYPOGRAPHY | Nav rail item horizontal label text |
| `md.comp.nav-rail.item.horizontal.active-indicator.height` | 56dp | LENGTH | Nav rail item horizontal active indicator height |
| `md.comp.nav-rail.item.horizontal.full-width.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item horizontal full width leading space |
| `md.comp.nav-rail.item.horizontal.full-width.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item horizontal full width trailing space |
| `md.comp.nav-rail.item.horizontal.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Nav rail item horizontal icon-label-space |

#### Design Tokens: Nav rail item - Common

*Common tokens for all nav items.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.icon.size` | 24dp | LENGTH | Nav rail item icon size |
| `md.comp.nav-rail.item.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Nav rail item active indicator shape |
| `md.comp.nav-rail.item.active-indicator.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item active indicator leading space |
| `md.comp.nav-rail.item.active-indicator.icon-label-space` | `md.sys.measurement.space100` | LENGTH | Nav rail item active indicator icon label space |
| `md.comp.nav-rail.item.active-indicator.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item active indicator trailing space |
| `md.comp.nav-rail.item.container.height` | 64dp | LENGTH | Nav rail item container height |
| `md.comp.nav-rail.item.container.vertical-space` | `md.sys.measurement.space75` | LENGTH | Nav rail item container vertical space |
| `md.comp.nav-rail.item.header-space-minimum` | `md.sys.measurement.space500` | LENGTH | Nav rail item header space minimum |
| `md.comp.nav-rail.item.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav rail item container shape |
| `md.comp.nav-rail.item.short.container.height` | 56dp | LENGTH | Nav rail item short container height |

#### Design Tokens: Nav rail - Common

*Common tokens for nav rail.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.active.indicator.color` | `md.sys.color.secondary-container` | COLOR | Nav rail item active indicator color |
| `md.comp.nav-rail.item.active.label-text.color` | `md.sys.color.secondary` | COLOR | Nav rail item active label text color |
| `md.comp.nav-rail.item.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Nav rail item inactive label text color |
| `md.comp.nav-rail.item.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active icon color |
| `md.comp.nav-rail.item.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Nav rail item inactive icon color |
| `md.comp.nav-rail.item.active.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active hovered state layer color |
| `md.comp.nav-rail.item.inactive.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item inactive hovered state layer color |
| `md.comp.nav-rail.item.active.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active focused state layer color |
| `md.comp.nav-rail.item.inactive.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item inactive focused state layer color |
| `md.comp.nav-rail.item.active.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item active pressed state layer color |
| `md.comp.nav-rail.item.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Nav rail item inactive pressed state layer color |
| `md.comp.nav-rail.item.active.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Nav rail item active hovered state layer opacity |
| `md.comp.nav-rail.item.active.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Nav rail item active focused state layer opacity |
| `md.comp.nav-rail.item.active.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Nav rail item active pressed state layer opacity |

#### Design Tokens: Nav rail - Collapsed

*For collapsed nav rail.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.collapsed.container.color` | `md.sys.color.surface` | COLOR | Nav rail collapsed container color |
| `md.comp.nav-rail.collapsed.item.vertical-space` | `md.sys.measurement.space50` | LENGTH | Nav rail collapsed item vertical space |
| `md.comp.nav-rail.collapsed.container.width` | 96dp | LENGTH | Nav rail collapsed container width |
| `md.comp.nav-rail.collapsed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Nav rail collapsed container elevation |
| `md.comp.nav-rail.collapsed.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav rail collapsed container shape |
| `md.comp.nav-rail.collapsed.top-space` | 44dp | LENGTH | Nav rail collapsed item top space |
| `md.comp.nav-rail.collapsed.narrow.container.width` | 80dp | LENGTH | Nav rail collapsed narrow container width |

#### Design Tokens: Nav rail - Expanded

*For expanded nav rail.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.expanded.modal.container.color` | `md.sys.color.surface-container` | COLOR | Nav rail expanded modal container color |
| `md.comp.nav-rail.expanded.container.color` | `md.sys.color.surface` | COLOR | Nav rail expanded container color |
| `md.comp.nav-rail.expanded.modal.container.shape` | `md.sys.shape.corner.large` | SHAPE | Nav rail expanded modal container shape |
| `md.comp.nav-rail.expanded.container.shape` | `md.sys.shape.corner.none` | SHAPE | Nav rail expanded container shape |
| `md.comp.nav-rail.expanded.vertical.trailing-space` | 20dp | LENGTH | Nav rail expanded vertical trailing space |
| `md.comp.nav-rail.expanded.between-item-space` | undefineddp | LENGTH | Nav rail expanded between item space |
| `md.comp.nav-rail.expanded.container.width.minimum` | 220dp | LENGTH | Nav rail expanded container width minimum |
| `md.comp.nav-rail.expanded.container.width.maximum` | 360dp | LENGTH | Nav rail expanded container width maximum |
| `md.comp.nav-rail.expanded.top-space` | 44dp | LENGTH | Nav rail expanded top space |
| `md.comp.nav-rail.expanded.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Nav rail expanded container elevation |
| `md.comp.nav-rail.expanded.modal.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Nav rail expanded modal container elevation |

#### Design Tokens: Nav rail item - Vertical

*For vertical nav rail items, where elements are stacked. *

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.nav-rail.item.vertical.trailing-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item vertical icon trailing space |
| `md.comp.nav-rail.item.vertical.leading-space` | `md.sys.measurement.space200` | LENGTH | Nav rail item vertical icon leading-space |
| `md.comp.nav-rail.item.vertical.active-indicator.height` | 32dp | LENGTH | Nav rail item vertical active indicator height |
| `md.comp.nav-rail.item.vertical.icon-label-space` | `md.sys.measurement.space50` | LENGTH | Nav rail item vertical icon label space |
| `md.comp.nav-rail.item.vertical.label-text.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | Nav rail item vertical label text |
| `md.comp.nav-rail.item.vertical.active-indicator.width` | 56dp | LENGTH | Nav rail item vertical active indicator width |


### Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![8 color roles of baseline navigation rail.](https://lh3.googleusercontent.com/bYdm_ngSm_bDBlh7cCiignDkbte5hHytBrpjYGp_9BfBLH1hF2zPxV-Oqdm6nn8fSHRROojsHBUwN5etdowcM8IHoq2XH1Qy7rRFtshsl5ca=s2048)

*Caption / Legend:*
Navigation rail color roles used for light and dark themes:

1. On secondary container
2. Secondary container
3. On surface
4. On surface variant
5. On surface variant
6. Error
7. On error
8. Error

### States

States are visual representations used to communicate the status of a component or interactive element.

![8 states of baseline navigation rail.](https://lh3.googleusercontent.com/q4Ce0kmHkUU63AUNns9xbrnQx2UlJBT9dfmW-RzlP1iM5biz8sOwR4G7BU8pEmGTbMSy2nnmyYzPFBNwQdyM6b8tJ20dhgkmDEF86WcUpVE=s2048)

*Caption / Legend:*
Navigation rail states:

1. Enabled (on active destination)
2. Hovered (on active destination)
3. Focused (on active destination)
4. Pressed (on active destination)
5. Enabled (on inactive destination)
6. Hovered (on inactive destination)
7. Focused (on inactive destination)
8. Pressed (on inactive destination)

### Measurements

![Baseline nav rail size measurements.](https://lh3.googleusercontent.com/PsBusqTr-OE5bCxYRV_i7_t-UpABd6wh-bbKu-mzMDv5-O3eoKvh-B144jLbqI5sf4B63G0hAv5k0m_hf7qTNA6ktxvfRVdk0cILpP3kghqk=s1004)

*Caption / Legend:*
Navigation rail size measurements

![Baseline nav rail padding and margin measurements.](https://lh3.googleusercontent.com/HCDSa0-MhFtUTT-jj2x4OG8rghWPku3boxc3_KKZzParDgXb2n-nNyXxh-eq8DyOgLXlqmxFHoc2sShKRMWf8m2DKVLHdtpCfsY9_7GGTFA=s1004)

*Caption / Legend:*
Navigation rail padding and margin measurements

### Configurations

Common arrangements of elements within a navigation rail.

![5 configurations of the baseline navigation rail.](https://lh3.googleusercontent.com/0ArxFOIUj1oF4bmcdt98kcylfvstmfHlWXRI2sVpFC5UG246qn6yr4185ERKim5I5IYDjTqDnWX_fMqGE_nrXr_7dJj5H7sCznQWP5SfkX4h=s2274)

*Caption / Legend:*
1. With a menu
2. With a FAB
3. With menu and FAB, without labels
4. All destinations with text labels
5. With menu, FAB, and label text for all destinations

## Guidelines

![Colorful, purple navigation rail shown collapsed and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fueyh1-01.png?alt=media)

*Caption / Legend:*
Use the menu icon to transition between collapsed and expanded navigation rails

## Usage

The navigation rail can display navigation items, a menu, and a floating action button (FAB) in a vertical orientation.

There are two variants of navigation rails, **collapsed** and **expanded**, which can easily transform into each other when the menu button is selected.

### Collapsed

The **collapsed** nav rail runs along the leading edge of the window, and should contain 3–7 navigation items. It should not be hidden.

It can be used in medium to extra large breakpoints, such as tablets and desktop. In  medium windows with few destinations, consider using a navigation bar instead. Compact windows should always use a navigation bar.

![Collapsed navigation rail with “timer” icon on FAB.](https://lh3.googleusercontent.com/2h46aO3pI3H6sk6nAElUSXgQFeS-w8ASJc8WcVkSbZ4bM8FJoTDWdNodAqWyROvWADumQNodvIQiUGDoBjq162uNRm52qDDoSVxUvoCDeNDx=s1352)

*Caption / Legend:*
A navigation rail should be the only visible navigation element

### Expanded

The **expanded** navigation rail can be standard or modal, and should always open from a menu icon. An expanded rail can reveal secondary destinations not visible when collapsed.

The **standard** configuration is placed beside body content. It’s best for larger windows with lots of available space.

The **modal** configuration overlaps the body content, and should be opened from a menu icon. Use the modal configuration for:

- Information dense layouts where space is limited
- Products with many navigation items

![Expanded navigation rail shown expanded by default and expanded over screen content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuf9qz-03.png?alt=media)

*Caption / Legend:*
A navigation rail can be expanded by default on larger screen sizes, or can be expanded over content on smaller screen sizes

In immersive experiences, the expanded navigation rail can be hidden entirely, appearing only when the menu icon is selected.

The collapsed navigation rail should not be hidden.

![Navigation rail and hidden navigation rail with menu icon button for expansion.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fufhuq-04.png?alt=media)

*Caption / Legend:*
The expanded navigation rail can also be hidden, appearing only when the menu icon is selected

## Anatomy

![10 elements of expanded and collapsed navigation rails.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fug0sy-05.png?alt=media)

*Caption / Legend:*
1. Container
2. Menu (optional)
3. Floating action button (FAB) (optional)
4. Icon - active
5. Label text - active
6. Active indicator
7. Icon - inactive
8. Large badge (optional)
9. Large badge label
10. Small badge
11. Label text - inactive

### Container

The navigation rail should be placed on the leading edge of the window. This is the left side for left-to-right languages, and the right side for right-to-left languages.

The container fill can be turned off so the nav rail appears directly on the surface. When doing this, make sure all items have a minimum of 3:1 color contrast.

![Right-to-left navigation rail in Hebrew, and left-to-right navigation rail in English.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fugb5b-06.png?alt=media)

*Caption / Legend:*
The navigation rail should be placed on the leading edge of the window

The navigation rail should always run vertically along the side of a layout. Don’t make it horizontal.

Use a navigation bar for horizontal navigation.

![Horizontal navigation rail on timer screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmacys6lz-07.png?alt=media)

*Caption / Legend:*
Don’t use the navigation rail horizontally. Use a navigation bar instead.

Navigation rail items can be aligned as a group to the top or center of a layout. On tablets, use center alignment to make it easier to reach items.

The menu icon and FAB should always be top-aligned.

![Navigation rails with different alignments.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuh0i5-08.png?alt=media)

*Caption / Legend:*
Top and center aligned rail destination placement

### Menu (optional)

The menu button can transition between the **collapsed **and **expanded** navigation rails.

Once expanded, the rail can reveal secondary destinations.

When the navigation rail is expanded, the menu icon should change to represent that it can be collapsed.

![Expanded and collapsed navigation rails controlled by a menu icon button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuh7km-09.png?alt=media)

*Caption / Legend:*
A navigation rail can expand to reveal more destinations

### Floating action button (FAB) (optional)

The container of the navigation rail is ideal for anchoring the FAB to the top of a screen, placing the app’s key action above navigation destinations.

When nested within another component, such as the navigation rail, the FAB's resting elevation should be [level 0](/m3/pages/elevation/applying-elevation).

![Navigation rail with a FAB button at the top of the screen.](https://lh3.googleusercontent.com/oYiKoFrv-NTEJMP1NoGGpnlw0RTHmfpGWDm7KmDgeKzvpXq6tMZvMjBzUcZkXpnEK2Lb_cbeWRkwS4i4RGn1zfW0N4RcwSGVgltbcvmD6vY=s656)

*Caption / Legend:*
A top-aligned FAB in the navigation rail

![Navigation rail with a FAB button at the bottom of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuhrl8-11.png?alt=media)

*Caption / Legend:*
Avoid placing the FAB below navigation items

The top of the rail can also be used for a logo, however avoid using logos that could be mistaken as buttons.

Don’t use a logo as a menu button to expand the navigation rail.

![Navigation rail with Material design logo at the top of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuhyto-12.png?alt=media)

*Caption / Legend:*
Use caution when placing logos in the rail where they might be confused with an action or destination

### Active indicator

The active indicator shows which page is being displayed.

![Navigation rail with active indicators present for the current screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuicr9-13.png?alt=media)

*Caption / Legend:*
Use the active indicator only for the current open page

![Navigation rail with active indicators present for all navigation items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujiob-14.png?alt=media)

*Caption / Legend:*
Don’t use the active indicator for more than one navigation item at a time

The active indicator hugs the label text in the expanded nav rail. To achieve a similar style to the baseline navigation drawer, consider modifying the active indicator to fill the container.

The target area should always span the full width.

![Navigation rail with active indicator that hugs the text and icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujt7v-15.png?alt=media)

*Caption / Legend:*
The active indicator hugs contents in the expanded nav rail

![Navigation rail with active indicator that is larger than the content within it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fujxyu-16.png?alt=media)

*Caption / Legend:*
Override the indicator to fill the container to more closely resemble the baseline navigation drawer

### Icons

Navigation rail items must use icons that symbolize the content of their page. Browse popular icons on [Google Fonts](http://fonts.google.com/icons).

![Navigation rail with icons that fit the destinations, like a timer icon and label leading to a timer feature.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuk4ze-17.png?alt=media)

*Caption / Legend:*
Icons should symbolize the content of the page they open

When a destination is selected, the icon fills and changes color. An active indicator appears behind the icon.

![Icons with and without an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fukavr-18.png?alt=media)

*Caption / Legend:*
Selected navigation items have an active indicator, a filled icon, and a more prominent color

### Label text

The label text should be a short, meaningful description of each navigation destination and another way for users to understand an icon’s meaning.

All navigation items require a one word label text.

![Navigation rail with clear text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fukhnw-19.png?alt=media)

*Caption / Legend:*
Write clear and concise labels that describe the destination page

Avoid wrapping long labels when possible. If necessary, create a line break between words, or hyphenate longer words.

![Navigation rail with lengthy text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fune8p-20.png?alt=media)

*Caption / Legend:*
Break up longer phrases into two text lines if necessary

Labels should be short enough to not be truncated. Don’t shrink the type scale to fit longer text labels.

![Navigation rail with truncated text label with ellipses. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0funlrw-21.png?alt=media)

*Caption / Legend:*
Don’t truncate or display an ellipsis in place of label text

![Navigation rail with small text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0funqlw-22.png?alt=media)

*Caption / Legend:*
Don’t reduce the type size to fit more characters into a destination label

### Badges

Navigation rail icons can include badges to communicate dynamic information about the  destination, such as counts or status.

In compact nav rails, the badge is placed in the upper right corner of the icon. In expanded nav rails, the badge should be placed next to the label text.

![Navigation rail with badges on each icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuomdi-23.png?alt=media)

*Caption / Legend:*
1. Small badge on a rail destination 
2. Large badge with a number
3. Large badge with a maximum character count

### Divider (optional)

A vertical divider can help separate the rail from app content. The divider should be positioned on the edge of the rail container that’s adjacent to the app’s content area.

![Navigation rail with divider separating it from screen content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuouq0-24.png?alt=media)

*Caption / Legend:*
A divider can make the navigation rail container distinct from other on-screen content

## Placement

In adaptive layouts, the navigation rail should be placed outside any panes, always along the leading edge of the window. Don’t place it within body content.

When the navigation rail is hidden, the body content can fill in the remaining space as long as the menu icon is still accessible.

Tabs can be used alongside a navigation rail to create an extra layer of visible navigation.

## Adaptive design

For more, see [adaptive design](/m3/pages/layout-overview/adaptive-design/).

### Resizing

When moving from a large screen to a small screen, a navigation rail can transform into a navigation bar, providing the same quick access in a configuration that’s easier to use on smaller displays. Never use the navigation rail and navigation bar simultaneously.

Only use navigation rails for medium breakpoints and larger. Don’t use a navigation bar. If there are more than five destinations, consider using a modal expanded nav rail instead.

**Compact:** Don’t use a standard navigation rail for compact layouts due to space constraints. Use a navigation bar instead.

**Medium:** Use a navigation rail, especially if prioritizing persistent vertical navigation over maximizing vertical content space.

**Expanded to extra-large:** Use a navigation rail, not a navigation bar. Consider available horizontal space and the number of destinations when choosing between standard and modal.

![Navigation bar on a phone screen and navigation rail on a tablet screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fupcvd-26.png?alt=media)

*Caption / Legend:*
On smaller devices, use a navigation bar. On larger displays, use a navigation rail.

### Presentation

When the navigation rail transitions from collapsed to expanded, the contents of the page should automatically adjust to fit.

The contents of the navigation rail also expand to fill the space. For example, the FAB should transition into an extended FAB. 

Extra destinations can be shown in an expanded nav rail.

## Behavior

### Scrolling

Destinations in the navigation rail should remain visible and fixed when scrolling vertically.

If a layout scrolls horizontally, the rail can scroll off-screen or remain fixed. To distinguish that content is scrolling underneath the rail, use a divider or add elevation to the rail.

### Selection

When a destination is tapped, the destination screen uses a [top level](/m3/pages/motion-transitions/transition-patterns#f852afd2-396f-49fd-a265-5f6d96680e16) transition pattern. In addition, the icon becomes filled and the active indicator expands from the center of the icon.

### Back

On Android, a gesture called predictive back allows people to swipe left or right on the screen to go back or dismiss modal components.

- Previous screen is revealed in a preview to signal the destination
- Predictive back only applies to the **modal expanded** navigation rail.

A list of compatible components is available on the [gestures page](/m3/pages/gestures/).

### Selection

When a destination is tapped, several transitions occur:

- A touch ripple appears
- The outgoing icon color changes from a brand color to grey
- The outgoing icon moves down to align with the deactivated tabs, and then the label fades out
- The incoming icon color changes from grey to a brand color
- The incoming icon moves up, and the incoming label fades in

![A tapped destination transitions from inactive to active](https://lh3.googleusercontent.com/B7aiYo5IM932EzqTfX7bkS08Ebciat0LGJWQg8PM6ZD1tl7iIqXm2lmUyfQ56VoXLoaTaNmMuVgsSg5QLBA6q67v88RUwONUL0LfX01m5LU9=s676)

*Caption / Legend:*
Tapping a destination changes the outgoing icon color to grey, aligns the icon with deactivated tabs, allowing for the incoming icon to move up and change to a brand color

## XR

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/design/cVjQvQ0moD8wkPWH2rn2c6/XR?node-id=294149-10229&t=AFAz42CCMXa5470T-4).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has XR-specific navigation rails with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There are two variants of navigation rail orbiters: the contained FAB and spatialized FAB navigation rails.

![Navigation bar orbiters with a contained FAB and a spatialized FAB.](https://lh3.googleusercontent.com/dPJqjYJCk9bPHeSRMvYPWuDtexUzZDMRBk6vNciqpu5z0dQG30QbaVle64vcI2dusE8aqPEUqFra47gf6R870mBGAhYghroP90OYqWugm180=s2048)

*Caption / Legend:*
1. Contained FAB rail
2. Spatialized FAB rail

## Anatomy

![Diagram of navigation rail orbiter identifying 9 internal elements of the component.](https://lh3.googleusercontent.com/rU4TAGNiKzJj6z-L-jcKcfsZTlzzuIycA30T85HGQ_JyBo49apcjkI9TKY5yvPo4-heaO-X5nfrETlyizfZ9_FlQaV-z9BZQFNZ1S7N-MP-y=s2048)

*Caption / Legend:*
1. Container
2. Active indicator
3. Large badge (optional)
4. Badge (optional)
5. Large badge label (optional)
6. Label text
7. Icon
8. Embedded or spatialized FAB (optional)
9. Menu icon (optional)

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav rails can use any of these color options:

![4 versions of elevation color strategy.](https://lh3.googleusercontent.com/M6OH6zh7_zTrkS1zUDj-eceTyjgUMahrpEPl6WDJMMAuoODDcaGHDbMtZDzxApkri7IjSHwtCZnBxQnucLJCwA_zJawPO2gSn5i8Qo7-DxNp=s2048)

*Caption / Legend:*
1. Surface container with tertiary FAB
2. Surface container high with tertiary fixed dim FAB
3. Surface container highest with tertiary fixed dim FAB
4. Tertiary container with primary FAB

## Measurements

![Measurements and padding for navigation rail orbiter with contained FAB.](https://lh3.googleusercontent.com/rLe0xRyUvCeR1tXOPjPJ-hELWYJVzjkIMhHriNOGkHBiJEzAGt7hAMOrn9O5uGpAapq6A1uzhFSbP9u7GChXoBzMVpGj-MJ_q72tJBrP0X0avA=s1004)

*Caption / Legend:*
Navigation rail orbiter padding and measurements with contained FAB

![Measurements and padding for navigation rail orbiter with spatialized FAB.](https://lh3.googleusercontent.com/VGWnkF5eQPdJ2RNo4C0VAmVigdGhBqswyXKAYq0cQgHfCPwPFHm7JKlRPkOgAHxPTtww-Wmm2TnRan4iae_giCyC0KgU76nsh_2z6K2-lW-7=s1004)

*Caption / Legend:*
Navigation rail orbiter padding and measurements with spatialized FAB

## Usage

In full space, a navigation rail can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation rail on the same plane as the body content to mimic a 2D experience.

## Behavior

### Global context

Intended for global navigation, a nav rail orbiter should be centered along the left or right edge of the app it controls. It stays anchored to the app during layout or content changes to ensure controls are easy to find.

### Local context

Don’t place a navigation rail orbiter in local context or [between spatial panels](/m3/pages/navigation-rail/xr#519a112b-51d6-4200-96a9-54af92fb787d). Local placement can make controls hard to find. Nav rails are designed for app-level navigation, so should only use the global context.

## Placement

### Navigation context

The position of the navigation rail orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation rail orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation rail orbiter should overlap spatial panels by 12dp and no more than half their width.

### Vertical alignment

A navigation rail orbiter can be aligned to the top, middle, or center of spatialized panels, providing different levels of visual prominence and accessibility.

Align the navigation rail orbiter based on the specific design and user experience goals for the application.

The navigation rail orbiter placement shouldn't exceed the height of adjacent spatial panels.

### Spatial panel alignment

Avoid placing a navigation rail orbiter between spatial panels. This negatively affects the interface structure.

For layouts that span more than two spatial panels, consider using a navigation bar orbiter.

## Spatialized FAB

There are two variants of navigation rail orbiters with different FAB treatments:

- **Contained FAB rail:** A contained FAB within the rail. This offers a compact and familiar layout.
- **Spatialized FAB rail:** The FAB becomes an orbiter of it’s own and is placed outside the navigation rail orbiter. Use this for higher emphasis and a distinct spatial effect.

Use the spatialized FAB rail to emphasize key actions and leverage XR hierarchy. Use the contained FAB rail to be more subtle, and align the experience with the baseline navigation bar.

To maintain visual association, place the spatialized FAB in close proximity to the navigation rail orbiter. Material recommends a 20dp margin.

The spatialized FAB can be placed above or below the navigation rail orbiter.

While the spatialized FAB and navigation rail orbiter are typically positioned together, their placement is adaptable.

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR navigation rails should follow applicable Material [nav rail accessibility standards](/m3/pages/navigation-rail/accessibility).

## Accessibility

## Use cases

People should be able to do the following using the assistive technology:

- Navigate between navigation destinations
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

## Interaction & style

When a navigation item is tapped, the active indicator appears, providing the following feedback to the user that it is selected:

- A ripple passes through the indicator
- The icon switches from outlined to filled
- The icon and text change color

When hovered, the hover state appears, providing a visual cue that the destination is interactive.

![Colorful, purple navigation rail shown collapsed and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0guemtv-01-static.png?alt=media)

*Caption / Legend:*
Touch: Tap

![Tap indicator on a collapsed nav rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0guep9g-02-static.png?alt=media)

*Caption / Legend:*
Cursor: Hover, Click

The target area for expanded navigation rails spans the full width of the container, even though the active indicator visually hugs the content.

![Touch indicator on a nav rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0gud02c-03-static.png?alt=media)

*Caption / Legend:*
Touch: Tap

Use a filled icon for the active destination and outlined icons for inactive destinations.

Active and inactive icon colors need sufficient contrast against the container.

![Navigation rail with filled element.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fut28q-04.png?alt=media)

*Caption / Legend:*
Use the default color scheme to ensure proper contrast and emphasis on the active destination

![Nav rail with multiple navigation destinations and multi-colored contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fut791-05.png?alt=media)

*Caption / Legend:*
Don’t use more than two colors for destinations or low-contrast colors in the navigation rail. This will make distinguishing active items difficult.

If an icon doesn’t have a filled style, use the semibold icon weight instead.

![Icon button with semibold weight, without filled options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kvazns-09.png?alt=media)

*Caption / Legend:*
An icon with no filled option should use the semibold weight when active

### Text scaling and truncation

When someone sets their device to show a larger text size, the navigation rail items should grow vertically to accommodate larger labels while retaining the default padding. It’s okay for scaled text to wrap in navigation items.

To remain accessible, ensure the full label is always visible on-screen at up to 2x text sizing. Beyond this size, text can truncate.

![Nav rail with text scaled to 1.5x size. All labels are on one line.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36brxfu-04.png?alt=media)

*Caption / Legend:*
Text scaled to 1.5 size

![Nav rail with text scaled to 2x size. Some labels wrap to two lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36bs1jw-05.png?alt=media)

*Caption / Legend:*
Text scaled to 2x size

### Initial focus

Initial focus lands directly on the first interactive item, whether it’s the menu, the FAB, or the first navigation item.

From the FAB or menu, **Tab** brings the person to the navigation items. **Tab** or **Arrows** then navigate between items.

![Arrows help people move between pages.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0futkj8-07.png?alt=media)

*Caption / Legend:*
Use arrows to move between navigation items

![Space/enter help people choose a navigation destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0futowb-08.png?alt=media)

*Caption / Legend:*
Use space/enter to activate the focused navigation item

### Visual indicators

Icons give the dominant cue of the navigation state. Use a filled icon for the selected destination to contrast with outlined icons for the non-selected destinations.

![Nav bar with an active, filled icon button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0futxf6-09.png?alt=media)

*Caption / Legend:*
Use a filled icon variant on the selected navigation item to differentiate from inactive navigation items

![Selected navigation item without filled icon style.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fv1bxc-10.png?alt=media)

*Caption / Legend:*
Avoid using the same unfilled icon style for both selected and unselected items because it lacks important visual feedback cue

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab / Arrows | Navigate between interactive elements |
| Space / Enter | Selects an interactive element |

## Labeling elements

The accessibility label for a navigation item is typically the same as the adjacent text label.

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation item visibly labeled **Recent** would benefit from additional information in its accessibility label to clarify the destination's intent.

Note: On Android Views (MDC-Android), a more descriptive accessibility label is not available and the role is not announced.

![“Maps” is both the icon label text and the accessibility label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0fuvxlx-11.png?alt=media)

*Caption / Legend:*
While the visible label text reads **Recent**, the accessibility label for this switch clarifies its function: **Recent images**
