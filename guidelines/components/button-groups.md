# Button groups

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/button-groups](https://m3.material.io/components/button-groups)
> Last Updated: 2026-09-16T18:25:16.117Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Two variants: **standard** and **connected**
- Applies shape morph when pressed and selected
- Connected button groups replace the segmented button
- Works with all button sizes: XS, S, M, L, and XL
- Support for single-select, multi-select, and selection-required

![A standard button group and a segmented button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4sskpfx-1_alt.png?alt=media)

*Caption / Legend:*
Button groups can contain buttons and icon buttons

## Availability & resources

## M3 Expressive update

Button groups apply shape, motion, and width changes to buttons and icon buttons to make them more interactive. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**May 2025**

New component added to catalog.

Variants and naming:

- Added standard button group
- Added connected button group

- Use instead of segmented button, which is no longer recommended

Configurations:

- Works with all button sizes: XS, S, M, L, and XL
- Applies default shape to all buttons: round or square

![Standard button group in 3 of 5 available sizes, and segmented button group with just icon buttons and just common buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0ca0qix-1.png?alt=media)

*Caption / Legend:*
Button groups are containers that hold buttons of many shapes and sizes

## Specs

## Variants

![Various colors and shapes of standard and connected button groups.](https://lh3.googleusercontent.com/Zlys4Fta71zY-GAiCcT-oqug62NMk2muBeMcrPxVq_ZyoZhWxZrY5QlyYMHMI8wb6GSstakH8BmszYQQIEMg14U8WI6cX4v1uKZ_jSFIIYJGZA=s2048)

*Caption / Legend:*
1. Standard button group
2. Connected button group

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Standard button group | -- | Available |
| Connected button group | Available as segmented button | Available |

## Configurations

![Five sizes of button groups and two shapes of button groups.](https://lh3.googleusercontent.com/tXvGi5QNHXaEdYS0QIwTTJHGUdhlUv1s8dzEvt3yvdhs0CCvXGe3Y3bBOTJvHKv2VA3DPdHEWmLb9UAY_h5Gls6mTe6ihCadt0qIZbdLS7SY2g=s2048)

*Caption / Legend:*
Configurations for both variants of button groups:

1. Extra small
2. Small
3. Medium
4. Large
5. Extra large
6. Single-select and multi-select
7. Round and square

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Size | XS, S, M, L, XL | -- | Available |
| Default shape | Round, square | -- | Available |
| Selection | Single-select, multi-select, selection-required | Available as segmented button | Available |

## Tokens & specs

Standard and connected button group tokens are organized by size. Select the variant and size from the token set menu. Go to the [button](/m3/pages/common-buttons/specs/) and [icon button](/m3/pages/icon-buttons/specs/) pages to view their tokens. [Learn about design tokens](/m3/pages/design-tokens/overview/)

#### Design Tokens: Button group standard - Size - Xsmall

*For XS standard button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button group xsmall pressed motion spring dampening |
| `md.comp.button-group.standard.xsmall.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button group xsmall pressed motion spring stiffness |
| `md.comp.button-group.standard.xsmall.pressed.item.width.multiplier` | 15percent | LENGTH | Button group xsmall pressed width multiplier |
| `md.comp.button-group.standard.xsmall.container.height` | 32dp | LENGTH | Button group xsmall container height |
| `md.comp.button-group.standard.xsmall.between-space` | 18dp | LENGTH | Button group xsmall between space |

#### Design Tokens: Button group standard - Size - Small

*For small standard button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.standard.small.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button group small pressed motion spring dampening |
| `md.comp.button-group.standard.small.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button group small pressed motion spring stiffness |
| `md.comp.button-group.standard.small.pressed.item.width.multiplier` | 15percent | LENGTH | Button group small pressed width multiplier |
| `md.comp.button-group.standard.small.container.height` | 40dp | LENGTH | Button group small container height |
| `md.comp.button-group.standard.small.between-space` | `md.sys.measurement.space150` | LENGTH | Button group small between space |

#### Design Tokens: Button group standard - Size - Medium

*For medium standard button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button group medium pressed motion spring dampening |
| `md.comp.button-group.standard.medium.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button group medium pressed motion spring stiffness |
| `md.comp.button-group.standard.medium.pressed.item.width.multiplier` | 15percent | LENGTH | Button group medium pressed width multiplier |
| `md.comp.button-group.standard.medium.container.height` | 56dp | LENGTH | Button group medium container height |
| `md.comp.button-group.standard.medium.between-space` | `md.sys.measurement.space100` | LENGTH | Button group medium between space |

#### Design Tokens: Button group standard - Size - Large

*For large standard button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.standard.large.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button group large pressed motion spring dampening |
| `md.comp.button-group.standard.large.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button group large pressed motion spring stiffness |
| `md.comp.button-group.standard.large.pressed.item.width.multiplier` | 15percent | LENGTH | Button group large pressed width multiplier |
| `md.comp.button-group.standard.large.container.height` | 96dp | LENGTH | Button group large container height |
| `md.comp.button-group.standard.large.between-space` | `md.sys.measurement.space100` | LENGTH | Button group large between space |

#### Design Tokens: Button group standard - Size - Xlarge

*For XL standard button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.dampening` | `md.sys.motion.spring.fast.spatial.damping` | DURATION | Button group xlarge pressed motion spring dampening |
| `md.comp.button-group.standard.xlarge.pressed.item.width.motion.spring.stiffness` | `md.sys.motion.spring.fast.spatial.stiffness` | DURATION | Button group xlarge pressed motion spring stiffness |
| `md.comp.button-group.standard.xlarge.pressed.item.width.multiplier` | 15percent | LENGTH | Button group xlarge pressed width multiplier |
| `md.comp.button-group.standard.xlarge.container.height` | 136dp | LENGTH | Button group xlarge container height |
| `md.comp.button-group.standard.xlarge.between-space` | `md.sys.measurement.space100` | LENGTH | Button group xlarge between space |

#### Design Tokens: Button group connected - Size - Xsmall

*For XS connected button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.connected.xsmall.selected.inner-corner.corner-size` | 50percent | LENGTH | Button group connected xsmall selected inner corner size |
| `md.comp.button-group.connected.xsmall.pressed.inner-corner.corner-size` | `md.sys.shape.corner-value.extra-small` | SHAPE | Button group connected xsmall pressed inner corner size |
| `md.comp.button-group.connected.xsmall.inner-corner.corner-size` | `md.sys.shape.corner-value.small` | SHAPE | Button group connected xsmall inner corner size |
| `md.comp.button-group.connected.xsmall.container.height` | 32dp | LENGTH | Button group connected xsmall container height |
| `md.comp.button-group.connected.xsmall.between-space` | `md.sys.measurement.space25` | LENGTH | Button group connected xsmall space between buttons |
| `md.comp.button-group.connected.xsmall.container.shape` | `md.sys.shape.corner.full` | SHAPE | Button group connected xsmall container shape |

#### Design Tokens: Button group connected - Size - Small

*For small connected button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.connected.small.selected.inner-corner.corner-size` | 50percent | LENGTH | Button group connected small selected inner corner size |
| `md.comp.button-group.connected.small.pressed.inner-corner.corner-size` | `md.sys.shape.corner-value.extra-small` | SHAPE | Button group connected small pressed inner corner size |
| `md.comp.button-group.connected.small.inner-corner.corner-size` | `md.sys.shape.corner-value.small` | SHAPE | Button group connected small inner corner size |
| `md.comp.button-group.connected.small.container.height` | 40dp | LENGTH | Button group connected small container height |
| `md.comp.button-group.connected.small.between-space` | `md.sys.measurement.space25` | LENGTH | Button group connected small space between buttons |
| `md.comp.button-group.connected.small.container.shape` | `md.sys.shape.corner.full` | SHAPE | Button group connected small container shape |

#### Design Tokens: Button group connected - Size - Medium

*For medium connected button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.connected.medium.selected.inner-corner.corner-size` | 50percent | LENGTH | Button group connected medium selected inner corner size |
| `md.comp.button-group.connected.medium.pressed.inner-corner.corner-size` | `md.sys.shape.corner-value.extra-small` | SHAPE | Button group connected medium pressed inner corner size |
| `md.comp.button-group.connected.medium.inner-corner.corner-size` | `md.sys.shape.corner-value.small` | SHAPE | Button group connected medium inner corner size |
| `md.comp.button-group.connected.medium.container.height` | 56dp | LENGTH | Button group connected medium container height |
| `md.comp.button-group.connected.medium.between-space` | `md.sys.measurement.space25` | LENGTH | Button group connected medium space between buttons |
| `md.comp.button-group.connected.medium.container.shape` | `md.sys.shape.corner.full` | SHAPE | Button group connected medium container shape |

#### Design Tokens: Button group connected - Size - Large

*For large connected button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.connected.large.pressed.inner-corner.corner-size` | `md.sys.shape.corner-value.medium` | SHAPE | Button group connected large pressed inner corner size |
| `md.comp.button-group.connected.large.selected.inner-corner.corner-size` | 50percent | LENGTH | Button group connected large selected inner corner size |
| `md.comp.button-group.connected.large.inner-corner.corner-size` | `md.sys.shape.corner-value.large` | SHAPE | Button group connected large inner corner size |
| `md.comp.button-group.connected.large.container.height` | 96dp | LENGTH | Button group connected large container height |
| `md.comp.button-group.connected.large.between-space` | `md.sys.measurement.space25` | LENGTH | Button group connected large space between buttons |
| `md.comp.button-group.connected.large.container.shape` | `md.sys.shape.corner.full` | SHAPE | Button group connected large container shape |

#### Design Tokens: Button group connected - Size - Xlarge

*For XL connected button groups.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.button-group.connected.xlarge.selected.inner-corner.corner-size` | 50percent | LENGTH | Button group connected xlarge selected inner corner size |
| `md.comp.button-group.connected.xlarge.pressed.inner-corner.corner-size` | `md.sys.shape.corner-value.large` | SHAPE | Button group connected xlarge pressed inner corner size |
| `md.comp.button-group.connected.xlarge.inner-corner.corner-size` | `md.sys.shape.corner-value.large-increased` | SHAPE | Button group connected xlarge inner corner size |
| `md.comp.button-group.connected.xlarge.container.height` | 136dp | LENGTH | Button group connected xlarge container height |
| `md.comp.button-group.connected.xlarge.between-space` | `md.sys.measurement.space25` | LENGTH | Button group connected xlarge space between buttons |
| `md.comp.button-group.connected.xlarge.container.shape` | `md.sys.shape.corner.full` | SHAPE | Button group connected xlarge container shape |


## Anatomy

Button groups are invisible containers that add padding between buttons and modify button shape. They don’t contain any buttons by default.

![The container outlined on both variants of button groups.](https://lh3.googleusercontent.com/909fUN1vEim33Fg-tzKVqEEl_EQRq_GsNWP9dPCSA181-jk63D2BmlLmh8pisBn2zBlyE581QGQUAggrzVLnD1e2dAv10jtBVs8_BMY5XsItOQ=s2048)

*Caption / Legend:*
1. Container

### Common layouts

Mix and match buttons and icon buttons for different scenarios.

![4 common layouts of button groups.](https://lh3.googleusercontent.com/mB9JxUhRXlbUJhjAnZciD7yqHtJQpwyqJME-B-dTSOz6AQVQbdOHskFsAM7E60jDTOOPx9qjA7YiJt_46pxLrbnr8_wHmIAWBts0Nl1sd0IloA=s2048)

*Caption / Legend:*
1. Label buttons
2. Label buttons and icon buttons
3. Extra small icon buttons
4. Large icon buttons

### Color

Button groups have no color properties. They can use the default button or toggle button color styles, like filled, tonal, and outlined. Avoid using standard icon buttons or text buttons, as they have no container treatment.

![The container outlined on both variants of button groups.](https://lh3.googleusercontent.com/9hbmv_ziBEblvbLNhjPIK994tZijzcHgGhHBn_z-e52FBeulOHrdGeVlk4y0G8YWkUVABgf5EvmfpWPJnsSxad4N_QjZ5bW-x3LJ4xRqO0s=s2048)

*Caption / Legend:*
1. Filled
2. Tonal
3. Outlined
4. Elevated

## Selection & activation

**Standard button groups** add interaction between adjacent buttons when a button is selected or activated.

This interaction changes the width, shape, and padding of the selected or activated button, which adjusts the width of buttons directly next to it.

**Connected button groups** don’t add any interaction between buttons when selected or activated.

They only affect the shape of the button being selected or activated.

## States

### Standard button group

When a button is pressed, standard button groups modify the width and shape of that button and adjacent buttons.

![5 states of a standard button group.](https://lh3.googleusercontent.com/gQSD-N83stSwtNWu4Vgei7se_1vFmSqc8L7QyZ_u66ja9ZsX_71o7I8800O7qg8TBICKzr6L2vBtv09cuWq4NAzoND8_lIYAS0DqxkrOh6tM=s1352)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

When a toggle button is selected in a standard button group, its shape should change between square and round. The color should change according to the [button specs](/m3/pages/common-buttons/specs).

![5 states of a standard button group with toggle buttons.](https://lh3.googleusercontent.com/81FApYiTXho8D7eyhKVzVF5qhIRk02bF6rEp6QoLXRtnuW94g2EoBt1EQLLK7h2vRiKsRbNHUyYa3OCvVQRVW3jGBVlkBqaiNrK6oiVZEIad1w=s1352)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

### Connected button group

Connected button groups have different shape changes than standard button groups. Selecting a button does not affect adjacent buttons.

![5 states of a segmented button group.](https://lh3.googleusercontent.com/zh7Dh6_ChlGUt5mWmhDpY_dTPHFXlFOmdfy2AJEpn013_utxmX5it3VZuG3iyveqk3N3Pj07dV4a2XtWhOkmn4FbvwvuPHUVa0YYRuTa6WJ3vw=s2048)

*Caption / Legend:*
Connected button group unselected states:

1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

![4 states of a segmented button group with toggle buttons.](https://lh3.googleusercontent.com/N09iT9pfuy2j_ZfeAqJIUzPo31zdiKwWd0P-BH5eVSj3QR3JWxULGnjVnTbavy0VNZX5lhBc9Dyw1NTBThW5rbaOUcJ25kePIXmYaKTB0Ikx=s2048)

*Caption / Legend:*
Connected button group selected states:

1. Enabled
2. Hovered
3. Focused
4. Pressed

## Measurements

### Standard button group

Standard groups apply padding between all buttons. The amount of padding changes based on button size to ensure a minimum accessible target size of 48dp. More details on padding: [Button specs](/m3/pages/common-buttons/specs), [icon button specs](/m3/pages/icon-buttons/specs)

![Standard button group padding measurements.](https://lh3.googleusercontent.com/RGY_WzbLD07B3K6DGITtC-0NcW5LQI1HS1L-g0O4Lt0wttv2BWMZQWR2LqpG39dzWUHBNqCx12noXUfNGg2PKUhJVJcW-ndLNWd0LJ-H8wVW=s2048)

*Caption / Legend:*
Standard button group inner padding:

1. XS: 18dp
2. S: 12dp
3. M: 8dp
4. L: 8dp
5. XL: 8dp

### Connected button group

For all connected button groups, use 2dp padding. This provides visual consistency at scale.

![Connected button group padding and corner radius measurements.](https://lh3.googleusercontent.com/tyj4mLRYzA86JWOUFPOV0mFMQxD7ckw1kX2zjPh0iOs4KV_jy6SCEtBmeQASzBTE9ULLNl0NY_jT32BX76pcZDRzLsRJ4PQgdvoi0IfOyLs=s2048)

*Caption / Legend:*
Round connected button group inner padding is 2dp at every size. The outer shape is fully round, and the inner shape remains square with the following corner sizes:

1. XS: 4dp
2. S: 8dp
3. M: 8dp
4. L: 16dp
5. XL: 20dp

![Connected button group padding and corner radius measurements for square buttons.](https://lh3.googleusercontent.com/DiysV2VqS8bJV3jH34XtaPeeGGi2Svo6ZIFJhmjAeYH0zOw7-6P-5qgZeRy2A6CoXA2mgQ0WMXanpp3k0FqLX7ez6AhGTGnztpRBRiqQzND0=s2048)

*Caption / Legend:*
Square connected button group inner padding is 2dp at every size. The outer shape has the following corner sizes:

1. XS: 4dp
2. S: 8dp
3. M: 8dp
4. L: 16dp
5. XL: 20dp

### Minimum widths

Extra small and small connected button groups have 48dp target areas and a minimum width of 48dp.

![48x48dp accessible target areas on the XS and S connected button groups.](https://lh3.googleusercontent.com/3YpaF7-0WXRLTv6vxHgKCSJBsLTOFIaTw5JZ5795oi7393Y_y8hlC-gNbJh57zwFbM8SJ6VsaQMH9dVZW3E6RTF2ZtysUXJaufAilOko_hZV=s2048)

*Caption / Legend:*
1. Extra small
2. Small

## Density

Button groups adapt to density of the buttons inside. [More on density](/m3/pages/grids-spacing/density)

![Connected button groups at 0, -1, -2, and -3 density.](https://lh3.googleusercontent.com/yW6GJfPC6vob2O0uaXXiMDGwKXMv7majvHsxv9MEQGBjXCtZg0YERe27DGduNwB1ofpRLw4evKy_CZWsciavxwo6bvOHrDwnL_tjvUGXmB6t=s1352)

*Caption / Legend:*
Button groups adapt to the height of the buttons inside, including when density is applied

## High contrast mode

High contrast mode is an accessibility feature that aims to maximize legibility by using a limited color palette.

Follow the contrast mode set by the buttons.

For selection, use white.

![Connected button groups in high contrast mode.](https://lh3.googleusercontent.com/MPfnO0UzrchHG3SjviLh4k44rL-H4HoNDJHG0lBELyMVYZdAqMFhQDTYFfZKzAf3tT2z2OZS1K3nG0indiR282AgLZBrjQP014YCdblkvv4=s1352)

*Caption / Legend:*
1. Enabled
2. Selected
3. Focused

## Guidelines

## Usage

There are two variants of button groups: **standard** and **connected**. 

**Standard button groups** add interaction between adjacent buttons so they respond to each other. When a button in a standard group is selected:

- The selected button changes shape and width
- A selected toggle button also changes color
- Adjacent buttons move and temporarily change width

![A welcome screen with a colorful standard button group. 2 pink icon buttons are narrow, and 1 purple button is labelled “Get started".](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0di4v84-1.png?alt=media)

*Caption / Legend:*
Button groups add more expression to a product

Mix and match the different  button variants, widths, and colors to emphasize what’s important, and to visually group related buttons.

By default, all buttons in a standard group should be the same size (XS to XL) and shape (round or square).

- Only use multiple sizes in a group for hero moments
- Avoid mixing sizes frequently
- Only use a different shape in a group when a button is selected, or to add meaning or contrast

![A standard button group with 3 buttons of different colors but the same square shape.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0diaau3-same%20shapes.png?alt=media)

*Caption / Legend:*
Use the same shapes for buttons in a group, but change other properties like width and color

![A standard button group with 3 buttons, including a round primary button. A square button is used to add items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dibcom-different%20shapes.png?alt=media)

*Caption / Legend:*
Reserve shape differences in button groups for key interactions

**Connected button groups** help people select options, switch views, or sort elements in a page.

They behave similarly to standard groups, except they don’t affect adjacent buttons.

Connected groups should replace the baseline segmented button, which is no longer recommended.

Use connected button groups when the button content is related, and buttons can be selected.

![A shopping app with an option to choose the volume of an item using a connected button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dijxcq-16.png?alt=media)

*Caption / Legend:*
Closely related actions work well in a connected button group

Connected button groups should be used for single or multi-select patterns that use toggle buttons.

Avoid using a connected group when none of the buttons can be toggled.

![2 filters using connected button groups of 2 and 4 items. The group with 4 items has multiple buttons selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0diog82-18.png?alt=media)

*Caption / Legend:*
Use the connected button group with single or multi-select patterns

### Color

Avoid mixing color styles in connected button groups; it can make selection and emphasis unclear.

![Selecting a button in a connected button group labelled “My files,” “Shared,” and “Computers.”](https://lh3.googleusercontent.com/eUF5jkygvsUgcQm3ey4C4f3n04x79AaJvSz9AmeLk9FBserFzb7VbHkTo316YyrAMQAv62NxJdQy0p7LWIONggFliGMGnjLUbSuFjulASYcx=s1352)

*Caption / Legend:*
Don’t mix color styles in connected button groups

## Anatomy

![1 element of a button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4sznpeh-5.png?alt=media)

*Caption / Legend:*
1. Container

### Container

The standard button group container has padding between buttons so they can animate width and shape without disrupting the product layout. 

The standard button group hugs the width of the buttons inside.

![The container hugs the buttons. Inner padding is highlighted.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0diztnf-6.png?alt=media)

*Caption / Legend:*
Button groups can animate without affecting their surroundings

The connected button group should span the width of the page or surface it’s placed on, increasing the button widths inside.

In larger windows, consider adding a maximum width to the connected group to avoid it growing too wide.

![2 connected button groups, with 2 and 4 buttons respectively, spanning the same width on a screen, with margins from the edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dj3wcm-18-1.png?alt=media)

*Caption / Legend:*
Connected button groups increase the widths of each button inside and expand to their container width

## Adaptive design

Adaptive design allows an interface to respond or change based on context, such as the user, device, and usage. [More on adaptive design](/m3/pages/layout-overview/adaptive-design/)

### Resizing

Button groups should move through layouts together in a single line. They shouldn’t wrap to a second line. Multiple button groups can be stacked to keep items close together. However, button groups don’t interact vertically.

Button groups and individual buttons can be set to **fixed** or **flexible** resizing:

- **Fixed**: Manually define the button width (narrow to wide), size (XS to XL), or padding at each breakpoint.
- **Flexible**: Automatically increase or decrease the width of buttons and the button group. Button groups grow until all flexible buttons are at their largest width.

If adjusting button width manually, avoid stretching icon buttons beyond the wide setting.

![Two button groups, each with distinct width, size, and padding adjusted to fit two different window sizes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0djrht4-1.png?alt=media)

*Caption / Legend:*
Buttons can have width, size, and padding manually adjusted to fit different breakpoints

In compact windows, consider using smaller, narrower buttons so all buttons in the button group can fit. In large and extra large windows, consider using larger, wider buttons to better fill in the available space.

Flexible buttons or button groups will automatically adjust width.

When scaling to larger breakpoints, make sure that the visual hierarchy of each button is preserved using qualities like color and size. 

For example, the primary action should remain the largest, widest, or most visually prominent button at all breakpoints.

### Presentation

Buttons at the trailing edge of the button group can be customized to collapse into an overflow menu at smaller breakpoints, and become visible again at larger sizes. Place the overflow menu at the trailing end of the group.

Buttons outside the group aren’t affected by button group behavior.

## Behavior

### Pressed

When a button is pressed, it changes width and shape.

In a standard button group, pressing a button also affects the width of adjacent buttons.

In a connected button group, only the shape of the pressed button changes.

### Selected

A selected button should change shape from round to square, or square to round.

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Navigate to and interact with each button in the group
- Identify when buttons are selected

## Interaction & style

Each button in a group should have a minimum 48x48dp target. 

Extra small and small button groups have larger inner padding to ensure accessible targets. Avoid reducing the padding in these sizes.

![Extra small and small button groups with 48x48dp target areas annotated over top. The area is larger than the buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgm57d-tap%20targets.png?alt=media)

*Caption / Legend:*
1. Extra small button group
2. Small button group

### Initial focus

The button group container is not a focusable element. Initial focus should land on the first button in the group and then move to each button.

![Focus order lands on the first button, then the next buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dgsbc6-focus.png?alt=media)

*Caption / Legend:*
Initial focus should land on the first button, not on the container

Use **Tab** to navigate to a button group, the arrow keys to navigate between each item in the group, and **Space** or **Enter** to select a focused button.

![Button group with annotations for navigation with Tab and selecting with Space or Enter.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmu4dvwu6-03.png?alt=media)

*Caption / Legend:*
1. **Tab**: Initial focus lands on the first button
2. Arrow keys: Navigate between items
3. **Space** or **Enter**: Selects a focused item

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Navigate between buttons |
| Arrow keys | Navigate inside the component |
| **Space** or **Enter** | Activate a focused button |

## Labeling elements

The button group container doesn't need to be labeled. Label each button according to the button and icon button accessibility guidance.

![In a messaging products, an email icon is labelled “email” with the role “button”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm0dh20ef-label.png?alt=media)

*Caption / Legend:*
Label each button within the button group
