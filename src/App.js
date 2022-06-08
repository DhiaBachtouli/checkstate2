
import "./App.css";
import Profile from "./Profiles/Profile/Profile"
import User from "../src/user.webp"
import ProfilePhoto from "./Profiles/ProfilePhoto/ProfilePhoto";
function App() {
  const handleName = (name) => alert(name);
  return (
    <div className="App">
      
      
      <div className="body">
      <ProfilePhoto>
         <img src={User} className="img1"/>
      </ProfilePhoto>
      <Profile
        
          fullName={"Dhia Bachtouli"}
          profession={"Full Stack Developer"}
          bio="checkpoint state 2"
          handleName={handleName}
        >
        </Profile>
      </div>

        
      
    </div>
  );
}

export default App;