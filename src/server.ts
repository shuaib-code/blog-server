import { Server } from "http";
import mongoose from "mongoose";
import app from "./app";
import { env } from "./app/config/env";

let server: Server;

// Graceful shutdown function
const shutdown = (message: string, error?: unknown) => {
	console.error(message, error ?? "");
	if (server) {
		server.close(() => {
			console.log("🔒 Server closed");
			process.exit(1);
		});
	} else {
		process.exit(1);
	}
};

// Handle uncaught errors
process.on("unhandledRejection", (reason) =>
	shutdown("😈 Unhandled Rejection:", reason),
);
process.on("uncaughtException", (error) =>
	shutdown("😈 Uncaught Exception:", error),
);

// Initialize application
const main = async () => {
	try {
		await mongoose.connect(env.DATABASE_URL as string);
		console.log("✅ Database connected");
		server = app.listen(env.PORT, () =>
			console.log(`🚀 Server running on port ${env.PORT}`),
		);
	} catch (error) {
		shutdown("❌ Failed to initialize application:", error);
	}
};

main();
