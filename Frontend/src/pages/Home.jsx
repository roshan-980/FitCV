import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import './Home.css';
const Home = () => {
  return (
    <div className="home">

      <Navbar />

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroContent">
          <h1>
            Build a Resume That
            <br />
            Actually Gets You Hired.
          </h1>

          <p>
            FitCV helps you build a professional resume, score it against
            any job description, and understand exactly what a recruiter
            sees — in minutes, not hours.
          </p>
        </div>

        <div className="heroActions">
          <button>
            Build My Resume — It's Free
          </button>

          <button>
            Check My ATS Score
          </button>

          <p className="trustLine">
            No signup needed to get started. Save your resume when you're ready.
          </p>
        </div>
      </section>

      {/* Feature Section */}
      <section className="featureSection">

        <div className="featureHeading">
          <span>WHAT YOU GET</span>

          <h2>
            Everything you need.
            <br />
            Nothing you don't.
          </h2>
        </div>

        <div className="featureCards">

          <FeatureCard
            label="Feature 1 — Live Resume Builder"
            title="Live Resume Builder"
            description="Fill in your details and watch your resume take shape in real time. No templates to fight, no formatting headaches. Just a clean, professional resume — as you type."
          />

          <FeatureCard
            label="Feature 2 — ATS Score"
            title="ATS Score That Actually Means Something"
            description="Paste any job description and get a keyword match score, a breakdown of what's missing, and a clear picture of where you stand — before you hit send."
          />

          <FeatureCard
            label="Feature 3 — Recruiter View"
            title="See What a Recruiter Sees"
            description="Not just a number. FitCV shows you your strengths, your red flags, and an estimated interview probability — the way a real recruiter would read your resume."
          />

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div>
          <h3>FitCV</h3>
          <p>
            Built for job seekers who are tired of applying into the void.
          </p>
        </div>

        <div>
          <h4>Links</h4>
          <p>Builder</p>
          <p>ATS Score</p>
          <p>Dashboard</p>
          <p>Sign In</p>
        </div>

        <div>
          <p>
            Built by Roshan Gupta · github.com/roshan-980
          </p>
          <p>
            Made to solve a problem I actually had.
          </p>
        </div>
      </footer>

    </div>
  );
};

export default Home;