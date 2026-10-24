# Global writing

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/foundations/content-design/global-writing](https://m3.material.io/foundations/content-design/global-writing)
> Last Updated: 2026-07-17T05:07:22.750Z

---

## Summary

Global writing is easier to read, understand, and translate. This guidance is for all American English that is localized.

**Table of Sections:**
- Overview
- Word choice

---

## Overview

## Overview

### Global writing

Global writing is the practice of writing inclusively for many cultures and optimizing for localization. This makes writing easier to read, understand, and translate. Writing for localization is necessary when a product will be translated, but can also be a helpful lens when writing for anyone.

![3 apps in different languages.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo0vnn-1.png?alt=media)

## Word choice

## Word choice

### Use global examples & explain local references

References to local places, holidays, and companies won’t always make sense to global audiences.

![Empty wishlist screen that references the holidays](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo362u-1_do.png?alt=media)

*Caption / Legend:*
Use generalized, global examples. Most countries and cultures have holidays.

![Empty wishlist screen that references Christmas](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo41ao-2_don't.png?alt=media)

*Caption / Legend:*
Don’t call out a specific country or culture’s holiday

If it doesn’t make sense to use a global example, explain the reference in the message description so the translator can substitute a locale-specific example. Some instances where local references should be called out include:

- Locations
- Names (common first names and nicknames)
- Currencies
- Temperatures
- Date formats
- Providers (internet and cable)

![Empty state that references New York with message description about replacing New York with a well-known city in other languages](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo4v88-3.png?alt=media)

*Caption / Legend:*
Help translators understand the context by adding message descriptions

### Use short, simple sentences

Break text into shorter sentences. Use bullets or separate content into sections with headings.

Other languages average at 1.5 times longer than English, so text that’s short may be long when translated.

![2 screens side by side, in English and German](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo5uis-4.png?alt=media)

*Caption / Legend:*
Many languages, like German, are longer than English

### Avoid abbreviations

Abbreviations don’t translate well and can be confusing out of context. Spell things out whenever possible.

However, common abbreviations for time are acceptable.

![Dialog with options that aren’t abbreviated](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo6t6b-5_do.png?alt=media)

*Caption / Legend:*
Use clear names to refer to things

![Dialog with options that are abbreviated](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo82rh-6.png?alt=media)

*Caption / Legend:*
Avoid abbreviations. If they're used, provide their meaning in message descriptions.

### Clarify pronouns

Using pronouns, like “it,” can get tricky when translators are working with small, unconnected strings of text and when nouns have genders in many languages. Repeat the noun, or clarify the noun in a message description.

![Photo app with snackbar that reads “Couldn’t move photo”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuo92qu-7_do.png?alt=media)

*Caption / Legend:*
Using nouns instead of, or in addition to, pronouns can help clarify future and past user actions

![Photo app with snackbar that reads “Couldn’t move it to ‘Travel’ folder because it’s unavailable”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuoacju-8_don't.png?alt=media)

*Caption / Legend:*
Avoid using pronouns when it’s unclear what nouns they’re referring to, especially when explaining user actions

### Clarify “this” and “that”

Don’t start a sentence with "this" or "that" unless it's immediately followed by the noun. When the noun is unclear, the sentence is more difficult to translate.

![Form with clear writing that doesn’t use “this” or “that”](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuobsfb-9_do.png?alt=media)

*Caption / Legend:*
Make sure it’s clear who text is referring to

![Form with a subhead that reads “This can be seen by your IT administrator.” It’s not clear what “this” refers to.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuocbnw-10_don't.png?alt=media)

*Caption / Legend:*
Avoid using “this” and “that”

### Avoid idiomatic, colloquial, and polite expressions

Idiomatic or colloquial phrases can be confusing if the meaning isn’t clear. If you use them, clarify the purpose and context of the phrase to help the translator choose an appropriate alternative.

Avoid polite expressions, such as “Please,” “Sorry,” and “Thank you,” especially in error messages. However, "please" may be used when asking the user to do something inconvenient.

![Empty state with illustration that reads “Let’s go”](https://lh3.googleusercontent.com/fbOdPNZxbnWg8h1AtfrVzrHEfx87HqTbn1uV7XqiOCvs017tfdkalXYclDMLKuAlW2fhnxehv4sRAOflGxm7TFe7ckUfdhE57Pkwu57MUkZP=s656)

*Caption / Legend:*
Clear, everyday language can be used in an expressive and whimsical way when paired with imagery

![Empty state with illustration that reads “Let’s get this party started”](https://lh3.googleusercontent.com/hIGnwFcZ-4N3wxDr7EvS9-3j_B_l5DbU24maq8wmMOyakUI4sgTD9O-Ab5Ck8oxjJx0samUsMnB-Vlg40cWx6Yx3S9SHTgoqj9uGcQk-yDPv=s656)

*Caption / Legend:*
Idiomatic phrases can be difficult for everyone to understand and for translators to localize

### Reduce technical jargon

Technical terms don't always translate. Descriptions should be simple, and in some cases literal, to avoid confusion when translating.

![Dialog that prompts people to sign up to try new products](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuoeiu1-13_do.png?alt=media)

*Caption / Legend:*
Plain language is easier for everyone to understand

![Wordy and confusing dialog that prompts people to sign up for new communication preferences](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuoexnd-14_don't.png?alt=media)

*Caption / Legend:*
Confusing language makes it difficult for people to understand the actions they’re taking

### Clarify ambiguities

Some words have multiple meanings. For example, “traffic,” “filter,” and “change” can be used as either nouns or verbs. Avoid using both meanings of the word in the same string or body of text. If a word has the potential to be confusing, provide as much context as possible in the message description so the translation will be accurate.

![Screen displaying devices and speakers at home, next to bottom app bar with “home” button](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvuoff5i-15.png?alt=media)

*Caption / Legend:*
Clarify words that have multiple meanings. “Home” could reference a homepage or where someone lives.
