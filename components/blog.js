
// components/BlogComponent.js
import { useState } from 'react';

const blogPosts = [
  {
    title: 'როგორ დავიწყოთ Python პროგრამირება',
    content:
      'Python არის მარტივი და ძლიერი პროგრამირების ენა, რომელიც იდეალურია დამწყებთათვის...',
    category: 'Python',
  },

    {
      title: "Python-ის მონაცემთა ანალიზი: Pandas-ის შესავალი",
      content:
        "გაიგეთ, როგორ გამოიყენოთ Python მონაცემთა ანალიზისთვის Pandas-ის ბიბლიოთეკის მეშვეობით...",
      category: "Python",
    },
    {
      title: "როგორ შევქმნათ Web აპლიკაციები Python Flask-ის გამოყენებით",
      content:
        "Flask არის მინი ვებ ჩარჩო Python-თვის, რომელიც საშუალებას გაძლევთ სწრაფად შექმნათ ვებ აპლიკაციები...",
      category: "Python",
    },
  
    {
      title: "ვებ განვითარება HTML და CSS-ის გამოყენებით",
      content:
        "გაიგეთ, როგორ შექმნათ ვებ გვერდი HTML და CSS-ის გამოყენებით, პირველი ნაბიჯებიდან დაწყებული...",
      category: "HTML",
    },
    {
      title: "HTML5-ის ახალი ელემენტები და მათი გამოყენება",
      content:
        "HTML5 შემოგვთავაზებს ახალ ელემენტებს, როგორიცაა `<article>`, `<section>`, `<header>`, `<footer>`, და სხვა...",
      category: "HTML",
    },
    {
      title: "Responsive ვებ გვერდის შექმნა HTML და CSS-ის გამოყენებით",
      content:
        "შექმენით მოწყობილობისგან დამოუკიდებელი ვებ გვერდი HTML და CSS-ის მეშვეობით, რომ იყოს მობილურ მოწყობილობებთან თავსებადი...",
      category: "HTML",
    },
  
    {
      title: "გრაფიკული დიზაინის შესავალი: Adobe Photoshop",
      content:
        "Adobe Photoshop არის ერთ-ერთი ყველაზე პოპულარული ინსტრუმენტი გრაფიკულ დიზაინში...",
      category: "CSS",
    },
    {
      title: "CSS Flexbox-ის გამოყენება ლეიაუთის დიზაინში",
      content:
        "გაიგეთ, როგორ გამოიყენოთ CSS Flexbox ლეიაუთის დიზაინისთვის, რათა შექმნათ მოქნილი და ადაპტირებადი დიზაინები...",
      category: "CSS",
    },
    {
      title: "CSS Grid-ის გამოყენება ვებ გვერდის ლეიაუთში",
      content:
        "CSS Grid არის ძლიერი ინსტრუმენტი, რომელიც საშუალებას გაძლევთ შექმნათ რთული ლეიაუთები მარტივად...",
      category: "CSS",
    },
  
];

const BlogComponent = () => {
  const [category, setCategory] = useState('All');

  const filterPosts = (category) => {
    setCategory(category);
  };

  const filteredPosts = blogPosts.filter(
    (post) => category === 'All' || post.category === category
  );

  return (
    <div id="blog-posts">
      <div className="categories">
        <button onClick={() => filterPosts('All')}>All</button>
        <button onClick={() => filterPosts('Python')}>Python</button>
        <button onClick={() => filterPosts('HTML')}>HTML</button>
        <button onClick={() => filterPosts('CSS')}>CSS</button>
      </div>
      <div id="posts-container">
        {filteredPosts.map((post, index) => (
          <article key={index} className="blog-post" data-category={post.category}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogComponent;
