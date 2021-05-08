import { useState, createContext } from "react";

export const tokencontext = createContext();

const getToken = () => {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  console.log(userToken);
  return userToken;
};

const Tokenprovider = (props) => {
  const [token, setToken] = useState(getToken());
  const saveToken = (userToken) => {
    sessionStorage.setItem("token", JSON.stringify(userToken));
    console.log(userToken);
    setToken(userToken);
  };
  console.log(props);
  return (
    <tokencontext.Provider value={{ token, setToken: saveToken }}>
      {props.children}
    </tokencontext.Provider>
  );
};

export default Tokenprovider;
