import './Jobs.css'

function Jobs() {
  return (
    <div className="jobs-page">

      {/* ================= HEADER ================= */}

      <section className="jobs-header">
        <div className="jobs-header-container">
          <span className="section-label">
            OPPORTUNITIES
          </span>

          <h1>
            Find your next job
          </h1>

          <p>
            Explore opportunities that match your skills,
            experience and career goals.
          </p>
        </div>
      </section>

      {/* ================= SEARCH ================= */}

      <section className="jobs-search-section">
        <div className="jobs-container">

          <div className="jobs-search-box">

            <div className="jobs-search-field">
              <label htmlFor="jobSearch">
                Job title
              </label>

              <input
                id="jobSearch"
                type="text"
                placeholder="Java Developer"
              />
            </div>

            <div className="jobs-search-field">
              <label htmlFor="jobLocation">
                Location
              </label>

              <input
                id="jobLocation"
                type="text"
                placeholder="Mumbai"
              />
            </div>

            <div className="jobs-search-field">
              <label htmlFor="jobExperience">
                Experience
              </label>

              <select id="jobExperience">
                <option>Any experience</option>
                <option>Fresher</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5+ years</option>
              </select>
            </div>

            <button className="jobs-search-button">
              Search Jobs
            </button>

          </div>

        </div>
      </section>

      {/* ================= JOBS ================= */}

      <section className="jobs-list-section">
        <div className="jobs-container">

          <div className="jobs-list-heading">
            <div>
              <h2>
                Latest opportunities
              </h2>

              <p>
                1,248 jobs available
              </p>
            </div>

            <select className="sort-select">
              <option>Most relevant</option>
              <option>Newest</option>
              <option>Salary: High to Low</option>
              <option>Salary: Low to High</option>
            </select>
          </div>

          <div className="jobs-grid">

            {/* ================= JOB 1 ================= */}

            <article className="job-list-card">

              <div className="job-company-logo">
                G
              </div>

              <div className="job-list-content">

                <span className="job-company">
                  GlobalTech
                </span>

                <h3>
                  Java Backend Developer
                </h3>

                <p className="job-list-location">
                  Mumbai, Maharashtra
                </p>

                <div className="job-list-meta">
                  <span>
                    Full-time
                  </span>

                  <span>
                    2+ years
                  </span>

                  <span>
                    ₹8L - ₹14L
                  </span>
                </div>

                <p className="job-description">
                  Build scalable backend services using Java,
                  Spring Boot, REST APIs and MySQL.
                </p>

              </div>

              <a
                href="/jobs/1"
                className="job-details-button"
              >
                View Details
              </a>

            </article>

            {/* ================= JOB 2 ================= */}

            <article className="job-list-card">

              <div className="job-company-logo">
                T
              </div>

              <div className="job-list-content">

                <span className="job-company">
                  TechNova
                </span>

                <h3>
                  Spring Boot Developer
                </h3>

                <p className="job-list-location">
                  Bengaluru, Karnataka
                </p>

                <div className="job-list-meta">
                  <span>
                    Full-time
                  </span>

                  <span>
                    1-3 years
                  </span>

                  <span>
                    ₹7L - ₹12L
                  </span>
                </div>

                <p className="job-description">
                  Develop RESTful microservices and backend
                  applications using Spring Boot.
                </p>

              </div>

             <a
  href="/jobs/2"
  className="job-details-button"
>
  View Details
</a>

            </article>

            {/* ================= JOB 3 ================= */}

            <article className="job-list-card">

              <div className="job-company-logo">
                A
              </div>

              <div className="job-list-content">

                <span className="job-company">
                  Apex Systems
                </span>

                <h3>
                  Software Engineer
                </h3>

                <p className="job-list-location">
                  Pune, Maharashtra
                </p>

                <div className="job-list-meta">
                  <span>
                    Full-time
                  </span>

                  <span>
                    0-2 years
                  </span>

                  <span>
                    ₹6L - ₹10L
                  </span>
                </div>

                <p className="job-description">
                  Work on modern software systems and
                  contribute to full product development.
                </p>

              </div>

         <a
  href="/jobs/3"
  className="job-details-button"
>
  View Details
</a>
            </article>

            {/* ================= JOB 4 ================= */}

            <article className="job-list-card">

              <div className="job-company-logo">
                N
              </div>

              <div className="job-list-content">

                <span className="job-company">
                  NextGen Labs
                </span>

                <h3>
                  Backend Engineer
                </h3>

                <p className="job-list-location">
                  Hyderabad, Telangana
                </p>

                <div className="job-list-meta">
                  <span>
                    Full-time
                  </span>

                  <span>
                    2-4 years
                  </span>

                  <span>
                    ₹9L - ₹15L
                  </span>
                </div>

                <p className="job-description">
                  Design backend systems, APIs and scalable
                  services for enterprise applications.
                </p>

              </div>

             <a
  href="/jobs/4"
  className="job-details-button"
>
  View Details
</a>

            </article>

          </div>

        </div>
      </section>

    </div>
  )
}

export default Jobs