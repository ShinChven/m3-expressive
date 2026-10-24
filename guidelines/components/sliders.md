# Sliders

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/sliders](https://m3.material.io/components/sliders)
> Last Updated: 2026-07-17T07:13:18.037Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Three variants: Standard, centered, range
- Has five sizes, vertical and horizontal orientation, and an optional inset icon
- Sliders should present the full range of available values
- The slider value should take effect immediately

## Availability & resources

## M3 Expressive update

**May 2025**

The slider includes expressive configurations for orientation, shape sizes, and an inset icon. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

Updated on Android Views (MDC-Android) and Jetpack Compose.

Variants and naming:

- Changed **continuous** slider to **standard** slider
- The **discrete** slider is now the **stops** configuration

New configurations:

- Orientation: Horizontal, vertical
- Optional inset icon (standard slider only)
- Sizes: XS (existing default), S, M, L, XL

![3 M3 Expressive sliders.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lii3kv-02.png?alt=media)

*Caption / Legend:*
1. Standard slider
2. Centered slider
3. Range slider

## Previous updates

### Visual refresh to improve non-text contrast

**Dec 2023:** Updated on Android Views (MDC-Android) and Jetpack Compose.

- **Configuration:** Added centered configuration and range selection
- **Shape: **New shape for slider tracks and handles. Slider elements change shape when selected.
- **Motion:** Slider handle adjusts width upon selection. Slider tracks adjust in shape when sliding to the edge.
- **Color: **Refreshed color mappings

![M3 visually-refreshed slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lirx37-03.png?alt=media)

*Caption / Legend:*
M3 visual refresh: Sliders have a stop indicator, larger label text, and a vertical handle that narrows when pressed. Centered sliders start from the middle instead of the leading edge.

## Differences from M2

- **Color**: New color mappings and compatibility with dynamic color

![M2 slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7livqfr-04.png?alt=media)

*Caption / Legend:*
M2: Sliders have a circular handle and a small label when pressed

![Original M3 slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7liwct9-05.png?alt=media)

*Caption / Legend:*
M3: Sliders have new color mappings and support dynamic color

## Specs

## Variants

![3 variants of sliders.](https://lh3.googleusercontent.com/-UgZpnEJ6uET5STSdzpCWEydsoa9cfqtNAbzpuKX9-4jQ3d8IdU0EjRtpfgizjIX8I7XM-ETfXPEnfKi7XNZSQWJTTyKrLHjS95bsb6ZQc7smQ=s2048)

*Caption / Legend:*
1. Standard
2. Centered
3. Range

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Standard | Available as “continuous” slider | Available |
| Centered | Available (web only) | Available |
| Range | Available | Available |
| Discrete | Available | Available as “stops” configuration |

## Configurations

![Orientation and size configurations of sliders.](https://lh3.googleusercontent.com/PUKZpvA88_wvpKTUHRmGx0XIOjDEUAFWbO14A9AMUDyX-mu0w9qTo7ywQTKCcm8ERhdQHoohHwHt3Z-Tqo29eVw4_KyVf3pn-Z-UIcsszrYc=s2048)

*Caption / Legend:*
1. Orientation: Horizontal, vertical
2. Size: XS, S, M, L, XL

![Optional anatomy configurations of sliders.](https://lh3.googleusercontent.com/QFc1hXc78XHCuqhH4no1fQLDRvSzLaW1K8El5jIW1v3K3sNXjMquxEGcaq22u48Mq5kCqGRoPSCD7m8H37sAwyP_XyI6xY4AJp2GGW3e7-hs=s2048)

*Caption / Legend:*
1. Inset icon
2. Stops
3. Value indicator

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Inset icon | No (default) | Available | Available |
| Yes | -- | Available |  |
| Orientation | Horizontal (default) | Available | Available |
| Vertical | -- | Available |  |
| Size | XS (default) | Available | Available |
| S, M, L, XL | -- | Available on Android Views (MDC-Android). Available as tokens on other platforms.* |  |
| Stop indicators | No (default), Yes | Available as “discrete” slider | Available |
| Value Indicator | No (default), Yes | Available | Available |

*Configurations only available using tokens don’t have implemented presets in code. To change the size, swap the default size tokens md.comp.slider.**xsmall**.[...] with those of the desired size.

## Tokens & specs

Slider tokens are organized into a common token set, and token sets for each size. Switch token sets from the table’s menu. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Slider

*Common tokens for all expressive slider sizes, and baseline sliders.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.slider.active.handle.color` | `md.sys.color.primary` | COLOR | Slider active handle color |
| `md.comp.slider.active.track.outer-corner.corner-size` | `md.sys.shape.corner.full` | SHAPE | Slider active track outer corner size |
| `md.comp.slider.active.track.inner-corner.corner-size` | - | SHAPE | Slider active track inner corner size |
| `md.comp.slider.disabled.stop-indicator.container.opacity` | - | OPACITY | Slider disabled stop indicator container opacity |
| `md.comp.slider.disabled.stop-indicator.container.color` | `md.sys.color.on-surface` | COLOR | Slider disabled stop indicator container color |
| `md.comp.slider.disabled.stop-indicator.color` | `md.sys.color.on-surface` | COLOR | Slider disabled stop color inactive track |
| `md.comp.slider.disabled.stop-indicator.color-selected` | `md.sys.color.inverse-on-surface` | COLOR | Slider disabled stop color active track |
| `md.comp.slider.disabled.inactive.stop-indicator.container.color` | `md.sys.color.on-surface` | COLOR | Slider disabled inactive stop indicator container color |
| `md.comp.slider.disabled.active.stop-indicator.container.color` | `md.sys.color.inverse-on-surface` | COLOR | Slider disabled active stop indicator container color |
| `md.comp.slider.inactive.stop-indicator.container.opacity` | - | OPACITY | Slider inactive stop indicator container opacity |
| `md.comp.slider.inactive.stop-indicator.container.color` | `md.sys.color.on-secondary-container` | COLOR | Slider inactive stop indicator container color |
| `md.comp.slider.active.stop-indicator.container.opacity` | - | OPACITY | Slider active stop indicator container opacity |
| `md.comp.slider.active.stop-indicator.container.color` | `md.sys.color.on-primary` | COLOR | Slider active stop indicator container color |
| `md.comp.slider.stop-indicator.color-selected` | `md.sys.color.on-primary` | COLOR | Slider stop indicator color selected |
| `md.comp.slider.with-tick-marks.inactive.container.opacity` | - | OPACITY | Slider with tick marks inactive container opacity |
| `md.comp.slider.with-tick-marks.inactive.container.color` | `md.sys.color.on-surface-variant` | COLOR | Slider with tick marks inactive container color |
| `md.comp.slider.with-tick-marks.active.container.opacity` | - | OPACITY | Slider with tick marks active container opacity |
| `md.comp.slider.with-tick-marks.active.container.color` | `md.sys.color.on-primary` | COLOR | Slider with tick marks active container color |
| `md.comp.slider.label.container.height` | 28dp | LENGTH | Slider label container height |
| `md.comp.slider.label.container.color` | `md.sys.color.primary` | COLOR | Slider label container color |
| `md.comp.slider.active.container.opacity` | - | OPACITY | Slider active container opacity |
| `md.comp.slider.inactive.container.opacity` | - | OPACITY | Slider inactive container opacity |
| `md.comp.slider.label.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Slider label container elevation |
| `md.comp.slider.with-tick-marks.disabled.container.opacity` | - | OPACITY | Slider with tick marks disabled container opacity |
| `md.comp.slider.with-tick-marks.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Slider with tick marks disabled container color |
| `md.comp.slider.focus.stop.color` | `md.sys.color.primary` | COLOR | Slider focus stop color |
| `md.comp.slider.label.label-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Slider label label text color |
| `md.comp.slider.value-indicator.label.label-text.color` | `md.sys.color.inverse-on-surface` | COLOR | Slider value indicator label font color |
| `md.comp.slider.value-indicator.container.color` | `md.sys.color.inverse-surface` | COLOR | Slider value indicator container color |
| `md.comp.slider.pressed.stop.color` | `md.sys.color.primary` | COLOR | Slider pressed stop color |
| `md.comp.slider.pressed.inactive.track.color` | `md.sys.color.secondary-container` | COLOR | Slider pressed inactive track color |
| `md.comp.slider.pressed.active.track.color` | `md.sys.color.primary` | COLOR | Slider pressed active track color |
| `md.comp.slider.focus.inactive.track.color` | `md.sys.color.secondary-container` | COLOR | Slider focus inactive track color |
| `md.comp.slider.focus.active.track.color` | `md.sys.color.primary` | COLOR | Slider focus active track color |
| `md.comp.slider.hover.stop.color` | `md.sys.color.primary` | COLOR | Slider hover stop color |
| `md.comp.slider.active.handle.shape` | `md.sys.shape.corner.full` | SHAPE | Slider active handle shape |
| `md.comp.slider.stop-indicator.color` | `md.sys.color.on-secondary-container` | COLOR | Slider stop indicator color |
| `md.comp.slider.stop-indicator.shape` | `md.sys.shape.corner.full` | SHAPE | Slider stop indicator shape |
| `md.comp.slider.hover.handle.color` | `md.sys.color.primary` | COLOR | Slider hover handle color |
| `md.comp.slider.disabled.handle.opacity` | - | OPACITY | Slider disabled handle opacity |
| `md.comp.slider.disabled.inactive.track.opacity` | - | OPACITY | Slider disabled inactive track opacity |
| `md.comp.slider.disabled.active.track.opacity` | - | OPACITY | Slider disabled active track opacity |
| `md.comp.slider.value-indicator.label.label-text.size` | `md.sys.typescale.label-large.size` | FONT_SIZE | Slider value indicator label size |
| `md.comp.slider.value-indicator.label.label-text.line-height` | `md.sys.typescale.label-large.line-height` | LINE_HEIGHT | Slider value indicator label line height |
| `md.comp.slider.value-indicator.label.label-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Slider value indicator label tracking |
| `md.comp.slider.value-indicator.active.bottom-space` | `md.sys.measurement.space150` | LENGTH | Slider value indicator active bottom space |
| `md.comp.slider.value-indicator.label.label-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Slider value indicator label weight |
| `md.comp.slider.label.label-text.type` | - | TYPOGRAPHY | Type style |
| `md.comp.slider.label.label-text.font` | `md.sys.typescale.label-medium.font` | FONT_NAMES | Slider label label text font |
| `md.comp.slider.label.label-text.weight` | `md.sys.typescale.label-medium.weight` | FONT_WEIGHT | Slider label label text weight |
| `md.comp.slider.label.label-text.size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Slider label label text font size |
| `md.comp.slider.label.label-text.line-height` | `md.sys.typescale.label-medium.line-height` | LINE_HEIGHT | Slider label label text line height |
| `md.comp.slider.label.label-text.tracking` | `md.sys.typescale.label-medium.tracking` | FONT_TRACKING | Slider label label text tracking |
| `md.comp.slider.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Slider pressed state layer opacity |
| `md.comp.slider.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Slider pressed state layer color |
| `md.comp.slider.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Slider focus state layer opacity |
| `md.comp.slider.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Slider focus state layer color |
| `md.comp.slider.focus.handle.color` | `md.sys.color.primary` | COLOR | Slider focus handle color |
| `md.comp.slider.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Slider hover state layer opacity |
| `md.comp.slider.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Slider hover state layer color |
| `md.comp.slider.disabled.handle.elevation` | `md.sys.elevation.level0` | ELEVATION | Slider disabled handle elevation |
| `md.comp.slider.with-tick-marks.container.size` | 2dp | LENGTH | Slider with tick marks container size |
| `md.comp.slider.with-tick-marks.container.shape` | `md.sys.shape.corner.full` | SHAPE | Slider with tick marks container shape |
| `md.comp.slider.with-overlap.handle.outline.width` | 1dp | LENGTH | Slider with overlap handle outline width |
| `md.comp.slider.with-overlap.handle.outline.color` | `md.sys.color.on-primary` | COLOR | Slider with overlap handle outline color |
| `md.comp.slider.handle.elevation` | `md.sys.elevation.level1` | ELEVATION | Slider handle elevation |
| `md.comp.slider.handle.shadow-color` | `md.sys.color.shadow` | COLOR | Slider handle shadow color |
| `md.comp.slider.state-layer.size` | 40dp | LENGTH | Slider state layer size |
| `md.comp.slider.track.elevation` | `md.sys.elevation.level0` | ELEVATION | Slider track elevation |
| `md.comp.slider.stop-indicator.size` | 4dp | LENGTH | Slider stop indicator size |
| `md.comp.slider.disabled.handle.width` | 4dp | LENGTH | Slider disabled handle width |
| `md.comp.slider.focus.handle.width` | 2dp | LENGTH | Slider focus handle width |
| `md.comp.slider.value-indicator.label.label-text.font` | `md.sys.typescale.label-large.font` | FONT_NAMES | Slider value indicator label font |
| `md.comp.slider.pressed.handle.width` | 2dp | LENGTH | Slider pressed handle width |
| `md.comp.slider.hover.handle.width` | 4dp | LENGTH | Slider hover handle width |
| `md.comp.slider.stop-indicator.trailing-space` | `md.sys.measurement.space50` | LENGTH | Slider stop indicator trailing space |
| `md.comp.slider.label.label-text.font-size` | `md.sys.typescale.label-medium.size` | FONT_SIZE | Slider label label text font size |
| `md.comp.slider.inactive.track.color` | `md.sys.color.secondary-container` | COLOR | Slider inactive track color |
| `md.comp.slider.inactive.track.shape` | `md.sys.shape.corner.full` | SHAPE | Slider inactive track shape |
| `md.comp.slider.active.track.color` | `md.sys.color.primary` | COLOR | Slider active track color |
| `md.comp.slider.active.handle.padding` | `md.sys.measurement.space75` | LENGTH | Slider active handle padding |
| `md.comp.slider.active.handle.trailing-space` | `md.sys.measurement.space75` | LENGTH | Slider active handle trailing space |
| `md.comp.slider.active.handle.leading-space` | `md.sys.measurement.space75` | LENGTH | Slider active handle leading space |
| `md.comp.slider.active.handle.width` | 4dp | LENGTH | Slider active handle width |
| `md.comp.slider.active.handle.height` | 44dp | LENGTH | Slider active handle height |
| `md.comp.slider.active.track.shape` | `md.sys.shape.corner.full` | SHAPE | Slider active track shape |
| `md.comp.slider.handle.color` | `md.sys.color.primary` | COLOR | Slider handle color |
| `md.comp.slider.handle.shape` | `md.sys.shape.corner.full` | SHAPE | Slider handle shape |
| `md.comp.slider.handle.width` | 4dp | LENGTH | Slider handle width |
| `md.comp.slider.handle.height` | 44dp | LENGTH | Slider handle height |
| `md.comp.slider.inactive.track.height` | 16dp | LENGTH | Slider inactive track height |
| `md.comp.slider.active.track.height` | 16dp | LENGTH | Slider active track height |
| `md.comp.slider.disabled.inactive.track.color` | `md.sys.color.on-surface` | COLOR | Slider disabled inactive track color |
| `md.comp.slider.disabled.active.track.color` | `md.sys.color.on-surface` | COLOR | Slider disabled active track color |
| `md.comp.slider.pressed.handle.color` | `md.sys.color.primary` | COLOR | Slider pressed handle color |
| `md.comp.slider.disabled.handle.color` | `md.sys.color.on-surface` | COLOR | Slider disabled handle color |

#### Design Tokens: Slider - Size - Xsmall

*For expressive XS sliders.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.slider.xsmall.inactive.track.shape.trailing` | 8dp | LENGTH | Slider xsmall inactive track trailing shape |
| `md.comp.slider.xsmall.active.handle.height` | 44dp | LENGTH | Slider xsmall active handle height |
| `md.comp.slider.xsmall.inactive.track.height` | 16dp | LENGTH | Slider xsmall inactive track height |
| `md.comp.slider.xsmall.active.track.shape.leading` | 8dp | LENGTH | Slider xsmall active track leading shape |
| `md.comp.slider.xsmall.active.track.height` | 16dp | LENGTH | Slider xsmall active track height |

#### Design Tokens: Slider - Size - Small

*For expressive small sliders.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.slider.small.inactive.track.shape.trailing` | 8dp | LENGTH | Slider small inactive track trailing shape |
| `md.comp.slider.small.inactive.track.height` | 24dp | LENGTH | Slider small inactive track height |
| `md.comp.slider.small.active.handle.height` | 44dp | LENGTH | Slider small active handle height |
| `md.comp.slider.small.active.track.shape.leading` | 8dp | LENGTH | Slider small active track leading shape |
| `md.comp.slider.small.active.track.height` | 24dp | LENGTH | Slider small active track height |

#### Design Tokens: Slider - Size - Medium

*For expressive medium sliders.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.slider.medium.icon.padding` | 6dp | LENGTH | Slider medium icon padding |
| `md.comp.slider.medium.icon.size` | 24dp | LENGTH | Slider medium icon size |
| `md.comp.slider.medium.active.handle.height` | 44dp | LENGTH | Slider medium active handle height |
| `md.comp.slider.medium.inactive.track.shape.trailing` | 12dp | LENGTH | Slider medium inactive track trailing shape |
| `md.comp.slider.medium.inactive.track.height` | 40dp | LENGTH | Slider medium inactive track height |
| `md.comp.slider.medium.active.track.shape.leading` | 12dp | LENGTH | Slider medium active track leading shape |
| `md.comp.slider.medium.active.track.height` | 40dp | LENGTH | Slider medium active track height |

#### Design Tokens: Slider - Size - Large

*For expressive large sliders.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.slider.large.icon.padding` | 6dp | LENGTH | Slider large icon padding |
| `md.comp.slider.large.icon.size` | 24dp | LENGTH | Slider large icon size |
| `md.comp.slider.large.active.handle.height` | 68dp | LENGTH | Slider large active handle height |
| `md.comp.slider.large.inactive.track.shape.trailing` | 16dp | LENGTH | Slider large inactive track trailing shape |
| `md.comp.slider.large.inactive.track.height` | 56dp | LENGTH | Slider large inactive track trailing shape |
| `md.comp.slider.large.active.track.shape.leading` | 16dp | LENGTH | Slider large active track leading shape |
| `md.comp.slider.large.active.track.height` | 56dp | LENGTH | Slider large active track height |

#### Design Tokens: Slider - Size - Xlarge

*For expressive XL sliders.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.slider.xlarge.icon.padding` | 8dp | LENGTH | Slider xlarge icon padding |
| `md.comp.slider.xlarge.icon.size` | 32dp | LENGTH | Slider xlarge icon size |
| `md.comp.slider.xlarge.active.handle.height` | 108dp | LENGTH | Slider xlarge active handle height |
| `md.comp.slider.xlarge.inactive.track.shape.trailing` | 28dp | LENGTH | Slider xlarge inactive track trailing shape |
| `md.comp.slider.xlarge.inactive.track.height` | 96dp | LENGTH | Slider xlarge inactive track height |
| `md.comp.slider.xlarge.active.track.shape.leading` | 28dp | LENGTH | Slider xlarge active track leading shape |
| `md.comp.slider.xlarge.active.track.height` | 96dp | LENGTH | Slider xlarge active track height |


## Anatomy

![6 elements of a slider.](https://lh3.googleusercontent.com/Tj-xqiQbRv2zhsiRQmk6ZkdhFwQgK6qEZx40m4TMy8W7B8ulEiPsHemm1KcY6ejMeYjYFnJF2GHGnWzVq-v8yDHTRon1k-oZGg9VuIa2C4Q=s2048)

*Caption / Legend:*
1. Value indicator (optional)
2. Stop indicators (optional)
3. Active track
4. Handle
5. Inactive track
6. Inset icon (optional)

## Color

![9 color roles of a slider.](https://lh3.googleusercontent.com/CV3PfOlQdK3A_3O8RLyu_r-GjqW7NK-qgzQmKuo5M5tWBmI6eDGdNfq7p8bTvQbP1jYCpk8WaRktgSsCrKD9Lp1vbaeCtE2einRTw6e1J7dbGA=s2048)

*Caption / Legend:*
Slider color roles used for light and dark schemes:

1. Inverse surface
2. Inverse on surface
3. Primary
4. On primary
5. Primary
6. Secondary container
7. On secondary container
8. On secondary container
9. On primary

## States

![5 states of sliders in light and dark schemes.](https://lh3.googleusercontent.com/PgYCQrkBSJUOlzQMXu0BmIe16Fho4X9NdvdYYSOtE1tIl0aucZejoImkNIfdTpbPity3lWJxxg2WSoilrjogEOWTcVhxyGN0aYZl0sRWQuMpJA=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

## Measurements

![Common slider padding and size measurements.](https://lh3.googleusercontent.com/WLMws1Xen6XFUKvbCJS2NM4jwTMVmQxFlh8QhTslZGI-TR2eoFPXUp-ck8i0FhO_U2cy0cW5qnNP6Qkrsu1kJ-eztl1sJ_o5lHzXSUtr4FAMPw=s2048)

*Caption / Legend:*
Padding and size measurements for common sliders

![Slider padding and size measurements at each size configuration, XS to XL.](https://lh3.googleusercontent.com/FH3TsHZ1NpVLh--XKKb2ygB9rd0bgZ6ig1vGxWhQu5HOFVbk_8CXIxMAVdJnPxKj3fojh8jFh6qDqm41tD0R3YRaK0luWcktoURO5RZfBsuO=s2044)

*Caption / Legend:*
Padding and size measurements for XS, S, M, L, and XL sliders

| Attribute | XS | S | M | L | XL |
| --- | --- | --- | --- | --- | --- |
| Track height | 16dp | 24dp | 40dp | 56dp | 96dp |
| Label container height | 44dp |  |  |  |  |
| Label container width | 48dp |  |  |  |  |
| Handle height | 44dp | 44dp | 52dp | 68dp | 108dp |
| Handle width | 4dp |  |  |  |  |
| Track shape | 8dp | 8dp | 12dp | 16dp | 28dp |
| Inset icon size | -- | -- | 24dp | 24dp | 32dp |

## Guidelines

## Usage

Sliders are used to select values along a track. They’re ideal for adjusting settings such as volume and brightness, or changing the intensity of image filters.

Sliders can use icons or labels to represent a numeric or relative scale.

![Sound settings screen with continuous sliders labeled call volume and alarm volume.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmabg8tbj-02.png?alt=media)

*Caption / Legend:*
Use sliders to pick a value from a range, like volume loudness

Changes made with sliders must take effect immediately, so people can understand the effects of their selection as they're moving the slider.

There are three different variants of sliders: **standard**, **centered**, and **range:**

Standard sliders select one value from a range of values. Use this when the slider should start from zero or the beginning of a sequence.

![Horizontal standard slider with an end stop indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk01w5-04.png?alt=media)

*Caption / Legend:*
Horizontal standard slider

![Vertical standard slider  with an end stop indicator.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk1j0t-05.png?alt=media)

*Caption / Legend:*
Vertical standard slider

Centered sliders select a value from a positive and negative value range. Use this when zero, or the default value, is in the middle of the range.

![Horizontal centered slider with a negative value and visible stop indicators at each end.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk3lyv-06.png?alt=media)

*Caption / Legend:*
Horizontal centered slider

![Vertical centered slider with a negative value and visible stop indicators at each end.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk4tsn-07.png?alt=media)

*Caption / Legend:*
Vertical centered slider

Range sliders select two values on one slider to create a range. Use this when defining a minimum and maximum value.

Avoid using range sliders vertically, as this can add too much cognitive load. People are used to most sliders being horizontal.

![Horizontal range selection slider with 2 values selected, and a stop indicator at each end.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk6981-08.png?alt=media)

*Caption / Legend:*
Horizontal range slider

![Vertical range slider with 2 values selected, and a stop indicator at each end.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7ln45vm-09%20-%20don't.png?alt=media)

*Caption / Legend:*
Because of the additional cognitive load of a range slider, avoid using it in vertical orientation.

## Anatomy

![6 elements of a slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7m553sk-04-1.png?alt=media)

*Caption / Legend:*
1. Value indicator (optional)
2. Stop indicators (optional)
3. Active track
4. Handle
5. Inactive track
6. Inset icon (optional)

### Track

The track shows the full range of values that can be selected on the slider. It has two sections: active and inactive.

- The **active **section of the track is from the minimum value to the handle. For range sliders, the active track is between the two handles.
- The **inactive** section of the track is from the handle to the maximum value, or outside the two handles of a range slider.

For left-to-right (LTR) languages, the values increase from left to right. For right-to-left (RTL) languages, this is reversed.

![Sliders for font size and display size with stop indicators along the track.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lk9dsb-11.png?alt=media)

*Caption / Legend:*
The track on a slider shows the available range

### Handle

The handle can be moved along the track to choose a value.

When sliders have two handles, the handles choose the minimum and maximum values in a range.

The handle changes shape to indicate when it’s pressed.

![The handle is a vertical line on the current value of the slider. It shrinks in width when selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkaurk-12.png?alt=media)

*Caption / Legend:*
A handle changes shape when it's being pressed or dragged

![2 unselected handles on a slider with range selection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkbdhm-13.png?alt=media)

*Caption / Legend:*
Two handles are used for sliders with range selection

## Configurations

### Value

The value displays the specific value that corresponds with the handle’s placement. 

A value appears when interacting with the corresponding handle. For range sliders, only one value should be shown at a time.

If the value is shown elsewhere, the indicator is not required.

![A value of 50 is above a slider handle in the middle of the track.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s2vu5-13.png?alt=media)

*Caption / Legend:*
A value can appear while the handle is being pressed or dragged

![A value of 75 is above the pressed range slider handle. The unselected slider doesn’t show the value.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkclo7-14.png?alt=media)

*Caption / Legend:*
For range sliders, the value only appears on one handle at a time

Instead of showing the built-in value label, a separate text input field can be added outside of the slider. If this is added, the slider and value in this text field should automatically update to match each other.

Make sure people can tab to the text field directly after the slider.

### Stop indicators

Stop indicators show which predetermined values can be chosen on the slider. The slider handle snaps to the closest stop. 

Avoid having too many stop indicators on a slider, because it can become visually crowded and difficult to adjust the value.

All sliders have stops at the end of the inactive track to ensure at least a 3:1 contrast with the background. If the inactive track has this level of contrast already, the end stops can be removed.

![Stop indicators are equally spaced out on a slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s1ozg-10.png?alt=media)

*Caption / Legend:*
Stop indicators show each available value on a slider

Icons or text can be added outside the slider to indicate the range of values and make the slider more accessible. This can be used instead of a stop indicator.

![Plus and minus icons on each end of the slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkfou6-17.png?alt=media)

*Caption / Legend:*
Plus and minus icons, or text, can be added to the left and right of the slider

### Orientation

Sliders can be oriented either horizontally or vertically, depending on what is best for your use case.

![Horizontal slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkhuu1-18.png?alt=media)

*Caption / Legend:*
Standard slider in horizontal orientation

![Vertical slider. Zero is at the bottom.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkj1b8-19.png?alt=media)

*Caption / Legend:*
Standard slider in vertical orientation

### Inset icon

Standard sliders that are M, L, or XL can include an icon within the track. This icon should illustrate what the slider controls. Avoid adding inset icons to XS or S sliders.

When there’s not enough space for the icon on the active track, like at a low value, the icon moves to the inactive track.

Consider swapping which icon is displayed at zero, like a volume icon becoming a mute icon.

![Inset icon on the active track when the handle is at 50%, and on the inactive track when the handle is at 0.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkmte8-20.png?alt=media)

*Caption / Legend:*
Inset icons change placement based on the handle

![An inset icon on an XS slider. The icon bounds are cut off by the slider container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lni1k4-21%20-%20don't.png?alt=media)

*Caption / Legend:*
Don’t use an inset icon with sliders that have track thicknesses under 40dp

Don’t use inset icons on centered or range sliders. It makes it unclear where the start of the slider is.

![Centered slider with an inset icon on one end, and a stop indicator on the other. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lnlfie-22%20-%20don't.png?alt=media)

*Caption / Legend:*
Don’t use an inset icon on a centered slider

![Range slider with an inset icon on one end, and a stop indicator on the other. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lnor7e-23%20-%20don't.png?alt=media)

*Caption / Legend:*
Don’t use an inset icon on a range slider

### Size

Sliders come in different sizes: XS, S, M, L, and XL. Use larger sizes to increase the targets and provide a larger visual emphasis.

The active and inactive tracks should always be the same size.

![5 sizes of sliders.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkolpk-24.png?alt=media)

*Caption / Legend:*
1. XS: 16dp
2. S: 24dp
3. M: 40dp
4. L: 56dp
5. XL: 96dp

XL sliders should be reserved for hero moments, where the slider itself is the most important element on the page.

![An XL slider used to adjust living room temperature on mobile. No other controls are on screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm7lkr4j4-25.png?alt=media)

*Caption / Legend:*
XL sliders should be the focus of the page

## Behaviors

### Select & drag

Select a value by dragging the handle.

### Select jump

Select a value by selecting part of the track.

### Select & arrow

Select a value using the keyboard.

**Tab:** Focus lands on handle 

**Arrows: **Selected value increases or decreases by one value or stop indicator

**Space & arrows:** Selected value increases or decreases by a larger interval or stop indicator

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate to a slider
- Select a range by controlling a handle along a track
- Get appropriate feedback based on input type

## Interaction & style

The slider handle shrinks in width and the value appears to provide a visual cue to the user that the handle is being pressed.

**Touch**

When tapped or dragged, the handle width shrinks to provide interaction feedback, and the value appears.

**Cursor**

When hovered, the cursor changes. When clicked and dragged, the handle width shrinks, and the value appears.

### Focus and navigation

Initial focus lands directly on the handle, since it’s the primary interactive element of the slider.

The slider value can then be adjusted using the arrow keys or other keyboard navigation options.

## Color contrast

Use visual anchors so the end of the slider’s inactive track has at least 3:1 contrast with the background. The stop indicator makes the end easily visible on most backgrounds.

![The inactive track has contrast below 3:1 with the background. The stop indicator is above 3:1. Slider is accessible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s6sg3-3.png?alt=media)

*Caption / Legend:*
A stop indicator on the inactive track makes it easier to identify the end of the slider on a low-contrast background

Alternatively, icons or other elements that have a 3:1 contrast with the background can be used to indicate the ends of the slider’s inactive track.

![The inactive track has contrast ratio below 3:1 with the background. The icon is above 3:1. The slider is accessible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1s73wl-4.png?alt=media)

*Caption / Legend:*
Icons make it easier to identify the ends of the slider on a low-contrast background

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| Tab | Moves focus to the slider handle |
| Arrows | Increase and decrease the value by one value or one stop indicator |
| Space & Arrows | Increase and decrease the value by one interval or one stop indicator |
| Home or End | Set the slider to the first and last values on the slider |

## Labeling elements

The accessibility label for a slider is typically the same as the slider's adjacent text label. It should have the **slider** role.

![Annotated aria tags of a slider.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0o6wp1l-5.png?alt=media)

*Caption / Legend:*
A slider’s accessibility label should match the adjacent UI text

If the UI text is correctly linked to the slider, assistive tech (such as a screenreader) will read the UI text followed by the component’s role.

![Annotated aria tags of a slider with stepper icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm3601h6w-6.png?alt=media)

*Caption / Legend:*
Icon buttons placed outside the slider should have the button role
