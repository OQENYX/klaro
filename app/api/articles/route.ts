import { getAllArticles } from "@/lib/articles";
import { NextResponse } from "next/server";

export async function GET() {
  const articles = getAllArticles().map(({ content, sources, ...rest }) => rest);
  return NextResponse.json(articles);
}
