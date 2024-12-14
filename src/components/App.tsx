import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getPosts } from './api';
import { useFavoritePosts } from '../hooks/useFavoritePosts';
import { Tag } from './Tag';
import { Button, Container, Heading, Spinner, Text } from '@radix-ui/themes';
import { posts } from '../lib/data';
import { useActiveList } from '../hooks/useActiveList';
import { PostList } from './PostList';
import styles from './App.module.css';
import './App.css';

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

  const { activeList, updateActiveList } = useActiveList();

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

  const handleSetAllActiveList = () => {
    updateActiveList('all');
  };

  const handleSetFavoriteActiveList = () => {
    updateActiveList('favorite');
  };

  const allPosts = posts.filter(
    (post) =>
      activeTags.length === 0 ||
      activeTags.every((tag) => post.tags.includes(tag))
  );

  const favoritePosts = posts.filter((post) => favorites.includes(post.id));

  return (
    <Container mx="3">
      <main>
        <Heading as="h1">Blog Posts</Heading>

        {fetching ? (
          <Spinner />
        ) : (
          <div className={styles.grid}>
            <div className={styles.mobileToggleButtons}>
              <Button onClick={handleSetAllActiveList}>All Posts</Button>
              <Button onClick={handleSetFavoriteActiveList}>Favorites</Button>
            </div>
            {(activeList === 'all' || activeList === 'both') && (
              <div className={styles.allPosts}>
                <Heading as="h2">All Posts</Heading>
                <div className={styles.activeTags}>
                  <Text as="span">Active Tags:</Text>
                  <ul className={styles.activeTagsList}>
                    {activeTags.map((tag) => (
                      <Tag key={tag} tag={tag} onClick={handleRemoveTag} />
                    ))}
                  </ul>
                </div>
                <PostList
                  posts={allPosts}
                  emptyCopy="No Posts"
                  type="add"
                  onActionClick={handleAddFavorite}
                  onTagClick={handleTagClick}
                />
              </div>
            )}
            {(activeList === 'favorite' || activeList === 'both') && (
              <div className={styles.favoritePosts}>
                <Heading as="h2">Favorites</Heading>
                <PostList
                  posts={favoritePosts}
                  emptyCopy="No Favorites"
                  type="remove"
                  onActionClick={handleRemoveFavorite}
                  onTagClick={handleTagClick}
                />
              </div>
            )}
          </div>
        )}
      </main>
    </Container>
  );
}

export default App;
