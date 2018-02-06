import React from 'react';
import './Footer.css';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p>
            New to Bootstrap? <a
              href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">Visit the homepage
            </a> or read our <a
              href="https://getbootstrap.com/docs/4.0/getting-started/introduction/">getting started guide</a>.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
