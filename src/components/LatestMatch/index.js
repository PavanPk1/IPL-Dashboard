import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    date,
    competingTeam,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchDetails
  return (
    <div className="LatestMatch-container">
      <div className="latestMatch-section1">
        <div>
          <p className="competingTeam-heading">{competingTeam}</p>
          <p className="competingTeam-date">{date}</p>
          <p className="competingTeam-venue">{venue}</p>
          <p className="competingTeam-result">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="competingTeam-logo"
        />
      </div>
      <hr className="hr-line" />
      <div className="latestMatch-section2">
        <h3>First Innings</h3>
        <p>{firstInnings}</p>

        <h3>Second Innings</h3>
        <p>{secondInnings}</p>

        <h3>Man of the Match</h3>
        <p>{manOfTheMatch}</p>

        <h3>Umpires</h3>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
