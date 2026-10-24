# Switch

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/switch](https://m3.material.io/components/switch)
> Last Updated: 2026-07-17T07:03:01.922Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use switches (not radio buttons) if the items in a list can be independently controlled
- Switches are the best way to let people adjust settings
- Make sure the switch’s selection (on or off) is visible at a glance

![A switch in two states, off and on.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwa9bnl5-1.png?alt=media)

*Caption / Legend:*
Switches can be toggled on and off

## Availability & resources

## Differences from M2

- Accessibility: Visual presentation is more accessible
- Color: New color mappings meet Material's non-text-contrast requirements in addition to compatibility with dynamic color
- Icons: Ability to have an optional icon within the switch handle
- Layout: Track is taller and wider

![M2 switches in off and on states.](https://lh3.googleusercontent.com/8Q9gMTX5nAY3wJyezAw1JEzmJ6MbTAT3FkVUc7BIO9RUJ485PUwFFlXz7pAutMPh1eI0ScCnGFUd3nuAEfSb_Uo89uV3wfTPotf3njzsUwfo=s1004)

*Caption / Legend:*
M2: Switches have a circular handle that extends beyond the edge of the track

![M3 switch shown toggled off and toggled on. When switched on, it has a checkmark icon.](https://lh3.googleusercontent.com/P_nhLNZtpt8oAPTScTR_d6oBLsidBWX0xG96t9fCkTURwNMReQpP9Etrpw4rc439wBfOAJBUeGZ39O8goRmRcPk_Ehhnq_wj7qNKFR4Sf70=s1004)

*Caption / Legend:*
M3: Switches have a taller and wider track, new color mappings, and the ability to show an icon in the handle

## Specs

![3 elements of a switch.](https://lh3.googleusercontent.com/a4JkZitJC-KZ1qxKfHvM-B2tuC0JqMsA08tY-fRrBhlXDf6JpvjpQD9IAZ0_zg-R1E0tvzAst-VwpSYDGUkfGABeKMCgHcAtXPwan6iiuNILhA=s2048)

*Caption / Legend:*
1. Track
2. Handle (formerly "thumb")
3. Icon

## Tokens & specs

Browse the component elements, attributes, tokens, and their values. [Learn more about design tokens](/m3/pages/design-tokens/overview)

#### Design Tokens: Switch

*For switches.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.switch.unselected.pressed.track.outline.color` | `md.sys.color.outline` | COLOR | Switch unselected pressed track outline color |
| `md.comp.switch.focus.indicator.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Switch focus indicator offset |
| `md.comp.switch.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Switch focus indicator color |
| `md.comp.switch.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Switch focus indicator thickness |
| `md.comp.switch.unselected.track.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected track color |
| `md.comp.switch.selected.track.color` | `md.ref.palette.primary60` | COLOR | Switch selected track color |
| `md.comp.switch.track.shape` | `md.sys.shape.corner.full` | SHAPE | Switch track shape |
| `md.comp.switch.track.outline.width` | 2dp | LENGTH | Switch track outline width |
| `md.comp.switch.unselected.track.outline.color` | `md.sys.color.outline` | COLOR | Switch track outline color |
| `md.comp.switch.handle.width` | 20dp | LENGTH | Switch handle width |
| `md.comp.switch.handle.height` | 20dp | LENGTH | Switch handle height |
| `md.comp.switch.disabled.handle.elevation` | `md.sys.elevation.level0` | ELEVATION | Switch disabled handle elevation |
| `md.comp.switch.disabled.handle.opacity` | - | OPACITY | Switch disabled handle opacity |
| `md.comp.switch.handle.elevation` | `md.sys.elevation.level1` | ELEVATION | Switch handle elevation |
| `md.comp.switch.handle.shadow-color` | `md.sys.color.shadow` | COLOR | Switch handle shadow color |
| `md.comp.switch.unselected.pressed.icon.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected pressed icon color |
| `md.comp.switch.selected.pressed.icon.color` | `md.sys.color.primary` | COLOR | Switch selected pressed icon color |
| `md.comp.switch.unselected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Switch unselected pressed state layer opacity |
| `md.comp.switch.unselected.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Switch unselected pressed state layer color |
| `md.comp.switch.unselected.pressed.track.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected pressed track color |
| `md.comp.switch.selected.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Switch selected pressed state layer opacity |
| `md.comp.switch.selected.pressed.state-layer.color` | `md.sys.color.primary` | COLOR | Switch selected pressed state layer color |
| `md.comp.switch.unselected.focus.icon.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected focus icon color |
| `md.comp.switch.selected.focus.icon.color` | `md.sys.color.primary` | COLOR | Switch selected focus icon color |
| `md.comp.switch.unselected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Switch unselected focus state layer opacity |
| `md.comp.switch.unselected.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Switch unselected focus state layer color |
| `md.comp.switch.unselected.focus.track.outline.color` | `md.sys.color.outline` | COLOR | Switch unselected focus track outline color |
| `md.comp.switch.unselected.focus.track.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected focus track color |
| `md.comp.switch.selected.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Switch selected focus state layer opacity |
| `md.comp.switch.selected.focus.state-layer.color` | `md.sys.color.primary` | COLOR | Switch selected focus state layer color |
| `md.comp.switch.unselected.hover.icon.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected hover icon color |
| `md.comp.switch.selected.hover.icon.color` | `md.sys.color.primary` | COLOR | Switch selected hover icon color |
| `md.comp.switch.unselected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Switch unselected hover state layer opacity |
| `md.comp.switch.unselected.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Switch unselected hover state layer color |
| `md.comp.switch.unselected.hover.track.outline.color` | `md.sys.color.outline` | COLOR | Switch unselected hover track outline color |
| `md.comp.switch.unselected.hover.track.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected hover track color |
| `md.comp.switch.selected.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Switch selected hover state layer opacity |
| `md.comp.switch.selected.hover.state-layer.color` | `md.sys.color.primary` | COLOR | Switch selected hover state layer color |
| `md.comp.switch.disabled.selected.handle.opacity` | - | OPACITY | Switch disabled selected handle opacity |
| `md.comp.switch.disabled.unselected.handle.opacity` | - | OPACITY | Switch disabled unselected handle opacity |
| `md.comp.switch.disabled.unselected.track.outline.color` | `md.sys.color.on-surface` | COLOR | Switch disabled unselected track outline color |
| `md.comp.switch.unselected.handle.color` | `md.sys.color.outline` | COLOR | Switch unselected handle color |
| `md.comp.switch.selected.handle.color` | `md.sys.color.on-primary` | COLOR | Switch selected handle color |
| `md.comp.switch.state-layer.shape` | `md.sys.shape.corner.full` | SHAPE | Switch state layer shape |
| `md.comp.switch.handle.shape` | `md.sys.shape.corner.full` | SHAPE | Switch handle shape |
| `md.comp.switch.pressed.handle.width` | 28dp | LENGTH | Switch pressed handle width |
| `md.comp.switch.selected.handle.width` | 24dp | LENGTH | Switch selected handle width |
| `md.comp.switch.with-icon.handle.width` | 24dp | LENGTH | Switch with icon handle width |
| `md.comp.switch.unselected.handle.width` | 16dp | LENGTH | Switch unselected handle width |
| `md.comp.switch.pressed.handle.height` | 28dp | LENGTH | Switch pressed handle height |
| `md.comp.switch.selected.handle.height` | 24dp | LENGTH | Switch selected handle height |
| `md.comp.switch.with-icon.handle.height` | 24dp | LENGTH | Switch with icon handle height |
| `md.comp.switch.unselected.handle.height` | 16dp | LENGTH | Switch unselected handle height |
| `md.comp.switch.unselected.focus.handle.color` | `md.sys.color.on-surface-variant` | COLOR | Switch unselected focus handle color |
| `md.comp.switch.selected.focus.handle.color` | `md.sys.color.primary-container` | COLOR | Switch selected focus handle color |
| `md.comp.switch.selected.focus.track.color` | `md.sys.color.primary` | COLOR | Switch selected focus track color |
| `md.comp.switch.unselected.hover.handle.color` | `md.sys.color.on-surface-variant` | COLOR | Switch unselected hover handle color |
| `md.comp.switch.selected.hover.handle.color` | `md.sys.color.primary-container` | COLOR | Switch selected hover handle color |
| `md.comp.switch.selected.hover.track.color` | `md.sys.color.primary` | COLOR | Switch selected hover track color |
| `md.comp.switch.unselected.icon.size` | 16dp | LENGTH | Switch unselected icon size |
| `md.comp.switch.unselected.icon.color` | `md.sys.color.surface-container-highest` | COLOR | Switch unselected icon color |
| `md.comp.switch.selected.icon.size` | 16dp | LENGTH | Switch selected icon size |
| `md.comp.switch.selected.icon.color` | `md.sys.color.primary` | COLOR | Switch selected icon color |
| `md.comp.switch.state-layer.size` | 40dp | LENGTH | Switch state layer size |
| `md.comp.switch.track.width` | 52dp | LENGTH | Switch track width |
| `md.comp.switch.track.height` | 32dp | LENGTH | Switch track height |
| `md.comp.switch.disabled.unselected.icon.opacity` | - | OPACITY | Switch disabled unselected icon opacity |
| `md.comp.switch.disabled.unselected.icon.color` | `md.sys.color.surface-container-highest` | COLOR | Switch disabled unselected icon color |
| `md.comp.switch.disabled.selected.icon.opacity` | - | OPACITY | Switch disabled selected icon opacity |
| `md.comp.switch.disabled.selected.icon.color` | `md.sys.color.on-surface` | COLOR | Switch disabled selected icon color |
| `md.comp.switch.unselected.pressed.handle.color` | `md.sys.color.on-surface-variant` | COLOR | Switch unselected pressed handle color |
| `md.comp.switch.selected.pressed.handle.color` | `md.sys.color.primary-container` | COLOR | Switch selected pressed handle color |
| `md.comp.switch.selected.pressed.track.color` | `md.sys.color.primary` | COLOR | Switch selected pressed track color |
| `md.comp.switch.disabled.unselected.handle.color` | `md.sys.color.on-surface` | COLOR | Switch disabled unselected handle color |
| `md.comp.switch.disabled.unselected.track.color` | `md.sys.color.surface-container-highest` | COLOR | Switch disabled unselected track color |
| `md.comp.switch.disabled.selected.handle.color` | `md.sys.color.surface` | COLOR | Switch disabled selected handle color |
| `md.comp.switch.disabled.selected.track.color` | `md.sys.color.on-surface` | COLOR | Switch disabled selected track color |
| `md.comp.switch.disabled.track.opacity` | - | OPACITY | Switch disabled track opacity |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![6 color roles of a switch in light and dark themes.](https://lh3.googleusercontent.com/0fyIBhV6SPL8tV1Vk7CtpveaYQ1-am9tJ41EVA-QaywC5FoZ6CmY7Cevkh6gG8HklU2Ojaj4r0d4Po-J0MEVg2VLPzYo1R2FUey0lcFBTu-0=s2048)

*Caption / Legend:*
Switch color roles used for light and dark themes:

1. Surface container highest
2. Outline
3. Outline
4. Primary
5. On primary
6. On primary container

### Adjacent text label color

Use the color role **on surface** for adjacent text labels. This remains the same even if interacting with the label or component.

![The large body text adjacent to switches uses "on surface" color and the body text uses "on surface variant."](https://lh3.googleusercontent.com/0Xmcv7IiazLYf6Bpg_WWIU0Cnp32mkTymcUwcgN2QxXbvz2KyCIvTMXDW4sOR-m-jzDd4IO3aHqdSxaX4k73lKiVHr3mTXpkCBztSv60pJTM=s1352)

*Caption / Legend:*
The text label uses **on surface**. Supporting text may use **on surface variant**.

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

![5 states of a switch shown in light and dark themes.](https://lh3.googleusercontent.com/PnpKeMQPpfXYol0STNFLWY--Fet6iOSy9Skw-SxaiktaHsBbPbHkXNl2RX7aLYHsrUbIN8LwPshZzNEQF4AM1vqbj70iiVmdzzvwC69U64M=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered
3. Focused
4. Pressed
5. Disabled

[State specs are in the token module above](/m3/pages/switch/specs#3708644e-b4d7-4237-bb0a-7afeeae4a9b0)

## Measurements

![Measurements of switches without icons.](https://lh3.googleusercontent.com/QjZaSle3gkHOtKy1j-YDhEIIdbjF3_Uy3kVXdJnmx7F4Gt-Af66rcmJpNFIKXrGIUg2NSEb9U4UAJ8kx1s50G9oIbfq_7fphlO8MoJd15uLp=s1004)

*Caption / Legend:*
Switches without icons

![Measurements of pressed switches without icons.](https://lh3.googleusercontent.com/vFaJZa1Ic9jL9_q6ayhWZw_21xhx2LeDKKJpLRhHisCUpo7tFW-cIHTOdD0mj75_m3ov2BhZQavFK8SqEkAm04X8rP8hE2YynD5so_vjZeev=s1004)

*Caption / Legend:*
Pressed switches without icons

![Measurements of switches with icons.](https://lh3.googleusercontent.com/pOvYPjVd1P1HEOyZPLp4jziQmmbT5uMefs4zGCMSHg-fiRFgzXIeAz75RDSyfyZSu3yObf70vL6iiPgRVQtzDTWj8rZVaCR87l-gWjdz66Pr=s1004)

*Caption / Legend:*
Switches with icons

![Measurements of pressed switches with icons.](https://lh3.googleusercontent.com/wZm_0fDk5iJbWdd6SZL2P6FkEw8Q94mZ9g0laAAb99hOsR4dk08iyhObA6p4OuqUuf8azFV_9Th006NHGZu2A8nw71qCl-DB_SRYOMAeIN4bHQ=s1004)

*Caption / Legend:*
Pressed switches with icons

| Element | Attribute | Value |
| --- | --- | --- |
| Track | Height | 32dp |
| Width | 52dp |  |
| Outline width | 2dp |  |
| Shape | [md.sys.shape.corner.full](/m3/pages/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |  |
| Handle | Height (unselected) | 16dp |
| Height - with icon | 24dp |  |
| Height (selected) | 24dp |  |
| Height (pressed) | 28dp |  |
| Width (unselected) | 16dp |  |
| Width - with icon | 24dp |  |
| Width (selected) | 24dp |  |
| Width (pressed) | 28dp |  |
| Shape | [md.sys.shape.corner.full](/m3/pages/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |  |
| State layer | Size | 40dp |
| Shape | [md.sys.shape.corner.full](/m3/pages/shape/corner-radius-scale#56e2bfb5-4bec-49bd-b3a3-bd822c8ab88e) |  |
| Target | Size | 48dp |
| Icon | Size (selected) | 16dp |
| Icon | Size (unselected) | 16dp |

## Configurations

1. Without icons
2. Icon on selected switch
3. Icon on selected and unselected switch

![3 example switches with and without icons in on and off states. ](https://lh3.googleusercontent.com/yZbAEZRgNI6uOkunAfaXCx8NAExJ8RsY6DkIjWJMH0DanJdyakTEzO8YFyw1bd3AZdvfJv229_maPQKBRGGddH4NZm7PsouKM_oTEBs3-Bin=s1352)

## Guidelines

![A switch in 2 states, off and on.](https://lh3.googleusercontent.com/x0AqjOgoDcYjaJyG017Y59vOzTxcqS5NfZ761rJ-Utb8JVw8_RZskFZTYAbBECIFqE23WBpO0Xufv97hXyAerK4lcsli48s_czxN65LlMLk=s2048)

*Caption / Legend:*
Switches change settings and other options immediately

## Usage

Switches are best used to adjust settings and other standalone options.

They make a binary selection:

- On and off
- True and false

The effects of a switch should start immediately, without needing to save.

Use switches to:

- Toggle a single item on or off
- Immediately activate or deactivate something

![Switch used in notification settings to turn on and off the "play over notifications" function.](https://lh3.googleusercontent.com/1tz8VDpVt3FDyf3v9iiqdxIEuIffJuOaXLSfHDYAN83CaPiKc_YZfO7KnZ2yVTmLNA-gmvxmdsHyXEjArew74BAk5HzKiM350ZagEXfzQ4qaWw=s1352)

*Caption / Legend:*
Switches are commonly used on mobile to turn settings on or off

Switches should be used instead of radio buttons if each item in a set can be independently controlled.

![Radio buttons used to select Wi-Fi or Bluetooth in the Settings app on a mobile device.](https://lh3.googleusercontent.com/ri1tqY4CwpEqB-DkNZQe-P9niTffhljbYUVssp5O2xGLLPs5r8xPWMCDgYBpl2LTmGXkGLe7xw9tMtGAreZh1c49RD_mtwg0YQE4OKfM0zE=s1352)

*Caption / Legend:*
Use radio buttons to toggle items on or off. Radio buttons convey that a set of items are options and can only be selected one at a time. Instead use switches.

Switches control binary options, not opposing ones. A binary option represents a single selection that's either on or off.

Opposing options are when only one option in a set can be selected at a time, like a list or map view. Use a connected button group instead.

![A connected button group with options of List View and Map View.](https://lh3.googleusercontent.com/jH1Tkfo_kEijiXDqUqQIT2VMLZB213Hl414Jrmsh6jr0o_QYlwgLsm_8ikjo_XqhgeRa4wI5FrbMcdpLLgCx33GAabL-wWRJaNJDLSyPs5aV=s656)

*Caption / Legend:*
Use a connected button group to choose between opposing options

![A switch with non-binary options of List View and Map View.](https://lh3.googleusercontent.com/muDDs8mxZm8vsI9Bu335VCwdRY6E9Yx8mEUNab4_4FlUdRbaNPSFJCfWKOHTEcH6qj6R8p_E0wTt9xfp3nrbvXx0k_NWqpJYp97ZkEAoiMz_2Q=s656)

*Caption / Legend:*
Avoid using switches to toggle between opposing options

### Alternate selection controls

Checkboxes, radio buttons, and switches are the three main kinds of selection controls. They help people make choices, like selecting options or turning settings on and off.

Use checkboxes to select multiple related options in a list.

Use radio buttons to select a single option in a list.

Use switches to select standalone or more verbose options in a list, like settings.

![2 checkboxes, 1 unchecked and 1 checked.](https://lh3.googleusercontent.com/xAewYZioxNc7YhmPjwIC4XEG7_8tdA6130j_66kfuFM3H3h2HH0wx8U1kVxPeNz4StMXWMJG0ICxNai-woryizyuiGfJyFBrvUfFqh2DrQ33=s656)

*Caption / Legend:*
Checkboxes

![2 radio buttons, 1 in an enabled state, 1 in a disabled state.](https://lh3.googleusercontent.com/Xcgd1ZKjqsdww-in_mgrJ56JkF9t5rIVuJGByhtHWgjPDKPGYFRHlV_UU-HKcBCYbW3F9L9mZEwkmXlRl0JdLwUpTsklLQpiVfw_-dWEi80=s656)

*Caption / Legend:*
Radio buttons

![Mobile screen with checkboxes to select list items and call to action button to update the list.](https://lh3.googleusercontent.com/EeKlgEcp1KJ-9NfC7YPlsc0sQITFitnLnF1iY76rHsZKNPmeu0J5-a3xlnpj_tPlVvoEuQjX2pVze8dqv2WknsVejVR5idvAltny8CMraed79w=s1004)

*Caption / Legend:*
Use checkboxes (not switches) to let people select one or more options from a list

![Mobile screen with checkboxes to select list items and call to action switch to update the list.](https://lh3.googleusercontent.com/wjSLtGs-C59hMUplsvCnFm1IjCYlMNcNUGUsnKoR28RxhApBz0YhW6AlO257nPdJ48NIUTezejDl3h3B3ZbgE4iBHQPMdu39mDkcLZ2VGze3=s1004)

*Caption / Legend:*
A switch can't replace a button. People expect a call to action to be a button, not a switch.

![Radio buttons used to select a language for a mobile app.](https://lh3.googleusercontent.com/RP-OY6cXjDCXhDkZfdNQmY4crSy5rLCujf8DCTUaNSByNPt1XJYvpWHOZm0d5hLprgl_wfU9YZBGoh8ciq38frIAqP64CddYsZWCLQ4tHGA=s1004)

*Caption / Legend:*
Use radio buttons (not switches) when only one item can be selected from a list

![Mobile screen with switches to select list items and call to action button to update the list.](https://lh3.googleusercontent.com/qhcoEcCH8obBM4P2DNuKMOOKaOgdApSQW-0OZVSc5UD46Ttzdkb_GproXkVIIVsl7jOklP8-8RZf0EzaIOZTUhOi16ruTe4LpFgQwPDnrvLQqQ=s1004)

*Caption / Legend:*
Avoid using a switch to select multiple options that require people to save. Switches should be immediate. Use checkboxes instead.

## Anatomy

![3 elements of a switch. ](https://lh3.googleusercontent.com/3lI8U8eFaJEBDsf5YJz4e07h87cub5XTw2qWR3w7BbarbCWicdNE9AF4ewEp_r3qh_evjs105-t5KwM0OdO-ZEeC4-HFV75DIrHi3PyJE1-J=s2048)

*Caption / Legend:*
1. Track
2. Handle
3. Icon (optional)

### Icon (optional)

The switch handle can contain an optional icon.

Icons can be used to visually emphasize the switch’s selection. The icon’s meaning should be clear and unambiguous to help the people understand whether switch is on or off.

![2 switches, the unselected state icon is an X, and the selected state is a checkmark.](https://lh3.googleusercontent.com/n_YcGWfROt1o6Ig3SUMsoD2AJnR1ONaC0AjgVUR9CIQ0_zAlMNw-wWfpshgAv5mru4RBPlzTym7BIW8-QZy0ZJMGqXwQ-mMXWP8suAgNL19G=s656)

*Caption / Legend:*
Use icons that clearly communicate whether the switch is on or off, such as an X and a checkmark

![A switch’s unselected handle icon is a moon and the selected state icon is a pencil.](https://lh3.googleusercontent.com/LPCQ-Do-7xjhcg4Q-ocCdWlGZiku8V4RY86JpOCxYReqXVAswVegZ-TLmgF7ogz6UjS_zysFsBwyASHQbI4urmMnrKpdXxV0EEq4p8922SLRGQ=s656)

*Caption / Legend:*
Avoid using more ambiguous or non-binary icons, such as a moon or edit icon

### Label text

Switches should always be paired with an inline label describing what the switch controls when selected.

![Switch label text: 1. Permission manager, App has access to your data. 2. Camera access, app has access to your camera. 3. Show password.](https://lh3.googleusercontent.com/A3Tr_ujhshFdU05BqNPGYMK-n-IYTjRkYIMgLkKqGfjYI5H3uU5oMweusuojA6wu8Xzn9TWID_iSe30uoYweAvECisDP0YKVG-ZEGHKUaT4=s1352)

*Caption / Legend:*
Keep labels short and direct. A label should describe what the control does when the switch is on.

![On a mobile screen’s privacy settings, 2 switches have “On” label text and checkmark icons. The last switch has “Off” label text and no icon.](https://lh3.googleusercontent.com/Yeafv6eDK5lXb6MUK2aXoRw6D8bo7TFoO62JYzQjQDdojRTeYEDf5iCU8M_MdA67qDGCoaqrAke1B0V_AQYSQy1ISTpT8kykUIKhjk2FvYcSzw=s1352)

*Caption / Legend:*
Don't add label text into the switch; the font size would be too small to be accessible. Use an appropriate icon instead.

## Placement

Switches are often arranged in stacked layouts.

![Screen showing labels and stacked switches in varying on/off modes.](https://lh3.googleusercontent.com/ZsqrkLA9mtmq2b2QpUDR2rtnKj9uidOEDais9zRVYzpypNMDiPrcugFoM26TU2BfwIEU2f8ayFkOCJTuuor-EnkTfcRC5AhzhoeJl0_5QK3OBg=s1352)

*Caption / Legend:*
Settings screens are common places to use switches

## Behavior

A switch is successfully toggled when the handle slides to the other side of the track after an interaction.

When a person toggles a switch, its handle size changes and the corresponding action takes effect immediately.

## Accessibility

## Use cases

People should be able to do the following with assistive technology:

- Navigate to a switch with a keyboard or switch input
- Toggle the switch on and off
- Get appropriate feedback based on input type documented under [Interaction & style](/m3/pages/switch/accessibility#c0e9fae1-48df-428b-b028-4f7be071ada3)

## Interaction & style

The switch handle increases in size to indicate interactivity for both touch and cursor control interactions.

**Touch**
When tapped or dragged, the handle size grows, providing interaction feedback.

**Cursor**
When hovered (in both on and off states), the hover area grows, providing a visual cue that the handle is interactive. When clicked, the handle size grows.

![The switch handle increases in size when tapped and dragged.](https://lh3.googleusercontent.com/W9k8FZDab4FlAZdkKblIJVtCzjSJ48pu4wxgFourwAHfPsYc5RPK8gTPW4H7hVTj-hJNoR4iqQpZwdnoE14XBpGYLSk2_zBG7hWDC5YNt3r2ew=s656)

*Caption / Legend:*
Touch: Tap, Drag

![The cursor changes from an arrow to a hand pointer when hovering over and clicking the switch.](https://lh3.googleusercontent.com/1waGLXuMxUHtjHjDVCcLWQF2ioH5mGvSRVlVJn9IO1rTSeiTTUE6pG2zQ6VskRok4RHejMQHucCfuiTKcoczKrjuyWT_hsyrERdMS7fJmp5P=s656)

*Caption / Legend:*
Cursor: Hover, Click

### Avoid applying density by default

Don't apply density to switches by default — this lowers their targets below our best practice of 48x48 CSS pixels. Instead, give people a way to choose a higher density, like selecting a denser layout or changing the theme.

To ensure that this density setting can easily be reverted when it's active, keep all targets to change it at a minimum 48x48 CSS pixels each.

## Initial focus

Initial focus lands directly on the switch’s handle, since it’s the primary interactive element of the component.

![The focus is on the switch handle, which is toggled on. ](https://lh3.googleusercontent.com/ncRMKB_fQpAaCrlUNBYQ-UXNOAdAP-bmIlZy3hiiGoTic1gTMurPu6wqzFLKBTWIMrhDa3bhrLT4J9Ppg8OLP7BOxKLEKLWvo5egYkDEL8Gw=s656)

*Caption / Legend:*
Focus lands on the switch handle

![Space or Enter is used to toggle the switch off.](https://lh3.googleusercontent.com/zJYFK9dmp7xQR83LnteRstjk0HCH3wuryW_dm29AYmjj3K4U6GM91uuwHh9CLjlV49GMndpgnSlYNMgXwR5_OCNySgR7eHvBJgU2MmWXjofVfw=s656)

*Caption / Legend:*
The switch is toggled using **Space** or **Enter**

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Focus lands on the switch handle |
| **Space **or** Enter** | Toggles the handle on and off |

## Labeling elements

The accessibility label for a switch uses the adjacent label text if implemented correctly.

Assistive tech such as a screen reader will read the UI text followed by the component’s role.

![“Dark theme” is the switch’s adjacent label text and the accessibility label.](https://lh3.googleusercontent.com/uQCgvmrYgUn5jsyprqaHwVc9uV4Jgg0cJR11xFDTeF-WdA4w1h72Cm-S3xtz6IwTdRUEpj7rt3vloFZFENV8Q1FVUjffGOptoHDsJYVpQKcqUg=s1352)

*Caption / Legend:*
A switch’s accessibility label can incorporate its adjacent UI text

When the visible UI text is ambiguous, accessibility labels need to be more descriptive. For example, a switch visibly labelled **Photo album** would benefit from additional information to clarify the switch’s function.

Consider making the adjacent label text more descriptive when possible. This reduces the need for different accessibility text.

![The accessibility label for the switch is “Photo album access” though the label text is “photo album.”](https://lh3.googleusercontent.com/RL42kRexZDwly3y3IIMPDdcDUEkd7C4jOQuq9me0IQa3vkWH9zl08KjI5yLcp6KCZIM7S8f56Oa4q3FHDC6TgTCJUVngGOWBalNaMtkAJekq=s1352)

*Caption / Legend:*
While the visible label text reads **Photo album**, the accessibility label for this switch clarifies its function: **Photo album access**
