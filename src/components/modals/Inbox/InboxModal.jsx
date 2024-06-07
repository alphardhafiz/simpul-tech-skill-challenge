import { Box } from "@mui/material";
import propTypes from "prop-types";
import Spinner from "../../Spinner";
import messageData from "./messageData.json";
import chatData from "./chatData.json";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import MessageListView from "./MessageListView";
import ChatView from "./ChatView";

export default function InboxModal({ isPopup }) {
  const [loading, setLoading] = useState(false);
  const [readMessage, setReadMessage] = useState(null);
  const [chat, setChat] = useState(null);

  useEffect(() => {
    if (readMessage) {
      if (readMessage === 1 || readMessage === 2) {
        setChat(chatData[0]);
      } else if (readMessage === 4 || readMessage === 3) {
        setChat(chatData[1]);
      } else {
        setChat(null);
      }
    } else {
      setChat(null);
    }
  }, [readMessage]);

  useEffect(() => {
    if (isPopup) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } else {
      setReadMessage(null);
      setChat(null);
    }
  }, [isPopup]);

  return (
    <Box
      sx={{
        width: "734px",
        height: "737px",
        backgroundColor: "white",
        transition: "all .5s ease-in-out",
        opacity: isPopup ? "100%" : "0",
        position: "absolute",
        bottom: "110px",
        right: isPopup ? "34px" : "734px",
        zIndex: 10,
      }}
    >
      {readMessage ? (
        <ChatView chat={chat} setReadMessage={setReadMessage} setChat={setChat} />
      ) : (
        <>
          <SearchBar />
          {loading ? (
            <Box
              sx={{
                width: "100%",
                height: "calc(100% - 32px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Spinner />
            </Box>
          ) : (
            <MessageListView
              messageData={messageData}
              setReadMessage={setReadMessage}
            />
          )}
        </>
      )}
    </Box>
  );
}

InboxModal.propTypes = {
  isPopup: propTypes.bool.isRequired,
};
