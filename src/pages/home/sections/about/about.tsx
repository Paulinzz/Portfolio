import { Box, Card, Container, Typography, styled, Grid } from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SchoolIcon from "@mui/icons-material/School";
import AnimationComponent from "../../../../components/AnimatonComponent/animationcomponent";

const StyledCard = styled(Card)(({ theme }) => ({
  padding: "15px",
  textAlign: "center",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  transition: "all 0.3s ease",
  cursor: "pointer",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: theme.palette.secondary.light,
    transform: "scale(1.05)",
  },
}));

const AboutSection: React.FC = () => {
  const skillsSet = [
    { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg" },
    { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" },
    { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" },
    { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" },
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "Tailwind", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "Django", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/django/django-plain.svg" },
    { name: "Flask", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "SQLAlchemy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original-wordmark.svg" },
    { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" },
    { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Apache", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apache/apache-original.svg" },
    { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  ];

  return (
    <Container maxWidth="lg">
      {/* About Me */}
      <Box id="about" pt={5} mb={3}>
        <Typography variant="h2" textAlign="center">
          About me
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch" pb={5}>
        <Grid item xs={12} sm={6} md={3}>
          <AnimationComponent moveDirection="right">
            <StyledCard variant="outlined">
              <WorkspacePremiumIcon fontSize="large" sx={{ mb: 1 }} />
              <Typography fontWeight={600}>Experience</Typography>
              <Typography>
                Project participant and fellow as a tutor at IFRN
              </Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <AnimationComponent moveDirection="left">
            <StyledCard variant="outlined">
              <SchoolIcon fontSize="large" sx={{ mb: 1 }} />
              <Typography fontWeight={600}>Education</Typography>
              <Typography>
                Internet IT Technician - IFRN (2023–2026)
              </Typography>
            </StyledCard>
          </AnimationComponent>
        </Grid>
      </Grid>

      {/* Description */}
      <Box pb={3}>
        <Typography textAlign="justify">
          My name is João Paulo, and since I was a child, I have been curious
          about technology, with a genuine curiosity to understand how systems
          work and a desire to create and understand my own digital solutions.
          Currently, in my course at IFRN Campus Caicó, I have acquired
          knowledge in web development, system maintenance, and technological
          problem solving. As a future Internet IT Technician, I am ready to
          face new challenges and continue exploring the endless possibilities
          that technology offers.
        </Typography>
      </Box>

      <hr />

      {/* Skills */}
      <Box id="skills" pt={3} mb={3}>
        <Typography variant="h3" textAlign="center" fontWeight={300}>
          Skills
        </Typography>
      </Box>

      <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        {skillsSet.map((skill, index) => (
          <Grid item xs={5} sm={4} md={2} lg={2} key={index}>
            <StyledCard variant="outlined">
              <Box display="flex" flexDirection="column" alignItems="center">
                <img
                  src={skill.logo}
                  alt={skill.name}
                  style={{ width: 40, height: 40, marginBottom: 8 }}
                />
                <Typography>{skill.name}</Typography>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AboutSection;
