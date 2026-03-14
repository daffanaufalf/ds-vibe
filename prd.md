# PRD: Vibe Coding Design System — End-to-End dengan Storybook Documentation

**Versi:** 1.0.0  
**Status:** Draft  
**Tanggal:** 10 Maret 2026  
**Owner:** Product & Engineering Team  
**AI Agent:** Antigravity

---

## 1. Overview

### 1.1 Latar Belakang

Design system adalah fondasi visual dan fungsional sebuah produk digital. Dalam era vibe coding — di mana AI agent berperan aktif dalam menulis, mereview, dan mendokumentasikan kode — dibutuhkan sebuah pendekatan end-to-end yang memungkinkan AI agent membangun design system secara kohesif: mulai dari token desain, komponen UI, hingga dokumentasi interaktif menggunakan Storybook.

Proyek ini mendefinisikan bagaimana AI Agent Antigravity akan membangun, mengelola, dan mendokumentasikan design system secara mandiri dengan minimal intervensi manusia, namun tetap menghasilkan output yang siap produksi.

### 1.2 Visi

> Membangun design system yang hidup, terdokumentasi secara otomatis, dan dapat digunakan oleh seluruh tim produk — digerakkan oleh AI agent dari hulu ke hilir.

### 1.3 Tujuan Produk

- Menghasilkan design system yang konsisten, scalable, dan maintainable
- Mempercepat proses pembuatan komponen UI melalui vibe coding
- Mengotomatiskan pembuatan dokumentasi Storybook
- Menyediakan single source of truth untuk desain dan implementasi

---

## 2. Scope

### 2.1 In Scope

- Setup infrastruktur design system (monorepo, tooling, CI/CD)
- Pembuatan design tokens (color, typography, spacing, shadow, radius)
- Pembangunan komponen UI primitif dan komposit
- Integrasi Storybook sebagai platform dokumentasi
- Pembuatan stories untuk setiap komponen
- Aksesibilitas (WCAG 2.1 AA compliance)
- Theming (light/dark mode)
- Export package ke NPM (private/public)

### 2.2 Out of Scope

- Desain visual di tools Figma (dilakukan oleh desainer manusia)
- Marketing website untuk design system
- Integrasi ke mobile native (React Native — fase selanjutnya)

---

## 3. User & Stakeholder

| Role | Kebutuhan Utama |
|------|----------------|
| Frontend Developer | Komponen siap pakai, konsisten, dan terdokumentasi |
| Designer | Token desain yang sinkron dengan implementasi |
| Product Manager | Visibilitas progres komponen dan coverage |
| QA Engineer | Snapshot testing dan aksesibilitas report |
| AI Agent (Antigravity) | Instruksi jelas per fase agar dapat mengeksekusi secara mandiri |

---

## 4. Arsitektur Sistem

### 4.1 Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | React 18+ dengan TypeScript |
| Styling | Tailwind CSS + CSS Custom Properties (untuk tokens) |
| Build Tool | Vite + Rollup |
| Monorepo | Turborepo |
| Dokumentasi | Storybook 8.x |
| Testing | Vitest + Testing Library + Chromatic |
| Linting | ESLint + Prettier + Stylelint |
| Package Manager | pnpm |
| CI/CD | GitHub Actions |
| Registry | NPM (private) atau GitHub Packages |

### 4.2 Struktur Direktori

```
design-system/
├── apps/
│   └── storybook/              # Storybook app
│       ├── .storybook/
│       │   ├── main.ts
│       │   ├── preview.ts
│       │   └── theme.ts
│       └── stories/            # Global stories & docs
├── packages/
│   ├── tokens/                 # Design tokens
│   │   ├── src/
│   │   │   ├── colors.ts
│   │   │   ├── typography.ts
│   │   │   ├── spacing.ts
│   │   │   ├── shadows.ts
│   │   │   └── index.ts
│   │   └── package.json
│   ├── components/             # UI Components
│   │   ├── src/
│   │   │   ├── primitives/     # Atom-level components
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.stories.tsx
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   ├── Badge/
│   │   │   │   ├── Avatar/
│   │   │   │   ├── Icon/
│   │   │   │   └── Typography/
│   │   │   ├── composite/      # Molecule-level components
│   │   │   │   ├── Card/
│   │   │   │   ├── Modal/
│   │   │   │   ├── Dropdown/
│   │   │   │   ├── Toast/
│   │   │   │   ├── Table/
│   │   │   │   └── Form/
│   │   │   └── index.ts
│   │   └── package.json
│   └── utils/                  # Shared utilities
│       ├── src/
│       │   ├── cn.ts           # className merger
│       │   ├── a11y.ts         # Accessibility helpers
│       │   └── index.ts
│       └── package.json
├── turbo.json
├── package.json
└── pnpm-workspace.yaml
```

