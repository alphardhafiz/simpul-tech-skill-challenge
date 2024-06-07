import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import propTypes from "prop-types";
import { useEffect, useState } from "react";
import taskData from "./taskData.json";
import Spinner from "../../Spinner";

import { FormProvider, useFieldArray, useForm } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";
import TaskList from "./TaskList";

export default function TaskModal(props) {
  const [section, setSection] = useState(3);
  const [loading, setLoading] = useState(false);
  const [task, setTaskData] = useState([]);

  const methods = useForm();

  const { register, getValues, reset, setValue, watch, control } = methods;

  const { fields, append, remove } = useFieldArray({
    control,
    name: "data",
  });

  useEffect(() => {
    if (task.length > 0) {
      reset({ data: task });
    }
  }, [task]);

  const data = getValues("data");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (section === 1) {
      setTaskData(
        taskData.filter(
          (item) => item.id === 1 || item.id === 2 || item.id === 3
        )
      );
    } else if (section === 2) {
      setTaskData(
        taskData.filter(
          (item) => item.id === 1 || item.id === 3 || item.id === 5
        )
      );
    } else if (section === 3) {
      setTaskData(taskData);
    }
  }, [section]);
  return (
    <Box
      sx={{
        width: "734px",
        height: "737px",
        backgroundColor: "white",
        transition: "all .5s ease-in-out",
        opacity: props.isPopup ? "100%" : "0",
        // display: 'block',
        position: "absolute",
        bottom: "110px",
        right: props.isPopup ? "34px" : "734px",
        padding: "24px 32px",
        display: "flex",
        flexDirection: "column",
        zIndex: 10,
      }}
    >
      <FormProvider {...methods}>
        <form>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControl
              sx={{
                "& .MuiFormControl-root": {
                  margin: 0,
                },
              }}
            >
              <Select
                value={section}
                onChange={(e) => setSection(e.target.value)}
                displayEmpty
                sx={{
                  "& .MuiSelect-select": {
                    padding: "10px 14px",
                  },
                }}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem sx={{ borderBottom: "1px solid #828282" }} value={1}>
                  My Tasks
                </MenuItem>
                <MenuItem sx={{ borderBottom: "1px solid #828282" }} value={2}>
                  Personal Errands
                </MenuItem>
                <MenuItem value={3}>Urgent To-Do</MenuItem>
              </Select>
            </FormControl>
            <Button
              variant="contained"
              sx={{ padding: "8px 16px", borderRadius: "5px" }}
              onClick={() =>
                append({
                  id: data.length,
                  title: "",
                  remainingDays: null,
                  date: null,
                  task: null,
                  status: false,
                })
              }
            >
              New Task
            </Button>
          </Box>
          <Box sx={{ flex: 1 }}>
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
              <Box display="flex" flexDirection="column">
                {data?.length > 0 &&
                  data.map((item, index) => (
                    <TaskList key={index} item={item} index={index} />
                  ))}
              </Box>
            )}
          </Box>
        </form>
      </FormProvider>
    </Box>
  );
}

TaskModal.propTypes = {
  isPopup: propTypes.bool,
};
