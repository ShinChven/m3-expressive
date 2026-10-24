# App bars

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/app-bars](https://m3.material.io/components/app-bars)
> Last Updated: 2026-07-24T06:22:06.561Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Focus on describing the current page and provide 1–2 essential actions
- Displays labels and page navigation controls at the top of the page. (Use a toolbar to display page actions)
- Four variants: Search app bar, small, medium flexible, large flexible
- On scroll, apply a fill color to separate from body content
- Can animate on and off screen with another bar of controls, like a row of chips

![4 configurations of app bars stacked vertically to show differences.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlktxqjf-01.png?alt=media)

*Caption / Legend:*
1. Search app bar
2. Small
3. Medium flexible
4. Large flexible

## Availability & resources

## M3 Expressive update

**May 2025**
The new **search app bar** supports icons inside and outside the search bar, and centered text. It opens the [search view](/m3/pages/search/overview) component when selected. 

The new **medium flexible** and **large flexible** app bars come with significant improvements, and should replace **medium** and **large** app bars, which are no longer recommended. The **small** app bar is updated with the same flexible improvements. 

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Variants and naming:

- Renamed component from **top app bar** to **app bar**
- Added **search app bar**
- **Medium** and **large** app bars are no longer recommended
- Added **medium flexible** and **large flexible **app bars with:

- Reduced overall height
- Larger title text
- Subtitle
- Left- and center-aligned text options
- Text wrapping
- More flexible elements for imagery and filled buttons
- Added features to **small **app bar:

- Subtitle
- Center-aligned text option
- More flexible elements for imagery and filled buttons

![4 total app bar configurations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlku5356-05.png?alt=media)

*Caption / Legend:*
1. Search app bar
2. Small
3. Medium flexible
4. Large flexible

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- On scroll: No drop shadow, instead a color fill creates separation from content
- Typography: Larger default text
- Layout: Smaller default height

![M2 top app bar with elevation to separate it from main content.](https://lh3.googleusercontent.com/cBekWt7xDa8xEu5XXaem1OHo1sbSYkWtpPf8V_6QeBgGzxia-Ba6WoZDfUkaUvywiflh3J89oatLV3Zpqv4DupaDfVyy41vXxkxpDAnEqvaGtw=s1004)

*Caption / Legend:*
M2: Elevation and a drop shadow raise the top app bar when content is present underneath

![M3 app bar with subtle color difference from main content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlkui2vk-07.png?alt=media)

*Caption / Legend:*
M3: On scroll, a color fill overlay separates the app bar from the content beneath

## Specs

## Variants

![4 variants of app bars.](https://lh3.googleusercontent.com/MgtUMHWDy00vUnks39ztFGEG28QfDRkbQeSEcmqqCBT0K5FWc4uP_-7g3LLkrMJC-g76aUQW1xsZQ9AyyGhpc5G3-_Cs_d-CCP7HTCk6LlVi=s2048)

*Caption / Legend:*
1. Search app bar
2. Small
3. Medium flexible
4. Large flexible

### Baseline variants

The baseline M3 **medium** and **large** app bars are no longer recommended in M3 Expressive, and should be replaced with **medium flexible** and **large flexible** app bars, which are similar visually, but have multi-line support, a shorter height, and can contain a wide variety of elements, like images. [Jump to baseline app bar specs](/m3/pages/app-bars/specs#faec9baf-140f-41dc-8b88-2792e90d9d5d)

![2 baseline app bar variants, medium and large.](https://lh3.googleusercontent.com/4jbnUGWxs16YDyExE7HfAtikzuBERI0C_O6PT00TGtEezDt5SyYIv-V3mUOU_fOoUYk9hJ4uowBcG1c5bR86ChJqq1RQIhbX8Yp4YTMNnBP7CA=s2048)

*Caption / Legend:*
Baseline variants

1. Medium
2. Large

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Search app bar | -- | Available |
| Small | Available | Available |
| Center-aligned | Available | Merged into **small**.  Use centered-text configuration. |
| Medium (baseline) | Available | Not recommended. Use **medium flexible** |
| Medium flexible | -- | Available |
| Large (baseline) | Available | Not recommended. Use **large flexible** |
| Large flexible | -- | Available |

## Configurations

### Text alignment

![4 variants of app bars with different left and center aligned text headlines.](https://lh3.googleusercontent.com/BOvvsqx3bdHcU0IHwgEXTkgiwJuhU9DOQ6kiQLIdTQ8qiU9YfauXCNFb6HxOTs-PbX7r-OTeqQBlOav0aNXzUSe6JfDHP8zw2jDorA65wQo=s2048)

*Caption / Legend:*
Text labels, including supporting text, can be aligned to the leading edge or centered

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Text alignment | Leading edge (default) | Available | Available |
| Centered | -- | Available |  |

## Tokens & specs

Select a token set to view in the table's menu. App bar token sets are organized into a common token set, and size-specific tokens. [Learn about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: App bar - Common

*Common tokens for all app bars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.app-bar.search.trailing-space` | `md.sys.measurement.space100` | LENGTH | Search right padding |
| `md.comp.app-bar.search.leading-space` | `md.sys.measurement.space100` | LENGTH | Search left padding |
| `md.comp.app-bar.search.on-scroll.container.color` | `md.sys.color.surface-container-highest` | COLOR | Search container color on scroll |
| `md.comp.app-bar.search.label.color` | `md.sys.color.on-surface-variant` | COLOR | Search label color |
| `md.comp.app-bar.search.container.color` | `md.sys.color.surface-container` | COLOR | Search container color |
| `md.comp.app-bar.subtitle.color` | `md.sys.color.on-surface-variant` | COLOR | App bar subtitle text |
| `md.comp.app-bar.container.elevation` | `md.sys.elevation.level0` | ELEVATION | App bar container elevation |
| `md.comp.app-bar.title.color` | `md.sys.color.on-surface` | COLOR | App bar title text |
| `md.comp.app-bar.on-scroll.container.elevation` | `md.sys.elevation.level2` | ELEVATION | App bar container elevation on scroll |
| `md.comp.app-bar.leading-icon.color` | `md.sys.color.on-surface` | COLOR | App bar leading icon  |
| `md.comp.app-bar.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | App bar trailing icon  |
| `md.comp.app-bar.on-scroll.container.color` | `md.sys.color.surface-container` | COLOR | App bar container color on scroll |
| `md.comp.app-bar.container.color` | `md.sys.color.surface` | COLOR | App bar container color |
| `md.comp.app-bar.leading-space` | `md.sys.measurement.space50` | LENGTH | App bar left padding |
| `md.comp.app-bar.trailing-space` | `md.sys.measurement.space50` | LENGTH | App bar right padding |
| `md.comp.app-bar.icon-button-space` | `md.sys.measurement.space0` | LENGTH | App bar icon spacing |
| `md.comp.app-bar.container.shape` | `md.sys.shape.corner.none` | SHAPE | App bar container shape |
| `md.comp.app-bar.avatar.size` | 32dp | LENGTH | App bar avatar size |
| `md.comp.app-bar.icon.size` | 24dp | LENGTH | App bar icon size |

#### Design Tokens: App bar - Size - Small

*For the expressive small app bar and search app bar.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.app-bar.small.search.label-text.font` | `md.sys.typescale.body-large` | FONT_SIZE | Search title font |
| `md.comp.app-bar.small.search.container.shape` | `md.sys.shape.corner.full` | SHAPE | Search container shape |
| `md.comp.app-bar.small.search.container.height` | 56dp | LENGTH | Search container height |
| `md.comp.app-bar.small.icon.size` | 24dp | LENGTH | App bar small icon button size |
| `md.comp.app-bar.small.container.height` | 64dp | LENGTH | App bar small container height |
| `md.comp.app-bar.small.title.font` | `md.sys.typescale.title-large` | TYPOGRAPHY | App bar small title font |
| `md.comp.app-bar.small.subtitle.font` | `md.sys.typescale.label-medium` | TYPOGRAPHY | App bar small subtitle font |

#### Design Tokens: App bar - Size - Medium Flexible

*For the medium flexible app bar.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.app-bar.medium-flexible.with-subtitle.container.height` | 136dp | LENGTH | App bar medium flexible container height with subtitle |
| `md.comp.app-bar.medium-flexible.container.height` | 112dp | LENGTH | App bar medium flexible container height |
| `md.comp.app-bar.medium-flexible.title.font` | `md.sys.typescale.headline-medium` | TYPOGRAPHY | App bar medium Title font |
| `md.comp.app-bar.medium-flexible.subtitle.font` | `md.sys.typescale.label-large` | TYPOGRAPHY | App bar medium Subtitle font |

#### Design Tokens: App bar - Size - Large Flexible

*For the large flexible app bar.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.app-bar.large-flexible.with-subtitle.container.height` | 152dp | LENGTH | App bar large flexible container height with subtitle |
| `md.comp.app-bar.large-flexible.container.height` | 120dp | LENGTH | App bar large flexible container height |
| `md.comp.app-bar.large-flexible.title.font` | `md.sys.typescale.display-small` | TYPOGRAPHY | App bar large Title font |
| `md.comp.app-bar.large-flexible.subtitle.font` | `md.sys.typescale.title-medium` | TYPOGRAPHY | App bar large Subtitle font |


### Search component tokens & specs

The default search component tokens are used in the search app bar.

#### Design Tokens: Search - View

*For baseline search view and expressive search when activated.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.search-view.contained.background.color` | `md.sys.color.surface-container-low` | COLOR | Search view contained background color |
| `md.comp.search-view.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Search view container background elevation |
| `md.comp.search-view.header.input-text.color` | `md.sys.color.on-surface` | COLOR | Search view header input text color |
| `md.comp.search-view.header.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search view header supporting text color |
| `md.comp.search-view.header.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Search view header leading icon color |
| `md.comp.search-view.contained.docked.results.shape` | `md.sys.shape.corner.medium` | SHAPE | Search view contained docked results shape |
| `md.comp.search-view.contained.icon-label.gap` | `md.sys.measurement.space50` | LENGTH | Search view contained icon label gap |
| `md.comp.search-view.contained.full-screen.bar.container.height` | 56dp | LENGTH | Search view contained full screen bar container height |
| `md.comp.search-view.contained.docked.bar.shape` | `md.sys.shape.corner.full` | SHAPE | Search view contained docked bar shape |
| `md.comp.search-view.contained.docked.bar-results.gap` | `md.sys.measurement.space25` | LENGTH | Search view contained docked bar results gap |
| `md.comp.search-view.contained.trailing-margin` | `md.sys.measurement.space150` | LENGTH | Search view contained trailing margin |
| `md.comp.search-view.contained.leading-margin` | `md.sys.measurement.space150` | LENGTH | Search view contained leading margin |
| `md.comp.search-view.header.input-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search view header input text size |
| `md.comp.search-view.header.input-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search view header input text weight |
| `md.comp.search-view.header.input-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search view header input text tracking |
| `md.comp.search-view.header.input-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search view header input text line height |
| `md.comp.search-view.header.input-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search view header input text font |
| `md.comp.search-view.header.input-text.type` | - | TYPOGRAPHY | Search view header input text type |
| `md.comp.search-view.header.supporting-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search view header supporting text weight |
| `md.comp.search-view.header.supporting-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search view header supporting text tracking |
| `md.comp.search-view.header.supporting-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search view header supporting text size |
| `md.comp.search-view.header.supporting-text.type` | - | TYPOGRAPHY | Search view header supporting text type |
| `md.comp.search-view.header.supporting-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search view header supporting text font |
| `md.comp.search-view.header.supporting-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search view header supporting text line height |
| `md.comp.search-view.full-screen.container.shape` | `md.sys.shape.corner.none` | SHAPE | Search view full screen container shape |
| `md.comp.search-view.trailing-icon.label-trailing-icon-space` | `md.sys.measurement.space200` | LENGTH | Search view trailing icon label trailing icon space |
| `md.comp.search-view.leading-icon.leading-icon-label-space` | `md.sys.measurement.space200` | LENGTH | Search view leading icon leading icon label space |
| `md.comp.search-view.trailing-space` | `md.sys.measurement.space200` | LENGTH | Search view trailing space |
| `md.comp.search-view.leading-space` | `md.sys.measurement.space200` | LENGTH | Search view leading space |
| `md.comp.search-view.docked.header.container.height` | 56dp | LENGTH | Search view docked header container height |
| `md.comp.search-view.full-screen.header.container.height` | 72dp | LENGTH | Search view full screen header container height |
| `md.comp.search-view.docked.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Search view docked container shape |
| `md.comp.search-view.divider.color` | `md.sys.color.outline` | COLOR | Search view divider color |
| `md.comp.search-view.header.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Search view header trailing icon color |
| `md.comp.search-view.container.color` | `md.sys.color.surface-container-high` | COLOR | Search view container color |
| `md.comp.search-view.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Search view container surface tint layer color |

#### Design Tokens: Search - Bar

*For baseline search bar and expressive search.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.search-bar.supporting-text.type` | - | TYPOGRAPHY | Search bar supporting text type |
| `md.comp.search-bar.supporting-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search bar supporting text font |
| `md.comp.search-bar.supporting-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search bar supporting text weight |
| `md.comp.search-bar.supporting-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search bar supporting text size |
| `md.comp.search-bar.supporting-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search bar supporting text line height |
| `md.comp.search-bar.supporting-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search bar supporting text tracking |
| `md.comp.search-bar.contained.motion.spring` | `md.sys.motion.spring.fast.spatial` | CUSTOM_COMPOSITE | Search bar contained motion |
| `md.comp.search-bar.contained.trailing-actions.trailing-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained trailing actions trailing space |
| `md.comp.search-bar.contained.trailing-actions.leading-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained trailing actions leading space |
| `md.comp.search-bar.contained.trailing-actions.gap` | `md.sys.measurement.space0` | LENGTH | Search bar contained trailing actions gap |
| `md.comp.search-bar.contained.avatar.target-size` | 48dp | LENGTH | Search bar contained avatar target size |
| `md.comp.search-bar.contained.no-actions.trailing-space` | `md.sys.measurement.space200` | LENGTH | Search bar contained no actions trailing space |
| `md.comp.search-bar.contained.icon-label.gap` | `md.sys.measurement.space50` | LENGTH | Search bar contained icon label gap |
| `md.comp.search-bar.contained.no-actions.leading-space` | `md.sys.measurement.space200` | LENGTH | Search bar contained no actions leading space |
| `md.comp.search-bar.contained.trailing-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained trailing space |
| `md.comp.search-bar.contained.leading-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained leading space |
| `md.comp.search-bar.contained.trailing-margin` | `md.sys.measurement.space300` | LENGTH | Search bar contained pane trailing margin |
| `md.comp.search-bar.contained.leading-margin` | `md.sys.measurement.space300` | LENGTH | Search bar contained pane leading margin |
| `md.comp.search-bar.trailing-icon.label-trailing-icon-space` | `md.sys.measurement.space200` | LENGTH | Search bar trailing icon label trailing icon space |
| `md.comp.search-bar.leading-icon.leading-icon-label-space` | `md.sys.measurement.space200` | LENGTH | Search bar leading icon leading icon label space |
| `md.comp.search-bar.trailing-space` | `md.sys.measurement.space200` | LENGTH | Search bar trailing space |
| `md.comp.search-bar.leading-space` | `md.sys.measurement.space200` | LENGTH | Search bar leading space |
| `md.comp.search-bar.input-text.type` | - | TYPOGRAPHY | Search bar input text type |
| `md.comp.search-bar.input-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search bar input text font |
| `md.comp.search-bar.input-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search bar input text weight |
| `md.comp.search-bar.input-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search bar input text size |
| `md.comp.search-bar.input-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search bar input text line height |
| `md.comp.search-bar.input-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search bar input text tracking |
| `md.comp.search-bar.icon.size` | 24dp | LENGTH | Search bar icon size |
| `md.comp.search-bar.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Search bar container surface tint layer color |
| `md.comp.search-bar.avatar.size` | 30dp | LENGTH | Search bar avatar size |
| `md.comp.search-bar.avatar.shape` | `md.sys.shape.corner.full` | SHAPE | Search bar avatar shape |
| `md.comp.search-bar.container.shape` | `md.sys.shape.corner.full` | SHAPE | Search bar container shape |
| `md.comp.search-bar.container.height` | 56dp | LENGTH | Search bar container height |
| `md.comp.search-bar.input-text.color` | `md.sys.color.on-surface` | COLOR | Search bar input text color |
| `md.comp.search-bar.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar trailing icon color |
| `md.comp.search-bar.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Search bar container elevation |
| `md.comp.search-bar.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar supporting text color |
| `md.comp.search-bar.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Search bar leading icon color |
| `md.comp.search-bar.container.color` | `md.sys.color.surface-container-high` | COLOR | Search bar container color |
| `md.comp.search-bar.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Search bar focus indicator thickness |
| `md.comp.search-bar.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Search bar focus indicator offset |
| `md.comp.search-bar.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Search bar focus indicator color |
| `md.comp.search-bar.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Search bar pressed state layer opacity |
| `md.comp.search-bar.pressed.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar pressed supporting text color |
| `md.comp.search-bar.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Search bar pressed state layer color |
| `md.comp.search-bar.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Search bar hover state layer opacity |
| `md.comp.search-bar.hover.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar hover supporting text color |
| `md.comp.search-bar.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Search bar hover state layer color |


## Anatomy

![5 elements of the component.](https://lh3.googleusercontent.com/UCS56fBRH7I7KiKUuK_vBKPDUCV85-8G25OIOM9PxyVN3dgUEozWDPgj2liGjw8OI7X5PTD6n2Icr1V7sZOS-nxTjMPTIth4wlj9KfX7kUth=s2048)

*Caption / Legend:*
1. Container
2. Leading button
3. Trailing elements
4. Headline
5. Subtitle

App bars can be customized to include:

- An image or logo
- A subtitle
- A filled icon button

Avoid customizing the size of the heading and subtitle, or adding too many actions.

![3 app bars: 1 with a newspaper logo, 1 with a subtitle, and 1 with a filled icon button.](https://lh3.googleusercontent.com/Fwsip8AL-32WvFsouymOxtfDAK9nsgZu6JggbrZsEe1uIQ8Tm8E48NLKY4SPX1C687pcmu65V9xyHu3pme-1kwEyl5YsC1OFfJAKZlLlAGmI=s1352)

*Caption / Legend:*
The app bar can have different layouts depending on which elements are shown

### Search

The search app bar can include trailing actions inside and outside the search bar. When the search bar is selected, it should open the search view component.

![5 elements of the search app bar.](https://lh3.googleusercontent.com/OCgIkeJ9Mk6ibxz6tz0uSYOLL4zgYINQJdBhE0uqKG_KivTrv_i-4wbgiz0sNLxmAymZPsvXyPnH2i49hWvgI39jvCv0yra8PF-vnxPR3xFt=s2048)

*Caption / Legend:*
1. Container
2. Leading icon button
3. Hinted search text
4. Trailing icon or avatar
5. Search container

![3 layouts of icons in the search app bar.](https://lh3.googleusercontent.com/T7dF8lnMsgF-ctH-bJxhvlTFNYfNCtaKFJ3_kWhNeWOT70jVcz5e2K6dcCMdvyTEMMwCh0VusP7U_cQT5PbY5eBTpwClU8jQPYWIUhRPfLImPA=s2048)

*Caption / Legend:*
1. A leading element and a trailing element outside search
2. A leading element, a trailing element inside search, and a trailing element outside search
3. A leading element and two trailing elements outside search

### Image

An image can be placed in the app bar. In small app bars, this can replace the label text.

![Graphic replacing text headline content.](https://lh3.googleusercontent.com/rM0ncqi1MU1B-iUCqpNvS1r6GIsPwybXwHKtPEB0hAo1k3NMLM3dqUpH_NK-k9vOlihsEFSneMWwVTYCaF5nWJOEPpRUupcrtmDHCB0C3d8a=s2048)

*Caption / Legend:*
Images can be added to app bars and can replace label text on small app bars

### Filled trailing icon button

The app bar's trailing icon buttons can be replaced with a single, primary, or tonal filled icon button in default or wide sizes.

![App bars configured with filled trailing icons.](https://lh3.googleusercontent.com/-4xgb9ld5H8Q6HnmK-ld1O5qM0mfNJy_2WtE_WggmW1lbxjvzZp6GwimCbCZ92GiXuzdak-pBH-hlzbZ-oyphKRiho2Myrlsaal8-7UtKjqa=s2048)

*Caption / Legend:*
The trailing icons can be configured to be a single filled icon button

### Subtitle

![App bars configured with subtitles below their headlines.](https://lh3.googleusercontent.com/v37338PXuQO2QKzvv6eDPG3ATToEprV5f1RbgAP6J85Kkk5uUpqPb3M3U7L3YgKxNTDd_UlhkKMBrpc3PYRL8WgyTS5aax6L2gOQWYwxfsRo=s2048)

*Caption / Legend:*
The medium flexible and large flexible app bars hug the text contents, so they are taller when a subtitle is visible

1. Small
2. Small with subtitle
3. Medium flexible
4. Medium flexible with subtitle
5. Large flexible
6. Large flexible with subtitle

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

All app bars share the same color roles. On scroll, the container changes color to **surface container**.

![4 color roles of the leading edge app bar in light and dark scheme.](https://lh3.googleusercontent.com/xpRALH4p7nwRTCrQbJRWXJjjKyr6SI9Lcz7DShFjgvTK8Zsvl45I69Y-m1OfJcWkp9Cc3cOV4UyCqZzo60kRaRSgGeatz80PbrGnGv1DQpXO=s2048)

*Caption / Legend:*
App bar color roles used for light and dark themes:

1. Surface
2. On surface
3. On surface variant
4. On surface
5. On surface variant
6. Surface container (on scroll)

![4 color roles of the center-aligned app bar in light and dark scheme.](https://lh3.googleusercontent.com/VsxxC6080HgD_QsQ6TLzafi0UFXVHAU3R4k2NDE144aZQBU9CYNjEOCd7tPTV3ur_gcYzZJO3LezRLYaNLoPcQnYpyuyQyH-C8KLRv1eIC2C=s2048)

*Caption / Legend:*
Search app bar color roles used for light and dark themes:

1. Surface
2. On surface variant
3. On surface variant
4. On surface variant
5. Surface container
6. Surface container
7. Surface container highest

### Scroll states

![Color roles for app bars when flat and on scroll.](https://lh3.googleusercontent.com/tRaHBa-YYJoR3wAF4m6Sr9plFPu3juGtThHBYYsKPfs-6nHxwPrhg7vEpJfwSA6hfyjHrl6k4Tzh4Z6WC95kDllNp9Q5nYiRXO_KpYBKsrIqiQ=s2048)

*Caption / Legend:*
The app bar changes color when flat or on scroll. The search bar can also change color on scroll.

1. Flat
2. On scroll

## Measurements

### Search app bar

![Search app bar size and padding measurements.](https://lh3.googleusercontent.com/GLzA-Bs2FesMv8_iNKDnGK-rmtF4_QBlkamCvjO3g0PR4Ohvu51Whqg_8UDbMF2Be0V0fNt2yy_YIYhbkBa3RaH32GCEcE7CYs7Qk7aJDWg=s2048)

*Caption / Legend:*
Search app bar padding and size measurements

### Small app bar

![Small app bar size and padding measurements.](https://lh3.googleusercontent.com/ZwtGrnk6IwZVeEjENYgXaaBm1o78pMZeWbKEvSKrXMaC4EsY1x5d6AyMOmeP5xBxsEtomfWPfRQeyjo9aj5TUCZfqTZ6DExOrrf4lPD6skGwOQ=s2048)

*Caption / Legend:*
Small app bar padding and size measurements

### Medium flexible app bar

![Medium flexible app bar padding and size measurements.](https://lh3.googleusercontent.com/tO6HUsX_WzDWijRcUovy7YHYqXB9nFkpIdJ1rb9xRF1f53fb5lfigX2U4DhrYnf54WpJxf_VMpqs2fVNtnQwzv1gxreCwgyge4K5p9WC71BK=s2048)

*Caption / Legend:*
Medium flexible app bar padding and size measurements

### Large flexible app bar

![Large flexible app bar padding and size measurements](https://lh3.googleusercontent.com/LZMvu4Uh6hlTMMN4lXncpG5Pl1yEm5A90QCK9BFFHrKogTsNr1PAWKpJ0su8E4BmXMOdKMzH3jk2BGZJcqrSGZ1AFOK40R6D9QHkBuhtEqgI=s2048)

*Caption / Legend:*
Large flexible app bar padding and size measurements

## Baseline app bars

The **medium** and **large** app bars are no longer recommended in M3 Expressive. Use the **medium flexible** and **large flexible** app bars in their place.

![4 elements of medium and large app bars.](https://lh3.googleusercontent.com/spB1ibTSmb0Q0vxy5WCz5hWULWcRYZTwf1gzkHBzBAOOx1kjBmF9_rN3rFooHw8wbZdYdo2piv_rickk6jDEeIefd5ZOWM6Gq7kaaLqNRZib=s2048)

*Caption / Legend:*
Medium and large app bars have the same elements:

1. Container
2. Leading button
3. Trailing icons
4. Headline

### Tokens & specs

Select a token set to view in the table's menu. Baseline app bar token sets are organized into medium, large, and older baseline token sets. [Learn about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: App bar - Size - Medium (baseline)

*For the baseline medium app bar. In expressive, consider using medium flexible instead `md.comp.app-bar.medium-flexible`.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.app-bar.medium.icon.size` | 24dp | LENGTH | App bar medium icon button size |
| `md.comp.app-bar.medium.subtitle.font` | `md.sys.typescale.label-large` | TYPOGRAPHY | App bar medium subtitle font |
| `md.comp.app-bar.medium.container.height` | 112dp | LENGTH | App bar medium container height |
| `md.comp.app-bar.medium.title.font` | `md.sys.typescale.headline-small` | TYPOGRAPHY | App bar medium title font |

#### Design Tokens: App bar - Size - Large (baseline)

*For the baseline large app bar. In expressive, consider using large flexible instead `md.comp.app-bar.large-flexible`.
*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.app-bar.large.icon.size` | 24dp | LENGTH | App bar large icon button size |
| `md.comp.app-bar.large.subtitle.font` | `md.sys.typescale.title-medium` | TYPOGRAPHY | App bar large subtitle font |
| `md.comp.app-bar.large.container.height` | 152dp | LENGTH | App bar large container height |
| `md.comp.app-bar.large.title.font` | `md.sys.typescale.headline-medium` | TYPOGRAPHY | App bar large title font |

#### Design Tokens: [Deprecated] Top app bar - Small

*This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.small` tokens instead.

Original tokens for the small top app bar.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.top-app-bar.small.on-scroll.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Top app bar (small) on scroll container elevation |
| `md.comp.top-app-bar.small.headline.color` | `md.sys.color.on-surface` | COLOR | Top app bar (small) headline color |
| `md.comp.top-app-bar.small.headline.type` | - | TYPOGRAPHY | Type style |
| `md.comp.top-app-bar.small.headline.font` | `md.sys.typescale.title-large.font` | FONT_NAMES | Top app bar (small) headline font |
| `md.comp.top-app-bar.small.headline.weight` | `md.sys.typescale.title-large.weight` | FONT_WEIGHT | Top app bar (small) headline weight |
| `md.comp.top-app-bar.small.headline.size` | `md.sys.typescale.title-large.size` | FONT_SIZE | Top app bar (small) headline size |
| `md.comp.top-app-bar.small.headline.line-height` | `md.sys.typescale.title-large.line-height` | LINE_HEIGHT | Top app bar (small) headline height |
| `md.comp.top-app-bar.small.headline.tracking` | `md.sys.typescale.title-large.tracking` | FONT_TRACKING | Top app bar (small) headline tracking |
| `md.comp.top-app-bar.small.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Top app bar (small) trailing icon color |
| `md.comp.top-app-bar.small.trailing-icon.size` | 24dp | LENGTH | Top app bar (small) trailing icon size |
| `md.comp.top-app-bar.small.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Top app bar (small) leading icon color |
| `md.comp.top-app-bar.small.leading-icon.size` | 24dp | LENGTH | Top app bar (small) leading icon size |
| `md.comp.top-app-bar.small.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Top app bar (small) container elevation |
| `md.comp.top-app-bar.small.container.height` | 64dp | LENGTH | Top app bar (small) container height |
| `md.comp.top-app-bar.small.container.shape` | `md.sys.shape.corner.none` | SHAPE | Top app bar (small) container shape |
| `md.comp.top-app-bar.small.on-scroll.container.color` | `md.sys.color.surface-container` | COLOR | Top app bar (small) on-scroll container color |
| `md.comp.top-app-bar.small.container.color` | `md.sys.color.surface` | COLOR | Top app bar (small) container color |
| `md.comp.top-app-bar.small.on-scroll.container.shadow-color` | `md.sys.color.shadow` | COLOR | Top app bar (small) on scroll container shadow color |
| `md.comp.top-app-bar.small.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Top app bar (small) container surface tint layer color |

#### Design Tokens: [Deprecated] Top app bar - Medium

*This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.medium` tokens instead. Original tokens for the medium top app bar.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.top-app-bar.medium.headline.color` | `md.sys.color.on-surface` | COLOR | Top app bar (medium) headline color |
| `md.comp.top-app-bar.medium.headline.type` | - | TYPOGRAPHY | Type style |
| `md.comp.top-app-bar.medium.headline.font` | `md.sys.typescale.headline-small.font` | FONT_NAMES | Top app bar (medium) headline font |
| `md.comp.top-app-bar.medium.headline.weight` | `md.sys.typescale.headline-small.weight` | FONT_WEIGHT | Top app bar (medium) headline weight |
| `md.comp.top-app-bar.medium.headline.size` | `md.sys.typescale.headline-small.size` | FONT_SIZE | Top app bar (medium) headline size |
| `md.comp.top-app-bar.medium.headline.line-height` | `md.sys.typescale.headline-small.line-height` | LINE_HEIGHT | Top app bar (medium) headline height |
| `md.comp.top-app-bar.medium.headline.tracking` | `md.sys.typescale.headline-small.tracking` | FONT_TRACKING | Top app bar (medium) headline tracking |
| `md.comp.top-app-bar.medium.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Top app bar (medium) trailing icon color |
| `md.comp.top-app-bar.medium.trailing-icon.size` | 24dp | LENGTH | Top app bar (medium) trailing icon size |
| `md.comp.top-app-bar.medium.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Top app bar (medium) leading icon color |
| `md.comp.top-app-bar.medium.leading-icon.size` | 24dp | LENGTH | Top app bar (medium) leading icon size |
| `md.comp.top-app-bar.medium.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Top app bar (medium) container elevation |
| `md.comp.top-app-bar.medium.container.height` | 112dp | LENGTH | Top app bar (medium) container height |
| `md.comp.top-app-bar.medium.container.shape` | `md.sys.shape.corner.none` | SHAPE | Top app bar (medium) container shape |
| `md.comp.top-app-bar.medium.container.color` | `md.sys.color.surface` | COLOR | Top app bar (medium) container color |
| `md.comp.top-app-bar.medium.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Top app bar (medium) container surface tint layer color |

#### Design Tokens: [Deprecated] Top app bar -  Large

*This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.large` tokens instead. Original tokens for the large top app bar.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.top-app-bar.large.headline.color` | `md.sys.color.on-surface` | COLOR | Top app bar (large) headline color |
| `md.comp.top-app-bar.large.headline.type` | - | TYPOGRAPHY | Type style |
| `md.comp.top-app-bar.large.headline.font` | `md.sys.typescale.headline-medium.font` | FONT_NAMES | Top app bar (large) headline font |
| `md.comp.top-app-bar.large.headline.weight` | `md.sys.typescale.headline-medium.weight` | FONT_WEIGHT | Top app bar (large) headline weight |
| `md.comp.top-app-bar.large.headline.size` | `md.sys.typescale.headline-medium.size` | FONT_SIZE | Top app bar (large) headline size |
| `md.comp.top-app-bar.large.headline.line-height` | `md.sys.typescale.headline-medium.line-height` | LINE_HEIGHT | Top app bar (large) headline height |
| `md.comp.top-app-bar.large.headline.tracking` | `md.sys.typescale.headline-medium.tracking` | FONT_TRACKING | Top app bar (large) headline tracking |
| `md.comp.top-app-bar.large.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Top app bar (large) trailing icon color |
| `md.comp.top-app-bar.large.trailing-icon.size` | 24dp | LENGTH | Top app bar (large) trailing icon size |
| `md.comp.top-app-bar.large.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Top app bar (large) leading icon color |
| `md.comp.top-app-bar.large.leading-icon.size` | 24dp | LENGTH | Top app bar (large) leading icon size |
| `md.comp.top-app-bar.large.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Top app bar (large) container elevation |
| `md.comp.top-app-bar.large.container.height` | 152dp | LENGTH | Top app bar (large) container height |
| `md.comp.top-app-bar.large.container.shape` | `md.sys.shape.corner.none` | SHAPE | Top app bar (large) container shape |
| `md.comp.top-app-bar.large.container.color` | `md.sys.color.surface` | COLOR | Top app bar (large) container color |
| `md.comp.top-app-bar.large.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Top app bar (large) container surface tint layer color |

#### Design Tokens: [Deprecated] Top app bar - Small, Center-aligned

*This token set is deprecated. Use `md.comp.app-bar` and `md.comp.app-bar.small` tokens instead. 

Original component tokens for the center-aligned top app bar. *

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.top-app-bar.small.centered.on-scroll.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Top app bar (small) on scroll container elevation |
| `md.comp.top-app-bar.small.centered.headline.color` | `md.sys.color.on-surface` | COLOR | Top app bar (small centered) headline color |
| `md.comp.top-app-bar.small.centered.headline.type` | - | TYPOGRAPHY | Type style |
| `md.comp.top-app-bar.small.centered.headline.font` | `md.sys.typescale.title-large.font` | FONT_NAMES | Top app bar (small centered) headline font |
| `md.comp.top-app-bar.small.centered.headline.weight` | `md.sys.typescale.title-large.weight` | FONT_WEIGHT | Top app bar (small centered) headline weight |
| `md.comp.top-app-bar.small.centered.headline.size` | `md.sys.typescale.title-large.size` | FONT_SIZE | Top app bar (small centered) headline size |
| `md.comp.top-app-bar.small.centered.headline.line-height` | `md.sys.typescale.title-large.line-height` | LINE_HEIGHT | Top app bar (small centered) headline height |
| `md.comp.top-app-bar.small.centered.headline.tracking` | `md.sys.typescale.title-large.tracking` | FONT_TRACKING | Top app bar (small centered) headline tracking |
| `md.comp.top-app-bar.small.centered.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Top app bar (small centered) trailing icon color |
| `md.comp.top-app-bar.small.centered.trailing-icon.size` | 24dp | LENGTH | Top app bar (small centered) trailing icon size |
| `md.comp.top-app-bar.small.centered.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Top app bar (small centered) leading icon color |
| `md.comp.top-app-bar.small.centered.leading-icon.size` | 24dp | LENGTH | Top app bar (small centered) leading icon size |
| `md.comp.top-app-bar.small.centered.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Top app bar (small centered) container surface tint layer color |
| `md.comp.top-app-bar.small.centered.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Top app bar (small centered) container elevation |
| `md.comp.top-app-bar.small.centered.container.height` | 64dp | LENGTH | Top app bar (small centered) container height |
| `md.comp.top-app-bar.small.centered.container.shape` | `md.sys.shape.corner.none` | SHAPE | Top app bar (small centered) container shape |
| `md.comp.top-app-bar.small.centered.container.color` | `md.sys.color.surface` | COLOR | Top app bar (small centered) container color |
| `md.comp.top-app-bar.small.centered.on-scroll.container.color` | `md.sys.color.surface-container` | COLOR | Top app bar (small centered) on-scroll container color |
| `md.comp.top-app-bar.small.centered.avatar.shape` | `md.sys.shape.corner.full` | SHAPE | Top app bar (small) on scroll avatar shape |
| `md.comp.top-app-bar.small.centered.avatar.size` | 30dp | LENGTH | Top app bar (small) on scroll avatar size |
| `md.comp.top-app-bar.small.centered.on-scroll.container.shadow-color` | `md.sys.color.shadow` | COLOR | Top app bar (small) on scroll container shadow color |


### Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![4 color roles of the medium top app bar in light and dark scheme.](https://lh3.googleusercontent.com/a4e5waYXECuiUcxK2FX7nimSG7veFWYYiISRWkojPDXodUOqnLT2npaBpJhmc1AUBfOr9G3hcZ4TmUi9jLCRUdP0IqDw5pTdSCFYgc-zXcs=s2048)

*Caption / Legend:*
Medium top app bar color roles used for light and dark schemes:

1. Surface
2. On surface
3. On surface
4. On surface variant

### Measurements

#### Medium app bar

![Diagram of medium app bar padding and size measurements.](https://lh3.googleusercontent.com/iJPK4tOaZD9dNaqh6nZnimQR2kRKofGNS-fhCmjPY4mo8cyDKbIJg5nY8Osnxa7EVzTNNSIkA_3OqGAYWX8FJbOMxCThqTI6CocN1Ltci4sSaA=s2048)

*Caption / Legend:*
Medium app bar padding and size measurements

#### Large app bar

![Diagram of large app bar padding and size measurements.](https://lh3.googleusercontent.com/JaHOGKnlXOrSArCuG_UGfPN8Muth2rZ_WwBu0ZlvUPFvU8HdVdkDWZoz1M3pm1GB7vw8o_IUE-So65otchOt2cHBpzKsOJTdm2N5uw2aBc-A=s2048)

*Caption / Legend:*
Large app bar padding and size measurements

## Guidelines

![4 app bars with headlines and action icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnt9v4x-01.png?alt=media)

*Caption / Legend:*
App bars show information about the page, key actions, and navigation actions like **Back** or **Menu**

## Usage

Use an app bar to provide content and actions related to the current page, such as page navigation actions, headlines, images, and 1–2 essential actions.

The information and actions in the app bar should be contextual and specific to a page, but can also include global product controls, such as search or notifications.

![App bar with navigation icon buttons and a 2-line title.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntdon8-02.png?alt=media)

*Caption / Legend:*
App bars provide content and actions related to the current page

App bars should only have one action, two if necessary.

The primary action should alter or exit the entire page, like **Send**, **Save**, or **Edit**.

If the product has many actions, place those in a toolbar. Avoid placing an overflow menu in the app bar when possible.

![App bar with content below.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnth1j3-03.png?alt=media)

*Caption / Legend:*
App bars can display one high visibility action to boost its prominence

To boost visibility of a primary action, change the style of the icon button to filled or tonal, and consider using a wide icon button.

Avoid using multiple filled or tonal buttons.

![App bar with 1 filled button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntiy4b-04-do.png?alt=media)

*Caption / Legend:*
Use a filled or tonal button for important actions

![App bar with 2 filled buttons, side by side.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntjjnv-05-dont.png?alt=media)

*Caption / Legend:*
Don’t put multiple filled or tonal buttons in the app bar

The four variants of app bars are:

1. **Search app bar**
Use on home pages when search is key to the product.
2. **Small**
Use in dense layouts or when a page is scrolled.
3. **Medium flexible**
Use to display a larger headline. It can collapse into a small app bar on scroll.
4. **Large flexible**
Use to emphasize the headline of the page.

![The 4 app bar variants.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntmieq-06.png?alt=media)

*Caption / Legend:*
1. Search app bar
2. Small
3. Medium flexible
4. Large flexible

### Baseline app bars

There are two baseline app bars that are no longer recommended:

1. **Medium**
Replace with medium flexible.
2. **Large**
Replace with large flexible.

![2 baseline app bars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntnwot-07.png?alt=media)

*Caption / Legend:*
1. Medium
2. Large

## Search app bar

Use a search app bar to provide an emphasized entry-point to open the search view.

![A search bar within an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntr0ls-08.png?alt=media)

*Caption / Legend:*
Search app bars have a search field instead of heading text

Search bars should always include the word **Search**. They can use various capitalization styles depending on the product.

1. **Search**
2. Searching a specific area
Example: **Search inbox**
3. Search [Product] 
Example: **Search Photos**

![3 examples of search text in an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntrvt2-09.png?alt=media)

*Caption / Legend:*
Use proper capitalization depending on what’s being searched

### Buttons in search app bar

In addition to a trailing avatar, search app bars can have up to two trailing icons on mobile.

Trailing icons can be placed inside or outside the search bar.

![2 icons placed in the search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntvpyq-10.png?alt=media)

*Caption / Legend:*
Put the most used actions on the left and least used on the right

The leading element of a search app bar can be used for a product’s logo to brand the app’s overall experience. 

This logo can be purely cosmetic, or can trigger an action like returning to the home screen or refreshing it.

Avoid using a logo to open an expanded navigation rail.

![A search app bar with a logo, search bar, and avatar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlntz91y-11.png?alt=media)

*Caption / Legend:*
The leading element can be a product logo

Don’t use more than two trailing icon buttons with an avatar. 

If more actions are needed, place them in a toolbar instead.

![3 icons placed in a search app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnu01cf-12-Dont.png?alt=media)

*Caption / Legend:*
Don’t use three icons and an avatar in a search app bar

### Large screens

The search app bar dynamically adapts to available width. There should be up to four trailing icons on larger screens.

![4 actions placed in a search app bar on a large screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnu4je0-13.png?alt=media)

*Caption / Legend:*
Increased horizontal space on larger screens allows for up to four trailing icons.

### Alternate color options

By default, search containers in app bars use the **surface container** color to distinguish it from the app background. If the background is darker, use a lighter container color on the search bar, like **surface bright**.

When choosing alternate colors, make sure the search text and container have at least 3:1 contrast for readability.

![App bar with a light search container color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnu68g2-14.png?alt=media)

*Caption / Legend:*
Search app bars can use different colors, like **surface bright**, for improved contrast with surrounding elements

## Anatomy

![ Diagram of app bar layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnub2xp-15.png?alt=media)

*Caption / Legend:*
1. Container
2. Headline
3. Trailing icons
4. Subtitle
5. Leading button

### Container

The app bar container holds all information and actions at the top of a screen, including navigation icons, headlines, and buttons.

Avoid changing the position or shape of the container.

![App bar with square corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuf0r2-16-do.png?alt=media)

*Caption / Legend:*
Use straight corners for app bars

![App bar with curved corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnugbt5-17-dont.png?alt=media)

*Caption / Legend:*
Don’t use curved shapes. This implies that the container can expand upon interaction.

Always use the default height of the app bar, and make it span the full width of the window.

![App bar at default height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuiiym-18-Do.png?alt=media)

*Caption / Legend:*
Default heights were chosen to ensure readability of on-screen elements

![App bar with reduced height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuja9a-19-Don't.png?alt=media)

*Caption / Legend:*
Don't make an app bar shorter than its default height

### Adding logos

Image logos can be used in app bars to bolster brand identity or visual appeal.

The image should be high quality and pertinent, and shouldn’t disrupt the app bar's functionality.

![A logo added to an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuliot-20.png?alt=media)

*Caption / Legend:*
Image logos can replace all text in small app bars, and appear above the text in other app bars

### Leading button

The leading button should be used for navigating the product.

It typically is one of the following:

- A menu icon, which opens a modal expanded navigation rail
- A back arrow, which returns to the previous screen

![Leading navigation icon aligned on left of app bar](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnumedg-21.png?alt=media)

*Caption / Legend:*
1. Leading **Back** button

### Headline

The headline can describe:

- The current page
- The current section
- The product

Headline text should be brief enough to easily fit in the app bar.

In medium flexible and large flexible app bars, the headline can wrap to a second line.

Don’t truncate the headline text.

![App bar headline text set in 2 lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnurf1u-22-Do.png?alt=media)

*Caption / Legend:*
If headline text is long, use a medium flexible or large flexible app bar and wrap the headline to two lines maximum

![Small app bar headline text wrapped on 2 lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnus8yg-23-Don't.png?alt=media)

*Caption / Legend:*
Don’t wrap text in a small app bar

Headlines can be aligned to the leading edge or centered.

The headline’s typography size and style change depending on the app bar variant.

![Search, small, medium and large flexible app bars with headline styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnuwnod-24.png?alt=media)

*Caption / Legend:*
Headline typography style for each app bar

1. Search: Body large
2. Small: Title large
3. Medium flexible: Headline medium
4. Large flexible: Display small

### Subtitle

Subtitles can add additional context to a page.

These can be leading-aligned or center-aligned with the headline text.

![Small to large flexible app bars with headline and subtitle styles.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvaru4-25.png?alt=media)

*Caption / Legend:*
Subtitle typography style for each app bar:

1. Small: Label medium
2. Medium flexible: Label large
3. Large flexible: Title medium

### Trailing icon buttons

Up to two icon buttons can be placed after the headline, aligned to the trailing edge of the app bar. Place most-used actions closest to the leading edge.

Avoid using these buttons to open a menu with more actions. If more actions are needed, place them in a toolbar instead.

If changing the icon button color style to filled or tonal, only use one icon button.

![2 icons placed to right of headline, from most to least used.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvbo80-26.png?alt=media)

*Caption / Legend:*
Put the most used actions on the left and least used on the right

Use filled icons when possible for the best visibility. Outlined icons can also be used, particularly for unselected toggle buttons.

![App bar with 2 filled icons, “save” and “download.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvcdyc-27-Do.png?alt=media)

*Caption / Legend:*
Use filled icons for clear, visible actions

![App bar with 2 outlined icons, “save” and “download.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlnvcyu3-28-Caution.png?alt=media)

*Caption / Legend:*
Outlined icons can be used as needed, or when using toggle buttons

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](/m3/pages/layout-overview/adaptive-design)

### Resizing

The width of the app bar container responds to the view or device width.

It should always span 100% of the window width.

Resizing may cause actions at the trailing edge of the app bar to collapse into an overflow menu at smaller breakpoints.

These actions become visible again at larger sizes.

The search container of the search app bar should fill 100% of the space between leading and trailing app bar elements until it reaches 312dp. Then, it should only grow further to fill 50% of that space.

### Presentation

The app bar automatically supports right-to-left (RTL) languages by aligning the layout of elements to the leading and trailing edges of the container.

This means that in RTL languages, the layout of the app bar is mirrored.

![App bar in RTL with Hebrew text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlp6doc5-32.png?alt=media)

*Caption / Legend:*
The app bar’s layout is mirrored for right-to-left (RTL) languages

## Behavior

### Scrolling

App bars should initially be the same color as the background, then fill with a contrasting color on scroll to provide visual separation from the background.

The app bar can remain on a page at all times, or can hide and reappear when scrolling.

To focus more on body content, consider setting the app bar container to be transparent on scroll. This allows the buttons to float above the content.

Make sure icon buttons have a container fill.

Consider using narrow-width icon buttons for actions, like **Back**, to reduce the amount of space they take up.

Selecting the search bar should open the search view component.

When scrolled, **medium flexible** and **large flexible** app bars can transform into **small** app bars. They should remain small until the page is scrolled back to the top. Don’t transform app bars into a **search app bar**.

## XR

starNote:This is a rapidly changing space. Guidelines are primarily intended for designers at this time. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR-specific app bar with custom specs and guidance. See [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Types & configurations

There is one app bar orbiter. It closely aligns with the small app bar. It can be configured to be center-aligned or left-aligned.

![Center and left-aligned app bar orbiters.](https://lh3.googleusercontent.com/PYHwyx3K5m9cJiev6I-MKCs6A60Tc5AZcpBzBcqqGQLSQMnOmNCuR1s8uzfsiZI_Yh3_LoLN1rFIo5dUEv89LWBnr3n7Qobo3yHChEb5_MJK_A=s2048)

*Caption / Legend:*
1. Center-aligned app bar
2. Left-aligned app bar

## Anatomy

![Diagrams of app bar orbiters identifying 4 internal elements.](https://lh3.googleusercontent.com/O1YVMPmvL54Qi15A17QmKNzQhv18CgDcmtGdGFtfK60IHEQNqSPp3BAdAJjZugpdBhS_ZoF3t3xcuyZcTP9McxR1FEaLkkluyBbkYPRVDnLduQ=s2048)

*Caption / Legend:*
1. Container
2. Headline
3. Trailing icons
4. Leading icon

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the app bar displays above the spatial panel on the Z-axis. Elevated app bars can use any of these color options:

![3 versions of app bar elevation color strategy.](https://lh3.googleusercontent.com/7PoV7x7SsxMju6tTGEHlmT5PdcZ8VVSnzTFYcEIZlLBeIUXbp9RB9T0zphIoaYJFyzQfZyOa2AOpYIANWae0FLpDv1_lqMawI9R0TgXvjcA5=s2048)

*Caption / Legend:*
1. Surface container
2. Surface container high
3. Surface container highest

## Measurements

![Diagrams with measurements and padding for app bar orbiters.](https://lh3.googleusercontent.com/_ROPguXE9EGmEjUSfBAPGksGu_cWhxmyKG7GLSG_qlgGQIpuD8cgrumMEgAPKdaXuxLWFZOqfUEnu6WAqapCHjBPbx1ytlUpSG7_nD0LgA2Z=s2048)

*Caption / Legend:*
Measurements and padding for app bar orbiters

## Usage

An app bar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular app bar on the same plane as the body content to mimic a 2D experience.

## Behavior

### Global context

When placed in global context, the orbiter is centered at the top of the app it controls.

It stays anchored to the app during layout or content changes.

This ensures navigation elements are always easy to find and use.

### Local context

When placed in local context, the orbiter is centered at the top of the spatial panel it controls.

It repositions in response to layout or content changes.

### Additional app bars

In most cases, apps should only have one app bar orbiter, placed in global context.

## Placement

### Offset and inset positioning

![App bar orbiter with offset positioning.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu63wr-01-do.png?alt=media)

*Caption / Legend:*
Include a 20dp margin. This visually separates the app bar orbiter from the spatial panel, and prevents content obstruction.

![App bar orbiter with inset positioning.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu6wj2-01-dont.jpg?alt=media)

*Caption / Legend:*
Don’t overlap the app bar orbiter and spatial panel

### Horizontal alignment

![An app bar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu80gp-02-do.png?alt=media)

*Caption / Legend:*
Always align the app bar orbiter within the bounds of nearby spatial panels

![An app bar orbiter that extends beyond the width of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagu91ed-02-dont.png?alt=media)

*Caption / Legend:*
The app bar orbiter shouldn’t exceed the width of adjacent spatial panels

### Spatial panel alignment

By default, app bar orbiters are center-aligned to the spatial panel. Their width and placement can be adjusted to accommodate specific user needs, such as improved ergonomics or right-to-left (RTL) languages.

### Width boundaries

An app bar orbiter’s width should adjust to stay in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

This makes crucial navigation elements easy to find.

![An app bar orbiter with a width that fits in a person’s field of view.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaguc0nf-01-do.png?alt=media)

*Caption / Legend:*
Adjust the width of the app bar orbiter to fit in a person’s field of view

It’s not recommended to increase the width of an app bar orbiter beyond a person’s natural [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

This creates a visual imbalance and makes it difficult to find navigation elements.

![An app bar orbiter that exceeds the panel’s width and a person’s field of view.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagv5qxq-02-dont.png?alt=media)

*Caption / Legend:*
Avoid expanding the app bar orbiter beyond the adjacent panel’s width and a person’s field of view

### Adaptable width

When placed in a local context, an app bar orbiter can expand to the width of its adjacent spatial panel.

Be sure the orbiter stays in a person’s field of view, and test for usability.

## Accessibility considerations

[XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app) guidelines are still evolving. XR app bars should follow applicable Material [app bar accessibility standards](/m3/pages/app-bars/accessibility).

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Understand what page they’re currently visiting
- Take actions or navigate to a new page destination
- Maintain access to app bar actions when the content is scrolled

## Interaction & style

### Touch

When tapping on an icon button, a touch ripple appears, indicating interaction feedback.

### Cursor

When hovered, the hover state provides a visual cue to the user that the element is interactive.

When clicked (in both active and inactive states), a ripple appears to indicate feedback.

### Keyboard or switch

When navigating to an interactive element, a focus indicator appears to show that action can be taken.

When the element is selected, an action is then performed.

### Initial focus

Focus should initially land on the leading button, since it’s the first interactive element of the app bar.

![The tab button is used to navigate from the first button to the second button in the app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos7r6g-04.png?alt=media)

*Caption / Legend:*
Use **Tabs** to navigate through interactive items

![The space or enter button activates the second action.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos8gq8-05.png?alt=media)

*Caption / Legend:*
Use **Space** or **Enter** to activate actions

## Color

On search app bars, use the default color roles when possible.

- Search container: **surface container**
- Search label: **on surface variant**

On darker backgrounds, search bar containers can use the **surface bright** role to maintain strong visual contrast.

If mapping to other color roles, make sure the text and container have 3:1 contrast to ensure readability.

![A search app bar with default dark text on a light container background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos5etv-06-do.png?alt=media)

*Caption / Legend:*
Make sure search bars and their labels have at least 3:1 contrast. Use the default colors when possible.

![A search app bar with custom light text on a light container background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos65h6-07-dont.png?alt=media)

*Caption / Legend:*
Avoid using custom color roles for the search bar container and search label text. If custom roles are necessary, make sure they have contrast of at least 3:1.

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Move focus to the next interactive element |
| Space or Enter | Activate the focused element |

## Labeling elements

The accessibility label for a title should be the same as the content within the title. If needed, add additional context to the accessibility label to ensure users understand what page they’re on or what content is being shown.

Screen readers will read the UI text followed by the component’s role.

![The headline has accessibility role “Title”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos1na5-08.png?alt=media)

*Caption / Legend:*
An app bar’s accessibility label can incorporate its UI text as well as additional context

Label icon buttons according to their [accessibility guidelines](/m3/pages/icon-buttons/accessibility).

![The app bar icon button has the accessibility role “Button”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlos0avb-09.png?alt=media)

*Caption / Legend:*
An icon button should be clearly labeled on the action it takes, like **View on map**
