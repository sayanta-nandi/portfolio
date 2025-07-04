import { ReactNode } from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`px-2 w-full md:px-8 lg:px-24 ${className}`}>
      {children}
    </div>
  );
};
export default MaxWidthWrapper;
