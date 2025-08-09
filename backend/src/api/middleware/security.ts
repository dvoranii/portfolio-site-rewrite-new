import { Application, Request, Response, NextFunction } from "express";
import helmet from "helmet";

/**
 * Applies security middleware to the Express application.
 *
 * @param {Application} app - The Express application instance.
 */
export default function security(app: Application): void {
  app.use(helmet());

  // This is a defense-in-depth measure.
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Check if the user agent contains "MSIE " to target older Internet Explorer versions.
    if (
      req.headers["user-agent"] &&
      req.headers["user-agent"].includes("MSIE ")
    ) {
      // This is a legacy defense against clickjacking.
      res.write(
        "<script>if (window.top !== window.self) { window.top.location = window.self.location; }</script>"
      );
    }

    next();
  });
}
