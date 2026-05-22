import DefaultAvatar from "../../../assets/DefaultAvatar";
import { useUserStore } from "../../../store/user";
import { Image } from "../../atoms/Image/Image";

const Ticket = () => {
  const { fullName, githubUser, url } = useUserStore();

  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="m-auto h-40 w-85.5 flex flex-col justify-between p-4 bg-[url(/assets/images/pattern-ticket.svg)] bg-contain bg-no-repeat relative ">
      <div>
        <Image src="/assets/images/logo-full.svg" alt="Logo" />
        <p>{formattedDate} / Austin, TX</p>
      </div>

      <div className="flex gap-3">
        {url !== "" ? (
          <img src={url} alt="Image avatar" className="size-11.25 rounded-lg" />
        ) : (
          <DefaultAvatar className="w-6 h-6 text-white" />
        )}

        <div>
          <p className="text-xl font-medium">{fullName}</p>

          <div className="flex gap-1">
            <img src="/assets/images/icon-github.svg" alt="Icon github" />
            <p>{githubUser}</p>
          </div>
        </div>
      </div>

      <p className="text-2xl absolute top-1/2 right-0 transform -translate-y-1/2 rotate-90 text-neutral-500">
        #01609
      </p>
    </section>
  );
};

export default Ticket;
