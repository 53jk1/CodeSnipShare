import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Snippet from './components/Snippet';

const App = () => {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <div>
                {user ? (
                    <button onClick={() => setUser(null)}>Log Out</button>
                ) : (
                    <Route path="/login" render={() => <Login setUser={setUser} />} />
                )}
                <Route exact path="/" component={MainPage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/snippets/:id" component={Snippet} />
            </div>
        </Router>
    );
};

export default App;
