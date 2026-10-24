# M3 Expressive 纯净版：实施计划

> 目标：在新包 `material-design-3-expressive-components` 里做一个**只遵循 Material 3 Expressive** 的 React 组件库，并同步更新文档站（demo，`docs/`）。代码从 `material-components` 复制而来，原包不受影响。
> 规范来源：仓库内 `guidelines/`（m3.material.io 同步副本，Carbon `2026-10-13_06-10-19`）和 `guidelines/tokens/*.json`（DSDB token 表）。实现时以 token 表为准，文字说明为辅。

---

## 0. “纯净版”的定义

1. **单一设计语言**：规范里标为 *no longer recommended* 的 baseline 变体、组件和 token 全部移除，不再提供 2021 / baseline 的开关。
2. **Expressive 是默认值，而不是可选项**：配色固定为 2025 spec，动效用 spring，形状默认支持 morph，排版提供 emphasized 样式。
3. **独立的新包**：代码复制自 `material-components`（保留 git 历史，原仓库作为 `upstream` 远程），以 `material-design-3-expressive-components` 的名字单独发布。新包没有存量用户，不需要兼容旧 API，所以旧组件直接删除，不设弃用过渡期。
4. 规范没有提出 Expressive 改动的组件（checkbox、radio、switch、text field、chips、dialog、sheets、tabs、snackbar、tooltip、badge、date/time picker、data table、tree view）**API 不变**，只跟随基础层（动效、排版、间距）的更新。

---

## 1. 开工前需要你拍板的决定

每条都附了默认方案。不改就按默认执行。

| # | 决定 | 默认方案 | 备选 |
|---|---|---|---|
| D1 | 原包 `material-components` 之后怎么办 | **保持原样**，继续作为 baseline M3 版本；有修复时按需在两个仓库之间 cherry-pick（见 R4） | 冻结原包，只维护新包 |
| D2 | `ColorSpec` / `spec` 选项 | **整体删除**，永远使用 2025 | 保留类型，默认改为 `'2025'` |
| D3 | Baseline list / menu（规范写的是 “still available”） | **只保留 Expressive 版本** | 用 `variant="baseline"` 保留旧样式 |
| D4 | 动效 scheme | Expressive 为默认，同时提供 **Standard**（两者都是 Expressive 时代的 scheme） | 只提供 Expressive |
| D5 | `TopAppBar` 改名为 `AppBar`（规范已改名） | **改名**，不保留别名 | 保留 `TopAppBar` 别名 |
| D6 | `shapeMorph`（按下时形状变化） | **默认开启**，`shapeMorph={false}` 可以关掉 | 维持默认关闭 |
| D7 | FAB 尺寸命名 | `size: 'regular' \| 'medium' \| 'large'`（56/80/96dp），FAB 和 extended FAB 共用；删除 40dp 的 `small` | 按规范叫 `small/medium/large`。缺点：`small` 的含义会从 40dp 悄悄变成 56dp |
| D8 | 形状 morph 的实现方式 | **把 `androidx.graphics.shapes` 的 RoundedPolygon + Morph 算法移植成 TS**（见第 6 节风险 R1） | 预先算好 SVG path 关键帧，只支持固定的几组形状对 |

---

## 2. 现状盘点

> `guidelines/m3-expressive/overview-and-roadmap.md` 的审计表有几处偏乐观，以下面这张表为准，收尾时再回头改那份文档（见 P7）。

| 领域 | 现状（代码位置） | 纯净版目标 | 动作 |
|---|---|---|---|
| 配色 | 有 2021 / 2025 开关，**默认 2021**（`src/theme/ThemeProvider.tsx:59`、`ThemeBuilder` 的 `showSpec`） | 固定 2025 | 改、删 |
| 动效 | 约 150 处引用 baseline easing/duration；spring 只在 3 个文件里用了 6 处（button、selection、navigation）；没有 Standard scheme | 组件状态动画全部改用 spring token；提供 Expressive / Standard 两套 | 大改 |
| 排版 | 只有 15 个 baseline 样式（`src/styles/tokens.css`），**没有 emphasized** | 15 baseline + 15 emphasized | 新增 |
| 形状 | 圆角档位已经齐全（含 `*-increased`、`extra-extra-large`）；**没有 35 个形状库，也没有通用的 morph** | 形状库 + morph 工具 | 新增 |
| 间距 | 没有 spacing token | 8dp 体系：`space0…space900` 加嵌套单位 | 新增 |
| Button | 已有 XS–XL、round/square、按压 morph、toggle | 默认开启 morph（D6）；small 按钮 padding 核对为 16dp | 小改 |
| Icon button | 已有尺寸、宽度、morph | 按新 token 集核对（旧的 filled/tonal/outlined token 集已弃用） | 核对 |
| FAB | 有 `small`（40dp）和 `surface` 颜色，两者都已不推荐 | 删除 small 和 surface；extended FAB 改为三种尺寸，字体分别是 title-medium / title-large / headline-small | 改、删 |
| Segmented button | `SegmentedButtons.tsx`；`ThemeBuilder` 和 demo Playground 内部也在用 | 删除，改用 connected button group | 删 |
| Button group | 无 | 新增 standard 和 connected 两种 | 新增 |
| Split button | 无 | 新增 | 新增 |
| FAB menu | 无 | 新增 | 新增 |
| Loading indicator | 无；`Button` 的 loading 状态和 `TreeView` 用的是不定进度的 `CircularProgress` | 新增，并替换这些内部用法 | 新增 |
| Progress | 只有直线 track | 支持 wavy 形状、可调 track 高度、新 token 集 | 改 |
| App bar | `TopAppBar` 有 center/small/medium/large 四种，都是 baseline | 改为 `AppBar`：small（加副标题、居中选项）、medium-flexible（112/136dp）、large-flexible（120dp）、search app bar | 重写 |
| Bottom app bar | `BottomAppBar`（`AppBar.tsx`） | 删除，用 docked toolbar 代替 | 删 |
| Toolbar | 无 | docked，以及 floating（水平/垂直），颜色分 standard/vibrant，可搭配 FAB | 新增 |
| Navigation bar | 80px，baseline | flexible：64dp，激活标签用 `secondary` 色，中等窗口用水平排列的项目 | 改 |
| Navigation rail | 有 `expanded` 开关，但没有 modal 模式和展开/折叠过渡 | collapsed 96dp；expanded 220–360dp，分 modal / 非 modal；支持“折叠成 collapsed”或“折叠时隐藏”两种行为；激活标签用 `secondary` 色 | 改 |
| Navigation drawer | `NavigationDrawer`，`AppScaffold` 在 large 窗口和 modal 模式下使用 | 删除，由 expanded rail 接管（包括 sections 和标题） | 删、迁移 |
| Search | 标准的 search bar + view | contained（推荐）和 divided 两种风格；结果可用 gap 分组；获得焦点时变宽，左右边距从 24dp 变为 12dp | 改 |
| List | Baseline 连续列表 | Expressive list：standard 和 segmented 两种风格，选中项高亮，可自由放置的 slots | 重写样式 |
| Menu | Baseline menu | vertical menu：standard/vibrant 两种配色，新的形状和选中状态，子菜单动效，支持 gap | 改 |
| Slider | 只有水平方向，只有 `ticks` 和 `labeled` | 改名为 standard / centered / range；`ticks` 改名为 `stops`；支持垂直方向、inset icon、XS–XL 尺寸 | 改 |
| AppScaffold | 四种模式：bar / rail / drawer / modal（drawer） | 四种模式：bar（flexible）/ rail（collapsed）/ expanded rail / modal expanded rail | 改 |

---

## 3. 分阶段实施

阶段之间的依赖：**P1 基础层必须最先完成**。P2–P5 都只依赖 P1，相互独立，可以并行，也可以拆成多个 PR。P6（demo）跟着各阶段同步更新，最后统一收尾。

### P0 准备

