import { useEffect, useState } from "react";
import InstaLogo from "../assets/InstaLogo.png";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {

    const [user, setUser] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUser = () => {
      const user = localStorage.getItem('user');
      if (user) {
        setUser(JSON.parse(user));
      }
    }

    fetchUser();
  }, [])


    return (
        <div>
            <div className="navbar">
                <div className="navbar-heading">Your Progress Summary</div>
                <div className="icons-container">
                    <img
                        src={InstaLogo}
                        height={30}
                        style={{ marginRight: "10px" }}
                    />
                    {user ? (
                        <img
                            src={user.photoURL}
                            alt="user"
                            height={30}
                            style={{ borderRadius: "50%" }}
                            onClick={() => setShowPopup(!showPopup)}
                        />
                    ) : (
                        <BsPersonCircle size={30} />
                    )}
                    {showPopup && (
                        <div className="popup">
                            <div className="popup-content">
                                <p>Hello {user.displayName}</p>
                            </div>
                        </div>    
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
