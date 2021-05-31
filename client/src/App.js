import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import ProfilePage from "./components/views/ProfilePage/ProfilePage";
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import ALandingPage from './components/views/Admin/ALandingPage/ALandingPage';
import Auth from './hoc/auth';
import AStudentPage from "./components/views/Admin/AStudentPage/AStudentPage";
import AStudentEditPage from "./components/views/Admin/AStudentEditPage/AStudentEditPage"
import ProfileEditPage from "./components/views/ProfileEditPage/ProfileEditPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component = {Auth(LandingPage,true,false)} />
          <Route exact path="/" component={Auth(LoginPage,false,false)} />
          <Route exact path="/admin" component={Auth(ALandingPage,true,true)} />
          <Route exact path="/admin/student" component={Auth(AStudentPage,true,true)} />
          <Route exact path="/admin/student/edit/:_id" component={Auth(AStudentEditPage,true,true)}/>
          <Route exact path="/profile" component={Auth(ProfilePage,true,false)} />
          <Route exact patrh="/profile/edit" component={Auth(ProfileEditPage,true)} />
          <Route exact path="/login" component = {Auth(LoginPage,false) } />
          <Route exact path ="/register" component = {Auth(RegisterPage,false)} />
        </Switch>
      </div>
    </Router>
  );
}




export default App;
