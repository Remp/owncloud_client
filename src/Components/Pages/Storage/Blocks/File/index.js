import React, { PureComponent } from 'react'
import * as fileIcons from 'Constants/fileIcons'
import {
  Container,
  IconContainer,
  Icon,
  Title,
  SizeInfo,
  LastUpdateInfo
} from './styles'

export class File extends PureComponent {
  state = {
    isPressing: false
  }

  getFileIcon = () => {
    const { type } = this.props

    return fileIcons[type] || fileIcons['file']
  }

  handleTouchStart = e => {
    const { onLongPress } = this.props

    this.fireLongPress = setTimeout(() => onLongPress && onLongPress(e), 500)
  }

  handleTouchEnd = e => {
    const { onClick } = this.props

    if (this.fireLongPress) {
      clearTimeout(this.fireLongPress)
      this.fireLongPress = null
      return
    }

    onClick && onClick(e)
  }

  render() {
    const { checked, onClick } = this.props

    return (
      <Container
        onClick={onClick}
        onTouchEnd={this.handleTouchEnd}
        onTouchStart={this.handleTouchStart}
      >
        <IconContainer>
          <Icon checked={checked} icon={this.getFileIcon()} />
          <SizeInfo>10mb</SizeInfo>
          <LastUpdateInfo>09/09/1999</LastUpdateInfo>
        </IconContainer>
        <Title>myFoldersqwjfrwe2342941jsdvnvjsdjfhsef</Title>
      </Container>
    )
  }
}
