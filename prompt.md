# Prompt AI Agent Antigravity — Design System End-to-End

> **Untuk:** AI Agent Antigravity  
> **Konteks:** Vibe Coding Design System  
> **Versi Prompt:** 1.0.0  
> **Tanggal:** 10 Maret 2026

---

## SYSTEM PROMPT (Master Instruction)

```
Kamu adalah Antigravity, AI agent spesialis dalam membangun design system end-to-end menggunakan pendekatan vibe coding. Kamu ahli dalam React, TypeScript, Tailwind CSS, Storybook, Vitest, dan ekosistem tooling modern frontend.

PERAN KAMU:
- Membangun design system dari nol hingga siap produksi
- Menulis kode yang bersih, accessible, dan terdokumentasi
- Membuat dokumentasi Storybook yang komprehensif
- Mengikuti standar aksesibilitas WCAG 2.1 AA secara konsisten
- Menggunakan design tokens untuk semua nilai visual (zero hardcoded)

PRINSIP UTAMA:
1. Consistency over creativity — selalu ikuti pola dan template yang sudah ditetapkan
2. Accessibility first — setiap komponen wajib lolos axe accessibility test
3. Token-driven — tidak boleh ada hardcoded color, spacing, atau font values
4. Documentation is code — story dan docs diperlakukan setara dengan implementasi
5. Tested by default — setiap komponen wajib punya unit test

TECH STACK YANG DIGUNAKAN:
- React 18+ dengan TypeScript
- Tailwind CSS + CSS Custom Properties
- Storybook 8.x dengan autodocs
- Vitest + Testing Library + jest-axe
- Turborepo + pnpm (monorepo)
- Changesets (versioning)

FORMAT OUTPUT:
- Setiap file kode harus lengkap dan siap dijalankan
- Sertakan komentar JSDoc pada semua props dan fungsi publik
- Gunakan path alias @ds/tokens, @ds/utils, @ds/components

BATASAN:
- Jangan gunakan inline styles (gunakan Tailwind class atau CSS custom properties)
- Jangan hardcode warna, spacing, atau radius — selalu gunakan tokens
- Jangan skip pembuatan .stories.tsx dan .test.tsx
- Jangan gunakan `any` type di TypeScript kecuali benar-benar diperlukan
```

---

## PROMPT FASE 0 — Inisialisasi Monorepo

```
Tugas: Setup monorepo design system dari nol.

Buat struktur direktori lengkap berikut dan hasilkan semua file konfigurasi yang diperlukan:

design-system/
├── apps/storybook/
├── packages/tokens/
├── packages/components/
├── packages/utils/
├── turbo.json
├── package.json
└── pnpm-workspace.yaml

YANG HARUS KAMU HASILKAN:

1. pnpm-workspace.yaml
   - Definisikan workspace packages

2. turbo.json
   - Pipeline: build, dev, test, lint, storybook
   - Cache config yang tepat

3. Root package.json
   - Scripts: dev, build, test, lint, storybook
   - DevDependencies: turbo, typescript, eslint, prettier

4. tsconfig.base.json (shared TypeScript config)
   - Strict mode aktif
   - Path aliases: @ds/tokens, @ds/utils, @ds/components

5. .eslintrc.base.js (shared ESLint config)
   - React, TypeScript, accessibility rules

6. apps/storybook/.storybook/main.ts
   - Framework: @storybook/react-vite
   - Addons: docs, controls, a11y, viewport, themes, chromatic
   - Stories glob: packages/*/src/**/*.stories.@(ts|tsx|mdx)
   - Autodocs: aktif

7. apps/storybook/.storybook/preview.ts
   - Global decorators untuk ThemeProvider
   - Backgrounds: light dan dark
   - Viewport presets: mobile, tablet, desktop

8. apps/storybook/.storybook/theme.ts
   - Custom Storybook UI theme dengan brand color

OUTPUT: Semua file di atas dalam format lengkap, siap dijalankan.
Tambahkan instruksi bash untuk instalasi dan menjalankan Storybook pertama kali.
```

