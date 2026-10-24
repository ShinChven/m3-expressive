# Text fields

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/text-fields](https://m3.material.io/components/text-fields)
> Last Updated: 2026-09-08T08:21:17.878Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Make sure text fields look interactive
- Two variants: filled and outlined
- The text field’s state (blank, with input, error, etc) should be visible at a glance
- Keep labels and error messages brief and easy to act on
- Text fields commonly appear in forms and dialogs

![2 variants of text fields, filled and outlined.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx2u2h3p-1.png?alt=media)

*Caption / Legend:*
1. Filled text field
2. Outlined text field

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color

![A filled and outlined text field with M3 color mappings.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx2u3e4d-2.png?alt=media)

*Caption / Legend:*
Text fields have new color mappings

## Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Text field - Filled

*For filled text fields.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filled-text-field.focus.active-indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filled text field focus active indicator thickness |
| `md.comp.filled-text-field.supporting-text.type` | - | TYPOGRAPHY | Filled text field supporting text type |
| `md.comp.filled-text-field.supporting-text.font` | `md.sys.typescale.body-small.font` | FONT_NAMES | Filled text field supporting text font |
| `md.comp.filled-text-field.supporting-text.weight` | `md.sys.typescale.body-small.weight` | FONT_WEIGHT | Filled text field supporting text weight |
| `md.comp.filled-text-field.supporting-text.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Filled text field supporting text size |
| `md.comp.filled-text-field.supporting-text.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Filled text field supporting text line height |
| `md.comp.filled-text-field.supporting-text.tracking` | `md.sys.typescale.body-small.tracking` | FONT_TRACKING | Filled text field supporting text tracking |
| `md.comp.filled-text-field.container.height` | 56dp | LENGTH | Filled text field container height |
| `md.comp.filled-text-field.input-text.placeholder.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field input text placeholder color |
| `md.comp.filled-text-field.input-text.suffix.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field input text suffix color |
| `md.comp.filled-text-field.input-text.prefix.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field input text prefix color |
| `md.comp.filled-text-field.label-text.type` | - | TYPOGRAPHY | Filled text field label text type |
| `md.comp.filled-text-field.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Filled text field label text font |
| `md.comp.filled-text-field.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Filled text field label text weight |
| `md.comp.filled-text-field.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Filled text field label text size |
| `md.comp.filled-text-field.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Filled text field label text line height |
| `md.comp.filled-text-field.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Filled text field label text tracking |
| `md.comp.filled-text-field.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field label text color |
| `md.comp.filled-text-field.error.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled text field error hover state layer opacity |
| `md.comp.filled-text-field.error.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Filled text field error hover state layer color |
| `md.comp.filled-text-field.error.hover.trailing-icon.color` | `md.sys.color.on-error-container` | COLOR | Filled text field error hover trailing icon color |
| `md.comp.filled-text-field.error.hover.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field error hover leading icon color |
| `md.comp.filled-text-field.error.hover.supporting-text.color` | `md.sys.color.error` | COLOR | Filled text field error hover supporting text color |
| `md.comp.filled-text-field.error.hover.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field error hover input text color |
| `md.comp.filled-text-field.error.hover.label-text.color` | `md.sys.color.on-error-container` | COLOR | Filled text field error hover label text color |
| `md.comp.filled-text-field.error.hover.active-indicator.color` | `md.sys.color.on-error-container` | COLOR | Filled text field error hover active indicator color |
| `md.comp.filled-text-field.error.focus.caret.color` | `md.sys.color.error` | COLOR | Filled text field error focus caret color |
| `md.comp.filled-text-field.error.focus.trailing-icon.color` | `md.sys.color.error` | COLOR | Filled text field error focus trailing icon color |
| `md.comp.filled-text-field.error.focus.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field error focus leading icon color |
| `md.comp.filled-text-field.error.focus.supporting-text.color` | `md.sys.color.error` | COLOR | Filled text field error focus supporting text color |
| `md.comp.filled-text-field.error.focus.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field error focus input text color |
| `md.comp.filled-text-field.error.focus.label-text.color` | `md.sys.color.error` | COLOR | Filled text field error focus label text color |
| `md.comp.filled-text-field.error.focus.active-indicator.color` | `md.sys.color.error` | COLOR | Filled text field error focus active indicator color |
| `md.comp.filled-text-field.error.trailing-icon.color` | `md.sys.color.error` | COLOR | Filled text field error trailing icon color |
| `md.comp.filled-text-field.error.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field error leading icon color |
| `md.comp.filled-text-field.error.supporting-text.color` | `md.sys.color.error` | COLOR | Filled text field error supporting text color |
| `md.comp.filled-text-field.error.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field error input text color |
| `md.comp.filled-text-field.error.label-text.color` | `md.sys.color.error` | COLOR | Filled text field error label text color |
| `md.comp.filled-text-field.error.active-indicator.color` | `md.sys.color.error` | COLOR | Filled text field error active indicator color |
| `md.comp.filled-text-field.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled text field hover state layer opacity |
| `md.comp.filled-text-field.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Filled text field hover state layer color |
| `md.comp.filled-text-field.hover.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field hover trailing icon color |
| `md.comp.filled-text-field.hover.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field hover leading icon color |
| `md.comp.filled-text-field.hover.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field hover supporting text color |
| `md.comp.filled-text-field.hover.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field hover input text color |
| `md.comp.filled-text-field.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field hover label text color |
| `md.comp.filled-text-field.hover.active-indicator.color` | `md.sys.color.on-surface` | COLOR | Filled text field hover active indicator color |
| `md.comp.filled-text-field.hover.active-indicator.height` | 1dp | LENGTH | Filled text field hover active indicator height |
| `md.comp.filled-text-field.focus.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field focus trailing icon color |
| `md.comp.filled-text-field.focus.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field focus leading icon color |
| `md.comp.filled-text-field.focus.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field focus supporting text color |
| `md.comp.filled-text-field.focus.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field focus input text color |
| `md.comp.filled-text-field.focus.label-text.color` | `md.sys.color.primary` | COLOR | Filled text field focus label text color |
| `md.comp.filled-text-field.focus.active-indicator.color` | `md.sys.color.primary` | COLOR | Filled text field focus active indicator color |
| `md.comp.filled-text-field.focus.active-indicator.height` | 2dp | LENGTH | Filled text field focus active indicator height |
| `md.comp.filled-text-field.disabled.trailing-icon.opacity` | - | OPACITY | Filled text field disabled trailing icon opacity |
| `md.comp.filled-text-field.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled trailing icon color |
| `md.comp.filled-text-field.disabled.leading-icon.opacity` | - | OPACITY | Filled text field disabled leading icon opacity |
| `md.comp.filled-text-field.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled leading icon color |
| `md.comp.filled-text-field.disabled.supporting-text.opacity` | - | OPACITY | Filled text field disabled supporting text opacity |
| `md.comp.filled-text-field.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled supporting text color |
| `md.comp.filled-text-field.disabled.input-text.opacity` | - | OPACITY | Filled text field disabled input text opacity |
| `md.comp.filled-text-field.disabled.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled input text color |
| `md.comp.filled-text-field.disabled.label-text.opacity` | - | OPACITY | Filled text field disabled label text opacity |
| `md.comp.filled-text-field.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled label text color |
| `md.comp.filled-text-field.disabled.active-indicator.opacity` | - | OPACITY | Filled text field disabled active indicator opacity |
| `md.comp.filled-text-field.disabled.active-indicator.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled active indicator color |
| `md.comp.filled-text-field.disabled.active-indicator.height` | 1dp | LENGTH | Filled text field disabled active indicator height |
| `md.comp.filled-text-field.disabled.container.opacity` | - | OPACITY | Filled text field disabled container opacity |
| `md.comp.filled-text-field.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filled text field disabled container color |
| `md.comp.filled-text-field.caret.color` | `md.sys.color.primary` | COLOR | Filled text field caret color |
| `md.comp.filled-text-field.trailing-icon.size` | 24dp | LENGTH | Filled text field trailing icon size |
| `md.comp.filled-text-field.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field trailing icon color |
| `md.comp.filled-text-field.leading-icon.size` | 24dp | LENGTH | Filled text field leading icon size |
| `md.comp.filled-text-field.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field leading icon color |
| `md.comp.filled-text-field.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field supporting text color |
| `md.comp.filled-text-field.label-text.populated.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Filled text field label text populated size |
| `md.comp.filled-text-field.label-text.populated.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Filled text field label text populated line height |
| `md.comp.filled-text-field.input-text.type` | - | TYPOGRAPHY | Filled text field input text type |
| `md.comp.filled-text-field.input-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Filled text field input text font |
| `md.comp.filled-text-field.input-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Filled text field input text weight |
| `md.comp.filled-text-field.input-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Filled text field input text size |
| `md.comp.filled-text-field.input-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Filled text field input text line height |
| `md.comp.filled-text-field.input-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Filled text field input text tracking |
| `md.comp.filled-text-field.input-text.color` | `md.sys.color.on-surface` | COLOR | Filled text field input text color |
| `md.comp.filled-text-field.active-indicator.color` | `md.sys.color.on-surface-variant` | COLOR | Filled text field active indicator color |
| `md.comp.filled-text-field.active-indicator.height` | 1dp | LENGTH | Filled text field active indicator height |
| `md.comp.filled-text-field.container.shape` | `md.sys.shape.corner.extra-small.top` | SHAPE | Filled text field container shape |
| `md.comp.filled-text-field.container.color` | `md.sys.color.surface-container-highest` | COLOR | Filled text field container color |

#### Design Tokens: Text field - Outlined

*For outlined text fields.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.outlined-text-field.focus.indicator.outline.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Outlined text field focus indicator thickness |
| `md.comp.outlined-text-field.error.focus.indicator.outline.color` | `md.sys.color.error` | COLOR | Outlined text field focus indicator color - error |
| `md.comp.outlined-text-field.focus.indicator.outline.color` | `md.sys.color.secondary` | COLOR | Outlined text field focus indicator color |
| `md.comp.outlined-text-field.container.height` | 56dp | LENGTH | Outlined text field container height |
| `md.comp.outlined-text-field.input-text.placeholder.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field input text placeholder color |
| `md.comp.outlined-text-field.input-text.prefix.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field input text prefix color |
| `md.comp.outlined-text-field.input-text.suffix.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field input text suffix color |
| `md.comp.outlined-text-field.error.hover.trailing-icon.color` | `md.sys.color.on-error-container` | COLOR | Outlined text field error hover trailing icon color |
| `md.comp.outlined-text-field.error.hover.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field error hover leading icon color |
| `md.comp.outlined-text-field.error.hover.supporting-text.color` | `md.sys.color.error` | COLOR | Outlined text field error hover supporting text color |
| `md.comp.outlined-text-field.error.hover.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field error hover input text color |
| `md.comp.outlined-text-field.error.hover.label-text.color` | `md.sys.color.on-error-container` | COLOR | Outlined text field error hover label text color |
| `md.comp.outlined-text-field.error.hover.outline.color` | `md.sys.color.on-error-container` | COLOR | Outlined text field error hover outline color |
| `md.comp.outlined-text-field.error.focus.caret.color` | `md.sys.color.error` | COLOR | Outlined text field error focus caret color |
| `md.comp.outlined-text-field.error.focus.trailing-icon.color` | `md.sys.color.error` | COLOR | Outlined text field error focus trailing icon color |
| `md.comp.outlined-text-field.error.focus.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field error focus leading icon color |
| `md.comp.outlined-text-field.error.focus.supporting-text.color` | `md.sys.color.error` | COLOR | Outlined text field error focus supporting text color |
| `md.comp.outlined-text-field.error.focus.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field error focus input text color |
| `md.comp.outlined-text-field.error.focus.label-text.color` | `md.sys.color.error` | COLOR | Outlined text field error focus label text color |
| `md.comp.outlined-text-field.error.focus.outline.color` | `md.sys.color.error` | COLOR | Outlined text field error focus outline color |
| `md.comp.outlined-text-field.error.trailing-icon.color` | `md.sys.color.error` | COLOR | Outlined text field error trailing icon color |
| `md.comp.outlined-text-field.error.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field error leading icon color |
| `md.comp.outlined-text-field.error.supporting-text.color` | `md.sys.color.error` | COLOR | Outlined text field error supporting text color |
| `md.comp.outlined-text-field.error.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field error input text color |
| `md.comp.outlined-text-field.error.label-text.color` | `md.sys.color.error` | COLOR | Outlined text field error label text color |
| `md.comp.outlined-text-field.error.outline.color` | `md.sys.color.error` | COLOR | Outlined text field error outline color |
| `md.comp.outlined-text-field.hover.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field hover trailing icon color |
| `md.comp.outlined-text-field.hover.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field hover leading icon color |
| `md.comp.outlined-text-field.hover.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field hover supporting text color |
| `md.comp.outlined-text-field.hover.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field hover input text color |
| `md.comp.outlined-text-field.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field hover label text color |
| `md.comp.outlined-text-field.hover.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined text field hover outline color |
| `md.comp.outlined-text-field.hover.outline.width` | 1dp | LENGTH | Outlined text field hover outline width |
| `md.comp.outlined-text-field.focus.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field focus trailing icon color |
| `md.comp.outlined-text-field.focus.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field focus leading icon color |
| `md.comp.outlined-text-field.focus.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field focus supporting text color |
| `md.comp.outlined-text-field.focus.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field focus input text color |
| `md.comp.outlined-text-field.focus.label-text.color` | `md.sys.color.primary` | COLOR | Outlined text field focus label text color |
| `md.comp.outlined-text-field.focus.outline.color` | `md.sys.color.primary` | COLOR | Outlined text field focus outline color |
| `md.comp.outlined-text-field.focus.outline.width` | 3dp | LENGTH | Outlined text field focus outline width |
| `md.comp.outlined-text-field.disabled.trailing-icon.opacity` | - | OPACITY | Outlined text field disabled trailing-icon opacity |
| `md.comp.outlined-text-field.disabled.trailing-icon.color` | `md.sys.color.on-surface` | COLOR | Outlined text field disabled trailing-icon color |
| `md.comp.outlined-text-field.disabled.leading-icon.opacity` | - | OPACITY | Outlined text field disabled leading icon opacity |
| `md.comp.outlined-text-field.disabled.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Outlined text field disabled leading icon color |
| `md.comp.outlined-text-field.disabled.supporting-text.opacity` | - | OPACITY | Outlined text field disabled supporting text opacity |
| `md.comp.outlined-text-field.disabled.supporting-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field disabled supporting text color |
| `md.comp.outlined-text-field.disabled.input-text.opacity` | - | OPACITY | Outlined text field disabled input text opacity |
| `md.comp.outlined-text-field.disabled.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field disabled input text color |
| `md.comp.outlined-text-field.disabled.label-text.opacity` | - | OPACITY | Outlined text field disabled label text opacity |
| `md.comp.outlined-text-field.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field disabled label text color |
| `md.comp.outlined-text-field.disabled.outline.opacity` | - | OPACITY | Outlined text field disabled outline opacity |
| `md.comp.outlined-text-field.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined text field disabled outline color |
| `md.comp.outlined-text-field.disabled.outline.width` | 1dp | LENGTH | Outlined text field disabled outline width |
| `md.comp.outlined-text-field.caret.color` | `md.sys.color.primary` | COLOR | Outlined text field caret color |
| `md.comp.outlined-text-field.trailing-icon.size` | 24dp | LENGTH | Outlined text field trailing icon size |
| `md.comp.outlined-text-field.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field trailing icon color |
| `md.comp.outlined-text-field.leading-icon.size` | 24dp | LENGTH | Outlined text field leading icon size |
| `md.comp.outlined-text-field.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field leading icon color |
| `md.comp.outlined-text-field.supporting-text.type` | - | TYPOGRAPHY | Outlined text field supporting text type |
| `md.comp.outlined-text-field.supporting-text.font` | `md.sys.typescale.body-small.font` | FONT_NAMES | Outlined text field supporting text font |
| `md.comp.outlined-text-field.supporting-text.weight` | `md.sys.typescale.body-small.weight` | FONT_WEIGHT | Outlined text field supporting text weight |
| `md.comp.outlined-text-field.supporting-text.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Outlined text field supporting text size |
| `md.comp.outlined-text-field.supporting-text.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Outlined text field supporting text line height |
| `md.comp.outlined-text-field.supporting-text.tracking` | `md.sys.typescale.body-small.tracking` | FONT_TRACKING | Outlined text field supporting text tracking |
| `md.comp.outlined-text-field.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field supporting text color |
| `md.comp.outlined-text-field.label-text.populated.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Outlined text field label text populated size |
| `md.comp.outlined-text-field.label-text.populated.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Outlined text field label text populated line height |
| `md.comp.outlined-text-field.label-text.type` | - | TYPOGRAPHY | Outlined text field label text type |
| `md.comp.outlined-text-field.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Outlined text field label text font |
| `md.comp.outlined-text-field.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Outlined text field label text weight |
| `md.comp.outlined-text-field.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Outlined text field label text size |
| `md.comp.outlined-text-field.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Outlined text field label text line height |
| `md.comp.outlined-text-field.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Outlined text field label text tracking |
| `md.comp.outlined-text-field.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Outlined text field label text color |
| `md.comp.outlined-text-field.input-text.type` | - | TYPOGRAPHY | Outlined text field input text type |
| `md.comp.outlined-text-field.input-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Outlined text field input text font |
| `md.comp.outlined-text-field.input-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Outlined text field input text weight |
| `md.comp.outlined-text-field.input-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Outlined text field input text size |
| `md.comp.outlined-text-field.input-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Outlined text field input text line height |
| `md.comp.outlined-text-field.input-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Outlined text field input text tracking |
| `md.comp.outlined-text-field.input-text.color` | `md.sys.color.on-surface` | COLOR | Outlined text field input text color |
| `md.comp.outlined-text-field.outline.color` | `md.sys.color.outline` | COLOR | Outlined text field outline color |
| `md.comp.outlined-text-field.outline.width` | 1dp | LENGTH | Outlined text field outline width |
| `md.comp.outlined-text-field.container.shape` | `md.sys.shape.corner.extra-small` | SHAPE | Outlined text field container shape |


## Filled text field

![Diagram of a filled text field indicating the 10 parts of its anatomy.](https://lh3.googleusercontent.com/X9POJ7yw_vGiALE8gBKfttJ_56zdy0ncjv5fYNyJVl1Y8SzdDbDA2VCVqWZDA0BYUfjgn3o1jfQ__CB1_3HLphvEi-u8Vex9Q1VZjqkR1HOG=s2048)

*Caption / Legend:*
1. Container
2. Leading icon (optional)
3. Label text in empty field
4. Label text in populated field
5. Trailing icon (optional)
6. Focused active Indicator
7. Caret
8. Input text
9. Supporting text (optional)
10. Enabled active indicator

### Filled text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Diagram of a filled text field indicating its color mappings. ](https://lh3.googleusercontent.com/3QvK6g9HSsTheSVwbJnhS3xny_okcH05M7S-VzIzT8Y20T1azDNw3ab6oTjCFDJDqfz8rgA9If_Ra96-wTC9GoAVkjS1XvSfbPyAgiT3LHQcdw=s2048)

*Caption / Legend:*
Filled text field color roles used for light and dark schemes:

1. Surface container highest
2. On surface variant
3. On surface variant
4. Primary
5. On surface variant
6. Primary
7. Primary
8. On surface
9. On surface variant
10. On surface

### Filled text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![Side by side view of empty and populated filled text fields across different states, showing the differences between enabled, focused, hovered, and disabled. ](https://lh3.googleusercontent.com/oKmfNMCJ_ViUQMDGqTLkxCQj9pqlu69kIuzt96fo0YC7mb_vceZF4LQUwYQViUk_oDf38-KSOFZVsM8Car1RCvjy6JPXVv92WCZIJzbEwNuJ_g=s2048)

*Caption / Legend:*
1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Disabled (empty)
5. Enabled (populated)
6. Focused (populated)
7. Hovered (populated)
8. Disabled (populated)

### Filled text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

![Side by side view of empty and populated filled text fields across different error states, showing the differences between enabled, focused, hovered. ](https://lh3.googleusercontent.com/nuNzqyBbqzPQww1YvytMccqt-cGwmw0Brm79oYB6w-Z1am626wYtqGd6pN2nx393wXxEIJRPia-Fb3WuFB61iDiuXmt4F5ERiaV8fcDWYDqs=s2048)

*Caption / Legend:*
1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Enabled (populated)
5. Focused (populated)
6. Hovered (populated)

### Filled text field measurements

![Diagram showing layout values and paddings for filled text fields without icons. ](https://lh3.googleusercontent.com/2AoiwzxCOioxZi9xQyWBalI9wO_Q2Xvt-udVeaI-UDY00zFWxtWZHUvOZa5PFbRwRJrOOQDlMra63kpmnbLyU0GxAKCCL4d-ZlhN50HdtSPn=s2048)

*Caption / Legend:*
Padding and size measurements without icons

![Diagram showing layout values and paddings for outlined text fields with leading and trailing icons. ](https://lh3.googleusercontent.com/hG_Z6Lx5Jfmhqu7Rnds8d_Ia4DGHtlVW1oCZbwwqD29FtoXf2_g24bzr81cvy3i7nQxSxDzTXYqKrZ4kKSRIB8yz4QSOK1wDfR1jy2psSypxyQ=s2048)

*Caption / Legend:*
Padding and size measurements with icons

![A diagram showing layout values and paddings for supporting text, and supporting text in combination with a character count. ](https://lh3.googleusercontent.com/QbiBv3lVHm9nL8hoQllo5jKgQ6AA37Ngmcd3R0DuB37MAANtap_k0woqbUvLxZJqDgPznP0tIBzy1o0GTKPCp9Omo-StlisHHInPTWMcl9vN=s2048)

*Caption / Legend:*
Padding and size measurements with supporting text and character count

| Attribute | Value |
| --- | --- |
| Default container height | 56dp |
| Label alignment (unpopulated) | Vertically centered |
| Top/bottom padding | 8dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Icon alignment | Vertically centered |
| Padding between icons and text | 16dp |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Target size | 56dp |

### Filled text field configurations

![Side by side view of filled text fields in different configurations.](https://lh3.googleusercontent.com/KpOprJPDbuBUSURPtov109LS7MrNCFY0Ek20qjx5tGAzycWbhUb1YSwjT7Bc7KEu3_7woFXY5msSf47VLtW_WDLOBO-g298eC7JmWKfvuXNOGQ=s2048)

*Caption / Legend:*
Empty and populated filled text fields with:

1. Supporting text
2. Trailing icon
3. Leading icon
4. Leading and trailing icons
5. Prefix
6. Suffix
7. Multi-line text field

## Outlined text field

![Diagram of an outlined text field indicating the 9 parts of its anatomy](https://lh3.googleusercontent.com/juT_ZbiIpoR4u-rL6ab7C0pqjMMp9nEOCEx43GdSNJ0jPkt4RAwIeOy3k047QwD4VLaHhkG4Xc7ZW5tN_AjXfY75D7vByomGUGoz5Y9JfBxyTQ=s2048)

*Caption / Legend:*
1. Enabled container outline
2. Leading icon (optional)
3. Label text in empty field
4. Label text in populated field
5. Trailing icon (optional)
6. Focused container outline
7. Caret
8. Input text
9. Supporting text (optional)

### Outlined text field color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Diagram of an outlined text field indicating its color mappings ](https://lh3.googleusercontent.com/QRrrzuYpe5zpPsCu6AbhllIu1DaJBehUTcv2cIVtd6O7bLdl-ZuUnukzJePt9Y4_-szZKPRj8u0vgwnRAsGDeXih4qprDvoIvyh1_ST_UQUM=s2048)

*Caption / Legend:*
Outlined text field color roles used for light and dark schemes:

1. Outline
2. On surface variant
3. On surface variant
4. Primary
5. On surface variant
6. Primary
7. Primary
8. On surface
9. On surface variant

### Outlined text field states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![Side by side view of empty and populated outlined text fields across different states, showing the differences between enabled, focused, hovered, and disabled. ](https://lh3.googleusercontent.com/7ChV4X-ZSeY8_BCyeu3u3qdlGOmI9fGOOM00iO7V4hK0Ci3rwp_hy9EoMRpsX5t-SnO-nesLg-wBoom_2uX0Ix15ZtmzEQJZFf1ufQaSCWY=s2048)

*Caption / Legend:*
1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Disabled (empty)
5. Enabled (populated)
6. Focused (populated)
7. Hovered (populated)
8. Disabled (populated)

### Outlined text field error states

Error states are visual representations used to communicate the status of a component or interactive element. An error message can display instructions on how to fix it. Error messages are displayed below the text field as supporting text until fixed.

![Side by side view of empty and populated filled text fields across different error states, showing the differences between enabled, focused, hovered. ](https://lh3.googleusercontent.com/JzpL2KJVz10gQRdqaY43CbT_rimzZySTQc-l3ZSUVIdVIYgAXeOvtbuBqIpR3MUIV7uGKVPnHPzTZ8N0SMaRGCeKf7dpiLc4AhE9kxWWdLYp=s2048)

*Caption / Legend:*
1. Enabled (empty)
2. Focused (empty)
3. Hovered (empty)
4. Enabled (populated)
5. Focused (populated)
6. Hovered (populated)

### Outlined text field measurements

![A diagram showing layout values and paddings for outlined text fields without icons. ](https://lh3.googleusercontent.com/fbPahcRVZOrZP4b6Iro8dbT09lSK22S5Fy_Pi_z0Kjiqd_11BD-7MOoRsO3qcXo5x--D8HprVru2ChlRr2BSl-OxHPE5TqKZaVVsMXXD7tJz=s2049)

*Caption / Legend:*
Padding and size measurements without icons

![A diagram showing layout values and paddings for outlined text fields with leading and trailing icons. ](https://lh3.googleusercontent.com/IPC3bKvB5geLDysQJQQsC4IYzNggiZUaqGguykwiwZvUKkNbtAH4_QXRM2MRS3kK04txiDciUgwDAPqLOfunUBEFJBw3lyXuoJPln5nweeyo=s2049)

*Caption / Legend:*
Padding and size measurements with icons

![A diagram showing layout values and paddings for supporting text, and supporting text in combination with a character count. ](https://lh3.googleusercontent.com/_JjJwZsUzwXoqZBtCVcypOsMMq3BPaHVC11s604XWSrXVgPsm5_Jd2mFcMk0lbxVFr2XZSOrtwQeGZAytx0F6sDF42Dz15nNf0_vLAbNBLI=s2049)

*Caption / Legend:*
Padding and size measurements with supporting text and character count

| Attribute | Value |
| --- | --- |
| Container height | 56dp |
| Left/right padding without icons | 16dp |
| Left/right padding with icons | 12dp |
| Padding between icons and text | 16dp |
| Icon alignment | Vertically centered |
| Supporting text and character counter top padding | 4dp |
| Padding between supporting text and character counter | 16dp |
| Label alignment | Vertically centered |
| Left/right padding populated label text | 4dp |
| Target size | 56dp |

### Outlined text field configurations

![A side by side view of outlined text fields in different configurations.](https://lh3.googleusercontent.com/-FpsbRTgumDQyTLpD4LAvrmPPGOU5CXnJFFxPPHNWfN6Fml9KUbuwsV-Uzz7EWlfTKXjfUnGqwv0l1HqTXO7EcMtHgY2BEkZ-XLYOYew_7Nn=s2048)

*Caption / Legend:*
Empty and populated outlined text fields with:

1. Supporting text
2. Trailing icon
3. Leading icon
4. Leading and trailing icons
5. Prefix
6. Suffix
7. Multi-line text field

## Guidelines

![A side by side view of a filled and a outlined text field.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flyqb5o7k-1%20(1).png?alt=media)

*Caption / Legend:*
Filled and outlined text fields

## Usage

Use a text field when someone needs to enter text into a UI, such as filling in contact or payment information.

![Mobile UI of contact form with several text fields. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31ssyn-1.png?alt=media)

*Caption / Legend:*
Contact form using outlined text fields

There are two variants of text fields:

1. Filled text fields
2. Outlined text fields

Both variants of text fields use a container to provide a visual cue for interaction and provide the same functionality.

![Side by side view of a populated and unpopulated filled text field. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31t4yp-2.png?alt=media)

*Caption / Legend:*
Filled text field

![Side by side view of a populated and unpopulated outlined text field. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31tc9a-3.png?alt=media)

*Caption / Legend:*
Outlined text field

### Outlined text fields

Outlined text fields have less visual emphasis than filled text fields. When they appear in places like forms (where many text fields are placed together), their reduced emphasis helps simplify the layout.

![App screen with 1 focused and 1 unfocused outlined text field.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31u7r0-4.png?alt=media)

*Caption / Legend:*
Login screen with outlined text fields

## Choosing text fields

### Choosing text fields

Both variants of text field provide the same functionality. The variant of text field used can depend on style alone.

Choose the variant that:

- Works best with an app’s visual style
- Best accommodates the UI's goals
- Is most distinct from other components (like buttons) and surrounding content

![Mobile UI of a contact form with several filled text fields. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31v0nn-5.png?alt=media)

*Caption / Legend:*
Mobile form using filled text fields

![Mobile UI of a contact form with several outlined text fields. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31vds5-6.png?alt=media)

*Caption / Legend:*
The same mobile form using outlined text fields

### Using both text field variants on the same screen

If both variants of text field are used in a UI, they should be used consistently within different sections, and not intermixed within the same region.

For example, use outlined text fields in one section and filled text fields in another.

![Mobile UI of a contact form with several filled text fields, and an open dialog on top using an outlined text field. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31vnye-7_do.png?alt=media)

*Caption / Legend:*
When using both variants of text fields in a UI, separate them by region

![Mobile UI of a contact form with a mix of outlined and filled text fields.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31vw2z-8_dont.png?alt=media)

*Caption / Legend:*
When using both variants of text fields, don't use both next to each other or within the same form

## Anatomy

### Filled text field

![Diagram of filled text field indicating the 10 parts of its anatomy.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2j3kn4a-9.png?alt=media)

*Caption / Legend:*
1. Container
2. Leading icon (optional)
3. Label text in empty field
4. Label text in populated field
5. Trailing icon (optional)
6. Focused active Indicator
7. Caret
8. Input text
9. Supporting text (optional)
10. Enabled active Indicator

### Outlined text field

![Diagram of an outlined text field indicating the 9 parts of its anatomy.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2j3kqed-10.png?alt=media)

*Caption / Legend:*
1. Enabled container outline
2. Label text in empty field
3. Leading icon (optional)
4. Label text in populated field
5. Trailing icon (optional)
6. Focused container outline
7. Caret
8. Input text
9. Supporting text (optional)

### Containers

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content.

**Fill and stroke**
A text field container has a fill and a stroke either around the entire container, or just the bottom edge. The color and thickness of a stroke can change to indicate when the text field is active.

**Rounded corners**
The container of an outlined text field has rounded corners, while the container of a filled text field has rounded top corners and square bottom corners.

![Side by side view of the containers of a filled and outlined text field.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31y44j-11.png?alt=media)

*Caption / Legend:*
Text field containers

### Label text

Label text tells people what information is requested. Every text field should have a label.

Label text should be aligned with the input text, and always visible. It can be placed in the middle of a text field, or rest near the top of the container.

Label text shouldn't be truncated or take up multiple lines. Keep it short, clear, and fully visible.

![Text field with very long label text, too long to display fully display inside the text field container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx31ykco-13_dont.png?alt=media)

*Caption / Legend:*
Don’t truncate label text. Keep it short, clear, and fully visible.

![Text field with very long label text split into 2 lines. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx320mke-14_dont.png?alt=media)

*Caption / Legend:*
Label text shouldn’t take up multiple lines

### Adjacent label

A text field doesn't require a label if the field's purpose is indicated by a separate, adjacent label.

Adjacent labels should be aligned to the leading edge of the text field container.

![Mobile UI of a contact form with label texts placed outside and on top of the text fields. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32132w-15.png?alt=media)

*Caption / Legend:*
Text fields with adjacent labels

### Required text indicator

To show a field is required, display an asterisk (*) next to the label text, and explain that asterisks indicate required fields in one of two ways:

- Supporting text
- A single note at the beginning of the form

Additional best practices include:

- Indicate all required fields
- If required text has a particular color, use the same color for the asterisk

![Mobile UI of a contact form showing supporting text below the text field, indicating an input is required. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx322ilp-16.png?alt=media)

*Caption / Legend:*
Asterisk with required supporting text

### Input text

Input text is text a person has entered into a text field.

Text fields can display input text in the following ways:

- **Single line** text fields display only one line of text
- **Multi-line** text fields grow to accommodate multiple lines of text
- **Text areas** are fixed-height fields

![Text field with populated input text. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx322ww5-17.png?alt=media)

*Caption / Legend:*
Input text in a filled text field

### Prefix text

Text fields can contain prefix text such as currency symbol.

![Text field with a currency prefix before the input text. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx323bkz-21.png?alt=media)

*Caption / Legend:*
A text field with a currency symbol text prefix

### Suffix text

Text fields can contain suffix text such as unit of measurement or email domain.

![Text field with a suffix after the input text indicating a maximum input of 100. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx323jpq-22.png?alt=media)

*Caption / Legend:*
A text field with a grading scale as suffix

![Text field with a suffix after the input text indicating an email address. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx3246iw-23.png?alt=media)

*Caption / Legend:*
A text field with an email domain suffix

### Supporting text & character counter

Supporting text conveys additional information about the input field, such as how it will be used. It should ideally be one line, though may wrap to multiple lines if required. It can be either persistently visible or visible only on focus.

If there is a character or word limit, include a character or word counter. They display the ratio of characters used and the total character limit.

![A side by side view of a text field with supporting text aligned with the trailing side, and a character counter aligned with the trailing side. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx324ofo-24.png?alt=media)

*Caption / Legend:*
1. Supporting text
2. Character counter

### Error text

For text fields that validate their content such as passwords, replace supporting text with error text. Swapping supporting text with error text prevents new lines of text from bumping content and changing the layout.

- If only one error is possible, error text should describe how to avoid the error
- If multiple errors are possible, error text should describe how to avoid the most likely error

![Mobile UI of a sign up form with an invalid text field entry. The error message wraps to 2 lines. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx325xha-27_caution.png?alt=media)

*Caption / Legend:*
Long errors can wrap to multiple lines if there isn't enough space to clearly describe the error. In this case, ensure padding between text fields is sufficient to prevent multi-lined errors from bumping layout content.

### Error icon

It’s strongly recommended to show an error icon when the text field is in the error state.

This highlights the error for people with visual impairments, and provides an additional sensory indicator.

![2 text fields with error messages. The active text field has a thicker border. Both text fields have a trailing error icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm5vj8xje-28.png?alt=media)

*Caption / Legend:*
The error icon is an important second visual indicator that a text field has an error

### Icons & images

Icons in text fields are optional. Text field icons can:

- Describe valid input methods such as a microphone icon
- Provide affordances to access additional functionality such as clearing the content of a field
- Express an error

Leading and trailing icons change their position based on LTR or RTL contexts.

Images that are 24dp in height can be placed inside of text fields. This image height allows for optimal top and bottom padding within the field and is consistent with icon size recommendations.

1. **Icon signifier 
**Icon signifiers can describe the type of input a text field requires, and be touch targets for nested components. For example, a calendar icon may be tapped to reveal a date picker.
2. **Valid or error icon
**Iconography can indicate both valid and invalid inputs, making error states clear for colorblind users.
3. **Clear icon
**Clear icons let a person clear an entire input field. They appear only when input text is present.
4. **Voice input icon
**A microphone icon signifies that people can input characters using voice.
5. **Dropdown icon
**A dropdown arrow indicates that a text field has a nested selection component.
6. **Image
**An image can help contextualize the required input text such as a credit card number.

![Side by side view of text fields with different icons and images as trailing elements within the container. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx3270td-28.png?alt=media)

*Caption / Legend:*
1. Icon signifier
2. Valid or error icon
3. Clear icon
4. Voice input icon
5. Dropdown icon
6. Image

### Read-only fields

Read-only text fields display pre-filled text that people cannot edit.

A read-only text field is styled the same as a regular text field and is clearly labeled as read-only.

![Read only filled text field. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32b33u-29.png?alt=media)

*Caption / Legend:*
A filled read-only text field

![Read only outlined text field. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32b91b-30.png?alt=media)

*Caption / Legend:*
An outlined read-only text field

## Adaptive design

As layouts adapt to larger screens and different breakpoints, apply flexible container dimensions to text fields. Set minimum and maximum values for margins, padding, and container dimensions as layouts scale so that typography adjusts for better reading experiences.

![UI for creating a new album in a side by side view on mobile and tablet. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32c2h0-Full%20to%20max%20-%201P.png?alt=media)

*Caption / Legend:*
For compact breakpoints, text fields can span the full width of the display. For medium and expanded breakpoints, text fields should be bound by flexible margins or other containers.

As text fields expand in fluid layouts, avoid maintaining fixed margins and typography properties. This can lead to extra long text fields.

For example, text fields should not span the full width of a large screen.

![Tablet UI with text fields spanning the complete width of the screen. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32d5ny-responsive-layout-dont.png?alt=media)

*Caption / Legend:*
Don’t use fixed text field margins on large devices. Text fields shouldn’t span the full width of a large screen.

### Density

Dense text fields enable people to scan and take action on large amounts of information.

![Tablet UI with desne text field as part of event creation form. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32dfqc-31.png?alt=media)

*Caption / Legend:*
A form with dense text fields

#### **Avoid applying density by default**

Don't apply density to text fields by default. This lowers their targets below the recommended 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure this density setting can be easily reverted when it's active, keep all the targets to change it at a minimum of 48x48 CSS pixels each.

## Accessibility

## Use cases

User should be able to:

- Navigate to and activate a text field with assistive technology
- Input information into the text field
- Receive and understand supporting text and error messages
- Navigate to and select interactive icons

## Interaction & style

The containers for both filled and outlined text fields provide the same functionality. Changes to color and thickness of stroke help provide clear visual cues for interaction.

![2 filled text fields in enabled empty state and in focused populated state have visual cues to identify their state.](https://lh3.googleusercontent.com/ueFOTTaBZqSJw0sLrnS0-JLzMtDWg-4J7Ot0sn6SkEiXvbCZ7l3OFYNhv1NlzBfKYVD7RzDXuo_ySEsBH7IEiBF_TnqAr16URqNt5-uWfmU=s656)

*Caption / Legend:*
Filled text fields

![2 outlined text fields in enabled empty state and in focused populated state have visual cues to identify their state.](https://lh3.googleusercontent.com/0s1xBLUmS9DAStbieTHQwGKQq42pyoUiZdSTjlczK97CYRbrKPV58n7m02pcCtSY4XlgiRyv3WRHfZuF7_cSq9SF8pX2uoUNW3zTzU-nQkFp=s656)

*Caption / Legend:*
Outlined text fields

Containers improve the discoverability of text fields by creating contrast between the text field and surrounding content. 

In some contexts, outlined text fields can improve the perception of the fields with a 3:1 or greater contrast ratio between the container outline and the background.

![An outlined text field with label text that passes the minimum contrast of 3:1.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32k7wf-3.png?alt=media)

*Caption / Legend:*
Make sure the container outline has a minimum contrast of 3:1 to the background

![An outlined text field with label text fails the minimum 3:1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32kef6-4.png?alt=media)

*Caption / Legend:*
Don't choose colors that won't pass Material's minimum contrast of 3:1

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Focus lands on (non-disabled) text field |

## Labeling elements

If the UI text is correctly linked, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.

The accessibility label for a text field is the same as the text field label.

![The text field  and accessibility label both read “Email.” The role is “textbox.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32ks8b-5.png?alt=media)

*Caption / Legend:*
A text field’s label should include its UI text

For text fields with interactive trailing icons, the accessibility label clarifies its function.

For example, when a password is hidden, the label for the view icon is "Show password," and when the password is visible, the label is "Hide password."

When an icon has no actionable role, like an error icon, the label is "Error."

![The trailing icon’s accessibility label “Show Password.” The role is “Button.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32l5y8-6.png?alt=media)

*Caption / Legend:*
When a trailing icon in the field acts as a button, the label should clarify function, while the role explains the component type

The prefix and suffix of a text field provides symbols and abbreviations to help users enter the correct values. 
 
The accessibility label for prefix and suffix needs to have a unique id attribute, for example, the currency name for a currency symbol prefix.

![Text field accessibility labels “UI text” are “Euro” for a currency prefix and “At gmail dot com” for the email address suffix.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32leg0-7.png?alt=media)

*Caption / Legend:*
A form containing fields with both a prefix for currency, and a suffix for email address

When there is an error, "alert" is applied to the role and the error message to the text label.

If a text field displays both supporting text and error text, the label should include the supporting text first, followed by the error text.

![The text field accessibility labels is: UI text “Not a valid ZIP code.” The role is “Alert.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32lojq-8.png?alt=media)

*Caption / Legend:*
Text field error messages should be given an “alert” role in accessibility labels

The accessibility label for the character counter clarifies the number of characters that can be entered into the text field.

![A character counter's accessibility label  reads: UI text (“Character count, 5/20”)](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32m4pa-9.png?alt=media)

*Caption / Legend:*
The remaining character counter should be called “character count” within the label

The text displayed in the supporting text is also used for its accessibility label.

![The accessibility label uses the supporting text. It reads: UI text (“Please use the company email address”). Role [No role].](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32meu7-10.png?alt=media)

*Caption / Legend:*
Text field supporting text should have its own accessibility label

If a text field requires input, indicate so with an asterisk at the end of the text field label. The accessibility label must include the asterisk.

![Accessibility label reads: UI text (“Username*”).  The role is “Textbox.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx32mlzg-11.png?alt=media)

*Caption / Legend:*
A required text field’s accessibility label should include any supporting text
