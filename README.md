# Iris SVM Platform

Ứng dụng web phân loại hoa Iris bằng SVM với 4 kernel: Linear, RBF, Polynomial và Sigmoid.

## Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

> Không nên mở `index.html` bằng cách double-click (`file://...`). Vite cần xử lý module và CSS.

## Build production

```bash
npm install
npm run build
npm start
```

## Deploy Render

Render Web Service:

- Runtime: Node
- Build Command: `npm install && npm run build`
- Start Command: `npm start`
- Health Check Path: `/health`

`render.yaml` trong repository đã chứa cấu hình tương ứng.
