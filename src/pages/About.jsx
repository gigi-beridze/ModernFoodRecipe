import { Player } from '@lottiefiles/react-lottie-player';
import TeamData from "../data/team.json"
import GithubIcon from "/images/github.svg"
import FacebookIcon from "/images/facebook.svg"
import '../style/about.css'

const About = () => {
    return (
        <div className="about">
            <div className="section-header">
                <h2>ჩვენს შესახებ</h2>
            </div>
            <div className="section-header-main">
                <div className="our-history">
                    <div className="lotie">
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_keh7ju3Is7.json"
                            style={{ height: '400px', width: '400px' }}>
                        </Player>
                    </div>
                    <div className="texts">
                        <h3>ჩვენი ვებ-საიტის შექმნის ისტორია</h3>
                        <p>TastyBites.ge არის ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის კომპიუტერული მეცნიერების მიმართულების სტუდენტების მიერ შექმნილი ვებ-საიტი, საგნისთვის “ჯგუფური პროექტი”.</p>
                    </div>
                </div>
                <div className="our-goal">
                    <div className="texts">
                        <h3>მიზანი</h3>
                        <p>საქართველოს ბაზარზე არ არსებობს ისეთი ვებგვერდი, რომლითაც მომხმარებელს მარტივად და სწრაფად შეუძლია კულინარიული რეცეპტების შესახებ მოიძიოს ინფორმაცია. მაგალითად, მომხმარებელს არ აქვს შესაბამისი ინფორმაცია საკვების კალორიულობაზე, მომზადებისთვის საჭირო ინგრედიენტების ფასზე და დროზე.</p>
                        <p>ჩვენი მიზანია შევქმნათ ისეთი მრავალფუნქციური ვებ-საიტი, სადაც მომხმარებელს შეეძლება რეცეპტის არჩევა, რის შემდეგაც მიჰყვება მომზადების ინსტრუქციას და შეძლებს სასურველი კერძის მომზადებას, ისე რომ წინასწარ ეცოდინება კერძზე დახარჯული თანხა, მის მოსამზადებლად დახარჯული დრო და კვებითი ღირებულება. რეცეპტის მოწონების შემთხვევაში მას შეეძლება შეინახოს აღნიშნული რეცეპტი, შეაფასოს 5-ბალიანი სისტემით და დატოვოს სასურველი კომენტარი. </p>
                    </div>
                    <div className="lotie">
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/packages/lf20_natclrl9.json"
                            style={{ height: '400px', width: '400px' }}>
                        </Player>
                    </div>
                </div>
                <div className="team-info">
                    {TeamData.map((person) => (
                        <div className="member-box" key={person.image}>
                            <div className="mem-photo">
                                <img src={person.image} alt="person_image" />
                            </div>
                            <h4>{person.name}</h4>
                            <p className="role">{person.role}</p>
                            <p className="exp">{person.comment}</p>
                            <div className="memb-icon">
                                <a href={person.github} target="_blank">
                                    <div className="github">
                                        <img src={GithubIcon} alt="github" />
                                    </div>
                                </a>
                                <a href={person.facebook} target="_blank">
                                    <div className="facebook">
                                        <img src={FacebookIcon} alt="facebook" />
                                    </div>
                                </a>
                            </div>
                        </div>    
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About