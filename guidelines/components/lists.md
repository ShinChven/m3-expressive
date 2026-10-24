# Lists

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/lists](https://m3.material.io/components/lists)
> Last Updated: 2026-08-06T17:09:16.197Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use lists to help people find a specific item and act on it
- Order list items in logical ways, like alphabetical or numerical
- Keep items short and easy to scan
- Show icons, text, and actions in a consistent format
- Choose between standard and segmented styles

![1 list contains 3 items, each with a label text, supporting text, and trailing text. A music app shows list items with leading images.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8nxjh0-01.png?alt=media)

*Caption / Legend:*
A list item's label text, supporting text, image, and trailing icon can be customized to create a variety of lists

## Availability & resources

## M3 Expressive update

Lists have a new segmented visual style, improved selection treatment, and support for slots. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**December 2025**

Variants:

- Added **expressive** list

- Recommended for new designs

- List (baseline) is still available

New visual styles:

- Standard or segmented
- Highlighted selection states
- Flexible slots

Supported platforms:

- [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/components/List.md#m3-expressive)
- [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#ListItem%28kotlin.Function0,androidx.compose.ui.Modifier,kotlin.Function0,kotlin.Function0,kotlin.Function0,kotlin.Function0,androidx.compose.material3.ListItemColors,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp%29)

![2 party planning lists with 2 completed list items each. In 1 list, the selected items are highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8pwbjv-02.png?alt=media)

*Caption / Legend:*
Expressive lists feature improved selection states

## Differences from M2 to M3 baseline

- **Color:** New color mappings and compatibility with dynamic color
- **Layout:** Padding and spacing rules are updated to be more consistent
- **Height:** The tallest element within a list item determines the list item’s height - either 56dp, 72dp, or 88dp
- **Alignment:**

- In most cases, elements in a list item are middle-aligned
- If a list is 88dp or larger, or contains three or more lines of text, elements are top-aligned

![3 variants of lists in M2.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8q1tdh-03.png?alt=media)

*Caption / Legend:*
M2: Non-standard heights and alignments

![3 variants of lists in M3 baseline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8q2xsp-04.png?alt=media)

*Caption / Legend:*
M3 (baseline): Standardized heights and alignments

## Specs

## Variants

### Expressive lists

Use the expressive list variant for more flexible styling, highlighted selection states, and customizable slots.

![2 expressive lists: a photos list on a tablet, and a song list on mobile.](https://lh3.googleusercontent.com/za34_v9MVYFLgx4_LMophxugdmjrYW0gWSPfWtA_ntmDC74Lx_qID9YyOa7IEqJ73xCrYnCAXghjFmDugBK86DdvpEUUKbkfWTYCA2pV5iwt=s2048)

*Caption / Legend:*
An **expressive list** has a segmented style and round corners

### Baseline lists

Baseline lists are still available to use, but don’t have the latest visual style, selection treatment, and slot functionality.

On web, expressive lists are built on top of baseline lists.

[See baseline list specs](/m3/pages/lists/specs#94cf7f4d-fe29-4fab-9aae-a99e9b754329)

![3 baseline list items with square corners.](https://lh3.googleusercontent.com/N4Dqm-y0qh8NW2KuKAqcRAmf_oyfUyeY2HgR3cHvoCwL-cM6j7fuAg97gGrX73Rs25WTv-POEG1ZSlXeyFPRkjhexmngaaSJMDJV0azeZXhV=s2048)

*Caption / Legend:*
**Baseline list items** have square corners and standard colors

| **Variants** | **M3** | **M3 Expressive** |
| --- | --- | --- |
| Lists (expressive) | -- | Available |
| Lists (baseline) | Available | Not recommended. Use expressive lists instead. |

## Configurations

### Styles

The standard and segmented styles are a visual choice, and don’t affect a list’s behavior.

![A standard list and segmented list in dark mode.](https://lh3.googleusercontent.com/AjWZ3hS3wVVBYsai8chTl-DhNYum8MkyLgX24Q1dLLV43O6P2gRIbTqcrvQMXwyFG9Jai3R-zExVwkBZ5A3QZGW4EryAzfylOS6N0FB1brD8=s2048)

*Caption / Legend:*
1. Standard
2. Segmented

### List selection

A list can have only one selection mode at a time. For example, a single-action list can change to a multi-select list, but can’t be both at once.

![A single-action list with 4 items and no additional actions.](https://lh3.googleusercontent.com/b5GgNFwCct9zCo3T-5FIclsjz95tsQWzwwptHqyfIs9ooGmMg8C4FLlknKKmivn_ho5bbYRLRnaxophUvZLmKrLqm1bkGF4tEyHNR4_CObV0og=s1004)

*Caption / Legend:*
In a **single-action list**, each item is a single tappable area

![A list with 4 items. Each item has 2 trailing icons for additional actions.](https://lh3.googleusercontent.com/YZNJPefhDxEZHejO2AZtRcJlJmExP5SKLT5whDkHInauUNxfIgYBOXhlhXukAnjNfZRDhVUlk5fRz8QNgGAWqUaDPYkKANg3ZJ1vyK0GXZA=s1004)

*Caption / Legend:*
**Multi-action list** items include a primary action, and one or more secondary actions

![A list with 1 item selected.](https://lh3.googleusercontent.com/N1XQO63f9X32oDtv-OfmhY2QXVt4JpIIbZVk7BmB_2FcLR7QDWORgKJOQkA81-R5pujkxNiZHTMRgjMuAcytlrMERtLFsohNDJDu888bY3g=s1004)

*Caption / Legend:*
A **single-select list**

![A list with 2 items selected.](https://lh3.googleusercontent.com/ANybLHYX4h2Z9SkeL_p_Pp1K3Wg9plho_Lbg3-Z5d7NwszrsXTlRm434BJIm0mbM1Km5s9XFun2jYrYZqVcj3vRF0rRY-Dk3ZpeQLYrzooMq=s1004)

*Caption / Legend:*
A **multi-select list**

### List interactions

Lists can:

- [Expand and collapse](/m3/pages/lists/guidelines#90a236ee-b587-4361-8911-34006f25a6f1)
- [Swipe to reveal](/m3/pages/lists/guidelines#01204f7d-ce32-4739-aece-e95db24858c9)*

[More on list interaction accessibility](/m3/pages/lists/accessibility#a6f937f5-3e1f-4db4-ba35-ac6dd9fef140)

![A list item is swiped, and reveals 3 more actions.](https://lh3.googleusercontent.com/7CIUKy6Fim2680D81iGn6XanxNoVlnFioAJfyYiwtTyF2xh2_RvyyLsLSFZoUj6LRfn6MVEyvaHyv_W0q2Al0pNkZL2JYjKuWHfF8q1vLvk=s1004)

*Caption / Legend:*
A list item can be **swiped** to reveal more actions

| **Category** | **Configuration** | **M3** | **M3 Expressive** |
| --- | --- | --- | --- |
| Styles | Standard | Available | Available |
| Segmented | -- | Available |  |
| Selection modes | Single-action, multi-action, single-select, multi-select | Available | Available |
| Interactions | Expand, swipe* | Available | Available |

* Swipe-to-reveal interactions are only available on Android Views

## Tokens & specs

Use the table's menu to select a token set. The **common** set combines baseline tokens with new expressive shapes and sizes. The **expand** set has tokens for the expand interaction. [Learn about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: List - Common

*Common baseline and expressive list tokens. *

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.list.list-item.selected.dragged.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected dragged expressive shape |
| `md.comp.list.list-item.selected.pressed.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected pressed expressive shape |
| `md.comp.list.list-item.selected.focused.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected focsued expressive shape |
| `md.comp.list.list-item.selected.hovered.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected hovered expressive shape |
| `md.comp.list.list-item.selected.disabled.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected disabled expressive shape |
| `md.comp.list.list-item.selected.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected expressive shape |
| `md.comp.list.list-item.dragged.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container dragged expressive shape |
| `md.comp.list.list-item.pressed.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container pressed expressive shape |
| `md.comp.list.list-item.focused.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container focused expressive shape |
| `md.comp.list.list-item.hovered.container.expressive.shape` | `md.sys.shape.corner.medium` | SHAPE | List list item container hovered expressive shape |
| `md.comp.list.list-item.disabled.container.expressive.shape` | `md.sys.shape.corner.extra-small` | SHAPE | List list item container disabled expressive shape |
| `md.comp.list.list-item.leading-avatar.shape` | `md.sys.shape.corner.full` | SHAPE | List list item leading avatar shape |
| `md.comp.list.list-item.selected.container.shape` | `md.sys.shape.corner.large` | SHAPE | List list item selected container shape |
| `md.comp.list.list-item.leading-image.expressive.shape` | `md.sys.shape.corner.small` | SHAPE | List list item leading image expressive shape |
| `md.comp.list.list-item.leading-image.shape` | `md.sys.shape.corner.none` | SHAPE | List list item leading image shape |
| `md.comp.list.list-item.leading-video.shape` | `md.sys.shape.corner.small` | SHAPE | List list item leading video shape |
| `md.comp.list.list-item.selected.disabled.trailing-icon.opacity` | - | OPACITY | List list item selected disabled trailing icon opacity |
| `md.comp.list.list-item.selected.disabled.leading-icon.opacity` | - | OPACITY | List list item selected disabled leading icon opacity |
| `md.comp.list.list-item.selected.disabled.state-layer.opacity` | - | OPACITY | List list item selected disabled state layer opacity |
| `md.comp.list.list-item.selected.disabled.overline.opacity` | - | OPACITY | List list item selected disabled overline opacity |
| `md.comp.list.list-item.selected.disabled.trailing-supporting-text.opacity` | - | OPACITY | List list item selected disabled trailing supporting text opacity |
| `md.comp.list.list-item.selected.disabled.supporting-text.opacity` | - | OPACITY | List list item selected disabled supporting text opacity |
| `md.comp.list.list-item.selected.disabled.label-text.opacity` | - | OPACITY | List list item selected disabled label text opacity |
| `md.comp.list.list-item.selected.disabled.container.opacity` | - | OPACITY | List list item selected disabled container opacity |
| `md.comp.list.list-item.selected.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled trailing icon color |
| `md.comp.list.list-item.selected.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled leading icon color |
| `md.comp.list.list-item.selected.disabled.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled state layer color |
| `md.comp.list.list-item.selected.disabled.overline.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled overline color |
| `md.comp.list.list-item.selected.disabled.trailing-supporting-text.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled trailing supporting text color |
| `md.comp.list.list-item.selected.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled supporting text color |
| `md.comp.list.list-item.selected.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled label text color |
| `md.comp.list.list-item.selected.disabled.container.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled container color |
| `md.comp.list.list-item.leading-avatar.size` | 40dp | LENGTH | List list item leading avatar size |
| `md.comp.list.list-item.trailing-icon.expressive.size` | 20dp | LENGTH | List list item trailing icon expressive size |
| `md.comp.list.list-item.leading-avatar-label.type` | - | TYPOGRAPHY | List list item leading avatar label type |
| `md.comp.list.list-item.leading-avatar-label.font` | `md.sys.typescale.title-medium.font` | FONT_NAMES | List list item leading avatar label font |
| `md.comp.list.list-item.leading-avatar-label.weight` | `md.sys.typescale.title-medium.weight` | FONT_WEIGHT | List list item leading avatar label weight |
| `md.comp.list.list-item.leading-avatar-label.size` | `md.sys.typescale.title-medium.size` | FONT_SIZE | List list item leading avatar label size |
| `md.comp.list.list-item.leading-avatar-label.line-height` | `md.sys.typescale.title-medium.line-height` | LINE_HEIGHT | List list item leading avatar label line height |
| `md.comp.list.list-item.leading-avatar-label.tracking` | `md.sys.typescale.title-medium.tracking` | FONT_TRACKING | List list item leading avatar label tracking |
| `md.comp.list.list-item.trailing-icon.size` | 24dp | LENGTH | List list item trailing icon size |
| `md.comp.list.list-item.two-line.container.height` | 72dp | LENGTH | Two lines list item container height |
| `md.comp.list.list-item.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | List list item label text weight |
| `md.comp.list.list-item.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | List list item label text size |
| `md.comp.list.list-item.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | List list item label text tracking |
| `md.comp.list.list-item.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | List list item label text line height |
| `md.comp.list.list-item.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | List list item label text font |
| `md.comp.list.list-item.trailing-supporting-text.weight` | `md.sys.typescale.label-small.weight` | FONT_WEIGHT | List list item trailing supporting text weight |
| `md.comp.list.list-item.trailing-supporting-text.tracking` | `md.sys.typescale.label-small.tracking` | FONT_TRACKING | List list item trailing supporting text tracking |
| `md.comp.list.list-item.supporting-text.type` | - | TYPOGRAPHY | List list item supporting text type |
| `md.comp.list.list-item.supporting-text.font` | `md.sys.typescale.body-medium.font` | FONT_NAMES | List list item supporting text font |
| `md.comp.list.list-item.supporting-text.weight` | `md.sys.typescale.body-medium.weight` | FONT_WEIGHT | List list item supporting text weight |
| `md.comp.list.list-item.supporting-text.size` | `md.sys.typescale.body-medium.size` | FONT_SIZE | List list item supporting text size |
| `md.comp.list.list-item.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` | LINE_HEIGHT | List list item supporting text line height |
| `md.comp.list.list-item.supporting-text.tracking` | `md.sys.typescale.body-medium.tracking` | FONT_TRACKING | List list item supporting text tracking |
| `md.comp.list.list-item.overline.tracking` | `md.sys.typescale.label-small.tracking` | FONT_TRACKING | List list item overline tracking |
| `md.comp.list.list-item.overline.type` | - | TYPOGRAPHY | List list item overline type |
| `md.comp.list.list-item.overline.font` | `md.sys.typescale.label-small.font` | FONT_NAMES | List list item overline font |
| `md.comp.list.list-item.overline.weight` | `md.sys.typescale.label-small.weight` | FONT_WEIGHT | List list item overline weight |
| `md.comp.list.list-item.overline.size` | `md.sys.typescale.label-small.size` | FONT_SIZE | List list item overline size |
| `md.comp.list.list-item.overline.line-height` | `md.sys.typescale.label-small.line-height` | LINE_HEIGHT | List list item overline line height |
| `md.comp.list.list-item.trailing-supporting-text.size` | `md.sys.typescale.label-small.size` | FONT_SIZE | List list item trailing supporting text size |
| `md.comp.list.list-item.trailing-supporting-text.line-height` | `md.sys.typescale.label-small.line-height` | LINE_HEIGHT | List list item trailing supporting text line height |
| `md.comp.list.list-item.trailing-supporting-text.font` | `md.sys.typescale.label-small.font` | FONT_NAMES | List list item trailing supporting text font |
| `md.comp.list.list-item.trailing-supporting-text.type` | - | TYPOGRAPHY | List list item trailing supporting text type |
| `md.comp.list.list-item.label-text.type` | - | TYPOGRAPHY | List list item label text type |
| `md.comp.list.list-item.small.leading-video.height` | 56dp | LENGTH | List list item small leading video height |
| `md.comp.list.list-item.leading-image.height` | 56dp | LENGTH | List list item leading image height |
| `md.comp.list.list-item.large.leading-video.width` | 114dp | LENGTH | List list item large leading video width |
| `md.comp.list.list-item.large.leading-video.height` | 64dp | LENGTH | List list item large leading video height |
| `md.comp.list.list-item.small.leading-video.width` | 100dp | LENGTH | List list item small leading video width |
| `md.comp.list.list-item.leading-video.width` | 100dp | LENGTH | List list item leading video width |
| `md.comp.list.list-item.leading-image.width` | 56dp | LENGTH | List list item leading image width |
| `md.comp.list.list-item.leading-icon.size` | 24dp | LENGTH | List list item leading icon size |
| `md.comp.list.list-item.leading-icon.expressive.size` | 20dp | LENGTH | List list item leading icon expressive size |
| `md.comp.list.list-item.three-line.container.height` | 88dp | LENGTH | Three lines list item container height |
| `md.comp.list.list-item.one-line.container.height` | 56dp | LENGTH | One line list item container height |
| `md.comp.list.list-item.container.expressive.shape` | `md.sys.shape.corner.extra-small` | SHAPE | List list item container expressive shape |
| `md.comp.list.container.shape` | `md.sys.shape.corner.large` | SHAPE | List container shape |
| `md.comp.list.list-item.container.shape` | `md.sys.shape.corner.none` | SHAPE | List list item container shape |
| `md.comp.list.segmented.gap` | `md.sys.measurement.space25` | LENGTH | List segment gap |
| `md.comp.list.divider.bottom-space` | `md.sys.measurement.space0` | LENGTH | List list item divider bottom space |
| `md.comp.list.divider.top-space` | `md.sys.measurement.space0` | LENGTH | List list item divider top space |
| `md.comp.list.list-item.between-space` | `md.sys.measurement.space150` | LENGTH | List list item between space |
| `md.comp.list.divider.trailing-space` | `md.sys.measurement.space200` | LENGTH | List list item divider trailing space |
| `md.comp.list.divider.leading-space` | `md.sys.measurement.space200` | LENGTH | List list item divider leading space |
| `md.comp.list.list-item.bottom-space` | `md.sys.measurement.space125` | LENGTH | List list item bottom space |
| `md.comp.list.list-item.top-space` | `md.sys.measurement.space125` | LENGTH | List list item top space |
| `md.comp.list.list-item.selected.dragged.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected dragged leading icon color |
| `md.comp.list.list-item.dragged.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item dragged trailing icon color |
| `md.comp.list.list-item.selected.dragged.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected dragged trailing icon color |
| `md.comp.list.list-item.dragged.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item dragged leading icon color |
| `md.comp.list.list-item.selected.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected dragged state layer color |
| `md.comp.list.list-item.selected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | List list item selected dragged state layer opacity |
| `md.comp.list.list-item.selected.pressed.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected pressed leading icon color |
| `md.comp.list.list-item.selected.pressed.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected pressed trailing icon color |
| `md.comp.list.list-item.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected pressed label text color |
| `md.comp.list.list-item.selected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected pressed state layer color |
| `md.comp.list.list-item.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | List list item selected pressed state layer opacity |
| `md.comp.list.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | List list item pressed state layer opacity |
| `md.comp.list.list-item.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item pressed label text color |
| `md.comp.list.list-item.selected.focus.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected focus trailing icon color |
| `md.comp.list.list-item.selected.focus.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected focus leading icon color |
| `md.comp.list.list-item.selected.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected focus label text color |
| `md.comp.list.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | List list item focus indicator thickness |
| `md.comp.list.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | List list item focus indicator offset |
| `md.comp.list.list-item.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item focus label text color |
| `md.comp.list.list-item.selected.hover.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected hover leading icon color |
| `md.comp.list.list-item.selected.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected hover label text color |
| `md.comp.list.list-item.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | List list item selected hover state layer opacity |
| `md.comp.list.list-item.selected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected hover state layer color |
| `md.comp.list.list-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | List list item hover state layer opacity |
| `md.comp.list.list-item.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item hover label text color |
| `md.comp.list.list-item.hover.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item hover leading icon color |
| `md.comp.list.list-item.selected.hover.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected hover trailing icon color |
| `md.comp.list.list-item.disabled.trailing-icon.opacity` | - | OPACITY | List list item disabled trailing icon opacity |
| `md.comp.list.list-item.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item disabled trailing icon color |
| `md.comp.list.list-item.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | List list item disabled supporting text color |
| `md.comp.list.list-item.disabled.overline.color` | `md.sys.color.on-surface` | COLOR | List list item disabled overline color |
| `md.comp.list.list-item.disabled.label-text.opacity` | - | OPACITY | List list item disabled label text opacity |
| `md.comp.list.list-item.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item disabled leading icon color |
| `md.comp.list.list-item.disabled.state-layer.opacity` | - | OPACITY | List list item disabled state layer opacity |
| `md.comp.list.list-item.disabled.overline.opacity` | - | OPACITY | List list item disabled overline opacity |
| `md.comp.list.list-item.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item disabled label text color |
| `md.comp.list.list-item.disabled.supporting-text.opacity` | - | OPACITY | List list item disabled supporting text opacity |
| `md.comp.list.list-item.disabled.leading-icon.opacity` | - | OPACITY | List list item disabled leading icon opacity |
| `md.comp.list.list-item.disabled.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item disabled state layer color |
| `md.comp.list.list-item.selected.overline.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected overline color |
| `md.comp.list.list-item.selected.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected trailing icon color |
| `md.comp.list.list-item.selected.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected leading icon color |
| `md.comp.list.list-item.selected.supporting-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected supporting text color |
| `md.comp.list.list-item.selected.trailing-supporting-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected trailing supporting text color |
| `md.comp.list.list-item.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected label text color |
| `md.comp.list.list-item.selected.container.color` | `md.sys.color.secondary-container` | COLOR | List list item selected container color |
| `md.comp.list.list-item.trailing-supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | List list item trailing supporting text color |
| `md.comp.list.list-item.container.elevation` | `md.sys.elevation.level0` | ELEVATION | List list item container elevation |
| `md.comp.list.list-item.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item trailing icon color |
| `md.comp.list.list-item.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item leading icon color |
| `md.comp.list.divider.color` | `md.sys.color.outline` | COLOR | List list item divider color |
| `md.comp.list.list-item.overline.color` | `md.sys.color.on-surface-variant` | COLOR | List list item overline color |
| `md.comp.list.list-item.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item label text color |
| `md.comp.list.list-item.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | List list item supporting text color |
| `md.comp.list.list-item.segmented.container.color` | `md.sys.color.surface` | COLOR | List list item segmented container color |
| `md.comp.list.divider.height` | 1dp | LENGTH | List list item divider height |
| `md.comp.list.list-item.selected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected focus state layer color |
| `md.comp.list.list-item.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | List list item selected focus state layer opacity |
| `md.comp.list.list-item.leading-avatar.color` | `md.sys.color.primary-container` | COLOR | List list item leading avatar color |
| `md.comp.list.list-item.trailing-space` | `md.sys.measurement.space200` | LENGTH | List list item trailing space |
| `md.comp.list.list-item.leading-space` | `md.sys.measurement.space200` | LENGTH | List list item leading space |
| `md.comp.list.list-item.container.height` | 56dp | LENGTH | List list item container height |
| `md.comp.list.list-item.unselected.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item unselected trailing icon color |
| `md.comp.list.md.comp.list.list-item.two-line.container.height` | 72dp | LENGTH | Two lines list item container height |
| `md.comp.list.md.comp.list.list-item.three-line.container.height` | 88dp | LENGTH | Three lines list item container height |
| `md.comp.list.md.comp.list.list-item.one-line.container.height` | 56dp | LENGTH | One line list item container height |
| `md.comp.list.list-item.leading-avatar-label.color` | `md.sys.color.on-primary-container` | COLOR | List list item leading avatar label color |
| `md.comp.list.list-item.focus.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item focus trailing icon color |
| `md.comp.list.list-item.focus.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item focus leading icon color |
| `md.comp.list.list-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | List list item focus state layer opacity |
| `md.comp.list.list-item.hover.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item hover trailing icon color |
| `md.comp.list.list-item.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item hover state layer color |
| `md.comp.list.list-item.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item focus state layer color |
| `md.comp.list.focus.indicator.color` | `md.sys.color.secondary` | COLOR | List list item focus indicator color |
| `md.comp.list.list-item.pressed.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item pressed leading icon color |
| `md.comp.list.list-item.pressed.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item pressed trailing icon color |
| `md.comp.list.list-item.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item pressed state layer color |
| `md.comp.list.list-item.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | List list item dragged state layer opacity |
| `md.comp.list.list-item.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item dragged state layer color |
| `md.comp.list.list-item.selected.dragged.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected dragged label text color |
| `md.comp.list.list-item.dragged.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item dragged label text color |
| `md.comp.list.list-item.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | List list item dragged container color |
| `md.comp.list.list-item.container.color` | `md.sys.color.surface` | COLOR | List list item container color |

#### Design Tokens: List - Expand

*For list items that can expand and collapse.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.list.expand.expanded.list-item.segmented.container.color` | `md.sys.color.surface` | COLOR | List expand expanded list item segmented container color |
| `md.comp.list.expand.collapsed.list-item.trailing-icon.container.color` | `md.sys.color.surface` | COLOR | List expand collapsed list item trailing icon container color |
| `md.comp.list.expand.expanded.list-item.trailing-icon.container.color` | `md.sys.color.surface-container` | COLOR | List expand expanded list item trailing icon container color |
| `md.comp.list.expand.expanded.list-item.trailing-icon.icon.color` | `md.sys.color.on-surface` | COLOR | List expand expanded list item trailing icon icon color |
| `md.comp.list.expand.collapsed.list-item.trailing-icon.icon.color` | `md.sys.color.on-surface` | COLOR | List expand collapsed list item trailing icon icon color |
| `md.comp.list.expand.trailing-icon.shape` | `md.sys.shape.corner.full` | SHAPE | List expand trailing icon shape |
| `md.comp.list.expand.container.shape` | `md.sys.shape.corner.large` | SHAPE | List expand container shape |
| `md.comp.list.expand.expanded.list-item.container.color` | `md.sys.color.surface` | COLOR | List expand expanded list item container color |


## Anatomy

![Diagram with 10 elements that can be included in lists.](https://lh3.googleusercontent.com/Sa8xghsBnkEPnF8eS5BsRjuohsdTmqbkr_f1sENLSXj6Vvj60a-fAE32n9nUI8ErJeIbxkQPPl7wExD8qwxOM1aUbjPPV60s-E5vfR6EN6i7=s2048)

*Caption / Legend:*
Container and label text are required. All other elements are optional:

1. Container
2. Overline
3. Label text
4. Trailing text
5. Supporting text
6. Trailing icon
7. Divider
8. Leading avatar
9. Leading icon
10. Leading media - image or video

### Flexibility & slots

The [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) includes lists with custom slots for designing flexible item layouts. Think of a custom list as a container with three different slots: leading, content, and trailing. Each slot can hold a different element.

#### **Slot accessibility**

Slots are not accessible by default. Consider the following:

- Elements must follow the rules, structure, and interaction patterns for lists
- Use standard list item padding
- Target size must be at least 48x48dp
- Don't add interactive elements that make the list item difficult to navigate, especially for people using screen readers

[More on required accessibility guidelines](/m3/pages/lists/accessibility#538f23f7-689c-4516-bfc8-5f6933a43f5e)

![A diagram with leading, content, and trailing slots.](https://lh3.googleusercontent.com/xpDca9BbXlTiv20zpU4gfBwt6MkKXaY5ZNLRcxAljGC5QsVXgH3mKaHiaEI6okSs2gUhacnLEdM2zCIC5raKpqBZl476yJ8Qchx5bxvt6Kywwg=s1352)

*Caption / Legend:*
Reserve the use of slots for use cases that maintain the list’s accessibility and functionality

1. Leading slot
2. Content slot
3. Trailing slot

warningCaution:Slots require custom code implementation that you must create and maintain

The **leading** and **trailing** slot positions must be a smaller width than the **content** section.

1. **Leading slots** can contain:

- Visual elements: Avatar, icon, image, or video thumbnail
- Selection controls: Checkbox, radio button, or switch
- Customizations: Badge or larger image

2. **Content slots** must be the largest-width slot and can contain:

- Default content: Label text, supporting text
- Optional add-ons: Badge, icon, in-line label, or more text elements
- Avoid long lines of text to preserve readability

3. **Trailing slots** can contain:

- Action elements or text: Icon, icon button, or trailing text
- Selection controls: Checkbox, radio button, or switch

![Slot diagram showing slot placement in the middle of the list.](https://lh3.googleusercontent.com/jx4zxtSR4RN6N-1sCYapnbcg_EJOMuolnJBIPdx5aR9tEJ3PB1VtfNmemVGd-IKUMyPhpg1xj2FOUwBYzeekhv1rOIX4bE33jmMPNbV10RTL8w=s1352)

*Caption / Legend:*
The content slot must be the largest section, placed in the middle of the list item

#### Selection lists

For selection lists, use only one selection interaction per list item.

![A selected list item with a checkmark in the leading slot.](https://lh3.googleusercontent.com/_cCLtqaTv3_VJ2Su5-NcT91PPqYvyAFZeK-5w0av-NbLChQrKPvD3HSBWsc6adlc9M1DQGkIVd_eisASsmoVyA_2nO23ObPXfcuLp6O9sMU=s656)

*Caption / Legend:*
Use only one selection interaction per list item

![A selected list item with both a checkmark in the leading slot and a bookmark in the trailing slot.](https://lh3.googleusercontent.com/7ikqKMFSD3KqUsrjy_D0FguVESN7UimX34YCtDgR8Cqm5sbof9nysVBBnBgjQukuuXjAQooDRC5mtopWMuGcpNL6TIQDNjGzQ3fkSDJVFfLZrg=s656)

*Caption / Legend:*
Don't use multiple selection interactions in one item

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![10 list element color roles in light mode and dark mode.](https://lh3.googleusercontent.com/ARd2jFHJp7QY8tjQqnTd9qITF5sD6WqWXpapVsC25_-ej0okbpB1kkGYkJ8V7jSl-iFv0cW18ZGseOUM3x1CqZflXxkdU7T4znEQ0bJ3qCvx=s2048)

*Caption / Legend:*
List color roles used for light and dark themes:

1. Surface
2. On surface variant
3. On surface
4. On surface variant
5. On surface variant
6. On surface variant
7. Outline variant
8. Primary container
9. On primary container
10. On surface variant

## States

States are visual representations used to communicate the status of a component or an interactive element. [Learn more about interaction states

](/google-material-3/pages/interaction-states/overview)[More on list focus](/m3/pages/lists/accessibility#f7e067e1-722f-40c5-a95a-63929869bf3e)

### Default list items

![6 default list states in light and dark mode.](https://lh3.googleusercontent.com/WfsQdzz9ydTMtaG8lRdHEb8GmuDilZ3RVX7fNys6QemgIc3Euv0bnB2eKnFMZNxvApj-l2ZNNVTtCrgdS3CfuR6FmBFEv8ppLObmmykaM6yO=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

### Selected list items

![6 selected list states in light and dark mode.](https://lh3.googleusercontent.com/plktb9RXA8a9SyxyQIpnF8qX_hMwZP0_SIXh-vuSRreRX9e8DbpLs90qXW4rIrtZyNyTmEbJTYmenlpK0EjS_q6HyaoZmb4ERojsZU2trNc=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed
6. Dragged

## Measurements

![Size and padding measurements for list items.](https://lh3.googleusercontent.com/i93JWmCnwH8J71-rjNfpGP1SCy_v1gjfHOkLAph3y86kvhmpo9uT_x75vfDsKz_NxDbnt9C5GWA4xX0rba-hRzTmxtfWPw-zncFBcbmzKiLm=s2048)

*Caption / Legend:*
List item alignment, padding, and size measurements. The icon button height is dynamic, and automatically adjusts to fill the list item height.

### Shape morphing

When a list item is selected, the corner shape changes to highlight the active item:

- Unselected corner radius: 4dp inner, 16dp outer
- Selected corner radius: 16dp

![A 3-item list. The middle item is unselected, with a 4dp corner radius.](https://lh3.googleusercontent.com/ZP5JjdhEst35JLSuCdpnHvXs58yyjQdBREYdsNON0wtg-iHRjNtjvaPF6ekO3e3ceRrJWfJrP0ZfMVZ2EKbIqmfaRTuupnuHkDOkn1zwGORY=s656)

*Caption / Legend:*
Unselected list items have a 4dp inner corner radius, and 16dp outer corner radius

![A 3-item list. The middle item is selected, with a 16dp corner radius.](https://lh3.googleusercontent.com/UeCgyEiHh76y34mk1S7ebdWal471s5Yjj34uWFbNb0sEgl-iICDps6JeHuje-47Lb8h1F1ii1GsWSra-8nEeqSH5Mp1R4KVCD_ff9IU9Bagi=s656)

*Caption / Legend:*
Selected list items have a 16dp corner radius all around

## List (baseline)

The baseline list variant is available and continues to work in existing products. However, the [expressive list](/m3/pages/lists/specs#ebf87f58-d5bf-4cb5-a856-d2bb104eec4d) variant is recommended for new designs.

### Tokens & specs

Baseline list tokens are in the **common** token set. Note: This set also includes several expressive tokens.

#### Design Tokens: List - Common

*Common baseline and expressive list tokens. *

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.list.list-item.selected.dragged.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected dragged expressive shape |
| `md.comp.list.list-item.selected.pressed.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected pressed expressive shape |
| `md.comp.list.list-item.selected.focused.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected focsued expressive shape |
| `md.comp.list.list-item.selected.hovered.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected hovered expressive shape |
| `md.comp.list.list-item.selected.disabled.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected disabled expressive shape |
| `md.comp.list.list-item.selected.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container selected expressive shape |
| `md.comp.list.list-item.dragged.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container dragged expressive shape |
| `md.comp.list.list-item.pressed.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container pressed expressive shape |
| `md.comp.list.list-item.focused.container.expressive.shape` | `md.sys.shape.corner.large` | SHAPE | List list item container focused expressive shape |
| `md.comp.list.list-item.hovered.container.expressive.shape` | `md.sys.shape.corner.medium` | SHAPE | List list item container hovered expressive shape |
| `md.comp.list.list-item.disabled.container.expressive.shape` | `md.sys.shape.corner.extra-small` | SHAPE | List list item container disabled expressive shape |
| `md.comp.list.list-item.leading-avatar.shape` | `md.sys.shape.corner.full` | SHAPE | List list item leading avatar shape |
| `md.comp.list.list-item.selected.container.shape` | `md.sys.shape.corner.large` | SHAPE | List list item selected container shape |
| `md.comp.list.list-item.leading-image.expressive.shape` | `md.sys.shape.corner.small` | SHAPE | List list item leading image expressive shape |
| `md.comp.list.list-item.leading-image.shape` | `md.sys.shape.corner.none` | SHAPE | List list item leading image shape |
| `md.comp.list.list-item.leading-video.shape` | `md.sys.shape.corner.small` | SHAPE | List list item leading video shape |
| `md.comp.list.list-item.selected.disabled.trailing-icon.opacity` | - | OPACITY | List list item selected disabled trailing icon opacity |
| `md.comp.list.list-item.selected.disabled.leading-icon.opacity` | - | OPACITY | List list item selected disabled leading icon opacity |
| `md.comp.list.list-item.selected.disabled.state-layer.opacity` | - | OPACITY | List list item selected disabled state layer opacity |
| `md.comp.list.list-item.selected.disabled.overline.opacity` | - | OPACITY | List list item selected disabled overline opacity |
| `md.comp.list.list-item.selected.disabled.trailing-supporting-text.opacity` | - | OPACITY | List list item selected disabled trailing supporting text opacity |
| `md.comp.list.list-item.selected.disabled.supporting-text.opacity` | - | OPACITY | List list item selected disabled supporting text opacity |
| `md.comp.list.list-item.selected.disabled.label-text.opacity` | - | OPACITY | List list item selected disabled label text opacity |
| `md.comp.list.list-item.selected.disabled.container.opacity` | - | OPACITY | List list item selected disabled container opacity |
| `md.comp.list.list-item.selected.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled trailing icon color |
| `md.comp.list.list-item.selected.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled leading icon color |
| `md.comp.list.list-item.selected.disabled.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled state layer color |
| `md.comp.list.list-item.selected.disabled.overline.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled overline color |
| `md.comp.list.list-item.selected.disabled.trailing-supporting-text.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled trailing supporting text color |
| `md.comp.list.list-item.selected.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled supporting text color |
| `md.comp.list.list-item.selected.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled label text color |
| `md.comp.list.list-item.selected.disabled.container.color` | `md.sys.color.on-surface` | COLOR | List list item selected disabled container color |
| `md.comp.list.list-item.leading-avatar.size` | 40dp | LENGTH | List list item leading avatar size |
| `md.comp.list.list-item.trailing-icon.expressive.size` | 20dp | LENGTH | List list item trailing icon expressive size |
| `md.comp.list.list-item.leading-avatar-label.type` | - | TYPOGRAPHY | List list item leading avatar label type |
| `md.comp.list.list-item.leading-avatar-label.font` | `md.sys.typescale.title-medium.font` | FONT_NAMES | List list item leading avatar label font |
| `md.comp.list.list-item.leading-avatar-label.weight` | `md.sys.typescale.title-medium.weight` | FONT_WEIGHT | List list item leading avatar label weight |
| `md.comp.list.list-item.leading-avatar-label.size` | `md.sys.typescale.title-medium.size` | FONT_SIZE | List list item leading avatar label size |
| `md.comp.list.list-item.leading-avatar-label.line-height` | `md.sys.typescale.title-medium.line-height` | LINE_HEIGHT | List list item leading avatar label line height |
| `md.comp.list.list-item.leading-avatar-label.tracking` | `md.sys.typescale.title-medium.tracking` | FONT_TRACKING | List list item leading avatar label tracking |
| `md.comp.list.list-item.trailing-icon.size` | 24dp | LENGTH | List list item trailing icon size |
| `md.comp.list.list-item.two-line.container.height` | 72dp | LENGTH | Two lines list item container height |
| `md.comp.list.list-item.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | List list item label text weight |
| `md.comp.list.list-item.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | List list item label text size |
| `md.comp.list.list-item.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | List list item label text tracking |
| `md.comp.list.list-item.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | List list item label text line height |
| `md.comp.list.list-item.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | List list item label text font |
| `md.comp.list.list-item.trailing-supporting-text.weight` | `md.sys.typescale.label-small.weight` | FONT_WEIGHT | List list item trailing supporting text weight |
| `md.comp.list.list-item.trailing-supporting-text.tracking` | `md.sys.typescale.label-small.tracking` | FONT_TRACKING | List list item trailing supporting text tracking |
| `md.comp.list.list-item.supporting-text.type` | - | TYPOGRAPHY | List list item supporting text type |
| `md.comp.list.list-item.supporting-text.font` | `md.sys.typescale.body-medium.font` | FONT_NAMES | List list item supporting text font |
| `md.comp.list.list-item.supporting-text.weight` | `md.sys.typescale.body-medium.weight` | FONT_WEIGHT | List list item supporting text weight |
| `md.comp.list.list-item.supporting-text.size` | `md.sys.typescale.body-medium.size` | FONT_SIZE | List list item supporting text size |
| `md.comp.list.list-item.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` | LINE_HEIGHT | List list item supporting text line height |
| `md.comp.list.list-item.supporting-text.tracking` | `md.sys.typescale.body-medium.tracking` | FONT_TRACKING | List list item supporting text tracking |
| `md.comp.list.list-item.overline.tracking` | `md.sys.typescale.label-small.tracking` | FONT_TRACKING | List list item overline tracking |
| `md.comp.list.list-item.overline.type` | - | TYPOGRAPHY | List list item overline type |
| `md.comp.list.list-item.overline.font` | `md.sys.typescale.label-small.font` | FONT_NAMES | List list item overline font |
| `md.comp.list.list-item.overline.weight` | `md.sys.typescale.label-small.weight` | FONT_WEIGHT | List list item overline weight |
| `md.comp.list.list-item.overline.size` | `md.sys.typescale.label-small.size` | FONT_SIZE | List list item overline size |
| `md.comp.list.list-item.overline.line-height` | `md.sys.typescale.label-small.line-height` | LINE_HEIGHT | List list item overline line height |
| `md.comp.list.list-item.trailing-supporting-text.size` | `md.sys.typescale.label-small.size` | FONT_SIZE | List list item trailing supporting text size |
| `md.comp.list.list-item.trailing-supporting-text.line-height` | `md.sys.typescale.label-small.line-height` | LINE_HEIGHT | List list item trailing supporting text line height |
| `md.comp.list.list-item.trailing-supporting-text.font` | `md.sys.typescale.label-small.font` | FONT_NAMES | List list item trailing supporting text font |
| `md.comp.list.list-item.trailing-supporting-text.type` | - | TYPOGRAPHY | List list item trailing supporting text type |
| `md.comp.list.list-item.label-text.type` | - | TYPOGRAPHY | List list item label text type |
| `md.comp.list.list-item.small.leading-video.height` | 56dp | LENGTH | List list item small leading video height |
| `md.comp.list.list-item.leading-image.height` | 56dp | LENGTH | List list item leading image height |
| `md.comp.list.list-item.large.leading-video.width` | 114dp | LENGTH | List list item large leading video width |
| `md.comp.list.list-item.large.leading-video.height` | 64dp | LENGTH | List list item large leading video height |
| `md.comp.list.list-item.small.leading-video.width` | 100dp | LENGTH | List list item small leading video width |
| `md.comp.list.list-item.leading-video.width` | 100dp | LENGTH | List list item leading video width |
| `md.comp.list.list-item.leading-image.width` | 56dp | LENGTH | List list item leading image width |
| `md.comp.list.list-item.leading-icon.size` | 24dp | LENGTH | List list item leading icon size |
| `md.comp.list.list-item.leading-icon.expressive.size` | 20dp | LENGTH | List list item leading icon expressive size |
| `md.comp.list.list-item.three-line.container.height` | 88dp | LENGTH | Three lines list item container height |
| `md.comp.list.list-item.one-line.container.height` | 56dp | LENGTH | One line list item container height |
| `md.comp.list.list-item.container.expressive.shape` | `md.sys.shape.corner.extra-small` | SHAPE | List list item container expressive shape |
| `md.comp.list.container.shape` | `md.sys.shape.corner.large` | SHAPE | List container shape |
| `md.comp.list.list-item.container.shape` | `md.sys.shape.corner.none` | SHAPE | List list item container shape |
| `md.comp.list.segmented.gap` | `md.sys.measurement.space25` | LENGTH | List segment gap |
| `md.comp.list.divider.bottom-space` | `md.sys.measurement.space0` | LENGTH | List list item divider bottom space |
| `md.comp.list.divider.top-space` | `md.sys.measurement.space0` | LENGTH | List list item divider top space |
| `md.comp.list.list-item.between-space` | `md.sys.measurement.space150` | LENGTH | List list item between space |
| `md.comp.list.divider.trailing-space` | `md.sys.measurement.space200` | LENGTH | List list item divider trailing space |
| `md.comp.list.divider.leading-space` | `md.sys.measurement.space200` | LENGTH | List list item divider leading space |
| `md.comp.list.list-item.bottom-space` | `md.sys.measurement.space125` | LENGTH | List list item bottom space |
| `md.comp.list.list-item.top-space` | `md.sys.measurement.space125` | LENGTH | List list item top space |
| `md.comp.list.list-item.selected.dragged.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected dragged leading icon color |
| `md.comp.list.list-item.dragged.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item dragged trailing icon color |
| `md.comp.list.list-item.selected.dragged.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected dragged trailing icon color |
| `md.comp.list.list-item.dragged.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item dragged leading icon color |
| `md.comp.list.list-item.selected.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected dragged state layer color |
| `md.comp.list.list-item.selected.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | List list item selected dragged state layer opacity |
| `md.comp.list.list-item.selected.pressed.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected pressed leading icon color |
| `md.comp.list.list-item.selected.pressed.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected pressed trailing icon color |
| `md.comp.list.list-item.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected pressed label text color |
| `md.comp.list.list-item.selected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected pressed state layer color |
| `md.comp.list.list-item.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | List list item selected pressed state layer opacity |
| `md.comp.list.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | List list item pressed state layer opacity |
| `md.comp.list.list-item.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item pressed label text color |
| `md.comp.list.list-item.selected.focus.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected focus trailing icon color |
| `md.comp.list.list-item.selected.focus.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected focus leading icon color |
| `md.comp.list.list-item.selected.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected focus label text color |
| `md.comp.list.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | List list item focus indicator thickness |
| `md.comp.list.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | List list item focus indicator offset |
| `md.comp.list.list-item.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item focus label text color |
| `md.comp.list.list-item.selected.hover.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected hover leading icon color |
| `md.comp.list.list-item.selected.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected hover label text color |
| `md.comp.list.list-item.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | List list item selected hover state layer opacity |
| `md.comp.list.list-item.selected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected hover state layer color |
| `md.comp.list.list-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | List list item hover state layer opacity |
| `md.comp.list.list-item.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item hover label text color |
| `md.comp.list.list-item.hover.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item hover leading icon color |
| `md.comp.list.list-item.selected.hover.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item selected hover trailing icon color |
| `md.comp.list.list-item.disabled.trailing-icon.opacity` | - | OPACITY | List list item disabled trailing icon opacity |
| `md.comp.list.list-item.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item disabled trailing icon color |
| `md.comp.list.list-item.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | List list item disabled supporting text color |
| `md.comp.list.list-item.disabled.overline.color` | `md.sys.color.on-surface` | COLOR | List list item disabled overline color |
| `md.comp.list.list-item.disabled.label-text.opacity` | - | OPACITY | List list item disabled label text opacity |
| `md.comp.list.list-item.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | List list item disabled leading icon color |
| `md.comp.list.list-item.disabled.state-layer.opacity` | - | OPACITY | List list item disabled state layer opacity |
| `md.comp.list.list-item.disabled.overline.opacity` | - | OPACITY | List list item disabled overline opacity |
| `md.comp.list.list-item.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item disabled label text color |
| `md.comp.list.list-item.disabled.supporting-text.opacity` | - | OPACITY | List list item disabled supporting text opacity |
| `md.comp.list.list-item.disabled.leading-icon.opacity` | - | OPACITY | List list item disabled leading icon opacity |
| `md.comp.list.list-item.disabled.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item disabled state layer color |
| `md.comp.list.list-item.selected.overline.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected overline color |
| `md.comp.list.list-item.selected.trailing-icon.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected trailing icon color |
| `md.comp.list.list-item.selected.leading-icon.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected leading icon color |
| `md.comp.list.list-item.selected.supporting-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected supporting text color |
| `md.comp.list.list-item.selected.trailing-supporting-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected trailing supporting text color |
| `md.comp.list.list-item.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected label text color |
| `md.comp.list.list-item.selected.container.color` | `md.sys.color.secondary-container` | COLOR | List list item selected container color |
| `md.comp.list.list-item.trailing-supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | List list item trailing supporting text color |
| `md.comp.list.list-item.container.elevation` | `md.sys.elevation.level0` | ELEVATION | List list item container elevation |
| `md.comp.list.list-item.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item trailing icon color |
| `md.comp.list.list-item.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item leading icon color |
| `md.comp.list.divider.color` | `md.sys.color.outline` | COLOR | List list item divider color |
| `md.comp.list.list-item.overline.color` | `md.sys.color.on-surface-variant` | COLOR | List list item overline color |
| `md.comp.list.list-item.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item label text color |
| `md.comp.list.list-item.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | List list item supporting text color |
| `md.comp.list.list-item.segmented.container.color` | `md.sys.color.surface` | COLOR | List list item segmented container color |
| `md.comp.list.divider.height` | 1dp | LENGTH | List list item divider height |
| `md.comp.list.list-item.selected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item selected focus state layer color |
| `md.comp.list.list-item.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | List list item selected focus state layer opacity |
| `md.comp.list.list-item.leading-avatar.color` | `md.sys.color.primary-container` | COLOR | List list item leading avatar color |
| `md.comp.list.list-item.trailing-space` | `md.sys.measurement.space200` | LENGTH | List list item trailing space |
| `md.comp.list.list-item.leading-space` | `md.sys.measurement.space200` | LENGTH | List list item leading space |
| `md.comp.list.list-item.container.height` | 56dp | LENGTH | List list item container height |
| `md.comp.list.list-item.unselected.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | List list item unselected trailing icon color |
| `md.comp.list.md.comp.list.list-item.two-line.container.height` | 72dp | LENGTH | Two lines list item container height |
| `md.comp.list.md.comp.list.list-item.three-line.container.height` | 88dp | LENGTH | Three lines list item container height |
| `md.comp.list.md.comp.list.list-item.one-line.container.height` | 56dp | LENGTH | One line list item container height |
| `md.comp.list.list-item.leading-avatar-label.color` | `md.sys.color.on-primary-container` | COLOR | List list item leading avatar label color |
| `md.comp.list.list-item.focus.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item focus trailing icon color |
| `md.comp.list.list-item.focus.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item focus leading icon color |
| `md.comp.list.list-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | List list item focus state layer opacity |
| `md.comp.list.list-item.hover.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item hover trailing icon color |
| `md.comp.list.list-item.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item hover state layer color |
| `md.comp.list.list-item.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item focus state layer color |
| `md.comp.list.focus.indicator.color` | `md.sys.color.secondary` | COLOR | List list item focus indicator color |
| `md.comp.list.list-item.pressed.leading-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item pressed leading icon color |
| `md.comp.list.list-item.pressed.trailing-icon.icon.color` | `md.sys.color.on-surface-variant` | COLOR | List list item pressed trailing icon color |
| `md.comp.list.list-item.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item pressed state layer color |
| `md.comp.list.list-item.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | List list item dragged state layer opacity |
| `md.comp.list.list-item.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | List list item dragged state layer color |
| `md.comp.list.list-item.selected.dragged.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | List list item selected dragged label text color |
| `md.comp.list.list-item.dragged.label-text.color` | `md.sys.color.on-surface` | COLOR | List list item dragged label text color |
| `md.comp.list.list-item.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | List list item dragged container color |
| `md.comp.list.list-item.container.color` | `md.sys.color.surface` | COLOR | List list item container color |


### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![9 baseline list element color roles in light and dark mode.](https://lh3.googleusercontent.com/c7bwcYNZe1HFiYuQW2r1uEEhDr_8PMPrgH911ney_P2AQnEZ64a34YKs47JbQnNjPbrtMfhw0FA7oQ3T1Euqx9HQ45ItoppUNl_7LUN5dX8=s2048)

*Caption / Legend:*
List color roles used for light and dark themes:

1. Surface
2. On surface
3. On surface variant
4. On surface variant
5. On surface variant
6. Outline variant
7. Primary container
8. On primary container
9. On surface variant

### States

States are visual representations used to communicate the status of a component or interactive element.

![6 baseline list states in light and dark mode.](https://lh3.googleusercontent.com/5lf9R5VeSpT9MZ52tQ1Gr9G6LJSo3T61BAkwRTHYYL4e0_ymdXq3TFfAieV8fBpokbyEkAP1dql3Z23YsmOgHwTzZclYa1v5eLG9J7lTYcJu=s2048)

*Caption / Legend:*
1. Enabled

2. Disabled

3. Hovered

4. Focused

5. Pressed

6. Dragged

### Layout

#### One-line lists

![Alignment, padding, and size specifications for baseline list items with 1 line of text.](https://lh3.googleusercontent.com/z9QvwXHZzQCURyxwHxCKWIzN9bFCueiLYqnmwebzTymL8CQV6SfHPmE39ptDMlyCdxfAYa3ymS7TFM3eWfJEHnzXOq7ndUBAoqGr211VXq-K=s2048)

*Caption / Legend:*
Baseline one-line list alignment, padding, and size measurements

![Measurements for a 3-item list with 1 line each.](https://lh3.googleusercontent.com/khpu5JdGUDNFXqPEgOJ5ZWoXXvptYxD57jKRlck-ECQ1ge8a4pIcPdajOsbR3theeOCNLC8HoON7F71IWL5LsM5dFl_74zbveiiwPsZnriIqtQ=s2048)

*Caption / Legend:*
Baseline list item measurements and padding

#### Two-line lists

![Alignment, padding, and size specifications for baseline list items with 2 lines of text.](https://lh3.googleusercontent.com/LxLM2jQt0STwJFF6mM7jaAxeP09Gu8KXxM8a2gg_tCprAziEoUSMbqhONXIWU-yKoahTjXATtmhpqTaSxfe7x7UoAhhTD157g0YkJwJS-tse=s2048)

*Caption / Legend:*
Baseline two-line list alignment, padding, and size measurements

![Measurements for a 3-item list with 2 lines each.](https://lh3.googleusercontent.com/UIM_5cKOrqy1Jgy2wF6ND6qMT0cXmrXlqkqpSr1hUtJoShVECpFJt1jn39e7aoczco9L3ABwR7O4gd366Fdwg7tfQnWGas_8LRAM0LWM7z0NRg=s2048)

*Caption / Legend:*
Baseline list item measurements and padding

#### Three-line lists

![Alignment, padding, and size specifications for baseline list items with 3 lines of text.](https://lh3.googleusercontent.com/eoubrmM-Nl9VlpagzZuJBlQ7Ze1c-LjzmdIfk2sIxw16gjTgSUXdPTTLa1P1o1klSZk9SP6JZjG3BrVkBCnvatvekRTyo1Qkq2SoN5eSHEWy=s2048)

*Caption / Legend:*
Baseline three-line list alignment, padding, and size measurements

![Measurements for a 3-item list with 3 lines each.](https://lh3.googleusercontent.com/mX9bAsTDGyRcmgR60R9k2JBak4FqR4Iq5BHj_D9vHhsd3GwzcWjsnjvUzz4UDdrcd4KZE27gqKYtovW1ejGeDrnmqzdeoUULLnR8dLqTLZsf=s2048)

*Caption / Legend:*
Baseline list item measurements and padding

| Attribute | Value |
| --- | --- |
| Label alignment | Center |
| Label alignment when height is 88dp or taller | Top |
| Label left padding | 16dp |
| Leading element alignment (vertical) | Center |
| Leading element alignment (vertical) when height is 88dp or taller | Top |
| Leading element left padding | 16dp |
| Leading icon alignment (vertical) | Top |
| Leading icon top padding | 8dp |
| Leading icon top padding when height is 88dp or taller | 12dp |
| Trailing element alignment (vertical) | Center |
| Trailing element alignment (vertical) when height is 88dp or taller | Top |
| Trailing element left padding | 16dp |
| Trailing element right padding | 24dp |
| Padding above/below divider | 0dp |
| Targets | 48dp |
| Divider full-width | 100% |
| Divider inset left padding | 16dp |
| Divider inset right padding | 24dp |

### Configurations

#### Leading avatar

![1, 2, and 3-line list items with and without a leading avatar and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/YtV6g40j9-XQCPCAVu67QZhyyBxdzXse8Aq4zgVnIWxg5eL0YP-62b5XRWhoQFLGZ77XDbPLnnLnc6cQrbdVy0vdd5Qop9rt2L0vbVMrGlw=s2048)

*Caption / Legend:*
1. With leading avatar
2. With leading avatar and trailing checkbox

#### Leading image or thumbnail

![1, 2, and 3-line list items with and without a leading image and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/7K4R5eQvQLtvBGZ8iDlPrwl6-HftUdcPx0S6MRj8QLMuQMLlHQXj0EYkvlawvcIQOlaTsf1CAq8GIXC-zPanjI8B5o0Wznt8P_Os0Bir_Fq92A=s2048)

*Caption / Legend:*
1. With leading image
2. With leading image and trailing checkbox

#### Leading video

![1, 2, and 3-line list items with and without a leading video and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/811g1L2vKGQ0BTtqAoZPO-jApLgGPEDiV-7oi308iwDk-GrwrWTuQmCkNSok5-5XqCp7iNaldpc6cnpOL2Xe1RfUSfURXuucBF8O5k5WUomf=s2048)

*Caption / Legend:*
1. With leading video
2. With leading video and trailing checkbox

#### Leading icon

![1, 2, and 3-line list items with and without a leading icon and trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/F_D2HGWtWYSMxDVgfkIRpfgvy8O26m5Gq1uzE8tvEuo9m9sMLfRhcnuVfZSE6hyxoICYNuSzjIfA1yRVpcXvaJG1b02lEpkYn-l0scGCQTmt=s2048)

*Caption / Legend:*
1. With leading icon
2. With leading icon and trailing checkbox

#### Text-only

![1, 2, and 3-line text only list items with and without a trailing checkbox, in dark mode.](https://lh3.googleusercontent.com/0D-xONvUbyoPV0EMlMrBItgWHQXbW1IV2dBVpIslSFeHc0mUoHbJsP3y9on5ym7Ch1ICbFcFH7026UzSdnQvTABrsRQhYe8yRiG2imFaK00=s2048)

*Caption / Legend:*
1. With text only
2. With text and trailing checkbox

#### Leading checkbox

![1, 2, and 3-line list items with and without a leading checkbox and trailing text, in dark mode.](https://lh3.googleusercontent.com/3pOgKx-2m1N3ewCJ-joHRZ0IFwf-GHaxzimTyF_4-SYx_80TL6UnaBywa7ogFoCCil_KQgEFXoNmwKuXP_6dGsFC0uMqCLGE5qQpUqHOGdrxZQ=s2048)

*Caption / Legend:*
1. With leading checkbox
2. With leading checkbox and trailing text

#### Leading radio button

![1, 2, and 3-line list items with and without a leading radio button and trailing text, in dark mode.](https://lh3.googleusercontent.com/-Eph6i5PJ8k8D5ABIpITkh-WLe2a-gMsM-sq2qCDM1cFBVfQN3FGAYAwiryrXRkrF8-8Q3Exypco2Ir4iP0s0IRbZ_n-ZvFI2ZTuNUzz7bs=s2048)

*Caption / Legend:*
1. With leading radio button
2. With leading radio button and trailing text

#### Trailing switch

![1, 2, and 3-line list items with and without a leading icon and trailing switch, in dark mode.](https://lh3.googleusercontent.com/6qcPlbTkPuUN2vByfw3QiZU3_haTWYgitgstbbYGI9ugO1r8LknZ2RPovveQ18B9EOKQNu5robyVqrQs0AvZchLuQXeckUeWZEn2meby2vkA=s2048)

*Caption / Legend:*
1. With trailing switch
2. With leading icon and trailing switch

## Guidelines

![3 list items show different layout options, with varying sizes of elements in the leading slot.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewlynz-01.png?alt=media)

*Caption / Legend:*
Lists can include a range of layout combinations:

1. Leading images, videos, icons, or avatars
2. Trailing text, icons, or icon buttons

## Usage

Lists are vertical groups of text, icons, images, and other elements, optimized for reading comprehension.

List items can contain multiple actions at once, like selection, icon buttons, overflow menus, and more.

![3 list items with avatars using different expressive shapes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewcuoc-02.png?alt=media)

*Caption / Legend:*
A clear visual hierarchy makes lists easy to scan and read

Use lists for communicating or selecting discrete items, such as choosing from a set of colors.

![A list of colors with Periwinkle selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewi9tz-03.png?alt=media)

*Caption / Legend:*
Lists are an organized way to add imagery and supporting elements to selection. In this color selection example, the list contains color swatches, color names, and a checkbox action.

A list should be easy to scan. Any element can be used to anchor and align list item content.

Place supporting visuals and primary text in the same position in each list item.

Don’t vary the position of elements within a list.

![4 versions of the same list highlighting avatar and text alignment.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewmxat-04.png?alt=media)

*Caption / Legend:*
1. Sample list
2. Content placement in a row
3. Supporting visuals are aligned for easy scanning
4. Primary text is aligned for easy scanning

List items can adapt to different lengths of text:

**Label text only 
**A list item can contain a single line of label text. If the text doesn’t fit on one line, it can wrap or be truncated.

**Label text with supporting text 
**A list item can include supporting text below the label text. Both the label and supporting text can wrap or be truncated.

![3 lists show items with label text only, label text with 1-line of supporting text, and label text with 2-lines of supporting text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewpdzm-05.png?alt=media)

*Caption / Legend:*
Three examples of list item sizes:

1. Label text only
2. Label text with supporting text on one line
3. Label text with supporting text that wraps to two lines

## Anatomy

![List diagram with 10 elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiewsyte-06.png?alt=media)

*Caption / Legend:*
Container and label text are required. All other elements are optional:

1. Container
2. Label text
3. Supporting text
4. Trailing text
5. Trailing icon
6. Trailing selection control - checkbox, radio button, switch
7. Leading avatar container
8. Leading avatar text
9. Leading icon
10. Leading media - image or video

### Container

List containers hold all list items and their elements. List item size is determined by the tallest element within the list item. [See layout measurements](/m3/pages/lists/specs#1824b94d-7d17-4a29-889f-d277037a1313)

When a list item features an image, consider customizing the container color to use a content-based color scheme. This should be applied to either the enabled state or for an interaction.

### Label & supporting text

Keep label text brief.   

To ensure list items are scannable:

- Limit supporting text to one to three lines
- Truncate supporting text, depending on screen size

[See adaptive guidance](/m3/pages/lists/guidelines#561cc637-aa43-4055-be1e-0716faeef7af)

![A list item with a leading image, concise label text “Art events”, and 2 lines of truncated supporting text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiex0v5m-08.png?alt=media)

*Caption / Legend:*
Limit supporting text to one to three lines

### Icons

**Leading icon**
A leading icon should provide a quick visual cue that relates to the item's label text, helping people scan the list.

**Trailing icon** 
A trailing icon is often used to communicate status or indicate an action, like **Show more**.

![Leading icons should relate to the label text  A list of items with leading and trailing icons on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexc5t2-9.png?alt=media)

*Caption / Legend:*
1. Leading icons should relate to the label text
2. Trailing icons can communicate an action

### Leading media

List items can contain a leading avatar, image, or video. Anchor visuals to the leading edge of the list to improve scannability.

Leading video thumbnails can open a video player or even play within the list.

![A list of plants with images at leading edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexhs7r-10.png?alt=media)

*Caption / Legend:*
Place supporting visuals, like thumbnails, at the leading edge of a row to improve scannability

![A list of plants with an image in the middle of the row makes it difficult to align the name and price.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexip9k-11.png?alt=media)

*Caption / Legend:*
Avoid placing visuals in the center of a row because it makes the list difficult to scan

#### Avatars

List items can include images in circular or expressive shapes to represent a person or entity.

Use square or rectangular images for other content, such as products or videos.

![List of contacts with avatars with a circular, expressive crop to indicate a person.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexkoay-12.png?alt=media)

*Caption / Legend:*
Use an expressive, circular avatar to represent a person or entity

#### Primary & secondary actions

Use spacing to draw attention to the most important aspect of the list item, usually the primary action area or key content.

![A folder icon in the primary action area takes up the full height of the list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexnuvs-13.png?alt=media)

*Caption / Legend:*
The primary action takes up more space:

1. Primary action area

2. Secondary action area

![A list item has an avatar in the more distinguishing content position on the left, and “15 min” trailing text on the right.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexoaw7-14.png?alt=media)

*Caption / Legend:*
Align content by importance:

1. More distinguishing content

2. Less distinguishing content

### Trailing text

Trailing text can provide additional meta-information about a list item, such as a price, count, or other details.

![The date “Nov 17” as trailing text in a concert ticket list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiextt91-15.png?alt=media)

*Caption / Legend:*
Use trailing text for supplemental details, like a price, count, or date

### Selection controls

Selection controls display list item actions. Position controls at the leading or trailing end of a list item:

- Use checkboxes to select multiple items
- Use switches to toggle settings on or off
- Use radio buttons to select a single item

![3 lists with different selection controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiexzfsy-16.png?alt=media)

*Caption / Legend:*
List items with:

1. Checkboxes
2. Switches
3. Radio buttons

### Gaps & dividers

Gaps or dividers can separate lists into items and groups:

- Use **gaps** for contained lists. Gaps leverage expressive shape and containment tactics.
- Limit **dividers** to uncontained or complex lists, only when a stronger visual separation is necessary.

![Filled list items in an inbox separated by gaps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezuscb-17_do.png?alt=media)

*Caption / Legend:*
Use **segmented gaps** and filled list items to define a list group

![An uncontained list with city names separated by dividers.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezvi6d-18caution.png?alt=media)

*Caption / Legend:*
Limit the use of **dividers** to uncontained lists

## Adaptive design

### Line length

In fluid layouts, avoid excessively long lines of text when expanding containers and text-heavy components. This often means changing margins and typography properties as the container scales.

![4 list items with 2-line supporting text have adjusted margins to preserve readability.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezxs4c-19_do.png?alt=media)

*Caption / Legend:*
Adjust margins to create a more comfortable line length for reading

Adapt the width of the list container based on a line’s length, or by switching to a multi-column layout.

![List items in a 2-column layout, with each item showing text preview.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiezzrzc-20_do.png?alt=media)

*Caption / Legend:*
A multi-column layout can help break up content when needed

The ideal line length for text is typically between 40 to 60 characters, but large-screen devices can accommodate up to 120 characters per line. If a line of text is close to 120 characters in length, consider increasing the line height to improve readability .

![List items with elongated line length.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif01yxf-21_dont.png?alt=media)

*Caption / Legend:*
Don’t scale components without adjusting other affected areas of the screen, such as text length. This can result in line lengths that make reading difficult.

A list with a compact breakpoint can become part of a two-column layout at an expanded breakpoint, adjusting the amount of information shown in each list item.

### Adapt list elements & layout

Lists can change their layout to adapt to different breakpoints. This affects the size and placement of content.

For example, a list at a compact breakpoint can adjust margins, spacing, or density to better fit an expanded window.

### Swap components

Lists are just a compact composition of images, text, and actions. Other components, like cards and carousels, use the same elements but take up more space.

At larger breakpoints, consider swapping a list to a component with a similar purpose to take advantage of available space.

### Compact breakpoints

Lists should extend edge-to-edge in compact windows. Selecting a list item should open a page with the details.

### Medium & expanded breakpoints

Medium and expanded breakpoints, such as tablet and desktop screens, can display primary and secondary content in the same view.

For example, a list and the detailed information can appear side-by-side.

![A larger screen displays list items and a detailed expansion of one item on the same screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif0jzwl-26.png?alt=media)

*Caption / Legend:*
On larger screens, a list-detail view can be more appropriate

At a larger breakpoint, a list may transform into a carousel.

Lists can also show more or less content as they scale up and down in size.

For example, a list item can reveal more content when the component expands.

## Behavior

### List selection modes

The selected state applies to the entire list item. For example, when an item with a checkbox is selected, both the list item and the checkbox show a selected state.

#### Single-select

Lists can feature a single-selection component such as a radio button.

Single-select list items:

- Don’t support multi-actions
- Can’t have secondary nested actions
- Shouldn’t use checkboxes

![A 3-item list with radio buttons, with 1 item selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmielqxgm-29.png?alt=media)

*Caption / Legend:*
Use radio buttons to allow a single selection in a list

#### Multi-select

Multi-select lists allow for multiple list items to be toggled on.

Multi-select list items:

- Pair well with checkboxes and switches
- Can’t have secondary nested actions
- Shouldn’t use radio buttons

![A 3-item list with checkboxes and 2 items selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmielw5u4-30.png?alt=media)

*Caption / Legend:*
Use checkboxes or switches for multi-select lists

#### Single-action

In a single-action list, the entire list item performs one action, such as navigating to a new page.

Single-action list items:

- Can’t have secondary nested actions
- Can’t be toggled into a persistent selected state

![A 3-item list where each item is a single tappable area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmielzpxu-31.png?alt=media)

*Caption / Legend:*
Use a single-action list for a primary action, like navigation

#### Multi-action

Multi-action lists can support multiple nested actions within a list item.

The primary action should take up the majority of the space in the leading and content positions.

Place supplementary actions, like a bookmark or menu, in the trailing position.

[More on multi-action accessibility](/m3/pages/lists/accessibility#b69b89a9-7ca0-4249-b25b-2d0c85a41dc0)

![A 3-item song list where each item has 2 trailing icons: a bookmark and overflow menu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiem2107-32.png?alt=media)

*Caption / Legend:*
Place supplementary actions in the trailing position of a list item

#### Non-interactive

Non-interactive lists can organize information in a scannable way. They don’t perform any actions and can’t be selected.

![A 3-item non-interactive list showing a historic timeline of space travel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmiem457u-33.png?alt=media)

*Caption / Legend:*
Use non-interactive lists to make information easy to scan

### List interactions

#### Expand & collapse

List items containing other list items can expand and collapse in a folder-like manner, to reveal or hide content.

Tapping a list item expands it vertically across the entire screen using a container transform transition pattern.

#### Swipe

On Android, list items can reveal buttons on swipe. Use a mix of button styles for visual interest and hierarchy.

The primary action must be the final end-aligned option. A full swipe triggers this action, clearing the list item and all other actions off-screen.

Swipeable list items should include alternative ways to access hidden actions, such as a more icon.

[More on swipe accessibility](/m3/pages/lists/accessibility#32f5115c-b15e-4af6-8c1a-4807bee2bf7a)

![List of recipes with “Fresh baked breads” swiped to reveal a archive icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmshq8qm6-35-key03.png?alt=media)

*Caption / Legend:*
When a list item is swiped, it can be archived or reveal more actions

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Navigate to a list item
- Select a list item

## Indicate selection with more than color

To make selected items clear for everyone, don't rely on color as the only visual cue.

Use an additional indicator that an item is selected such as:

- Radio buttons or checkboxes
- Leading or trailing icons
- A visual style not related to color, like underlined text

![A selected list item with a colored background, and a check as the leading icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif14iza-01.png?alt=media)

*Caption / Legend:*
Use two visual cues to show a list item is selected, like a leading checkmark and filled color

## Interaction & style

### Touch

When a person taps on a list item, a touch ripple appears, indicating interaction feedback.

### Cursor

When hovered, the hover state provides a visual cue that a list item is interactive.

![A list with the second item visually altered while hovered over, with a cursor and darker fill.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1lpwx-03.png?alt=media)

*Caption / Legend:*
Cursor: Hover

![Selected list item with cursor, colored fill, and checked box.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1n85t-04.png?alt=media)

*Caption / Legend:*
Cursor: Selected

### Keyboard & switch

When a person tabs to a single-action list, a focus indicator appears, providing a visual cue that the first list item is now focused and action can be taken.

When a person interacts with the focused list item via **Space** or **Enter**, the action is performed.

### Swipe

List items that can be swiped should include alternative ways to access hidden actions, such as a **more** icon.   

Swipe alternatives can be:

- Single tap
- Double tap
- Long press
- Other single-point interactions

![A list item has a “more” button selected to reveal additional actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmshqfb4p-07-key04.png?alt=media)

*Caption / Legend:*
List items can reveal more actions from swiping or using an accessible secondary action such as a double tap

## Focus

### Single-action lists

The first element in a list should always receive focus, unless the list has a selected element. In that case, focus should go to the selected list item instead.

After an element is focused, a person should be able to navigate within the list using arrow keys.

![The first list item is automatically focused.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1yik5-08.png?alt=media)

*Caption / Legend:*
**Tab **key focuses on the first item or the selected item

![A second list item focused using an arrow key.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif1z0du-09.png?alt=media)

*Caption / Legend:*
**Arrow **keys navigate up and down through list items

All list items must be able to be activated using the **Space** or **Enter** key.  

[More on single-action lists](/m3/pages/lists/guidelines#3e45f939-457a-44a8-8551-a2354c521d26)

![List item with focus indicator and filled checkbox, selected using the Space or Enter key.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif21ldt-10.png?alt=media)

*Caption / Legend:*
**Space** or **Enter** keys activate an element in a list

### Multi-action lists

Multi-action list items contain a primary action and at least one supplementary action.  

The list item as a whole isn't selectable; only the individual actions are.

A person should be able to use a keyboard to:

- **Tab** to the list item, which focuses the first element
- Move between between all focusable elements in the list using the **Up**, **Down**, **Left**, and **Right** arrow keys
- Activate a focused element using **Space** or **Enter**

[More on multi-action lists](/m3/pages/lists/guidelines#db85439b-0e67-43b0-a2dc-61395738af64)

![The first element in a multi-action list is focused automatically.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8um9bl-11-VQA.png?alt=media)

*Caption / Legend:*
**Tab** brings the focus to the first action

![The list action, a bookmark, is focused using the Down or Right arrow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8uomf0-12-VQA.png?alt=media)

*Caption / Legend:*
**Down** and **Right** arrow keys move focus to the next action of the list item, or to the first action in the next item

![A trailing bookmark icon is focused in the second list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8uwmgu-13-VQA.png?alt=media)

*Caption / Legend:*
**Up** and **Left** arrow keys move focus to the previous action of the list item

![Label text and supporting text of the second list item is in focus using the Up or Left arrow.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8v0dqs-14-VQA.png?alt=media)

*Caption / Legend:*
If the focus is on a list item’s first action, the **Up** and **Left** arrows move focus back to the last action of the previous item

![The Space or Enter key activates an overflow menu on a list item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8v14y1-15-VQA.png?alt=media)

*Caption / Legend:*
The **Space** or **Enter** key activates a selected action in a list

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | To move focus to the first list item, last list item, or outside of the list component |
| Down and right arrow keys | Moves to the next element in the list; if the focused element is the last in the list, it wraps back to the top of the list |
| Up and left arrow keys | Moves to the previous element in the list; if the focused element is the first in the list, it wraps back to the bottom of the list |
| **Space** or **Enter** | To select a list item not yet selected |

## Labeling elements

Accessibility labels are used with assistive devices like screen readers.

The accessibility label for a list item is typically the same as the **label text** and **supporting text**.

Some labels, roles, and states are [dependent on platform](/m3/pages/lists/accessibility#09e32b7d-78a1-45c1-be12-4c6646cfe1d1).

![List item selected to show label of “Bread, sourdough or wheat”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif3ecf9-16.png?alt=media)

*Caption / Legend:*
A list item’s **label text** and **supporting text** is used for its accessibility label

### Platform-specific labels

#### Single-select lists

| **Trait** | **Web** | **Android Views (MDC-Android)** | **Jetpack Compose** |
| --- | --- | --- | --- |
| Aria label | Container label: Should describe selection type List item: Should match the visible label text | List item: Should match the visible label text | List item: Should match the visible label text |
| Role | Container: List box  List item: Option | List item: Radio button | List item: Radio button |
| State | Selected or Not-selected | Checked or Not-checked | Checked or Not-checked |

#### Multi-select lists

| **Trait** | **Web** | **Android Views (MDC-Android)** | **Jetpack Compose** |
| --- | --- | --- | --- |
| Aria label | Container label: Should describe selection type List item: Should match the visible label text | List item: Should match the visible label text | List item: Should match the visible label text |
| Role | Container: List box  List item: Option | List item: Checkbox | List item: Checkbox |
| State | Selected or Not-selected | Checked or Not-checked | Checked or Not-checked |

On web, a list container’s accessibility label describes the type of selection that can be made, and the role is **List box**.

![A list container is selected, showing a label of “Select either bread, pita, or rice” and role of “List box.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8wfvkj-17.png?alt=media)

*Caption / Legend:*
On web, a list container’s role is **List box**

On Jetpack Compose, the role applies to the list item as a whole.

If a list isn't selectable, the label text is read out without a role.

![A selected list item shows a label of “Bread, sourdough, or wheat” and role of “Checkbox.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmi8wgxsf-18.png?alt=media)

*Caption / Legend:*
When selectable, the role **Checkbox **applies to the entire list item on Jetpack Compose

On Android Views (MDC-Android), components contained within the list should be labeled according to that component’s specific guidelines:

- [Checkbox](/m3/pages/checkbox/accessibility)
- [Radio button](/m3/pages/radio-button/accessibility)

![Checkbox of a selected list item shows label of “Bread, sourdough or wheat” and role of “Checkbox.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmif3mprn-19.png?alt=media)

*Caption / Legend:*
On Android Views (MDC-Android), the accessibility label and role are applied to the interactive component by default
