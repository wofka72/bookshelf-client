import React from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <header>

        <div className="collapse bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4 className="text-white">About</h4>
                <p className="text-muted">Add some information about the books below, the author, or any other info.</p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4 className="text-white">Menu</h4>
                <ul className="list-unstyled">
                  <li><Link to="/books"><button className="btn btn-outline-info">Books</button></Link></li>
                  <li><Link to="/contacts"><button className="btn btn-outline-info">Contacts</button></Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="navbar navbar-dark bg-dark box-shadow">
          <div className="container d-flex justify-content-between">
            <div>
              <Link to="/">Bookshelf app</Link>
              &nbsp;by&nbsp;
              <a href="https://github.com/wofka72">wofka72</a>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

      </header>
    );
  }
}

export default Header
