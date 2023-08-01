import * as React from "react";

import Box from "@mui/material/Box";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import WebhookIcon from "@mui/icons-material/Webhook";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AppShortcutIcon from "@mui/icons-material/AppShortcut";
import InfoIcon from "@mui/icons-material/Info";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import Typography from "@mui/material/Typography";

import MotionSection from "./pages/MotionSection";

const Experience = () => {
  const exp1 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        className="text-gray-500 dark:text-gray-400"
      >
        April 2009
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>
          <SchoolIcon fontSize="large" />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          className="text-black dark:text-white"
          component="span"
        >
          Auburn Univesity in Canada
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300">
          Bachelor of Science in Software Development
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp2 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
        className="text-gray-500 dark:text-gray-400"
      >
        June 2015
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <LaptopMacIcon fontSize="large" />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          className="text-black dark:text-white"
          component="span"
        >
          OBIC
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300">
          Junior Frontend developer
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp3 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        className="text-gray-500 dark:text-gray-400"
      >
        November 2016
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary" variant="outlined">
          <WebhookIcon fontSize="large" />
        </TimelineDot>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          className="text-black dark:text-white"
          component="span"
        >
          Ubisoft
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300">
          Senior Frontend developer
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp4 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        className="text-gray-500 dark:text-gray-400"
      >
        July 2019
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot color="secondary">
          <AppShortcutIcon fontSize="large" />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          className="text-black dark:text-white"
          component="span"
        >
          Infinite Devices
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300">
          Senior Frontend developer
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp5 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        className="text-gray-500 dark:text-gray-400"
      >
        May 2021
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot color="info">
          <InfoIcon fontSize="large" />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          className="text-black dark:text-white"
          component="span"
        >
          @eGroupAI
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300">
          Senior Frontend developer
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp6 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        className="text-gray-500 dark:text-gray-400"
      >
        October 2022
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
        <TimelineDot color="inherit">
          <CurrencyBitcoinIcon fontSize="large" />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent sx={{ py: "12px", px: 2 }}>
        <Typography
          variant="h6"
          className="text-black dark:text-white"
          component="span"
        >
          Winbee
        </Typography>
        <Typography className="text-gray-600 dark:text-gray-300">
          Junior Blockchain & Cryptocurrency Developer
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <Box className="bg-gray-200 dark:bg-gray-700">
      <Box className="container py-24 mx-auto md:px-6" id="experience">
        <h2 className="text-4xl lg:text-6xl text-center text-violet-700 underline decoration-sky-600 mb-20 font-bold">
          Experience
        </h2>
        <Timeline position="alternate">
          <MotionSection children={exp1} children1={exp2} />
          <MotionSection children={exp3} children1={exp4} />
          <MotionSection children={exp5} children1={exp6} />
        </Timeline>
      </Box>
    </Box>
  );
};

export default Experience;
