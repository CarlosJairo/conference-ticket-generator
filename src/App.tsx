import MainLayOut from "./components/layouts/mainLayOut/MainLayOut";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import FormPage from "./pages/formPage/formPage";
import useShowTicket from "./hooks/useShowTicket/useShowTicket";

function App() {
  const { showTicket } = useShowTicket();

  return (
    <MainLayOut>{showTicket ? <ConfirmationPage /> : <FormPage />}</MainLayOut>
  );
}

export default App;