- [x] 把代码从 `material-components` 复制到 `material-design-3-expressive-components` 文件夹，保留 git 历史；原来的 `origin` 改名为 `upstream`，避免误推到原仓库。
- [x] `package.json` / `package-lock.json` 的包名、docs 的路径别名、vitest 项目名改为 `material-design-3-expressive-components`；README 写明新包和原包的关系。
- [x] 在 GitHub 新建 `material-design-3-expressive-components` 仓库，添加为 `origin` 并推送 `main`。
- [ ] 之后每个阶段：先 `git fetch origin`，确认 `main` 和 `origin/main` 一致，再从 `main` 切子分支，一个阶段一个 PR。
- [x] 跑一遍 `npm run lint && npm run typecheck && npm run test:all`，记下基线，确认当前全部是绿的。
- [x] 写一个 `scripts/tokens-from-dsdb.mjs`：从 `guidelines/tokens/*.json` 读出组件 token，生成供核对用的 CSS 变量清单。之后各组件逐个对照这份清单，不再凭肉眼读 markdown 表格。

### P1 基础层（tokens 与主题）

**配色**
- [x] 删除 `ColorSpec` 类型和 `spec` 字段，涉及 `scheme.ts`、`ThemeProvider`、`ThemeScope`、`ThemeBuilder`（`showSpec`、`spec2021/2025` 文案）和 `createScheme` / `createTonalPalettes` / `createThemeCss`。内部固定传 2025。
- [x] 用 2025 spec 重新生成 `baseline-scheme.css`（`npm run gen:baseline`）。
- [x] 迁移 localStorage：如果读到旧配置里有 `spec` 字段，丢掉这个字段，其余配置保留。`themeInitScript` 也要做同样处理。

**动效**
- [x] 在 `tokens.css` 里补上 Standard scheme 的 6 个 spring（参数见 `guidelines/styles/motion-overview.md` 的 “Web: Convert springs to curves” 表）。
- [x] `ThemeProvider` 新增 `motionScheme: 'expressive' | 'standard'`，在 root 上写 `data-motion-scheme`，用它切换 `--md-sys-motion-spring-*` 的取值。
- [x] 评估用 CSS `linear()` 生成真正的弹簧曲线（由 stiffness/damping 算出采样点），替换 cubic-bezier 近似。不支持的浏览器用 `@supports` 回退到 cubic-bezier。
- [x] 迁移约 150 处 easing/duration 引用，规则如下：
  - 位置、尺寸、圆角、缩放 → `spring-*-spatial`
  - 颜色、透明度 → `spring-*-effects`
  - 小元素用 fast，常规元素用 default，大面积元素用 slow
  - 容器的进出场过渡（dialog、sheet、menu 的出现和消失）按规范继续使用 easing/duration（规范原话：easing/duration “currently used for animating transitions”）
- [x] 对拖拽、可中断的交互（slider、sheet 拖拽、rail 展开）评估一个轻量的 JS spring（`utils/spring.ts`）。
- [x] `prefers-reduced-motion` 统一处理：spatial spring 退化为没有回弹的 effects 曲线。

**排版**
- [x] 按 `guidelines/styles/typography.md` 的 token 表新增 15 个 `--md-sys-typescale-*-emphasized`，同时补上对应的 `.m3-typescale-*-emphasized` 类。
- [x] `Text` 组件新增 `emphasized?: boolean`。

**形状**
- [x] 新增 `src/shapes/`：35 个 Material 形状的多边形定义，加上 `RoundedPolygon` / `Morph` 的 TS 移植（D8）。
- [x] 对外提供 `<Shape name="cookie9" />`（SVG 或 `clip-path`）和 `useShapeMorph(from, to, progress)`。
- [x] 让 `Avatar` 和 `CardMedia` 支持 `shape` 属性（规范建议用于图片裁切和头像）。

**间距**
- [x] 新增 `--md-sys-spacing-*` token（8dp 体系加嵌套单位，见 `guidelines/styles/spacing.md`），组件内的 padding/gap/margin 逐步改用这些 token。

**验收**：`tokens.css` 覆盖规范里的全部系统 token；`theme.test.tsx` 补充 motionScheme、旧配置迁移、emphasized 类名的测试。

