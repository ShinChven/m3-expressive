# Radio button

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/radio-button](https://m3.material.io/components/radio-button)
> Last Updated: 2026-07-17T07:17:47.331Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use radio buttons (not switches) when only one item can be selected from a list
- Label should be scannable
- Selected items are more prominent than unselected items

![1 radio button is selected from a list of 4 radio buttons of different ringtones.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc92gkg1-01.png?alt=media)

*Caption / Legend:*
Radio buttons can be selected

## Resources & availability

## What’s new

- Color: New color mappings and compatibility with dynamic color

![App screen with 1 active button selected from list of 3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z3b8a-02.png?alt=media)

*Caption / Legend:*
Radio buttons feature new color mappings

## Specs

![Diagram of enabled radio button.](https://lh3.googleusercontent.com/dhK9o6CpKl0rU0nNthzBHEz_WjPB264BCIZiXJisj5qoYSGwynygzLH2JUgl2RyYjyArXkZNMdlpDOC6MEm1gY36QdhZED-VFVcPsQuff1rHZg=s2048)

*Caption / Legend:*
1. Radio button icon

## Tokens & specs

[Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Radio Button

*For radio buttons.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.radio-button.unselected.focus.icon.color` | `md.sys.color.on-surface` | COLOR | Radio button unselected focus icon color |
| `md.comp.radio-button.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Radio button unselected focus state layer opacity |
| `md.comp.radio-button.unselected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Radio button unselected focus state layer color |
| `md.comp.radio-button.selected.focus.icon.color` | `md.sys.color.primary` | COLOR | Radio button selected focus icon color |
| `md.comp.radio-button.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Radio button selected focus state layer opacity |
| `md.comp.radio-button.selected.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Radio button selected focus state layer color |
| `md.comp.radio-button.unselected.hover.icon.color` | `md.sys.color.on-surface` | COLOR | Radio button unselected hover icon color |
| `md.comp.radio-button.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Radio button unselected hover state layer opacity |
| `md.comp.radio-button.unselected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Radio button unselected hover state layer color |
| `md.comp.radio-button.selected.hover.icon.color` | `md.sys.color.primary` | COLOR | Radio button selected hover icon color |
| `md.comp.radio-button.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Radio button selected hover state layer opacity |
| `md.comp.radio-button.selected.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Radio button selected hover state layer color |
| `md.comp.radio-button.state-layer.size` | 40dp | LENGTH | Radio button state layer size |
| `md.comp.radio-button.icon.size` | 20dp | LENGTH | Radio button icon size |
| `md.comp.radio-button.unselected.icon.color` | `md.sys.color.on-surface-variant` | COLOR | Radio button icon unselected color |
| `md.comp.radio-button.selected.icon.color` | `md.sys.color.primary` | COLOR | Radio button icon selected color |
| `md.comp.radio-button.unselected.pressed.icon.color` | `md.sys.color.on-surface` | COLOR | Radio button unselected pressed icon color |
| `md.comp.radio-button.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Radio button unselected pressed state layer opacity |
| `md.comp.radio-button.unselected.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Radio button unselected pressed state layer color |
| `md.comp.radio-button.selected.pressed.icon.color` | `md.sys.color.primary` | COLOR | Radio button selected pressed icon color |
| `md.comp.radio-button.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Radio button selected pressed state layer opacity |
| `md.comp.radio-button.selected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Radio button selected pressed state layer color |
| `md.comp.radio-button.disabled.unselected.icon.opacity` | - | OPACITY | Radio button disabled unselected icon opacity |
| `md.comp.radio-button.disabled.unselected.icon.color` | `md.sys.color.on-surface` | COLOR | Radio button disabled unselected icon color |
| `md.comp.radio-button.disabled.selected.icon.opacity` | - | OPACITY | Radio button disabled selected icon opacity |
| `md.comp.radio-button.disabled.selected.icon.color` | `md.sys.color.on-surface` | COLOR | Radio button disabled selected icon color |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![Diagram of selected and unselected radio button colors.](https://lh3.googleusercontent.com/AiZMdjDtHEF9acx935WgjONj_Kvnb5Zl00C7Q1pxV56QjHx29o9tmyo4ACyJzafBGMDlrnOQBqScIiZY2mk205cbNAtBBqmtDAQR2ya7bcny=s2048)

*Caption / Legend:*
Radio button color roles used for light and dark themes:

1. Primary
2. On surface variant

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![Radio buttons with labels. The labels are the same color for both selected and unselected radio buttons.](https://lh3.googleusercontent.com/aFf7EK2cXKvdJegnbGx-u44UtDR9NZkQxw81UNCX4Q_D6_dvx_psq5rttJYfH9qytzYEkAxpFiNcej-7JO8Q0Mu6ySIq2h6sfDJN-BHFygZr=s1352)

*Caption / Legend:*
The text color remains the same regardless if the button is selected or not

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![Diagram of radio button states including enabled, hover, focus, pressed, and disabled.](https://lh3.googleusercontent.com/batG4K9NgonMPOe8NtbqKBf_5HbQhLrGbpIrPzKU2lPdbMfVm8nbualfdj3tFA5cfGE9OLgj4lxybNV6a8-d90gixbpw7mm11V6ky0s5-ik=s2048)

*Caption / Legend:*
1. Enabled
2. Hover
3. Focus
4. Pressed
5. Disabled

[State specs are in the token module above](/m3/pages/radio-button/specs#3eef19a6-cdcb-4ecf-b1af-2b8095d485ac)

## Measurements

![Diagram of radio button layout values.](https://lh3.googleusercontent.com/Mix21eJwewQUVsSEPZiI8V9QtuoPH_Fw_CYVBaXX1vwpGyYgkN0dC8tdrO6WXjS-ADSW8GMMsDP5MNkMUF1i4izhNjHk7lsA8tAHRlZZ-L8H=s2048)

*Caption / Legend:*
Radio button size measurements

| Attribute | Value |
| --- | --- |
| Icon size | 20dp |
| State layer size | 40dp |
| Target size | 48dp |

## Guidelines

![1 radio button is selected from a list of 4 radio buttons of different ringtones.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc92xj30-01.png?alt=media)

*Caption / Legend:*
Radio buttons

## Usage

Radio buttons are the recommended way to allow users to make a single selection from a list of options.

Only one radio button can be selected at a time.

Use radio buttons to:

- Select a single option from a set
- Expose all available options

![2 radio buttons are used for allowing or turning off notifications. 2 checkboxes are used for microphone and location access.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93t2tz-03.png?alt=media)

*Caption / Legend:*
Radio buttons are single-select, unlike checkboxes which are multi-select

![Filter page with 4 sort by options as radio buttons. Relevance is selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93whon-04-do.png?alt=media)

*Caption / Legend:*
Use radio buttons when only one option can be selected from a list

![Meal options page with the Additions item selected, along with 4 nested checkboxes for selecting various toppings. All checkboxes are selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93wr1q-05-do.png?alt=media)

*Caption / Legend:*
Use checkboxes when multiple options can be selected from a list

Avoid nesting radio buttons or using radio buttons to select multiple options.

![Selected radio button with 2 nested radio buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93ykkg-06_dont.png?alt=media)

*Caption / Legend:*
Don’t nest radio buttons

![2 radio buttons selected at once from a list of 3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc93z4ss-07_dont.png?alt=media)

*Caption / Legend:*
Don’t allow radio buttons to select multiple options

### Alternate selection controls

Radio buttons are one of several selection controls, which allow people to make choices such as selecting options or switching settings on or off.

Switches and checkboxes are alternative selection controls that can be used to change settings or preferences.

![A selected and unselected switch.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc942yik-08.png?alt=media)

*Caption / Legend:*
Switches

![An unselected and selected checkbox.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc942but-09.png?alt=media)

*Caption / Legend:*
Checkboxes

Use radio buttons when there are five or fewer options.

Consider using a drop-down menu instead of radio buttons when it’s important to save space on a screen. However, drop-down menus require additional steps for a person, both in the number of clicks and cognitive effort.

![A filter UI with 1 radio button selected from a list of 3 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc944w0k-10-do.png?alt=media)

*Caption / Legend:*
Use radio buttons when there are five or fewer options

![A dropdown menu with a list of 4 options.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc945hgt-11-do.png?alt=media)

*Caption / Legend:*
Consider using a drop-down menu instead of radio buttons when space is constrained

## Anatomy

![3 elements of a radio button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z4md9-12.png?alt=media)

*Caption / Legend:*
1. Selected icon
2. Adjacent label text
3. Unselected icon

### Adjacent label text

Always pair radio buttons with an adjacent label describing what the radio button selects.

Because only one radio button can be selected at a time, each choice must have its own label.

## Placement

Radio buttons are often arranged in stacked layouts.

![Settings page with 3 stacked radio buttons for selecting a language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc949gf8-14.png?alt=media)

Radio buttons should be vertically listed and have one option always selected.

![3 radio buttons with 1 option selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc94bpsi-16_do.png?alt=media)

*Caption / Legend:*
Radio buttons should always have one option pre-selected

![2 radio buttons side by side with 1 option selected.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwg86p38-16_caution.png?alt=media)

*Caption / Legend:*
Avoid using horizontal radio button lists

## Behavior

A radio button is successfully selected when a person clicks or taps either the radio button icon or the label.

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Navigate to a radio button
- Select a radio button
- Get appropriate feedback based on input type

## Interaction & style

A radio button can be either selected or unselected. Selecting one radio button deselects any others. A radio group can start with one radio button selected, or none selected.

Once a radio button is selected, the group can’t be deselected. To let people opt out of their selection, either provide a **Not applicable** or **No option** radio button, or provide a separate way to deselect all radio buttons, like **Clear selection**.

People should be able to select either the text label or the radio button to select an option.

### Avoid applying density by default

Don't apply density to radio buttons by default. This lowers their targets below Material's recommendation of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure this density setting can be easily reverted when it's active, keep all targets to change it at a minimum of 48x48 CSS pixels each.

## Initial focus

When outside the radio group, **Tab** moves focus directly to the selected radio button, or the first one if none are selected.

**Shift+Tab** instead focuses on the last radio if none are selected.

Use the **arrows** to navigate between options.

![The Tab key focuses on the first of 2 stacked radio buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmc94qafr-02.png?alt=media)

*Caption / Legend:*
Tab brings the focus to the initially selected item or the initial radio option

![The up and down arrow keys move through a list of stacked radio buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z51u6-03.png?alt=media)

*Caption / Legend:*
Arrows move to next element in a list

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Moves focus into the group to the selected radio button, or the first if none are selected |
| **Shift** + **Tab** | Moves focus into the group to the selected radio button, or the last if none are selected |
| **Arrows** | Moves focus and selects the previous or next radio button. Wraps focus and selection between the first and last radio buttons. |
| **Space** | Selects a focused radio button. If already selected, does nothing. |

## Labeling elements

If the UI text is correctly linked to the radio button, assistive tech such as a screenreader will read the UI text, followed by the component’s role.

The accessibility label for a group of radio buttons is typically the same as its title. The role is **Radio group**.

![Accessibility tags for a radio button group.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmd3jpo7w-04.png?alt=media)

*Caption / Legend:*
Label the radio group based on the category title

The accessibility label for an individual radio button is typically the same as its adjacent text label.

![Accessibility tags for a radio button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0z56zm-05.png?alt=media)

*Caption / Legend:*
Label the radio button based on its label text
