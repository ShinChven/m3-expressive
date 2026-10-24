# Material Design 3 & Material 3 Expressive Guidelines

This directory contains the official design specifications and guidelines downloaded directly from [m3.material.io](https://m3.material.io/).

Synchronized with Carbon version: `2026-10-13_06-10-19`.

## Re-syncing

Run the sync script to pull the latest updates from Google:

```bash
npm run sync:guidelines
```

## Material 3 Expressive (Latest Evolution)

- [**Material Design 3 Expressive Architecture & Implementation Audit**](./m3-expressive/overview-and-roadmap.md) — Complete overview of M3 Expressive pillars, component specifications, token mapping, and repo audit
- [**What’s new at Google I/O 2026**](./m3-expressive/whats-new-at-io26.md) — Material’s latest updates make it easier to create expressive, adaptive products 
- [**Material Android is Compose-first**](./m3-expressive/material-is-compose-first.md) — Start migrating to Compose to get the latest from Material
- [**Adding Motion Physics with Jetpack Compose**](./m3-expressive/m3-expressive-motion-theming.md) — Supercharge your Android transitions and animations with the new M3 Expressive motion theming system.
- [**Start building with Material 3 Expressive**](./m3-expressive/building-with-m3-expressive.md) — Material’s latest evolution helps you make products even more engaging and easier to use

## Components (Specs, Guidelines & Expressive Updates)

- [**Components**](./components/index.md) — Components are interactive building blocks for creating a user interface. They can be organized into categories based on their purpose: Action, containment, communication, navigation, selection, and text input.
- [**All buttons**](./components/all-buttons.md) — When choosing the right button for an action, consider the level of emphasis each button type provides
- [**Buttons**](./components/buttons.md)
- [**Button groups**](./components/button-groups.md)
- [**FABs**](./components/floating-action-button.md)
- [**Extended FABs**](./components/extended-fab.md)
- [**FAB menu**](./components/fab-menu.md)
- [**Icon buttons**](./components/icon-buttons.md)
- [**Segmented buttons**](./components/segmented-buttons.md)
- [**Split buttons**](./components/split-button.md)
- [**Toolbars**](./components/toolbars.md)
- [**Bottom sheets**](./components/bottom-sheets.md)
- [**Cards**](./components/cards.md)
- [**Carousel**](./components/carousel.md)
- [**Chips**](./components/chips.md)
- [**Dialogs**](./components/dialogs.md)
- [**Divider**](./components/divider.md)
- [**Menus**](./components/menus.md)
- [**Navigation bar**](./components/navigation-bar.md)
- [**Navigation drawer**](./components/navigation-drawer.md)
- [**Navigation rail**](./components/navigation-rail.md)
- [**Loading indicator**](./components/loading-indicator.md)
- [**Progress indicators**](./components/progress-indicators.md)
- [**Radio button**](./components/radio-button.md)
- [**Search**](./components/search.md)
- [**Side sheets**](./components/side-sheets.md)
- [**Sliders**](./components/sliders.md)
- [**Switch**](./components/switch.md)
- [**Text fields**](./components/text-fields.md)
- [**Tooltips**](./components/tooltips.md)
- [**App bars**](./components/app-bars.md)
- [**Lists**](./components/lists.md)
- [**Badges**](./components/badges.md)
- [**Tabs**](./components/tabs.md)
- [**Checkbox**](./components/checkbox.md)
- [**Date pickers**](./components/date-pickers.md)
- [**Time pickers**](./components/time-pickers.md)
- [**Snackbar**](./components/snackbar.md)

## Styles (Color, Motion, Shape, Typography, Elevation)

- [**Styles**](./styles/index.md) — Styles are the visual aspects of a UI that give it a distinct look and feel. They can be customized by changing your Material theme.
- [**Color system**](./styles/color-system.md) — Create accessible, personal color schemes communicating your product's hierarchy, state, and brand
- [**Color roles**](./styles/color-roles.md) — There are 26 standard color roles organized into six groups: primary, secondary, tertiary, error, surface, and outline
- [**Choosing a scheme**](./styles/color-choosing-a-scheme.md) — Static color schemes emphasize brand and uniformity, while dynamic schemes emphasize content or user settings to make products feel more personal
- [**Static**](./styles/color-static.md) — Static color schemes are ideal for branded products that should have a consistent, uniform design
- [**Dynamic**](./styles/color-dynamic.md) — Dynamic color can change a color palette to match user settings, like wallpapers, or in-product content
- [**Advanced customizations**](./styles/color-advanced.md) — Apply, define, or adjust colors to create a fine-tuned, unique color experience
- [**Color resources**](./styles/color-resources.md) — Use color tools and tutorials to quickly create and apply color palettes
- [**Icons**](./styles/icons.md) — Icons are small symbols to easily identify actions and categories
- [**Shape**](./styles/shape.md) — The M3 shape system includes original shapes, a corner radius scale, and built-in shape morphing
- [**Spacing**](./styles/spacing.md) — Spacing is the distance around and between component and layout elements
- [**Typography**](./styles/typography.md) — Use typography to make content readable and beautiful
- [**Elevation**](./styles/elevation.md) — Elevation is the distance between two surfaces on the z-axis
- [**Motion physics system**](./styles/motion-overview.md) — The motion physics system makes a UI expressive and easy to use
- [**Easing and duration**](./styles/motion-easing-and-duration.md) — Easing and duration create responsive and expressive motion
- [**Transitions**](./styles/motion-transitions.md) — Transitions help guide people as they navigate an app

## Foundations (Tokens, Layout, Usability, Accessibility)

- [**Foundations**](./foundations/index.md) — Foundations inform the basis of any great user interface, from accessibility standards to essential patterns for layout and interaction.
- [**Overview**](./foundations/overview.md) — Accessible design enables users with diverse abilities to navigate, understand, and enjoy a UI
- [**Designing**](./foundations/designing.md) — Implement intuitive, accessible layouts, considering structure, color, and flow
- [**Writing and text**](./foundations/writing.md) — Ensure text is helpful, clear, and resilient to change
- [**Overview**](./foundations/content-design-overview.md) — UX writing and information design make UIs easy to use
- [**Alt text**](./foundations/content-design-alt-text.md) — Effective alt text describes the meaning and context of images for screen reader users
- [**Global writing**](./foundations/content-design-global-writing.md) — Global writing is easier to read, understand, and translate. This guidance is for all American English that is localized.
- [**Notifications**](./foundations/content-design-notifications.md) — Notifications help people see information they need or want at the right time
- [**Style guide**](./foundations/content-design-style-guide.md) — UI text should be understandable by anyone, anywhere
- [**Material A-Z**](./foundations/glossary.md) — Get to know the key terms and concepts behind Material, from A to Z
- [**Building for all**](./foundations/building-for-all.md) — Building for everyone with everyone
- [**Customizing Material**](./foundations/customization.md) — Customization creates unique branded products with familiar patterns and accessible interactions
- [**Design tokens**](./foundations/design-tokens.md) — Design tokens are the building blocks of all UI elements. The same tokens are used in designs, tools, and code.
- [**Watches**](./foundations/watches.md) — Watches have special design considerations and interaction patterns
- [**Design**](./foundations/xr-design.md) — Resources and guidance for immersive extended reality (XR) devices
- [**XR components**](./foundations/xr-components.md) — Learn how Material 3 Expressive components adapt to extended reality devices 
- [**Overview**](./foundations/layout-layout-overview.md) — Layout is the visual and strategic arrangement of elements on a screen
- [**Breakpoints**](./foundations/layout-breakpoints.md) — Breakpoints ensure layouts work across a wide range of devices
- [**Canonical examples**](./foundations/layout-canonical-examples.md) — Canonical layout examples are designs for common screen layouts across all breakpoints
- [**Scaffold**](./foundations/layout-scaffold.md) — A fundamental UI design structure that provides a standard platform for assembling key components
- [**Grids &amp; spacing**](./foundations/layout-grids-spacing.md) — Grids and spacing organize content and actions for any layout
- [**Bidirectionality &amp; RTL**](./foundations/layout-bidirectionality-rtl.md) — Design products that adapt to languages that read right-to-left (RTL)
- [**Gestures**](./foundations/interaction-gestures.md) — Gestures are all the ways people interact with UI elements using touch
- [**Inputs**](./foundations/interaction-inputs.md) — Inputs are devices that provide interactive control of an app. Common inputs include a mouse, keyboard, or touchpad.
- [**Selection**](./foundations/interaction-selection.md) — Selection is how people interact with UI elements or choose which items to act on
- [**States**](./foundations/interaction-states.md) — States show the interaction status of a component or UI element
- [**Usability**](./foundations/usability.md) — Usability focuses on making products intuitive and easy to understand for everyone

## Development & Platforms

- [**Develop**](./develop/index.md) — Implement Material Design with code and developer documentation for Jetpack Compose, Android Views, Flutter, and the web
- [**Android Views (MDC-Android)**](./develop/android-mdc-android.md) — Modular and customizable code for building Android products. 
- [**Jetpack Compose**](./develop/android-jetpack-compose.md) — Android's modern toolkit for building native UI using Material 3
- [**Flutter**](./develop/flutter.md) — A framework for building beautiful, natively compiled applications from a single codebase. Support is available for Material Design 3.
- [**Web**](./develop/web.md) — Material Web is Google’s component library for building applications that work in any web framework.

## Design Tokens Database (DSDB)

- [**Design Tokens Directory**](./tokens/README.md) — Raw component design token definitions, values, and mappings downloaded from Google DSDB.