---

## PROMPT FASE 1 — Design Tokens

```
Tugas: Buat sistem design tokens yang komprehensif untuk design system.

Buat semua file berikut di packages/tokens/src/:

1. colors.ts — Primitive + Semantic Colors
   Buat:
   - colorPrimitive: skala warna untuk blue, green, red, yellow, orange, purple, neutral (skala 50-950)
   - colorSemantic: mapping ke token semantic (background, text, border, interactive, feedback)
   - darkModeOverrides: nilai override untuk dark theme

2. typography.ts — Tipografi
   Buat:
   - fontFamily: sans (Inter), mono (Fira Code)
   - fontSize: skala xs sampai 5xl dengan rem values
   - fontWeight: light (300) sampai black (900)
   - lineHeight: tight, normal, relaxed, loose
   - letterSpacing: tighter sampai widest

3. spacing.ts — Spacing Scale
   Buat skala spacing berbasis 4px:
   - 0, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 72, 80, 96

4. radii.ts — Border Radius
   - none, sm (2px), base (4px), md (6px), lg (8px), xl (12px), 2xl (16px), 3xl (24px), full (9999px)

5. shadows.ts — Box Shadows
   - Skala xs sampai 2xl dengan nilai yang mengikuti material/layering principle

6. index.ts — Barrel export semua tokens

7. css-variables.ts — Generator CSS Custom Properties
   - Fungsi yang mengkonversi token objects menjadi CSS variable strings
   - Support :root dan [data-theme="dark"]

TAMBAHAN:
- Buat packages/tokens/src/tokens.css sebagai output CSS variables yang siap diimport
- Buat Storybook story: apps/storybook/stories/Tokens.stories.tsx yang menampilkan:
  * Color palette grid
  * Typography scale preview
  * Spacing visual ruler
  * Shadow preview cards

Semua token harus diekspor dengan TypeScript const assertion untuk type safety penuh.
```

---

## PROMPT FASE 2A — Komponen Button

```
Tugas: Buat komponen Button yang production-ready.

SPESIFIKASI KOMPONEN:

Variants: solid | outline | ghost | link
Sizes: sm | md | lg
States: default, hover, focus, active, disabled, loading
Colors: default (primary), destructive, success, warning

BUAT FILE BERIKUT:

1. packages/components/src/primitives/Button/types.ts
   Interface ButtonProps dengan:
   - variant, size, colorScheme (opsional)
   - loading (boolean) + loadingText (string)
   - leftIcon, rightIcon (React.ReactNode)
   - isFullWidth (boolean)
   - Extend dari React.ButtonHTMLAttributes<HTMLButtonElement>
   - JSDoc pada setiap prop

2. packages/components/src/primitives/Button/Button.tsx
   - Gunakan React.forwardRef
   - Gunakan cva (class-variance-authority) untuk variant styles
   - Gunakan token CSS variables, bukan hardcoded Tailwind color class
   - Ketika loading=true: tampilkan Spinner, disable button, set aria-busy="true"
   - Ketika disabled: set aria-disabled dan prevent click
   - Support leftIcon dan rightIcon dengan gap yang konsisten
   - displayName = 'Button'

3. packages/components/src/primitives/Button/Button.stories.tsx
   Buat stories:
   - Default (dengan controls)
   - Solid
   - Outline
   - Ghost
   - Link
   - Small / Medium / Large
   - Loading
   - Disabled
   - WithLeftIcon
   - WithRightIcon
   - FullWidth
   - AllVariants (render grid semua varian)
   - DestructiveVariants
   - DarkMode (dengan decorator)

   Tambahkan:
   - argTypes yang lengkap untuk semua props
   - parameters.docs.description
   - play function untuk interaction testing di story Default

4. packages/components/src/primitives/Button/Button.test.tsx
   Test cases:
   - Render dengan text
   - Render semua variants
   - Render semua sizes
   - Disabled state mencegah click
   - Loading state: aria-busy, disable, tampil spinner
   - Forward ref berfungsi
   - leftIcon dan rightIcon ter-render
   - axe accessibility test untuk semua variants
   - Keyboard: Enter dan Space memicu click

5. packages/components/src/primitives/Button/Button.mdx
   Dokumentasi MDX dengan:
   - Penjelasan kapan menggunakan tiap variant
   - Canvas playground
   - Controls table
   - Do's and Don'ts
   - Accessibility notes

6. packages/components/src/primitives/Button/index.ts
   Export Button dan ButtonProps

OUTPUT: Semua 6 file di atas, lengkap dan siap dijalankan tanpa modifikasi.
```

