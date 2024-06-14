import { Link, Outlet } from "react-router-dom";

const HomeSidebar = () => {
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
            <Link
              to="/admin/dashboard"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Admin Flow</span>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li className="nav-item">
                <Link
                  to="/admin/dashboard/users"
                  className="nav-link align-middle px-0"
                >
                  <i className="fs-4 bi-house" />
                  <span className="ms-1 d-none d-sm-inline">User</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/dashboard/doners"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-speedometer2" />
                  <span className="ms-1 d-none d-sm-inline">Doners</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/admin/dashboard/donations"
                  className="nav-link px-0 align-middle"
                >
                  <i className="fs-4 bi-table" />
                  <span className="ms-1 d-none d-sm-inline">Donations</span>
                </Link>
              </li>
            </ul>
            <hr />
            <div className="dropdown pb-4">
              <a
                href="#"
                className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="hugenerd"
                  width={30}
                  height={30}
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline mx-1">admin Name</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col py-3" style={{ backgroundColor: "#D8EFD3" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomeSidebar;
