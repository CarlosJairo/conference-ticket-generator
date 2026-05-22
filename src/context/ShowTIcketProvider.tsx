import { useState } from "react";
import { ShowTicketContext } from "./ShowTicket";

interface ShowTIcketProviderProps {
  children: React.ReactNode;
}

const ShowTIcketProvider = ({ children }: ShowTIcketProviderProps) => {
  const [showTicket, setShowTicket] = useState<boolean>(false);

  const value = {
    showTicket,
    setShowTicket,
  };
  return (
    <ShowTicketContext.Provider value={value}>
      {children}
    </ShowTicketContext.Provider>
  );
};

export default ShowTIcketProvider;
