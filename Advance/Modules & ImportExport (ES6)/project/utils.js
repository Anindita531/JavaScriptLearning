// utils.js

// Named export
export function greet(name) {
  return `Hello, ${name}!`;
}

// Another named export
export const today = new Date().toDateString();

// Default export
export default function add(a, b) {
  return a + b;
}

