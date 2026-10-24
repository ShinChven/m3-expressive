# Tooltips

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/tooltips](https://m3.material.io/components/tooltips)
> Last Updated: 2026-07-17T07:03:02.412Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use tooltips to add additional context to a button or other UI element
- Two variants: plain and rich
- Use plain tooltips to describe elements or actions of icon buttons
- Use rich tooltips to provide more details, like describing the value of a feature
- Rich tooltips can include an optional title, link, and buttons

![2 variants of tooltips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6q4295-01.png?alt=media)

*Caption / Legend:*
1. Plain tooltip
2. Rich tooltip

## Availability & resources

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color
- **Shape**: Rich tooltips have more rounded corners

![GM2 rich tooltip.](https://lh3.googleusercontent.com/eJToL16cXcvuWuH7Ajb0sRtM7yFr6qMf_tbIdsR5hAfrIRinT4UfyLsr2Me5goaDHO1RAXuagPp28FvTXNegY6hZ64NOupwt14CTLHZZjsKk=s1004)

*Caption / Legend:*
M2: Rich tooltips have slightly rounded corners

![GM3 rich tooltip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6q4dmm-03.png?alt=media)

*Caption / Legend:*
M3: Rich tooltips have more rounded corners and support dynamic color

## Specs

## Tokens & specs

Select a component variant below to see its attributes, tokens, and values.

#### Design Tokens: Tooltip - Plain

*For plain tooltips.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.plain-tooltip.supporting-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Plain tooltip supporting text color |
| `md.comp.plain-tooltip.supporting-text.type` | - | TYPOGRAPHY | Supporting text type style |
| `md.comp.plain-tooltip.supporting-text.font` | `md.sys.typescale.body-small.font` | FONT_NAMES | Plain tooltip supporting text font |
| `md.comp.plain-tooltip.supporting-text.weight` | `md.sys.typescale.body-small.weight` | FONT_WEIGHT | Plain tooltip supporting text weight |
| `md.comp.plain-tooltip.supporting-text.size` | `md.sys.typescale.body-small.size` | FONT_SIZE | Plain tooltip supporting text size |
| `md.comp.plain-tooltip.supporting-text.line-height` | `md.sys.typescale.body-small.line-height` | LINE_HEIGHT | Plain tooltip supporting text line height |
| `md.comp.plain-tooltip.supporting-text.tracking` | `md.sys.typescale.body-small.tracking` | FONT_TRACKING | Plain tooltip supporting text tracking |
| `md.comp.plain-tooltip.container.shape` | `md.sys.shape.corner.extra-small` | SHAPE | Plain tooltip container shape |
| `md.comp.plain-tooltip.container.color` | `md.sys.color.inverse-surface` | COLOR | Plain tooltip container color |

#### Design Tokens: Tooltip - Rich

*For rich tooltips.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.rich-tooltip.action.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Rich tooltip action hover state layer opacity |
| `md.comp.rich-tooltip.action.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Rich tooltip action hover state layer color |
| `md.comp.rich-tooltip.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Rich tooltip container surface tint layer color |
| `md.comp.rich-tooltip.action.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.rich-tooltip.action.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Rich tooltip action label text font |
| `md.comp.rich-tooltip.action.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Rich tooltip action label text weight |
| `md.comp.rich-tooltip.action.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Rich tooltip action label text size |
| `md.comp.rich-tooltip.action.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Rich tooltip action label text line height |
| `md.comp.rich-tooltip.action.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Rich tooltip action label text tracking |
| `md.comp.rich-tooltip.supporting-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.rich-tooltip.supporting-text.font` | `md.sys.typescale.body-medium.font` | FONT_NAMES | Rich tooltip supporting text font |
| `md.comp.rich-tooltip.supporting-text.weight` | `md.sys.typescale.body-medium.weight` | FONT_WEIGHT | Rich tooltip supporting text weight |
| `md.comp.rich-tooltip.supporting-text.size` | `md.sys.typescale.body-medium.size` | FONT_SIZE | Rich tooltip supporting text size |
| `md.comp.rich-tooltip.supporting-text.line-height` | `md.sys.typescale.body-medium.line-height` | LINE_HEIGHT | Rich tooltip supporting text line height |
| `md.comp.rich-tooltip.supporting-text.tracking` | `md.sys.typescale.body-medium.tracking` | FONT_TRACKING | Rich tooltip supporting text tracking |
| `md.comp.rich-tooltip.subhead.type` | - | TYPOGRAPHY | Type style |
| `md.comp.rich-tooltip.subhead.font` | `md.sys.typescale.title-small.font` | FONT_NAMES | Rich tooltip subhead font |
| `md.comp.rich-tooltip.subhead.weight` | `md.sys.typescale.title-small.weight` | FONT_WEIGHT | Rich tooltip subhead weight |
| `md.comp.rich-tooltip.subhead.size` | `md.sys.typescale.title-small.size` | FONT_SIZE | Rich tooltip subhead size |
| `md.comp.rich-tooltip.subhead.line-height` | `md.sys.typescale.title-small.line-height` | LINE_HEIGHT | Rich tooltip subhead line height |
| `md.comp.rich-tooltip.subhead.tracking` | `md.sys.typescale.title-small.tracking` | FONT_TRACKING | Rich tooltip subhead tracking |
| `md.comp.rich-tooltip.action.focus.label-text.color` | `md.sys.color.primary` | COLOR | Rich tooltip action focus label text color |
| `md.comp.rich-tooltip.action.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Rich tooltip action focus state layer opacity |
| `md.comp.rich-tooltip.action.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Rich tooltip action focus state layer color |
| `md.comp.rich-tooltip.action.hover.label-text.color` | `md.sys.color.primary` | COLOR | Rich tooltip action hover label text color |
| `md.comp.rich-tooltip.action.label-text.color` | `md.sys.color.primary` | COLOR | Rich tooltip action label text color |
| `md.comp.rich-tooltip.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Rich tooltip supporting text color |
| `md.comp.rich-tooltip.subhead.color` | `md.sys.color.on-surface-variant` | COLOR | Rich tooltip subhead color |
| `md.comp.rich-tooltip.container.shape` | `md.sys.shape.corner.medium` | SHAPE | Rich tooltip container shape |
| `md.comp.rich-tooltip.container.shadow-color` | `md.sys.color.shadow` | COLOR | Rich tooltip container shadow color |
| `md.comp.rich-tooltip.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Rich tooltip container elevation |
| `md.comp.rich-tooltip.container.color` | `md.sys.color.surface-container` | COLOR | Rich tooltip container color |
| `md.comp.rich-tooltip.action.pressed.label-text.color` | `md.sys.color.primary` | COLOR | Rich tooltip action pressed label text color |
| `md.comp.rich-tooltip.action.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Rich tooltip action pressed state layer opacity |
| `md.comp.rich-tooltip.action.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Rich tooltip action pressed state layer color |


## Plain tooltip

![2 elements of a plain tooltip.](https://lh3.googleusercontent.com/zHG-py73NpfFfT9V5YL21rpv8EdODG2H97qgSjjGF4IaiQlAmma5D47553mD-KCljwP7WL8j8lbyEr2zOU4jNeT5uIu4ySegOvopalEVZxQ1=s2048)

*Caption / Legend:*
1. Supporting text
2. Container

### Plain tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![2 color roles of a plain tooltip.](https://lh3.googleusercontent.com/Vf161JCMtFZVXhyzhmfRoDmGW_vYVmOm5QdZOy8djJu0aEPo-gylreVY1ooQuFsAy-VFBqzRHbt1Qp6eF6znt5fJM98s4F43QbuZlmm_NHqR=s2048)

*Caption / Legend:*
Plain tooltip color roles used for light and dark themes:

1. Inverse on surface
2. Inverse surface

### Plain tooltip measurements

![Measurements of a plain tooltip.](https://lh3.googleusercontent.com/abK2uBeEApgbWbQQrMibCEslnADu90AFpFRPbT9RVSeKZfO8baP5s6myVNJKPIUtmc_S-X99Pt046jQuk_MyMPv4IvvtWrRWieaqNLxR0SQ=s2048)

*Caption / Legend:*
Plain tooltip padding and size measurements

| Attribute | Value |
| --- | --- |
| Container height | 24dp |
| Padding | 8dp |

## Rich tooltip

![4 elements of a rich tooltip.](https://lh3.googleusercontent.com/IP6aFfF9CPT86pHLyDQsPlpgpwRfiWWm4SrvrDszC_Mu_Y6iKdMcOlLuBrITk7y8afU-PxXvO26X0iRNTyF4uqvJjw6qmmyI2t7zUCsKbCUbEA=s2048)

*Caption / Legend:*
1. Subhead
2. Container
3. Supporting text
4. Text button

### Rich tooltip colors

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![4 color roles of a rich tooltip.](https://lh3.googleusercontent.com/WodvJBwtv0NFdfsgMkOfxWI698jM_8D6CP7cqU4CmxliBFAtsYOv1CqBQTgkHIP1gkYYLWMaTB9kISoEVnKcS3BCWCtOkm9pIkmmK91Z9yA=s2048)

*Caption / Legend:*
Rich tooltip color roles used for light and dark themes:

1. On surface variant
2. Surface container
3. On surface variant
4. Primary

### Rich tooltip measurements

![Measurements of a rich tooltip.](https://lh3.googleusercontent.com/pWZE_wQc3sD5MfnKWOQ1zSkmWFK-kLD9AHIu7iUz7DPUnF9xsNdzNhcOLz6f3jTBP-8BSkD-sKs32u3KB-9ButLnL3l_p4DJw-je_waZCy2cZw=s2048)

*Caption / Legend:*
Rich tooltip padding and size measurements

| Attribute | Value |
| --- | --- |
| Top padding | 12dp |
| Bottom padding | 8dp |
| Left and right padding | 16dp |

### Rich tooltip configurations

Rich tooltips can have a headline, body, and up to two buttons. The headline and number of buttons can be configured.

![5 common configurations of a rich tooltip.](https://lh3.googleusercontent.com/ugboOBv4d02ZjiINyFUTI_S1IvPfMXxkgoCqYcmns1a23omQzQaAHWU5NzrwD7G96VQpAU3oi6sx14qtL_RTAIbZJXwCS9VAWV7m6NpCLlFm=s2048)

*Caption / Legend:*
1. Subhead, supporting text, and two buttons
2. Subhead, supporting text, and one button
3. Subhead and supporting text
4. Supporting text and one button
5. Supporting text and two buttons

## Guidelines

![A plain tooltip labeling a button, and a rich tooltip announcing new settings available.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qnzgx-01.png?alt=media)

*Caption / Legend:*
Plain and rich tooltips serve different purposes

## Usage

A tooltip provides additional context for a UI element.

**Plain tooltips**
Plain tooltips briefly describe a UI element. They're best used for labelling UI elements with no text, like icon-only buttons and fields.

**Rich tooltips**
Rich tooltips provide additional context about a UI element. They can optionally contain a subhead, buttons, and hyperlinks.

Rich tooltips are best used for longer text like definitions or explanations.

![2 variants of tooltips.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qs96y-02.png?alt=media)

*Caption / Legend:*
1. Plain tooltip
2. Rich tooltip

![Plain tooltip labeling an icon-only button in Google Meet as "Present now".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qu5gx-03-do.png?alt=media)

*Caption / Legend:*
Use plain tooltips to label icon-only buttons

![Button with an icon and label text saying "Edit". It has a plain tooltip on hover that also says "Edit".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6quvhe-04-dont.png?alt=media)

*Caption / Legend:*
Plain tooltips aren't needed when the UI element already has label text

![Rich tooltip describing a new button for adding people. It has a subhead, description, and a button to learn more.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qx7on-05-do.png?alt=media)

*Caption / Legend:*
Use rich tooltips to provide extra information and actions about a UI element or new feature

![Rich tooltip explaining that an action is destructive and permanently deletes files.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6qywbu-6-dont.png?alt=media)

*Caption / Legend:*
Don't hide critical information within tooltips as it’s easy to miss. Use an interruptive dialog instead.

## Anatomy

### Plain tooltip

![2 elements of a plain tooltip.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r0a08-07.png?alt=media)

*Caption / Legend:*
1. Container
2. Supporting text

### Supporting text

![Plain tooltip for an icon-only button shaped like a gear. The tooltip text is "Settings".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r2ci0-08-do.png?alt=media)

*Caption / Legend:*
Briefly describe a UI element

![Plain tooltip for the account switcher. The supporting text includes the user's name and email address on new lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r3rse-09-caution.png?alt=media)

*Caption / Legend:*
Avoid wrapping text to multiple lines or including many pieces of information

### Rich tooltip

![4 elements of a rich tooltip.](https://lh3.googleusercontent.com/Qrg3y9UWvNZtKfeefdMriNm0BUWNB_4KL5lW4pDAdtSVGnRbdnJq_bOmpBVvYt7o6eS-pUOtaKvGpPpVvtZqoueoaGb3xCJjE1zXjuYvf1o3=s2048)

*Caption / Legend:*
1. Subhead (optional)
2. Container
3. Supporting text
4. Text button (optional)

### Subhead (optional)

Keep subheads brief, ideally to one line. They should summarize or describe the message of the rich tooltip.

Subheads are important to include when the rich tooltip appears automatically, like when the page loads.

![Rich tooltip with a brief subhead, supporting text, and a text button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6r9edz-11-do.png?alt=media)

*Caption / Legend:*
Summarize the message in a few words

![Rich tooltip with a subhead wrapping to multiple lines.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ra39j-12-dont.png?alt=media)

*Caption / Legend:*
Avoid wrapping to more than one line

### Text buttons (optional)

Rich tooltips can have up to two text buttons. These should be brief and relevant to the message in the supporting text.

Keep buttons short so they can be side by side. Avoid stacking them when possible.

![Rich tooltip with 2 buttons stacked on each other.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rdax0-13-Caution.png?alt=media)

*Caption / Legend:*
Avoid stacking buttons

## Placement

### Plain tooltips

By default, plain tooltips are positioned directly above the parent element.

- If there's a visual boundary, like a button, the distance is 4dp
- If there's no visual boundary, like with text baselines, the distance is 8dp

If the element is in an app bar, the plain tooltip appears below the element at the same distance.

![Plain tooltip appearing 4dp below a button with a clear visual boundary.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rg1hz-14.png?alt=media)

*Caption / Legend:*
Plain tooltip with a 4dp distance between the target and tooltip

### Rich tooltips

By default, rich tooltips are positioned to the bottom right of the parent element. They adjust position to avoid going off screen.  Tooltips shouldn't cover the parent element.

**Dynamic positioning**
The position of the tooltip adjusts in increments of 8dp to avoid going off-screen.

**Desktop placement**
On desktop, tooltips may appear centered below the parent element and remain visible while moving within the target region.

![A rich tooltip in 4 different corners. It   changes position to remain fully on screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6riq0z-15.png?alt=media)

*Caption / Legend:*
Four different rich tooltip locations based on dynamic positioning

## Behavior

To show a tooltip, hover on the parent element on desktop, or tap and hold the element on mobile. Persistent rich tooltips only appear when clicked or tapped.

### Transient by default

Both plain and rich tooltips disappear 1.5 seconds after navigating away from the target region.

Triggering a new tooltip immediately closes any other open tooltip.

![2 buttons both showing plain tooltips at once.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ro0ii-17-dont.png?alt=media)

*Caption / Legend:*
Only display one tooltip at a time

### Persistent rich tooltips

Persistent rich tooltips appear when either:

- The parent element is clicked
- The page loads and a new feature is being explained

Persistent rich tooltips remain active even when leaving the target region. They only disappear once a person interacts with another UI element. Hovering doesn't trigger the tooltip.

When appearing on page load, the tooltip can introduce and explain new features on various parent elements.

Avoid using persistent rich tooltips on icon buttons.

![Persistent rich tooltip about a new sharing feature in the Photos app. The button says  "Learn more.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6rq50p-18-dont.png?alt=media)

*Caption / Legend:*
Don’t use a persistent rich tooltip on icon buttons

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Receive a tooltip message
- Activate a tooltip with a keyboard or switch input

## Interaction & style

Plain and rich tooltips without required actions should remain on screen long enough for people to receive the information without disrupting their existing flow or task.

Tooltips can appear when an actionable element, like a button or navigation rail, is hovered or focused. However, this tooltip shouldn’t hide crucial information.

Rich tooltips can also appear by selecting an element instead of hovering or focusing on it.

![A cursor hovers over a favorite button producing text about finding this item later in favorites.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ru5uh-02.png?alt=media)

*Caption / Legend:*
Tooltips can appear on hover or focus to explain actions

![An information button in a selected state produces text about finding this item later in favorites.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ruf33-03.png?alt=media)

*Caption / Legend:*
Rich tooltips can appear when an element is selected

## Focus order

Tooltip containers should not block important information or prevent a person from completing an action.

Focus order within the rich tooltip moves top to bottom between interactive elements.

Avoid trapping screen reader and keyboard focus on rich tooltips.

People should be able to move linearly through the rest of the page.

![Different elements of a rich tooltip are given a focus order, moving from parent element to inline link to text button.](https://lh3.googleusercontent.com/KCWqivAVbjIzMGBp1AVQbceVT02tQdKQSNJOd-FA_ARUYwMLQX2GUYZi55K0wxG_c2dYdGFnsBnB-_1n-m8thxhCgVavyU0W9_Dz5C9aVBLEdA=s1352)

*Caption / Legend:*
1. Parent element
2. Inline link
3. Text button

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** | Focus lands on button, if available |
| **Space** or **Enter** | Activates the focused element |

## Labeling elements

Tooltips should have the **Tooltip** role, or similar.

Label all elements in the tooltip according to their own accessibility guidance.

![A rich and plain tooltip with all elements matched to accessibility labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme6ry9ry-05.png?alt=media)

*Caption / Legend:*
The tooltip container should have the **Tooltip** role
