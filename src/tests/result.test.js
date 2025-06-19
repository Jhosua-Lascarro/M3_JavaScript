const result = require("../scripts/result.js");

// Simulamos console.error y alert para poder espiar sus llamadas en los tests
global.console = { ...global.console, error: jest.fn() };
global.alert = jest.fn();

describe("Función result", () => {
  // Limpiamos los mocks antes de cada test para evitar interferencias
  beforeEach(() => {
    console.error.mockClear();
    global.alert.mockClear();
  });

  // Test: debe devolver "Error Type" si la edad no es un número
  test('debe devolver "Error Type" y mostrar error si la edad no es un número', () => {
    expect(result("Juan", "abc")).toBe("Error Type");
    expect(result("Juan", NaN)).toBe("Error Type");
    expect(global.alert).not.toHaveBeenCalled(); // No debe llamar alert
  });

  // Test: debe devolver "Error Range" si la edad está fuera de rango permitido
  test('debe devolver "Error Range" y mostrar error si la edad está fuera de rango', () => {
    expect(result("Ana", -1)).toBe("Error Range");
    expect(result("Ana", 121)).toBe("Error Range");
    expect(global.alert).not.toHaveBeenCalled(); // No debe llamar alert
  });

  // Test: debe devolver "Child" y mostrar alerta para menores de 18 años
  test('debe devolver "Child" y mostrar alerta para menores de 18', () => {
    expect(result("Pedro", 17)).toBe("Child");
    expect(console.error).not.toHaveBeenCalled(); // No debe llamar console.error
  });

  // Test: debe devolver "Old" y mostrar alerta para mayores o iguales a 18 años
  test('debe devolver "Old" y mostrar alerta para mayores o iguales a 18', () => {
    expect(result("María", 18)).toBe("Old");
    expect(result("María", 25)).toBe("Old");
    expect(console.error).not.toHaveBeenCalled(); // No debe llamar console.error
  });
});
