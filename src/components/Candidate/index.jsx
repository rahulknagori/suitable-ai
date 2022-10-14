import { Typography, Box, Container, Grid } from "@mui/material";
import styles from "./candidate.module.css";
import { CustomStack } from "../CustomStyle";
import CandidateCard from "./CandidateCard";

const CandidateIndex = () => {
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
        <CandidateCard />
      </Container>
    </Container>
  );
};

export default CandidateIndex;
