import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const ProfilePage = () => {
    // Sample user data (replace with actual data from your application)
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: '+1234567890',
        resumeLink: 'https://example.com/resume.pdf',
        education: [
            { institution: 'University of XYZ', degree: 'Bachelor of Science', fieldOfStudy: 'Computer Science', year: '2015-2019' },
            // Add more education entries as needed
        ],
        workExperience: [
            { company: 'ABC Corporation', position: 'Software Engineer', duration: '2019-present' },
            // Add more work experience entries as needed
        ],
        skills: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
        languageProficiency: ['English (Fluent)', 'Spanish (Intermediate)'],
        location: 'City, Country',
        profilePicture: null, // Changed to null to store the image file
        portfolio: '',
        certifications: [],
        references: [],
        salaryMin: '',
        salaryMax: '',
        availability: '',
        workAuthorization: '',
        preferredIndustryRole: ''
    });

    const handleInputChange = (e, key) => {
        const { value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            [key]: value
        }));
    };

    const handleSkillsChange = (e) => {
        const { value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            skills: value.split(',').map(skill => skill.trim())
        }));
    };

    const handleLanguageProficiencyChange = (e) => {
        const { value } = e.target;
        setUserData(prevUserData => ({
            ...prevUserData,
            languageProficiency: value.split(',').map(language => language.trim())
        }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0]; // Assuming only one file is selected
        setUserData(prevUserData => ({
            ...prevUserData,
            profilePicture: file
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit updated user data
        console.log("Updated user data:", userData);
    };

    return (
        <div style={styles.card}>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1 style={styles.heading}>Profile</h1>
                    <div>
                        <h2 style={styles.subHeading}>Basic Information</h2>
                        <p><strong>Name:</strong> <input type="text" value={userData.name} onChange={(e) => handleInputChange(e, 'name')} style={styles.input} required /></p>
                        <p><strong>Email:</strong> <input type="email" value={userData.email} onChange={(e) => handleInputChange(e, 'email')} style={styles.input} required /></p>
                        <p><strong>Phone Number:</strong> <input type="tel" value={userData.phoneNumber} onChange={(e) => handleInputChange(e, 'phoneNumber')} style={styles.input} required /></p>
                    </div>
                    <div>
                        <h2 style={styles.subHeading}>Resume</h2>
                        <p><strong>Resume Link:</strong> <input type="text" value={userData.resumeLink} onChange={(e) => handleInputChange(e, 'resumeLink')} style={styles.input} required /></p>
                    </div>
                    <div>
                        <h2 style={styles.subHeading}>Education</h2>
                        {userData.education.map((edu, index) => (
                            <div key={index}>
                                <p><strong>Institution:</strong> <input type="text" value={edu.institution} onChange={(e) => handleInputChange(e, 'institution')} style={styles.input} required /></p>
                                <p><strong>Degree:</strong> <input type="text" value={edu.degree} onChange={(e) => handleInputChange(e, 'degree')} style={styles.input} required /></p>
                                <p><strong>Field of Study:</strong> <input type="text" value={edu.fieldOfStudy} onChange={(e) => handleInputChange(e, 'fieldOfStudy')} style={styles.input} required /></p>
                                <p><strong>Year:</strong> <input type="text" value={edu.year} onChange={(e) => handleInputChange(e, 'year')} style={styles.input} required /></p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 style={styles.subHeading}>Work Experience</h2>
                        {userData.workExperience.map((exp, index) => (
                            <div key={index}>
                                <p><strong>Company:</strong> <input type="text" value={exp.company} onChange={(e) => handleInputChange(e, 'company')} style={styles.input} required /></p>
                                <p><strong>Position:</strong> <input type="text" value={exp.position} onChange={(e) => handleInputChange(e, 'position')} style={styles.input} required /></p>
                                <p><strong>Duration:</strong> <input type="text" value={exp.duration} onChange={(e) => handleInputChange(e, 'duration')} style={styles.input} required /></p>
                            </div>
                        ))}
                    </div>
                    <div>
                        <h2 style={styles.subHeading}>Skills</h2>
                        <p><input type="text" placeholder={userData.skills.join(', ')} onChange={handleSkillsChange} style={styles.input} required /></p>
                    </div>
                    <div>
                        <h2 style={styles.subHeading}>Language Proficiency</h2>
                        <p><input type="text" placeholder={userData.languageProficiency.join(', ')} onChange={handleLanguageProficiencyChange} style={styles.input} required /></p>
                    </div>
                    <div>
                        <h2 style={styles.subHeading}>Additional Details</h2>
                        <p><strong>Profile Picture:</strong> <input type="file" onChange={handleProfilePictureChange} style={styles.input} /></p>
                        <p><strong>Portfolio:</strong> <input type="text" value={userData.portfolio} onChange={(e) => handleInputChange(e, 'portfolio')} style={styles.input} /></p>
                        <p><strong>Certifications:</strong> <input type="text" placeholder="Separate by commas" onChange={(e) => handleInputChange(e, 'certifications')} style={styles.input} /></p>
                        <p><strong>References:</strong> <input type="text" placeholder="Separate by commas" onChange={(e) => handleInputChange(e, 'references')} style={styles.input} /></p>
                        <p><strong>Salary Expectations (Min):</strong> <input type="number" value={userData.salaryMin} onChange={(e) => handleInputChange(e, 'salaryMin')} style={styles.input} /></p>
                        <p><strong>Salary Expectations (Max):</strong> <input type="number" value={userData.salaryMax} onChange={(e) => handleInputChange(e, 'salaryMax')} style={styles.input} /></p>
                        <p><strong>Availability:</strong> <input type="text" value={userData.availability} onChange={(e) => handleInputChange(e, 'availability')} style={styles.input} /></p>
                        <p><strong>Work Authorization:</strong> <input type="text" value={userData.workAuthorization} onChange={(e) => handleInputChange(e, 'workAuthorization')} style={styles.input} /></p>
                        <p><strong>Preferred Industry/Role:</strong> <input type="text" value={userData.preferredIndustryRole} onChange={(e) => handleInputChange(e, 'preferredIndustryRole')} style={styles.input} /></p>
                    </div>
                </div>
                <button type="submit" style={styles.button}>Update Profile</button>
            </form>
        </div>
    );
};

const styles = {
    card: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        textAlign: 'center',
        
    },
    heading: {
        fontSize: '28px',
        marginBottom: '20px',
        color: '#333',
    },
    subHeading: {
        fontSize: '20px',
        marginBottom: '10px',
        color: '#666',
    },
    input: {
        padding: '8px',
        marginBottom: '10px',
        width: '100%',
        borderRadius: '4px',
        border: '1px solid #ccc',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '16px',
    }
};

export default ProfilePage;
