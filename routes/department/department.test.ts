import { app } from "../../src/app";
import request from "supertest";

describe("Testing department API", () => {
	it("gets all the departments", async () => {
		const response = await request(app).get("/department");

		expect(response.statusCode).toBe(200);
	});

	it("gets a single department", async () => {
		const response = await request(app).get("/department/1");

		expect(response.statusCode).toBe(200);
		expect(response.body.department).toBeTruthy();
	});

	it("creates and deletes a department", async () => {
		const createDep = await request(app)
			.post("/department/add")
			.send({ name: "dummyDepti" });

		expect(createDep.statusCode).toBe(200);
		expect(createDep.body.department).toBeTruthy();

		const deleteDep = await request(app).delete(
			`/department/${createDep.body.department.id}`
		);
		expect(deleteDep.statusCode).toBe(200);
	});

	it("updates a department", async () => {
		const response = await request(app)
			.patch("/department/1")
			.send({ name: "Sales" });

		expect(response.statusCode).toBe(200);
		expect(response.body.department).toBeTruthy();
	});
});
