"use server";

import * as cheerio from "cheerio";

export interface OgMetaData {
  title: string;
  description: string;
  image: string;
  siteName: string;
}

export async function fetchOGMetaData(url: string): Promise<OgMetaData> {
  try {
    const response = await fetch(url);
    const html = await response.text();

    const $ = cheerio.load(html);

    const getMetaContent = (property: string) => {
      return (
        $(`meta[property="${property}"]`).attr("content") ||
        $(`meta[name="${property}"]`).attr("content") ||
        ""
      );
    };

    return {
      title: getMetaContent("og:title") || $("title").text(),
      description:
        getMetaContent("og:description") ||
        getMetaContent("description") ||
        $('meta[name="description"]').attr("content") ||
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
