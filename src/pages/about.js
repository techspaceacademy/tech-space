// src/pages/about.js
import Head from 'next/head';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const loadScripts = () => {
      const scriptUrls = [
        '../js/modal.js',
        '../js/navigation.js',
        '../js/faq.js',
        '../js/advice.js'
      ];
      scriptUrls.forEach(url => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        document.body.appendChild(script);
      });
    };

    loadScripts();
  }, []);

  return (
    <>
      <Head>
        <title>About Us - Tech Space Academy</title>
        <meta name="description" content="Learn about Tech Space Academy, founded by Nini Gedeshuri, dedicated to teaching young students programming and empowering the next generation of developers." />
        <meta name="keywords" content="Tech Space Academy, About Tech Space, Nini Gedeshuri, programming academy, coding for kids, educational programs" />
        <meta name="author" content="Nini Gedeshuri" />
        <meta property="og:title" content="About Us - Tech Space Academy" />
        <meta property="og:description" content="Discover more about Tech Space Academy and our mission to teach and inspire young students in programming and technology." />
        <meta property="og:image" content="https://raw.githubusercontent.com/astarta16/tech-space/main/static/images/tech-space.jpg" />
        <meta property="og:url" content="https://astarta16.github.io/tech-space/static/pages/about.html" />
        <meta property="og:type" content="website" />
      </Head>

      <header className="header">
        <nav className="navbar container">
          <a href="/" className="nav-logo">TechSpace.</a>
          <ul className="nav-menu">
            <li className="nav-item"><a href="/" className="nav-link">მთავარი</a></li>
            <li className="nav-item"><a href="/course" className="nav-link">კურსები</a></li>
            <li className="nav-item"><a href="/about" className="nav-link">მიზანი</a></li>
            <li className="nav-item"><a href="/blog" className="nav-link">ბლოგი</a></li>
            <li className="nav-item">
              <button className="btn-hover color-btn" onClick={() => document.getElementById('loginModal').style.display = 'block'}>
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

      <div id="loginModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => document.getElementById('loginModal').style.display = 'none'}>&times;</span>
          <h2>შესვლა</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">შეიყვანე იმეილი:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">შეიყვანე პაროლი</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="log-button">შესვლა</button>
          </form>
          <p className="modal-footer">
            არ გაქვს ექაუნთი? <a href="./register.html">დარეგისტრირდი</a>
          </p>
        </div>
      </div>

      <main>
        <section className="about-hero">
          <div className="hero-container">
            <h2>ჩვენს შესახებ</h2>
            <p>გაიგე უფრო მეტი ჩვენი კურსების და მენტორების შესახებ!</p>
          </div>
        </section>

        <section className="about-section">
          <div className="about-container">
            <div className="about-content">
              <img src="../images/kiddo1.jpg" alt="Who We Are" className="about-image" />
              <div className="about-text">
                <h2>ვინ ვართ ჩვენ?</h2>
                <p>ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც ორიენტირებულია ინოვაციებზე, ხარისხზე და გრძელვადიან წარმატებაზე. ჩვენი მიზანია, შევქმნათ და გავუზიაროთ ცოდნა, რაც ხელს უწყობს ტექნოლოგიური განვითარებას და ინოვაციურ გადაწყვეტილებებს.</p>
              </div>
            </div>
            <div className="about-content reverse">
              <img src="../images/kiddo2.jpg" alt="Our Mission" className="about-image" />
              <div className="about-text">
                <h2>ჩვენი მისია</h2>
                <p>ჩვენი მისიაა, გავაძლიეროთ მომავალი თაობა, ავამაღლოთ მათი ტექნოლოგიური უნარები და წვლილი შევიტანოთ ინოვაციურ და შემოქმედებით სამყაროში. ჩვენ ვუწვდით ხელს ბავშვებს, რათა მათ შეძლონ ტექნოლოგიების სწორად გამოყენება და წარმატებით განავითარონ თავიანთი უნარები ციფრულ ეპოქაში.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="gallery-section container">
          <h2 className="gallery-title">ფიზიკურ სივრცეში შეხვედრები</h2>
          <div className="gallery-container">
            <div className="gallery-item">
              <img src="../images/392871609_122123914886190016_1703082755269786001_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/429651438_122123914814190016_7149053217752897165_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/429787234_122123914202190016_4916780178229176360_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/454429667_122170072466190016_2529844393835441145_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/454520346_122170072526190016_5133319226184808847_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/429674621_122123914256190016_4936258178899449434_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/429827553_122123914292190016_512405439681061998_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
            <div className="gallery-item">
              <img src="../images/454520156_122170072460190016_6876708095366359852_n.jpg" alt="Gallery Image" className="gallery-image" />
            </div>
          </div>
        </section>

        <section className="faq-section container">
          <div className="faq-container">
            <h2>ხშირად დასმული შეკითხვები</h2>
            <div className="faq-item">
              <button className="faq-question">
                რა არის სწავლის საფასური? <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>სწავლა ჩვენი აკადემიის ნებისმიერ კურსზე ღირს 150 ლარი თვეში.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                რა არის TechSpace? <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>ჩვენ ვართ ონლაინ აკადემია, რომელიც მიზნად ისახავს ბავშვებსა და მოზარდებში ტექნოლოგიური უნარების განვითარებას, რათა მათ მომავლისთვის უკეთ მოემზადონ.</p>
              </div>
            </div>
            <div className="faq-item">
              <button className="faq-question">
                როგორ ვიძენთ კურსებს? <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>ჩვენს ვებსაიტზე რეგისტრაციის შემდეგ, შეგიძლიათ აირჩიოთ სასურველი კურსი და გაიაროთ ონლაინ რეგისტრაცია.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-container">
          <p>TechSpace Academy © 2023. ყველა უფლება დაცულია.</p>
        </div>
      </footer>
    </>
  );
};

export default About;