### P2 Actions

- [x] **Button**：`shapeMorph` 默认值改为 `true`（D6）；按 token 表核对 5 个尺寸的 padding、图标尺寸和字体。
- [x] **IconButton**：按新 token 集核对 5 个尺寸 × 3 种宽度的尺寸数值和 toggle 状态的颜色。
- [x] **FAB**：删除 `small` 和 `surface`（D7）；extended FAB 改为 regular/medium/large 三种，字体分别是 title-medium / title-large / headline-small，内边距也要缩小。
- [x] **新增 `ButtonGroup`**：
  - `variant: 'standard' | 'connected'`，`size` 和 `shape` 会下发给子按钮。
  - standard：按下一个按钮时，相邻按钮被挤压变窄（width 动画）。
  - connected：内侧圆角变小，选中的按钮变成全圆角；支持单选和多选，取代 `SegmentedButtons` 的选择语义。
  - 键盘交互：用 roving tabindex 和方向键在按钮间移动焦点。
- [x] **新增 `SplitButton`**：
  - 颜色支持 elevated / filled / tonal / outlined，尺寸 XS–XL。
  - 右侧的菜单按钮在菜单打开时旋转图标、改变形状，并与 `Menu` 联动。
- [x] **新增 `FabMenu`**：从 FAB 展开成一列菜单项，关闭按钮用对比色；适配任意尺寸和颜色的 FAB；展开过程用 spring 动效；按 Esc 关闭并把焦点还给 FAB。
- [x] **删除 `SegmentedButtons`**，把 `ThemeBuilder` 和 `docs/src/kit/Playground.tsx` 里的用法改成 connected `ButtonGroup`。

### P3 Communication

- [x] **新增 `LoadingIndicator`**：
  - 48dp 容器，内部 active indicator 38dp；在一组形状之间循环 morph 并旋转（依赖 P1 的形状库）。
  - 支持 contained 和 uncontained 两种，尺寸可缩放。
  - 有明确进度时用 `value` 驱动 morph 进度（用于下拉刷新）。
- [x] **Progress**：新增 `shape: 'flat' | 'wavy'`（可调振幅和波长）和 `trackHeight`；改用新的 token 集；保留 stop indicator。（实现：沿用已有的 `thickness` 作为轨道高度，另加 `amplitude`/`wavelength`）
- [x] 把 `Button` 的 loading 状态和 `TreeView` 的加载状态改用 `LoadingIndicator`。规范说它 “should replace most uses of the indeterminate circular progress indicator”。

### P4 Navigation

- [x] **App bar**：
  - `TopAppBar` 改名为 `AppBar`（D5）。
  - `variant: 'small' | 'medium-flexible' | 'large-flexible' | 'search'`；`align: 'start' | 'center'`（取代原来的 `center` 变体）；新增 `subtitle`，标题可以换行。
  - 滚动时折叠的逻辑沿用 `useScrollOffset`，但高度表按新 token 更新。
  - search app bar 点击后打开 `Search` 的 view。
- [x] **删除 `BottomAppBar`**。新增 **`Toolbar`**：`type: 'docked' | 'floating'`，`orientation`（只有 floating 支持），`color: 'standard' | 'vibrant'`，`fab` 插槽，滚动时可隐藏。
- [x] **NavigationBar** 改为 flexible：高度 64dp，激活标签用 `secondary` 色；新增 `itemLayout: 'vertical' | 'horizontal'`，medium 窗口下自动切换成水平排列。
- [x] **NavigationRail**：
  - `expanded` 时宽度 220–360dp。
  - 新增 `modal`（带遮罩和焦点陷阱）。
  - 新增 `collapseBehavior: 'collapse' | 'hide'`。
  - 展开/折叠时，宽度和标签位置用 spatial spring 过渡。
  - 新增 `sections`（带标题），用来承接原 drawer 的分组导航；激活标签用 `secondary` 色。
