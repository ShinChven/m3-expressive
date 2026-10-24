# Time pickers

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/time-pickers](https://m3.material.io/components/time-pickers)
> Last Updated: 2026-07-17T07:13:07.343Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Time pickers are modal and cover the main content
- Two variants: dial and input
- People can select hours, minutes, or periods of time
- Make sure time can easily be selected by hand on a mobile device

![Dial time picker dial and input time picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyz4dh2-01.png?alt=media)

*Caption / Legend:*
1. Time picker dial
2. Time picker input

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color

![Time picker’s old color mappings. The selected hour of 7 and AM text is purple, on a purple background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcz00a3d-02.png?alt=media)

*Caption / Legend:*
M2: Time pickers had different color mappings

![Time picker's new color mappings. The selected hour of 7 and AM text is black, with different background colors.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcz04x96-03.png?alt=media)

*Caption / Legend:*
M3: Time pickers have new color mappings compatible with dynamic color

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Time picker - Dial

*For dial time pickers.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.time-picker.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Time picker surface tint layer color |
| `md.comp.time-picker.clock-dial.color` | `md.sys.color.surface-container-highest` | COLOR | Time picker clock dial color |
| `md.comp.time-picker.clock-dial.shape` | `md.sys.shape.corner.full` | SHAPE | Time picker clock dial shape |
| `md.comp.time-picker.clock-dial.shape.ignore` | `md.sys.shape.corner.full` | SHAPE | Time picker clock dial shape ignore |
| `md.comp.time-picker.clock-dial.color.ignore` | `md.sys.color.on-surface-variant` | COLOR | Time picker clock dial color ignore |
| `md.comp.time-picker.clock-dial.selector.track.container.width` | 2dp | LENGTH | Time picker clock dial selector track container width |
| `md.comp.time-picker.clock-dial.selector.center.container.size` | 8dp | LENGTH | Time picker clock dial selector center container size |
| `md.comp.time-picker.clock-dial.selector.handle.container.size` | 48dp | LENGTH | Time picker clock dial selector handle container size |
| `md.comp.time-picker.clock-dial.container.size` | 256dp | LENGTH | Time picker clock dial container size |
| `md.comp.time-picker.period-selector.horizontal.container.height` | 38dp | LENGTH | Time picker period selector horizontal container height |
| `md.comp.time-picker.period-selector.horizontal.container.width` | 216dp | LENGTH | Time picker period selector horizontal container width |
| `md.comp.time-picker.period-selector.vertical.container.height` | 80dp | LENGTH | Time picker period selector vertical container height |
| `md.comp.time-picker.period-selector.vertical.container.width` | 52dp | LENGTH | Time picker period selector vertical container width |
| `md.comp.time-picker.time-selector.container.height` | 80dp | LENGTH | Time picker time selector container height |
| `md.comp.time-picker.time-selector.24h-vertical.container.width` | 114dp | LENGTH | Time picker time selector 24h vertical container width |
| `md.comp.time-picker.time-selector.container.width` | 96dp | LENGTH | Time picker time selector container width |
| `md.comp.time-picker.period-selector.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected pressed label text color |
| `md.comp.time-picker.period-selector.selected.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected pressed label text color |
| `md.comp.time-picker.period-selector.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Time picker period selector pressed state layer opacity |
| `md.comp.time-picker.period-selector.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected pressed state layer color |
| `md.comp.time-picker.period-selector.selected.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected pressed state layer color |
| `md.comp.time-picker.time-selector.unselected.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected pressed label text color |
| `md.comp.time-picker.time-selector.selected.pressed.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected pressed label text color |
| `md.comp.time-picker.time-selector.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Time picker time selector pressed state layer opacity |
| `md.comp.time-picker.time-selector.unselected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected pressed state layer color |
| `md.comp.time-picker.time-selector.selected.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected pressed state layer color |
| `md.comp.time-picker.period-selector.unselected.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected focus label text color |
| `md.comp.time-picker.period-selector.selected.focus.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected focus label text color |
| `md.comp.time-picker.period-selector.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Time picker period selector focus state layer opacity |
| `md.comp.time-picker.period-selector.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected focus state layer color |
| `md.comp.time-picker.period-selector.selected.focus.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected focus state layer color |
| `md.comp.time-picker.time-selector.unselected.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected focus label text color |
| `md.comp.time-picker.time-selector.selected.focus.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected focus label text color |
| `md.comp.time-picker.time-selector.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Time picker time selector focus state layer opacity |
| `md.comp.time-picker.time-selector.unselected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected focus state layer color |
| `md.comp.time-picker.time-selector.selected.focus.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected focus state layer color |
| `md.comp.time-picker.period-selector.unselected.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected hover label text color |
| `md.comp.time-picker.period-selector.selected.hover.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected hover label text color |
| `md.comp.time-picker.period-selector.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Time picker period selector hover state layer opacity |
| `md.comp.time-picker.period-selector.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected hover state layer color |
| `md.comp.time-picker.period-selector.selected.hover.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected hover state layer color |
| `md.comp.time-picker.time-selector.unselected.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected hover label text color |
| `md.comp.time-picker.time-selector.selected.hover.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected hover label text color |
| `md.comp.time-picker.time-selector.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Time picker time selector hover state layer opacity |
| `md.comp.time-picker.time-selector.unselected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected hover state layer color |
| `md.comp.time-picker.time-selector.selected.hover.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected hover state layer color |
| `md.comp.time-picker.clock-dial.selector.track.container.color` | `md.sys.color.primary` | COLOR | Time picker clock dial selector track container color |
| `md.comp.time-picker.clock-dial.selector.center.container.shape` | `md.sys.shape.corner.full` | SHAPE | Time picker clock dial selector center container shape |
| `md.comp.time-picker.clock-dial.selector.center.container.color` | `md.sys.color.primary` | COLOR | Time picker clock dial selector center container color |
| `md.comp.time-picker.clock-dial.selector.handle.container.shape` | `md.sys.shape.corner.full` | SHAPE | Time picker clock dial selector handle container shape |
| `md.comp.time-picker.clock-dial.selector.handle.container.color` | `md.sys.color.primary` | COLOR | Time picker clock dial selector handle container color |
| `md.comp.time-picker.clock-dial.label-text.type` | - | TYPOGRAPHY | Time picker clock dial label text type |
| `md.comp.time-picker.clock-dial.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Time picker clock dial label text font |
| `md.comp.time-picker.clock-dial.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Time picker clock dial label text weight |
| `md.comp.time-picker.clock-dial.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Time picker clock dial label text size |
| `md.comp.time-picker.clock-dial.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Time picker clock dial label text line height |
| `md.comp.time-picker.clock-dial.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Time picker clock dial label text tracking |
| `md.comp.time-picker.clock-dial.unselected.label-text.color` | `md.sys.color.on-surface` | COLOR | Time picker clock dial unselected label text color |
| `md.comp.time-picker.clock-dial.selected.label-text.color` | `md.sys.color.on-primary` | COLOR | Time picker clock dial selected label text color |
| `md.comp.time-picker.period-selector.label-text.type` | - | TYPOGRAPHY | Time picker period selector label text type |
| `md.comp.time-picker.period-selector.label-text.font` | `md.sys.typescale.title-medium.font` | FONT_NAMES | Time picker period selector label text font |
| `md.comp.time-picker.period-selector.label-text.weight` | `md.sys.typescale.title-medium.weight` | FONT_WEIGHT | Time picker period selector label text weight |
| `md.comp.time-picker.period-selector.label-text.size` | `md.sys.typescale.title-medium.size` | FONT_SIZE | Time picker period selector label text size |
| `md.comp.time-picker.period-selector.label-text.line-height` | `md.sys.typescale.title-medium.line-height` | LINE_HEIGHT | Time picker period selector label text line height |
| `md.comp.time-picker.period-selector.label-text.tracking` | `md.sys.typescale.title-medium.tracking` | FONT_TRACKING | Time picker period selector label text tracking |
| `md.comp.time-picker.period-selector.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker period selector unselected label text color |
| `md.comp.time-picker.period-selector.selected.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time picker period selector selected label text color |
| `md.comp.time-picker.period-selector.outline.width` | 1dp | LENGTH | Time picker period selector outline width |
| `md.comp.time-picker.period-selector.outline.color` | `md.sys.color.outline` | COLOR | Time picker period selector outline color |
| `md.comp.time-picker.period-selector.container.shape` | `md.sys.shape.corner.small` | SHAPE | Time picker period selector container shape |
| `md.comp.time-picker.period-selector.selected.container.color` | `md.sys.color.tertiary-container` | COLOR | Time picker period selector selected container color |
| `md.comp.time-picker.time-selector.separator.type` | - | TYPOGRAPHY | Time picker time selector separator type |
| `md.comp.time-picker.time-selector.separator.font` | `md.sys.typescale.display-large.font` | FONT_NAMES | Time picker time selector separator font |
| `md.comp.time-picker.time-selector.separator.weight` | `md.sys.typescale.display-large.weight` | FONT_WEIGHT | Time picker time selector separator weight |
| `md.comp.time-picker.time-selector.separator.size` | `md.sys.typescale.display-large.size` | FONT_SIZE | Time picker time selector separator size |
| `md.comp.time-picker.time-selector.separator.line-height` | `md.sys.typescale.display-large.line-height` | LINE_HEIGHT | Time picker time selector separator line height |
| `md.comp.time-picker.time-selector.separator.tracking` | `md.sys.typescale.display-large.tracking` | FONT_TRACKING | Time picker time selector separator tracking |
| `md.comp.time-picker.time-selector.separator.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector separator color |
| `md.comp.time-picker.time-selector.label-text.type` | - | TYPOGRAPHY | Time picker time selector label text type |
| `md.comp.time-picker.time-selector.label-text.font` | `md.sys.typescale.display-large.font` | FONT_NAMES | Time picker time selector label text font |
| `md.comp.time-picker.time-selector.label-text.weight` | `md.sys.typescale.display-large.weight` | FONT_WEIGHT | Time picker time selector label text weight |
| `md.comp.time-picker.time-selector.label-text.size` | `md.sys.typescale.display-large.size` | FONT_SIZE | Time picker time selector label text size |
| `md.comp.time-picker.time-selector.label-text.line-height` | `md.sys.typescale.display-large.line-height` | LINE_HEIGHT | Time picker time selector label text line height |
| `md.comp.time-picker.time-selector.label-text.tracking` | `md.sys.typescale.display-large.tracking` | FONT_TRACKING | Time picker time selector label text tracking |
| `md.comp.time-picker.time-selector.unselected.label-text.color` | `md.sys.color.on-surface` | COLOR | Time picker time selector unselected label text color |
| `md.comp.time-picker.time-selector.selected.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Time picker time selector selected label text color |
| `md.comp.time-picker.time-selector.container.shape` | `md.sys.shape.corner.small` | SHAPE | Time picker time selector container shape |
| `md.comp.time-picker.time-selector.unselected.container.color` | `md.sys.color.surface-container-highest` | COLOR | Time picker time selector unselected container color |
| `md.comp.time-picker.time-selector.selected.container.color` | `md.sys.color.primary-container` | COLOR | Time picker time selector selected container color |
| `md.comp.time-picker.headline.type` | - | TYPOGRAPHY | Time picker headline type |
| `md.comp.time-picker.headline.font` | `md.sys.typescale.label-medium.font` | FONT_NAMES | Time picker headline font |
| `md.comp.time-picker.headline.weight` | `md.sys.typescale.label-medium.weight` | FONT_WEIGHT | Time picker headline weight |
| `md.comp.time-picker.headline.size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Time picker headline size |
| `md.comp.time-picker.headline.line-height` | `md.sys.typescale.label-medium.line-height` | LINE_HEIGHT | Time picker headline line height |
| `md.comp.time-picker.headline.tracking` | `md.sys.typescale.label-medium.tracking` | FONT_TRACKING | Time picker headline tracking |
| `md.comp.time-picker.headline.color` | `md.sys.color.on-surface-variant` | COLOR | Time picker headline color |
| `md.comp.time-picker.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Time picker container shape |
| `md.comp.time-picker.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Time picker container elevation |
| `md.comp.time-picker.container.color` | `md.sys.color.surface-container-high` | COLOR | Time picker container color |

#### Design Tokens: Time picker - Input

*For input time pickers.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.time-input.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Time input focus indicator offset |
| `md.comp.time-input.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Time input focus indicator thickness |
| `md.comp.time-input.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Time input focus indicator color |
| `md.comp.time-input.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Time input surface tint layer color |
| `md.comp.time-input.period-selector.container.height` | 72dp | LENGTH | Time input period selector container height |
| `md.comp.time-input.period-selector.container.width` | 52dp | LENGTH | Time input period selector container width |
| `md.comp.time-input.time-input-field.container.height` | 72dp | LENGTH | Time input time input field container height |
| `md.comp.time-input.time-input-field.container.width` | 96dp | LENGTH | Time input time input field container width |
| `md.comp.time-input.period-selector.unselected.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected pressed label text color |
| `md.comp.time-input.period-selector.selected.pressed.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected pressed label text color |
| `md.comp.time-input.period-selector.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Time input period selector pressed state layer opacity |
| `md.comp.time-input.period-selector.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected pressed state layer color |
| `md.comp.time-input.period-selector.selected.pressed.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected pressed state layer color |
| `md.comp.time-input.period-selector.unselected.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected focus label text color |
| `md.comp.time-input.period-selector.selected.focus.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected focus label text color |
| `md.comp.time-input.period-selector.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Time input period selector focus state layer opacity |
| `md.comp.time-input.period-selector.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected focus state layer color |
| `md.comp.time-input.period-selector.selected.focus.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected focus state layer color |
| `md.comp.time-input.time-input-field.focus.label-text.color` | `md.sys.color.on-primary-container` | COLOR | Time input time input field focus label text color |
| `md.comp.time-input.time-input-field.focus.outline.width` | 2dp | LENGTH | Time input time input field focus outline width |
| `md.comp.time-input.time-input-field.focus.outline.color` | `md.sys.color.primary` | COLOR | Time input time input field focus outline color |
| `md.comp.time-input.time-input-field.focus.container.color` | `md.sys.color.primary-container` | COLOR | Time input time input field focus container color |
| `md.comp.time-input.period-selector.unselected.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected hover label text color |
| `md.comp.time-input.period-selector.selected.hover.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected hover label text color |
| `md.comp.time-input.period-selector.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Time input period selector hover state layer opacity |
| `md.comp.time-input.period-selector.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected hover state layer color |
| `md.comp.time-input.period-selector.selected.hover.state-layer.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected hover state layer color |
| `md.comp.time-input.time-input-field.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Time input time input field hover label text color |
| `md.comp.time-input.time-input-field.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Time input time input field hover state layer opacity |
| `md.comp.time-input.time-input-field.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Time input time input field hover state layer color |
| `md.comp.time-input.period-selector.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.time-input.period-selector.label-text.font` | `md.sys.typescale.title-medium.font` | FONT_NAMES | Time input period selector label text font |
| `md.comp.time-input.period-selector.label-text.weight` | `md.sys.typescale.title-medium.weight` | FONT_WEIGHT | Time input period selector label text weight |
| `md.comp.time-input.period-selector.label-text.size` | `md.sys.typescale.title-medium.size` | FONT_SIZE | Time input period selector label text size |
| `md.comp.time-input.period-selector.label-text.line-height` | `md.sys.typescale.title-medium.line-height` | LINE_HEIGHT | Time input period selector label text line height |
| `md.comp.time-input.period-selector.label-text.tracking` | `md.sys.typescale.title-medium.tracking` | FONT_TRACKING | Time input period selector label text tracking |
| `md.comp.time-input.period-selector.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time input period selector unselected label text color |
| `md.comp.time-input.period-selector.selected.label-text.color` | `md.sys.color.on-tertiary-container` | COLOR | Time input period selector selected label text color |
| `md.comp.time-input.period-selector.outline.width` | 1dp | LENGTH | Time input period selector outline width |
| `md.comp.time-input.period-selector.outline.color` | `md.sys.color.outline` | COLOR | Time input period selector outline color |
| `md.comp.time-input.period-selector.container.shape` | `md.sys.shape.corner.small` | SHAPE | Time input period selector container shape |
| `md.comp.time-input.period-selector.selected.container.color` | `md.sys.color.tertiary-container` | COLOR | Time input period selector selected container color |
| `md.comp.time-input.time-input-field.supporting-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.time-input.time-input-field.supporting-text.font` | `md.sys.typescale.body-small.font` | FONT_NAMES | Time input time input field supporting text font |
| `md.comp.time-input.time-input-field.supporting-text.weight` | `md.sys.typescale.body-small.weight` | FONT_WEIGHT | Time input time input field supporting text weight |
| `md.comp.time-input.time-input-field.supporting-text.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Time input time input field supporting text size |
| `md.comp.time-input.time-input-field.supporting-text.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Time input time input field supporting text line height |
| `md.comp.time-input.time-input-field.supporting-text.tracking` | `md.sys.typescale.body-small.tracking` | FONT_TRACKING | Time input time input field supporting text tracking |
| `md.comp.time-input.time-input-field.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Time input time input field supporting text color |
| `md.comp.time-input.time-input-field.separator.type` | - | TYPOGRAPHY | Type style |
| `md.comp.time-input.time-input-field.separator.font` | `md.sys.typescale.display-large.font` | FONT_NAMES | Time input time input field separator font |
| `md.comp.time-input.time-input-field.separator.weight` | `md.sys.typescale.display-large.weight` | FONT_WEIGHT | Time input time input field separator weight |
| `md.comp.time-input.time-input-field.separator.size` | `md.sys.typescale.display-large.size` | FONT_SIZE | Time input time input field separator size |
| `md.comp.time-input.time-input-field.separator.line-height` | `md.sys.typescale.display-large.line-height` | LINE_HEIGHT | Time input time input field separator line height |
| `md.comp.time-input.time-input-field.separator.tracking` | `md.sys.typescale.display-large.tracking` | FONT_TRACKING | Time input time input field separator tracking |
| `md.comp.time-input.time-input-field.separator.color` | `md.sys.color.on-surface` | COLOR | Time input time input field separator color |
| `md.comp.time-input.time-input-field.label-text.type` | - | TYPOGRAPHY | Time input time input field label text type |
| `md.comp.time-input.time-input-field.label-text.font` | `md.sys.typescale.display-medium.font` | FONT_NAMES | Time input time input field label text font |
| `md.comp.time-input.time-input-field.label-text.weight` | `md.sys.typescale.display-medium.weight` | FONT_WEIGHT | Time input time input field label text weight |
| `md.comp.time-input.time-input-field.label-text.size` | `md.sys.typescale.display-medium.size` | FONT_SIZE | Time input time input field label text size |
| `md.comp.time-input.time-input-field.label-text.line-height` | `md.sys.typescale.display-medium.line-height` | LINE_HEIGHT | Time input time input field label text line height |
| `md.comp.time-input.time-input-field.label-text.tracking` | `md.sys.typescale.display-medium.tracking` | FONT_TRACKING | Time input time input field label text tracking |
| `md.comp.time-input.time-input-field.label-text.color` | `md.sys.color.on-surface` | COLOR | Time input time input field label text color |
| `md.comp.time-input.time-input-field.container.shape` | `md.sys.shape.corner.small` | SHAPE | Time input time input field container shape |
| `md.comp.time-input.time-input-field.container.color` | `md.sys.color.surface-container-highest` | COLOR | Time input time input field container color |
| `md.comp.time-input.headline.type` | - | TYPOGRAPHY | Time input headline type |
| `md.comp.time-input.headline.font` | `md.sys.typescale.label-medium.font` | FONT_NAMES | Time input headline font |
| `md.comp.time-input.headline.weight` | `md.sys.typescale.label-medium.weight` | FONT_WEIGHT | Time input headline weight |
| `md.comp.time-input.headline.size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Time input headline size |
| `md.comp.time-input.headline.line-height` | `md.sys.typescale.label-medium.line-height` | LINE_HEIGHT | Time input headline line height |
| `md.comp.time-input.headline.tracking` | `md.sys.typescale.label-medium.tracking` | FONT_TRACKING | Time input headline tracking |
| `md.comp.time-input.headline.color` | `md.sys.color.on-surface-variant` | COLOR | Time input headline color |
| `md.comp.time-input.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Time input container shape |
| `md.comp.time-input.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Time input container elevation |
| `md.comp.time-input.container.color` | `md.sys.color.surface-container-high` | COLOR | Time input container color |


## Anatomy

### Time picker dial

![Diagram indicating the 14 elements of a time picker dial.](https://lh3.googleusercontent.com/fEL90tTIe0i1cDIA4nKzUlbA5mbzo5VJxmQrzgNnf2RF1SiZXQ3szYwn4PancFx48zU5hY-Kx_GL_I1INZgv-o0h_V26mxPc_Zk3SVECTT9p0w=s2048)

*Caption / Legend:*
1. Headline
2. Time selector separator
3. Container
4. Period selector container
5. Period selector label text
6. Clock dial selector center
7. Clock dial selector track
8. Text button
9. Icon button
10. Clock dial selector container
11. Clock dial label text
12. Clock dial container
13. Time selector label text
14. Time selector container

### Time picker input

![Diagram indicating the 10 elements of a time picker input.](https://lh3.googleusercontent.com/oh1OcUsaz4lc3Bj48OezLBgBFvrMsglz1zYFK0mO9Cf8GuLmflhif0VpKC57fGOLp8xxpj2C9Vp9Dm4e9qFvNVOLuoXtlfobCQmFE0ov-7gIiQ=s2048)

*Caption / Legend:*
1. Headline
2. Time input field seperator
3. Container
4. Period selector container
5. Period selector label text
6. Text button
7. Icon button
8. Time input field supporting text
9. Time input field label text
10. Time input field container

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

### Time picker dial color

![Side-by-side diagram indicating the 17 different color elements of a time picker dial.](https://lh3.googleusercontent.com/2yPFvDOYGLJVQZMR6u6XxQe0yKZcdjOxZisoE_nNHnj72E4dyq2I8vSihXm2jbqhEwmtUaHOdrrcangbqbKufbxy97LWIppPA4hGW5E7KJaP=s2048)

*Caption / Legend:*
Time picker dial color roles used for light and dark themes:

1. On surface variant
2. On surface
3. Surface container highest
4. On surface
5. Tertiary container
6. On tertiary container
7. Surface container high
8. Outline
9. On surface
10. Primary
11. On primary
12. Primary
13. On surface variant
14. On surface
15. Surface container highest
16. On primary container
17. Primary container

### Time picker input color

![Side-by-side diagram indicating the 13 different color elements of a time picker input.](https://lh3.googleusercontent.com/5OUv797RnNR2XL9-3tT1sy3rKIjyxF2D4rnITJ4nURQm20-jzkT7Mygba3MDoShEFegMNRkNUE38mRg_kleVh970WS3cOJcm0KzkB1j8SEiIaA=s2048)

*Caption / Legend:*
Time picker input color roles used for light and dark themes:

1. On surface variant
2. On surface
3. Surface container highest
4. On surface
5. Tertiary container
6. On tertiary container
7. Surface container high
8. Outline
9. On surface
10. Primary
11. On surface variant
12. On primary container
13. Primary container

## States

![Diagram showing the 4 interactive states of a time picker, in both light theme and dark theme.](https://lh3.googleusercontent.com/tS5QmHOdLQaGFzVS3OBV8hKVk1lcswec2uan7b-7CS_hhmglq3X45gYIkux28kcLyIRqYhetBz8xNkv8oi7LgI20dj-XT-jX2W4rJkdrAsFZ1g=s2048)

*Caption / Legend:*
1. Enabled
2. Hover
3. Focus
4. Pressed

[States specs can be found in the token module above](/m3/pages/time-pickers/specs#2ccd9809-9246-4667-85fa-7747f4ac7349)

## Measurements

### Time picker dial - vertical

![Diagram of vertical time picker dial measurements.](https://lh3.googleusercontent.com/FgpC_ZjE7NOxcqQBBUWoNg2IzyW6Wa2fUmWzGFf8nvuKlW2ZDSNovmYN5K645AAEsF9aGQKd904yRzx_fg9J6i0FHSroG9VFb6KmVvRd6ys=s2048)

*Caption / Legend:*
Vertical time picker dial padding and size measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time selector container | Width | 96dp |
| Width (24h vertical) | 114dp |  |
| Height | 80dp |  |
| Period selector container | Width (vertical layout) | 52dp |
| Height (vertical layout) | 80dp |  |
| Width (horizontal layout) | 216dp |  |
| Height (horizontal layout) | 38dp |  |
| Clock dial container | Size | 256dp |
| Clock dial selector handle | Size | 48dp |
| Clock dial selector center | Size | 8dp |
| Clock dial selector track | Width | 2dp |

### Time picker dial - horizontal

![Diagram of horizontal time picker dial measurements.](https://lh3.googleusercontent.com/MwlBqM5KsVnml1NDvUxDoQA_7yMRkFhQYxC5VMUBe1FPGKPR0t1b7y9pIT5Rn-gjTZX3O6ju0vY7IC-ze75NYNACZagvjaTWeN8PBu9jXbxO=s2048)

*Caption / Legend:*
Horizontal time picker dial padding and size measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time selector container | Width | 96dp |
| Width (24h vertical) | 114dp |  |
| Height | 80dp |  |
| Period selector container | Width (vertical layout) | 52dp |
| Height (vertical layout) | 80dp |  |
| Width (horizontal layout) | 216dp |  |
| Height (horizontal layout) | 38dp |  |
| Clock dial container | Size | 256dp |
| Clock dial selector handle | Size | 48dp |
| Clock dial selector center | Size | 8dp |
| Clock dial selector track | Width | 2dp |

### Time picker input

![Diagram of time picker input measurements.](https://lh3.googleusercontent.com/pTsIaFUPD07juD1tkEAvb1p0JJU1I0QmuQdvKL7rBgtjB7hWWTAGzoRFAag-kQi9AYqTpJixai14sAwU1UsBFsAJY4izUkwetewV66_oVBcw=s2048)

*Caption / Legend:*
Time picker input padding and size measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Dynamic |
| Height | Dynamic |  |
| Headline alignment | Left |  |
| Top/bottom padding | 24dp |  |
| Left/right padding | 24dp |  |
| Time input field container | Width | 96dp |
| Height | 72dp |  |
| Period selector container | Width | 52dp |
| Height | 72dp |  |

## Configurations

### Vertical orientation and horizontal orientation

![Comparing vertical and horizontal time picker dials.](https://lh3.googleusercontent.com/WmiYd7XEBckVcinYGeo-3xr2eeeOOIIWF9dZ0VTU4ajlR6R63EP3LMH9AakmYwtl5XlTulsT_uJXym_dOmVCWgTCX49b0aTPPU_3U66z8Ro=s2048)

*Caption / Legend:*
1. Vertical layout (default on mobile)
2. Horizontal layout

### 24-hour time picker dial

![2 24-hour time picker dials with vertical and horizontal layouts.](https://lh3.googleusercontent.com/SWtG7bnOOsaGYyC_KZbnqnO2SdcEIquR2TiLO6WAIdja0IDe8P8OQ9OehHUxTYAhf1vXNKGrjkMeJdgKkFfG-PqUTsDcH8sZ625V3ngYp1CFMA=s2048)

*Caption / Legend:*
1. 24h dial in vertical layout (default on mobile)
2. 24h dial in horizontal layout

### 12-hour and 24-hour time picker inputs

![Compare 12-hour and 24-hour time picker inputs.](https://lh3.googleusercontent.com/YLwHepIx8fINPXo6ZMe0kk0nFoE45b4o9Rvtdre11V6KVm_pbkSMOb4Ltiu4Sgk-NyG0M5t1Cs5ghFF62FC4iAImZ1o-zi-1jM1rilN5756f=s2048)

*Caption / Legend:*
1. 12h input
2. 24h input

## Guidelines

![Time picker. It has a dial and keyboard input for hours and minutes, and a setting for AM or PM.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2pwu0i-01.png?alt=media)

*Caption / Legend:*
Dial selector time picker for a 12-hour clock

## Usage

Time pickers allow people to enter a specific time value. They’re displayed in dialogs and can be used to select hours, minutes, or periods of time.

They can be used for a wide range of scenarios. Common use cases include:

- Setting an alarm
- Scheduling a meeting

Time pickers are not ideal for nuanced or granular time selection, such as milliseconds for a stopwatch application.

![Time picker with dial input selecting hour 7.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2q22nz-02.png?alt=media)

*Caption / Legend:*
Hour selection in a mobile calendar picker

### Time input picker

Time input pickers allow people to specify a time using keyboard numbers. This input option should be accessible from any other mobile time picker interface by tapping the keyboard icon.

![Input time picker with keyboard active for the hour.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2q5unb-03.png?alt=media)

*Caption / Legend:*
Hour input with keyboard entry

### 24-hour time selection

The dial view can be changed to reflect time selection across 24 hours. This option is set outside of the time picker component, typically through system settings.

![Time picker with dial input selecting hour 20. Hours 0–11 use an outer dial, hours 12–23 use an inner dial.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2q7fdq-04.png?alt=media)

*Caption / Legend:*
24-hour dial view

## Anatomy

![17 elements of a dial time picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2u47yh-05.png?alt=media)

*Caption / Legend:*
1. Label (headline)
2. Time selector separator
3. Input field
4. Input text
5. Period selector (selected)
6. Period selector text (selected)
7. Container
8. Period selector outline
9. Period selector text
10. Dial selector track
11. Dial label (selected)
12. Text buttons
13. Icon button
14. Dial label (unselected)
15. Clock dial
16. Input text (selected)
17. Input field (selected)

![13 elements of an input time picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2u4xoe-06.png?alt=media)

*Caption / Legend:*
1. Label (headline)
2. Time selector separator
3. Input field
4. Input text
5. Period selector (selected)
6. Period selector text (selected)
7. Container
8. Period selector outline
9. Period selector text (unselected)
10. Text buttons
11. Icon button
12. Input text (selected)
13. Input field (selected)

### Container

Like dialogs, the container should appear above other screen elements. To focus attention, surfaces behind the container have a temporary scrim overlay to make them less prominent.

![Time picker container, all elements inside.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2u8t61-07.png?alt=media)

*Caption / Legend:*
The container includes all time picker elements

### Input selector

The input selector is a unique kind of text field input. It differs from typical text field inputs in that it has:

- An added highlight to call attention to the selected field
- A larger shape, size, and font
- A label below the field

Hours and minutes should have separate inputs. For people using a 12-hour clock, an AM/PM selector appears to the right of minutes. For people using a 24-hour clock, the AM/PM selector shouldn’t appear.

![Input time picker with the hour field active, and so highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2ugmkj-08.png?alt=media)

*Caption / Legend:*
Input selector for a 12-hour clock

### Dial selector

Dial selectors always mimic a round watch face. Hours and minutes can be selected by tapping a number or dragging the dial selector track.

When representing a 12-hour dial, all numbers appear in the outer ring. When representing a 24-hour dial, even numbers appear in an inner ring, and odd numbers appear in an outer ring.

![Dial time picker with hour 7 selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2uji74-09.png?alt=media)

*Caption / Legend:*
Dial selector for a 12-hour clock

### Text & icon buttons

Icon buttons are used to switch between the input selector, represented by a keyboard, and the dial selector, represented by a clock.

Text buttons are used to exit the dialog (**Cancel**) and save the selector input (**OK**).

![Time picker buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2uqf01-10.png?alt=media)

*Caption / Legend:*
The keyboard icon allows people to switch between the dial selector (pictured) and the input selector

### Landscape orientation

The clock dial interface adapts to a device’s orientation. In landscape mode, the stacked input and selection options are positioned side-by-side.

![Time picker in landscape orientation on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2wil5z-11.png?alt=media)

*Caption / Legend:*
On mobile, the time picker can adapt to landscape orientation

## Placement

Time pickers shouldn’t be obscured by other elements.

Time pickers should change orientation or variant to ensure they aren't cropped by the edge of the screen.

Time pickers are modal windows above a scrim. This puts the time pickers at the forefront of a person's view, calling attention to make a selection of time.

![Input time picker in landscape orientation on mobile. It's fully visible despite the limited device height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7tgqq3-12.png?alt=media)

*Caption / Legend:*
The time picker should change to fit the size of the screen so the time picker is always fully visible

## Adaptive design

Time pickers can swap between orientation or variant depending on device orientation and viewport constraints.

For example, the time picker can change to landscape orientation on larger breakpoints or when viewport height is limited, to avoid scrolling the dial presentation.

Time pickers can fallback to the input time picker when there isn’t enough vertical real estate to present the landscape orientation without scrolling.

![Dial time picker in portrait orientation on mobile.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2uzinf-13.png?alt=media)

*Caption / Legend:*
High-density time picker displayed on mobile

### Density

Don’t apply density to the time picker dial when the viewport is constrained. Instead, use an input picker.

![Dial time picker in portrait orientation, too tall to fully fit on a mobile device in landscape mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2v1wt2-14_dont.png?alt=media)

*Caption / Legend:*
Don’t apply density to the time picker dial when the viewport is constrained. Instead, use an input picker.

## Behavior

There are two primary methods for selecting time with the mobile time picker. People can:

- Type in a specific value in the hour and minute fields
- Select the hour or minute field from the text input and adjust the clock dial to simultaneously change the corresponding time field above

### Appearing & disappearing

Like other kinds of dialogs, time pickers use an enter and exit transition pattern to appear on the screen.

To exit a time picker, the input can either be confirmed (**OK**) or dismissed (**Cancel**). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus.

### Toggle between dial & input

Tapping the keyboard icon on a mobile time picker switches the view to the input picker.

### Scrolling

Time pickers should avoid scrolling, and swap component orientation or variant based on device orientation or viewport size.

Time pickers don’t scroll with elements outside of the modal window, such as the background.

![Input time picker in landscape orientation to fit a mobile device in landscape mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2v8xeq-18.png?alt=media)

*Caption / Legend:*
Time pickers shouldn’t scroll

## Accessibility

## Use cases

People should be able to use assistive technology to:

- Select or enter hours/minutes, and in some cases, seconds/milliseconds
- Choose from multiple time formats, including 24-hour clock view and AM/PM
- Enter time selection manually using input fields

## Interaction & style

Time pickers should allow manual time entry through text input, rather than exclusively through the dial selector. This makes it easier for those using keyboard inputs rather than touchscreens.

If a screen is not large enough to display the dial selector, consider displaying the input selector alone. Currently for Android Views, the dial selector is always visible.

The input selector should be accessible from the dial selector via the keyboard icon. This interaction allows multiple input methods and makes the time picker accessible for assistive technology users.

![Time picker with active manual text input for hours.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w3xxn-01.png?alt=media)

*Caption / Legend:*
For time selection that doesn’t require a dial view, make a time input picker the default option

### Targets

Targets for dial selectors should be 48x48dp.

![Time picker dial selector specs, selecting hour 7.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w61b9-02.png?alt=media)

*Caption / Legend:*
Dial selector targets should be 48x48dp

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Focus lands on (non-disabled) time slot |
| **Space** or **Enter** | Activates the (non-disabled) time slot |

## Labeling elements

If the input text is correctly linked, assistive tech like a screenreader will read the component’s role first, then the UI text.

![Accessibility tags on the time picker's hour input field.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w8i4o-03.png?alt=media)

*Caption / Legend:*
The hour and minute fields have the text input role

The dial selector will read a selection of total hours, such as **Hour 7 of 12**.

![Accessibility tag on the time picker's dial selector.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd2w9ugu-04.png?alt=media)

*Caption / Legend:*
A screen reader reads the text label of a dial selector

### Dial selector

| Element | Accessibility label | Role (Wiz and Jetpack Compose) | Role (Android Views) |
| --- | --- | --- | --- |
| Hour input (input picker) | Hour | Text input | - |
| Minutes input | Minute | Text input | - |
| AM/PM selection | AM or PM | Radio button (in list) | Checkbox (in list) |
| Keyboard button | Toggle input picker | Button | Button |
| Cancel button | Cancel | Button | Button |
| OK button | OK | Button | Button |
| Clock dial time selection (dial selector) | {Value} Hours or minutes of {Total} | Button | - |

### Input selector

| Element | Accessibility label | Role (Wiz and Jetpack Compose) | Role (Android Views) |
| --- | --- | --- | --- |
| Hour input (input picker) | Hour | Text input | - |
| Minutes input | Minute | Text input | - |
| Clock button | Toggle dial picker | Button | Button |
| Cancel button | Cancel | Button | Button |
| OK button | OK | Button | Button |
