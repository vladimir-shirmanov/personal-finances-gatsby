import * as React from "react";
import { Link } from "gatsby";

const StyledLink = ({
  to,
  children,
}: React.PropsWithChildren<{ to: string }>) => {
  return (
    <Link to={to} className="text-blue-500 hover:text-blue-800 hover:underline">
      {children}
    </Link>
  );
};

export default StyledLink;
