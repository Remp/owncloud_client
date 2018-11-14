import React, { PureComponent } from 'react'
import _ from 'lodash'
import { Tool, File } from './Blocks'
import {
  Container,
  Header,
  BackButton,
  MenuButton,
  FilterButton,
  ButtonsWrapper,
  Path,
  Toolbar,
  ToolDivider,
  FilesContainer
} from './styles'

export default class Storage extends PureComponent {
  state = {
    selected: []
  }

  //following method is only for testing purpose
  testGenerateFiles = () => {
    const files = []

    for (let i = 0; i < 10; i++) {
      const isChecked =
        _.find(this.state.selected, index => index === i) !== undefined

      files.push(
        <File
          checked={isChecked}
          onClick={e => {
            if (isChecked) {
              const selected = this.state.selected.filter(index => index !== i)

              this.setState({ selected })
            }
          }}
          onLongPress={() => {
            const selected = this.state.selected.slice(0)

            selected.push(i)
            this.setState({ selected })
          }}
        />
      )
    }

    return files
  }

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
        <FilesContainer>{this.testGenerateFiles()}</FilesContainer>
      </Container>
    )
  }
}
