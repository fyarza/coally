import { Avatar, Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";

type Props = {};

export default function Perfil({}: Props) {
  return (
    <Box sx={{ width: 350, padding: "0.5rem", border: "1px solid gray" }}>
      <Stack spacing={2} justifyContent="center">
        <Avatar
          alt="Remy Sharp"
          src="https://fakeimg.pl/450x250/"
          sx={{ width: 150, height: 150, alignSelf: "center" }}
        />
        <Stack direction="row" spacing={2} alignSelf="center">
          <BorderColorIcon />
          <Typography>Editar perfil</Typography>
        </Stack>
        <Typography fontWeight="bold" fontSize={16} alignSelf="center">
          Nombre de la empresa
        </Typography>
        <Typography color="gray" fontSize={16} alignSelf="center">
          Descripción de la empresa en dos lineas
        </Typography>
        <Divider />
        <Typography
          color="darkblue"
          fontWeight="bold"
          fontSize={16}
          marginTop={1}
        >
          Ubicación
        </Typography>
        <Typography color="gray" fontSize={16} marginBottom={1}>
          En donde está ubicada la empresa
        </Typography>
        <Divider />
        <Typography
          color="darkblue"
          fontWeight="bold"
          fontSize={16}
          marginTop={2}
        >
          Página web
        </Typography>
        <Typography color="gray" fontSize={16} marginBottom={1}>
          www.aquilapaginaweb.com
        </Typography>
        <Divider />
        <Typography
          color="darkblue"
          fontWeight="bold"
          fontSize={16}
          marginTop={2}
        >
          Tamaño de la empresa
        </Typography>
        <Typography color="gray" fontSize={16} marginBottom={1}>
          10-20 trabajadores
        </Typography>
        <Divider />
        <Typography
          color="darkblue"
          fontWeight="bold"
          fontSize={16}
          marginTop={2}
        >
          Sector
        </Typography>
        <Typography color="gray" fontSize={16} marginBottom={1}>
          Marketing y ventas
        </Typography>
        <Divider />
        <Typography
          color="darkblue"
          fontWeight="bold"
          fontSize={16}
          marginTop={2}
        >
          Redes sociales
        </Typography>
        <Typography color="gray" fontSize={16} marginBottom={2}>
          Aquí íconos de redes sociales
        </Typography>
        <Divider />
        <Typography
          color="darkblue"
          fontWeight="bold"
          fontSize={16}
          marginTop={2}
        >
          Pagos
        </Typography>
        <Typography color="gray" fontSize={16} marginBottom={1}>
          Historico de pagos
        </Typography>
      </Stack>
    </Box>
  );
}
