import styled from 'styled-components';

export const Container = styled.div`
    width: 80vw;
    background-color: #F3F3F3;
    margin: 2rem auto;
    display: flex;
    aligin-items: center;
   
`;

export const Border = styled.div`
    border-left: .2rem solid #52307C;
`;

export const ClientInfo = styled.div`
    background-color: #BCA0DC;
    width: 350px;
    padding: 2rem 3%;
    margin: 2rem 3%;
    border-radius: .4rem;
    color: #454545;
`;

export const ClientUpdate = styled.div`
    background-color: #BCA0DC;
    width: 350px;
    padding: 2rem 3%;
    margin: 2rem 3%;
    border-radius: .4rem;
    color: #454545;

    && p {
        text-align: center;
        margin-bottom: .8rem;
    }
    && .client {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8rem;
    }
    && .client .box {
        padding: .2rem 1rem;
        width: 100%;
        font-size: 1.3rem;
    }
    && .client button {
        align-self: flex-start;
        padding: .6rem 1rem;
        border-radius: .4rem;
        background-color: #3C1361;
        color: #FFF;
        cursor: pointer;
    }
    && .client button: hover {
        background-color: #52307C;
    }
`;

export const ThemeStatus = styled.div`
    background-color: #BCA0DC;
    width: 200px;
    height: 100px;
    padding: 2rem 3%;
    margin: 2rem 3%;
    border-radius: .4rem;
    color: #454545;
    && button {
        align-self: flex-start;
        padding: .6rem 1rem;
        border-radius: .4rem;
        background-color: #333;
        color: #FFF;
        cursor: pointer;
        margin-top: 2rem;
    }
    && button: hover {
        background-color: #454545;
    }


`;
