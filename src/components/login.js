import "./login.css";

function Login() {
    return (
        <div className="login-card-container">
            <div className="login-card">

                <div className="login-card-logo">
                    <div className="material-symbols-outlined logo">
                        code_blocks
                    </div>
                </div>

                <div className="login-card-header">
                    <h1>Sign In</h1>
                    <div>Please login to use the platform</div>
                </div>

                <form className="login-card-form">
                    {/* ID */}
                    <div className="form-item">
                    <span className="material-symbols-outlined mail">mail</span>
                        <input  type='text' placeholder="Enter Email" required autoFocus />
                    </div>
                    {/* Password */}
                    <div className="form-item">
                        <span className="material-symbols-outlined lock">lock</span>
                        <input type='password' placeholder="Enter Password" required />
                    </div>
                    {/* others */}
                    <div className="form-others">
                        <div className="check-box">
                            <input type='checkbox' id="RememberMe"/>
                            <label htmlFor="RememberMe">Remember me</label>
                        </div>
                        <a href="#">I forgot my password</a>
                    </div>
                    <button type="submit">SIGN IN</button>
                </form>

                <div className="login-card-footer">
                    <span>Don't have an account?</span>
                    <a href="#">Create a free account.</a>
                </div>

            </div>

        </div> 
    );
}

export default Login;