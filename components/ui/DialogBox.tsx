const DialogBox = ({
  title,
  desc,
  className,
}: {
  title?: string;
  desc?: string;
  className?: string;
}) => {
  return (
    <div
      className={`bg-white/10 border z-10 p-4 border-white/20 rounded-lg backdrop-blur ${className}`}
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
export default DialogBox;
