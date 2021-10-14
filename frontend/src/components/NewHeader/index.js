import React from // { useState, useEffect, useRef }
"react";
import { Link, withRouter } from "react-router-dom";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import NewLogo from "../NewLogo";
// import removeUser from "../../redux/actions/removeUser";
import "./NewHeader.css";
import { DOCS_URL, BLOG_URL, LOGIN_URL } from "../../config";

const NewHeader = (props) => {

  return (
    <header className="NewHeader">
      <NewLogo />
      <div className="HeaderLinksWrap">
        <div className="HeaderLink bold">
          <a
            href={`${DOCS_URL}`}
            className="HeaderLinkDocs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Docs
          </a>
          <a
            href={`${BLOG_URL}`}
            className="HeaderLinkDocs"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blog
          </a>
          <a
            href={`${LOGIN_URL}`}
            className="HeaderLinkDocs"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default withRouter(NewHeader);
