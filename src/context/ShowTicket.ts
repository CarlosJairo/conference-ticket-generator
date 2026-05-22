import { createContext, type Dispatch, type SetStateAction } from "react";

interface ShowTicket {
  showTicket: boolean;
  setShowTicket: Dispatch<SetStateAction<boolean>>;
}

export const ShowTicketContext = createContext<ShowTicket>({
  showTicket: false,
  setShowTicket: () => {},
});
