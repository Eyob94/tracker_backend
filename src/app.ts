import express from "express";
import { findUser } from "../utils/Login";
import registerUser from "../utils/Register";

export const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ hello: "hi" });
});

app.get("/login", async (req, res) => {
	const { email, password } = req.body;

	const { success, error, user } = await findUser(email, password);

	if (success) return res.status(200).end();

	return res.status(400).json({ error });
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
