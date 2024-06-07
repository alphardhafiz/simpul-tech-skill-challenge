import propTypes from 'prop-types'
import { Box } from "@mui/material";
import InboxNotOpenLogo from "../../assets/inboxNotOpen.svg";
import InboxOpen from "../../assets/inboxOpen.svg";
import { useState } from "react";

export default function InboxIcon(props) {

  return (
    <Box
      sx={{
        backgroundColor: `${props.isClicked ? "#8785FF" : "#F2F2F2"}`,
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
        src={props.isClicked ? InboxOpen : InboxNotOpenLogo}
        style={{ userSelect: "none" }}
      />
    </Box>
  );
}

InboxIcon.propTypes = {
  isClicked: propTypes.bool
}