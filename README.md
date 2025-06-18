# Sistema Interactivo de Mensajes

## Descripción

Este proyecto es una aplicación JavaScript sencilla que solicita al usuario su **nombre** y **edad** y muestra mensajes personalizados según la edad ingresada. Junto a esto tambien, un mensaje de animo.

## Implementación

Como Coder, se implementó un programa en JavaScript que:

1.  **Solicita al usuario**:
    - Nombre del usuario
    - Edad del usuario
    - Valida que la edad sea un número válido.
2.  **Muestra un mensaje personalizado según la edad**:
    - **Menor de 18**: Mensaje animando a seguir aprendiendo.
    - **18 o mayor**: Mensaje motivando a explorar nuevas oportunidades.
    - **No numérico**: Mensaje de error indicando que la edad debe ser un número.
3.  **Muestra en la consola**:
    - El nombre del usuario
    - La edad ingresada
    - El mensaje correspondiente según la validación

## Requerimientos

- Buenas prácticas de programación
- Archivo README descriptivo
- Uso de git para control de versiones
- **Estructura clara del proyecto**:
    - **index.html**: Interfaz de usuario (opcional para pruebas en navegador)
    - **src/sistema_interactivo.js**: Lógica de negocio en JavaScript
    - **README**: Documentación
- Pruebas manuales con diferentes entradas (edad válida menor de 18, mayor o igual a 18, y no numérica)
- Código comentado para facilitar el mantenimiento

## Estructura del Proyecto

```plaintext
├── src
│  ├── assets
│  │   └── outputs.png
│  └── sistema_interactivo.js
├── index.html
└── README.md
```

## Comentarios

- El código JavaScript está comentado para explicar la lógica de validación y generación de mensajes.
- Se recomienda implementar pruebas unitarias para asegurar el correcto funcionamiento de la lógica de validación.
- El proyecto utiliza buenas prácticas de organización y documentación.
- La ejecución inicial se realiza mediante `prompt()` y muestra resultados en la consola, pero puede adaptarse a una interfaz HTML.

## Uso

1. Clona el repositorio y abre `index.html` en tu navegador.
2. Ingresa los datos solicitados y haz clic en "Calcular descuento" para ver el resultado.

---
