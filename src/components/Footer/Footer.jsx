import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import LocationIcon from 'images/LocationIcon.svg';
import EmailIcon from 'images/EmailIcon.svg';
import PhoneIcon from 'images/PhoneIcon.svg';
import hexToRGBA from '../../utils/hexToRGBA';


const StyledFooter = styled.div`
  height: 40vh;
  padding: 50px; 
  background-color: ${hexToRGBA(theme.color.primary, 0.5)};
  font-size: 14px;
`;

const StyledContent = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  width: 75vw;
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 30px;
`;

const StyledLocationIcon = styled(LocationIcon)`
  width: 21px;
  margin-right: 15px;
`;

const StyledEmailIcon = styled(EmailIcon)`
  width: 21px;
  margin-right: 15px;
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  width: 21px;
  margin-right: 15px;
`;

const StyledContactInfo = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  margin-right: 25px;
`;

const StyledBankInfo = styled.div`
  color: black;
  margin-right: 25px;
`;

const StyledInfo = styled.div`
  color: black;
`;

const DisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const DisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Footer = () => (
  <StyledFooter>
    <StyledContent>
      <StyledContactInfo>
        <StyledTitle>Kontakt: </StyledTitle>
        <DisplayRow>
          <StyledLocationIcon />
          <DisplayColumn>
            <span>ul. Mazowiecka 17,</span>
            <span>05-200 Wołomin</span>
          </DisplayColumn>
        </DisplayRow>
        <DisplayRow>
          <StyledEmailIcon />
          <span>promyk@gmail.com</span>
        </DisplayRow>
        <DisplayRow>
          <StyledPhoneIcon />
          <DisplayColumn>
            <span>602-241-179</span>
            <span>666-550-604</span>
          </DisplayColumn>
        </DisplayRow>
      </StyledContactInfo>
      <StyledBankInfo>
        <StyledTitle>Numery Kont: </StyledTitle>
        <span>31 1060 0076 0000 3260 0161 1598</span>
      </StyledBankInfo>
      <StyledInfo>
        <StyledTitle>Informacje: </StyledTitle>
        <DisplayColumn>
          <span>Akademia Dziecięca Promyk</span>
          <span>NIP 1250200628</span>
        </DisplayColumn>
      </StyledInfo>
    </StyledContent>
  </StyledFooter>
);

export default Footer;
