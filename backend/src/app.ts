import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import compression from "compression";
import routes from "./api/routes";
import security from "./api/middleware/security";
import csrfMiddleware from "./api/middleware/csrf";

dotenv.config();

const app = express();

app.set("trust proxy", 1);

app.use(compression());
security(app);
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:4173",
      "https://www.ildidev.com",
    ],
    credentials: true,
  })
);

csrfMiddleware(app);

app.use("/", routes);

export default app;
