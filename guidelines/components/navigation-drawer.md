# Navigation drawer

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/navigation-drawer](https://m3.material.io/components/navigation-drawer)
> Last Updated: 2026-07-30T05:22:52.002Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

starNote:The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across breakpoints.

- Use standard navigation drawers in expanded, large, and extra-large breakpoints
- Use modal navigation drawers in compact and medium breakpoints
- Can be open or closed by default
- Two variants: standard and modal
- Put the most frequent destinations at the top and group related destinations together

![2 variants of navigation drawers: standard and modal.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoorr6v-1.png?alt=media)

*Caption / Legend:*
1. Standard navigation drawer
2. Modal navigation drawer

## Availability & resources

## M3 Expressive update

**May 2025**

The navigation drawer is no longer recommended. Use the expanded navigation rail instead. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Variants: Distinguishes two separate variants of navigation drawer: Standard and modal
- Shape: Rounded corners at the ending edge of the drawer
- States: Updated color and shape for indicating selected state

![M2 navigation drawer with 4 destinations in a mail app. The active destination “Inbox” is rectangular.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fldox2g48-navdrawer_OLD_M2.png?alt=media)

*Caption / Legend:*
M2: Navigation drawer had square corners and a rectangular shape indicating the active destination

![M3 navigation drawer with 4 destinations in a mail app. The active destination “Inbox” has rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flzdbjtd0-4.png?alt=media)

*Caption / Legend:*
M3: Navigation drawer has rounded corners, new color mappings, and an updated style for indicating the active destination

## Specs

starNote:The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across breakpoints.

![Navigation drawer diagram numbering 7 elements](https://lh3.googleusercontent.com/wzWoGqZcYHmlxmZaJ6h1mIIrnKAN6-ORvn-bAgZGnzVfSFw35XvFKnVMZ6aKAqVtw5sMblQfd0dN7cb5sOnknAbXZ47WMZnh8unDUHPqQQ6DfQ=s2048)

*Caption / Legend:*
1. Container
2. Headline
3. Label text
4. Active indicator
5. Badge label text
6. Scrim
7. Icon

## Tokens & specs

The navigation drawer has one token set. [Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: Navigation drawers (baseline)

*For the baseline navigation drawer. For expressive, use the expanded nav rail instead `md.comp.nav-rail.expanded`.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.navigation-drawer.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.inner-offset` | LENGTH | Navigation drawers focus indicator offset |
| `md.comp.navigation-drawer.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Navigation drawers focus indicator thickness |
| `md.comp.navigation-drawer.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Navigation drawers focus indicator color |
| `md.comp.navigation-drawer.container.color` | `md.sys.color.surface` | COLOR | Navigation drawers container color |
| `md.comp.navigation-drawer.standard.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Navigation drawers standard container elevation |
| `md.comp.navigation-drawer.standard.container.color` | `md.sys.color.surface` | COLOR | Navigation drawers standard container color |
| `md.comp.navigation-drawer.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Navigation drawers container surface tint layer color |
| `md.comp.navigation-drawer.bottom.container.shape` | `md.sys.shape.corner.large.top` | SHAPE | Navigation drawers bottom container shape |
| `md.comp.navigation-drawer.modal.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Navigation drawers modal container elevation |
| `md.comp.navigation-drawer.container.shape` | `md.sys.shape.corner.large.end` | SHAPE | Navigation drawers container shape |
| `md.comp.navigation-drawer.container.height` | 100percent | LENGTH | Navigation drawers container height |
| `md.comp.navigation-drawer.container.width` | 360dp | LENGTH | Navigation drawers container width |
| `md.comp.navigation-drawer.modal.container.color` | `md.sys.color.surface-container-low` | COLOR | Navigation drawers modal container color |
| `md.comp.navigation-drawer.active.label-text.weight` | `md.sys.typescale.label-large.weight.prominent` | FONT_WEIGHT | Navigation drawers active label text weight |
| `md.comp.navigation-drawer.label-text.type` | - | TYPOGRAPHY | Navigation drawers label text type |
| `md.comp.navigation-drawer.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Navigation drawers label text font |
| `md.comp.navigation-drawer.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Navigation drawers label text weight |
| `md.comp.navigation-drawer.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Navigation drawers label text size |
| `md.comp.navigation-drawer.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Navigation drawers label text line height |
| `md.comp.navigation-drawer.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Navigation drawers label text tracking |
| `md.comp.navigation-drawer.divider.color` | `md.sys.color.outline` | COLOR | Navigation drawers divider color |
| `md.comp.navigation-drawer.scrim.opacity` | - | OPACITY | Navigation drawers scrim opacity |
| `md.comp.navigation-drawer.scrim.color` | `md.ref.palette.neutral-variant20` | COLOR | Navigation drawers scrim color |
| `md.comp.navigation-drawer.headline.type` | - | TYPOGRAPHY | Type style |
| `md.comp.navigation-drawer.headline.font` | `md.sys.typescale.title-small.font` | FONT_NAMES | Navigation drawers headline font |
| `md.comp.navigation-drawer.headline.weight` | `md.sys.typescale.title-small.weight` | FONT_WEIGHT | Navigation drawers headline weight |
| `md.comp.navigation-drawer.headline.size` | `md.sys.typescale.title-small.size` | FONT_SIZE | Navigation drawers headline size |
| `md.comp.navigation-drawer.headline.line-height` | `md.sys.typescale.title-small.line-height` | LINE_HEIGHT | Navigation drawers headline line height |
| `md.comp.navigation-drawer.headline.tracking` | `md.sys.typescale.title-small.tracking` | FONT_TRACKING | Navigation drawers headline tracking |
| `md.comp.navigation-drawer.inactive.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive focus icon color |
| `md.comp.navigation-drawer.active.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active focus icon color |
| `md.comp.navigation-drawer.inactive.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive focus label text color |
| `md.comp.navigation-drawer.active.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active focus label text color |
| `md.comp.navigation-drawer.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Navigation drawers focus state layer opacity |
| `md.comp.navigation-drawer.inactive.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive focus state layer color |
| `md.comp.navigation-drawer.active.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active focus state layer color |
| `md.comp.navigation-drawer.inactive.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive hover icon color |
| `md.comp.navigation-drawer.active.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active hover icon color |
| `md.comp.navigation-drawer.inactive.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive hover label text color |
| `md.comp.navigation-drawer.active.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active hover label text color |
| `md.comp.navigation-drawer.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Navigation drawers hover state layer opacity |
| `md.comp.navigation-drawer.inactive.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive hover state layer color |
| `md.comp.navigation-drawer.active.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active hover state layer color |
| `md.comp.navigation-drawer.large-badge-label.type` | - | TYPOGRAPHY | Navigation drawers large badge label type |
| `md.comp.navigation-drawer.large-badge-label.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Navigation drawers large badge label font |
| `md.comp.navigation-drawer.large-badge-label.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Navigation drawers large badge label weight |
| `md.comp.navigation-drawer.large-badge-label.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Navigation drawers large badge label size |
| `md.comp.navigation-drawer.large-badge-label.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Navigation drawers large badge label line height |
| `md.comp.navigation-drawer.large-badge-label.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Navigation drawers large badge label tracking |
| `md.comp.navigation-drawer.large-badge-label.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation drawers large badge label color |
| `md.comp.navigation-drawer.active-indicator.width` | 336dp | LENGTH | Navigation drawers active indicator width |
| `md.comp.navigation-drawer.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Navigation drawers active indicator shape |
| `md.comp.navigation-drawer.active-indicator.height` | 56dp | LENGTH | Navigation drawers active indicator height |
| `md.comp.navigation-drawer.active-indicator.color` | `md.sys.color.secondary-container` | COLOR | Navigation drawers active indicator color |
| `md.comp.navigation-drawer.icon.size` | 24dp | LENGTH | Navigation drawers icon size |
| `md.comp.navigation-drawer.inactive.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation drawers inactive icon color |
| `md.comp.navigation-drawer.active.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active icon color |
| `md.comp.navigation-drawer.inactive.label-text.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation drawers inactive label text color |
| `md.comp.navigation-drawer.active.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active label text color |
| `md.comp.navigation-drawer.headline.color` | `md.sys.color.on-surface-variant` | COLOR | Navigation drawers headline color |
| `md.comp.navigation-drawer.inactive.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive pressed icon color |
| `md.comp.navigation-drawer.active.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active pressed icon color |
| `md.comp.navigation-drawer.inactive.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Navigation drawers inactive pressed label text color |
| `md.comp.navigation-drawer.active.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active pressed label text color |
| `md.comp.navigation-drawer.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Navigation drawers pressed state layer opacity |
| `md.comp.navigation-drawer.inactive.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers inactive pressed state layer color |
| `md.comp.navigation-drawer.active.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Navigation drawers active pressed state layer color |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Navigation drawer diagram numbering 9 color roles.](https://lh3.googleusercontent.com/EFOoVjwBffIgl-Gs07m2W5WiNu8brQ2paefKx_U_eQexLGySjgLV_C9FYD7wkTs0o7j3_RvrcTcqh6oUAKyyrkRsYKsU3A6n-KFtlCBp1sKv=s1352)

*Caption / Legend:*
Navigation drawer color roles used for light and dark schemes:

1. Surface container low
2. On surface variant
3. On secondary container
4. On secondary container
5. Secondary container
6. On secondary container
7. On surface variant
8. On surface variant
9. Scrim

For divider color roles, go to [divider specs](/m3/pages/divider/specs).

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![4 navigation drawers illustrating enabled, hovered, focused, and pressed states.](https://lh3.googleusercontent.com/xCUslUMH4a9wLA0cXIbv622e8KMYHe0R5TPMmzjG0lFKP2hX6vjQcnKVFwxI9HIdk1z3y6BR65wFxvpsx4LcCDTCkHk0J52aaChbC8h3YEZy=s2048)

*Caption / Legend:*
Navigation drawer states:

1. Enabled
2. Hovered
3. Focused
4. Pressed

[State specs are in the tokens module above](/m3/pages/navigation-drawer/specs#6207b00f-a259-41d2-8146-b6efc6380976)

## Measurements

### Standard navigation drawer

![Standard navigation drawer with measurements shown for various elements.](https://lh3.googleusercontent.com/bHQAcDd4Vluh3tirhRwnej1hWyUij6O-bjAclp-H5fmSqLHDanyQZsk-RQCLJtCnVYQhYeN1DM4GQG4I2F_Lbk401GH877nVSeKUr3wvgiAv_w=s1004)

*Caption / Legend:*
Element size measurements

![Standard navigation drawer with measurements shown for padding and margins.](https://lh3.googleusercontent.com/0b273CFdNyDt3yEDRLSSICnKHb8rktNAiXmruD2EO82_S9iBxGsq08CPpYTupKoj0SRnuaNR0fo8dICOcrrev88RLidMbVhYvVgiudX80RJ4=s1004)

*Caption / Legend:*
Padding and margins

| Attribute | Value |
| --- | --- |
| Container height | 100% |
| Container width | 360dp |
| Container shape | 0,16,16,0dp corner radii |
| Icon size | 24dp |
| Active indicator height | 56dp |
| Active indicator shape | 28dp |
| Active indicator width | 336dp |
| Horizontal label alignment | Start-aligned |
| Left padding | 28dp |
| Right padding | 28dp |
| Active indicator padding | 12dp |
| Padding between elements | 0dp |

### Modal navigation drawer

![Modal navigation drawer with measurements shown for various elements.](https://lh3.googleusercontent.com/invVA4iDTyiHnbFHAMhycwQRAZds3tEMmOOPGaiv1HnriGnDeAV4MSXpQ9gOcnALm0eQcxgml_hzP-tTo1gWH4DQMu-ZM0iPuy1OgHvjULc_=s1004)

*Caption / Legend:*
Element size measurements

![Modal navigation drawer with measurements shown for padding and margins.](https://lh3.googleusercontent.com/2T9NqmBF4mES5SgaRMeuXBm0CXnjDhysHSNKT1lr_iIEUZKCbKtRtIXvzyFbVR8RnSZ17O4sK483ySXplBOwNiw0N_DoqjM0npsQ6uA6c9nnYA=s1004)

*Caption / Legend:*
Padding and margins

| Attribute | Value |
| --- | --- |
| Container height | 100% |
| Container width | 360dp |
| Icon size | 24dp |
| Active indicator height | 56dp |
| Active indicator shape | 28dp |
| Active indicator width | 336dp |
| Horizontal label alignment | Start-aligned |
| Left padding | 28dp |
| Right padding | 28dp |
| Active indicator padding | 12dp |
| Padding between elements | 0dp |

## Guidelines

starNote:The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across breakpoints.

![Navigation drawer with 4 primary destinations ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopun3e-1.png?alt=media)

## Usage

Navigation drawers provide access to destinations and app functionality, such as switching accounts. They can either be permanently on-screen or opened and closed by a navigation menu icon. One navigation destination is always active.

Navigation drawers are recommended for:

- Apps with 5 or more top-level destinations
- Apps with 2 or more levels of navigation hierarchy
- Quick navigation between unrelated destinations
- Replacing the navigation rail or navigation bar on large screens

![Navigation drawer with multiple destinations in a mail app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopv1qw-2.png?alt=media)

*Caption / Legend:*
Use a navigation drawer for 5 or more primary destinations, or more than 1 level of navigation hierarchy

Avoid using a navigation drawer with other primary navigation components, such as a navigation bar.

Instead, choose a single navigation component based on product requirements and breakpoints:

- Navigation bars for compact breakpoints
- Navigation rails for medium and expanded breakpoints
- Standard navigation drawers for expanded, large and extra-large breakpoints

![Standard navigation drawer and navigation bar used together.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopvjco-3.png?alt=media)

*Caption / Legend:*
Avoid using two navigation components on the same screen

There are two variants of navigation drawers:

1. Standard navigation drawer
2. Modal navigation drawer

![Standard navigation drawer with destinations in mail app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopw575-4.png?alt=media)

*Caption / Legend:*
Standard navigation drawer

![Modal navigation drawer with destinations and scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopwhen-5.png?alt=media)

*Caption / Legend:*
Modal navigation drawer

### Standard navigation drawer

Standard navigation drawers provide access to drawer destinations and app content for layouts in expanded, large, and extra-large breakpoints.

Standard drawers can be permanently visible (best for frequently switching destinations) or opened and closed by tapping a menu icon (best for focusing more on screen content).

In medium and compact breakpoints, use modal drawers instead.

![Standard navigation drawer in a mail app with active destination “Inbox” next to app content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopx4a0-6.png?alt=media)

*Caption / Legend:*
Standard navigation drawer providing access to drawer destinations next to app content

### Modal navigation drawer

Modal navigation drawers use a scrim to block interaction with the rest of an app’s content, and don’t affect the screen’s layout grid.

Modal navigation drawers can be used in any breakpoint, but are primarily used in compact and medium sizes where space is limited or prioritized for app content.

They can be swapped with standard drawers on expanded, large, and extra-large breakpoints.

![Modal navigation drawer with 1 active destination and scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopxvvj-7.png?alt=media)

*Caption / Legend:*
Modal navigation drawer using a scrim to block interaction with the rest of an app’s content

Modal navigation drawers are always opened by an action outside of the drawer, such as clicking a navigation menu icon in a navigation rail.

Modal drawers can be dismissed by:

- Selecting a drawer item
- Tapping the scrim
- Swiping toward the drawer’s anchoring edge (for example, swiping right-to-left for a left-aligned navigation drawer)

![Diagram noting a navigation menu icon in a navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopy7b1-8.png?alt=media)

*Caption / Legend:*
A modal drawer opened by an action such as clicking a navigation menu icon (1)

Modal drawers can be dismissed by tapping the scrim or swiping the drawer toward its anchoring screen edge.

![2 modal navigations illustrating tapping the scrim or swiping to dismiss a modal drawer](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopyjta-9.png?alt=media)

*Caption / Legend:*
1. Dismiss by tapping the scrim
2. Dismiss by swiping the drawer

## Anatomy

Navigation drawers are essentially a list contained within a side sheet. They can also include headers, subheads, and dividers to organize longer lists.

![Navigation drawer diagram numbering 8 elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwopzqbr-10.png?alt=media)

*Caption / Legend:*
Navigation drawers can include headers, subheads, and dividers to organize longer lists

1. Active Indicator
2. Icon
3. Label
4. Badge label
5. Sheet
6. Divider
7. Section label (optional)
8. Scrim

### Sheet

A sheet holds all navigation drawer elements. Side sheets are used as the container for standard and modal navigation drawers.

Navigation drawers that open from the side are always placed on the start edge of the screen, on the left for left-to-right (LTR) languages, and on the right for right-to-left (RTL) languages.

![Modal navigation drawer opening from left side of screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq08ti-11.png?alt=media)

*Caption / Legend:*
A navigation drawer opens from the left side of the screen for left-to-right languages

### Divider (optional)

Dividers can be used to separate groups of destinations within the navigation drawer.

![Navigation drawer using horizontal dividers to separate a group of destinations](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq1xf0-12.png?alt=media)

*Caption / Legend:*
Use full-width dividers (1) to separate groups of destinations

![Navigation drawer using horizontal dividers to separate individual destinations](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq29df-13.png?alt=media)

*Caption / Legend:*
Don’t use dividers to separate individual destinations

### Active indicator

The active indicator is a background shape communicating which destination of the navigation drawer is currently being displayed.

![Navigation drawer diagram numbering 1 element.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq2qbs-14.png?alt=media)

*Caption / Legend:*
The active indicator (1) is a background shape communicating which destination of the navigation drawer is currently being displayed

### Label text and icons

Destinations in a navigation drawer take the form of actionable list items. Each item describes its destination using label text and an optional icon.

![Navigation drawer diagram numbering 2 elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq358i-15.png?alt=media)

*Caption / Legend:*
Actionable list items in a navigation drawer describe each destination using (1) an optional icon and (2) required label text

Label text should be clear and short enough that it isn’t cut off by the sheet.

![Navigation drawer using only label text for 4 destinations. Label text “Inbox” in active destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq3i6v-16.png?alt=media)

*Caption / Legend:*
Navigation drawers can use text labels without icons

![Navigation drawer with 1 truncated text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq4gjj-17.png?alt=media)

*Caption / Legend:*
Keep text labels concise, but truncate them if they extend beyond the container width

![Navigation drawer with 1 text label with wrapped label text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq4tkk-18.png?alt=media)

*Caption / Legend:*
Don’t wrap label text

![Navigation drawer with 1 text label featuring smaller text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq56gb-19.png?alt=media)

*Caption / Legend:*
Don’t shrink text size in order to fit a text label on a single line

Icons can supplement labels as indicators of a destination. When used, they should always be placed before text. Other app components and content should reference these icons.

![Navigation drawer with active destination “Inbox” featuring recognizable icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq67nf-20.png?alt=media)

*Caption / Legend:*
Use recognizable icons when conventions exist

![Navigation drawer with 4 destinations, 2 with text label and icon, 2 with only text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq6mto-21.png?alt=media)

*Caption / Legend:*
Don’t apply icons to some destinations and not others. Icons should be used for all destinations, or none.

### Section label (optional)

Short subhead section labels can help group related destinations in the navigation drawer.

![Navigation drawer showing subhead section labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq710s-22.png?alt=media)

*Caption / Legend:*
Related destinations can be grouped using short subhead section labels in the navigation drawer

### Scrim (modal only)

Modal navigation drawers use a scrim to block interaction with the rest of the app. The scrim is placed directly behind the drawer’s sheet and can be tapped or clicked to dismiss the drawer.

![Modal navigation drawer with scrim placed behind.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq7esu-23.png?alt=media)

*Caption / Legend:*
Scrim applied behind a modal navigation drawer

## Responsive layout

A product’s navigation component should change to suit the breakpoint and form factor of the screen.

Modal navigation drawers can be used at any breakpoint but are most common in compact and medium breakpoints.

Standard navigation drawers are best for expanded, large, and extra-large breakpoints.

Use a transition when swapping components. For example, when switching from a portrait to landscape layout, the navigation rail should transform into a navigation drawer.

![Navigation rail changing to navigation. drawer on a larger screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq7wck-24.png?alt=media)

*Caption / Legend:*
Standard navigation drawers change size to suit the device’s screen

### Compact breakpoint

Use modal navigation drawers in compact breakpoints. Or swap the drawer for a navigation bar.

On web, when the screen size is smaller than 320 CSS pixels, swap the navigation drawer for a navigation bar to ensure accessibility.

![Modal navigation drawer with 1 active destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoq8evf-25.png?alt=media)

*Caption / Legend:*
Use a modal navigation drawer on mobile screens

### Medium & expanded breakpoints

Use a modal navigation drawer alone or with a navigation rail on medium and expanded breakpoints.

When a navigation rail and modal navigation drawer are used together, the drawer can repeat destinations in the navigation rail as long as the drawer offers enough visual separation between levels of the navigation hierarchy.

A standard navigation drawer can be used in [single pane layouts](/m3/pages/understanding-layout/parts-of-layout) in expanded breakpoints.

### Large and extra-large breakpoints

For web experiences on laptop and desktop devices, use either a standard navigation drawer, or a navigation rail that transitions into a modal navigation drawer.

![Navigation drawer showing 1 active destination.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx54v3bi-27.png?alt=media)

*Caption / Legend:*
Use a standard navigation drawer on large and desktop screens

## Behavior

### Scrolling

Navigation drawers can be vertically scrolled, independent of the rest of the screen’s content and UI. If the list of navigation destinations is longer than the height of the drawer, the drawer’s contents can be scrolled within the drawer.

### Visibility

**Dismissible standard drawers** can be used for layouts that prioritize content (such as a photo gallery) or for apps where users are unlikely to switch destinations often. They should use a visible navigation menu icon to open and close the drawer.

![Side-by-side standard navigation drawer opened and then closed after tapping menu bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoqb1nm-27.png?alt=media)

*Caption / Legend:*
A standard dismissible navigation drawer is opened and closed by tapping the navigation menu icon in the app bar (1), and remains open until the menu icon is tapped again (2)

**Permanently visible standard drawers** allow quick navigation between unrelated destinations. They can’t be closed or dismissed by the user.

![Standard navigation drawer moving between destinations.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoqf0gp-28.png?alt=media)

*Caption / Legend:*
A permanently-visible standard navigation drawer on desktop

### Appearing

When a navigation drawer animates on screen, it uses an [enter and exit](/m3/pages/motion-transitions) transition pattern.

## Accessibility

starNote:The navigation drawer is no longer recommended in the Material 3 Expressive update. For those who have updated, use an [expanded navigation rail](/m3/pages/navigation-rail/overview/), which has mostly the same functionality of the navigation drawer and adapts better across window size classes.

## Use cases

Users should be able to:

- Move between navigation destinations with assistive technology
- Select a particular navigation destination from a set
- Get appropriate feedback based on input type

## Interaction & style

**Touch**

- When a navigation item is tapped, the active indicator appears in place, providing feedback to the user that it is selected
- A touch ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color, becoming darker

**Cursor**

- When hovered, the hover indicator appears providing a visual cue that the destination is interactive
- When clicked, a ripple passes through the indicator
- The icon switches from outlined to filled
- The icon changes color, becoming darker in light theme and lighter in dark theme, to increase the contrast

## Initial focus

Initial focus lands directly on the first navigation item, since that is the first interactive element of the component.

![1. Tab lands on the first navigation item, Inbox. 2. Down arrow to get to the second navigation item, Outbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworf9hl-3.png?alt=media)

*Caption / Legend:*
Focus lands on first navigation item

## Closing

The modal navigation drawer can be dismissed by selecting the scrim that covers the rest of the screen.

![A navigation drawer with a scrim covering the body content. A touch target is selecting the scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm36co6ff-navdrawer-tablet-do-md.png?alt=media)

*Caption / Legend:*
Select the scrim to close the navigation drawer

## Visual indicators

Icons are the primary focus of the navigation and such give the dominant cue of its state. Use a filled icon for the selected destination to differentiate from the outlined icons of non-selected destinations.

![Space + enter is used to select the navigation item inbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworgt4a-4.png?alt=media)

*Caption / Legend:*
The navigation item is selected via **Space**/**Enter**

![A navigation drawer with the home destination using a filled icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworfw7l-5.png?alt=media)

*Caption / Legend:*
Use a filled icon for the selected navigation destination to differentiate from the other destinations

![A navigation drawer with the home destination using an outlined icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworg85u-6.png?alt=media)

*Caption / Legend:*
Avoid keeping the icon style for the selected navigation destination the same as unselected destination's icons. This removes an important visual indicator of which destination is active.

![A selected home icon using a filled icon and active indicator and a unselected home icon using an outlined icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworh5ui-7.png?alt=media)

*Caption / Legend:*
When selected, the icon fills, darkens in light theme (or lightens in dark theme), and is backed by an active indicator shape

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| Tab | Focus lands on the first navigation destination |
| Space or Enter | Selects the focused navigation destination, and focus moves to the newly opened section (if applicable) |
| Arrow | Navigate between destinations within the navigation drawer |

## Labeling elements

The accessibility label for a navigation item is typically the same as the destination name.

If the UI text is correctly linked, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.

For Android Views (MDC-Android), a more descriptive accessibility label is not available to be set and the role is not announced.

![A navigation drawer item’s label text and accessibility label both read “photos.” The role is “tab.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flworho52-8.png?alt=media)

*Caption / Legend:*
A navigation drawer’s accessibility label can incorporate its adjacent UI text

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a navigation destination visibly labeled **Recents** would benefit from additional information in its accessibility label to clarify the destination’s intent.

![A navigation drawer item’s label text is “recents”, the accessibility label is “recent images.” The role is “tab.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwori08q-9.png?alt=media)

*Caption / Legend:*
While the visible label text reads **Recents,** the accessibility label for this destination clarifies its function: **Recent images**
