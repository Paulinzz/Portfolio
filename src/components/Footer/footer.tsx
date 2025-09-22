import { IconButton, Box, Container, Typography, styled } from "@mui/material"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const AnimatedIconButton = styled(IconButton)(() => ({
    transition: "all 0.3s ease",
    color: "#555", 
    "&:hover": {
        transform: "scale(1.2) rotate(10deg)",
        color: "#4169E1", 
    }
}));

const Footer: React.FC = () => {
    return (
        <Box pt={2} pb={2}>
            <Container maxWidth="sm">
                <Box display="flex" alignItems="center" justifyContent="space-around" pb={1}>
                    <AnimatedIconButton onClick={() => window.open("https://github.com/Paulinzz")}>
                        <GitHubIcon />
                    </AnimatedIconButton>
                    <AnimatedIconButton onClick={() => window.open("https://www.linkedin.com/in/paulofernandesalves/")}>
                        <LinkedInIcon />
                    </AnimatedIconButton>
                    <AnimatedIconButton href="mailto:paulofernandesalves30@gmail.com" target="_blank">
                        <EmailIcon />
                    </AnimatedIconButton>
                </Box>
                <Typography textAlign="center">
                    © 2025 João Paulo - All rights reserved
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer
