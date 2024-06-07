import { Box } from "@mui/material";
import propTypes from 'prop-types'
import StrokeLogo from "../../assets/Stroke.svg";

export default function StrokeIcon(props) {
  return (
    <Box
      sx={{
        backgroundColor: `${props.backgroundColor ? "#4F4F4F" : "#2F80ED"}`,
        borderRadius: "50%",
        width: "68px",
        height: "68px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={StrokeLogo}
        style={{
          display: `${props.backgroundColor ? "none" : "block"}`,
          userSelect: "none",
        }}
      />
    </Box>
  );
}

StrokeIcon.propTypes = {
  backgroundColor: propTypes.bool,
};
