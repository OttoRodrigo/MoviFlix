import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import './Login.css'

const Login = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const auth = useAuth();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = async (e) =>{
        e.preventDefault();
        setError('');
        setIsLoading(true);

        const result = auth.login(email, password);

        if(result.sucess){
            navigate(from, {replace: true});
        }
        else{
            setError(result.message);
        }

        setIsLoading(false);
    }

    return(
        <div className="login-container">
            <div className="login-card">
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>

                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="admin@admin.com"
                        required disabled={isLoading}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="admin"
                        required disabled={isLoading}
                        />
                    </div>

                    <button type="submit" className="login-button"
                    disabled={isLoading}>
                        {isLoading ? "Entrando..." : "Entrar"}
                    </button>

                    <div className="login-hint">
                        <p>Use: admin@admin.com / admin</p>
                    </div>

                </form>

            </div>
        </div>
    );
}

export default Login;