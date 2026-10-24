# Breakpoints

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/foundations/layout/breakpoints](https://m3.material.io/foundations/layout/breakpoints)
> Last Updated: 2026-07-17T04:55:59.912Z

---

## Summary

Breakpoints ensure layouts work across a wide range of devices

**Table of Sections:**
- Overview
- Compact
- Medium
- Expanded
- Large & extra-large

---

## Overview

Material uses breakpoints to create adaptive designs that work across devices:

- There are five main breakpoints: compact, medium, expanded, large, and extra-large
- Layouts typically transition from a single pane to two or three panes as window size increases
- When moving across breakpoints, decide which elements to reveal, divide, resize, reposition, or swap

## Breakpoints overview

A breakpoint (previously window size class) is the window size at which a layout needs to change to match available space, device conventions, and ergonomics. These apply to Android and web.

All devices fall into one of five Material breakpoints:

- Compact
- Medium
- Expanded
- Large
- Extra-large

Rather than designing for an ever-increasing number of display states, focusing on breakpoints ensures layouts work across a wide range of devices.

![3 breakpoints from small to expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3zlnnl-01.png?alt=media)

*Caption / Legend:*
1. Compact
2. Medium
3. Expanded

Large and extra-large breakpoints are used on devices like laptops, desktops, and external monitors.

![2 devices with large and extra-large breakpoints.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3zmg9g-02.png?alt=media)

*Caption / Legend:*
1. Large
2. Extra-large

**Design for breakpoints instead of specific devices because:**

- The amount of available window space is dynamic and changes based on user behavior, such as multi-window modes or unfolding a foldable device
- Devices fall into different breakpoints based on orientation

| Breakpoint | Width (dp) | Common devices |
| --- | --- | --- |
| Compact | Under 600dp | Phone in portrait |
| Medium | 600–839dp | Tablet in portrait Foldable in portrait (unfolded) |
| Expanded | 840–1199dp | Phone in landscape Tablet in landscape Foldable in landscape (unfolded) Desktop |
| Large | 1200–1599dp | Desktop |
| Extra-large | 1600dp+ | Desktop Ultra-wide monitors |

### Height breakpoints

On Android, compact, medium, and expanded breakpoints are also available for [height](https://developer.android.com/develop/ui/compose/layouts/adaptive/support-different-display-sizes#window_size_classes). These can be used to adjust the layout when available vertical space is unusually small or large. However, since most layouts contain vertically scrolling content, it's rare that layouts need to adjust to available height.

## Designing across breakpoints

![An email app shown at 3 breakpoints: compact, medium, and expanded.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3znkbk-03-a%20-%20USE%20AS%20STATIC%20ASSET.png?alt=media)

*Caption / Legend:*
Products should automatically adapt to any breakpoint

![2 screens at large and extra-large breakpoints.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3zoh5f-04-a.png?alt=media)

*Caption / Legend:*
A product’s layout should adjust to fit each breakpoint. For example, a large window can have two panes, while an extra-large window can have three.

Each product view should have a layout for the breakpoints most appropriate for your platform and users.

Different components are recommended for performing the same function across the five layouts.

| Breakpoint | Panes | Navigation | Communication | Action |
| --- | --- | --- | --- | --- |
| Compact | 1 | Navigation bar, modal expanded navigation rail | Simple dialog Full-screen dialog | Bottom sheet |
| Medium | 1 (recommended) or 2 | Navigation bar, modal expanded navigation rail | Simple dialog | Menu |
| Expanded | 1 or 2 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
| Large | 1 or 2 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |
| Extra-large | 1 to 3 (recommended) | Modal or standard expanded navigation rail | Simple dialog | Menu |

Start by designing for one breakpoint, then adjust the layout for the next size by asking these five questions:

### 1. What should be revealed?

Parts of the UI that are hidden on smaller devices can be revealed in larger layouts.

For example:

- On mobile, the navigation rail is collapsed by default
- On an expanded device, the navigation rail can be open by default, revealing more actions and features

![Email app layouts in compact and expanded windows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3zwt8a-05.png?alt=media)

*Caption / Legend:*
A product’s navigation rail can be revealed in an expanded layout

The same can be applied to [panes](/m3/pages/scaffold/panes). Larger layouts can simultaneously display an inbox pane and a pane containing a selected conversation. Additional space doesn’t just mean making the same thing bigger.

![Messaging app layouts in compact and expanded windows.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3zxlki-06.png?alt=media)

*Caption / Legend:*
An expanded layout for a messaging app reveals a second pane with the selected conversation

### 2. How should a screen be divided?

When dividing a screen into layout panes, consider the breakpoint:

- Compact and medium breakpoints:  A single pane works best
- Expanded and large breakpoints:  Two panes are recommended
- Extra-large breakpoints: Consider using three panes

![A compact and medium window have a single pane. A larger window has 2 panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp3zyjaf-07.png?alt=media)

*Caption / Legend:*
Compact and medium breakpoints should use a single pane, while larger breakpoints can use two

At medium breakpoints, two panes are useful when they contain low-density content with clear actions.

Don’t use two panes in medium layouts with high information density, as it can reduce usability.

![Medium window with 2 panes with low-density content: an email setting menu and a list of setting switches.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp5k02j7-08.png?alt=media)

*Caption / Legend:*
A settings view with low-density content and quick actions is a good use of two panes in a medium layout

![Video app in a medium window has 1 pane in portrait layout and 2 in landscape.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp400qwl-09.png?alt=media)

*Caption / Legend:*
Rotating a device often changes the breakpoint. A layout can have two panes in landscape orientation, and one pane in portrait.

Single-pane layouts can focus attention on one action or view, creating a distraction-free environment for a specific goal such as:

- Playing a game
- Watching a movie
- Video calls
- Creative applications

![Video app in a single-pane landscape layout at an expanded breakpoint.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp401fhs-10.png?alt=media)

*Caption / Legend:*
Consider using an immersive single-pane layout for video calls

### 3. What should be resized?

UI elements that are small on compact screens can grow as breakpoints increase. Panes can also expand to rearrange elements and make better use of space.

Consider resizing:

- Cards
- Feeds
- Lists
- Panes

Resizing can highlight imagery and improve text readability. This type of adaptation affects the scale of content and the relationship between objects on screen. For example, a vertical card on mobile can adjust its margins, orientation, text size, and density to better fit a tablet.

Across all breakpoints, adjust margins and type styles to keep text between 40–60 characters per line.

![2 cards in compact and medium layouts. The image and text are rearranged and resized to be more legible in the medium layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp402bv2-11.png?alt=media)

*Caption / Legend:*
A small card in a compact layout can be resized larger in a medium or expanded layout

### 4. What should be repositioned?

A UI and its components can reflow or reposition to make use of additional space on expanded screens and in resized panes. Repositioning is also a way to match the ergonomic and input needs that change across device sizes, such as shifting actions from the bottom of a compact window to the leading edge of medium and expanded windows. This method is similar to responsive design on the web.

Consider:

- Repositioning cards
- Adding a second column of content
- Creating a more complex layout of photos
- Introducing more negative space
- Ensuring reachability for navigation and interactive elements

Internal elements can be anchored to the left, right, or center as a parent container scales. Internal elements can also maintain fixed positions, such as a floating action button (FAB) in a navigation rail.

![Comparison of compact and medium breakpoints with tabs anchored to the middle of each layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40fx5f-12.png?alt=media)

*Caption / Legend:*
Tabs can remain anchored to the middle of a layout at both compact and medium breakpoints

In the case of a button, the icon and text label within the button container can remain anchored to each other, staying centered as the button container scales horizontally.

![Label text remains the same size and centered as button size increases.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40h750-13.png?alt=media)

*Caption / Legend:*
Button icons and label text can remain anchored to each other no matter the width

### 5. What should be swapped?

As a layout changes across breakpoints, components with similar functions can also be exchanged. This makes it possible to adjust a layout for large-scale changes to the ergonomic and functional qualities of an interface.

For example, a bottom navigation bar in a compact layout can be swapped with a navigation rail in a medium layout.

![A compact layout’s navigation bar becomes a navigation rail in an expanded layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40iha0-14.png?alt=media)

*Caption / Legend:*
Swap a navigation bar in a compact layout for a navigation rail in a medium or expanded layout

Likewise, a navigation rail can swap from collapsed to expanded at larger breakpoints.

Use caution when swapping components. Make sure:

- The interchangeable components are functionally equivalent
- The component swap serves a functional and ergonomic purpose

Don’t swap a button for a chip. Be careful when changing between list items and cards.

![A compact layout’s navigation rail expands in an extra-large layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40ja5v-15.png?alt=media)

*Caption / Legend:*
A collapsed navigation rail in medium or expanded layouts can become an expanded navigation rail in large or extra-large layouts

![A button is swapped out for a menu in a food delivery app.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp4067x5-16.png?alt=media)

*Caption / Legend:*
Don’t arbitrarily swap components that aren’t functionally equivalent, such as swapping a button with a menu

### Common swappable components

| Component type | Compact | Medium | Expanded |
| --- | --- | --- | --- |
| Navigation | Navigation bar | Collapsed navigation rail | Collapsed navigation rail |
| Navigation | Modal expanded navigation rail | Modal expanded navigation rail | Standard expanded navigation rail |
| Communication | Basic or full-screen dialog | Basic dialog | Basic dialog |
| Supplemental selection | Bottom sheet | Menu | Menu |

## Compact

Layouts for compact breakpoints are for **screen widths smaller than 600dp.**

![Messaging app at a compact breakpoint.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40sit1-01.png?alt=media)

*Caption / Legend:*
A compact breakpoint focuses on a single view

## Navigation

Use a navigation bar or modal expanded navigation rail.

Place navigation components close to the edge of the screen where they’re easier to reach.

![Navigation bar and FAB are close to the bottom of a mobile app in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40u2kw-02.png?alt=media)

*Caption / Legend:*
Place navigation elements near the bottom of a compact window so they’re easy to reach

## Panes

Use a single pane in compact layouts.

![The single pane consumes most of the area in a compact window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40uzbp-03.png?alt=media)

*Caption / Legend:*
1. Single-pane layouts work best for compact breakpoints

## Spacing

Margins are 16dp from the leading and trailing edge of the window.

![The left and right margins of a compact window pane are 16dp.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40vzj4-04.png?alt=media)

*Caption / Legend:*
In compact layouts, use 16dp margins

## Special considerations

A compact layout will need to transition dynamically to a medium or expanded layout when:

- A foldable device is unfolded
- A mobile device is rotated from portrait to landscape
- A tablet exits split-screen mode
- A product is resized to be larger in multi-window mode
- A free-form window is resized

![2 mobile layouts showing a messaging app with a 1-pane list and an expanded navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp40wssg-05.png?alt=media)

*Caption / Legend:*
Compact layouts should dynamically transition to larger layouts when a device is unfolded or rotated

## Medium

Layouts for medium breakpoints are for **screen widths from 600dp to 839dp.**

![A medium breakpoint with a video call app in full-screen mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp413hn4-01.png?alt=media)

*Caption / Legend:*
Single-pane layouts can focus attention on one action or view, such as a video call

## Navigation

Place navigation components close to edges of the window where they’re easier to reach:

- Single-pane layouts: Navigation rail
- Two-pane layouts: Navigation bar

The navigation rail can be hidden in secondary destinations as long as the primary destination can still be accessed using a back button.

![The navigation area of a medium breakpoint is a vertical bar at the leading edge, beside a single pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp414ag3-02.png?alt=media)

*Caption / Legend:*
1. Navigation area
2. Single pane

## Panes

### Single-pane layout

In a medium layout, a single pane is recommended because of limited screen width.

![A single pane uses most of the space in a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp417y7j-03.png?alt=media)

*Caption / Legend:*
1. A single-pane layout is recommended for medium breakpoints

### Two-pane layout

Limit use of two panes for content with lower information density, such as a settings screen.

Each pane in a two-pane layout should take up 50% of the window width. Avoid setting custom widths. A drag handle can be used to expand or collapse panes to be 100% of the window width.

![2-pane layout in a medium window. Both panes fit 50% of the window width by default.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp418umv-04.png?alt=media)

*Caption / Legend:*
Two-pane layouts should use 50% widths for each pane by default

When adding navigation to a two-pane layout, use a navigation bar. This allows the panes to fully use the available window width.

![A navigation bar extends over 2 panes at the bottom of a medium window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp419dq9-05.png?alt=media)

*Caption / Legend:*
Two-pane layout with:

1. Navigation bar

## Spacing

Medium layouts have margins of 24dp.

The spacer between panes is also 24dp.

![2 pane layout with 24dp margins and 24dp space between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41ahko-06.png?alt=media)

*Caption / Legend:*
Use 24dp for margins and spacer in a medium layout

## Special considerations

A medium layout will need to transition dynamically to a compact or expanded layout when:

- A foldable device is folded
- A tablet is rotated from portrait to landscape
- A product goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

![Email app with 2 panes at  a medium breakpoint.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp5kr0vt-07.png?alt=media)

*Caption / Legend:*
Think of how a medium layout should change to a compact or expanded layout

### Reachability

For horizontal tablets and unfolded foldables, the top 25% of the screen is likely out of reach, unless the grip is adjusted. To accommodate device and hand sizes, limit the amount of interactions that are placed in the upper 25% of the screen.

![The hard-to-reach top quarter of a medium breakpoint in landscape mode.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41cohr-08.png?alt=media)

*Caption / Legend:*
1. Limit interactions in the upper quarter of a screen, as they can be hard to reach

Avoid placing essential interactive elements too close to the bottom edge of the screen. Some users, particularly those with larger hands, might struggle to reach this area.

Specify interactions in a layout with these ergonomic regions in mind:

1. Users can reach this area by extending their fingers, which makes it inconvenient
2. Users can reach this area comfortably
3. Reaching this area is challenging when holding the device

![The 3 ergonomic regions of a medium breakpoint.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41dv1l-09.png?alt=media)

*Caption / Legend:*
Medium breakpoint ergonomic regions:

1. Inconvenient
2. Comfortable
3. Challenging

## Expanded

Layouts for expanded breakpoints are for **screen widths from 840dp to 1199dp.**

![Supporting pane layout of a video app. The large, primary pane has the video, title, and actions. The secondary pane has queued videos.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41hvbo-01.png?alt=media)

*Caption / Legend:*
Two-pane layouts are often best for expanded breakpoints

## Navigation

Place navigation components close to edges of the window where they’re easier to reach. Use a navigation rail, either collapsed or expanded.

The navigation rail can be hidden in secondary destinations as long as the primary destination can still be accessed using a back button.

For sorting, filtering, or secondary navigation, use tabs or other components directly in the pane.

![The navigation area is a vertical bar at the left of the screen. To its right, the body pane fills the rest of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41iro5-02.png?alt=media)

*Caption / Legend:*
1. Navigation area
2. Single pane

## Panes

Use a single-pane or two-pane layout.

A two-pane layout is often best for expanded breakpoints. However, a single-pane layout can work when displaying visually- or information-dense content, such as videos.

![A single pane covers most of the expanded screen except for the navigation area and margins.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41jkb5-03.png?alt=media)

*Caption / Legend:*
At an expanded breakpoint, reserve single-pane layouts for information-dense content

When using a [fixed-and-flexible](/m3/pages/scaffold/panes#92371c3b-587d-4c6f-8105-05b69dcec81a) layout, the fixed pane should have a width of 360dp by default.

A [split-pane layout](/m3/pages/scaffold/panes#dc7982b7-754c-410a-9e88-18a54557c87b) uses two flexible panes and visually centers the spacer by default.

## Spacing

Expanded layouts have a leading and trailing margin of 24dp.

The spacer between panes is 24dp.

![2 pane layout with 24dp margins and 24dp space between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp5l3xgt-06.png?alt=media)

*Caption / Legend:*
Use 24dp for margins and spacer in an expanded layout

## Special considerations

An expanded layout will need to transition dynamically to a compact or medium layout when:

- A foldable device is folded
- A tablet is rotated from landscape to portrait
- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

## Large & extra-large

These breakpoints are most useful for creating web experiences tailored to laptop and desktop devices. Some products may not need large and extra-large breakpoints. Consider your platform’s conventions and users when making decisions on which breakpoints to design for.

- Layouts for large breakpoints are for screen widths **from 1200dp to 1599dp**
- Layouts for extra-large breakpoints are for screen widths of **1600dp and larger**

![Large window with a video app in 2 pane layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41v09e-01.png?alt=media)

*Caption / Legend:*
A two-pane layout is recommended for large and extra-large breakpoints

## Navigation

Use a navigation rail, either collapsed or expanded, depending on the amount of content.

For sorting, filtering, or secondary navigation, use tabs or other components directly in the pane.

![Large web browser with a small navigation area on the leading edge with 1 pane filling the rest of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41w5ix-02.png?alt=media)

*Caption / Legend:*
1. Collapsed navigation area
2. Single-pane layout

An expanded navigation rail is best suited for extra-large windows, where there's still plenty of room for content. Consider collapsing the navigation rail when space is needed, or when on pages deeper in the page hierarchy.

![Extra-large web browser with an expanded navigation area and 1 pane filling the rest of the window.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41xhwl-03.png?alt=media)

*Caption / Legend:*
1. Expanded navigation area
2. Single-pane layout

## Panes

A two-pane layout is often best for large and extra-large breakpoints.

However, a single-pane layout can work when displaying visually- or information-dense content, such as videos.

![The single pane covers most of a large screen except for the navigation area and margins.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41y2za-04.png?alt=media)

*Caption / Legend:*
Only use a single-pane layout for dense content or media

When using a [fixed-and-flexible](/m3/pages/scaffold/panes#92371c3b-587d-4c6f-8105-05b69dcec81a) layout, the fixed pane should have a width of 412dp by default.

![A 2-pane layout with 1 pane fixed at 412dp.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41yyza-05.png?alt=media)

*Caption / Legend:*
Fixed panes should be 412dp in large and extra-large layouts

When using a [split-pane layout](/m3/pages/scaffold/panes#dc7982b7-754c-410a-9e88-18a54557c87b), the spacer should be visually centered by default, even when using an expanded navigation rail.

![An expanded nav rail and the first pane take up 50% of the window, and the second pane takes up 50%. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp41zo3h-06.png?alt=media)

*Caption / Legend:*
In split-pane layouts, navigation components shrink the leading pane, so the spacer remains centered

## Additional panes

The extra-large breakpoint supports using a standard side sheet as a third pane. When the side sheet is present, the navigation rail can remain visible, collapse, or hide completely. Don't use more than three panes.

Note: Fixed panes in this window size are recommended to be 412dp, but side sheets have a default maximum width of 400dp.

![Extra-large window with 2 panes and a side sheet acting as a third pane.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp420iqc-07.png?alt=media)

*Caption / Legend:*
1. Standard side sheet (third pane)

## Spacing

Large and extra-large layouts have a leading and trailing margin of 24dp.

The spacer between panes is 24dp.

![2 pane layout with 24dp margins and 24dp space between panes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp5lfdh0-08.png?alt=media)

*Caption / Legend:*
Use 24dp for margins and spacers in large and extra-large layouts

## Special considerations

Large and extra-large layouts will need to transition dynamically to a smaller layout when:

- The app goes from full-screen to split-screen
- Multi-window mode is initiated
- A free-form window is resized

Pay attention to typographic elements such as line length to ensure readability on large and extra-large layouts.

![An email app with 2 panes in a large layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmp42206a-09.png?alt=media)

*Caption / Legend:*
Consider how a large layout should change at smaller breakpoints
