import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    background-color: #EEE;
    margin: 4rem auto;
    padding: 2rem 3%;
    border-radius: .4rem;
`;

export const Logo = styled.a`
    img {
        width: 80px;
        object-fit: cover;
    }    
`;

export const Menu = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const MenuOrder = styled.ul`
    display: flex;
    gap: 2rem;
`;

export const MenuList = styled.li`
    font-size: 1.2rem;
    text-transform: capitalize;

    && a:hover {
        text-decoration: underline;
    }
`;