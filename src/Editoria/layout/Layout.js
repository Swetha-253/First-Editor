import React from 'react';
import styled from 'styled-components';

// Define the layout structure using styled-components
const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Header = styled.header`
  background: #f8f9fa;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  flex: 1;
  padding: 1rem;
`;

const Footer = styled.footer`
  background: #f8f9fa;
  padding: 0.5rem;
  text-align: center;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <Header>
        <h1>My Application</h1>
      </Header>
      <Main>      
          {children} 
      </Main>
      
      <Footer>
        <p>&copy; 2024 My Application</p>
      </Footer>
    </LayoutContainer>
  );
};

export default Layout;
