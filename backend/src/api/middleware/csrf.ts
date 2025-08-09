import { Express, Request, Response } from "express";
import cookieParser from "cookie-parser";
import csrf from "csurf";
import bodyParser from "body-parser";

declare global {
  namespace Express {
    interface Request {
      csrfToken(): string;
    }
  }
}

// common type incompatibility between csurf and express
const csrfProtection = csrf({ cookie: true }) as any;
const parseForm = bodyParser.urlencoded({ extended: false });

const csrfMiddleware = (app: Express): void => {
  app.use(cookieParser());
  app.use(parseForm);
  app.use(csrfProtection);

  app.get("/api/csrf", (req: Request, res: Response) => {
    console.log(req.csrfToken());
    res.json({ csrfToken: req.csrfToken() });
  });
};

export default csrfMiddleware;
