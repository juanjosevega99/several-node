const request = require("supertest");

const app = require("../src/app");

// Testing get all user endpoint
describe("GET /users", () => {
  it("respond with json containing a list of all users", (done) => {
    request(app).get("/users").set("Accept", "application/json");
    expect("Content-Type", /json/);
    expect(200, done);
  });
});

// Testing user endpoint by giving an existing user
describe("GET /users/:id", () => {
  it("respond with json containing a single user", (done) => {
    request(app).get("/users/U0001").set("Accept", "application/json");
    expect("Content-Type", /json/);
    expect(200, done);
  });

  it("respond with a json user not found when the user does not exists", (done) => {
    request(app)
      .get("/users/nonexistinguser")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(404)
      .expect('"user not found"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