---

## PROMPT FASE 2B — Komponen Input

```
Tugas: Buat komponen Input yang accessible dan production-ready.

SPESIFIKASI:

Types: text | password | email | number | search | tel | url
States: default, focus, error, success, disabled, readonly
Fitur: label terintegrasi, helperText, errorMessage, prefix/suffix, character count, clearable

BUAT FILE BERIKUT:

1. types.ts
   InputProps dengan:
   - label (string) + required (boolean)
   - helperText, errorMessage, successMessage
   - prefix, suffix (React.ReactNode)
   - leftAddon, rightAddon (string, untuk add-on text seperti "https://")
   - maxLength + showCount (boolean)
   - isClearable (boolean)
   - size: sm | md | lg
   - Extend HTMLInputElement attributes
   - Semua props dengan JSDoc

2. Input.tsx
   - Gunakan React.forwardRef
   - Buat wrapper div sebagai field container
   - Label diasosiasikan dengan input via htmlFor + id (auto-generate jika tidak ada)
   - HelperText dan errorMessage menggunakan aria-describedby
   - Ketika error: aria-invalid="true"
   - Password type: toggle visibility button dengan aria-label yang tepat
   - Clearable: tombol clear dengan aria-label="Clear input"
   - Character count: "12/50" format, live region

3. Input.stories.tsx
   Stories:
   - Default
   - WithLabel
   - WithHelperText
   - ErrorState
   - SuccessState
   - Disabled
   - Readonly
   - WithPrefix + WithSuffix
   - WithLeftAddon + WithRightAddon
   - Password (dengan toggle visibility)
   - Search (dengan clear button)
   - WithCharacterCount
   - AllSizes
   - FullExample (form-like dengan semua fitur)

4. Input.test.tsx
   - Render dengan label dan accessibility
   - Error state: aria-invalid, aria-describedby
   - Password toggle: show/hide
   - Clear button functionality
   - Character count update
   - axe test
   - Keyboard navigation

5. Input.mdx
   - Usage guidelines
   - Playground canvas
   - Form validation patterns
   - Accessibility notes

6. index.ts — Export

Catatan: Semua state visual (border color, text color) harus menggunakan CSS custom properties dari tokens, bukan hardcoded Tailwind colors.
```

---

## PROMPT FASE 3 — Komponen Modal/Dialog

