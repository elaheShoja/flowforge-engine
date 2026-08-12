import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { MarkdownRendererProps } from "./MarkdownRenderer.types";

import "./MarkdownRenderer.css";

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  return (
    <div className={`ff-markdown ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({
            className,
            children,
            ...props
          }) {
            const match = /language-(\w+)/.exec(
              className || ""
            );

            const code = String(children).replace(
              /\n$/,
              ""
            );

            if (match) {
              return (
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="ff-markdown__code-block"
                >
                  {code}
                </SyntaxHighlighter>
              );
            }

            return (
              <code
                className="ff-markdown__inline-code"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}