
import React from 'react';
import { AppBar, Toolbar, Button, Menu, MenuItem, IconButton, Typography } from '@mui/material';
import { routePath } from "../routes/route";
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import { styled } from '@mui/system';
import PersonIcon from '@mui/icons-material/Person';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import WorkIcon from '@mui/icons-material/Work';
import ToggleOff from '@mui/icons-material/ToggleOff';
import ResumeReferencePage from '../pages/ResumeReferencePage';
import ResumeBuilder from '../components/ResumeBuilder';


const StyledAppBar = styled(AppBar)({
    background: '#fff',
    height: 64,
    color: '#0d1717',
    backgroundColor: '#fff',
    '& > div > *': {
        marginRight: 20,
        fontSize: 20,
        color: 'inherit',
        textDecoration: 'none',
    }
});

const ProfileButton = styled(IconButton)({
    transition: 'transform 0.3s',
    '&:hover': {
        transform: 'scale(1.2)',
    },
});

const MenuContainer = styled(Menu)({
    '& .MuiPaper-root': {
        borderRadius: 8,
        marginTop: 8,
        minWidth: 200,
    },
});

const MenuItemStyled = styled(MenuItem)({
    '& .MuiTypography-root': {
        paddingLeft: 12,
    },
});

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate(); // Access the navigate function from react-router-dom

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfileClick = () => {
        navigate(routePath.profile);
        handleMenuClose();
    };

    const handleSettingsClick = () => {
        navigate(routePath.myjobs);
        handleMenuClose();
    };

    const handleLogoutClick = () => {
        navigate(routePath.login);
        handleMenuClose();
    };

    const logo = "C:\Users\arbaa\OneDrive\Documents\Indeed-cln\indeed-clone\client\src\components\Recruit+-final-logo.png";


    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routePath.home} className="logo-link">
                    <img
                        src="/Recruit+-final-logo.png"
                        className="logo-image"
                    />
                </Link>
                <Link to={routePath.create} style={{ marginLeft: 60 }}>Post a job</Link>
                <Link to={routePath.posts} style={{ marginLeft: 60 }}>Find jobs</Link>
                <Link to={"/resumes"} style={{ marginLeft: 60 }}>ResumeReferencePage</Link>
                <Link to={"/resume-builder"} style={{ marginLeft: 60 }}>Resume Builder</Link>



                <style jsx>{`
        .header {
          display: flex;
          align-items: center;
          padding: 12px 24px;
          background-color: #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .logo-link {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-image {
          width: 95px;
          margin-bottom: 4px;
        }

        .logo-text {
          font-size: 20px;
          font-weight: 600;
          margin-left: 10px;
          color: #1a1a1a;
        }
      `}</style>



                <div style={{ flexGrow: 1 }} /> {/* Add flexGrow to push IconButton to the right */}
                <ProfileButton color="inherit" onClick={handleMenuOpen}>
                    <PersonIcon />
                </ProfileButton>
                <MenuContainer
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItemStyled onClick={handleProfileClick}>
                        <PersonIcon /><Typography variant="body1">Profile</Typography>
                    </MenuItemStyled>
                    <MenuItemStyled onClick={handleProfileClick}>
                        <ReceiptLong /><Typography variant="body1">Portfolio</Typography>
                    </MenuItemStyled>
                    <MenuItemStyled onClick={handleSettingsClick}>
                        <WorkIcon /><Typography variant="body1">My jobs</Typography>
                    </MenuItemStyled>
                    <MenuItemStyled onClick={handleLogoutClick}>
                        <ToggleOff /><Typography variant="body1">Logout</Typography>
                    </MenuItemStyled>
                </MenuContainer>
            </Toolbar>
        </StyledAppBar>
    );
};

export default Header;
