import { app } from "./app";

const server = app.listen(5000, () => {
	console.log(`
		🟢Server started...
	`);
});