- [x] **删除 `NavigationDrawer`**。drawer 的嵌套 `children` 树形导航不迁移，需要树形结构的场景改用 `TreeView`。
- [x] **AppScaffold**：
  - 新模式：`NavigationMode = 'bar' | 'rail' | 'expanded-rail' | 'modal-rail'`。
  - compact 窗口用 bar，项目超过 5 个时用 modal rail；medium 用 rail；expanded/large 用 expanded rail，可以折叠。
  - `brand`、`fab`、`defaultDrawerOpen` 改为对应的 rail 版本（例如 `defaultRailExpanded`）。
  - 对照 `guidelines/foundations/layout-scaffold.md` 和 `layout-grids-spacing.md` 核对边距和间距（I/O 2026 发布的 Expressive 布局系统）。
- [x] **Search**：（实现：只做 contained；divided 在规范里标为 not recommended，按第 0 节规则不提供）
  - `style: 'contained' | 'divided'`，默认 contained。
  - 建议结果支持分组（`groups`，组之间用 gap 隔开）。
  - 获得焦点时搜索栏变宽，左右边距从 24dp 变为 12dp，用 spatial spring 过渡。
  - 尾部支持多个图标。

### P5 Containment 与 Selection

- [x] **List** 改为 Expressive list：
  - `variant: 'standard' | 'segmented'`，segmented 的每一项都是独立圆角容器，项与项之间用 gap 分隔。
  - 选中状态用高亮的容器色和形状变化表示。
  - 提供 leading / trailing / supporting 等 flexible slots。
  - 确认 `Select`、`Search` 建议列表和 `DataTable` 跟随新样式后没有回归。
- [x] **Menu** 改为 vertical menu：`color: 'standard' | 'vibrant'`；按新 token 更新形状和选中态；子菜单展开用 spring；支持 gap 分组（`MenuGroup` 可以选择用 gap 代替 divider）。
- [x] **Slider**：
  - `ticks` 改名为 `stops`；新增 `centered`、`orientation: 'horizontal' | 'vertical'`、`size: 'xs' … 'xl'`。
  - 新增 `insetIcon`（只有 standard slider 支持）。
  - 垂直方向下，方向键和 RTL 的行为需要单独加测试。
- [x] **Card / Carousel / Dialog / Sheet / Chip / 表单控件 / Pickers**：只把动效改成 spring、间距改用 spacing token，并按 token 表抽查。Card 的展开可以考虑 container transform（规范 cards.md 提到）。

### P6 Demo（`docs/` 文档站）

**站点外壳（`docs/src/App.tsx`）**
- [x] 改用新的 `AppScaffold`：large 窗口用 expanded rail（带 sections），medium 用 collapsed rail，compact 用 flexible nav bar 或 modal rail。
- [ ] 顶栏改为 `AppBar`；`SearchTrigger` 改成 search app bar 的形态。（未做：顶栏保留 small app bar + 搜索按钮，以便滚动后显示页面标题）
- [x] 品牌文案从 “Material Design 3” 改为 “Material 3 Expressive”，同步更新 `pages/Overview.tsx` 和 `pages/Start.tsx`。
- [x] 展示给读者的包名改为 `material-design-3-expressive-components`：`pages/Start.tsx` 的安装命令和示例代码、`kit/DocPage.tsx` 生成的 import 行、每个页面示例里的 `from 'material-design-3-react'`，以及 `AUTHORING.md` 和测试里的对应说法。这个旧名字是更早之前遗留的，改完后删掉 `vite.config.ts`、`vitest.config.ts`、`tsconfig.json` 里 `material-design-3-react` 的路径别名。
- [x] 主题配置迁移：`App.tsx` 里那段清理 localStorage 的逻辑，增加“遇到 `spec` 字段就丢弃”的处理。

**删除的页面**，同时给旧 slug 加重定向，避免外部链接 404：

| 旧页面 | 重定向到 |
|---|---|
| `bottom-app-bar` | `toolbar` |
| `navigation-drawer` | `navigation-rail` |
| `segmented-button` | `button-group` |
| `top-app-bar` | `app-bar`（改名） |