---

## 5. Fase Pengerjaan

### Fase 0: Inisialisasi & Setup (Sprint 1)

**Objective:** Menyiapkan fondasi infrastruktur yang siap digunakan oleh AI agent.

**Tasks:**
- [ ] Inisialisasi monorepo dengan Turborepo + pnpm
- [ ] Setup TypeScript config shared
- [ ] Setup ESLint + Prettier + Husky + lint-staged
- [ ] Setup Storybook 8.x dengan addon essensial:
  - `@storybook/addon-a11y`
  - `@storybook/addon-docs`
  - `@storybook/addon-controls`
  - `@storybook/addon-viewport`
  - `@storybook/addon-themes`
- [ ] Setup Chromatic untuk visual regression testing
- [ ] Setup GitHub Actions pipeline (build, test, deploy Storybook)
- [ ] Konfigurasi CI badge dan Storybook deployment ke Chromatic/Vercel

**Acceptance Criteria:**
- `pnpm dev` menjalankan Storybook di localhost:6006
- `pnpm build` menghasilkan build tanpa error
- Pipeline CI berjalan sukses di PR

---

### Fase 1: Design Tokens (Sprint 1–2)

**Objective:** Mendefinisikan semua token desain sebagai single source of truth.

**Tasks:**
- [ ] Buat token sistem warna (primitive + semantic)
- [ ] Buat token tipografi (font family, size scale, weight, line height)
- [ ] Buat token spacing (menggunakan skala 4px base)
- [ ] Buat token border radius
- [ ] Buat token shadow/elevation
- [ ] Buat token untuk dark mode (via CSS custom properties)
- [ ] Export tokens ke format: JS/TS, CSS Variables, dan JSON
- [ ] Buat Storybook story untuk token visual reference

**Struktur Token:**

```typescript
// Contoh: packages/tokens/src/colors.ts

export const colorPrimitive = {
  blue: {
    50:  '#EFF6FF',
    100: '#DBEAFE',
    500: '#3B82F6',
    900: '#1E3A5F',
  },
  // ... dst
} as const;

export const colorSemantic = {
  background: {
    default: 'var(--color-blue-50)',
    subtle:  'var(--color-blue-100)',
  },
  text: {
    primary:   'var(--color-neutral-900)',
    secondary: 'var(--color-neutral-600)',
    disabled:  'var(--color-neutral-400)',
  },
  interactive: {
    primary:        'var(--color-blue-500)',
    primaryHover:   'var(--color-blue-600)',
    primaryPressed: 'var(--color-blue-700)',
  },
} as const;
```

**Acceptance Criteria:**
- Semua token terdefinisi dan diekspor dengan benar
- Token tersedia sebagai CSS variables di root
- Storybook menampilkan color palette, typography scale, dan spacing grid
- Dark mode bekerja dengan toggle di Storybook

---

### Fase 2: Komponen Primitif (Sprint 2–4)

**Objective:** Membangun atom-level components yang menjadi building block utama.

**Daftar Komponen Primitif:**

| Komponen | Variasi | Priority |
|----------|---------|----------|
| Button | solid, outline, ghost, link × sm/md/lg × loading/disabled | P0 |
| Input | text, password, search × error/success/disabled | P0 |
| Typography | heading (h1-h6), body, caption, label | P0 |
| Icon | wrapper dengan size & color token | P0 |
| Badge | solid, soft × color variants | P1 |
| Avatar | image, initials, placeholder × sizes | P1 |
| Checkbox | controlled/uncontrolled × indeterminate | P1 |
| Radio | controlled/uncontrolled | P1 |
| Switch/Toggle | controlled/uncontrolled | P1 |
| Select | native + custom | P1 |
| Textarea | resizable, max-rows | P2 |
| Spinner/Loader | sizes & colors | P2 |
| Divider | horizontal, vertical | P2 |
| Tooltip | top/bottom/left/right | P2 |

