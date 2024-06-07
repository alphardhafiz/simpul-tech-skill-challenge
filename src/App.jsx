import { Box, TextField } from "@mui/material";
import SearchInput from "./components/SearchInput";
import IconGroup from "./components/IconGroup";

function App() {
  return (
    <>
      <Box
        display="flex"
        sx={{ backgroundColor: "#333333", minHeight: "200vh", width: '100%' }}
      >
        <Box flex={1} sx={{ borderRight: "1px solid #F2F2F2" }}></Box>
        <Box flex={6}>
          <SearchInput />
        </Box>
      </Box>
      <IconGroup/>
    </>
  );
}

export default App;
