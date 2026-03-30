import "./App.css";
import { NavLink, Route, Routes, useLocation, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="AppRoot">
      <div className="Phone" role="application" aria-label="Educase mobile UI">
        <div className="PhoneTopSafe" />
        <div className="Screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<SimplePage title="Internships" />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/courses" element={<SimplePage title="Courses" />} />
            <Route path="/jobs/:jobId" element={<JobDetails />} />
            <Route path="*" element={<SimplePage title="Not found" />} />
          </Routes>
        </div>
        <BottomNav />
      </div>
    </div>
  );
}

function BottomNav() {
  return (
    <nav className="BottomNav" aria-label="Bottom navigation">
      <NavItem to="/" label="Home" icon="home" end />
      <NavItem to="/internships" label="Internships" icon="briefcase" />
      <NavItem to="/jobs" label="Jobs" icon="bag" />
      <NavItem to="/courses" label="Courses" icon="spark" />
    </nav>
  );
}

function NavItem({ to, label, icon, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `NavItem ${isActive ? "NavItemActive" : ""}`}
      aria-label={label}
    >
      <Icon name={icon} />
      <span>{label}</span>
    </NavLink>
  );
}

function TopBar({ title, showBack, rightIcon, onRightClick }) {
  const navigate = useNavigate();
  return (
    <header className="TopBar">
      {showBack ? (
        <button className="IconBtn" onClick={() => navigate(-1)} aria-label="Back">
          <Icon name="back" />
        </button>
      ) : (
        <div style={{ width: 36 }} />
      )}

      <div className="TopTitle">{title}</div>

      <div className="Spacer" />

      {rightIcon ? (
        <button className={`IconBtn ${rightIcon === "chat" ? "BadgeDot" : ""}`} onClick={onRightClick} aria-label="Action">
          <Icon name={rightIcon} />
        </button>
      ) : (
        <div style={{ width: 36 }} />
      )}
    </header>
  );
}

function Home() {
  return (
    <div className="Page">
      <div className="Pill">Actively hiring</div>
      <h1 className="H1">Educase UI Task</h1>
      <p className="Sub">Mobile app UI centered on the web page.</p>

      <div className="SectionCard">
        <p className="Tiny">
          Open <b>Jobs</b> to view the “Job details” screen like the screenshot.
        </p>
      </div>
    </div>
  );
}

function SimplePage({ title }) {
  return (
    <div className="Page">
      <TopBar title={title} />
      <div className="SectionCard">
        <p className="Tiny">Screen placeholder. Add content as per Adobe XD.</p>
      </div>
    </div>
  );
}

const JOB = {
  id: "react-js-developer",
  title: "React JS Developer",
  company: "Educase India",
  location: "Hyderabad",
  date: "6 Mar' 26",
  salary: "₹ 3,00,000 /year",
  experience: "1 year(s) experience",
  timeLeft: "6 days left",
  posted: "Posted 3 weeks ago",
  applicants: "573 applicants",
  aboutTitle: "About Educase India",
  about:
    "Educase is a startup in the educational industry of India. It is a unique platform that provides services like school ERP software, school management system, preschool management software, and a personalized mobile application for schools.\n\nApart from this, we also provide the best digital experiences to the education sector all over India. We have worked with great brands and take pride in pushing the limits of technology and finding new & exciting ways to engage customers across all stages. Distance is not a barrier, and no project is too small or too big for us!",
};

function Jobs() {
  const navigate = useNavigate();
  return (
    <div className="Page">
      <TopBar title="Jobs" />

      <div className="SectionCard" style={{ cursor: "pointer" }} onClick={() => navigate(`/jobs/${JOB.id}`)} role="button" tabIndex={0}>
        <div className="TwoCol">
          <div>
            <div style={{ fontWeight: 750 }}>{JOB.title}</div>
            <div className="Sub" style={{ margin: "4px 0 0", fontSize: 14 }}>
              {JOB.company} · {JOB.location}
            </div>
          </div>
          <div className="LogoMark" aria-hidden="true">
            <Icon name="logo" size={28} />
          </div>
        </div>
      </div>
    </div>
  );
}

