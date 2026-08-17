import { Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import ForgotPassword from './pages/ForgotPassword.jsx'
import ResetPassword from './pages/ResetPassword.jsx'
import Jobs from './pages/Jobs.jsx'
import JobDetails from './pages/JobDetails.jsx'
import ApplyJob from './pages/ApplyJob.jsx'
import MyApplications from './pages/MyApplications.jsx'

function Home() {
  return (
    <div className="app">
      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <div className="logo">HireSphere</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/jobs">Find Jobs</a>
          <a href="/companies">Companies</a>
          <a href="/about">About</a>
        </nav>

        <div className="nav-actions">
          <a href="/login" className="login-link">
            Log in
          </a>

          <a href="/register" className="signup-button">
            Get Started
          </a>
        </div>
      </header>

      {/* ================= MAIN ================= */}

      <main>

        {/* ================= HERO SECTION ================= */}

        <section className="hero-section">
          <div className="hero-content">

            <div className="hero-badge">
              Trusted hiring platform for modern careers
            </div>

            <h1>
              Find the right job.
              <br />
              Build your future.
            </h1>

            <p>
              HireSphere connects talented professionals with companies
              looking for their next great hire.
            </p>

            <div className="hero-actions">
              <button className="primary-button">
                Explore Jobs
              </button>

              <button className="secondary-button">
                For Employers
              </button>
            </div>

            <div className="hero-stats">
              <div>
                <strong>10K+</strong>
                <span>Jobs</span>
              </div>

              <div>
                <strong>5K+</strong>
                <span>Companies</span>
              </div>

              <div>
                <strong>50K+</strong>
                <span>Job Seekers</span>
              </div>
            </div>

          </div>
        </section>

        {/* ================= JOB SEARCH SECTION ================= */}

        <section className="search-section">
          <div className="search-container">

            <div className="search-heading">
              <h2>Find your next opportunity</h2>

              <p>
                Search thousands of jobs from companies hiring right now.
              </p>
            </div>

            <div className="search-box">

              <div className="search-field">
                <label htmlFor="job-title">
                  Job title
                </label>

                <input
                  id="job-title"
                  type="text"
                  placeholder="e.g. Java Developer"
                />
              </div>

              <div className="search-field">
                <label htmlFor="location">
                  Location
                </label>

                <input
                  id="location"
                  type="text"
                  placeholder="e.g. Mumbai"
                />
              </div>

              <div className="search-field">
                <label htmlFor="experience">
                  Experience
                </label>

                <select id="experience">
                  <option>Any experience</option>
                  <option>Fresher</option>
                  <option>1-3 years</option>
                  <option>3-5 years</option>
                  <option>5+ years</option>
                </select>
              </div>

              <button className="search-button">
                Search Jobs
              </button>

            </div>

          </div>
        </section>

        {/* ================= FEATURED JOBS SECTION ================= */}

        <section className="featured-jobs-section">
          <div className="featured-jobs-container">

            <div className="featured-jobs-heading">

              <div>
                <span className="section-label">
                  OPPORTUNITIES
                </span>

                <h2>
                  Featured jobs
                </h2>

                <p>
                  Discover roles from companies looking for talented
                  professionals like you.
                </p>
              </div>

              <button className="view-all-button">
                View all jobs →
              </button>

            </div>

            <div className="job-grid">

              {/* Job Card 1 */}

              <article className="job-card">

                <div className="company-logo-placeholder">
                  G
                </div>

                <div className="job-card-content">

                  <span className="company-name">
                    GlobalTech
                  </span>

                  <h3>
                    Java Backend Developer
                  </h3>

                  <p className="job-location">
                    Mumbai, Maharashtra
                  </p>

                  <div className="job-meta">
                    <span>Full-time</span>
                    <span>2+ years</span>
                    <span>₹8L - ₹14L</span>
                  </div>

                </div>

                <button className="job-view-button">
                  View Job
                </button>

              </article>

              {/* Job Card 2 */}

              <article className="job-card">

                <div className="company-logo-placeholder">
                  T
                </div>

                <div className="job-card-content">

                  <span className="company-name">
                    TechNova
                  </span>

                  <h3>
                    Spring Boot Developer
                  </h3>

                  <p className="job-location">
                    Bengaluru, Karnataka
                  </p>

                  <div className="job-meta">
                    <span>Full-time</span>
                    <span>1-3 years</span>
                    <span>₹7L - ₹12L</span>
                  </div>

                </div>

                <button className="job-view-button">
                  View Job
                </button>

              </article>

              {/* Job Card 3 */}

              <article className="job-card">

                <div className="company-logo-placeholder">
                  A
                </div>

                <div className="job-card-content">

                  <span className="company-name">
                    Apex Systems
                  </span>

                  <h3>
                    Software Engineer
                  </h3>

                  <p className="job-location">
                    Pune, Maharashtra
                  </p>

                  <div className="job-meta">
                    <span>Full-time</span>
                    <span>0-2 years</span>
                    <span>₹6L - ₹10L</span>
                  </div>

                </div>

                <button className="job-view-button">
                  View Job
                </button>

              </article>

              {/* Job Card 4 */}

              <article className="job-card">

                <div className="company-logo-placeholder">
                  N
                </div>

                <div className="job-card-content">

                  <span className="company-name">
                    NextGen Labs
                  </span>

                  <h3>
                    Backend Engineer
                  </h3>

                  <p className="job-location">
                    Hyderabad, Telangana
                  </p>

                  <div className="job-meta">
                    <span>Full-time</span>
                    <span>2-4 years</span>
                    <span>₹9L - ₹15L</span>
                  </div>

                </div>

                <button className="job-view-button">
                  View Job
                </button>

              </article>

            </div>

          </div>
        </section>

        {/* ================= POPULAR JOB CATEGORIES ================= */}

        <section className="categories-section">
          <div className="categories-container">

            <div className="categories-heading">

              <span className="section-label">
                EXPLORE OPPORTUNITIES
              </span>

              <h2>
                Popular job categories
              </h2>

              <p>
                Explore careers across the most in-demand industries
                and professional fields.
              </p>

            </div>

            <div className="categories-grid">

              <article className="category-card">
                <div className="category-icon">
                  💻
                </div>

                <h3>
                  Software Development
                </h3>

                <p>
                  2,400+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  📊
                </div>

                <h3>
                  Data Science
                </h3>

                <p>
                  1,200+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  🎨
                </div>

                <h3>
                  Design & Creative
                </h3>

                <p>
                  850+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  📣
                </div>

                <h3>
                  Marketing
                </h3>

                <p>
                  950+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  💰
                </div>

                <h3>
                  Finance
                </h3>

                <p>
                  720+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  🤝
                </div>

                <h3>
                  Sales
                </h3>

                <p>
                  1,100+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  🧑‍💼
                </div>

                <h3>
                  Product Management
                </h3>

                <p>
                  640+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

              <article className="category-card">
                <div className="category-icon">
                  🎧
                </div>

                <h3>
                  Customer Support
                </h3>

                <p>
                  540+ jobs
                </p>

                <span className="category-arrow">
                  →
                </span>
              </article>

            </div>

          </div>
        </section>

        {/* ================= TOP COMPANIES ================= */}

        <section className="companies-section">
          <div className="companies-container">

            <div className="companies-heading">

              <span className="section-label">
                GREAT PLACES TO WORK
              </span>

              <h2>
                Top companies hiring
              </h2>

              <p>
                Explore opportunities from companies building the future.
              </p>

            </div>

            <div className="companies-grid">

              <article className="company-card">
                <div className="company-brand">
                  G
                </div>

                <h3>
                  Google
                </h3>

                <p>
                  Technology
                </p>

                <span>
                  420+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  M
                </div>

                <h3>
                  Microsoft
                </h3>

                <p>
                  Technology
                </p>

                <span>
                  380+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  A
                </div>

                <h3>
                  Amazon
                </h3>

                <p>
                  E-commerce & Technology
                </p>

                <span>
                  510+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  T
                </div>

                <h3>
                  TCS
                </h3>

                <p>
                  IT Services
                </p>

                <span>
                  760+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  I
                </div>

                <h3>
                  Infosys
                </h3>

                <p>
                  IT Services
                </p>

                <span>
                  540+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  A
                </div>

                <h3>
                  Accenture
                </h3>

                <p>
                  Consulting & Technology
                </p>

                <span>
                  620+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  D
                </div>

                <h3>
                  Deloitte
                </h3>

                <p>
                  Consulting
                </p>

                <span>
                  310+ open roles
                </span>
              </article>

              <article className="company-card">
                <div className="company-brand">
                  I
                </div>

                <h3>
                  IBM
                </h3>

                <p>
                  Technology
                </p>

                <span>
                  290+ open roles
                </span>
              </article>

            </div>

          </div>
        </section>

        {/* ================= HOW HIRESHPERE WORKS ================= */}

        <section className="how-it-works-section">
          <div className="how-it-works-container">

            <div className="how-it-works-heading">

              <span className="section-label">
                SIMPLE & POWERFUL
              </span>

              <h2>
                How HireSphere works
              </h2>

              <p>
                Find your next opportunity in three simple steps.
              </p>

            </div>

            <div className="steps-grid">

              <article className="step-card">

                <div className="step-number">
                  01
                </div>

                <div className="step-icon">
                  👤
                </div>

                <h3>
                  Create your profile
                </h3>

                <p>
                  Build your professional profile, add your skills,
                  experience and resume.
                </p>

              </article>

              <article className="step-card">

                <div className="step-number">
                  02
                </div>

                <div className="step-icon">
                  🔎
                </div>

                <h3>
                  Discover the right jobs
                </h3>

                <p>
                  Search and explore opportunities that match
                  your skills, experience and goals.
                </p>

              </article>

              <article className="step-card">

                <div className="step-number">
                  03
                </div>

                <div className="step-icon">
                  🚀
                </div>

                <h3>
                  Apply & get hired
                </h3>

                <p>
                  Apply to jobs, track your applications and
                  move closer to your next career opportunity.
                </p>

              </article>

            </div>

          </div>
        </section>

        {/* ================= CTA SECTION ================= */}

        <section className="cta-section">
          <div className="cta-container">

            <div className="candidate-cta">
              <span className="section-label">
                FOR JOB SEEKERS
              </span>

              <h2>
                Ready to find your next opportunity?
              </h2>

              <p>
                Discover jobs that match your skills, experience and
                career goals.
              </p>

              <button className="cta-primary-button">
                Find Jobs →
              </button>
            </div>

            <div className="employer-cta">
              <span className="section-label">
                FOR EMPLOYERS
              </span>

              <h2>
                Find your next great hire.
              </h2>

              <p>
                Reach talented professionals and build your team
                with HireSphere.
              </p>

              <button className="cta-secondary-button">
                Post a Job →
              </button>
            </div>

          </div>
        </section>

        {/* ================= FOOTER ================= */}

        <footer className="footer">
          <div className="footer-container">

            <div className="footer-brand">
              <div className="footer-logo">
                HireSphere
              </div>

              <p>
                Connecting talented professionals with companies
                building the future.
              </p>
            </div>

            <div className="footer-column">
              <h3>
                For Candidates
              </h3>

              <a href="/jobs">
                Find Jobs
              </a>

              <a href="/companies">
                Explore Companies
              </a>

              <a href="/career-resources">
                Career Resources
              </a>

              <a href="/applications">
                My Applications
              </a>
            </div>

            <div className="footer-column">
              <h3>
                For Employers
              </h3>

              <a href="/post-job">
                Post a Job
              </a>

              <a href="/candidates">
                Find Candidates
              </a>

              <a href="/employer-resources">
                Employer Resources
              </a>

              <a href="/pricing">
                Pricing
              </a>
            </div>

            <div className="footer-column">
              <h3>
                Company
              </h3>

              <a href="/about">
                About HireSphere
              </a>

              <a href="/contact">
                Contact
              </a>

              <a href="/privacy">
                Privacy Policy
              </a>

              <a href="/terms">
                Terms & Conditions
              </a>
            </div>

          </div>

          <div className="footer-bottom">
            <p>
              © 2026 HireSphere. All rights reserved.
            </p>

            <div className="footer-bottom-links">
              <a href="/privacy">
                Privacy
              </a>

              <a href="/terms">
                Terms
              </a>

              <a href="/contact">
                Contact
              </a>
            </div>
          </div>
        </footer>


      </main>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobs/:id" element={<JobDetails />} />
      <Route path="/jobs/:id/apply" element={<ApplyJob />} />
      <Route
      path="/my-applications"
      element={<MyApplications />}
/>
    </Routes>
  )
}

export default App