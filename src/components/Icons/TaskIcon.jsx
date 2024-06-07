import propTypes from 'prop-types'
import { Box } from "@mui/material";
import TaskNotOpenLogo from "../../assets/taskNotOpen.svg";
import TaskOpenLogo from "../../assets/taskOpen.svg";
import { useState } from "react";

export default function TaskIcon(props) {
  
  return (
    <Box
      sx={{
        backgroundColor: `${props.isClicked ? "#F8B76B" : "#F2F2F2"}`,
        borderRadius: "50%",
        width: props.isClicked ? "68px" : "60px",
        height: props.isClicked ? "68px" : "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={props.isClicked ? TaskOpenLogo : TaskNotOpenLogo}
        style={{ userSelect: "none" }}
      />
    </Box>
  );
}

TaskIcon.propTypes = {
  isClicked: propTypes.bool
}