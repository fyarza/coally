import React from "react";
import AccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
interface Props {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
const ControlledAccordion: React.FC<Props> = ({ title, children, icon }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    borderBottom: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
  }));
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: 0,
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 0,
    paddingLeft: theme.spacing(8),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
  }));
  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Box sx={{ width: "100%" }}>
            <Stack spacing={1} direction="row" alignItems="center">
              {icon}
              <Typography sx={{ width: "33%", flexShrink: 0, fontWeight: 500 }}>
                {title}
              </Typography>
            </Stack>
          </Box>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ControlledAccordion;
