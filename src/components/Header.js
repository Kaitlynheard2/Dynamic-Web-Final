import React from "react";

function Header({ logout, loggedIn }) {
  return (
    <header className="Header">
      <div className="Logo Green">
        Om <span className="Red">N</span>
        <span className="Pink">o</span>m No<span classsname="Yellow">m</span>z
      </div>
      <nav>
        {!loggedIn && (
          <>
            <a href="/">Login</a>
            <a href="/create">Get Started</a>
          </>
        )}
        {loggedIn && (
          <>
            <a href="/user/:id">Profile</a>
            <button onClick={() => logout()}>Log Out</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
