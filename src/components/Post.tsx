import { Button, Card, Heading } from '@radix-ui/themes';
import { Post as PostType } from '../api/types';
import { Tag } from './Tag';
import {
  DividerHorizontalIcon,
  MinusIcon,
  PlusIcon,
} from '@radix-ui/react-icons';
import styles from './Post.module.css';

interface PostProps {
  post: PostType;
  type: 'add' | 'remove';
  onActionClick: (id: string) => void;
  onTagClick: (tag: string) => void;
}

function Post({
  post: { id, title, body, tags, creationTime },
  type,
  onActionClick,
  onTagClick,
}: PostProps) {
  const handleClick = () => {
    onActionClick(id);
  };

  const date = new Date(creationTime * 1000);

  return (
    <li>
      <article>
        <Card className={styles.card}>
          <Button
            type="button"
            onClick={handleClick}
            color={type === 'add' ? 'blue' : 'red'}
          >
            {type === 'add' ? <PlusIcon /> : <MinusIcon />}
            {type === 'add' ? 'Add' : 'Remove'}
          </Button>
          <Heading as="h3">{title}</Heading>
          <time>{date.toLocaleString()}</time>
          <div dangerouslySetInnerHTML={{ __html: body }} />
          <DividerHorizontalIcon />
          <ul className={styles.tagList}>
            {tags.map((tag) => (
              <Tag key={tag} tag={tag} onClick={onTagClick} />
            ))}
          </ul>
        </Card>
      </article>
    </li>
  );
}

export { Post };
