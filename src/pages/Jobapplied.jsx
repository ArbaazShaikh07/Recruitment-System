import React from 'react';
import styled from 'styled-components';

const JobWrapper = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1rem;
`;

const JobTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const JobCompany = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const JobLocation = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const JobActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const JobStatus = styled.span`
  color: #6c63ff;
  font-size: 0.9rem;
  cursor: pointer;
`;

const JobApplyDate = styled.span`
  color: #666;
  font-size: 0.9rem;
`;

const Job = ({ title, company, location, status, appliedDate }) => {
  return (
    <JobWrapper>
      <JobTitle>{title}</JobTitle>
      <JobCompany>{company}</JobCompany>
      <JobLocation>{location}</JobLocation>
      <JobActions>
        <JobStatus>{status}</JobStatus>
        <JobApplyDate>Applied {appliedDate}</JobApplyDate>
      </JobActions>
    </JobWrapper>
  );
};

export default Job;