import { Post as PostType } from '../api/types';
import { Tag } from './Tag';

interface PostProps {
  post: PostType;
  actionCopy: string;
  onActionClick: (id: string) => void;
  onTagClick: (tag: string) => void;
}

function Post({
  post: { id, title, body, tags, creationTime },
  actionCopy,
  onActionClick,
  onTagClick,
}: PostProps) {
  const handleClick = () => {
    onActionClick(id);
  };

  const date = new Date(creationTime * 1000);

  return (
    <li>
      <hr />
      <button type="button" onClick={handleClick}>
        {actionCopy}
      </button>
      <h3>{title}</h3>
      <time>{date.toLocaleString()}</time>
      <div dangerouslySetInnerHTML={{ __html: body }} />
      <ul>
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} onClick={onTagClick} />
        ))}
      </ul>
    </li>
  );
}

export { Post };
