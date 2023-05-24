import App from "./app";
import "dotenv/config";

const PORT = process.env.APP_PORT;

const app = new App();

app.start(PORT);
