import express, { Router } from "express";

const router = Router();

import prisma from "../../lib/lib";

router.get("/", async (req: express.Request, res: express.Response) => {
	const employees = await prisma.employee.findMany({});

	return res.status(200).json({ employees });
});

router.post(
	"/addEmployee",
	async (req: express.Request, res: express.Response) => {
		const {
			id,
			first_name,
			last_name,
			DoB,
			position,
			salary,
			departmentId,
			managerId,
		} = req.body;

		await prisma.employee.create({
			data: {
				id: {
					connect: {
						id,
					},
				},
				first_name,
				last_name,
				DoB,
				position,
				salary,
				department: {
					connect: {
						id: departmentId,
					},
				},
				managerId,
			},
		});
	}
);

export default router;
