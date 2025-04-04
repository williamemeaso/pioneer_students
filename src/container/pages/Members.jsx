import chidi from './../../assets/chidi.jpg';
import princess from './../../assets/princess.png';
import princess01 from './../../assets/princess01.png';
import loveth from './../../assets/loveth.png';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../components/ThemeContext';

const Container = styled.main`
  margin: 2rem auto;
  width: 50rem;

  @media (max-width: 900px) {
    width: 40rem;
  }
  @media (max-width: 750px) {
    width: 35rem;
  }

  @media (max-width: 600px) {
    width: 30rem;
  }

  @media (max-width: 500px) {
    width: 25rem;
  }

  @media (max-width: 450px) {
    width: 20rem;
  }
`;

const Heading = styled.h2`
  color: ${(props) => props.theme.color};
  text-transform: uppercase;
  text-shadow: ${(props) => props.theme.textShadow};

  @media (max-width: 750px) {
    font-size: 1.4rem;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem;
  margin: 1rem 0;
  border: 0.1rem solid gray;
  border-radius: 0.5rem;
  box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${(props) => props.theme.hoverBg};
    color: #e3fafc;
    cursor: pointer;
  }

  @media (max-width: 500px) {
    gap: 1rem;
    padding: 0.5rem 0;
  }
  @media (max-width: 500px) {
    gap: 1rem;
    padding: 0.5rem;
  }
`;

const Section = styled.section`
  width: 25rem;
  height: 100%;

  @media (max-width: 500px) {
    width: 20rem;
  }

  @media (max-width: 500px) {
    width: 18rem;
  }

  &.image-container {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;

    @media (max-width: 500px) {
      width: 2.5rem;
      height: 2.5rem;
    }
    @media (max-width: 450px) {
      width: 2rem;
      height: 2rem;
    }
  }
  &.info-container {
    font-size: 0.9rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
    @media (max-width: 500px) {
      gap: 0.7rem;
      font-size: 0.7rem;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
const StyledLinkNav = styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.color};
`;

const P = styled.p`
  &.clip {
    width: 5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

function Members() {
  const { theme } = useTheme();
  const data = [
    {
      firstName: 'William',
      lastName: 'Emeaso',
      email: 'William@gmail.com',
      gender: 'male',
      phone: 7033881174,
      photo: chidi,
    },
    {
      firstName: 'Chidi',
      lastName: 'Eze',
      email: 'Chidi@gmail.com',
      gender: 'male',
      phone: 8033551174,
      photo: loveth,
    },
    {
      firstName: 'Esther',
      lastName: 'Nze',
      email: 'Esther@gmail.com',
      gender: 'female',
      phone: 7066889374,
      photo: princess,
    },
    {
      firstName: 'Prince',
      lastName: 'Lucky',
      email: 'Prince@gmail.com',
      gender: 'male',
      phone: 9055678912,
      photo: princess01,
    },
  ];
  return (
    <Container>
      <Heading theme={theme}>Members</Heading>
      {data.map((info, ind) => (
        <StyledLinkNav to="#" key={ind} theme={theme}>
          <Main theme={theme}>
            <Section className="image-container">
              <Img src={info.photo} alt="profile_pic" />
            </Section>
            <Section className="info-container">
              <P>
                <strong>
                  {info.firstName} {info.lastName}
                </strong>
              </P>
              <P>{info.phone}</P>
              <P className="clip">{info.email}</P>
            </Section>
          </Main>
        </StyledLinkNav>
      ))}
    </Container>
  );
}

export default Members;
