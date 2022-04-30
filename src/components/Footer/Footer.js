import React from 'react';
// renders footer
function Footer() {
    return (
        <footer className="d-flex align-items-center flex-column">
            <div className="d-flex justify-content-between footer-links">
            <a href="hhttps://github.com/tooqk4u" target="_blank" rel="nofollow noopener noreferrer" title="Go to GitHub"><i className="fab fa-github contact-link"></i></a>
            <a href="https://www.linkedin.com/in/shelley-s-a6554310" target="_blank" rel="nofollow noopener noreferrer" title="Go to LinkedIn"><i className="fab fa-linkedin contact-link"></i></a>
            <a href="mailto:shelleysoucie@protonmail.com" title="Email Me"><i className="fas fa-envelope contact-link"></i></a>
            </div>
            <a href="https://reactjs.org/" className="mt-3"><p>Built with <i className="fab fa-react icon footer-logo"></i><span> React</span></p></a>
        </footer>
    )
}

export default Footer;