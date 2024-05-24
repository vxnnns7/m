import { useNavigate } from 'react-router-dom'
import '../HomePage/Navbar.css'

function Navbar() {
    let navigate = useNavigate()
    const callProfile = () => {
        navigate('/profile')
    }
    const callInstruction = () => {
        navigate('/instructions')
    }
    const callTutorials = () => {
        navigate('/tutorials')
    }
    const callHome = () => {
        navigate('/')
    }
    return (
        <>
            <div className="nav d-flex justify-content-between">
                <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        <b>ProgPuzzle</b>
                    </div>
                </div>
                <div className="nav-btn">
                    <label htmlFor="nav-check">
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links text-uppercase">
                    <a style={{ cursor: 'pointer' }} onClick={callHome}>Home</a>
                    <a style={{ cursor: 'pointer' }} onClick={callInstruction}>Instructions</a>
                    <a style={{ cursor: 'pointer' }} onClick={callTutorials}>Tutorials</a>
                    <a style={{ cursor: 'pointer' }} onClick={callProfile}>Profile</a>
                </div>
            </div>
        </>
    )
}

export default Navbar