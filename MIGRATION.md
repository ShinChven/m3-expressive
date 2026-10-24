# Migrating from `material-components`

`material-design-3-expressive-components` follows Material 3 Expressive only. Everything the M3 spec marks as no longer recommended is gone, and the Expressive behavior is the default. Most components keep their API; the table lists every change.

## Package

| `material-components` | `material-design-3-expressive-components` |
|---|---|
| `import … from 'material-components'` | `import … from 'material-design-3-expressive-components'` |
| `material-components/styles.css`, `/fonts.css` | Same subpaths under the new name |

## Theme

| Before | Now |
|---|---|
| `ThemeConfig.spec`, `ThemeScope spec`, `SchemeOptions.spec` (`'2021' \| '2025'`) | Removed. Colors always use the 2025 (Expressive) color spec. A saved configuration that still has `spec` keeps its other settings. |
| `ColorSpec` type | Removed |
| `ThemeBuilder showSpec`, labels `spec`, `spec2021`, `spec2025` | `showMotion`, labels `motion`, `motionExpressive`, `motionStandard` |
| — | `ThemeConfig.motionScheme: 'expressive' \| 'standard'`, `ThemeScope motionScheme`, `data-motion-scheme` attribute |
| Baseline colors in `styles.css` | Regenerated with the 2025 color spec (`npm run gen:baseline`) |

## Actions

| Before | Now |
|---|---|
| `SegmentedButtons` | `ButtonGroup variant="connected" selection="single" \| "multiple"` with `Button value="…"` children |
| `Button` / `IconButton` `shapeMorph` default `false` | Default `true`; pass `shapeMorph={false}` to turn it off |
| `Button size="sm"` padding 24dp | 16dp, as in the Expressive token table |
| `Button variant="text"` 12dp padding | Size padding, like the other variants |
| `Fab size="small"` | Removed: use `IconButton size="sm"` or a `FabMenu` |
| `Fab color="surface"` | Removed: use another color role |
| Extended FAB label `label-large` | `title-medium`, `title-large` and `headline-small` for the three sizes |
| `Button loading` with a circular progress indicator | Shows a `LoadingIndicator` |
| — | New: `ButtonGroup`, `SplitButton`, `FabMenu`, `FabMenuItem`, `Toolbar` |

## Communication

| Before | Now |
|---|---|
| `CircularProgress fourColor` | Removed (four-color tokens are deprecated) |
| `CircularProgress` stroke a tenth of `size` | 4px by default, 8px for a thick indicator |
| — | `shape="wavy"` on `LinearProgress` and `CircularProgress`; `amplitude`, `wavelength` |
| — | New: `LoadingIndicator`; `TreeView` loading rows use it |

## Navigation

| Before | Now |
|---|---|
| `TopAppBar` | `AppBar` |
| `TopAppBar variant="center"` | `AppBar align="center"` |
| `TopAppBar variant="medium" \| "large"` | `AppBar variant="medium-flexible" \| "large-flexible"` |
| `TopAppBarVariant` | `AppBarVariant` (`'search' \| 'small' \| 'medium-flexible' \| 'large-flexible'`) |
| — | `AppBar variant="search"` with a `search` slot |
| `BottomAppBar` | `Toolbar type="docked"` (`actions` → children, `fab` → `fab`) |
| `NavigationDrawer` | `NavigationRail expanded` (`sections` keep their headlines); add `modal` for an overlay and `indicator="fill"` for the drawer's full-width highlight |
| `NavItem.children` (nested drawer groups) | Removed: use `sections`, or a `TreeView` for real hierarchies |
| `NavigationRail align="bottom"` | Removed: `top` or `center` |
| `NavigationRail header` with a hand-made menu button and FAB | `menuButton`, `fab` (extends when expanded), `brand`, `expandedHeader` |
| `NavigationBar` 80dp | 64dp flexible bar; `itemLayout` (`auto` switches to horizontal items at 600dp) |
| Active navigation label `on-surface`, bold | `secondary` color |
| `Search` docked view joined to the bar | Contained style: the bar keeps its shape, grows when focused, and the view sits 2dp below |
| — | `Search groups` |

## Layout

| Before | Now |
|---|---|
| `AppScaffold topAppBar` | `appBar` |
| `NavigationMode`: `'bar' \| 'rail' \| 'drawer' \| 'modal'` | `'bar' \| 'rail' \| 'expanded-rail' \| 'modal-rail'` |
| Standard drawer on large windows only | Expanded rail on expanded windows (840dp) and up |
| `drawerOpen`, `defaultDrawerOpen`, `onDrawerOpenChange` | `railExpanded`, `defaultRailExpanded`, `onRailExpandedChange` |
| `drawerHeader` | `railHeader` |
| — | `railWidth`, `railIndicator` (`"fill"` for a drawer-like full-width highlight) |
| `ScaffoldContext.mode === 'drawer'` | `'expanded-rail'` |

## Containment and selection

| Before | Now |
|---|---|
| Baseline list (square, continuous) | Expressive list: `List variant="standard" \| "segmented"`, rounded items, selected items 16dp round with emphasized headline |
| Baseline menu (4dp corners, surface container) | Vertical menu: 16dp container, rounded items, `color="standard" \| "vibrant"`, `grouped` |
| Selected menu item `secondary-container` | `tertiary-container` (standard) or `tertiary` (vibrant) |
| `Slider ticks` / `RangeSlider ticks` | `stops` |
| CSS `.m3-slider__tick` | `.m3-slider__stop` |
| — | `Slider centered`, `orientation`, `size` (`xs` to `xl`), `insetIcon` |
| — | `Avatar shape`, `CardMedia shape`, `Text emphasized` |

## CSS tokens

New tokens are additive: `--md-sys-typescale-emphasized-*`, `--md-sys-measurement-space*`, and Standard-scheme values of `--md-sys-motion-spring-*` under `[data-motion-scheme="standard"]`. Component state transitions now use spring tokens; container enter and exit transitions keep the easing and duration tokens, as the spec does.
