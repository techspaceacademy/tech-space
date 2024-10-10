// <!DOCTYPE html>
// <html lang="en">

// <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <link rel="stylesheet" href="../styles/reset.css" />
//   <link rel="stylesheet" href="../styles/style.css" />
//   <title>About Us - Tech Space Academy</title>
//   <meta name="description"
//     content="Learn about Tech Space Academy, founded by Nini Gedeshuri, dedicated to teaching young students programming and empowering the next generation of developers." />
//   <meta name="keywords"
//     content="Tech Space Academy, About Tech Space, Nini Gedeshuri, programming academy, coding for kids, educational programs" />
//   <meta name="author" content="Nini Gedeshuri" />

//   <meta property="og:title" content="About Us - Tech Space Academy" />
//   <meta property="og:description"
//     content="Discover more about Tech Space Academy and our mission to teach and inspire young students in programming and technology." />
//   <meta property="og:image"
//     content="https://raw.githubusercontent.com/astarta16/tech-space/main/static/images/tech-space.jpg" />
//   <meta property="og:url" content="https://astarta16.github.io/tech-space/static/pages/about.html" />
//   <meta property="og:type" content="website" />
// </head>

// <body>
//   <header class="header">
//     <nav class="navbar container">
//       <a href="../../index.html" class="nav-logo">TechSpace.</a>
//       <ul class="nav-menu">
//         <li class="nav-item">
//           <a href="../../index.html" class="nav-link">მთავარი</a>
//         </li>
//         <li class="nav-item">
//           <a href="./course.html" class="nav-link">კურსები</a>
//         </li>
//         <li class="nav-item">
//           <a href="./about.html" class="nav-link">მიზანი</a>
//         </li>
//         <li class="nav-item">
//           <a href="./blog.html" class="nav-link">ბლოგი</a>
//         </li>
//         <li class="nav-item">
//           <button class="btn-hover color-btn" onclick="openModal()">
//             შესვლა
//           </button>
//         </li>
//       </ul>
//       <div class="hamburger">
//         <span class="bar"></span>
//         <span class="bar"></span>
//         <span class="bar"></span>
//       </div>
//     </nav>
//   </header>

//   <div id="loginModal" class="modal">
//     <div class="modal-content">
//       <span class="close" onclick="closeModal()">&times;</span>
//       <h2>შესვლა</h2>
//       <form>
//         <div class="input-group">
//           <label for="email">შეიყვანე იმეილი:</label>
//           <input type="email" id="email" name="email" required />
//         </div>
//         <div class="input-group">
//           <label for="password">შეიყვანე პაროლი</label>
//           <input type="password" id="password" name="password" required />
//         </div>
//         <button type="submit" class="log-button">შესვლა</button>
//       </form>
//       <p class="modal-footer">
//         არ გაქვს ექაუნთი?
//         <a href="./register.html">დარეგისტრირდი</a>
//       </p>
//     </div>
//   </div>

//   <main>
//     <section class="about-hero">
//       <div class="hero-container">
//         <h2>ჩვენს შესახებ</h2>
//         <p>გაიგე უფრო მეტი ჩვენი კურსების და მენტორების შესახებ!</p>
//       </div>
//     </section>

//     <section class="about-section">
//       <div class="about-container">
//         <div class="about-content">
//           <img src="../images/kiddo1.jpg" alt="Who We Are" class="about-image" />
//           <div class="about-text">
//             <h2>ვინ ვართ ჩვენ?</h2>
//             <p>
//               ჩვენ ვართ პროფესიონალთა გუნდი, რომელიც ორიენტირებულია ინოვაციებზე, ხარისხზე და გრძელვადიან წარმატებაზე.
//               ჩვენი მიზანია, შევქმნათ და გავუზიაროთ ცოდნა, რაც ხელს უწყობს ტექნოლოგიური განვითარებას და ინოვაციურ
//               გადაწყვეტილებებს.
//             </p>
//           </div>
//         </div>
//         <div class="about-content reverse">
//           <img src="../images/kiddo2.jpg" alt="Our Mission" class="about-image" />
//           <div class="about-text">
//             <h2>ჩვენი მისია</h2>
//             <p>
//               ჩვენი მისიაა, გავაძლიეროთ მომავალი თაობა, ავამაღლოთ მათი ტექნოლოგიური უნარები და წვლილი შევიტანოთ
//               ინოვაციურ და შემოქმედებით სამყაროში. ჩვენ ვუწვდით ხელს ბავშვებს, რათა მათ შეძლონ ტექნოლოგიების სწორად
//               გამოყენება და წარმატებით განავითარონ თავიანთი უნარები ციფრულ ეპოქაში.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>

