import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { styled, useTheme } from "@mui/material/styles";
import "./OportunidadesDrawer.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  IconButton,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Anchor = "top" | "left" | "bottom" | "right";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const DrawerCustom = styled(Drawer)(({ theme }) => ({
  "& .MuiPaper-root": {
    backgroundColor: "#f3f3f3",
  },
}));

const ButtomCustom = styled(Button)(({ theme }) => ({
  color: "#595653",
  backgroundColor: "#d9d9d9",
  "&:hover": {
    backgroundColor: "#f3f3f3",
  },
}));

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(open);
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 350 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          "Introducción",
          "Definición",
          "Herramientas de analisis",
          "Desglose de negocio",
          "Proyecciones y resumen",
          "subir caso de éxito",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <Accordion sx={{ boxShadow: "none" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <FormControlLabel control={<Android12Switch />} label={text} />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const ListButton = () => {
    return (
      <Stack
        spacing={2}
        sx={{
          marginLeft: "1rem",
          width: "50%",
        }}
      >
        <ButtomCustom variant="contained">Reunión</ButtomCustom>
        <ButtomCustom
          variant="contained"
          sx={{ color: "#595653", backgroundColor: "#d9d9d9" }}
        >
          Mensaje
        </ButtomCustom>
        <ButtomCustom
          variant="contained"
          sx={{ color: "#595653", backgroundColor: "#d9d9d9" }}
        >
          Subir proyecto
        </ButtomCustom>
      </Stack>
    );
  };

  return (
    <div style={{ padding: " 5rem 10rem" }}>
      <Button onClick={toggleDrawer("right", true)}>Open</Button>
      <div className="opt-section-one"></div>
      <div className="opt-parrafo-container">
        <p>Documentos que se deben firmar para poder realizar el proyecto.</p>
        <p>
          Entregable: Descripción del problema y preguntas guía. Recordar, que
          todos los entregables en esta metodología forman o una presentación o
          un documento escrito, esto depende de lo que el cliente desea. No
          Olvidar que si es una presentación y si es un documento escrito debe
          ser un capitulo.
        </p>
      </div>
      <DrawerCustom
        className=""
        anchor="right"
        open={open}
        onClose={toggleDrawer("right", false)}
        variant="persistent"
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        {list("right")}
        <ListButton />
      </DrawerCustom>
    </div>
  );
}
