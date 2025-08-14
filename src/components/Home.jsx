import '../App.css';
import Courses from './Courses';
import CardList from './cards';
import SelectList from './selectList';
import student_img from '../assets/student-img.png';
import bookMark from '../assets/Bookmark 1.png';
import Asset from '../assets/Asset 2@1000x 1.png';
import icon from '../assets/icon.png';
import imgNot2 from '../assets/img not2.png';
import vidPlay from '../assets/video-play.png';
import vidCircle from '../assets/video-circle.png';
import student from '../assets/student.svg';

function Home() {
  return (
    <>
      <main>
        <div className="main">
          <div className="description">
            <h1 className="main-title">Ustozidan o‘zib ketgan shogird</h1>
            <p className="main-info">
              Men Bekzod, 13 yoshdaman. Dasturlashga qiziqaman va hozirda
              Node.js (Express), PostgreSQL, va React PWA bilan ishlayman.
              Asosan authentication va authorization (JWT, access token, refresh
              token) kabi xavfsizlik tizimlari ustida ishlayman.
            </p>
            <p className="main-info">
              Doim yangi texnologiyalarni o‘rganishga intilaman va loyihalarimni
              takomillashtirishga harakat qilaman.
            </p>
          </div>
          <div className="main-img">
            <img src={student_img} alt="student's img" loading="lazy" />
            <button className="btn">Bekzod</button>
          </div>
        </div>
      </main>
      <div className="container">
        <div className="left-box">
          <div className="stats-box">
            <h2>
              <span className="gradient-text">Algoritm</span> natijasi
              raqamlarda
            </h2>
            <div className="stats">
              <div className="stat-item">
                <div>
                  <img src={bookMark} alt="Bookmark image" />
                </div>
                <div className="stat-info">
                  <h3>1300+</h3>
                  <p>Shu kungacha bitirgan o‘quvchilar</p>
                </div>
              </div>
              <div className="stat-item">
                <div>
                  <img src={Asset} alt="csachsjhfsjh" />
                </div>
                <div className="stat-info">
                  <h3>400 dona</h3>
                  <p>Shu kungacha o‘quvchilarning ishga joylashishi</p>
                </div>
              </div>
            </div>
          </div>

          <div className="salary">
            <p>
              6 oy tajribaga ega bitiruvchilar odatda o‘rtacha shuncha maosh
              oladi.
            </p>
            <div className="salary-values">
              <span>
                Dasturlash <strong>$321</strong>
              </span>
              <span>
                Dizayn <strong>$400</strong>
              </span>
            </div>
          </div>

          <div className="buttons">
            <button className="yellow-btn">
              <img src={icon} alt="icon" /> Per month Hackathon’s
            </button>
            <button className="gray-btn">Hackatonga ro‘yxatdan o‘ting!</button>
            <button className="gray-btn">
              <img src={icon} alt="icon" /> Chegirmalar
            </button>
          </div>
        </div>

        <div className="right-box">
          <h2 className="gradient-text">Bepul konsultatsiya</h2>
          <p>
            Telefon raqamingizni yozib qoldiring, biz sizga qo‘ng‘iroq qilamiz
            va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
          </p>
          <form>
            <input type="text" placeholder="Ismingiz" />
            <input type="text" placeholder="Qanday kasb egallamoqchisiz?" />
            <div className="number-sub">
              <input type="tel" placeholder="+998" />
              <button type="submit">Yuborish</button>
            </div>
            <label className="checkbox">
              <input type="checkbox" />
              Shaxsiy ma’lumotlarni qayta ishlanishiga roziman
            </label>
          </form>
        </div>
      </div>

      <Courses />

      <CardList />
      <section className="students-section">
        <h2 className="theme">O‘quvchilarni fikrlari</h2>
        <div className="students">
          {[1, 2, 3, 4].map((_, index) => (
            <div className="student" key={index}>
              <div className="video-not">
                <img src={vidPlay} alt="Video icon" />
              </div>
              <div className="user">
                <img className="avatar" src={student} alt="student image" />
                <div className="desc">
                  <h3>Alixon</h3>
                  <p>Frontend o‘quvchisi</p>
                </div>
                <div>
                  <img
                    className="playBtn"
                    src={vidCircle}
                    alt="Video start btn"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="soon-section">
        <h2 className="theme">
          Yaqin orada ochiladigan kurslarimizga yoziling
        </h2>
        <div className="boxs">
          <div className="left-box">
            <select name="select" id="mySelect">
              <option value="1">Qanday kasb egallamoqchisiz?</option>
              <option value="2">Web developer</option>
              <option value="3">Desiner</option>
              <option value="4">Ciyber Cecurity</option>
            </select>
            <div className="box">
              <div>
                <p>Guruh boshlanadigan sana tanlash</p>
                <hr />
                <div className="btns">
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                </div>
              </div>
            </div>

            <div className="box">
              <div>
                <p>Guruh boshlanadigan sana tanlash</p>
                <hr />
                <div className="btns">
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                  <button>27.02.2025</button>
                </div>
              </div>
            </div>
          </div>
          <div className="right-box">
            <h2 className="theme">
              Ro‘yxatdan o‘tish uchun formani to‘ldiring
            </h2>
            <form>
              <input type="text" placeholder="Ismingiz" />
              <div>
                <input
                  type="number"
                  defaultValue="+998"
                  placeholder="Nomeringiz"
                />
                <button className="send-btn">Yuborish</button>
              </div>
              <label className="checkbox">
                <input type="checkbox" />
                Shaxsiy ma’lumotlarni qayta ishlanishiga roziman
              </label>
            </form>
          </div>
        </div>
      </section>

      <SelectList />

      <section className="location-section">
        <h2 className="theme">Bizning manzillar</h2>
        <div className="location">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12039.999185314418!2d71.70293055!3d41.02526039999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1suz!2s!4v1754145701682!5m2!1suz!2s"
            width="850"
            height="380"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
          <div className="consult">
            <h2 className="gradient-text">Bepul konsultatsiya</h2>
            <p>
              Telefon raqamingizni yozib qoldiring, biz sizga qo‘ng‘iroq qilamiz
              va birorta ham savolingiz javobsiz qolmasligiga harakat qilamiz
            </p>
            <form>
              <input type="text" placeholder="Ismingiz" />
              <select className='select'>
                <option className='option' value="Kasb tanlang">Kasb tanlang</option>
                <option className='option' value="Web Dasturlash">Web Dasturlash</option>
                <option className='option' value="Grafik Dizayn">Kasb tanlang</option>
                <option className='option' value="Digital Marketing">Digital Marketing</option>

              </select>
              <div className="number-sub">
                <input type="tel" placeholder="+998" />
                <button type="submit">Yuborish</button>
              </div>
              <label className="checkbox">
                <input type="checkbox" />
                Shaxsiy ma’lumotlarni qayta ishlanishiga roziman
              </label>
            </form>
          </div>
        </div>
        <div className="footer">
          <h3>Namangan shahar,DXA 2-qavat</h3>
          <div>
            <span>Ish vaqti</span>
            <p>09:00 dan 19:00 gacha</p>
          </div>
          <div>
            <span>Aloqa uchun</span>
            <p>90-694-87-17</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
