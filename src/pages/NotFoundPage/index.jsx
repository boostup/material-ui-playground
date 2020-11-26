import React from "react";
import { Link } from "react-router-dom";

import HtmlHeadTitle from "layout/HtmlHeadTitle";

const NotFoundPage = ({ message }) => {
  const _message = message ? message : "Sorry, couldn't find that page.";

  return (
    <>
      <HtmlHeadTitle title="Oopsy doopsy ┐(´•_•`)┌ " />
      <div>
        <div>
          <p>{_message}</p>
          <p>
            <Link to="/">Let's go back home</Link>
          </p>
        </div>
      </div>
    </>
  );
};
export default NotFoundPage;
