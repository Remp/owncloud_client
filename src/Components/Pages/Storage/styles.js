import styled from 'styled-components'
import * as colors from 'Theme/colors'

export const Container = styled.div`
  flex: 1;
`

export const Header = styled.div`
  background-color: ${colors.dark};
  color: white;
  display: flex;
  justify-content: space-between;
`

const IconButton = styled.i`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  font-size: 30px;
`

export const BackButton = styled(IconButton).attrs({
  className: 'fas fa-chevron-left'
})``

export const FilterButton = styled(IconButton).attrs({
  className: 'fas fa-sort-amount-up'
})``

export const MenuButton = styled(IconButton).attrs({
  className: 'fas fa-bars'
})``

export const ButtonsWrapper = styled.div`
  display: flex;
`

export const Path = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
  font-style: italic;
  overflow: scroll;
  width: calc(100vw - 130px);
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Toolbar = styled.div`
  width: 100vw;
  height: 40px;
  overflow: scroll;
  display: flex;
  align-items: center;
  background-color: ${colors.almostWhite};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    display: none;
  }
`
export const ToolDivider = styled.span`
  min-width: 3px !important;
  height: 80%;
  margin: 0 3px;
  background-color: ${colors.lightGrey};
`

export const FilesContainer = styled.div`
  height: 100% - 80px;
  overflow: scroll;
  background-color: ${colors.almostWhite};

  &::-webkit-scrollbar {
    display: none;
  }
`
