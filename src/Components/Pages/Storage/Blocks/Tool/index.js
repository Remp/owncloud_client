import React from 'react'
import { Container, Title, Icon } from './styles'

export const Tool = ({ icon, title, onClick }) => (
  <Container onClick={onClick}>
    <Icon icon={icon} />
    <Title>{title}</Title>
  </Container>
)
