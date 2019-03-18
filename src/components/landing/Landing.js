import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
        font-size: 3em;
        text-transform: uppercase;
        text-align: center;
        color: white;
    `

const Header = styled.header`
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;

`
const Main = styled.div`
    background: black;
    height: 100vh;
`



export default class Landing extends React.Component{
    render(){
        return (
            <Main>
                <Header/>
                    <Title>Kaam</Title>
                <Header/>
                <div>
                    Hello World
                </div>
            </Main>
        )
    }
}