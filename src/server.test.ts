import { app } from "./app";
import request from "supertest";

describe("tests the login process", () => {
	it("checks whether the user exists", async () => {
		const response = await request(app).get("/login").send({
			email: "eyobmalik@gmail.com",
			password: "12345678",
		});
		expect(response.statusCode).toEqual(200);
	});

	it("checks if wrong password is entered", async () => {
		const response = await request(app).get("/login").send({
			email: "eyobmalik@gmail.com",
			password: "123456789",
		});
		expect(response.body.error).toBe("password not correct");
	});

	it("checks if user doesn't exist", async () => {
		const response = await request(app).get("/login").send({
			email: "eyobmalk@gmail.com",
			password: "123456789",
		});

		expect(response.body.error).toBe("user not found");
	});
});

describe("tests the registration process", () => {
	it("checks whether the user exists", async () => {
		const response = await request(app).post("/register").send({
			email: "eyobmalik@gmail.com",
			password: "12345678",
			confirm: "12345678",
		});
		expect(response.statusCode).toEqual(400);
		expect(response.body.error).toBe("email already exists");
	});

	it("checks if confirmed password doesn't match", async () => {
		const response = await request(app).post("/register").send({
			email: "eyobmalik@gmail.com",
			password: "123456789",
			confimr: "1233423432",
		});
		expect(response.statusCode).toEqual(400);
		expect(response.body.error).toBe("passwords don't match");
	});
});
