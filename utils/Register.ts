import prisma from "../lib/lib";

const bcrypt = require("bcrypt");

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
		bcrypt.genSalt(1, (err: string, salt: number) => {
			bcrypt.hash(password, salt, (err: string, hash: string) => {
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
