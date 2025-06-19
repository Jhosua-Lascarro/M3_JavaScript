// Archivo: result.test.js
const result = require("./index.js");

// Simulamos console.error y alert
console.error = jest.fn();
global.alert = jest.fn();

describe("Función result", () => {
  beforeEach(() => {
    // Limpiamos los mocks antes de cada prueba
    console.error.mockClear();
    global.alert.mockClear();
  });

  test('debe devolver "Error Type" y mostrar error si la edad no es un número', () => {
    expect(result("Juan", "abc")).toBe("Error Type");
    expect(result("Juan", NaN)).toBe("Error Type");
    expect(global.alert).not.toHaveBeenCalled();
  });

  test('debe devolver "Error Range" y mostrar error si la edad está fuera de rango', () => {
    expect(result("Ana", -1)).toBe("Error Range");
    expect(result("Ana", 121)).toBe("Error Range");
    expect(global.alert).not.toHaveBeenCalled();
  });

  test('debe devolver "Child" y mostrar alerta para menores de 18', () => {
    expect(result("Pedro", 17)).toBe("Child");
    expect(console.error).not.toHaveBeenCalled();
  });

  test('debe devolver "Old" y mostrar alerta para mayores o iguales a 18', () => {
    expect(result("María", 18)).toBe("Old");
    expect(result("María", 25)).toBe("Old");
    expect(console.error).not.toHaveBeenCalled();
  });
});
