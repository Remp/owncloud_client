import styled from 'styled-components'
import * as colors from 'Theme/colors'

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
  background-color: ${colors.dark};
`

export const ParticlesWrapper = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

export const FormContainer = styled.div`
  background-color: ${colors.almostWhite};
  padding: 15px;
  max-width: 100%;
  color: ${colors.dark};
  font-weight: bold;
  border-radius: 15px;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Icon = styled.i.attrs({
  className: 'fas fa-database'
})`
  font-size: 30px;
  margin: 0 10px;
`

export const TitleContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.span`
  font-size: 30px;
`

export const Description = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 0 10px;
  font-size: 14px;
`

export const InputsContainer = styled.div``

export const InputWrapper = styled.div`
  margin: 5px 0;
`

export const IconEnvelope = styled.i.attrs({
  className: 'far fa-envelope'
})`
  font-size: 25px;
  color: ${props => (props.warning ? colors.warning : colors.dark)};
`

export const IconKey = styled.i.attrs({
  className: 'fas fa-key'
})`
  font-size: 25px;
  color: ${props => (props.warning ? colors.warning : colors.dark)};
`

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`
