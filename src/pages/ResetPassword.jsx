import './ResetPassword.css'

function ResetPassword() {
  return (
    <div className="reset-password-page">

      <div className="reset-password-card">

        <div className="reset-password-header">
          <h1>Reset your password</h1>

          <p>
            Create a new password for your HireSphere account.
          </p>
        </div>

        <form className="reset-password-form">

          <div className="form-group">
            <label htmlFor="newPassword">
              New password
            </label>

            <input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmNewPassword">
              Confirm new password
            </label>

            <input
              id="confirmNewPassword"
              type="password"
              placeholder="Confirm new password"
            />
          </div>

          <button
            type="submit"
            className="reset-password-button"
          >
            Reset password
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

export default ResetPassword