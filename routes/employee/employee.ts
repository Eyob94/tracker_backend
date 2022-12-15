import express, { Router, Request, Response } from "express";

const router = Router();

import prisma from "../../lib/lib";

router.get("/", async (req: Request, res: Response) => {
	const employees = await prisma.employee.findMany({
		include: {
			employees: true,
		},
	});

	return res.status(200).json({ employees });
});

router.post("/add", async (req: Request, res: Response) => {
	const {
		employee: {
			id,
			first_name,
			last_name,
			DoB,
			position,
			salary,
			departmentId,
			managerId,
		},
	} = req.body;

	try {
		const employee = await prisma.employee.create({
			data: {
				id: {
					connect: {
						id,
					},
				},
				first_name,
				last_name,
				DoB: new Date(DoB),
				position,
				salary,
				department: {
					connect: {
						id: departmentId,
					},
				},
			},
		});

		if (!!managerId) {
			const updatedEmployee = await prisma.employee.update({
				where: {
					userId: employee.userId,
				},
				data: {
					Manager: {
						connect: {
							userId: managerId,
						},
					},
				},
			});
			return res.status(200).json({ employee: updatedEmployee });
		}

		return res.status(200).json({ employee });
	} catch (error) {
		console.log(error);
		return res.status(400).json({ error });
	}
});

router
	.route("/:id")
	.get(async (req: Request, res: Response) => {
		const {
			params: { id },
		} = req;

		try {
			const employee = await prisma.employee.findUnique({
				where: {
					userId: id,
				},
				include: {
					employees: true,
				},
			});

			return res.status(200).json({ employee });
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
			const employee = await prisma.employee.delete({
				where: {
					userId: id,
				},
			});

			return res.status(200).json({ employee });
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error });
		}
	})
	.put(async (req: Request, res: Response) => {
		const {
			params: { id },
		} = req;
		const { employeeData } = req.body;

		try {
			const employee = await prisma.employee.update({
				where: {
					userId: id,
				},
				data: {
					...employeeData,
				},
			});

			return res.status(200).json({ employee });
		} catch (error) {
			console.log(error);
			return res.status(400).json({ error });
		}
	});

export default router;
