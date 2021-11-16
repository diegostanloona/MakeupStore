import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_MAX,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MIN,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "./validators";

describe("validators test", () => {
  it("VALIDATOR_REQUIRE should return false if value is an empty string", () => {
    const value = "";
    const isValid = validate(value, [VALIDATOR_REQUIRE()]);
    expect(isValid).toEqual(false);
  });
  it("VALIDATOR_REQUIRE should return true if value is NOT an empty string", () => {
    const value = "test";
    const isValid = validate(value, [VALIDATOR_REQUIRE()]);
    expect(isValid).toEqual(true);
  });
  it("VALIDATOR_MINLENGTH should return false if value's length is lower than expected", () => {
    const value = "Test";
    const isValid = validate(value, [VALIDATOR_MINLENGTH(6)]);
    expect(isValid).toEqual(false);
  });
  it("VALIDATOR_MINLENGTH should return true if value's length is equal or greater than expected", () => {
    const value = "Test";
    const isValid = validate(value, [VALIDATOR_MINLENGTH(4)]);
    expect(isValid).toEqual(true);
  });
  it("VALIDATOR_MAXLENGTH should return false if value's length is greater than expected", () => {
    const value = "Test value";
    const isValid = validate(value, [VALIDATOR_MAXLENGTH(5)]);
    expect(isValid).toEqual(false);
  });
  it("VALIDATOR_MAXLENGTH should return true if value's length is equal or lower than expected", () => {
    const value = "Test value";
    const isValid = validate(value, [VALIDATOR_MAXLENGTH(15)]);
    expect(isValid).toEqual(true);
  });
  it("VALIDATOR_MIN should return false if VALUE is lower than expected", () => {
    const value = 4;
    const isValid = validate(value, [VALIDATOR_MIN(5)]);
    expect(isValid).toEqual(false);
  });
  it("VALIDATOR_MIN should return true if VALUE is equal or greater than expected", () => {
    const value = 8;
    const isValid = validate(value, [VALIDATOR_MIN(5)]);
    expect(isValid).toEqual(true);
  });
  it("VALIDATOR_MAX should return false if VALUE is greater than expected", () => {
    const value = 15;
    const isValid = validate(value, [VALIDATOR_MAX(14)]);
    expect(isValid).toEqual(false);
  });
  it("VALIDATOR_MAX should return true if VALUE is equal or lower than expected", () => {
    const value = 8;
    const isValid = validate(value, [VALIDATOR_MAX(14)]);
    expect(isValid).toEqual(true);
  });
  it("VALIDATOR_EMAIL should return false if value is NOT a valid email format", () => {
    const value = "not an email";
    const isValid = validate(value, [VALIDATOR_EMAIL()]);
    expect(isValid).toEqual(false);
  });
  it("VALIDATOR_EMAIL should return true if value is a valid email format", () => {
    const value = "email@domain.com";
    const isValid = validate(value, [VALIDATOR_EMAIL()]);
    expect(isValid).toEqual(true);
  });
});
