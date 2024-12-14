import { DrawingPinIcon } from '@radix-ui/react-icons';
import { Button } from '@radix-ui/themes';

interface TagProps {
  tag: string;
  onClick: (tag: string) => void;
}

function Tag({ tag, onClick }: TagProps) {
  const handleClick = () => {
    onClick(tag);
  };

  return (
    <li>
      <Button
        variant="soft"
        color="plum"
        type="button"
        size="1"
        onClick={handleClick}
      >
        <DrawingPinIcon />
        {tag}
      </Button>
    </li>
  );
}

export { Tag };
