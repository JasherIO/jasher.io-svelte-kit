import path from "path";
import fs from "fs/promises";
import parse_frontmatter from "front-matter";
import invariant from "tiny-invariant";

type Raw_Frontmatter = {
  title: string;
  description: string;
  keywords: Array<String>;
  date: string;
  category: string;
  image?: string;
  status?: string;
};
export type Frontmatter = {
  title: string;
  description: string;
  keywords: Array<String>;
  date: ParsedDate;
  category: string;
  image?: string;
  status?: string;
};

export type Post = {
  slug: string;
  frontmatter: Frontmatter;
};
export type Posts = Array<Post>;
export type Pagination = {
  page: number;
  total_pages: number;
}

type Body = {
  pagination: Pagination;
  posts: Posts;
};

type ParsedDate = {
  raw: string;
  text: string;
  ISO: string;
}

const posts_path ='./src/routes/blog';

export function to_date(date: string): ParsedDate {
  const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };

  const _date_object = new Date(date);
  return {
    raw: date,
    text: _date_object.toLocaleDateString("en-US", options),
    ISO: _date_object.toISOString()
  };
};

export async function get_posts({ limit, offset }: { limit: number, offset: number }): Promise<Body> {
  const directory = await fs.readdir(posts_path);
  const parsed = await Promise.all(directory.map(parse));
  const posts = parsed
                  .filter(post => post.frontmatter?.status !== "draft")
                  .sort(date_desc)
                  .slice(offset, offset + limit);
  const page = offset > 0 ? Math.floor(offset / limit) + 1 : 1;
  const total_pages = Math.ceil(parsed.length / limit);
  
  return {
    pagination: {
      page,
      total_pages
    },
    posts
  };
};

async function parse(file_name: string) : Promise<Post> {
  const file = await fs.readFile(path.join(posts_path, file_name));
  const slug = file_name.replace(".md", "");
  const { attributes: raw_frontmatter } = parse_frontmatter(file.toString());
  invariant(isValidFrontmatter(raw_frontmatter), `${file_name} has bad frontmatter!`);
  
  const date = to_date(raw_frontmatter.date);
  const frontmatter = { ...raw_frontmatter, date };
  
  return {
    slug,
    frontmatter,
  };
};

function date_desc(a: Post, b: Post) {
  const a_date = new Date(a.frontmatter.date.raw);
  const b_date = new Date(b.frontmatter.date.raw);

  if (a_date < b_date)
    return 1;
  
  if (b_date < a_date)
    return -1

  return 0;
};

function isValidFrontmatter(attributes: any): attributes is Raw_Frontmatter {
  return attributes?.title && attributes?.description && attributes?.keywords && attributes?.date && attributes?.category;
}
