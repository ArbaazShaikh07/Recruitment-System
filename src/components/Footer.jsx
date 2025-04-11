import React from 'react';
import { Box, Typography, IconButton, Grid, Link } from '@mui/material';
import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';

const Footer = () => {
    return (

        <Box
            sx={{
                bgcolor: '#0f172a', // slate-900 / dark navy
                color: '#fff',
                py: 6,
                px: { xs: 3, sm: 10 },
                mt: 10,
            }}
        >
            <Grid container spacing={4}>
                {/* Brand Section */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Recruit+
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'gray' }}>
                        Making job dreams a reality — fast.
                    </Typography>
                </Grid>

                {/* Quick Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Quick Links
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link href="#" underline="hover" color="inherit">Find Jobs</Link>
                        <Link href="#" underline="hover" color="inherit">Post a Job</Link>
                        <Link href="#" underline="hover" color="inherit">FAQs</Link>
                        <Link href="#" underline="hover" color="inherit">Contact</Link>
                    </Box>
                </Grid>

                {/* Social Links */}
                <Grid item xs={12} sm={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Follow Us
                    </Typography>
                    <Box>
                        <IconButton href="#" sx={{ color: '#fff' }}>
                            <Facebook />
                        </IconButton>
                        <IconButton href="#" sx={{ color: '#fff' }}>
                            <Twitter />
                        </IconButton>
                        <IconButton href="#" sx={{ color: '#fff' }}>
                            <Instagram />
                        </IconButton>
                        <IconButton href="#" sx={{ color: '#fff' }}>
                            <LinkedIn />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Bottom Text */}
            <Box mt={5} textAlign="center">
                <Typography variant="body2" color="gray">
                    © {new Date().getFullYear()} Recruit+. All rights reserved.
                </Typography>
            </Box>
        </Box>





    );
};

export default Footer;
