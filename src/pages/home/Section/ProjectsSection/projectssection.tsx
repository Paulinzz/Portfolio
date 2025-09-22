import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "/home/paulinzz/Documents/my-portfolio/src/componets/ProjectCard/projetcard.tsx";
import AnimationComponent from "/home/paulinzz/Documents/my-portfolio/src/componets/AnimatonComponent/animationcomponent.tsx";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "FocusUp",
            subtitle: "April 2025 - ",
            srcImg: "src/assets/images/focusUp.png",
            description: "FocusUp is a study manager created as a professional practice project at a Federal Institute. More than just organizing tasks, it was designed to help you study with focus, strategy, and balance. With it, the learning journey becomes clearer, more conscious — and much more yours.",
            technologies: "Technologies: JavaScript, HTML, CSS, Bootstrap, Flask (Python), Figma",
            websiteURL: "/",
            codeURL: "https://github.com/Paulinzz/Pratica-Profissional",
        },
        {
            title: "Snake The Game",
            subtitle: "Aug 2024 - Oct 2024",
            srcImg: "src/assets/images/snake.png",
            description: "This is a modern take on the classic Snake game, created using Python and the Pygame library. Players control a snake that grows longer as it eats food, while avoiding collisions with walls and itself. The game features smooth controls, simple graphics, and increasing difficulty, making it both fun and challenging. It’s a great project to explore game development fundamentals like game loops, collision detection, and event handling, while turning Python code into an interactive experience. Perfect for learning, experimenting, and enjoying a nostalgic classic!.",
            technologies: "Python in Pygame",
            websiteURL: "/",
            codeURL: "https://github.com/Paulinzz/expotec",
        },
        {
            title: "Weather API project ",
            subtitle: "In Development",
            srcImg: "src/assets/images/loading.png",
            description: "This project is built with Django REST Framework and integrates data from the OpenWeatherMap API to deliver real-time weather information. It provides clean and structured endpoints that allow users to access current weather conditions, forecasts, and other climate data in a developer-friendly way. The goal is to combine the power of Django REST with external APIs to create a scalable, easy-to-use backend service that can serve as the foundation for weather dashboards, mobile apps, or IoT integrations.",
            technologies: "Technologies: Python, Django REST Framework, OpenWeatherMap API",
            websiteURL: "https://adrianasaty.github.io/ironhack-project1-craze-maze/index.html",
            codeURL: "https://github.com/AdrianaSaty/ironhack-project1-craze-maze",
        },

    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid item md={6} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection