import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 0px;
`

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
`

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 20px;
  line-height: 1.6;
`

const About = () => {
  return (
    <Container id="about">
      <Title>About Me</Title>
      <Desc>
        I am a passionate full-stack developer with expertise in modern web technologies. 
        I love creating innovative solutions and have experience working with React, Node.js, 
        Python, and cloud technologies like AWS. I'm always eager to learn new technologies 
        and take on challenging projects that push the boundaries of what's possible.
      </Desc>
    </Container>
  )
}

export default About;