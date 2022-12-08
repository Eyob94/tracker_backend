import express from "express";
import { findUser } from "../utils/Login";
import registerUser from "../utils/Register";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	console.log("hello");
	res.json({ hello: "hi" });
});

app.get("/login", async (req, res) => {
	const { email, password } = req.body;

	const data = await findUser(email, password);

	console.log(data);

	return res.end();
});

app.post("/register", async (req, res) => {
	const { email, password, confirm } = req.body;

	const { success, user, error } = await registerUser({
		email,
		password,
		confirm,
	});

	if (success) {
		return res.status(200).json(user);
	}

	return res.status(400).end();
});

const server = app.listen(5000, () => {
	console.log(`
        🟢Server ready at port 5000
    `);
});
