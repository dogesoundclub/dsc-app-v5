export default function HeaderItem({
  title,
  onClick,
  className,
}: {
  title: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={`relative top-[60px] bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-white-500 hover:border-transparent ${className ?? ""}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
}
