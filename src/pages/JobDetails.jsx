import { useParams } from 'react-router-dom'
import './JobDetails.css'

const jobs = {
  1: {
    company: 'GlobalTech',
    logo: 'G',
    title: 'Java Backend Developer',
    location: 'Mumbai, Maharashtra',
    type: 'Full-time',
    experience: '2+ years',
    salary: '₹8L - ₹14L',
    posted: '2 days ago',

    description: [
      'GlobalTech is looking for a talented Java Backend Developer to join our engineering team and build scalable, reliable backend systems.',
      'You will work closely with engineers, product teams and designers to develop high-quality APIs and backend services.'
    ],

    responsibilities: [
      'Design and develop scalable REST APIs.',
      'Build backend services using Java and Spring Boot.',
      'Work with MySQL and relational databases.',
      'Write clean, maintainable and testable code.',
      'Collaborate with frontend and product teams.'
    ],

    requirements: [
      'Strong knowledge of Java.',
      'Experience with Spring Boot.',
      'Understanding of REST APIs.',
      'Knowledge of SQL and MySQL.',
      'Good problem-solving and communication skills.'
    ],

    companyDescription:
      'GlobalTech builds technology products and engineering solutions for modern businesses.'
  },

  2: {
    company: 'TechNova',
    logo: 'T',
    title: 'Spring Boot Developer',
    location: 'Bengaluru, Karnataka',
    type: 'Full-time',
    experience: '1-3 years',
    salary: '₹7L - ₹12L',
    posted: '4 days ago',

    description: [
      'TechNova is looking for a Spring Boot Developer to build reliable and scalable backend applications.',
      'You will work with engineers and product teams to develop RESTful APIs and microservices.'
    ],

    responsibilities: [
      'Develop REST APIs using Spring Boot.',
      'Build and maintain backend microservices.',
      'Work with MySQL and JPA.',
      'Write unit tests and maintain code quality.',
      'Collaborate with frontend developers.'
    ],

    requirements: [
      'Strong Java fundamentals.',
      'Good knowledge of Spring Boot.',
      'Understanding of REST APIs.',
      'Knowledge of JPA and Hibernate.',
      'Understanding of SQL databases.'
    ],

    companyDescription:
      'TechNova builds modern software platforms and enterprise technology solutions.'
  },

  3: {
    company: 'Apex Systems',
    logo: 'A',
    title: 'Software Engineer',
    location: 'Pune, Maharashtra',
    type: 'Full-time',
    experience: '0-2 years',
    salary: '₹6L - ₹10L',
    posted: '5 days ago',

    description: [
      'Apex Systems is hiring Software Engineers to work on modern software products and engineering platforms.',
      'You will participate in the complete software development lifecycle.'
    ],

    responsibilities: [
      'Develop and maintain software applications.',
      'Write clean and maintainable code.',
      'Work with backend and frontend teams.',
      'Debug and resolve software issues.',
      'Participate in code reviews.'
    ],

    requirements: [
      'Knowledge of Java or another programming language.',
      'Good understanding of OOP concepts.',
      'Basic knowledge of databases.',
      'Understanding of REST APIs.',
      'Strong problem-solving skills.'
    ],

    companyDescription:
      'Apex Systems provides technology solutions and software engineering services to modern businesses.'
  },

  4: {
    company: 'NextGen Labs',
    logo: 'N',
    title: 'Backend Engineer',
    location: 'Hyderabad, Telangana',
    type: 'Full-time',
    experience: '2-4 years',
    salary: '₹9L - ₹15L',
    posted: '1 day ago',

    description: [
      'NextGen Labs is looking for a Backend Engineer to design scalable backend systems and APIs.',
      'You will work with engineering teams to build reliable enterprise applications.'
    ],

    responsibilities: [
      'Design and develop backend services.',
      'Create scalable REST APIs.',
      'Work with SQL and backend databases.',
      'Improve application performance.',
      'Collaborate with product and engineering teams.'
    ],

    requirements: [
      'Strong backend development experience.',
      'Good knowledge of Java and Spring Boot.',
      'Experience with REST APIs.',
      'Knowledge of SQL databases.',
      'Understanding of software design principles.'
    ],

    companyDescription:
      'NextGen Labs develops enterprise software platforms and scalable technology solutions.'
  }
}

function JobDetails() {
  const { id } = useParams()

  const job = jobs[id]

  if (!job) {
    return (
      <div className="job-details-page">
        <section className="job-details-content-section">
          <div className="job-details-container">
            <h1>Job not found</h1>
            <p>
              The job you are looking for does not exist.
            </p>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="job-details-page">

      {/* ================= HEADER ================= */}

      <section className="job-details-header">
        <div className="job-details-container">

          <div className="job-details-company-logo">
            {job.logo}
          </div>

          <div className="job-details-title-area">

            <span className="job-details-company">
              {job.company}
            </span>

            <h1>
              {job.title}
            </h1>

            <p>
              {job.location} · {job.type} · {job.experience}
            </p>

          </div>

         <a
  href={`/jobs/${id}/apply`}
  className="apply-now-button"
>
  Apply Now
</a>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <section className="job-details-content-section">

        <div className="job-details-layout">

          {/* ================= LEFT ================= */}

          <main className="job-details-main">

            <div className="job-info-card">

              <h2>
                Job description
              </h2>

              {job.description.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}

            </div>

            <div className="job-info-card">

              <h2>
                Responsibilities
              </h2>

              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

            <div className="job-info-card">

              <h2>
                Requirements
              </h2>

              <ul>
                {job.requirements.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </div>

          </main>

          {/* ================= RIGHT SIDEBAR ================= */}

          <aside className="job-details-sidebar">

            <div className="job-summary-card">

              <h2>
                Job overview
              </h2>

              <div className="job-summary-item">
                <span>
                  Experience
                </span>

                <strong>
                  {job.experience}
                </strong>
              </div>

              <div className="job-summary-item">
                <span>
                  Job type
                </span>

                <strong>
                  {job.type}
                </strong>
              </div>

              <div className="job-summary-item">
                <span>
                  Salary
                </span>

                <strong>
                  {job.salary}
                </strong>
              </div>

              <div className="job-summary-item">
                <span>
                  Location
                </span>

                <strong>
                  {job.location}
                </strong>
              </div>

              <div className="job-summary-item">
                <span>
                  Posted
                </span>

                <strong>
                  {job.posted}
                </strong>
              </div>

             <a
  href={`/jobs/${id}/apply`}
  className="sidebar-apply-button"
>
  Apply Now
</a>

            </div>

            <div className="company-overview-card">

              <h2>
                About {job.company}
              </h2>

              <p>
                {job.companyDescription}
              </p>

              <button className="company-link-button">
                View company
              </button>

            </div>

          </aside>

        </div>

      </section>

    </div>
  )
}

export default JobDetails