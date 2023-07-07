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

import { useInView } from "framer-motion";

const Experience = () => {
  function Section({
    children,
    children1,
  }: {
    children: React.ReactNode;
    children1?: React.ReactNode;
  }) {
    const ref = React.useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <Box ref={ref}>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(1200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </Box>
        <Box
          style={{
            transform: isInView ? "none" : "translateX(-1200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children1}
        </Box>
      </Box>
    );
  }

  const exp1 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
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
        <Typography variant="h6" component="span">
          Auburn Univesity in Canada
        </Typography>
        <Typography>Bachelor of Science in Software Development</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp2 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
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
        <Typography variant="h6" component="span">
          OBIC
        </Typography>
        <Typography>Junior Frontend developer</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp3 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
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
        <Typography variant="h6" component="span">
          Ubisoft
        </Typography>
        <Typography>Senior Frontend developer</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp4 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
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
        <Typography variant="h6" component="span">
          Infinite Devices
        </Typography>
        <Typography>Senior Frontend developer</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp5 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
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
        <Typography variant="h6" component="span">
          @eGroupAI
        </Typography>
        <Typography>Senior Frontend developer</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  const exp6 = (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        variant="body2"
        color="text.secondary"
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
        <Typography variant="h6" component="span">
          Winbee
        </Typography>
        <Typography>Junior Blockchain & Cryptocurrency Developer</Typography>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <Box className="container my-24 mx-auto md:px-6" id="experience">
      <h1 className="text-4xl text-center underline decoration-sky-600 mb-20 font-bold">
        My Experience
      </h1>
      <Timeline position="alternate">
        <Section children={exp1} children1={exp2} />
        <Section children={exp3} children1={exp4} />
        <Section children={exp5} children1={exp6} />
      </Timeline>
    </Box>
  );
};

export default Experience;
