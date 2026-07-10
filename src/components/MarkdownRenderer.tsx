import React from "react";

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  const lines = content.split("\n");

  return (
    <>
      {lines.map((line, index) => {
        // Título H2
        if (line.startsWith("## ")) {
          return (
            <h2
              key={index}
              className="text-2xl font-bold mt-8 mb-4 text-primary dark:text-[#CBA135]"
            >
              {line.replace("## ", "")}
            </h2>
          );
        }

        // Título H3
        if (line.startsWith("### ")) {
          return (
            <h3
              key={index}
              className="text-xl font-semibold mt-6 mb-3 text-primary dark:text-[#CBA135]"
            >
              {line.replace("### ", "")}
            </h3>
          );
        }

        // Separador ---
        if (line.trim() === "---") {
          return (
            <hr
              key={index}
              className="my-8 border-0 h-px bg-gradient-to-r from-transparent via-[#CBA135] to-transparent opacity-40"
            />
          );
        }

        // Lista
        if (line.startsWith("- ")) {
          return (
            <li
              key={index}
              className="ml-6 list-disc text-gray-700 dark:text-gray-300 my-1"
            >
              {line.replace("- ", "")}
            </li>
          );
        }

        // Línea vacía
        if (line.trim() === "") {
          return <div key={index} className="h-3" />;
        }

        // Negritas dentro del texto
        const parts = line.split(/(\*\*.*?\*\*)/g);

        return (
          <p
            key={index}
            className="my-2 leading-7 text-gray-700 dark:text-gray-300"
          >
            {parts.map((part, i) => {
              if (part.startsWith("**") && part.endsWith("**")) {
                return (
                  <strong
                    key={i}
                    className="font-semibold text-primary dark:text-[#CBA135]"
                  >
                    {part.replace(/\*\*/g, "")}
                  </strong>
                );
              }

              return <React.Fragment key={i}>{part}</React.Fragment>;
            })}
          </p>
        );
      })}
    </>
  );
}