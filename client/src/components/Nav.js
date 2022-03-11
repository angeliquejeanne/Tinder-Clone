import whiteLogo from '../images/tiinder-white.png'
import colorLogo from '../images/512px-Tinder.png'

const Nav = ({ minimal, setShowModal, showModal, setIsSignUp }) => {

    const handleClick = () => {
        setShowModal(true)
        setIsSignUp(false)
    }

    const authToken = false

    return (
        <nav>
            <div className="logo-container">
                <img src={minimal ? colorLogo : whiteLogo} alt="" className="logo" />
            </div>

            {!authToken && !minimal && <button 
                className="nav-button"
                onClick={handleClick}
                disabled={showModal}
            >Log in </button>}
        </nav>
    )
}
export default Nav