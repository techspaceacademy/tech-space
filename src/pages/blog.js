import Head from 'next/head';
import Link from 'next/link';

export default function Blog() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="../styles/reset.css" />
        <link rel="stylesheet" href="../styles/style.css" />
        <title>Explore Our Blog - Tech Space Academy</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
        <meta name="description" content="Explore our diverse range of programming blogs at Tech Space Academy. Stay updated with the latest trends in programming!" />
        <meta name="keywords" content="coding, programming, blog, Python, Web Development, Game Development, Photoshop, Scratch, Robotics" />
        <meta name="author" content="Tech Space Academy" />
        <meta property="og:title" content="Explore Our Blog - Tech Space Academy" />
        <meta property="og:description" content="Discover the latest blogs and insights tailored for all skill levels at Tech Space Academy." />
        <meta property="og:image" content="https://raw.githubusercontent.com/astarta16/tech-space/main/static/images/tech-space.jpg" />
        <meta property="og:url" content="https://astarta16.github.io/tech-space/static/pages/blog.html" />
        <meta property="og:type" content="website" />
      </Head>

      <header className="header">
        <nav className="navbar container">
          <Link href="/" className="nav-logo">TechSpace.</Link>
          <ul className="nav-menu">
            <li className="nav-item"><Link href="/" className="nav-link">მთავარი</Link></li>
            <li className="nav-item"><Link href="/course" className="nav-link">კურსები</Link></li>
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
        <section id="advice-section">
          <div className="advice-image-container">
            <img src="../images/Wavy Elegant Lines Navy Background.jpg" alt="Daily Advice Background" className="cover-image" />
            <div className="centered-text">
              <h2 id="advice-text">მიიღე ყოველდღიური რჩევა</h2>
              <button id="show-advice" className="advice-button">დააჭირე ღილაკს</button>
            </div>
          </div>
        </section>

        <section id="blog-posts">
          <h2 className="blog-title">ბლოგი</h2>
          <section id="blog-filters">
            <div id="categories-section">
              <button className="category-button" data-category="All">ყველა</button>
              <button className="category-button" data-category="Python">Python</button>
              <button className="category-button" data-category="HTML">HTML</button>
              <button className="category-button" data-category="CSS">CSS</button>
            </div>
          </section>
          {/* Add Blog Posts Here */}
        </section>
      </main>

      <footer>
        <div className="footer-container container">
          <Link href="#" className="nav-logo">TechSpace.</Link>
          <div className="footer-content">
            <p>დაგვიკავშირდით: +995 23 12 23</p>
          </div>
          <div className="social-media">
            <Link href="https://facebook.com"><img src="../images/facebook.png" alt="Facebook" /></Link>
            <Link href="https://instagram.com"><img src="../images/instagram.png" alt="Instagram" /></Link>
            <Link href="https://tiktok.com"><img src="../images/tik-tok.png" alt="TikTok" /></Link>
          </div>
        </div>
      </footer>

      <script src="../js/faq.js"></script>
      <script src="../js/modal.js"></script>
      <script src="../js/navigation.js"></script>
      <script src="../js/validation.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
      <script src="../js/advice.js"></script>
      <script src="../js/blog.js"></script>
    </>
  );
}
