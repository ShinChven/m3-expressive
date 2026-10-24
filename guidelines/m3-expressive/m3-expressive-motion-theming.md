# Adding Motion Physics with Jetpack Compose

> **Official Material Design 3 Specification**
> Source: [https://m3.material.io/m3-expressive-motion-theming](https://m3.material.io/m3-expressive-motion-theming)
> Last Updated: 2026-07-08T11:13:50.193Z

---

## Summary

Supercharge your Android transitions and animations with the new M3 Expressive motion theming system.

![](https://lh3.googleusercontent.com/pqB-aRpMXbp97_mqcDz3TQGTahy9rPkWMqiEJFvDqEWe5x5dXxtGLBqSQzOsGh0vADJ_fnsEiMzg9_3N4xYQY-Iy6cB3u6wRVbZTEdBkqK8o=s413)

*Caption / Legend:*
**Rebecca Franks**, Developer Relations Engineer, Android

![](https://lh3.googleusercontent.com/A-_GktEBGff8-WfSjYTy_Lz4lxtkUWvRz30gwrYYVpc7fz2WF57-0tV1i9ZnztzTsbpJPKAaUzZpTm8CPU-CwoE8dpqmhQ62CpqRM6JR7nZ4=s512)

*Caption / Legend:*
**Austin Fisher**, Sr. UX Content Designer

![](https://lh3.googleusercontent.com/vjjP3XL0c4hzRIvqQZnBLXUOvskIFTGdQv6R0VdT5aoT7ETD5e44_eCbd7_1XPAZRUuaRq6EfVDG1L3iArToYCLoY0IV7ihw-tL5RAMnvBSC=s512)

*Caption / Legend:*
**Gus Sonoda**, Sr. Staff Motion Designer

Material Design has an exciting new preview release — [Material 3 Expressive](https://m3.material.io/blog/building-with-m3-expressive?utm_source=blog&utm_medium=referral&utm_campaign=IO25). In this latest version 1.4.0-alpha14 of Material 3, you get access to a new theming system: motion!

Previously, Material motion was defined through non-customizable easing and duration values. Today, we’re introducing a new, customizable motion scheme using motion physics defined through a set of motion properties. These can be customized or overridden as needed, giving you more control than ever over how motion works and feels in your product.

Read on to learn how the new motion physics scheme works, how existing APIs have changed, and how to get started.

## Why Material motion?

As a product developer, you know that motion can significantly enhance the user experience. But achieving consistent motion across a complex app can be challenging. The new Material motion system solves this with:

- **Centralized control:** Define your motion theme once, and all Material Components and even your own custom components will inherit it, creating a unified and polished experience, eliminating scattered animation specs.
- **Simplified theming:** Stop fussing with individual duration or easing values. Choose from predefined schemes or create your own, using physics-based spring animations for a natural and engaging feel.
- **Adaptive animations:** Ensure that movement feels fast in the context of the device and adjusts based on user input since animations are not based on predefined time sets.

![](https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fm3%2Fimages%2Fmn4fyuj5-test.gif?alt=media)

## Getting setup

First, make sure you’re using the latest version of Compose Material 3:

If you do nothing more than update the Compose dependency, your apps will benefit from applying the standard motion scheme to all your uses of Material Components. But if you do want that extra bit of control, you can customize your scheme to suit your app.

*Note: When 1.4.0 goes to stable, the Material Expressive APIs will move to the next alpha (1.5.0-alphaX), and will no longer be available in 1.4.0. The APIs will go stable in the 1.5.0 release.*

## Fundamentals of the motion system

### Motion schemes: Expressive or Standard

The physics system has two preset motion schemes: **Expressive** and **Standard**. The scheme you choose will define how your product feels. While most motion in a product should use the same scheme, advanced customizations allow you to swap the scheme to emphasize key moments.

- **Expressive** is Material’s recommended motion scheme, and should be used for most situations, particularly hero moments and key interactions.
- **Standard,** with its small amount of bounce, feels more functional and should be used for utilitarian products.

## Animation specs: Spatial or Effect

Two distinct kinds of specifications make up the motion scheme: **Spatial** animation specs and **Effect** animation specs.

**Spatial** specs are used to animate changes in an object's position, orientation, size, and shape. The spring overshoots the final value and bounces into place.

![](https://lh3.googleusercontent.com/CWMlcn4iysCXeyvgc4NYGXLGuYc3XxUX4r0sZxJb0R1YDks9HSC2hQptFExqmD7wCboG270-b7pgZ3zaP-fN8RusrH9iq3Dhh0Pj7_oclOlB=s328)

*Caption / Legend:*
Spatial springs applied to movement.

![](https://lh3.googleusercontent.com/jQ-CxwzqRQJnmGKbSTD0CDhFD2NQTRKjd4bXZnKoEz1v-_BFuKvYlqacoBt4z3OUF_9WQpOaxcXONhlNWK7lnmE4_I6GA8p-ybdiddHyODpq=s328)

*Caption / Legend:*
Spatial springs applied to rotation.

**Effect** specs are used to animate an object’s properties such as color and opacity, where there shouldn’t be any overshoot.

![](https://lh3.googleusercontent.com/EFgd_M-QGccSaDTuqe64lZDDdXZwZPylVH5nqsy1vnlI7U_sxvOycf8oEkeC7sm77p7E3Ok__1u5TCSapKdPvtLlpv8GIZaHa2ewZW52S0hT=s656)

*Caption / Legend:*
Effects springs applied to opacity.

![](https://lh3.googleusercontent.com/Bh3-_cViFNE23c15P8Ts_Nvtr0KKHUsfcSEOywGLhjSc3lAdN9xN7DygUt41oijdV3V5zkaw0FbACi3V6yMB3895X50UjWdG_CCkKbBKBh7MgQ=s328)

*Caption / Legend:*
Effects springs applied to color.

Each animation can also have one of three speeds: **default**, **fast**, and **slow**. Most motion should use the default speed, but smaller elements may benefit from the fast speed and larger elements from the slow.

| Speed | Spatial example | Effects example |
| --- | --- | --- |
| Default | Animations that partially cover the screen, such as [bottom sheets](/m3/pages/bottom-sheets/overview) or [expanded navigation rails](/m3/pages/navigation-rail/overview) | Opacity of the content within a navigation rail |
| Fast | Animations for small components such as [switches](/m3/pages/switch/overview) and [buttons](/m3/pages/common-buttons/overview) | Color change of the switch handle |
| Slow | Full-screen [animations](/m3/pages/motion-transitions/transition-patterns/) | Full-screen content refresh |

**Speed tokens work across devices.** For example, the **Spatial “fast”** token will always be faster than **“default”** or **“slow,”** but the exact values of each token will differ depending on whether the device is a wearable, phone, or tablet. This ensures the movement feels fast in the context of the device. This also applies when using spring tokens in a custom motion scheme.

Notice that the Expressive and Standard schemes are presets of opinionated motion values. This makes it easier to swap schemes without changing the underlying property names.

![](https://lh3.googleusercontent.com/smuf6EuWMbN77Hv3d_SunEmOcTz0ZeZWerftjSIgz2Aw55bwpI8yR5DSuq6YEqV5WrJVzWOFQPzmCLLexaDJYewcpnb0O4eu4OBanGqVo3XLFg=s1352)

*Caption / Legend:*
Expressive and Standard MotionScheme

## Why use motion springs?

If you look at the predefined specifications on the motion schemes, you may notice that springs are used for the backing specifications. Why is this? Spring animations appear more natural by allowing for the ability to interrupt and retarget the animation when required.

For example, consider the difference between using tween and springs:

When interrupted and retargeted to a new destination, the spring animation uses its current velocity to perform a more seamless transition between the two states than tween.

It’s also beneficial to use springs to ensure your animations easily **adapt to different screen sizes**, as the tokens will always be slow or fast in the context of the device since it is not time that is specified  but rather damping and stiffness. For more details on the benefits of springs, check out the [documentation](https://developer.android.com/develop/ui/compose/animation/customize?_gl=1*9ewdxh*_ga*MzI1NjMyOTExLjE3NjI0MTE3NDU.*_ga_QPQ2NRV856*czE3NzQzNDgyNDgkbzE3OCRnMCR0MTc3NDM0ODM1MCRqNjAkbDAkaDA.#spring?utm_source=blog&utm_medium=motion&utm_campaign=IO25).

## Customizing your motion scheme

The real power of the new system lies in its flexibility. You can tailor the motion scheme to reflect your app’s brand or to underscore an important interaction.

### Choosing between Standard and Expressive schemes

Most developers won’t want to change much in terms of motion theming, but there are two out-of-the-box options for you to choose from: Standard or Expressive. Choosing MaterialExpressiveTheme at the top level will default to the Expressive motion scheme.

Make this choice once for your application at the theme level, and any Material Components with movement built in will use the selected spec from the theme.

With the expressive() scheme your apps take on the Material-recommended motion scheme, whereas with the standard(), the motion is, well, pretty standard — there is a minimal amount of bounce, even as both use springs under the hood.

### Creating your own Motion scheme

For more fine-grained control, you can create your own MotionScheme object and return a different AnimationSpec for each property.

In the code snippet below, we create a whole new playfulMotionScheme that by default adds a lot of bounce to components. This demonstrates how you can customize your MotionScheme.

## Custom component animations

To maintain consistency with other Material Components, ensure your custom components adopt the recommended motion changes and use the motion specs available through MaterialTheme.motionScheme.

For example, the following code uses tween() calls to animate the size and color of a text component when pressing and releasing its container:

Since scale represents a Spatial motion and color falls under Effects motion, we can leverage the motion scheme for consistent application. This approach aligns your component’s motion to the overall app experience and allows it to adapt automatically when switching between Standard and Expressive schemes/themes.

## Individual Material Component changes

In the expressive update, most Material 3 components use the motion physics system by default.

To add the motion-physics system to other components, including those that are custom built, use the specifications from above. See the full [M3 Expressive announcement blog post](https://m3.material.io/blog/building-with-m3-expressive?utm_source=blog&utm_medium=motion&utm_campaign=IO25) for more details on the new components.

## Get started today

Try out the new motion subsystem in Material 3 Expressive today, and let us know how you like it by tagging us on social media @GoogleDesign. If you find any issues, please file them on the [issue tracker](https://b.corp.google.com/issues/new?component=742043&template=1590761?utm_source=blog&utm_medium=referral&utm_campaign=IO25).

Happy theming!

*Special thanks to Material motion designers Gus Winkelman and Gustavo Gonzalez.*

## Up next

![](https://lh3.googleusercontent.com/E8P9pn11UtnXLi0_Z6sTHj6pSGtQkWwp22TnH_X5oq60j9QvUXka915aeitDVb7yWMLSKO-J3KNGZJ8BZLyJfi8WmN68NvrKTjZzQ4KD2POQ6Q=s512)
