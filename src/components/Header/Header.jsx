import { TextField, Box, Container, Typography } from "@mui/material";

import styles from "./header.module.css";

const Header = () => {
  return (
    <Box className={styles.header}>
      <Container maxWidth="md">
        <Box maxWidth={300}>
          <Typography className={styles["pt--4"]} variant="h1" color="white">
            Referral Status
          </Typography>
          <TextField
            className={styles["search-box"]}
            size="small"
            id="outlined-basic"
            variant="outlined"
            placeholder="search"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
