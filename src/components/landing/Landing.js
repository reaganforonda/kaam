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

const LoginSection = styled.div`
    border: solid white 2px;
    display: flex;
`

const Input = styled.input`

`


export default class Landing extends React.Component{
    render(){
        return (
            <Main>
                <Header/>
                    <Title>Kaam</Title>
                <Header/>
                <LoginSection>
                    <Input placeholder='Email' type='email'/>
                    <Input placeholder='Company' type='text'/>
                    <Input placeholder='First Name' type='text'/>
                    <Input placeholder='Last Name' type='text'/>
                </LoginSection>
            </Main>
        )
    }
}