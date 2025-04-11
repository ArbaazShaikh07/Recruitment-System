import React from 'react';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
    useTheme
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    {
        question: 'How can I find jobs?',
        answer: 'Click on the "Find Jobs" button and explore openings tailored to your profile.',
    },
    {
        question: 'How do I post a job?',
        answer: 'Simply click the "Post Jobs" button, fill in the details, and your job will be live!',
    },
    {
        question: 'Is using this platform free?',
        answer: 'Yes, our platform is 100% free for both job seekers and recruiters.',
    },
    {
        question: 'Can I apply to multiple jobs?',
        answer: 'Absolutely! You can apply to as many jobs as you like.',
    },
];

const FAQSection = () => {
    const theme = useTheme();

    return (
        <Box sx={{
            width: '90%',
            maxWidth: 800,
            mx: 'auto',
            my: 10,
            px: { xs: 2, sm: 4 },
        }}>
            <Typography
                variant="h4"
                align="center"
                gutterBottom
                fontWeight={700}
                sx={{
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    mb: 4,
                }}
            >
                Frequently Asked Questions
            </Typography>

            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    sx={{
                        mb: 2,
                        borderRadius: 3,
                        boxShadow: 3,
                        transition: '0.3s',
                        '&:hover': {
                            boxShadow: 6,
                        },
                        '&.Mui-expanded': {
                            backgroundColor: theme.palette.action.hover,
                        },
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography fontWeight={600} fontSize={18}>
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography color="text.secondary">{faq.answer}</Typography>
                    </AccordionDetails>
                </Accordion>
            ))}
        </Box>
    );
};

export default FAQSection;
