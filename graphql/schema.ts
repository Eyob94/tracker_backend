export const typeDefs = `#graphql
	type User {
		id: ID!
		email: String!
		password: String!
		emailVerified: String
		blocked: Boolean
	}

	type Employee {
		userId: User
		first_name: String!
		last_name: String!
		picture_url: String
		Date_Hired: String!
		DoB: String!
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
}`;
