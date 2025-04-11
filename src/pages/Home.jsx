import Header from '../components/Header';
import { Box, Typography, Button, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { routePath } from '../routes/route';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';
import ResumeReferencePage from './ResumeReferencePage';
import ResumeBuilder from '../components/ResumeBuilder';



import { Link } from 'react-router-dom';
// import amazonlogo from '../assets/images/Amazon logo.jpg';
// import atlassianLogo from '../assets/images/Atlassian-Logo.png';
// import logo3 from '../assets/images/logo3.png';


const Component = styled(Box)({
    top: '60px',
    position: 'relative', // Ensure proper positioning for pseudo-element
    display: 'flex',
    height: '100vh',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    margin: '0 0 px',
    // backgroundImage: `url(${landingPageImage})`,
    backgroundColor: '#0065ff',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        // background: 'rgba(0, 0, 0, 0)', // Adjust the opacity as needed
    },
    '& > div': {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column', // Align items vertically
        textAlign: 'center', // Center text
        '& > div > p': {
            fontSize: 75,
            lineHeight: 1.25,
            letterSpacing: -1,
            color: '#fff', // Text color
            marginBottom: 20, // Add space between text and button

        },
        // '& > div > img': {
        //     height: 400,
        //     with: 400,


        // },
        '& > div > button': {
            width: 250,
            height: 60,
            background: '#fff',
            color: '#000',
            textTransform: 'none',
            fontSize: 20,
            fontWeight: 700,
            borderRadius: 40,
            marginTop: 150,
            margin: 80,

            transition: 'transform 1.5s',
            '&:hover': {
                // transform: 'rotateX(720deg)',
                backgroundColor: '#fff',
            },
        }
    }
})



const companyLogos = [
    { src: "/assets/images/Amazon logo.jpg", alt: "Amazon" },
    { src: "/assets/images/Atlassian-Logo.png", alt: "Atlassian" },
    { src: "/assets/images/Google-Logo.png", alt: "Google" },
    { src: "/assets/images/accenturelogo.png", alt: "Accenture" },
    { src: "/assets/images/Apple-logo-1.jpg", alt: "Apple" },
    { src: "/assets/images/Meta-Logo.png", alt: "Meta" },
    { src: "/assets/images/Microsoft Logo.webp", alt: "Microsoft" },
    { src: "/assets/images/netflix-logo.jpg", alt: "Netflix" },
    { src: "/assets/images/Tesla-Logo.png", alt: "Tesla" },
];


