import { Box, Container, Typography, styled } from "@mui/material";
import Grid from "@mui/material/Grid";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimateBackground";
import Typewriter from "../../../../components/Typewriter/typewriter";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/styledbutton";

const HeroSection: React.FC = () => {
  const StyledImg = styled("img")(({ theme }) => ({
    width: "100%",
    borderRadius: "50%",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      maxWidth: "200px",
    },
  }));

  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      display: "block",
      padding: "20px",
      paddingTop: "100px",
      paddingBottom: "40px",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      alignItems: "center",
      paddingTop: "100px",
      height: "100vh",
    },
  }));

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/pdfs/Curriculum.pdf"; // caminho absoluto da pasta public
    link.download = "curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEmail = () => {
    const emailAddress = "paulofernandesalves30@gmail.com";
    const subject = "Subject";
    const body = "Hello! I saw your portfolio...";
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* Avatar */}
          <Grid item xs={12} md={5}>
            <Box position="relative" pb={3}>
              <Box width={"500%"} position="absolute" top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box textAlign="center">
                <StyledImg src="/images/avatar.png" alt="Avatar" />
              </Box>
            </Box>
          </Grid>

          {/* Texto e botões */}
          <Grid item xs={12} md={7}>
            <Typography
              color="primary.contrastText"
              variant="h1"
              pb={2}
              textAlign="center"
            >
              João Paulo
            </Typography>
            <Typewriter
              text="I'm a Developer Full Stack"
              delay={120}
              variant="h2"
              color="primary.contrastText"
            />
            <Box mt={3}>
              <Grid
                container
                spacing={3}
                display="flex"
                justifyContent="center"
              >
                <Grid item xs={10} md={4}>
                  <StyledButton onClick={handleDownload}>
                    <DownloadIcon />
                    <Typography>Download CV</Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={10} md={4}>
                  <StyledButton onClick={handleEmail}>
                    <EmailIcon />
                    <Typography>Contact me</Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default HeroSection;
