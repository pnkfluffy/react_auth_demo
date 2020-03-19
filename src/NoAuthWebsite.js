import React, { useState } from "react";
import LoginOverlay from "./LoginOverlay";
import CodeBox from "./CodeBox";

const NoAuthWebsite = ({ login }) => {
  const [overlay, setOverlay] = useState(false);

  return (
    <div className="flex_column">
      <div className={overlay ? "overlay_shown" : "overlay_hidden"}>
        <LoginOverlay
          login={e => login(e)}
          removeOverlay={() => setOverlay(false)}
        />
      </div>
      <h2>You are not Authorized</h2>
      <div className="login_button" onClick={() => setOverlay(true)}>
        {" "}
        Login{" "}
      </div>
      <CodeBox authStatus={false} />
    </div>
  );
};

export default NoAuthWebsite;
