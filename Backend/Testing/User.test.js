const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const UserMock = dbMock.define("User", {
  name: "Test User",
  email: "test@example.com",
  password: "hashedpassword123",
});

describe("User Model", () => {
  it("should create a user with required fields", async () => {
    const user = await UserMock.create({
      name: "Alice",
      email: "alice@example.com",
      password: "securepassword",
    });

    expect(user.name).toBe("Alice");
    expect(user.email).toBe("alice@example.com");
    expect(user.password).toBe("securepassword");
  });

  // Note: sequelize-mock doesn't enforce validations like unique or allowNull,
  // so to test those, you'd need integration or custom validation tests.
});
