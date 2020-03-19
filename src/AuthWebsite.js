import React from "react";
import CodeBox from "./CodeBox";

const AuthWebsite = ({ logout, user }) => {
  return (
    <div className="flex_column">
      <h2>Hello, {user}</h2>
      <div className="logout_button" onClick={() => logout()}>
        logout
      </div>
      <CodeBox authStatus={true} />
    </div>
  );
};

export default AuthWebsite;
