import React from "react";

const CodeBox = ({ authStatus }) => (
  <div>
    <pre>
      <code>
        {`const App = () => {`}
        <br />
        {`const [user, setUser] = useState(null);`}
        <br />
        <br />
        {`return user ? (`}
        <br />
        <div
          className={authStatus ? "highlight" : null}
        >{`    <AuthWebsite logout={() => setUser(null)} user={user} />`}</div>
        {`  ) : (`}
        <br />
        <div className={authStatus ? null : "highlight"}>
          {`    <NoAuthWebsite login={username => setUser(username)} />`}
        </div>
        {`  );`}
        <br />
        {`};`}
      </code>
    </pre>
  </div>
);

export default CodeBox;
