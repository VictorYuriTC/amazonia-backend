import express from "express";
import LoginRouter from "./database/routers/LoginRouter";

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.app.get("/", (req, res) => res.json({ ok: true }));
    this.app.use("/login", LoginRouter);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Methods",
        "GET,POST,DELETE,OPTIONS,PUT,PATCH"
      );
      res.header("Access-Control-Allow-Headers", "*");
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () =>
      console.log(`Amazonia backend running on port ${PORT}`)
    );
  }
}

export default App;
