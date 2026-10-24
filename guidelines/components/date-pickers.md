# Date pickers

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/date-pickers](https://m3.material.io/components/date-pickers)
> Last Updated: 2026-07-27T14:12:27.562Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Date pickers can display past, present, or future dates
- Three variants: docked, modal, modal input
- Clearly indicate important dates, such as current and selected days
- Follow common patterns, like a calendar view

![3 variants of date pickers side-by-side. The docked date picker has an outlined text field above a calendar view. The modal date picker allows people to select a date from a calendar view. The modal date input lets someone type in a date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5mxu7o-01.png?alt=media)

*Caption / Legend:*
1. Docked date picker
2. Modal date picker
3. Modal date input

## Availability & resources

## Differences from M2

- Typography and spacing: Titles and labels are larger and have increased spacing to accommodate 48dp target size
- Color: New color mappings and compatibility with dynamic color
- Variants: The three variants of date pickers have been renamed to not be device-dependent. The former desktop date picker is now known as the docked date picker. The former mobile date picker and date input are now known as modal date picker and modal date input to reinforce that the user must take an action.

![Old version of a date picker with a white background and shadows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fle4qmou9-1P-datepicker_whatsnew_1.png?alt=media)

*Caption / Legend:*
M2: Date pickers had a drop shadow and different color mappings

![New version of date picker with a colorful background, rounded corners, and no shadows.](https://lh3.googleusercontent.com/HWA4owUgCVU0oIuTW-9x1wyLuHIA6m_aaks97Ih_BEz-wvMRKQqmb8-FsElnU5Jxck9-Hi-br9L52IDZBwYY22tVVJyY8NtOKnsOlqxB8gJdpQ=s1004)

*Caption / Legend:*
M3: Date pickers have larger typography, no shadow, and new color mappings compatible with dynamic color

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

#### Design Tokens: Date picker - Docked

*For docked date pickers.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.date-picker.docked.date.unselected.outside-month.label-text.opacity` | - | OPACITY | Date unselected outside month label text opacity |
| `md.comp.date-picker.docked.menu.list-item.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Menu list item label text font |
| `md.comp.date-picker.docked.menu-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Menu button label text line height |
| `md.comp.date-picker.docked.menu-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Menu button label text tracking |
| `md.comp.date-picker.docked.menu-button.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button label text color |
| `md.comp.date-picker.docked.menu-button.label-text.type` | - | TYPOGRAPHY | Menu button label text type style |
| `md.comp.date-picker.docked.menu-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Menu button label text font |
| `md.comp.date-picker.docked.menu-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Menu button label text weight |
| `md.comp.date-picker.docked.menu-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Menu button label text size |
| `md.comp.date-picker.docked.date.today.label-text.color` | `md.sys.color.primary` | COLOR | Date today label text color |
| `md.comp.date-picker.docked.date.selected.label-text.color` | `md.sys.color.on-primary` | COLOR | Date selected label text color |
| `md.comp.date-picker.docked.menu.list-item.label-text.type` | - | TYPOGRAPHY | Menu list item label text type style |
| `md.comp.date-picker.docked.menu.list-item.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Menu list item label text weight |
| `md.comp.date-picker.docked.menu.list-item.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Menu list item label text size |
| `md.comp.date-picker.docked.menu.list-item.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Menu list item label text line height |
| `md.comp.date-picker.docked.menu.list-item.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Menu list item label text tracking |
| `md.comp.date-picker.docked.menu.list-item.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item label text color |
| `md.comp.date-picker.docked.date.unselected.label-text.color` | `md.sys.color.on-surface` | COLOR | Date unselected label text color |
| `md.comp.date-picker.docked.date.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Date label text size |
| `md.comp.date-picker.docked.date.label-text.type` | - | TYPOGRAPHY | Date label text type style |
| `md.comp.date-picker.docked.date.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Date label text font |
| `md.comp.date-picker.docked.date.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Date label text weight |
| `md.comp.date-picker.docked.date.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Date label text line height |
| `md.comp.date-picker.docked.date.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Date label text tracking |
| `md.comp.date-picker.docked.date.unselected.outside-month.label-text.color` | `md.sys.color.on-surface` | COLOR | Date unselected outside month label text color |
| `md.comp.date-picker.docked.date.container.height` | 48dp | LENGTH | Date container height |
| `md.comp.date-picker.docked.menu.list-item.container.height` | 48dp | LENGTH | Menu list item container height |
| `md.comp.date-picker.docked.menu-button.container.height` | 40dp | LENGTH | Menu button container height |
| `md.comp.date-picker.docked.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Container surface tint layer color |
| `md.comp.date-picker.docked.menu.list-item.selected.leading-icon.size` | 24dp | LENGTH | Menu list item selected leading icon size |
| `md.comp.date-picker.docked.date.state-layer.height` | 40dp | LENGTH | Date state layer height |
| `md.comp.date-picker.docked.date.state-layer.width` | 40dp | LENGTH | Date state layer width |
| `md.comp.date-picker.docked.date.container.width` | 48dp | LENGTH | Date container width |
| `md.comp.date-picker.docked.header.height` | 64dp | LENGTH | Header height |
| `md.comp.date-picker.docked.container.height` | 456dp | LENGTH | Container height |
| `md.comp.date-picker.docked.container.width` | 360dp | LENGTH | Container width |
| `md.comp.date-picker.docked.menu.list-item.selected.pressed.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item selected pressed leading icon color |
| `md.comp.date-picker.docked.menu.list-item.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item pressed label text color |
| `md.comp.date-picker.docked.menu.list-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu list item pressed state layer opacity |
| `md.comp.date-picker.docked.menu.list-item.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu list item pressed state layer color |
| `md.comp.date-picker.docked.menu-button.pressed.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button pressed icon color |
| `md.comp.date-picker.docked.menu-button.pressed.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button pressed label text color |
| `md.comp.date-picker.docked.menu-button.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Menu button pressed state layer opacity |
| `md.comp.date-picker.docked.menu-button.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button pressed state layer color |
| `md.comp.date-picker.docked.date.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Date pressed state layer opacity |
| `md.comp.date-picker.docked.date.today.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Date today pressed state layer color |
| `md.comp.date-picker.docked.date.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Date selected pressed state layer color |
| `md.comp.date-picker.docked.date.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Date unselected pressed state layer color |
| `md.comp.date-picker.docked.menu.list-item.selected.focus.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item selected focus leading icon color |
| `md.comp.date-picker.docked.menu.list-item.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item focus label text color |
| `md.comp.date-picker.docked.menu.list-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu list item focus state layer opacity |
| `md.comp.date-picker.docked.menu.list-item.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu list item focus state layer color |
| `md.comp.date-picker.docked.menu-button.focus.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button focus icon color |
| `md.comp.date-picker.docked.menu-button.focus.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button focus label text color |
| `md.comp.date-picker.docked.menu-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Menu button focus state layer opacity |
| `md.comp.date-picker.docked.menu-button.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button focus state layer color |
| `md.comp.date-picker.docked.date.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Date focus state layer opacity |
| `md.comp.date-picker.docked.date.today.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Date today focus state layer color |
| `md.comp.date-picker.docked.date.selected.focus.state-layer.color` | `md.sys.color.on-primary` | COLOR | Date selected focus state layer color |
| `md.comp.date-picker.docked.date.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Date unselected focus state layer color |
| `md.comp.date-picker.docked.menu.list-item.selected.hover.leading-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu list item selected hover leading icon color |
| `md.comp.date-picker.docked.menu.list-item.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu list item hover label text color |
| `md.comp.date-picker.docked.menu.list-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu list item hover state layer opacity |
| `md.comp.date-picker.docked.menu.list-item.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Menu list item hover state layer color |
| `md.comp.date-picker.docked.menu-button.hover.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button hover icon color |
| `md.comp.date-picker.docked.menu-button.hover.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button hover label text color |
| `md.comp.date-picker.docked.menu-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Menu button hover state layer opacity |
| `md.comp.date-picker.docked.menu-button.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button hover state layer color |
| `md.comp.date-picker.docked.date.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Date hover state layer opacity |
| `md.comp.date-picker.docked.date.today.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Date today hover state layer color |
| `md.comp.date-picker.docked.date.selected.hover.state-layer.color` | `md.sys.color.on-primary` | COLOR | Date selected hover state layer color |
| `md.comp.date-picker.docked.date.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Date unselected hover state layer color |
| `md.comp.date-picker.docked.menu-button.disabled.icon.opacity` | - | OPACITY | Menu button disabled icon opacity |
| `md.comp.date-picker.docked.menu-button.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Menu button disabled icon color |
| `md.comp.date-picker.docked.menu-button.disabled.label-text.opacity` | - | OPACITY | Menu button disabled label text opacity |
| `md.comp.date-picker.docked.menu-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Menu button disabled label text color |
| `md.comp.date-picker.docked.menu.list-item.selected.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Menu list item selected leading icon color |
| `md.comp.date-picker.docked.menu.list-item.selected.container.color` | `md.sys.color.surface-variant` | COLOR | Menu list item selected container color |
| `md.comp.date-picker.docked.menu-button.icon.size` | 18dp | LENGTH | Menu button icon size |
| `md.comp.date-picker.docked.menu-button.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Menu button icon color |
| `md.comp.date-picker.docked.menu-button.container.shape` | `md.sys.shape.corner.full` | SHAPE | Menu button container shape |
| `md.comp.date-picker.docked.date.selected.container.color` | `md.sys.color.primary` | COLOR | Date selected container color |
| `md.comp.date-picker.docked.date.today.container.outline.width` | 1dp | LENGTH | Date today container outline width |
| `md.comp.date-picker.docked.date.today.container.outline.color` | `md.sys.color.primary` | COLOR | Date today container outline color |
| `md.comp.date-picker.docked.date.state-layer.shape` | `md.sys.shape.corner.full` | SHAPE | Date state layer shape |
| `md.comp.date-picker.docked.date.container.shape` | `md.sys.shape.corner.full` | SHAPE | Date container shape |
| `md.comp.date-picker.docked.weekdays.label-text.type` | - | TYPOGRAPHY | Weekdays label text type style |
| `md.comp.date-picker.docked.weekdays.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Weekdays label text font |
| `md.comp.date-picker.docked.weekdays.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Weekdays label text weight |
| `md.comp.date-picker.docked.weekdays.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Weekdays label text size |
| `md.comp.date-picker.docked.weekdays.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Weekdays label text line height |
| `md.comp.date-picker.docked.weekdays.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Weekdays label text tracking |
| `md.comp.date-picker.docked.weekdays.label-text.color` | `md.sys.color.on-surface` | COLOR | Weekdays label text color |
| `md.comp.date-picker.docked.container.shape` | `md.sys.shape.corner.large` | SHAPE | Container shape |
| `md.comp.date-picker.docked.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Container elevation |
| `md.comp.date-picker.docked.container.color` | `md.sys.color.surface-container-high` | COLOR | Container color |

#### Design Tokens: Date picker - Modal

*For modal calendar date pickers.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.date-picker.modal.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Container surface tint layer color |
| `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Range selection date in range hover state layer opacity |
| `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Range selection date in range focus state layer opacity |
| `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Range selection date in range pressed state layer opacity |
| `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.opcaity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Range selection date in range hover state layer opcaity |
| `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.opcaity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Range selection date in range focus state layer opcaity |
| `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.opcaity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Range selection date in range pressed state layer opcaity |
| `md.comp.date-picker.modal.range-selection.active-indicator.container.height` | 40dp | LENGTH | Range selection active indicator container height |
| `md.comp.date-picker.modal.year-selection.year.state-layer.height` | 36dp | LENGTH | Year selection year state layer height |
| `md.comp.date-picker.modal.year-selection.year.state-layer.width` | 72dp | LENGTH | Year selection year state layer width |
| `md.comp.date-picker.modal.year-selection.year.container.height` | 36dp | LENGTH | Year selection year container height |
| `md.comp.date-picker.modal.year-selection.year.container.width` | 72dp | LENGTH | Year selection year container width |
| `md.comp.date-picker.modal.date.state-layer.height` | 40dp | LENGTH | Date state layer height |
| `md.comp.date-picker.modal.date.state-layer.width` | 40dp | LENGTH | Date state layer width |
| `md.comp.date-picker.modal.date.container.height` | 40dp | LENGTH | Date container height |
| `md.comp.date-picker.modal.date.container.width` | 40dp | LENGTH | Date container width |
| `md.comp.date-picker.modal.range-selection.header.container.height` | 128dp | LENGTH | Range selection header container height |
| `md.comp.date-picker.modal.header.container.height` | 120dp | LENGTH | Header container height |
| `md.comp.date-picker.modal.header.container.width` | 360dp | LENGTH | Header container width |
| `md.comp.date-picker.modal.container.height` | 524dp | LENGTH | Container height |
| `md.comp.date-picker.modal.container.width` | 360dp | LENGTH | Container width |
| `md.comp.date-picker.modal.year-selection.year.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Year selection year pressed state layer opacity |
| `md.comp.date-picker.modal.year-selection.year.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Year selection year selected pressed state layer color |
| `md.comp.date-picker.modal.year-selection.year.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Year selection year unselected pressed state layer color |
| `md.comp.date-picker.modal.range-selection.date.in-range.pressed.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Range selection date in range pressed state layer color |
| `md.comp.date-picker.modal.date.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Date pressed state layer opacity |
| `md.comp.date-picker.modal.date.today.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Date today pressed state layer color |
| `md.comp.date-picker.modal.date.selected.pressed.state-layer.color` | `md.sys.color.on-primary` | COLOR | Date selected pressed state layer color |
| `md.comp.date-picker.modal.date.unselected.pressed.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Date unselected pressed state layer color |
| `md.comp.date-picker.modal.year-selection.year.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Year selection year focus state layer opacity |
| `md.comp.date-picker.modal.year-selection.year.selected.focus.state-layer.color` | `md.sys.color.on-primary` | COLOR | Year selection year selected focus state layer color |
| `md.comp.date-picker.modal.year-selection.year.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Year selection year unselected focus state layer color |
| `md.comp.date-picker.modal.range-selection.date.in-range.focus.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Range selection date in range focus state layer color |
| `md.comp.date-picker.modal.date.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Date focus state layer opacity |
| `md.comp.date-picker.modal.date.today.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Date today focus state layer color |
| `md.comp.date-picker.modal.date.selected.focus.state-layer.color` | `md.sys.color.on-primary` | COLOR | Date selected focus state layer color |
| `md.comp.date-picker.modal.date.unselected.focus.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Date unselected focus state layer color |
| `md.comp.date-picker.modal.year-selection.year.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Year selection year hover state layer opacity |
| `md.comp.date-picker.modal.year-selection.year.selected.hover.state-layer.color` | `md.sys.color.on-primary` | COLOR | Year selection year selected hover state layer color |
| `md.comp.date-picker.modal.year-selection.year.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Year selection year unselected hover state layer color |
| `md.comp.date-picker.modal.range-selection.date.in-range.hover.state-layer.color` | `md.sys.color.on-primary-container` | COLOR | Range selection date in range hover state layer color |
| `md.comp.date-picker.modal.date.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Date hover state layer opacity |
| `md.comp.date-picker.modal.date.today.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Date today hover state layer color |
| `md.comp.date-picker.modal.date.selected.hover.state-layer.color` | `md.sys.color.on-primary` | COLOR | Date selected hover state layer color |
| `md.comp.date-picker.modal.date.unselected.hover.state-layer.color` | `md.sys.color.on-surface-variant` | COLOR | Date unselected hover state layer color |
| `md.comp.date-picker.modal.year-selection.year.state-layer.shape` | `md.sys.shape.corner.full` | SHAPE | Year selection year state layer shape |
| `md.comp.date-picker.modal.year-selection.year.unselected.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Year selection year unselected label text color |
| `md.comp.date-picker.modal.year-selection.year.selected.label-text.color` | `md.sys.color.on-primary` | COLOR | Year selection year selected label text color |
| `md.comp.date-picker.modal.year-selection.year.selected.container.color` | `md.sys.color.primary` | COLOR | Year selection year selected container color |
| `md.comp.date-picker.modal.year-selection.year.label-text.type` | - | TYPOGRAPHY | Year selection year label text type style |
| `md.comp.date-picker.modal.year-selection.year.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Year selection year label text font |
| `md.comp.date-picker.modal.year-selection.year.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Year selection year label text weight |
| `md.comp.date-picker.modal.year-selection.year.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Year selection year label text size |
| `md.comp.date-picker.modal.year-selection.year.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Year selection year label text line height |
| `md.comp.date-picker.modal.year-selection.year.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Year selection year label text tracking |
| `md.comp.date-picker.modal.range-selection.month.subhead.type` | - | TYPOGRAPHY | Range selection month subhead type style |
| `md.comp.date-picker.modal.range-selection.month.subhead.font` | `md.sys.typescale.title-small.font` | FONT_NAMES | Range selection month subhead font |
| `md.comp.date-picker.modal.range-selection.month.subhead.weight` | `md.sys.typescale.title-small.weight` | FONT_WEIGHT | Range selection month subhead weight |
| `md.comp.date-picker.modal.range-selection.month.subhead.size` | `md.sys.typescale.title-small.size` | FONT_SIZE | Range selection month subhead size |
| `md.comp.date-picker.modal.range-selection.month.subhead.line-height` | `md.sys.typescale.title-small.line-height` | LINE_HEIGHT | Range selection month subhead line height |
| `md.comp.date-picker.modal.range-selection.month.subhead.tracking` | `md.sys.typescale.title-small.tracking` | FONT_TRACKING | Range selection month subhead tracking |
| `md.comp.date-picker.modal.range-selection.month.subhead.color` | `md.sys.color.on-surface-variant` | COLOR | Range selection month subhead color |
| `md.comp.date-picker.modal.range-selection.active-indicator.container.shape` | `md.sys.shape.corner.full` | SHAPE | Range selection active indicator container shape |
| `md.comp.date-picker.modal.range-selection.active-indicator.container.color` | `md.sys.color.secondary-container` | COLOR | Range selection active indicator container color |
| `md.comp.date-picker.modal.range-selection.date.in-range.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Range selection date in range label text color |
| `md.comp.date-picker.modal.date.selected.container.color` | `md.sys.color.primary` | COLOR | Date selected container color |
| `md.comp.date-picker.modal.date.selected.label-text.color` | `md.sys.color.on-primary` | COLOR | Date selected label text color |
| `md.comp.date-picker.modal.date.today.container.outline.width` | 1dp | LENGTH | Date today container outline width |
| `md.comp.date-picker.modal.date.today.container.outline.color` | `md.sys.color.primary` | COLOR | Date today container outline color |
| `md.comp.date-picker.modal.date.today.label-text.color` | `md.sys.color.primary` | COLOR | Date today label text color |
| `md.comp.date-picker.modal.date.unselected.label-text.color` | `md.sys.color.on-surface` | COLOR | Date unselected label text color |
| `md.comp.date-picker.modal.date.label-text.type` | - | TYPOGRAPHY | Date label text type style |
| `md.comp.date-picker.modal.date.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Date label text font |
| `md.comp.date-picker.modal.date.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Date label text weight |
| `md.comp.date-picker.modal.date.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Date label text size |
| `md.comp.date-picker.modal.date.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Date label text line height |
| `md.comp.date-picker.modal.date.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Date label text tracking |
| `md.comp.date-picker.modal.date.state-layer.shape` | `md.sys.shape.corner.full` | SHAPE | Date state layer shape |
| `md.comp.date-picker.modal.date.container.shape` | `md.sys.shape.corner.full` | SHAPE | Date container shape |
| `md.comp.date-picker.modal.weekdays.label-text.type` | - | TYPOGRAPHY | Weekdays label text type style |
| `md.comp.date-picker.modal.weekdays.label-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Weekdays label text font |
| `md.comp.date-picker.modal.weekdays.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Weekdays label text weight |
| `md.comp.date-picker.modal.weekdays.label-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Weekdays label text size |
| `md.comp.date-picker.modal.weekdays.label-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Weekdays label text line height |
| `md.comp.date-picker.modal.weekdays.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Weekdays label text tracking |
| `md.comp.date-picker.modal.weekdays.label-text.color` | `md.sys.color.on-surface` | COLOR | Weekdays label text color |
| `md.comp.date-picker.modal.range-selection.header.headline.type` | - | TYPOGRAPHY | Range selection header headline type style |
| `md.comp.date-picker.modal.range-selection.header.headline.font` | `md.sys.typescale.title-large.font` | FONT_NAMES | Range selection header headline font |
| `md.comp.date-picker.modal.range-selection.header.headline.weight` | `md.sys.typescale.title-large.weight` | FONT_WEIGHT | Range selection header headline weight |
| `md.comp.date-picker.modal.range-selection.header.headline.size` | `md.sys.typescale.title-large.size` | FONT_SIZE | Range selection header headline size |
| `md.comp.date-picker.modal.range-selection.header.headline.line-height` | `md.sys.typescale.title-large.line-height` | LINE_HEIGHT | Range selection header headline line height |
| `md.comp.date-picker.modal.range-selection.header.headline.tracking` | `md.sys.typescale.title-large.tracking` | FONT_TRACKING | Range selection header headline tracking |
| `md.comp.date-picker.modal.header.headline.type` | - | TYPOGRAPHY | Header headline type style |
| `md.comp.date-picker.modal.header.headline.font` | `md.sys.typescale.headline-large.font` | FONT_NAMES | Header headline font |
| `md.comp.date-picker.modal.header.headline.weight` | `md.sys.typescale.headline-large.weight` | FONT_WEIGHT | Header headline weight |
| `md.comp.date-picker.modal.header.headline.size` | `md.sys.typescale.headline-large.size` | FONT_SIZE | Header headline size |
| `md.comp.date-picker.modal.header.headline.line-height` | `md.sys.typescale.headline-large.line-height` | LINE_HEIGHT | Header headline line height |
| `md.comp.date-picker.modal.header.headline.tracking` | `md.sys.typescale.headline-large.tracking` | FONT_TRACKING | Header headline tracking |
| `md.comp.date-picker.modal.header.headline.color` | `md.sys.color.on-surface-variant` | COLOR | Header headline color |
| `md.comp.date-picker.modal.header.supporting-text.type` | - | TYPOGRAPHY | Header supporting text type style |
| `md.comp.date-picker.modal.header.supporting-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Header supporting text font |
| `md.comp.date-picker.modal.header.supporting-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Header supporting text weight |
| `md.comp.date-picker.modal.header.supporting-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Header supporting text size |
| `md.comp.date-picker.modal.header.supporting-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Header supporting text line height |
| `md.comp.date-picker.modal.header.supporting-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Header supporting text tracking |
| `md.comp.date-picker.modal.header.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Header supporting text color |
| `md.comp.date-picker.modal.range-selection.container.shape` | `md.sys.shape.corner.none` | SHAPE | Range selection container shape |
| `md.comp.date-picker.modal.range-selection.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Range selection container elevation |
| `md.comp.date-picker.modal.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Container shape |
| `md.comp.date-picker.modal.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Container elevation |
| `md.comp.date-picker.modal.container.color` | `md.sys.color.surface-container-high` | COLOR | Container color |

#### Design Tokens: Date picker - Modal input

*For modal input date pickers.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.date-input.modal.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Container surface tint layer color |
| `md.comp.date-input.modal.header.container.height` | 120dp | LENGTH | Header container height |
| `md.comp.date-input.modal.header.container.width` | 328dp | LENGTH | Header container width |
| `md.comp.date-input.modal.container.height` | 512dp | LENGTH | Container height |
| `md.comp.date-input.modal.container.width` | 328dp | LENGTH | Container width |
| `md.comp.date-input.modal.header.headline.type` | - | TYPOGRAPHY | Header headline type style |
| `md.comp.date-input.modal.header.headline.font` | `md.sys.typescale.headline-large.font` | FONT_NAMES | Header headline font |
| `md.comp.date-input.modal.header.headline.weight` | `md.sys.typescale.headline-large.weight` | FONT_WEIGHT | Header headline weight |
| `md.comp.date-input.modal.header.headline.size` | `md.sys.typescale.headline-large.size` | FONT_SIZE | Header headline size |
| `md.comp.date-input.modal.header.headline.line-height` | `md.sys.typescale.headline-large.line-height` | LINE_HEIGHT | Header headline line height |
| `md.comp.date-input.modal.header.headline.tracking` | `md.sys.typescale.headline-large.tracking` | FONT_TRACKING | Header headline tracking |
| `md.comp.date-input.modal.header.headline.color` | `md.sys.color.on-surface-variant` | COLOR | Header headline color |
| `md.comp.date-input.modal.header.supporting-text.type` | - | TYPOGRAPHY | Header supporting text type style |
| `md.comp.date-input.modal.header.supporting-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Header supporting text font |
| `md.comp.date-input.modal.header.supporting-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Header supporting text weight |
| `md.comp.date-input.modal.header.supporting-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Header supporting text size |
| `md.comp.date-input.modal.header.supporting-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Header supporting text line height |
| `md.comp.date-input.modal.header.supporting-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Header supporting text tracking |
| `md.comp.date-input.modal.header.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Header supporting text color |
| `md.comp.date-input.modal.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Container shape |
| `md.comp.date-input.modal.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Container elevation |
| `md.comp.date-input.modal.container.color` | `md.sys.color.surface-container-high` | COLOR | Container color |


## Docked date picker

![Diagram indicating the 11 elements of a docked date picker.](https://lh3.googleusercontent.com/tETsEHo8OLEiIv-Aaw1wjb742B5Thac-7QZTp95nvITcOKMWXrSKJTl0gTnbAwyOiSl9EvWo8aMtz52MJtC8vm1VZx6EaOgPVWoP7AaDkvjs=s2048)

*Caption / Legend:*
1. Outlined text field
2. Menu button: Month selection
3. Menu button: Year selection
4. Icon button
5. Weekdays label text
6. Unselected date
7. Today’s date
8. Outside month date
9. Text buttons
10. Selected date
11. Container

![Diagram indicating 8 elements of a docked date picker with an open dropdown menu showing the months May to November.](https://lh3.googleusercontent.com/MKNjpAopgtytl_kFpz85rnKyX4WdXng4gAvBAcQPMcDKWYzvwPrFzXEaKJoof31oj0KDhcCZLG0nBVwAlvpPlXrUf3UljRtKNCAjO4sC2K4w=s2048)

*Caption / Legend:*
1. Outlined text field
2. Menu button: Month selection (pressed)
3. Menu button: Year selection (disabled)
4. Header
5. Menu
6. Selected list item
7. Unselected menu list item
8. Container

### Docked date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![11 color roles of a docked date picker in light and dark themes.](https://lh3.googleusercontent.com/t5niu5LsIjOjw0wey4JXXcQ9J0PQuCxTW7cXasgVguRXLf1Sjuuv7VDs81XvQvD9GfrYj9CXwjPpij_rLi-ylLRJt6BIiv-Io_jGktOkZzY=s2048)

*Caption / Legend:*
Docked date picker color roles used for light and dark themes:

1. Primary
2. On surface variant
3. On surface variant
4. On surface
5. On surface
6. Primary
7. On surface variant
8. Primary
9. Surface container high
10. Primary
11. On primary

![7 color roles of a docked date picker menu in light and dark themes.](https://lh3.googleusercontent.com/8dm3XqLpo47xIT6RMfiGCFeylnMi_-bxLabwkeigMuXB6e17c35Pf_uhK7ykl7vKRDm5NzrY5V_rracq3Uz8KYoMRrNKA_GejWGHbtR0jRM=s2048)

*Caption / Legend:*
Docked date picker menu color roles used for light and dark themes:

1. Primary
2. On surface variant
3. On surface
4. Outline variant
5. Surface container high
6. Surface variant
7. On surface

### Docked date picker measurements

![Diagram of padding, size, and layout measurements.](https://lh3.googleusercontent.com/PTixdykCflNGubuMrHJpl5MMA4Gg3W9U8LDFn2SjrMoswSQ2F_uJAVkm8NtkjoxRvJbQsyUev55lyKIPDhTcgFQlGsMlruJKGYNfdOH9Lu0e1Q=s2048)

*Caption / Legend:*
Docked date picker padding and size measurements

![Diagram of padding, size, and layout measurements.](https://lh3.googleusercontent.com/MTNVLCkRAS7bSuaXx8wcn3u_6dmltsszWRSC3Qo7cnc_G2Lk1K_QkeULzwaGWNidXlO12HIxRvKnYspR2Z5ae9WC-V87xrRK6I9JqpwjnZOd=s2048)

*Caption / Legend:*
Docked date picker month menu padding and size measurements

### Docked date picker configurations

![3 configurations of docked date picker.](https://lh3.googleusercontent.com/LpdT8F1acz-J6VISmCSL1-BMFHSFrOP0Ey9WkdUVp0xjdG_8xA4mWV3fz2aSuws2Sjq5YllidbsViN5M2T3XsG2mmOXzJAMlEwySnUG-GYY=s2048)

*Caption / Legend:*
1. Day selection
2. Month selection
3. Year selection

## Modal date picker

![Diagram indicating the 13 elements of a modal date picker in the day selection view.](https://lh3.googleusercontent.com/lTTHd1QoFOtnUn9kre2Ifx3m8tZlBEcNzwIbibxsbeIo3srW5t25mBOewAYkO5fFIFLzW4JA0uiDk-0srfUGaXKuUhnyTB29Xvx3prdUIZE=s2048)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Header
4. Container
5. Icon button
6. Icon buttons
7. Weekdays
8. Today’s date
9. Unselected date
10. Text buttons
11. Selected date
12. Menu button
13. Divider

![10 elements of a modal date picker menu.](https://lh3.googleusercontent.com/MEsCpopd1hOL195tikhDp1oekUbo_Dgjj3C8uO-1DuhPneuxpqu6Rntq6FMue_xJj6Bg0cvUFGBr3nSvdonOPiJ2nLFHghJ9rUc_uLz--W3p=s2048)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Header
4. Container
5. Icon button
6. Unselected year
7. Selected year
8. Text buttons
9. Divider
10. Menu button

![Diagram indicating the 15 elements of a modal date picker when selecting a range of dates.](https://lh3.googleusercontent.com/VAgYqCiSgxR776ucqoudANiddYBjkUwzrtQPxdVWC3vLAjapPUH0OjC_aHhHU1gX-a7jAtlSdyfL6nZ8zZTRi9UggwYWdkEnMXOdZfA-5Fk=s2048)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Icon button
4. Header
5. Text button
6. Icon button
7. Weekdays label text
8. Container
9. Today’s date
10. Unselected date
11. In-range active indicator
12. In-range date
13. Month subhead
14. Selected date
15. Divider

### Modal date picker color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![12 color roles of a modal date picker day selection view.](https://lh3.googleusercontent.com/KtGAhuY4gAAooTlzNro5r28R-JqaNn-GIuLF784YUnV4r9xuN73HBLIGoK2ngiHQTkEBH3-Pv5i_KhcGI86MpUTOFXtNXKl44_CULQTkD_Acjw=s2048)

*Caption / Legend:*
Modal date picker color roles used for light and dark themes in a day selection menu:

1. On surface
2. On surface variant
3. Surface container high
4. On surface variant
5. On surface variant
6. On surface
7. Primary
8. On surface
9. Primary
10. Primary
11. On surface variant
12. Outline variant

![Diagram of 9 color roles of a modal date picker year selection view.](https://lh3.googleusercontent.com/z3NPv_bl1zhqrcVdxulXJmeLSWmbTfWTkIMYyQCoeXa4HbUQUuV3mm1rtgBDFRBxgZ__Q-YBLJ__9ffRDqk8d2anxULFonL4YcxS2u7fI12j=s2048)

*Caption / Legend:*
Modal date picker color roles used for light and dark themes in a year selection menu:

1. On surface
2. On surface variant
3. Surface container high
4. On surface variant
5. On surface variant
6. Primary
7. Primary
8. Outline variant
9. On surface variant

![Diagram of 14 color roles of a modal date picker when selecting a range of dates.](https://lh3.googleusercontent.com/KEpszqYIa1lMPVecD3eDqQDiYPTnl02lIWnD6vRP4EuLg1B1bCy9pvIWH567lYGjxPeOeC_Hdvm_CxRF8HXfi6WXlnrvKp3puWzqZxeq1g=s2048)

*Caption / Legend:*
Modal date picker range selector color roles used for light and dark themes:

1. On surface
2. On surface variant
3. On surface variant
4. Surface container high
5. Primary
6. On surface variant
7. On surface
8. Primary
9. On surface
10. Secondary container
11. On secondary container
12. Outline variant
13. On surface variant
14. Primary

### Modal date picker measurements

![Diagram of size and padding measurements in day selection view.](https://lh3.googleusercontent.com/Qe-iPyRhBKhCxHScEGB4S8BssYvRdETO_pEbYIPRrGLewt2ObrK4fEJXcRN7DnsWZeAWSlL0J1fXPjVuBSfxUt3ZgeFKXuRIojAVlEClcuw=s2048)

*Caption / Legend:*
Modal date picker padding and size measurements

![Diagram of size and padding measurements in year selection view.](https://lh3.googleusercontent.com/LkaUY6KA1A3o2AsE0U9A8Yka862hS-QLjbWWC7etGxAi8UU55KnFHwor3AeHy814pTq_IJgpND4k_UN-UPlc8cRhALLZIh6tP88xh6Lneb0s=s2048)

*Caption / Legend:*
Modal date picker year selector padding and size measurements

![Diagram of size and padding measurements when selecting a range of dates.](https://lh3.googleusercontent.com/-H_XlEpqZPu5-zavBZl448ZPXeg3RwDWwmtidrkSwPBcUKrXk0b_4uZrjvsdt-chOrMLLquYznzK0jWn8iZ_L4zJ3lR1zTkBIXwJrv3M283H=s2048)

*Caption / Legend:*
Modal date picker date range selector padding and size measurements

### Modal date picker configurations

![3 configurations of a modal date picker shown in dark mode.](https://lh3.googleusercontent.com/X5qMWXDD7RFiXL6-gzkVulqL9pNGDfUX0efsHAsahVvpsZYW9bLkl-4UyWkXho6YWmAxoVSpz3dhhve7Rw_bFdsVFtCwp29xfoGlKrZlanIy=s2048)

*Caption / Legend:*
1. Single date selection
2. Date range selection
3. Year selection

## Modal date input

![Diagram indicating the 8 elements of a modal date input.](https://lh3.googleusercontent.com/y_Bb20CqP7MSVjr8eJmNwxui08VclLGtULHxuZijAxVbdPmwcdepZbOoM1dKSK0YSXbOaKhGQqangV1Ol662UAR5TsDqKH0zzYB2hoLmkktz=s2048)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Header
4. Container
5. Icon button
6. Outlined text field
7. Text buttons
8. Divider

### Modal date input color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![Diagram indicating the 7 color roles of a modal date input.](https://lh3.googleusercontent.com/iefNrcoiuJ0ugSFq7Sr-IDU2JcAbmJPJqObTZJRuoEd3MIKOdAZZuy2PBx-hnXJEYrmXuN-BwMsIVLtdS2gzzaZrN9L_kfy-PyUDrocRjsNoYw=s2048)

*Caption / Legend:*
Modal date input color roles used for light and dark themes:

1. On surface
2. On surface variant
3. Surface container high
4. On surface variant
5. Primary
6. Primary
7. Outline variant

### Modal date input measurements

![Diagram of the padding and size measurements of a modal date input.](https://lh3.googleusercontent.com/M_rfbkLJHuLrKAZGQQmuEVaZMyte_u_3ybmULmG8aiNvTnIcB9OmLtKv9dswOeVNC0NML5TtfQVSUop_Q9vz5pLqrwp9Xchth7vF4cumQCuN=s2048)

*Caption / Legend:*
Modal date input padding and size measurements

### Modal date input configurations

![2 configurations of modal date input.](https://lh3.googleusercontent.com/dL3RrXAFk0yAelVnpdVtEswLMzDgTjbDjVW1Ws00MppaklNXca5Dwx0PDdWkU6pc7SYy9I0xUXQ1ttwm38Oh7d5XCSTr6Kbph0EqGtMMgKtWbA=s2036)

*Caption / Legend:*
1. Single date input
2. Date range input

## Element states

![Diagram of 5 various states for date and year elements within date pickers.](https://lh3.googleusercontent.com/6XspP-OQE7aCNEQ93nEte0mKmgkyvY2j9jfFYbQHtiUK-tfwKvK1ncuufXe5RMFHSrGkqZSvzbPTExmW-sakoDgzKxiN0ebx-ZlcVaS_afDe=s2048)

*Caption / Legend:*
States for date and year selection:

1. Default (enabled)
2. Disabled
3. Hovered
4. Focused
5. Pressed (ripple)

## Guidelines

![A date picker opens in a form UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5o0x3j-01.png?alt=media)

*Caption / Legend:*
Docked date picker on desktop

## Usage

Date pickers let people select a date or range of dates. They should be suitable for the context in which they appear.

Date pickers can be embedded into:

1. Dialogs on compact [breakpoints](/m3/pages/breakpoints) like mobile
2. Text field drop-downs on medium and expanded breakpoints like tablet and desktop

![2 date picker variations: a dialog on mobile and a dropdown within a text field on desktop.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sha07-02.png?alt=media)

*Caption / Legend:*
1. Date picker dialog on mobile
2. Date picker text field dropdown on desktop

There are three variants of date pickers:

1. Docked date picker
2. Modal date picker
3. Modal date input

![A docked date picker component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5si8zx-03.png?alt=media)

*Caption / Legend:*
1. Docked date picker

![A modal date picker component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sj3v5-04.png?alt=media)

*Caption / Legend:*
2. Modal date picker

![A modal date input component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme1yy2eb-05.png?alt=media)

*Caption / Legend:*
3. Modal date input

## Anatomy

### Docked date picker

![7 elements of a docked date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5skthv-06.png?alt=media)

*Caption / Legend:*
1. Text field
2. Menu button
3. Icon button
4. Label text
5. Menu
6. Text buttons
7. Container

![3 elements of a docked date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5slanf-07.png?alt=media)

*Caption / Legend:*
1. Text field 
2. Menu button 
3. Menu

### Modal date picker

![12 elements of a modal date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sma00-08.png?alt=media)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Container
4. Icon button
5. Previous/next month buttons
6. Day of week labels
7. Today’s date
8. Unselected date
9. Text buttons
10. Selected date
11. Menu button
12. Divider

![9 elements of a modal date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5smpl6-09.png?alt=media)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Container
4. Icon button
5. Unselected year
6. Selected year
7. Text buttons
8. Divider
9. Menu button

### Modal date input

![7 elements of a modal date input.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sng56-10.png?alt=media)

*Caption / Legend:*
1. Headline 
2. Supporting text
3. Container
4. Icon button
5. Date input
6. Text buttons
7. Divider

### Full-screen date picker

![14 elements of a full-screen date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5srxxg-11.png?alt=media)

*Caption / Legend:*
1. Headline
2. Supporting text
3. Icon button
4. Container
5. Text button
6. Icon button
7. Divider
8. Day of week labels
9. Today’s date 
10. Selected date range 
11. Unselected date 
12. Text buttons
13. Selected date range start date 
14. Month label

## Docked date picker

### Usage

Docked date pickers allow the selection of a specific date and year. The docked date picker displays a date input field by default, and a dropdown calendar appears when the user taps on the input field. Either form of date entry can be interacted with.

Docked date pickers are ideal for navigating dates in both the near future or past and the distant future or past, as they provide multiple ways to select dates.

![Docked date picker on a desktop screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhhvs4s-12.png?alt=media)

*Caption / Legend:*
Docked date picker on desktop

### Behavior

Dates can be added by using a keyboard or by navigating the calendar UI; both options are immediately available when the docked date picker is accessed.

![Docked date picker with a text field and the UI picker showing the selected date. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5swv36-13.png?alt=media)

*Caption / Legend:*
Docked date picker

### Month selection

Month selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

![Docked date picker with a list of months May through September. August is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5sxs60-16.png?alt=media)

*Caption / Legend:*
Docked date picker month selection

### Year selection

Year selection can be navigated with the corresponding back and next arrows or by tapping the dropdown menu.

![Docked date picker with a list of years 2025 to 2029. 2025 is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t0t93-17.png?alt=media)

*Caption / Legend:*
Docked date picker year selection

## Modal date picker

### Behavior

Modal date pickers navigate across dates in several ways:

- To navigate across months, swipe horizontally
- To navigate across years, scroll vertically
- To access the year picker, tap the year

Don’t use a modal date picker to prompt for dates in the distant past or future, such as a date of birth. In these cases, use a modal input picker or a docked date picker instead.

### Date range selection

Date range selection provides a start and end date. Common use cases include:

- Booking a flight
- Reserving a hotel

Modal date pickers navigate across date ranges in several ways:

- To select a range of dates, tap the start and end dates on the calendar
- To navigate across months, scroll vertically

## Modal date input

### Usage

Modal date inputs allow the manual entry of dates using the numbers on a keyboard. People can input a date or a range of dates in a dialog.

![A modal date input component.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t2vbx-22.png?alt=media)

*Caption / Legend:*
Modal date with manual input

![A modal date input component showing a day in 1979, which would be difficult to choose using UI.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t44vn-23-do.png?alt=media)

*Caption / Legend:*
For dates that don’t require a calendar view, the modal date input can be the default view

![A modal date input with hint text for entering the date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t675k-24-do.png?alt=media)

*Caption / Legend:*
Alternatively, a text field with appropriate hint text can prompt for dates, such as in a form

### Behavior

You can swap between the modal date picker and modal date input using the edit or calendar icon.

### Compact breakpoint

On compact [breakpoints](/m3/pages/breakpoints/overview), such as mobile, a full-screen modal date picker is recommended to increase readability and touch target size. It can cover the entire screen.

![A full-screen view of modal date picker on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t84q0-27.png?alt=media)

*Caption / Legend:*
A full-screen modal date picker on mobile

### Medium and expanded breakpoints

The docked date picker works best for medium and expanded breakpoints. It displays a date input field by default, and a dropdown calendar appears when a person taps on the input field. A person can interact with either form of date entry.

Docked date pickers are ideal for navigating dates in both the near future or past, and in the distant future or past, as they provide multiple ways to select dates.

![A docked date picker displaying a full calendar view on a large screen device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5t9e1o-28.png?alt=media)

*Caption / Legend:*
A docked date picker with a full calendar view is best used on larger devices

### Selection

Selection is indicated through color, drawing visual attention. In date ranges, start and end dates are selected, while dates in-between appear connected with a subtle highlight.

### Appearing and disappearing

Like other kinds of dialogs, modal date pickers use an enter and exit transition pattern to appear on the screen.

To exit a date picker, the input can either be confirmed (**OK**) or dismissed (**Cancel**). Interacting outside of the dialog will also dismiss the time picker. Unless one of these actions is taken, a time picker will continue to retain focus. Mobile full-screen pickers also have an additional close affordance (x) icon button and **Save** confirmation.

Docked date pickers appear just below the input field.

### Responsive layout

The sizing of the docked and modal date picker components don’t scale responsively to different breakpoints.

![Docked date picker enlarged on a large screen responsively.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tb2d5-32.png?alt=media)

*Caption / Legend:*
Don’t scale the date picker responsively to a larger size

## Accessibility

## Use cases

People should be able to:

- Enter dates manually by inputting text, without using the picker
- Use multiple input methods, making it accessible to those using assistive technology

On the docked date picker, the text field can be used for input.
On the modal date picker, the date input option should be available using the edit icon.

## Interaction & style

The edit icon indicates the ability to switch to the modal date input.

Interactive targets for all elements meet Material's 48x48dp minimum touch target requirement. Increasing density would negatively impact accessibility by limiting tappable/clickable targets.

![Date picker with the edit icon focused.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tcq2g-01.png?alt=media)

*Caption / Legend:*
The edit icon indicates the ability to switch to the modal date input

![Touch target used to select September 17 to 23 on a date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tdrn3-02.png?alt=media)

*Caption / Legend:*
Touch targets are 48x48dp

## Date entry methods

The date entry component offers two ways to enter a date:

- Direct text entry into a text field
- Through the date picker

The calendar icon is the exclusive entry point for the date picker.

This improves efficiency for a screen reader and other keyboard users, as it makes interaction with the date picker optional and reduces the amount of key presses required to input a date.

Each input is a separate tab stop, which improves discoverability of the control.

![Text input field next to a date picker icon provides a choice of how to enter the date.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhl9jct-3.png?alt=media)

*Caption / Legend:*
Entering a date either through direct text entry or the date picker

## Accessible date input

Automatically format the date after the user hits “Enter“ or navigates out of the text field. Don't automatically format the date by adding slashes or other special characters while the user is typing (also known as input masks). This can cause confusion for people using screen readers because it changes what they typed.

To reduce errors, accept a range of formats including dashes, spaces, slashes, dots, and 0 to the left of a single digit month/day. This is especially helpful for assistive technology users who might be more prone to errors when interacting with complex inputs.

![Numeric entry 08172323 automatically formatted to 08/17/2023.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tjcxl-04.png?alt=media)

*Caption / Legend:*
The text field's logic can adapt to the user's actual input format, applying the correct formatting after the user has completed their text entry

## Optional **Clear** button

If it's not needed for your use case, remove the **Clear** button from the screen to reduce the number of tab stops for keyboard users.

![Optional clear button on lower left corner of a date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tl1kf-05.png?alt=media)

*Caption / Legend:*
Remove non-critical actions to reduce the number of tab stops for keyboard users

## Affordance for keyboard shortcuts

Ensure keyboard shortcuts are readily available for keyboard and screen reader users by providing the shortcut key in the tooltip. It should be included in the hint description to be read out by the screen reader.

As shown here, the previous year button is interactive and can therefore be focused via the keyboard. Upon focus, the tooltip explains the behavior of the button and shows the shortcut key.

![Shift + Page up is the keyboard shortcut to go to the previous year on a date picker.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tmhkf-06.png?alt=media)

*Caption / Legend:*
Keyboard tooltip example for date picker

## Truncated labels & tooltips

Truncating labels isn't ideal, but tooltips allow the full text to be shown on hover or keyboard focus.

Days of the week are not interactive and are therefore not focusable via keyboard, yet the tooltip is available on hover. The date picker relies on the conventionality of these abbreviations for some assistive technology users.

![A pointer hover over the “T” day on a date picker produces the tooltip “Tuesday.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tnt2t-07.png?alt=media)

*Caption / Legend:*
Days of the week are not navigable via keyboard, so the tooltip is shown only on pointer hover

## Color contrast between dates

Dates should have contrast of at least 4.5:1 between the link text colors and the background.

![A date picker’s label text passes the color contrast minimum of 4.5:1.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tp1fs-08.png?alt=media)

*Caption / Legend:*
Dates pass the 4.5:1 contrast minimum

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| Enter/return | Enter/return |
| Enter/return | Closes the calendar and saves the selected date |
| Page up/down | Move to the same date on next/previous month |
| Home/End | Move to the first day of the month |
| Shift + Page up/down | Moves to the same date in the next/previous year |
| Shift + M | Moves to the month list dropdown |
| Shift + Y | Moves to the year list dropdown |

## Labeling elements

The text field's accessibility label should clearly state the purpose of the input (for example, event date or reservation date) and should match the placeholder text when the field is empty.

The helper text (below the text field) should specify the date format (for example, MM/DD/YYYY or YYYY/MM/DD) and act as a description for the text field. The default helper text is "MM/DD/YYYY," but this can be customized.

![Text field accessibility labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tqs6i-09.png?alt=media)

*Caption / Legend:*
The accessibility label clearly states the kind of input as an event date

| **Element** | **A11y label** | **Role** |
| --- | --- | --- |
| Previous / next month and year | “{label}” | Button |
| Month and year dropdowns | “{label}” | Button |
| Days of the week | Column header |  |
| Month grid | Grid |  |

## Screen reader verbalizations

To support screen reader users, labels are used to enumerate the complete date. This allows screen reader users to hear the full context of "Monday, August 17” instead of just part of the date.

![Current date label providing day, month, and year for screen reader accessibility.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd5tw17z-10.png?alt=media)

*Caption / Legend:*
Screen readers will state the full day, month, date, and year instead of just the number 17
