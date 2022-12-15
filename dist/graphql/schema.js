"use strict";
exports.__esModule = true;
exports.typeDefs = void 0;
exports.typeDefs = "#graphql\n\ttype User {\n\t\tid: ID!\n\t\temail: String!\n\t\tpassword: String!\n\t\temailVerified: String\n\t\tblocked: Boolean\n\t}\n\n\ttype Employee {\n\t\tuserId: User\n\t\tfirst_name: String!\n\t\tlast_name: String!\n\t\tpicture_url: String\n\t\tDate_Hired: String!\n\t\tDoB: String!\n\t\tposition: Position\n\t\tsalary: Float!\n\t\tdepartmentId: Department\n\t\tmanagerId: Employee\n\t}\n\n\ttype Department {\n\t\tid: ID!\n\t\tdept_name: String!\n\t\temployees: [Employee]\n\t}\n\n\tenum Position {\n\t\tCASHIER\n\t\tMANAGER\n\t\tJANITOR\n\t\tACCOUNTANT\n\t\tCUSTOMER_SERVICE\n\t\tGUARD\n\t}\n\n\ttype Query {\n\t\tusers: [User]!\n}";
//# sourceMappingURL=schema.js.map