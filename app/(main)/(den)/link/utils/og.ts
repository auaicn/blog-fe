interface OGMetaData {
  title: string;
  description: string;
  image: string;
  siteName: string;
}

export async function fetchOGMetaData(url: string): Promise<OGMetaData> {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");

    const getMetaContent = (property: string) => {
      const element =
        doc.querySelector(`meta[property="${property}"]`) ||
        doc.querySelector(`meta[name="${property}"]`);
      return element?.getAttribute("content") || "";
    };

    return {
      title: getMetaContent("og:title") || doc.title,
      description:
        getMetaContent("og:description") ||
        getMetaContent("description") ||
        doc
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") ||
        "",
      image: getMetaContent("og:image"),
      siteName: getMetaContent("og:site_name"),
    };
  } catch (error) {
    console.error("Error fetching OG metadata:", error);
    return {
      title: "",
      description: "",
      image: "",
      siteName: "",
    };
  }
}
