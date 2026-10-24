# Progress indicators

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/progress-indicators](https://m3.material.io/components/progress-indicators)
> Last Updated: 2026-07-29T13:37:52.778Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Two variants: linear and circular
- Use the same configuration for all instances of a process (like loading)
- They capture attention through motion
- Option to apply a wave to the active track for use cases that would benefit from increased expressiveness

![8 progress indicators configured to show different thickness and shape.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmleotj2q-01.png?alt=media)

*Caption / Legend:*
Linear and circular progress indicators have visual configurations for shape and thickness

## Availability & resources

## M3 Expressive update

**Aug 2024**

The progress indicators have configurations for height and wavy shape. Choose the visual style that best fits your product. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

- Track height: Configurable
- Shape: Wavy

## Previous updates

**Dec 2023: Non-text contrast (NTC)**

- Anatomy: Added an end stop indicator to improve accessibility
- Contrast: Higher contrast between track and active indicator to enhance the perception of progress
- Motion: New motion behavior
- Shape: Rounded corners

![GM3 linear and circular progress indicators](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmleov4bo-03.png?alt=media)

*Caption / Legend:*
Progress indicators have a new rounded, colorful style

## Differences from M2

**July 2022: Added to Material 3**

- **Color:** New color mappings and compatibility with dynamic color

![M2 linear and circular progress indicators.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c2if7i-04.png?alt=media)

*Caption / Legend:*
M2: Progress indicators have a boxier, neutral style

![M3 linear and circular progress indicators.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0c2jf26-05.png?alt=media)

*Caption / Legend:*
M3: Progress indicators are compatible with dynamic color

## Specs

## Variants

![2 variant of progress indicators.](https://lh3.googleusercontent.com/fLmSSW0vCAz72TSdfqeo9FQY5YlgLT7ktKAZkxs-FEetsANoory1UPDxRd3-jESQSkUeq6xuwEtp1NcR52Mih2QQQiprYecoJ-XI0SDBaL1T=s2048)

*Caption / Legend:*
1. Linear progress indicator
2. Circular progress indicator

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Linear progress indicator | Available | Available |
| Circular progress indicator | Available | Available |

## Configurations

![4 configurations of the linear determinate progress indicator.](https://lh3.googleusercontent.com/Cf6AdPUEQffL-k5D1on9M3H1oyAGh20uJyfa7sbOwip6oRPvmqv7u2MSLKrH70PpyL0bCJdy2fGRNg_13JG9imoQdIMm8935YUMQXQxATKeocA=s2048)

*Caption / Legend:*
1. Behavior: Determinate and indeterminate
2. Thickness: Default (4dp) and variable
3. Shape: Flat and wavy

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Behavior | Determinate (default), Indeterminate | Available | Available |
| Track thickness | Fixed (4dp) | Available | Available |
| Configurable | -- | Available |  |
| Shape | Flat (default) | Available | Available |
| Wavy | -- | Available |  |

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [View baseline tokens](/m3/pages/progress-indicators/specs#c6f484b0-2bc6-4d37-bd75-f859a35a3594)

#### Design Tokens: Progress Indicator - Common

*Common tokens for circular and linear progress indicators.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.progress-indicator.active-indicator.color` | `md.sys.color.primary` | COLOR | Progress indicator active indicator color |
| `md.comp.progress-indicator.track.color` | `md.sys.color.secondary-container` | COLOR | Progress indicator track color |
| `md.comp.progress-indicator.stop-indicator.color` | `md.sys.color.primary` | COLOR | Progress indicator stop indicator color |
| `md.comp.progress-indicator.active-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Progress indicator active indicator shape |
| `md.comp.progress-indicator.track.shape` | `md.sys.shape.corner.full` | SHAPE | Progress indicator track shape |
| `md.comp.progress-indicator.stop-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Progress indicator stop indicator shape |
| `md.comp.progress-indicator.active-indicator.thickness` | 4dp | LENGTH | Active indicator thickness |
| `md.comp.progress-indicator.track.thickness` | 4dp | LENGTH | Track thickness |
| `md.comp.progress-indicator.stop-indicator.size` | 4dp | LENGTH | Stop indicator size |
| `md.comp.progress-indicator.active-indicator-track-space` | 4dp | LENGTH | Spacing between active indicator and track |

#### Design Tokens: Progress indicator - Linear

*For linear progress indicators.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.progress-indicator.linear.indeterminate.active-indicator.wave.wavelength` | 20dp | LENGTH | Progress indicator linear indeterminate wave wavelength  |
| `md.comp.progress-indicator.linear.height` | 4dp | LENGTH | Progress indicator linear height |
| `md.comp.progress-indicator.linear.with-wave.height` | 10dp | LENGTH | Progress indicator linear with wave height |
| `md.comp.progress-indicator.linear.active-indicator.thickness` | 4dp | LENGTH | Progress indicator linear active indicator thickness |
| `md.comp.progress-indicator.linear.track.thickness` | 4dp | LENGTH | Progress indicator linear track thickness |
| `md.comp.progress-indicator.linear.stop-indicator.size` | 4dp | LENGTH | Progress indicator linear stop indicator size |
| `md.comp.progress-indicator.linear.stop-indicator.trailing-space` | `md.sys.measurement.space0` | LENGTH | Progress indicator linear stop indicator trailing space |
| `md.comp.progress-indicator.linear.active-indicator.wave.amplitude` | 3dp | LENGTH | Progress indicator linear wave amplitude |
| `md.comp.progress-indicator.linear.active-indicator.wave.wavelength` | 40dp | LENGTH | Progress indicator linear wave wavelenght |
| `md.comp.progress-indicator.linear.track-active-indicator-space` | `md.sys.measurement.space50` | LENGTH | Progress indicator linear track active indicator space |
| `md.comp.progress-indicator.linear.thick.height` | 8dp | LENGTH | Progress indicator linear thick height |
| `md.comp.progress-indicator.linear.thick.with-wave.height` | 14dp | LENGTH | Progress indicator linear thick active indicator thickness |
| `md.comp.progress-indicator.linear.thick.active-indicator.thickness` | 8dp | LENGTH | Progress indicator linear thick with wave height |
| `md.comp.progress-indicator.linear.thick.track.thickness` | 8dp | LENGTH | Progress indicator linear thick track thickness |
| `md.comp.progress-indicator.linear.thick.stop-indicator.size` | 4dp | LENGTH | Progress indicator linear thick stop indicator size |
| `md.comp.progress-indicator.linear.thick.track-active-indicator-space` | 4dp | LENGTH | Progress indicator linear thick track active indicator space |
| `md.comp.progress-indicator.linear.thick.stop-indicator.trailing-space` | 2dp | LENGTH | Progress indicator linear thick stop indicator trailing space |

#### Design Tokens: Progress indicator - Circular

*For circular progress indicators.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.progress-indicator.circular.size` | 40dp | LENGTH | Progress indicator circular size |
| `md.comp.progress-indicator.circular.active-indicator.thickness` | 4dp | LENGTH | Progress indicator circular active indicator thickness |
| `md.comp.progress-indicator.circular.active-indicator.wave.amplitude` | 1.6dp | LENGTH | Progress indicator circular active indicator wave amplitude |
| `md.comp.progress-indicator.circular.active-indicator.wave.wavelength` | 15dp | LENGTH | Progress indicator circular active indicator wave wavelength |
| `md.comp.progress-indicator.circular.track-active-indicator-space` | `md.sys.measurement.space50` | LENGTH | Progress indicator circular track active indicator space |
| `md.comp.progress-indicator.circular.track.thickness` | 4dp | LENGTH | Progress indicator circular track thickness |
| `md.comp.progress-indicator.circular.with-wave.size` | 48dp | LENGTH | Progress indicator circular size with wave |
| `md.comp.progress-indicator.circular.thick.size` | 52dp | LENGTH | Progress indicator circular thick size |
| `md.comp.progress-indicator.circular.thick.active-indicator.thickness` | 8dp | LENGTH | Progress indicator circular thick active indicator thickness |
| `md.comp.progress-indicator.circular.thick.track.thickness` | 8dp | LENGTH | Progress indicator circular thick track thickness |
| `md.comp.progress-indicator.circular.thick.track-active-indicator-space` | 4dp | LENGTH | Progress indicator circular thick track active indicator space |


## Anatomy

![3 elements of a progress indicator.](https://lh3.googleusercontent.com/d1mWcS4gytQf_XcgwvUqsNTf47P5BT9PUo-Ivi-7Ld1_Vc_HAtLGPARxwbqUcN7gdc-JH4iXM0nRH1374g23CnABP7i8eP9CnGq6UNpAnJ4=s2048)

*Caption / Legend:*
1. Active indicator
2. Track
3. Stop indicator

## Color

![2 color roles of a linear progress indicator in light and dark themes: the active indicator and stop indicator are primary and the track is secondary container.](https://lh3.googleusercontent.com/CrzKce-9x2GrD2SOdyYCmDhdK37XcZoiMv9mT6N0NjUybL1GwXLN52_LbXb1AKfzmLUna1jMew5x0skKpMBEHrBJ82d-tJRr5DvoaUeR_J4=s2048)

*Caption / Legend:*
Progress indicator color roles used for light and dark schemes:

1. Primary
2. Secondary container

## Measurements

Wavy indicators use **amplitude** and **wavelength** to determine the shape of the wave. The height is the overall container height.

![Definitions of wave measurements for height and amplitude.](https://lh3.googleusercontent.com/Aii3LLGqfr5jLHSdMLKx4rMUceBixyyXu77IqvYcUoMGwV8MxqqZgcB0XU6nx7GpVeU7_sqdq6ScJE4eic6v4dP1Abaq4TtF3MSZNxB2HifI=s1004)

*Caption / Legend:*
**Amplitude** measures from the center of the resting position to the center of the peak

![Definitions of wave measurements for wavelength.](https://lh3.googleusercontent.com/hYbEOpy3GfIuFxLUfMLU_r3VijC9KNldOlFhXM3oEYputn_p6YvzArLiC3dZWgzuuzVOfrsX2LUhP6BQP57NF_RD265PRui1VtLzxURvCDzMOg=s1004)

*Caption / Legend:*
**Wavelength** measures the distance between two adjacent peaks

![Linear progress indicator measurements.](https://lh3.googleusercontent.com/M-64WwKIqgmV6lWqTh7Ar7vJuUsvjqLTnOJcMLrFPbW4nxRmYITD4GbXXEGCjwK2eJLUBGlfD1rtb86saREi68enxN3Galq9ZUPa-pgFIm-QlA=s2048)

*Caption / Legend:*
Size measurements for linear progress indicators. The thicker variants are provided as sample measurement for makers to adjust the default version based on their use cases.

![Circular progress indicator measurements.](https://lh3.googleusercontent.com/8oX70XRFeRqxFH1vBkx8z4hy6nKrvShQvQsQuR8emIWoXRKU8OWnK5pdFx-Q8ZwF0d4w8qDLi5NqPYAqxekWoHy9ytjz-lz7Leo9TFNlWU8s=s2048)

*Caption / Legend:*
Size measurements for circular progress indicators. The thicker variants are provided as sample measurement for makers to adjust the default version based on their use cases.

![4dp padding on the left and right of the linear progress indicator.](https://lh3.googleusercontent.com/6_sdBcuvKe2j9XDUC70bzaxi8QsZW1507V6pQ9ZQstst3B_Y8w26_5Yuz504uIxL_GcrMfNhJFvNiQotKPPEPlRgCczoR5ys0e8wM7Lv6L19=s2048)

*Caption / Legend:*
The linear progress indicator is inset from the edge of the screen by 4dp

## Baseline tokens

The circular and linear progress indicator had separate token sets. These are no longer recommended.

#### Design Tokens: [Deprecated] Progress indicator - Circular

*This token set is deprecated. Use `md.comp.progress-indicator.circular` instead. Original tokens for the circular progress indicator.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.circular-progress-indicator.four-color.active-indicator.four.color` | `md.sys.color.tertiary-container` | COLOR | Circular progress indicator four color active indicator four color |
| `md.comp.circular-progress-indicator.four-color.active-indicator.three.color` | `md.sys.color.tertiary` | COLOR | Circular progress indicator four color active indicator three color |
| `md.comp.circular-progress-indicator.four-color.active-indicator.two.color` | `md.sys.color.primary-container` | COLOR | Circular progress indicator four color active indicator two color |
| `md.comp.circular-progress-indicator.four-color.active-indicator.one.color` | `md.sys.color.primary` | COLOR | Circular progress indicator four color active indicator one color |
| `md.comp.circular-progress-indicator.active-indicator.color` | `md.sys.color.primary` | COLOR | Circular progress indicator active indicator color |
| `md.comp.circular-progress-indicator.active-indicator.shape` | `md.sys.shape.corner.none` | SHAPE | Circular progress indicator active indicator shape |
| `md.comp.circular-progress-indicator.active-indicator.width` | 4dp | LENGTH | Circular progress indicator active indicator width |
| `md.comp.circular-progress-indicator.size` | 48dp | LENGTH | Circular progress indicator active indicator size |

#### Design Tokens: [Deprecated] Progress indicator - Linear

*This token set is deprecated. Use `md.comp.progress-indicator.linear` instead. Original tokens for the linear progress indicator.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.linear-progress-indicator.four-color.active-indicator.four.color` | `md.sys.color.tertiary-container` | COLOR | Linear progress indicator four color active indicator four color |
| `md.comp.linear-progress-indicator.four-color.active-indicator.three.color` | `md.sys.color.tertiary` | COLOR | Linear progress indicator four color active indicator three color |
| `md.comp.linear-progress-indicator.four-color.active-indicator.two.color` | `md.sys.color.primary-container` | COLOR | Linear progress indicator four color active indicator two color |
| `md.comp.linear-progress-indicator.four-color.active-indicator.one.color` | `md.sys.color.primary` | COLOR | Linear progress indicator four color active indicator one color |
| `md.comp.linear-progress-indicator.active-indicator.color` | `md.sys.color.primary` | COLOR | Linear progress indicator active indicator color |
| `md.comp.linear-progress-indicator.active-indicator.shape` | `md.sys.shape.corner.none` | SHAPE | Linear progress indicator active indicator shape |
| `md.comp.linear-progress-indicator.active-indicator.height` | 4dp | LENGTH | Linear progress indicator active indicator height |
| `md.comp.linear-progress-indicator.track.color` | `md.sys.color.surface-container-highest` | COLOR | Linear progress indicator track color |
| `md.comp.linear-progress-indicator.track.shape` | `md.sys.shape.corner.none` | SHAPE | Linear progress indicator track shape |
| `md.comp.linear-progress-indicator.track.height` | 4dp | LENGTH | Linear progress indicator track height |


## Guidelines

## Usage

Use progress indicators to show the status of ongoing processes, such as loading an app, submitting a form, or saving updates.

When multiple items are loading, use a single progress indicator to show progress for the group. Don’t add progress indicators to every activity.

Choose a loading or progress indicator that corresponds to the expected wait time and kind of process.

If the wait is very long, consider allowing people to navigate away from the page while the process finishes up.

| **Expected wait time** | **Recommendation** |
| --- | --- |
| Instant (under 200ms) | No indicator |
| Short (between 200ms and 5s) | Loading indicator |
| Long (Over 5s) | Progress indicator |

There are two variants of progress indicators:

1. Linear
2. Circular

**Linear** indicators are best when placed on the edge of a container.

**Circular** indicators are best when centered in an element.

A process should be represented by the same variant of progress indicator throughout the product. For example, if refreshing uses a circular indicator in one place, it should use circular indicators everywhere.

![1. A primary colored horizontal line fills a contrasting track from left to right. 2. A circle appears from 0 to 360 degrees.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep5ivu-07.png?alt=media)

*Caption / Legend:*
1. Linear indicator
2. Circular indicator

Progress indicators behave differently based on the time of progress being tracked:

- **Determinate**: Known progress and wait time
- **Indeterminate**: Unknown progress and wait time

When using a **determinate** indicator, the indicator must accurately represent the progress of what it's measuring.

Use **indeterminate** indicators to show that a process is happening, but the wait time is unknown.

As more information about a process becomes available, a progress indicator should change from **indeterminate** to **determinate**.

## Anatomy

### Active indicator

The active indicator shows the progress that has been made so far.

In indeterminate processes, it grows and shrinks along the track repeatedly.

The active indicator appears as soon as progress begins. At low percentages where space is limited, this should appear as a dot to help people understand that there’s progress underway.

![A linear and circular progress indicator at 1% progress, where the active indicator has only just appeared.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep6b3j-12.png?alt=media)

*Caption / Legend:*
When progress first begins, the active indicator appears as a dot

The active indicator has two shape options: **flat** and **wavy**. Use the shape that best fits the product’s tone.

The wavy shape can make longer processes feel less static and is best used when a more expressive style is appropriate.

When using the wavy shape, the overall height of the component changes. At very small sizes, the wavy shape may not be as visible.

### Stop indicator

The stop indicator is a 4dp circle that marks the end of a linear determinate progress indicator to meet Material's accessibility standards.

It's not used for indeterminate or circular progress indicators.

The stop indicator is required if the track has a contrast below 3:1 with its container or the surface behind the container.

![A primary colored horizontal  line fills a contrasting line from left to right.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep7pxt-16.png?alt=media)

*Caption / Legend:*
Use a stop indicator when placing the progress indicator inside a container with low contrast

![An invisible circular track fills with color from 0 to 360 degrees.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep87pn-17.png?alt=media)

*Caption / Legend:*
Only remove the end stop indicator if there's a visual contrast of at least 3:1 with surrounding surfaces

## Placement

Place a linear progress indicator along the edge of a container that’s loading. If the container changes shape, place it on the edge that animates. It can also be placed in the middle of a container.

Use a single progress indicator at the top of a page to show progress of the whole group. Don’t add one for every element unless they’re activated independently.

Circular progress indicators should be centered directly on the container or page that's loading, such as a button or card.

When loading more items on a page, place the circular progress indicator in the empty space where the new content will appear, not overlapping existing content.

However, if the content does not take long to load, consider using a loading indicator instead.

### Progress indicators in buttons

A circular indicator can be placed in a button to show that the button’s action is currently in progress.

In very small buttons, use the flat shape since the wavy shape is not as visible at that size.

To ensure a minimum 3:1 contrast ratio, change the active indicator color to be the same color as the button’s icon or label text, and remove the track.

## Responsive layout

### Right-to-left languages

Linear progress indicators should be mirrored horizontally for products using right-to-left (RTL) languages.

Circular progress indicators don’t need to be mirrored.

![Mirrored right-to-left progress indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep96rs-25.png?alt=media)

*Caption / Legend:*
Linear progress indicators can flow from right to left in right-to-left (RTL) languages

### Large screens

Circular progress indicators have flexible sizes. They can range from 24dp to 240dp, depending on the placement and the breakpoint. Avoid exceeding the minimum and maximum sizes.

Reserve very large progress indicators for large and extra-large windows, such as desktop.

![Circular progress indicators can range in size from 24dps to 240dps.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlep9qg1-26.png?alt=media)

*Caption / Legend:*
The waveform should scale with the size so the proportions look the same across sizes

Linear progress indicators dynamically adjust to fit the width of the window or element they’re placed within, such as a card. They shouldn’t be used in any elements smaller than 40dp.

The padding on each end should be 4dp minimum, but can be modified.

![Linear progress indicators can dynamically adjust to any width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepa8w9-27.png?alt=media)

*Caption / Legend:*
The linear progress indicator should always span the width of the UI element it’s placed within

## Accessibility

## Use cases

People should be able to do the following using the assistive technology:

- Navigate to the progress indicator
- Understand what progress the indicator is communicating

## Interaction & style

The active indicator, which displays progress, provides visual contrast of at least 3:1 against most background colors.

![Dark line of progress indicator stands out against the lighter colored track.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepc1r2-01.png?alt=media)

*Caption / Legend:*
The progress indicator and stop indicator provide visual contrast of at least 3:1 against most background colors

When integrated into another component, such as a button, make sure that the active indicator provides visual contrast of at least 3:1 against the other component.

For the active indicator, use the same color as the label text or icon. The track should be removed.

![Circular indicator on button passes 3 to 1 contrast test.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepcmau-02.png?alt=media)

*Caption / Legend:*
Ensure the indicator’s color provides at least 3:1 contrast against the surface it's on

![Circular indicator on button fails 3 to 1 contrast test.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepd6dk-03.png?alt=media)

*Caption / Legend:*
Avoid using a color below 3:1 contrast

For linear progress indicators, the stop indicator is required if the track has a contrast below 3:1 with its container or the surface behind the container.

Essentially, the end of the track must be easy to identify.

![Bright container holding the progress bar is on a dark surface, passing the 3:1 color contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepdozy-04.png?alt=media)

*Caption / Legend:*
Only remove the stop indicator when the linear progress indicator has at least a 3:1 color contrast with surrounding containers and surfaces

![Bright container holding progress indicator is on a bright surface, failing the 3:1 color contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepe18t-05.png?alt=media)

*Caption / Legend:*
Avoid removing the stop indicator if any adjacent containers or surfaces are below the 3:1 color contrast

## Labeling elements

Since the progress indicator is a visual cue, it needs an accessibility label to describe the kind and amount of progress made.

Use the **progress bar **accessibility role, and write an accessibility label that describes the purpose of the progress indicator. The label should include the process, such as "loading,” and the affected content, such as a page, article, or episode. For example: "Loading news article" or "Refreshing page."

![Determinate linear progress indicator has an accessibility label of “loading news article” and role of “progressbar”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepereg-06.png?alt=media)

*Caption / Legend:*
Progress indicator labels should explain which items are loading

![Indeterminate linear progress indicator has an accessibility label of “loading my episodes” and role of “progressbar.”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlepf1vr-07.png?alt=media)

*Caption / Legend:*
A label on an intedeterminate progress indicator on a screen which is loading a set of podcast episodes
