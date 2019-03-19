import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
        font-size: 3em;
        text-transform: uppercase;
        text-align: center;
        color: white;
    `

const Header = styled.header`
    border: 1px solid white;
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
    flex-direction: column;
`

const Input = styled.input`b
    width: 100px;
`

const HeaderNav = styled.nav`
    display: flex;
    padding: 40px 4px;
`

const HeaderMenu = styled.div`

`

const Button = styled.button`
    background: ${props => props.primary ? "yellow" : "blue"}
    color: ${props => props.primary ? "white" : "blue"}
    font-size: 1em;
    margin: 0.25em 1em;
    border: 2px solid yellow;
    border-radius: 3px;
    
    &:hover {
        color: pink;
    }
`

export default class Landing extends React.Component{
    render(){
        return (
            <Main>
                <Header/>
                    <HeaderNav>
                        <Title>Kaam</Title>
                        <HeaderMenu>
                            <Button primary type='button'>SIGN UP</Button>
                        </HeaderMenu>
                    </HeaderNav>
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