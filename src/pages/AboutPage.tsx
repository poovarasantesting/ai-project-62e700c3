import React from "react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About This Project</h1>
      <div className="prose lg:prose-lg">
        <p>
          This simple React application demonstrates several key React concepts:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4">
          <li>Component-based architecture</li>
          <li>React Router for navigation</li>
          <li>React hooks for state management</li>
          <li>Responsive design with Tailwind CSS</li>
        </ul>
        <p>
          The application is built with modern React practices using functional components
          and hooks rather than class components. It also showcases a simple but clean UI
          using Tailwind CSS for styling.
        </p>
      </div>
    </div>
  );
}