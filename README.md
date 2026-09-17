<<<<<<< HEAD
# TuoitreSoft – Website Giải pháp AI & Quản trị Cloud

Website giới thiệu dịch vụ của TuoitreSoft: React 19 + Vite 6 + Tailwind CSS 4.

## Chạy trên máy

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # xuất ra thư mục dist/
npm run lint     # kiểm tra TypeScript
```

## Trang & đường dẫn
=======
## Run Locally
>>>>>>> f65e6f1eea6ee029aed284564952e2b7b816d77c

| Trang | Đường dẫn |
|---|---|
| Trang chủ | `/` |
| Tư vấn quy trình vận hành | `/quy-trinh-van-hanh` |
| Đào tạo AI in-house | `/dao-tao-ai` |

Link cũ dạng `/#/dao-tao-ai` tự chuyển sang đường dẫn mới. Tiêu đề, mô tả, canonical của từng trang khai báo trong `PAGE_META` ở `src/App.tsx`.

## Deploy Netlify

- Build command: `npm run build` · Publish directory: `dist`
- `public/_redirects` trả `index.html` cho mọi đường dẫn để các trang con không bị 404.
- Khi đổi sang domain chính thức, cập nhật domain trong: `index.html` (og:url, og:image, canonical), `SITE_URL` trong `src/App.tsx`, `public/robots.txt`, `public/sitemap.xml`.

## Ảnh

Ảnh dùng trên web ở dạng WebP trong `src/assets/images/`. Ảnh chia sẻ mạng xã hội: `public/og-image.jpg` (1200×630).
