import { app } from "./app";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "../graphql/schema";
import { resolvers } from "../graphql/resolver";
import { startStandaloneServer } from "@apollo/server/standalone";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const main = async () => {
	const { url } = await startStandaloneServer(apolloServer);

	console.log(url);
};

main();

const server = app.listen(5000, () => {
	console.log(`
		🟢Server started ...
	`);
});
