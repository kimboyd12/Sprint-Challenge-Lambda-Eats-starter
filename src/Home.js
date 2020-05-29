import React from "react";
import styled from "styled-components";
import Asian from "./Assets/asian.jpg";
import Indian from "./Assets/indian.jpg";
import Italian from "./Assets/italian.jpg";

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
`
const Card = styled.div`
    width: 350px;
    height: 255px;
    border-bottom: 1px solid black;
`
const Image = styled.img`
    width: 350px;
    height: 200px;
`
const TagDiv = styled.div`
    display: flex;
    height: 50px;
    align-items: center;
`
const Tag = styled.p`
    margin: 0 auto;
    font-size: 1.4rem;
`
const Container = styled.div`
    display: flex;
    flex-direction: column;

`

const Header = styled.h2`
    margin: 0 auto;
    margin-bottom: 50px;
    font-size: 2rem;
    
`

export default function Home() {
    return (

<Container>
    <Header>Go ahead, explore your options...</Header>
    <CardContainer>
        <Card>
            <Image src={Asian} />
            <TagDiv>
            <Tag>Asian</Tag>
            </TagDiv>
        </Card>
        <Card>
            <Image src={Indian} />
            <TagDiv>
            <Tag>Indian</Tag>
            </TagDiv>
        </Card>
        <Card>
            <Image src={Italian} />
            <TagDiv>
            <Tag>Italian</Tag>
            </TagDiv>
        </Card>
    </CardContainer>
</Container>
    )
}   