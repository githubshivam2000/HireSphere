import { useParams } from 'react-router-dom'
import { useState } from 'react'
import './ApplyJob.css'

const jobs = {
  1: {
    company: 'GlobalTech',
    logo: 'G',
    title: 'Java Backend Developer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '2+ years',
    salary: '₹8L - ₹14L'
  },

  2: {
    company: 'TechNova',
    logo: 'T',
    title: 'Spring Boot Developer',
    location: 'Bengaluru, Karnataka',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹7L - ₹12L'
  },

  3: {
    company: 'Apex Systems',
    logo: 'A',
    title: 'Software Engineer',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '₹6L - ₹10L'
  },

  4: {
    company: 'NextGen Labs',
    logo: 'N',
    title: 'Backend Engineer',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹9L - ₹15L'
  }
}

function ApplyJob() {

  const { id } = useParams()

  const job = jobs[id]

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: 'Fresher',
    resume: null,
    skills: '',
    coverLetter: '',
    termsAccepted: false
  })

  const [errors, setErrors] = useState({})

  const [submitted, setSubmitted] = useState(false)

  if (!job) {
    return (
      <div className="apply-job-page">
        <section className="apply-job-header">
          <div className="apply-job-container">

            <span className="section-label">
              JOB APPLICATION
            </span>

            <h1>
              Job not found
            </h1>

            <p>
              The job you are trying to apply for does not exist.
            </p>

          </div>
        </section>
      </div>
    )
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })

    setSubmitted(false)
  }

  const handleResumeChange = (e) => {
    const file = e.target.files[0]

    setFormData({
      ...formData,
      resume: file
    })

    setErrors({
      ...errors,
      resume: ''
    })

    setSubmitted(false)
  }

  const handleTermsChange = (e) => {
    setFormData({
      ...formData,
      termsAccepted: e.target.checked
    })

    setErrors({
      ...errors,
      termsAccepted: ''
    })

    setSubmitted(false)
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Enter a valid email address.'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.'
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number.'
    }

    if (!formData.resume) {
      newErrors.resume = 'Please upload your resume.'
    } else {

      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ]

      const maxSize = 5 * 1024 * 1024

      if (!allowedTypes.includes(formData.resume.type)) {
        newErrors.resume =
          'Only PDF, DOC or DOCX files are allowed.'
      } else if (formData.resume.size > maxSize) {
        newErrors.resume =
          'Resume must be smaller than 5 MB.'
      }
    }

    if (!formData.skills.trim()) {
      newErrors.skills = 'Please enter your skills.'
    }

    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter =
        'Cover letter is required.'
    } else if (
      formData.coverLetter.trim().length < 30
    ) {
      newErrors.coverLetter =
        'Cover letter should contain at least 30 characters.'
    }

    if (!formData.termsAccepted) {
      newErrors.termsAccepted =
        'You must accept the application terms.'
    }

    return newErrors
  }

  const handleSubmit = () => {

  setSubmitted(false)

  const validationErrors = validateForm()

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors)
    return
  }

  setErrors({})

  const existingApplications =
    JSON.parse(
      localStorage.getItem('hireSphereApplications') || '[]'
    )

  const newApplication = {
    id: Date.now(),
    jobId: id,
    company: job.company,
    logo: job.logo,
    title: job.title,
    location: job.location,
    type: job.type,
    salary: job.salary,
    experience: job.experience,
    appliedDate: 'Today',
    status: 'Applied',

    applicant: {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      experience: formData.experience,
      skills: formData.skills,
      coverLetter: formData.coverLetter,
      resumeName: formData.resume?.name || ''
    }
  }

  const updatedApplications = [
    ...existingApplications,
    newApplication
  ]

  localStorage.setItem(
    'hireSphereApplications',
    JSON.stringify(updatedApplications)
  )

  setSubmitted(true)

  console.log(
    'Application saved:',
    newApplication
  )
}

  return (
    <div className="apply-job-page">

      {/* ================= HEADER ================= */}

      <section className="apply-job-header">
        <div className="apply-job-container">

          <span className="section-label">
            JOB APPLICATION
          </span>

          <h1>
            Apply for {job.title}
          </h1>

          <p>
            {job.company} · {job.location}
          </p>

        </div>
      </section>

      {/* ================= SUCCESS MESSAGE ================= */}

      {submitted && (
        <div className="application-success-message">

          <strong>
            Application submitted successfully!
          </strong>

          <span>
            Your application for {job.title} at {job.company}
            has been recorded for this demo.
          </span>

        </div>
      )}

      {/* ================= APPLICATION ================= */}

      <section className="apply-job-section">

        <div className="apply-job-layout">

          <main className="application-form-card">

            <div className="application-section-header">

              <h2>
                Your application
              </h2>

              <p>
                Complete the details below to submit your application.
              </p>

            </div>

            {/* ================= PERSONAL INFORMATION ================= */}

            <div className="application-form-section">

              <h3>
                Personal information
              </h3>

              <div className="application-form-grid">

                <div className="application-field">

                  <label htmlFor="fullName">
                    Full name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                  />

                  {errors.fullName && (
                    <span className="field-error">
                      {errors.fullName}
                    </span>
                  )}

                </div>

                <div className="application-field">

                  <label htmlFor="email">
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />

                  {errors.email && (
                    <span className="field-error">
                      {errors.email}
                    </span>
                  )}

                </div>

                <div className="application-field">

                  <label htmlFor="phone">
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />

                  {errors.phone && (
                    <span className="field-error">
                      {errors.phone}
                    </span>
                  )}

                </div>

                <div className="application-field">

                  <label htmlFor="experience">
                    Experience
                  </label>

                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                  >
                    <option value="Fresher">
                      Fresher
                    </option>

                    <option value="1-2 years">
                      1-2 years
                    </option>

                    <option value="2-4 years">
                      2-4 years
                    </option>

                    <option value="4-6 years">
                      4-6 years
                    </option>

                    <option value="6+ years">
                      6+ years
                    </option>
                  </select>

                </div>

              </div>

            </div>

            {/* ================= RESUME ================= */}

            <div className="application-form-section">

              <h3>
                Resume
              </h3>

              <div className="resume-upload-box">

                <div className="resume-upload-icon">
                  📄
                </div>

                <div className="resume-upload-content">

                  <h4>
                    Upload your resume
                  </h4>

                  <p>
                    PDF, DOC or DOCX · Maximum 5 MB
                  </p>

                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleResumeChange}
                  />

                  <label
                    htmlFor="resume"
                    className="resume-upload-button"
                  >
                    Choose Resume
                  </label>

                  {formData.resume && (
                    <p>
                      Selected: {formData.resume.name}
                    </p>
                  )}

                  {errors.resume && (
                    <span className="field-error">
                      {errors.resume}
                    </span>
                  )}

                </div>

              </div>

            </div>

            {/* ================= SKILLS ================= */}

            <div className="application-form-section">

              <h3>
                Skills
              </h3>

              <div className="application-field">

                <label htmlFor="skills">
                  Your skills
                </label>

                <input
                  id="skills"
                  name="skills"
                  type="text"
                  placeholder="Java, Spring Boot, MySQL, REST API"
                  value={formData.skills}
                  onChange={handleInputChange}
                />

                {errors.skills && (
                  <span className="field-error">
                    {errors.skills}
                  </span>
                )}

              </div>

            </div>

            {/* ================= COVER LETTER ================= */}

            <div className="application-form-section">

              <h3>
                Cover letter
              </h3>

              <div className="application-field">

                <label htmlFor="coverLetter">
                  Message to the employer
                </label>

                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  rows="7"
                  placeholder="Tell the employer why you are a good fit for this role..."
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                />

                {errors.coverLetter && (
                  <span className="field-error">
                    {errors.coverLetter}
                  </span>
                )}

              </div>

            </div>

            {/* ================= TERMS ================= */}

            <label className="application-terms">

              <input
                id="termsAccepted"
                name="termsAccepted"
                type="checkbox"
                checked={formData.termsAccepted}
                onChange={handleTermsChange}
              />

              <span>
                I confirm that the information provided is accurate
                and I agree to HireSphere's application terms.
              </span>

            </label>

            {errors.termsAccepted && (
              <span className="field-error terms-error">
                {errors.termsAccepted}
              </span>
            )}

            {/* ================= SUBMIT ================= */}

            <button
              type="button"
              className="submit-application-button"
              onClick={handleSubmit}
            >
              Submit Application
            </button>

          </main>

          {/* ================= SIDEBAR ================= */}

          <aside className="application-sidebar">

            <div className="application-summary-card">

              <div className="application-company-logo">
                {job.logo}
              </div>

              <span className="application-company">
                {job.company}
              </span>

              <h2>
                {job.title}
              </h2>

              <p>
                {job.location}
              </p>

              <div className="application-summary-meta">

                <span>
                  {job.type}
                </span>

                <span>
                  {job.experience}
                </span>

                <span>
                  {job.salary}
                </span>

              </div>

            </div>

            <div className="application-tips-card">

              <h3>
                Application tips
              </h3>

              <ul>

                <li>
                  Keep your resume updated.
                </li>

                <li>
                  Highlight skills relevant to the job.
                </li>

                <li>
                  Write a clear and professional cover letter.
                </li>

                <li>
                  Review your information before submitting.
                </li>

              </ul>

            </div>

          </aside>

        </div>

      </section>

    </div>
  )
}

export default ApplyJob