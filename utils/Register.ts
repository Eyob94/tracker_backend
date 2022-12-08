import prisma from "../lib/lib";

import bcrypt from "bcrypt";

export interface registerTypes {
	email: string;
	password: string;
	confirm: string;
}
export interface error {
	error: string;
}

export interface registerReturn {
	success: Boolean;
	error: string | null;
	user: {} | null;
}

const registerUser = async ({
	email,
	password,
	confirm,
}: registerTypes): Promise<registerReturn> => {
	if (password !== confirm)
		return { user: null, success: false, error: "passwords don't match" };

	const hash: string = await new Promise((resolve, reject) => {
		//@ts-ignore
		bcrypt.genSalt(1, (err: Error | undefined, salt: number) => {
			bcrypt.hash(password, salt, (err: Error | undefined, hash: string) => {
				resolve(hash);
				reject(err);
			});
		});
	});

	try {
		const user = await prisma.user.create({
			data: {
				email,
				password: hash,
			},
		});
		return { user, success: true, error: null };
	} catch (err: any) {
		if ((err.code = "P2002")) {
			return { user: null, success: false, error: "email already exists" };
		}
		return { user: null, success: false, error: err.message };
	}
};

export default registerUser;
