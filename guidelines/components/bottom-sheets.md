# Bottom sheets

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/bottom-sheets](https://m3.material.io/components/bottom-sheets)
> Last Updated: 2026-07-28T07:45:12.661Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use bottom sheets in compact and medium breakpoints
- Two variants: standard and modal
- Content should be additional or secondary (not the app’s main content)
- Bottom sheets can be dismissed in order to interact with the main content

![Side by side view of standard bottom sheet modal bottom sheet](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3m82k-1.png?alt=media)

*Caption / Legend:*
1. Standard bottom sheet
2. Modal bottom sheet

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Shape: Bottom sheets have a 28dp top corner radius
- Layout: New max-width of 640dp and an optional drag handle with an accessible 48dp hit target

![Diagram of floating sheet set on screen background](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp3mrmz-2.png?alt=media)

## Specs

Modal bottom sheets are above a scrim while standard bottom sheets don't have a scrim. Besides this, both variants of bottom sheets have the same specs.

![Diagram of container, drag handle, scrim](https://lh3.googleusercontent.com/zukI3AJrMtdfLMWQT4wlAlMvIUfkIHpc5QmTQNqYJpxh-cV8QEJcVsy9Yc198HJsK1Od4d-cEiCfOKkcY5nhzjVVmtfGd9e3Wy75vUnWqSE=s2048)

*Caption / Legend:*
1. Container
2. Drag handle (optional)
3. Scrim

## Tokens and specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Sheets - Bottom

*For bottom sheets.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.sheet.bottom.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Sheet bottom focus indicator offset |
| `md.comp.sheet.bottom.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Sheet bottom focus indicator thickness |
| `md.comp.sheet.bottom.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Sheet bottom focus indicator color |
| `md.comp.sheet.bottom.docked.drag-handle.opacity` | - | OPACITY | Sheet bottom docked drag handle opacity |
| `md.comp.sheet.bottom.docked.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Sheet bottom docked container surface tint layer color |
| `md.comp.sheet.bottom.docked.drag-handle.height` | 4dp | LENGTH | Sheet bottom docked drag handle height |
| `md.comp.sheet.bottom.docked.drag-handle.width` | 32dp | LENGTH | Sheet bottom docked drag handle width |
| `md.comp.sheet.bottom.docked.drag-handle.color` | `md.sys.color.on-surface-variant` | COLOR | Sheet bottom docked drag handle color |
| `md.comp.sheet.bottom.docked.minimized.container.shape` | `md.sys.shape.corner.none` | SHAPE | Sheet bottom docked minimized container shape |
| `md.comp.sheet.bottom.docked.container.shape` | `md.sys.shape.corner.extra-large.top` | SHAPE | Sheet bottom docked container shape |
| `md.comp.sheet.bottom.docked.standard.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Sheet bottom docked standard container elevation |
| `md.comp.sheet.bottom.docked.modal.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Sheet bottom docked modal container elevation |
| `md.comp.sheet.bottom.docked.container.color` | `md.sys.color.surface-container-low` | COLOR | Sheet bottom docked container color |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Two diagrams featuring color opposites of scrim, container, drag handle](https://lh3.googleusercontent.com/DRToa14TKB2-AlRHwUn1aPr1fykKEPGlGiKLDxHYv9B9e5CeupNBR-mM7uQOfp_OK-ZHdqjgboBeyE7GhlNtsThqGvX87OLsiAoci2zkTRBo=s2048)

*Caption / Legend:*
Bottom sheet color roles used for both light and dark schemes:

1. Scrim*
2. On surface variant
3. Surface container low

*On Android platforms, the scrim color and opacity is automatically handled by the system UI.

## Measurements

![Bottom sheet on larger device with 56dp top and 56dp side margins](https://lh3.googleusercontent.com/gVNIjqiBu0DjSUv-lwnH3xIvACuZ6S4LWuUrUHe_KA0V_GlU3w-iwKPM-ka_6KfmjFuQJ1k6qrmm2b0y_6ZJcLd4alet31vP-0-nUdrpj_k=s2048)

*Caption / Legend:*
Bottom sheet padding and size measurements

Bottom sheets span the full window width up to 640dp. When the window width exceeds 640dp, bottom sheets adjust to have a top margin of 56dp and side margins of 56dp.

| Attribute | Value |
| --- | --- |
| Drag handle alignment (horizontal) | Center |
| Drag handle padding top/bottom | 22dp |
| Top margin | 72dp |
| Top margin (window width > 640dp) | 56dp |
| Start/end margin (window width > 640dp) | 56dp |
| Width | Full width, up to max-width 640dp |
| Height | Variable |

## Guidelines

![Two variants of bottom sheets.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7eqa7-1.png?alt=media)

*Caption / Legend:*
1. Standard bottom sheets
2. Modal bottom sheets

## Usage

Bottom sheets display supplementary content and actions on a mobile screen.

![Photo sharing bottom sheet with contact list, app icons, and action buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7jb72-2.png?alt=media)

*Caption / Legend:*
Bottom sheet containing contacts and applications

Bottom sheets are a versatile component that can contain a wide variety of information and layouts, including menu items (in list or grid layouts), actions, and supplemental content.

![Bottom sheet displaying 3 menu options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7jy07-3.png?alt=media)

*Caption / Legend:*
Bottom sheet with menu items in a list

## Anatomy

A container is the only required element of a bottom sheet. Bottom sheet layouts can vary widely to support the kinds of content they contain.

![3 elements of a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7l25p-4.png?alt=media)

*Caption / Legend:*
1. Container
2. Drag handle (optional)
3. Scrim (modal only)

### Container

Bottom sheet containers hold all bottom sheet elements. Their size is determined by the space those elements occupy.

The container is the only required element of a bottom sheet. All other elements are optional.

![Empty bottom sheet container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7llpd-5.png?alt=media)

*Caption / Legend:*
Bottom sheets are flexible containers that adapt to their content and available space

### List items (optional)

Lists are a continuous group of text or images. List items can include label text, icons, and text buttons, among other elements.

![A bottom sheet displaying a list of actions for a song.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7m0a5-6.png?alt=media)

*Caption / Legend:*
Bottom sheet containing a list with icons

### Dividers (optional)

Dividers can be used to separate related content in bottom sheets.

![Bottom sheet with image action buttons and contact list separated by an inset divider. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7t324-7.png?alt=media)

*Caption / Legend:*
Bottom sheet with a divider separating kinds of actions

### Media (optional)

**Thumbnail**
Bottom sheets can include thumbnails for an avatar or logo.

**Image**
Bottom sheets can include photos, illustrations, and other graphics, such as weather icons.

**Video**
Bottom sheets can include video.

![A bottom sheet displaying various media formats, including thumbnails, images, and video.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7tqb3-8.png?alt=media)

*Caption / Legend:*
Bottom sheets can contain thumbnails, images, and video

## Standard bottom sheets

Standard bottom sheets co-exist with the screen’s main UI region and allow for simultaneously viewing and interacting with both regions, especially when the main UI region is frequently scrolled or panned.

Use a standard bottom sheet to display content that complements the screen’s primary content, such as an audio player in a music app.

![Bottom sheet with music player controls visible while browsing albums.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7ubva-9.png?alt=media)

*Caption / Legend:*
The music player in this standard bottom sheet allows people to control their music while browsing albums

At full-screen height, standard bottom sheets contain a collapse icon in an app bar to return to their initial position.

Standard bottom sheets can contain supplementary content that continues below the screen, such as location information over a map.

## Modal bottom sheets

Like dialogs, modal bottom sheets appear in front of app content, disabling all other app functionality when they appear, and remaining on screen until confirmed, dismissed, or a required action has been taken.

![A modal sheet with filter options to categorize files in the app. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp7yz9g-11.png?alt=media)

*Caption / Legend:*
A modal bottom sheet must be interacted with or dismissed. Its blocking behavior makes it suitable for a menu, such as in this files app, to help people focus on their available choices.

Use a modal bottom sheet as an alternative to inline menus or simple dialogs on mobile, especially when offering a long list of action items, or when items require longer descriptions and icons.

Modal bottom sheets are used in mobile apps only.

![A modal bottom sheet displayed as an alternative to a traditional menu, presenting a list of actions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvqcnuc5-12.png?alt=media)

*Caption / Legend:*
Modal bottom sheets can be used instead of menus to present additional actions

### Visibility

To provide access to its top actions, the initial vertical position of modal bottom sheets is capped at 50% of the screen height.

Modal bottom sheets whose contents exceed 50% of the screen height can then be pulled across the full screen and scrolled internally to access their remaining items.

![A modal bottom sheet covering half of the screen, so both images and actions are accessible.](https://lh3.googleusercontent.com/0hAPkL3uzyvqMvvRWFno-49bG4xDEWveRgFgP06QiwL9TTPtIatzwZnFBVZI70GmAn_NyU9lVQQ-8JkRQ8Zo7385AFopIBou3f5sD8YuZLIT=s1352)

*Caption / Legend:*
The initial vertical position of modal bottom sheets can't exceed 50% of the screen height

Modal bottom sheets appear when triggered by a user action, such as tapping a button or an overflow icon. They can be dismissed by:

- Tapping a menu item or action within the bottom sheet
- Tapping the scrim
- Swiping the sheet down
- Using a close affordance within the bottom sheet’s app bar, if available

Display a close affordance in a full-screen modal bottom sheet.

![A modal bottom sheet disappearing by tapping the scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp80k55-14.png?alt=media)

*Caption / Legend:*
Tapping the scrim dismisses a modal bottom sheet

![A modal bottom sheet disappearing by swiping the sheet down.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp81a31-Bottom_sheet_dismiss_swipe.png?alt=media)

*Caption / Legend:*
A modal bottom sheet can be dismissed by swiping the sheet down

## Responsive layout

### Compact breakpoint

In compact breakpoints, like mobile devices, bottom sheets extend across the width of a screen and are elevated above the primary content.

![A bottom sheet extended to the width of a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp86bt1-15.png?alt=media)

*Caption / Legend:*
Bottom sheets should extend to the width of the screen on mobile

### Medium and expanded breakpoints

For larger screens with medium and expanded breakpoints, bottom sheets have a default max-width to prevent undesired layouts and awkward spacing. However, this can be overridden if needed. For more complex tasks and flows, consider using a non-transient surface such as a floating sheet.

![A bottom sheet extended to its max-width on a large screen device, not spanning the full screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp86pgb-16.png?alt=media)

*Caption / Legend:*
Bottom sheets on larger screens like tablet have a max width that can be overridden

On larger expanded breakpoints, like desktop, a bottom sheet can be swapped for a side sheet that shows similar content.

![A side sheet on desktop.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp877lp-17.png?alt=media)

*Caption / Legend:*
Side sheets can contain the same content as bottom sheets and may be more suitable for desktop

## Behavior

Bottom sheets can offer an expansion option where the sheet is fully raised and toggled between a collapsed and expanded state. This provides a more predictable footprint of the sheet, and can be set by the system or toggled by the user.

![Bottom sheet fully raised, showing photo actions, sharing options, and albums to add the photo to.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp87qvd-18.png?alt=media)

*Caption / Legend:*
A bottom sheet for sharing can appear fully raised if needed

![Collapsed bottom sheet, showing focused set of options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8870t-19.png?alt=media)

*Caption / Legend:*
Alternately, a bottom sheet for sharing can appear collapsed for a more focused set of actions

### Custom positioning

The drag handle can be dragged or selected to change the bottom sheet height. 

Sheets should be able to cycle through preset heights and close completely without dragging. Selecting the drag handle should toggle through preset heights or close the sheet, while selecting the scrim should always close the bottom sheet.

If the bottom sheet has multiple preset heights but can’t use a drag handle, Material requires the inclusion of a single-pointer alternative to change height.

![Bottom sheet with a visible drag handle that can be used to adjust its height.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8argg-20.png?alt=media)

*Caption / Legend:*
Interacting with the drag handle can quickly move a bottom sheet through preset heights

![Bottom sheet resized using the visible drag handle.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8b6u5-21.png?alt=media)

*Caption / Legend:*
A bottom sheet can automatically resize to another height after interacting with the drag handle

### Scrolling

Bottom sheets can be horizontally scrolled, independent of the rest of the screen’s content.

![Bottom sheet that can be scrolled horizontally.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8bo42-22.png?alt=media)

*Caption / Legend:*
Bottom sheets should be scrollable when their content exceeds the initial viewable height

### Back

On Android, a gesture called predictive back allows a user to swipe left or right on the bottom sheet.

- Bottom sheet detaches from the left and right edges of the screen to signal it will close
- Previous screen is revealed in a preview

A list of compatible components is available in the [gestures article](/m3/pages/gestures).

## Accessibility

## Use cases

Users should be able to:

- Resize bottom sheets without having to rely on touch gestures

## Interaction & style

### Touch target area

The top 48dp portion of the bottom sheet is interactive when user-initiated resizing is available and the drag handle is present.

![Touch target area of a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8g5p9-1.png?alt=media)

*Caption / Legend:*
To ensure touch target accessibility, the top portion of a bottom sheet can be reserved for resize interactions

### Initial focus

The optional drag handle can be focused in the tab order and interacted with using non-touch inputs, such as keyboard or switch controls.

![Focus on the drag handle of a bottom sheet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvp8gmd5-bottom-sheet-focus.png?alt=media)

*Caption / Legend:*
Visible focus shown on the drag handle affordance

### Dragging

Include a single-pointer alternative for any action that can be completed by dragging.

Drag handles should cycle the bottom sheet through available heights when selected. If a drag handle can’t be used, add a button to do this action.

![Bottom sheet with focused drag handle at lower preset height.](https://lh3.googleusercontent.com/oTYgjX2EiyzXtztzy6pKLtl4orLwt83InSn2nHXrJuSKwwBhO-R1pllkNzYnilWk-qI5_eNNob5zUMIP1SSUAOOPOspSu6g7aWhV4--hKz0=s656)

*Caption / Legend:*
Interacting with the drag handle can quickly move a bottom sheet through preset heights

![Bottom sheet with drag handle at higher preset height.](https://lh3.googleusercontent.com/Qbh70YFT_L81Y-982OVil6qLEB90imUJs9wbRQLdxVkcYIPlYik995maTieLEuP8Oc-T1-2WrcTuO_ZBCd2kwc9yD-9SgngSP2FvrpqzCubGcw=s656)

*Caption / Legend:*
A bottom sheet can automatically resize to another height after interacting with the drag handle

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Focus lands on drag handle |
| Space / Enter | Toggles between available heights |

## Labeling

Label only the drag handle. The accessibility role for the drag handle is “button.”

![Labeled drag handle with role of button.](https://lh3.googleusercontent.com/rQnID5aS5_ORuWh7Yp2LhBOLLPZQrEvPmowQpgTLFeBfTwyBEMJjvvOYIo991CA4BiA9o4uEZBALyTu1klLA5adv9b49GO3gJuCp_2IIQxsBVQ=s1352)

*Caption / Legend:*
Label the drag handle
