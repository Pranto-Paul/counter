# React Counter Application

A minimal, state-driven counter built with React and functional components.
This project was developed incrementally to explore core React concepts — starting from static JSX, moving to local state with useState, and finally handling controlled inputs.

![counter-image](image.png)

## Features
- Increment / Decrement – Adjust counter value with dedicated buttons.

- Reset – Instantly reset counter to zero.

- Set Custom Value – Enter any non-negative integer via the input field; the counter updates on submit and the input resets.

- Controlled Input – Fully controlled text field, bound to component state.

- Responsive Layout – Minimal inline and external styling for clarity.


## Technologies
- React (v18+ recommended)

- JavaScript (ES6+)

- CSS – External stylesheet (App.css) with inline overrides where appropriate

- No additional libraries or state management tools — *purely React’s useState hook*.

## Getting Started
### Prerequisites
- Node.js and npm (or yarn) installed on your machine.

### Installation
1. Clone the repository:
```
git clone https://github.com/your-username/react-counter.git
cd react-counter
```
2. Install dependencies:
```
bun install
```
3. Start the development server
```
bun run dev
```
The app will open at *http://localhost:3000*


## Usage
- Click + or – to increment/decrement the counter.

- Press Reset to bring the counter back to zero.

- Type a number into the input box and click set {value} to set the counter to that exact number (negative inputs are automatically coerced to zero).

All interactions update the UI immediately via React’s reactive state system.

## Project Structure
```
src/
├── App.js          # Main component with state and event handlers
├── App.css         # Basic styling for the input box and layout
├── index.js        # Entry point
```

## What I Learned
- Building this counter helped solidify several React fundamentals:

- JSX – Writing declarative UI templates.

- useState – Initialising and updating component state.

- Event handling – Responding to clicks and input changes.

- Controlled components – Binding form inputs to state and handling submissions.

- Functional updates – Using the previous state when incrementing to avoid stale closures.

## Contributing
This is a personal learning project, but suggestions and improvements are always welcome.
Feel free to open an issue or submit a pull request.

## License
Distributed under the MIT License. See LICENSE for more information.