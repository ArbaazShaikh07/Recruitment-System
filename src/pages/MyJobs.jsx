
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

function MyJobs() {
  const [showModal, setShowModal] = useState(false);
  const [selectedJobIndex, setSelectedJobIndex] = useState(null);
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: 'Weberse Infotech Pvt Ltd',
      position: 'UI/UX Designer',
      remote: 'Remote',
      date: 'Applied today',
      applicants: 'Around 896-900 people have applied on Indeed',
      status: 'Applied'
    },
    {
      id: 2,
      company: 'Ecowiser',
      position: 'UI/UX Designer Intern',
      remote: 'On-site',
      date: 'Applied today',
      applicants: 'Around 1751-1755 people have applied',
      status: 'Applied'
    },
    {
      id: 3,
      company: 'Razorpay',
      position: 'Product Design Intern',
      remote: 'Hybrid',
      date: 'Applied today',
      applicants: 'Around 1751-1755 people have applied',
      status: 'Applied'
    },
    {
      id: 4,
      company: 'Intuit',
      position: 'Product Manager',
      remote: 'Hybrid',
      date: 'Applied today',
      applicants: 'Around 1751-1755 people have applied',
      status: 'Applied'
    }
  ]);
  const modalRef = useRef(null);

  const handleStatusUpdate = (status) => {
    if (selectedJobIndex !== null) {
      const updatedJobs = [...jobs];
      updatedJobs[selectedJobIndex] = { ...updatedJobs[selectedJobIndex], status };
      setJobs(updatedJobs);
      setShowModal(false);
    }
  };

  const handleOverlayClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOverlayClick);
    return () => {
      document.removeEventListener('mousedown', handleOverlayClick);
    };
  }, []);

  return (  
    <div className="container">
      <h1 className="title">My Jobs</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">All Jobs</Link>
          </li>
        </ul>
      </nav>
      <div className="job-list">
        {jobs.map((job, index) => (
          <div className="job" key={job.id}>
            <button className="update-status-button" onClick={() => { setShowModal(true); setSelectedJobIndex(index); }}>Update Status</button>
            {/* <div className={`status ${job.status.toLowerCase()}`}>{job.status}</div> */}
            <div className={`status ${job.status.toLowerCase().replace(/\s+/g, '-')}`}>{job.status}</div>

            <div className="job-details">
              <div className="company">{job.company}</div>
              <div className="position">{job.position}</div>
              <div className="remote">{job.remote}</div>
              <div className="date">{job.date}</div>
              <Link to="/applicants" className="applicant-link">{job.applicants}</Link>
            </div>
          </div>
        ))}
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal" ref={modalRef}>
            <div className="modal-content">
              <h2>Update Status</h2>
              <ul className="status-options">
                <li onClick={() => handleStatusUpdate('Interviewing')}>Interviewing</li>
                <li onClick={() => handleStatusUpdate('Offer received')}>Offer received</li>
                <li onClick={() => handleStatusUpdate('Hired')}>Hired</li>
                <li onClick={() => handleStatusUpdate('Not selected by employer')}>Not selected by employer</li>
                <li onClick={() => handleStatusUpdate('No longer interested')}>No longer interested</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
          /* Your styles */


          .container {
            max-width: 800px;
                 margin: 0 auto;
                 padding: 20px;
                 backgroundColor: '#0065ff';
                 font-family: Arial, sans-serif;
               }
    
               .title {
                 text-align: center;
                 margin-bottom: 30px;
               }
    
               .nav-link {
                 color: #fff;
                 text-decoration: none;
               }
    
               .job-list {
                 display: flex;
                 flex-direction: column;
                 gap: 16px;
               }
    
               .job {
                 background-color: #f9f9f9;
                 padding: 20px;
                 border-radius: 8px;
                 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                 position: relative;
               }
    
               .job-details {
                 display: flex;
                 flex-direction: column;
               }
    
               .status {
                 align-self: flex-start;
                 padding: 6px 12px;
                 border-radius: 20px;
                 font-size: 0.9rem;
                 font-weight: bold;
                 text-transform: uppercase;
                 background-color: #4caf50;
                 color: white;
                 margin-bottom: 10px;
               }
    
               .company {
                 font-weight: bold;
                 font-size: 1.2rem;
                 margin-bottom: 6px;
               }
    
               .position {
                 font-size: 1.1rem;
                 margin-bottom: 10px;
               }
    
               .remote {
                 color: #007bff;
               }
    
               .date {
                 font-size: 0.9rem;
                 color: #666;
                 margin-bottom: 8px;
               }
    
               .applicant-link {
                 font-size: 0.9rem;
                 color: #007bff;
                 text-decoration: none;
               }
    
               .applicant-link:hover {
                 text-decoration: underline;
               }
    
               nav {
                 background-color: #0c0c0c;
                 padding: 16px;
                 border-radius: 10px;
                 margin-bottom: 20px;
               }
    
               nav ul {
                 list-style: none;
                 margin: 0;
                 padding: 0;
                 display: flex;
                 gap: 16px;
               }
    
               .update-status-button {
                 position: absolute;
                 top: 20px;
                 right: 20px;
                 background-color: #007bff;
                 color: #fff;
                 border: none;
                 border-radius: 4px;
                 padding: 10px 20px;
                 cursor: pointer;
               }
    
               .update-status-button:hover {
                 background-color: #0056b3;
               }

          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .modal {
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
          }

          .status-options {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .status-options li {
            cursor: pointer;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
          }

          .status-options li:hover {
            background-color: #f9f9f9;
          }

        //   .status {
        //     align-self: flex-start;
        //     padding: 6px 12px;
        //     border-radius: 20px;
        //     font-size: 0.9rem;
        //     font-weight: bold;
        //     text-transform: uppercase;
        //     margin-bottom: 10px;
        //   }



        // .status {
        //     align-self: flex-start;
        //     padding: 6px 12px;
        //     border-radius: 20px;
        //     font-size: 0.9rem;
        //     font-weight: bold;
        //     text-transform: uppercase;
        //     margin-bottom: 10px;
        //     align-items: center;
        //     max-width: 150px;
        //     min-width: 100px; /* Adjust the minimum width as needed */
        //   }

        //   .applied {
        //     background-color: dodgerblue;
        //     color: white;
        //     align-items: center;
        //   }

          .status {
            align-self: flex-start;
            padding: 6px 12px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: bold;
            text-align: center;
            text-transform: uppercase;
            margin-bottom: 10px;
            align-items: center;
            width: 100%;
            max-width: 150px;
            min-width: 40px; 
          }
          
          .applied {
            background-color: dodgerblue;
            color: white;
            // width: 100%;
          }
          
          .interviewing {
            background-color: yellow;
            color: black;
          }
          
          .offer-received,
          .hired {
            background-color: green;
            color: white;
          }
          
          .not-selected-by-employer,
          .no-longer-interested {
            background-color: red;
            color: white;
          }
          


        `}
      </style>
    </div>
  );
}

export default MyJobs;
