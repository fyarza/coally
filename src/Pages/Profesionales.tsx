import React from "react";
import "./Profesionales.css";
import Avatar from "@mui/material/Avatar";
import {
  Box,
  Button,
  Card,
  CardContent,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import StarRateIcon from "@mui/icons-material/StarRate";

type Props = {};

const Profesionales = (props: Props) => {
  return (
    <div className="profesionales" style={{ padding: "5rem", maxWidth: 1000 }}>
      <Stack direction="row" alignItems="center" spacing={5}>
        <Stack>
          <h1>Diego Cardona</h1>
          <Box sx={{ padding: 5 }}>
            <Stack direction="row" spacing={4} alignItems="center">
              <Stack spacing={2} justifyContent="center" alignItems="center">
                <Avatar
                  alt="Remy Sharp"
                  src="https://fakeimg.pl/450x250/"
                  sx={{ width: 150, height: 150 }}
                />
                <Typography color="GrayText">email@....</Typography>
                <Button variant="outlined">Contactar</Button>
              </Stack>
              <Stack spacing={2}>
                <Typography variant="h5" fontWeight="bold" fontSize={25}>
                  Acerca de
                </Typography>
                <Typography variant="caption" color="gray" fontSize={14}>
                  Administrador de Empresas titulado de la Universidad de
                  Cartagena, con énfasis en Negocios Internacionales. Con
                  conocimientos en marketing, ventas, finanzas y costos. Poseo
                  facibilidad para trabajar en diferentes equipos y adquiero los
                  retos con competencia. He estado en el mundo de las ventas
                  desde temprana edad lo que me permite adaptarme de forma facil
                  y rápida a cualquier situación; además, poseo habilidades de
                  negociación.
                </Typography>
                <Stack direction="row" spacing={2}>
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                  <StarRateIcon />
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Divider />
          <Box marginTop={3}>
            <Stack spacing={2}>
              <Typography variant="h5" fontWeight="bold" fontSize={25}>
                Acerca de
              </Typography>
              <Typography variant="caption" color="gray" fontSize={14}>
                Ingeniero de sistemas y telecomunicaciones
              </Typography>
              <Typography variant="caption" color="gray" fontSize={14}>
                Administrador de Empresas titulado de la Universidad de
                Cartagena, con énfasis en Negocios Internacionales. Con
                conocimientos en marketing, ventas, finanzas y costos. Poseo
                facibilidad para trabajar en diferentes equipos y adquiero los
                retos con competencia. He estado en el mundo de las ventas desde
                temprana edad lo que me permite adaptarme de forma facil y
                rápida a cualquier situación; además, poseo habilidades de
                negociación.
              </Typography>
              <Divider />
            </Stack>
          </Box>
        </Stack>
        <Stack>
          <Card sx={{ width: 300 }}>
            <CardContent>
              <Stack>
                <Typography
                  color="darkblue"
                  fontWeight="bold"
                  fontSize={16}
                  marginTop={2}
                >
                  Oportunidades
                </Typography>
                <Typography color="orange" fontSize={30} fontWeight="bold">
                  20
                </Typography>
                <Divider />
                <Typography
                  color="darkblue"
                  fontWeight="bold"
                  fontSize={16}
                  marginTop={2}
                >
                  Idioma
                </Typography>
                <Typography color="gray" fontSize={16} marginBottom={2}>
                  Ingles y español
                </Typography>
                <Divider />
                <Typography
                  color="darkblue"
                  fontWeight="bold"
                  fontSize={16}
                  marginTop={2}
                >
                  Habilidades
                </Typography>
                <Stack spacing={4} marginTop={3}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack>
                      <Typography color="gray" fontSize={16}>
                        Habilidad 1
                      </Typography>
                      <CircularProgress
                        variant="determinate"
                        color="warning"
                        value={75}
                        size={60}
                      />
                    </Stack>
                    <Stack>
                      <Typography color="gray" fontSize={16}>
                        Habilidad 1
                      </Typography>
                      <CircularProgress
                        variant="determinate"
                        color="warning"
                        value={30}
                        size={60}
                      />
                    </Stack>
                  </Stack>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Stack>
                      <Typography color="gray" fontSize={16}>
                        Habilidad 1
                      </Typography>
                      <CircularProgress
                        variant="determinate"
                        color="warning"
                        value={75}
                        size={60}
                      />
                    </Stack>
                    <Stack>
                      <Typography color="gray" fontSize={16}>
                        Habilidad 1
                      </Typography>
                      <CircularProgress
                        variant="determinate"
                        color="warning"
                        value={30}
                        size={60}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>

      <Box marginTop={3}>
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold" fontSize={25}>
            Experiencia
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="https://fakeimg.pl/450x250/"
              sx={{ width: 50, height: 50 }}
            />
            <Stack>
              <Typography fontWeight="bold" variant="subtitle1">
                Company
              </Typography>
              <Typography variant="caption" color="gray" fontSize={12}>
                Ingeniero de sistemas y telecomunicaciones
              </Typography>
              <Typography variant="caption" color="gray" fontSize={12}>
                Fecha 0-0
              </Typography>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="https://fakeimg.pl/450x250/"
              sx={{ width: 50, height: 50 }}
            />
            <Stack spacing={1}>
              <Typography fontWeight="bold" variant="subtitle1">
                Company
              </Typography>
              <Stack>
                <Typography variant="caption" color="gray" fontSize={12}>
                  Cargo 1: Ingeniero de sistemas y telecomunicaciones
                </Typography>
                <Typography variant="caption" color="gray" fontSize={12}>
                  Fecha 0-0
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="caption" color="gray" fontSize={12}>
                  Cargo 2: Ingeniero de sistemas y telecomunicaciones
                </Typography>
                <Typography variant="caption" color="gray" fontSize={12}>
                  Fecha 0-0
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Divider />
          <Stack direction="row" spacing={2} alignItems="center">
            <Avatar
              alt="Remy Sharp"
              src="https://fakeimg.pl/450x250/"
              sx={{ width: 50, height: 50 }}
            />
            <Stack>
              <Typography fontWeight="bold" variant="subtitle1">
                Company
              </Typography>
              <Typography variant="caption" color="gray" fontSize={12}>
                Ingeniero de sistemas y telecomunicaciones
              </Typography>
              <Typography variant="caption" color="gray" fontSize={12}>
                Fecha 0-0
              </Typography>
            </Stack>
          </Stack>
          <Divider />
        </Stack>
      </Box>
    </div>
  );
};

export default Profesionales;
