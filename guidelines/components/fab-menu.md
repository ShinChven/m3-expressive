# FAB menu

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/fab-menu](https://m3.material.io/components/fab-menu)
> Last Updated: 2026-07-17T06:58:41.835Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Opens from a FAB to show 2–6 related actions floating on screen
- One FAB menu size for all sizes of FABs
- Not used with extended FABs
- Available in primary, secondary, and tertiary color sets

![3 FAB menus in different color schemes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj37mw-01.png?alt=media)

*Caption / Legend:*
The FAB menu comes in three color sets: primary, secondary, tertiary

## Availability & resources

## M3 Expressive update

**May 2025**

The FAB menu adds more options to the FAB. It should replace the speed dial and any usage of stacked small FABs. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

New component added to catalog:

- One menu size that pairs with any FAB
- Replaces any usage of stacked small FABs

Color:

- Contrasting close button and item colors
- Supports dynamic color
- Compatible with any FAB color style

![4 screens. The FAB menu is on the first, and 3 FABs of different sizes are on the others.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj3ip6-02.png?alt=media)

*Caption / Legend:*
The FAB menu uses contrasting color and large items to focus attention. It can open from any size FAB.

## Differences from M2

![M2 speed dial.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj3w24-Diff%20GM2.png?alt=media)

*Caption / Legend:*
M2: The speed dial used small round FABs

![GM3 FAB menu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0aj42vs-Diff%20GM3%20Expressive.png?alt=media)

*Caption / Legend:*
M3: The FAB menu uses dynamic color and a larger item size

## Specs

## Variants

![The FAB menu in its single variant.](https://lh3.googleusercontent.com/aEJrDU0HXKoBxMGFWOq1I7O6QB2fl6EPJGEDSP0L7CVDgvAjMdaM_LX10txGb1GDquvp0R-IiszOHSY23xw1qRcCit1YcAxSgB4P3HKa4wGs=s2048)

*Caption / Legend:*
There’s one variant of FAB menu

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| FAB menu | -- | Available |

## Configurations

![3 color configurations of FAB menus.](https://lh3.googleusercontent.com/ysJ9Ea896_EYwed_YofScZMv_HuE8BH4IJVkWyw4v2Xw-KInaEtXmOyWaaQNTTAZw0oLB9neXbgOnHTv2rPWRCii81v_hwh0ZkDiyQp2seY=s2048)

*Caption / Legend:*
Three color sets:

1. Primary
2. Secondary
3. Tertiary

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Color | Primary set, secondary set, tertiary set | -- | Available |

## Tokens & specs

Use the table's menu to switch token sets. The FAB menu has a common token set and six color sets, three for each element (close button and menu item). [Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: FAB menu - Common

*Common tokens for all FAB menus.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.menu-item.trailing-space` | `md.sys.measurement.space300` | LENGTH | FAB menu - menu item trailing space |
| `md.comp.fab-menu.menu-item.between-space` | `md.sys.measurement.space50` | LENGTH | FAB menu - menu item between space |
| `md.comp.fab-menu.menu-item.icon-label-space` | `md.sys.measurement.space100` | LENGTH | FAB menu - menu item icon label space |
| `md.comp.fab-menu.menu-item.leading-space` | `md.sys.measurement.space300` | LENGTH | FAB menu - menu item leading space |
| `md.comp.fab-menu.menu-item.container.shape` | `md.sys.shape.corner.full` | SHAPE | FAB menu - menu item container shape |
| `md.comp.fab-menu.menu-item.container.elevation` | `md.sys.elevation.level0` | ELEVATION | FAB menu - menu item container elevation |
| `md.comp.fab-menu.menu-item.icon.size` | 24dp | LENGTH | FAB menu - menu item icon size |
| `md.comp.fab-menu.menu-item.label-text` | `md.sys.typescale.title-medium` | TYPOGRAPHY | FAB menu - menu item label text |
| `md.comp.fab-menu.menu-item.container.height` | 56dp | LENGTH | FAB menu - menu item container height |
| `md.comp.fab-menu.close-button.container.height` | 56dp | LENGTH | FAB menu close button container height |
| `md.comp.fab-menu.close-button.container.width` | 56dp | LENGTH | FAB menu close width |
| `md.comp.fab-menu.close-button.icon.size` | 20dp | LENGTH | FAB menu close button icon size |
| `md.comp.fab-menu.close-button.between-space` | `md.sys.measurement.space100` | LENGTH | FAB menu close button between space |
| `md.comp.fab-menu.close-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | FAB menu close button container shape |
| `md.comp.fab-menu.close-button.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu close button container elevation |

#### Design Tokens: FAB menu close button - Color - Primary

*Primary color tokens for the close button in the FAB menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.primary.close-button.container.color` | `md.sys.color.primary` | COLOR | FAB menu primary close button container color |
| `md.comp.fab-menu.primary.close-button.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB menu primary close button container shadow color |
| `md.comp.fab-menu.primary.close-button.icon.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button icon color |
| `md.comp.fab-menu.primary.close-button.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB menu primary close button hovered container elevation |
| `md.comp.fab-menu.primary.close-button.hovered.state-layer.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button hovered state layer color |
| `md.comp.fab-menu.primary.close-button.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB menu primary close button hovered state layer opacity |
| `md.comp.fab-menu.primary.close-button.hovered.icon.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button hovered icon color |
| `md.comp.fab-menu.primary.close-button.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu primary close button focused container elevation |
| `md.comp.fab-menu.primary.close-button.focused.state-layer.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button focused state layer color |
| `md.comp.fab-menu.primary.close-button.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB menu primary close button focused state layer opacity |
| `md.comp.fab-menu.primary.close-button.focused.icon.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button focused icon color |
| `md.comp.fab-menu.primary.close-button.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu primary close button pressed container elevation |
| `md.comp.fab-menu.primary.close-button.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button pressed state layer color |
| `md.comp.fab-menu.primary.close-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB menu primary close button pressed state layer opacity |
| `md.comp.fab-menu.primary.close-button.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | FAB menu primary close button pressed icon color |

#### Design Tokens: FAB menu close button - Color - Secondary

*Secondary color tokens for the close button in the FAB menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.secondary.close-button.container.color` | `md.sys.color.secondary` | COLOR | FAB menu secondary close button container color |
| `md.comp.fab-menu.secondary.close-button.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB menu secondary close button container shadow color |
| `md.comp.fab-menu.secondary.close-button.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button icon color |
| `md.comp.fab-menu.secondary.close-button.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB menu secondary close button hovered container elevation |
| `md.comp.fab-menu.secondary.close-button.hovered.state-layer.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button hovered state layer color |
| `md.comp.fab-menu.secondary.close-button.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB menu secondary close button hovered state layer opacity |
| `md.comp.fab-menu.secondary.close-button.hovered.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button hovered icon color |
| `md.comp.fab-menu.secondary.close-button.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu secondary close button focused container elevation |
| `md.comp.fab-menu.secondary.close-button.focused.state-layer.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button focused state layer color |
| `md.comp.fab-menu.secondary.close-button.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB menu secondary close button focused state layer opacity |
| `md.comp.fab-menu.secondary.close-button.focused.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button focused icon color |
| `md.comp.fab-menu.secondary.close-button.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu secondary close button pressed container elevation |
| `md.comp.fab-menu.secondary.close-button.pressed.state-layer.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button pressed state layer color |
| `md.comp.fab-menu.secondary.close-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB menu secondary close button pressed state layer opacity |
| `md.comp.fab-menu.secondary.close-button.pressed.icon.color` | `md.sys.color.on-secondary` | COLOR | FAB menu secondary close button pressed icon color |

#### Design Tokens: FAB menu close button - Color - Tertiary

*Tertiary color tokens for the close button in the FAB menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.tertiary.close-button.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button icon color |
| `md.comp.fab-menu.tertiary.close-button.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB menu tertiary close button hovered container elevation |
| `md.comp.fab-menu.tertiary.close-button.hovered.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button hovered state layer color |
| `md.comp.fab-menu.tertiary.close-button.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB menu tertiary close button hovered state layer opacity |
| `md.comp.fab-menu.tertiary.close-button.hovered.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button hovered icon color |
| `md.comp.fab-menu.tertiary.close-button.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu tertiary close button focused container elevation |
| `md.comp.fab-menu.tertiary.close-button.focused.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button focused state layer color |
| `md.comp.fab-menu.tertiary.close-button.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB menu tertiary close button focused state layer opacity |
| `md.comp.fab-menu.tertiary.close-button.focused.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button focused icon color |
| `md.comp.fab-menu.tertiary.close-button.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu tertiary close button pressed container elevation |
| `md.comp.fab-menu.tertiary.close-button.pressed.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button pressed state layer color |
| `md.comp.fab-menu.tertiary.close-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB menu tertiary close button pressed state layer opacity |
| `md.comp.fab-menu.tertiary.close-button.pressed.icon.color` | `md.sys.color.on-tertiary` | COLOR | FAB menu tertiary close button pressed icon color |
| `md.comp.fab-menu.tertiary.close-button.container.color` | `md.sys.color.tertiary` | COLOR | FAB menu tertiary close button container color |
| `md.comp.fab-menu.tertiary.close-button.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB menu tertiary close button container shadow color |

#### Design Tokens: FAB menu list items - Color - Primary

*Primary container color tokens for the items in the FAB menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.primary-container.list-item.container.color` | `md.sys.color.primary-container` | COLOR | FAB menu primary list item container color |
| `md.comp.fab-menu.primary-container.list-item.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB menu primary list item container shadow color |
| `md.comp.fab-menu.primary-container.list-item.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item icon color |
| `md.comp.fab-menu.primary-container.list-item.label-text.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item label text color |
| `md.comp.fab-menu.primary-container.list-item.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB menu primary list item hovered container elevation |
| `md.comp.fab-menu.primary-container.list-item.hovered.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item hovered state layer color |
| `md.comp.fab-menu.primary-container.list-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB menu primary list item hovered state layer opacity |
| `md.comp.fab-menu.primary-container.list-item.hovered.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item hovered icon color |
| `md.comp.fab-menu.primary-container.list-item.hovered.label-text.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item hovered label text color |
| `md.comp.fab-menu.primary-container.list-item.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu primary list item focused container elevation |
| `md.comp.fab-menu.primary-container.list-item.focused.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item focused state layer color |
| `md.comp.fab-menu.primary-container.list-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB menu primary list item focused state layer opacity |
| `md.comp.fab-menu.primary-container.list-item.focused.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item focused icon color |
| `md.comp.fab-menu.primary-container.list-item.focused.label-text.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item focused label text color |
| `md.comp.fab-menu.primary-container.list-item.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu primary list item pressed container elevation |
| `md.comp.fab-menu.primary-container.list-item.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item pressed state layer color |
| `md.comp.fab-menu.primary-container.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB menu primary list item pressed state layer opacity |
| `md.comp.fab-menu.primary-container.list-item.pressed.icon.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item pressed icon color |
| `md.comp.fab-menu.primary-container.list-item.pressed.label-text.color` | `md.sys.color.on-primary-container` | COLOR | FAB menu primary list item pressed label text color |

#### Design Tokens: FAB menu list items - Color - Secondary

*Secondary container color tokens for the items in the FAB menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.secondary-container.list-item.container.color` | `md.sys.color.secondary-container` | COLOR | FAB menu secondary list item container color |
| `md.comp.fab-menu.secondary-container.list-item.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB menu secondary list item container shadow color |
| `md.comp.fab-menu.secondary-container.list-item.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item icon color |
| `md.comp.fab-menu.secondary-container.list-item.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item label text color |
| `md.comp.fab-menu.secondary-container.list-item.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB menu secondary list item hovered container elevation |
| `md.comp.fab-menu.secondary-container.list-item.hovered.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item hovered state layer color |
| `md.comp.fab-menu.secondary-container.list-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB menu secondary list item hovered state layer opacity |
| `md.comp.fab-menu.secondary-container.list-item.hovered.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item hovered icon color |
| `md.comp.fab-menu.secondary-container.list-item.hovered.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item hovered label text color |
| `md.comp.fab-menu.secondary-container.list-item.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu secondary list item focused container elevation |
| `md.comp.fab-menu.secondary-container.list-item.focused.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item focused state layer color |
| `md.comp.fab-menu.secondary-container.list-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB menu secondary list item focused state layer opacity |
| `md.comp.fab-menu.secondary-container.list-item.focused.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item focused icon color |
| `md.comp.fab-menu.secondary-container.list-item.focused.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item focused label text color |
| `md.comp.fab-menu.secondary-container.list-item.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu secondary list item pressed container elevation |
| `md.comp.fab-menu.secondary-container.list-item.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item pressed state layer color |
| `md.comp.fab-menu.secondary-container.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB menu secondary list item pressed state layer opacity |
| `md.comp.fab-menu.secondary-container.list-item.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item pressed icon color |
| `md.comp.fab-menu.secondary-container.list-item.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | FAB menu secondary list item pressed label text color |

#### Design Tokens: FAB menu list items - Color - Tertiary

*Tertiary container color tokens for the items in the FAB menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.fab-menu.tertiary-container.list-item.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item focused state layer color |
| `md.comp.fab-menu.tertiary-container.list-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | FAB menu tertiary list item focused state layer opacity |
| `md.comp.fab-menu.tertiary-container.list-item.focused.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item focused icon color |
| `md.comp.fab-menu.tertiary-container.list-item.focused.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item focused label text color |
| `md.comp.fab-menu.tertiary-container.list-item.pressed.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu tertiary list item pressed container elevation |
| `md.comp.fab-menu.tertiary-container.list-item.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item pressed state layer color |
| `md.comp.fab-menu.tertiary-container.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | FAB menu tertiary list item pressed state layer opacity |
| `md.comp.fab-menu.tertiary-container.list-item.pressed.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item pressed icon color |
| `md.comp.fab-menu.tertiary-container.list-item.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item pressed label text color |
| `md.comp.fab-menu.tertiary-container.list-item.container.color` | `md.sys.color.tertiary-container` | COLOR | FAB menu tertiary list item container color |
| `md.comp.fab-menu.tertiary-container.list-item.container.shadow-color` | `md.sys.color.shadow` | COLOR | FAB menu tertiary list item container shadow color |
| `md.comp.fab-menu.tertiary-container.list-item.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item icon color |
| `md.comp.fab-menu.tertiary-container.list-item.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item label text color |
| `md.comp.fab-menu.tertiary-container.list-item.hovered.container.elevation` | `md.sys.elevation.level4` | ELEVATION | FAB menu tertiary list item hovered container elevation |
| `md.comp.fab-menu.tertiary-container.list-item.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item hovered state layer color |
| `md.comp.fab-menu.tertiary-container.list-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | FAB menu tertiary list item hovered state layer opacity |
| `md.comp.fab-menu.tertiary-container.list-item.hovered.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item hovered icon color |
| `md.comp.fab-menu.tertiary-container.list-item.hovered.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | FAB menu tertiary list item hovered label text color |
| `md.comp.fab-menu.tertiary-container.list-item.focused.container.elevation` | `md.sys.elevation.level3` | ELEVATION | FAB menu tertiary list item focused container elevation |


## Anatomy

![2 elements of a FAB menu.](https://lh3.googleusercontent.com/CsC2u7L3QL6svcrFzmZM2foCzJxzUjF93lwZuZ-oJW7RK-lKsp4Ei0iNdLiNhbFST2y9U34PClKaRDJVJK8dT582gl98nYYhiCGKAwXNSKO6=s2048)

*Caption / Legend:*
1. Close button
2. Menu item

![5 FAB menus showing the range of 2–6 items.](https://lh3.googleusercontent.com/KIWWfbv6JG0LIK8rzUSHcalH5BrNbW8_o8_U3uLqVkUDcdZNw4VS_nwoQ33DaomQXt95s6R_EY49aEQsWTQhxxDn2aYrDvU4ZSv4_arxasPc=s2048)

*Caption / Legend:*
The FAB menu can have up to six items

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![12 colors of the FAB menu.](https://lh3.googleusercontent.com/tZxH6WCjbJBIqPlpd4_nt_npacUlh9WWyrIqJWs6Z1BCdGKbGFPt_BaW0CrG9HHNVQzBFYxxGU4hYm8LnEeWldCP9dezTNn3BwRy0uvJR2FoEw=s2048)

*Caption / Legend:*
1. On primary container
2. Primary container
3. On primary
4. Primary
5. On secondary container
6. Secondary container
7. On secondary
8. Secondary
9. On tertiary container
10. Tertiary container
11. On tertiary
12. Tertiary

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

### Close button

![4 states of the FAB menu close button.](https://lh3.googleusercontent.com/IBxWcDPavbWf55MsedxQZnCouJM3OZfbOudsfZQNrILcXhsyU_EI9iIEZ1UeKo-BwB7btsT0_0ZApQFHjZA4TOMjuOaY7TDtozX-qV09ssI=s2048)

*Caption / Legend:*
Close button states in light and dark themes:

1. Enabled
2. Hovered
3. Focused
4. Pressed

### Menu item

![4 states of the FAB menu items.](https://lh3.googleusercontent.com/GHST3WLAtYjpsKWjXfoTtSy1pybwjIFPYgrw1GBjynLRHHSxmZWT-t8VhnSMGbOvYWG0O65po5ceeOVrqt5KKtMzyxazm1PLFiTj4KMgg-CB=s2048)

*Caption / Legend:*
Menu item states in light and dark themes:

1. Enabled
2. Hovered
3. Focused
4. Pressed

## Measurements

FAB menu items share the same measurements as the medium button specs.

The close button should always be 56dp.

![FAB menu size measurements.](https://lh3.googleusercontent.com/6K5OibGh_d83LTRduhambKrHPD8JMVCHm19eHlen8e58fVWnoLyh8wWGZyLrdCPSO8Q3m01icndNcp7uuA0LLzeHzKWk60mGzGS3wrlB78o=s1352)

*Caption / Legend:*
FAB menu size measurements

The FAB menu animates from the top trailing edge of the FAB to ensure a smooth animation.

![FAB on a mobile screen with 16dp margins annotated.](https://lh3.googleusercontent.com/WhBYTHZseZ9EfjdiU3CqPLeEC36wFENc3fV_9h5eR9T5ze6ooQya6w3-f1JWj7bBOkJnQHFL3LpbcmG_N1zDZC9RT3dkok2EOHrbxNP5-rQ=s656)

*Caption / Legend:*
The FAB should always have 16dp margins

![FAB menu opened from a FAB has matching margins of 16dp.](https://lh3.googleusercontent.com/HWYLNxfsd_aBEZRMazrMRxUthRgVqeA8_evmV1IZrkKg878uq7DK0dg5EZaR8q7n-QP_kLrEaYALuBpmKtQjnBiVXhjfz_1-yYZw-CG0MTQ=s656)

*Caption / Legend:*
The close button and FAB share the top trailing corner as an anchor and appear in the same place

Larger FABs will place the FAB menu slightly higher, with larger margins underneath.

![Medium FAB on a mobile screen with 16dp margins annotated.](https://lh3.googleusercontent.com/gce3Kgv0OcZSOCiWq672oYOzAE9YJhGCC0oGLAcdxJ59BPnVhlV3HdjJPyrHiJy1LgUNnQkTKyOc9d6e2N7EL7hyrzOoMq8kRrAZwtFYUDJz=s656)

*Caption / Legend:*
The medium FAB placement has 16dp margins

![FAB menu opened from the medium FAB has a 40dp margin from bottom of screen.](https://lh3.googleusercontent.com/kfovl3xRwL77xd7_XYJlFsLMybMdv16Nd0U9T5f87iZTyW3lo8gU72nkr81ZLumjSbxXIYnkvJX7ea84B8WmUtmukv4fhG1Wppp4IGnOgENn=s656)

*Caption / Legend:*
The close button is placed higher to align with the top of the medium FAB

![Large FAB on a mobile screen with 16dp margins annotated.](https://lh3.googleusercontent.com/_9hh4PDq9vnfiJ2AAOX8VKeIFe9De47Av_acmKjjFbTkWQOGjZTLOqGY5cWqLsxkDLWjG4bgquVe81njJP9pL12nQlj_F7iNMl7KTugTGLWP=s656)

*Caption / Legend:*
The large FAB placement has 16dp margins

![FAB menu opened from the large FAB has a 56dp margin from bottom of screen.](https://lh3.googleusercontent.com/zGkr1v4xtHihId5hAGO-4ESfqwzsweXE2xqXba2w8m0zl9Hswn3RWimV53apAvslPo7y0G2yrUchBqCB8sR1_96IAzSaJyALM8gE8GshfO85=s656)

*Caption / Legend:*
The close button is placed higher to align with the top of the large FAB

On web, the FAB menu opens from the FAB, and inherits its states and specs from the baseline menu component.

The gap between the FAB and menu can vary, but 4dp is recommended.

![FAB menu on web states and specifications.](https://lh3.googleusercontent.com/EvVSXxIPCIQmi5H_Tf238AlVWE4QCT1NNKDXE9IYMtRbF3FF7S-t0Y_sxaQ1dCGsRSQGM6EkWT2LI5yHx3lpiF-agl1JQ8D670U0NjvwG8Jd=s2048)

*Caption / Legend:*
Spacing and interaction on FAB menu for web:

1. Enabled
2. Hovered
3. Selected

## Guidelines

![On a page of music albums, a FAB menu shows options to make a new playlist, collection, or station.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al2scq-01.png?alt=media)

*Caption / Legend:*
Use the FAB menu to show multiple related actions in a prominent, expressive style

## Usage

A FAB menu opens from a FAB to show multiple related actions. It should always appear in the same place as the FAB that opened it.

This makes actions immediately accessible, and keeps the UI clean by concealing actions when they’re not needed.

Don’t open a FAB menu from an extended FAB or any other component.

![1 mobile screen with a FAB, 1 with a FAB menu. Both are right aligned.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al39xa-02.png?alt=media)

*Caption / Legend:*
The FAB menu should always open from a FAB

The FAB menu should be aligned to the trailing edge of the window.

In right-to-left (RTL) languages, this means the FAB and FAB menu should be aligned to the left edge, and the layout of elements should be mirrored.

![1 mobile screen with a FAB, 1 with a FAB menu. Both are left aligned and mirrored for a right-to-left language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al3tfx-03.png?alt=media)

*Caption / Legend:*
In RTL languages, the FAB menu should be left-aligned with the icon and text placement mirrored

FAB menus can contain 2–6 items. These should be closely related under a single action, like **Share**.

Avoid grouping unrelated actions in the same FAB menu.

![A FAB menu with 5 options on a photo gallery UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al46l0-04.png?alt=media)

*Caption / Legend:*
FAB menus can have 2-6 items

![A FAB menu with 1 option on a photo gallery UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al4jux-05.png?alt=media)

*Caption / Legend:*
Don’t use a FAB menu with one item

When a FAB is paired with other components, like the floating toolbar or navigation rail, don’t use the FAB menu. This prevents cognitive overload and interface clutter.

![A toolbar with a FAB directly next to it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al73q3-06.png?alt=media)

*Caption / Legend:*
FABs can be placed next to toolbars and other components

![A toolbar with a FAB menu next to it.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al7run-07.png?alt=media)

*Caption / Legend:*
Don't use a FAB menu with a toolbar or navigation rail

### Color sets

FAB menus have three color sets: primary, secondary, and tertiary. Use the color set that best matches the FAB color style.

Use the primary FAB menu color set with the **primary** or **primary container** FAB color styles.

![A FAB menu using the primary color set. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0al91ki-08.png?alt=media)

*Caption / Legend:*
A primary FAB is paired with a primary FAB menu

Use the secondary FAB menu color set with the **secondary** or **secondary container** FAB color styles.

![A FAB menu using the secondary color set.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alljh0-09.png?alt=media)

*Caption / Legend:*
A secondary FAB is paired with a secondary FAB menu

Use the tertiary FAB menu color set with the **tertiary** or **tertiary container** FAB color styles.

![A FAB menu using the tertiary color set.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0almfyg-10.png?alt=media)

*Caption / Legend:*
A tertiary FAB is paired with a tertiary FAB menu

## Anatomy

![2 elements of a FAB menu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alqq5m-11.png?alt=media)

*Caption / Legend:*
1. Close button
2. List item

FAB menu items should always have label text. The icons shouldn’t be removed since they make each item easy to identify.

![A FAB menu with 3 options for selecting Food, People, or Nature. There are no icons next to the text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alqzgn-12.png?alt=media)

*Caption / Legend:*
Only remove the icon if necessary. The icon provides a differentiation between items.

![A FAB menu with 3 options for selecting Food, People, or Nature. The options are only icons, no text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0feodak-13.png?alt=media)

*Caption / Legend:*
Don’t remove the label

The list item should always hug its contents and look consistent. Avoid truncating text or setting fixed widths. All FAB menu elements should be rounded.

![A FAB menu used out of the box with no configurations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alssof-14.png?alt=media)

*Caption / Legend:*
Keep the padding between the container and icon, icon and text, and text and container consistent

![FAB menu items are equal width despite having different lengths of text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alt3lp-15.png?alt=media)

*Caption / Legend:*
Don’t expand container sizes

![FAB menu items are square instead of round.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0altd3s-16.png?alt=media)

*Caption / Legend:*
Don’t change FAB menu shapes

## Adaptive layout

The FAB menu can open from any sized FAB. Use with a FAB size suitable for the window size class. For example, larger FABs are recommended for larger windows.

The FAB menu should remain anchored to the same corner or edge regardless of window size.

In large and extra large windows, the FAB and FAB menu margins should increase from 16dp to 24dp.

![A FAB menu with 24dp margins from the edge of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0alwg82-18.png?alt=media)

*Caption / Legend:*
On desktop, use larger FABs and margins

On web, the FAB menu uses a menu component for an experience that's consistent with other desktop apps.

![A FAB menu using menu component on web and traditional FAB menu on compact screen.](https://lh3.googleusercontent.com/JR39TV-vwPs6mYgmYNupLSLvGTNxo5S0wG8x-r0qVa89Q8qAGCVWxuhQLATpYedNHvIvXtfJrhfK7HIHn99Hr2LR1_hqchcKnNdofvRXj2lL=s2048)

*Caption / Legend:*
The same FAB menu options on both large window (left) and an Android compact window (right)

## Behavior

### Appearing

The FAB should transform into the close button of the FAB menu. The menu items should appear using the [enter and exit](/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition.

Originate the transition from one of the FAB's trailing corners, preferably the top-aligned corner.

To ensure accessibility for keyboard users on the web, avoid positioning the FAB menu to completely obscure the focus indicator of an actionable element. 

Partially covering the desired element is fine, as long as the focus indicator is visible.

![FAB menu doesn’t obscure actionable element and its focus indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4hkgdmm-21.png?alt=media)

*Caption / Legend:*
Ensure the actionable element and its focus indicator are visible behind the FAB menu

![FAB menu obscures both an actionable element and its focus indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4hkgqnr-22.png?alt=media)

*Caption / Legend:*
Don’t block an actionable element and its focus indicator completely with the FAB menu

### Scrolling

When window height is limited, like when viewing phones in horizontal orientation, FAB menu items can scroll.

The items should scroll behind the close button.

### Expanding

Any FAB menu item can expand and adapt to any shape using a [container transform](/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) transition pattern. This includes a surface that is part of the app structure, or a surface that spans the entire screen.

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate and interact with the FAB menu
- Ensure focus is correct when navigating through the menu

## Interaction & style

FAB menu elements meet the minimum target size of 48dp.

![FAB menu measurement annotations. All elements are larger than the minimum target size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am5xpn-01.png?alt=media)

*Caption / Legend:*
FAB menus have 48x48dp minimum width and sufficient spacing by default

When the FAB menu can scroll, make sure the items scroll behind the close button.

The close button should always be easy to access and unobstructed.

![FAB menu items are scrolling behind the close button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am8l9a-02.png?alt=media)

*Caption / Legend:*
Allow the menu items to scroll behind the close button

![FAB menu items are scrolling in front of the close button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0am8ym2-03.png?alt=media)

*Caption / Legend:*
Don’t obstruct the close button in short screens like horizontal orientation

## Initial focus

When the FAB is selected, the FAB menu opens, and initial focus remains on the close button, which takes the place of the original FAB.

Then the focus moves from the top menu item to the bottom.

![4 FAB menus with the focus order labelled. Focus moves from the close button at the bottom to the topmost menu item next.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaejeaf9-04.png?alt=media)

*Caption / Legend:*
Focus lands on the close button. People can then navigate through all the items.

1. Close button
2. First menu item
3. Second menu item
4. Third menu item

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | Navigate to the next interactive element |
| **Space** or **Enter** | Activate the focused button or item |

## Labeling elements

### Android

On Android, a FAB menu’s close button should include a state to tell screen readers what action will occur when it's toggled. The close button should be labeled:

- Label: Toggle menu
- Role: Button
- State: Expanded or collapsed

![Accessibility labels for the close button on an Android device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmmksaup-05.png?alt=media)

*Caption / Legend:*
On Android, the **close button** accessibility labels should include a toggle menu label, button role, and an expanded or collapsed state

FAB menu items should be labeled:

- Label: Match the item’s UI text, such as **Reply all **
- Role: Button

![Accessibility labels for a FAB menu item on an Android device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmmmksh30-06.png?alt=media)

*Caption / Legend:*
Label FAB menu items to match their UI text, like **Reply all**, and use the button role

### Web

On web, a FAB menu is a combination of a FAB and a menu component. The FAB opens the menu. Follow the [accessibility guidelines for FABs](/m3/pages/fab/accessibility) and [menus](/m3/pages/menus/accessibility).

The FAB's accessibility label should describe the menu that the FAB will open.
