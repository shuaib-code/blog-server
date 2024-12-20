import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application, Response } from "express";
import { StatusCodes } from "http-status-codes";
import homePage from "./app/assets/home";
import AppError from "./app/errors/AppError";
import errorHandler from "./app/middlewares/GlobalErrorHandler";
import router from "./app/routes";
const app: Application = express();

app.use(express.json());
app.use(cookieParser());
// app.use(cors());
app.use(cors({ origin: ["http://localhost:5000"] }));

app.use("/api", router);

app.get("/", (_, res: Response) => {
	res.send(homePage);
});

app.all("*", () => {
	throw new AppError(StatusCodes.NOT_FOUND, "API Endpoint not Found.");
});

app.use(errorHandler);
// app.use(notFound);

export default app;
