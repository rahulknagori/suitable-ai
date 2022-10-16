import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Done } from "@mui/icons-material";

import User from "../../assets/user.svg";

// the connector or horizontal line that shows the progress of the candidate

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 14,
  },
  // show the connector with these styles when the candidate is on the active/current step

  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#28c728",
    },
  },
  // for all the steps the candidate has completed, show the connector with these styles

  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: "#28c728",
    },
  },
  // general styles for the connector
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : " #95989c",
    borderRadius: 1,
  },
}));

// display these icons depending on the status of steps

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.grey[700] : "#ffff",
  border: "5px solid #95989c",
  zIndex: 1,
  marginTop: 3,
  color: "#fff",
  width: 15,
  height: 15,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  // show the icon with these styles when the candidate is on the active/current step
  ...(ownerState.active && {
    width: 40,
    height: 40,
    marginTop: -10,
    border: "5px solid #28c728",
    backgroundColor: "#ffff",
    boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
  }),
  // for all the steps the candidate has completed, show the icon with these styles
  ...(ownerState.completed && {
    backgroundColor: "#28c728",
    border: "none",
    marginTop: 0,
    width: 30,
    height: 30,
  }),
}));

function ColorlibStepIcon(props) {
  const { active, completed, className } = props;

  const icons = {
    1: <Done />,
    2: <img alt="active-user" className="active-user-img" src={User} />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {active && icons[String("2")]}
      {completed && icons[String("1")]}
    </ColorlibStepIconRoot>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
  last: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
  "Create an ad",
];

export default function CustomizedSteppers({ activeStep }) {
  return (
    <Stack sx={{ width: "100%" }} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep} // this is the active step
        connector={<ColorlibConnector />} //the connector or horizontal line that shows the progress of the candidate
      >
        {steps.map((label) => (
          <Step key={label}>
            {/* display these icons depending on the status of the steps */}
            <StepLabel StepIconComponent={ColorlibStepIcon}></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  );
}
