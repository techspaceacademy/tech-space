
import Head from 'next/head';
import { useState } from 'react';

export default function Register() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    age: '',
    birthday: '',
    course: 'photoshop',
    reason: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data: ', formData);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Registration Form - Tech Space Academy</title>
        <meta
          name="description"
          content="Register for Tech Space Academy courses to begin your journey in technology and programming. Sign up now to secure your spot!"
        />
        <meta
          name="keywords"
          content="registration, sign up, Tech Space Academy, online courses, enroll, tech courses"
        />
        <meta
          property="og:title"
          content="Registration Form - Tech Space Academy"
        />
        <meta
          property="og:description"
          content="Secure your place at Tech Space Academy. Register now to start learning with expert instructors in tech fields like programming and graphic design."
        />
        <meta
          property="og:image"
          content="https://raw.githubusercontent.com/astarta16/tech-space/main/static/images/tech-space.jpg"
        />
        <meta
          property="og:url"
          content="https://astarta16.github.io/tech-space/static/pages/register.html"
        />
        <meta property="og:type" content="website" />
      </Head>

     

      <main>
        <div className="form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">შეიყვანეთ სახელი</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="სახელი"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="surname">შეიყვანეთ გვარი</label>
              <input
                type="text"
                id="surname"
                name="surname"
                value={formData.surname}
                onChange={handleChange}
                placeholder="გვარი"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">შეიყვანეთ იმეილი</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="user@example.com"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="age">ასაკი</label>
              <input
                type="number"
                id="age"
                name="age"
                value={formData.age}
                onChange={handleChange}
                min="1"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="birthday">დაბადების დღე</label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                value={formData.birthday}
                onChange={handleChange}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="course">აირჩიე კურსი</label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
              >
                <option value="photoshop">ფოტოშოპი</option>
                <option value="python">პითონი</option>
                <option value="game_development">თამაშების შექმნა</option>
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="reason">რატომ გადაწყვიტეთ კურსზე მონაწილეობა?</label>
              <textarea
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                placeholder="ჩაწერე აქ...."
                rows="4"
                required
              ></textarea>
            </div>
            <button type="submit">გაგზავნა</button>
          </form>
        </div>

        <div id="toast" className="toast">
          რეგისტრაცია წარმატებით გაიგზავნა!
        </div>
      </main>
    </>
  );
}