在 `DocRoute` 里加一张别名表即可。

**新增的页面**（放进 `docs/src/docs/`，自动注册，写法参照 `docs/AUTHORING.md`）

| slug | group | 内容 |
|---|---|---|
| `button-group` | actions | standard 和 connected、单选和多选、尺寸 × 形状 |
| `split-button` | actions | 4 种颜色 × 5 种尺寸，搭配菜单 |
| `fab-menu` | actions | 不同 FAB 尺寸和颜色下的展开效果 |
| `toolbar` | actions | docked 和 floating、vibrant、搭配 FAB、垂直方向 |
| `loading-indicator` | communication | contained 和 uncontained、用进度驱动的下拉刷新示例 |
| `motion` | foundations | 并排对比 Expressive 和 Standard 两套 spring；spatial 和 effects 的区别 |
| `shape` | foundations | 35 个形状一览、任意两个形状之间的 morph 演示、圆角档位 |
| `spacing` | foundations | spacing token 一览，padding / gap / margin 的示意 |

**需要更新的页面**

| 页面 | 改动 |
|---|---|
| `button`、`icon-button` | morph 默认开启 |
| `fab` | 去掉 small 和 surface；extended FAB 的三种尺寸 |
| `progress` | wavy、track 高度 |
| `slider` | stops、centered、垂直方向、尺寸、inset icon |
| `app-bar`（原 `top-app-bar`） | flexible 变体、副标题、search app bar |
| `navigation-bar` | 水平排列的项目 |
| `navigation-rail` | modal、折叠行为、sections |
| `search` | contained 和 divided、结果分组 |
| `list` | segmented、选中高亮 |
| `menu` | vibrant、gap |
| `typography` | 新增 emphasized 一栏 |
| `theming` | 删除 `spec` 控件，新增 `motionScheme` |
| `app-scaffold` | 新的导航模式 |
| `feed`、`list-detail`、`supporting-pane` | 换成新组件后检查布局 |
| `pages/Theme.tsx` | 去掉 spec 参数 |

**测试与验证**
- [x] `docs/test/docs.test.tsx` 会自动覆盖每个页面的 preview、playground 和示例；另外加一条测试，确保旧 slug 都能重定向。
- [ ] 用浏览器预览逐页检查：light 和 dark 主题，compact（375px）、medium（768px）、expanded 三种窗口宽度，每页截图留档。重点看 rail 的展开/折叠、FAB menu、loading indicator 这类动效。（已抽查 compact 与 expanded 宽度、light 与 dark；未逐页截图）

### P7 收尾与发布

- [x] 删除不再使用的 CSS（例如 `segmented-chip.css` 里 segmented 的部分、`navigation.css` 里 drawer 的部分、`containment.css` 里 bottom app bar 的部分），并用 `rg` 确认没有残留的类名。
- [x] 更新 `README.md`：删除 “color spec (2021 or 2025 Expressive)” 这类描述，加上 motion scheme 的说明；组件表换成 Expressive 组件；去掉“迁移进行中”的提示。
- [x] 改写 `guidelines/m3-expressive/overview-and-roadmap.md` 的审计表，使它和实际实现一致。
- [x] 新增 `MIGRATION.md`，写给从 `material-components` 换过来的用户（内容见第 5 节）。
- [ ] 以新包名首次发布到 npm，版本沿用 `package.json` 里的 `0.1.0`。发布前确认 npm 上这个包名可用。（需要你确认后发布）
- [x] `npm run lint && npm run typecheck && npm run test:all && npm run build && npm run build:docs` 全部通过；对比 `dist/styles.css` 的体积变化。

---

## 4. 建议的 PR 切分

