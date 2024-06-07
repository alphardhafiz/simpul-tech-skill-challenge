import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <Box position="relative">
      <TextField
        sx={{
          width: "100%",
          color: "white",
          backgroundColor: "#4F4F4F",
          "& .MuiInputBase-input": {
            padding: "0 0 0 52px",
            height: "58px",
          },
          "& .MuiInputBase-root": {
            color: "white",
          },
        }}
      />
      <SearchIcon
        sx={{
          position: "absolute",
          color: "white",
          top: 18,
          left: 25,
          zIndex: 2,
        }}
      />
    </Box>
  );
}
