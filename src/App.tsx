import MainLayOut from "./components/layouts/mainLayOut/MainLayOut";
import ConfirmationPage from "./pages/ConfirmationPage/ConfirmationPage";
import FormPage from "./pages/formPage/formPage";

function App() {
  return <MainLayOut>{true ? <ConfirmationPage /> : <FormPage />}</MainLayOut>;
}

export default App;
