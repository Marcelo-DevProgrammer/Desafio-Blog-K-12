import './Login.css';

function Login() {
    return(
        <div className="login-page">
            <div className="box">
                <h1 className="title-page-login">Login</h1>
                <p className="description-titlelogin">New in the site?<a className="description-link" href="http://localhost:3000/singin">Sing-In</a></p>
                <p className="email">Email:</p>
                <input type="email" className="input" placeholder="Email..." />
                <p className="password">Password:</p>
                <input type="password" className="input" placeholder="Password..." />
                <button className="button-login-page">Login</button>
            </div>
        </div>
    );
}   

export default Login;
