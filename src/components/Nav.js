import whiteLogo from '../images/tiinder-white.png'
import colorLogo from '../images/tinder-rond.png'

const Nav = ({ minimal }) => {

    return (
        <nav>
            <div className="logo-container">
                <img src={minimal ? colorLogo : whiteLogo} alt="" className="logo" />
            </div>
        </nav>
    )
}
export default Nav