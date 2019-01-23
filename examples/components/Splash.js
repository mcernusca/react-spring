import React from 'react'
import LogoSVG from './LogoSVG'
import styled from 'styled-components'

export default function Splash() {
  return (
    <Container>
      <div>
        <LogoContainer>
          <Icon>
            <LogoSVG />
          </Icon>
          <Title>react spring</Title>
        </LogoContainer>
        <Tagline>
          Bring your components to life with simple spring-physics based
          animation primitives
        </Tagline>
      </div>
    </Container>
  )
}

const Container = styled('div')`
  position: relative;
  background: #160631;
  color: white;
  width: 100%;
  height: 80%;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Inter UI', sans-serif;
  @supports (font-variation-settings: normal) {
    font-family: 'Inter UI var alt', sans-serif;
  }
`

const LogoContainer = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

const Icon = styled('div')``

const Title = styled('div')`
  font-size: 30px;
  font-weight: 500;
  margin-top: 10px;
`

const Tagline = styled('p')`
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  margin-top: 60px;
  max-width: 400px;
  text-align: center;
`
