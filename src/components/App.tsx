import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query';
// import { getPosts } from './api';
import { useFavoritePosts } from '../hooks/useFavoritePosts';
import { Tag } from './Tag';
import { Button, Container, Spinner } from '@radix-ui/themes';
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

  const { activeList, updateActiveList } = useActiveList();

  const { favorites, addFavorite, removeFavorite } = useFavoritePosts({
    key: 'favorites',
  });

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
        <h1>Blog Posts</h1>

        {fetching ? (
          <Spinner />
        ) : (
          <div>
            <div className={styles.mobileToggleButtons}>
              <Button
                variant={activeList === 'all' ? 'solid' : 'outline'}
                onClick={handleSetAllActiveList}
              >
                All Posts
              </Button>
              <Button
                variant={activeList === 'favorite' ? 'solid' : 'outline'}
                onClick={handleSetFavoriteActiveList}
              >
                Favorites
              </Button>
            </div>
            <div className={styles.grid}>
              {(activeList === 'all' || activeList === 'both') && (
                <div className={styles.allPosts}>
                  <h2>All Posts</h2>
                  <div className={styles.activeTags}>
                    <span>Active Tags:</span>
                    {activeTags.length === 0 ? (
                      <span>
                        <em>Select tag to filter &hellip;</em>
                      </span>
                    ) : (
                      <ul className={styles.activeTagsList}>
                        {activeTags.map((tag) => (
                          <Tag key={tag} tag={tag} onClick={handleRemoveTag} />
                        ))}
                      </ul>
                    )}
                  </div>
                  <PostList
                    posts={allPosts}
                    favorites={favorites}
                    emptyCopy="No Posts"
                    type="add"
                    onActionClick={handleAddFavorite}
                    onTagClick={handleTagClick}
                  />
                </div>
              )}
              {(activeList === 'favorite' || activeList === 'both') && (
                <div className={styles.favoritePosts}>
                  <h2>Favorites</h2>
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
          </div>
        )}
      </main>
    </Container>
  );
}

export default App;
