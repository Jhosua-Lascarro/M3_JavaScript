# Interactive Message System

## Description

This project is a simple JavaScript application that asks the user for their **name** and **age** and displays personalized messages based on the entered age. It also provides an encouraging message.

## Implementation

As a Coder, a JavaScript program was implemented that:

1. **Requests from the user:**
    - User's name
    - User's age
    - Validates that the age is a valid number.
2. **Displays a personalized message based on age:**
    - **Under 18**: Message encouraging to keep learning.
    - **18 or older**: Message motivating to explore new opportunities.
    - **Non-numeric**: Error message indicating that age must be a number.
3. **Displays in the console:**
    - The user's name
    - The entered age
    - The corresponding message according to the validation

## Requirements

- Good programming practices
- Descriptive README file
- Use of git for version control
- **Clear project structure:**
  - **index.html**: User interface (optional for browser testing)
  - **src/index.js**: Business logic in JavaScript
  - **README**: Documentation
- Manual tests with different inputs (valid age under 18, 18 or older, and non-numeric)
- Commented code to facilitate maintenance

## Project Structure

```plaintext
M3_JavaScript/
├── node_modules/
├── package.json
├── package-lock.json
├── README.md
└── src/
    ├── assets/
    │   ├── outputAdult.png
    │   ├── outputChild.png
    │   └── outputError.png
    ├── index.js
    ├── index.test.js
    └── pages/
        └── index.html
```

## Notes

- The JavaScript code is commented to explain the validation logic and message generation.
- It is recommended to implement unit tests to ensure the correct functioning of the validation logic.
- The project uses good organization and documentation practices.
- The initial execution is done via `prompt()` and displays results in the console, but it can be adapted to an HTML interface.

## Usage

1. Clone the repository and open `index.html` in your browser.
2. Enter the requested data and click "Calculate discount" to see the result.

## Automated tests with Jest

To verify that the code works correctly, you can run the automated tests using [Jest](https://jestjs.io/).

### Steps to run the tests

1. Install the project dependencies (if you haven't done it yet):

   ```bash
   npm install
   ```

2. Run the tests with the following command:

   ```bash
   npm test
   ```

This will execute all the defined tests and display the results in the terminal.

---