const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Header />
            <Component>
                <Box>
                    <Box>
                        {/* <video style={{height: 200, width: 200, marginTop: 50, backgroundColor: 'dodgerblue'}} src='C:\Users\arbaa\OneDrive\Documents\Indeed-cln\indeed-clone\client\src\components\logo_animation.mp4'></video> */}
                        {/* <Typography>Let's make your dream come true<br />get hired. Fast.</Typography> */}
                        {/* <Typography sx={{ fontSize: 28, fontWeight: 500, textAlign: 'center', mt: 4 }}>
                            Let's make your dream come true<br />
                            get <span style={{ color: '#1976d2', fontWeight: 700, textDecoration: 'underline' }}>hired</span>. Fast.
                        </Typography> */}




                        <Typography sx={{ fontSize: 28, fontWeight: 500, textAlign: 'center', mt: 4, perspective: 1000 }}>
                            Let's make your dream come true<br />
                            get{' '}
                            <span style={{
                                display: 'inline-block',
                                background: 'linear-gradient(90deg, #00C9FF, #92FE9D)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 800,
                                textDecoration: 'underline',
                                transition: 'transform 1.5s',
                                transformStyle: 'preserve-3d',
                                cursor: 'pointer',

                            }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'rotateX(720deg)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'rotateX(0deg)'}
                            >
                                hired
                            </span>
                            . Fast.
                        </Typography>



                        <Button
                            variant="contained"
                            onClick={() => navigate(routePath.posts)}
                        >Find jobs</Button>
                        <Button
                            variant="contained"
                            onClick={() => navigate(routePath.create)}
                        >Post jobs</Button>
                        {/* <Button
                            component={Link}
                            to="/resumes"
                            variant="contained"
                            sx={{ mt: 4, borderRadius: 3, textTransform: 'none' }}
                        >
                            Explore Resume References
                        </Button> */}
                    </Box>
                </Box>
            </Component>



            {/* <Marquee pauseOnHover gradient={false} speed={50}>
                <img src='/assets/images/Amazon logo.jpg' style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/Atlassian-Logo.png" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/Google-Logo.png" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/accenturelogo.png" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/Apple-logo-1.jpg" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/Meta-Logo.png" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/Microsoft Logo.webp" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/netflix-logo.jpg" style={{ height: 60, margin: '0 40px' }} />
                <img src="assets/images/Tesla-Logo.png" style={{ height: 60, margin: '0 40px' }} />
            </Marquee> */}


            <Box
                sx={{
                    py: { xs: 14, sm: 20, md: 26 }, // Increased vertical padding
                    px: { xs: 2, sm: 6, md: 12 },
                    minHeight: { xs: '50vh', md: '60vh' }, // Ensures tall section
                    backgroundColor: '#0a0a0a',
                    textAlign: 'center',
                    color: '#fff',
                    position: 'relative',
                    overflowX: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        mb: 10,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        letterSpacing: 1.2,
                        lineHeight: 1.4,
                        background: 'linear-gradient(90deg, #06beb6, #48b1bf)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}
                >
                    Trusted by the world's top companies
                </Typography>

                <Marquee
                    pauseOnHover
                    gradient={false}
                    speed={50}
                    delay={0}
                    direction="left"
                    style={{
                        overflow: 'visible', // ✅ Allow logos to enter/exit off-screen
                        width: '100vw',       // ✅ Take full screen width for natural scrolling
                        marginTop: '100px'
                    }}
                >
                    {companyLogos.map((company, index) => (
                        <Box
                            key={index}
                            sx={{
                                mx: { xs: 3, sm: 6 },
                                px: { xs: 3, sm: 5 },
                                py: { xs: 2, sm: 3 },
                                minWidth: 'fit-content',
                                height: 100,
                                borderRadius: '20px',
                                background: '#fff',
                                border: '1px solid rgba(255, 255, 255, 0.06)',
                                boxShadow: '0 6px 30px rgba(0, 255, 255, 0.06)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                                // '&:hover': {
                                //     transform: 'scale(1.08)',
                                //     boxShadow: '0 14px 35px rgba(8, 68, 172, 0.2)',
                                // },
                                // boxShadow: '0 0 25px rgba(0, 174, 255, 0.6), 0 0 50px rgba(0, 174, 255, 0.3)',
                                '&:hover': {
                                    transform: 'scale(1.08)',
                                    boxShadow: '0 0 35px rgba(0, 174, 255, 0.9), 0 0 70px rgba(0, 174, 255, 0.5)',
                                },
                            }}
                        >
                            <img
                                src={company.src}
                                alt={company.alt}
                                style={{
                                    height: 75,
                                    maxWidth: '100%',
                                    objectFit: 'contain',
                                    filter: 'brightness(1.1) contrast(1.05)',
                                    transition: 'filter 0.3s ease',
                                }}
                            />
                        </Box>
                    ))}
                </Marquee>
            </Box>










            <Box
                sx={{
                    py: 10,
                    px: { xs: 3, md: 10 },
                    background: 'linear-gradient(135deg, #f0f4ff 0%, #ffffff 100%)',
                    textAlign: 'center',
                    marginTop: 20,
                }}
            >
                {/* Gradient Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        mb: 4,
                        background: 'linear-gradient(to right, #4facfe, #00f2fe)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontSize: { xs: '2rem', md: '3rem' },
                    }}
                >
                    About Us
                </Typography>

                {/* Subheading */}
                <Typography
                    variant="h6"
                    sx={{
                        mb: 3,
                        color: '#333',
                        fontWeight: 500,
                        fontSize: { xs: '1rem', md: '1.25rem' },
                        maxWidth: 800,
                        mx: 'auto',
                    }}
                >
                    We are more than just a job platform — we are the bridge between dreams and careers.
                </Typography>

                {/* Main Body Text */}
                <Typography
                    variant="body1"
                    sx={{
                        color: '#555',
                        fontSize: { xs: '0.95rem', md: '1.1rem' },
                        lineHeight: 1.8,
                        maxWidth: 900,
                        mx: 'auto',
                        px: { xs: 2, sm: 5 },
                    }}
                >
                    At <strong>Recruit+</strong>, we believe everyone deserves a chance to shine.
                    Our platform is built with passion and purpose — connecting talent with the right opportunities through a seamless and intuitive experience.
                    Whether you're a job seeker or an employer, we're here to support your journey every step of the way.
                </Typography>

                {/* Quote or Highlight */}
                <Typography
                    variant="subtitle1"
                    sx={{
                        mt: 4,
                        fontStyle: 'italic',
                        color: '#888',
                    }}
                >
                    “Opportunities don’t just happen — we help create them.”
                </Typography>
            </Box>







            <FAQSection />
            <Footer />


        </>
    )
}


export default Home;
