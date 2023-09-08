import * as React from "react";
import StyledLink from "./styledLink";

const Layout = ({
  pageTitle,
  children,
}: React.PropsWithChildren<{
  pageTitle: string;
}>) => {
  return (
    <div className="m-auto max-w-lg font-sans">
      <nav>
        <ul className="flex">
          <li className="pr-8">
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="text-3xl my-8 font-bold text-purple-500">{pageTitle}</h1>
        {children}
      </main>
      <footer>
        <a href="https://www.123freevectors.com/">Free Vector</a>
      </footer>
    </div>
  );
};

export default Layout;