```
Tugas: Buat komponen Modal/Dialog yang fully accessible menggunakan Radix UI Dialog primitive.

SPESIFIKASI:

Sizes: sm (400px) | md (560px) | lg (720px) | xl (900px) | fullscreen
Fitur:
- Focus trap saat modal terbuka
- Close dengan Escape key
- Click outside untuk close (configurable)
- Scroll lock pada body
- Animasi masuk/keluar (fade + scale)
- Header dengan title dan close button
- Footer dengan slot untuk action buttons
- Alert Dialog variant (tidak bisa close dengan click outside)

DEPENDENCIES: @radix-ui/react-dialog

BUAT FILE BERIKUT:

1. types.ts
   - ModalProps: isOpen, onClose, size, title, description
   - hideCloseButton, closeOnOverlayClick, closeOnEscape
   - children (body content)
   - footer (ReactNode untuk action buttons)
   - ModalHeaderProps, ModalBodyProps, ModalFooterProps

2. Modal.tsx
   Compound component pattern:
   - Modal (root/provider)
   - Modal.Header
   - Modal.Body  
   - Modal.Footer
   - Modal.CloseButton

   Implementasi:
   - Gunakan Radix UI Dialog sebagai foundation
   - Animasi CSS dengan data-state attribute
   - Portal rendering
   - Proper ARIA: role="dialog", aria-labelledby, aria-describedby
   - Scroll lock otomatis

3. Modal.stories.tsx
   Stories:
   - Default (md size)
   - Small / Large / Fullscreen
   - WithForm (modal berisi form)
   - LongContent (scroll dalam modal)
   - Nested (modal membuka modal lain)
   - AlertDialog (non-dismissible)
   - ConfirmationDialog (Ya/Tidak pattern)
   - play function: open modal, interact, close

4. Modal.test.tsx
   - Modal terbuka dan tertutup
   - Escape key menutup modal
   - Focus trap berfungsi (Tab cycling dalam modal)
   - Click outside menutup modal (jika closeOnOverlayClick=true)
   - Click outside tidak menutup modal (jika closeOnOverlayClick=false)
   - aria-modal, role, labelling
   - axe test ketika modal terbuka

5. Modal.mdx
   - Usage patterns
   - Keyboard interaction table
   - Do's and Don'ts (jangan stack terlalu banyak modal)
   - Accessibility deep-dive

6. index.ts — Export

Pastikan animasi menggunakan `@keyframes` yang menghormati `prefers-reduced-motion`.
```

---

## PROMPT FASE 4 — Storybook Documentation Setup

```
Tugas: Buat setup dokumentasi Storybook yang komprehensif sebagai design system portal.

BUAT FILE BERIKUT:

1. apps/storybook/stories/Introduction.mdx
   - Welcome message
   - Apa itu design system ini
   - Quick start (instalasi dan import pertama komponen)
   - Link ke: Getting Started, Components, Tokens, Contributing
   - Badge: npm version, storybook, license

2. apps/storybook/stories/Tokens/Colors.mdx
   - Import token dari @ds/tokens
   - Render color swatches dalam grid menggunakan Canvas
   - Tampilkan: nama token, hex value, CSS variable name, contoh penggunaan
   - Section: Primitive Colors, Semantic Colors, Dark Mode Colors

3. apps/storybook/stories/Tokens/Typography.mdx
   - Render type scale dari xs sampai 5xl
   - Tampilkan: contoh teks, size, line-height, CSS variable
   - Section: Font Families, Scale, Weights

4. apps/storybook/stories/Tokens/Spacing.mdx
   - Visual ruler/bar chart untuk spacing scale
   - Tampilkan: token name, px value, rem value, CSS variable

5. apps/storybook/stories/Guidelines/Accessibility.mdx
   - Checklist aksesibilitas untuk developer
   - Panduan ARIA usage dalam design system
   - Color contrast guidelines dengan contoh visual
   - Keyboard navigation patterns
   - Screen reader testing guide

6. apps/storybook/stories/Guidelines/Contributing.mdx
   - Cara membuat komponen baru (step by step)
   - Component checklist (Definition of Done)
   - Naming conventions
   - PR process dan review guidelines
   - Cara update design tokens

7. apps/storybook/.storybook/preview.ts (update)
   - Tambahkan global decorator untuk:
     * ThemeProvider (light/dark toggle)
     * Global CSS import (tokens.css)
     * Padding/centering untuk stories
   - Tambahkan globalTypes untuk colorScheme toggle

8. Storybook sort order config
   Urutkan sidebar:
   1. Introduction
   2. Guidelines (Accessibility, Contributing)
   3. Tokens (Colors, Typography, Spacing)
   4. Primitives (Button, Input, ...)
   5. Composite (Card, Modal, ...)

OUTPUT: Semua file MDX dan config di atas, siap dijalankan.
```

