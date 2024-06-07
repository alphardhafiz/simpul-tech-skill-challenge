import { Box, Typography } from "@mui/material";
import redDot from "../../../assets/redDot.svg";
import propTypes from "prop-types";
import groupPeople from "../../../assets/groupPeoples.png";

export default function MessageListView({ messageData, setReadMessage }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "0px 32px",
      }}
    >
      {messageData.map((data, index) => (
        <Box
          onClick={() => setReadMessage(data.id)}
          key={index}
          display="flex"
          gap="16px"
          sx={{
            cursor: "pointer",
            transition: "all .1s ease-in-out",
            "&:hover": {
              backgroundColor: "#F2F2F2",
            },
          }}
          paddingY="22px"
          borderBottom={`${
            index === messageData.length - 1 ? "" : "1px solid #828282"
          }`}
        >
          <Box>
            <img src={groupPeople} alt="group" />
          </Box>
          <Box display="flex" flexDirection="column" flex="1">
            <Box display="flex" gap="16px">
              <Typography
                color="#2F80ED"
                fontWeight="bold"
                fontSize="12px"
                marginBottom="8px"
                maxWidth="55%"
              >
                {data.title}
              </Typography>
              <Typography color="#4F4F4F" fontSize="12px">
                {data.date}
              </Typography>
            </Box>
            <Typography
              color="#4F4F4F"
              fontWeight="bold"
              fontSize="12px"
              marginBottom="4px"
            >
              {data.name} :
            </Typography>
            <Typography
              position="relative"
              color="#4F4F4F"
              fontWeight="500"
              fontSize="12px"
            >
              {data.message}
              {!data.readStatus && (
                <img
                  src={redDot}
                  alt="dot"
                  style={{
                    position: "absolute",
                    bottom: "4px",
                    right: "0",
                  }}
                />
              )}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

MessageListView.propTypes = {
  messageData: propTypes.array.isRequired,
  setReadMessage: propTypes.func.isRequired,
};
