import { Box, Container, Typography, Grid, Divider } from "@mui/material";
import doctor from "../assets/doctor.png";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <main>
        <Grid container my={3}>
          <Grid item xs={12} sm={6}>
            <Box
              component="div"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant="h3" component="h1" color="primary.dark">
                Your Favourite
              </Typography>
              <Typography variant="h3" component="h1" color="primary.dark">
                Online Clinic
              </Typography>
              <Box
                my={3}
                component="div"
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Typography variant="subtitle1" color="primary.light">
                  Same-day Treatment
                </Typography>
                <Typography variant="subtitle1" color="primary.light">
                  Board-certified Practitioners
                </Typography>
                <Typography variant="subtitle1" color="primary.light">
                  Satisfaction guarentee
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box component="div">
              <img
                src={doctor}
                alt="helping hand"
                style={{
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box component="div">
          <Typography variant="subtitle1" color="primary.light">
            Why Docta is better...
          </Typography>
          <Typography variant="h4" color="primary.dark">
            Smart and affordable
          </Typography>
          <Box my={3}>
            <Box component="div" display={"flex"} alignItems={"center"}>
              <MoreTimeIcon
                sx={{
                  color: "secondary.light",
                  backgroundColor: "primary.light",
                  borderRadius: "8px",
                  padding: "8px",
                  marginRight: 2,
                }}
                fontSize="large"
              />
              <Box>
                <Typography variant="subtitle1" color="primary.dark">
                  Always available
                </Typography>
                <Typography variant="body1" color="primary.light">
                  Skip the trip and start your visit any time with any device
                </Typography>
              </Box>
            </Box>
            <Box component="div" display={"flex"} alignItems={"center"} my={2}>
              <PriceChangeIcon
                sx={{
                  color: "secondary.light",
                  backgroundColor: "primary.light",
                  borderRadius: "8px",
                  padding: "8px",
                  marginRight: 2,
                }}
                fontSize="large"
              />
              <Box>
                <Typography variant="subtitle1" color="primary.dark">
                  A price that doesnot hurt
                </Typography>
                <Typography variant="body1" color="primary.light">
                  Your visit is $59 and even less with insurence
                </Typography>
              </Box>
            </Box>
            <Box component="div" display={"flex"} alignItems={"center"}>
              <TipsAndUpdatesIcon
                sx={{
                  color: "secondary.light",
                  backgroundColor: "primary.light",
                  borderRadius: "8px",
                  padding: "8px",
                  marginRight: 2,
                }}
                fontSize="large"
              />
              <Box>
                <Typography variant="subtitle1" color="primary.dark">
                  Prescriptions and Treatment plans
                </Typography>
                <Typography variant="body1" color="primary.light">
                  You'll get a customize treatment plans, plus prescription sent
                  to your favourite pharmacy
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
      <Divider />
      <Footer />
    </Container>
  );
};

export default Home;
