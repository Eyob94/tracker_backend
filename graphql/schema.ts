import { GraphQLScalarType, Kind } from "graphql";

export const typeDefs = `#graphql
	scalar Date
	type User {
		id: ID!
		email: String!
		password: String!
		emailVerified: Date
		blocked: Boolean
		Employee:Employee
	}

	type Employee {
		userId: User
		first_name: String!
		last_name: String!
		picture_url: String
		Date_Hired: Date!
		DoB: Date!
		position: Position
		salary: Float!
		departmentId: Department
		managerId: Employee
	}

	type Department {
		id: ID!
		dept_name: String!
		employees: [Employee]
	}

	enum Position {
		CASHIER
		MANAGER
		JANITOR
		ACCOUNTANT
		CUSTOMER_SERVICE
		GUARD
	}

	type Query {
		users: [User]!
		user(id:ID!):User
	}


`;

export const dateScalar = new GraphQLScalarType({
	name: "Date",
	description: "Date custom scalar type",
	//@ts-ignore
	serialize(value: Date) {
		return value.getTime(); // Convert outgoing Date to integer for JSON
	},
	//@ts-ignore
	parseValue(value: number) {
		return new Date(value); // Convert incoming integer to Date
	},
	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			// Convert hard-coded AST string to integer and then to Date
			return new Date(parseInt(ast.value, 10));
		}
		// Invalid hard-coded value (not an integer)
		return null;
	},
});
