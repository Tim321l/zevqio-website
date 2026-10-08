import { site } from "../data/site";
import { withBase } from "./paths";

export const canonicalUrl = (path: string): string =>
  new URL(withBase(path), site.url).toString();

export const pageMetadata = (
  title: string,
  description: string,
  path: string,
) => ({
  title: `${title} | ${site.name}`,
  description,
  canonical: canonicalUrl(path),
});
