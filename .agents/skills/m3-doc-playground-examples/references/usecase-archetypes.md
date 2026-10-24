# Component Playground & Example Archetypes

Use this reference when planning playground controls and `Example*` functions for a specific component group in `docs/src/docs/`.

## 1. Archetypes by Component Group

| Group | Playground Controls to Include | Recommended `Example*` Scenarios (4–6 per page) |
| :--- | :--- | :--- |
| **Data** (`ListView`, `DataTable`, `TreeView`, `Carousel`) | Dataset switcher, item count, variant (`standard`/`segmented`), density, selection mode (`none`/`single`/`multiple`), slot selectors (`leading`, `trailing`, `lines`), search/jump toolbar toggle, empty state toggle, height slider. | 1. Large-scale dataset (1k–10k items) with live filter & imperative jump/sort.<br>2. Multi-selection with contextual bulk-action toolbar (`Archive`, `Mark read`, `Share`).<br>3. Split-pane master-detail inspector.<br>4. Variable-height rows or responsive columns.<br>5. Async paging / infinite scroll (`onEndReached` or keyset cursor) with `LinearProgress`.<br>6. Inline secondary controls (`Switch`, `IconButton`) + actionable `empty` state. |
| **Containment** (`Card`, `Dialog`, `BottomSheet`, `SideSheet`, `List`, `Divider`) | Variant (`elevated`/`filled`/`outlined` or `standard`/`segmented`), layout/media position, shape, modal vs coplanar toggle, header/footer action toggles, disabled/selected state. | 1. Visual variants side by side.<br>2. Rich media & expressive shape masks (`MaterialShapeName`).<br>3. Interactive action areas vs secondary trailing controls.<br>4. Form or filter workflow inside a sheet/dialog.<br>5. Scrollable body with sticky header/footer dividers. |
| **Actions** (`Button`, `IconButton`, `FAB`, `FabMenu`, `ButtonGroup`, `SplitButton`) | Variant (`filled`/`tonal`/`outlined`/`elevated`/`text`), size (`xs`–`xl`), shape (`round`/`square`), `shapeMorph`, `emphasized`, `selected` (toggle mode), `loading`, `disabled`, leading/trailing icon. | 1. Emphasis hierarchy (primary filled vs tonal vs outlined).<br>2. Expressive sizes (`xs` to `xl`) and shape morphing on press.<br>3. Toggle selection state (single & group selection).<br>4. Async loading state with announcement.<br>5. Contextual toolbar / split-action menu integration. |
| **Navigation & Layout** (`AppBar`, `NavigationBar`, `NavigationRail`, `Tabs`, `Search`, `Toolbar`, `AppScaffold`, `Panes`, `ListDetailLayout`) | Variant/mode, expanded/collapsed state, badge visibility, sticky/scroll behavior, resizable pane toggle, window size class simulation. | 1. Canonical responsive navigation shell.<br>2. Badges and unread counters on destinations.<br>3. Scroll-linked collapse or floating toolbar.<br>4. Resizable split panes with keyboard handle support and compact back-navigation. |
| **Inputs & Pickers** (`TextField`, `Select`, `Slider`, `Switch`, `Checkbox`, `Radio`, `Chips`, `DatePicker`, `TimePicker`) | Variant (`filled`/`outlined`), value/range mode, leading/trailing icon, supporting/error text, prefix/suffix, `disabled`, `readOnly`, `required`. | 1. Validation & live error recovery.<br>2. Formatting, prefixes, suffixes, and character counters.<br>3. Controlled filter/form group composition (`Select all` indeterminate checkbox, `FilterChip` set).<br>4. Keyboard-first input vs dial/calendar picker switching. |

---

## 2. Shell & Toolbar Pattern for Data/Collection Examples

Wrap collection demos (`ListView`, `TreeView`, custom feeds) in a bordered `.lv-shell` / `.g-frame` container with a cohesive top toolbar and optional footer status bar:

```tsx
<div className="lv-shell">
  {/* Contextual toolbar: switches to secondary-container when items are selected */}
  <div className="lv-toolbar" data-selection={selectedKeys.length > 0 ? '' : undefined}>
    <div className="g-table-search" style={{ flex: '1 1 220px', maxWidth: 360 }}>
      <Icon name="search" size={20} className="g-table-search__icon" />
      <input
        type="text"
        className="g-table-search__input"
        placeholder="Filter items…"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Filter items"
      />
      {query && (
        <button
          type="button"
          className="g-table-search__clear"
          aria-label="Clear filter"
          onClick={() => setQuery('')}
        >
          <Icon name="cancel" size={18} />
        </button>
      )}
    </div>
    <div className="lv-toolbar__meta">
      {selectedKeys.length > 0 ? (
        <>
          <span>{selectedKeys.length} selected</span>
          <Button variant="text" size="xs" onClick={() => setSelectedKeys([])}>
            Clear
          </Button>
        </>
      ) : (
        <span>{filtered.length.toLocaleString()} items</span>
      )}
    </div>
  </div>

  {/* Component under test */}
  <ListView ... />

  {/* Optional status / action footer */}
  <div className="lv-footer">
    <span>Status summary</span>
    <Button variant="text" size="xs">Action</Button>
  </div>
</div>
```

---

## 3. Common Pitfalls to Avoid

1. **Duplicate Surnames in Generated Lists**:
   - **Bad**: `FIRST[i % 20] + ' ' + LAST[Math.floor(i / 20) % 20]` (produces 20 consecutive items with the same surname).
   - **Good**: `FIRST[i % FIRST.length] + ' ' + LAST[(i * 7 + Math.floor(i / FIRST.length)) % LAST.length]` (uses a stride coprime to `LAST.length` so every row has a distinct name).
2. **Digit-Leading Example Titles**:
   - **Bad**: `/** 10,000 items virtual scrolling */` → generates `id="10-000-items-virtual-scrolling"`, which throws a `SyntaxError` in `document.querySelectorAll('#10-000-...')`.
   - **Good**: `/** Directory of 10,000 people with live search */` → generates `id="directory-of-10-000-people-with-live-search"`.
3. **Nested Interactive Control Click Bleed**:
   - When rendering a `Switch`, `Checkbox`, or `IconButton` inside a selectable/clickable row (`ListItem`, `ListView`, `DataTable`, `Card`), ensure clicking the nested control does not also trigger the row's selection or navigation handler.
4. **Biome Accessibility Rules**:
   - Do not place `aria-label` on a bare `<div>` without an interactive/landmark role, and prefer semantic elements (`<nav aria-label="...">`, `<fieldset>`) over `<div role="group">`.
