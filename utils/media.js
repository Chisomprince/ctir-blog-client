import api from "./api";

export function getStrapiMedia(media) {
  const imageUrl = media.url.startsWith("/") ? api.get(media.url) : media.url;
  return imageUrl;
}
