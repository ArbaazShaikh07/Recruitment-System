import React, { useState, useEffect } from 'react';
import { Box, InputBase, Button, styled, Card, CardContent, Typography } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import Header from '../components/Header';
 
// Simulated getAllPosts function
const getAllPosts = async () => {
    // Simulated delay to mimic API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    

    const dummyData = [
        {
            id: 1,
            company: 'Google',
            profile: 'Software Engineer',
            jobCategory: 'Software Maintainance',
            postingDate: '02/13/2024, 05:12 PM',
            location: '6TH & 7TH FLRS,WINGA & 6TH 7TH,8TH, & 9TH FLRS, WING B,PARADIGM TOWERS, , MINDSPACE L.RD,MALAD(W), Mumbai, IN-MH, 400064, IN',
            jodSchedule: 'Full-time',
            jobSummary: 'A job summary for a Software Engineer typically outlines the key responsibilities, qualifications, and skills required for the role.',
            responsibilities: 'Develop, test, and maintain high-quality software solutions.Collaborate with product managers and other stakeholders to understand requirements and translate them into technical specifications.Design and implement software features, modules, and components. Write clean, efficient, and well-documented code. Troubleshoot and debug issues to ensure optimal performance and reliability. Stay up-to-date with emerging technologies and best practices in software development.',
            qualificationsSkills: "Bachelor's degree in Computer Science, Engineering, or related field.Proven experience as a Software Engineer or similar role.Strong proficiency in programming languages such as Java, C++, Python, or JavaScript. Experience with software development methodologies (e.g., Agile, Scrum). ",
            type: 'On-site',
            salary: '70,000',
            experience: '1-3 years',
            technology: 'React, Node.js',
            date: '2024-02-10T00:00:00'
        },
        {
            id: 2,
            company: 'Meta',
            profile: 'Data Scientist',
            jobCategory: 'Data handling',
            type: 'Hybrid',
            salary: '90,000',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatadipiscing ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            experience: '5 years',
            technology: 'Python, TensorFlow',
            date: '2024-02-08T00:00:00'
        },
        {
            id: 3,
            company: 'Microsoft',
            profile: 'Product Designer',
            jobCategory: 'User Interaction',
            type: 'Remote',
            salary: '1,00,000',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            experience: '1-2 years',
            technology: 'Figma, Prototyping, Wireframing',
            date: '2024-02-08T00:00:00'
        },
        {
            id: 4,
            company: 'Cred',
            profile: 'UI/UX Designer',
            jobCategory: 'User Experience',
            type: 'Hybrid',
            salary: '75,000',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            experience: '0-1 years',
            technology: 'Figma, Prototyping, Wireframing',
            date: '2024-02-08T00:00:00'
        },
        {
            id: 5,
            company: 'Discord',
            profile: 'Product Manager',
            jobCategory: 'Product Analysis',
            type: 'On-site',
            salary: '1,20,000',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            experience: '3 years',
            technology: 'Product Designing, Brand Management, Data Analysis',
            date: '2024-02-08T00:00:00'
        },
        {
            id: 6,
            company: 'LinkedIn',
            profile: 'Associate Product Manager',
            jobCategory: 'Market Research',
            type: 'Hybrid',
            salary: '1,10,000',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            experience: '2 years',
            technology: 'Product Designing, Brand Management, Data Analysis',
            date: '2024-02-08T00:00:00'
        },
        {
            id: 7,
            company: 'Apple',
            profile: 'iOS Developer',
            jobCategory: 'Application Development',
            type: 'Remote',
            salary: '85,000',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            experience: '2 years',
            technology: 'SwiftUI, UiKit, Core Data',
            date: '2024-02-08T00:00:00'
        },
        
    ];

    return { data: dummyData };
};

const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 65,
    background: '#0065ff', 
});

const ContentContainer = styled(Box)({
    display: 'flex',
    width: '90%',
});

const LeftContainer = styled(Box)({
    flex: 1,
    marginTop: '40px',
    width: '100px',
});

// const RightContainer = styled(Box)({
//     flex: 2,
//     marginLeft: '2%',
//     marginTop: '40px',
// });

