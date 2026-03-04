# Clone Claw - claw.ai.vn Clone

Dự án clone lại website [claw.ai.vn](https://claw.ai.vn) sử dụng **Astro** với **Svelte** integration.

## Tech Stack

- **Astro** - Static Site Generator
- **Svelte** - UI Components (via @astrojs/svelte)
- **TailwindCSS** - Styling
- **DaisyUI** - Component Library
- **@iconify/tailwind** - Icons (Lucide icons)

## Cài đặt

### Yêu cầu
- Node.js 18+ 
- npm hoặc pnpm

### Bước 1: Cài Node.js
Tải và cài đặt Node.js từ [nodejs.org](https://nodejs.org)

### Bước 2: Cài dependencies
```bash
cd clone-claw
npm install
```

### Bước 3: Chạy dev server
```bash
npm run dev
```

Mở trình duyệt tại `http://localhost:4321`

### Build production
```bash
npm run build
npm run preview
```

## Cấu trúc dự án

```
clone-claw/
├── src/
│   ├── components/
│   │   ├── Navbar.svelte          # Navigation bar với theme toggle
│   │   ├── Footer.svelte          # Footer với newsletter form
│   │   ├── MobileFAB.svelte       # Mobile Floating Action Button
│   │   ├── PostCard.svelte        # Card hiển thị bài viết
│   │   └── MarkdownConverter.svelte # Trang Markdown for Agents
│   ├── data/
│   │   └── posts.ts               # Dữ liệu bài viết
│   ├── layouts/
│   │   └── Layout.astro           # Layout chính
│   ├── pages/
│   │   ├── index.astro            # Trang chủ
│   │   ├── markdown-for-agents.astro # Trang Markdown
│   │   ├── posts/
│   │   │   └── index.astro        # Trang danh sách bài viết
│   │   └── [category]/
│   │       └── [slug].astro       # Trang chi tiết bài viết
│   └── styles/
│       └── global.css             # CSS toàn cục với theme variables
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Tính năng

- ✅ **Glass morphism design** - Hiệu ứng kính mờ đẹp mắt
- ✅ **Dark/Light theme** - Chuyển đổi theme với localStorage
- ✅ **Responsive** - Tương thích mobile/desktop
- ✅ **Mobile FAB** - Floating Action Button cho mobile
- ✅ **Trang chủ** - Hero, Features, Latest Posts
- ✅ **Trang bài viết** - Danh sách bài viết với filter
- ✅ **Trang chi tiết** - Hiển thị nội dung bài viết
- ✅ **Markdown for Agents** - Tool chuyển URL sang Markdown
- ✅ **Newsletter** - Form đăng ký nhận tin
- ✅ **SEO** - Meta tags, OG tags, canonical URLs

## Themes

- `lobsterglass-light` - Theme sáng (mặc định)
- `lobsterglass-dark` - Theme tối

## Fonts

- **Roboto Slab** - Font chính
- **Space Mono** - Font monospace cho code/terminal
