// pages/index.js

import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <title>Tech Space Website - Empowering Your Tech Journey</title>
        <meta
          name="description"
          content="Join Tech Space to advance your tech career with expert instructors and flexible learning paths. Discover courses in web development, data science, and more!"
        />
        <meta
          name="keywords"
          content="tech education, online courses, programming, web development, data science, expert instructors, tech community"
        />
        <meta name="author" content="Nini Gedeshuri" />
        <meta
          property="og:title"
          content="Tech Space Website - Empowering Your Tech Journey"
        />
        <meta
          property="og:description"
          content="Empower your tech journey at Tech Space with our expert-led courses and vibrant community. Start learning today!"
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/astarta16/tech-space/main/static/images/tech-space.jpg"
        />
        <meta property="og:url" content="https://astarta16.github.io/tech-space/" />
        <meta property="og:type" content="website" />
      </Head>

      <header className="header">
        <nav className="navbar container">
          <a href="#" className="nav-logo">TechSpace.</a>
          <ul className="nav-menu">
            <li className="nav-item">
              <a href="#" className="nav-link">მთავარი</a>
            </li>
            <li className="nav-item">
              <a href="/course" className="nav-link">კურსები</a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">მიზანი</a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">ბლოგი</a>
            </li>
            <li className="nav-item">
              <button className="btn-hover color-btn" onClick={openModal}>
                შესვლა
              </button>
            </li>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>

      {/* Modal */}
      {modalOpen && (
        <div id="loginModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>შესვლა</h2>
            <form>
              <div className="input-group">
                <label htmlFor="email">შეიყვანე იმეილი</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">შეიყვანე პაროლი</label>
                <input type="password" id="password" name="password" required />
              </div>
              <button type="submit" className="log-button">შესვლა</button>
            </form>
            <p className="modal-footer">
              არ გაქვს ექაუნთი? <a href="/register">დარეგისტრირდი</a>
            </p>
          </div>
        </div>
      )}

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <h1>მოგესალმებით TechSpace-ის სამყაროში!</h1>
            <p>დაისახე დიდი მიზნები, მიაღწიე მეტს: ჩვენ ვქმნით მომავალს ერთად!</p>
            <a href="/course" className="cta-button">კურსები</a>
          </div>
        </section>

        <section className="features-section">
          <h2>რატომ ჩვენ?</h2>
          <div className="features-container">
            <div className="feature">
              <h3>პროფესიონალიზმი და გამოცდილება</h3>
              <p>
                ჩვენ ვართ გუნდი, რომელიც აერთიანებს პროფესიონალებს სხვადასხვა
                ტექნოლოგიური სფეროდან. ჩვენი გამოცდილება უზრუნველყოფს ხარისხიან
                მომსახურებას და წარმატებულ შედეგებს.
              </p>
            </div>
            <div className="feature">
              <h3>ინოვაცია და პროგრესი</h3>
              <p>
                ვნერგავთ უახლეს ტექნოლოგიებსა და მეთოდებს, რაც საშუალებას გვაძლევს
                შევქმნათ მომავლისთვის მზად არსებული პროექტები.
              </p>
            </div>
            <div className="feature">
              <h3>პარტნიორობა და ნდობა</h3>
              <p>
                ჩვენ ვამყარებთ გრძელვადიან ურთიერთობებს ჩვენს მომხმარებლებთან.
                ვაგებთ პარტნიორულ ურთიერთობას, რომელიც დაფუძნებულია ნდობაზე,
                გამჭვირვალობაზე და მხარდაჭერაზე.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container container">
          <a href="#" className="nav-logo">TechSpace.</a>
          <div className="footer-content">
            <p>დაგვიკავშირდით: +995 232 122 231</p>
          </div>
          <div className="social-media">
            <a href="https://facebook.com">
              <img src="/images/facebook.png" alt="Facebook" />
            </a>
            <a href="https://instagram.com">
              <img src="/images/instagram.png" alt="Instagram" />
            </a>
            <a href="https://tiktok.com">
              <img src="/images/tik-tok.png" alt="TikTok" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
