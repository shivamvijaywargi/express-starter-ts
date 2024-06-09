import request from "supertest";

import app from "./app";

describe("App", () => {
  it("should return a 200 status code for the health check route", async () => {
    const response = await request(app).get("/health-check");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      success: true,
      status: "OK",
      message: "Server is up",
    });
  });

  it("should return a 404 status code for an unknown route", async () => {
    const response = await request(app).get("/unknown-route");
    expect(response.statusCode).toBe(404);
    expect(response.body).toEqual({
      success: false,
      message: "Not Found - GET /unknown-route",
    });
  });
});
