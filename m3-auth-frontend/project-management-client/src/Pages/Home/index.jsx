import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/auth.context";

function HomePage() {
  const { isLoggedIn, user, logOut } = useContext(AuthContext);
  
  return (
    <div>
      {isLoggedIn ? (
        <div>
        <h1>Welcome {user.name} to my app!</h1>
        <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <div>
          <h1>Welcome unauntheticated user to my app!</h1> 
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </div>
      )}
    </div>
  );
}

export default HomePage;
