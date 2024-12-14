import { z } from 'zod';

const postSchema = z.object({
  id: z.string(),
  title: z.string(),
  tags: z.string().array(),
  body: z.string(),
  creationTime: z.number(),
});

type Post = z.infer<typeof postSchema>;

const postsResponseSchema = z.object({
  data: postSchema.array(),
});

type PostsResponse = z.infer<typeof postsResponseSchema>;

export { postSchema, type Post, postsResponseSchema, type PostsResponse };
