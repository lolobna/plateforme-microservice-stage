import axios from "axios";
import { useStagiaire } from "../context/StagiaireContext";
import React from "react";

function Header() {
  const { idstagiaire } = useStagiaire();
  return (
    <>
      <div className="header">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="search_bar dropdown">
                  <span
                    className="search_icon p-3 c-pointer"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-magnify" />
                  </span>
                  <div className="dropdown-menu p-0 m-0">
                    <form>
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <ul className="navbar-nav header-right">
                {/* Bouton de filtrage moderne */}
                <div className="dropdown d-flex justify-content-center">
  <button
    className="btn bg-white border-0 shadow-none text-dark fw-semibold"
    type="button"
    id="filterDropdown"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <i className="mdi mdi-filter-outline me-1"></i> Filtrer
  </button>
                  <div
                    className="dropdown-menu dropdown-menu-end p-3 shadow"
                    aria-labelledby="filterDropdown"
                    style={{ minWidth: "250px" }}
                  >
                    <h6 className="dropdown-header">Options de filtre</h6>
                    <form>
                      <div className="mb-2">
                        <label className="form-label">Localisation</label>
                        <select className="form-control">
                          <option>Casablanca</option>
                          <option>Rabat</option>
                          <option>Marrakech</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Domaine</label>
                        <select className="form-control">
                          <option>Developpemnt</option>
                          <option>Marketing</option>
                          <option>comptabilité</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Pré-embauche</label>
                        <select className="form-control">
                          <option>Oui</option>
                          <option>Non</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Rémunéré</label>
                        <select className="form-control">
                          <option>Oui</option>
                          <option>Non</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Type</label>
                        <select className="form-control">
                          <option>Présentiel</option>
                          <option>Télétravail</option>
                        </select>
                      </div>
                      <div className="mb-2">
                        <label className="form-label">Durée</label>
                        <select className="form-control">
                          <option>1 mois</option>
                          <option>2 mois</option>
                          <option>3 mois</option>
                          <option>4 mois</option>
                          <option>5 mois</option>
                          <option>6 mois</option>
                          <option>7 mois</option>
                        </select>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary w-100 mt-2"
                      >
                        Appliquer
                      </button>
                    </form>
                  </div>
                </div>
              </ul>
              <ul className="navbar-nav header-right">
                <li className="nav-item dropdown notification_dropdown">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-bell" />
                    <div className="pulse-css" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <ul className="list-unstyled">
                      <li className="media dropdown-item">
                        <span className="success">
                          <i className="ti-user" />
                        </span>
                        <div className="media-body">
                          <a href="#">
                            <p>
                              <strong>Martin</strong> has added a{" "}
                              <strong>customer</strong> Successfully
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="primary">
                          <i className="ti-shopping-cart" />
                        </span>
                        <div className="media-body">
                          <a href="#">
                            <p>
                              <strong>Jennifer</strong> purchased Light
                              Dashboard 2.0.
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="danger">
                          <i className="ti-bookmark" />
                        </span>
                        <div className="media-body">
                          <a href="#">
                            <p>
                              <strong>Robin</strong> marked a{" "}
                              <strong>ticket</strong> as unsolved.
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="primary">
                          <i className="ti-heart" />
                        </span>
                        <div className="media-body">
                          <a href="#">
                            <p>
                              <strong>David</strong> purchased Light Dashboard
                              1.0.
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                      <li className="media dropdown-item">
                        <span className="success">
                          <i className="ti-image" />
                        </span>
                        <div className="media-body">
                          <a href="#">
                            <p>
                              <strong> James.</strong> has added a
                              <strong>customer</strong> Successfully
                            </p>
                          </a>
                        </div>
                        <span className="notify-time">3:20 am</span>
                      </li>
                    </ul>
                    <a className="all-notification" href="#">
                      See all notifications <i className="ti-arrow-right" />
                    </a>
                  </div>
                </li>

                <li className="nav-item dropdown header-profile">
                  <a
                    className="nav-link"
                    href="#"
                    role="button"
                    data-toggle="dropdown"
                  >
                    <i className="mdi mdi-account" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a
                      href={`/${idstagiaire}/profile`}
                      className="dropdown-item"
                    >
                      <i className="icon-user" />
                      <span className="ml-2">Profile </span>
                    </a>
                    <a href="./email-inbox.html" className="dropdown-item">
                      <i className="icon-envelope-open" />
                      <span className="ml-2">Inbox </span>
                    </a>
                    <a href="./page-login.html" className="dropdown-item">
                      <i className="icon-key" />
                      <span className="ml-2">Logout </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
