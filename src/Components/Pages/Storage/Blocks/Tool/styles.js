import styled from 'styled-components'
import * as colors from 'Theme/colors'

export const Container = styled.div`
  display: flex;
  height: 40px;
  user-select: none;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
`

export const Left = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Icon = styled.i.attrs({
  className: props => props.icon
})`
  color: ${colors.dark};
  font-size: 25px;
`

export const Title = styled.div`
  flex: 1;
  display: flex;
  color: ${colors.dark};
  font-size: 19px;
  align-items: center;
  margin-left: 5px;
  white-space: nowrap;
`
