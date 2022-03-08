import { get_posts } from '$lib/types/post';

const limit = 10;

export async function get({ url }) {
  const page = parseInt(url.searchParams.get("page") || "") || 1;
  const offset = (page - 1) * limit;

  const body = await get_posts({ limit, offset });

  console.log('blog.ts - ', body.pagination);

  return { body };
};