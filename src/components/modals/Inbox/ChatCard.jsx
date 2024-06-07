import { Box, Divider, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useRef, useState } from "react";

export default function ChatCard(props) {
  const [showAction, setShowAction] = useState(false);
  const actionRef = useRef(null);

  const handleClickOutside = (event) => {
    if (actionRef.current && !actionRef.current.contains(event.target)) {
      setShowAction(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        gap="4.5px"
        alignItems={`${props.item.sender === "You" ? "end" : "start"}`}
      >
        <Typography
          fontWeight="bold"
          fontSize="14px"
          color={props.item.nameColor}
        >
          {props.item.sender}
        </Typography>
        {props.item.reply && (
          <Box
            sx={{
              backgroundColor: "#F2F2F2",
              width: "fit-content",
              maxWidth: '70%',
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #E0E0E0",
            }}
          >
            <Typography color="#4F4F4F">{props.item.reply.message}</Typography>
          </Box>
        )}
        <Box
          display="flex"
          justifyContent={props.item.sender === "You" ? "end" : ""}
          gap="7px"
          position="relative"
          maxWidth={"75%"}
        >
          {props.item.sender === "You" && (
            <MoreHorizIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setShowAction(!showAction)}
            />
          )}
          <Box
          ref={actionRef}
            display={showAction ? "flex" : "none"}
            sx={{
              backgroundColor: "white",
              zIndex: 5,
              borderRadius: "5px",
              border: "1px solid #BDBDBD",
            }}
            flexDirection="column"
            position="absolute"
            zIndex={2}
            top={20}
            left={props.item.sender === "You" ? 0 : ""}
            right={props.item.sender !== "You" ? 0 : ""}
            width="126px"
            minHeight="80px"
          >
            <Typography
              padding={"14px 18px"}
              color="#2F80ED"
              sx={{
                transition: "all .1s ease-in-out",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              Share
            </Typography>
            <Divider />
            <Typography
              onClick={() =>
                props.setReply({
                  replyTo: props.item.sender,
                  message: props.item.message,
                })
              }
              padding={"14px 18px"}
              color="#2F80ED"
              sx={{
                transition: "all .3s ease-in-out",
                "&:hover": {
                  cursor: "pointer",
                  backgroundColor: "#F2F2F2",
                },
              }}
            >
              Reply
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: props.item.backgroundColor,
              width: "fit-content",
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <Typography marginBottom="12px" color="#4F4F4F">
              {props.item.message}
            </Typography>
            <Typography color="#4F4F4F">{props.item.time}</Typography>
          </Box>
          {props.item.sender !== "You" && (
            <MoreHorizIcon
              sx={{ cursor: "pointer" }}
              onClick={() => setShowAction(!showAction)}
            />
          )}
        </Box>
      </Box>
      {props.item.message ===
        "No worries. It will be completed ASAP. I’ve asked him yesterday." && (
        <Divider
          sx={{
            color: "#4F4F4F",
            fontWeight: "bold",
            "&.MuiDivider-root": {
              "&::before": {
                border: `thin solid rgba(0,0,0,1)`,
              },
              "&::after": {
                border: `thin solid rgba(0,0,0,1)`,
              },
            },
          }}
        >
          Today June 09, 2021
        </Divider>
      )}
      {props.item.message === "Sure thing ,Claren." && (
        <Divider
          sx={{
            color: "#EB5757",
            fontWeight: "bold",
            "&.MuiDivider-root": {
              "&::before": {
                border: `thin solid #EB5757`,
              },
              "&::after": {
                border: `thin solid #EB5757`,
              },
            },
          }}
        >
          New Message
        </Divider>
      )}
    </>
  );
}
