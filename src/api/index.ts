import { postsResponseSchema } from './types';

async function getPosts() {
  const url = 'https://cnblog.proxy.beeceptor.com/posts';
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw Object.assign(
      new Error(`An error occurred attempting to retrieve blog posts.`),
      { response }
    );
  }

  const json: unknown = await response.json();
  const parsed = postsResponseSchema.parse(json);

  return parsed.data;
}

export { getPosts };
