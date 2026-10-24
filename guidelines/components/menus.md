# Menus

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/menus](https://m3.material.io/components/menus)
> Last Updated: 2026-07-28T07:32:19.493Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use a **menu** to show a temporary set of actions. To show actions on screen at all times, use a **toolbar** instead
- Menus can open from many components, including icon buttons, split buttons, and text fields
- **Context menus** provide actions for a specific element, like an image or highlighted text, and usually open with a secondary click

![1 vertical menu with vibrant colors opens from a split button, and 1 vertical menu with a submenu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkajj6i-01.png?alt=media)

*Caption / Legend:*
Vertical menus can include vibrant colors, gaps, dividers, and submenus to organize a list of choices

## Availability & resources

## M3 Expressive update

**November 2025**

**Vertical menus** were introduced with new shapes, color styles, selection states, and refined submenu motion. Gaps can be used for a more flexible layout on Android. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants:

- Added **vertical menus**, recommended for new designs
- Baseline **menu** is still available

Color styles:

- Standard
- Vibrant

![A vertical menu using shape and vibrant color to show a selected state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhk9jsmw-02.png?alt=media)

*Caption / Legend:*
Vibrant colors help selected menu items stand out

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color
- **Variants**: Dropdown menu and exposed dropdown menu are now both referred to as menu, since they differ only in the element which opens the menu surface

![Menu with gray color.](https://lh3.googleusercontent.com/lRkDtzZzv1cQwgvOMTY_hxx5v6LvsZjXrAo_zSvv-cqgB6vH92PvSw1XJMN925XPqGDdMB1OgVKZcud6-w4b9LZg709o_yEZGMjqyhsgs6Wz=s656)

*Caption / Legend:*
M2: Former menu colors don’t contrast with the background

![Menu with purple background and outline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlt7xid-04.png?alt=media)

*Caption / Legend:*
M3: Menus feature new color mappings and dynamic color

## Specs

## Variants

### Vertical menus

Use vertical menus for a more expressive look and feel, including rounded corners, standard and vibrant color styles, more selection states, and submenu motion.

![2 vertical menus use shape and color to indicate selected state.](https://lh3.googleusercontent.com/ryW1crRfja9xt_7sPlT_XlF64XPHQjHmk6HkJ91EP23gfGW2Z1TNt8V1RsaAEt4bzOOow6wEtTrB4tk32rzhd4WL2dVMKVlbh3x6ZD3oqdK7=s2048)

*Caption / Legend:*
1. Vertical menu with gap
2. Vertical menu with divider

### Baseline variant

In M3 Expressive, baseline menu is still available to use, but doesn’t have the latest shapes, color styles, selection states, and motion. [See baseline menu specs](/m3/pages/menus/specs#a80df2f9-8610-4ce0-b3a3-b9ee749d5c98)

![A baseline menu variant with square corners and standard colors.](https://lh3.googleusercontent.com/I8AoQRDKlS29lSyVHYVs4-2PKXVQUXC_wlPJx5IT1hWiga7bEC7DZUlNH_OEoICZN5hCf8ii45dpApcg23TY6JhadwCluvznISW6HNfGKHUc=s2048)

*Caption / Legend:*
A baseline **menu** has square corners, as compared to a **vertical menu’s** round corners and expressive styling

| **Variant** | **M3** | **M3 Expressive** |
| --- | --- | --- |
| Vertical menus | -- | Available |
| Menu (baseline) | Available | Available |

## Configurations

### Vertical menus layout

![2 menus: 1 standard, and 1 with a gap, creating groups.](https://lh3.googleusercontent.com/fJlPTJ2NqSiweyHvIr8M0iPk67mplnSmEnq_2SEOW1OvhT31iv4txdTlYrXWpNvmmBVVfJJzaE_lPSakS5hW51-I3oC8XuRu0l2lxGxm7zXi=s2048)

*Caption / Legend:*
1. Standard
2. Grouped

| **Category ** | **Configuration ** | **M3** | **M3 Expressiv****e** |
| --- | --- | --- | --- |
| Color | Standard | Available | Available |
| Vibrant | -- | Available |  |
| Layout | Standard | Available | Available |
| Grouped | -- | Available |  |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Menus - Common

*Common tokens for expressive menus. For baseline menus, use "Menu (baseline)" tokens `md.comp.menu`.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.menus.active.container.shape` | `md.sys.shape.corner.large` | SHAPE | Menu active container shape |
| `md.comp.menus.menu-item.height` | 44dp | LENGTH | Menu item height |
| `md.comp.menus.horizontal.menu-item.focused.shape` | `md.sys.shape.corner.medium` | SHAPE | Menu horizontal menu item focused shape |
| `md.comp.menus.horizontal.container.shape` | `md.sys.shape.corner.full` | SHAPE | Menu horizontal container shape |
| `md.comp.menus.horizontal.menu-item.hovered.shape` | `md.sys.shape.corner.medium` | SHAPE | Menu horizontal menu item hovered shape |
| `md.comp.menus.horizontal.menu-item.pressed.shape` | `md.sys.shape.corner.medium` | SHAPE | Menu horizontal menu item pressed shape |
| `md.comp.menus.menu-item.trailing-space` | `md.sys.measurement.space200` | LENGTH | Menu item trailing space |
| `md.comp.menus.menu-item.leading-space` | `md.sys.measurement.space200` | LENGTH | Menu item leading space |
| `md.comp.menus.menu-item.trailing-icon.size` | 20dp | LENGTH | Menu item trailing icon size |
| `md.comp.menus.menu-item.top-space` | `md.sys.measurement.space100` | LENGTH | Menu item top space |
| `md.comp.menus.menu-item.between-space` | `md.sys.measurement.space150` | LENGTH | Menu item between space |
| `md.comp.menus.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Menu container elevation |
| `md.comp.menus.menu-item.bottom-space` | `md.sys.measurement.space100` | LENGTH | Menu item bottom space |
| `md.comp.menus.group.padding` | `md.sys.measurement.space25` | LENGTH | Menu group padding |
| `md.comp.menus.menu-item.leading-icon.size` | 20dp | LENGTH | Menu item leading icon size |
| `md.comp.menus.gap` | `md.sys.measurement.space25` | LENGTH | Menu gap |
| `md.comp.menus.horizontal.icon-only.gap` | `md.sys.measurement.space50` | LENGTH | Menu horizontal icon only gap |
| `md.comp.menus.menu-item.last-child.inner-corner.corner-size` | `md.sys.shape.corner.extra-small` | SHAPE | Menu item last child inner corner corner size |
| `md.comp.menus.menu-item.first-child.shape` | `md.sys.shape.corner.medium` | SHAPE | Menu item first child shape |
| `md.comp.menus.menu-item.first-child.inner-corner.corner-size` | `md.sys.shape.corner.extra-small` | SHAPE | Menu item first child inner corner corner size |
| `md.comp.menus.menu-item.last-child.shape` | `md.sys.shape.corner.medium` | SHAPE | Menu item last child shape |
| `md.comp.menus.menu-item.shape` | `md.sys.shape.corner.extra-small` | SHAPE | Menu item shape |
| `md.comp.menus.inactive.container.shape` | `md.sys.shape.corner.small` | SHAPE | Menu inactive container shape |
| `md.comp.menus.group.shape` | `md.sys.shape.corner.small` | SHAPE | Menu group shape |
| `md.comp.menus.horizontal.menu-item.leading-space` | `md.sys.measurement.space150` | LENGTH | Menu horizontal menu item leading space |
| `md.comp.menus.menu-item.trailing-supporting-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Menu item trailing supporting text weight |
| `md.comp.menus.menu-item.trailing-supporting-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Menu item trailing supporting text tracking |
| `md.comp.menus.menu-item.trailing-supporting-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Menu item trailing supporting text size |
| `md.comp.menus.menu-item.trailing-supporting-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Menu item trailing supporting text line height |
| `md.comp.menus.menu-item.trailing-supporting-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Menu item trailing supporting text font |
| `md.comp.menus.menu-item.supporting-text.weight` | `md.sys.typescale.body-small.weight` | FONT_WEIGHT | Menu item supporting text weight |
| `md.comp.menus.menu-item.supporting-text.tracking` | `md.sys.typescale.body-small.tracking` | FONT_TRACKING | Menu item supporting text tracking |
| `md.comp.menus.menu-item.supporting-text.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Menu item supporting text line height |
| `md.comp.menus.menu-item.supporting-text.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Menu item supporting text size |
| `md.comp.menus.menu-item.supporting-text.font` | `md.sys.typescale.body-small.font` | FONT_NAMES | Menu item supporting text font |
| `md.comp.menus.menu-item.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Menu item label text weight |
| `md.comp.menus.menu-item.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Menu item label text tracking |
| `md.comp.menus.menu-item.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Menu item label text size |
| `md.comp.menus.menu-item.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Menu item label text line height |
| `md.comp.menus.menu-item.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Menu item label text font |
| `md.comp.menus.menu-item.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | Menu item focus indicator outline offset |
| `md.comp.menus.menu-item.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Menu item focus indicator thickness |
| `md.comp.menus.menu-item.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Menu item focus indicator color |
| `md.comp.menus.menu-item.selected.shape` | `md.sys.shape.corner.medium` | SHAPE | Menu item selected shape |
| `md.comp.menus.horizontal.icon-only.menu-item.bottom-space` | `md.sys.measurement.space200` | LENGTH | Menu horizontal icon only menu item bottom space |
| `md.comp.menus.horizontal.icon-only.menu-item.top-space` | `md.sys.measurement.space200` | LENGTH | Menu horizontal icon only menu item top space |
| `md.comp.menus.horizontal.icon-only.menu-item.trailing-space` | `md.sys.measurement.space200` | LENGTH | Menu horizontal icon only menu item trailing space |
| `md.comp.menus.horizontal.icon-only.menu-item.leading-space` | `md.sys.measurement.space200` | LENGTH | Menu horizontal icon only menu item leading space |
| `md.comp.menus.horizontal.menu-item.bottom-space` | `md.sys.measurement.space75` | LENGTH | Menu horizontal menu item bottom space |
| `md.comp.menus.horizontal.menu-item.top-space` | `md.sys.measurement.space75` | LENGTH | Menu horizontal menu item top space |
| `md.comp.menus.horizontal.menu-item.between-space` | `md.sys.measurement.space150` | LENGTH | Menu horizontal menu item between space |
| `md.comp.menus.horizontal.menu-item.trailing-space` | `md.sys.measurement.space150` | LENGTH | Menu horizontal menu item trailing space |
| `md.comp.menus.horizontal.container.bottom-space` | `md.sys.measurement.space100` | LENGTH | Menu horizontal container bottom space |
| `md.comp.menus.horizontal.container.top-space` | `md.sys.measurement.space100` | LENGTH | Menu horizontal container top space |
| `md.comp.menus.container.shape` | `md.sys.shape.corner.large` | SHAPE | Menu container shape |
| `md.comp.menus.horizontal.menu-item.selected.pressed.shape` | `md.sys.shape.corner.full` | SHAPE | Menu horizontal menu item selected pressed shape |
| `md.comp.menus.horizontal.menu-item.selected.focused.shape` | `md.sys.shape.corner.full` | SHAPE | Menu horizontal menu item selected focused shape |
| `md.comp.menus.horizontal.menu-item.selected.hovered.shape` | `md.sys.shape.corner.full` | SHAPE | Menu horizontal menu item selected hovered shape |
| `md.comp.menus.horizontal.icon-only.menu-item.selected.shape` | `md.sys.shape.corner.full` | SHAPE | Menu horizontal icon only menu item selected shape |

#### Design Tokens: Menus - Color - Vibrant

*Color tokens for the vibrant expressive menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.menus.vibrant.menu-item.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item supporting text color |
| `md.comp.menus.vibrant.section-label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant section label text color |
| `md.comp.menus.vibrant.menu-item.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item trailing supporting text color |
| `md.comp.menus.vibrant.icon-button.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant icon button icon color |
| `md.comp.menus.vibrant.menu-item.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item leading icon color |
| `md.comp.menus.vibrant.menu-item.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item label text color |
| `md.comp.menus.vibrant.menu-item.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item trailing icon color |
| `md.comp.menus.vibrant.icon-button.container.color` | `md.sys.color.tertiary-container` | COLOR | Menu vibrant icon button container color |
| `md.comp.menus.vibrant.container.color` | `md.sys.color.tertiary-container` | COLOR | Menu vibrant container color |
| `md.comp.menus.vibrant.menu-item.color` | `md.sys.color.tertiary-container` | COLOR | Menu vibrant menu item color |
| `md.comp.menus.vibrant.menu-item.selected.container.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item selected container color |
| `md.comp.menus.vibrant.menu-item.selected.pressed.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected pressed label text color |
| `md.comp.menus.vibrant.menu-item.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu vibrant menu item selected pressed state layer opacity |
| `md.comp.menus.vibrant.menu-item.selected.pressed.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected pressed state layer color |
| `md.comp.menus.vibrant.menu-item.selected.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu vibrant menu item selected focused state layer opacity |
| `md.comp.menus.vibrant.menu-item.selected.focused.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected focused label text color |
| `md.comp.menus.vibrant.menu-item.selected.focused.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected focused state layer color |
| `md.comp.menus.vibrant.menu-item.selected.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu vibrant menu item selected hovered state layer opacity |
| `md.comp.menus.vibrant.menu-item.selected.hovered.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected hovered label text color |
| `md.comp.menus.vibrant.menu-item.selected.hovered.state-layer.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected hovered state layer color |
| `md.comp.menus.vibrant.menu-item.selected.disabled.label-text.opacity` | - | OPACITY | Menu vibrant menu item selected disabled label text opacity |
| `md.comp.menus.vibrant.menu-item.selected.disabled.supporting-text.opacity` | - | OPACITY | Menu vibrant menu item selected disabled supporting text opacity |
| `md.comp.menus.vibrant.menu-item.selected.disabled.trailing-supporting-text.opacity` | - | OPACITY | Menu vibrant menu item selected disabled trailing supporting text opacity |
| `md.comp.menus.vibrant.menu-item.selected.disabled.leading-icon.opacity` | - | OPACITY | Menu vibrant menu item selected disabled leading icon opacity |
| `md.comp.menus.vibrant.menu-item.selected.disabled.trailing-icon.opacity` | - | OPACITY | Menu vibrant menu item selected disabled trailing icon opacity |
| `md.comp.menus.vibrant.icon-button.selected.disabled.icon.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant icon button selected disabled icon color |
| `md.comp.menus.vibrant.icon-button.selected.icon.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant icon button selected icon color |
| `md.comp.menus.vibrant.icon-button.selected.container.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant icon button selected container color |
| `md.comp.menus.vibrant.menu-item.selected.trailing-icon.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected trailing icon color |
| `md.comp.menus.vibrant.menu-item.selected.leading-icon.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected leading icon color |
| `md.comp.menus.vibrant.menu-item.selected.label-text.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected label text color |
| `md.comp.menus.vibrant.menu-item.selected.trailing-supporting-text.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected trailing supporting text color |
| `md.comp.menus.vibrant.menu-item.selected.supporting-text.color` | `md.sys.color.on-tertiary` | COLOR | Menu vibrant menu item selected supporting text color |
| `md.comp.menus.vibrant.menu-item.active.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu vibrant menu item active state layer opacity |
| `md.comp.menus.vibrant.menu-item.active.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item active state layer color |
| `md.comp.menus.vibrant.menu-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu vibrant menu item pressed state layer opacity |
| `md.comp.menus.vibrant.icon-button.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant icon button pressed state layer color |
| `md.comp.menus.vibrant.menu-item.pressed.trailing-icon.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item pressed trailing icon color |
| `md.comp.menus.vibrant.menu-item.pressed.leading-icon.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item pressed leading icon color |
| `md.comp.menus.vibrant.menu-item.pressed.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item pressed trailing supporting text color |
| `md.comp.menus.vibrant.menu-item.pressed.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item pressed supporting text color |
| `md.comp.menus.vibrant.menu-item.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item pressed label text color |
| `md.comp.menus.vibrant.menu-item.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item pressed state layer color |
| `md.comp.menus.vibrant.menu-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu vibrant menu item focused state layer opacity |
| `md.comp.menus.vibrant.menu-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu vibrant menu item hovered state layer opacity |
| `md.comp.menus.vibrant.icon-button.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant icon button focused state layer color |
| `md.comp.menus.vibrant.menu-item.focused.trailing-icon.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item focused trailing icon color |
| `md.comp.menus.vibrant.menu-item.focused.leading-icon.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item focused leading icon color |
| `md.comp.menus.vibrant.menu-item.focused.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item focused trailing supporting text color |
| `md.comp.menus.vibrant.menu-item.focused.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item focused supporting text color |
| `md.comp.menus.vibrant.menu-item.focused.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item focused label text color |
| `md.comp.menus.vibrant.menu-item.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item focused state layer color |
| `md.comp.menus.vibrant.icon-button.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant icon button hovered state layer color |
| `md.comp.menus.vibrant.menu-item.hovered.trailing-icon.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item hovered trailing icon color |
| `md.comp.menus.vibrant.menu-item.hovered.leading-icon.color` | `md.sys.color.tertiary` | COLOR | Menu vibrant menu item hovered leading icon color |
| `md.comp.menus.vibrant.menu-item.hovered.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item hovered trailing supporting text color |
| `md.comp.menus.vibrant.menu-item.hovered.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item hovered supporting text color |
| `md.comp.menus.vibrant.menu-item.hovered.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item hovered label text color |
| `md.comp.menus.vibrant.menu-item.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item hovered state layer color |
| `md.comp.menus.vibrant.menu-item.disabled.trailing-icon.opacity` | - | OPACITY | Menu vibrant menu item disabled trailing icon opacity |
| `md.comp.menus.vibrant.menu-item.disabled.leading-icon.opacity` | - | OPACITY | Menu vibrant menu item disabled leading icon opacity |
| `md.comp.menus.vibrant.menu-item.disabled.trailing-supporting-text.opacity` | - | OPACITY | Menu vibrant menu item disabled trailing supporting text opacity |
| `md.comp.menus.vibrant.menu-item.disabled.supporting-text.opacity` | - | OPACITY | Menu vibrant menu item disabled supporting text opacity |
| `md.comp.menus.vibrant.menu-item.disabled.label-text.opacity` | - | OPACITY | Menu vibrant menu item disabled label text opacity |
| `md.comp.menus.vibrant.icon-button.disabled.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant icon button disabled icon color |
| `md.comp.menus.vibrant.menu-item.disabled.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item disabled trailing icon color |
| `md.comp.menus.vibrant.menu-item.disabled.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item disabled leading icon color |
| `md.comp.menus.vibrant.menu-item.disabled.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item disabled trailing supporting text color |
| `md.comp.menus.vibrant.menu-item.disabled.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item disabled supporting text color |
| `md.comp.menus.vibrant.menu-item.disabled.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu vibrant menu item disabled label text color |

#### Design Tokens: Menus - Color - Standard

*Color tokens for the standard expressive menu.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.menus.standard.menu-item.container.color` | `md.sys.color.surface-container-low` | COLOR | Menu standard menu item container color |
| `md.comp.menus.standard.section-label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard section label text color |
| `md.comp.menus.standard.icon-button.selected.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard icon button selected pressed state layer color |
| `md.comp.menus.standard.menu-item.active.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu standard menu item active state layer opacity |
| `md.comp.menus.standard.menu-item.active.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item active state layer color |
| `md.comp.menus.standard.menu-item.focused.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item focused leading icon color |
| `md.comp.menus.standard.menu-item.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item disabled leading icon color |
| `md.comp.menus.standard.menu-item.selected.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected focused state layer color |
| `md.comp.menus.standard.menu-item.selected.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu standard menu item selected focused state layer opacity |
| `md.comp.menus.standard.menu-item.selected.focused.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected focused label text color |
| `md.comp.menus.standard.menu-item.selected.focused.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected focused supporting text color |
| `md.comp.menus.standard.menu-item.selected.focused.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected focused trailing supporting text color |
| `md.comp.menus.standard.menu-item.selected.focused.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected focused leading icon color |
| `md.comp.menus.standard.menu-item.selected.focused.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected focused trailing icon color |
| `md.comp.menus.standard.menu-item.selected.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected pressed state layer color |
| `md.comp.menus.standard.menu-item.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu standard menu item selected pressed state layer opacity |
| `md.comp.menus.standard.menu-item.selected.pressed.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected pressed supporting text color |
| `md.comp.menus.standard.menu-item.selected.pressed.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected pressed leading icon color |
| `md.comp.menus.standard.menu-item.selected.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected pressed label text color |
| `md.comp.menus.standard.menu-item.selected.pressed.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected pressed trailing supporting text color |
| `md.comp.menus.standard.menu-item.selected.pressed.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected pressed trailing icon color |
| `md.comp.menus.standard.menu-item.selected.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected hovered state layer color |
| `md.comp.menus.standard.menu-item.selected.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu standard menu item selected hovered state layer opacity |
| `md.comp.menus.standard.menu-item.selected.hovered.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected hovered label text color |
| `md.comp.menus.standard.menu-item.selected.hovered.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected hovered supporting text color |
| `md.comp.menus.standard.menu-item.selected.hovered.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected hovered trailing supporting text color |
| `md.comp.menus.standard.menu-item.selected.hovered.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected hovered leading icon color |
| `md.comp.menus.standard.menu-item.selected.hovered.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected hovered trailing icon color |
| `md.comp.menus.standard.menu-item.selected.disabled.container.color` | `md.sys.color.tertiary-container` | COLOR | Menu standard menu item selected disabled container color |
| `md.comp.menus.standard.menu-item.selected.disabled.container.opacity` | - | OPACITY | Menu standard menu item selected disabled container opacity |
| `md.comp.menus.standard.menu-item.selected.disabled.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected disabled label text color |
| `md.comp.menus.standard.menu-item.selected.disabled.label-text.opacity` | - | OPACITY | Menu standard menu item selected disabled label text opacity |
| `md.comp.menus.standard.menu-item.selected.disabled.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected disabled leading icon color |
| `md.comp.menus.standard.menu-item.selected.disabled.leading-icon.opacity` | - | OPACITY | Menu standard menu item selected disabled leading icon opacity |
| `md.comp.menus.standard.menu-item.selected.disabled.trailing-icon.opacity` | - | OPACITY | Menu standard menu item selected disabled trailing icon opacity |
| `md.comp.menus.standard.menu-item.selected.disabled.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected disabled trailing icon color |
| `md.comp.menus.standard.menu-item.selected.disabled.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected disabled trailing supporting text color |
| `md.comp.menus.standard.menu-item.selected.container.color` | `md.sys.color.tertiary-container` | COLOR | Menu standard menu item selected container color |
| `md.comp.menus.standard.menu-item.selected.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected label text color |
| `md.comp.menus.standard.menu-item.selected.supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected supporting text color |
| `md.comp.menus.standard.menu-item.selected.leading-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected leading icon color |
| `md.comp.menus.standard.menu-item.selected.trailing-icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected trailing icon color |
| `md.comp.menus.standard.menu-item.selected.trailing-supporting-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard menu item selected trailing supporting text color |
| `md.comp.menus.standard.menu-item.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item pressed state layer color |
| `md.comp.menus.standard.menu-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu standard menu item pressed state layer opacity |
| `md.comp.menus.standard.menu-item.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item pressed label text color |
| `md.comp.menus.standard.menu-item.pressed.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item pressed leading icon color |
| `md.comp.menus.standard.menu-item.pressed.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item pressed trailing icon color |
| `md.comp.menus.standard.menu-item.focused.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item focused state layer color |
| `md.comp.menus.standard.menu-item.focused.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu standard menu item focused state layer opacity |
| `md.comp.menus.standard.menu-item.focused.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item focused label text color |
| `md.comp.menus.standard.menu-item.focused.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item focused trailing icon color |
| `md.comp.menus.standard.menu-item.hovered.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item hovered state layer color |
| `md.comp.menus.standard.menu-item.hovered.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu standard menu item hovered state layer opacity |
| `md.comp.menus.standard.menu-item.hovered.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item hovered label text color |
| `md.comp.menus.standard.menu-item.hovered.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item hovered leading icon color |
| `md.comp.menus.standard.menu-item.hovered.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item hovered trailing icon color |
| `md.comp.menus.standard.menu-item.disabled.trailing-icon.opacity` | - | OPACITY | Menu standard menu item disabled trailing icon opacity |
| `md.comp.menus.standard.menu-item.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item disabled trailing icon color |
| `md.comp.menus.standard.menu-item.disabled.leading-icon.opacity` | - | OPACITY | Menu standard menu item disabled leading icon opacity |
| `md.comp.menus.standard.menu-item.disabled.trailing-supporting-text.opacity` | - | OPACITY | Menu standard menu item disabled trailing supporting text opacity |
| `md.comp.menus.standard.menu-item.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item disabled supporting text color |
| `md.comp.menus.standard.menu-item.disabled.trailing-supporting-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item disabled trailing supporting text color |
| `md.comp.menus.standard.menu-item.disabled.supporting-text.opacity` | - | OPACITY | Menu standard menu item disabled supporting text opacity |
| `md.comp.menus.standard.menu-item.disabled.label-text.opacity` | - | OPACITY | Menu standard menu item disabled label text opacity |
| `md.comp.menus.standard.menu-item.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item disabled label text color |
| `md.comp.menus.standard.menu-item.trailing-supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item trailing supporting text color |
| `md.comp.menus.standard.menu-item.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item trailing icon color |
| `md.comp.menus.standard.menu-item.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item leading icon color |
| `md.comp.menus.standard.menu-item.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard menu item supporting text color |
| `md.comp.menus.standard.menu-item.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu standard menu item label text color |
| `md.comp.menus.standard.icon-button.selected.focused.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard icon button selected focused state layer color |
| `md.comp.menus.standard.icon-button.selected.hovered.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard icon button selected hovered state layer color |
| `md.comp.menus.standard.icon-button.disabled.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard icon button disabled icon color |
| `md.comp.menus.standard.icon-button.selected.icon.color` | `md.sys.color.on-tertiary-container` | COLOR | Menu standard icon button selected icon color |
| `md.comp.menus.standard.icon-button.selected.container.color` | `md.sys.color.tertiary-container` | COLOR | Menu standard icon button selected container color |
| `md.comp.menus.standard.icon-button.focused.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard icon button focused state layer color |
| `md.comp.menus.standard.icon-button.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard icon button pressed state layer color |
| `md.comp.menus.standard.icon-button.hovered.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu standard icon button hovered state layer color |
| `md.comp.menus.standard.disabled.icon-button.icon.color` | `md.sys.color.on-surface` | COLOR | Menu standard disabled icon button icon color |
| `md.comp.menus.standard.icon-button.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu standard icon button icon color |
| `md.comp.menus.standard.icon-button.container.color` | `md.sys.color.surface-container-low` | COLOR | Menu standard icon button container color |
| `md.comp.menus.standard.container.shadow-color` | `md.sys.color.shadow` | COLOR | Menu standard container shadow color |
| `md.comp.menus.standard.container.color` | `md.sys.color.surface-container-low` | COLOR | Menu standard container color |


## Anatomy

### Vertical menus

![A diagram of a vertical menu.](https://lh3.googleusercontent.com/AfTrO7v-T_4xnHi8Fa-xmOOn21wmjYQWZ9CqSCVGaG910Nd8K4lS3FqfcNgYQ0iF4FSY12e_AEjX1WNsFOOM02AuYBuTSGrwaTpCPKxUNBAQ=s2048)

*Caption / Legend:*
1. Menu item
2. Leading icon (optional)
3. Menu item text
4. Trailing icon (optional)
5. Badge (optional)
6. Trailing text (optional)
7. Container
8. Supporting text (optional)
9. Label text (optional)
10. Gap (optional)
11. Divider (optional)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

Menus have two color mappings:

- Standard: Surface-based
- Vibrant: Tertiary-based

These mappings provide options for lower or higher visual emphasis. Vibrant menus are more prominent so should be used sparingly.

![2 vertical menus: 1 with lower visual emphasis, and 1 vibrant menu with bold shades.](https://lh3.googleusercontent.com/UQTohIy6KP6b1-pM2Mvhf_SyQW6J3ibpKvf3Z5T8dI48XoYQ6DqhwG5ILCidkiXxCje50h4Tdx6VPzv1-2LVN2sSo_4JfItM9mhfrHEdHV8H=s1352)

*Caption / Legend:*
1. Standard color scheme
2. Vibrant color scheme

### Standard colors

![2 vertical menus with standard color roles mapped to 11 elements.](https://lh3.googleusercontent.com/nA4wviKihXfkWje8PlNIZNpYajfpoudcjVm30OYpC8UdMEdquwj9QeSziFOs7KjJ3IR-fioXjTLMlZsyKMaUgi3Bfy70RpHTCCsGaJX5hWkc=s2048)

*Caption / Legend:*
Vertical menus color roles used for light and dark themes:

1. On surface variant
2. On surface
3. On surface (state layer)
4. Surface container low
5. On surface variant
6. On surface variant
7. Tertiary container (selected)
8. On tertiary container (selected)
9. On surface variant
10. On surface variant
11. On tertiary container (selected)

### Vibrant colors

![2 vertical menus with vibrant color roles mapped to 11 elements.](https://lh3.googleusercontent.com/6B9lmZdfYRC5nkKI-x6hS9U37bZC1o0jRWDkYe90mc-TV-OjPicvEckz5sYKYsoyP2hRO_hR3An76jKHGR-b8qAYp_56q49AgW4kMo8Ez98=s2048)

*Caption / Legend:*
Vertical menus color roles used for light and dark themes:

1. On tertiary container
2. On tertiary container
3. On tertiary container (state layer)
4. Tertiary container
5. On tertiary container
6. On tertiary container
7. Tertiary (selected)
8. On tertiary (selected)
9. On tertiary container
10. On tertiary container
11. On tertiary (selected)

## States

States are visual representations used to communicate the status of a component or an interactive element. [More on interaction states](/m3/pages/interaction-states/overview)

Shape morphing in vertical menus creates an expressive active state. As focus moves between submenus, the corner shape changes to highlight the active menu. [More on menu focus](/m3/pages/menus/guidelines#7cc1d01b-a454-48c7-8306-e60347ffd17f)

![6 vertical menu states in light and dark themes.](https://lh3.googleusercontent.com/9y63FlzafeIP9Tth6PTh9NKO6wwrYUZqCs6PTUKqIQPfYd7apIWRsvYx91maUHu43E0GoIkm7nDVC_DZA6K-15ItBpV-1KJ550QZCGSHlzo8=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Active (main menu reveals submenu)

## Measurements

![Vertical menu marked with spacing and padding measurements.](https://lh3.googleusercontent.com/SyybBdmLyz7BXoGoAF1kjCwXx7BiZvB0e_I7bpFAIDO-W4YGSJ21CKgtu5PdH7J49aZfYEJbVPyjVFN2E9fWBLfUXDP44mP90E_Unc-g3c8=s2048)

*Caption / Legend:*
Vertical menu padding and size measurements

## Menu (baseline)

The baseline menu variant is available and continues to work in existing products. However, M3 expressive vertical menus are recommended for new designs.

### Baseline tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Menu (baseline)

*Tokens for baseline GM3 menus. For expressive menus, use `md.comp.menus` instead.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.menu.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | Menu item focus indicator offset |
| `md.comp.menu.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Menu item focus indicator thickness |
| `md.comp.menu.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Menu item focus indicator color |
| `md.comp.menu.list-item.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item focus label text color |
| `md.comp.menu.list-item.disabled.label-text.opacity` | - | OPACITY | Menu list item disabled label text opacity |
| `md.comp.menu.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Menu container elevation |
| `md.comp.menu.container.shadow-color` | `md.sys.color.shadow` | COLOR | Menu container shadow color |
| `md.comp.menu.container.shape` | `md.sys.shape.corner.extra-small` | SHAPE | Menu container shape |
| `md.comp.menu.container.color` | `md.sys.color.surface-container` | COLOR | Menu container color |
| `md.comp.menu.list-item.selected.with-leading-icon.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Menu list item with leading icon - icon color |
| `md.comp.menu.list-item.selected.with-leading-icon.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | Menu list item with trailing icon - icon color |
| `md.comp.menu.list-item.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Menu list item selected label text color |
| `md.comp.menu.list-item.selected.container.color` | `md.sys.color.secondary-container` | COLOR | Menu list item selected container color |
| `md.comp.menu.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Menu container surface tint layer color |
| `md.comp.menu.list-item.with-trailing-icon.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item pressed trailing icon color |
| `md.comp.menu.list-item.with-leading-icon.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item pressed leading icon color |
| `md.comp.menu.list-item.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item pressed label text color |
| `md.comp.menu.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu list item pressed state layer opacity |
| `md.comp.menu.list-item.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu list item pressed state layer color |
| `md.comp.menu.list-item.with-trailing-icon.focus.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item focus trailing icon color |
| `md.comp.menu.list-item.with-leading-icon.focus.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item focus leading icon color |
| `md.comp.menu.list-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu list item focus state layer opacity |
| `md.comp.menu.list-item.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu list item focus state layer color |
| `md.comp.menu.list-item.with-trailing-icon.hover.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item hover trailing icon color |
| `md.comp.menu.list-item.with-leading-icon.hover.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item hover leading icon color |
| `md.comp.menu.list-item.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item hover label text color |
| `md.comp.menu.list-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu list item hover state layer opacity |
| `md.comp.menu.list-item.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu list item hover state layer color |
| `md.comp.menu.list-item.with-trailing-icon.disabled.trailing-icon.opacity` | - | OPACITY | Menu list item disabled trailing icon opacity |
| `md.comp.menu.list-item.with-trailing-icon.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | Menu list item disabled trailing icon color |
| `md.comp.menu.list-item.with-leading-icon.disabled.leading-icon.opacity` | - | OPACITY | Menu list item disabled leading icon opacity |
| `md.comp.menu.list-item.with-leading-icon.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Menu list item disabled leading icon color |
| `md.comp.menu.list-item.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item disabled label text color |
| `md.comp.menu.cascading-menu-indicator.icon.size` | 24dp | LENGTH | Menu icon size |
| `md.comp.menu.cascading-menu-indicator.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu icon color |
| `md.comp.menu.list-item.with-trailing-icon.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item trailing icon color |
| `md.comp.menu.list-item.with-trailing-icon.trailing-icon.size` | 24dp | LENGTH | Menu list item trailing icon size |
| `md.comp.menu.list-item.with-leading-icon.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item leading icon color |
| `md.comp.menu.list-item.with-leading-icon.leading-icon.size` | 24dp | LENGTH | Menu list item leading icon size |
| `md.comp.menu.list-item.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.menu.list-item.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Menu list item label text font |
| `md.comp.menu.list-item.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Menu list item label text weight |
| `md.comp.menu.list-item.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Menu list item label text size |
| `md.comp.menu.list-item.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Menu list item label text line height |
| `md.comp.menu.list-item.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Menu list item label text tracking |
| `md.comp.menu.list-item.container.height` | 48dp | LENGTH | Menu list item container height |
| `md.comp.menu.list-item.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item label text color |
| `md.comp.menu.divider.color` | `md.sys.color.surface-variant` | COLOR | Menu divider color |
| `md.comp.menu.divider.height` | 1dp | LENGTH | Menu divider height |


### Anatomy

![Diagram of 6 elements of a baseline menu.](https://lh3.googleusercontent.com/j5d1I8gfzjOWuHT_-hl99nkZRsYTe7HewZawtXqtHSrfZhzBSF92oFrF4O2icV5C3AUdsRZTxRIgSGBhA37l-s5SWozyvwe70RLG6OwzZUSoQw=s2048)

*Caption / Legend:*
1. List item
2. List item leading icon
3. List item trailing icon
4. Container
5. List item trailing text
6. Divider

### Color

![9 color roles of a baseline menu in light and dark themes.](https://lh3.googleusercontent.com/1vrmeDpf2FtiP2c9fRq9p_aeqONtRV3zqmzYfkoIOaJesocpZ19K_ZUuMj99rTWJxwAW_r9WSMEHiVvKYKjwvUcpYtdJ5Vz60I5nTjnhGSR5=s2048)

*Caption / Legend:*
Baseline menu color roles used for light and dark themes:

1. On surface variant
2. On surface
3. On surface - opacity: 0.08
4. Surface container
5. On surface variant
6. On surface variant
7. On surface variant
8. Surface container highest
9. Outline variant

### States

#### Default menu items

![Diagram numbering the 5 default states of a baseline menu.](https://lh3.googleusercontent.com/9WZ8E98mBPsfeJqGE1w6ExWLXo1jACCCgppiykccySkhqcZCqFfrTs87Gp_XAlUNSqxRdv04cO62X2W3LQamj64dSRw2mEkG86v7cJaYZAI=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

#### Selected menu items

![5 states of a selected baseline menu item.](https://lh3.googleusercontent.com/Eg2mSAl6lckNeGZn60i3N6b7ltjvGCbssGUhr-LWmLpa2HDbKhgxvA72PVKqTsT0ho7uQZWaK_buL-Y81PKV7_GpS90CXSbLfCU9JqkRq-Y=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

[State specs are in the token module above](/m3/pages/menus/specs#c811d2fa-469a-4e4e-9d9f-0f535c5c9b4c)

### Measurements

![Diagram of a baseline menu’s padding, text alignment, height, and width.](https://lh3.googleusercontent.com/MRcY8zpznxkaZVmDq-MvnNSUQnLDJ3uftXolOX1MZ7ZczEmBCp4nro5uy3WDlxm8De9S3E9m7yoHTUtCD1IJmm-KOI975AQnrXOePAhR8TWM=s2048)

*Caption / Legend:*
Baseline menu padding and size measurements

| Attribute | Value |
| --- | --- |
| Container width | 112dp min, 280dp max |
| Corner radius | 4dp |
| Vertical label text alignment | Center-aligned |
| Horizontal label text alignment | Start-aligned |
| Left/right padding | 12dp |
| Left/right padding with-icon | 12dp |
| List item height | 48dp |
| Padding between elements within a list item | 12dp |
| Divider top/bottom padding | 8dp |
| Divider height | 1dp |
| Divider width | Dynamic |
| Leading/trailing icon size | 24dp |

### Configurations

A baseline menu appears when a person interacts with a button, action, or other control.

A few examples:

1. Button
2. Text field
3. Icon button
4. Selected text

![Examples of 4 baseline menu inputs.](https://lh3.googleusercontent.com/qaQR6Vom4qUYAtiLZOaGC34kpj4PCzx3--sowDis88NJ1VOQiwhipAIlwryE8_cYmOrso8ZXJ8O56o-PeU4ZC0SvopP5Ej5WB23rBIQmn9kL=s1004)

## Guidelines

## Usage

Use a menu to show a temporary set of actions. To show actions on screen at all times, use a toolbar instead.

A menu takes up less space than a set of radio buttons or chips.

### Color options

Menus have two color mappings:

- Standard: Surface-based, lower visual emphasis
- Vibrant: Tertiary-based, higher visual emphasis

Vibrant menus are more prominent, and should be used sparingly.

![Menu shows item “Line spacing” opening a submenu. In the second menu, “Custom 1.2” is selected with vibrant color.](https://lh3.googleusercontent.com/MfCxNMg5F-PVblTlXd6HMYiZd-Lw5KIY6xwvm7F0Pn_sCm-wiLtOMX8xTxOztwb_4xY__6nSEFl-E1txwgI6GJ2awsvnRaTuMiK0t15jyUQ=s1352)

*Caption / Legend:*
On web, menus can open submenus

### Opening menus

Menus temporarily appear in front of all other permanent UI elements.

A menu should open when a person:

- Selects an element, such as an icon, button, or text field
- Performs a specific action to trigger the menu, like right-click or press-and-hold

Use menus in situations that need extra actions, like:

- Overflow menus
- Text field dropdown menus
- Select menus
- Context menus

![A grouped menu with Undo, Redo, Cut, Copy, and Paste options appear over highlighted text in an ebook.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlkhju5-04.png?alt=media)

*Caption / Legend:*
Menus appear in front of all other UI elements

### Menu groups

Vertical menu items can be grouped by adding a divider or small gap. Use groups to bundle similar actions together.

[Gaps and dividers guidelines](/m3/pages/menus/guidelines#d75ac70c-9122-4b4c-bd60-b856bc66c9bc)

![2 vertical menus: a standard menu with no gap and a grouped menu with 1 gap.](https://lh3.googleusercontent.com/6e3Jr7pvYamV89OCHR395lTYFRLLVJsUseXpeuESUaJGC8qKEa1geMsIaYbWGi2O0l2OjBKn5rznan6ZXFBXTCAtf6e3IrBCNPyif9t2Hv5G=s1352)

*Caption / Legend:*
Menu items can be grouped to be more scannable:

1. Standard vertical menu
2. Grouped vertical menu

### Context menus

Context menus provide a list of additional actions a person can take on an item. A secondary click, like a right-click on a mouse or a two-finger tap on a trackpad, opens a context menu.

![A context menu pops up from a newspaper link. The menu items are: Open in new window, Save link as, Copy address, and Inspect.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlkwxab-06.png?alt=media)

*Caption / Legend:*
A context menu appears when right clicking with a mouse or trackpad. It can reveal key actions related to the associated content.

## Anatomy

![Diagram outlining 11 elements of a menu’s anatomy.](https://lh3.googleusercontent.com/23G6to4Ij-HsQF2iAQsFg737t4f1InY3ANqqt-NYDrCj4ajmDFHSL7o3BTM7CHvUGdR8bTgcGg-OWPY5sp5qepK-LfRRWNZg8b1gwuq3gjU=s2048)

*Caption / Legend:*
1. Menu item
2. Leading icon (optional)
3. Menu item text
4. Trailing icon (optional)
5. Badge (optional)
6. Trailing text (optional)
7. Container
8. Supporting text (optional)
9. Label text (optional)
10. Gap (optional)
11. Divider (optional)

### Menu items

Menu items can include label text, leading icons, trailing icons, and keyboard commands.

When a menu item can only be used under specific conditions, it should appear disabled rather than be removed.

![Menu shows 1 item that’s  disabled, “Redo”. The text color of the disabled item is lighter than the active items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhll6qil-08.png?alt=media)

*Caption / Legend:*
The **Redo** action is disabled when that action isn’t available

### Gaps & dividers (optional)

Gaps and dividers can be used to separate and group menu items.

**Gaps **

Use a gap to visually divide menu items into distinct groups. Gaps are more expressive than dividers and make the relationship between items clear.

- Avoid changing the size of the gap
- Limit the number of gaps in a menu to one or two
- Don’t use gaps in scrollable menus

![2 vertical menus with 5 items. A gap separates items into a group of 3 and group of 2.](https://lh3.googleusercontent.com/nziJZIcye1oWsr-CrUorKQfgSBAvZMJQWCIaL-tKUJQA2oDY0EbExVpZu3EAaZSC8iljeK6nDpywWbMkK3mSwPrPm7r6JAVwtzHODDztJ9LdXw=s1352)

*Caption / Legend:*
Gaps separate menu items using expressive shapes

starNote:Gaps are not currently available on web

**Dividers**

Dividers create a more subtle separation between items. Use a divider for:

- Scrollable menus
- Text fields with a dropdown menu, where a grouped treatment isn’t appropriate

On web, use a divider to separate menu items.

![A menu on a web interface with items separated by a divider line.](https://lh3.googleusercontent.com/cguRYPI0KSnDbH8G-NsW_ChXLpqPsALNJLlbJiTLKfq99BgdHykJsf40GtSSBeubhxXoiDV74Gjhy3LlmJV8QlE3ZYHAteUNjkNheqp0V2h-=s1352)

*Caption / Legend:*
Dividers separate menu items in baseline menus and on web

## Flexibility & slots

Menus have custom slots that support more flexible item layouts.

When creating a complicated menu, think of the menu item as a container with a swappable slot.

Slots work best with simple content such as:

- Images
- Progress indicators
- Color swatches

![A menu showing an undefined slot that could be used for a different element, such as an image.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhllndkg-11.png?alt=media)

*Caption / Legend:*
Slots can appear anywhere in a menu

**Slot accessibility**

Use caution when adding slots to menus:

- Make sure the menu remains accessible
- Elements must follow the rules and interaction patterns of the menu component
- Keep the same menu item padding
- Targets should be 48x48dp or larger

Don't add buttons, switches, or other direct actions into the menu item. Nested elements should only perform one action. Adding multiple actions can break keyboard navigation and screen reader functionality.

[More on required accessibility guidelines](/m3/pages/menus/accessibility/)

![1 diagram and 1 menu showing icons in each item’s leading slot.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhllqs3p-12-alt.png?alt=media)

*Caption / Legend:*
Reserve the use of slots for use cases that maintain the menu’s accessibility and functionality

## Placement

A menu is positioned relative to the window edge. It typically appears below, next to, or in front of the element that generates it.

If a menu is in a position to be cut off, it should automatically reposition to appear to the left, right, or above the element that generates it.

![6 abstract shapes showing how a menu can extend from the edge of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhllv77j-13.png?alt=media)

*Caption / Legend:*
Menus can appear around or in front of the element that opened them

### Submenus

Submenus should open next to the parent menu item without overlapping it.

Submenus are best used on large screens where there's space. [See adaptive guidance](/m3/pages/menus/guidelines#e588ae16-7a76-4bf9-8532-8d931a13ca35) for alternatives on mobile.

![A submenu opens to the right of its parent menu item, and doesn’t cover it. A selected submenu item includes a checkmark and vibrant highlight.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlm1f1q-15.png?alt=media)

*Caption / Legend:*
Position submenus to the side of the parent item

starNote:Submenus are not currently available on Jetpack Compose

## Adaptive design

### Compact breakpoints

Consider adapting menus into bottom sheets on small screens. They have more space to display additional items and longer labels.

![A bottom sheet shows longer labels and improved readability on a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlm7yx1-16.png?alt=media)

*Caption / Legend:*
A bottom sheet can replace a menu on smaller screens

### Other breakpoints

On medium and expanded windows, menus are most effective as they appear in context with the content. On larger screens, menus can also display more items, and can use submenus to organize complex sets of options.

![A menu with vibrant color on a mid-size screen, with the same elements as a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlmbxni-17.png?alt=media)

*Caption / Legend:*
On large screens, a menu is often more appropriate than a bottom sheet

## Behavior

### Appearing

A menu can appear when a person interacts with an element on the page, like a button, text field, filter chip, or highlighted text.

A menu’s position on screen affects where and how it appears. If opened at the top of the screen, it expands downwards to avoid being cropped.

**Motion**

Menus use an enter and exit transition. This animation creates a relationship between the menu and the element that generates it.

When a menu expands, the trigger element becomes pressed. When an item is selected, a ripple appears on touch.

In dense products, such as on desktop, menus can open instantly to reduce motion.

### Filtering

A menu can include a text field to filter options. This pattern is also known as autocomplete.

As someone types, the list of menu options filters to show relevant results. This helps people quickly find the right option from a long list.

Menu items ease into their new position as the menu is filtered.

### Scrolling

Menus can scroll when all menu items can’t display at once. In this state, menus show a persistent scrollbar.

Don’t use gaps if a menu scrolls; this is currently unsupported.

### Selecting

When a menu is opened, the corresponding button or icon button should remain the same visually, with the addition of a pressed state.

This should happen even when opening from a keyboard shortcut.

![The overflow icon remains the same, even after the menu is opened.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhlohkz8-28.png?alt=media)

*Caption / Legend:*
Tapping the icon triggers a menu. Choosing a menu option doesn’t change the icon generating the menu.

### Single- and multi-select menus

Menus can allow either single-select or multi-select actions:

- **Single-select** menus can have one item selected at a time. When a new item is selected, the previously selected item is automatically unselected.
- **Multi-select** menus can have many selected items. They stay open until the person dismisses the menu.

[More on selection accessibility requirements](/m3/pages/menus/accessibility#149778c9-eb42-4a56-8a0b-9932181ac2cd)

![1 menu for dietary options shows a single selection, Vegan. Another menu shows Vegan and Nut-free selections at the same time. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkpbo8d-30.png?alt=media)

*Caption / Legend:*
Menus can be single- or multi-select

## Focus

When a menu has multiple submenus, focus follows the current hovered or focused submenu.

**Shape morphing **

As a person moves from one submenu to the next, the corners of the focused submenu become more rounded, while the unfocused submenu becomes less rounded. This adds a dynamic quality to menu interactions.

## Density

On web only, density levels control the spacing between elements. Increasing density decreases the top and bottom padding. [More on layout density](/m3/pages/understanding-layout/density)

![4 menus becoming increasingly dense and compressed.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhloonkj-32.png?alt=media)

*Caption / Legend:*
Density of menus from 0 to -3

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate to, open, and close a menu
- Navigate between and select menu items

## Interaction & style

Menu items need certain cues to clearly show when they're selected:

- By default, menu items change shape and color when selected
- The default color contrast is 3:1 between selected and unselected menu items
- It's recommended to include another visual cue, like a checkmark

![A state dropdown menu with the selected item Alaska highlighted in a vibrant color, with a checkmark icon.](https://lh3.googleusercontent.com/sQHnduUnTdZmXVul2Np64bpBWRigAhD_49ObKd4Ks5y6nO0DHiY9tADgizMA9vOTkfNS_w-InRysGae7hxIwcyap_iuISouSE2W03bRdQWM=s1352)

*Caption / Legend:*
Use multiple visual cues like color, shape, and icons to show that an item is selected

## Flexibility & slots

Use caution when adding slots to menus:

- Make sure the menu remains accessible
- Elements must follow the rules and interaction patterns of the menu component
- Keep the same menu item padding
- Targets should be 48x48dp or larger

Don't add buttons, switches, or other direct actions into the menu item. Nested elements should only perform one action. Adding multiple actions can break keyboard navigation and screen reader functionality.

[More on slots in menus](/m3/pages/menus/guidelines#8a1684bb-99a5-4a73-91a0-068d0b406127)

![1 diagram and 1 menu showing icons in each item’s leading slot.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkskcq8-02-caution.png?alt=media)

*Caption / Legend:*
Reserve the use of slots for use cases that maintain the menu’s accessibility and functionality

## Focus

**Initial focus**

When a menu opens, focus should be placed on the first menu item. This allows people using a keyboard or other assistive technologies to begin navigating the menu immediately.

**Exiting a menu**

People expect to exit a menu by:

- Selecting an option
- Tapping **Escape** or outside of the menu
- Using the system back button

Where focus is placed after closing the menu depends on the app.

![4 common keyboard navigation methods for menus on Android and web.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkewf5t-03.png?alt=media)

*Caption / Legend:*
Keyboard navigation on Android and web:

1. **Tab** to select a menu item
2. **Space** or **Enter** to open a menu
3. **Space** or **Enter** to select a menu item
4. **Escape** to close a menu

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | Focus lands on menu |
| **Space **or** Enter** | For closed menus: Opens menu or submenu For open menus: Selects a menu item |
| **Up** and **Down** arrows | For closed menus: Opens menu For open menus: Moves focus to the next item |
| **Left** and **Right** arrows | Opens or closes a submenu |
| **Letters** | Focus moves to the next menu item starting with letter |
| **Escape** | Closes menu |

## Interactability

Disabled menu items can receive focus but aren't selectable.

Dividers and gaps can't receive focus.

![A disabled menu item “Share” is in focus.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkkp9r3-05-do.png?alt=media)

*Caption / Legend:*
Disabled menu items can receive focus

![A divider with focus.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkkqmt3-05-don't.png?alt=media)

*Caption / Legend:*
A divider or gap can’t receive focus

On web, submenus have a **magic triangle** behavior for more intuitive mouse navigation.

This keeps the submenu open when the mouse moves within a triangular area between the triggering item and the submenu.

[More on submenus](/m3/pages/menus/guidelines#5b3a92ec-a694-4ea7-87ad-0fbf87344cab)

## Labeling elements

Accessibility labels are used with assistive technology devices like screen readers.

The accessibility label should be the same as the menu item text.

The role is [dependent on platform](/m3/pages/menus/accessibility#9c562e2c-da3a-4212-a2e3-ac91ba450b65).

![A “Preview” menu item has an accessibility label of ”preview”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkl2sea-07.png?alt=media)

*Caption / Legend:*
The menu item’s accessibility label aligns with the UI text

| **Element** | **A11y label** | **Role (Web)** | **Role (Android Views) ** | **Role (Jetpack Compose)** |
| --- | --- | --- | --- | --- |
| Menu item text | Preview | Menu item | Generic actionable element | Generic actionable element |

For menu items with text and an icon, the icon’s accessibility label should be marked as **decorative** to avoid redundant verbalizations.

![A menu item icon of an eye next to the word “preview” has a note of “Decorative.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmhkkynea-08.png?alt=media)

*Caption / Legend:*
For menu items with text and an icon, the icon’s accessibility label is **decorative**
