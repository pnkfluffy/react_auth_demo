import React, { useState } from "react";

const stopProp = e => {
  e.stopPropagation();
};

const LoginOverlay = ({ login, removeOverlay }) => {
  const [userName, setUserName] = useState("");

  return (
    <div className="overlay" onClick={() => removeOverlay()}>
      <div className="overlay_card" onClick={e => stopProp(e)}>
        <form onSubmit={() => login(userName)}>
          <input
            placeholder="username"
            required="required"
            onChange={e => setUserName(e.target.value)}
            value={userName}
          />
          <button className="form_submit" type="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginOverlay;
