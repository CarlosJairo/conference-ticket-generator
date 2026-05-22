import { useContext } from "react";
import { ShowTicketContext } from "../../context/ShowTicket";

const useShowTicket = () => {
  const context = useContext(ShowTicketContext);

  if (!context) {
    throw new Error(
      "useShowTicket debe ser usado dentro de un useShowTicketProvider",
    );
  }

  return context;
};

export default useShowTicket;
