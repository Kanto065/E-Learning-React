import logo from './logo.svg';
import './App.css';
import Header from './Components/Shared/Header';
import SignIn from './Components/SignIn/SignIn';
import Courses from './Components/Courses/Courses';
import SignUp from './Components/SignUp/SignUp';
import { Route, Routes } from 'react-router-dom';
import RequireAuthUser from './Components/RequireAuth/RequireAuthUser';
import MyCourses from './Components/Courses/MyCourses';
import RequireAuthIns from './Components/RequireAuth/RequireAuthIns';
import AddCourse from './Components/Courses/AddCourse';
import Orders from './Components/Orders/Orders';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Courses></Courses>}></Route>
        <Route path='/AllCourse' element={<Courses></Courses>}></Route>

        <Route path='/MyCourses' element={
          <RequireAuthUser>
            <MyCourses></MyCourses>
          </RequireAuthUser>
        }></Route>

        <Route path='/viewOrders' element={<Orders></Orders>}></Route>

        <Route path='/orders' element={
          <RequireAuthUser>
            <Orders></Orders>
          </RequireAuthUser>
        }></Route>

        <Route path='/viewAddCourse' element={
          <AddCourse></AddCourse>
        }></Route>

        <Route path='/AddCourse' element={
          <RequireAuthIns>
            <AddCourse></AddCourse>
          </RequireAuthIns>
        }></Route>

        <Route path='/login' element={<SignIn></SignIn>}></Route>
        <Route path='/register' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
