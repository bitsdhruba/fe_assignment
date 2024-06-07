import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box mt={8}>
      <Box>
        <Box>
          <Typography variant="subtitle1" color="primary.light">
            Platform
          </Typography>
          <Typography variant="body2" color="initial">
            Ask a doctor online
          </Typography>
          <Typography variant="body2" color="initial">
            Chat with a doctor
          </Typography>
          <Typography variant="body2" color="initial">
            Get the App
          </Typography>
        </Box>
        <Box my={3}>
          <Typography variant="subtitle1" color="primary.light">
            Resourses
          </Typography>
          <Typography variant="body2" color="initial">
            Carrier
          </Typography>
          <Typography variant="body2" color="initial">
            Blog
          </Typography>
          <Typography variant="body2" color="initial">
            Help & Support
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1" color="primary.light">
            Company
          </Typography>
          <Typography variant="body2" color="initial">
            About us
          </Typography>
          <Typography variant="body2" color="initial">
            Contact us
          </Typography>
          <Typography variant="body2" color="initial">
            Terms & Conditions
          </Typography>
        </Box>
      </Box>
      <Copyright sx={{ mt: 4, mb: 4 }} />
    </Box>
  );
};

export default Footer;

function Copyright(props: any) {
  return (
    <Typography
      component="div"
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Typography variant="subtitle1" color="primary.main">
        Docta
      </Typography>
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