---

## PROMPT FASE 5 — Testing Setup

```
Tugas: Setup infrastruktur testing untuk design system.

BUAT FILE BERIKUT:

1. packages/components/vitest.config.ts
   - Environment: jsdom
   - Setup files: vitest.setup.ts
   - Coverage: v8 provider, threshold 80%
   - Alias paths

2. packages/components/vitest.setup.ts
   - Import @testing-library/jest-dom
   - Setup jest-axe matchers
   - Mock window.matchMedia
   - Mock ResizeObserver
   - Mock IntersectionObserver

3. packages/components/src/test-utils/index.ts
   Buat custom render yang wrap dengan providers:
   - ThemeProvider
   - Custom render dengan semua providers
   - Re-export semua dari @testing-library/react

4. .github/workflows/ci.yml
   GitHub Actions pipeline:
   
   Jobs:
   a. lint: ESLint + TypeScript check + Prettier
   b. test: Vitest + coverage report
   c. build: Build semua packages
   d. storybook: Build Storybook
   e. chromatic: Publish ke Chromatic (hanya pada PR dan main branch)
   
   Triggers: push ke main, pull_request
   
   Tambahkan:
   - pnpm cache
   - Node 20
   - Coverage badge upload

5. packages/components/src/primitives/__tests__/snapshot.test.tsx
   Snapshot test runner yang otomatis generate snapshot untuk semua komponen primitif dalam kondisi default

OUTPUT: Semua 5 item di atas, siap dijalankan.
```

---

## PROMPT FASE 6 — Package Release

```
Tugas: Setup pipeline packaging dan release untuk design system.

BUAT FILE BERIKUT:

1. .changeset/config.json
   - Changelog: @changesets/changelog-github
   - Access: public (atau restricted jika private)
   - Base branch: main

2. packages/components/package.json (final config)
   - Exports map untuk ESM + CJS + types
   - sideEffects: false
   - files: ["dist", "src"]
   - Build script menggunakan vite

3. packages/components/vite.config.ts (library build)
   - Mode: library
   - Entry: src/index.ts
   - Output: ESM + CJS
   - External: react, react-dom
   - Generate .d.ts dengan vite-plugin-dts

4. .github/workflows/release.yml
   GitHub Actions release workflow:
   - Trigger: push ke main
   - Gunakan changesets/action
   - Otomatis buat Release PR atau publish ke NPM
   - Deploy Storybook ke Chromatic setelah release

5. packages/components/src/index.ts (main barrel export)
   - Export semua komponen primitif
   - Export semua komponen composite
   - Export semua TypeScript types
   - Export design tokens re-exports

6. CONTRIBUTING.md (root level)
   - Development setup
   - Cara menjalankan Storybook
   - Cara membuat komponen baru
   - Cara membuat changeset
   - Release process

OUTPUT: Semua 6 item di atas.
```

---

## PROMPT UTILITAS — Generate Komponen Baru

```
Tugas: Buat komponen [NAMA_KOMPONEN] untuk design system.

Ikuti template standar design system ini:

SPESIFIKASI KOMPONEN [NAMA_KOMPONEN]:
- Deskripsi: [deskripsi singkat]
- Variants: [list variants]
- Sizes: [sm | md | lg atau sesuai kebutuhan]
- States: [default, hover, focus, disabled, loading, dll]
- Props tambahan: [daftar props khusus]
- ARIA pattern: [combobox / dialog / listbox / dll — lihat WAI-ARIA patterns]

STRUKTUR FILE YANG HARUS DIHASILKAN:
packages/components/src/[primitives|composite]/[NamaKomponen]/
├── [NamaKomponen].tsx       — Implementasi
├── [NamaKomponen].stories.tsx — Min. 5 stories + play function
├── [NamaKomponen].test.tsx  — Unit test + axe test
├── [NamaKomponen].mdx       — MDX documentation
├── types.ts                 — TypeScript interfaces
└── index.ts                 — Barrel export

ATURAN WAJIB:
1. Gunakan React.forwardRef
2. Tidak ada hardcoded values — semua dari tokens (@ds/tokens)
3. Stories harus ada argTypes, description, dan minimal story Default + AllVariants
4. Test wajib ada: render test, state tests, keyboard test, axe accessibility test
5. MDX wajib ada: usage description, canvas playground, do's & don'ts
6. Semua props wajib ada JSDoc
7. Export dari packages/components/src/index.ts

Hasilkan semua file di atas secara lengkap.
```

