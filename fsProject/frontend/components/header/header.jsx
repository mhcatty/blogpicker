import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        return this.props.logout()
            .then(() => this.props.history.push('/login'))
    }

    render() {
        const pathname = this.props.location.pathname;
        let loginCondition;
        if (this.props.currentUser) {
            loginCondition = <>
                <Link to={`/users/${this.props.currentUser.id}`}>
                    {this.props.currentUser.username}
                </Link>
                <button onClick={this.handleLogout}>Logout</button>
            </>
        } else if (pathname === "/login" || pathname === "/signup") {
            loginCondition = <div></div>;
        } else {
            loginCondition = <>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log In</Link>
            </>
        }
        
        let nameOfClass; //To change header visual for login/signup page
        if (pathname === "/login" || pathname === "/signup") {
            nameOfClass = 'header-session-form';
        } else {
            nameOfClass = 'header';

        }

        return (
            <div className={nameOfClass}>
                <svg viewBox="0 0 24 24" className="circles-container">
                    <circle id="circle-left" cx="6" cy="12" r="5"></circle>
                    <circle id="circle-right" cx="18" cy="12" r="5"></circle>
                </svg>
                <h3>Website Name Header Here</h3>
                {loginCondition}
            </div>
        )
    }

}

export default Header;