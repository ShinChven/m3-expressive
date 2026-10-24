# Material Design 3 Expressive: Architecture, Specifications & Implementation Audit

> **Comprehensive Reference & Status for `material-components`**  
> Source: Official Google Material Design 3 & Material 3 Expressive Specifications ([m3.material.io](https://m3.material.io))  
> Synchronized Carbon Version: `2026-10-13_06-10-19`

---

## 1. Overview: What is Material Design 3 Expressive?

**Material Design 3 Expressive** (introduced by Google at I/O 2025/2026) is the latest evolution of Material Design. While baseline Material 3 (2021) focused on personalized dynamic color and functional clarity, M3 Expressive introduces **emotional resonance, tactile motion physics, interactive shape morphing, and scalable component sizing**.

The design system evolves from static, uniform controls to expressive, tactile surfaces that respond naturally to user intent.

---

## 2. The Five Pillars of Material 3 Expressive

```
                     ┌─────────────────────────────────────────┐
                     │       Material Design 3 Expressive      │
                     └────────────────────┬────────────────────┘
                                          │
    ┌──────────────┬──────────────────────┼──────────────────────┬──────────────┐
    ▼              ▼                      ▼                      ▼              ▼
┌────────┐   ┌────────────┐        ┌─────────────┐        ┌─────────────┐   ┌──────────┐
│ Color  │   │   Motion   │        │    Shape    │        │ Sizing Scale│   │Component │
│  2025  │   │  Physics   │        │  Morphing   │        │   XS - XL   │   │Evolution │
└────────┘   └────────────┘        └─────────────┘        └─────────────┘   └──────────┘
```

### Pillar 1: Color Spec 2025 & Expressive Harmonization
- **Color Spec**: Baseline M3 uses the `2021` spec; Expressive introduces the `2025` spec.
- **`SchemeExpressive`**: A dedicated dynamic color palette algorithm featuring high-chroma accent pairs, vibrant tonal transitions, and distinct container contrasts.
- **Explicit Role Pairings**: Replacing legacy single-surface assumptions with dedicated container/on-container pairings for all button and FAB variants (`primary-container`, `secondary-container`, `tertiary-container`, etc.).

### Pillar 2: Motion Physics (Spring Dynamics)
- **Moving Beyond Fixed Curves**: Replaces standard bezier easing with physical spring dynamics (`damping` and `stiffness`).
- **Spatial vs. Effects Motion**:
  - **Spatial Springs**: For position, size, and layout transitions (`fast.spatial`, `default.spatial`, `slow.spatial`).
  - **Effects Springs**: For opacity, color, and blur transitions (`fast.effects`, `default.effects`, `slow.effects`).

### Pillar 3: Shape Morphing
- **Corner Size Adaptation**:
  - Resting states: **Round** (full pill `corner.full`) or **Square** (size-scaled rounded rectangle).
  - **Pressed State Morph**: Corners actively squish to a smaller radius under press/hold, providing tactile visual feedback.
  - **Toggle Selection Morph**: Toggle controls switch resting shape (e.g. from round when unselected to square when selected).

### Pillar 4: 5-Tier Component Sizing (XS to XL)
Baseline M3 relied on fixed 40dp buttons and 56dp FABs. Expressive introduces a unified 5-tier size scale across action components:

| Size Tier | Height | Target / Density | Corner Radius (Square) | Pressed Corner Radius | Label Typestyle | Icon Size |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Extra Small (XS)** | 32dp | High density / compact | 12dp (`medium`) | 8dp (`small`) | `label-large` | 20dp |
| **Small (S - default)**| 40dp | Standard UI actions | 12dp (`medium`) | 8dp (`small`) | `label-large` | 20dp |
| **Medium (M)** | 56dp | Prominent actions | 16dp (`large`) | 12dp (`medium`) | `title-medium` | 24dp |
| **Large (L)** | 96dp | Hero / touch-forward | 28dp (`extra-large`) | 16dp (`large`) | `headline-small` | 32dp |
| **Extra Large (XL)** | 136dp | Hero landing / display | 28dp (`extra-large`) | 16dp (`large`) | `headline-large` | 40dp |

### Pillar 5: Layout & Expressive Containment
- **Gaps over Dividers**: Use structured spacing/gaps to define hierarchy rather than rigid hairline dividers.
- **Contained Search & Floating Toolbars**: Floating elements expand into viewports rather than opening abrupt modal screens.
- **Expanded Navigation Rail**: Replaces legacy navigation drawers across medium and large window breakpoints.

---

## 3. Implementation Audit: Status in `material-design-3-expressive-components`

Everything the spec marks as no longer recommended has been removed (2021 color spec switch, segmented buttons, small and surface FABs, top/medium/large baseline app bars, bottom app bar, navigation drawer, baseline list and menu styles, divided search, four-color progress). See `MIGRATION.md` for the API changes.

| Component / Feature | M3 Expressive Spec | Status | Code Location |
| :--- | :--- | :--- | :--- |
| **Color: 2025 spec** | 2025 color spec for every scheme variant | ✅ Only option | `src/theme/scheme.ts` |
| **Motion: spring tokens** | Expressive and Standard schemes, spatial/effects × fast/default/slow | ✅ Implemented (exact `linear()` curves, cubic-bezier fallback, reduced motion) | `src/styles/tokens.css`, `src/utils/spring.ts` |
| **Motion: JS springs** | Interruptible springs for morphs and gestures | ✅ `animateSpring` | `src/utils/spring.ts` |
| **Typography: emphasized** | 15 baseline + 15 emphasized styles | ✅ Tokens, classes, `Text emphasized` | `src/styles/tokens.css`, `base.css` |
| **Shape library** | 35 shapes | ✅ Rounded-polygon port, `Shape`, `shapePath`, `shapeMaskImage` | `src/shapes/` |
| **Shape morph** | Morph between any two shapes | ✅ `Shape` (on `name` change), `useShapeMorph`, `createMorph` | `src/shapes/morph.ts` |
| **Spacing tokens** | `md.sys.measurement.space*` | ✅ `--md-sys-measurement-space0…900` | `src/styles/tokens.css` |
| **Buttons** | XS–XL, round/square, morph, toggle | ✅ Morph on by default, token paddings | `src/components/Button.tsx` |
| **Icon buttons** | XS–XL × narrow/default/wide | ✅ | `src/components/Button.tsx` |
| **FAB / extended FAB** | Regular, medium, large; tonal and high-emphasis colors | ✅ | `src/components/Button.tsx` |
| **Button groups** | Standard (press squeeze) and connected (inner corners, selection) | ✅ | `src/components/ButtonGroup.tsx` |
| **Split button** | Leading action + rotating menu button | ✅ | `src/components/SplitButton.tsx` |
| **FAB menu** | FAB → close button, 2–6 items | ✅ | `src/components/FabMenu.tsx` |
| **Toolbars** | Docked and floating (horizontal/vertical), standard/vibrant, FAB | ✅ | `src/components/AppBar.tsx` |
| **Loading indicator** | 7-shape morph loop, contained, determinate | ✅ | `src/components/LoadingIndicator.tsx` |
| **Progress: wavy** | Wavy linear and circular, thick | ✅ | `src/components/Progress.tsx` |
| **App bars** | Search, small, medium flexible, large flexible; centered; subtitle | ✅ | `src/components/AppBar.tsx` |
| **Navigation bar** | Flexible 64dp, horizontal items on medium windows | ✅ | `src/components/Navigation.tsx` |
| **Navigation rail** | Collapsed/expanded, modal, hide when collapsed, sections | ✅ | `src/components/Navigation.tsx` |
| **App scaffold** | Bar / rail / expanded rail / modal rail | ✅ | `src/layout/AppScaffold.tsx` |
| **Lists** | Standard and segmented, highlighted selection | ✅ | `src/components/List.tsx` |
| **Vertical menus** | Standard/vibrant, grouped, active shape | ✅ | `src/components/Menu.tsx` |
| **Search** | Contained, grows when focused, grouped results | ✅ | `src/components/Search.tsx` |
| **Sliders** | Standard/centered/range, stops, XS–XL, vertical, inset icon | ✅ | `src/components/Slider.tsx` |

## 4. Official Specifications and Design Tokens in Repo

All official Google guidelines and DSDB token databases are synchronized locally:

### 1. Guideline Documents
- `guidelines/m3-expressive/building-with-m3-expressive.md`: Foundational introduction to M3 Expressive.
- `guidelines/m3-expressive/m3-expressive-motion-theming.md`: Physics-based motion theming system.
- `guidelines/m3-expressive/whats-new-at-io26.md`: Google I/O updates and announcements.
- `guidelines/components/*.md`: In-depth specification and guidelines for every component with embedded design token tables and diagram callouts.

### 2. Design Tokens Database (DSDB)
Located in `guidelines/tokens/`:
- Raw JSON dumps directly from Google's Design System Database.
- Over 36 component token tables including `Button`, `Split buttons`, `Button groups`, `FAB menu`, `Loading indicator`, `Navigation rail`, `App bars`, and `Lists`.
- See [`guidelines/tokens/README.md`](../tokens/README.md) for the complete index.

---

## 5. Roadmap

The components and foundations listed in the audit are implemented. Follow-up work:

1. Swipe-to-reveal, reorder and expand interactions for expressive lists (Android-only in the spec today).
2. Floating toolbar collapse into a FAB on scroll.
3. Re-sync this folder (`npm run sync:guidelines`) and recheck the token tables when the spec changes.
