import { Link, NavLink, Outlet } from "react-router-dom";
import logo from './assets/logo-easyascii.svg';

export default function Layout() {
  const year = new Date().getFullYear();

  return (
    <>
      <header>
        <Link to="popular">
          <img src={logo} alt="Easy ASCII" />
        </Link>

        <div className="overlay"></div>

        <nav>
          <ul>
            <li>
              <NavLink to="popular">Popular</NavLink>
            </li>
            <li>
              <NavLink to="punctuation">Punctuation</NavLink>
            </li>
            <li>
              <NavLink to="accent">Accented Characters</NavLink>
            </li>
            <li>
              <NavLink to="greek">Greek</NavLink>
            </li>
            <li>
              <NavLink to="math">Math</NavLink>
            </li>
            <li>
              <NavLink to="arrows">Arrows</NavLink>
            </li>
            <li>
              <NavLink to="fun">Fun</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy;{year} easyASCII &bull; Made by <a href="https://kelbyhawn.com" target="_blank" rel="noreferrer">Kelby Hawn</a></p>
      </footer>
    </>
  );
}