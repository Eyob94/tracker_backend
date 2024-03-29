import prisma from "../lib/lib";

import bcrypt from "bcrypt";

export const findUser = async (email: string | undefined, password: string) => {
	const userData = await prisma.user.findUnique({
		where: {
			email,
		},
	});

	if (userData) {
		const verified = await bcrypt.compare(password, userData.password);

		const { password: p, ...user } = userData;

		if (verified) {
			return { success: true, user, error: null };
		}

		return { success: false, user: null, error: "password not correct" };
	} else return { success: false, user: null, error: "user not found" };
};
