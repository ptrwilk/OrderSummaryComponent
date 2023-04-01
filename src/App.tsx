import { ThemeProvider, createTheme } from "@mui/material";
import "./styles.css";
import OrderSummaryComponent from "./Component/OrderSummaryComponent";

const theme = createTheme({
  typography: {
    body1: {
      fontSize: 16,
    },
    h1: {
      fontSize: 28,
    },
    h2: {
      fontSize: 16,
    },
    fontFamily: "Red Hat Display",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <OrderSummaryComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
