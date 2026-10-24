# Carousel

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/carousel](https://m3.material.io/components/carousel)
> Last Updated: 2026-08-18T17:48:11.944Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Contain visual items like images or video, along with optional label text
- Six layouts: Multi-browse, uncontained, uncontained multi-aspect ratio, hero, center-aligned hero and full-screen
- Layouts can be start-aligned or center-aligned
- Item visuals have a parallax effect when scrolled
- Items change size as they move through the carousel

## Availability & resources

## Updates

**November 2025**

New carousel layout:

- Uncontained multi-aspect ratio

**2023 **

Additional layouts and configurations:

- Uncontained
- Full-screen
- Centered carousels
- Hero carousel layout
- Multi-browse layout

![Items of different widths in an uncontained multi-aspect ratio layout.](https://lh3.googleusercontent.com/fVj4DyPx6HxKN7gxkVrxReCeNppE22Favi2407XaDtWc5AiUxr-xvwqelWFXfRaQ2AayTCiBEwL06duEvTEptd1dEt1FWREyAV1d_2kMAf-MHQ=s1352)

*Caption / Legend:*
New carousel layout: uncontained multi-aspect ratio

## Differences from M2

This component is new in Material 3.

- **Shape**: Dynamic carousel items change shape when scrolled
- **Motion**: Carousel items move at a different speed than their content, creating a parallax effect
- **Interaction**: When scrolled, carousel items snap into place to maintain the same layout. Hero carousels swipe through one item at a time. Multi-browse carousels scroll through many items at once.

![Carousel in a contained layout with a large item and a small item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwur4ddz-3.png?alt=media)

*Caption / Legend:*
Hero carousels scroll through one large item at a time

## Research

The Material Research Team conducted two studies (quantitative and qualitative) with over 200 participants to understand their perspectives of five different carousel designs. The studies measured their understanding of how to interact with each carousel, their expectations of the number of items in each design, and how they expected carousels to be used.

**Summary of findings:**

- Participants thought carousels were a good way to explore many different kinds of content
- A previewed or squished item strongly indicated that there was more content to swipe through
- Participants expected around 10 items in a carousel that scrolled multiple items at once
- While some contexts were considered better for some carousel designs, all designs were considered similarly usable

## Specs

![4 elements of a carousel.](https://lh3.googleusercontent.com/Bfe7F5i-YHBu3MctH6XdfsSYD1VNZVWrAC2hTpG-vOuHgn1-npiiivwifJe1ddHkbRZxlXtKJuq0GV9ScQUHvelSAEkjsMkWnAUznOdSjSPG=s2048)

*Caption / Legend:*
1. Container
2. Large carousel item
3. Medium carousel item
4. Small carousel item

## Tokens & specs

Browse the component elements, attributes, tokens, and their values.

#### Design Tokens: Carousel item

*For carousel items.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.carousel-item.focus.indicator.outline.offset` | `md.sys.state.focus-indicator.outer-offset` | LENGTH | Carousel focus indicator offset |
| `md.comp.carousel-item.focus.indicator.thickness` | `md.sys.state.focus-indicator.thickness` | LENGTH | Carousel item focus indicator thickness |
| `md.comp.carousel-item.focus.indicator.color` | `md.sys.color.secondary` | COLOR | Carousel item focus indicator color |
| `md.comp.carousel-item.container.surface-tint-layer.color` | `md.sys.color.surface-tint` | COLOR | Carousel item container surface tint layer color |
| `md.comp.carousel-item.with-outline.disabled.outline.opacity` | - | OPACITY | Carousel item disabled outline opacity |
| `md.comp.carousel-item.with-outline.disabled.outline.color` | `md.sys.color.outline` | COLOR | Carousel item disabled outline color |
| `md.comp.carousel-item.with-outline.pressed.outline.color` | `md.sys.color.outline` | COLOR | Carousel item pressed outline color |
| `md.comp.carousel-item.with-outline.focus.outline.color` | `md.sys.color.on-surface` | COLOR | Carousel item focus outline color |
| `md.comp.carousel-item.with-outline.outline.color` | `md.sys.color.outline` | COLOR | Carousel item outline color |
| `md.comp.carousel-item.with-outline.outline.width` | - | ELEVATION | Carousel item outline width |
| `md.comp.carousel-item.with-outline.hover.outline.color` | `md.sys.color.outline` | COLOR | Carousel item hover outline color |
| `md.comp.carousel-item.container.shape` | `md.sys.shape.corner.extra-large` | SHAPE | Carousel item container shape |
| `md.comp.carousel-item.container.shadow-color` | `md.sys.color.shadow` | COLOR | Carousel item container shadow color |
| `md.comp.carousel-item.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Carousel item container elevation |
| `md.comp.carousel-item.container.color` | `md.sys.color.surface` | COLOR | Carousel item container color |
| `md.comp.carousel-item.hover.state-layer.color` | `md.sys.color.on-surface` | COLOR | Carousel item hover state layer color |
| `md.comp.carousel-item.hover.state-layer.opacity` | `md.sys.state.hover.state-layer-opacity` | OPACITY | Carousel item hover state layer opacity |
| `md.comp.carousel-item.hover.container.elevation` | `md.sys.elevation.level1` | ELEVATION | Carousel item hover container elevation |
| `md.comp.carousel-item.focus.state-layer.color` | `md.sys.color.on-surface` | COLOR | Carousel item focus state layer color |
| `md.comp.carousel-item.focus.state-layer.opacity` | `md.sys.state.focus.state-layer-opacity` | OPACITY | Carousel item focus state layer opacity |
| `md.comp.carousel-item.focus.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Carousel item focus container elevation |
| `md.comp.carousel-item.pressed.state-layer.opacity` | `md.sys.state.pressed.state-layer-opacity` | OPACITY | Carousel item pressed state layer opacity |
| `md.comp.carousel-item.pressed.state-layer.color` | `md.sys.color.on-surface` | COLOR | Carousel item pressed state layer color |
| `md.comp.carousel-item.pressed.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Carousel item pressed container elevation |
| `md.comp.carousel-item.disabled.container.elevation` | `md.sys.elevation.level0` | ELEVATION | Carousel item disabled container elevation |
| `md.comp.carousel-item.disabled.container.color` | `md.sys.color.surface` | COLOR | Carousel item disabled container color |
| `md.comp.carousel-item.disabled.container.opacity` | - | OPACITY | Carousel item disabled container opacity |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/)

![2 color roles of a carousel.](https://lh3.googleusercontent.com/Mzrpy7os0Evw3KGIkxaFfkon8IgFJgpyqGgYD2DIMMbywuPHponDXt8yaG9F6u0lJAhluoYHtJE1Sv2KYym2NJiXYSBSqOT6pMFsQMCdXZF77w=s2048)

*Caption / Legend:*
Carousel color roles used for light and dark schemes:

1. Container
2. Surface

## States

States are visual representations used to communicate the status of a component or interactive element. [Learn more about interaction states](/m3/pages/interaction-states/overview)

![5 states of a carousel in light and dark schemes.](https://lh3.googleusercontent.com/D7QutV1hQsVv50Nbn-UkT_BAJ4JRYAHLcohN50l4y2t5BDjn0pSq5jHk29phmxHU4H-UZszf7UaQoCPDkjWvVki1t4vlhxzzHfBL9vabMqo=s2048)

*Caption / Legend:*
1. Enabled
2. Hovered
3. Focused
4. Pressed
5. Disabled

## Carousel item dynamic widths

All kinds of carousel items dynamically adapt to the width of the container.

Large items have a customizable maximum width that's used to optimally fit carousel items into the available space.

Small carousel items have a minimum width of 40dp and a maximum width of 56dp.

Items change size as they move through the carousel layout.

![Measurements for a small carousel item.](https://lh3.googleusercontent.com/l_O_4sY-OWT2K7Ot5jY_yhXxSErGV6Cu33URxwXPnt8D6oTDXh3oWlg5utAL2Iw0afdYNvkjpYZzLlsXjeONHtFJIqbO4dCEZO2xTzUvChjV=s1352)

*Caption / Legend:*
Small carousel items have a minimum and maximum width

## Multi-browse

The multi-browse layout shows at least one large, medium, and small carousel item.

![4 elements of a multi-browse carousel layout.](https://lh3.googleusercontent.com/evx3sPQvpKArdG4MTkQQCOFPM387eGsABK9x_Ecv_LeJy23RGxJyVZU50_GThcTacMUgP5tuLoPOXRwk3s0QZgpKmJpiEj8pG_kZaAgertAC=s2048)

*Caption / Legend:*
1. Container
2. Large carousel item
3. Medium carousel item
4. Small carousel item

### Measurements

![Measurements of a multi-browse carousel layout.](https://lh3.googleusercontent.com/Py7GKPNbLAGSs7Zx0w19v21_MWZgZSX5ztGYvSQ8bDM4DeZ-ilsU5Ra3bR2_24qAgkiEn8j7dTfdKO7YGmz8Jfd-cFR80M3rtWzzDt3nwUHtaQ=s2048)

*Caption / Legend:*
Multi-browse carousels have padding on both sides of the container

| Attribute | Value |
| --- | --- |
| Alignment | Vertically centered |
| Leading/trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic, or user-set |
| Medium item width | Dynamic |
| Small item width | 40–56dp, dynamic |
| Item corner radius | 28dp |

## Uncontained

The uncontained layout shows items that scroll to the edge of the container.

![4 elements of an uncontained carousel layout.](https://lh3.googleusercontent.com/p9Q_QbNpwi3QeDBOCZ64MWO3Vm83NIV7SFc6IqJ7BPGlsGidp5FJdTOq4yVq6zCZkqkSf03SLJ2pSEU4vrj7udhaxrBi10bGrtfAWev8AZWU=s2048)

*Caption / Legend:*
1. Container
2. Large carousel item

### Measurements

![Measurements of an uncontained carousel layout.](https://lh3.googleusercontent.com/kHmHj0O9aT5Nlb2KyOQq6CWd8sRWmGjzg3TMKEzoHQLd9OG08KSdrH7g3vUxMkGebXOb17s3kAT6fh16dVWyzKDJrBkuFIedIZpi3H1rGBmtbg=s2048)

*Caption / Legend:*
Uncontained carousel items bleed over the padding on each side when scrolling

| Attribute | Value |
| --- | --- |
| Alignment | Vertically centered |
| Leading padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Item corner radius | 28dp |

## Uncontained mutli-aspect ratio

The uncontained multi-aspect ratio layout shows carousel items of various widths.

![4 elements of an uncontained carousel layout](https://lh3.googleusercontent.com/FM3l_rU4tOFqCVj-gmDwOG9zyWk279AI0tz5aHQa5hRW5v3P4cS3ydvtXKwZMy_ClxODMX76POePAuI9k_ZsvZfZt3yxWISoKWkbSQhmw1M=s2048)

*Caption / Legend:*
1. Container
2. Carousel item (16:9)
3. Carousel item (9:16)
4. Carousel item (1:1)
5. Carousel item (3:4)

### Measurements

![](https://lh3.googleusercontent.com/1SazYXoMFnNnFpmqXCe7pchjco1F_R03ws6GfweuJDv4cgafUAQ0l0P_8ELNDh-l8UEyycEhodtkGYJgG_s6Zn0GLzQ6IP4UwcSpCUW9O0N-=s2048)

*Caption / Legend:*
Uncontained multi-aspect ratio carousels only have leading padding, with 8dp of padding between items.

| Attribute | Value |
| --- | --- |
| Alignment | Vertically centered |
| Leading padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Item corner radius | 28dp |

## Hero

The hero layout shows at least one large item and one small item.

![3 elements of a hero carousel layout.](https://lh3.googleusercontent.com/I9ALEx4jwdluVMjRmR2zhTCFVHo3N05uccMHUOXxA1pAD-XMUdr9GNHJPfOT9mkNz862VyWH2ItNhseEOpdJsWv1RI-o6-sxxPuV4UG6coQdDg=s2048)

*Caption / Legend:*
1. Container
2. Large carousel item
3. Small carousel item

### Measurements

![Measurements of a hero carousel layout.](https://lh3.googleusercontent.com/LOm-yrGl6Hmuxn-eQ995_1ZlFqkd90so8hX-xPss8PWGCyXWDJECAupl-paVut_4taB6DVA7OENO39mxBfDAgXcPC_kZXCNlPTdnCQxBYZ4=s2048)

*Caption / Legend:*
Hero carousels have padding on both sides of the container

| Attribute | Value |
| --- | --- |
| Alignment | Vertically centered |
| Leading/Trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic |
| Small item width | 40-56dp, dynamic |
| Item corner radius | 28dp |

## Center-aligned hero

The center-aligned hero layout shows at least one large item and two small items.

![3 elements of a center-aligned hero carousel layout.](https://lh3.googleusercontent.com/4LmjbjezXxY7ctWR2bmLAa35m3No8ErHZO31L0jTLxRBc3ivUMC_DA5rDEEZRILu8VlJLE__deFfvXQxuvJ0hjhAuD4-MLc1D3RVqUF-7g=s2048)

*Caption / Legend:*
1. Container
2. Large carousel item
3. Small carousel item

### Measurements

![Measurements of a center-aligned hero carousel layout.](https://lh3.googleusercontent.com/SuFPyTcmkMVHYU4NubWqAMrraBaL0OAFzvUcuXPWlkmIsASj8fOjlwGNfNpl4LP9revB2iU8dc-oFBOXNlX3tfcFfD7ny6W2MrubF9hcGqH1=s2048)

*Caption / Legend:*
Center-aligned hero carousels have padding on both sides of the container

| Attribute | Value |
| --- | --- |
| Alignment | Vertically centered |
| Leading/Trailing padding | 16dp |
| Top/bottom padding | 8dp |
| Padding between elements | 8dp |
| Large item width | Dynamic |
| Small item width | 40-56dp, dynamic |
| Item corner radius | 28dp |

## Full-screen

The full-screen layout shows one edge-to-edge large item.

![2 elements of a full-screen carousel layout.](https://lh3.googleusercontent.com/bn-epGZhbTWJijBRurEco_OYDKB-s-DEYMJgCwj7OSBbLJMEm34yEZY1AaKy2gEKjnMCT--UTHHqR0IOGlwj2p8aaPNPW3zdAENXMy5BwpT0SA=s2048)

*Caption / Legend:*
1. Container
2. Large carousel item

### Measurements

![Measurements of a full-screen carousel layout.](https://lh3.googleusercontent.com/qo38AJlGFDaPzNKJX24tQG5PrvIQ_PRl0ZEmeh-7YE8FvikHGuh96N5ggGpDoOStYSzbhUAg0-36VmHVC9QmpqGifut7G4QG3G1RCtu13UKO=s2048)

*Caption / Legend:*
Full-screen carousels fill the window edge-to-edge

| Attribute | Value |
| --- | --- |
| Alignment | Centered |
| Leading/Trailing padding | 0dp |
| Top/bottom padding | 0dp |
| Padding between elements | 16dp |

## Guidelines

![Carousel items adapting dynamically to device size by shrinking and reducing in number.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusb1kq-1.png?alt=media)

*Caption / Legend:*
Carousel items adapt dynamically based on breakpoint

## Usage

Carousels display a scrollable list of items. Carousel items emphasize visuals, but can also contain brief text that adapts to the item size.

There are four carousel layouts:

- Multi-browse
- Uncontained
- Hero
- Full-screen

All of these layouts can be centered, though center-aligned hero is the most common centered carousel.

Carousels can scroll in two ways:

- **Default**: Standard scrolling. Recommended for uncontained layouts.
- **Snap-scrolling**: Scrolled items snap to the carousel's layout. Recommended for multi-browse, hero, and full-screen layouts

![Contained carousel with a large, medium, and small item. Text is hidden on the small item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusbuoo-2.png?alt=media)

*Caption / Legend:*
A carousel can contain different sized items

Choose the best carousel layout for your product. Some layouts are more visual-focused, while others are more customizable.

| Layout | Best used for |
| --- | --- |
| [Multi-browse](/m3/pages/carousel/guidelines#d95cefa4-53df-45e2-bbb2-3aeeecbe9639) | Browsing many visual items at once (like photos), dynamic designs |
| [Uncontained](/m3/pages/carousel/guidelines#96c5c157-fe5b-4ee3-a9b4-72bf8efab7e9) | Highly-customized or text-heavy carousels, stacked imaged and text, traditional carousel behavior |
| [Hero](/m3/pages/carousel/guidelines#5991f961-79aa-4955-b86e-3e15432108e6) | Spotlighting very large visual items (like a movie or featured app) |
| [Center-aligned hero ](/m3/pages/carousel/guidelines#a9f8dcde-e5c5-464f-b488-d9ded9ae4a4a) | Centered, large visual items |
| [Full-screen ](/m3/pages/carousel/guidelines#ae0f1566-a956-4c4b-b153-d50ee20c32e7) | Vertically-scrolling video or image feeds, immersive experiences |

Carousel items must be fully visible on-screen (except for the uncontained layout). When scrolled, items automatically change size and snap into place to maintain the same layout.

![Multi-browse carousel with all images and text easily legible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuscosc-3-do.png?alt=media)

*Caption / Legend:*
Set the large carousel item size to ensure the images and text are easy to read and recognize

![Multi-browse carousel with a very thin small item, making the image unrecognizable.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusd3wu-3-don't.png?alt=media)

*Caption / Legend:*
Avoid setting carousel items so small that the image isn't recognizable

### Accessibility requirements on scrolling pages

On vertically-scrolling pages, carousels require an accessible way to view all the items without horizontally scrolling. (This requirement doesn't apply to full-screen carousels.)

Material recommends adding a **Show all** button below the carousel, which opens a dedicated vertically-scrolling page of all carousel items.

If the carousel has a header, you can use an arrow icon button instead.

View the [accessibility tab](/m3/pages/carousel/accessibility) for more details and alternate solutions.

### Multi-browse

The multi-browse layout is best for browsing many items at once, like photos or event feeds. Snap-scrolling is recommended to ensure items are recognizable and consistently sized.

On larger screens, more large and medium items are visible in this layout.

Avoid using this layout if the carousel items need lots of text or have complicated imagery.

At compact breakpoints, only show up to three carousel items if they have text.

If you need to show more than three items, make sure the images and content are easy to understand and recognize.

![Carousel on a phone. 2 large, 1 medium, and 1 small item are fully visible but thin. The items don't have text.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusga4v-6.png?alt=media)

*Caption / Legend:*
At compact breakpoints, only show more than three items if the items are easy to understand and recognize

### Uncontained

The uncontained layout is most similar to a traditional carousel, where items are a single size and flow past the edge of the screen.

Both default scrolling and snap-scrolling work well with this layout.

Since items don't change size, this layout can be customized to show more text or other UI above or below each item without the text being masked or cropped.

### Uncontained multi-aspect ratio

The uncontained multi-aspect ratio carousel has the same layout as the uncontained carousel but contains items of various sizes.

Item widths can range anywhere between 9:16 for min width size to 16:9 for max width.

Only use this carousel layout if the items have various widths.

### Hero

The hero layout is best for spotlighting content that needs more attention, like movie, shows, or other media thumbnails. It highlights one large image to focus on, while providing a sneak peek of what’s next.

On larger screens, more large items are visible.

Use snap-scrolling so users can easily cycle through items one at a time.

### Center-aligned hero

When the hero layout is center-aligned, it adds an additional previewed item on the leading edge, making the large carousel item centered.

### Full-screen

The full-screen layout is best used for immersive experiences like video articles, featured headlines, or items that are visually rich. It can contain text and other UI elements on top of the image.

This layout works best with content that is taller than it is wide, and scrolls vertically. It only works in portrait orientation in compact and medium breakpoints. Don't use this layout in landscape orientation.

Use snap-scrolling for full-screen layouts. Don't use default scrolling.

## Anatomy

![4 elements of a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwushw0z-11.png?alt=media)

*Caption / Legend:*
Multi-browse carousel (left) and hero carousel (right):

1. Container
2. Large carousel item
3. Medium carousel item
4. Small carousel item

### Container

The carousel container holds all carousel items. The number of carousel items visible in the container can change based on the carousel layout and breakpoint.

![An empty rectangle representing a carousel container.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusikhn-12.png?alt=media)

*Caption / Legend:*
The carousel container is a rectangle. It can be used in many ways and stretched to any size.

### Carousel items

Carousel items hold content. A carousel item has no fixed width; it changes width depending on the breakpoint or its position in the carousel's layout. There are three dynamic widths an item can be: **large**, **medium**, and **small**.

![3 sizes of carousel items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusj1ii-13.png?alt=media)

*Caption / Legend:*
1. Large carousel item
2. Medium carousel item
3. Small carousel item

Large items have a max width that can be adjusted. This changes how all other large, medium, and small carousel items fit on screen. Large items must remain big enough to be easy to understand and recognize.

Medium items adjust width dynamically to the carousel size and available space.

Small items have a width range of 40–56dp.

![2 sizes of carousel items for hero layouts.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusjjti-14.png?alt=media)

*Caption / Legend:*
1. Large item
2. Small item

When the large item's max width is narrow enough, more items can be shown on screen at once. At compact breakpoints, this is only recommended for carousels with simple imagery.

![3 sizes of carousel items for multi-browse layouts. 2 large items are visible.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuslefr-15.png?alt=media)

*Caption / Legend:*
1. Large item
2. Medium item
3. Small item

### Item text (optional)

Carousel items are primarily visual. Item text is optional and should be brief.

If your carousel items require a lot of text, consider using the **uncontained layout**, which can show more information, or use a series of cards instead.

![Contained carousel items with 5 lines of content: a title, a description, and a label.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusmns4-16.png?alt=media)

*Caption / Legend:*
Avoid exceeding two lines of text in carousel items at compact breakpoints unless the background is simple, like a single color

Content within a carousel item can adapt dynamically based on the container and breakpoint.

Text should always be understandable at each size. Consider adapting the text to use brief labels on smaller carousel items.

![A carousel item at 3 different sizes to show  how text changes at each size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwusqbrm-17.png?alt=media)

*Caption / Legend:*
1. Large carousel item with the full title and label text
2. Medium carousel item hiding the title text
3. Small carousel item abbreviating the label text

## Adaptive design

As the carousel container size increases, so do the number of carousel items visible at a time.

At compact breakpoints, carousels can comfortably show up to three carousel items at once.

At larger breakpoints, more carousel items are added and scale in size.

Full-screen carousels only ever show one item at once.

![8 carousel items visible at once on a tablet in landscape orientation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuso0q8-18.png?alt=media)

*Caption / Legend:*
Carousels can show more items at once on larger screens

## Behavior

### Scrolling

Carousel items have a parallax effect when they're scrolled.

The **default** scrolling behavior doesn't snap items to a layout grid. They can stop anywhere in the container. Only use this for the uncontained layout.

The **snap-scrolling** behavior aligns carousel items to the layout grid after they're scrolled. Items snap to the grid when released. Use this for multi-browse, hero, and full-screen layouts.

In full-screen layouts, make sure the carousel items snap to the edges of the carousel container. Avoid letting them scroll freely or stop halfway.

Full-screen layouts must use snap-scrolling.

![Full-screen carousel with items stopping halfway off screen once scrolled.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuspl2g-20-don't.png?alt=media)

*Caption / Legend:*
Avoid scrolling freely on full-screen carousels

## Accessibility

## Use cases

Users should be able to do the following with assistive technology:

- Navigate to the carousel container
- Navigate between different carousel items
- Activate a carousel item
- Skip over the carousel items

## Requirements on scrolling pages

On vertically-scrolling pages, carousels require an accessible way to view all the items without horizontally scrolling. (This requirement doesn't apply to full-screen carousels.)

Material recommends adding a **Show all** button below the carousel, which opens a dedicated vertically-scrolling page of all carousel items.

![Measurements of a "show all" button added below a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut0q8v-2.png?alt=media)

*Caption / Legend:*
The **Show all** button should have a padding of 4dp

If the carousel has a header, you can use an arrow icon button instead. Place the arrow icon directly next to the header or in the same row.

Make sure the header is also displayed on the page of all carousel items.

![Measurements of an arrow icon button added next to a carousel header.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut172a-4.png?alt=media)

*Caption / Legend:*
Headers should align with the leading edge, and the arrow icon should have a size of 48dp

Avoid customizing the accessibility solution when possible. However, if your product needs an alternative solution, consider adding a **Show all** button in nearby navigation, or add alternative control buttons close to the carousel.

Avoid adding UI elements, like arrows or other icons, within or beside the carousel.

![Arrow icons on the left and right of the carousel, reducing container width.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykx1vc-5a-don't.png?alt=media)

*Caption / Legend:*
Avoid adding buttons into the carousel container or beside it. Place any buttons above or below the carousel.

![Arrow icons floating on top of the carousel edge, concealing items.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwykxhsn-5b-don't.png?alt=media)

*Caption / Legend:*
Don't cover the carousel with buttons or other UI

## Interaction & style

### Touch

Tapping on a carousel item changes the shape slightly, and creates a touch ripple for interaction feedback.

### Cursor

The hover state provides a visual cue that the carousel item is interactive.

When the carousel item is clicked (in both active and inactive states), a ripple appears for interaction feedback.

### Initial focus

When navigating to a carousel using assistive technology, use **Tab** to place initial focus on the first carousel item. Then, use **Tab** or the arrow keys to navigate the carousel items.

Use the up and down arrow keys to leave the carousel and focus on the next element on the page, like the **Show all** button.

![Diagram of how to navigate a carousel using assistive technology.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwut9phs-8.png?alt=media)

*Caption / Legend:*
Set initial focus on the first carousel item, and use arrows to navigate items

![Diagram of how not to navigate a carousel using assistive technology.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwuta5uo-9.png?alt=media)

*Caption / Legend:*
Avoid focusing on the carousel container

## Keyboard navigation

| Keys | Actions |
| --- | --- |
| **Tab **or **Arrows** | Moves to the previous or next carousel item |
| **Space** or **Enter** | Activates the focused carousel item |

## Labeling elements

The carousel container has the **container** role.

![Accessibility labels of a carousel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwutav24-10.png?alt=media)

*Caption / Legend:*
The carousel container is labelled appropriately and has the **container** role

Each carousel may have a different number of items, so the label reads out the total amount of items and the current item in focus.

![Accessibility labels of a carousel item.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flwutbdy7-11.png?alt=media)

*Caption / Legend:*
The carousel item label indicates the current item in focus and the total number of items

## Reduced motion

When reduced motion settings are turned on, the parallax effect should be removed and carousel items should no longer expand as they come into view. All items are the same size.

Make sure carousels with reduced motion reach the edges of the window to avoid clipping visuals.

For hero carousels with reduced motion, the small carousel item is only partially shown on screen.