1. P1-a：配色固定为 2025，迁移旧配置
2. P1-b：动效 token、motionScheme，以及迁移全部 easing 引用
3. P1-c：emphasized 排版、spacing token
4. P1-d：形状库与 morph（最大的不确定项，可以和 1–3 并行）
5. P2：ButtonGroup 和 SplitButton，删除 SegmentedButtons
6. P2/P3：FAB 调整、FabMenu、LoadingIndicator、Progress wavy（依赖 4）
7. P4-a：AppBar 改名和 flexible 变体、Toolbar，删除 BottomAppBar
8. P4-b：NavigationBar、NavigationRail、AppScaffold，删除 NavigationDrawer，同时改造 demo 外壳
9. P4-c / P5：Search、List、Menu、Slider
10. P6 / P7：demo 页面收尾、重定向、MIGRATION、README、以新包名首次发布

每个 PR 都同时修改组件和对应的 demo 页面，保证 `test:docs` 在每个 PR 上都是绿的。

---

## 5. 从 `material-components` 迁移（MIGRATION.md 草稿）

| `material-components` | `material-design-3-expressive-components` |
|---|---|
| `import … from 'material-components'`，以及 `material-components/styles.css`、`/fonts.css` | 换成新包名，子路径不变 |
| `ThemeProvider` 的 `spec`，`ThemeBuilder` 的 `showSpec` | 删除，固定使用 2025 |
| `SegmentedButtons` | `ButtonGroup variant="connected"` |
| `BottomAppBar` | `Toolbar type="docked"` |
| `NavigationDrawer` | `NavigationRail expanded`（需要遮罩时加 `modal`） |
| `TopAppBar` | `AppBar` |
| `TopAppBar variant="center"` | `AppBar align="center"` |
| `TopAppBar variant="medium" / "large"` | `AppBar variant="medium-flexible" / "large-flexible"` |
| `Fab size="small"` | `IconButton size="sm"`，或者 `FabMenu` |
| `Fab color="surface"` | 其他颜色角色 |
| `AppScaffold` 的 `mode: 'drawer' \| 'modal'` | `'expanded-rail' \| 'modal-rail'` |
| `defaultDrawerOpen`、`onDrawerOpenChange` | rail 对应的属性 |
| `Slider` 的 `ticks` | `stops` |
| `Button` / `IconButton` 的 `shapeMorph` 默认 `false` | 默认 `true` |

---

## 6. 风险

| # | 风险 | 应对 |
|---|---|---|
| R1 | **Web 端没有官方的 shape morph 实现**（material-web 已进入维护模式；规范对 Web 只写了 “Compatible”）。需要自己移植 `androidx.graphics.shapes` | 先做 spike：用 1–2 天验证移植效果和性能（每帧插值成本、SSR 输出静态 path）。效果不理想就退回 D8 的备选方案 |
| R2 | 用 cubic-bezier 近似 spring 无法处理中途被打断的动画 | 状态切换用 CSS（`linear()`）；手势和可中断的场景用 JS spring |
| R3 | 规范的行为细节主要以 Compose 实现为准，Web 只能参照 | 有疑问时对照 Compose Material3 源码的默认值（`*Defaults`），并在 PR 里注明依据 |
| R4 | 两个仓库会分叉：原包的修复不会自动进入新包 | 保留 `upstream` 远程，原包有修复时 `git fetch upstream` 后 cherry-pick。P1 大改之后冲突会越来越多，到时改为按需手动移植 |
| R5 | vibrant 配色和 emphasized 排版的对比度 | 在 `theme.test.tsx` 里给关键的颜色组合加对比度断言，在 demo 里用高对比度模式检查 |
| R6 | 从原包换到新包的项目要一次性改很多地方 | 提供 MIGRATION 表；可以考虑写一个 codemod 处理改名类变更（import 路径、TopAppBar 改名、ticks 改 stops） |

---

## 7. 完成标准

- 仓库里不再有任何规范标为 *no longer recommended* 的组件、变体或 token。
- 规范列出的 14 个 Expressive 组件，加上 2025 年 11 月 / 12 月的 list 和 menu、2026 年的 search 和布局，全部实现，并有对应的 demo 页面。
- 组件的状态动画全部使用 spring token，Expressive / Standard 可以切换，`prefers-reduced-motion` 生效。
- `lint`、`typecheck`、`test:all`、`build`、`build:docs` 全部通过；demo 在三种窗口宽度、两种主题下都有截图验证。
