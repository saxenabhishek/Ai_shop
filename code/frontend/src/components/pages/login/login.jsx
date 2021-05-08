import { useEffect, useState, useContext } from "react";
import styles from "./login.module.css";
import { tokencontext } from "../../context/token";

async function loginUser(credentials) {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

const Login = (props) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [msg, setMsg] = useState();
  const cttoken = useContext(tokencontext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("Loging in...");
    const res = await loginUser({
      username,
      password,
    });
    console.log(res);
    if ("token" in res) {
      cttoken.setToken(res.token);
      console.log(cttoken.token);
    } else {
      setMsg(res.detail);
      console.log(res.detail);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.loginwrapper}>
        <h3 className={styles.titletext}>Welcome, please login!</h3>
        {msg != null ? <p>{msg}</p> : <br></br>}
        <label>
          <p>Username </p>
          <input type="text" onChange={(e) => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password </p>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default Login;
