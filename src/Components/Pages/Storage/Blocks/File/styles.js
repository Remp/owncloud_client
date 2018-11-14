import styled from 'styled-components'
import * as colors from 'Theme/colors'

export const Container = styled.div`
  width: 50%;
  box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.1); 
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 50vw;
`

export const Icon = styled.div.attrs({
  className: props => props.icon
})`
  margin: 10px 0;
  color: ${props => (props.checked ? colors.blue : colors.dark)};
  font-size: 30vw;
`

export const Title = styled.div`
  display: flex;
  margin: 0 10px;
  padding: 0 0 10px 0;
  color: ${colors.dark};
  font-size: 14px;
  width: calc(100% - 20px);
  overflow: scroll;
  white-space: nowrap;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const ActionsButton = styled.i.attrs({
  className: 'fas fa-ellipsis-v'
})`
  position: absolute;
  bottom: 5px;
  right: 5px;
`

const InfoBlock = styled.div`
  display: flex;
  color: ${colors.grey};
  font-size: 14px;
  position: absolute;
  align-items: center;
`

export const SizeInfo = styled(InfoBlock)`
  top: 5px;
  left: 10px;
`

export const LastUpdateInfo = styled(InfoBlock)`
  bottom: 5px;
  left: 10px;
`
