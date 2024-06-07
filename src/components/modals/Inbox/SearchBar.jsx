import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box position="relative" sx={{ padding: '24px 32px 0 32px' }}>
      <TextField
        sx={{
          width: "666px",
          border: "1px solid #828282",
          borderRadius: "5px",
          backgroundColor: "white",
          "& .MuiInputBase-input": {
            padding: "0 0 0 52px",
            height: "32px",
          },
          "& .MuiInputBase-root": {
            color: "#333333",
          },
        }}
      />
      <SearchIcon
        fontSize="12px"
        sx={{
          position: "absolute",
          color: "#333333",
          top: "34px",
          right: "58.82px",
        }}
      />
    </Box>
  );
}
