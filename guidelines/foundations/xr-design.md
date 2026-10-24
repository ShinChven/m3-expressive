# Design

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/foundations/xr/design](https://m3.material.io/foundations/xr/design)
> Last Updated: 2026-07-17T07:32:25.090Z

---

## Summary

Resources and guidance for immersive extended reality (XR) devices

**Table of Sections:**
- Overview
- Interaction
- Layout
- Accessibility

---

## Overview

- Use depth and expanded space to create believable environments
- Map interactions, like gaze and gestures, to real-world expectations
- Group UI elements on floating spatial panels
- Design for comfort to minimize motion sickness and physical strain
- Provide feedback through spatial audio, haptics, and visual cues

## Resources & availability

| **Type** | **Resource** | **Status** |
| --- | --- | --- |
| Design | [M3 Design Kit](https://www.figma.com/community/file/1035203688168086460) (Figma) | Available |
|  | [Android XR immersive design guidelines](https://developer.android.com/design/ui/xr/guides/get-started) | Available |
|  | [Design for AI glasses](https://developer.android.com/design/ui/ai-glasses) | Available |
| Implementation | [Build for Android XR](https://developer.android.com/develop/xr/get-started) | Available |
|  | [Jetpack XR SDK](https://developer.android.com/develop/xr/jetpack-xr-sdk) | Available |
|  | [Material Design for XR API reference](https://developer.android.com/jetpack/androidx/releases/xr-compose-material3) | Available |

## Principles

### Use familiar patterns

Material components like buttons and menus help people navigate spatial apps with confidence.

![A button opens to show a 3D Material menu.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmoxbsbzn-Spatialize_Components_10.gif?alt=media)

*Caption / Legend:*
In XR, a Material menu uses elevation to appear in 3D

### Prioritize comfort

Place content in the center of a person’s field of view, and design for different body positions, such as seated, standing, and reclined.

![A person sitting in a chair in an immersive XR environment, with lines marking their field of view.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowiikrm-03.png?alt=media)

*Caption / Legend:*
Positioning content in a person’s field of view keeps the UI visible and minimizes the need for excessive head or body movement

### Embrace depth

Use elevation and 3D models to add volume, create a sense of realism, and spatial understanding.

![A person stands in front of an XR app with 3 curved panels and a 3D shark.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowilveb-04.png?alt=media)

*Caption / Legend:*
3D models can be viewed from all angles and moved with natural interactions

### Design for accessibility

Design apps to work with system-level assistive technologies like screen readers, voice commands, and text resizing. Provide large target sizes, support multimodal inputs, and ensure text is legible against any background.

![1 XR settings icon button with labeled target size and offset. 1 microphone icon button with a visible cursor.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowin62l-05.png?alt=media)

*Caption / Legend:*
In XR, icon buttons should have a 56dp target size and 4dp offset

## Material XR components

The following Material components are adapted for XR:

- [App bars](/m3/pages/xr-components/app-bars/)
- [Dialogs](/m3/pages/xr-components/dialogs)
- [Navigation bar](/m3/pages/xr-components/nav-bar)
- [Navigation rail](/m3/pages/xr-components/nav-rail)
- [Toolbars](/m3/pages/xr-components/toolbars)

## XR terms

- [3D models](https://developer.android.com/design/ui/xr/guides/3d-content): Digital objects rendered with depth and volume
- [Field of view](https://developer.android.com/design/ui/xr/guides/spatial-ui#where-place): The area a person can see without turning their head
- [Full space](https://developer.android.com/design/ui/xr/guides/foundations#modes): Android XR’s immersive mode that supports spatial components
- [Home space](https://developer.android.com/design/ui/xr/guides/foundations#modes): Compatible with mobile and large screen apps, but doesn’t support spatial components
- [Orbiters](https://developer.android.com/design/ui/xr/guides/spatial-ui#orbiters): Floating elements that control the content within spatial panels, full space only
- [Passthrough](https://developer.android.com/design/ui/xr/guides/foundations#give-users): A blended reality where an XR device displays multiple large apps and the user’s physical environment
- [Spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation ): Displays a component above an app on the Z-axis
- [Spatial environments](https://developer.android.com/design/ui/xr/guides/environments): The 360° 3D virtual worlds people see in an immersive app
- [Spatial panels](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-panels): A container for UI elements, interactive components, and immersive content, full space only

## Interaction

XR interactions should be flexible, comfortable, and intuitive. People expect to interact with digital objects just like they do with physical ones.

## Natural interactions

Natural interactions like gestures allow people to navigate, select, and move content using their hands. Gestures should be:

- Easy to learn
- Follow familiar patterns, such as press, pinch, and swipe on mobile
- Comfortable to use repeatedly

Support one-handed interactions for essential actions. Don’t require large, repetitive arm movements, as they can cause fatigue.

[More on Android XR gestures](https://developer.android.com/design/ui/xr/guides/foundations#understanding-system)

### System navigation

People should be able to open a navigation menu anywhere, anytime.

On Android XR, the system-level navigation menu includes:

- Go back: Operates the same as the [back gesture](https://developer.android.com/guide/components/activities/tasks-and-back-stack) on Android phones
- Launcher: Goes to the home screen
- Recents: People can open, close, and switch apps

## Multimodal inputs

XR apps should support flexible, multimodal inputs, such as hand and eye tracking, voice, keyboard and mouse, and controllers.

[More on Android XR multimodal inputs](https://developer.android.com/design/ui/xr/guides/foundations#design-multimodal)

### Hand & eye tracking

Tracking allows people to interact with the virtual world without a controller.

Hand tracking

- Direct: People can touch, grab, or push virtual objects in arm's reach
- Ray-based: A ray, like a laser pointer, extends from the hand to target distant items, then a pinch selects it

Eye tracking

- Enables gaze and dwell interactions
- Looking at an object triggers a hover state

### Voice, keyboard, mouse, & controller inputs

XR apps should also support voice and physical inputs including:

- Voice for hands-free text entry on virtual keyboards
- Voice commands for common actions like **Open Settings** or **Go back**
- Mouse & keyboard inputs for precision and text-heavy workflows
- Six degrees of freedom (6DoF) controllers for gaming or complex 3D manipulation

## Motion

In XR, motion sickness can happen when visual cues disconnect from the inner ear's sense of balance.

To keep people comfortable:

- Use [standard easing](https://m3.material.io/m3/pages/motion-easing-and-duration/tokens-specs#601d5552-a6e6-4d74-9886-ff8f24b9ec35) and [long duration](https://m3.material.io/styles/motion/easing-and-duration/tokens-specs#48bf653e-46f9-48f5-87e0-eaf8ea3fe716) motion tokens
- Maintain a stable horizon line
- Limit continuous motion. To switch locations, use teleportation or instant jump instead.
- Use tunnel vision or vignetting to reduce the field of view while in motion

## Feedback

Since virtual objects lack physical resistance, use visual, audio, and sensory feedback to confirm interactions.

### Visual cues

Use hover icons, focus indicators, ripples, text labels, and elevation changes to show an object’s interaction state.

To indicate an item is targeted, use [spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation ) or a highlight state.

### Spatial audio

Sound emitters can be positioned in 3D space and provide audio confirmation of an action. For example, add a **click** sound when a button is pressed.

### Haptics

For controllers, allow people to turn vibration on or off to simulate the feel of touching or grabbing an object.

## Layout

In XR, a layout extends beyond the screen into the physical world. Spatial panels, 3D models, and an immersive environment can be arranged anywhere on an infinite canvas.

Unlike mobile layouts which are constrained by screen edges, XR layouts must account for:

- Depth on the Z-axis
- Viewing distance
- A person's field of view

[More on Android XR layouts](https://developer.android.com/design/ui/xr/guides/spatial-ui)

## XR layout basics

The fundamental building block of an Android XR app is the spatial panel. Panels serve as containers for UI elements and can be spatially elevated alongside orbiters, 3D models, and environments.

starNote:Spatial panels are available in full space only. They aren't currently available in home space.

### Spatial panels

In full space, spatial panels are flexible canvases that can contain UI elements, media, and spatial video.

They often serve as the anchor for 3D models and orbiters.

#### Size & position

Full space supports panel placement in both passthrough and virtual environments.

By default, spatial panels launch:

- Size: 1024x720dp
- 1.75 meters away from a person
- With 32dp rounded corners

In full space, panels have no minimum size. The maximum panel size is 2560x1800dp.

When people switch from full space to home space, spatial panels usually stay in the same predictable position.

![A visualization of a spatial panel 1.75 meters from a person.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowrftn5-03%20-%20option%20b.png?alt=media)

*Caption / Legend:*
At a 1.75 meter launch distance, a spatial panel's size is 1024x720dp

![A diagram of a person looking at a spatial panel 5 degrees below eye level.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowrhano-04.png?alt=media)

*Caption / Legend:*
Place the panel's vertical center 5° below eye level to maximize comfort

![An XR panel in the center 41 degrees of a person’s field of view.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowrjlzr-05.png?alt=media)

*Caption / Legend:*
Place primary content in the center 41° of a person’s field of view

#### Adaptive design

Spatial panels dynamically scale based on their distance from a person.

Material 3 components use [adaptive design](/m3/pages/layout-overview/adaptive-design) to ensure content automatically scales and reflows to remain legible and comfortable at any distance or angle.

To avoid system UI conflicts, stay within default movement limits:

- Minimum depth: 0.75 meter
- Maximum depth: 5 meters

#### Grouping panels

In full space, an app can be broken up into multiple spatial panels, arranged in a flat, curved, or arbitrary layout.

![3 spatial panels in a flat, straight line in front of a person.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowrvz0k-07.png?alt=media)

*Caption / Legend:*
Flat layout: Panels are arranged in a straight line. Best for comparing information side by side.

![3 spatial panels curved around a person.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowrwm48-08.png?alt=media)

*Caption / Legend:*
Curved layout: Panels curve around the person. Best for immersive media or wide-format dashboards.

![3 spatial panels, each in a unique position, angle, and size.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmows5o73-09.png?alt=media)

*Caption / Legend:*
Arbitrary layout: Panels are placed freely in space. Best for multi-tasking.

### Orbiters

An orbiter is a floating element that accompanies a spatial panel.

Use orbiters for navigation UI that needs to stay accessible without obscuring the main content.

Material [XR components](/m3/pages/xr-components/overview) automatically adapt into orbiters.

### Spatial elevation & depth

Use the Z-axis to create volumetric UI. Unlike 2D elevation which uses shadows, volumetric UI uses actual depth.

- [Spatial elevation](https://developer.android.com/design/ui/xr/guides/spatial-ui#spatial-elevation) can create hierarchy, bring active elements forward, and push background elements back
- Layering can separate UI layers physically. For example, a scrim can float several centimeters behind a dialog box.

## Behavior

### Anchoring

In [passthrough](https://developer.android.com/design/ui/xr/guides/foundations#give-users), layouts can interact with the physical world:

- World-locked: Panels stay in a specific spot in the room, like a music player anchored to a table
- Head-locked: Avoid locking UI directly to the person's head view, as it can feel jarring. Instead, use a lazy follow behavior where the UI gently drifts to catch up with the person's movement.

### Color contrast & dimming

When using standard **surface** tokens, panels automatically handle contrast:

- Passthrough: If the physical room is bright, the system dims the background to ensure the UI remains legible
- Virtual environments: Panels adapt to the lighting of the virtual world

[More on XR colors](https://developer.android.com/design/ui/xr/guides/visual-design#colors)

## Accessibility

## Use cases

XR presents unique physical constraints. Designing accessible XR products means accounting for different bodies, postures, and sensory abilities.

People should be able to do the following with assistive technology:

- Navigate and interact with spatial content using their preferred input method
- Understand the spatial environment and select interactive elements
- Customize the experience to fit their physical posture and comfort

[More on Android XR accessibility](https://developer.android.com/design/ui/xr/guides/get-started#make-app)

## System-level accessibility

Android XR adapts familiar Android assistive technologies for spatial environments.

To ensure an inclusive experience, design XR apps to work with system-level features like Google's [TalkBack](https://developer.android.com/guide/topics/ui/accessibility/testing) screen reader, voice to text, live captions, [dwell control](https://support.google.com/accessibility/android/answer/7071579), magnification, and color inversion and correction.

[Android XR app quality guidelines](https://developer.android.com/docs/quality-guidelines/android-xr)

## Text accessibility & color contrast

Make sure text and UI are legible in different lighting conditions and environments. For example, in passthrough, the background might be a bright window or a dark room.

- Use a minimum 14dp body font size
- Ensure high contrast between text and background
- Use standard background color roles like **surface container**, rather than custom colors, so they dim automatically
- Support light and dark themes

## Physical accessibility

To support different mobility levels, provide flexible input methods and positions:

- Actions should be achievable with one hand, voice, or eye control
- Don’t require two-handed gestures
- Design for seated, standing, and reclined positions
- Allow people to recenter and pull UI closer to them

## Target size

Use large target sizes to make XR interactions precise and accessible.  

Interactive elements should have:

- 56x56dp or larger target
- 48x48dp or larger visual affordance
- 4dp offset

Don’t overlap targets of different elements.

Targets and icons should scale with their parent container or label text.

![A gear icon with a 56dp target size and 4dp offset.](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Fmowvwpjp-04.png?alt=media)

*Caption / Legend:*
Use 56dp or larger target sizes for interactive elements
