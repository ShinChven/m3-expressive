# Side sheets

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/side-sheets](https://m3.material.io/components/side-sheets)
> Last Updated: 2026-07-28T07:57:48.089Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use side sheets to provide optional content and actions without interrupting the main content
- Two variants: standard and modal
- People can navigate to another region within the sheet
- Side sheets can contain a back icon for navigation

![The 2 variants of side sheets.](https://lh3.googleusercontent.com/5DQn6-h3w6BIR9DoXAncCck22WNg-86e7uh4meG22SsqcvVMb966220Fp-Ooiwui3eekiqk8p_Uq9BpNZ4wUYSQFPwovt6b_fOdpiU008vQ0Lw=s2048)

*Caption / Legend:*
1. Standard side sheet
2. Modal side sheet

## Availability & resources

## Differences from M2

- Right-to-left (RTL) language support with left side sheet
- Color: New color mappings and compatibility with dynamic color
- Shape: Modal side sheets have a 16dp corner radius

![A modal side sheet showing the 16dp corner radius.](https://lh3.googleusercontent.com/NcjJRXvRM56DuF0hrulvw3eixw8QXtodshjuhM6OgLXuC54E06Ov7JGxPSynfQiwGnaQspHgMps2all60Y81-oRaznUym7yDF1bg53VC-so8ag=s1352)

*Caption / Legend:*
Side sheets have new color mappings to support dynamic color

## Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Sheets - Side

*For side sheets.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.sheet.side.docked.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Sheet side docked focus indicator offset |
| `md.comp.sheet.side.docked.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Sheet side docked focus indicator thickness |
| `md.comp.sheet.side.docked.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Sheet side docked focus indicator color |
| `md.comp.sheet.side.docked.container.width` | 256dp | LENGTH | Sheet side docked container width |
| `md.comp.sheet.side.docked.container.height` | 100percent | LENGTH | Sheet side docked container height |
| `md.comp.sheet.side.docked.standard.container.color` | `md.sys.color.surface` | COLOR | Sheet side docked standard container color |
| `md.comp.sheet.side.docked.standard.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Sheet side docked standard container elevation |
| `md.comp.sheet.side.docked.modal.container.shape` | `md.sys.shape.corner.large.start` | SHAPE | Sheet side docked modal container shape |
| `md.comp.sheet.side.docked.modal.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Sheet side docked modal container elevation |
| `md.comp.sheet.side.docked.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Sheet side docked container surface tint layer color |
| `md.comp.sheet.side.docked.container.shape` | `md.sys.shape.corner.none` | SHAPE | Sheet side docked container shape |
| `md.comp.sheet.side.detached.container.shape` | `md.sys.shape.corner.large` | SHAPE | Sheet side detached container shape |
| `md.comp.sheet.side.docked.modal.container.color` | `md.sys.color.surface-container-low` | COLOR | Sheet side docked modal container color |
| `md.comp.sheet.side.docked.container.color` | `md.sys.color.surface` | COLOR | Sheet side docked container color |
| `md.comp.sheet.side.docked.action.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Sheet side docked action pressed label text color |
| `md.comp.sheet.side.docked.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Sheet side docked action pressed state layer opacity |
| `md.comp.sheet.side.docked.action.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Sheet side docked action pressed state layer color |
| `md.comp.sheet.side.docked.action.focus.label-text.color` | `md.sys.color.primary` | COLOR | Sheet side docked action focus label text color |
| `md.comp.sheet.side.docked.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Sheet side docked action focus state layer opacity |
| `md.comp.sheet.side.docked.action.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Sheet side docked action focus state layer color |
| `md.comp.sheet.side.docked.action.hover.label-text.color` | `md.sys.color.primary` | COLOR | Sheet side docked action hover label text color |
| `md.comp.sheet.side.docked.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Sheet side docked action hover state layer opacity |
| `md.comp.sheet.side.docked.action.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Sheet side docked action hover state layer color |
| `md.comp.sheet.side.docked.divider.color` | `md.sys.color.outline` | COLOR | Sheet side docked divider color |
| `md.comp.sheet.side.docked.headline.type` | - | TYPOGRAPHY | Sheet side docked headline type style |
| `md.comp.sheet.side.docked.headline.font` | `md.sys.typescale.title-large.font` | FONT_NAMES | Sheet side docked headline font |
| `md.comp.sheet.side.docked.headline.weight` | `md.sys.typescale.title-large.weight` | FONT_WEIGHT | Sheet side docked headline weight |
| `md.comp.sheet.side.docked.headline.size` | `md.sys.typescale.title-large.size` | FONT_SIZE | Sheet side docked headline size |
| `md.comp.sheet.side.docked.headline.line-height` | `md.sys.typescale.title-large.line-height` | LINE_HEIGHT | Sheet side docked headline line height |
| `md.comp.sheet.side.docked.headline.tracking` | `md.sys.typescale.title-large.tracking` | FONT_TRACKING | Sheet side docked headline tracking |
| `md.comp.sheet.side.docked.headline.color` | `md.sys.color.on-surface-variant` | COLOR | Sheet side docked headline color |


## Standard side sheet

![4 elements of a standard side sheet.](https://lh3.googleusercontent.com/lg2svhv9DuP5FMVqxsmnsLS5m2S1aSqU4fcUuQacBh9lHSy2DiPpaUpGpphS0iiVcuOJvSHp95mF9Z55dmy9F9KeGE5I-_-OOsgSuKRp_feW=s2048)

*Caption / Legend:*
1. Divider (optional)
2. Headline
3. Container
4. Close icon button

### Standard side sheet color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![4 color roles applied to a side sheet in light and dark themes.](https://lh3.googleusercontent.com/LqFhUoIZJCxI-xrg-swaOn2vwlyswPNvs2JQfS2oNHhVms4yvkJE1tCBaFLUxKH_B-NWUoZ9Wo5QF2x437thBA0uzYeoBxeJ2NMWg2jmqbgL=s2048)

*Caption / Legend:*
Side sheet color roles used for light and dark themes:

1. Outline variant
2. On surface variant
3. Surface
4. On surface variant

### Standard side sheet measurements

![Standard side sheet padding and size measurements.](https://lh3.googleusercontent.com/2LAblBbcF_ZBcupC3Q2aXZlYse3imp3Y1ePIVfC3DY5iefsYPzFRDPu20wDJmkgcAxlpprO9NpnBwJdHjBTiA32q7BduBlHaREVzxLLbrKkDwA=s2048)

*Caption / Legend:*
Side sheet padding and size measurements

| Attribute | Value |
| --- | --- |
| Start/end padding | 24dp |
| Padding between top elements | 12dp |
| Bottom actions height | 72dp |
| Bottom actions top padding | 16dp |
| Bottom actions bottom padding | 24dp |
| Bottom actions alignment (horizontal) | Left |
| Max-width | 400dp |
| Margins (when detached) | 16dp |

## Modal side sheet

![7 elements of a modal side sheet.](https://lh3.googleusercontent.com/mCkCbKeP2EQNehrmAoIhTh8csAxLh6TS5YKqEtZWs-p6OhXjXK3OQ-8GxAiPRoDu7tQQ_qh6pdkkvtk5LLT2ACRvlqzzCn6QkW5TORe1go6W=s2048)

*Caption / Legend:*
1. Back icon button (optional)
2. Headline
3. Container
4. Close icon button
5. Divider (optional)
6. Action buttons (optional)
7. Scrim

### Modal side sheet color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/).

![4 color roles applied to a modal side sheet in light and dark themes.](https://lh3.googleusercontent.com/MCbwK4pOf-VBkCt3qXBvBVReNnD3TzDuwLJdajh_CvxUT_TN3_5Ho5v3QyV0SHhv5IHbZP0V5UbCSy8rXaQFJ79cocKme0PSXGWzZT5HUvU=s2048)

*Caption / Legend:*
Side sheet color roles used for light and dark themes:

1. On surface variant
2. On surface variant
3. Surface container low
4. On surface variant

### Modal side sheet measurements

![Modal side sheet padding and size measurements](https://lh3.googleusercontent.com/ggmDZsvw6x0ei4ktaEtZbG_D-SvR-dKw59udjcKCr7KdED37SNpjgIxFdBL6ySJrdglC7AeXbchojJM7pgxlhcVmcXVp26aCBCmnQ1utyjDL=s2048)

*Caption / Legend:*
Modal side sheet padding and size measurements

| Attribute | Value |
| --- | --- |
| Start/end padding | 24dp |
| Start padding with icon | 16dp |
| Padding between top elements | 12dp |
| Bottom actions height | 72dp |
| Bottom actions top padding | 16dp |
| Bottom actions bottom padding | 24dp |
| Bottom actions alignment (horizontal) | Left |
| Max-width | 400dp |
| Margins (when detached) | 16dp |

## Guidelines

![Side by side comparison of a standard and a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqqqohk-01.png?alt=media)

*Caption / Legend:*
1. Standard side sheet
2. Modal side sheet

## Usage

Standard side sheets are supplementary surfaces used mostly in medium to expanded breakpoints, like tablet and desktop. They provide a consistent and predictable surface for contextual actions and information.

Standard side sheets display content that complements the screen’s primary content. They remain visible while people interact with primary content.

Common uses include:

- Displaying a list of actions that affect the screen’s primary content, such as filters
- Displaying supplemental content and features

![Standard side sheet showing supplementary information about a photo.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqr6mnd-02.png?alt=media)

*Caption / Legend:*
Information about a photo in a standard side sheet

Modal side sheets are preferred in compact breakpoints, like mobile, due to limited screen size.

They can display the same kinds of content as standard side sheets, but must be dismissed in order to interact with the underlying content.

![Modal side sheet showing filter controls.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrab5f-03.png?alt=media)

*Caption / Legend:*
Modal side sheet with filter controls

Side sheets have a fixed width and typically span the height of the screen.

Their dimensions depend on how the app’s layout is subdivided into UI regions.

![A modal sheet at the right of a screen, with the correct inset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrlvws-04-do.png?alt=media)

*Caption / Legend:*
Place side sheets along the edge of the screen, usually on the right side to avoid interference with any navigational components on the left edge. They can be slightly inset by 16dp.

![A modal side sheet at the right of the screen with the wrong inset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrngv8-05-don't.png?alt=media)

*Caption / Legend:*
Don’t inset a side sheet from the screen edges far beyond the recommended margin. This makes the sheet’s position and scroll behavior unclear, while obscuring primary content.

## Anatomy

![4 elements of a standard side sheet.  ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrqfpt-06.png?alt=media)

*Caption / Legend:*
1. Divider (optional)
2. Headline
3. Container
4. Close icon button

![7 elements of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqrrjh7-07.png?alt=media)

*Caption / Legend:*
1. Back icon button (optional)
2. Headline
3. Container
4. Close icon button
5. Divider (optional)
6. Action buttons (optional)
7. Scrim

### Container

Side sheet containers hold all side sheet elements. Their size is determined by the space those elements occupy.
 
The container is the only required element of a side sheet.

![A modal side sheet’s container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsampe-08.png?alt=media)

*Caption / Legend:*
1. Container

### Back icon button (optional)

Icon buttons can provide ways to exit a side sheet or move to a different experience.

Because the primary content behind or beside a side sheet is always visible, it’s important to provide affordances for leaving a side sheet and returning to the primary content.

![Back icon button on the upper left of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsgqgs-09.png?alt=media)

*Caption / Legend:*
1. Back icon button

### Close icon button (optional)

A close affordance provides a consistent method for dismissing a side sheet.

A close icon button is highly recommended, increases accessibility, and makes focused side sheets easier to close.

![Close icon button on the upper right of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsns8t-10.png?alt=media)

*Caption / Legend:*
1. Close icon button

### Action buttons (optional)

Buttons represent actions available from a side sheet. Examples: **Save**, **Edit**, **Download**

Use elevation, fill, and tone to call attention to specific actions.

![Save and cancel buttons at the bottom of a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsw3fe-11.png?alt=media)

*Caption / Legend:*
1. Action buttons

### Divider (optional)

Dividers can separate different kinds of content and create distinct regions in a side sheet.

Use a divider to separate:

- Action buttons from content
- User-generated content from system-generated content

![Horizontal divider on a modal side sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqsz2ma-12.png?alt=media)

*Caption / Legend:*
1. Divider

### Content (optional)

Side sheets can display a wide variety of content and layouts, ranging from a list of actions to supplemental content in a tabular layout.

![2 side sheets with different content displayed side by side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqt0pai-13.png?alt=media)

*Caption / Legend:*
Form controls shown in a side sheet for app settings

## Adaptive design

Side sheets have a default width, but can be resized depending on the needs of the layout. 

When a standard side sheet opens, the body area shrinks to accommodate the sheet’s width while maintaining a margin on the body’s trailing edge.

### RTL language support

In right-to-left (RTL) languages, side sheets should appear on the left edge of the window with all elements reversed.

![Side sheet along the left edge of a screen. All buttons and icons are reversed.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmeqwb27c-16.png?alt=media)

*Caption / Legend:*
Side sheet elements are reversed in RTL languages

## Behavior

Side sheets can vertically scroll independent of the rest of the UI.

This allows their scroll position and content to persist while the page is scrolled, and vice versa.

Side sheets cannot scroll horizontally.

![A side sheet appears to scroll horizontally.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw8z3x56-19_don't.png?alt=media)

*Caption / Legend:*
Don’t allow horizontal scrolling or lay out the side sheet in a way that suggests horizontal scrolling. A side sheet’s narrow width leaves limited space to fully view items.

### Predictive back

On Android, a gesture called [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows a person to swipe left or right on the side sheet.

When predictive back is used:

- The side sheet detaches from the top and bottom edges of the screen to signal it will close
- The previous screen is revealed in a preview
- The side sheet and its content always scales in the direction of the gesture

[Find a list of compatible components](/m3/pages/gestures#22462fb2-fbe8-4e0c-b3e7-9278bd18ea0d)

## Accessibility

## Use cases

People should be able to dismiss the side sheet using assistive technology.

## Interaction & style

Material requires that a close affordance, such as a close icon button, is always present within a side sheet.

![Side sheet correctly designed with close icon in upper right corner.](https://lh3.googleusercontent.com/0LSf0hnC19HAyDDf88fqzUUo62971bFb2XWjHguURc3jJbZpy8ejGuIyFR-2MSFM27gLA3LjupVjSj8E5kEuDJG7IqeHD17NaXUOXKsEHdP8=s656)

*Caption / Legend:*
A close icon button makes the side sheet easy to dismiss

![Side sheet incorrectly designed with no close icon button.](https://lh3.googleusercontent.com/bGugN52A6j4bvI4smHp21cQzZbZv4qaF9YBYdKZDD51XL6yAkHSY_KVtpUF7HkL6G04T2w61MQeJo-E8SqmPJx6OuO9YMeBqpjP7AOhc_yNi=s656)

*Caption / Legend:*
Without a close icon button, people can’t predict the opening and closing flow of side sheets, or know if the sheet is transient or permanent

## Initial focus

Actions within a side sheet can be focused by tab order using a keyboard or switch control.

![Side sheet diagram showing the focus order of headline, close, save, cancel.](https://lh3.googleusercontent.com/MuS9aCeC3P_ukbbopUpL7M9rV8VhBbirg3UofV-_SA7g-v4ABLSE8zgMWQOlHo7WP5XEd7s-KyR15aPB360mGPFofc_F3uKb1Sy7iQ8iOZ0dGA=s1352)

*Caption / Legend:*
Visible focus shown on the available actions within a side sheet:

1. Headline
2. Close
3. Cancel
4. Save

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Focus lands on (non-disabled) icon button |
| **Space** or **Enter** | Activates the (non-disabled) icon button |

## Labeling

The accessibility role for a side sheet is **Dialog**.

![Side sheet showing the accessibility role as dialog.](https://lh3.googleusercontent.com/ogti7RlWzhZNIER0PGHxR2hM--wMncqBhexq_aLUiY6OPM1C5NeuaWV29SOOqi5gjdr7dGbCFrlPMnQ2hX5pgrWhVUrQVhUmESeeg09ZQhdB=s1352)

*Caption / Legend:*
The role for side sheets is **Dialog**
