# Typography

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/styles/typography](https://m3.material.io/styles/typography)
> Last Updated: 2026-08-28T15:09:40.768Z

---

## Summary

Use typography to make content readable and beautiful

**Table of Sections:**
- Overview
- Fonts
- Type scale & tokens
- Applying type
- Editorial treatments

---

## Overview

- M3 type scale has 30 type styles: 15 baseline and 15 emphasized
- Use variable fonts for more control over expression in editorial treatments
- Use Material tokens to easily define font, line height, size, tracking, weight, and more

![Type at different scales.](https://lh3.googleusercontent.com/Ow6KY2aDdXx4z-a13GYltf1azIa1Z7_G14M0uTeS0FODRiM87ScDy0_7hf5FPWHi3K2FhNto9ddP94U7DQ6SxWXOODeYz2gmfdaiz1amwgc=s2048)

## Availability & resources

This shows where the type scale is available and implemented into Material components.

| Type | Link | Status |
| --- | --- | --- |
| Design | [Design Kit](https://goo.gle/m3-design-kit) | Available |
| [Google Fonts](https://fonts.google.com/) | Available |  |
| Implementation | [Flutter](https://api.flutter.dev/flutter/material/Typography/Typography.material2021.html) | Available |
| [Jetpack Compose](https://developer.android.com/develop/ui/compose/designsystems/material3#typography) | Available |  |
| [Jetpack Compose: Expressive](https://developer.android.com/reference/kotlin/androidx/compose/material3/Typography) | Available |  |
| [Android Views (MDC-Android)](https://github.com/material-components/material-components-android/blob/master/docs/theming/Typography.md) | Available |  |
| [Android Views (MDC-Android): Expressive](https://github.com/material-components/material-components-android/blob/master/docs/theming/Typography.md) | Available |  |
| [Web](https://github.com/material-components/material-web/blob/main/docs/theming/typography.md) | Available |  |
| Web: Expressive | Unavailable |  |

## Updates

**Aug 2026**

### Language script height support

Material’s type scale can adapt line height automatically based on language script height category: small, medium, large, and extra large.

Components can then adapt their size based on these language heights.

[More on language height](/m3/pages/typography/type-scale-tokens#fcae9063-6c70-4512-87f9-3b6e0d8aea04)

![Different line heights produced by different languages using Roboto Flex.](https://lh3.googleusercontent.com/Ql7ueWNCFSLsuK7NfReD5y3mNiMYG7Aj4ElKQwULjQnV8N5GNXa6o9sDVnvlmeC_wKTtiYaZ4OijJ40_TP0ciTxk7siIfp_iC9uCszHMijCkUw=s1352)

*Caption / Legend:*
Line heights for styles like display large can automatically adapt to language height

## M3 Expressive update

**May 2025**

### Updated M3 type scale with emphasized styles

Material’s type scale includes fifteen **baseline** type styles, the same as before, and fifteen new **emphasized** type styles.

The emphasized type styles add more expression to highlighted moments.

Roboto Flex can be used on its own to show a range of emotional states, but is not yet part of the M3 typescale.

[More on how to use emphasized styles](/m3/pages/typography/type-scale-tokens#0020d4d9-4f5b-4666-b3ce-c26db849bd73)

[More on M3 Expressive](https://m3.material.io/blog/building-with-m3-expressive)

![Type scale showing roles for “display”, “headline,” “title,” “label,” and “body.”](https://lh3.googleusercontent.com/H7HQemhAdElVd6cCDlOyh0FhU3h8iD8kugnlLUFn1ScP8us3nqj1FslGURTVbbimZIHOCkIrjq5jOek3D3ixq8KMwNug0qPwL0lTzv_IgSFFjQ=s1353)

*Caption / Legend:*
The expressive type scale includes fifteen baseline type styles and fifteen emphasized type styles

### Emphasized type style tokens

Design tokens offer an improved way to define typography in products by assigning an element's type style by a configurable value, rather than a set value.

Emphasized tokens allow for clearer hierarchies and prioritized components within a layout.

Type roles describe size—such as small, medium, and large—enabling them to adapt and respond to the device or context.

![Close crop of markdown text showing type scales referenced as “display-large” and “display-large-emphasized.”](https://lh3.googleusercontent.com/FtpfhAnHzRkv9v64Ec7o6iT9LCg4Jz4rj6beaUd0tsyefFzccM8XPfIk8KUC3sKxmzAo86-JF6bqX9KbIDd9hKgLJssWwzkR_qv84q6XKLtGww=s1353)

*Caption / Legend:*
Typography tokens describe scalable size that adapts to devices or settings, including updating the style on boldness

### Google Design: Making Google Sans Flex

Learn how seven design problems shaped Google’s iconic typeface — from inception to going open-source.

[Read the article on design.google](https://design.google/library/google-sans-flex-font)

## Previous updates

### Variable fonts

**Roboto Flex, Roboto Serif, & Roboto Mono**

Updated considerations for using variable fonts and different combinations of their customizable axes, including grade, width, weight, slant, and optical size.

![Roboto Flex, Roboto Mono, and Roboto Serif type rendered in different weights.](https://lh3.googleusercontent.com/we3vYf_MjDkGtTCWCHtjyBnTR8ZxGvmuFuINerK11qOETI1nPgsP4BGjVzHed9z-fxsd3CrRow9ZZZ_yiNszFXJ28JMSJXxiHB2dHLoJVeT84g=s1353)

*Caption / Legend:*
Roboto Flex, Roboto Serif, and Roboto Mono have a fluid range of axes, like weight, across all optical sizes

### Style roles

Type styles are defined by five roles: display, headline, title, body, and label.

These names are more descriptive, allowing for easier matching of type style to use case.

![Different examples of Roboto scaled to their respective roles: display, headline, title, body, and label.](https://lh3.googleusercontent.com/1ln7XGlJMAaZg3R5bogSK2Zon8ogE5VFdjtWg8khP2lcT9mS6Vf7zocKBH0gFLcSYCeAPhxsTK0QibKMM8dJpFD7E13YaNMv-JrAO42Gt59I=s1353)

*Caption / Legend:*
M3 has five distinct type styles: display, headline, title, body, and label

## Fonts

Static fonts like [Roboto](https://fonts.google.com/specimen/Roboto) are currently applied by default to all Material 3 components. [Variable fonts](https://fonts.google.com/knowledge/introducing_type/introducing_variable_fonts) like [Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) have many more axes for expression, but aren't yet part of the M3 typescale.

## Default typefaces

### Roboto

[Roboto](https://fonts.google.com/specimen/Roboto) is the default typeface for Android, and is used in the [M3 typescale](/m3/pages/typography/type-scale-tokens#6a9f9f26-99bb-4185-82fc-a49725da0d01).

Roboto includes over 3,300 glyphs for representing hundreds of languages around the world.

![A type specimen of Roboto.](https://lh3.googleusercontent.com/EkQ4Y0uqlLElvat_6ww9vzPrWILAT3Vmp3N5K4fsgMwOoxdBEmscWHqdqigR2wP6paFXmpLmPryht8MUzVfvYsKv4uAd7_uGZOG_TnBKnUY=s1352)

*Caption / Legend:*
Roboto is the default typeface in Android and Material 3

### Roboto Flex

[Roboto Flex](https://fonts.google.com/specimen/Roboto+Flex) is a variable font which adds more flexibility to typography. It has an extended range of weights, widths, and additional customizable attributes (like size-specific designs), and includes over 900 glyphs with support for Latin, Greek, and Cyrillic.

[Roboto Flex is available](https://fonts.google.com/specimen/Roboto+Flex) as a standalone font.

![A type specimen of Roboto Flex.](https://lh3.googleusercontent.com/2aZeUHyOXe0yaUcZk4yCg774-k1UiVi02FyOfoVMwRc1hJTsOhERLuU7fzXgJsTmmT6Hkv8Ds-c_c-T3pS1LwR1EZ_72IuKHTINCta9jux8yww=s1352)

*Caption / Legend:*
Roboto Flex includes the styles of Roboto plus many more weights and widths optimized for larger and smaller sizes

### Roboto Serif

[Roboto Serif](https://fonts.google.com/specimen/Roboto+Serif) is another variable font family, designed to create a comfortable reading experience. Minimal and highly functional, it can be used anywhere (even in app interfaces) due to its extensive set of weights and widths across a broad range of sizes.

![A type specimen of Roboto Serif.](https://lh3.googleusercontent.com/X-iJXo_zFMwPCclGNPUUQqHm-184vE84Tavs2SsYupdFJJBIAP0O5Bg5lyCtlVAFBlWuyLLUtylgWg7PaPfDnG9q1ScWji7GqYu0-OsOSkyw=s1352)

*Caption / Legend:*
Roboto Serif offers a functional set of weights and widths

### Roboto Mono

[Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono?query=roboto) is a monospaced version of the classic Roboto design. Being monospaced means each letter has equal space, and letterforms are adjusted to properly fill the space.

Monospaced fonts are easier to scan vertically, so are particularly useful for code and keeping numbers aligned. [Learn more about monospaced numbers](/m3/pages/typography/applying-type#f0f79df7-3174-4012-871e-93ce9a89d08b)

![A type specimen of Roboto Mono.](https://lh3.googleusercontent.com/LMaircDfjO77VgbiKJNAz8UcxIc3kRufjePle2i7oLH9_kbvgEGcxU8IjCuv73lMDsSubbBX6YIz5VwFKDMwVmnFMDR7IJjROyxshjuvS-o=s1352)

*Caption / Legend:*
Equal sizing for each character keeps uniformity of spacing

### Noto Sans

[Noto Sans](https://fonts.google.com/noto/specimen/Noto+Sans) is a global font collection for all modern and ancient languages.

Each Noto Sans family is compatible with Roboto and Noto Sans supports more than 150 scripts and thousands of languages. It is used as a “fallback” font, when a language is unsupported.

[Learn more about typography language considerations](https://m2.material.io/design/typography/language-support.html#language-considerations)

![A type specimen of several Noto Sans fonts.](https://lh3.googleusercontent.com/pfAhMuBM9hfiSa6uPDzCRHCivlqUZ6jZufCyaijjSuTHmKxJwz-x5YthTtaa9bJWQCPgLrFzlDRtf4rVtbr1d_CvvZ05ULtnMuTvDlogxv8=s1352)

*Caption / Legend:*
Several Noto Sans fonts for different writing systems

| Variable font | Available axes |
| --- | --- |
| Roboto Flex | Slant, Width, Weight, Grade, Optical Size. **Advanced axes****: **Thick stroke (XOPQ), thin stroke (YOPQ), counter width (XTRA), uppercase height (YTUC), lowercase height (YTLC), ascender height (YTAS), descender depth (YTDE), figure height (YTFI) |
| Roboto Mono | Weight, Italic |
| Noto Sans | Width, Weight, Italic |

## Fallback protection with variable fonts

Font fallback is when a similar font is used as a replacement when the current font doesn't support the text's characters.

For example, products using the variable font Roboto Flex should apply font fallback in the following order:

1. Roboto Flex
2. Roboto
3. Noto Sans font collection

This ensures that text will have a consistent visual style regardless of font support. Designers should connect with their product and engineering partners to confirm that font fallback is available.

![Text examples from Roboto Flex, Roboto, and Noto Sans all show similar styling.](https://lh3.googleusercontent.com/YAKWH5m4gHCZZlFNYswkO0AkAzGy39AcNVu1zG3poVn-n0jXXQy7nKpgT-w_ftH9tYe9ezdfEoanZrlhRsCDlgujAbHLrZuk-3wJD3i0K5Y3qA=s1352)

*Caption / Legend:*
Font branding is preserved when moving from Roboto Flex to Roboto to Noto Sans Japanese

## Type scale & tokens

## Type scale

A **type scale** is a selection of type styles used across a product to ensure consistency.

### M3 type scale

Material 3 has one **type scale** containing two sets of **type styles: 15 baseline** and **15 emphasized**. Both of these style sets follow the same scale from Display Large to Label Small.

The **emphasized** styles were added in the expressive update. They have a higher weight and other minor adjustments compared to the baseline styles, and are best applied to bold, selection, and other areas of emphasis. Baseline and emphasized styles are meant to be used together.

![Diagram of the M3 type scale.](https://lh3.googleusercontent.com/amY56CFDJ81aqWy-r-zpQAOH7D0J7NcLDAwmuuikQnZjnYA4NWUs_V2C8LbxFeekKK7u4itaTFKgnRcXm-QFA56Uoe0N4Jvw38RM5tb5Pas=s2048)

*Caption / Legend:*
The scale is a range of contrasting styles that support the needs of various product contexts and content. No single product will use all the styles. Instead, select styles from the scale that are most appropriate.

## Type scale tokens

Each of the 30 styles has a single token that captures all the default properties. Tokens are separated into the **baseline** and **emphasized** sets. Each axis and property, such as font, line height, size, tracking, and weight, also has an individual token for greater customization. [Learn more about design tokens](/m3/pages/design-tokens/overview)

### Baseline type style tokens

## Emphasized type styles

The M3 type scale has 15 emphasized type styles. Use both baseline and emphasized type styles together to achieve expressive experiences. Material recommends using emphasized styles for selection, actions, headlines, and other [editorial treatments](/m3/pages/typography/editorial-treatments#19e5796e-9db8-4687-b20c-c6cee77e7df8).

### Emphasized type style tokens

## Where emphasized styles can be used

### Components

When used in components, emphasized type styles can communicate hierarchy or importance, such as an active or selected component, or an unread message. The emphasized styles work well with:

- Badges
- Buttons (for primary actions)
- Extended FAB
- Selected list items
- Selected menu items

Material components don’t use emphasized type styles by default. To use an emphasized type style, swap the baseline token for the emphasized token of the same style. For example:

- Baseline: md.sys.typescale.display-large
- Emphasized: md.sys.typescale.**emphasized**.display-large

### Weight

Use the emphasized styles on text that already uses weight (such as medium, bold) to communicate hierarchy.

### Context

Use emphasized styles to draw attention to specifics aspects of components, such as selected states, unread messages, or key interactions.

Emphasized context and weight can be used at the same time.

![Diagram showing emphasized styles being applied in and UI of an active call with live translation turned on.](https://lh3.googleusercontent.com/BgMRvZc8eDdo9v86kNxhCNOiSw1Wv7fkVbYTLq_bY9QZXLfKuC-AaQn9_JmKDhbOBqdxmYoznv1ZlBhyigk8PYfuwAsrtaBtp7YqDQadYcs=s1352)

*Caption / Legend:*
1. Weight: Apply emphasized styles to text already bolded for an expressive style
2. Context: Apply emphasized styles to text in selective places to better communicate hierarchy or state

## Customize the typeface

The M3 type scale has the option to set different typefaces at different sizes.

- The **brand** typeface is used for larger type styles, like Headline and Display, to focus on expression.
- The **plain** typeface is used for smaller type styles, like Body and Label, to focus on readability.
- Roboto is the default for both typefaces.

Consider replacing Roboto with different typefaces to boost brand expression in your product. On emphasized styles, this can help important text stand out even more.

![Diagram showing emphasized styles being applied in a UI of an active call with live translation turned on.](https://lh3.googleusercontent.com/g9DqjzaO9IE8RDby0QNqBhA2ORXpJ6LzeQitQ8ql9vjVgAq-HdXrE2H6miAmVUmPg8StgGRTuivI4jbi07oOlgwaGbRqHWXxJ_WFpgEKroE=s1352)

*Caption / Legend:*
Roboto can be replaced with another font, like Roboto Flex

### Brand and plain typeface tokens

## Language height support

The type scale can adapt line height automatically based on language height category: small, medium, large, and extra large.

Development considerations:

- It’s recommended to default to **medium language height**, as most languages fall in that category, and switch to other sizes based on detected language.
- Material components that use **vertical padding** should adapt to language height automatically. Components with fixed heights are built for **small** values and may not adapt by default.
- Ignoring language height can lead to overlapping text and broken UI elements, leading to major internationalization issues and failing readability standards.

![Different font stylings produced by Google Sans Flex.](https://lh3.googleusercontent.com/u7Z-_b4B26KtA8LDUvPsn5c7v1Nro5RKxDhlSi5lo9fZdbcTgka8YsFe37XfoBs2eUKKb4_4wlnVuXj9FHqBlSPxpRSUBCOYSjBP6nsl9io8=s1352)

*Caption / Legend:*
Line heights for styles like **display large** can automatically adapt to language height category

### Language script categories

- **Small (base)**: Cyrillic, Greek, Hebrew, Latin-based languages (except Vietnamese)
- **Medium (~7% taller)**: Amharic, Arabic, Armenian, Bangla, Chinese, Gujarati, Hindi, Japanese, Kannada, Khmer, Korean, Lao, Malayalam, Odia, Punjabi, Sinhala, Tamil, Thai, Vietnamese, most other languages.
- **Large (~30% taller)**: Burmese, Telugu
- **Extra large (~100% taller)**: Nastaliq

### Language height tokens

To view the language height tokens:

- Open the line height folder (Note: Other tokens like fonts and weights are in the same token set)
- Change the language height context at the top of the token module

## Customizing type styles

To customize existing type styles, follow these steps:

1. If using a different typeface, change the **brand** and **plain** typeface tokens.
2. Adjust properties like line height and letter spacing to refine the appearance. Avoid changing the type size; this can affect how components render and reflow.
3. Repeat for both baseline and emphasized type styles. Try to keep emphasized styles visually consistent, like all wider than baseline.

Heavier fonts may require wider letter spacing, while fonts with long ascenders and descenders will require different line heights. Axes can be further adjusted as necessary.

**Note: **Customizing the M3 type scale or individual styles may prevent you from receiving typography token updates from Material.

![Example type scales with custom typefaces and weights.](https://lh3.googleusercontent.com/_m1zTD4Gi4KPsQMGUpK7qL86M3rIVacDUvNQ7i5HaJo8NdSeOhwaENqa5-3h64LQvXvMvYBavxmc3Av1xXsjzrXprS94NLoWXW8f9U9Hgmc=s1352)

*Caption / Legend:*
Adjust variable axes, like weight and width, to customize fonts like Roboto Flex

Different typefaces can be used for baseline and emphasized type styles.

![Example type scales with custom typefaces and weights.](https://lh3.googleusercontent.com/sGMcrXhB7QJhOFzV-xacTe303tOTltCuwv8Q2SukZmhV3NQHnq_iG8PFNUFO4vZcsvw8yXBfbZKrBSDUVfLNHD8MLGkADAkEZlMmt-x0X3Xv=s1352)

*Caption / Legend:*
Custom typefaces can be used together, like Baskervville and Jacquard

## Customizing your type scale

When different sizes from the defaults are needed, such as for different devices, you can customize the **type scale** by adding or removing styles, and even swapping out Roboto for a font of your choice.

Material Design uses the [Major Second](https://cieden.com/book/sub-atomic/typography/different-type-scale-types#:~:text=with%2520dense%2520content.-,Major%2520Second%2520(1.125),-The%2520Major%2520Second) type scale with 14 as its key base size. This anchors to the most essential style used most often for typesetting body text.

![Material Design’s default type scale; showing display, headline, and title sizes shown next to the Major Second type scale.](https://lh3.googleusercontent.com/sFRSmvfHXtfmkTWjKolzUx_FVsx1Wk7TdhlEbZghSzOlE5PUUIZyuZzTrrDnjNz4KdHsfIYmNkl0AOzDU_0b-gyFAoQGEmrc59K-DCffHOuQqg=s1352)

*Caption / Legend:*
The Material Design type scale uses the Major Second scale (1.125)

Sizes on the rendered type scale should aim to provide impactful contrast between sizes by avoiding small differences.

![Material Design’s default type scale; showing display, headline, and title sizes shown next to the Major Second type scale ](https://lh3.googleusercontent.com/Nx97D2MglZAzPxplWfi3WPeAEFe25ZcDawcLFYNtEUgipcPuIYlBhu9UJz1Om37aaNNJsedqc2_GtAyGQbJ18cnN_d7NBbgCyzVNefFK11OP=s1352)

*Caption / Legend:*
Material’s default typescale of 15 styles allows distinction between each

![ Display, headline, and title sizes shown next to the Major Second type scale.](https://lh3.googleusercontent.com/QE19ztycbnNNUFjh8L-ZuduDXTf9wRLL1-C6LF7AObKQfHIp-EarhDb5oFJasPUifApzn7hvKoJv4O9HXril3zO7T6MUvXp45RRsGqGHtHnt=s1352)

*Caption / Legend:*
Your product likely will not need all 15 default styles from the Material Design type scale. In this example, five sizes are chosen for a reduced set while the rest are removed.

![A size modification of Material Design’s default type scale where display medium is a larger size than the original scale.](https://lh3.googleusercontent.com/TBQySbWTWvPfIelbkG1IzExEagGmvKGd4J0oXsqaHgR6RhY5hYjMTgEox8AAMKpPAMlSSemH_usJBkUdqgjrdP6DcNqPyFLaM7tf_CyrC-tB=s1352)

*Caption / Legend:*
If the default sizes from the Material Design type scale do not meet your needs, values can be changed instead. Here the default size of display medium is adjusted to another size from the Major Second type scale.

### Font size units

The following units are used to express font size on Android and the web.

| Platform | Android | Web |
| --- | --- | --- |
| Font size unit | sp | rem |
| Conversion ratio | 1.0 | 0.0625 |

Web browsers calculate the REM (the root em size) based on the root element size. The default for modern web browsers is 16px, so the conversion is SP_SIZE/16 = rem.

#### Example conversions

| Android | Web |
| --- | --- |
| 10sp | 0.625rem |
| 12sp | 0.75rem |
| 24sp | 1.5rem |
| 60sp | 3.75rem |

### Letter spacing units

The following units are for spacing letters in a UI.

| Platform | Android | Web |
| --- | --- | --- |
| Letter spacing unit | em | rem |
| Conversion ratio | (Tracking value in px / font size in sp) = letter spacing | (Tracking value in px / font size in sp) = letter spacing |

#### Letter spacing examples

| Android | Web |
| --- | --- |
| (.2 tracking / 16sp font size) = 0.0125 em | (.2 tracking / 16px font size) = 0.0125 rem |

## Applying type

## Applying type

The Material 3 type scale organizes styles into five roles that are named to describe their purposes: display, headline, title, label, body. Each role has three sizes: large, medium, and small. These roles and sizes create clear page hierarchy and work across many devices.

## Roles

### Display

There are three display styles in the default type scale: Large, medium, and small. As the largest text on the screen, display styles are reserved for short, important text or numerals. They work best on large screens.

For display type, consider choosing a more expressive font, such as a handwritten or script style.

If available, set the appropriate optical size to your usage.

![Example display typeface.](https://lh3.googleusercontent.com/8H5ycQ1-OMDMOpm5DgFFWidq_Okpm6BM17OLchSyKl2LZFXzjGM9A6dRFOJFPwqNAb_h-sM6j2gLBkqVX8r0G1PnSFfBOnA_i0cSJMQ2pb0U=s1353)

*Caption / Legend:*
An expressive typeface can be used for display styles, as shown here with Bagel Fat One

![Card featuring display size font.](https://lh3.googleusercontent.com/VKnwTJQVXxmdP4HLu06Lpsd_tzims7cWUebvUbzaIRbqyAsJ8PgHE5sE1Xw6R6E_jEOJRhudmdDjcJM1fT_wQcxrQ9RN-JjE0MOExEH6IIyF=s1005)

*Caption / Legend:*
A card using a display size

![Large expressive typeface set above text.](https://lh3.googleusercontent.com/gBZ5ABDVZLrxKfGgYFQwgF15iCaVlXFv_AbYNhood8JTuhjN-Ge-oO5Kvw-vv9vYY5iGFQ7JRrJQhCdGN2hmr8QT-89WUq1apSyaA-_OabA=s1005)

*Caption / Legend:*
An expressive typeface can entice readers to engage with an eye-catching design, as shown here with Anton

### Headline

Headlines are best-suited for short, high-emphasis text on smaller screens. These styles can be good for marking primary passages of text or important regions of content.

Headlines can also make use of expressive typefaces, provided that appropriate line height and letter spacing is also integrated to maintain readability.

![Example expressive headline typeface on phone screen.](https://lh3.googleusercontent.com/nME8j5BDEOvfxHL88Boi8xquwyjTGfY2BO1sHRlKiFyxp6oAe7ZXOz5rdd8b2ec7mhpf3m2f78Llxk1ObaBNSc8843DQ6DqRURNMsqDdFghK=s1353)

*Caption / Legend:*
Expressive typefaces can be used for headlines styles as well, as shown here with Anton

![The name Ana Russo in headline style in a contact card.](https://lh3.googleusercontent.com/9gDfz6o18x2TZ_CwtmIUlwZGMDuYtvEALaw7NNfPkyVjXC7ohfVQNHAGO6hsHOBjqyVGAde_h9ZqL4Z7axGvbY0nNZyuJ4aFeLBBdlRzJn0K1A=s1005)

*Caption / Legend:*
Headline style used for short text on a small screen

![Headline style set above body text.](https://lh3.googleusercontent.com/WgoT1XvqTt4wZhUpmGfNdEPfzpIwynAczo074zAPDqGDh1zgevOnEBr7NBzygCZwDOMFgAhQMxy6vqfG5v_pPpjsgSLlMKCJCUpxIKQgp8TW=s1005)

*Caption / Legend:*
Dialog using a headline style

### Title

Titles are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, consider using title styles to divide secondary passages of text or secondary regions of content.

For titles, use caution when using expressive fonts, including display, handwritten, and script styles.

![An article card using title style for the article title.](https://lh3.googleusercontent.com/5G71cITshP3sV3xndkrvWC-qCR4KIpdNQvZX02xhz0UbkMnoiizvlOGjADZw89VSYWhToOArHVkmgHQ4DZze2UAQ8xHQrlTEik7_Y7zyj70rEA=s1353)

*Caption / Legend:*
A news article title using the title style to capture attention, as shown here with Bebas Neue

![Top app bar using title style for the contact name, Aki Aro.](https://lh3.googleusercontent.com/ut0Cn4jh3w2EXk_xbcH6qxLhTDArU8B2ujqURlHJO2AIJhN_ROI9HLRP1JVeVIYq_uAqFsVNshblhlefeMzqXtIVZoTrp5J_Veo8AcNse9j8Mg=s1005)

*Caption / Legend:*
App bar using title style

![Title style stating ‘Top News’ above headlines.](https://lh3.googleusercontent.com/PmeB6Sb4pU6IWk4zdomBh172gtNSXDNKKxYmozS8wejGX-PrRleZViqtUiZAw1th1K3rQ3OQzw5BdCjP3junPZzB84HIGKB8uV9CglMC13k=s1005)

*Caption / Legend:*
Example of title style applied to a category header: Top News

### Body

Body styles are used for longer passages of text in your app.

Use typefaces intended for body styles, which are readable at smaller sizes and can be comfortably read in longer passages.

Avoid expressive or decorative fonts for body text because these can be harder to read at small sizes.

![Body-style typeface.](https://lh3.googleusercontent.com/4wCbM5DljexhIPLTZFvjaWRYHzSxV7CbB0EAR8C5Jd8_NEFVJUmsQVu4RZP4EohwY1Xn5waxFIw--co_wEViXOYg9GBUVTVLweYYEnQJ1hg=s1353)

*Caption / Legend:*
Body styles must be readable for long passages

![Body style text in article.](https://lh3.googleusercontent.com/jiXtjNSWMzkij9Tg6MWqQWGbu5ynGPuZygOcoE9KQH_zCJVPKhwT8h5pqbcEfqo8x71U6LPZ8Mn2LyDwPWnYW7n1jP4C1vALM0y8GTJUFZxR=s1005)

*Caption / Legend:*
Body style used throughout an article about pesto

![Three stacked examples of body style in app setup flow.](https://lh3.googleusercontent.com/nPH5mSOx4oou5T1tL0ejKZgTfRZa-kJGE4yZVUtyikQCi8WpJAY3nyrXdWyS0snoE4A6s11xx8HaETNT0n-4oFdHb2dGSvZymlsUI-S5rR89DA=s1005)

*Caption / Legend:*
Example of body style used throughout a setup flow

### Label

Label styles are smaller, utilitarian styles, used for things like the text inside components or for very small text in the content body, such as captions.

Buttons, for example, use the label large style.

![Several label-style buttons on compact window.](https://lh3.googleusercontent.com/XuTl5skaB_JIORrVcCDmo_Y_XStoycO_IRnuIcpIS8T2V2cFJp5Xxq42rg6Si3tibDFsxm_SJ3rePNwt3Zvj4JvKDLijnl2OEaXwAfsWKepZyw=s1352)

*Caption / Legend:*
Label styles should enable quick reading at small sizes, such as in buttons

![Music player timecode featuring label style.](https://lh3.googleusercontent.com/NQhKlAFb1pQR0_FithdIHxbrXSaK3l7cSuURn9AYJ_gr97XaQ-BwqlewnDm1u6X1MT0WkROeOfkCcGdsYQpj2mVivtnhqk34KqsReF2x5Vk=s1005)

*Caption / Legend:*
A music player using label style for the timecode

![Five labels set horizontally across the navigation bar.](https://lh3.googleusercontent.com/NlIJB8O4GVLye38a7knugkMHgnsPN_JwctP0QTjy1jVi3S8_-bpCLo91_SOgM5VMhHzptxz0kd3pBYGYjWup8kTeGeCbjntcCVZEU1OJAyuLng=s1005)

*Caption / Legend:*
A navigation bar using label style for the destination text

## Typesetting

Vertical typesetting relies on padding, bounding boxes, and baselines to ensure text legibility at any size.

Take engineering considerations and the conventions of your platform into account when making decisions for typesetting, text resizing, density, and using text in adaptive layouts.

### Using padding and bounding boxes

Use this method for web products, and iOS products, where applicable. Note that some design tools also use bounding boxes for typesetting, but their methods vary and will need to be reconciled with the engineering implementation.

In web UIs, the line height and bounding box height are the same. Text is vertically centered within the bounding box, following the “[half-leading](https://www.w3.org/TR/css-inline-3/#leading-trim)” behavior established by CSS.

The vertical position of the text isn’t controlled directly, but through the combination of the bounding box and font metrics.

![Diagram of bounding box equaling line height.](https://lh3.googleusercontent.com/kVdAGQXhGi2W9YfH3N0ZX9KJkKnpc-bsjOAg3tWtYeHr8x--uTrk_Y49tvDT3rwtVE12G-je8FG3rd6DywqSfWXwBk2M7pAulya83Ml3wjGB1A=s1353)

*Caption / Legend:*
The bounding box height is defined by the line height specified, with equal space placed above and below the text

Padding is the space between UI elements, such as between an image and a bounding box, or between the inner edge of the bounding box and the text.

![Diagram of 20 dp padding above text.](https://lh3.googleusercontent.com/ofazdaoe9Y2mL4Oefj7g_L7-yaRVZecYmExPhqw0CMVWbzn18xGdzzxkXOak_FQ8oszI1XH-BUgAsd3eiDWomwVhGZlkdlB1sdcEtlV0Vtg=s1353)

*Caption / Legend:*
The padding surrounding the text bounding box

Specify the distance of UI elements from fixed reference points, such as the container edge. For the web, automate this calculation using Sass or CSS.

![Measurements of label text padding.](https://lh3.googleusercontent.com/c-Xd3srZz38eMpP89GGFUqL6ibDUlvLILbWmE3SyIadz3v6osx2jNpQzXuXwj30_jUHhPSkP5ALsu_hOJGi3k-JrXkk5WXglGiz0dILEruNp=s1353)

*Caption / Legend:*
Use line-height, padding, and container measurements for setting typography on the web and iOS

Vertical alignment using padding and bounding boxes:

1. **Line height** 
Measure the height of the bounding box.
2. **Centering** 
Ensure equal top and bottom padding around the inner edge of the bounding box by using center align
3. **Spacing** 
Use the height of the bounding box, and top and bottom padding to determine spacing

![Diagram of using padding and bounding boxes to measure line height, alignment, and spacing,](https://lh3.googleusercontent.com/gR_zZUnknndcR-NJEotK-rshizgc54jUA7qzp0TDrYV1sNjprNeUNsoETn72KqcrWT61bX5nIXUDpVr035eFbh_KkJgB8uP1J-7ExXAZ6BS6=s1353)

### Using the baseline

Use this method for Android products or platform-agnostic specs.

The baseline is the invisible line upon which a line of text rests. In Material Design, the baseline is an important specification in measuring the vertical distance between text and an element.

![Diagram indicating the baseline of text.](https://lh3.googleusercontent.com/I5c-Uge53PpSAf_V5JUBMML3_1ouix0TL99xVBLgNv5BNuQrxb1UhPEvP2TzubpCPApEwSredZQ6hDxVhAe0luStrcv4LddwoThxLQUfyEU=s1353)

*Caption / Legend:*
A line of text rests on the invisible baseline

For Android, specifying distances relative to baseline enables accurate implementation.

The baseline can also be used to communicate text position between designers in a way that's agnostic to the platform or design tool.

![Diagram of the distances between overline and container edge, plus subhead, overline, and caption text.](https://lh3.googleusercontent.com/CgXx25YXSe1l2T7QqEmDtLD-9vptGuT9ONqs_Z_ymaTncdxWIBMIrPzO3Svt_DL2zooqVZLGPsfN4MvZtE79JI6iSEm51TC3bI3eejLy34A=s1353)

*Caption / Legend:*
Android screens rely on distance to baselines for spacing

Vertical alignment using the baseline:

1. **Line height **
Measure distance from the text baseline of one line to the text baseline of the next line
2. **Centering** 
Specify center alignment as a reference instead of measuring the distance to the text baseline
3. **Spacing** 
Use the distance from a reference point to the text baseline

![Diagram of using distance to baseline to measure line height, alignment, and spacing.](https://lh3.googleusercontent.com/3yEErrAiImN-qxnPPc_ln0WeE416pEN7iHaRcQPlzMluvla5w0ZoK09oTGefSQrgIaj29bUZrFG1T0sVHpTdOWUxGge1g9wQZideSuhMrUoSHw=s1353)

## Ensuring readability

**Line height**

Line height is the space between each line of text and is directly connected to type size.

Material’s type tokens are optimized for intended size and use.

![An example of larger type with a line height ratio of 1.2](https://lh3.googleusercontent.com/LFuKIi2aGlf72f_A3yvGE-ncHvn7nQ3yj7M7zHCEljgjxJaWDtMrgjuHKy557yVppBOtlIEVl2SVHTbr_8QaHGPqSLdk6ZTPFvcXuoxIFJfs=s1353)

*Caption / Legend:*
For larger type legibility using styles like title, headline, and display, we recommend a line height ratio of 1.2 times the type size

![An example of body type with a line height ratio of 1.5.](https://lh3.googleusercontent.com/TFXkp4WANGrF2VJ6AbJuYKFWa7QOOTDp-uchUNK6nBhk9-Qp2gg2V96xdgH8U3yjYoJCVNa2ln1-em5gCbw2bqSZWL1Pf5w7Iawhzi5Cf8p3=s1353)

*Caption / Legend:*
For smaller body copy using styles like body and label, we recommend a line height ratio around 1.5 times the type size. If your line height is too tight, you’ll undermine the flow of the text. Too loose, and the lines won’t feel cohesive.

**Tabular numbers**

Use tabular figures (also known as monospaced numbers) rather than proportional digits in tables or places where values may change often, such as clocks.

Use monospaced tabular numbers to keep values optically aligned for better scanning.

![Vertical view showing the spacing variation in proportional numbers versus monospacing of tabular numbers.](https://lh3.googleusercontent.com/BskG7G1_XEXDjk548Xw7DT4xxmlW8ePL0ZOQdihQTM6AsDSWbuh1FCaOKu_ZpCrhev8DeIHKo42vtcOG5zsrFOJ5aXdzxysJfoAfXNpQaFA=s657)

*Caption / Legend:*
1. Proportional numbers
2. Monospaced tabular numbers

![Times displayed in tabular numbers.](https://lh3.googleusercontent.com/iHKpHXTPSACBPeqMQw5d7GXnBYWQAH9j4B-8UqXZXH37-TISFiAqYf-tgnbb1URd992HF0u8KH9ed0AdrRysgEbV6Dnk8dKCFtiUBH5npG0l=s985)

*Caption / Legend:*
Use tabular numbers to prevent layout shifting when values change, such as in a clock UI

## Using Material Symbols with typography

Properly aligning typography with Material Symbols can improve cohesion and unity in your product. [Learn more about matching icons and text](/m3/pages/icons/applying-icons#f9db4adc-ca78-473f-85eb-a351b73c39ac)

## Accessibility

### Color & contrast

Support visual accessibility by choosing the appropriate **color contrast** between your product’s text and background. Contrast is the perceived difference between the lightness or darkness of two colors, and is quantified by a **contrast ratio**.

![Contrast between two colors, quantified by a contrast ratio, supports visual accessibility.](https://lh3.googleusercontent.com/goFACyp-thAmu70hw0vYZBOFWv7OySfYv9HRNwXvZMIQ9P2WCiyHyfgsCJE35fGXFpwSskOWX_XLoWaA7uz97PuPZ1lh_jw9sH0eaRiFGtc2=s1353)

*Caption / Legend:*
Label styles should enable quick reading at small sizes, such as in buttons

Text should achieve sufficient contrast between its color and that of its background.

Material aims for two main text contrast levels:

- 3:1 for large text
- 4.5:1 for small text

[Learn more about contrast ratios](/m3/pages/designing/color-contrast#b248ecd2-9abd-4877-8f5e-ebfbb87e2048)

![Large text should achieve a contrast ratio of 3:1.](https://lh3.googleusercontent.com/BQrWDyWcMYdh73-KDAcTBnrN6snUfkRYAk9jBe5H_H-sW2D7QoGhfd2JyDkshiNIegJcCCFFzUAxOCJ5nOL1CyynkzZIi0h80ORRJWlTH6bs=s657)

*Caption / Legend:*
Large text should achieve a contrast ratio of 3:1

![Small text should achieve a contrast ratio of 4.5:1.](https://lh3.googleusercontent.com/rm7l0bh9fJXOLnItYdu2yaS-j4Gf-4E2vUOL8lxqDUKc4iIquoSwzQyYC-a_bm_g7cMyoPoZAcWTRfRGUHDTVpRJDT-7kPeBABfgkropDVS7=s657)

*Caption / Legend:*
Small text should achieve a contrast ratio of 4.5:1

The default color for typography is **on surface**, although **on surface variant** is a strong alternative.

![Diagram showing the default color for text is "on surface."](https://lh3.googleusercontent.com/ayTGM2gQl4WO4HvOrLK5f70D7Y0VT99OWKYt9hlElb-p0I_osOhWKGEW6bsvl-n-WRXm5dJLa6Q2EIEH2TyfG0lpBuvbxKv_jIIEAGHdUWDK=s1353)

*Caption / Legend:*
Default typography colors

For hyperlinked text appearing on top of a surface color, use primary. However, tertiary can be used to make links less prominent.

Hyperlinked text must also be underlined.

![In a paragraph, md.sys.color.primary color is applied to an underlined hyperlink. ](https://lh3.googleusercontent.com/H_inQMJPALlTfpigo59TGxaJOCDjGokqyP8bDE-QBzvRu7vSbbgTS43k-iIM6ReCC2N3WWJG4DiFGdCNS8UVTVICpnXRPHs5FrCfE140VQw=s1353)

*Caption / Legend:*
Hyperlinks should be underlined and use primary or tertiary color

## Scaling type

Maintain hierarchy and scaling across devices by modifying certain elements as you scale.

**Scaling from watch to mobile**: Increase the size of **headlines**, **display**, and** body**.

**Scaling from mobile or tablet to desktop: **Increase the size of **display** and **headline**.

![](https://lh3.googleusercontent.com/mK32BtuqIhseHxjWVUmFOVsznjZZ--FOlGPZ6kuA27yX0PAZLvLGSc0E-D4SvZFF3yOZR_FVNwdMhf3cdwpQqZNRjsM_uv3a169JrjqYMJB6=s1352)

*Caption / Legend:*
Roles of the same name can scale with the device size.

1. Display
2. Body

When scaling between a desktop and TV display, increase the size of headlines and body type.

![](https://lh3.googleusercontent.com/LUhGJMGK2capjl2cYgtYhyHQgZMAr2Ht7G0SayIK_95XECcneerDBkIQeJgEx3TbBQ_4hQadjcY2n6aIJsB-smrrJtMrdjxOUEgOWVz0PgPY=s2048)

*Caption / Legend:*
Tablet (left) and desktop (right) both use:

1. Headline
2. Body

### Multi-column scaling

As your layout adapts to different device sizes, consider maintaining the focus of an area by increasing the type size of that element. This example shows a column configuration scaling from a closed mobile device to an unfolded mobile device. The most prominent card (1) scales to maintain hierarchy.

![](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fkuob7g0r-Multi-column%20scaling.png?alt=media)

(removed per b/304969883)

**Line length**

Line length is how many characters are on a single line of text.

For longer body text, the recommended line length is between 40 to 60 characters.

For shorter lines of text, the ideal length is 20 to 40 characters.

![Range of longer text lengths from 0 to 90 characters per line, with ideal set at 40–60 characters per line](https://lh3.googleusercontent.com/e3iXYSVluHN3XYqUyfKbKGw2DJS5Llqu_qdEdiSbBmE8zCF6lU1sedLF5jG4rgT4lCaZ5bJZhzp-Hm3KrtGEcJR1qfocEbjFvnNlHIjq7MeD=s2048)

*Caption / Legend:*
For longer lines of English text, the ideal line length is 40–60 characters per line

![Range of shorter text lengths from 0 to 50 characters per line, with ideal set at 20–40 characters per line](https://lh3.googleusercontent.com/-tIQTUsWSLg9LcriJ0FdR-8_VvP7LyKXh5Ul39xmq1itoDjwwZig9yf2Km_G5Y-9sY2BQd48mRyYXVy-IYJsxPfGpgNNKupB8KZiilJOSlSu=s1352)

*Caption / Legend:*
For shorter lines of English text, the ideal line length is 20–40 characters per line

## Editorial treatments

## Editorial treatments

Editorial treatments are standalone, showcase moments driven by type. They involve dynamic, attention-grabbing use of custom sizes, which can involve larger display type or a blockier look and feel. They should depart from purely functional layouts or basic stages in a user flow.

In the expressive system, editorial treatments can be combined with elements such as motion, shape, or color, to create product-wide hero moments.

![A series of editorial moments making dynamic use of type, including a calculator, lock screen, and temperature.](https://lh3.googleusercontent.com/ev53UZRK0CWfnDhs22jim_yhZFnSolBEPg5IwuUJGgwWnqZA3iT58c-MAmi7YIOejurCjFd0EYTpAZ1POQsLbGMtdLiHE9gZMvp3csxwtt4T=s2048)

*Caption / Legend:*
In editorial treatments, type can freely dominate the screen

## Examples of editorial treatments

Use editorial treatments in three key ways: to celebrate content, to highlight the voice of the user, or to draw attention to bespoke functionality within the product.

### Celebrating content

Editorial treatments can dramatically take over the screen to mark a particular user action, memory, or preference.

Try matching the text to the tone of the product or a strong emotion, like a narrow, thin style for serenity, or a bolder, italicized style for liveliness.

![Large type reading “Mesa Verde National Park” with a hiker in the foreground.](https://lh3.googleusercontent.com/_f96Z-GV-cAbQmpKCj-Keg6s4rM6TfNLrZzkjpFVRS2wnACMbvScj90pXQqDVkQsrXv3HuwAPI2GoFFbLjYhfTlFp66pmIY7VFy7BBxvwglCCA=s1352)

*Caption / Legend:*
Use an exuberant cover image for a photo album, here shown with Roboto Flex

### Voice of the user

Express the voice of the user by letting them personalize the appearance of typography or by adjusting text based on their input.

Use customization selectively to frame a user’s mood and make it stand out.

![A text exchange in which one party is responding enthusiastically in extremely large letters.](https://lh3.googleusercontent.com/aIWtxiI3mObxA5vNa0tgNA8a89V2FRGKJIPDwOFDDjqkYNShmdmFAnqptxLK4bmFCFEPvZSZw9vJ2dWwT_R00KolfVj8le1Iu-yZexlmpimB9Q=s1352)

*Caption / Legend:*
A response with the right type treatment can convey ecstatic emotion. Here, the text is shown in Roboto Flex and PT Serif Caption.

### Bespoke functionality

Editorial treatments can also be used to help express moments of unique functionality within the product experience.

![A slider to adjust bedroom lights. The characters increase in width and weight as the brightness is increased.](https://lh3.googleusercontent.com/MOKMcp4KQUKuarOagUBezjsmfRUftgg4bZuIe7ss8B-RpdEBvAAintWivpRfcCCukxxgqDKpP3EoaJLD6HfOEg3KMQBlEK2n-NRxLLWcqFEmJQ=s1352)

*Caption / Legend:*
The increase in the bedroom light brightness prompts an algorithmic response in the width and weight axes

## Editorial treatment best practices

As there is intentionally much room for choice in developing editorial treatments, there are a few guard rails that will prevent inconsistency, illegibility, or distracting design.

These best practices include:

- Ensuring consistency between similar-looking editorial moments, creating tokens for each where needed
- Matching the emotional tone of text to the task at hand
- Not mixing multiple or clashing styles in the same layout
- Not mimicking personalization theming

![A UI showing two instances of editorial treatments with consistent styling.](https://lh3.googleusercontent.com/Hq2u6GmGN0yhP8it7ZGnfq7l-Sz8WJI9dtf_X2yoQcR-bABUUYLFkSvA5u2Kwg8UsW4eFmWsLfHVvLYPYnvkGk5aHUKtOgxhqOrLE4hqQy33=s1004)

*Caption / Legend:*
Create tokens for editorial treatments to apply them consistently in your product

![A UI featuring a name in which the first is using a different custom type treatment than the last.](https://lh3.googleusercontent.com/cgEb-7BELW0DgVCVjNDR09llaf4g6CODZmX1BFJMIFGgYjW_799tmagHG-VY3DONxmeawi1nOji7NiZqi2oLYuz3Dn3TIr0Sxj8q4iSdMlxG=s1004)

*Caption / Legend:*
Use caution when mixing different editorial treatments in the same layout. Try to keep them consistent.

## Use variable axes to make editorial treatments

Adjust variable font axes like weight, grade, width, and optical size to match the font to the feeling. Baseline and emphasized type styles can still be used. Though, editorial treatments shouldn’t be used in labels or just to give information.

### Weight

Weight is the primary attribute that defines the overall thickness of a typeface’s strokes in any given font. The most common weights are regular and bold, but weights can cover extremes from the very light to the very heavy.

If the typeface is variable, it provides a full, continuous range of stroke thicknesses, making the number of weights effectively unlimited.

[Learn more about weight on Google Fonts](https://fonts.google.com/knowledge/choosing_type/exploring_typefaces_with_multiple_weights_or_grades)

![Many examples of Roboto Flex weights.](https://lh3.googleusercontent.com/_ZH0Kaelt3AZp6-KW-_8iAzJpqXcmjFDowWlVM8kdesekBF7fRPS7YoVYtNw7CBck4R4YUGb-tPiDMqwGJeK8qtEb9JscawmvErJ9mTZ09Q=s1352)

*Caption / Legend:*
A variable font, Roboto Flex offers a fluid range of weights

![Light text in use as body text.](https://lh3.googleusercontent.com/c_gKfZUEwNoMuE_swIkrig6cXFWytTkRd1ZgI2m5mVSsJBiEc9TTlcy0CLJ8HlIEfj4ZfunjBfob6jM0h0oC9hny61MIjrECjNBRSbT2WBE0=s1004)

*Caption / Legend:*
Be careful when using very light weight for body text. Lower-resolution displays can struggle to show thin typography, especially at small sizes. Instead, consider lighter weights at larger font sizes, such as display type.

![Navigation bar using bold typography for label text, making it challenging to read.](https://lh3.googleusercontent.com/JxEboJh8oUw3JAa08wTj7Yl8CndLBoOChr9amAJTMlo2v6WBmFGEqQwYMI54QJPq3D0mNC9mpltggO0NWeOato8W2AUEH_x5_APOOUkGX4w=s1004)

*Caption / Legend:*
Excessive weight at smaller sizes can make text harder to read

### Grade

Grade is a secondary modifier of a typeface’s optical weight, independent of the weight axis. Both weight and grade axes affect a letter’s thickness, but adjustments with grade are much more granular and don’t change any letter widths or line breaks.

[Learn more about grade on Google Fonts](https://fonts.google.com/knowledge/choosing_type/exploring_typefaces_with_multiple_weights_or_grades)

![Three ampersands set in Roboto Flex without grade over Roboto Flex with 150 grade.](https://lh3.googleusercontent.com/3HqXaLryPKUIj1IaC5Rfnzdcj2s1OVUJKRqjKUBPXN3TB9Q4x_1sCfQcEmsNsb0CI5OHaSGT-IugniC48bWebADFxLnygmoQp10QlzBHNPc=s1352)

*Caption / Legend:*
Roboto Flex offers a positive grade of 150 and a negative grade of 200

![A light and dark screen each showing the letter B.](https://lh3.googleusercontent.com/nNOT6dZnhO35p9L6JJOMBGxqzuugbja6Bm13PdwoVG5JRWeRH9SY7gs5R929Q4Mn97C6VxJ0ZzG8so1MbJ0dKH2iLgPJqCWkkQqNzvmlyUM=s1004)

*Caption / Legend:*
When switching between dark and light mode, the same text may appear heavier despite having the same settings. Consider using a negative grade to counteract this.

![A list of amenities where the filter chip for “Elevator” and “Cats OK” are selected and have a heavier grade applied.](https://lh3.googleusercontent.com/GPx4clVPV4vwGL6n3YNWAOYKhjSlFdl5OkrPdr5P-DM2-QVqrcHiU_DDT2OfiqaN3UsVXr_nDftRzvLDJZBAeb3UQCqy3jVaFDOSuXItueSN=s1004)

*Caption / Legend:*
Grade can change the emphasis without reflowing text

### Width

Width is the result of how much horizontal space is taken up by a typeface’s characters.

A narrow width allows more characters to fit per line while a wider width may offer more personality.

[Learn more about width on Google Fonts](https://fonts.google.com/knowledge/glossary/width)

![The letter ‘N’, set in Roboto Flex, rendered in varying widths.](https://lh3.googleusercontent.com/fcsjvoTZQgt3S4tEgcJeKkFdxwB7j0kq4rPwSzLExgjzb5GXXaI46dDHnYhSnpdXubMSsV60bO7gd0FHWMHX1neKkRNqysx6pndBj6cYfMSzYg=s1352)

*Caption / Legend:*
Roboto Flex offers a fluid range of widths, from 25 to 150

![A bottom navigation bar with four icons using narrow label text under the icons.](https://lh3.googleusercontent.com/U2pTAHsQjDUKou_PgGuB99jyO_WaBdo3P287QfNNh-mh8zKncXzsZlscbMtSinYtKxkOVd_atokOqK3DAJxl_oa97CvlIdN6yuSeyi4UtH3a7w=s1004)

*Caption / Legend:*
A thinner width can allow for more characters to fit at small sizes, such as in a label

![Top app bar with the title best thrift stores in wide type next to three icons.](https://lh3.googleusercontent.com/iedj4O9hpECTR7nWovYfgsGQE7EsIUxodkH8BdtsXlgJNExF-6VUqjo_DFpfRYt5NW-3tCT1ajOGORVqMO3eFrDG-N2GtNwsNc4teoGITws6-g=s1004)

*Caption / Legend:*
Since wider styles take up more space, avoid using them for areas with limited space, such as in a top app bar

### Optical size

Optical sizes are different versions of a typeface optimized for use at different sizes.

Small size designs focus on enhancing readability, while large size designs can show off the intricacies of the letter forms and offer many more weights and widths.

[Learn about choosing typefaces that have optical sizes.](https://fonts.google.com/knowledge/choosing_type/choosing_typefaces_that_have_optical_sizes)

![The word hello at a small optical size overlaid over the word hello at a large optical size.](https://lh3.googleusercontent.com/q145wn11t-bnGKRS9FqXq2XgXL2_zm_vcdzXtRMQj6lhcDjnhss8l3-z4BdWwmrhezO-Nuy-Kyioo2GNnuAhDS0PE8v96c3rxursoJNbhyEK=s1352)

*Caption / Legend:*
The typeface Literata has a continuous range of optical size, from 7pt to 72pt

![The words “massive” and “tiny” with optical sizes that match their type size.](https://lh3.googleusercontent.com/dndDtroXkLO4HSXTtHRwG2SGuUY5X_BhDYYv3jVs6_d73j60NzIiwsuvE3w6uVRulU5gkaab4RGqqcAK2IkHmT72DFVDkQPAUnfL0c2uz4Xi=s1004)

*Caption / Legend:*
Use an optical size that matches your type size

![Two paragraphs of text set with an optical size larger than the type size.](https://lh3.googleusercontent.com/Dok3HjtThxwrT-s81brs9uAb9koXEA6Zt3CIi-27BWQmypqPMzDfVNYfsrXLmsj43ppF4tN9Z8ouvK2M8GP8TTFT7tqzO17UGdbsRnVpDbJnSA=s1004)

*Caption / Legend:*
Don’t use large optical type sizes at small sizes. Instead use a smaller optical size, if available.
