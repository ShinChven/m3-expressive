# Badges

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/badges](https://m3.material.io/components/badges)
> Last Updated: 2026-07-17T06:58:42.753Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Can contain labels or numbers
- Two variants: small and large
- Anchor badges inside the icon bounding box, at the upper trailing edge of the icon
- Limit content to four characters, including a **+**
- Keep the default color mapping

![3 icons with badges. 1 is a small dot. 2 is a larger circle with a 1 digit number. 3 is an oval with a 4 digit number.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hopxl-01.png?alt=media)

*Caption / Legend:*
1. Small badge on a navigation item
2. Large badge on a navigation item
3. Large badge with max characters on a navigation item

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color

![Navigation bar showing 4 icons with different badge variants in a bright red color.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8hz0r2-02.png?alt=media)

*Caption / Legend:*
Badges have new color mappings

## Specs

![5 aspects of badge anatomy on a navigation bar.](https://lh3.googleusercontent.com/1c2wjkW2_C9l1HmNkRT8GpeQ7WqSDcJdMKdNym4xk_wPBfFSgVP3NhSXBwBV52vI3L-Z7CAmnY7c-1WM1I9xfyj4EfI_ucXRgOhWSRvfLy5E=s1004)

*Caption / Legend:*
Navigation bar

1. Small badge
2. Large badge container
3. Large badge label
4. Large badge maximum character count container
5. Large badge maximum character count label

![5 aspects of badge anatomy on a navigation rail.](https://lh3.googleusercontent.com/9yjKmecr7ZJh2Tm71DBDcwftLy2cMEpCW2yl73CCr7kUctUtmKaW78yFdO-0ZUSBXShJh9CDLZtQhcOyVt9CmdNhywVGvneguYneZMeui26j=s1004)

*Caption / Legend:*
Navigation rail

1. Small badge
2. Large badge container
3. Large badge label
4. Large badge maximum character count container
5. Large badge maximum character count label

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

#### Design Tokens: Badges

*For badges.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.badge.large.label-text.type` | - | TYPOGRAPHY | Badge large label text type |
| `md.comp.badge.large.label-text.font` | `md.sys.typescale.label-small.font` | FONT_NAMES | Badge large label text font |
| `md.comp.badge.large.label-text.weight` | `md.sys.typescale.label-small.weight` | FONT_WEIGHT | Badge large label text weight |
| `md.comp.badge.large.label-text.size` | `md.sys.typescale.label-small.size` | FONT_SIZE | Badge large label text size |
| `md.comp.badge.large.label-text.line-height` | `md.sys.typescale.label-small.line-height` | LINE_HEIGHT | Badge large label text line height |
| `md.comp.badge.large.label-text.tracking` | `md.sys.typescale.label-small.tracking` | FONT_TRACKING | Badge large label text tracking |
| `md.comp.badge.large.label-text.color` | `md.sys.color.on-error` | COLOR | Badge large label text color |
| `md.comp.badge.large.size` | 16dp | LENGTH | Badge large size |
| `md.comp.badge.large.shape` | `md.sys.shape.corner.full` | SHAPE | Badge large shape |
| `md.comp.badge.large.color` | `md.sys.color.error` | COLOR | Badge large color |
| `md.comp.badge.size` | 6dp | LENGTH | Badge size |
| `md.comp.badge.shape` | `md.sys.shape.corner.full` | SHAPE | Badge shape |
| `md.comp.badge.color` | `md.sys.color.error` | COLOR | Badge color |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview)

![5 applications of badge color on light and dark theme navigation bars.](https://lh3.googleusercontent.com/GXqQAaWohBPLwvJAZUGaxFwy8CI_R4BLcAXPDq-e4P67CObmbEHL-GzwJbo6hBOmuqFuoV8QrPMXhmL2Zfca9_o5bTyMbxGhVxeM1Fwf7KU=s1004)

*Caption / Legend:*
Badge color roles used for light and dark schemes in navigation bar:

1. Error
2. Error
3. On error
4. On error
5. Error

![5 applications of badge color on light and dark theme navigation rails.](https://lh3.googleusercontent.com/8-bcqHO-CggN9L5OTiWVxPDT-wPzcurO0xXI7dZeo5htfXRjDwMnoMl_Qco9Z8NGG9CE2_5qrO2QdLV-nmieRVopeqNZeeHavE0GJqJpLRA=s1004)

*Caption / Legend:*
Badge color roles used for light and dark schemes in navigation rail:

1. Error
2. On error
3. Error
4. On error
5. Error

## Measurements

![Annotation of badge sizes, padding, and measurements from the corner of the icon to the badge opposite corner.](https://lh3.googleusercontent.com/_9tsQOYHX4YH6bQJJwi1ylkI-nu2RJBNb84ivjXE8ksTqqpuE4w-riSO17Sh2gclSOMxjzlDHS_B2zKmb7uBo3Y1ZBPiLWi6UoHlHOAK9Zw=s2048)

*Caption / Legend:*
Badge padding and size measurements

| Attribute | Value |
| --- | --- |
| Small badge shape | 3dp corner radius |
| Small badge size (HxW) | 6dp |
| Large badge shape | 8dp corner radius |
| Large badge one digit size (HxW) | 16dp |
| Large badge max character count size (HxW) | 16x34dp |
| Small badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 6x6dp |
| Large badge: distance from top trailing icon corner to bottom leading badge corner (HxW) | 14x12dp |
| Large badge padding between badge and text container | 4dp |

## Configuration

Different badges are shown on navigation destinations in various states.

![Diagram of 3 badge variations shown on navigation destinations in various states.](https://lh3.googleusercontent.com/dmnjAmE1Ol38Ijd8REgLVSvLNv733cEX_WngU88yFKfiKjSdwanYmhHnCGueyMQAzJRxRMrvdgtC2KPaNzyG_B4Rn3ptMP-22440icqyFFKmFA=s2048)

1. Inactive with label - small badge
2. Inactive with label - large badge
3. Inactive with label - large badge max character count
4. Inactive - small badge
5. Inactive - large badge
6. Inactive - large badge max character count
7. Active with label - small badge
8. Active with label - large badge
9. Active with label - large badge max character count
10. Active nav bar no label - small badge
11. Active nav bar no label - large badge
12. Active nav bar no label - large badge max character count
13. Active nav rail no label - small badge
14. Active nav rail no label - large badge
15. Active nav rail no label - large badge max character count

## Guidelines

![Diagram of 4 badges in different configurations on a navigation bar's destination icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wmkr4-01.png?alt=media)

*Caption / Legend:*
Large badges and a small badge in a navigation bar

## Usage

Badges are used to indicate a notification, item count, or other information relating to a navigation destination. They are placed on the ending edge of icons, typically within other components.

There are two variants:

1. Small badge
2. Large badge

![Diagram of 4 badges in different configurations on a navigation bar's destination icons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wmphl-02.png?alt=media)

*Caption / Legend:*
Navigation bar with four badges

A **small badge** is a simple circle, used to indicate an unread notification.

A **large badge** contains label text communicating item count information.

![A small badge is a circle with no characters.](https://lh3.googleusercontent.com/Xnibw8kAnTzaV0TmLVU5oOfL5xZTO6E8gxqFFo843YlClRZ3TI3eTR7cGtDL76c7_3oQ6xVKU3l7NV0PxnLeYgRw3ATNSz91ytruFjCWBNSIhw=s656)

*Caption / Legend:*
Small badge

![A large badge holds 4 characters and expands its container's width but not height.](https://lh3.googleusercontent.com/UiES3FVbu4QTgh3y8L-WfQz6q2u2ao86ZpjIGDu6CxAIgDLxmu7zM-RC33uLQPuDaUJtgI1qqck8tM_bdeOfiZYNPg-PBiIsJD-7QV6gyc3a=s656)

*Caption / Legend:*
Large badge

### With other components

Badges are most commonly used within other components, such as navigation bar, navigation rail, app bars, and tabs.

![Navigation bar with 3 icon buttons. 2 icons buttons have badges and 1 doesn't. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvm8dp3k-5.png?alt=media)

*Caption / Legend:*
In navigation bars, hide the badge once the destination has been selected

## Anatomy

![Small and large badges on 2 icon buttons.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvm8fkil-7.png?alt=media)

*Caption / Legend:*
1. Small badge
2. Large badge container
3. Large badge label

## Container

There are two container options for the badge:

- Small badge with no text
- Large badge with text

![A small badge on a navigation item. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0womos-07.png?alt=media)

*Caption / Legend:*
A small badge uses only shape to indicate a status change or new notification

![Number 10 displayed within large badge on a navigation item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8jybps-08.png?alt=media)

*Caption / Legend:*
A large badge displays a number within a container to indicate a quantifiable status change related to a destination

Badge containers are anchored inside the icon bounding box. As the number count increases for large badges, their width expands, but keeps the same placement.

Badges use a color intended to stand out against labels, icons, and navigation elements. Use the default color mapping to avoid color conflict issues.

![Small and large badges on the left side of 2 navigation items in a right-to-left language.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8k2962-9-do.png?alt=media)

*Caption / Legend:*
Change the position of the badge for right-to-left languages

![Small and large badges at random positions on 3 icon buttons on a navigation rail.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8k2vet-10-dont.png?alt=media)

*Caption / Legend:*
Badges have fixed positions. Don’t change the position of the badge arbitrarily or place the badge over the icon.

![Small and large badges in default red color on 3 navigation items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wr0gz-11_do.png?alt=media)

*Caption / Legend:*
Use the default badge color

![Small and large badges in custom colors on 3 navigation items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wr4mw-12_dont.png?alt=media)

*Caption / Legend:*
Avoid using custom color roles for the badge container and label text. If custom roles are necessary, make sure they have contrast of at least 3:1.

### Label text

Label large badges with counts or a status. The maximum number of characters within large badge label text is four, including a + to indicate more.

![4 icons with increasing number badges. The badges represent quantities, using a "+" symbol for quantities over 999.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8ks60f-13.png?alt=media)

*Caption / Legend:*
Large badges with one to four characters

Use the recommended maximum character count to ensure labels don’t extend beyond the badge container.

![4-digit numbers condensed to a 3-digit badge with "+" to fit the badge container's width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wrqi2-14_do.png?alt=media)

*Caption / Legend:*
Truncate badge labels as needed

![4-digit and 5-digit number badges on navigation items exceed the badge container's width and get cut off at the edge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wru4w-15_dont.png?alt=media)

*Caption / Legend:*
Don’t let the badge get cut off or collide with another element

## Placement

![Large badge to the right of a navigation rail item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0wsl1o-16_do.png?alt=media)

*Caption / Legend:*
Use a large badge to show count information when visual collisions aren’t an issue, such as in a navigation rail

![Small badge on an icon button in an app bar.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8kxkle-17_caution.png?alt=media)

*Caption / Legend:*
Use a small badge when spaces are tightly constrained, such as app bars. Small badges won’t run into the edge of the screen.

![Large badge placed at the end of a tab.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8kyp7i-18_do.png?alt=media)

*Caption / Legend:*
When an icon with a badge is followed by text or another element, place a large badge at the trailing edge

![Large badge overlapping the icon and text in a tab.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8kzbcm-19_dont.png?alt=media)

*Caption / Legend:*
Avoid using a large badge when it might overlap with a trailing element. Either place it at the trailing edge or use a small badge instead.

## Accessibility

## Use cases

People should be able to use assistive technology to:

- Understand the dynamic information conveyed in badges, such as counts or labels
- Address badge announcements by selecting corresponding navigation destinations

## Interaction & style

Badges are most commonly used within other components, such as navigation bar, navigation rail, app bars, and tabs.

When a badge is used to indicate an unread notification, the badge gets hidden once it's selected.

## Visual indicators

Badges use a color intended to stand out against labels, icons, and navigation elements. Use the default color mapping to avoid color conflict issues.

![Diagram of large and small badges showing that they need to pass 3 to 1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0x2h51-02_do.png?alt=media)

*Caption / Legend:*
Badges must use default color with at least 3:1 contrast

![Diagram of large and small badges not passing 3 to 1 contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmg0x2kti-03_dont.png?alt=media)

*Caption / Legend:*
Avoid using custom color roles for the badge container and label text. If custom roles are necessary, make sure they have contrast of at least 3:1.

## Labeling elements

The accessibility label for a badge item will be read after its navigation destination. Any numerical badges will have their number read, while non-counting badges will simply announce **New notification**.

![Navigation bar highlighting numerical badge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8l8lhl-04.png?alt=media)

*Caption / Legend:*
Numerical badges will have their number read

![Navigation bar highlighting non-counting badge.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fme8l9na6-05.png?alt=media)

*Caption / Legend:*
Non-counting badges will simply announce **New notification**
