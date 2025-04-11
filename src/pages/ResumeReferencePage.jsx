


import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
    Box,
    TextField,
    Typography,
    Grid,
    Card,
    CardContent,
    Chip,
    Button,
    Stack,
    Divider,
} from '@mui/material';






const sampleResumes = [
    {
        id: 1,
        name: 'Ayesha Verma',
        role: 'UX Designer',
        industry: 'Tech',
        experience: 'Mid-Level',
        skills: ['Figma', 'User Research', 'Prototyping'],
        fileUrl: '/resumes/ayesha-verma.pdf'
    },
    {
        id: 2,
        name: 'Rahul Mehta',
        role: 'Data Analyst',
        industry: 'Finance',
        experience: 'Entry-Level',
        skills: ['Excel', 'Python', 'SQL'],
        fileUrl: '/resumes/rahul-mehta.pdf'
    },
    {
        id: 3,
        name: 'Sneha Kapoor',
        role: 'Product Manager',
        industry: 'E-commerce',
        experience: 'Senior-Level',
        skills: ['Jira', 'Strategy', 'Agile'],
        fileUrl: '/resumes/sneha-kapoor.pdf'
    },
    {
        id: 4,
        name: 'Arjun Nair',
        role: 'Frontend Developer',
        industry: 'Tech',
        experience: 'Entry-Level',
        skills: ['React', 'JavaScript', 'HTML/CSS'],
        fileUrl: '/resumes/arjun-nair.pdf'
    },
    {
        id: 5,
        name: 'Divya Shah',
        role: 'HR Specialist',
        industry: 'Healthcare',
        experience: 'Mid-Level',
        skills: ['Recruitment', 'Onboarding', 'People Management'],
        fileUrl: '/resumes/divya-shah.pdf'
    },
    {
        id: 6,
        name: 'Mohit Jain',
        role: 'Software Engineer',
        industry: 'Tech',
        experience: 'Senior-Level',
        skills: ['Java', 'Spring Boot', 'System Design'],
        fileUrl: '/resumes/mohit-jain.pdf'
    },
    {
        id: 7,
        name: 'Sara Khan',
        role: 'Marketing Manager',
        industry: 'Retail',
        experience: 'Mid-Level',
        skills: ['SEO', 'Content Strategy', 'Email Campaigns'],
        fileUrl: '/resumes/sara-khan.pdf'
    },
    {
        id: 8,
        name: 'Kunal Sinha',
        role: 'Cloud Engineer',
        industry: 'Tech',
        experience: 'Senior-Level',
        skills: ['AWS', 'Docker', 'Kubernetes'],
        fileUrl: '/resumes/kunal-sinha.pdf'
    },
    {
        id: 9,
        name: 'Neha Joshi',
        role: 'Graphic Designer',
        industry: 'Media',
        experience: 'Entry-Level',
        skills: ['Illustrator', 'Photoshop', 'InDesign'],
        fileUrl: '/resumes/neha-joshi.pdf'
    },
    {
        id: 10,
        name: 'Rohit Bansal',
        role: 'Business Analyst',
        industry: 'Consulting',
        experience: 'Mid-Level',
        skills: ['Power BI', 'Data Modeling', 'Stakeholder Management'],
        fileUrl: '/resumes/rohit-bansal.pdf'
    },
    {
        id: 11,
        name: 'Tanya Desai',
        role: 'Cybersecurity Analyst',
        industry: 'Banking',
        experience: 'Senior-Level',
        skills: ['Penetration Testing', 'SIEM', 'Incident Response'],
        fileUrl: '/resumes/tanya-desai.pdf'
    },
    {
        id: 12,
        name: 'Nikhil Reddy',
        role: 'Machine Learning Engineer',
        industry: 'Tech',
        experience: 'Mid-Level',
        skills: ['TensorFlow', 'Scikit-learn', 'Deep Learning'],
        fileUrl: '/resumes/nikhil-reddy.pdf'
    },
    {
        id: 13,
        name: 'Aarti Singh',
        role: 'Technical Writer',
        industry: 'SaaS',
        experience: 'Entry-Level',
        skills: ['Documentation', 'Markdown', 'APIs'],
        fileUrl: '/resumes/aarti-singh.pdf'
    },
    {
        id: 14,
        name: 'Rajeev Kumar',
        role: 'QA Tester',
        industry: 'Telecom',
        experience: 'Mid-Level',
        skills: ['Selenium', 'Postman', 'Bug Tracking'],
        fileUrl: '/resumes/rajeev-kumar.pdf'
    },
    {
        id: 15,
        name: 'Meera Chopra',
        role: 'Operations Manager',
        industry: 'Logistics',
        experience: 'Senior-Level',
        skills: ['Supply Chain', 'Team Leadership', 'Process Optimization'],
        fileUrl: '/resumes/meera-chopra.pdf'
    },
    {
        id: 16,
        name: 'Karan Patel',
        role: 'Backend Developer',
        industry: 'Tech',
        experience: 'Entry-Level',
        skills: ['Node.js', 'Express', 'MongoDB'],
        fileUrl: '/resumes/karan-patel.pdf'
    },
    {
        id: 17,
        name: 'Shivani Rao',
        role: 'Legal Advisor',
        industry: 'Corporate',
        experience: 'Senior-Level',
        skills: ['Contract Law', 'Compliance', 'Litigation'],
        fileUrl: '/resumes/shivani-rao.pdf'
    },
    {
        id: 18,
        name: 'Abhay Malhotra',
        role: 'DevOps Engineer',
        industry: 'Tech',
        experience: 'Mid-Level',
        skills: ['CI/CD', 'Terraform', 'Monitoring'],
        fileUrl: '/resumes/abhay-malhotra.pdf'
    }
];






