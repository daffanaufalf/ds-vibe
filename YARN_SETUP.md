# Panduan Pengembangan dengan Yarn 4

Dokumen ini menjelaskan cara menjalankan dan mengelola proyek **DS-Vibe** menggunakan Yarn Berry (v4+).

## Persiapan Awal

Pastikan Anda memiliki Node.js v18+ dan Yarn v4 aktif (Gunakan Corepack).

```bash
corepack enable
yarn install
```

## Perintah Pengembangan

### 1. Inisialisasi Token Desain
Sebelum menjalankan komponen, generate variabel CSS dari token desain:

```bash
yarn generate:tokens
```

### 2. Menjalankan Storybook
Untuk melihat dokumentasi komponen dan preview interaktif:

```bash
yarn storybook
```

### 3. Menjalankan Unit Test
Untuk memverifikasi fungsionalitas dan aksesibilitas komponen:

```bash
yarn test
```

### 4. Linting & Formatting
```bash
yarn lint
yarn format
```

## Struktur Workspace (Yarn Workspaces)

Proyek ini menggunakan Yarn Workspaces. Anda dapat menjalankan perintah di spesifik package jika diperlukan:

- **Tokens**: `yarn workspace @ds/tokens <command>`
- **Components**: `yarn workspace @ds/components <command>`
- **Storybook**: `yarn workspace @ds/storybook <command>`

## Troubleshooting

Jika Storybook tidak muncul atau ada error dependensi:
1. Hapus cache: `yarn cache clean`
2. Instal ulang: `yarn install`
3. Generate ulang token: `yarn generate:tokens`

---

Built with ⚡ by Antigravity.
