# Tabs

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/tabs](https://m3.material.io/components/tabs)
> Last Updated: 2026-07-17T07:03:01.541Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use tabs to group content into helpful categories
- Two variants: primary and secondary
- Tabs can horizontally scroll, so a UI can have as many tabs as needed
- Place tabs next to each other as peers

![A bar of primary tabs with destinations labeled Flights, Trips, and Explore. And a bar of secondary tabs with destinations labeled Overview and Specifications](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2kfqg9k-1.png?alt=media)

*Caption / Legend:*
1. Primary tabs
2. Secondary tabs

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Layout: Icons and labels are now vertically centered within the container

![Bar of primary tabs with destinations labeled Flights, Trips, and Explore](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k3okei-2.png?alt=media)

*Caption / Legend:*
Tab icons and labels are positioned in the vertical center of the container

## Specs

## Tokens and specs

Select a component variant below to see its elements, attributes, tokens, and their values.

#### Design Tokens: Tabs - Primary navigation

*For primary tabs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.primary-navigation-tab.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | Primary navigation tab focus indicator offset |
| `md.comp.primary-navigation-tab.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Primary navigation tab focus indicator thickness |
| `md.comp.primary-navigation-tab.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Primary navigation tab focus indicator color |
| `md.comp.primary-navigation-tab.divider.height` | 1dp | LENGTH | Primary navigation tab divider height |
| `md.comp.primary-navigation-tab.divider.color` | `md.sys.color.surface-variant` | COLOR | Primary navigation tab divider color |
| `md.comp.primary-navigation-tab.with-label-text.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Primary navigation tab with label text inactive color |
| `md.comp.primary-navigation-tab.with-label-text.active.label-text.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with label text active color |
| `md.comp.primary-navigation-tab.with-label-text.label-text.type` | - | TYPOGRAPHY | Label text type style |
| `md.comp.primary-navigation-tab.with-label-text.label-text.font` | `md.sys.typescale.title-small.font` | FONT_NAMES | Primary navigation tab with label text font |
| `md.comp.primary-navigation-tab.with-label-text.label-text.weight` | `md.sys.typescale.title-small.weight` | FONT_WEIGHT | Primary navigation tab with label text weight |
| `md.comp.primary-navigation-tab.with-label-text.label-text.size` | `md.sys.typescale.title-small.size` | FONT_SIZE | Primary navigation tab with label text size |
| `md.comp.primary-navigation-tab.with-label-text.label-text.line-height` | `md.sys.typescale.title-small.line-height` | LINE_HEIGHT | Primary navigation tab with label text line height |
| `md.comp.primary-navigation-tab.with-label-text.label-text.tracking` | `md.sys.typescale.title-small.tracking` | FONT_TRACKING | Primary navigation tab with label text tracking |
| `md.comp.primary-navigation-tab.with-label-text.inactive.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab with label text inactive focus color |
| `md.comp.primary-navigation-tab.with-label-text.active.focus.label-text.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with label text active focus color |
| `md.comp.primary-navigation-tab.with-icon.inactive.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab with icon inactive focus color |
| `md.comp.primary-navigation-tab.with-icon.active.focus.icon.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with icon active focus color |
| `md.comp.primary-navigation-tab.inactive.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Primary navigation tab inactive focus state layer opacity |
| `md.comp.primary-navigation-tab.inactive.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab inactive focus state layer color |
| `md.comp.primary-navigation-tab.active.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Primary navigation tab active focus state layer opacity |
| `md.comp.primary-navigation-tab.active.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Primary navigation tab active focus state layer color |
| `md.comp.primary-navigation-tab.with-label-text.inactive.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab with label text inactive hover color |
| `md.comp.primary-navigation-tab.with-label-text.active.hover.label-text.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with label text active hover color |
| `md.comp.primary-navigation-tab.with-icon.inactive.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab with icon inactive hover icon color |
| `md.comp.primary-navigation-tab.with-icon.active.hover.icon.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with icon active hover icon color |
| `md.comp.primary-navigation-tab.inactive.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Primary navigation tab inactive hover state layer opacity |
| `md.comp.primary-navigation-tab.inactive.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab inactive hover state layer color |
| `md.comp.primary-navigation-tab.active.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Primary navigation tab active hover state layer opacity |
| `md.comp.primary-navigation-tab.active.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Primary navigation tab active hover state layer color |
| `md.comp.primary-navigation-tab.active-indicator.shape` | - | SHAPE | Primary navigation tab active indicator shape |
| `md.comp.primary-navigation-tab.active-indicator.height` | 3dp | LENGTH | Primary navigation tab active indicator height |
| `md.comp.primary-navigation-tab.active-indicator.color` | `md.sys.color.primary` | COLOR | Primary navigation tab active indicator color |
| `md.comp.primary-navigation-tab.with-icon.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Primary navigation tab with icon inactive color |
| `md.comp.primary-navigation-tab.with-icon.active.icon.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with icon active color |
| `md.comp.primary-navigation-tab.with-icon.icon.size` | 24dp | LENGTH | Primary navigation tab with icon size |
| `md.comp.primary-navigation-tab.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Primary navigation tab container elevation |
| `md.comp.primary-navigation-tab.with-icon-and-label-text.container.height` | 64dp | LENGTH | Primary navigation tab with icon and label text container height |
| `md.comp.primary-navigation-tab.container.height` | 48dp | LENGTH | Primary navigation tab container height |
| `md.comp.primary-navigation-tab.container.shape` | `md.sys.shape.corner.none` | SHAPE | Primary navigation tab container shape |
| `md.comp.primary-navigation-tab.container.color` | `md.sys.color.surface` | COLOR | Primary navigation tab container color |
| `md.comp.primary-navigation-tab.with-label-text.inactive.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab with label text inactive pressed color |
| `md.comp.primary-navigation-tab.with-label-text.active.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with label text active pressed color |
| `md.comp.primary-navigation-tab.with-icon.inactive.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Primary navigation tab with icon inactive pressed color |
| `md.comp.primary-navigation-tab.with-icon.active.pressed.icon.color` | `md.sys.color.primary` | COLOR | Primary navigation tab with icon active pressed color |
| `md.comp.primary-navigation-tab.inactive.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Primary navigation tab inactive pressed state layer opacity |
| `md.comp.primary-navigation-tab.inactive.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Primary navigation tab inactive pressed state layer color |
| `md.comp.primary-navigation-tab.active.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Primary navigation tab active pressed state layer opacity |
| `md.comp.primary-navigation-tab.active.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Primary navigation tab active pressed state layer color |

#### Design Tokens: Tabs - Secondary navigation

*For secondary tabs.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.secondary-navigation-tab.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | Secondary navigation tab focus indicator offset |
| `md.comp.secondary-navigation-tab.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Secondary navigation tab focus indicator thickness |
| `md.comp.secondary-navigation-tab.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Secondary navigation tab focus indicator color |
| `md.comp.secondary-navigation-tab.divider.height` | 1dp | LENGTH | Secondary navigation tab divider height |
| `md.comp.secondary-navigation-tab.divider.color` | `md.sys.color.surface-variant` | COLOR | Secondary navigation tab divider color |
| `md.comp.secondary-navigation-tab.active-indicator.height` | 2dp | LENGTH | Secondary navigation tab active indicator height |
| `md.comp.secondary-navigation-tab.active-indicator.color` | `md.sys.color.primary` | COLOR | Secondary navigation tab active indicator color |
| `md.comp.secondary-navigation-tab.with-icon.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab with icon pressed icon color |
| `md.comp.secondary-navigation-tab.with-icon.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab with icon focus icon color |
| `md.comp.secondary-navigation-tab.with-icon.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab with icon hover icon color |
| `md.comp.secondary-navigation-tab.with-icon.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Secondary navigation tab with icon inactive icon color |
| `md.comp.secondary-navigation-tab.with-icon.active.icon.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab with icon active icon color |
| `md.comp.secondary-navigation-tab.with-icon.icon.size` | 24dp | LENGTH | Secondary navigation tab with icon icon size |
| `md.comp.secondary-navigation-tab.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Secondary navigation tab inactive label text color |
| `md.comp.secondary-navigation-tab.active.label-text.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab active label text color |
| `md.comp.secondary-navigation-tab.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.secondary-navigation-tab.label-text.font` | `md.sys.typescale.title-small.font` | FONT_NAMES | Secondary navigation tab label text font |
| `md.comp.secondary-navigation-tab.label-text.weight` | `md.sys.typescale.title-small.weight` | FONT_WEIGHT | Secondary navigation tab label text weight |
| `md.comp.secondary-navigation-tab.label-text.size` | `md.sys.typescale.title-small.size` | FONT_SIZE | Secondary navigation tab label text size |
| `md.comp.secondary-navigation-tab.label-text.line-height` | `md.sys.typescale.title-small.line-height` | LINE_HEIGHT | Secondary navigation tab label text line height |
| `md.comp.secondary-navigation-tab.label-text.tracking` | `md.sys.typescale.title-small.tracking` | FONT_TRACKING | Secondary navigation tab label text tracking |
| `md.comp.secondary-navigation-tab.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab focus label text color |
| `md.comp.secondary-navigation-tab.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Secondary navigation tab focus state layer opacity |
| `md.comp.secondary-navigation-tab.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab focus state layer color |
| `md.comp.secondary-navigation-tab.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab hover label text color |
| `md.comp.secondary-navigation-tab.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Secondary navigation tab hover state layer opacity |
| `md.comp.secondary-navigation-tab.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab hover state layer color |
| `md.comp.secondary-navigation-tab.container.shadow-color` | `md.sys.color.shadow` | COLOR | Secondary navigation tab container shadow color |
| `md.comp.secondary-navigation-tab.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Secondary navigation tab container elevation |
| `md.comp.secondary-navigation-tab.container.height` | 48dp | LENGTH | Secondary navigation tab container height |
| `md.comp.secondary-navigation-tab.container.shape` | `md.sys.shape.corner.none` | SHAPE | Secondary navigation tab container shape |
| `md.comp.secondary-navigation-tab.container.color` | `md.sys.color.surface` | COLOR | Secondary navigation tab container color |
| `md.comp.secondary-navigation-tab.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab pressed label text color |
| `md.comp.secondary-navigation-tab.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Secondary navigation tab pressed state layer opacity |
| `md.comp.secondary-navigation-tab.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Secondary navigation tab pressed state layer color |


## Primary tabs

![6 elements of primary tabs.](https://lh3.googleusercontent.com/0bS99kVjUnrfIUIKGAMWl8zeoYciELsgT5jPWeC4JJ9gcDC2cfnKH-p9qOYsX0OJ000ePPYMARw_YXMtax_UeITNCH-W5hn03wKl-nl0Al9scw=s2048)

*Caption / Legend:*
1. Container
2. Badge (optional)
3. Icon (optional)
4. Label
5. Divider
6. Active indicator

### Primary tabs color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![7 color roles applied to primary tabs in light and dark themes.](https://lh3.googleusercontent.com/dmXLWuK2u_6U_iIQaK_nWtayfYfcfZU6mZyf5IAPmgu9y14-Puo51QN7a74fZJ34z0ESD88OfHOvUOFcnTpSARGU9yDXHPUQrcBqledF6BA=s2048)

*Caption / Legend:*
Primary tab color roles used for light and dark schemes:

1. Surface
2. Primary
3. Primary
4. On surface variant
5. On surface variant
6. Outline variant
7. Primary

### Primary tabs states

![Diagram of all primary tab states in both light and dark mode](https://lh3.googleusercontent.com/SVFdAJr5_8cGN6FTMVabD3nie8TwI7380y6PuVzSxatYH1YBsdf49aWd1upXNO7uDcsKDd8Uge2WtDUPtTtnuFCKKgIk-q6iraC6rfP8bcY=s2048)

*Caption / Legend:*
1. Enabled (active destination)
2. Hover (active destination)
3. Focused (active destination)
4. Pressed (active destination)
5. Enabled (inactive destination)
6. Hover (inactive destination)
7. Focused (inactive destination)
8. Pressed (inactive destination)

## Secondary tabs

![5 elements of secondary tabs.](https://lh3.googleusercontent.com/kyON5nMIlowboe0XsmPdlYKlFdIzCFTab9gzT4uEJtS2WMvRd1uBJHEMDDOKujs1u1iJYlb66cSc7LBfMuN9F3HRwocQhsYw0wvUW2lQxuBM=s2048)

*Caption / Legend:*
1. Container
2. Badge (optional)
3. Label
4. Divider
5. Active indicator

### Secondary tabs color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![5 color roles applied to secondary tabs in light and dark themes.](https://lh3.googleusercontent.com/mrLdFHBC7H_M0bhZxPDT-VaJeoB01vnZMaY_9Pyj_EenTQbIT6OO75CWFdZLyvMxD0ycppRCoWXustGmsKh3K3M8CALUwNj7knXGU6JyrGb5=s2048)

*Caption / Legend:*
Secondary tab color roles used for light and dark schemes:

1. Surface
2. On surface
3. On surface variant
4. Outline variant
5. Primary

### Secondary tabs states

![Diagram of all secondary tab states in both light and dark mode](https://lh3.googleusercontent.com/oEbOwsXXP2m1EE9Sh7tJFcTP1GIHVkX6lbOkKN-gdwnF4WbJnoyezqHEr1rtaeAPTY2cHj6txNpy91YgYRVCBqht87aUU6VlIwJg1rnvvniy=s2048)

*Caption / Legend:*
1. Enabled (active destination)
2. Hover (active destination)
3. Focused (active destination)
4. Pressed  (active destination)
5. Enabled (inactive destination)
6. Hover (inactive destination)
7. Focused (inactive destination)
8. Pressed (inactive destination)

## Measurements

![Diagram of measurements for four and two tabs per container, including icon and label placement.](https://lh3.googleusercontent.com/KNDnEXfu6HZxqBLD84eQfamUeoe8b_N3wygSYqpk5Hq1MxT7_9RNL34wYce0tPDml6rb6lP7cQO8lYhxEcPOOXIGAmb3ArqY-ay-lDUzbqoW=s2048)

*Caption / Legend:*
Tabs are divided into equal sections, with labels and icons positioned vertically centered. The divider is included in the height, placed inside the container.

![Diagram of Primary tab active indicator measurements.](https://lh3.googleusercontent.com/lEVgg_QRIKA7HpYLAWEddeY7ZCHa5FmlPc1K3C0yx1c5cmW_wxci7cAmdW_55RvUextO4vEHupXxMrWXSna4BHfO7UcWU9Q_QKrk2LESoMbVoA=s2048)

*Caption / Legend:*
Primary tab active indicators are inset 2dp on each side, have a fully rounded corner radius, and a minimum length of 24dp.

| Attribute | Value |
| --- | --- |
| Container height (label text only) | 48dp |
| Container height (icon and label text) | 64dp |
| Icon size | 24dp |
| Divider height | 1dp |
| Primary active indicator height | 3dp |
| Secondary active indicator height | 2dp |
| Active indicator shape | 3, 3, 0, 0 |
| Active indicator minimum length | 24dp |
| Padding between inline icon and text | 8dp |
| Padding between inline text and badge | 4dp |
| Overlap of badge on stacked icon | 6dp |

## Guidelines

## Usage

Tabs organize groups of related content that are at the same level of hierarchy.

![Mobile screen with 3 tabs: video, photos and audio. Each tab has an an icon and text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0hhto-1.png?alt=media)

*Caption / Legend:*
Tab labels can include icons and text. Text labels should be short.

There are two variants of tabs:

1. Primary tabs
2. Secondary tabs

Primary tabs are placed at the top of the content pane under an app bar. They display the main content destinations.

Secondary tabs are used within a content area to further separate related content and establish hierarchy.

![3 primary tabs above 3 secondary tabs.](https://lh3.googleusercontent.com/idzlIeuy-TH2VM7D0-YvIt28GrEONuzYVwq1Ov4RBs_p3MNmu4Ji52Zx-_b5-AtLHAGyXOiXeTMrQtrkiTwGcyThOwwaKtQc8NbP-UNUpDG_=s1352)

*Caption / Legend:*
1. Primary tabs
2. Secondary tabs

### Related content

Use tabs to group related content, not *sequential* content.

![Scrolling up and down through content, then swiping left through tabs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0jkg6-3.png?alt=media)

*Caption / Legend:*
Utilize tabs to categorize related groups of content into clearly defined sets

![Mobile screen with scrollable tabs of sequential content: Chapter 1, Chapter 2, Chapter 3 and Chapter 4.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0jyu3-4.png?alt=media)

*Caption / Legend:*
Don’t use tabs to move through sequential content that needs to be read in a particular order. Instead, create hierarchy within the content using techniques like typography style and open space.

## Anatomy

![Six components of tabs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0lum1-5.png?alt=media)

*Caption / Legend:*
1. Container
2. Icon (optional)
3. Badge (optional)
4. Label
5. Divider
6. Active indicator

### Container

The container holds multiple tabs. Its contents can be fixed or scrollable.

The container should always extend the full width of the window and be divided into equal sections, one for each tab.

The container is defined by a divider on the bottom edge to separate it from the content below. Content may scroll under the container.

![Mobile screen with fixed tabs with a dotted border to illustrate the container area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0mdfv-6.png?alt=media)

*Caption / Legend:*
The container is the area that contains the tabs directly under the title above

### Icon (optional)

Icons communicate the kind of content within a tab. Icons should be simple and recognizable.

![Mobile screen with tabs that use both icons and labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0o3dw-7.png?alt=media)

*Caption / Legend:*
Tabs can use a combination of labels and icons

Icons alone aren’t as effective as text labels at communicating complex content.

Use caution when representing tab content with icons alone, as an icon’s meaning may not be clear.

![Mobile screen with tabs represented by icons  for “wishlist” and “location”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0sbsy-8.png?alt=media)

*Caption / Legend:*
Use icons that are globally recognized when using icons alone

![Mobile screen where "purchases” tab has text only and “wishlist” tab has text and icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k0t3i6-9.png?alt=media)

*Caption / Legend:*
Don’t use tabs with both icons and text labels on only some tabs, but not others

### Label

Text labels should clearly and succinctly describe the content within the tab.

Tab labels appear in a single row. Labels can use a second line if needed, with truncated text. Alternatively, scrollable tabs can allow room for longer titles.

![Mobile screen with scrollable tabs in a single row.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k1942z-10.png?alt=media)

*Caption / Legend:*
Tab labels should be short and succinct. There should be a clear relationship to the title above.

When using scrollable tabs, the first visible tab should be offset by 52dp from the left side of the device for both web and mobile. The width of each tab is defined by the length of its text label.

Avoid using inconsistent padding on each tab.

![Screen with scrollable tabs offset from the leading edge by 52dp.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k19jjz-11.png?alt=media)

*Caption / Legend:*
Offset the first scrollable tab 52dp from the leading edge so it's clear that more content is available

![Screen with scrollable tabs, 2 of which are truncated to “Australian” showing how truncation can confuse users.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k1a0sc-12.png?alt=media)

*Caption / Legend:*
Don’t truncate labels unless required, as truncated text can impede comprehension

### Badges (optional)

Badges can be used on primary or secondary tabs to show notifications or updates related to a specific tab. Limit badge content to four characters, including a "+".

Once the user views the relevant content in the tab, the badge value should update or the badge should disappear entirely.

Small and large badges can both be used with tabs. Read the [badge guidance](/m3/pages/badges/overview) for more details.

![Mobile screen with tabs that use both icons and labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k1yl6w-13.png?alt=media)

*Caption / Legend:*
Badges are used to highlight notifications related to tab specific content

### Active indicator

To differentiate an active tab from an inactive tab, apply an underline and color change to the active tab’s text and icon.

## Choosing the tab variant

Primary tabs should be used when just one set of tabs are needed.

Secondary tabs are necessary when a screen requires more than one level of tabs. These tabs use a simpler style of indicator, but their function is identical to primary tabs.

![Mobile screen with primary tabs near the top of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k20o4c-15.png?alt=media)

*Caption / Legend:*
Tabs can be joined with components like app bars, embedded in a specific UI region, or nested within components like cards and sheets. Tabs control the UI region displayed below them.

## Placement

Tabs are displayed in a single row, with each tab connected to the content it represents. As a set, all tabs are unified by a shared topic.

Secondary tabs should always be placed below primary tabs.

![Mobile screen with secondary tabs below the primary tabs.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k217y6-16.png?alt=media)

*Caption / Legend:*
Secondary tabs are found within other content to assist users with greater detail

## Responsive layout

For fixed tabs, the maximum width for each tab should be determined by the width of the widest tab. The group of tabs should use a fluid margin and align to the center or leading edge of the body region.

Avoid using more than four tabs at once. At five or more tabs, the container becomes cramped.

![Four fixed tabs spaced to match one another.](https://lh3.googleusercontent.com/FyF1DB36V4-1BUcdhWode9xWyMAv8dxbQI41nyqeelttSpQive9jjYbxjC6qmmZCq7-7OKSAtlkWeFG0ufcBT-KVUFHAniHePE3F4ZcTy382=s1352)

*Caption / Legend:*
Tabs can grow in width in relation to the number of items contained within

## Behavior

### States

By default, tabs inherit enabled states with one active state.The inactive and active states of a tab can inherit a hover, focus, and pressed states.

![Four states of a tab.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k2312r-18.png?alt=media)

*Caption / Legend:*
Active, hover, focused, and pressed states

### Fixed tabs

Fixed tabs display all tabs in a set simultaneously. They are best for switching between related content quickly, such as between transportation methods in a map. To navigate between fixed tabs, tap an individual tab, or swipe left or right in the content area.

#### Tap a tab

Navigate to a tab by tapping on it.

#### Swipe within the content area

To navigate between tabs, users can swipe left or right within the content area.

Use caution when placing other swipeable content (such as interactive maps or list items) in the content area.

### Scrollable tabs

When a set of tabs cannot fit on screen, use scrollable tabs. Scrollable tabs can use longer text labels and a larger number of tabs. They are best used for browsing on touch interfaces.

### Scrolling content

When a screen scrolls up and down through content, tabs can either be fixed to the top of the screen, or scroll off the screen. If they scroll off the screen, they will return when the user scrolls upward.

## Accessibility

## Use cases

Users should be able to:

- Undertake actions or invoke navigation to a new destination with assistive tech
- Select an action or destination from an off screen tab with assistive tech
- Maintain access of primary actions when the content is in a scrolled state

## Interaction & style

**Touch**

- When a user taps on an icon button, a touch ripple appears, indicating interaction feedback
- The selected indicator becomes active and shifts into position once the touch has been engaged

**Scrollable**

- When a set of tabs cannot fit on screen, scrollable tabs are used. They are best used for browsing on touch interfaces.
- To navigate between scrollable tabs, users swipe the set left or right. Users can also use arrow/tab to navigate through.
- It's **not recommended** to loop a tab set where it scrolls infinitely. This can trap users who are navigating linearly with a screen reader.
- To select an individual tab, users tap or press space/enter.
- Horizontal scrolling tabs meet accessibility requirements because they need to increase in width to respond to label text without affecting the layout, and horizontal scrolling is necessary to view those labels.

**Cursor**

- When hovered, the hover state appears, providing a visual cue that the icon button is interactive. When clicked (in both active and inactive states), a ripple appears and the indicator shifts into position, showing the user feedback.

**Keyboard/Switch **

- When tabbed, a focus indicator appears, providing a visual cue to the user that the destination is now selected
- When the user engages with the selected tab via Space/Enter in active states, the user is taken to a new destination
- Within the tab menu, the user is able to arrow/tab through the menu items, Space/Enter to select an item, or tab to exit the active state

### Avoid applying density by default

Don't apply density to tabs by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Initial focus

On arrow/tab in a tab menu, the active indicator appears on the first interactive element, providing feedback to the user that it is selected. The user is then able to tab to additional interactive elements until all available items are complete within the tab menu.

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Arrow | Focus lands on the next available navigation destination |
| Space / Enter | Activates the focused navigation destination |
| Arrow | Allows navigation through menu items |

## Labeling elements

When the visible UI text is ambiguous, or there is no visible UI text, accessibility labels need to be more descriptive. For example, an icon button that visually represents a “video camera” requires additional information in its accessibility label to clarify the icon’s intent.

![Small device screen  with the tab highlighted and the label and role illustrated.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm2k3h2mn-7.png?alt=media)

*Caption / Legend:*
While the icon visually represents a “Video camera,” the accessibility label for this tab clarifies its function: “Video format media content”
