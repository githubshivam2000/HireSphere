import './Register.css'

function Register() {
  return (
    <div className="register-page">

      <div className="register-card">

        <div className="register-header">
          <h1>Create your account</h1>

          <p>
            Join HireSphere and discover your next opportunity
          </p>
        </div>

        <form className="register-form">

          <div className="form-row">

            <div className="form-group">
              <label htmlFor="firstName">
                First name
              </label>

              <input
                id="firstName"
                type="text"
                placeholder="Enter first name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="lastName">
                Last name
              </label>

              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
              />
            </div>

          </div>

          <div className="form-group">
            <label htmlFor="registerEmail">
              Email address
            </label>

            <input
              id="registerEmail"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="registerPassword">
              Password
            </label>

            <input
              id="registerPassword"
              type="password"
              placeholder="Create a password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="role">
              I am a
            </label>

            <select id="role">
              <option value="candidate">
                Candidate
              </option>

              <option value="recruiter">
                Recruiter
              </option>
            </select>
          </div>

          <label className="terms-checkbox">
            <input type="checkbox" />

            <span>
              I agree to the
              <a href="/terms"> Terms & Conditions</a>
              {' '}and
              <a href="/privacy"> Privacy Policy</a>
            </span>
          </label>

          <button
            type="submit"
            className="register-button"
          >
            Create account
          </button>

        </form>

        <div className="register-divider">
          <span>OR</span>
        </div>

        <div className="social-register">

          <button type="button">
            Continue with Google
          </button>

          <button type="button">
            Continue with GitHub
          </button>

        </div>

        <div className="login-link-register">
          <p>
            Already have an account?
            <a href="/login"> Sign in</a>
          </p>
        </div>

      </div>

    </div>
  )
}

export default Register