**Standar Setiap Komponen:**

Setiap komponen wajib memiliki:

```
ComponentName/
├── ComponentName.tsx        # Implementasi komponen
├── ComponentName.stories.tsx # Storybook stories
├── ComponentName.test.tsx   # Unit + accessibility test
├── types.ts                 # TypeScript interfaces/types
└── index.ts                 # Export
```

**Template Komponen:**

```typescript
// Button.tsx
import React from 'react';
import { cn } from '@ds/utils';
import type { ButtonProps } from './types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'solid', size = 'md', loading, disabled, children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading && <Spinner size="sm" aria-hidden />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

**Template Stories:**

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Komponen tombol utama yang mendukung berbagai varian dan ukuran.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: 'Click me', variant: 'solid', size: 'md' },
};

export const Loading: Story = {
  args: { children: 'Loading...', loading: true },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-2">
      {['solid', 'outline', 'ghost', 'link'].map((v) => (
        <Button key={v} variant={v as any}>{v}</Button>
      ))}
    </div>
  ),
};
```

**Acceptance Criteria:**
- Semua komponen P0 selesai sebelum akhir Sprint 3
- Coverage unit test ≥ 80%
- Zero axe accessibility violations
- Storybook autodocs ter-generate dari JSDoc dan prop types

---

### Fase 3: Komponen Komposit (Sprint 4–6)

**Objective:** Membangun molecule-level components dari kombinasi primitif.

**Daftar Komponen Komposit:**

| Komponen | Deskripsi | Priority |
|----------|-----------|----------|
| Card | container konten dengan header/body/footer | P0 |
| Modal/Dialog | overlay dialog dengan trap focus | P0 |
| Toast/Notification | feedback messages (success/error/warning/info) | P0 |
| Dropdown/Menu | context menu dan action menu | P1 |
| Form | form wrapper dengan validation state | P1 |
| Table | data table dengan sorting dan pagination | P1 |
| Tabs | tab navigation | P1 |
| Accordion | collapsible content panels | P2 |
| Breadcrumb | navigasi hierarki | P2 |
| Pagination | navigasi halaman | P2 |
| DatePicker | pemilih tanggal | P2 |
| Combobox | searchable dropdown | P2 |

**Acceptance Criteria:**
- Semua komponen P0 & P1 memenuhi standar aksesibilitas WCAG 2.1 AA
- Keyboard navigation berfungsi di semua komponen interaktif
- Komponen komposit menggunakan komponen primitif secara konsisten
- Story play functions untuk interaction testing

---

### Fase 4: Dokumentasi Storybook (Sprint 5–6)

**Objective:** Storybook menjadi dokumentasi yang komprehensif dan bisa digunakan sebagai design system portal.

#### 4.1 Konfigurasi Storybook

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../packages/*/src/**/*.stories.@(ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-themes',
    '@chromatic-com/storybook',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
};

export default config;
```

#### 4.2 MDX Documentation Pages

Setiap package wajib memiliki MDX intro page:

```mdx
{/* packages/components/src/primitives/Button/Button.mdx */}

import { Canvas, Controls, Meta, Story } from '@storybook/blocks';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} />

# Button

Button digunakan untuk memicu sebuah aksi atau event. Gunakan label yang jelas dan deskriptif.

## Kapan Menggunakan

- **Solid**: Aksi utama halaman (CTA)
- **Outline**: Aksi sekunder
- **Ghost**: Aksi tersier atau dalam toolbar
- **Link**: Navigasi yang terlihat seperti teks

## Playground

<Canvas of={ButtonStories.Default} />
<Controls of={ButtonStories.Default} />

## Semua Varian

