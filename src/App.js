// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import RoomList from './components/Room/RoomList';
import BookingForm from './components/Room/BookingForm';
import Dashboard from './components/User/Dashboard';
import BookingDetails from './components/User/BookingDetails';
import AdminDashboard from './components/Admin/Dashboard';
import BookingList from './components/Admin/BookingList';

const App = () => {
  return (
    <Router>
     <Routes>
     <div>
        {/* Define routes */}
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/register" component={Register} />
        <Route path="/room/list" component={RoomList} />
        <Route path="/room/book" component={BookingForm} />
        <Route path="/user/dashboard" component={Dashboard} />
        <Route path="/user/booking-details" component={BookingDetails} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/booking-list" component={BookingList} />
      </div>
     </Routes>
    </Router>
  );
}

export default App;
