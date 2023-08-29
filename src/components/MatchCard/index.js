import './index.css'

const MatchCard = props => {
  const {recentMatch} = props
  const {matchStatus, competingTeam, result, competingTeamLogo} = recentMatch
  //    console.log(recentMatch)
  const statusColor = matchStatus === 'Lost' ? 'matchLost' : 'matchWin'
  return (
    <li className="matchCard-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competingMatchTeam"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
