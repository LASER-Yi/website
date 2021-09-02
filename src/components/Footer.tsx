import React, { FunctionComponent } from "react";

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-row items-center text-white">
      <Link link="">GitHub</Link>
      <Link link="">Steam</Link>
      <Link link="">Instagram</Link>
    </div>
  );
};

interface LinkProps {
  children: string;
  link: string;
}

const Link: FunctionComponent<LinkProps> = ({ children, link }) => {
  return <span className="px-2">{children}</span>;
};

export default Footer;
