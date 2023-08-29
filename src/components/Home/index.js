import './index.css'

import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, iplList: []}

  componentDidMount() {
    //  Call APIs Here
    this.getIplMatchList()
  }

  renderLoader = () => (
    <div data-testid="loader" className="inner-container">
      <Loader type="TailSpin" color="#475569" height={40} width={40} />
    </div>
  )

  getIplMatchList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.team_image_url,
    }))
    this.setState({isLoading: false, iplList: formattedData})
  }

  renderIplList = () => {
    const {iplList} = this.state
    return (
      <Link to="/" className="link-path">
        <div className="inner-container">
          <div className="dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="dashboard-heading">IPL Dashboard</h1>
          </div>
          <ul className="iplList-container">
            {iplList.map(eachItem => (
              <TeamCard key={eachItem.id} iplDetails={eachItem} />
            ))}
          </ul>
        </div>
      </Link>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? this.renderLoader() : this.renderIplList()}
      </div>
    )
  }
}

export default Home
