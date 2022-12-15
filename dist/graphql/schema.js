"use strict";
exports.__esModule = true;
exports.dateScalar = exports.typeDefs = void 0;
var graphql_1 = require("graphql");
exports.typeDefs = "#graphql\n\tscalar Date\n\ttype User {\n\t\tid: ID!\n\t\temail: String!\n\t\tpassword: String!\n\t\temailVerified: Date\n\t\tblocked: Boolean\n\t\tEmployee:Employee\n\t}\n\n\ttype Employee {\n\t\tuserId: User\n\t\tfirst_name: String!\n\t\tlast_name: String!\n\t\tpicture_url: String\n\t\tDate_Hired: Date!\n\t\tDoB: Date!\n\t\tposition: Position\n\t\tsalary: Float!\n\t\tdepartmentId: Department\n\t\tmanagerId: Employee\n\t}\n\n\ttype Department {\n\t\tid: ID!\n\t\tdept_name: String!\n\t\temployees: [Employee]\n\t}\n\n\tenum Position {\n\t\tCASHIER\n\t\tMANAGER\n\t\tJANITOR\n\t\tACCOUNTANT\n\t\tCUSTOMER_SERVICE\n\t\tGUARD\n\t}\n\n\ttype Query {\n\t\tusers: [User]!\n\t\tuser(id:ID!):User\n\t}\n\n\n";
exports.dateScalar = new graphql_1.GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    //@ts-ignore
    serialize: function (value) {
        return value.getTime(); // Convert outgoing Date to integer for JSON
    },
    //@ts-ignore
    parseValue: function (value) {
        return new Date(value); // Convert incoming integer to Date
    },
    parseLiteral: function (ast) {
        if (ast.kind === graphql_1.Kind.INT) {
            // Convert hard-coded AST string to integer and then to Date
            return new Date(parseInt(ast.value, 10));
        }
        // Invalid hard-coded value (not an integer)
        return null;
    }
});
//# sourceMappingURL=schema.js.map