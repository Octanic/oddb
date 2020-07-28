import React from 'react';
import Footer from '../Footer';
import Menu from '../Menu';
import styled from 'styled-components';

const Main = styled.main`
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding: 50px 5%
`;

function MainTemplate(props) {
    return (
        <>
            <Menu />
            <Main>
                {props.children}
            </Main>
            <Footer />
        </>
    );
}

export default MainTemplate;