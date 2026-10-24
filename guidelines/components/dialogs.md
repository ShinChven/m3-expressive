# Dialogs

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/dialogs](https://m3.material.io/components/dialogs)
> Last Updated: 2026-07-28T07:11:33.307Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use dialogs to make sure users act on information
- Two variants: basic and full-screen
- Should be dedicated to completing a single task
- Can also display information relevant to the task
- Commonly used to confirm high-risk actions like deleting progress

![Basic and full-screen dialog.](https://lh3.googleusercontent.com/6kWyLPu-M7uuqJv2DLtnQd6MuRy2S5Pu5MzM-Q54y9MiOOFlX-2CLU9r1lATTgQLiUR7hUB2pBSVzT5qyoe9A3T1TWQ-3WOG9V50IM33Jkt3fg=s2048)

*Caption / Legend:*
1. Basic dialog
2. Full-screen dialog

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Greater padding to account for the increased corner-radius and title size
- Position: Option for custom basic dialog positioning
- Shape: Increased corner-radius
- Typography: Larger and darker headline

![Basic dialog with rounded corner, larger headline.](https://lh3.googleusercontent.com/q8W8RpwCCScus4cQl-dtCeOGIWywtLjjCh3cFLmwYvEpaaKbny2HwDpi7qmX4qLlO9nOlnP5F0TYG8TozuGaZNbIis9Nu2zoaa806nkO-Wo=s1352)

*Caption / Legend:*
New updates to color, layout, position, shape, and typography

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

#### Design Tokens: Dialog - Basic

*For basic dialogs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.dialog.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Dialog action focus state layer opacity |
| `md.comp.dialog.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Dialog container surface tint layer color |
| `md.comp.dialog.with-divider.divider.color` | `md.sys.color.outline` | COLOR | Dialog divider color |
| `md.comp.dialog.with-divider.divider.height` | 1dp | LENGTH | Dialog divider color |
| `md.comp.dialog.subhead.color` | `md.sys.color.on-surface` | COLOR | Dialog subhead color |
| `md.comp.dialog.subhead.type` | - | TYPOGRAPHY | Subhead type style |
| `md.comp.dialog.subhead.font` | `md.sys.typescale.headline-small.font` | FONT_NAMES | Dialog subhead font |
| `md.comp.dialog.subhead.weight` | `md.sys.typescale.headline-small.weight` | FONT_WEIGHT | Dialog subhead weight |
| `md.comp.dialog.subhead.size` | `md.sys.typescale.headline-small.size` | FONT_SIZE | Dialog subhead size |
| `md.comp.dialog.subhead.line-height` | `md.sys.typescale.headline-small.line-height` | LINE_HEIGHT | Dialog subhead line height |
| `md.comp.dialog.subhead.tracking` | `md.sys.typescale.headline-small.tracking` | FONT_TRACKING | Dialog subhead tracking |
| `md.comp.dialog.headline.color` | `md.sys.color.on-surface` | COLOR | Dialog headline color |
| `md.comp.dialog.headline.type` | - | TYPOGRAPHY | headline type style |
| `md.comp.dialog.headline.font` | `md.sys.typescale.headline-small.font` | FONT_NAMES | Dialog headline font |
| `md.comp.dialog.headline.weight` | `md.sys.typescale.headline-small.weight` | FONT_WEIGHT | Dialog headline weight |
| `md.comp.dialog.headline.size` | `md.sys.typescale.headline-small.size` | FONT_SIZE | Dialog headline size |
| `md.comp.dialog.headline.line-height` | `md.sys.typescale.headline-small.line-height` | LINE_HEIGHT | Dialog headline line height |
| `md.comp.dialog.headline.tracking` | `md.sys.typescale.headline-small.tracking` | FONT_TRACKING | Dialog headline tracking |
| `md.comp.dialog.action.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.dialog.action.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Dialog action label text font |
| `md.comp.dialog.action.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Dialog action label text weight |
| `md.comp.dialog.action.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Dialog action label text size |
| `md.comp.dialog.action.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Dialog action label text line height |
| `md.comp.dialog.action.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Dialog action label text tracking |
| `md.comp.dialog.supporting-text.type` | - | TYPOGRAPHY | Supporting text type style |
| `md.comp.dialog.supporting-text.font` | `md.sys.typescale.body-medium.font` | FONT_NAMES | Dialog supporting text font |
| `md.comp.dialog.supporting-text.weight` | `md.sys.typescale.body-medium.weight` | FONT_WEIGHT | Dialog supporting text weight |
| `md.comp.dialog.supporting-text.size` | `md.sys.typescale.body-medium.size` | FONT_SIZE | Dialog supporting text size |
| `md.comp.dialog.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` | LINE_HEIGHT | Dialog supporting text line height |
| `md.comp.dialog.supporting-text.tracking` | `md.sys.typescale.body-medium.tracking` | FONT_TRACKING | Dialog supporting text tracking |
| `md.comp.dialog.action.focus.label-text.color` | `md.sys.color.primary` | COLOR | Dialog action focus label text color |
| `md.comp.dialog.action.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Dialog action focus state layer color |
| `md.comp.dialog.action.hover.label-text.color` | `md.sys.color.primary` | COLOR | Dialog action hover label text color |
| `md.comp.dialog.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Dialog action hover state layer opacity |
| `md.comp.dialog.action.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Dialog action hover state layer color |
| `md.comp.dialog.action.label-text.color` | `md.sys.color.primary` | COLOR | Dialog action label text color |
| `md.comp.dialog.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Dialog supporting text color |
| `md.comp.dialog.with-icon.icon.color` | `md.sys.color.secondary` | COLOR | Dialog icon color |
| `md.comp.dialog.with-icon.icon.size` | 24dp | LENGTH | Dialog icon size |
| `md.comp.dialog.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Dialog container shape |
| `md.comp.dialog.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Dialog container elevation |
| `md.comp.dialog.container.color` | `md.sys.color.surface-container-high` | COLOR | Dialog container color |
| `md.comp.dialog.action.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Dialog action pressed label text color |
| `md.comp.dialog.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Dialog action pressed state layer opacity |
| `md.comp.dialog.action.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Dialog action pressed state layer color |

#### Design Tokens: Dialog - Full screen

*For full-screen dialogs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.full-screen-dialog.header.on-scroll.container.color` | `md.sys.color.surface-container` | COLOR | Full screen dialog on-scroll container color |
| `md.comp.full-screen-dialog.header.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Full screen dialog header container surface tint layer color |
| `md.comp.full-screen-dialog.with-divider.divider.color` | `md.sys.color.surface-variant` | COLOR | Full screen dialog divider color |
| `md.comp.full-screen-dialog.with-divider.divider.height` | 1dp | LENGTH | Full screen dialog divider height |
| `md.comp.full-screen-dialog.action-bar.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar pressed label text color |
| `md.comp.full-screen-dialog.action-bar.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Full screen dialog action bar pressed state layer opacity |
| `md.comp.full-screen-dialog.action-bar.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar pressed state layer color |
| `md.comp.full-screen-dialog.action-bar.focus.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar focus label text color |
| `md.comp.full-screen-dialog.action-bar.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Full screen dialog action bar focus state layer opacity |
| `md.comp.full-screen-dialog.action-bar.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar focus state layer color |
| `md.comp.full-screen-dialog.action-bar.hover.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar hover label text color |
| `md.comp.full-screen-dialog.action-bar.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Full screen dialog action bar hover state layer opacity |
| `md.comp.full-screen-dialog.action-bar.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar hover state layer color |
| `md.comp.full-screen-dialog.action-bar.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog action bar label text color |
| `md.comp.full-screen-dialog.action-bar.label-text.type` | - | TYPOGRAPHY | Full screen dialog action bar label text type |
| `md.comp.full-screen-dialog.action-bar.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Full screen dialog action bar label text font |
| `md.comp.full-screen-dialog.action-bar.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Full screen dialog action bar label text weight |
| `md.comp.full-screen-dialog.action-bar.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Full screen dialog action bar label text size |
| `md.comp.full-screen-dialog.action-bar.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Full screen dialog action bar label text line height |
| `md.comp.full-screen-dialog.action-bar.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Full screen dialog action bar label text tracking |
| `md.comp.full-screen-dialog.action-bar.on-scroll.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Full screen dialog action bar on scroll container elevation |
| `md.comp.full-screen-dialog.action-bar.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Full screen dialog action bar container elevation |
| `md.comp.full-screen-dialog.action-bar.container.color` | `md.sys.color.surface` | COLOR | Full screen dialog action bar container color |
| `md.comp.full-screen-dialog.action-bar.container.height` | 56dp | LENGTH | Full screen dialog action bar container height |
| `md.comp.full-screen-dialog.header.headline.type` | - | TYPOGRAPHY | Header type style |
| `md.comp.full-screen-dialog.header.headline.font` | `md.sys.typescale.title-large.font` | FONT_NAMES | Full screen dialog header headline font |
| `md.comp.full-screen-dialog.header.headline.weight` | `md.sys.typescale.title-large.weight` | FONT_WEIGHT | Full screen dialog header headline weight |
| `md.comp.full-screen-dialog.header.headline.size` | `md.sys.typescale.title-large.size` | FONT_SIZE | Full screen dialog header headline size |
| `md.comp.full-screen-dialog.header.headline.line-height` | `md.sys.typescale.title-large.line-height` | LINE_HEIGHT | Full screen dialog header headline line height |
| `md.comp.full-screen-dialog.header.headline.tracking` | `md.sys.typescale.title-large.tracking` | FONT_TRACKING | Full screen dialog header headline tracking |
| `md.comp.full-screen-dialog.header.action.focus.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action focus label text color |
| `md.comp.full-screen-dialog.header.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Full screen dialog header action focus state layer opacity |
| `md.comp.full-screen-dialog.header.action.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action focus state layer color |
| `md.comp.full-screen-dialog.header.action.hover.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action hover label text color |
| `md.comp.full-screen-dialog.header.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Full screen dialog header action hover state layer opacity |
| `md.comp.full-screen-dialog.header.action.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action hover state layer color |
| `md.comp.full-screen-dialog.header.action.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action label text color |
| `md.comp.full-screen-dialog.header.action.label-text.type` | - | TYPOGRAPHY | Full screen dialog header action label text type |
| `md.comp.full-screen-dialog.header.action.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Full screen dialog header action label text font |
| `md.comp.full-screen-dialog.header.action.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Full screen dialog header action label text weight |
| `md.comp.full-screen-dialog.header.action.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Full screen dialog header action label text size |
| `md.comp.full-screen-dialog.header.action.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Full screen dialog header action label text line height |
| `md.comp.full-screen-dialog.header.action.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Full screen dialog header action label text tracking |
| `md.comp.full-screen-dialog.header.headline.color` | `md.sys.color.on-surface` | COLOR | Full screen dialog header headline color |
| `md.comp.full-screen-dialog.header.icon.size` | 24dp | LENGTH | Full screen dialog header icon size |
| `md.comp.full-screen-dialog.header.icon.color` | `md.sys.color.on-surface` | COLOR | Full screen dialog header icon color |
| `md.comp.full-screen-dialog.header.on-scroll.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Full screen dialog header on scroll container elevation |
| `md.comp.full-screen-dialog.header.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Full screen dialog header container elevation |
| `md.comp.full-screen-dialog.header.container.color` | `md.sys.color.surface` | COLOR | Full screen dialog header container color |
| `md.comp.full-screen-dialog.header.container.height` | 56dp | LENGTH | Full screen dialog header container height |
| `md.comp.full-screen-dialog.container.shape` | `md.sys.shape.corner.none` | SHAPE | Full screen dialog container shape |
| `md.comp.full-screen-dialog.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Full screen dialog container elevation |
| `md.comp.full-screen-dialog.container.color` | `md.sys.color.surface` | COLOR | Full screen dialog container color |
| `md.comp.full-screen-dialog.header.action.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action pressed label text color |
| `md.comp.full-screen-dialog.header.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Full screen dialog header action pressed state layer opacity |
| `md.comp.full-screen-dialog.header.action.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Full screen dialog header action pressed state layer color |


## Basic dialogs

![Anatomy diagram numbering dialog elements.](https://lh3.googleusercontent.com/8zwGCq50u42Pisi3XIhquY9uN3sTnFAYcLYzdMcQ-7RGPou4Uyy5QzWjN3NWXlHALJhtxMM-lECAxX1_duYupPka9gdFn-THeTzCdggkOUit=s2048)

*Caption / Legend:*
1. Container
2. Icon (optional)
3. Headline (optional)
4. Supporting text
5. Divider (optional)
6. Button label text
7. Scrim

### Basic dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Color mapping diagram labeling 6 color roles across the dialog and scrim.](https://lh3.googleusercontent.com/OaqvzKCkUteypP4OIa5ABlelFupDNk5XXyc8cxl0SYBNXCJPqROSqNWKjvxWk1FJpSzOwqADZvwMhPgqsgj5tbMKKdvS8L1YWWmSvJ-sDi2K=s2048)

*Caption / Legend:*
Basic dialog color roles used for light and dark themes:

1. Surface container high
2. Secondary
3. On surface
4. On surface variant
5. Primary
6. Scrim

### Basic dialog measurements

![Annotated diagram showing padding values.](https://lh3.googleusercontent.com/0b11O-Tlquj7LEzCkk4IOw1EuhHgUI6KmNyMozEEr2aANs_Q3FshFNUhXzUkn2c3occn1_9y1XSndIceqhSPiMyAT4g5lr6xwcWZtqCvpNdnHw=s2048)

*Caption / Legend:*
Basic dialog padding and size measurements

| Attribute | Value |
| --- | --- |
| Container shape | 28dp corner radius |
| Container height | Dynamic |
| Container width | Min 280dp; Max 560dp |
| Divider height | 1dp |
| Icon size | 24dp |
| Minimum width | 280dp |
| Maximum width | 560dp |
| Alignment with icon | Center-aligned |
| Alignment without icon | Start-aligned |
| Top/Left/right/bottom padding | 24dp |
| Padding between buttons | 8dp |
| Padding between title and body | 16dp |
| Padding between icon and title | 16dp |
| Padding between body and actions | 24dp |

## Full-screen dialogs

![Diagram numbering 6 full-screen dialog elements.](https://lh3.googleusercontent.com/DkDLF7N_cYRseSctPY0mcn5UU3s5M37UtbNZCMovSLfZacqNP1ZR-1ur4muZ0RXpZAxdcqi65q7Uc7GRZiLumQhf54hpWiUNMxgJbJNEIzc8RQ=s2048)

*Caption / Legend:*
1. Container
2. Header
3. Icon (close affordance)
4. Headline (optional)
5. Text button
6. Divider (optional)

### Full-screen dialog color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

![Color mapping diagram shows 5 callout markers across the dialog.](https://lh3.googleusercontent.com/i7xYaPoPLi48zudMGabAj82oZQLxetMFg4YojUXfY9GlrVVdonnVQurEssQzX0LHqABfe9QcTts3lMtKa_-jYDektbV8HGkmAIKkiDuF573F8g=s2048)

*Caption / Legend:*
Full-screen dialog color roles used for light and dark themes:

1. Surface container high
2. On surface
3. On surface
4. Primary
5. On surface variant

### Full-screen dialog measurements

![Diagram noting layout measurements for padding values, title, height, and action regions.](https://lh3.googleusercontent.com/5vPLkkKzW-CnlkhE29h4YwG8QzCsM7QdxQpOS0hRO82Ox4D7VqBbZgPWKd2nHnj916gkB29tjl7k_fnuuffRyMGOmS9Xg_MJpMIsMWY-Meo=s2048)

*Caption / Legend:*
Full-screen dialog padding and size measurements

| Attribute | Value |
| --- | --- |
| Container shape | 0dp corner radius |
| Container height | Dynamic |
| Container width | Container width; Max 560dp |
| Header height | 56dp |
| Header width | Container width |
| Headline text alignment | Start-aligned |
| Divider height | 1dp |
| Icon (close affordance) size | 24dp |
| Bottom action bar height | 56dp |
| Bottom action bar width | Container width |
| Top/left/right padding | 24dp |
| Padding between elements | 8dp |

## Guidelines

![Basic dialog in isolation](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sf9qay-01.png?alt=media)

*Caption / Legend:*
A basic dialog

## Usage

A dialog is a modal window that appears in front of app content to provide critical information or ask for a decision. Dialogs disable all app functionality when they appear, and remain on screen until confirmed, dismissed, or a required action has been taken.

Dialogs are purposefully interruptive, so they should be used sparingly. A less disruptive alternative is to use a dropdown menu, which provides options without interrupting a user’s experience.

![Diagram of basic and full-screen dialogs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfc7pz-02.png?alt=media)

*Caption / Legend:*
There are two variants of dialogs:

1. Basic dialog
2. Full-screen dialog

![Dialog in front of app content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfcqhr-03_do.png?alt=media)

*Caption / Legend:*
Use dialogs for prompts that block an app’s normal operation, and for critical information that requires a specific user task, decision, or acknowledgement

![Low-priority dialog in front of app content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfdc9w-03_dont.png?alt=media)

*Caption / Legend:*
Don’t use dialogs for low- or medium-priority information. Instead use a snackbar, which can be dismissed or disappear automatically.

### Similar components

Snackbars are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy helps avoid overusing dialogs.

![Snackbar on a phone saying that new photos were synced to the device. No buttons exist.](https://lh3.googleusercontent.com/XLiUu7mOltTNoUojZheRl95_BXn_O9vc9-PwyzL2W_vZPBccPC1bntpTZ6KwgzKDMDt8UGih90E9GPDGd-uyGWZz0eqLMZOItywMT-yiDxS7=s1352)

*Caption / Legend:*
Snackbars can disappear automatically

| **Component** | **Importance** | **Action needed** |
| --- | --- | --- |
| Snackbar | Low importance | Optional: Snackbars may not have a button, and can disappear automatically |
| Dialog | High importance | Required: Dialogs block the main content until an action is confirmed |

## Anatomy

### Basic dialog

![Diagram of 7 elements of basic dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfhos4-07.png?alt=media)

*Caption / Legend:*
1. Container
2. Icon (optional)
3. Headline (optional)
4. Supporting text
5. Divider (optional)
6. Buttons label text
7. Scrim

### Full-screen dialog

![6 elements of full-screen dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfick9-08.png?alt=media)

*Caption / Legend:*
1. Container
2. Header region
3. Icon (close affordance)
4. Headline (optional)
5. Button label text
6. Divider (optional)

### Container and scrim

Dialog containers appear above other screen elements and hold the dialog’s headline, text, buttons, and list items.

To focus attention on the dialog, surfaces behind the container are scrimmed with a temporary overlay to make them less prominent.

![Basic dialog shown above a scrim overlay that reduces the prominence of the background elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfkf69-09.png?alt=media)

*Caption / Legend:*
Basic dialogs appear over a background scrim

### Headline (optional)

A dialog’s purpose should be communicated by its headline and buttons or actionable items.

Headlines should:

- Contain a brief, clear statement or question
- Avoid apologies (“Sorry for the interruption”), alarm (“Warning!”), or ambiguity (“Are you sure?”)

![Dialog title asking “Use location service?”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfl8j1-10_do.png?alt=media)

*Caption / Legend:*
This dialog title poses a specific question, concisely explains what’s involved in the request, and provides clear actions

![Dialog title asking “Are you sure?”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sflmm0-11_don't.png?alt=media)

*Caption / Legend:*
Don’t use dialog titles that pose an ambiguous question

Headlines should always be succinct. They can wrap to a second line if necessary, and be truncated.

In full-screen dialogs, long headlines or headlines of variable lengths (such as translations), can be placed in the content area instead of the app bar.

![Example full-screen dialog with truncated long headline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfm2yt-12_Caution.png?alt=media)

*Caption / Legend:*
Avoid placing long headlines in a full-screen dialog’s app bar (1), as the truncated text may lead to misunderstanding

![Example full-screen dialog with short headline, and longer text in content area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfmezr-13_do.png?alt=media)

*Caption / Legend:*
Find ways to shorten app bar text, and place longer headlines into the content area (1) of a full-screen dialog

### Buttons

Dialog actions are most often represented as buttons and allow users to confirm, dismiss, or acknowledge something.

Buttons are aligned to the trailing edge of the dialog for easier interaction. The confirmation button is always closest to the edge.

Button alignment responds automatically for right-to-left languages, where the confirmation button is aligned to the left edge.

![Dialog with the confirmation button disabled because a required radio selection is missing.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfmqqd-14_do.png?alt=media)

*Caption / Legend:*
Disable confirming actions (1) until a choice is made. Dismissive actions are never disabled.

![Dialog with the dismissing action "Cancel" on the right of the 2 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfn276-15_don't.png?alt=media)

*Caption / Legend:*
Don’t place dismissive actions (1) to the right of confirming actions. Instead, place them to the left of confirming actions.

![Dialog with a single-action button: “OK”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfq9tm-16_do.png?alt=media)

*Caption / Legend:*
A single action may be provided only if it’s an acknowledgement

![Dialog with 2 button choices: “Cancel”, “Got it”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfqm2i-17_don't.png?alt=media)

*Caption / Legend:*
Avoid presenting people with unclear choices. **Cancel** doesn't make sense here because no clear action is proposed.

Dialogs should contain a maximum of two actions.

- If a single action is provided, it must be an acknowledgement action
- If two actions are provided, one must be a confirming action, and the other a dismissing action

![Dialog with 2 buttons side-by-side: “Disagree”, “Agree”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfqzp1-18_do.png?alt=media)

*Caption / Legend:*
Display two text buttons next to one another

![Dialog with 2 stacked buttons: “Turn on speed boost”, “No thanks”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfre4i-19_caution.png?alt=media)

*Caption / Legend:*
Stacked buttons accommodate longer button text, but take up more room. Confirming actions appear above dismissive actions.

Providing a third action, such as **Learn more**, is not recommended as it navigates the user away from the dialog, leaving the dialog task unfinished.

Rather than adding a third action, an inline expansion can display more information. If more extensive information is needed, provide it prior to entering the dialog.

![Dialog with 3 text buttons: Learn more, Disagree, Agree.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfrskh-20.png?alt=media)

*Caption / Legend:*
The **Learn more** action (1) navigates away from this dialog, potentially leaving it in an indeterminate state

## Basic dialog

Basic dialogs interrupt users with urgent information, details, or actions. Common use cases for basic dialogs include alerts, quick selection, and confirmation.

![Example of basic dialog action request.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfumns-21.png?alt=media)

*Caption / Legend:*
Basic dialogs require a person to take action before it will close

![Example of basic dialog confirmation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfuxlx-22.png?alt=media)

*Caption / Legend:*
Basic dialogs can give people the ability to provide confirmation of a choice before committing to it

Basic dialogs most often appear as alerts or lists, but can have a variety of layouts and component combinations, including lists, date pickers, and time pickers.

![Date picker dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfzk1g-23.png?alt=media)

*Caption / Legend:*
Date picker dialogs allow people to tap a date, then confirm it by tapping **OK**

![Time picker dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sfxxnd-24.png?alt=media)

*Caption / Legend:*
Time picker dialogs allow people to move the clock hand and then confirm by tapping **OK**

## Full-screen dialog

Full-screen dialogs fill the entire screen, containing actions that require a series of tasks to complete. One example is creating a calendar entry with the event title, date, location, and time.

Because they take up the entire screen, full-screen dialogs are the only dialogs over which other dialogs can appear.

Use a [container transform](/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) pattern to transition a FAB into a full-screen dialog.

When a full-screen dialog is closed without being saved, a basic dialog appears in front of it to confirm selections should be discarded without saving changes.

Full-screen dialogs may be used for content or tasks that meet any of these criteria:

- Dialogs that include components which require keyboard input, such as form fields
- When changes aren’t saved instantly
- When components within the dialog open additional dialogs

Full-screen dialogs are for compact breakpoints only, like mobile devices. For medium and expanded breakpoints, use a basic dialog.

### Saving selections

To save a selection in a full-screen dialog, use **Save**.  The close icon or dismissive action, such as **Cancel** or **Back**, should close the dialog.

### Confirmation

The confirmation action should be clear about what happens next, like **Send** or **Create**. Avoid using vague terms like **Done**, **OK**, or **Close**. Only trigger an additional basic dialog if the action fails. Don’t disable the confirmation button.

![Full-screen dialog with create button as confirmation action.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg5wkr-27_do.png?alt=media)

*Caption / Legend:*
A **Create** button is clear that the event will be created

![Full-screen dialog with an additional basic dialog asking if you want to create this event.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg67kv-28_don't.png?alt=media)

*Caption / Legend:*
Don’t trigger a basic dialog when the confirming action is selected

### Dismissing

When someone dismisses a full-screen dialog, a basic dialog should appear to confirm that they want to discard the unsaved changes.

![A basic dialog with options to either keep editing or discard unsaved changes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg91cq-29_do.png?alt=media)

*Caption / Legend:*
Use a basic dialog to confirm that the user wants to discard unsaved changes

![A full-screen dialog with a Close button as the confirming action.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg9bz5-30_don't.png?alt=media)

*Caption / Legend:*
Don’t use the confirming action to dismiss the full-screen dialog

### Error messages

Errors about the dialog fields should always appear inline where they occur. Some components like text fields have built-in error messaging, while others like checkboxes and radio buttons need error messages to be added next to the fields.

General errors such as network issues preventing saving or submitting should appear in a basic dialog when the confirming action fails.

Error messages should clearly but briefly explain the source of the error and how to fix it. Show all errors on the page at once so people can fix everything before trying again.

![A full-screen dialog with inline error messages for text fields.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg9nzm-31_do.png?alt=media)

*Caption / Legend:*
Error messages related to the fields should be displayed inline

![A basic dialog mentioning that entries were not saved due to a connection issue.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sg9xoh-32_caution.png?alt=media)

*Caption / Legend:*
Errors unrelated to the fields can be displayed in a basic dialog

### Dialog windows

Launching a full-screen dialog temporarily resets the app’s perceived elevation, allowing simple menus or dialogs to appear above the full-screen dialog. They cover the screen and don’t appear as a floating modal window.

### Navigation

Because full-screen dialogs can only be completed, dismissed, or closed, the close “X” icon button should be the only navigation option in the app bar.

## Adaptive design

Dialogs can swap variants as the breakpoint changes. For example, a full-screen dialog can change into a basic dialog at larger breakpoints.

![Example of full-screen dialog on left, simple dialog on right](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgbmj3-33.png?alt=media)

*Caption / Legend:*
1. Full-screen dialog on mobile
2. Dialog on a tablet

### Medium breakpoint

Basic dialogs appear in a center position by default.

Their position can be overridden to provide a more ergonomic experience.

![Basic dialog on tablet photos app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgc676-34.png?alt=media)

*Caption / Legend:*
Dialog custom positioned on the right side of the screen

### Expanded breakpoint

Dialogs on expanded breakpoints, like desktop, are modal windows above a scrim. This puts the dialog at the forefront of a person's view, calling attention to the action prompted in the dialog.

![Example of desktop dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgj2r1-35.png?alt=media)

*Caption / Legend:*
Desktop dialogs call attention to the required action

Basic dialogs can be custom-positioned anywhere on larger screens, respecting margins to prevent edge collision.

![Basic dialog position diagram.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgjir4-36.png?alt=media)

*Caption / Legend:*
Custom placement area for basic dialogs that respects a 56dp margin from the edges of the screen

## Behavior

### Appearing

Dialogs appear without warning, requiring users to stop their current task. They should be used sparingly, as not every choice or setting warrants interruption.

Dialogs use an [enter and exit](/m3/pages/motion-transitions/transition-patterns#e1c2a650-d7a4-4a6d-9025-e6b7845291ed) transition pattern to appear on screen.

### Position

Dialogs retain focus until dismissed or an action has been taken, such as choosing a setting. They shouldn’t be obscured by other elements or appear partially on screen, with the exception of full-screen dialogs.

![A basic dialog covering a full-screen dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgqe15-38.png?alt=media)

*Caption / Legend:*
Dialogs shouldn’t be obscured by other elements except for full-screen dialogs

### Scrolling

Most dialog content should avoid scrolling. Even when scrolling is required, the dialog title is pinned at the top, with buttons pinned at the bottom. This ensures selected content remains visible alongside the title and buttons, even upon scroll.

Dialogs don’t scroll with elements outside of the dialog, such as the background.

### Dismissing

To close a dialog used as an alert, one of its actions must be selected.

Other dialogs may be dismissed by:

- Tapping a **Cancel** button, if one is shown
- Selecting an actionable list item
- Pressing the keyboard **Esc** key
- Tapping the scrim (Android, iOS)
- Tapping the Android system **Back** button
- Using another standard cancel or escape action, such as iOS VoiceOver escape gesture

If the user’s ability to dismiss a dialog is disabled, the user must choose a dialog action to proceed.

![Example of dialog alert](https://lh3.googleusercontent.com/B7aiYo5IM932EzqTfX7bkS08Ebciat0LGJWQg8PM6ZD1tl7iIqXm2lmUyfQ56VoXLoaTaNmMuVgsSg5QLBA6q67v88RUwONUL0LfX01m5LU9=s676)

*Caption / Legend:*
Dismissing a dialog alert involves selecting an action

When a dialog box is dismissed, the following transitions occur:

- The dialog box fades out
- The background scrim fades out

![Example of dialog box fading out](https://lh3.googleusercontent.com/B7aiYo5IM932EzqTfX7bkS08Ebciat0LGJWQg8PM6ZD1tl7iIqXm2lmUyfQ56VoXLoaTaNmMuVgsSg5QLBA6q67v88RUwONUL0LfX01m5LU9=s676)

*Caption / Legend:*
When dismissed, a dialog box fades out along with the background scrim

## XR

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) introduces spatial capabilities, such as using depth to make dialogs stand out from the background. Currently, spatial dialogs are only available in full space. For home space, follow Material’s general [dialog guidance](/m3/pages/dialogs/guidelines#b33988d3-88e6-432c-acb1-4461a84171c9).

## Color & elevation

XR uses [color roles](/m3/pages/color-roles/tab-1#89f972b1-e372-494c-aabc-69aea34ed591) to communicate the elevation of UI elements. Dialogs can use two color options: **surface container high** or **surface container highest**.

starNote:Color and elevation for spatial dialogs can be customized by makers and are not available in Jetpack Compose yet.

![2 spatially elevated dialogs with surface-container-high and surface-container-highest color roles.](https://lh3.googleusercontent.com/U8ru72wkyiSvzWy1y-npuQelcvHDdGcI1Vl7Xgqc_aWt4IUs9oV4OWehS7OmyV02GUXJtr4AecKrDRvQouwJ5IU5uZCLsn0JZ3hLdN-Gc50=s2048)

*Caption / Legend:*
1. Surface container high
2. Surface container highest

For effective visual hierarchy, a dialog should be the most prominent element. 

Add a scrim behind a dialog to improve its visibility. Scrims prevent other content from being selected until the dialog action is complete.

![Dialog with surface-container-highest color and a scrim.](https://lh3.googleusercontent.com/UbfenXJcmu7EicBwP5t7vLK-_9MtCoLkTyK5F8ymjYpGivp0AC72Od_07R3T5LAJoNbfKJEjekcjCEwcpkD6f0dpZNNe2-clKr4EqMr_WN2G=s1506)

*Caption / Legend:*
Make sure a spatial dialog’s color is higher than all other UI elements, and use a scrim

The dialog should have the highest elevation in the product.

For example, if a dialog is **surface container high**, don’t use **surface container highest** for any other elements.

![Dialog with surface-container-high color and no scrim. An orbiter is at a higher elevation than the dialog.](https://lh3.googleusercontent.com/uJQx6_YXe-_Z0MiBZZ2qGdoidQ8CCUrsVGhmD1ta9wRV0HESD-TgVPnxz_LHTFI2aOElt4PxTd8Am9oUBQTWt4TAlIeuy7SLbxkzkY3Jw1z3=s1506)

*Caption / Legend:*
If a dialog’s color is **surface container high**, don’t use **surface container highest** for any other element

## Usage

[Basic dialogs](/m3/pages/dialogs/guidelines#97ac3858-3932-4084-ae8e-73e42b7cb752) are recommended when designing for XR’s expanded window sizes. This keeps the required action in the person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). Limit use of [full-screen dialogs](/m3/pages/dialogs/guidelines#007536b9-76b1-474a-a152-2f340caaff6f) to compact window sizes, like mobile devices.

![Basic dialog in XR.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfk9dk-04.png?alt=media)

*Caption / Legend:*
A basic dialog elevated above an app in home space

![Full-screen dialog in XR.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfn41n-05.png?alt=media)

*Caption / Legend:*
Avoid using full-screen dialogs in XR. Required actions could appear beyond a person’s field of view.

## Spatial dialogs

In full space, dialogs can be elevated spatially via [overrides](https://developer.android.com/develop/xr/jetpack-xr-sdk/material-design#use-enablexrcomponentoverrides). This helps dialogs stand out from their background in XR.

![Side view of basic dialog showcasing spatial elevation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmadfqce4-06.png?alt=media)

*Caption / Legend:*
Side view of a basic dialog with spatial elevation in full space

## Behavior

### Effect

The spatial dialog should scale uniformly. It also fades in when appearing, and fades out when disappearing. 

The dialog's scrim only fades in and out.

### Movement

When activated, the spatial dialog rises from the app to the highest resting level on the Z-axis.

When the action is complete, it returns to a normal resting level.

The dialog's scrim stays at the app content level at all times. 

To prevent motion sickness, use [standard easing](/m3/pages/motion-easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](/m3/pages/motion-easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens.

## Placement

Consider factors like field of view, viewing distance, and possible interactions when deciding where to place dialogs in XR.

### Elevation: highest resting level

Display spatial dialogs at the highest resting level. When setting the depth value of the highest resting level, make sure the elevated dialog is at a comfortable viewing distance from the person. [More on spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation)

### Center spatial dialogs in field of view

Spatial dialogs should be centered in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). If the dialog **can't** track head movements, position it in the center of the app’s content.

If the dialog **can** track head movements, configure it with a lazy follow behavior. This keeps the dialog anchored to the center of a person’s field of view until an action is taken.

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. Spatial dialogs should follow applicable Material [dialog accessibility standards](/m3/pages/dialogs/accessibility).

## Accessibility

## Use cases

People should be able to use assistive technology to:

- Open and close a dialog
- Provide and submit other inputs if the dialog is interactive, such as a text field or selectable list
- Scroll the dialog to access all of its contents if that content extends beyond the container of the dialog

## Interaction & style

### Use sparingly

Dialogs are purposefully interruptive. This means they appear in front of app content and disrupt the flow of content for people who may, for example, be using a screen reader to navigate the page.

As such, dialogs should be used sparingly and only to provide critical information. Less critical information should be presented in a non-blocking way within the flow of app content.

![An inline tooltip doesn’t block a photo app’s content on a mobile screen. A modal dialog blocks the content of a photo app on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgve0z-01_do.png?alt=media)

*Caption / Legend:*
Present non-critical information using other UI within the flow of app content

![A modal dialog blocks the content of a photo app on a mobile screen. A modal dialog blocks the content of a photo app on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sgvt7t-02_don't.png?alt=media)

*Caption / Legend:*
Avoid putting non-critical information in a dialog

### 200% text size

Avoid excessive text wrapping or truncation by choosing concise strings.

On Android, headlines should be kept concise enough to fit within **four** lines after the text size is increased to 200%. If a headline exceeds this limit and gets truncated, provide an alternative way to access the full content in a single tap.

![A dialog with 200% text wraps multiple times in the header and description. It covers most of the mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8sh8mb2-03_caution.png?alt=media)

*Caption / Legend:*
Avoid excessive text wrapping or truncation by choosing concise strings

### Elements within dialogs

Because dialogs can contain various elements within them, refer to the relevant accessibility guidelines for each element. 

Some common examples include:

1. Text fields
2. Typography
3. Buttons

![3 elements of a full-screen dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8x3m4cu-04.png?alt=media)

*Caption / Legend:*
Full-screen dialogs can contain various elements such as (1) text fields, (2) typography, and (3) buttons, which each may have their own accessibility guidelines

## Initial focus

When a dialog appears, focus should automatically land on the first interactive element within the dialog.

![A modal dialog titled “Permanently delete?” whose second interactive element is focused by selecting the Tab key.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8wqpp2r-05.png?alt=media)

*Caption / Legend:*
Initial focus lands on the first interactive element within a dialog. The tab key moves focus through the next interactive elements in a cycle.

![A modal dialog titled “Permanently delete?” whose previous interactive element is focused on by selecting both the Shift and Tab keys.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm8wqq56l-06.png?alt=media)

*Caption / Legend:*
The shift and tab keys together move focus in the opposite direction. The space or enter key triggers or commits the action of the focused element.

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Focus lands on the next interactive element contained in the dialog, or the first element if focus is currently on the last element |
| Shift + Tab | Focus lands on the previous interactive element contained in the dialog, or the last element if focus is currently on the first element |
| Space or Enter | Triggers or commits the action of the focused element |
| Escape | Closes the dialog |

## Labeling elements

The accessibility label for a dialog is typically the same as the dialog’s title or headline.

On web, basic dialogs should have the **alert dialog** role.

![An alert dialog with a title “Set up traffic updates?”  Its label is “Set up traffic updates?” and its role as “Alert Dialog.”](https://lh3.googleusercontent.com/lBX7M9XMiL98P1lM9cobZ7GLCzqaLJANo3iKDKkfG_RQRKbKZepzwsjLHXEDveGR3zjduX9QaCz-UIsW7qyHc2TqlHp_B-4RSR1BrYnZAPh-iw=s1352)

*Caption / Legend:*
Basic dialogs are known as alert dialogs on web

Components contained within the dialog, such as buttons, should be labeled according to the guidelines specific to those components.

For common examples, see:

- Buttons
- Text fields

![A full-screen dialog titled “New event” containing a “Save” button and a text field, both with their own accessibility labels.](https://lh3.googleusercontent.com/XhxNfz1cPdhx_FBTjgzNKRYc047mN_rLn5N3jQsdL7OCeMe61us_nf42-JVISOD0ZDkjPuXfKLMkPbfxfxPVEBmDdG_L2P1TvSx72RXXkGUV=s1352)

*Caption / Legend:*
Elements within a dialog should be labeled according to their guidelines
