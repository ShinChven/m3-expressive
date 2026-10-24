# Color system

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/styles/color/system](https://m3.material.io/styles/color/system)
> Last Updated: 2026-07-23T20:32:56.894Z

---

## Summary

Create accessible, personal color schemes communicating your product's hierarchy, state, and brand

**Table of Sections:**
- Overview
- How the system works

---

## Overview

**The Material color system includes:**

- Built-in set of accessible color relationships
- 26+ color roles mapped to Material Components
- Built-in dark theme colors
- Static baseline color scheme with default colors assigned to each color role
- Dynamic color features including user-generated and content-based color

[Learn how the system works](/m3/pages/color/how-the-system-works)

View transcript

![Primary, on primary, primary container, and on primary container roles shown in baseline light theme color scheme.](https://lh3.googleusercontent.com/5J0Ys6e-vzMeQPCfAMQcY147g2yFpXFrJEZK-AB8x8wGKMzdeQX3_GxE-xCOwuBANbYWr-g29epip05CF7fTGVz5gTc7wTBzFNp7AzXmdCVX=s656)

*Caption / Legend:*
The baseline color scheme doesn't dynamically change

![Diagram showing an input color resulting in a simplified illustration of four roles of a color scheme. Shown in green and yellow in light theme.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9uoi8a-dynamic%20color.png?alt=media)

*Caption / Legend:*
A dynamic color scheme changes the UI's colors based on different inputs, like a wallpaper

![Diagram showing an orange input color generating a static orange color scheme for an auto heating UI element.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9uorlq-semantic-colors.png?alt=media)

*Caption / Legend:*
Specific colors, such as semantic colors, can be set to not dynamically change

Products with dynamic color can automatically generate and assign colors to each element in the UI.

This provides:

- Personalized UI
- Accessible contrast
- User-controlled contrast
- Automatic dark theme

## Resources

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma) | Available |
| Implementation | [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Color.md) | Available |
| [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3#dynamic_color_schemes) | Available |  |
| [Flutter](https://pub.dev/packages/dynamic_color) | Available |  |
| Tools | [Material Theme Builder](https://www.figma.com/community/plugin/1034969338659738588/material-theme-builder) | Available |

## What's new

May 2025

### Three levels of contrast

Color roles support three levels of contrast so people can select the one that best suits their vision needs. Contrasts also are tokenized.

![Email app in standard contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrw9ybms-05.png?alt=media)

*Caption / Legend:*
Standard contrast

![Email app in medium contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa03ny-06.png?alt=media)

*Caption / Legend:*
Medium contrast

![Email app in high contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa0o3p-07.png?alt=media)

*Caption / Legend:*
High contrast

August 2024

### More colorful text and icons

The following color roles are updated in light theme to be more colorful while still having accessible color contrast:

- On primary container
- On secondary container
- On tertiary container
- On error container

Affected components:

- Badges
- Buttons
- Buttons
- Extended FAB
- FAB
- Icon buttons
- Segmented buttons
- Chips
- Lists
- Menus
- Navigation bar
- Navigation drawer
- Navigation rail
- Switches
- Toolbars

![Comparison of the color before and after the update, with FAB and button examples.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa1hcg-08.png?alt=media)

*Caption / Legend:*
Colors used for text and icons now appear more colorful

Oct 2023

### Reorganized guidelines

Same color system, explained in a new way. Updated sections include:

- [How the system works](/m3/pages/color/how-the-system-works)
- [Advanced customizations](/m3/pages/advanced/overview)
- [Color resources](/m3/pages/color-resources)

![Diagram illustrating guidelines being reorganized](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9upnnh-reorganized-guidelines.png?alt=media)

*Caption / Legend:*
The guidelines have been reorganized and updated

Feb 2023

### Tone-based surface colors

[Tone-based surface color roles](https://material.io/blog/tone-based-surface-color-m3) have replaced the previous approach of surfaces at +1 to +5 elevation.  The new color roles are not tied to elevation and offer more flexibility and support for color features, such as user-controlled contrast.

![Simplified tablet UI showcasing the application of surface roles, shown in light theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9urd5o-%5B1P%5D%20what-is-new-surface.png?alt=media)

*Caption / Legend:*
New tone-based surface colors offer more flexibility and support

Technical changes were made to align the color system with Android SysUI:

- Updated the default light theme surface from tone 99 to tone 98
- Updated the chroma for the neutral palette, increasing it from 4 to 6
- Slightly darkened surface roles in dark theme

![Before and after swatch of the default light theme surface, showcasing the difference in chroma and tone](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9urxta-chroma-tone-update.png?alt=media)

*Caption / Legend:*
Changes in tone and chroma in the default light theme surface

Feb 2023

### Additional accent colors

Additional accent colors in the scheme provide more flexibility and choice for color application. In particular, a new set of fixed colors for the **primary**, **secondary**, and **tertiary** accent groups provide colors which stay the same across light and dark themes.

![Fab and star icon show in fixed and fixed dim roles, in both light and dark theme](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9utr1z-whats-new-fixed-colors.png?alt=media)

*Caption / Legend:*
Additional accent colors provide more choice for color application

## How the system works

## It's like paint-by-number

Imagine your product screen as a paint-by-number canvas:

- Each element on the screen has a number
- Each number is assigned a color

![UI in "x-ray" view where each element has a number instead of a color](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxjs2l-1.png?alt=media)

*Caption / Legend:*
Each part of a UI is assigned a "number," and each "number" is assigned a color

You can hand-pick a color for every "number" to create a static color scheme.

![Green icon button in the UI, assigned a hand-picked color using a color picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxjwiz-2.png?alt=media)

*Caption / Legend:*
Static colors are hand-picked, like this green icon button

But now, you can also use Material's dynamic color system to automatically generate an entire palette of accessible colors for each "number" from a single source.

This source can be a user's wallpaper, or in-app content like imagery. If the source changes, the product colors update to match.

![Image showcasing how a source color is automatically applied to each "number"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxk5mu-3.png?alt=media)

*Caption / Legend:*
Colors are generated dynamically from a user's wallpaper or in-app content

You can customize how dynamic color appears in your product by:

- Setting the color source
- Adding static or harmonized colors
- Changing which "numbers" are assigned to which elements

[Learn about advanced customizations](/m3/pages/advanced/define-new-colors)

![Image showing a color wheel where a light red color is picked, which then populates the UI. In this example, some UI elements have been mapped to different "numbers"](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm4mxkasm-4.png?alt=media)

*Caption / Legend:*
The color source can be changed, automatically changing the color scheme. The UI elements can have other "numbers" assigned to them.

## Essential terms

### Color role

Like the "numbers" on a paint-by-number canvas, color roles are assigned to specific UI elements. They have semantic names like **primary**, **on primary**, and **primary container,** and matching color tokens. [See all color roles](/m3/pages/color-roles)

### Dynamic color

Dynamic color takes a single color from a user's wallpaper or in-app content and creates an accessible color scheme assigned to elements in the UI. If the user's wallpaper or the in-app content changes, the colors in the UI will change to match.

### Static color

UI colors that don't change based on the user's wallpaper or in-app content. Static colors can be hand-picked or generated in design tools like the Material Theme Builder. Once assigned to their respective color roles and UX elements, the colors remain constant.

#### **Baseline static color**

The default static color scheme for Material products. [See the baseline color scheme](/m3/pages/static/)

![Diagram illustrating the steps from source color to key colors to tonal palettes to color roles to the UI](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9uzzb5-from-source-color-to-UI.png?alt=media)

*Caption / Legend:*
The dynamic color process is automatic. A single source color is used to generate five key colors, which are used to make tonal palettes. Tones from the palettes are then assigned to color roles, which are in turn assigned to elements of the UI.

## How dynamic color generates color schemes

### 1. It starts with a source color

There are three ways to get a source color.

#### **A. Generate it from a wallpaper**

User-generated color is sourced from a user's personal wallpaper. The wallpaper is digitally analyzed through a process called quantization, and a single color is selected as the source color.

![Red source color is extracted from a wallpaper](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v1jfc-wallpaper-source-color.png?alt=media)

*Caption / Legend:*
Source color from a user's wallpaper

#### **B. Generate it from in-app content**

Content-based color is sources from in-app content, like an album thumbnail image, logo, or video preview.

Like user-generated color, the image is digitally analyzed through quantization, and a single color selected as the source color.

![Blue source color is extracted from an podcast cover](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v2356-in-app-content.png?alt=media)

*Caption / Legend:*
Source color from in-app-content

#### **C. Pick it by hand**

A hand-picked source color is deliberately selected by a designer.

**Did you know? **The baseline static color scheme uses a hand-picked source color.

![Green source color selected from a color picker](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v32x5-hand-picked-color.png?alt=media)

*Caption / Legend:*
Source color hand-picked by a designer

### 2. Feed the source color into an algorithm

Dynamic color is powered by the [Material Color Utilities](https://github.com/material-foundation/material-color-utilities) (MCU), a set of color libraries containing algorithms and utilities that develop color themes and schemes in your app.

There are many color algorithms, but the most common ones are:

- **User-generated color algorithm
**Uses personal wallpaper to identify source color. Maps colors of specific tones (lighter or darker) into the scheme according to a combination of system design choices and user preferences.
- **Content-based color algorithm**
Uses image for source color. Tones are adjusted to match the appearance of the source image, while maintaining accessible contrast.
- **Custom colors **
Colors closely match the chosen input colors, such as those representing brand or semantic meaning.

![Color palette made by the user-generated algorithm](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v56si-content-vs-user-left-user.png?alt=media)

*Caption / Legend:*
1. When run through the **user-generated color** algorithm, the source color is turned into a full color scheme

![Color palette made by the content-based algorithm](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9v5j63-content-vs-user-right-content.png?alt=media)

*Caption / Legend:*
2. When run through **content-based color** algorithm, the same source color creates a slightly different color scheme. Some tones are adjusted to better match the appearance of the source image.

![Color palette made by the custom color algorithm](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flnc8pq3o-content-vs-user-right-content.png?alt=media)

*Caption / Legend:*
3. Custom colors, such as brand colors, can individually run through the algorithm to create a custom scheme that matches the brand

### 3. The algorithm generates key colors

Material's color algorithms manipulate the source color's hue and chroma to generate **five complimentary key colors**.

1. Primary
2. Secondary
3. Tertiary
4. Neutral
5. Neutral variant

![Diagram of a source color generating five key colors: primary, secondary, tertiary, neutral and neutral variant](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Fln9w1sps-from-source-color-to-key-colors.png?alt=media)

*Caption / Legend:*
A source color generates five key colors

### 4. The algorithm creates tonal palettes

The system then manipulates tone and chroma values to create a **tonal palette** for each key color. Colors in these palettes are given a number from 0 to 100 in increments of 10, as well as 95, 98, and 99. Some palettes include more values.

![Primary, secondary, tertiary, neutral and neutral variant tonal palettes, consisting of 13 tonal steps](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612xcmj-13.png?alt=media)

*Caption / Legend:*
The smaller the tonal value, the darker the color

### 5. The algorithm assigns tones to color roles

The algorithm uses accessible color relationships to **assign specific tones to the 26 ****color roles** in both light and dark theme.

For example, the algorithm assigns the color tone primary40 to the **p****rimary** role and the tone primary100 to the **o****n primary** role.

[See all color roles](/m3/pages/color-roles)

![Diagram mapping color tones to roles](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612xkza-14.png?alt=media)

*Caption / Legend:*
Tones from the tonal palette are assigned to different roles

![Diagram of tonal palettes mapped to all color roles across light and dark themes](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612xrj4-15.png?alt=media)

*Caption / Legend:*
Colors from the five tonal palettes are assigned to color roles. For example, primary roles are picked from the primary tonal palette, while surface roles are picked from the neutral tonal palette.

Dark theme colors are also automatically assigned so that apps receive both light and dark themes through a single set of color roles.

![Diagram of dark theme colors](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flnem28e4-color-roles-dark-theme.png?alt=media)

*Caption / Legend:*
The same color roles are used in light and dark themes

### 6. The new colors are applied to the UI

The 26 standard color roles are already assigned to elements of the UI. When a new source color is picked, the UI dynamically changes color.

![Diagram of all the color roles with an example of how it would look applied to a UI](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5nn2o-color-roles-UI-elements.png?alt=media)

*Caption / Legend:*
Color roles assigned to the UI

## Color roles support three levels of contrast

In addition to light and dark theme, color roles also support three levels of contrast. This helps people select the contrast setting that best suits their vision needs:

- Standard (default)
- Medium
- High

The standard contrast emphasizes visual hierarchy using high and low contrast elements. People with vision disabilities may choose medium or high contrast options for better support.

![Email app in standard contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa95yk-18.png?alt=media)

*Caption / Legend:*
**Standard contrast**

The baseline color scheme already uses mixed levels of contrast to reduce cognitive load

![Email app in medium contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa99t2-19.png?alt=media)

*Caption / Legend:*
**Medium contrast**

Provides a minimum contrast ratio of 3:1 for those who need more contrast, but may experience visual discomfort with higher contrasts from effects like halation.

![Email app in high contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa9f4u-20.png?alt=media)

*Caption / Legend:*
**High contrast**

Further emphasizes essential elements with a 7:1 contrast ratio to reduce visual distractions and enable users to focus. For example, high contrast is applied to the content in a card but not the card container.

The contrast settings are automatically applied to both light and dark themes.

![The same mail app at three contrast levels, all in light theme.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa9ldv-21.png?alt=media)

*Caption / Legend:*
Light theme

![The same mail app at three contrast levels, all in dark theme.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwa9q8s-22.png?alt=media)

*Caption / Legend:*
Dark theme

Custom components can support contrast levels by using Material's appropriate color roles. For example, use **primary container** and **on primary container**.

Use design tokens to apply color roles to custom components.

![Custom volume slider component using Primary Container and On Primary Container roles, whose colors change automatically at standard contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5s0mi-user-controlled-contrast_12.png?alt=media)

*Caption / Legend:*
A custom volume slider can use **p****rimary container** and **on primary container **color roles to support contrast levels

![Custom volume slider component using Primary Container and On Primary Container roles, whose colors change automatically at standard contrast.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5shuk-user-controlled-contrast_13.png?alt=media)

*Caption / Legend:*
At medium and other contrast levels, those color roles apply the necessary new color values

## Pairing accessible tones

The system manipulates hue, chroma, and tone (HCT) values to **create a tonal palette for each color** with tones ranging from 0 to 100.

Color has physical limitations—whether it's actual physics, our own biological visual limitations, or the limitations of on-screen color rendering. For example, some hues cannot exist with certain chroma or tones. Color limitations are the reason colors such as bright light blue or bright light red are not quite possible. This is why the chroma value may increase or decrease for some tones in a tonal palette.

![13 tones derived from a key color. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612y8rt-25.png?alt=media)

*Caption / Legend:*
Tonal values range from 0 (black) to 100 (white). The smaller the tonal value, the darker the color.

Material's color algorithms use these palettes to find and **pair contrasting tones, **creating accessible color combinations.

Because tone can describe the lightness or darkness of a color, it's used to define accessible color relationships. Those relationships are built into Material's color algorithms.

For example, the algorithms assign a dark tone to a button's container color and a light tone to its label color, ensuring that the colors have a 3:1 contrast.

![Colors of tones 50 and 98 used for button fill color and background fill color, which create a contrast greater than 3:1 between a button and its background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm612yd3c-26.png?alt=media)

*Caption / Legend:*
Using tones 50 and 98 for a button and its label creates an accessible 3:1 contrast

For even more contrast, the algorithms assign tones even farther apart, achieving a 7:1 contrast.

This is the concept powering **user-controlled contrast** features.

![Colors of tones 30 and 98 used for button fill color and background fill color, which create a contrast greater than 7:1 between a button and its background.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fm6134eza-27.png?alt=media)

*Caption / Legend:*
Using colors of tones 30 and 98 for a button and its label create a 7:1 contrast

## Defining colors with hue, chroma, and tone (HCT)

**The system uses a color space called HCT**, which defines all colors using three dimensions: hue, chroma, and tone.

Changing HCT values lets you manipulate colors in flexible but predictable ways. Unlike other color spaces (like HSL or RGB), HCT allows the manipulation of a color's hue and chroma without affecting its tone. Watch to learn more:

### Hue

Hue is the perception of a color as red, orange, yellow, green, blue, violet, and so on. Hue is quantified by a number ranging from 0-360 and is a circular spectrum (values 0 and 360 are the same hue).

![The hue spectrum looks like a rainbow circle.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5w3u0-hue.png?alt=media)

*Caption / Legend:*
360 degree **hue** spectrum

### Chroma

Chroma is how colorful or neutral (grey, black or white) a color appears. Chroma is quantified by a number ranging from 0 (completely grey, black or white) to infinity (most vibrant), though Chroma values in HCT top out at roughly 120.

Because of biological and screen rendering limitations, different hues and different tones will have different maximal chroma values.

![Diagram showing chroma range from 120 (maximum intensity) to 0 (pure grey). A second diagram shows how pure black and pure white also correspond to 0 chroma](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5x1is-chroma.png?alt=media)

*Caption / Legend:*
1. The higher the color purity, the higher the **chroma**
2. Note how lightening and darkening a hue also affects its **chroma** value

### Tone

Tone is how light or dark a color appears. Tone is sometimes also referred to as luminance. Tone is quantified by a number ranging from 0 (pure black, no luminance) to 100 (pure white, complete luminance).

Tone is crucial for visual accessibility because it determines contrast. Colors with a greater difference in tone create higher contrast, while those with a smaller difference create lower contrast.

![Gradient showing the range of tones from 1 (black) to 100 (white)](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgm3sandbox%2Fimages%2Flna5xncz-tone.png?alt=media)

*Caption / Legend:*
The 100 **tone** is always 100% white, the lightest **tone** in the range; the 0 **tone** is 100% black, the darkest** tone** in the range

### HCT isn't interchangeable with other color spaces

Values from models like hue, saturation, and lightness (HSL) won't perfectly map to Material's hue, chroma, and tone (HCT). Don’t conflate color spaces when inspecting or adjusting colors.

For example, colors with the same perceived brightness share the same tone value in HCT, but can have different HSL lightness values.

![3 color dots with the same HCT tone of 78, and varying HSL lightness values of 83, 65, and 77.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmrwafnpo-31.png?alt=media)

*Caption / Legend:*
HCT tone values remain constant when they have the same perceived brightness, while HSL lightness values can vary