//     <section class="gallery-section container">
//       <h2 class="gallery-title">ფიზიკურ სივრცეში შეხვედრები</h2>
//       <div class="gallery-container">
//         <div class="gallery-item">
//           <img src="../images/392871609_122123914886190016_1703082755269786001_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/429651438_122123914814190016_7149053217752897165_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/429787234_122123914202190016_4916780178229176360_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/454429667_122170072466190016_2529844393835441145_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/454520346_122170072526190016_5133319226184808847_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/429674621_122123914256190016_4936258178899449434_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/429827553_122123914292190016_512405439681061998_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//         <div class="gallery-item">
//           <img src="../images/454520156_122170072460190016_6876708095366359852_n.jpg" alt="Gallery Image"
//             class="gallery-image" />
//         </div>
//       </div>
//     </section>




//     <section class="faq-section container">
//       <div class="faq-container">
//         <h2>ხშირად დასმული შეკითხები</h2>

//         <div class="faq-item">
//           <button class="faq-question">
//             რა არის სწავლის საფასური?
//             <span class="faq-icon">+</span>
//           </button>
//           <div class="faq-answer">
//             <p>სწავლა ჩვენი აკადემიის ნებისმიერ კურსზე ღირს 150 ლარი თვეში.</p>
//           </div>
//         </div>

//         <div class="faq-item">
//           <button class="faq-question">
//             რა არის TechSpace?
//             <span class="faq-icon">+</span>
//           </button>
//           <div class="faq-answer">
//             <p>ჩვენ ვართ ონლაინ აკადემია, რომელიც მიზნად ისახავს ბავშვებსა და მოზარდებში ტექნოლოგიური უნარების
//               განვითარებას, რათა მათ მომავლისთვის უკეთ მოემზადონ.</p>
//           </div>
//         </div>

//         <div class="faq-item">
//           <button class="faq-question">
//             როგორ არის დაყოფილი თქვენი კლასები ასაკების მიხედვით?
//             <span class="faq-icon">+</span>
//           </button>
//           <div class="faq-answer">
//             <p>ჩვენი კლასები დაყოფილია ასაკობრივ ჯგუფებად, რათა თითოეულ სტუდენტს შევთავაზოთ მათთვის შესაფერისი სასწავლო
//               პროგრამა. გვაქვს ჯგუფები 6-9 წლის, 10-13 წლის და 14-17 წლის მოსწავლეებისთვის.</p>
//           </div>
//         </div>

//         <div class="faq-item">
//           <button class="faq-question">
//             რა კურსებს სთავაზობთ?
//             <span class="faq-icon">+</span>
//           </button>
//           <div class="faq-answer">
//             <p>ჩვენი აკადემია სთავაზობს კურსებს პროგრამირებაში, ვებ დეველოპმენტში, თამაშების აწყობაში, რობოტიკაში და
//               გრაფიკულ დიზაინში, მათ შორის Scratch და Photoshop კურსები.</p>
//           </div>
//         </div>

//         <div class="faq-item">
//           <button class="faq-question">
//             რამდენი წლიდან იწყებთ სწავლების პროცესს?
//             <span class="faq-icon">+</span>
//           </button>
//           <div class="faq-answer">
//             <p>ჩვენი კურსები განკუთვნილია 6 წლიდან მოზარდებისთვის. თითოეული კურსი ისეა შემუშავებული, რომ ადაპტირებული
//               იყოს შესაბამისი ასაკის ბავშვების საჭიროებებზე.</p>
//           </div>
//         </div>

//       </div>

//       </div>
//     </section>
//   </main>

//   <footer>
//     <div class="footer-container container">
//       <a href="#" class="nav-logo">TechSpace.</a>
//       <div class="footer-content">
//         <p>დაგვიკავშირდით: +995 232 122 231</p>
//       </div>
//       <div class="social-media">
//         <a href="https://facebook.com"><img src="../images/facebook.png" alt="Facebook" /></a>
//         <a href="https://instagram.com"><img src="../images/instagram.png" alt="Instagram" /></a>
//         <a href="https://tiktok.com"><img src="../images/tik-tok.png" alt="TikTok" /></a>
//       </div>
//     </div>
//   </footer>
//   <script src="../js/faq.js"></script>
//   <script src="../js/modal.js"></script>
//   <script src="../js/navigation.js"></script>
//   <script src="../js/validation.js"></script>
//   <script src="../js/advice.js"></script>


// </body>
// </html>