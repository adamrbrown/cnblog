import { useState } from 'react';

function useTags() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
}

export { useTags };
