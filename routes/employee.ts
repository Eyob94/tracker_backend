import express = require("express");
const router = express.Router();
import prisma from "../lib/lib";

router.get("/", async (req: express.Request, res: express.Response) => {
	res.status(200).send("hello");
});

export default router;
