const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, "");

export const withBase = (path: string): string => {
  const [pathname, ...hashParts] = path.split("#");
  const normalizedPath = pathname.replace(/^\/+/, "");
  const url = `${baseUrl}/${normalizedPath}`.replace(
    /\/$/,
    normalizedPath ? "" : "/",
  );
  const hash = hashParts.length > 0 ? `#${hashParts.join("#")}` : "";

  return `${url}${hash}`;
};
