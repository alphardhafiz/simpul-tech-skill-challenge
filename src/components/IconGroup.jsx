import { Box } from "@mui/material";
import InboxIcon from "./Icons/InboxIcon";
import StrokeIcon from "./Icons/StrokeIcon";
import TaskIcon from "./Icons/TaskIcon";
import { useEffect, useState } from "react";
import InboxModal from "./modals/Inbox/InboxModal";
import TaskModal from "./modals/Task/TaskModal";

export default function IconGroup() {
  const [strokeClicked, setStrokeClicked] = useState(true);
  const [inboxClicked, setInboxClicked] = useState(false);
  const [taskClicked, setTaskClicked] = useState(false);

  useEffect(() => {
    if (!strokeClicked) {
      setInboxClicked(false);
      setTaskClicked(false);
    }
  }, [strokeClicked]);
  return (
    <>
      <Box
        onClick={() => setStrokeClicked(!strokeClicked)}
        sx={{
          position: "absolute",
          transition: "all .3s ease-in-out",
          right: inboxClicked || taskClicked ? "49px" : "34px",
          bottom: "27px",
          zIndex: 3,
        }}
      >
        <StrokeIcon backgroundColor={inboxClicked || taskClicked} />
      </Box>
      <Box
        onClick={() => {
          setInboxClicked(!inboxClicked);
          setTaskClicked(false);
        }}
        sx={{
          position: "absolute",
          transition: "all .3s ease-in-out",
          right: `${
            inboxClicked
              ? "34px"
              : taskClicked
              ? "128px"
              : strokeClicked
              ? "128px"
              : "40px"
          }`,
          bottom: inboxClicked ? "27px" : "30px",
          zIndex: inboxClicked ? 4 : 0,
        }}
      >
        <InboxIcon isClicked={inboxClicked} />
      </Box>
      <InboxModal isPopup={inboxClicked} />
      <Box
        onClick={() => {
          setTaskClicked(!taskClicked);
          setInboxClicked(false);
        }}
        sx={{
          position: "absolute",
          transition: "all .3s ease-in-out",
          right: `${
            taskClicked
              ? "34px"
              : inboxClicked
              ? "128px"
              : strokeClicked
              ? "214px"
              : "40px"
          }`,
          bottom: taskClicked ? "27px" : "30px",
          zIndex: taskClicked ? 4 : 0,
        }}
      >
        <TaskIcon isClicked={taskClicked} />
      </Box>
      <TaskModal isPopup={taskClicked} />
    </>
  );
}
