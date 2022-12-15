import { GraphQLResolveInfo } from "graphql";
import prisma from "../lib/lib";
import { dateScalar } from "./schema";

type CreateUserArgs = {
	id: string;
};

export const resolvers = {
	Date: dateScalar,
	Query: {
		users: async () => {
			const users = await prisma.user.findMany({});

			return users;
		},
		user: async (parent: undefined, args: CreateUserArgs) => {
			const user = await prisma.user.findUnique({
				where: {
					id: args.id,
				},
				include: {
					Employee: true,
				},
			});

			return user;
		},
	},
};
