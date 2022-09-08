function Navbar() {
    return  <nav className="navbar navbar-expand-lg  navbar-light bg-light sticky-top shadow-lg p-3 mb-5 bg-body rounded" id="botonera">
      <div className="container">
        <a className="navbar-brand" href="index.html">ICE SHOP</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 " id="lista">
            <li className="nav-item">
              <a className="nav-link " href="#">CATALOGO 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">CATALOGO 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">CATALOGO 3</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
}
export default Navbar;