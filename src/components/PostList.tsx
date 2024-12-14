import { Post as PostType } from '../api/types';
import { Post } from './Post';

interface PostListProps {
  posts: PostType[];
  emptyCopy: string;
  type: 'add' | 'remove';
  onActionClick: (id: string) => void;
  onTagClick: (tag: string) => void;
}

function PostList({ posts, type, onActionClick, onTagClick }: PostListProps) {
  return (
    <ul>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          type={type}
          onActionClick={onActionClick}
          onTagClick={onTagClick}
        />
      ))}
    </ul>
  );
}

export { PostList };