function JobDetails() {
  const location = useLocation();
  const fromJobs = location.pathname.startsWith("/jobs/");

  return (
    <div className="Page" style={{ paddingTop: 0 }}>
      <TopBar title="Job details" showBack={fromJobs} rightIcon="chat" onRightClick={() => {}} />

      <div className="Page" style={{ paddingTop: 14 }}>
        <div className="Pill">Actively hiring</div>

        <div className="TwoCol" style={{ marginTop: 8 }}>
          <div>
            <h1 className="H1" style={{ marginTop: 6 }}>
              {JOB.title}
            </h1>
            <p className="Sub">{JOB.company}</p>
          </div>
          <div className="LogoMark" aria-hidden="true">
            <Icon name="logo" size={28} />
          </div>
        </div>

        <div className="MetaRow">
          <div className="MetaItem">
            <Icon name="pin" />
            <div>
              <p className="MetaLabel">Location</p>
              <p className="MetaValue">{JOB.location}</p>
            </div>
          </div>
          <div className="MetaItem">
            <Icon name="calendar" />
            <div>
              <p className="MetaLabel">Date</p>
              <p className="MetaValue">{JOB.date}</p>
            </div>
          </div>
          <div className="MetaItem">
            <Icon name="money" />
            <div>
              <p className="MetaLabel">Salary</p>
              <p className="MetaValue">{JOB.salary}</p>
            </div>
          </div>
          <div className="MetaItem">
            <Icon name="clock" />
            <div>
              <p className="MetaLabel">{JOB.timeLeft}</p>
              <p className="MetaValue">{JOB.experience}</p>
            </div>
          </div>
        </div>

        <div className="SectionCard">
          <div style={{ display: "flex", alignItems: "center", gap: 10, justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="tag" />
              <div className="Tiny" style={{ fontWeight: 650, margin: 0, color: "#0f172a" }}>
                Job
              </div>
            </div>
            <div className="Tiny" style={{ margin: 0 }}>
              {JOB.posted}
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 10, justifyContent: "space-between" }}>
            <div className="Tiny" style={{ margin: 0 }}>
              {JOB.applicants}
            </div>
            <button
              className="LinkLike"
              type="button"
              onClick={() => {
                const text = `${JOB.title} · ${JOB.company} (${JOB.location})`;
                if (navigator.clipboard?.writeText) {
                  navigator.clipboard.writeText(text);
                }
              }}
              style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
            >
              <Icon name="share" size={16} />
              Share
            </button>
          </div>
        </div>

        <div className="SectionCard">
          <h3 className="SectionTitle">{JOB.aboutTitle}</h3>
          <a className="LinkLike" href="https://www.instagram.com" target="_blank" rel="noreferrer">
            Instagram page <Icon name="external" size={16} />
          </a>
          <p className="Tiny" style={{ marginTop: 10, whiteSpace: "pre-line" }}>
            {JOB.about}
          </p>
        </div>
      </div>
    </div>
  );
}

function Icon({ name, size = 22 }) {
  const common = { width: size, height: size, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" };
  const stroke = "currentColor";
  const s = 1.8;

  switch (name) {
    case "back":
      return (
        <svg {...common}>
          <path d="M15 18l-6-6 6-6" stroke={stroke} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path
            d="M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <path d="M9 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2H9V6Z" stroke={stroke} strokeWidth={s} />
          <path
            d="M6 8h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2Z"
            stroke={stroke}
            strokeWidth={s}
          />
        </svg>
      );
    case "bag":
      return (
        <svg {...common}>
          <path
            d="M7 8V7a5 5 0 0 1 10 0v1"
            stroke={stroke}
            strokeWidth={s}
            strokeLinecap="round"
          />
          <path
            d="M6 8h12l-1 13H7L6 8Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path
            d="M12 2l1.2 6.1L20 10l-6.8 1.9L12 18l-1.2-6.1L4 10l6.8-1.9L12 2Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path
            d="M21 12a8 8 0 0 1-8 8H7l-4 2 1.5-4.5A8 8 0 1 1 21 12Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg {...common}>
          <path
            d="M12 22s7-4.4 7-12a7 7 0 1 0-14 0c0 7.6 7 12 7 12Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
          <path d="M12 10.5a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" stroke={stroke} strokeWidth={s} />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <path
            d="M7 3v3M17 3v3M4.5 8.5h15M6 6h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "money":
      return (
        <svg {...common}>
          <path
            d="M4 7h16v10H4V7Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" stroke={stroke} strokeWidth={s} />
          <path d="M7 10h0.01M17 14h0.01" stroke={stroke} strokeWidth={s} strokeLinecap="round" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke={stroke} strokeWidth={s} />
          <path d="M12 6v6l4 2" stroke={stroke} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "tag":
      return (
        <svg {...common}>
          <path
            d="M20 13l-7 7-11-11V2h7l11 11Z"
            stroke={stroke}
            strokeWidth={s}
            strokeLinejoin="round"
          />
          <path d="M7.5 7.5h0.01" stroke={stroke} strokeWidth={3} strokeLinecap="round" />
        </svg>
      );
    case "share":
      return (
        <svg {...common}>
          <path
            d="M16 8a3 3 0 1 0-2.8-4"
            stroke={stroke}
            strokeWidth={s}
            strokeLinecap="round"
          />
          <path
            d="M8 12l8-4M8 12l8 4"
            stroke={stroke}
            strokeWidth={s}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={stroke} strokeWidth={s} />
          <path d="M18 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke={stroke} strokeWidth={s} />
        </svg>
      );
    case "external":
      return (
        <svg {...common}>
          <path d="M14 5h5v5" stroke={stroke} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 14l9-9" stroke={stroke} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round" />
          <path
            d="M19 14v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"
            stroke={stroke}
            strokeWidth={s}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "logo":
      return (
        <svg {...common} viewBox="0 0 64 64">
          <path
            d="M32 6l22 10v16c0 14-9.2 22.8-22 26-12.8-3.2-22-12-22-26V16L32 6Z"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
          />
          <path
            d="M23 33h18M23 25h12M23 41h14"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return <span aria-hidden="true" style={{ width: size, height: size, display: "inline-block" }} />;
  }
}

export default App;