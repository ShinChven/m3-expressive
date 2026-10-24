# Loading indicator

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/loading-indicator](https://m3.material.io/components/loading-indicator)
> Last Updated: 2026-07-29T13:35:08.589Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Recommended as a replacement for indeterminate circular progress indicators
- Always reflect an ongoing process and are never simply decorative
- Used for pull-to-refresh interactions
- Not used for processes that transition from indeterminate to determinate
- Capture attention through motion

## Availability & resources

## M3 Expressive update

**May 2025**

The loading indicator is designed to show progress that loads in under five seconds. It should replace most uses of the indeterminate circular progress indicator. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

New component added to catalog.

Loading indicators:

- Are used in pull-to-refresh functionality
- Can be contained or uncontained
- Use shape and motion to capture attention
- Can scale in size

## Specs

## Variants

![2 elements of a loading indicator.](https://lh3.googleusercontent.com/S67BxQ4QnYuKbYkLGmjsAX8gn1nTYNayufiu-mDSMxsT73giCJ_t_8P1G4A2t8JTcDOho15zfr2hw7T8eiM24ABq5tu18f2ndgQpcUYN22lo=s2048)

*Caption / Legend:*
1. Loading indicator

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Loading indicator | -- | Available |

## Configurations

![2 configurations of loading indicators.](https://lh3.googleusercontent.com/ymEEU7ii6n5M1aJlvEK-YdTlpbtGoMaALgiyMHTJwgl6wqdPQOiBLyCeSZV9C032V24-ctzx396weJRmrfuP3SG3_PbnMnHuJCJDJn0l6XTf_g=s2048)

*Caption / Legend:*
1. Default
2. Contained

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Containment | Default | -- | Available |
| Contained | -- | Available |  |

## Tokens & specs

Loading indicators have a single token set.

#### Design Tokens: Loading indicator

*For loading indicators.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.loading-indicator.active-indicator.color` | `md.sys.color.primary` | COLOR | Loading indicator active indicator color |
| `md.comp.loading-indicator.active-indicator.size` | 38dp | LENGTH | Loading indicator container width |
| `md.comp.loading-indicator.container.height` | 48dp | LENGTH | Loading indicator container height |
| `md.comp.loading-indicator.container.width` | 48dp | LENGTH | Loading indicator active indicator size |
| `md.comp.loading-indicator.container.shape` | `md.sys.shape.corner.full` | SHAPE | Loading indicator container shape |
| `md.comp.loading-indicator.contained.container.color` | `md.sys.color.primary-container` | COLOR | Loading indicator contained container color |
| `md.comp.loading-indicator.contained.active-indicator.color` | `md.sys.color.on-primary-container` | COLOR | Loading indicator contained active indicator color |
| `md.comp.loading-indicator.container.color` | `md.sys.color.secondary-container` | COLOR | Loading indicator container color |


## Anatomy

![2 elements of a loading indicator.](https://lh3.googleusercontent.com/LnXFKWQjx1upNdSL52LpDEe6n6-9Wj_WQoZalB2nwnCKeNjhZ2p0tsq1q-LsV9gaDEcCVwuRicHGTVaTAa7DWv_rJ_iH2PORJmFxrZlCLphp=s2048)

*Caption / Legend:*
1. Active indicator
2. Container

## Color

### Default

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens; in implementation, a color value will be a token that references a value.

![2 color roles of a loading progress indicator in light and dark themes.: the active indicator is primary and the container is secondary container.](https://lh3.googleusercontent.com/kHiYDI_rJi33eQIGCCvJY8rB8T0KnCrajoGZaedLVM70FSKqCIMxwGTFc8j4A-DWWGTVgXQ2pWZqxjL5X4ZtHD3MQNWY4XZasIvw1NJrh4PE=s2048)

*Caption / Legend:*
Loading indicator color roles used for light and dark schemes:

1. Primary

### Contained

![2 color roles of a loading progress indicator in light and dark themes. The active indicator is primary and the container is secondary container.](https://lh3.googleusercontent.com/wCgczdkIgvjvmJLlIlHuSP8ND2z0Xtw8K6oBWnYfaw0z39kFlhxprzY4LQSis0abslHlp69jMprJZtQoEuG06Mij-XVqGvcUtQTVuVWId5WL=s2048)

*Caption / Legend:*
Contained loading indicator color roles used for light and dark schemes:

1. On primary container
2. Primary container

## Measurements

![Loading progress indicator measurements.](https://lh3.googleusercontent.com/wXvvKvCbB0kpP7qvp_XSbnQ2y_ulUlpCVLZ7wbz7FUvxiAsnXyH-AZBHnf5pKvC3JldNmmgC2GpNfr5YWXwNShPUkoATkaH2zAm53DnQ4O4Ozw=s2048)

*Caption / Legend:*
To ensure sufficient margins, the size is 48dp while the shape container is 38dp

## Guidelines

## Usage

Loading indicators use animation to grab attention, mitigate perceived latency, and indicate that an activity is in progress.

They should be used when progress isn’t detectable, or when it’s not necessary to indicate how long an activity will take.

While similar in function to circular progress indicators, loading indicators are a better alternative for short processes between 200ms and 5s.

Choose a loading or progress indicator that corresponds to the expected wait time and type of process. 

If the wait is very long, consider allowing users to navigate away from the page while the process finishes up.

| Expected wait time | Recommendation |
| --- | --- |
| Instant (under 200ms) | No indicator |
| Short (between 200ms and 5s) | Loading indicator |
| Long (Over 5s) | Progress indicator |

When a process can transition from indeterminate (unknown progress) to determinate (known remaining progress), transition between the corresponding progress indicators. 

Don’t transition a loading indicator into a progress indicator.

## Anatomy

![2 parts of an active indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cads86-7.png?alt=media)

*Caption / Legend:*
1. Active indicator
2. Container (optional)

### Active indicator

The active indicator is a looping shape morph sequence composed of seven unique Material 3 shapes.

[More about the Material shape library](/m3/pages/shape/overview-principles#579dd4ba-39f3-4e60-bd9b-1d97ed6ef1bf)

![Active indicator with shape morph.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cafeiy-8.png?alt=media)

*Caption / Legend:*
The active indicator morphs shape to capture attention

### Container (optional)

When the container is visible, the active indicator should change color from **primary** to **on-primary-container**.

The container should be visible when the loading indicator is placed over other content. This helps it stand out better by giving it a stronger contrast. It’s not needed when the loading indicator is placed directly on a surface.

The container should be used with pull-to-refresh behavior.

![Active indicator with container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caha9b-9.png?alt=media)

*Caption / Legend:*
The container is a circle that provides extra contrast from body content

## Placement

While loading a page or container, the loading indicator should be centered on the element.

When loading more items on a page with existing content, place the loading indicator in the empty space where the new content will appear. Avoid overlapping existing content.

Loading indicators can be placed within other components, such as buttons, to indicate that the action is ongoing, such as validating a form or checking for updates.

## Responsive layout

Loading indicators default to 48dp, but the size is flexible. It should be between 24dp to 240dp, depending on the placement and the breakpoint. Avoid exceeding the minimum and maximum sizes.

The ratio between the container and the active indicator stays the same when resizing the loading indicator. 

Reserve very large progress indicators for large and extra-large windows, like desktop.

![Loading indicators can range from 24dps to 240dps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0caprda-12.png?alt=media)

*Caption / Legend:*
Loading indicators can range in size from 24–240dp

### Larger windows

As the pane or window size grows, consider scaling the loading indicator as well, so it remains proportional in size to the empty space around it. The loading indicator shouldn’t exceed 240dp.

## Behavior

### Pull-to-refresh

The loading indicator is used in [pull-to-refresh](https://developer.android.com/develop/ui/compose/components/pull-to-refresh) on Jetpack Compose only.

Pull-to-refresh is an Android system feature that manually refreshes screen content with an action or gesture. It’s used at the beginning of lists, grid lists, and card collections where the most recent content appears.

It’s best to use pull-to-refresh with dynamic content that can have frequent updates, where people have a high chance of seeing new content after refreshing.

### Threshold requirements

To ensure intentional usage of the pull-to-refresh gesture, the loading indicator must pass a threshold before the app will refresh.

The loading indicator remains visible until the refresh activity completes and any new content is visible, or someone navigates away from the refreshing content.

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Navigate to the loading indicator
- Understand what progress the indicator is communicating
- Initiate a content refresh without relying on a gesture

## Interaction & style

The active indicator, which displays progress, provides visual contrast of at least 3:1 against most container and surface colors.

The indicator itself must have 3:1 contrast with the background, but the container does not.

![Loading indicator with 3:1 color contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmagv3srk-1.png?alt=media)

*Caption / Legend:*
The loading indicator provides visual contrast of at least 3:1 against most background colors

When integrated into another component, such as a button, make sure that the active indicator provides a visual contrast of at least 3:1 against the other component.

![Loading indicator with correct color contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaguuv6h-2_do.png?alt=media)

*Caption / Legend:*
Ensure at least 3:1 contrast between the indicator and the surface it's on

![Loading indicator with incorrect color contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmaguuziu-3_dont.png?alt=media)

*Caption / Legend:*
Avoid using when the contrast is under 3:1

Pull-to-refresh interactions can’t be accessible by just swiping. Provide an alternate way to refresh the content with a single pointer, such as placing a refresh button in a menu or directly alongside the content.

## Labeling elements

Since the loading indicator is a visual cue, it needs an accessibility label to assist people who can't rely on visuals.

It should use the **progress bar** accessibility role. Write a label describing the purpose of the loading indicator, such as **loading news article** or **refreshing page**.

![Loading indicator accessibility label and role.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0cb8rsa-5.png?alt=media)

*Caption / Legend:*
Loading indicator labels should explain which items are loading
