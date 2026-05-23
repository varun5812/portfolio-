import { createReadStream, existsSync, statSync } from "node:fs";
import { readFile } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const distDir = join(process.cwd(), "dist");
const port = Number(process.env.PORT || 3000);

const mimeTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp"
};

function safeAssetPath(urlPath) {
  const rawPath = urlPath === "/" ? "/index.html" : urlPath;
  const normalizedPath = normalize(rawPath).replace(/^(\.\.[/\\])+/, "");
  return join(distDir, normalizedPath);
}

createServer(async (req, res) => {
  try {
    const url = new URL(req.url || "/", `http://${req.headers.host || "localhost"}`);
    const assetPath = safeAssetPath(url.pathname);
    const hasFile = existsSync(assetPath) && statSync(assetPath).isFile();
    const fallbackPath = join(distDir, "index.html");
    const filePath = hasFile ? assetPath : fallbackPath;
    const extension = extname(filePath);
    const contentType = mimeTypes[extension] || "application/octet-stream";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", hasFile ? "public, max-age=31536000, immutable" : "no-cache");

    if (filePath.endsWith("index.html")) {
      const html = await readFile(filePath);
      res.writeHead(200);
      res.end(html);
      return;
    }

    res.writeHead(200);
    createReadStream(filePath).pipe(res);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
    console.error(error);
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`Production server listening on port ${port}`);
});
