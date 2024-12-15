import { useEffect, useState } from 'react';

interface FavoritePostsOptions {
  key: string;
}

function useFavoritePosts({ key }: FavoritePostsOptions) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const data = localStorage.getItem(key);
    return data === null ? [] : JSON.parse(data);
  });

  const addFavorite = (id: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) return prev;
      return [...prev, id];
    });
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((favorite) => favorite !== id));
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(favorites));
  }, [favorites, key]);

  return {
    favorites,
    addFavorite,
    removeFavorite,
  };
}

export { useFavoritePosts };
