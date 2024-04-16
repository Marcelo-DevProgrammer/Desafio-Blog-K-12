import './SingIn.css';

function SingIn() {
    return(
        <div className="singin-page">
            <div className="box">
            <h1 className="title-page-singin">Sing In</h1>
            <p className="description-titlesingin">Already have an account?<a className="description-link" href="http://localhost:3000/login">Log in</a></p>
            <p className="nome">Nome:</p>
            <input type="name" className="input" placeholder="Nome..." />
            <p className="email">Email:</p>
            <input type="email" className="input" placeholder="Email..." />
            <p className="password">Password:</p>
            <input type="password" className="input" placeholder="Password..." />
            <button className="button-singin-page">Login</button>
            </div>
        </div>
        );
}

export default SingIn;