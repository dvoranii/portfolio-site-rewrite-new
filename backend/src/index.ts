import routes from "./app";
import express from "express";

const app: express.Application = routes;
const port: number = parseInt(process.env.PORT || "5000", 10);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
