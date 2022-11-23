import app from "./src/app"
import cfg from "./config/cfg"
app.listen(cfg.port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${cfg.port}`);
});