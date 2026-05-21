interface Props {
  children: React.ReactNode;
}

const MainLayOut = ({ children }: Props) => {
  return (
    <main
      className=" py-8 px-4 bg-[url(/assets/images/background-mobile.png)] bg-cover bg-bottom 
    md:bg-[url(/assets/images/background-tablet.png)] 
    lg:bg-[url(/assets/images/background-desktop.png)] relative"
    >
      <img
        src="/assets/images/pattern-squiggly-line-top.svg"
        alt="pattern squizzly line top"
        className="absolute right-0 top-4 h-13 md:h-25 lg:h-50"
      />
      <header className="flex justify-center mb-10">
        <img src="/assets/images/logo-full.svg" alt="logo" className="" />
      </header>
      {children}

      <img
        src="/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg"
        alt="pattern squiggly line bottom"
        className="absolute bottom-0 left-0 h-50 "
      />
    </main>
  );
};

export default MainLayOut;
