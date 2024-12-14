import { Post as PostType } from '../api/types';
import { Post } from './Post';

interface PostListProps {
  posts: PostType[];
  favorites?: string[];
  emptyCopy: string;
  type: 'add' | 'remove';
  onActionClick: (id: string) => void;
  onTagClick: (tag: string) => void;
}

function PostList({
  posts,
  type,
  emptyCopy,
  favorites,
  onActionClick,
  onTagClick,
}: PostListProps) {
  return (
    <ul>
      {posts.length === 0
        ? emptyCopy
        : posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              type={type}
              showAction={!favorites?.includes(post.id)}
              onActionClick={onActionClick}
              onTagClick={onTagClick}
            />
          ))}
    </ul>
  );
}

export { PostList };
