import errorImg from '../images/404error.gif'
import '../ErrorPage/ErrorPage.css'
import { useNavigate } from 'react-router-dom'

function ErrorPage() {
    let navigate = useNavigate()
    const backtohome = () => {
        navigate('/')
    }
    return (
        <>
            <div class="container">
                <div class="gif">
                    <img src={errorImg} alt="gif_ing" />
                </div>
                <div class="content">
                    <h1 class="main-heading">This page is gone.</h1>
                    <p>
                        ...maybe the page you're looking for is not found or never existed.
                    </p>
                    <a>
                        <button onClick={backtohome}>Back to home <i class="far fa-hand-point-right"></i></button>
                    </a>
                </div>
            </div>
        </>
    )
}

export default ErrorPage