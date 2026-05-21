const Ticket = () => {
  return (
    <section className="h-40 w-85.5 flex flex-col justify-between p-4 bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat relative">
      <div className="">
        <img src="/assets/images/logo-full.svg" alt="Logo" />
        <p>Jan 31, 2025 / Austin, TX</p>
      </div>

      <div className="flex gap-3">
        <img
          src="/assets/images/image-avatar.jpg"
          alt="Image avatar"
          className="size-11.25 rounded-lg"
        />

        <div>
          <p className="text-xl font-medium">Jonatan Kristof</p>
          <p className="flex">
            <img src="/assets/images/icon-github.svg" alt="Icon github" />
            <p>@Jonatankristof</p>
          </p>
        </div>
      </div>

      <p className="text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-neutral-500">
        #01609
      </p>
    </section>
  );
};

export default Ticket;