<Canvas of={ButtonStories.AllVariants} />
```

#### 4.3 Halaman Khusus Dokumentasi

Buat halaman MDX berikut di Storybook:

- `Introduction.mdx` — Welcome page + getting started
- `Tokens/Colors.mdx` — Color palette visual reference
- `Tokens/Typography.mdx` — Type scale reference
- `Tokens/Spacing.mdx` — Spacing visual reference
- `Guidelines/Accessibility.mdx` — Panduan aksesibilitas
- `Guidelines/Contributing.mdx` — Cara berkontribusi ke design system
- `Changelog.mdx` — Riwayat perubahan

**Acceptance Criteria:**
- Storybook ter-deploy ke Chromatic/Vercel secara otomatis pada setiap merge ke `main`
- Autodocs aktif untuk semua komponen yang memiliki tag `autodocs`
- Setiap komponen memiliki deskripsi, props table, dan minimal 3 stories
- Token reference pages tersedia dan terupdate otomatis

---

### Fase 5: Testing & Quality Assurance (Sprint 6–7)

**Objective:** Memastikan kualitas komponen sebelum rilis.

#### 5.1 Unit Testing (Vitest + Testing Library)

```typescript
// Button.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('disabled ketika prop disabled=true', () => {
    render(<Button disabled>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('tidak memanggil onClick ketika disabled', async () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Click</Button>);
    await userEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('passes accessibility check', async () => {
    const { container } = render(<Button>Accessible</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
```

#### 5.2 Visual Regression Testing (Chromatic)

- Setiap PR akan menjalankan Chromatic untuk mendeteksi perubahan visual
- Perubahan visual wajib di-approve oleh reviewer
- Snapshots tersimpan per story, per viewport (mobile/tablet/desktop)

#### 5.3 Coverage Target

| Metrik | Target |
|--------|--------|
| Statement Coverage | ≥ 80% |
| Branch Coverage | ≥ 75% |
| Accessibility (axe) | 0 violations |
| Chromatic Snapshot | 100% stories ter-snapshot |

---

### Fase 6: Packaging & Release (Sprint 7–8)

**Objective:** Publish design system sebagai package yang bisa digunakan oleh tim lain.

**Tasks:**
- [ ] Konfigurasi build output (ESM + CJS + types)
- [ ] Setup Changesets untuk versioning semantik
- [ ] Buat release workflow di GitHub Actions
- [ ] Publish ke NPM registry (private/public)
- [ ] Buat CHANGELOG.md otomatis dari changeset

**package.json komponen:**

```json
{
  "name": "@your-org/ds-components",
  "version": "1.0.0",
  "main": "./dist/index.cjs",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "require": "./dist/index.cjs",
      "types": "./dist/index.d.ts"
    }
  },
  "sideEffects": false,
  "peerDependencies": {
    "react": ">=18",
    "react-dom": ">=18"
  }
}
```

---

## 6. Aksesibilitas

Design system wajib memenuhi **WCAG 2.1 Level AA**:

| Kriteria | Implementasi |
|----------|-------------|
| Color Contrast | Minimum 4.5:1 untuk teks normal, 3:1 untuk teks besar |
| Keyboard Navigation | Semua elemen interaktif bisa diakses via keyboard |
| Focus Management | Focus indicator yang jelas dan terlihat |
| Screen Reader | ARIA labels, roles, dan live regions yang tepat |
| Motion | Menghormati `prefers-reduced-motion` |
| Touch Targets | Minimal 44×44px untuk touch targets |

---

## 7. Theming

### 7.1 Struktur Theme

```css
/* CSS Custom Properties untuk theming */
:root {
  /* Colors */
  --ds-color-bg-default: #FFFFFF;
  --ds-color-bg-subtle: #F8FAFC;
  --ds-color-text-primary: #0F172A;
  --ds-color-text-secondary: #64748B;
  --ds-color-interactive-primary: #3B82F6;
  
  /* Spacing */
  --ds-space-1: 4px;
  --ds-space-2: 8px;
  --ds-space-4: 16px;
  --ds-space-8: 32px;
  
  /* Radius */
  --ds-radius-sm: 4px;
  --ds-radius-md: 8px;
  --ds-radius-lg: 12px;
}

[data-theme="dark"] {
  --ds-color-bg-default: #0F172A;
  --ds-color-bg-subtle: #1E293B;
  --ds-color-text-primary: #F8FAFC;
  --ds-color-text-secondary: #94A3B8;
}
```

---

## 8. Metrik Keberhasilan

| Metrik | Target | Cara Ukur |
|--------|--------|-----------|
| Komponen tersedia | ≥ 30 komponen | Component inventory |
| Test coverage | ≥ 80% | Vitest coverage report |
| Aksesibilitas violations | 0 | axe-core + Storybook a11y addon |
| Storybook stories | ≥ 3 per komponen | Storybook story count |
| Bundle size (components) | ≤ 50KB gzipped | Bundlephobia / size-limit |
| Time to first use | < 30 menit setup | Developer onboarding survey |
| Visual regression catches | ≥ 95% akurat | Chromatic review rate |

---

## 9. Timeline

| Sprint | Durasi | Deliverable |
|--------|--------|-------------|
| Sprint 1 | 2 minggu | Infrastruktur, tooling, design tokens |
| Sprint 2–3 | 4 minggu | Komponen primitif P0 |
| Sprint 4 | 2 minggu | Komponen primitif P1–P2 |
| Sprint 5–6 | 4 minggu | Komponen komposit P0–P1 |
| Sprint 6 | 2 minggu | Dokumentasi Storybook lengkap |
| Sprint 7 | 2 minggu | Testing & QA |
| Sprint 8 | 2 minggu | Packaging, release, & onboarding |

**Total estimasi: ±18 minggu (4,5 bulan)**

---

## 10. Risiko & Mitigasi

| Risiko | Dampak | Mitigasi |
|--------|--------|----------|
| AI agent menghasilkan komponen tidak konsisten | Tinggi | Buat template dan constraint yang ketat di prompt |
| Token tidak tersinkron antara desain dan kode | Tinggi | Gunakan Style Dictionary untuk sinkronisasi otomatis |
| Aksesibilitas tidak terpenuhi | Tinggi | Wajibkan axe test di CI pipeline |
| Storybook story tidak lengkap | Sedang | Checklist per komponen di PR template |
| Bundle size membengkak | Sedang | Pasang size-limit di CI, alert jika melebihi threshold |
| Breaking changes tidak terkomunikasi | Sedang | Wajibkan Changesets di setiap PR |

---

## 11. Definisi of Done (DoD)

Sebuah komponen dinyatakan **selesai** jika memenuhi semua kriteria berikut:

- [ ] Implementasi TypeScript dengan props yang fully typed
- [ ] Mendukung `ref` forwarding
- [ ] Mendukung semua varian dan ukuran yang terdefinisi
- [ ] Menggunakan design tokens (tidak ada hardcoded values)
- [ ] Unit test dengan coverage ≥ 80%
- [ ] Zero axe accessibility violations
- [ ] Storybook story dengan minimal: Default, AllVariants, Loading/Disabled state
- [ ] MDX documentation page
- [ ] JSDoc pada semua props
- [ ] Exported dari package index
- [ ] Changelog entry via Changesets

---

## 12. Lampiran

### 12.1 Referensi

- [Storybook 8 Documentation](https://storybook.js.org)
- [Turborepo Documentation](https://turbo.build)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Radix UI Primitives](https://www.radix-ui.com)
- [Style Dictionary](https://amzn.github.io/style-dictionary)
- [Chromatic](https://www.chromatic.com)
- [Changesets](https://github.com/changesets/changesets)

### 12.2 Glosarium

| Istilah | Definisi |
|---------|----------|
| Design Token | Nilai desain yang tersimpan sebagai variabel (warna, spasi, dll) |
| Primitive Component | Komponen atom level yang tidak dapat dibagi lagi |
| Composite Component | Komponen yang dibangun dari beberapa primitive |
| Story | Representasi satu kondisi/state komponen di Storybook |
| Autodocs | Fitur Storybook yang otomatis membuat halaman dokumentasi dari metadata komponen |
| Vibe Coding | Pendekatan coding kolaboratif antara developer dan AI agent |
| Chromatic | Platform visual testing terintegrasi dengan Storybook |

---

*Dokumen ini dikelola oleh tim Product & Engineering. Setiap perubahan signifikan wajib melalui review dari tech lead dan product owner.*