import "./App.css";
import Index from "./Pages/Index";
import { ThemeProvider, Box } from "@mui/material";
import { defaultTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <Index />
      </Box>
    </ThemeProvider>
  );
}

export default App;
