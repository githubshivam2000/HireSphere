import './MyApplications.css'

const applications = [
  {
    id: 1,
    company: 'GlobalTech',
    logo: 'G',
    title: 'Java Backend Developer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    salary: '₹8L - ₹14L',
    appliedDate: 'Today',
    status: 'Applied'
  },

  {
    id: 2,
    company: 'TechNova',
    logo: 'T',
    title: 'Spring Boot Developer',
    location: 'Bengaluru, Karnataka',
    type: 'Full-time',
    salary: '₹7L - ₹12L',
    appliedDate: 'Yesterday',
    status: 'Shortlisted'
  },

  {
    id: 3,
    company: 'Apex Systems',
    logo: 'A',
    title: 'Software Engineer',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    salary: '₹6L - ₹10L',
    appliedDate: '4 days ago',
    status: 'Under Review'
  }
]

function MyApplications() {
  return (
    <div className="my-applications-page">

      {/* ================= HEADER ================= */}

      <section className="my-applications-header">
        <div className="my-applications-container">

          <span className="section-label">
            CANDIDATE DASHBOARD
          </span>

          <h1>
            My Applications
          </h1>

          <p>
            Track your job applications and see where you stand.
          </p>

        </div>
      </section>

      {/* ================= SUMMARY ================= */}

      <section className="applications-summary-section">

        <div className="my-applications-container">

          <div className="applications-summary-grid">

            <div className="application-stat-card">
              <span>
                Total Applications
              </span>

              <strong>
                3
              </strong>
            </div>

            <div className="application-stat-card">
              <span>
                Under Review
              </span>

              <strong>
                1
              </strong>
            </div>

            <div className="application-stat-card">
              <span>
                Shortlisted
              </span>

              <strong>
                1
              </strong>
            </div>

            <div className="application-stat-card">
              <span>
                Interviews
              </span>

              <strong>
                0
              </strong>
            </div>

          </div>

        </div>

      </section>

      {/* ================= APPLICATION LIST ================= */}

      <section className="applications-list-section">

        <div className="my-applications-container">

          <div className="applications-list-heading">

            <div>
              <h2>
                Your applications
              </h2>

              <p>
                Keep track of every opportunity you've applied for.
              </p>
            </div>

            <select className="application-filter">
              <option>
                All applications
              </option>

              <option>
                Applied
              </option>

              <option>
                Under Review
              </option>

              <option>
                Shortlisted
              </option>

              <option>
                Rejected
              </option>
            </select>

          </div>

          <div className="applications-list">

            {applications.map((application) => (

              <article
                className="application-card"
                key={application.id}
              >

                <div className="application-card-logo">
                  {application.logo}
                </div>

                <div className="application-card-content">

                  <span className="application-card-company">
                    {application.company}
                  </span>

                  <h3>
                    {application.title}
                  </h3>

                  <p>
                    {application.location}
                  </p>

                  <div className="application-card-meta">

                    <span>
                      {application.type}
                    </span>

                    <span>
                      {application.salary}
                    </span>

                    <span>
                      Applied {application.appliedDate}
                    </span>

                  </div>

                </div>

                <div className="application-card-status">

                  <span
                    className={`application-status status-${application.status
                      .toLowerCase()
                      .replace(/\s+/g, '-')}`}
                  >
                    {application.status}
                  </span>

                  <button className="view-application-button">
                    View Application
                  </button>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>

    </div>
  )
}

export default MyApplications