export const mockMds = [
  {
    id: "md1",
    title: "Getting Started with React",
    content: `# Getting Started with React
  
  React is a JavaScript library for building user interfaces.
  
  ## Installation
  
  \`\`\`bash
  npm install react react-dom
  \`\`\`
  
  ## Creating a Component
  
  \`\`\`jsx
  function HelloWorld() {
    return <h1>Hello, world!</h1>;
  }
  \`\`\`
  `,
    createdAt: "2025-04-01T10:00:00Z",
    tags: ["React", "JavaScript"],
  },
  {
    id: "md2",
    title: "Introduction to TypeScript",
    content: `# Introduction to TypeScript
  
  TypeScript extends JavaScript by adding types.
  
  ## Benefits
  
  - Better tooling
  - Early bug detection
  - Enhanced readability
  
  ## Example
  
  \`\`\`ts
  let message: string = "Hello, TypeScript!";
  console.log(message);
  \`\`\`
  `,
    createdAt: "2025-04-02T14:30:00Z",
    tags: ["TypeScript"],
  },
  {
    id: "md3",
    title: "Why You Should Learn Go",
    content: `# Why You Should Learn Go
  
  Go is a statically typed language designed for simplicity and performance.
  
  ## Features
  
  - Fast compilation
  - Concurrency built-in
  - Great for backend services
  
  \`\`\`go
  package main
  
  import "fmt"
  
  func main() {
    fmt.Println("Hello, Go!")
  }
  \`\`\`
  `,
    createdAt: "2025-04-03T09:45:00Z",
    tags: ["Go", "Backend"],
  },
];
