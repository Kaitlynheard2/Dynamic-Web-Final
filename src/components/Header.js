import React from "react";

function Header({ logout, loggedIn }) {
  return (
    <header className="Header">
      <div className="LogoAndMoto">
        <div className="Logo Green Font-link">
          Om <span className="Red">N</span>
          <span className="Pink">o</span>m No<span className="Yellow">m</span>z
        </div>
        <p className="Moto Green">Share your kitchen adventures</p>
      </div>
      <nav>
        {!loggedIn && (
          <>
            <div className="NavLinksMargins">
              <a href="/">Login</a>
              <form action="/create">
                <button type="submit">Get Started</button>
              </form>
            </div>
          </>
        )}
        {loggedIn && (
          <>
            <a className="Green" href="/user/:id">
              Profile
            </a>
            <a className="Green" href="/"></a>
            <a className="Green" href="/add-post"></a>
            <button onClick={() => logout()}>Log Out</button>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
