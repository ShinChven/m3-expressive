# Divider

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/components/divider](https://m3.material.io/components/divider)
> Last Updated: 2026-07-17T07:13:07.955Z

---

**Table of Sections:**
- Overview
- Specs
- Guidelines
- Accessibility

---

## Overview

- Make dividers visible but not bold
- Only use dividers if items can’t be grouped with open space
- Use dividers to group things, not separate individual items

![Screen shot of five stacked dividers](https://lh3.googleusercontent.com/nt6TfZJ1hPz6HX6Pn1Lvf2_jMgg3cnIGfttwCupUGgry6V5DHR1JvdSdkkWIUdVopwjJ_BRzYTaANVIo4AczkVo0jKYD3B1J8NShIWhVlYY=s2048)

*Caption / Legend:*
Dividers separating items in a list

## Availability & resources

## Differences from M2

- Color: New color mappings and compatibility with dynamic color
- Configurations: Ability to have vertical dividers

![Screen shot of three dividers](https://lh3.googleusercontent.com/XzLvQIFI1bPcY94jkG0wH0k2q5oq10abbZE3PxJTJv82onD1lYAfXmBbxIoicWGcqoYM2AKyvx95UTpFaVa20bDUBDfvIMwse1Q5SudzA8M9=s1352)

*Caption / Legend:*
Dividers have new color mappings

## Specs

![Diagram of divider set on horizontal line](https://lh3.googleusercontent.com/oj7KVyynAuq1UwXg5w1-mMew6K5ScAJ6p3N8AitVYbECX8ZoEZM6gDLGiHWOvokrG3F4SRpj-DAJNsg0AiWRxqvLfsoWAyCPYh6vi2B1pjl5=s2048)

*Caption / Legend:*
1. Divider

## Tokens and specs

Browse the component elements, attributes, tokens, and their values.

#### Design Tokens: Divider

*For dividers.*

| Token Name | Value / Mapping | Type | Description |
| :--- | :--- | :--- | :--- |
| `md.comp.divider.color` | `md.sys.color.outline-variant` | COLOR | Divider color |
| `md.comp.divider.thickness` | 1dp | LENGTH | Divider thickness |


## Color

Color values are implemented through design tokens. For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value. [Learn more about design tokens](/m3/pages/design-tokens/overview/825906c9-6eed-47d1-8812-450910c1356e)

![Divider on light background and dark background.](https://lh3.googleusercontent.com/nAdfpj-iAPZ7Zohh6rLalqf_NXmdrLUmqhQTZkfAgJdp7OJdRTb82SMH0U5GOJF-yTm3P8nRpycQDWiJVXBCuwNwgNRaqZ8Jf9tNNZFs0-1nBw=s2048)

*Caption / Legend:*
Divider color roles used for light and dark schemes:

1. Outline variant

## Measurements

![Divider's measurement.](https://lh3.googleusercontent.com/nlIs7BqldeOjL6zGRe-b05BxdussoGedN4o35xv0KouVO0agDSZ_X4Zza-CK00qaH3gG-EGfemhgjOYIpr5ikHHaXvlswDJPLMQpZXC6Q1q-hw=s2048)

*Caption / Legend:*
Measurements

| Attribute | Value |
| --- | --- |
| Divider full-width | 100% |
| Divider inset left margin | 16dp |
| Divider inset right margin | 0dp |
| Divider middle-inset left margin | 16dp |
| Divider middle-inset right margin | 16dp |
| Space between divider & supporting-text | 4dp |
| Divider right margin | 8dp |
| Divider bottom margin | 8dp |

## Guidelines

![Inbox app using full-width dividers to separate messages.](https://lh3.googleusercontent.com/Ocsunun7K_5J7rsyAVoml4Fe1sIK0wlHa_SkLJ9wy0hcw1BaPbhvAuL1bR01kH-CmpcwnkXQvcwvNJVS-XCElkMz85j1Ov25pxAzRykVBviG=s2048)

*Caption / Legend:*
Full-width dividers

## Usage

Dividers are one way to visually group components and create hierarchy. They can also be used to imply nested parent/child relationships.

The divider can be used in two ways:

1. Full width
2. Inset

![Inbox app using full-width dividers to separate messages.](https://lh3.googleusercontent.com/WDF7BBHGj8yQ1azq5jKExXR0QzYBWIOu6yObWLR6w-aLYAjQLT7WWi3da0oMmSl5Nsc2UxhiE8YvMUJWJ8Ke0SmpzOXbQrVsjNwA5H_wolf0=s656)

*Caption / Legend:*
Full-width divider

![Music app using inset dividers to separate songs in a playlist.](https://lh3.googleusercontent.com/FgHeBjA2pgAJv-fZVU1JhTuAme8am-qHRLp7yzskrVdd9FsFxrwNBh8Qix8daXPUoszK8MDaLd1vZNub_ZijOJjvLRdTIe856ts-LGKDz9nmlg=s656)

*Caption / Legend:*
Inset divider

## Anatomy

A divider is a simple line.

![Illustration of a divider.](https://lh3.googleusercontent.com/PWseJ13-mt9cW2123ZzekkPFAqLgB998Vjq2SYtjrWMPrU6GPe3cu5JHXhYm9FyBUe7FhVf5WtzVRXEwPvRWYDqBNZIwgnUzzXch9vlLOns1=s2048)

*Caption / Legend:*
1. Divider

## Full-width dividers

Use full-width dividers to separate larger sections of unrelated content. They can be used directly on a surface or inside other components like cards or lists.

Full-width dividers can also separate interactive areas from non-interactive areas. 

They are used to group visual elements together, and indicate when elements are related to each other from an interaction perspective.

![Inbox messages visually separated by full-width dividers for improved readability.](https://lh3.googleusercontent.com/_YTqmkqyO4zUBu2JzRnIRTQKqR-G3eVpUcSkIgZoEeAdrvF6IhcFv7zEkr_oheP2gc4IJLDWHpqZlMHQbknQHIHSiaf5oBdJmr0vjtr1bvzK=s1352)

*Caption / Legend:*
Full-width dividers to indicate separation of content

![Non-interactive information on a card and a clickable read more link separated by a full-width divider. ](https://lh3.googleusercontent.com/8qy1TKw_O4CDgg-I21yl5m3LqA-zovoSJRXPBmNZrpjKwJOndAzvtwYQ6Ygcv8r1ZgKvNOZ1LyCOhhrFsyOEB9_sG2N9RvbsJxLI9kpijq_U=s1004)

*Caption / Legend:*
Use full-width divider lines to separate interactive and non-interactive areas of a container such as a card

![Full-width dividers used after every piece of content on a page.](https://lh3.googleusercontent.com/73z9FMjAg3kPm-IYbmoPDJ6fOmuspGFNCtmQEWgt8JLmF5oT4bjAP-A5Tcj4MVQ7ELxoXajWECc4pdB2jjIia12AzJPS-4MMIa60IPmJdeg=s1004)

*Caption / Legend:*
Use full-width dividers sparingly. Too many divider lines will make an interface look cluttered.

## Inset dividers

Use inset dividers to separate related content within a section.

Inset dividers are equally indented from both sides of the screen by default.

![2 different content sections separated by an inset divider.  ](https://lh3.googleusercontent.com/uAlit0uWcMbAwUFNbD7Y8crsaxcYSRvlS-I_AR1iGqbOTa3nE8mVfIb0BHugHnsDP1tYEe6YClZbzNovc5GN9HnvQkeWlcJHfbr-m0xE8Llq=s1352)

*Caption / Legend:*
Inset dividers separate related content, such as emails in a list. They should be used with anchoring elements such as icons or avatars, and align with the leading edge of the screen.

![3 types of related content separated by inset dividers on a mobile screen.](https://lh3.googleusercontent.com/yRjwwhcfrgoa4HRyAnyy-06NN-uC6jQ232awWcwLrDqhqan4dM72d3fdBibiEqqPuQ0Y57iEPJjpsPd3wedgBdeqmxPzhB0KYgW8gaRBrGF9fQ=s1004)

*Caption / Legend:*
Inset dividers in a list of related items

![Inset divider separating body text and selection chips.](https://lh3.googleusercontent.com/4XBmZ8OFNWayERiVW6Fdq8UFj6GsBuDAedl24YkYLxpx4fK3tpJ_nQbAmqkGmZZMRila9X3oBJ724e6wILbESRs6vscG6ssM7Xg6-a7l8N2isw=s1004)

*Caption / Legend:*
Inset dividers can be placed in the middle of a layout to separate elements such as body text from selection chips

### Using dividers both ways on the same screen

If dividers are used both ways in a UI, they must reinforce the hierarchy of information within different sections.

1. To separate a different kind of content, use a full-width divider
2. To separate nested content items, use inset dividers

![Dividers used to show content hierarchy: full-width for sections, inset for related items.](https://lh3.googleusercontent.com/egzEzqVWWnBhzhHhro6zbSyUckQRrRFnJps3EwXXFbsN91CgCSkg9ZeDIccnwo_Btq7YJxUgt0UZy_SxBrMqJt9QuZAjL-tPtuBhU1naBcozDw=s1352)

*Caption / Legend:*
Use a combination of inset and full-width dividers to reflect the hierarchy of information

List items with repetitive formats may not require an inset divider, in which using only the margin between items is acceptable.

![List with repetitive item formats. Visual separation achieved through margins only.](https://lh3.googleusercontent.com/NSGvcJJazPdtNGNH-K6P-F91kufNOLf9qtNdySyBRGvYt1edvTYfXpo8Ig6-lOGNj4mtEGwJAp6rq2qvO8sR2hWt3wir_oKoIUAjNF5fj8s=s1352)

*Caption / Legend:*
Content may not require a divider line

## Vertical divider

A vertical divider can be used to arrange content on a larger screen, such as separating paragraph text from video or imagery media.

![Image and text side-by-side, separated by a vertical divider on a large screen.](https://lh3.googleusercontent.com/INRwkh2QYMmX3bMlDSOkNkd4VkmiTdrtfSTugzZRjpXg8AJmwBetxY8X0J7R6tO4BDjrbfccqoIyk1HzoV1IQVUmWiClLOTi0XH_hPRTzTQpnA=s2048)

*Caption / Legend:*
Vertical divider in a large screen context

## Accessibility

Dividers are decorative elements, which have no contrast minimums.

![Divider separating messages in an inbox that are already separated with type styles and spacing is annotated as decorative.](https://lh3.googleusercontent.com/OZaQfCJIkmhGm1J_JkXzYIWGRF0v5Iw-HUlrr30InFSeGfmwf4nksdVFgUdbht_b4-rCEarR8deQhOVO9UdlGZnAn8Kckwr2tlvt0EtyDatu=s1352)

*Caption / Legend:*
Decorative elements have no contrast minimums
