import { NavLink } from "react-router-dom";
import "./footer.css"

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-section">
                <div className="footer-about">
                    <h3>about taplak</h3>
                    <p>Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima.</p>
                </div>
                <div className="footer-links">
                    <h3>stay updated</h3>
                    <div className="footer-links-ul">
                        <ul className="footer-nav">
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Home
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Recipes
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Blog
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                Contact
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/arrow.svg" alt="" />
                                About Us
                            </NavLink>
                        </ul>
                        <ul className="footer-info">
                            <NavLink to="/">
                                <img src="/images/footer-map.svg" alt="" />
                                Tbilisi, Saburtalo street
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/mobile.svg" alt="" />
                                +995 555-55-55-55
                            </NavLink>
                            <NavLink to="/">
                                <img src="/images/mail.svg" alt="" />
                                mail@gmail.com
                            </NavLink>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-end">
                <p>© 2023 Taplak Web Template. Made with  &hearts; by Gigi Beridze </p>
                <ul>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Recipes</NavLink>
                    <NavLink to="/">Blog</NavLink>
                    <NavLink to="/">Contact</NavLink>
                    <NavLink to="/">About Us</NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Footer