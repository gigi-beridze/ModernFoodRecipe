import Team from '../../data/team.json'
import './team.css'

const Teams = () => {
    return (
        <div className="team">
            <div className="container">
                <div className="title">
                    <span>TastyBites Team</span>
                </div>
                <div className="team-persons">
                    {Team.map((person) => (
                        <div className="team-person" key={person.name}>
                            <img src={person.image} alt={person.name} className="team-img" />
                            <span className="person-name">{person.name}</span>
                            <span className="person-role">{person.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Teams