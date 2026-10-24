# Search

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/search](https://m3.material.io/components/search)
> Last Updated: 2026-07-27T04:04:05.736Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use search for navigating a product with queries
- A search bar can include a leading search icon, hinted search text, and optional trailing icons
- Search can display suggested keywords or phrases as a person types
- A search bar displays search suggestions or results in a list
- Use a search app bar to provide an emphasized, global entry-point

## Availability & resources

## M3 Expressive update

Search has a new visual style, motion, and more flexibility for trailing icons. [More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

**February 2025**

Naming

- Search bar and search view are now collectively named **search**

Configurations

- Styles: Search can be contained (recommended) or divided
- Gaps can separate results into groups

Motion

- The search bar grows wider when focused

Supported platforms:

- [Jetpack Compose](https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary#SearchBar(androidx.compose.material3.SearchBarState,kotlin.Function0,androidx.compose.ui.Modifier,androidx.compose.ui.graphics.Shape,androidx.compose.material3.SearchBarColors,androidx.compose.ui.unit.Dp,androidx.compose.ui.unit.Dp))

## Differences from M2 to M3 baseline

- Color: New color mappings and compatibility with dynamic color
- Elevation: Lower elevation and no shadow by default
- Name: Search was formerly known as open search bar
- Variants: Two official variants of search components: search bar and search view

![M2 open search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1gn7s-04.png?alt=media)

*Caption / Legend:*
M2 open search bars were square and elevated

![M3 search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlb1hcrs-05.png?alt=media)

*Caption / Legend:*
M3 search bars are rounded, use tonal surface, and support dynamic color

## Specs

## Variants

| Variant | M3 | M3 Expressive |
| --- | --- | --- |
| Search | Available | Available |

## Configurations

### Style

Search comes in two styles:

- Contained: Has an expressive look and feel. It uses a filled container to separate a search bar from a list of suggestions or results
- Divided (baseline): Doesn’t have the latest visual style, motion, or flexibility

![An email inbox search bar in a contained style.](https://lh3.googleusercontent.com/mZviJwGIZh_IpUNqJc4qSUDOLFrmDTpbjX_bufkF90qso_IE6fyfgB1e2VmG5N_E6Picjiw05l7vRqKShb46NyHV0Od2WHuqcVP4my2v5YBZ=s1004)

*Caption / Legend:*
The contained style has a persistent, filled container, expressive motion, and rounded shape

![An email inbox search bar in a divided style.](https://lh3.googleusercontent.com/sA1JTXVXpg8LWSsXFxuxTShN08cJnxWigVkMDRzrHVQT6XnlvmPuvbVrmmeMZ7ZgDpNyRgv6T-zOjMh798bEXeoj0QjURzBE5oSimBCuYgSq4w=s1004)

*Caption / Legend:*
The divided (baseline) style uses a divider to separate the search bar from suggestions and results

### Layout

Search suggestions and results appear in customizable lists, with two layout options: full-screen and docked. [More on search layouts](/m3/pages/search/guidelines#4f6c921c-795f-4e06-9b12-27ae7d502adb)

![Full-screen search results with a search bar in the contained style.](https://lh3.googleusercontent.com/UN8OMCnrmxaASc6CRHtAONOcdeZf71JD03xLHV9sDt8-A6pMWEWH2DxRbjhxM7M8_IE2H7_w8mtdqqE56eamgN0CzGxQ-qpBH7UXsaOKE0c9-g=s1004)

*Caption / Legend:*
Full-screen layout in the contained style

![Docked search results with a search bar in the contained style.](https://lh3.googleusercontent.com/SlF8qBuCFFB-x7eQOBSJ6O2BgEmepkVWMQvU1b0gtBUdISdyG2QJbz0MeS6HPrO49nL_AZQaOil5-Rw8_SpIGMGHqioZRMJVOnwocdxXQQiamg=s1004)

*Caption / Legend:*
Docked layout in the contained style

![Full-screen search results with a search bar in the divided style.](https://lh3.googleusercontent.com/xcvU3lGYJQELKKllc3w1uW68diJE9YJPeiCtbZM8tC9Gzg0qg5TBBzjEiFkl8hYOWcik2XUQfgqpeXvX6hXmHX_oA5_PSHLKNeRZJT3i2NU=s1004)

*Caption / Legend:*
Full-screen layout in the divided style

![Docked search results with a search bar in the divided style.](https://lh3.googleusercontent.com/4FjOzW97D9JP3Mvu2GyfQ-PQhbAvpQRPjPjsqj3iM_125CTJgfv8X_u-qeSu4ti3i7ytSIZf4Crkoz5drPm10WS22uGld5GwXbFUhPKPLb1n=s1004)

*Caption / Legend:*
Docked layout in the divided style

| Category | Configuration | M3 | M3 Expressive |
| --- | --- | --- | --- |
| Style | Contained | -- | Available |
|  | Divided | Available | Not recommended. Use contained. |
| Layout | Docked, full-screen | Available | Available |

## Tokens & specs

Use the table's menu to select a token set. The **search bar** set only contains tokens for the unfocused search bar. The **search view** set contains all other tokens when interacting with search, including all styles and layouts. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Search - View

*For baseline search view and expressive search when activated.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.search-view.contained.background.color` | `md.sys.color.surface-container-low` | COLOR | Search view contained background color |
| `md.comp.search-view.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Search view container background elevation |
| `md.comp.search-view.header.input-text.color` | `md.sys.color.on-surface` | COLOR | Search view header input text color |
| `md.comp.search-view.header.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search view header supporting text color |
| `md.comp.search-view.header.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Search view header leading icon color |
| `md.comp.search-view.contained.docked.results.shape` | `md.sys.shape.corner.medium` | SHAPE | Search view contained docked results shape |
| `md.comp.search-view.contained.icon-label.gap` | `md.sys.measurement.space50` | LENGTH | Search view contained icon label gap |
| `md.comp.search-view.contained.full-screen.bar.container.height` | 56dp | LENGTH | Search view contained full screen bar container height |
| `md.comp.search-view.contained.docked.bar.shape` | `md.sys.shape.corner.full` | SHAPE | Search view contained docked bar shape |
| `md.comp.search-view.contained.docked.bar-results.gap` | `md.sys.measurement.space25` | LENGTH | Search view contained docked bar results gap |
| `md.comp.search-view.contained.trailing-margin` | `md.sys.measurement.space150` | LENGTH | Search view contained trailing margin |
| `md.comp.search-view.contained.leading-margin` | `md.sys.measurement.space150` | LENGTH | Search view contained leading margin |
| `md.comp.search-view.header.input-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search view header input text size |
| `md.comp.search-view.header.input-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search view header input text weight |
| `md.comp.search-view.header.input-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search view header input text tracking |
| `md.comp.search-view.header.input-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search view header input text line height |
| `md.comp.search-view.header.input-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search view header input text font |
| `md.comp.search-view.header.input-text.type` | - | TYPOGRAPHY | Search view header input text type |
| `md.comp.search-view.header.supporting-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search view header supporting text weight |
| `md.comp.search-view.header.supporting-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search view header supporting text tracking |
| `md.comp.search-view.header.supporting-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search view header supporting text size |
| `md.comp.search-view.header.supporting-text.type` | - | TYPOGRAPHY | Search view header supporting text type |
| `md.comp.search-view.header.supporting-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search view header supporting text font |
| `md.comp.search-view.header.supporting-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search view header supporting text line height |
| `md.comp.search-view.full-screen.container.shape` | `md.sys.shape.corner.none` | SHAPE | Search view full screen container shape |
| `md.comp.search-view.trailing-icon.label-trailing-icon-space` | `md.sys.measurement.space200` | LENGTH | Search view trailing icon label trailing icon space |
| `md.comp.search-view.leading-icon.leading-icon-label-space` | `md.sys.measurement.space200` | LENGTH | Search view leading icon leading icon label space |
| `md.comp.search-view.trailing-space` | `md.sys.measurement.space200` | LENGTH | Search view trailing space |
| `md.comp.search-view.leading-space` | `md.sys.measurement.space200` | LENGTH | Search view leading space |
| `md.comp.search-view.docked.header.container.height` | 56dp | LENGTH | Search view docked header container height |
| `md.comp.search-view.full-screen.header.container.height` | 72dp | LENGTH | Search view full screen header container height |
| `md.comp.search-view.docked.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Search view docked container shape |
| `md.comp.search-view.divider.color` | `md.sys.color.outline` | COLOR | Search view divider color |
| `md.comp.search-view.header.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Search view header trailing icon color |
| `md.comp.search-view.container.color` | `md.sys.color.surface-container-high` | COLOR | Search view container color |
| `md.comp.search-view.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Search view container surface tint layer color |

#### Design Tokens: Search - Bar

*For baseline search bar and expressive search.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.search-bar.supporting-text.type` | - | TYPOGRAPHY | Search bar supporting text type |
| `md.comp.search-bar.supporting-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search bar supporting text font |
| `md.comp.search-bar.supporting-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search bar supporting text weight |
| `md.comp.search-bar.supporting-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search bar supporting text size |
| `md.comp.search-bar.supporting-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search bar supporting text line height |
| `md.comp.search-bar.supporting-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search bar supporting text tracking |
| `md.comp.search-bar.contained.motion.spring` | `md.sys.motion.spring.fast.spatial` | CUSTOM_COMPOSITE | Search bar contained motion |
| `md.comp.search-bar.contained.trailing-actions.trailing-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained trailing actions trailing space |
| `md.comp.search-bar.contained.trailing-actions.leading-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained trailing actions leading space |
| `md.comp.search-bar.contained.trailing-actions.gap` | `md.sys.measurement.space0` | LENGTH | Search bar contained trailing actions gap |
| `md.comp.search-bar.contained.avatar.target-size` | 48dp | LENGTH | Search bar contained avatar target size |
| `md.comp.search-bar.contained.no-actions.trailing-space` | `md.sys.measurement.space200` | LENGTH | Search bar contained no actions trailing space |
| `md.comp.search-bar.contained.icon-label.gap` | `md.sys.measurement.space50` | LENGTH | Search bar contained icon label gap |
| `md.comp.search-bar.contained.no-actions.leading-space` | `md.sys.measurement.space200` | LENGTH | Search bar contained no actions leading space |
| `md.comp.search-bar.contained.trailing-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained trailing space |
| `md.comp.search-bar.contained.leading-space` | `md.sys.measurement.space50` | LENGTH | Search bar contained leading space |
| `md.comp.search-bar.contained.trailing-margin` | `md.sys.measurement.space300` | LENGTH | Search bar contained pane trailing margin |
| `md.comp.search-bar.contained.leading-margin` | `md.sys.measurement.space300` | LENGTH | Search bar contained pane leading margin |
| `md.comp.search-bar.trailing-icon.label-trailing-icon-space` | `md.sys.measurement.space200` | LENGTH | Search bar trailing icon label trailing icon space |
| `md.comp.search-bar.leading-icon.leading-icon-label-space` | `md.sys.measurement.space200` | LENGTH | Search bar leading icon leading icon label space |
| `md.comp.search-bar.trailing-space` | `md.sys.measurement.space200` | LENGTH | Search bar trailing space |
| `md.comp.search-bar.leading-space` | `md.sys.measurement.space200` | LENGTH | Search bar leading space |
| `md.comp.search-bar.input-text.type` | - | TYPOGRAPHY | Search bar input text type |
| `md.comp.search-bar.input-text.font` | `md.sys.typescale.body-large.font` | FONT_NAMES | Search bar input text font |
| `md.comp.search-bar.input-text.weight` | `md.sys.typescale.body-large.weight` | FONT_WEIGHT | Search bar input text weight |
| `md.comp.search-bar.input-text.size` | `md.sys.typescale.body-large.size` | FONT_SIZE | Search bar input text size |
| `md.comp.search-bar.input-text.line-height` | `md.sys.typescale.body-large.line-height` | LINE_HEIGHT | Search bar input text line height |
| `md.comp.search-bar.input-text.tracking` | `md.sys.typescale.body-large.tracking` | FONT_TRACKING | Search bar input text tracking |
| `md.comp.search-bar.icon.size` | 24dp | LENGTH | Search bar icon size |
| `md.comp.search-bar.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Search bar container surface tint layer color |
| `md.comp.search-bar.avatar.size` | 30dp | LENGTH | Search bar avatar size |
| `md.comp.search-bar.avatar.shape` | `md.sys.shape.corner.full` | SHAPE | Search bar avatar shape |
| `md.comp.search-bar.container.shape` | `md.sys.shape.corner.full` | SHAPE | Search bar container shape |
| `md.comp.search-bar.container.height` | 56dp | LENGTH | Search bar container height |
| `md.comp.search-bar.input-text.color` | `md.sys.color.on-surface` | COLOR | Search bar input text color |
| `md.comp.search-bar.trailing-icon.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar trailing icon color |
| `md.comp.search-bar.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Search bar container elevation |
| `md.comp.search-bar.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar supporting text color |
| `md.comp.search-bar.leading-icon.color` | `md.sys.color.on-surface` | COLOR | Search bar leading icon color |
| `md.comp.search-bar.container.color` | `md.sys.color.surface-container-high` | COLOR | Search bar container color |
| `md.comp.search-bar.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Search bar focus indicator thickness |
| `md.comp.search-bar.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Search bar focus indicator offset |
| `md.comp.search-bar.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Search bar focus indicator color |
| `md.comp.search-bar.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Search bar pressed state layer opacity |
| `md.comp.search-bar.pressed.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar pressed supporting text color |
| `md.comp.search-bar.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Search bar pressed state layer color |
| `md.comp.search-bar.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Search bar hover state layer opacity |
| `md.comp.search-bar.hover.supporting-text.color` | `md.sys.color.on-surface-variant` | COLOR | Search bar hover supporting text color |
| `md.comp.search-bar.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Search bar hover state layer color |


## Anatomy

Search includes a search bar and a container for suggestions and results. The container is empty by default. Use the list component to add content. In the divided (baseline) style, a divider separates the search bar and results.

![6 elements of search.](https://lh3.googleusercontent.com/nfgJlo7RsO4mElkJBSEo5E2yo1OPaLlu6o9PxA4lLhre5XuuiXAOj1LsjVPDk01MysoC5dasvtMXqSDJHFc1w6tycmubcpzPTA9uqm9hi-_z=s2048)

*Caption / Legend:*
1. Search bar container
2. Leading icon
3. Supporting text
4. Trailing icon and avatar (optional)
5. Input text
6. Container for search suggestions or results

### Examples

1. With avatar
2. With one trailing icon button
3. With two trailing icon buttons
4. With trailing icon button and avatar

![4 search bars with different trailing elements.](https://lh3.googleusercontent.com/4DOSj_PCy0dVTh_Mwwa-JmNfmmABObXarzG6mlKcjL7V1kdeh9_yrI9kQM5t1UhpsVOtc4bIq7mUwNYh2F50RDyInwgspspdrk-OHnd3lg=s1352)

## Color

Color values are implemented through design tokens. For designers, this means working with color values that correspond with tokens. In implementation, a color value will be a token that references a value.

### Full-screen layout

![6 full-screen search color roles in light and dark themes.](https://lh3.googleusercontent.com/GAGCWflTpnmoM0DwwKy1v0DdcEY5uW2zCwZpY8CaR61iuDKk3E7JY7yVPwx3ukkfq4B7qyOQOLInW7c7dRgKHXbbovgH_1bU5kc7pTZHwihLkg=s2048)

*Caption / Legend:*
Full-screen search color roles used in light and dark themes:

1. Surface container low
2. On surface variant
3. On surface variant
4. Surface container high
5. On surface variant
6. On surface

### Docked layout

![6 docked search color roles in light and dark themes.](https://lh3.googleusercontent.com/nq53ckQlKsYuKPXvcEYzyrhQ7Fevp-zkK7TzePU0X7GjTIveyJLPIHzZrZ3ejyWOGKASNBS7Ir8_si6O61ubAWXRj8r_zYZNHNNpFK5JLTpGWQ=s2048)

*Caption / Legend:*
Docked search color roles used in light and dark themes:

1. Surface container high
2. On surface variant
3. On surface variant
4. Surface container high
5. On surface variant
6. On surface

## States

States are visual representations used to communicate the status of a component or an interactive element. In [focused search](/m3/pages/search/guidelines#a9b2df31-8561-4326-82cd-41ed6532b765), individual elements maintain their own interaction states. [Learn more about interaction states](/m3/pages/interaction-states/overview)

### Search bar

![4 search bar states in light and dark mode.](https://lh3.googleusercontent.com/YhREfAtX7rK4eHN7NEAdJA3S1VPgesRkPzepAVAMJWT7aA0MSV9dxw8A248GG0PwSTS8FjyLqzorX8U4wiSSaFgvjC3mwqVRAW48XjyvexXNnA=s2050)

*Caption / Legend:*
1. Enabled
2. Hovered
3. Focused
4. Pressed (ripple)

### Search suggestions & results

Search includes a container for suggestions and results. The container is empty by default. Use the list component to add content.

![4 search result states in light and dark mode.](https://lh3.googleusercontent.com/r1ddmkgjt_KkZZC-S8XGOaYfxyTvkqH_xLNf6MgWq89lOToWeBm5mEo8Kz2QhMxh3H_FOF_EjatnziEymAHu_ieaLrNcWfVEHkaM3AtgfOvZGQ=s2050)

*Caption / Legend:*
1. Enabled
2. Hovered
3. Focused
4. Pressed (ripple)

## Measurements

### Search bar

![Search bar with leading and trailing icon size and padding measurements.](https://lh3.googleusercontent.com/mGptx_4JUwLVcbHz93O72eFnZN6uaFTxfpTyUe7VfjOxvJQn0kew6pVVDeiAeV4S5rWjZ0xQR-RsZMNC_1ZPJIYVvSeqIh18hIMxI9NpJQ4=s1004)

*Caption / Legend:*
Unfocused search bar with leading and trailing icon measurements

![Search bar with trailing avatar size and padding measurements.](https://lh3.googleusercontent.com/dURHAt9JC2YGWnXNGRK34cv-wK4xrn9GhPUNnWdQ3ZcgzjMRuwGi5KNwpFaWn19j7Nls-mp9PTDF79hTW8gbm_201W-ZYWlQ1nrpTHCtT6kG=s1004)

*Caption / Legend:*
Unfocused search bar with avatar measurements

In M3 Expressive, the search bar expands when focused. The margins change from 24dp to 12dp.

![Unfocused search bar margins of 24dp.](https://lh3.googleusercontent.com/OfNDMCVyfuBJXmI9HLNp26jlV-aQMKAawCfhfzbzlt-wYn0lR4BxkbXOVbiEP6I2tgz0HFbjC2SY5qvbZ3flpPLc4Ad6I8VdNoZbdvc2rZQ=s1004)

*Caption / Legend:*
Unfocused search bar margin measurements

![Focused search bar margins of 12dp.](https://lh3.googleusercontent.com/R4k1-IGNQH3zamzgc2laHGU70E3SDajTXtksf4eWJIQO7gmrwoj9PCGHzqhrOju-IKtpdeoOCRi7WqJ5_xLvnUgtneP1ve8Wdj-lFQ5O74An=s1004)

*Caption / Legend:*
Focused search bar margin measurements

| Element | Attribute | Value |
| --- | --- | --- |
| Container | Width | Min: 360dp, max: 720dp |
| Height | 56dp |  |
| Label alignment | Start-aligned |  |
| Leading padding | Unfocused: 24dp, focused: 12dp |  |
| Trailing padding | Unfocused: 24dp, focused: 12dp |  |
| Leading icon and label padding (from tap target) | 4dp |  |
| Label and trailing icon padding (from tap target) | 4dp |  |
| Avatar | Size | 30dp |

### Focused search

#### Contained style

![Full-screen layout size and padding measurements in contained style.](https://lh3.googleusercontent.com/b0xykJB3s1NEcZz6gQP37YfP-r6S3fbfqNKJaY-XbWy2AyoWViOPlmHhW6Lq6b4IbhmcDYAQJHonH59HvnDeIUdeXeMjIUdoWKNxbjQpN6xk=s1004)

*Caption / Legend:*
Full-screen search padding and size measurements for contained style

![Docked layout size and padding measurements in contained style.](https://lh3.googleusercontent.com/5Hst6KPsjyxhxQTptCBbkRahderHldeKa_33ucNVW9xZ9svHkx9eBhbhDKYR656D5DkvhdfdMIPhs5L9gWqq2yfEjn_AQvTQQg5Q2Y5WHhJ1=s1004)

*Caption / Legend:*
Docked search padding and size measurements for contained style

| Element | Attribute | Value |
| --- | --- | --- |
| Full-screen container | Width | Full width |
| Height | Full height |  |
| Docked container | Width | Min: 360dp, max: 720dp |
| Height | Min: 240dp, max: 2/3 of screen height |  |
| Search bar container | Height | 56dp |
| Label alignment | Start-aligned |  |
| Leading padding | 16dp |  |
| Trailing padding | 16dp |  |
| Leading icon and label padding (from tap target) | 4dp |  |
| Leading icon and label padding (from tap target) | 4dp |  |

#### Divided style

![Full-screen layout size and padding measurements in divided style.](https://lh3.googleusercontent.com/RhpQaBUaokljf6Qv0Pb6sUHofotzoGbLGs7O74snG2B9yjauRk1iv6JFhmSRsHNdUu3nacOIuEmi0RoGtRGrjv8cs9IT5uFzr30IZDU7kge9vw=s1004)

*Caption / Legend:*
Full-screen search padding and size measurements for divided style

![Docked layout size and padding measurements in divided style.](https://lh3.googleusercontent.com/52yDW7vsdT_ythER_zFPD7eAyH2K5BvU_V9fB4COC5khSNA81CffErRCuS1kxNZkIfPYCWceEYxrnu07HijSkwnq5sIb-oMGHk_PUOu88t4=s1004)

*Caption / Legend:*
Docked search padding and size measurements for divided style

## Guidelines

## Usage

Search helps people find information quickly.

Use search for products with many items to manage, such as files or messages.

![Mobile UI shows a search bar at the top of a message inbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkhcoi-02.png?alt=media)

*Caption / Legend:*
Search helps people find information in large inboxes like messages or emails

### Different ways to search

The search entry point is dependent on a product’s needs, and should be easy to find:

- Search bar: Use to search contents in a specific view, like **Search your messages**
- Search app bar: Use this app bar variant when search is the primary, global function
- Search icon button: Use when search is a secondary action or not the main focus

![A mobile app with a search bar below the page title.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkodgz-03.png?alt=media)

*Caption / Legend:*
Add a **search bar** below a title to search specific content

![A mobile app with a search app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkpcee-04.png?alt=media)

*Caption / Legend:*
For global search, use a persistent **search app bar**, integrated into an app bar

![A mobile app with a magnifying glass icon on the leading side of the app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkq5y2-05.png?alt=media)

*Caption / Legend:*
Use a **search** **icon button** when search is a secondary action

### Focused search

When a search entry point is selected, it opens focused search.

- Search suggestions can appear before text is entered
- Search results can show as someone is typing or after a search is executed
- Individual elements maintain their own interaction states when search is focused

[More on search states](/m3/pages/search/specs#65c58b10-4569-43d6-9c11-64a5b02f3099)

![Focused search with a list of suggestions on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkz1fo-06.png?alt=media)

*Caption / Legend:*
When focused, a search bar expands to show search suggestions or results in a list

If search is the primary action, focused search can be a standalone destination reached from a navigation bar.

![Focused search on a mobile screen with a list of suggested contacts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfkth1m-07.png?alt=media)

*Caption / Legend:*
Focused search can be a standalone destination, reached by selecting an item in a navigation bar

### Search suggestions & results

Search suggestions and results both appear in a list component by default.

To help people find information quickly, consider adding variety and context, such as:

- Leading icons related to suggestions
- Category labels, like **Recent**, **Contacts**, or **Suggestions**
- Avatars or other high-priority items
- Filter chips to narrow down results

![Search with suggestions organized in a column, ending with a row of 5 contact avatars with names.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlflqra9-09.png?alt=media)

*Caption / Legend:*
Include high-priority items like avatars in search suggestions or results

### Gaps

Use gaps to separate a list of suggestions or results into groups.

[More on using gaps in lists](/m3/pages/lists/guidelines#9e96fd72-5bf3-49df-9baf-e025dcca344d)

![A gap separates the location and calendar list items from people and pets avatars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfm1yld-10.png?alt=media)

*Caption / Legend:*
To separate list items into distinct groups, use a gap

## Placement

A search bar is typically placed at the top of a screen to remain prominent and accessible. Its location depends on whether search is the primary focus of a product or a secondary action.

![Mobile UI with a search bar directly below a Settings headline.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmbc2s-21.png?alt=media)

*Caption / Legend:*
A search bar can be the primary focus of a page

![Mobile UI with a search bar centered at the top of the screen, above a row of Favorites avatars.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmc255-22.png?alt=media)

*Caption / Legend:*
Search bars should usually be placed at the top of the content

![A photos app with a search icon.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmcmiv-23.png?alt=media)

*Caption / Legend:*
Search can be a secondary action

### Focused search layouts

When focused, search suggestions and results appear in a list below the search bar.  

There are two layout options:

- **Docked** opens a list below the search bar, with a scrim covering main content
- **Full-screen** expands to fill the screen

[More on adaptive design](/m3/pages/search/guidelines#eb45ccc4-d1b5-4ea1-bee5-ea1c3d1c5436)

![Tablet UI shows a list of search results docked below the search bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmf49n-08.png?alt=media)

*Caption / Legend:*
Docked layout on a tablet

![Mobile UI shows a list of search results filling the screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmg7bg-07.png?alt=media)

*Caption / Legend:*
Full-screen layout on mobile

## Anatomy

![6 elements of search.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgr3p93-11.png?alt=media)

*Caption / Legend:*
1. Search bar container
2. Leading icon
3. Supporting text
4. Avatar or trailing icon (optional)
5. Input text
6. Container for search suggestions or results

### Search bar container

In the contained style, the search bar container remains the same shape in both the unfocused and focused states. Avoid changing the container behavior. 

The container’s margins should be:

- Unfocused: 24dp
- Focused: 12dp

In the divided (baseline) style, a divider separates the search bar and results.

![Side-by-side comparison of a search container in unfocused and focused states.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmu14l-13.png?alt=media)

*Caption / Legend:*
Search bar containers have persistent, rounded corners

#### Container color

Search bars use the **surface container high** color role. This role applies when the screen background is white or a tonal **surface** color, ensuring the container has clear contrast.

![2 mobile UIs show search bars on white and tonal backgrounds.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfmvyj4-14.png?alt=media)

*Caption / Legend:*
Search bars use **surface container high** to provide clear contrast

Avoid using a **surface container high** color on a **surface container** background. This can cause the search bar to blend in, making it difficult for people to find.

To ensure proper contrast, use surface container roles that are more than one step apart.

![A “surface container high” search bar on a “surface container” background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfn371r-15.png?alt=media)

*Caption / Legend:*
Using a **surface container high** color on a **surface container** background reduces contrast and may affect accessibility

### Icons & icon buttons

#### Leading icons

The leading side of a search bar should include either:

- A navigational icon button, such as a menu or arrow
- A non-functional search icon

![A search bar on a tablet screen contains a non-functional search icon and a trailing avatar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfn8hr6-16.png?alt=media)

*Caption / Legend:*
A search bar can contain a non-functional search icon

#### Trailing icons

A search bar should have one or two trailing icons or icon buttons.

Trailing actions can include:

- Additional modes of searching like voice search
- A separate high-level action such as current location or profile
- An overflow menu
- A decorative search icon

![A search bar with 2 trailing icon buttons: a microphone and an overflow menu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfnb1td-17.png?alt=media)

*Caption / Legend:*
Use a maximum of two trailing icons

![A search bar with a trailing microphone icon and avatar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfncrm8-18.png?alt=media)

*Caption / Legend:*
Combine an avatar with up to one other trailing icon button

![Focused search with a trailing x icon to clear input text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfndiyw-19-VQA.png?alt=media)

*Caption / Legend:*
Focused search can show an optional **clear** icon to remove input text

### Text

#### Hinted search text

Provide a short description of the information people can search, like **Search replies** or **Search your messages**.

#### Input text

When a person starts typing, the hinted text is replaced with the input text.

## Adaptive design

The search bar position and alignment should scale with the layout, and stay close to the searchable content.

In most cases, a search bar should:

- Stay in its pane and scale in width accordingly
- Internal elements anchor to the left and right as the parent container scales

[More on applying layout](/m3/pages/layout-overview/)

### Focused search

When focused, search can switch between showing suggestions or results in a:

- **Docked layout**: Best for medium and expanded windows
- **Full-screen layout**: Default for compact breakpoints

[More on search layouts](/m3/pages/search/specs#fc12e839-f356-4f48-9bd5-0ed210565bfe)

![Search suggestions in docked and full screen layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlfnv4wh-25.png?alt=media)

*Caption / Legend:*
1. A docked layout on a large screen
2. A full-screen layout, the default for compact screens

Search suggestions or results should swap from full-screen in compact windows to docked in larger breakpoints.

## Behavior

### Focused search

When a search bar is selected, search becomes focused and can:

- Show historical suggestions before typing
- Show suggestions or results as someone is typing
- Wait to show suggestions or results until a search is queried

The **back** icon releases focus, dismisses any suggestions or results, and returns the search bar to its original state.

### Scroll

Depending on needs, a search bar can:

- Scroll away with content, then reappear when a person begins scrolling up
- Remain fixed at the top of the screen

### Search results

To execute a search, a person can:

- Type a query and press **Enter**
- Select a suggestion or result without querying a search

Search results appear in a list below the bar, and scroll beneath the bar.   

For accessibility, focused search needs a clear status indicator that it’s searching content, like a search icon or **Results** label. [More on search accessibility](/m3/pages/search/accessibility/)

![“Peanut” is the entered search query and the first suggestion in the list.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrceqs-32.png?alt=media)

*Caption / Legend:*
Show search results in a compact, organized list, with an indicator like **Quick results**

When search results are queried, the input text should remain visible, but not in focus.

### Predictive back

On Android, [predictive back](https://github.com/material-components/material-components-android/blob/master/docs/foundations/PredictiveBack.md) allows a person to swipe left or right on search.

- Search detaches from the screen edge to signal the full-screen layout will minimize
- The previous screen is revealed in a preview

[More predictive back design guidance](https://developer.android.com/guide/navigation/custom-back/predictive-back-gesture)

## Accessibility

## Use cases

People should be able to use assistive technology to:

- Navigate to and focus on a search bar
- View the hinted search text or persistent label
- Input text and complete a search
- Interact with a list of search suggestions and results
- Clear the input text

## Interaction & style

### Autosuggest

When search suggestions and results appear, the screen reader must announce the change. This lets people know list items are available for selection.

![Hinted search text and autocomplete results on a mobile screen.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrjdxa-01.png?alt=media)

*Caption / Legend:*
Autocomplete results should be announced by the screen reader

## Initial focus

Initial focus lands on the first interactive element. This is often a leading icon button or text field. A leading icon button usually activates search directly or opens a navigation component.

![Search bar with a focused leading icon. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrkpb6-02.png?alt=media)

*Caption / Legend:*
Initial focus can land on a leading icon

![Search bar with no leading icon. The text field is focused.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrl9ca-03.png?alt=media)

*Caption / Legend:*
If there’s no leading icon, focus lands on the text field

## Keyboard navigation

| **Keys** | **Actions** |
| --- | --- |
| **Tab** or **Shift** + **Tab** | Navigate between interactive elements |
| **Space** or **Enter** | Activate the search text field for input |
| **Arrows** | Navigate between search result items |

## Labeling elements

The hinted search text should be used as the accessibility label describing the search bar.  

The role for the input field should be:

- Android: **Text field**
- iOS: **Search field**

![Search bar with “Label: Search messages” and “Role: Text field”.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrql4p-04.png?alt=media)

*Caption / Legend:*
The accessibility label should match the hinted search text

Leading and trailing icon buttons should be labeled according to their [accessibility guidance](/m3/pages/icon-buttons/accessibility).

![A search bar with accessibility labels for its leading icon button and trailing avatar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrt6xt-05.png?alt=media)

*Caption / Legend:*
Use icon labels for icon buttons

Search suggestions and results use the list component. Screen readers automatically announce the results as a list.

For accessibility labels, follow the [list accessibility guidelines](/m3/pages/lists/accessibility).

![A search bar on mobile, showing search results in a list.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmlgrwf25-06.png?alt=media)

*Caption / Legend:*
Search suggestions and results are created using lists
