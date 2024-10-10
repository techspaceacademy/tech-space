import Head from 'next/head';
import Link from 'next/link';

export default function Course() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../styles/reset.css" />
        <link rel="stylesheet" href="../styles/style.css" />
        <title>Explore Our Courses - Tech Space Academy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <meta name="description" content="Explore our diverse range of programming courses at Tech Space Academy. From Python to Game Development, start your coding journey with us today!" />
        <meta name="keywords" content="coding, programming, courses, Python, Web Development, Game Development, Photoshop, Scratch, Robotics" />
        <meta name="author" content="Tech Space Academy" />
        <meta property="og:title" content="Explore Our Courses - Tech Space Academy" />
        <meta property="og:description" content="Discover a variety of programming courses tailored for all skill levels at Tech Space Academy, from beginner to advanced." />
        <meta property="og:image" content="https://raw.githubusercontent.com/astarta16/tech-space/main/static/images/tech-space.jpg" />
        <meta property="og:url" content="https://astarta16.github.io/tech-space/static/pages/course.html" />
        <meta property="og:type" content="website" />
      </Head>
      
      <header className="header">
        <nav className="navbar container">
          <Link href="/" className="nav-logo">TechSpace.</Link>
          <ul className="nav-menu">
            <li className="nav-item"><Link href="/" className="nav-link">მთავარი</Link></li>
            <li className="nav-item"><Link href="#" className="nav-link">კურსები</Link></li>
            <li className="nav-item"><Link href="/about" className="nav-link">მიზანი</Link></li>
            <li className="nav-item"><Link href="/blog" className="nav-link">ბლოგი</Link></li>
            <li className="nav-item">
              <button className="btn-hover color-btn" onClick={() => openModal()}>შესვლა</button>
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
          <span className="close" onClick={() => closeModal()}>&times;</span>
          <h2>შესვლა</h2>
          <form>
            <div className="input-group">
              <label htmlFor="email">შეიყვანე იმეილი:</label>
              <input type="email" id="email" name="email" required autoComplete="email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">შეიყვანე პაროლი</label>
              <input type="password" id="password" name="password" required autoComplete="current-password" />
            </div>
            <button type="submit" className="log-button">შესვლა</button>
          </form>
          <p className="modal-footer">არ გაქვს ექაუნთი? <Link href="/register">დარეგისტრირდი</Link></p>
        </div>
      </div>

      <main>
        <section>
          <div className="image-container">
            <img src="/images/6892036.jpg" alt="Course Cover" className="cover-image" />
            <div className="centered-text">
              განავითარე შენი ცოდნა და უნარები ჩვენს კურსებთან ერთად!
              <div>
                <button className="register-button">
                  <Link href="/register" className="register-text">დარეგისტრირდი</Link>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="courses-section">
              <h2 className="courses-title">კურსების კატალოგი</h2>
              <div className="courses-grid">
                <div className="course-card">
                  <img src="/images/python.png" alt="Python" />
                  <div className="course-info">
                    <h3>პითონი</h3>
                    <p>
                      მარტივი და მოქნილი პროგრამირების ენა, რომელიც პოპულარულია ვებ-განვითარებაში,
                      მონაცემთა მეცნიერებაში და ავტომატიზაციაში.
                    </p>
                    <Link href="#" className="course-link">შეიტყვე მეტი</Link>
                  </div>
                </div>

                <div className="course-card">
                  <img src="/images/web.png" alt="Web Development" />
                  <div className="course-info">
                    <h3>ვებ დეველოპმენტი</h3>
                    <p>
                      ვებ დეველოპმენტი არის ვებგვერდებისა და ვებაპლიკაციების შექმნის პროცესი,
                      რომელიც მოიცავს დიზაინს, კოდირებას და სერვერების მართვას, რაც აუცილებელია
                      ციფრულ სამყაროში წარმატებისთვის.
                    </p>
                    <Link href="#" className="course-link">შეიტყვე მეტი</Link>
                  </div>
                </div>

                <div className="course-card">
                  <img src="/images/game.png" alt="Game Development" />
                  <div className="course-info">
                    <h3>თამაშების აწყობა</h3>
                    <p>
                      კურსი გაძლევთ შესაძლებლობას, ისწავლოთ თამაშების დიზაინისა და განვითარების
                      საფუძვლები, პროგრამირების ენები და ინსტრუმენტები.
                    </p>
                    <Link href="#" className="course-link">შეიტყვე მეტი</Link>
                  </div>
                </div>

                <div className="course-card">
                  <img src="/images/photoshop.png" alt="Photoshop" />
                  <div className="course-info">
                    <h3>ფოტოშოპი</h3>
                    <p>
                      Photoshop არის გრაფიკული რედაქტირების პროგრამა, რომელიც გამოიყენება სურათების
                      დამუშავებისთვის, დიზაინის შექმნისთვის და ფოტომანიპულაციებისთვის.
                    </p>
                    <Link href="#" className="course-link">შეიტყვე მეტი</Link>
                  </div>
                </div>

                <div className="course-card">
                  <img src="/images/scratch.png" alt="Scratch" />
                  <div className="course-info">
                    <h3>ვიზუალური პროგრამირება</h3>
                    <p>
                      Scratch არის ვიზუალური პროგრამირების ენა, რომელიც სპეციალურად შექმნილია
                      ბავშვებისთვის 7-10 წლამდე და დამწყებთათვის.
                    </p>
                    <Link href="#" className="course-link">შეიტყვე მეტი</Link>
                  </div>
                </div>

                <div className="course-card">
                  <img src="/images/robotic.png" alt="Robotics" />
                  <div className="course-info">
                    <h3>რობოტიკა</h3>
                    <p>
                      რობოტიკა არის მეცნიერების დარგი, რომელიც ეხება რობოტების შექმნას,
                      პროგრამირებას და გამოყენებას, აერთიანებს მექანიკას, ელექტრონიკასა და
                      პროგრამირებას.
                    </p>
                    <Link href="#" className="course-link">შეიტყვე მეტი</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-container container">
          <Link href="#" className="nav-logo">TechSpace.</Link>
          <div className="footer-content">
            <p>დაგვიკავშირდით: +995 23 12 23</p>
          </div>
          <div className="social-media">
            <Link href="https://facebook.com"><img src="/images/facebook.png" alt="Facebook" /></Link>
            <Link href="https://instagram.com"><img src="/images/instagram.png" alt="Instagram" /></Link>
            <Link href="https://tiktok.com"><img src="/images/tik-tok.png" alt="TikTok" /></Link>
          </div>
        </div>
      </footer>

      <script src="/js/faq.js"></script>
      <script src="/js/modal.js"></script>
      <script src="/js/navigation.js"></script>
      <script src="/js/validation.js"></script>
    </>
  );
}
