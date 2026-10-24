# XR components

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/foundations/xr/components](https://m3.material.io/foundations/xr/components)
> Last Updated: 2026-07-17T07:32:25.430Z

---

## Summary

Learn how Material 3 Expressive components adapt to extended reality devices 

**Table of Sections:**
- Overview
- App bars
- Dialogs
- Nav bar
- Nav rail
- Toolbars

---

## Overview

- Leverage depth and space to create believable environments
- Design for comfort to minimize motion sickness and physical strain
- Map interactions, like gaze and gestures, to real-world expectations
- Group UI elements on floating spatial panels
- Provide feedback through spatial audio, haptics, and visual cues

## Material XR components

The following Material components are adapted for XR:

- [App bars](/m3/pages/xr-components/app-bars)
- [Dialogs](/m3/pages/xr-components/dialogs)
- [Navigation bar](/m3/pages/xr-components/nav-bar)
- [Navigation rail](/m3/pages/xr-components/nav-rail)
- [Toolbars](/m3/pages/xr-components/toolbars)

![Side view of an XR dialog showcasing spatial elevation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxgb0ta-06.png?alt=media)

*Caption / Legend:*
A dialog can be spatially elevated on the Z-axis above spatial panels

## App bars

starNote:XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR app bar with custom specs and guidance. See [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants & configurations

There is one app bar orbiter. It closely aligns with the small app bar. It can be configured to be center-aligned or left-aligned.

![Center and left-aligned app bar orbiters.](https://lh3.googleusercontent.com/4Vdn-iH-z3fko57KiqLULyRWIN845IFV7T3yC7smqZ9bVb5vXsO3s_-BaAojJNwXIcW6uorvb3qjbFxvnyeWP23NOEldVjMIdxoWm-07oCk=s2048)

*Caption / Legend:*
1. Center-aligned app bar
2. Left-aligned app bar

## Anatomy

![Diagrams of app bar orbiters identifying 4 internal elements.](https://lh3.googleusercontent.com/u2YwIRPzgQXNG2dOG6VjZ42_rl1vEV32kphFtG-in9JaGpdtAMOnMZTtyE49JpCTqNB4ZyTFyytePqLOah_QmHUJUUZYM73r7Zw3lr-j9g_J=s2048)

*Caption / Legend:*
1. Container
2. Headline
3. Trailing icons
4. Leading icon

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the app bar displays above the spatial panel on the Z-axis. Elevated app bars can use any of these color options:

![3 versions of app bar elevation color strategy.](https://lh3.googleusercontent.com/0hgrQRQF5mEFNy0s_RbxRDEV7fJYHsWUq0adzDor4Ogpq5nNCNmQrrJA-2hJgwv315HAyAMpxpVwDQe7RrZ7VOR5UGJGSrNE_56L4e2NLGyf=s2048)

*Caption / Legend:*
1. Surface container
2. Surface container high
3. Surface container highest

## Measurements

![Diagrams with measurements and padding for app bar orbiters.](https://lh3.googleusercontent.com/IzfAl6XWiO_JPWqGVK4P-7us8V9d_iehPeqgzzROuGZhbpvUMolBMBa9x9BMbL5iNZTTwEHNJsxIA28WUMtKuS501yiQq7_7I6q1RQlDN7Y=s2048)

*Caption / Legend:*
Measurements and padding for app bar orbiters

## Usage

An app bar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular app bar on the same plane as the body content to mimic a 2D experience.

## Behavior

### Global context

When placed in global context, the orbiter is centered at the top of the app it controls.

It stays anchored to the app during layout or content changes.

This ensures navigation elements are always easy to find and use.

### Local context

When placed in local context, the orbiter is centered at the top of the spatial panel it controls.

It repositions in response to layout or content changes.

### Additional app bars

In most cases, apps should only have one app bar orbiter, placed in global context.

## Placement

### Offset & inset positioning

In full space, an app bar orbiter can be positioned:

- Offset 20dp from the spatial panel
- Inset 12dp, overlapping spatial panel without obstructing content

![App bar orbiter with offset positioning.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowwbs16-09.png?alt=media)

*Caption / Legend:*
An app bar orbiter with a 20dp offset creates visual separation from the spatial panel

![App bar orbiter with inset positioning that obstructs content..](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowwe02f-10.png?alt=media)

*Caption / Legend:*
Don’t overlap the app bar orbiter and spatial panel more than 12dp

### Horizontal alignment

![An app bar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowwevxe-11.png?alt=media)

*Caption / Legend:*
Always align the app bar orbiter within the bounds of nearby spatial panels

![An app bar orbiter that extends beyond the width of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowwgpq6-12.png?alt=media)

*Caption / Legend:*
The app bar orbiter shouldn’t exceed the width of adjacent spatial panels

### Spatial panel alignment

By default, app bar orbiters are center-aligned to the spatial panel. Their width and placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/bidirectionality-rtl).

### Width boundaries

An app bar orbiter’s width should adjust to stay in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

This makes crucial navigation elements easy to find.

![An app bar orbiter with a width that fits in a person’s field of view.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowy6885-14.png?alt=media)

*Caption / Legend:*
Adjust the width of the app bar orbiter to fit in a person’s field of view

It’s not recommended to increase the width of an app bar orbiter beyond a person’s natural [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

This creates a visual imbalance and makes it difficult to find navigation elements.

![An app bar orbiter that exceeds the panel’s width and a person’s field of view.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowy73ja-15.png?alt=media)

*Caption / Legend:*
Avoid expanding the app bar orbiter beyond the adjacent panel’s width and a person’s field of view

### Adaptable width

When placed in a local context, an app bar orbiter can expand to the width of its adjacent spatial panel.

Be sure the orbiter stays in a person’s field of view, and test for usability.

## Accessibility considerations

[XR accessibility](/m3/pages/xr-design/accessibility) guidelines are still evolving. XR app bars should follow applicable Material [app bar accessibility standards](/m3/pages/app-bars/accessibility).

## Dialogs

starNote:XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) introduces spatial capabilities, such as using depth to make dialogs stand out from the background. Currently, [spatial dialogs](https://www.figma.com/community/file/1035203688168086460) are only available in full space. For home space, follow Material’s general [dialog guidance](/m3/pages/dialogs/overview).

## Color & elevation

XR uses color roles to communicate the elevation of UI elements. Dialogs can use two color options: **surface container high** or **surface container highest**.

starNote:Color and elevation for spatial dialogs aren’t available in Jetpack Compose yet. These need to be customized manually.

![2 spatially elevated dialogs with surface-container-high and surface-container-highest color roles.](https://lh3.googleusercontent.com/EjSLZTrL4uodRu2zxhzKEha1u7_lD_9F6-U3c1_IoEMey42K7eFCP-emC0YOBvl-xcHnJuNoSk_h-Nb-hvJAhQmBKbZTt-Xqt-H60sClLJ6cgw=s2048)

*Caption / Legend:*
1. Surface container high
2. Surface container highest

For effective visual hierarchy, a dialog should be the most prominent element.

Add a scrim behind a dialog to improve its visibility. Scrims prevent other content from being selected until the dialog action is complete.

![Dialog with surface-container-highest color and a scrim.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmox7g5yi-02.png?alt=media)

*Caption / Legend:*
Make sure a spatial dialog’s color is higher than all other UI elements, and use a scrim

The dialog should have the highest elevation in the product.

For example, if the dialog is **surface container high**, don’t use **surface container highest** for any other elements.

![Dialog with surface-container-high color and no scrim. An orbiter is at a higher elevation than the dialog.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmox7nrut-03.png?alt=media)

*Caption / Legend:*
If a dialog’s color is **surface container high**, don’t use **surface container highest** for any other element

## Usage

Only use [basic dialogs](/m3/pages/dialogs/guidelines#97ac3858-3932-4084-ae8e-73e42b7cb752) in XR. This keeps the required action in the person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place).

![Basic dialog in XR.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmox7s3sr-04.png?alt=media)

*Caption / Legend:*
A basic dialog elevated above an app in home space

![Full-screen dialog in XR.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmox7ytt7-05.png?alt=media)

*Caption / Legend:*
Avoid using full-screen dialogs in XR. Required actions could appear beyond a person’s field of view.

## Spatial dialogs

In full space, dialogs can be elevated spatially via [overrides](https://developer.android.com/develop/xr/jetpack-xr-sdk/material-design#use-enablexrcomponentoverrides). This helps dialogs stand out from their background in XR.

![Side view of basic dialog showcasing spatial elevation.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmox83eps-06.png?alt=media)

*Caption / Legend:*
Side view of a basic dialog with spatial elevation in full space

## Behavior

### Effect

The spatial dialog should scale uniformly. It also fades in when appearing, and fades out when disappearing.

The dialog's scrim only fades in and out.

### Movement

When activated, the spatial dialog rises from the app to the highest resting level on the Z-axis.

When the action is complete, it returns to a normal resting level.

The dialog's scrim stays at the app content level at all times.

To prevent motion sickness, use [standard easing](/m3/pages/motion-easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](/m3/pages/motion-easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens.

## Placement

Consider factors like field of view, viewing distance, and possible interactions when deciding where to place dialogs in XR.

A dialog’s placement can be adjusted to accommodate specific needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/bidirectionality-rtl).

### Elevation: Highest resting level

Display spatial dialogs at the **highest resting level**. When setting the depth value of the highest resting level, make sure the elevated dialog is at a comfortable viewing distance from the person. [More on spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation)

### Center spatial dialogs in field of view

Spatial dialogs should be centered in a person’s [field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place). If the dialog **can’t** track head movements, position it in the center of the app’s content.

If the dialog **can** track head movements, configure it with a lazy follow behavior. This keeps the dialog anchored to the center of a person’s field of view until an action is taken.

## Accessibility considerations

[XR accessibility](/m3/pages/xr-design/accessibility) guidelines are still evolving. Spatial dialogs should follow applicable Material [dialog accessibility standards](/m3/pages/dialogs/accessibility).

## Nav bar

starNote:XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR navigation bar with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Anatomy

![Diagram of navigation bar orbiter identifying 7 internal elements of the component.](https://lh3.googleusercontent.com/klVeOaaaMwxNa_W3IC8bbQPBzm2px87bnuY0WeMxdlt-V2oqj-7FMUFQ19AOe84qGspMekq2coIMmERquGEMzaWB4-emdoM_BrcxyGzrnQt76w=s2048)

*Caption / Legend:*
1. Container
2. Icon
3. Active indicator
4. Small badge (optional)
5. Large badge (optional)
6. Large badge label (optional)
7. Label text

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the spatial panel, on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav bars can use any of these color options:

![4 versions of elevation color strategy.](https://lh3.googleusercontent.com/ErJmjTcE4AIy4dr7PHYehMqYEn0UI580rBDsKd6qUXYRysNmAT-b3rynVJESfaxN0Hiz_u_13CrGH2uZSgOiHMTHcYH720nqpUj0owOCb18g=s2048)

*Caption / Legend:*
1. Surface container
2. Surface container high
3. Surface container highest
4. Tertiary container

## Measurements

![Measurements and padding for navigation bar orbiter.](https://lh3.googleusercontent.com/BcrwOJqRJbnxwXFBGwH96tPEyUbd-dcc-t6Kl466KmDu-pe0M40HvWFGkBlPtX2CdKWIRafPD43o-xTvsNexNEt-mYCZ7FEAqPXBZMkSGy_i=s2048)

*Caption / Legend:*
Navigation bar orbiter padding and measurements

## Usage

In full space, a navigation bar can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation bar on the same plane as the body content to mimic a 2D experience.

## Behavior

### Global context

When placed in global context, the navigation bar orbiter is centered at the bottom of the app it controls. It stays anchored to the app during layout or content changes. This ensures navigation elements are easy to find and use.

### Local context

When placed in local context, the navigation bar orbiter is centered at the bottom of the spatial panel it controls. It repositions in response to layout or content changes.

## Placement

### Navigation context

The position of the navigation bar orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation bar orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation bar orbiter should overlap spatial panels by 12dp and no more than half their height.

### Horizontal alignment

The navigation bar orbiter placement shouldn't exceed the width of adjacent spatial panels.

### Spatial panel alignment

A navigation bar orbiter should always be placed at the bottom of a spatial panel and within the immediate field of view (FOV).

Their placement can be adjusted to accommodate specific needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/bidirectionality-rtl).

Avoid placing the navigation bar orbiter at the top of a spatial panel, as this area is typically reserved for app bar orbiters or other critical UI elements.

## Accessibility considerations

XR navigation bars should follow applicable Material [nav bar accessibility standards](/m3/pages/navigation-bar/accessibility). [More on XR accessibility](/m3/pages/xr-design/accessibility)

## Nav rail

starNote:XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR navigation rail with custom specs and guidance. See [XR developer documentation](http://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There are two variants of navigation rail orbiters: the contained FAB and spatialized FAB navigation rails.

![Navigation bar orbiters with a contained FAB and a spatialized FAB.](https://lh3.googleusercontent.com/LTbAfuniDUxE5CSE6GZ6jbZIfZm1ve6oIy0VM0dLlOHrKwOwK673gmbTbQccfUqR3VzntYUsiumoJjVPGf2enwIgn6Zdg357hqxsVw2e0jw=s2048)

*Caption / Legend:*
1. Contained FAB rail
2. Spatialized FAB rail

## Anatomy

![Diagram of navigation rail orbiter identifying 9 internal elements of the component.](https://lh3.googleusercontent.com/QXw8Vtmzpdjkr8pT7-YI9BsDLetxKSQ_SgG92DhzpcSU19BI4E4wumNJFLo6RlwdQdFbKTp1s_X_i-uonqulQZHZhkTwofW3IZ1NL0bk3BTy=s2048)

*Caption / Legend:*
1. Container
2. Active indicator
3. Large badge (optional)
4. Badge (optional)
5. Large badge label (optional)
6. Label text
7. Icon
8. Embedded or spatialized FAB (optional)
9. Menu icon (optional)

## Color & elevation

On XR, color is used to highlight elevated UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the navigation bar displays above the [spatial panel](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-panels), on the Z-axis. Color communicates elevation on UI elements and orbiters. Elevated nav rails can use any of these color options:

![4 versions of elevation color strategy.](https://lh3.googleusercontent.com/PUP9hRb--aOh9alxfJ8GTosaseAIpkMhRlrOCZvN-HzA_vUJ94qMvbAkikPv-OmXmm93qceIK8q28Xg4BY359zhg95TE3PNJWbYoG7X7keQA=s2048)

*Caption / Legend:*
1. Surface container with tertiary FAB
2. Surface container high with tertiary fixed dim FAB
3. Surface container highest with tertiary fixed dim FAB
4. Tertiary container with primary FAB

## Measurements

![Measurements and padding for navigation rail orbiter with contained FAB.](https://lh3.googleusercontent.com/CFyQGJBT04A8x0XA9GIvKWTxYwd37_eA4Qr0A_cFbr4vl5gXTIyRsSnjEzqqtw2BFFW63JPiSegqtZGGJFnCjMV17slaSxa6l_RXDBPErQWJ=s1004)

*Caption / Legend:*
Navigation rail orbiter padding and measurements with contained FAB

![Measurements and padding for navigation rail orbiter with spatialized FAB.](https://lh3.googleusercontent.com/dkFQ1ILUuuM_LNF15rl-Qg4pGr9WX3hLZYgo9hqNoqEsbJPY6VuimtA4d6jzNDeSFwJ6YpjytNUQULppjQNjAw-hlGiUmEwshHlqCz843qf4=s1004)

*Caption / Legend:*
Navigation rail orbiter padding and measurements with spatialized FAB

## Usage

In full space, a navigation rail can appear in an orbiter for a more immersive experience. Currently, spatial capabilities, such as orbiters, are only available in full space. In home space, use a regular navigation rail on the same plane as the body content to mimic a 2D experience.

## Behavior

### Global context

Intended for global navigation, a nav rail orbiter should be centered along the left or right edge of the app it controls. It stays anchored to the app during layout or content changes to ensure controls are easy to find.

### Local context

Don’t place a navigation rail orbiter in local context or [between spatial panels](/m3/pages/xr-components/nav-rail#d965ae72-bd1b-45a9-b4d3-d1d542e72087). Local placement can make controls hard to find. Nav rails are designed for app-level navigation, so should only use the global context.

## Placement

### Navigation context

The position of the navigation rail orbiter should communicate its navigational context:

- Use **offset positioning** for global actions that affect the overall app experience
- Use **inset positioning** for local actions that are specific to a spatial panel

A navigation rail orbiter can either overlap or be positioned adjacent to spatial panels with a 20dp margin for visual separation.

### Inset positioning

Don’t obstruct content. To ensure a balanced and uncluttered layout, a navigation rail orbiter should overlap spatial panels by 12dp and no more than half their width.

### Vertical alignment

A navigation rail orbiter can be aligned to the top, middle, or center of spatialized panels, providing different levels of visual prominence and accessibility.

Align the navigation rail orbiter based on the specific design and user experience goals for the application.

The navigation rail orbiter placement shouldn't exceed the height of adjacent spatial panels.

### Spatial panel alignment

Avoid placing a navigation rail orbiter between spatial panels. This negatively affects the interface structure.

Navigation rail placement can be adjusted to accommodate specific needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/bidirectionality-rtl).

For layouts that span more than two spatial panels, consider using a [navigation bar orbiter](/m3/pages/xr-components/nav-bar).

## Spatialized FAB

There are two variants of navigation rail orbiters with different FAB treatments:

- **Contained FAB rail:** A contained FAB within the rail. This offers a compact and familiar layout.
- **Spatialized FAB rail:** The FAB becomes an orbiter of its own and is placed outside the navigation rail orbiter. Use this for higher emphasis and a distinct spatial effect.

Use the spatialized FAB rail to emphasize key actions and leverage XR hierarchy. Use the contained FAB rail to be more subtle, and align the experience with the baseline navigation bar.

To maintain visual association, place the spatialized FAB in close proximity to the navigation rail orbiter. Material recommends a 20dp margin.

The spatialized FAB can be placed above or below the navigation rail orbiter.

While the spatialized FAB and navigation rail orbiter are typically positioned together, their placement is adaptable.

## Accessibility considerations

[XR accessibility](/m3/pages/xr-design/accessibility) guidelines are still evolving. XR navigation rails should follow applicable Material [nav rail accessibility standards](/m3/pages/navigation-rail/accessibility).

## Toolbars

starNote:XR guidelines are primarily intended for designers. Find what’s implemented in code in the [design kit](https://www.figma.com/community/file/1035203688168086460).

Extended reality (XR) interfaces have special design requirements, like showing apps in 3D space. Material has an XR toolbar with custom specs and guidance. Read [XR developer documentation](https://developer.android.com/design/ui/xr/guides/foundations) for more details.

## Variants

There is one toolbar orbiter. It closely aligns with the floating toolbar. It can be configured to be horizontal or vertical. [Go to XR toolbar API reference](https://developer.android.com/reference/kotlin/androidx/xr/compose/material3/package-summary#HorizontalFloatingToolbar(kotlin.Boolean,androidx.compose.ui.Modifier,androidx.compose.material3.FloatingToolbarColors,androidx.compose.foundation.layout.PaddingValues,androidx.compose.material3.FloatingToolbarScrollBehavior,kotlin.Function1,kotlin.Function1,kotlin.Function1))

![Horizontal and vertical toolbar orbiters.](https://lh3.googleusercontent.com/ds2nZJkQR-ChJVdNLWz0le3T0Qrn7_7xC3m88jQKzP0vtewiS711HSyShuX5Z7CS9izVcwCl3jqtb723qZpmFp8ufYsaP3jSAPnFkdcoT7o7=s2048)

*Caption / Legend:*
1. Horizontal floating toolbar
2. Vertical floating toolbar

## Anatomy

![2 elements of a toolbar orbiter: container and placed components. ](https://lh3.googleusercontent.com/wPnd0meDx_6WgA0RcmAh3jBLHG0iuYG-GonjBTpRZXx8jbGK2mhttARyxdipcS3kS2iSHJFhSFb3eXw_k8DPr__ywvHli4PENaLIVfmYLaYjrA=s2048)

*Caption / Legend:*
1. Container
2. Placed components

## Color & elevation

XR uses color to communicate the elevation of UI elements and orbiters. With [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation), the toolbar displays above the spatial panel on the Z-axis. Elevated toolbars can use any of these color options:

![4 versions of toolbar elevation color strategy.](https://lh3.googleusercontent.com/w6VacobEqegZ2sNrmTh9bvGoH7GlIqFV0rkepmfEObuvNceGyegLbNeOQKw6DnY0PBwm-knNvVozQEhanqE7R96pjD97g5OM6PKUq5sK8w0=s2048)

*Caption / Legend:*
1. Surface container
2. Surface container high
3. Surface container highest
4. Tertiary container

## Measurements

![Diagram with measurements for toolbar orbiters.](https://lh3.googleusercontent.com/QKzN5tAxYlmJ3FQZI3BGI6GDG249mlMDhzYL0PQBj2ABlwwZ25a465b1e7KuZujPAXcSFIpWEZA0_wvh45s7ZHRq-uBsZiyEC74zuaStolX8=s2048)

*Caption / Legend:*
Measurements for toolbar orbiters

![Diagram with 12dp padding for toolbar orbiters.](https://lh3.googleusercontent.com/mrquic0M5r5AkyYCEdVNfNfr6sTJwfTLOOO6y0-G4bIIMOKCoqXOt15g5aJHGa8OCeh6ubTElhCaN1nnKsy_ldeb3L13b6YTK7QHQIKSLXMh=s2048)

*Caption / Legend:*
Padding for toolbar orbiters

## Usage

A toolbar can appear in an orbiter for a more immersive experience. Currently, this spatial capability is only available in full space. In home space, use a regular toolbar on the same plane as the body content to mimic a 2D experience.

## Behavior

### Local context (recommended)

When placed in local context, the toolbar orbiter is centered at the bottom of the spatial panel it controls.

It repositions in response to layout or content changes.

### Global context

When placed in global context, the toolbar orbiter is centered at the bottom of the app.

It stays anchored to the app during layout or content changes.

### Expand & collapse

Toolbar orbiters with more than five items can expand and collapse to reveal or hide additional content.

When a toolbar orbiter expands, it stays within the bounds of the adjacent spatial panel.

Alternatively, more complex toolbars can be split into multiple toolbars.

### Additional toolbars

In some cases, full space apps can have more than one toolbar orbiter, placed in either global or local context.

## Placement

### Offset & inset positioning

In full space, a toolbar orbiter can be positioned adjacent to or overlap a spatial panel.

![Toolbar orbiter with offset positioning.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxer5rt-11-do.png?alt=media)

*Caption / Legend:*
The recommended toolbar orbiter position from the spatial panel is:

- Offset by 20dp or
- Inset by 12dp

![Toolbar orbiter with inset positioning above 12dp that obstructs content on the spatial panel. ](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxetpx5-12-don't.png?alt=media)

*Caption / Legend:*
To prevent content obstruction, don’t overlap the toolbar orbiter and spatial panel above 12dp

### Horizontal alignment

![A horizontal toolbar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxewjln-13-do.png?alt=media)

*Caption / Legend:*
Always align the toolbar orbiter within the horizontal bounds of nearby spatial panels

![A horizontal toolbar orbiter that extends beyond the width of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxeyben-14-don't.png?alt=media)

*Caption / Legend:*
The toolbar orbiter shouldn’t exceed the width of adjacent spatial panels

### Vertical alignment

![A vertical toolbar orbiter placed within the bounds of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxf0mbw-15-do.png?alt=media)

*Caption / Legend:*
Always align the toolbar orbiter within the vertical bounds of nearby spatial panels

![A vertical toolbar orbiter that extends beyond the height of its spatial panel.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfyo8f-16-don't.png?alt=media)

*Caption / Legend:*
The toolbar orbiter shouldn’t exceed the height of adjacent spatial panels

### Spatial panel alignment

By default, toolbar orbiters are center-aligned to the spatial panel. Their placement can be adjusted to accommodate specific user needs, such as improved ergonomics or [right-to-left (RTL) languages](/m3/pages/bidirectionality-rtl).

![Toolbar orbiter alignment options in relation to spatial panels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfvpq3-17.png?alt=media)

*Caption / Legend:*
Depending on the configuration (horizontal or vertical) of the toolbar orbiter, it can align to the center, left, right, top, or bottom of a spatial panel

Avoid placing a vertical toolbar orbiter between spatial panels. 

This negatively affects the interface structure and can make it difficult to find.

![A vertical toolbar orbiter is placed between 2 spatial panels.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmemfx943-18-don't.png?alt=media)

*Caption / Legend:*
Don't place a vertical toolbar orbiter between spatial panels

## Accessibility considerations

[XR accessibility](/m3/pages/xr-design/accessibility) guidelines are still evolving. XR toolbars should follow applicable Material [toolbar accessibility standards](/m3/pages/toolbars/accessibility).
