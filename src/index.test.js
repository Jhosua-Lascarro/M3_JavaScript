// prompt.test.js
const { createPrompt } = require("./prompt");

describe("createPrompt", () => {
  test("debería devolver un prompt con el input proporcionado", () => {
    const input = "JavaScript";
    const expected = "Escribe un texto sobre: JavaScript";
    const result = createPrompt(input);
    expect(result).toBe(expected);
  });

  test("debería manejar un input vacío", () => {
    const input = "";
    const expected = "Escribe un texto sobre: ";
    const result = createPrompt(input);
    expect(result).toBe(expected);
  });
});
