import styled, { keyframes } from 'styled-components'
import * as colors from 'Theme/colors'

const loadingAnim = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`

export const Container = styled.div`
  background-color: ${props =>
    props.disabled || props.isLoading ? colors.dark : colors.green};
  color: white;
  display: flex;
  align-items: center;
  border-radius: 4px;
  padding: 4px 0;
  width: 50%;
  cursor: pointer;
  position: relative;
  user-select: none;
`

export const Title = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  font-size: 20px;
`

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
`

export const Loader = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border-width: 2px;
  border-color: transparent;
  border-style: solid;
  border-bottom-color: ${props => (props.visible ? 'white' : 'transparent')};
  border-left-color: ${props => (props.visible ? 'white' : 'transparent')};
  animation: 1s ${loadingAnim} infinite linear;
  margin: 3px 5px;
`
