import { app } from "./app";
import request from "supertest";

describe("tests the auth process", () => {
	it("checks whether the user exists", async () => {
		return request(app)
			.get("/login")
			.send({
				email: "eyobmalik@gmail.com",
				password: "12345678",
			})
			.expect(200);
	});
});
