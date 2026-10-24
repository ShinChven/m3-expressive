# Segmented buttons

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/segmented-buttons](https://m3.material.io/components/segmented-buttons)
> Last Updated: 2026-09-16T18:18:17.328Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

starNote:Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the [connected button group](/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

- Segmented buttons can contain icons, label text, or both
- Two variants: single-select and multi-select
- Use for simple choices between two to five items (for more items or complex choices, use chips)

![Two variants of segmented buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qvais-1.png?alt=media)

*Caption / Legend:*
1. Single-select segmented button
2. Multi-select segmented button

## Availability & resources

## M3 Expressive update

**May 2025**

The segmented button is no longer recommended. Use the [connected button group](/m3/pages/button-groups/overview/) instead. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

## Differences from M2

- **Color:** New color mappings and compatibility with dynamic color
- **Icons:** Optional check icon to indicate selected state
- **Layout:** Taller container height of 40dp
- **Name and variants:** Segmented buttons were previously known as toggle buttons. They now have two official variants: single-select and multi-select.
- **Shape:** Fully rounded corners
- **Typography: **Labels use sentence case instead of all caps

![Diagram indicating the fully rounded corner radius of a segmented button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwhr0fyz-2.png?alt=media)

*Caption / Legend:*
Segmented buttons now have a container height of 40dp

![Segmented buttons with M2 color mappings, all caps text labels, boxy shape, and shorter height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fl20oj7ju-example.png?alt=media)

*Caption / Legend:*
M2: Segmented buttons had a small corner radius and label text in all caps

![Segmented buttons with M3 color mappings, sentence case text labels, fully round shape, and taller height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ruslm-4.png?alt=media)

*Caption / Legend:*
M3: Segmented buttons have fully rounded corners, sentence-case text, different height, and new color mappings

## Specs

starNote: Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the [connected button group](/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

![Diagram of segmented button indicating 3 parts of its anatomy.](https://lh3.googleusercontent.com/C6AHlXtNzhGMs8gghgCKSba6mwIpYO0fiDnecohrFF3YJraSvBsQL-eXZnCvQJIU9AqRNgtrrvetX0I4UXwI1JyPxy4_rLYmSlkmsr73D_o=s2048)

*Caption / Legend:*
1. Container
2. Icon (optional for unselected state)
3. Label text

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Segmented button - Outlined

*This component is not recommended. Use connected button groups instead.

For outlined segmented buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.outlined-segmented-button.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Outlined segmented button focus indicator offset |
| `md.comp.outlined-segmented-button.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Outlined segmented button focus indicator thickness |
| `md.comp.outlined-segmented-button.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Outlined segmented button focus indicator color |
| `md.comp.outlined-segmented-button.shape` | `md.sys.shape.corner.full` | SHAPE | Outlined segmented button shape |
| `md.comp.outlined-segmented-button.selected.container.color` | `md.sys.color.secondary-container` | COLOR | Outlined segmented button selected container color |
| `md.comp.outlined-segmented-button.container.height` | 40dp | LENGTH | Outlined segmented button container height |
| `md.comp.outlined-segmented-button.outline.width` | 1dp | LENGTH | Outlined segmented button outline width |
| `md.comp.outlined-segmented-button.selected.pressed.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected pressed icon color |
| `md.comp.outlined-segmented-button.unselected.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected pressed icon color |
| `md.comp.outlined-segmented-button.selected.pressed.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected pressed label text color |
| `md.comp.outlined-segmented-button.unselected.pressed.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected pressed label text color |
| `md.comp.outlined-segmented-button.pressed.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Outlined segmented button pressed state layer opacity |
| `md.comp.outlined-segmented-button.selected.pressed.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected pressed state layer color |
| `md.comp.outlined-segmented-button.unselected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected pressed state layer color |
| `md.comp.outlined-segmented-button.selected.focus.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected focus icon color |
| `md.comp.outlined-segmented-button.unselected.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected focus icon color |
| `md.comp.outlined-segmented-button.selected.focus.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected focus label text color |
| `md.comp.outlined-segmented-button.unselected.focus.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected focus label text color |
| `md.comp.outlined-segmented-button.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Outlined segmented button focus state layer opacity |
| `md.comp.outlined-segmented-button.selected.focus.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected  focus state layer color |
| `md.comp.outlined-segmented-button.unselected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected focus state layer color |
| `md.comp.outlined-segmented-button.selected.hover.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected hover icon color |
| `md.comp.outlined-segmented-button.unselected.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected hover icon color |
| `md.comp.outlined-segmented-button.selected.hover.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected hover label text color |
| `md.comp.outlined-segmented-button.unselected.hover.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected hover label text color |
| `md.comp.outlined-segmented-button.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Outlined segmented button hover state layer opacity |
| `md.comp.outlined-segmented-button.selected.hover.state-layer.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected hover state layer color |
| `md.comp.outlined-segmented-button.unselected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected hover state layer color |
| `md.comp.outlined-segmented-button.disabled.icon.opacity` | - | OPACITY | Outlined segmented button disabled icon opacity |
| `md.comp.outlined-segmented-button.disabled.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button disabled icon color |
| `md.comp.outlined-segmented-button.disabled.label-text.opacity` | - | OPACITY | Outlined segmented button disabled label text opacity |
| `md.comp.outlined-segmented-button.disabled.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button disabled label text color |
| `md.comp.outlined-segmented-button.disabled.outline.opacity` | - | OPACITY | Outlined segmented button disabled outline opacity |
| `md.comp.outlined-segmented-button.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button disabled outline color |
| `md.comp.outlined-segmented-button.with-icon.icon.size` | 18dp | LENGTH | Outlined segmented button icon size |
| `md.comp.outlined-segmented-button.selected.with-icon.icon.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected icon color |
| `md.comp.outlined-segmented-button.unselected.with-icon.icon.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected icon color |
| `md.comp.outlined-segmented-button.label-text.type` | - | TYPOGRAPHY | Outlined segmented button label text type |
| `md.comp.outlined-segmented-button.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Outlined segmented button label text font |
| `md.comp.outlined-segmented-button.label-text.weight` | `md.sys.typescale.label-large.weight` | FONT_WEIGHT | Outlined segmented button label text weight |
| `md.comp.outlined-segmented-button.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Outlined segmented button label text size |
| `md.comp.outlined-segmented-button.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Outlined segmented button label text line height |
| `md.comp.outlined-segmented-button.label-text.tracking` | `md.sys.typescale.label-large.tracking` | FONT_TRACKING | Outlined segmented button label text tracking |
| `md.comp.outlined-segmented-button.selected.label-text.color` | `md.sys.color.on-secondary-container` | COLOR | Outlined segmented button selected label text color |
| `md.comp.outlined-segmented-button.unselected.label-text.color` | `md.sys.color.on-surface` | COLOR | Outlined segmented button unselected label text color |
| `md.comp.outlined-segmented-button.outline.color` | `md.sys.color.outline` | COLOR | Outlined segmented button outline color |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Diagram of segmented button indicating its color mappings](https://lh3.googleusercontent.com/YDundjWkMlYTm9ZC1RERNdV1PS0i86yel8Qe8OjWM7OEoMRC2frzBJzmqAywQu1BSW2eAP2ITtJk4A5aKZTS8GtaMqkR4uipO8VZMqGvMzAg=s2048)

*Caption / Legend:*
Segmented button color roles used for light and dark schemes:

1. On surface
2. Outline
3. Secondary container
4. On secondary container

## States

States are visual representations used to communicate the status of a component or interactive element.  [Learn more about interaction states](/m3/pages/interaction-states/overview)

### Unselected

![Side by side view of segmented buttons with 5 unselected states.](https://lh3.googleusercontent.com/-uNJiGxEkqwavKi0rqCcQ6_NTV7HdAQ9_eZ9b40fw_6Ij00V60BU3iLu88EgzvFUO0prwPdmKRKoc6KiuVmTZLUTsStYc8PArd4Y2C6G6ts=s2048)

*Caption / Legend:*
Unselected button states:

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Selected

![Side by side view of segmented buttons with 4 selected states.](https://lh3.googleusercontent.com/PMYMRAaXu4kiEdyI_9iuWFzh9CDRnmy7VqZ7H34w8Y2jeJy0KUUZekkTUR35ISHPJxnChOXSeLwkG2VHsL8vT3CayNNfqNbNr1ptUwhBbG4=s2048)

*Caption / Legend:*
Selected button states:

1. Selected
2. Hovered on selected
3. Focused on selected
4. Pressed on selected

## Measurements

![Diagram indicating layout values, paddings, and target size for segmented buttons](https://lh3.googleusercontent.com/0shX8UYtu_19Pa79pXEjmEc2GW6UOTINXPAw9K9HoaRUWiUqDJsLbSBiPTvL3Nd315qjZapICkjO0AaTXM93Vx9H_0EOocZddx1YsbmzG38_=s2049)

*Caption / Legend:*
1. Padding and container size
2. Target size

| Attribute | Value |
| --- | --- |
| Container width | Dynamic based on labels |
| Segment width | Container width / total segments (Example: 1/3) |
| Height | 40dp |
| Outline width | 1dp |
| Label alignment | Center |
| Left/right padding | Min 12dp |
| Padding between elements | 8dp |
| Target size | 48dp |

### Density

Density can be used in denser UIs where space is limited. Density is only applied to the height.

![Side by side view of segmented buttons with 4 different density heights](https://lh3.googleusercontent.com/gaOReQpJgFqk-nmLLFHu7hpIFV9BQ6hqnVt8oSC0ZsgpMaeDzc9y-FIcDnkTciniAxMCpPfWD4RMFaEsz33-jSVweXp8mTxgiiL1tPiAATSUWw=s1352)

*Caption / Legend:*
Each step down in density removes 4dp from the height

## High contrast

High contrast mode is an accessibility feature that aims to maximize legibility by using a limited color palette.

![Side by side view of segmented buttons in high contrast mode](https://lh3.googleusercontent.com/-uwWm7CjTlWXCcMBqm78wd4vIsq9kPWr90b6Lq06IVUuejN_KLmjvXil514E2P5wCZr8X2G6k-sHNsfV39zOWwkqWFC7dw-smjpwT7oR1b0=s1352)

*Caption / Legend:*
1. Enabled
2. Selected
3. Focused

## Guidelines

starNote:Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the [connected button group](/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

![Two types of segmented buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7mlxdq-1.png?alt=media)

*Caption / Legend:*
1. Single-select
2. Multi-select

## Usage

Segmented buttons help people select options, switch views, or sort elements.

![A segmented button for switching between restaurants and bar options. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7mnnk2-2.png?alt=media)

*Caption / Legend:*
A segmented button can help switch between viewing restaurant and bar options

There are 2 variants of segmented buttons:

1. Single-select
2. Multi-select

![Side by side view of single and multi-select segmented buttons](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7mz9ev-3.png?alt=media)

*Caption / Legend:*
1. Single-select segmented button can only have 1 segment selected
2. Multi-select segmented button can have multiple segments selected

## Anatomy

![Diagram of segmented button indicating 5 parts of its anatomy](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7n59nt-4.png?alt=media)

*Caption / Legend:*
1. Segment
2. Container
3. Icon (optional)
4. Label text (optional)
5. Selected icon

### Segments

Segmented buttons can have 2-5 segments. Each segment is clearly divided and contains label text, an icon, or both.

![Side by side view of segmented buttons each with additional segment starting from 2 to 5](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7nap4m-5.png?alt=media)

*Caption / Legend:*
There can be anywhere from 2 to 5 segments in single-select and multi-select segmented buttons

![Mobile UI of data usage screen with segmented button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ngd39-6_do.png?alt=media)

*Caption / Legend:*
Segmented buttons are best used for selecting between 2 and 5 choices

![Incorrect use of segmented button with 6 segments](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7o4u2i-7_dont.png?alt=media)

*Caption / Legend:*
Don’t use more than five segments in a single segmented button. Choices should be scoped. If you have more than five choices, consider using another component, such as chips.

### Container

Like common buttons, segmented buttons have fully rounded corners by default.

![Close up detail of segmented button with fully rounded corners](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7o7un8-8.png?alt=media)

*Caption / Legend:*
Segmented buttons have fully rounded corners

### Icons

Icons may be used as labels by themselves or alongside text.

If an icon is used without label text, it must clearly communicate the option it represents.

![Side by side view of segmented buttons with different configurations of icons and label text](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7okkk9-9.png?alt=media)

*Caption / Legend:*
Segmented buttons can include icons

### Label text

Labels should be short and succinct. If a label is too long to fit within its segment, consider using an icon alone.

![Mobile UI of music app showing a segmented button with options for music, albums, podcasts](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7omu8a-10.png?alt=media)

*Caption / Legend:*
Use labels that are as clear and short as possible

![Segmented button with options for day, week, month](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pqz1e-11_do.png?alt=media)

*Caption / Legend:*
Keep labels short and consistent in length

![Segmented button with 4 segments. 3 are next to each other. The 4th is wrapped on a new line.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7prory-12_dont.png?alt=media)

*Caption / Legend:*
Don’t allow segments to wrap onto a new line

![Segmented button with text labels reading day, week, month](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7psieh-13_do.png?alt=media)

*Caption / Legend:*
Use consistent label types

![Segmented button with icons only labels for walking, transit, driving](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pt9gl-14_caution.png?alt=media)

*Caption / Legend:*
Icons can be used in place of labels, but they must clearly communicate their meaning

![Segmented button with 2 icon only options indicating favorite and bookmark and 3rd option with text label reading recent](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7ptzzf-15_dont.png?alt=media)

*Caption / Legend:*
Avoid mixing icon-only labels with text labels. Choose one label type and use that type for all segments.

## Single-select

Use a single-select segmented button to select one option from a set, switch between views, or sort elements from up to five options.

For example, use a single-select segmented button to choose one of a set of sizes, such as this beverage size selector.

![Mobile UI for ecommerce app with segmented button with 3 beverage size options](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7puwq3-16.png?alt=media)

*Caption / Legend:*
A single select segmented button for choosing beverage size

## Multi-select

Use a multi-select segmented button to select or sort from two to five options. Unlike single-select, selection is not required and a user may concurrently select anywhere from all to none of the options.

For example, multi-select segmented buttons can be used to filter by price range when searching for a restaurant.

![Mobile UI for ecommerce app with multi-select segmented button with 4 price range options ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pvpf7-17.png?alt=media)

*Caption / Legend:*
A multi-select segmented button for filtering restaurant search options

## Placement

Segmented buttons should have adequate margins from the edge of the viewport or frame.

On larger screens, set a maximum padding for all button segments so the set doesn't fill the screen.

![Mobile UI with 2-segment segmented button and 4-segment segmented button each with same margins to the viewport edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pwh9i-18.png?alt=media)

*Caption / Legend:*
Allow adequate space for margins. The button container shouldn’t reach the edge of the viewport.

![Game store UI with a segmented button the proper width](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pxu9q-18-a_do.png?alt=media)

*Caption / Legend:*
Set a maximum padding within the segments to ensure usability on larger screens

![Game store UI with a segmented button improperly spanning the entire width of the screen](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7pyzy1-18-b_dont.png?alt=media)

*Caption / Legend:*
Don’t allow segmented buttons to span the full width of larger screens or panes. This can leave too much padding on either side of the segment label, making the button less usable.

Segmented buttons can be placed on other components, such as bottom sheets or full-screen dialogs.

![Mobile UI with segmented button in bottom sheet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q0vrm-19.png?alt=media)

*Caption / Legend:*
A segmented button can be placed on a bottom sheet

## Behavior

When using both icons and label text in segmented buttons, the icon label is replaced by the checkmark icon when the segment is selected.

## Accessibility

starNote:Segmented buttons are no longer recommended in the Material 3 expressive update. For those who have updated, use the [connected button group](/m3/pages/button-groups/overview/) instead, which has mostly the same functionality but with an updated visual design.

## Use cases

Users should be able to:

- Navigate to and activate segmented buttons with assistive tech
- Understand what each segment selection will do

### Interaction & style

For keyboard navigation, **Tab** navigates to the button, and arrow keys navigate between the individual segments.

For single-select segments, **Space** or **Enter** will select or unselect the focused segment.

For multi-select segments, **Space** or **Enter** will:

- Select an unselected segment
- Select all of the segments
- Unselect a selected segment

![Tab moves the focus through segments of a segmented button.  Space or enter selects and unselects segments.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q4935-1.png?alt=media)

*Caption / Legend:*
Use **Tab** to navigate through segments, and **Space **or **Enter** to select and unselect

### Color contrast

Segmented buttons are clusters of similar components, so the outline should have at least a 3:1 contrast ratio with the background or surface. This helps distinguish each button.

Both a checkmark icon and a color change are used to distinguish selection. Make sure color isn’t the only way to show selection.

![The outline of segmented buttons on the surface passes the minimum contrast of 3:1.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q6k39-2_do.png?alt=media)

*Caption / Legend:*
Use an outline with a surface contrast of at least 3:1

![The outline of segmented buttons on the surface fails the minimum contrast of 3:1.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q87p2-3_dont.png?alt=media)

*Caption / Legend:*
The segmented button shouldn't have a contrast outline less than 3:1

### Initial focus

Focus will start in the first segment. Depending on the direction of the language, it is either the most left or the most right segment.

For single select and multi-select, the first segment will be focused regardless of selection state.

![Segmented button focus starts on the left for left-to-right languages and on the right for right-to-left languages.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7q9t4x-4.png?alt=media)

*Caption / Legend:*
Focus begins on the left for left-to-right languages and on the right for right-to-left languages

### Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Navigate between buttons |
| Arrow keys | Navigate inside the component |
| **Space** or **Enter** | Activate a focused button |

### Labeling elements

The accessibility label for a segmented button comes from the visible label text on such as **Relevance** and **Distance**. 

If the segmented button displays icons without label text, the accessibility label describes the action that the button is expressing, such as **Inexpensive** for one currency symbol.

![The the text and accessibility role for the left-most section of a segmented button following “sort by” is  is “relevance.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qcq3h-5.png?alt=media)

*Caption / Legend:*
The label for segmented button matches the text label

Single-select segmented buttons behave like radio buttons: only one option can be selected at a time. The label is **Radiogroup**.

Multi-select buttons behave like checkboxes: more than one option can be selected. The label is **Checkbox**.

![Selected price range segmented buttons range from $ to $$$$. The accessibility label of the $ button is “inexpensive.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flw7qpwe0-6.png?alt=media)

*Caption / Legend:*
The role for the multi-select segmented button is **Checkbox**
