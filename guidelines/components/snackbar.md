# Snackbar

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/snackbar](https://m3.material.io/components/snackbar)
> Last Updated: 2026-07-28T08:03:08.607Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Snackbars shouldn’t interrupt the user’s experience
- Usually appear at the bottom of the UI
- Can disappear on their own or remain on screen until the user takes action

![Diagram of snackbar placement](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwow6ukp-1.png?alt=media)

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Behavior: Clarified that snackbars can either appear temporarily (dismissive) or persist until the user takes an action (non-dismissive)

![Example of snackbar on screen bottom](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwow95bc-2.png?alt=media)

*Caption / Legend:*
Snackbars have new color mappings

## Specs

![Diagram of snackbar indicating the four parts of its anatomy](https://lh3.googleusercontent.com/oe-jEgmWKP97u0jsjhWPp2985Zn00p4FweCCB7iQbvx_xh1kkNRctD67TGEeJU_on8ch67ncdBPf84JXcOvaNlSmUXC8ypG3_32cRuGMlhN7=s2048)

*Caption / Legend:*
1. Container
2. Icon (optional close affordance)
3. Action (optional)
4. Supporting text

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Snackbars

*For snackbars.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.snackbar.supporting-text.type` | - | TYPOGRAPHY | Snackbar supporting text |
| `md.comp.snackbar.supporting-text.font` | `md.sys.typescale.body-medium.font` | FONT_NAMES | Snackbar supporting text font |
| `md.comp.snackbar.supporting-text.weight` | `md.sys.typescale.body-medium.weight` | FONT_WEIGHT | Snackbar supporting text weight |
| `md.comp.snackbar.supporting-text.size` | `md.sys.typescale.body-medium.size` | FONT_SIZE | Snackbar supporting text size |
| `md.comp.snackbar.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` | LINE_HEIGHT | Snackbar supporting text line height |
| `md.comp.snackbar.supporting-text.tracking` | `md.sys.typescale.body-medium.tracking` | FONT_TRACKING | Snackbar supporting text tracking |
| `md.comp.snackbar.action.label-text.type` | - | TYPOGRAPHY | Snackbar label text |
| `md.comp.snackbar.action.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Snackbar label text font |
| `md.comp.snackbar.action.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Snackbar label text weight |
| `md.comp.snackbar.action.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Snackbar label text size |
| `md.comp.snackbar.action.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Snackbar label text line height |
| `md.comp.snackbar.action.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Snackbar label text tracking |
| `md.comp.snackbar.icon.pressed.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon pressed icon color |
| `md.comp.snackbar.icon.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Snackbar icon pressed state layer opacity |
| `md.comp.snackbar.icon.pressed.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon pressed state layer color |
| `md.comp.snackbar.icon.focus.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon focus icon color |
| `md.comp.snackbar.icon.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Snackbar icon focus state layer opacity |
| `md.comp.snackbar.icon.focus.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon focus state layer color |
| `md.comp.snackbar.icon.hover.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon hover icon color |
| `md.comp.snackbar.icon.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Snackbar icon hover state layer opacity |
| `md.comp.snackbar.icon.hover.state-layer.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon hover state layer color |
| `md.comp.snackbar.icon.size` | 24dp | LENGTH | Snackbar icon size |
| `md.comp.snackbar.icon.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar icon color |
| `md.comp.snackbar.with-two-lines.container.height` | 68dp | LENGTH | Snackbar container with two lines height |
| `md.comp.snackbar.with-single-line.container.height` | 48dp | LENGTH | Snackbar container with single line height |
| `md.comp.snackbar.action.pressed.label-text.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar pressed label text color |
| `md.comp.snackbar.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Snackbar pressed state layer opacity |
| `md.comp.snackbar.action.pressed.state-layer.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar pressed state layer color |
| `md.comp.snackbar.action.focus.label-text.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar focus label text color |
| `md.comp.snackbar.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Snackbar focus state layer opacity |
| `md.comp.snackbar.action.focus.state-layer.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar focus state layer color |
| `md.comp.snackbar.action.hover.label-text.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar hover label text color |
| `md.comp.snackbar.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Snackbar hover state layer opacity |
| `md.comp.snackbar.action.hover.state-layer.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar hover state layer color |
| `md.comp.snackbar.action.label-text.color` | `md.sys.color.inverse-primary` | COLOR | Snackbar label text color |
| `md.comp.snackbar.supporting-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Snackbar supporting text color |
| `md.comp.snackbar.container.shape` | `md.sys.shape.corner.extra-small` | SHAPE | Snackbar container shape |
| `md.comp.snackbar.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Snackbar container elevation |
| `md.comp.snackbar.container.shadow-color` | `md.sys.color.shadow` | COLOR | Snackbar container shadow color |
| `md.comp.snackbar.container.color` | `md.sys.color.inverse-surface` | COLOR | Snackbar container color |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Diagram of snackbar indicating color and inverse text and labels](https://lh3.googleusercontent.com/TqN2bvamEg2OcfPTmDLrFjMzDjDhfoX3dVbCgn4qqFArx765sDUaubGeUw0RiTFP6y83dAh3XIhj8zds2PAmADSgaUSkxhWjYLzElENX55ca=s2048)

*Caption / Legend:*
Snackbar color roles used for light and dark schemes:

1. Inverse surface
2. Inverse on surface
3. Inverse primary
4. Inverse on surface

## Measurements

![Diagram of snackbar with action](https://lh3.googleusercontent.com/n1bxJJHcB0rD_PQuOaQL4U-nFlVYJ27WJyM-bsxB1Es0KgiWp-4UDnXLHUIMA42rrSWGNZ7nYCQGRNj5hemAC1g672z6akYe7iX1pv0113Q=s2048)

*Caption / Legend:*
Snackbar padding and size measurements

## Configurations

![5 snackbar configurations.](https://lh3.googleusercontent.com/Pd1qLYMI80pcYjx89JXrogC_QiOljw2S1pbGruxLf1oJu_bQnZBwoBxb7V3AnPcV-piQUix6mCFtdBH73KWXOmBI-Svt8rcfh8sRwlh6yJ26dg=s2048)

*Caption / Legend:*
1. Single line
2. Single line with action
3. Two lines
4. Two lines with action
5. Two lines with longer action

## Guidelines

![Snackbar at the bottom of a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6a9x4e1-1.png?alt=media)

## Usage

Snackbars inform users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen.

They shouldn't interrupt the user experience. People can browse the page content without being required to interact with the snackbar.

**Frequency**
Only one snackbar may be displayed at a time.

**Actions**
A snackbar can contain a single action. "Dismiss" or "cancel" actions are optional.

![Snackbar showing 'Email archived' text with an 'Undo' text button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6a9y0k8-2.png?alt=media)

### Similar components

Dialogs are also designed to show important messages.

Choose the right component based on the importance of the message. This component messaging strategy can help avoid overusing snackbars.

![Dialog on a phone requiring the user to sign in to continue. Dismissing prevents them from progressing.](https://lh3.googleusercontent.com/-tiKvQVJlOCfknFRqwRFth2PAQgditPIXPneNZWGR_W7XuQHEfYzHpyZR8lkb7gDWylZmqw6jVl9ExMk2sIrWV5SJEDrph3YWse2wdx1X5fc=s1352)

*Caption / Legend:*
Dialogs require immediate action

**When to use snackbars**
Snackbars communicate messages that are minimally interruptive and don’t require user action.

| Component | Priority | User action |
| --- | --- | --- |
| Snackbar | Low priority | Optional: Snackbars disappear automatically |
| Dialog | High priority | Required: Dialogs block app usage until the user takes a dialog action or exits the dialog (if available) |

### Accessibility requirements for web

On web, auto-dismissing snackbars are inaccessible for people with low vision or who require additional time to perceive information. This can be solved in 2 ways:

#### 1. Add inline feedback

Information in auto-dismissing snackbars must also be communicated using another accessible method inline or near the action that triggered the snackbar.

For example, update the label on a "Save" button to “Saved”, and trigger an auto-dismissing snackbar that communicates the same message.

#### 2. Make the snackbar actionable

Alternatively, add actions to the snackbar so it doesn't dismiss until acted on.

![A button labelled "Save" changes to "Saved" after a moment. A snackbar confirms all changes are saved.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoxyec0-5.png?alt=media)

*Caption / Legend:*
Also communicate snackbar information near the action that triggered the snackbar

## Anatomy

![4 elements of a snackbar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy0ibw-6.png?alt=media)

*Caption / Legend:*
1. Container
2. Supporting text
3. Action (optional)
4. Close button (optional)

### Text label

Snackbars contain a text label that directly relates to the process being performed. In compact breakpoints, the text label can contain up to two lines of text.

![Snackbar on a mobile device reading: "Saved in Vacation album".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy1q93-7.png?alt=media)

*Caption / Legend:*
Text labels are short, clear updates on processes that have been performed

![Snackbar on mobile with one line of content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy2p4f-8.png?alt=media)

*Caption / Legend:*
Keep the snackbar text label to one line long when possible

![Snackbar on mobile with two lines of content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy3zcx-9.png?alt=media)

*Caption / Legend:*
On mobile, the text label can be up to two lines long

![Snackbar on mobile with an icon and one line of content.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy4zjx-10.png?alt=media)

*Caption / Legend:*
Avoid adding icons to snackbars. If your message needs an icon, consider using a different component such as a dialog.

![Snackbar on mobile with bolded and hyperlinked words.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy6dj7-11.png?alt=media)

*Caption / Legend:*
Avoid using stylized text or inline links in snackbars; they can add unwanted complexity. If your message needs a link, add a button instead, or use a different component.

### Container

Snackbars are displayed in rectangular containers with a grey background. Containers should be completely opaque, so that text labels remain legible.

![Snackbar showing a light text label on a black color container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoy7luk-12.png?alt=media)

*Caption / Legend:*
Snackbar containers use a solid background color with a shadow to stand out against content

![A snackbar with button text the same color as supporting text.](https://lh3.googleusercontent.com/4ZjkkltqgNzA13m457i7C95ZkoGaUoXwgffmVQBnSzhDn_qqntogMKz1zoZ3atzRsf9Iu83GJ9KxWN36I8FPXrBHeStry3i6Y-QPP1AAcSL5RQ=s1004)

*Caption / Legend:*
The text label shouldn’t share the same color as the text button

![A snackbar with the action in elevated style.](https://lh3.googleusercontent.com/b3InMdZt65Rjhh2v0XIVdSSStbaGd_Hzb2lnxzGsqpOgwaGnTk-i5f4uZrNBwjViXGXis6FZhuu7ZbP73NMc0fLH6jPdDIgemxqSwr4ImN-P=s1004)

*Caption / Legend:*
Don’t use a filled or elevated button in a snackbar, as it draws too much attention

![An extended snackbar on tablet with a long text label. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoyabsh-13.png?alt=media)

*Caption / Legend:*
In wide layouts, extend the container width to accommodate longer text labels

![Snackbar with a slightly transparent container and a clearly visible text label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoyc9yp-14.png?alt=media)

*Caption / Legend:*
An app can apply slight transparency to the container background, as long as text remains clearly legible

![](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoydoed-15.png?alt=media)

*Caption / Legend:*
Avoid significantly altering the shape of a snackbar container

### Action

Snackbars can display a single text button that lets users take action on a process performed by the app. Snackbars shouldn’t be the only way to access a core use case, to make an app usable.

![A snackbar container with rounded corners.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoyf085-16.png?alt=media)

*Caption / Legend:*
To distinguish the action from the text label, text buttons should display colored text

![Snackbar with a long text button displayed on a third line.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxktjsxn-19.png?alt=media)

*Caption / Legend:*
If an action is long, it can be displayed on a third line

![Snackbar with a single text button labeled undo.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoz8scg-20.png?alt=media)

*Caption / Legend:*
To allow users to amend choices, display an "Undo" action

![Snackbar with a single text button labeled dismiss.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoza8yz-21.png?alt=media)

*Caption / Legend:*
A dismiss action is unnecessary, as snackbar disappears on their own by default

## Placement

### At the bottom of a UI

Snackbars should be placed at the bottom of a UI, in front of the main content. In some cases, snackbars can be nudged upwards to avoid overlapping with other UI elements near the bottom, such as FABs or docked toolbars.

Avoid placing a snackbar in front of frequently used touch targets or navigation.

![Snackbar appearing in front of photo content. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa5hcy-22.png?alt=media)

*Caption / Legend:*
Place a snackbar in front of the main content

![Snackbar placed in front of the navigation components.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa6688-23.png?alt=media)

*Caption / Legend:*
Avoid placing snackbars in front of navigation components

To ensure accessibility for keyboard users on the web, avoid positioning the snackbar in a way that completely obscures actionable elements. Blocking elements makes it difficult to know what is being focused and selected.

![Thin snackbar in front of a focused element that is still visible.](https://lh3.googleusercontent.com/vg5GlpuWuNMO4YWdc0KGUyWNHahzYhB8tTa-uXWzkLg62Et6WGYvmeoY4A8iT5fW17tRL3aeUfWxEpl6Wyaz6hqqqfFp3ZuYeuhjmDhRvgSx=s1312)

*Caption / Legend:*
Adjust the size of the snackbar to avoid blocking elements in focus

![Larger snackbar that is obscuring a focused element.](https://lh3.googleusercontent.com/kpbBuDWBK_Ys0lIMzxCNuXCENtyVH4hR1fZew7Plf3CLFO6w5xF-w_3BdgmDkR2FUBahDMfcS1Hj9KqjAmhyog4PmEHnUy9tF9BBS92Y13Q=s1312)

*Caption / Legend:*
Don’t let the snackbar fully cover elements in focus

Snackbars can span the entire width of the screen only when a UI does not use persistent navigation components like app bars or navigation bars.

Snackbars that span the entire width of a UI can push up FABs when they appear.

![Snackbar spanning the width of a mobile device is placed in front of the navigation components and FAB.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa171j-26.png?alt=media)

*Caption / Legend:*
Snackbars can span the entire width of a UI. However, they should not appear in front of navigation or other important UI elements like floating action buttons.

**Snackbars and floating action buttons (FABs)**

Snackbars should appear above FABs.

![Snackbar placed above a FAB on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa25mm-27.png?alt=media)

*Caption / Legend:*
Snackbar above a FAB

![Snackbar placed in front of a FAB on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa35y8-28.png?alt=media)

*Caption / Legend:*
Don’t place a snackbar in front of a FAB

![Snackbar placed behind a FAB on a mobile device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6aa41vd-29.png?alt=media)

*Caption / Legend:*
Don’t place a snackbar behind a FAB

## Responsive layout

### Compact breakpoint

In compact breakpoints, snackbars should expand vertically from 48dp to 64dp to accommodate one or two lines of text, while maintaining a  fixed distance from the leading, trailing, and bottom edges of the screen.

![Snackbar with its label text extending to the second line and maintaining fixed distance from the edges of a mobile device.  ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flxktk5oy-28.png?alt=media)

### Medium & expanded breakpoints

On medium and expanded breakpoints, like tablet and desktop, snackbars should scale horizontally to accommodate longer text strings, keeping in mind that the ideal line length for text is typically between 40-60 characters.

Snackbars use a flexible distance from the trailing edge of the screen. Whenever possible, snackbars on medium and large displays should aim for a single line of text with an  optional button.

![A horizontally expanded snackbar placed at the bottom of screen on a medium-size device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwoztb40-29.png?alt=media)

In wider layouts, snackbars can be left-aligned or center-aligned if they are consistently placed on the same spot at the bottom of the screen.

![A left-aligned snackbar placed at the bottom of screen on a medium-size device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwozw4lz-30.png?alt=media)

*Caption / Legend:*
Left-aligned snackbar

![A center-aligned snackbar placed at the bottom of screen on a medium-size device.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwozx768-31.png?alt=media)

*Caption / Legend:*
Center-aligned snackbar

![Snackbar displayed at the left edge of the screen, near the bottom, on a medium-sized device. ](https://lh3.googleusercontent.com/31lW1WIYT75nNWrdmMIpaPc3F1li8pdovxS-wfb4EPMkAyZOwTPcOhw2EmNvQ7IsBKjkF-BnlA8ciLYiewbuRaf_A7fM3279CbPZEZkhgEw-=s2048)

*Caption / Legend:*
Don’t place snackbars flush to one edge of the layout

![2 snackbars placed side-by-side at the bottom of the screen on a medium-size device.](https://lh3.googleusercontent.com/OfYvxPiin9tChm76P70MCXk-eBs2mdE5Lg-EIsARo0YiUY5UDsthxozOFefNXX0RhhW-SJ7mKpeHpofakdr6uN5i2XBdNcNYjgv_MNXvlCT4=s2048)

*Caption / Legend:*
Don’t place consecutive snackbars side by side or next to one another

## Behavior

### Appearing and disappearing

Snackbars appear without warning, but they don’t block users from interacting with page content.

Snackbars without actions can auto-dismiss after 4–10 seconds, depending on platform. Avoid using auto-dismissing snackbars on web unless there's also inline feedback.

Snackbars with actions should remain on the screen until the user takes an action on the snackbar, or dismisses it.

### Consecutive snackbars

Consecutive snackbars must appear one at a time.

Snackbars without actions appear and disappear automatically, while those with actions remain on screen until dismissed. However, a snackbar with updated information can immediately replace an outdated snackbar.

## Accessibility

### Use cases

Users should be able to:

- Be alerted, but not disrupted, when a snackbar appears
- Move focus to an actionable snackbar
- Take action on a snackbar using assistive technology

### Interaction & style

Snackbars with actions shouldn't auto-dismiss. This way, users can read and interact with it at their own pace.

Snackbars without actions can auto-dismiss after a sufficient amount of time, however this can still present difficulties on web without additional feedback.

Each platform has its own requirements for auto-dismiss durations, however common acceptable durations are 4–10 seconds.

![A snackbar saying "Email marked as read" with no button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp0j72d-1.png?alt=media)

*Caption / Legend:*
Auto-dismissing snackbars should remain on screen long enough to read the information

Snackbars use a color intended to stand out against UI elements. Use the default color mapping to avoid color conflict issues.

![Snackbar with a dark container on a UI page in light theme.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp0k0la-2.png?alt=media)

*Caption / Legend:*
Snackbar should visually stand out

### Accessibility requirements on web

On web, auto-dismissing snackbars can be difficult to navigate for people with low vision or who require additional time to perceive information. This information can be made clearer for all users in two ways:

#### 1. Add inline feedback

Information in auto-dismissing snackbars must also be communicated inline or near the action that triggered the snackbar.

For example, update the label on a "Save" button to “Saved”, and trigger an auto-dismissing snackbar that communicates the same message.

#### 2. Make the snackbar actionable

Alternatively, add actions to the snackbar so it doesn't dismiss until acted on. Actionable snackbars shouldn't auto-dismiss.

![A "save" button changes to say "saved", alongside a snackbar that confirms changes were saved.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwp0kqjx-3.png?alt=media)

*Caption / Legend:*
Communicate snackbar information near the action that triggered the snackbar

**Note: Material Web doesn't yet include the snackbar component. This guidance still applies to custom-made snackbars.**

### Focus

Snackbars have the following focus requirements:

- When a snackbar appears, announce the message but don't move focus.
- Don't automatically move focus.
- Don't trap focus in the snackbar. Users should be able to freely navigate in and out.
- On web, a shortcut should exist for users to move focus to snackbars with actions (like Alt+G). Ensure that this shortcut is clearly documented, like in a help article.

Focus exits the snackbar differently per platform:

- Ideally, focus should either return to the element that triggered the snackbar, or go to the next most logical element on the page.
- On Android Compose, focus may move to the nearest visible element, or to the first actionable item on the page.

### Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Moves focus between interactive elements |
| Esc | Dismisses the snackbar when in focus |

### Labeling elements

Snackbars should be announced once they appear on the screen, but shouldn’t grab focus or prevent people from completing their current task.

- On Android and web, use a live region with a polite (queued) announcement instead of an assertive announcement.
- On iOS 17+, snackbars use polite announcements by default.

If a snackbar appears when the app is launched, it should be announced after the page’s title, but not receive focus.

![Snackbar accessibility label examples.](https://lh3.googleusercontent.com/T_KwPf_rpSE3ree_3mFMt2C53xtXu1NZ67-FWB7-dRxb8jIeyk4T3J2-evC6G3Jly9WNV_gjKI-h98xqnBN3F_1npn_okXgBAUS4eo495UM=s1352)

*Caption / Legend:*
Snackbars are announced when they appear, but don't trap focus
