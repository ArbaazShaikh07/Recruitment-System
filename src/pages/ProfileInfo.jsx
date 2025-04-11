import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 50px;
  margin-left: 50px;
`;

const Name = styled.h1`
  font-size: 48px;
  color: #333;
  margin-bottom: 10px;
`;

const Email = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 20px;
`;

const AddPhoneNumberButton = styled.button`
  font-size: 24px;
  color: #fff;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Address = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 50px;
`;

const Resume = styled.h2`
  font-size: 36px;
  color: #333;
  margin-top: 50px;
  margin-bottom: 20px;
`;

const IndeedResumeLogo = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`;

const UpdatedText = styled.p`
  font-size: 24px;
  color: #666;
  margin-bottom: 20px;
`;

const SearchableText = styled.p`
  font-size: 24px;
  color: #666;
`;

const ProfileInfo = () => {
  return (
    <ProfileContainer>
      <Name>Arbaz Shaikh</Name>
      <Email>arbazshaikh656599@gmail.com</Email>
      <AddPhoneNumberButton>Add phone number</AddPhoneNumberButton>
      <Address>Thane, Maharashtra, IN</Address>
      <Resume>Resume</Resume>
      {/* <IndeedResumeLogo src="https://d1qb79mu57r8vn.cloudfront.net/sites/default/files/inline-images/Indeed-Logo-small.png" alt="Indeed Resume" /> */}
      <UpdatedText>Updated May 7, 2022</UpdatedText>
      <SearchableText>O Searchable</SearchableText>
    </ProfileContainer>
  );
};

export default ProfileInfo;