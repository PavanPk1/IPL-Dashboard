import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {iplDetails} = props
  const {id, imageUrl, name} = iplDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-path">
      <li className="teamCard-container">
        <img src={imageUrl} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
