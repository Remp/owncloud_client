import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Component from './Storage'

const selector = createStructuredSelector({})

const actions = {}

export const Storage = connect(
  selector,
  actions
)(Component)
