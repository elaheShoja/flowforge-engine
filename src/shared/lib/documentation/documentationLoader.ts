const documentationFiles = import.meta.glob(
  "../../../../docs/**/*.md",
  {
    query: "?raw",
    import: "default",
    eager: true,
  }
);

function normalizeDocumentationPath(
  contentPath: string
): string {
  let normalizedPath = contentPath
    .replace(/\\/g, "/")
    .replace(/^\/+/, "");

  // Remove leading "docs/" if it exists.
  // This allows both:
  // /docs/components/input
  // and
  // components/input
  if (normalizedPath.toLowerCase().startsWith("docs/")) {
    normalizedPath = normalizedPath.slice(5);
  }

  // Add .md when the documentation path
  // does not explicitly contain the extension.
  if (!normalizedPath.toLowerCase().endsWith(".md")) {
    normalizedPath += ".md";
  }

  return normalizedPath.toLowerCase();
}

export function getDocumentationContent(
  contentPath: string
): string | null {
  const normalizedPath =
    normalizeDocumentationPath(contentPath);

  const fileKey = Object.keys(documentationFiles).find(
    (key) => {
      const normalizedKey = key
        .replace(/\\/g, "/")
        .toLowerCase();

      return normalizedKey.endsWith(
        `docs/${normalizedPath}`
      );
    }
  );

  if (!fileKey) {
    return null;
  }

  return documentationFiles[fileKey] as string;
}