---
name: Precision Core
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#44474c'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#75777d'
  outline-variant: '#c5c6cd'
  surface-tint: '#525f75'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#0e1c2f'
  on-primary-container: '#77849c'
  inverse-primary: '#bac7e1'
  secondary: '#4059aa'
  on-secondary: '#ffffff'
  secondary-container: '#8fa7fe'
  on-secondary-container: '#1d3989'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#00201d'
  on-tertiary-container: '#0c9488'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3fe'
  primary-fixed-dim: '#bac7e1'
  on-primary-fixed: '#0e1c2f'
  on-primary-fixed-variant: '#3a475c'
  secondary-fixed: '#dce1ff'
  secondary-fixed-dim: '#b6c4ff'
  on-secondary-fixed: '#00164e'
  on-secondary-fixed-variant: '#264191'
  tertiary-fixed: '#89f5e7'
  tertiary-fixed-dim: '#6bd8cb'
  on-tertiary-fixed: '#00201d'
  on-tertiary-fixed-variant: '#005049'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.05em
  data-mono:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  container-margin: 24px
  gutter: 16px
  table-cell-padding: 12px
  sidebar-width: 260px
---

## Brand & Style

The design system is engineered for forensic environments where data integrity and clarity are paramount. The brand personality is clinical, systematic, and authoritative, evoking a sense of absolute reliability and security. 

The design style follows a **Corporate / Modern** approach with a heavy emphasis on **High-Contrast** functional elements. It prioritizes information density and visual hierarchy over decorative flair. The interface utilizes high-precision alignment and clear structural divisions to minimize cognitive load during complex laboratory analysis. The emotional response should be one of calm focus and institutional trust.

## Colors

The palette is anchored in a deep navy and blue spectrum to communicate stability and institutional authority. 

- **Primary (#0B192C):** Reserved for high-level navigation, headers, and text to ensure maximum grounding.
- **Secondary (#1E3A8A):** Used for interactive elements and active states.
- **Action/Accent (#0D9488):** A clinical teal used for primary success actions, progress indicators, and "Verified" statuses.
- **Neutral (#64748B / #F8FAFC):** Grays are used for borders, secondary text, and low-priority backgrounds to maintain an uncluttered environment.
- **Critical (#DC2626):** Reserved exclusively for warnings, biological hazards, or forensic discrepancies.

## Typography

This design system utilizes **Inter** for all UI elements and prose due to its exceptional legibility and neutral tone. To support technical laboratory data, **JetBrains Mono** is introduced for specimen IDs, sequence data, and audit timestamps.

- **Headlines:** Use Bold weights to create clear section breaks.
- **Data Display:** Use the `data-mono` style for all alphanumeric strings that require character-level differentiation (e.g., Case IDs, DNA sequences).
- **Labels:** Use `label-caps` for table headers and metadata descriptors to distinguish them from user-generated content.

## Layout & Spacing

The layout is a **Fixed Grid** system for data entry views and a **Fluid Grid** for analysis dashboards. 

- **Sidebar:** A fixed 260px sidebar persists on the left for top-level navigation.
- **Data Density:** Use a tight 4px baseline grid. Content should be densely packed but clearly separated by 1px neutral-200 borders.
- **Breakpoints:**
  - **Desktop (1440px+):** 12-column grid, 24px margins.
  - **Tablet (768px-1439px):** 8-column grid, sidebar collapses to icons.
  - **Mobile:** Single column, 16px margins; complex tables switch to card-based summaries.

## Elevation & Depth

To maintain a clinical and professional feel, this design system avoids heavy shadows. It uses **Tonal Layers** and **Low-contrast outlines** to establish hierarchy.

- **Level 0 (Background):** #F8FAFC (Cool Gray).
- **Level 1 (Cards/Containers):** #FFFFFF with a 1px border (#E2E8F0).
- **Level 2 (Modals/Popovers):** #FFFFFF with a subtle, tight shadow (0 4px 6px -1px rgba(11, 25, 44, 0.1)).
- **Active State:** Elements in focus use a 2px offset ring in the Secondary blue (#1E3A8A).

## Shapes

The shape language is **Soft (0.25rem)**. This slight rounding provides a modern touch without sacrificing the "industrial" or "scientific" feel of the interface. Buttons and input fields use `rounded-sm`, while larger data containers and modals use `rounded-lg` (0.5rem) to subtly differentiate background layers.

## Components

- **Data Tables:** High-density rows (32px height) with zebra striping. Headers are sticky and use `label-caps`. 
- **Sidebar Navigation:** Dark background (#0B192C) with active indicators using a Teal (#0D9488) vertical bar on the left edge.
- **Multi-step Forms:** A horizontal stepper at the top showing "Evidence Logging," "Analysis," and "Reporting" stages.
- **Audit Trail:** A specialized vertical timeline component using `data-mono` for timestamps and `body-sm` for user actions.
- **Comparison Views:** A split-pane UI with synchronous scrolling for comparing baseline samples against evidence.
- **Buttons:**
  - **Primary:** Solid Teal (#0D9488) with white text.
  - **Secondary:** Outlined Navy (#0B192C) with 1px border.
  - **Destructive:** Solid Red (#DC2626) for "Discard Sample" or "Void Case."
- **Input Fields:** Squared corners with 1px gray borders. Validated inputs show a 2px Teal bottom border.