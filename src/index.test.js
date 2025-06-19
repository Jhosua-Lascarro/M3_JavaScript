// index.test.js

// Import the function to test from index.js
const result = require("./sistema_interactivo.js");

// Mock console.error and alert to spy on their calls during tests
console.error = jest.fn();
global.alert = jest.fn();

describe("result function", () => {
  // Before each test, clear the mocks to avoid interference between tests
  beforeEach(() => {
    console.error.mockClear();
    global.alert.mockClear();
  });

  // Test: if age is not a number, should return "Error Type" and not call alert
  test('should return "Error Type" and show error if age is not a number', () => {
    expect(result("Juan", "abc")).toBe("Error Type");
    expect(result("Juan", NaN)).toBe("Error Type");
    expect(global.alert).not.toHaveBeenCalled();
  });

  // Test: if age is out of range, should return "Error Range" and not call alert
  test('should return "Error Range" and show error if age is out of range', () => {
    expect(result("Ana", -1)).toBe("Error Range");
    expect(result("Ana", 121)).toBe("Error Range");
    expect(global.alert).not.toHaveBeenCalled();
  });

  // Test: if age is under 18, should return "Child" and not call console.error
  test('should return "Child" and show alert for under 18', () => {
    expect(result("Pedro", 17)).toBe("Child");
    expect(console.error).not.toHaveBeenCalled();
  });

  // Test: if age is 18 or older, should return "Old" and not call console.error
  test('should return "Old" and show alert for 18 or older', () => {
    expect(result("María", 18)).toBe("Old");
    expect(result("María", 25)).toBe("Old");
    expect(console.error).not.toHaveBeenCalled();
  });
});
