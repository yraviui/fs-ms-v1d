import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { createProxyMiddleware } from "http-proxy-middleware";

dotenv.config();

const app = express();

app.use(cors());

const AUTH_SERVICE_URL =
  process.env.AUTH_SERVICE_URL || "http://localhost:5001";

const ADMIN_SERVICE_URL =
  process.env.ADMIN_SERVICE_URL || "http://localhost:5002";

const USER_SERVICE_URL =
  process.env.USER_SERVICE_URL || "http://localhost:5003";

/*
|--------------------------------------------------------------------------
| AUTH
|--------------------------------------------------------------------------
*/

app.use(
  "/api/auth",
  createProxyMiddleware({
    target: AUTH_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: {
      "^/api/auth": "",
    },
  })
);

/*
|--------------------------------------------------------------------------
| ADMIN
|--------------------------------------------------------------------------
*/

app.use(
  "/api/admin",
  createProxyMiddleware({
    target: ADMIN_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: (path, req) => {
      return `/api/admin${path}`;
    },
  })
);

/*
|--------------------------------------------------------------------------
| USER
|--------------------------------------------------------------------------
*/

app.use(
  "/api/user",
  createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true,

    pathRewrite: (path, req) => {
      return `/api/user${path}`;
    },
  })
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    service: "ms-01-api-gateway",
    port: 5000,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});