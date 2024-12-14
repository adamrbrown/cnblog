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
      <button type="button" onClick={handleClick}>
        {tag}
      </button>
    </li>
  );
}

export { Tag };
