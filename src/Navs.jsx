export default function Navs(){
    return (<nav className="navbar navbar-expand-lg navbar-dark navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <span className="navbar-brand">Navbar</span>
      <form className="d-flex">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0  m-lg-auto">
          <li className="nav-item">
            <span className="nav-link active" aria-current="page">
              Home
            </span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Link</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>);
}