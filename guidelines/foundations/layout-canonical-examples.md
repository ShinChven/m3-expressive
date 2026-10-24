# Canonical examples

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/foundations/layout/canonical-examples](https://m3.material.io/foundations/layout/canonical-examples)
> Last Updated: 2026-07-17T04:57:39.159Z

---

## Summary

Canonical layout examples are designs for common screen layouts across all breakpoints

**Table of Sections:**
- Overview
- Feed
- List-detail
- Supporting pane

---

## Overview

Canonical layout examples demonstrate how to implement the layout scaffold. They’re also available in code to provide a strong starting point for your product.

Each layout example considers common use cases and components to address expectations and user needs for how products adapt across breakpoints (previously window size classes).

![A messaging app on desktop mapping bar, rail, and pane regions.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp72kkvb-LD%20adapt%20C.png?alt=media)

*Caption / Legend:*
A layout scaffold can include bar, rail, and pane regions

## Availability & resources

| Type | Resource | Status |
| --- | --- | --- |
| Design | [M3 Design Kit (Figma)](https://www.figma.com/community/file/1035203688168086460) | Available |
| Implementation | [Jetpack Compose: Canonical layouts](https://developer.android.com/develop/ui/compose/layouts/adaptive/canonical-layouts) | Available |
| [Android Views (MDC-Android): Canonical layouts](https://github.com/android/user-interface-samples/tree/main/CanonicalLayouts) | Available |  |

## Examples

There are three canonical layout examples: feed, list-detail, and supporting pane. Each example has configurations for compact, medium, and expanded breakpoints.

Use these canonical examples as a starting point to create layouts for a product.

### Feed

Use a feed layout to arrange elements like cards in a configurable grid for a quick, convenient view of a large amount of content.

[More on feed layouts](/m3/pages/canonical-examples/feed/)

![A course list in a feed layout at a medium breakpoint. 8 cards in a single pane, with bar above and leading rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp72yab6-Feed%20adapt%20B.png?alt=media)

### List-detail

Use a list-detail layout to display explorable lists of items alongside each item’s details. This layout divides the window into two side-by-side panes.

[More on list-detail layouts](/m3/pages/canonical-examples/list-detail/)

![List-detail layout of a messaging app. Pane 1 lists all conversations. Pane 2 shows the selected message.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp72ypkq-LD%20adapt%20B.png?alt=media)

### Supporting pane

Use a supporting pane layout to organize content into primary and secondary sections:

- Primary display area: Contains the main content and occupies the majority of the window (typically about two-thirds)
- Secondary display area: Presents supporting content in a panel that takes up the remainder of the space

[More on supporting pane layouts](/m3/pages/canonical-examples/supporting-pane/)

![Supporting pane layout. The primary pane shows course details. The  secondary pane lists “Lessons in this course”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp72z1no-SP%20adapt%20B.png?alt=media)

## Advanced custom layouts

To create a custom layout, build on top of canonical layouts or layer scaffold elements.

### Layering

Use the [levitate](/m3/pages/scaffold/panes#96bf71b8-04b8-4fff-97c7-9bc782fbf401) adaptive strategy to create a layered layout. Layering panes above other content can create a focused, task-oriented experience such as:

- Reviewing a shopping basket
- Responding to comments
- Creating a calendar event

![Custom layout. A shopping basket floats above a clothing product page.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp731djr-ACL%20Adapt%20B2.png?alt=media)

*Caption / Legend:*
Layering panes helps people focus on a specific task

## Feed

A feed layout uses a grid composition to enable quick content browsing and discovery. Key use cases include news, photos, and social media.

![Education app using a feed layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp736am6-Feed%20adapt%20hero.png?alt=media)

*Caption / Legend:*
Feed layouts help people quickly browse and discover content

## Usage

Use a feed layout to show different pieces of content through cards and lists.

Feeds support displays of almost any size as grids can adapt from single to multi-column.

![An education app has 2 columns on mobile, and 4 columns on a tablet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp51zufq-02.png?alt=media)

*Caption / Legend:*
Feed layouts can adapt the number of columns across breakpoints

## Dividing space

A feed composition is flexible enough to allow for content with varying proportions and sizing.

![Feed layout in a medium window with 2 panes. 1 pane has 2 columns of small cards and the other has 1 large card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp521zfz-03.png?alt=media)

*Caption / Legend:*
Feeds can organize content of different sizes, like using small and large cards

Use size and position to establish relationships among content elements.

Feed items should reflow when the amount of available space changes like:

- Rotating or unfolding a device
- Entering multi-window mode

The order of items is determined by their position.

[More on adaptive design for cards](/m3/pages/cards/guidelines#99e8d17d-5bde-4bb9-8784-0ca403325b10)

![Lead article image is prominent in a 2-pane news feed.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp528i2s-04.png?alt=media)

*Caption / Legend:*
Feed items can change size to group content

## Across breakpoints

### Compact

A feed layout should stack vertically, like a list of cards with individual items filling the width of the pane.

![Cards in 2 feed layouts, compact and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp52hmfv-05.png?alt=media)

*Caption / Legend:*
In compact windows, the cards in a feed stack vertically, filling the full width:

1. Compact breakpoint
2. Expanded breakpoint

### Medium

A feed layout can support components with different widths and be split across multiple columns.

![In a medium window, 4 equal-width columns of cards in a feed layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp52jmhc-06.png?alt=media)

*Caption / Legend:*
Feed layouts can add columns in a medium window

### Expanded, large, & extra-large

A feed layout can support components with different widths and be split across multiple columns. The number of columns should usually increase at expanded breakpoints.

![Expanded window has wider columns than a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp52lhar-07.png?alt=media)

*Caption / Legend:*
Column width can increase at larger breakpoints

## List-detail

Many layouts can be split into a list view and a detail view.

Key use cases for this layout include parent-child pairings of information like:

- Text message + conversation
- File browser + open folder
- Musical artist + album detail
- Settings + category detail
- Email inbox + selected email

![An email app in a list-detail layout at a medium breakpoint.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp7394ub-LD%20adapt%20C.png?alt=media)

*Caption / Legend:*
1. List
2. Detail

## Usage

Use the list-detail layout for quickly accessing details of an item from a long list of content.

Examples include:

- Showing a series of conversations and a text message
- Browsing files and seeing their details
- Browsing multiple albums and seeing individual track information

![Several stacked cards make up the list area on the left pane, while the detail area is a single section on the right pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp52v68p-02.png?alt=media)

*Caption / Legend:*
Simplified diagram of:

1. List area
2. Detail area

### Dividing space

![Compact windows have 1 pane, while medium and expanded windows can have 2 panes for list-detailed views.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp52wfuu-03.png?alt=media)

*Caption / Legend:*
The most basic list-detail views for compact, medium, and expanded layouts

A list-detail layout uses two panes.  Depending on the breakpoint, the two panes may appear together in the same layout or across separate layouts.

List-detail layouts use the same pane guidance as all single and two-pane layouts, including special behavior for foldables.

| **Breakpoint (dp)** | **Visible panes** |
| --- | --- |
| Compact (0-599) | 1 pane |
| Medium (600-839) | 1 (recommended) or 2 panes |
| Expanded (840+) | 2 panes |
| Large (1200-1599) | 2 panes |
| Extra-large (1600+) | 2 panes |

## Across breakpoints

### Compact

- Use a single-pane layout
- Only one view is visible at a time, either list or detail

![Single-pane layout on 3 devices at compact breakpoints.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp533vzf-04.png?alt=media)

*Caption / Legend:*
1. Phone in portrait orientation
2. Closed foldable
3. Tablet in split-screen mode

### Medium

- Use a single-pane layout for information-dense content or deep focus

![Single-pane layout on a foldable open flat and a tablet in portrait orientation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp535cbt-05.png?alt=media)

*Caption / Legend:*
1. Foldable open flat
2. Tablet in portrait orientation

- Use a two-pane layout to browse collections and switch between items quickly
- To maximize horizontal space for two-pane layouts, use a bottom navigation bar or modal navigation rail

![2-pane layout on a foldable open flat and a tablet in portrait orientation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp537scf-06.png?alt=media)

*Caption / Legend:*
1. Foldable open flat
2. Tablet in portrait orientation

### Expanded, large, & extra-large

- Use a two-pane layout

![2-pane layout on a phone and tablet, both in landscape orientation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp538uu5-07.png?alt=media)

*Caption / Legend:*
1. Phone in landscape orientation
2. Tablet in landscape orientation

## Behavior

### Single vs two-pane

- Back button: Appears in detail view only for single-pane layouts
- Selected state: Appears only in list view for two-pane layouts
- Visual focus: Use [explicit and implicit grouping](/m3/pages/grids-spacing/spacing#e7e6d1ac-031a-4757-afcf-b223f23654ea) to direct focus in two-pane layouts

![A 2-pane layout shows a selected list item. A single-pane layout uses a Back button to return to the list.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp53b085-08.png?alt=media)

*Caption / Legend:*
1. Use a selection state in two-pane layouts only
2. Use a back button in single-pane layouts only

### Transitioning between layouts

The amount of available space is dynamic and changes based on how someone uses a device, such as rotating or unfolding it, or entering multi-window mode.

#### No selected list item

A single-pane layout shows a list view, while a two-pane layout shows placeholder content in the detail pane.

In some cases, such as multi-select, the most recently used pane should stay visible when switching to single-pane layout.

#### Selected list item

When switching from a single- to two-pane layout, both panes should be shown and the selected item’s details are visible.

When going from a two- to single-pane layout, the view depends on the product:

- The detail pane should typically show in a single-pane layout, and an app bar appears
- If the product supports selection without deep navigation, like multi-select, the list view can show with the item selected
- Consistency is key: If a layout showed the list view previously, it should return to that view when returning to a single pane

#### Persistent states

In most cases, a state should be saved when navigating between detail views. This includes read and unread content.

## Supporting pane

The supporting pane layout organizes content into primary and secondary areas.

The primary area contains the main content and occupies the majority of the space. The secondary area contains supporting content.

Key use cases for supporting pane layouts include:

- Productivity
- Document editing and commenting
- Content and media browsing

![A video app has the main content in the primary area and “up next” content is listed in the secondary area.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp54jbnh-01.png?alt=media)

*Caption / Legend:*
Supporting pane layouts organize content into primary and secondary areas

## Usage

Use the supporting pane layout when the secondary content is only meaningful in relation to the primary content.

For content with a parent-child relationship, use a [list-detail layout](/m3/pages/canonical-layouts/list-detail/) instead.

![The supporting pane has vertically stacked cards.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp54n3m1-02.png?alt=media)

*Caption / Legend:*
Supporting panes provide contextual info for the primary area

## Dividing space

The window is divided between a focus pane and a supporting pane.

Depending on the breakpoint, the supporting pane may appear below or beside the focus pane.

![The cards of a supporting pane scroll horizontally across the bottom of the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp54omgc-03.png?alt=media)

*Caption / Legend:*
Supporting panes can appear beside or below the primary area

| Supporting pane placement | Pane width | Breakpoint |
| --- | --- | --- |
| Below | Flexible | Compact or Medium |
| Leading or trailing | Fixed (360 dp) | Expanded |

## Across breakpoints

### Compact

The supporting pane should appear below the focus pane. 

A bottom sheet can be useful for keeping focus on the primary pane while providing access to supporting information.

![2 layouts showing  bottom sheets at a compact breakpoint.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp73c5cw-04.png?alt=media)

*Caption / Legend:*
Bottom sheets can provide supporting information in compact windows

### Medium

The supporting pane should appear below the focus pane.

![3 cards in a supporting pane are horizontal across the bottom of a tablet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp54tfu7-05.png?alt=media)

*Caption / Legend:*
Supporting panes appear below the focus pane in medium windows

### Expanded

The supporting pane should appear on the leading or trailing side of the focus pane.

![The supporting pane is to the right of the primary focus pane on 2 screens.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp73dr78-6.png?alt=media)

*Caption / Legend:*
Supporting panes appear beside the focus pane in expanded windows
