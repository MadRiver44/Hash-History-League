import { Component } from 'react'
import PropTypes from 'prop-types'
import { getTeam } from '../api'
import Loading from './Loading'

export default class Team extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  }
  state = {
    team: null,
  }
  componentDidMount() {
    this.fetchTeam(this.props.id)
  }
  // when we select a new team, new props are passed
  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.fetchTeam(nextProps.id)
    }
  }
  fetchTeam = id => {
    this.setState(() => ({ team: null }))
    getTeam(id).then(team => this.setState(() => ({ team })))
  }
  render() {
    // In Teams.js we define a function in Team Component
    // now we call it passing the team
    return this.props.children(this.state.team)
  }
}
