import './ForgotPassword.css'

function ForgotPassword() {
  return (
    <div className="forgot-password-page">

      <div className="forgot-password-card">

        <div className="forgot-password-header">
          <h1>Forgot your password?</h1>

          <p>
            Enter your email address and we'll help you reset your password.
          </p>
        </div>

        <form className="forgot-password-form">

          <div className="form-group">
            <label htmlFor="forgotEmail">
              Email address
            </label>

            <input
              id="forgotEmail"
              type="email"
              placeholder="Enter your email"
            />
          </div>

          <button
            type="submit"
            className="forgot-password-button"
          >
            Send reset link
          </button>

        </form>

        <div className="back-to-login">
          <a href="/login">
            ← Back to sign in
          </a>
        </div>

      </div>

    </div>
  )
}

export default ForgotPassword