"use strict";
exports.__esModule = true;
var app_1 = require("./app");
/* const apolloServer = new ApolloServer({ typeDefs, resolvers });

const main = async () => {
    const { url } = await startStandaloneServer(apolloServer);

    console.log(url);
}; */
var server = app_1.app.listen(5000, function () {
    console.log("\n\t\t\uD83D\uDFE2Server started ...\n\t");
});
//# sourceMappingURL=server.js.map