const ResumeReferencePage = () => {
    const [search, setSearch] = useState('');

    const filteredResumes = sampleResumes.filter(
        (resume) =>
            resume.name.toLowerCase().includes(search.toLowerCase()) ||
            resume.role.toLowerCase().includes(search.toLowerCase()) ||
            resume.industry.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Box sx={{ background: '#f4f9fd', minHeight: '100vh', pb: 10 }}>
            {/* Header with Aqua Fresh Gradient */}
            <Box
                sx={{
                    py: 8,
                    textAlign: 'center',
                    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                    color: '#fff',
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                }}
            >
                <Typography variant="h3" fontWeight={700} mb={1}>
                    💼 Resume Reference Hub
                </Typography>
                <Typography variant="h6" fontWeight={400} color="rgba(255,255,255,0.9)">
                    Explore high-quality resumes from professionals like you.
                </Typography>
            </Box>

            {/* Search Bar */}
            <Box maxWidth="600px" mx="auto" mt={-4} mb={6} px={2}>
                <TextField
                    fullWidth
                    variant="outlined"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search by name, role, or industry"
                    InputProps={{
                        startAdornment: (
                            <SearchIcon sx={{ color: '#0072ff', mr: 1, ml: 1 }} />
                        ),
                        sx: {
                            background: 'rgba(255, 255, 255, 0.6)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '30px',
                            paddingLeft: 1.5,
                            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.05), 0 4px 10px rgba(0,0,0,0.1)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.07), 0 6px 12px rgba(0,0,0,0.12)',
                            },
                            '&.Mui-focused': {
                                borderColor: '#00c6ff',
                            },
                        },
                    }}
                    sx={{
                        input: {
                            padding: '14px 16px',
                            fontSize: '16px',
                        },
                    }}
                />
            </Box>

            {/* Resume Cards */}
            <Grid container spacing={4} px={{ xs: 3, sm: 10 }}>
                {filteredResumes.map((resume) => (
                    <Grid item xs={12} sm={6} md={4} key={resume.id}>
                        <Card
                            sx={{
                                borderRadius: 4,
                                boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                                transition: 'transform 0.3s ease',
                                backgroundColor: '#ffffff',
                                '&:hover': {
                                    transform: 'translateY(-6px)',
                                },
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" fontWeight={700} gutterBottom>
                                    {resume.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {resume.role} • {resume.industry} • {resume.experience}
                                </Typography>

                                <Divider sx={{ my: 2 }} />

                                <Stack direction="row" spacing={1} flexWrap="wrap">
                                    {resume.skills.map((skill, index) => (
                                        <Chip
                                            key={index}
                                            label={skill}
                                            size="small"
                                            sx={{
                                                bgcolor: '#e3f2fd',
                                                color: '#0d47a1',
                                                fontWeight: 500,
                                            }}
                                        />
                                    ))}
                                </Stack>

                                <Button
                                    href={resume.fileUrl}
                                    target="_blank"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        mt: 3,
                                        borderRadius: 3,
                                        fontWeight: 600,
                                        background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                        color: '#fff',
                                        textTransform: 'none',
                                        '&:hover': {
                                            background: 'linear-gradient(to right, #00b2e3, #005ecb)',
                                        },
                                    }}
                                >
                                    View Resume
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* Empty state */}
            {filteredResumes.length === 0 && (
                <Typography
                    variant="body1"
                    textAlign="center"
                    color="text.secondary"
                    mt={8}
                >
                    😕 No resumes match your search.
                </Typography>
            )}
        </Box>
    );
};

export default ResumeReferencePage;