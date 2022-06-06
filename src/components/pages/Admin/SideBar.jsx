import React from 'react';
import './Admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTruck } from '@fortawesome/free-solid-svg-icons';

function SideBar() {
  return (
    <>
      <nav id="sidebar" className="row">
        <div className="col-4 pl-4">
          <div className="row">
            <div className="col-12 custom-pad">
              <br />
              <div className="custom-logo m-auto"></div>
            </div>
            <div className="col-12 custom-pad">
              <br />
              <div className="m-auto parent-menu-active p-3">
                <div className="text-center">
                  <a href="/admin" className="custom-font-1">
                    <FontAwesomeIcon
                      icon={faHome}
                      className="custom-size-aweseome"
                    />
                    <br />
                    Dashboard
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 custom-pad">
              <br />
              <div className="m-auto p-3">
                <div className="text-center">
                  <a href="/lists" className="custom-font-1">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="custom-size-aweseome"
                    />
                    <br />
                    Cars
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 bg-white text-dark">
          <div className="row">
            <div className="col-12 ml-5 custom-pad">
              <br />
              <div className="custom-logos"></div>
            </div>
            <div className="col-12 custom-pad">
              <br />
              <br />
              <div className="m-auto custom-mar">
                <div className="text-left">
                  <h6 className="pl-3 custom-font-3">DASHBOARD</h6>
                  <div className="custom-menu-active mt-3">
                    <p className="p-2 pl-3 font-weight-bold custom-font-3">
                      Dashboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SideBar;
