import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import cardDetails from '../data/dataFile';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

    const [user, setUser] = useState(null);
    const navigation = useNavigate();

  useEffect(() => {
    const fetchUser = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    }

    fetchUser();
  }, [])

  if(!user) {
    navigation('/login');
    }

  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <section className="main-section">
          <div className='top-buttons-container'>
            <button style={{borderTopLeftRadius: '10px', borderBottomLeftRadius: '10px'}}>IELTS</button>
            <button>PTE</button>
            <button style={{
              borderTopRightRadius: '10px',
              borderBottomRightRadius: '10px',
            }}>TOEFL</button>
          </div>
          <div className='bottom-section'>
            <p className='bottom-section-text'>Prepare with ease</p>
            <div className='cards-container'>
              {cardDetails.map((card, index) => (
                <div key={index} className='card'>
                  <div className='card-img-div'>img</div>
                  <p className='card-text'>{card.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
