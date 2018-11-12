import React, { PureComponent } from 'react'
import { Tool } from './Blocks'
import {
  Container,
  Header,
  BackButton,
  MenuButton,
  FilterButton,
  ButtonsWrapper,
  Path,
  Toolbar,
  ToolDivider
} from './styles'

export default class Storage extends PureComponent {
  render() {
    return (
      <Container>
        <Header>
          <BackButton />
          <Path>./root/some/another/path/here/wego</Path>
          <ButtonsWrapper>
            <MenuButton />
            <FilterButton />
          </ButtonsWrapper>
        </Header>
        <Toolbar>
          <Tool icon="fas fa-search" title="Search" />
          <ToolDivider />
          <Tool icon="fas fa-cloud-upload-alt" title="Upload" />
          <ToolDivider />
          <Tool icon="fas fa-folder-plus" title="New folder" />
          <ToolDivider />
          <Tool icon="fas fa-copy" title="Copy" />
          <ToolDivider />
          <Tool icon="fas fa-cut" title="Cut" />
          <ToolDivider />
          <Tool icon="fas fa-paste" title="Past" />
          <ToolDivider />
          <Tool icon="fas fa-trash-alt" title="Delete" />
        </Toolbar>
      </Container>
    )
  }
}