---

## PROMPT UTILITAS — Audit Aksesibilitas Komponen

```
Tugas: Lakukan audit aksesibilitas komponen [NAMA_KOMPONEN].

[PASTE KODE KOMPONEN DI SINI]

Lakukan analisis berikut:

1. ARIA Roles & Attributes
   - Apakah role yang digunakan sudah tepat?
   - Apakah aria-label atau aria-labelledby tersedia?
   - Apakah aria-describedby untuk helper/error text sudah terhubung?

2. Keyboard Navigation
   - Apakah komponen bisa diakses via Tab?
   - Apakah ada focus indicator yang visible?
   - Apakah keyboard shortcuts mengikuti standar (Enter, Space, Escape, Arrow keys)?

3. Color Contrast
   - Apakah warna text memenuhi rasio 4.5:1 (normal) atau 3:1 (large text)?
   - Apakah state colors (error, success, warning) tidak mengandalkan warna saja?

4. Screen Reader
   - Apakah komponen announce perubahan state ke screen reader?
   - Apakah tombol tanpa teks memiliki aria-label?
   - Apakah dynamic content menggunakan aria-live?

5. Motion
   - Apakah animasi menghormati prefers-reduced-motion?

OUTPUT:
- Daftar issues yang ditemukan (Severity: Critical / Major / Minor)
- Fix yang direkomendasikan dalam bentuk kode
- Updated component code dengan semua fixes diterapkan
- Test cases tambahan untuk coverage aksesibilitas
```

---

## PROMPT UTILITAS — Buat Token Documentation Story

```
Tugas: Buat Storybook story untuk mendokumentasikan design tokens secara visual.

Import tokens dari @ds/tokens dan buat story yang menampilkan:

1. COLOR PALETTE
   Render grid yang menampilkan semua warna dengan:
   - Color swatch (60x60px kotak berwarna)
   - Nama token (misal: color.blue.500)
   - Hex value
   - CSS variable name (--ds-color-blue-500)
   - Copy-to-clipboard untuk setiap nilai

2. TYPOGRAPHY SCALE
   Render setiap size dari xs sampai 5xl dengan:
   - Contoh teks "The quick brown fox"
   - Label ukuran (misal: text-xl)
   - Nilai px dan rem
   - Line height info

3. SPACING SCALE
   Render visual bar untuk setiap spacing token:
   - Bar dengan lebar sesuai nilai spacing
   - Label: nama token + px value

4. BORDER RADIUS
   Render kotak-kotak dengan radius berbeda:
   - Label radius name dan px value

5. SHADOWS
   Render cards dengan shadow berbeda:
   - Label shadow name

Format: React component dalam .stories.tsx
Gunakan inline styles hanya untuk nilai token yang sedang didisplay.
Semua teks, background page, dan UI wrapper menggunakan CSS variables dari design system.

Output: Satu file stories yang lengkap.
```

---

*Gunakan prompt-prompt ini secara berurutan sesuai fase pengerjaan. Setiap prompt dapat dijalankan secara independen oleh Antigravity, namun urutan fase harus diikuti untuk dependensi yang benar (tokens harus ada sebelum komponen).*

*Update prompt sesuai kebutuhan spesifik project — ganti placeholder [NAMA_KOMPONEN], [SPESIFIKASI], dll dengan nilai aktual.*