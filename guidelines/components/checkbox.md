# Checkbox

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/checkbox](https://m3.material.io/components/checkbox)
> Last Updated: 2026-08-12T09:53:04.800Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use checkboxes (instead of switches or radio buttons) if multiple options can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

![3 checkboxes in a diagram demonstrating all three states.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyjgb31-01.png?alt=media)

*Caption / Legend:*
Unselected, selected (hover), and indeterminate checkboxes

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- States: New indeterminate states as well as error states for unselected, selected, and indeterminate

![Color mapping of a checkbox in M2. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmab66psf-2.png?alt=media)

*Caption / Legend:*
M2

![Color mapping of a checkbox in M3 with new color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmab66tlq-3.png?alt=media)

*Caption / Legend:*
M3

## Specs

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

#### Design Tokens: Checkbox

*For checkboxes.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.checkbox.unselected.error.focus.outline.color` | `md.sys.color.error` | COLOR | Checkbox unselected error focus outline color |
| `md.comp.checkbox.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Checkbox focus indicator offset |
| `md.comp.checkbox.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Checkbox focus indicator thickness |
| `md.comp.checkbox.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Checkbox focus indicator color |
| `md.comp.checkbox.container.width` | 18dp | LENGTH | Checkbox container width |
| `md.comp.checkbox.container.height` | 18dp | LENGTH | Checkbox container height |
| `md.comp.checkbox.container.shape` | - | SHAPE | Checkbox container shape |
| `md.comp.checkbox.unselected.error.outline.color` | `md.sys.color.error` | COLOR | Checkbox unselected error outline color |
| `md.comp.checkbox.selected.error.container.color` | `md.sys.color.error` | COLOR | Checkbox selected error container color |
| `md.comp.checkbox.unselected.outline.width` | 2dp | LENGTH | Checkbox unselected outline width |
| `md.comp.checkbox.selected.outline.width` | undefineddp | LENGTH | Checkbox selected outline width |
| `md.comp.checkbox.unselected.outline.color` | `md.sys.color.on-surface-variant` | COLOR | Checkbox unselected outline color |
| `md.comp.checkbox.container.size` | 18dp | LENGTH | Checkbox container size |
| `md.comp.checkbox.selected.container.color` | `md.sys.color.primary` | COLOR | Checkbox selected container color |
| `md.comp.checkbox.unselected.error.pressed.outline.width` | 2dp | LENGTH | Checkbox unselected error pressed outline width |
| `md.comp.checkbox.selected.error.pressed.outline.width` | undefineddp | LENGTH | Checkbox selected error pressed outline width |
| `md.comp.checkbox.selected.error.focus.outline.width` | undefineddp | LENGTH | Checkbox selected error focus outline width |
| `md.comp.checkbox.unselected.error.focus.outline.width` | 2dp | LENGTH | Checkbox unselected error focusd outline width |
| `md.comp.checkbox.selected.error.hover.outline.width` | undefineddp | LENGTH | Checkbox selected error hover outline width |
| `md.comp.checkbox.unselected.error.hover.outline.width` | 2dp | LENGTH | Checkbox unselected error hover outline width |
| `md.comp.checkbox.error.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Checkbox error focus state layer opacity |
| `md.comp.checkbox.unselected.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected pressed icon color |
| `md.comp.checkbox.unselected.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected focus icon color |
| `md.comp.checkbox.unselected.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected hover icon color |
| `md.comp.checkbox.disabled.unselected.icon.opacity` | - | OPACITY | Checkbox disabled unselected icon opacity |
| `md.comp.checkbox.disabled.unselected.icon.color` | `md.sys.color.primary` | COLOR | Checkbox disabled unselected icon color |
| `md.comp.checkbox.disabled.selected.icon.opacity` | - | OPACITY | Checkbox disabled selected icon opacity |
| `md.comp.checkbox.disabled.selected.icon.color` | `md.sys.color.primary` | COLOR | Checkbox disabled selected icon color |
| `md.comp.checkbox.unselected.icon.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected icon color |
| `md.comp.checkbox.selected.error.pressed.icon.color` | `md.sys.color.on-error` | COLOR | Checkbox selected error pressed icon color |
| `md.comp.checkbox.selected.error.pressed.container.color` | `md.sys.color.error` | COLOR | Checkbox selected error pressed container color |
| `md.comp.checkbox.unselected.error.pressed.outline.color` | `md.sys.color.error` | COLOR | Checkbox unselected error pressed outline color |
| `md.comp.checkbox.error.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Checkbox error pressed state layer opacity |
| `md.comp.checkbox.error.pressed.state-layer.color` | `md.sys.color.error` | COLOR | Checkbox error pressed state layer color |
| `md.comp.checkbox.selected.pressed.outline.width` | undefineddp | LENGTH | Checkbox selected pressed outline width |
| `md.comp.checkbox.selected.pressed.container.color` | `md.sys.color.primary` | COLOR | Checkbox selected pressed container color |
| `md.comp.checkbox.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Checkbox selected pressed state layer opacity |
| `md.comp.checkbox.selected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Checkbox selected pressed state layer color |
| `md.comp.checkbox.unselected.pressed.outline.width` | 2dp | LENGTH | Checkbox unselected pressed outline width |
| `md.comp.checkbox.unselected.pressed.outline.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected pressed outline color |
| `md.comp.checkbox.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Checkbox unselected pressed state layer opacity |
| `md.comp.checkbox.unselected.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Checkbox unselected pressed state layer color |
| `md.comp.checkbox.selected.error.focus.icon.color` | `md.sys.color.on-error` | COLOR | Checkbox selected error focus icon color |
| `md.comp.checkbox.selected.error.focus.container.color` | `md.sys.color.error` | COLOR | Checkbox selected error focus container color |
| `md.comp.checkbox.error.focus.state-layer.color` | `md.sys.color.error` | COLOR | Checkbox error focus state layer color |
| `md.comp.checkbox.selected.focus.outline.width` | undefineddp | LENGTH | Checkbox selected focus outline width |
| `md.comp.checkbox.selected.focus.container.color` | `md.sys.color.primary` | COLOR | Checkbox selected focus container color |
| `md.comp.checkbox.unselected.focus.outline.width` | 2dp | LENGTH | Checkbox unselected focus outline width |
| `md.comp.checkbox.unselected.focus.outline.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected focus outline color |
| `md.comp.checkbox.selected.error.hover.icon.color` | `md.sys.color.on-error` | COLOR | Checkbox selected error hover icon color |
| `md.comp.checkbox.selected.error.hover.container.color` | `md.sys.color.error` | COLOR | Checkbox selected error hover container color |
| `md.comp.checkbox.unselected.error.hover.outline.color` | `md.sys.color.error` | COLOR | Checkbox unselected error hover outline color |
| `md.comp.checkbox.error.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Checkbox error hover state layer opacity |
| `md.comp.checkbox.error.hover.state-layer.color` | `md.sys.color.error` | COLOR | Checkbox error hover state layer color |
| `md.comp.checkbox.selected.hover.outline.width` | undefineddp | LENGTH | Checkbox selected hover outline width |
| `md.comp.checkbox.selected.hover.container.color` | `md.sys.color.primary` | COLOR | Checkbox selected hover container color |
| `md.comp.checkbox.unselected.hover.outline.width` | 2dp | LENGTH | Checkbox unselected hover outline width |
| `md.comp.checkbox.unselected.hover.outline.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected hover outline color |
| `md.comp.checkbox.selected.disabled.icon.color` | `md.sys.color.surface` | COLOR | Checkbox selected disabled icon color |
| `md.comp.checkbox.selected.disabled.container.outline.width` | undefineddp | LENGTH | Checkbox selected disabled container outline width |
| `md.comp.checkbox.selected.disabled.container.opacity` | - | OPACITY | Checkbox selected disabled container opacity |
| `md.comp.checkbox.selected.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Checkbox selected disabled container color |
| `md.comp.checkbox.unselected.disabled.container.opacity` | - | OPACITY | Checkbox unselected disabled container opacity |
| `md.comp.checkbox.unselected.disabled.outline.width` | 2dp | LENGTH | Checkbox unselected disabled outline width |
| `md.comp.checkbox.unselected.disabled.outline.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected disabled outline color |
| `md.comp.checkbox.state-layer.shape` | `md.sys.shape.corner.full` | SHAPE | Checkbox state layer shape |
| `md.comp.checkbox.selected.error.icon.color` | `md.sys.color.on-error` | COLOR | Checkbox selected error icon color |
| `md.comp.checkbox.selected.icon.color` | `md.sys.color.on-primary` | COLOR | Checkbox selected icon color |
| `md.comp.checkbox.icon.size` | 18dp | LENGTH | Checkbox icon size |
| `md.comp.checkbox.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Checkbox unselected focus state layer opacity |
| `md.comp.checkbox.unselected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected focus state layer color |
| `md.comp.checkbox.selected.focus.icon.color` | `md.sys.color.on-primary` | COLOR | Checkbox selected focus icon color |
| `md.comp.checkbox.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Checkbox selected focus state layer opacity |
| `md.comp.checkbox.selected.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Checkbox selected focus state layer color |
| `md.comp.checkbox.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Checkbox unselected hover state layer opacity |
| `md.comp.checkbox.unselected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Checkbox unselected hover state layer color |
| `md.comp.checkbox.selected.hover.icon.color` | `md.sys.color.on-primary` | COLOR | Checkbox selected hover icon color |
| `md.comp.checkbox.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Checkbox selected hover state layer opacity |
| `md.comp.checkbox.selected.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Checkbox selected hover state layer color |
| `md.comp.checkbox.state-layer.size` | 40dp | LENGTH | Checkbox state layer size |
| `md.comp.checkbox.selected.pressed.icon.color` | `md.sys.color.on-primary` | COLOR | Checkbox selected pressed icon color |


## Checkbox

![Diagram of checkbox indicating the 2 parts of its anatomy.](https://lh3.googleusercontent.com/o7Jd5nbugG-76fMDJwv-WD-ardrEfZF5Nxfq_8Pikz0V6pnzJXvDA6C4NPzOpZ3z39Rjb6tb1yxxQs8GBhn0L11_ozezB4FsTlSHGIQrRFcz=s2048)

*Caption / Legend:*
1. Container
2. Icon

## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Checkbox color roles in light and dark themes.](https://lh3.googleusercontent.com/tRScc_0bS1gM7jai2Ojj3qDzyhE696wedzZNPry2Pson8ONvZ_S_IoRUO6RwZBC5-YQUmgqLKG0xWldIJ5y_DT6lfRcty3F0JPY7pJvbqkZG=s2048)

*Caption / Legend:*
1. Checkbox
2. State-layer
3. Icon

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![Checkboxes with text labels. The text color is the same for checked and unchecked checkboxes.](https://lh3.googleusercontent.com/712ygEoSMR9tGvygN9LKJ8DZ7BhOWkzxv1y86AilaXmqdTa30fz5WP68koUEZThkz30akxDDI3CUbIxJh6PeEKIj2HK48__RTspIhYMIFFeX=s1352)

*Caption / Legend:*
The text color remains the same regardless if the checkbox is selected or not

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![Side by side view of states in light and dark themes.](https://lh3.googleusercontent.com/Yor59BqmDg2qk4vgXtDVI9FzkAcqUFQZ4EjWrwLc_rYafcVTgirLkf-bt1t7JbvpRyPYQYvrP8ZM_ZgYUA17VWtk1h9UJcckiG_W0NPLDled=s2048)

*Caption / Legend:*
1. Enabled
2. Disabled
3. Hovered
4. Focused
5. Pressed

## Measurements

![Diagram of a selected checkbox with a container width and height of 18dp and a state-layer width and height of 40dp.](https://lh3.googleusercontent.com/CcUqIZiHlrkBXYmqL54pCjCjsNpVnHsMf6QdUXITGzV89PkHrNbV84_w9I5ZgcNPlMFcCVbTxYhZzVbMESebqg2wWiSlqbYaRNstFOLT5P-s=s2048)

| Attribute | Value |
| --- | --- |
| Container size | 18dp |
| Container corner shape | 2dp |
| Icon size | 18dp |
| Icon alignment | Center-aligned |
| Target size | 48dp |
| State-layer size | 40dp |

## Guidelines

![A list of burger additions represented with checkboxes.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0yt1n6-1.png?alt=media)

*Caption / Legend:*
Checkboxes in a list of items

## Usage

Use checkboxes to:

- Select one or more options from a list
- Present a list containing sub-selections
- Turn an item on or off in a desktop environment
- Visually group similar options together

![List of 80's songs indicating choice through checkbox selection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vnl39-2.png?alt=media)

*Caption / Legend:*
Checkboxes select multiple, related options

Checkboxes should be used instead of switches if multiple, related options can be selected from a list. Checkboxes visually group similar items effectively and take up less space than switches.

![List indicating choice with checkbox selection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vok05-3_do.png?alt=media)

*Caption / Legend:*
Checkboxes let users select one or more options from a list. A parent checkbox allows for easy selection or deselection of all items.

![A list with multiple switches selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vwf9n-4_dont.png?alt=media)

*Caption / Legend:*
If a list consists of multiple options, don't use switches. Instead, use checkboxes. Checkboxes imply the items are related, and take up less visual space.

### Alternate selection controls

Checkboxes, radio buttons, and switches are the three main  selection controls. They all help people make choices, like selecting options or switching settings on or off.

- Use checkboxes to select multiple related options in a list.
- Use radio buttons to select a single option in a list.
- Use switches to select standalone or more verbose options in a list, like settings.

![Diagram of 2 radio buttons, one selected and one unselected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcypcjyf-5.png?alt=media)

*Caption / Legend:*
Radio buttons

![Diagram of 2 switches, one selected and one unselected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vwj88-6.png?alt=media)

*Caption / Legend:*
Switches

## Anatomy

![Diagram of checkbox indicating the 2 parts of its anatomy.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcypfx6t-7.png?alt=media)

*Caption / Legend:*
1. Container

2. Icon

## Responsive layout

In expanded breakpoints, placing checkboxes within a contained region such as a side sheet can help group related controls and available actions.

![Desktop screen showing music albums and a side sheet containing checkboxes for filtering music genres.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vp83b-8.png?alt=media)

*Caption / Legend:*
A side sheet can group related controls on larger screens

## Behavior

Multiple checkboxes in a list can be selected.

Checkboxes can have a parent-child relationship with other checkboxes.

- When the parent checkbox is checked, all child checkboxes are checked
- If a parent checkbox is unchecked, all child checkboxes are unchecked
- If some, but not all, child checkboxes are checked, the parent checkbox becomes an indeterminate checkbox. Checking an indeterminate checkbox checks all child items.

When selected, a checkbox clearly and instantly communicates its selected state.

If used to turn something on or off, the action should be immediately executed.

## Accessibility

## Use cases

People should be able to use assistive technology to:

- Navigate to a checkbox
- Toggle the checkbox on and off
- Get appropriate feedback based on input type documented under [Interaction & style](/m3/pages/checkbox/accessibility#6a2f55e5-2fa0-4204-b6d1-62362dda89c7)

## Interaction & style

Users should be able to select either the text label or the checkbox to select an option.

![In a list, checkboxes for 2 items are selected via their text labels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vkh7s-1.png?alt=media)

*Caption / Legend:*
A checkbox selected via the text label

The parent checkbox has three states: selected, unselected, and indeterminate.

Checkboxes can be selected or unselected regardless of the state of the other checkboxes in a group.

If some, but not all, child checkboxes are checked, the parent checkbox becomes indeterminate. Selecting an indeterminate parent checkbox will check all of its child checkboxes.

![In a list, a child checkbox for 1 item is selected and the parent checkbox is in indeterminate state.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmcyq4z51-2.png?alt=media)

*Caption / Legend:*
An indeterminate selection indicating that at least one checkbox is selected within a group

## Avoid applying density by default

Don't apply density to checkboxes by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can be easily reverted when it's active, keep all the targets to change it at minimum 48x48 CSS pixels each.

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Moves focus to enabled chip or chip group |
| **Space** or **Enter** | Activates, selects, or deselects the focused chip |
| **Backspace** or **Delete** | Removes currently focused input chip |
| **Arrows** | Moves focus between chips |

## Labeling elements

If the UI text is correctly linked to the checkbox, assistive tech (such as a screen reader) will read the UI text followed by the component’s role.

The accessibility label for an individual checkbox is typically the same as its adjacent text label.

![Accessibility labels of a checkbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0vlqi0-3.png?alt=media)

*Caption / Legend:*
The accessibility label clearly states the text label of the checkbox
