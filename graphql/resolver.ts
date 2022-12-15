import prisma from "../lib/lib";

export const resolvers = {
	Query: {
		users: async () => {
			const users = await prisma.user.findMany({});

			return users;
		},
	},
};
