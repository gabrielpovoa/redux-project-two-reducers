import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style:none;
        text-decoration: none;
        border: 0;
        outline: 0;
        transition: all .3s linear;
    }
    html {
        font-size: 62.5%;
    }
    body {
        background-color: #454545;
        font-family: sans-serif;
    }
    a {
        color: #000
    }
`;