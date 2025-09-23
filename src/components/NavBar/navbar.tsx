import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { styled } from '@mui/material';
import theme from '../../theme';

export const StyledNavLink = styled("a")(() => ({
    textDecoration: "none",
    color: "inherit",
    padding: "5px 10px",
    transition: "all 0.3s ease", // aqui entra a animação
    "&:hover": {
        backgroundColor: theme.palette.secondary.light,
        borderRadius: "5px",
        transform: "scale(1.1)", // efeito de zoom suave
        color: theme.palette.primary.contrastText, // opcional: muda a cor do texto
    }
}));

export const StyledMobileToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "flex",
        justifyContent: "space-between", // logo + menu
        alignItems: "center"
    },
    [theme.breakpoints.up('md')]: {
        display: "none",
    },
}));

export const StyledDesktopToolbar = styled(Toolbar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
        display: "none",
    },
    [theme.breakpoints.up('md')]: {
        display: "flex",
        justifyContent: "space-between", // logo na esquerda, links na direita
        alignItems: "center",
    },
}));

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSmoothScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            handleClose();
        }
    };

    {{/* Mobile */}}

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="absolute">
                <StyledMobileToolbar>
                    <Box sx={{ fontWeight: "bold", fontSize: "1.2rem" }}>
                        <img src="/home/paulinzz/Documents/my-portfolio/src/assets/logo/logo.png" alt='logo' style={{height:"40px", paddingTop:"10px"}}/>
                    </Box>

                    <IconButton
                        size="large"
                        aria-label="menu"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>About</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Skills</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projects</StyledNavLink>
                        </MenuItem>
                    </Menu>
                </StyledMobileToolbar>

                {/* Desktop */}
                <StyledDesktopToolbar>
                    <Box sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                        <img src="src/assets/logo/logo.png" alt='logo' style={{height:"50px"}}/>
                    </Box>

                    <Box display="flex" gap={3} mr={3}>
                        <MenuItem onClick={() => handleSmoothScroll("about")}>
                            <StyledNavLink>About</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("skills")}>
                            <StyledNavLink>Skills</StyledNavLink>
                        </MenuItem>
                        <MenuItem onClick={() => handleSmoothScroll("projects")}>
                            <StyledNavLink>Projects</StyledNavLink>
                        </MenuItem>
                    </Box>
                </StyledDesktopToolbar>
            </AppBar>
        </Box>
    );
}
