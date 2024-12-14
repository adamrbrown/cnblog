import { Button, Card } from '@radix-ui/themes';
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
  showAction?: boolean;
  onActionClick: (id: string) => void;
  onTagClick: (tag: string) => void;
}

function Post({
  post: { id, title, body, tags, creationTime },
  type,
  showAction = true,
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
          <div className={styles.postHeading}>
            <div>
              <h3 className={styles.postTitle}>{title}</h3>
              <div>
                <time className={styles.time}>{date.toLocaleString()}</time>
              </div>
            </div>
            {showAction && (
              <Button
                type="button"
                onClick={handleClick}
                color={type === 'add' ? 'blue' : 'crimson'}
              >
                {type === 'add' ? <PlusIcon /> : <MinusIcon />}
                {type === 'add' ? 'Add' : 'Remove'}
              </Button>
            )}
          </div>

          <DividerHorizontalIcon />
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