const RightContainer = styled(Box)({
    flex: 2,
    marginLeft: '2%',
    marginTop: '40px',
    overflowY: 'auto', 
});


const TopBar = styled(Box)({
    width: '100%',
    marginBottom: '40px',
    display: 'flex',
    justifyContent: 'center',
});

const SearchBox = styled(Box)({
    width: '500px',
    height: '60px',
    border: '1px solid #767676',
    backgroundColor: '#fff',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    marginTop: '30px',
    
});

const Input = styled(InputBase)({
    width: '85%',
    margin: '0 20px',
});

const FindButton = styled(Button)({
    background: 'dodgerblue',
    color: 'white',
    textTransform: 'none',
    height: '35px',
    borderRadius: '10px',
    width: '80px',
    marginLeft: '10px', // Added margin to separate button from input
    marginRight: '10px',
});

const PostCard = styled(Card)({
    marginBottom: '10px',
    cursor: 'pointer',
});

const ScrollableCardContent = styled(CardContent)({
    maxHeight: '400px', // Set a maximum height
    overflowY: 'auto', // Enable vertical scrolling
});



const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const getData = async () => {
            const response = await getAllPosts();
            setPosts(response.data);
        };
        getData();
    }, []);

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        // Handle search functionality here
        console.log('Searching for:', searchTerm);
    };

    const filteredPosts = posts.filter(post =>
        post.profile.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Header />
            <Container>
                <TopBar>
                    <SearchBox>
                        <Input 
                            placeholder='Search job title'
                            value={searchTerm}
                            onChange={handleSearchChange}
                        />
                        <FindButton onClick={handleSearch}>Search</FindButton>
                    </SearchBox>
                </TopBar>
                <ContentContainer>
                    <LeftContainer>
                        {filteredPosts.map(post => (
                            <PostCard key={post.id} onClick={() => handlePostClick(post)}>
                                <CardContent>
                                    <Typography variant="h5">{post.profile}</Typography>
                                    <Typography variant='h6'>{post.company}</Typography>
                                    <Typography>{post.type}</Typography>
                                    <Typography>Salary: {post.salary}</Typography>
                                </CardContent>
                            </PostCard>
                        ))}
                    </LeftContainer>
                    <RightContainer>
                        {selectedPost && (
                            <PostCard>
                                <ScrollableCardContent>
                                    <Typography variant="h4" style={{textAlign: 'center'}}>{selectedPost.company}</Typography>
                                    <Typography variant="h5" style={{textAlign: 'center'}}>{selectedPost.profile}</Typography>
                                    <button style={{height: 50, width: 100, backgroundColor: 'dodgerblue',border: 2, borderRadius: 10,  margin: 'auto', display: 'block'}}>Apply Now</button>
                                    <Typography>Job Id: {selectedPost.id}</Typography>
                                    <Typography>Job category: {selectedPost.jobCategory}</Typography>
                                    <Typography>Posting Date: {selectedPost.postingDate}</Typography>
                                    <Typography>Location: {selectedPost.location}</Typography> 
                                    <Typography>Schedule: {selectedPost.jodSchedule}</Typography>
                                    <Typography style={{textAlign: 'center'}}>JOB DESCRIPTION</Typography>
                                    <Typography style={{fontWeight: 'bold'}}>Job Summary: </Typography>
                                    <Typography>{selectedPost.jobSummary}</Typography>
                                    <Typography>Job Responsibilities: {selectedPost.responsibilities}</Typography>
                                    <Typography>Qualification and Skills: {selectedPost.qualificationsSkills}</Typography>
                                    {/* <Typography>Salary: {selectedPost.salary}</Typography>
                                    <Typography>Description: {selectedPost.description}</Typography>
                                    <Typography>Experience: {selectedPost.experience}</Typography> */}
                                    <Typography>Technology: {selectedPost.technology}</Typography>
                                    <Typography>Posted on: {new Date(selectedPost.date).toLocaleDateString()}</Typography>
                                </ScrollableCardContent>
                            </PostCard>
                        )}
                        
                    </RightContainer>
                </ContentContainer>
            </Container>
        </>
    )
}

export default AllPosts;
