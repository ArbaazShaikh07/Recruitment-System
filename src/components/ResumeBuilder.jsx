import React, { useState, useRef } from 'react';
import html2pdf from 'html2pdf.js';

const ResumeBuilder = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        education: '',
        experience: '',
        projects: '',
        skills: '',
    });

    const [generated, setGenerated] = useState(false);
    const resumeRef = useRef(null);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleGenerate = (e) => {
        e.preventDefault();
        setGenerated(true);
    };

    const handleDownload = () => {
        const opt = {
            margin: 0.5,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resumeRef.current).set(opt).save();
    };

    return (
        <div className="container">
            <h1>✨ Resume Builder</h1>

            <form onSubmit={handleGenerate}>
                <section>
                    <h2>Personal Info</h2>
                    <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
                    <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                    <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />
                    <input type="text" name="address" placeholder="Address" onChange={handleChange} />
                </section>

                <section>
                    <h2>Education</h2>
                    <textarea name="education" placeholder="Education details..." onChange={handleChange} />
                </section>

                <section>
                    <h2>Experience</h2>
                    <textarea name="experience" placeholder="Work experience..." onChange={handleChange} />
                </section>

                <section>
                    <h2>Projects</h2>
                    <textarea name="projects" placeholder="Your projects..." onChange={handleChange} />
                </section>

                <section>
                    <h2>Skills</h2>
                    <input type="text" name="skills" placeholder="e.g. JavaScript, Python, Figma" onChange={handleChange} />
                </section>

                <div className="center">
                    <button type="submit">🎯 Generate Resume</button>
                </div>
            </form>

            {generated && (
                <div className="resume-output">
                    <div ref={resumeRef} className="resume-content">
                        <h2 className="resume-name">{formData.name}</h2>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Phone:</strong> {formData.phone}</p>
                        <p><strong>Address:</strong> {formData.address}</p>

                        <div className="section">
                            <h3>🎓 Education</h3>
                            <p>{formData.education}</p>
                        </div>

                        <div className="section">
                            <h3>💼 Experience</h3>
                            <p>{formData.experience}</p>
                        </div>

                        <div className="section">
                            <h3>📁 Projects</h3>
                            <p>{formData.projects}</p>
                        </div>

                        <div className="section">
                            <h3>🛠️ Skills</h3>
                            <p>{formData.skills}</p>
                        </div>
                    </div>

                    <div className="center">
                        <button onClick={handleDownload}>⬇️ Download PDF</button>
                    </div>
                </div>
            )}

            <style jsx>{`
        .container {
          font-family: 'Segoe UI', sans-serif;
          max-width: 900px;
          margin: 50px auto;
          padding: 40px;
          background: #fefefe;
          box-shadow: 0 8px 24px rgba(0,0,0,0.05);
          border-radius: 16px;
        }

        h1 {
          text-align: center;
          font-size: 36px;
          margin-bottom: 40px;
          color: #222;
        }

        h2 {
          font-size: 22px;
          margin-bottom: 12px;
          color: #444;
          border-left: 5px solid #0057d9;
          padding-left: 12px;
        }

        h3 {
          font-size: 18px;
          color: #333;
          margin-top: 24px;
          margin-bottom: 10px;
        }

        section {
          margin-bottom: 30px;
        }

        input, textarea {
          width: 100%;
          padding: 14px 16px;
          margin-top: 8px;
          border-radius: 10px;
          border: 1px solid #ccc;
          font-size: 16px;
          background-color: #fafafa;
          transition: border-color 0.3s ease;
        }

        input:focus, textarea:focus {
          border-color: #0057d9;
          outline: none;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        .center {
          display: flex;
          justify-content: center;
          margin-top: 30px;
        }

        button {
          padding: 14px 28px;
          background-color: #0057d9;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        button:hover {
          background-color: #003eaa;
        }

        .resume-output {
          margin-top: 60px;
        }

        .resume-content {
          background: #ffffff;
          padding: 30px;
          border-radius: 16px;
          border: 1px solid #e0e0e0;
          box-shadow: 0 4px 18px rgba(0,0,0,0.04);
        }

        .resume-name {
          font-size: 28px;
          font-weight: bold;
          color: #222;
          border-bottom: 2px solid #ccc;
          padding-bottom: 8px;
          margin-bottom: 20px;
        }

        .resume-content p {
          line-height: 1.6;
          margin: 8px 0;
          color: #444;
        }

        .section {
          margin-top: 25px;
        }
      `}</style>
        </div>
    );
};

export default ResumeBuilder;
