# Cards

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/cards](https://m3.material.io/components/cards)
> Last Updated: 2026-07-24T06:14:10.548Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Use cards to contain related elements
- Three variants: elevated, filled, outlined
- Contents can include anything from images to headlines, supporting text, buttons, and lists
- Can also contain other components
- Cards have flexible layouts and dimensions based on their contents

![3 variants of cards](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuilyza-1.png?alt=media)

*Caption / Legend:*
1. Elevated card
2. Filled card
3. Outlined card

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Elevation: Lower elevation and no shadow by default
- Variants: Three official card variants – elevated, filled, and outlined

![M3-style card](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuimnd8-2.png?alt=media)

*Caption / Legend:*
Cards have updated colors, elevation, and variants

## Specs

## Tokens & specs

Select a component variant below to see its elements, attributes, tokens, and their values.

#### Design Tokens: Card - Elevated

*For elevated cards.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.elevated-card.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Elevated card focus indicator offset |
| `md.comp.elevated-card.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Elevated card focus indicator thickness |
| `md.comp.elevated-card.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Elevated card focus indicator color |
| `md.comp.elevated-card.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Elevated card container surface tint layer color |
| `md.comp.elevated-card.disabled.container.color` | `md.sys.color.surface` | COLOR | Elevated card disabled container color |
| `md.comp.elevated-card.disabled.container.opacity` | - | OPACITY | Elevated card disabled container opacity |
| `md.comp.elevated-card.disabled.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated card disabled container elevation |
| `md.comp.elevated-card.icon.size` | 24dp | LENGTH | Elevated card icon size |
| `md.comp.elevated-card.icon.color` | `md.sys.color.primary` | COLOR | Elevated card icon color |
| `md.comp.elevated-card.container.shadow-color` | `md.sys.color.shadow` | COLOR | Elevated card container shadow color |
| `md.comp.elevated-card.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Elevated card focus state layer opacity |
| `md.comp.elevated-card.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Elevated card focus state layer color |
| `md.comp.elevated-card.focus.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated card focus container elevation |
| `md.comp.elevated-card.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Elevated card hover state layer opacity |
| `md.comp.elevated-card.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Elevated card hover state layer color |
| `md.comp.elevated-card.hover.container.elevation` | `md.sys.elevation.level2` | ELEVATION | Elevated card hover container elevation |
| `md.comp.elevated-card.container.shape` | `md.sys.shape.corner.medium` | SHAPE | Elevated card container shape |
| `md.comp.elevated-card.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated card container elevation |
| `md.comp.elevated-card.container.color` | `md.sys.color.surface-container-low` | COLOR | Elevated card container color |
| `md.comp.elevated-card.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Elevated card dragged state layer opacity |
| `md.comp.elevated-card.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | Elevated card dragged state layer color |
| `md.comp.elevated-card.dragged.container.elevation` | `md.sys.elevation.level4` | ELEVATION | Elevated card dragged container elevation |
| `md.comp.elevated-card.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Elevated card pressed state layer opacity |
| `md.comp.elevated-card.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Elevated card pressed state layer color |
| `md.comp.elevated-card.pressed.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Elevated card pressed container elevation |

#### Design Tokens: Card - Filled

*For filled cards.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.filled-card.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Filled card focus indicator offset |
| `md.comp.filled-card.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Filled card focus indicator thickness |
| `md.comp.filled-card.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Filled card focus indicator color |
| `md.comp.filled-card.disabled.container.color` | `md.sys.color.on-surface` | COLOR | Filled card disabled container color |
| `md.comp.filled-card.disabled.container.opacity` | - | OPACITY | Filled card disabled container opacity |
| `md.comp.filled-card.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled card disabled container elevation |
| `md.comp.filled-card.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Filled card container surface tint layer color |
| `md.comp.filled-card.container.shadow-color` | `md.sys.color.shadow` | COLOR | Filled card container shadow color |
| `md.comp.filled-card.container.shape` | `md.sys.shape.corner.medium` | SHAPE | Filled card container shape |
| `md.comp.filled-card.icon.size` | 24dp | LENGTH | Filled card icon size |
| `md.comp.filled-card.icon.color` | `md.sys.color.primary` | COLOR | Filled card icon color |
| `md.comp.filled-card.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Filled card focus state layer opacity |
| `md.comp.filled-card.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Filled card focus state layer color |
| `md.comp.filled-card.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled card focus container elevation |
| `md.comp.filled-card.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Filled card hover state layer opacity |
| `md.comp.filled-card.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Filled card hover state layer color |
| `md.comp.filled-card.hover.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Filled card hover container elevation |
| `md.comp.filled-card.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled card container elevation |
| `md.comp.filled-card.container.color` | `md.sys.color.surface-container-highest` | COLOR | Filled card container color |
| `md.comp.filled-card.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Filled card dragged state layer opacity |
| `md.comp.filled-card.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | Filled card dragged state layer color |
| `md.comp.filled-card.dragged.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Filled card dragged container elevation |
| `md.comp.filled-card.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Filled card pressed state layer opacity |
| `md.comp.filled-card.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Filled card pressed state layer color |
| `md.comp.filled-card.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Filled card pressed container elevation |

#### Design Tokens: Card - Outlined

*For outlined cards.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.outlined-card.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Outlined card focus indicator offset |
| `md.comp.outlined-card.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Outlined card focus indicator thickness |
| `md.comp.outlined-card.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Outlined card focus indicator color |
| `md.comp.outlined-card.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Outlined card container surface tint layer color |
| `md.comp.outlined-card.disabled.outline.opacity` | - | OPACITY | Outlined card disabled outline opacity |
| `md.comp.outlined-card.disabled.outline.color` | `md.sys.color.outline` | COLOR | Outlined card disabled outline color |
| `md.comp.outlined-card.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Outlined card disabled container elevation |
| `md.comp.outlined-card.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Outlined card pressed container elevation |
| `md.comp.outlined-card.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Outlined card focus container elevation |
| `md.comp.outlined-card.hover.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Outlined card hover container elevation |
| `md.comp.outlined-card.icon.size` | 24dp | LENGTH | Outlined card icon size |
| `md.comp.outlined-card.icon.color` | `md.sys.color.primary` | COLOR | Outlined card icon color |
| `md.comp.outlined-card.outline.color` | `md.sys.color.outline-variant` | COLOR | Outlined card outline color |
| `md.comp.outlined-card.outline.width` | 1dp | LENGTH | Outlined card outline width |
| `md.comp.outlined-card.container.shadow-color` | `md.sys.color.shadow` | COLOR | Outlined card container shadow color |
| `md.comp.outlined-card.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Outlined card focus state layer opacity |
| `md.comp.outlined-card.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined card focus state layer color |
| `md.comp.outlined-card.focus.outline.color` | `md.sys.color.on-surface` | COLOR | Outlined card focus outline color |
| `md.comp.outlined-card.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Outlined card hover state layer opacity |
| `md.comp.outlined-card.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined card hover state layer color |
| `md.comp.outlined-card.hover.outline.color` | `md.sys.color.outline-variant` | COLOR | Outlined card hover outline color |
| `md.comp.outlined-card.container.shape` | `md.sys.shape.corner.medium` | SHAPE | Outlined card container shape |
| `md.comp.outlined-card.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Outlined card container elevation |
| `md.comp.outlined-card.container.color` | `md.sys.color.surface` | COLOR | Outlined card container color |
| `md.comp.outlined-card.dragged.state-layer.opacity` | `md.sys.state.dragged.state-layer-opacity` | OPACITY | Outlined card dragged state layer opacity |
| `md.comp.outlined-card.dragged.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined card dragged state layer color |
| `md.comp.outlined-card.dragged.outline.color` | `md.sys.color.outline-variant` | COLOR | Outlined card dragged outline color |
| `md.comp.outlined-card.dragged.container.elevation` | `md.sys.elevation.level3` | ELEVATION | Outlined card dragged container elevation |
| `md.comp.outlined-card.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Outlined card pressed state layer opacity |
| `md.comp.outlined-card.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Outlined card pressed state layer color |
| `md.comp.outlined-card.pressed.outline.color` | `md.sys.color.outline-variant` | COLOR | Outlined card pressed outline color |


## Elevated card

![Diagram indicating elevated card container.](https://lh3.googleusercontent.com/E3Vi9qZnejfvkANGxN7TTmb5Utn3gzxXo8tbngvR9A83WXhpvV-mK_p9erAn4wBXMFmFRXpw2SmD7N-mIEq_5nOkXuKc8LOzoFXj6Oa8G1lv=s2048)

*Caption / Legend:*
1. Container

Default values (enabled state)

| Element | Design attribute | Role | Token |
| --- | --- | --- | --- |
| 1. Container | Color | Surface container low | [md.sys.color.surface-container-low](/m3/pages/using-color/tokens#7fd4440e-986d-443f-8b3a-4933bff16646) |
| Shadow color | Shadow | [md.sys.color.shadow](/m3/pages/using-color/tokens#7fd4440e-986d-443f-8b3a-4933bff16646) |  |
| Elevation | Level 1 | [md.sys.elevation.level1](/m3/pages/elevation/tokens) |  |

### Elevated card color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![Color diagram indicating elevated card surface color.](https://lh3.googleusercontent.com/gOvzxWalOCyRSRq6I8AqYgS6Y-XJlhBZ7VW82pxtb3dFUccU5LHnNcaccQ4BVnHcQflh6KOXqswxajoIj-v_9S6huJlw4kvNscb4UZN6Zb0=s2048)

*Caption / Legend:*
Elevated card color roles used for light and dark themes:

1. Surface container low

### Elevated card states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

![Diagram of 5 elevated card states.](https://lh3.googleusercontent.com/8OD9zWeF6hOtcHP-XQEqSVrCYSmtOFcwnb19h4zkqIDtpszCMXho0opgebc5B_ukqbsOiK-Q_iMQoDf1Iz94KTS5kg3zH3qXyF8Ki9kZAo0_=s2048)

*Caption / Legend:*
Elevated card states:

1. Hovered
2. Focused
3. Pressed
4. Dragged
5. Disabled

## Filled card

![Diagram indicating filled card container.](https://lh3.googleusercontent.com/RbaHdHqyYyeHjx_eq4Kbjc4e3WWtYoHRrwqEg2mnQUhLVLjtwyp3KtjjaHrV6kdyFRPu5O26lbeXiQwSA3kQSGeiiggAit3rHjrWhadLuwCU=s2048)

*Caption / Legend:*
1. Container

### Filled card color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![Color diagram indicating filled card surface color.](https://lh3.googleusercontent.com/28sRV5HrMfndGdrvcX_VHMHcm9rf_kk7W_LC3Jom8_R9rtsrEJAMjjPVT552KXBmxiaMKszeZ5QenLT1ejk3anom5NgsKHr-02mDyG4VEuzl=s2048)

*Caption / Legend:*
Filled card color roles used for light and dark themes:

1. Surface container highest

### Filled card states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

![Diagram of 5 filled card states.](https://lh3.googleusercontent.com/dyvw6FZH2BO4dAPsybP7VtJyu3dvPM_SK6YtHcXcFOSbUXx2KFiOganJcT29S4R85p3ZNem11PKaAFjRQLg4nGHjca0CLE2MF2N4t9vUn0E=s2048)

*Caption / Legend:*
Filled card states:

1. Hovered
2. Focused
3. Pressed
4. Dragged
5. Disabled

## Outlined card

![Diagram indicating outlined card container and outline.](https://lh3.googleusercontent.com/mwuwAzgNXs1xArEeUNQ5ayKXGbsLGzverYdD2EPiqL9Nk2EoZb5LEVop_RyeltCreY-py6o6B5Ry1lndyG6bQ-7p8AvUYtNNmlu1D10dwqSU=s2048)

*Caption / Legend:*
1. Container
2. Outline

### Outlined card color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![Outlined card color roles in light and dark themes.](https://lh3.googleusercontent.com/X8jbeHzsvv736FiatKGB2IOlsdiGVljvmrVCHUTgi0Au8RPx_aVvF1UMhbbjcAu--WnKD3LAWI4hLZiLmW9Q4oO0BkuSR4HpsAmpqleifMA=s2048)

*Caption / Legend:*
Outlined card color roles used for light and dark themes:

1. Surface
2. Outline variant

### Outlined card states

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states)

![Diagram of 5 outlined card states.](https://lh3.googleusercontent.com/knnDmfc6SIH-85gkuLOhQRHJhvHpPRGu_OzMgaQMMtDnloC-fCR1jJl1PGG0AP72kt6sqmBKlZgIbQ80HKeubSnxa5_zUOYcA0-Ip1hiQV4=s2048)

*Caption / Legend:*
Outlined card states:

1. Hovered
2. Focused
3. Pressed
4. Dragged
5. Disabled

## Measurements

![Diagram with card layout measurements.](https://lh3.googleusercontent.com/el_YhKWDFNMsVV51gm6oChPgPeNh4NiZU7_jdajUv38w5rT3nVlzDXfArepuPH38d1er7SCslFJyrf-KaBtIap102w7_CFnOj_BVu43S-ds=s2048)

*Caption / Legend:*
Card padding and size measurements

| Attribute | Value |
| --- | --- |
| Shape | 12dp corner radius |
| Left/right padding | 16dp |
| Padding between cards | 8dp max |
| Label text alignment | Start-aligned |

## Guidelines

![3 variants of cards: elevated, filled, and outlined.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujy207-1.png?alt=media)

## Usage

Use a card to display content and actions on a single topic.

Cards should be easy to scan for relevant and actionable information.

Elements like text and images should be placed on cards in a way that clearly indicates hierarchy.

![Example card containing an image, title, text, and button.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujyk5p-2.png?alt=media)

*Caption / Legend:*
Cards can display content and actions on a single topic

Cards can serve as entry points into deeper levels of detail or navigation, such as a music album or details on an upcoming vacation.

![Example world tour card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujz8zw-3.png?alt=media)

*Caption / Legend:*
Card text and image show a clear hierarchy

![Card displaying connected details about a world tour.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwujzmmd-4.png?alt=media)

*Caption / Legend:*
Use cards to display related information on a single subject

Cards can be displayed together in a grid, vertical list, or carousel.

![4 cards together in a grid layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk08jk-5.png?alt=media)

*Caption / Legend:*
Cards can be shown together

![5 albums in a vertical list of cards.  ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk0pob-6.png?alt=media)

*Caption / Legend:*
Don't force content into cards when spacing, headlines, or dividers would create a simpler visual hierarchy

There are three card variants:

- Elevated
- Filled
- Outlined

Each provides the same legibility and functionality, so the variant you use depends on style alone.

![3 variants of cards.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk16p3-7.png?alt=media)

*Caption / Legend:*
1. Elevated card
2. Filled card
3. Outlined card

![Example elevated card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk25nc-8.png?alt=media)

*Caption / Legend:*
Elevated cards have a drop shadow, providing more separation from the background than filled cards, but less than outlined cards

![Example filled card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk2m44-9.png?alt=media)

*Caption / Legend:*
Filled cards provide subtle separation from the background. This has less emphasis than elevated or outlined cards.

![Example outlined card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk337j-10.png?alt=media)

*Caption / Legend:*
Outlined cards have a visual boundary around the container. This can provide greater emphasis than the other variants.

## Anatomy

The card container is the only required element in a card. Card layouts can vary to support the kinds of content they contain. Below is a common configuration of elements.

![Diagram labeling the 6 parts of card anatomy.](https://lh3.googleusercontent.com/-eiTnWJl-s5HUIjPs1tfHU9HJp4izquC1-CiHPmdGA3Eq1YAw82dWNDHWYoQN1aUiXKSQm1jkq8uHW8i2aR_xg8kUxVMmHW-tyV93R8gmc0=s2048)

*Caption / Legend:*
1. Container
2. Image
3. Button
4. Supporting text
5. Subhead
6. Headline

### Container

Card containers hold all card elements. Their size is determined by the space those elements occupy. Card elevation is expressed by the container.

The card container is the only required element of a card. All other elements are optional.

![3 card containers with various elements: 1 with all elements except a button. 1 with a container, headline, supporting text, button. 1 with a container, headline, supporting text, 2 buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk4ddn-12.png?alt=media)

*Caption / Legend:*
Card size is determined by the elements it contains

### Content blocks

Card contents are grouped into blocks. Content can have different levels of visual emphasis depending on importance.

Card layouts vary to support the kinds of content they contain.

![Diagram of card content blocks.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk4w24-13.png?alt=media)

*Caption / Legend:*
Cards can contain a headline, subhead, supporting text, media, and actions

### Dividers

[Dividers](/m3/pages/divider/specs) can separate regions in cards or indicate areas of a card that can expand.

![A divider running the entire width of the card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk5dl8-14.png?alt=media)

*Caption / Legend:*
1. Use full-width dividers for content that can be expanded

![An inset divider indented from the edge of card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk5r9g-15.png?alt=media)

*Caption / Legend:*
1. Use inset dividers, which don’t run the full width of a card, to separate related content

### Media

**Thumbnail**
Cards can include thumbnails for an avatar or logo.

**Image**
Cards can include photos, illustrations, and other graphics, such as weather icons.

**Video**
Cards can include video.

![A mobile chat app with: 5 cards with images, 1 card with a thumbnail avatar, and 1 card with a video. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuk7ixf-16.png?alt=media)

*Caption / Legend:*
Cards can contain thumbnails, images, and video

### Text

**Headline**
Headline text often communicates the subject of the card, such as the name of a photo album or article.

**Subhead**
Subheads are smaller text elements, such as an article byline or a tagged location.

**Supporting text**
Supporting text includes body content, such as an article summary or a restaurant description.

![card container with several elementsA tablet email app with an email summary card with multiple text elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukrum6-17.png?alt=media)

*Caption / Legend:*
Headline, subhead, and supporting text in a card

#### Layering text, icons, and images

It isn’t recommended to place text or icons on images. If it’s necessary, ensure the background image provides sufficient contrast for the text to meet accessibility standards.

Add a translucent scrim or bounding shape beneath the text or icon to help ensure proper contrast.

![Layered text contrasts with the background image.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuke2rr-18.png?alt=media)

*Caption / Legend:*
Ensure that text on images meets accessible contrast standards

![Icon within a bounding shape, placed on an image.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukejwa-19.png?alt=media)

*Caption / Legend:*
When placing text or icons on images, consider using a bounding shape to ensure proper contrast

### Actions

#### **Primary action area**

Cards can be one large touch target triggering an expanded detail screen.

![The action area of a card contains rich media and supporting text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukf67i-20.png?alt=media)

*Caption / Legend:*
Cards can include a primary action area that expands into a full-screen view

**Buttons**
Cards can include buttons for actions such as **Learn more** or **Add to cart**.

**Icon buttons**
Cards can include icon buttons for actions such as **Save**, **Heart**, or **Leave a 4-star review**.

**Selection controls**
Cards can also include chips, sliders, checkboxes, and other selection controls.

**Linked text**
There can be a link in the supporting text on a card.

![Supplemental text and actions at the top and bottom of the card.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukfjtw-21.png?alt=media)

*Caption / Legend:*
Cards can include multiple action areas containing buttons, links, and other controls

![Album card with an option to give a star rating.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukg62l-22.png?alt=media)

*Caption / Legend:*
Cards can contain icon buttons like stars to rate content

![Card to purchase tickets with choice chips for 3 event times.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukgix5-23.png?alt=media)

*Caption / Legend:*
Cards can contain choice chips in the action area

![Card with slider to control a song’s volume.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukgu3i-24.png?alt=media)

*Caption / Legend:*
Cards can contain a slider control in the action area

**Overflow menu**
Overflow menus contain related actions. They are typically placed in the upper-right or lower-right corner of a card.

![2 cards: 1 with an overflow menu in the upper-right corner, the other with it in the lower right.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukh83p-25.png?alt=media)

*Caption / Legend:*
Overflow menus are usually located in the upper-right or lower-right corner of a card

## Cards in a collection

Multiple cards can be grouped together into collections displayed in a grid, list, or carousel.

By default, cards in a collection are coplanar. They share the same resting elevation unless they're picked up or dragged.

![9 cards in a grid layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukhv18-26.png?alt=media)

*Caption / Legend:*
Multiple cards can be grouped into collections with a shared resting elevation

#### Filtering and sorting

Card collections can be filtered in a variety of ways, including by date or alphabetical order. If a collection can be filtered, the filter must apply to each card in the collection.

Filter or sorting options should be placed outside of the card collection.

![A sort-by-date option placed above a card collection.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukig38-27.png?alt=media)

*Caption / Legend:*
Card collections can be filtered in a variety of ways, including by date:
1. A sort-by-date option is placed outside of the card collection

Organize card collections so that they'e easy to use. Their layout affects how they are perceived.

![A template for an 8-card collection layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukiwuu-28.png?alt=media)

*Caption / Legend:*
Place cards in a collection in a straightforward, easy-to-use manner

### Grid

Cards can be displayed together in a grid.

The default grid can be customized in code to show cards in staggered or mosaic grids.

![5 menu item cards in a mosaic grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukjfiq-30.png?alt=media)

*Caption / Legend:*
Custom mosaic grid

![4 menu item cards in a staggered grid.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukk75c-31.png?alt=media)

*Caption / Legend:*
Custom staggered grid

### Vertical list

Cards can be displayed together in a vertical list.

### Carousel

Cards can be displayed together in a horizontal row or carousel.

## Adaptive design

As cards scale to adapt to different [breakpoints](/m3/pages/breakpoints), their position and alignment can also change.

Cards and their elements can align left, right, or center as the layout scales.

![2 cards on a mobile screen row expand to 4 cards on a tablet screen row. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukkvy8-34.png?alt=media)

*Caption / Legend:*
Card position and alignment changes as the screen size changes

### Ergonomics

Adjust the layout of cards to meet the ergonomic needs of large screens. 

For example, a horizontally-oriented card in a compact breakpoint may become a larger, vertically-oriented card in an expanded breakpoint, with more space for images and text on the larger screen.

![Card sizes change from mobile to tablet, with larger images in the tablet layout.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuklb57-35.png?alt=media)

*Caption / Legend:*
Adjust the card layout so content remains the main focus on large screens

### Visual presentation

To adjust the presentation of content-focused components, begin with spacing.

Allow components like lists, cards, and images to optimize space while filling the region of a screen that suits a device breakpoint’s ergonomic needs.

![2 cards with optimized space: 1 narrow rectangle, 1 wide square.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukluzj-36.png?alt=media)

*Caption / Legend:*
Spacing adjusts for components such as cards, lists, and images

![2 examples of the same card: 1 vertical with an image at the top, 1 horizontal with an image on the left.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukmfqz-37.png?alt=media)

*Caption / Legend:*
Example of the same card with two different orientations and element positioning

### Column-based layouts

In mobile layouts, components such as lists or cards are stretched to fit the full width of the screen without compromising visual quality or user experience. When designing for large screens with an expanded breakpoint, use multiple columns to display content.

Avoid extending UI elements across the screen when possible. On larger screens, rearrange groups of related cards into horizontal rows or carousels, to allow for better content organization.

![3 related cards in a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwukn6ma-38.png?alt=media)

*Caption / Legend:*
When designing for large screens, use multiple columns to display content

### Small screens

On smaller screens with the compact breakpoint, consider swapping cards for lists, which can display images and text in a more compact form.

Make sure that controls, actions, and other component-specific elements are maintained.

## Behavior

### Expanding

Cards can use a [container transform](/m3/pages/motion-transitions/transition-patterns#b67cba74-6240-4663-a423-d537b6d21187) transition pattern to reveal additional content. Reserve this pattern for hero moments that are meant to be expressive.

### Navigation

Cards can use a [forward and backward](/m3/pages/motion-transitions/transition-patterns#df9c7d76-1454-47f3-ad1c-268a31f58bad) transition pattern to navigate between screens at consecutive levels of hierarchy. This pattern has a simpler motion style compared to container transform, which makes it suitable for common navigation transitions.

### Gestures

#### Swipe

A swipe gesture can be performed on a single card at a time, anywhere on that card.

It can be used to:

- Dismiss a card
- Change the state of a card, such as flagging or archiving it

#### Pick up & move

The pick-up-and-move gesture allows users to move and reorder cards in a collection.

#### Scrolling

Card content that’s taller than the maximum card height is truncated and doesn’t scroll, but can be displayed by expanding the height of a card.  

A card can expand beyond the maximum height of the screen, in which case the card scrolls within the screen.

#### Scrolling on desktop

On a desktop device, card content can expand and scroll within a card.

## Accessibility

## Use cases

People should be able to do the following using assistive technology:

- Navigate to a card and the elements within a card
- Get appropriate feedback based on input type documented under [Interaction & style](/m3/pages/cards/accessibility#ce764d54-6b59-42db-807f-b3cb370eecdb)

## Interaction & style

A card can be a non-actionable container that holds actions like buttons and links, or it can be directly actionable without any buttons or links. This is to avoid stacking actionable elements. An action shouldn’t be placed on an actionable surface.

![2 possible card interaction behaviors.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuobzmz-1.png?alt=media)

*Caption / Legend:*
1. Non-actionable card with buttons
2. Directly actionable card with no buttons

### Touch

When a user taps on a directly actionable card, a touch ripple appears across the card, indicating feedback.

Non-actionable cards don’t ripple.

### Dragging and dismissing

To meet Material's accessibility standards, any dragging and swiping interactions need a single-pointer alternative, like selecting the same actions from a menu.

For example, tapping a card, or pressing and holding, should open a menu to change its position in a list. That menu could also contain an action to delete the card.

It isn’t recommended to place menus on top of the card on the draggable state. If doing so is necessary, ensure that the interaction can be completed.

![A menu over a card that doesn't totally obscure the card.](https://lh3.googleusercontent.com/UtnmXzj_hGKzI5R_xHaZroWQFz8QVFP84FZQS0iNVQIeJqE0-5q6CQGAszShyOylV59mHPIT3kyfXHFxAmJ34OD3CcE0yO1anFh0UoEwXXo=s1352)

*Caption / Legend:*
Ensure that the menu doesn't cover the card

### Cursor

When a directly actionable card is hovered, the hover state provides a visual cue to the person that the element is interactive. Non-actionable cards don’t have a hover state.

When a directly actionable card is clicked, a ripple appears, providing feedback.

### Keyboard

A focus indicator appears around actionable elements when tabbing through cards. This provides a visual cue to a person that the destination is now focused and an action can be taken.

A person can **Tab** to navigate between actionable elements of the cards. If the cards are non-actionable, **Tab** navigates directly to the actionable buttons or links within the cards.

When engaging with a focused actionable card or element using the **Space** or **Enter** key, an action is performed or a secondary action is available, such as a menu.

Within the menu, a person is able to **Arrow** through the menu items, **Space** or **Enter** to select an item, or **Tab** to exit.

## Focus

All interactive elements of cards need a tab stop so they can be focused. Directly actionable cards are tab stops.

For non-actionable cards, the card itself is not a tab stop. However, every actionable element in the card is a tab stop so they’re all visited before focus navigates to the next card.

![The focus areas of a card with interactive elements.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuodgu3-5.png?alt=media)

*Caption / Legend:*
Use **T****ab** to navigate through all buttons in a card

![Cards forming a list on mobile and cards forming a gallery on tablet.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuoeob6-6.png?alt=media)

*Caption / Legend:*
Card layouts can change on different devices

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab** | Move to the next actionable element **Directly actionable cards:** Move to next card container **Non-actionable cards with actionable elements:** Move to next actionable element |
| **Space** or **Enter** | Confirm action |

## Labeling elements

The informative contents of a card are verbalized when navigating to them using a screen reader. If an image in a card is purely decorative, hide it from screen readers. All actionable elements must receive both screen reader and keyboard focus.

Directly actionable cards can have the **button** or **link** role, depending on how they’re used.

Non-actionable cards are purely containers, so they don’t need a role.

![Card elements annotated in the order that a screen reader tabs through them.](https://lh3.googleusercontent.com/kRZc33v7W2dec-MuK-hHKuYiBNxg2bd94Nl5lLgVpvf6JgZqUcU41USNzujmZqRUy3FjNddyFflMj37GqpyDMartw2BuUumFsfwjSxepog_T=s1352)

*Caption / Legend:*
Non-actionable card elements are navigable, focused in order, and verbalized when in focus. In this example, the order is:

1. Heading
2. Image
3. Body text
4. Primary button
5. Secondary button

## Resources
