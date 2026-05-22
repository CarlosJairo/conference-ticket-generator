import React from "react";
import { Image } from "../../atoms/Image/Image";

interface Props {
  children: React.ReactNode;
}

const MainLayOut = ({ children }: Props) => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <main
      className="flex justify-center py-8 px-4 bg-cover bg-bottom relative overflow-hidden min-h-screen"
      style={{
        backgroundImage: `url(${baseUrl}assets/images/background-desktop.png)`,
      }}
    >
      <div className="max-w-3xl w-full z-10">
        <Image
          src="assets/images/pattern-squiggly-line-top.svg"
          alt="pattern squizzly line top"
          className="absolute right-0 top-4 h-13 md:h-25 lg:h-50"
        />
        <Image
          src="assets/images/pattern-circle.svg"
          alt="pattern circle"
          className="absolute -top-4 -left-4"
        />
        <Image
          src="assets/images/pattern-lines.svg"
          alt="pattern lines"
          className="absolute top-0 min-w-5xl inset-0 pointer-events-none"
        />

        <header className="flex justify-center mb-10">
          <Image src="assets/images/logo-full.svg" alt="logo" className="" />
        </header>

        {children}

        <Image
          src="assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
          alt="pattern squiggly line bottom"
          className="absolute bottom-0 left-0 h-50"
        />
      </div>
    </main>
  );
};

export default MainLayOut;
