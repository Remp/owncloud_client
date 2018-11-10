import React from 'react'
import { Container, Title, Loader, LoaderContainer } from './styles'

export const LoadingButton = ({ disabled, isLoading, onClick }) => (
  <Container disabled={disabled} isLoading={isLoading} onClick={onClick}>
    <Title>GO</Title>
    <LoaderContainer>
      <Loader visible={isLoading} />
    </LoaderContainer>
  </Container>
)
