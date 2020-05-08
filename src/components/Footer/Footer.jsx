import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import LocationIcon from 'images/LocationIcon.svg';
import EmailIcon from 'images/EmailIcon.svg';
import PhoneIcon from 'images/PhoneIcon.svg';
import hexToRGBA from 'utils/hexToRGBA';


const StyledFooter = styled.footer`
  height: 280px;
  background-color: ${hexToRGBA(theme.color.primary, 0.5)};
  font-size: 14px;
  padding: 20px;
  @media(min-width: 500px){
    padding: 50px; 
    height: 320px;
  }
`;

const StyledContent = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 20px;
  justify-items: center;
  @media(min-width: 800px){
    grid-template-columns: 1fr 2fr 2fr 1fr;
  }
  @media(min-width: 1100px){
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  }
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  margin-bottom: 30px;
`;

const StyledLocationIcon = styled(LocationIcon)`
  width: 21px;
  position: absolute;
  left: -30px;
  @media(max-width: 350px){
    display: none;
  };
  @media(min-width: 450px){
    left: -45px;
  };
`;
const StyledEmailIcon = styled(EmailIcon)`
  width: 21px;
  position: absolute;
  left: -30px;
  @media(max-width: 350px){
    display: none;
  };
  @media(min-width: 450px){
    left: -45px;
  };
`;

const StyledPhoneIcon = styled(PhoneIcon)`
  width: 21px;
  position: absolute;
  left: -30px;
  @media(max-width: 350px){
    display: none;
  };
  @media(min-width: 450px){
    left: -45px;
  };
`;

const StyledContactInfo = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  grid-column: 1;
  grid-row-start: 1;
  grid-row-end: 3;
  @media(min-width: 800px){
    grid-column: 2;
  }
`;

const StyledBankInfo = styled.div`
  color: black;
  grid-column: 2;
  justify-self: start;
  @media(min-width: 800px){
    grid-column: 3;
  }
`;

const StyledInfo = styled.div`
  color: black;
  grid-column: 2;
  grid-row: 2;
  justify-self: start;
  @media(min-width: 800px){
    grid-column: 3;
  }
  @media(min-width: 1100px){
    grid-column: 4;
    grid-row: 1;
  }
`;

const StyledDisplayColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledDisplayRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  margin-bottom: 10px;
`;

const Footer = ({
  street, city, company, email, nip, bankNum, phoneNums,
}) => (
  <StyledFooter>
    <StyledContent>
      <StyledContactInfo>
        <StyledTitle>Kontakt: </StyledTitle>
        <StyledDisplayRow>
          <StyledLocationIcon />
          <StyledDisplayColumn>
            <span>
              { street }
            </span>
            <span>
              { city }
            </span>
          </StyledDisplayColumn>
        </StyledDisplayRow>
        <StyledDisplayRow>
          <StyledEmailIcon />
          <span>{email}</span>
        </StyledDisplayRow>
        <StyledDisplayRow>
          <StyledPhoneIcon />
          <StyledDisplayColumn>
            {phoneNums.map(obj => (
              <span key={obj.num}>{obj.num}</span>
            ))}
          </StyledDisplayColumn>
        </StyledDisplayRow>
      </StyledContactInfo>
      <StyledBankInfo>
        <StyledTitle>Numery Kont: </StyledTitle>
        <span>{bankNum}</span>
      </StyledBankInfo>
      <StyledInfo>
        <StyledTitle>Informacje: </StyledTitle>
        <StyledDisplayColumn>
          <span>{company}</span>
          <span>
            NIP
            {nip}
          </span>
        </StyledDisplayColumn>
      </StyledInfo>
    </StyledContent>
  </StyledFooter>
);

export default Footer;
