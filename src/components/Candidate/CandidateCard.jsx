import { Typography, Grid, Box, Stack } from "@mui/material";

import User from "../../assets/user.svg";
import DollarSymbol from "../../assets/dollar-symbol.png";
import styles from "./candidate.module.css";

import CustomizedSteppers from "./Stepper";

const CandidateCard = ({ data }) => {
  return (
    <>
      {data.map((item) => {
        return (
          <Grid
            className={styles["candidate-card"]}
            sx={{ mt: 2 }}
            container
            spacing={2}
          >
            <Grid item xs={12} sm={3}>
              <Stack flexDirection="row">
                <Box borderRadius="50%" width={50} height={50}>
                  <img width="100%" alt="user" src={User}></img>
                </Box>
                <Box sx={{ ml: 1 }}>
                  <Typography>{item.userName}</Typography>
                  <Typography>Sr.Engineer</Typography>
                </Box>
              </Stack>
            </Grid>
            <Grid item xs={9} sm={7}>
              <CustomizedSteppers activeStep={item.activeStep} />
            </Grid>
            <Grid position="relative" item xs={3} sm={2}>
              <Box width="6rem" position="absolute">
                <Box display="flex">
                  <Box
                    className={`${styles["days-to-go"]} ${styles["active"]}`}
                    sx={{
                      width: item.daysToGo,
                    }}
                  ></Box>
                  {item.daysToGo !== "0%" && (
                    <Box className={`${styles["dollar-img"]}`}>
                      <img
                        alt="dollar"
                        width={20}
                        height={20}
                        src={DollarSymbol}
                      ></img>
                    </Box>
                  )}
                  <Box className={`${styles["days-to-go-dashed"]}`} />
                </Box>
              </Box>
              <Typography variant="h3" sx={{ ml: 4, mt: 0.1 }}>
                <>
                  <span
                    style={{
                      visibility:
                        item.daysToGo === "100%" ? "hidden" : "visible",
                    }}
                  >
                    $
                  </span>
                  <span>{item.rewardPrice}</span>
                </>
              </Typography>
            </Grid>
          </Grid>
        );
      })}
      {/* <Grid
        className={styles["candidate-card"]}
        sx={{ mt: 2 }}
        container
        spacing={2}
      >
        <Grid item xs={12} sm={3}>
          <Stack flexDirection="row">
            <Box borderRadius="50%" width={50} height={50}>
              <img width="100%" alt="user" src={User}></img>
            </Box>
            <Box sx={{ ml: 1 }}>
              <Typography>Anmol Mahajan</Typography>
              <Typography>Sr.Engineer</Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={7}>
          <CustomizedSteppers activeStep={2} />
        </Grid>
        <Grid
          sx={{
            position: "relative",
          }}
          item
          xs={12}
          sm={2}
        >
          <Box
            sx={{
              width: "6rem",
              position: "absolute",
            }}
          >
            <Box
              className={`${styles["days-to-go"]} ${styles["active"]}`}
              sx={{
                width: "0%",
              }}
            />
            <Box sx={{ mt: 0 }} className={`${styles["days-to-go-dashed"]} `} />
          </Box>
          <Typography variant="h3" sx={{ ml: 4, mt: 0.1 }}>
            $2000
          </Typography>
        </Grid>
      </Grid> */}
    </>
  );
};

export default CandidateCard;
