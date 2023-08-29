import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import MatchCard from '../MatchCard'
import LatestMatch from '../LatestMatch'

//  import {Link} from 'react-router-dom'

const colors = {
  CSK: '#f7db00',
  RCB: '#d91c1f',
  KKR: '#5755a7',
  KXP: '#a4261d',
  RR: ' #da237b',
  MI: '#13418b',
  SRH: '#f26d22',
  DC: '#4f5db0',
}

class TeamMatches extends Component {
  state = {eachTeamDetails: [], isLoading: true}

  componentDidMount() {
    this.getEachTeamDetails()
  }

  renderLoader = () => (
    <div data-testid="loader" className="inside-matchCard">
      <Loader type="TailSpin" color="#475569" height={40} width={40} />
    </div>
  )

  getEachTeamDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      id,
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        result: data.latest_match_details.result,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        // use value of the key 'competing_team' for alt as `latest match ${competing_team}`
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
      },
      recentMatches: [
        data.recent_matches.map(eachItem => ({
          umpires: eachItem.umpires,
          result: eachItem.result,
          manOfTheMatch: eachItem.man_of_the_match,
          id: eachItem.id,
          date: eachItem.date,
          venue: eachItem.venue,
          competingTeam: eachItem.competing_team,
          competingTeamLogo: eachItem.competing_team_logo,
          // use value of the key 'competing_team' for alt as `competing team ${competing_team}`
          firstInnings: eachItem.first_innings,
          secondInnings: eachItem.second_innings,
          matchStatus: eachItem.match_status,
        })),
      ],
    }

    this.setState({eachTeamDetails: updatedData, isLoading: false})
  }

  renderTheTeamDetails() {
    const {eachTeamDetails} = this.state
    const {
      teamBannerUrl,
      id,
      latestMatchDetails,
      recentMatches,
    } = eachTeamDetails
    const containerStyle = {
      backgroundColor: colors[id],
    }
    return (
      <div className="TeamMatch-container" style={containerStyle}>
        <img
          src={teamBannerUrl}
          alt="team banner"
          className="team-banner-image"
        />
        <h1 className="latestMatches-heading">Latest Matches</h1>
        <LatestMatch
          latestMatchDetails={latestMatchDetails}
          key={latestMatchDetails.id}
        />
        <ul className="matchCards-unorderedList">
          {recentMatches[0].map(eachMatch => (
            <MatchCard recentMatch={eachMatch} key={eachMatch.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="inside-matchCard">
        {isLoading ? this.renderLoader() : this.renderTheTeamDetails()}
      </div>
    )
  }
}

export default TeamMatches
