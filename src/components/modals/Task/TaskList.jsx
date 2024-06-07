import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import editIcon from "../../../assets/edit.svg";
import editIconNotActive from "../../../assets/editNotActive.svg";
import clockIcon from "../../../assets/clock.svg";
import clockIconNotActive from "../../../assets/clockNotActive.svg";
import markIcon from "../../../assets/mark.svg";
import markIconNotActive from "../../../assets/markNotActive.svg";
import { useEffect, useState } from "react";

const bookmarkItems = [
  {
    id: 1,
    title: "Important ASAP",
    backgroundColor: "#E5F1FF",
  },
  {
    id: 2,
    title: "Offline Meeting",
    backgroundColor: "#FDCFA4",
  },
  {
    id: 3,
    title: "Virtual Meeting",
    backgroundColor: "#F9E9C3",
  },
  {
    id: 4,
    title: "ASAP",
    backgroundColor: "#AFEBDB",
  },
  {
    id: 5,
    title: "Client Related",
    backgroundColor: "#CBF1C2",
  },
  {
    id: 6,
    title: "Self Task",
    backgroundColor: "#CFCEF9",
  },
  {
    id: 7,
    title: "Appointments",
    backgroundColor: "#F9E0FD",
  },
  {
    id: 8,
    title: "Court Related",
    backgroundColor: "#9DD0ED",
  },
];

const remainingDays = (dateString) => {
  const today = new Date();
  const targetDate = new Date(dateString);

  today.setHours(0, 0, 0, 0);
  targetDate.setHours(0, 0, 0, 0);

  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays > 0) {
    return `${diffDays} days left`;
  } else if (diffDays < 0) {
    return `${Math.abs(diffDays)} days ago`;
  } else {
    return `Today is the day`;
  }
};

export default function TaskList({ item, index }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isBookmarkOpen, setIsBookmarkOpen] = useState(false);
  const [editTask, setEditTask] = useState(false);
  const [remaining, setRemaining] = useState("");
  const { register, watch } = useFormContext();

  useEffect(() => {
    setRemaining(remainingDays(watch(`data.${index}.date`)));
  }, [watch(`data.${index}.date`)]);

  const bookmarks = watch(`data.${index}.bookmarks`);

  return (
    <div style={{ borderRadius: "0 !important", borderBottom: "1px solid #828282" }}>
      <Accordion
        sx={{
          boxShadow: "0",
          paddingY: "22px",
          "& .Mui-expanded": {
            minHeight: "0 !important",
            margin: "0 !important",
          },
          "& .MuiAccordion-root:last-of-type": {
            borderEndEndRadius: "0 !important",
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel-${item.id}`}
          id={`panel-${item.id}`}
          sx={{
            display: "flex",
            padding: "0 50px 0 0",
            minHeight: "0",
            margin: "0",
            position: "relative",
            alignItems: "start",
            boxShadow: "0",
            "& .MuiAccordionSummary-content": {
              margin: 0,
              justifyContent: "space-between",
            },
          }}
        >
          <MoreHorizIcon
            sx={{
              position: "absolute",
              right: "21px",
              fontSize: "20px",
              color: "#828282",
            }}
          />
          <Box display="flex" gap="22px" alignItems="start" sx={{ position: "relative" }}>
            <input
              type="checkbox"
              style={{ height: "16px", width: "16px", zIndex: 2 }}
              {...register(`data.${index}.status`)}
              onClick={(event) => event.stopPropagation()}
            />
            {!editTask ? (
              <Typography
                sx={{ textDecoration: `${watch(`data.${index}.status`) ? "line-through" : "none"} !important` }}
                color="#4F4F4F"
                onClick={(event) => event.stopPropagation()}
                fontWeight="600"
                maxWidth="333px"
                fontSize="12px"
              >
                {watch(`data.${index}.title`) || "Not Set"}
              </Typography>
            ) : (
              <input
                type="text"
                style={{ padding: "8px" }}
                {...register(`data.${index}.title`)}
                onClick={(event) => event.stopPropagation()}
              />
            )}
          </Box>
          <Box display="flex" gap="20px" marginRight="10px">
            {watch(`data.${index}.date`) && (
              <Typography color="#EB5757" fontWeight="400" fontSize="12px">
                {remaining}
              </Typography>
            )}
            <Typography color="#4F4F4F" fontWeight="400" fontSize="12px">
              {watch(`data.${index}.date`)}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: "0" }}>
          <Box sx={{ paddingLeft: "40px", display: "flex", gap: "13px", flexDirection: "column" }}>
            <Box display="flex" alignItems="center" gap="20px">
              <img
                src={isCalendarOpen ? clockIcon : clockIconNotActive}
                alt="clock icon"
                height="16px"
                width="16px"
              />
              <input
                type="date"
                onFocus={() => setIsCalendarOpen(true)}
                onBlur={() => setIsCalendarOpen(false)}
                {...register(`data.${index}.date`)}
              />
            </Box>
            <Box display="flex" alignItems="start" gap="20px">
              <img
                src={editTask ? editIcon : editIconNotActive}
                alt="edit icon"
                height="16px"
                width="16px"
                onClick={() => setEditTask(!editTask)}
              />
              {editTask ? (
                <textarea
                  style={{ width: "100%", padding: "8px" }}
                  rows={3}
                  {...register(`data.${index}.task`)}
                />
              ) : (
                <Typography color="#4F4F4F" fontWeight="400" fontSize="12px">
                  {watch(`data.${index}.task`) || "No Description"}
                </Typography>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundColor: "#F9F9F9",
              marginLeft: "25px",
              marginTop: "15px",
              padding: "12px",
              borderRadius: "5px",
              position: "relative",
              display: "flex",
              gap: "24px",
            }}
          >
            {isBookmarkOpen && (
              <Box
                sx={{
                  position: "absolute",
                  borderRadius: "5px",
                  border: "1px solid #828282",
                  padding: "15px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  zIndex: 100,
                  top: "100%",
                  backgroundColor: "white",
                  width: "277px",
                }}
              >
                {bookmarkItems.map((bookmark) => (
                  <label
                    key={bookmark.id}
                    style={{
                      backgroundColor: bookmark.backgroundColor,
                      padding: "8px 12px",
                      borderRadius: "8px",
                      fontWeight: "600",
                      color: "#4F4F4F",
                    }}
                  >
                    <input
                      type="checkbox"
                      hidden
                      {...register(`data.${index}.bookmarks`)}
                      value={bookmark.id}
                    />
                    {bookmark.title}
                  </label>
                ))}
              </Box>
            )}
            <img
              src={isBookmarkOpen ? markIcon : markIconNotActive}
              alt="mark icon"
              height="26px"
              width="26px"
              onClick={() => setIsBookmarkOpen(!isBookmarkOpen)}
            />
            <Box display="flex" flexWrap="wrap" gap="10px">
              {bookmarks &&
                bookmarks.length > 0 &&
                bookmarkItems
                  .filter((bookmark) => bookmarks.includes(bookmark.id.toString()))
                  .map((bookmark) => (
                    <Typography
                      key={bookmark.id}
                      fontSize="12px"
                      backgroundColor={bookmark.backgroundColor}
                      borderRadius="8px"
                      padding="8px 12px"
                      fontWeight="600"
                      color="#4f4f4f"
                    >
                      {bookmark.title}
                    </Typography>
                  ))}
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
