import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getPosts } from './api';
import { useFavoritePosts } from '../hooks/useFavoritePosts';
import { Post as PostType } from '../api/types';
import { Post } from './Post';
import { Tag } from './Tag';
import './App.css';

// Temp Vars
const posts: PostType[] = [
  {
    id: '4',
    title: 'Post Title 4',
    body: 'This is a post body',
    tags: ['cool'],
    creationTime: 1734147789,
  },
  {
    id: '3',
    title: 'Post Title 3',
    body: 'This is a post body',
    tags: ['cool', 'fun', 'potato', 'raccoon'],
    creationTime: 1734147809,
  },
  {
    id: '2',
    title: 'Post Title 2',
    body: 'This is a post body',
    tags: ['awesome', 'woohoo', 'potato'],
    creationTime: 1734147790,
  },
  {
    id: '1',
    title: 'Post Title 1',
    body: 'This is a post body',
    tags: ['awesome', 'cool', 'woohoo', 'so', 'many', 'tags'],
    creationTime: 1734147064,
  },
];
const fetching = false;

function App() {
  const [activeTags, setActiveTags] = useState<string[]>([]);

  // const { data: posts } = useQuery({
  //   queryKey: ['posts'],
  //   queryFn: getPosts,
  // });

  const { favorites, addFavorite, removeFavorite } = useFavoritePosts({
    key: 'favorites',
  });

  console.log(favorites);

  const handleAddFavorite = (id: string) => {
    addFavorite(id);
  };

  const handleRemoveFavorite = (id: string) => {
    removeFavorite(id);
  };

  const handleRemoveTag = (tag: string) => {
    setActiveTags((prev) => prev.filter((prevTag) => prevTag !== tag));
  };

  const handleTagClick = (tag: string) => {
    setActiveTags((prev) => {
      if (prev.includes(tag)) return prev;
      return [...prev, tag];
    });
  };

  return (
    <main>
      <h1>Blog Posts</h1>
      {fetching ? (
        <span>Loading ...</span>
      ) : (
        <>
          <div>
            <h2>All Posts</h2>
            <div>
              <span>Active Tags:</span>
              <ul>
                {activeTags.map((tag) => (
                  <Tag key={tag} tag={tag} onClick={handleRemoveTag} />
                ))}
              </ul>
            </div>
            <ul>
              {posts
                .filter(
                  (post) =>
                    activeTags.length === 0 ||
                    activeTags.every((tag) => post.tags.includes(tag))
                )
                .map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                    actionCopy="Add"
                    onActionClick={handleAddFavorite}
                    onTagClick={handleTagClick}
                  />
                ))}
            </ul>
          </div>
          <div>
            <h2>Favorites</h2>
            <ul>
              {posts
                .filter((post) => favorites.includes(post.id))
                .map((post) => (
                  <Post
                    key={post.id}
                    post={post}
                    actionCopy="Remove"
                    onActionClick={handleRemoveFavorite}
                    onTagClick={handleTagClick}
                  />
                ))}
            </ul>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
