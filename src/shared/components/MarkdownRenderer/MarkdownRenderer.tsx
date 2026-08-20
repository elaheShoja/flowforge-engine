import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { Link } from "react-router-dom";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import type { MarkdownRendererProps } from "./MarkdownRenderer.types";

import "./MarkdownRenderer.css";

export default function MarkdownRenderer({
  content,
  className = "",
}: MarkdownRendererProps) {
  const baseUrl = import.meta.env.BASE_URL.replace(
    /\/$/,
    ""
  );

  const isInternalRoute = (href?: string) => {
    return (
      href?.startsWith("/docs/") ||
      href?.startsWith("/playground/")
    );
  };

  const getInternalRoute = (href: string) => {
    return `${baseUrl}${href}`;
  };

  return (
    <div className={`ff-markdown ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a({
            href,
            children,
            ...props
          }) {
            /*
             * Internal FlowForge routes
             *
             * Examples:
             * /docs/components/input
             * /docs/components/select
             * /playground/input
             * /playground/select
             */
            if (isInternalRoute(href)) {
              return (
                <Link
                  to={getInternalRoute(href!)}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...props}
                >
                  {children}
                </Link>
              );
            }

            /*
             * External links
             */
            return (
              <a
                href={href}
                {...props}
              >
                {children}
              </a>
            );
          },

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

            /*
             * Fenced code block with a language.
             */
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

            /*
             * Code block without a language.
             */
            if (code.includes("\n")) {
              return (
                <pre className="ff-markdown__code-block">
                  <code {...props}>
                    {code}
                  </code>
                </pre>
              );
            }

            /*
             * Inline code.
             */
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