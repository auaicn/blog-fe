export const mockBlogs = [
  {
    id: "blog1",
    title: "Improving Lighthouse Scores in Next.js",
    content: `# Improving Lighthouse Scores in Next.js
  
  Lighthouse scores matter — especially for SEO and user experience. Here’s how I improved mine in a Next.js app.
  
  ## 1. Optimize Images
  
  Use \`next/image\` for automatic image optimization.
  
  \`\`\`tsx
  import Image from 'next/image';
  
  <Image src="/banner.png" width={800} height={400} alt="Banner" />
  \`\`\`
  
  ## 2. Reduce JavaScript Bundle Size
  
  - Use dynamic imports
  - Tree-shake unused libraries
  - Prefer native APIs over libraries
  
  ## 3. Avoid Layout Shift
  
  Reserve space for dynamic content and use the \`layout="fixed"\` or \`layout="intrinsic"\` for images.
  
  ## Final Score
  
  After these tweaks, my scores jumped from **65 → 96** 🚀
  `,
    createdAt: "2025-04-01T08:30:00Z",
    tags: ["Next.js", "Performance", "SEO"],
  },
  {
    id: "blog2",
    title: "Creating a Reusable Modal Component in React",
    content: `# Creating a Reusable Modal Component in React
  
  Modals are everywhere — let’s build one from scratch that’s fully reusable.
  
  ## Step 1: Basic Structure
  
  \`\`\`tsx
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="overlay">
        <div className="modal">
          {children}
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  };
  \`\`\`
  
  ## Step 2: Usage
  
  \`\`\`tsx
  <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
    <p>Hello from the modal!</p>
  </Modal>
  \`\`\`
  
  ## Step 3: Add Animation
  
  Use \`framer-motion\` or CSS transitions for a smooth UX.
  
  > Bonus: Trap focus for accessibility!
  `,
    createdAt: "2025-04-02T12:15:00Z",
    tags: ["React", "UI", "Accessibility"],
  },
  {
    id: "blog3",
    title: "Writing Your First Unit Test in TypeScript",
    content: `# Writing Your First Unit Test in TypeScript
  
  Let’s test a simple function using Jest and TypeScript.
  
  ## Setup
  
  Install Jest with TypeScript support:
  
  \`\`\`bash
  npm install --save-dev jest ts-jest @types/jest
  npx ts-jest config:init
  \`\`\`
  
  ## Sample Function
  
  \`\`\`ts
  // utils/math.ts
  export const sum = (a: number, b: number): number => a + b;
  \`\`\`
  
  ## Test File
  
  \`\`\`ts
  // utils/math.test.ts
  import { sum } from './math';
  
  test('adds two numbers', () => {
    expect(sum(2, 3)).toBe(5);
  });
  \`\`\`
  
  ## Run the Test
  
  \`\`\`bash
  npm test
  \`\`\`
  
  Now you’re officially testing TypeScript 🎉
  `,
    createdAt: "2025-04-03T17:50:00Z",
    tags: ["TypeScript", "Testing", "Jest"],
  },
];
