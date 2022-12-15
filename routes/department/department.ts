import express, { Router, Request, Response } from "express";

const router = Router();

import prisma from "../../lib/lib";

router.get("/", async (req: Request, res: Response) => {
	const departments = await prisma.department.findMany({
		include: {
			Employee: true,
		},
	});

	return res.status(200).json({ departments });
});

router.post("/add", async (req: Request, res: Response) => {
	const { name } = req.body;

	try {
		const department = await prisma.department.create({
			data: {
				name,
			},
			select: {
				id: true,
				name: true,
				Employee: true,
			},
		});
		return res.status(200).json({ department });
	} catch (error: any) {
		if (error.code === "P2002") {
			return res.status(400).send("Department name already exists");
		}
		console.log(error);
		res.status(400).json({ error });
	}
});

router
	.route("/:id")
	.get(async (req: Request, res: Response) => {
		const {
			params: { id },
		} = req;

		try {
			const department = await prisma.department.findUniqueOrThrow({
				where: {
					id: parseInt(id),
				},
			});

			return res.status(200).json({ department });
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error });
		}
	})
	.delete(async (req: Request, res: Response) => {
		const {
			params: { id },
		} = req;
		try {
			const department = await prisma.department.delete({
				where: {
					id: parseInt(id),
				},
			});

			return res.status(200).json({ department });
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error });
		}
	})
	.patch(async (req: Request, res: Response) => {
		const {
			params: { id },
		} = req;

		const { name } = req.body;

		try {
			const department = await prisma.department.update({
				where: {
					id: parseInt(id),
				},
				data: {
					name,
				},
			});

			return res.status(200).json({ department });
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error });
		}
	});

export default router;
