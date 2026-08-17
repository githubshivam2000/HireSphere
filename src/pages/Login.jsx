import './Login.css'

function Login() {
  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-header">
          <h1>Welcome back</h1>

          <p>
            Sign in to continue to HireSphere
          </p>
        </div>

        <form className="login-form">

          <div className="form-group">
            <label htmlFor="email">
              Email address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="/forgot-password">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="login-button"
          >
            Sign in
          </button>

        </form>

        <div className="login-divider">
          <span>OR</span>
        </div>

        <div className="social-login">

          <button type="button">
            Continue with Google
          </button>

          <button type="button">
            Continue with GitHub
          </button>

        </div>

        <div className="register-link">
          <p>
            Don't have an account?
            <a href="/register"> Create account</a>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Login