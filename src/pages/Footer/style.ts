import styled from "styled-components";

export const Logo = styled.a`
    && img {
        width: 100px;
        object-fit: cover;
    }
`;

export const Container = styled.div`
    background-color: #EEE;
    position: absolute;
    right: 0; left: 0;
    bottom: 0;
    padding: 2rem 3%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const NavigateLinks = styled.nav`
    text-transform: uppercase;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

export const MenuNavigation = styled.li`
    && a:hover {
        text-decoration: underline;
        color: #CBC3E3;
    }
`;