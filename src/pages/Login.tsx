import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  User,
  Key,
  Calendar,
  Megaphone,
  FileText,
  Search,
  UploadCloud,
  SearchCode,
  GraduationCap,
  ShieldCheck,
  MonitorPlay,
  ChevronDown,
  Globe,
  BookOpen,
  FileSearch,
} from "lucide-react";
import { mockUser } from "../data/mockData";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("UUR00884/16");
  const [password, setPassword] = useState("password123");
  const [activeSlide, setActiveSlide] = useState(0);
  const [showInvalid, setShowInvalid] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const carouselImages = [
    "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop",
  ];

  const navMenus = [
    { title: "Extras", items: ["ELearning Portal", "Website"] },
    { title: "Announcements", items: ["Latest News"] },
    { title: "Calendar", items: ["Academic Calendar"] },
    { title: "Admission", items: ["Apply Online", "Track Status"] },
    {
      title: "Transcript",
      items: ["Request Transcript", "Track Request Status"],
    },
    { title: "Alumni", items: ["Register"] },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carouselImages.length);
    }, 8000);

    return () => window.clearInterval(timer);
  }, [carouselImages.length]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === mockUser.username && password === mockUser.password) {
      setShowInvalid(false);
      login();
      navigate("/dashboard");
    } else {
      setShowInvalid(true);
    }
  };

  return (
    <div className="login-page">
      <nav className="login-top-nav">
        <ul className="login-nav-list">
          {navMenus.map((menu) => (
            <li className="login-nav-item" key={menu.title}>
              <button type="button" className="login-nav-trigger">
                <span>{menu.title}</span>
                <ChevronDown size={14} />
              </button>
              <ul className="login-dropdown">
                {menu.items.map((item) => (
                  <li key={item}>
                    <button type="button" className="login-dropdown-item">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <main className="login-hero">
        <div className="login-carousel">
          {carouselImages.map((image, index) => (
            <figure
              key={image}
              className={`login-carousel-slide ${activeSlide === index ? "active" : ""}`}
            >
              <img src={image} alt="Campus background" />
            </figure>
          ))}
        </div>

        <div className="login-overlay-content">
          <div className="login-overlay-left">
            <img
              src="https://sis.uu.edu.et/img/uulogo.png"
              alt="Unity University"
              className="login-overlay-logo"
            />
            <h1>Unity University | Office of the Registrar</h1>
            <p>
              This is our registrar portal for students, academic staffs and
              alumni to access different registrar services offered by the
              office of the university registrar.
            </p>
          </div>

          <div className="login-overlay-right">
            <div className="login-box-head">
              <h2>Login to SIS</h2>
              <hr />
            </div>

            <form onSubmit={handleLogin} className="login-form-panel">
              <div className="login-input-wrap">
                <span className="login-input-icon">
                  <User size={17} />
                </span>
                <input
                  type="text"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                    setShowInvalid(false);
                  }}
                />
              </div>
              {showInvalid && (
                <p className="login-input-error">
                  Username and password invalid.
                </p>
              )}
              <div className="login-input-wrap">
                <span className="login-input-icon">
                  <Key size={17} />
                </span>
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setShowInvalid(false);
                  }}
                />
              </div>
              {showInvalid && (
                <p className="login-input-error">
                  Username and password invalid.
                </p>
              )}

              <button type="submit" className="btn-login">
                Login
              </button>
              <button type="button" className="btn-forgot">
                Forgot Password?
              </button>
            </form>
          </div>
        </div>
      </main>

      <section className="featured-grid-wrap">
        <div className="featured-grid">
          <article className="featured-item">
            <Calendar size={34} />
            <h6>
              Academic
              <br />
              Calendar
            </h6>
          </article>
          <article className="featured-item">
            <Megaphone size={34} />
            <h6>
              Registrar
              <br />
              Announcements
            </h6>
          </article>
          <article className="featured-item">
            <FileText size={34} />
            <h6>
              Request Official
              <br />
              Transcript
            </h6>
          </article>
          <article className="featured-item">
            <Search size={34} />
            <h6>
              Check Official
              <br />
              Transcript Status
            </h6>
          </article>
          <article className="featured-item">
            <UploadCloud size={34} />
            <h6>
              Online
              <br />
              Admission
            </h6>
          </article>
          <article className="featured-item">
            <SearchCode size={34} />
            <h6>
              Online Admission
              <br />
              Tracking
            </h6>
          </article>
          <article className="featured-item">
            <GraduationCap size={34} />
            <h6>
              Alumni
              <br />
              Registration
            </h6>
          </article>
          <article className="featured-item">
            <ShieldCheck size={34} />
            <h6>
              Forgery
              <br />
              Check
            </h6>
          </article>
          <article className="featured-item">
            <MonitorPlay size={34} />
            <h6>
              ELearning
              <br />
              Portal
            </h6>
          </article>
          <article className="featured-item">
            <BookOpen size={34} />
            <h6>
              Academic
              <br />
              Catalog
            </h6>
          </article>
          <article className="featured-item">
            <FileSearch size={34} />
            <h6>
              Admission
              <br />
              Guideline
            </h6>
          </article>
          <article className="featured-item">
            <Globe size={34} />
            <h6>
              University
              <br />
              Website
            </h6>
          </article>
        </div>
      </section>

      <footer className="login-footer">
        <p>Copyright &copy; 2012 - 2026</p>
      </footer>
    </div>
  );
};

export default Login;
