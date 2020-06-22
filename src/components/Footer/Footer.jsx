import React from 'react';
import styled from 'styled-components';
import LocationIcon from 'images/LocationIcon.svg';
import EmailIcon from 'images/EmailIcon.svg';
import PhoneIcon from 'images/PhoneIcon.svg';


const StyledFooter = styled.footer`
  height: auto;
  background-color: ${props => props.bgFooter};
  font-size: 14px;
  padding: 70px 20px;
`;

const StyledContent = styled.div`
  margin: 0 auto;
  display: flex;
  width: 150px;
  flex-direction: column;
  align-items: flex-start;
  @media(min-width: 600px){
    width: auto;
    align-items: center;
    justify-items: center;
    display: grid;
    gap: 20px 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media(min-width: 800px){
    grid-template-columns: 1fr 2fr 2fr 1fr;
  }
  @media(min-width: 1100px){
    grid-template-columns: 1fr 2fr 2fr 2fr 1fr;
  }
`;

const StyledTitle = styled.h3`
  font-size: 16px;
  margin: 15px 0;
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
  @media(min-width: 600px){
    grid-column: 1;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  @media(min-width: 800px){
    grid-column: 2;
  }
`;

const StyledBankInfo = styled.div`
  color: black;
  @media(min-width: 600px){
    justify-self: start;
    grid-column: 2;
  }
  @media(min-width: 800px){
    grid-column: 3;
  }
`;

const StyledInfo = styled.div`
  color: black;
  @media(min-width: 600px){
    justify-self: start;
    grid-column: 2;
    grid-row: 2;
  }
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
  street, city, company, email, nip, bankNum, phoneNums, bgFooter,
}) => (
  <StyledFooter bgFooter={bgFooter}>
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
            { phoneNums.map(({ num }) => <span key={num}>{num}</span>) }
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
