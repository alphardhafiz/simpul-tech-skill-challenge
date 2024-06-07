import { Box, Button, TextField, Typography } from "@mui/material";
import propTypes from "prop-types";
import ChatCard from "./ChatCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect, useState } from "react";

export default function ChatView({ chat, setReadMessage, setChat }) {
  const [reply, setReply] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageSend, setMessageSend] = useState('')

  const sendMessage = () => {
    setMessages((prev) => [
        ...prev,
        {
          id: chat.messages.length + 1,
          message: messageSend,
          reply: reply || null,
          time: new Date().getHours().toString() + ":" + new Date().getMinutes().toString(),
          sender: "You",
          nameColor: "#9B51E0",
          backgroundColor: "#EEDCFF",
        },
      ]);
      setReply(null)
      setMessageSend('')
  }

  useEffect(() => {
    if (chat) {
      setMessages(chat.messages);
    }
  }, [chat]);
  return (
    <Box display="flex" flexDirection="column" height="100%">
      <Box
        display="flex"
        gap="15px"
        alignItems="center"
        padding="20px 32px"
        borderBottom="1px solid #BDBDBD"
      >
        <ArrowBackIcon
          sx={{ cursor: "pointer" }}
          onClick={() => setReadMessage(null)}
        />
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography fontWeight="bold" fontSize="16px" color="#2F80ED">
            {chat?.title}
          </Typography>
          {chat?.participants && (
            <Typography fontWeight="normal" fontSize="14px" color="#333333">
              {chat?.participants} Participants
            </Typography>
          )}
        </Box>
        <CloseIcon
          sx={{ cursor: "pointer" }}
          onClick={() => setReadMessage(null)}
        />
      </Box>
      <Box
        padding="18px 20px"
        display="flex"
        flex={1}
        flexDirection="column"
        overflow="auto"
        position="relative"
        gap="16px"
      >
        {messages?.map((item, index) => (
          <ChatCard item={item} key={index} setReply={setReply} />
        ))}
      </Box>
      {reply && (
        <Box
          sx={{
            backgroundColor: "#F2F2F2",
            width: "580px",
            position: "absolute",
            bottom: "59px",
            left: "20px",
            // flex: 1,
            padding: "15px 20px",
            border: "1px solid #828282",
            borderRadius: "5px",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography fontSize="12px" fontWeight="600" color="#4F4F4F">
              Replying to {reply.replyTo}
            </Typography>
            <CloseIcon
              sx={{ cursor: "pointer", width: "12px", height: "12px" }}
              onClick={() => setReply(null)}
            />
          </Box>
          <Typography fontSize="12px" color="#4F4F4F" maxWidth="500px">
            {reply.message}
          </Typography>
          {/* <Typography color="#4F4F4F">{props.item.time}</Typography> */}
        </Box>
      )}
      <Box display="flex" gap="13px" sx={{ padding: "0px 20px 20px 20px" }}>
        <TextField
        value={messageSend}
        onChange={(e) => setMessageSend(e.target.value)}
          sx={{
            // flex: 1,
            width: "580px",
            borderRadius: "5px",
            backgroundColor: "white",
            "& .MuiInputBase-input": {
              padding: "0px 16px",
              height: "40px",
            },
            "& .MuiInputBase-root": {
              color: "#333333",
            },
          }}
        />
        <Button onClick={sendMessage} variant="contained" sx={{ width: "76px", height: "40px" }}>
          Send
        </Button>
      </Box>
    </Box>
  );
}

ChatView.propTypes = {
  chat: propTypes.object,
  setReadMessage: propTypes.func.isRequired,
};
