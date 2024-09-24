import { signOut } from 'firebase/auth';
import { auth } from '../../firebase-config.js';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigation = useNavigate();

  const handleLogout = async () => { 
    try {
      await signOut(auth);
      localStorage.removeItem('user');
      navigation('/login');
      console.log('User logged out');
    } catch (error) {
      console.error('Error during logout: ', error);
    }
  }

  return (
    <div>
      <div className="sidebar">
        <div className="logo">BabyCode</div>
        <ul className='linksContainer'>
          <li className="active"><a href="#" className='sidebarLink'>Home</a></li>
          <li><a href="#" className='sidebarLink'>Community</a></li>
          <li><a href="#" className='sidebarLink'>Stories</a></li>
          <li><a href="#" className='sidebarLink'>Shop</a></li>
          <li><a href="#" className='sidebarLink'>Feedback</a></li>
        </ul>
        <div className="premium-box">
          <p className='premium-box-heading'>Explore premium features with ease!</p>
          <ul>
            <li>Unlimited Speaking Test Access</li>
            <li>Unlimited Writing Test Access</li>
            <li>Analyze Your Answer</li>
            <li>Check Band Score</li>
          </ul>
          <p className="price-text">Only @ ₹ 299</p>
          <button className="buy-btn">Buy Now</button>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Sidebar
