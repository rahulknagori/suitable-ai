import { Typography, Box, Container, Grid } from "@mui/material";
import styles from "./candidate.module.css";
import { CustomStack } from "../CustomStyle";
import CandidateCard from "./CandidateCard";
import { useEffect, useState } from "react";

const data = [
  {
    userName: "Anmol Mahajan",
    activeStep: 1,
    daysToGo: "40%",
    rewardPrice: 2000,
  },
  {
    userName: "Hemanth",
    activeStep: 2,
    daysToGo: "60%",
    rewardPrice: 2000,
  },
  {
    userName: "Irshad",
    activeStep: 4,
    daysToGo: "0%",
    rewardPrice: 200,
  },
  {
    userName: "Adarsh",
    activeStep: 3,
    daysToGo: "100%",
    rewardPrice: 2000,
  },
  {
    userName: "Harsha",
    activeStep: 3,
    daysToGo: "0%",
    rewardPrice: 1000,
  },
  {
    userName: "Anuj",
    activeStep: 1,
    daysToGo: "0%",
    rewardPrice: 2000,
  },
];

const CandidateIndex = ({ search }) => {
  const [userData, setUserData] = useState(data);
  useEffect(() => {
    const filtered = data.filter((each) =>
      each.userName.toLowerCase().includes(search.toLowerCase())
    );
    setUserData(filtered);
  }, [search]);

  return (
    <Container className={styles["candidate-card-container"]} maxWidth="md">
      <Container className={styles["candidate-main-card"]}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Typography align="center" variant="h5">
              Candidate
            </Typography>
          </Grid>
          <Grid item xs={10} sm={7}>
            <CustomStack>
              <Typography variant="h5">Referred</Typography>
              <Typography
                sx={{
                  ml: -4,
                }}
                variant="h5"
              >
                Interviewed
              </Typography>
              <Typography
                sx={{
                  ml: -3,
                }}
                variant="h5"
              >
                Hired
              </Typography>
              <Typography variant="h5">Joined</Typography>
            </CustomStack>
          </Grid>
          <Grid item xs={2} sm={2}>
            <Box>
              <Typography align="center" variant="h5">
                Reward
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <CandidateCard data={userData} />
      </Container>
    </Container>
  );
};

export default CandidateIndex;
