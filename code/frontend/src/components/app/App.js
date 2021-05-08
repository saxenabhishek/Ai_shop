import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import Layout from "../layout/Layout";
import Routes from "../routes/routes";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import Tokenprovider from "../context/token";

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    const script1 = document.createElement("script");

    script1.src =
      "https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js";
    script1.async = true;
    script1.type = "module";

    document.body.appendChild(script1);
    const script2 = document.createElement("script");

    script2.src = "https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js";
    script2.async = true;
    script2.noModule = "";
    document.body.appendChild(script2);
  }, []);

  return (
    <div>
      <Helmet
        defaultTitle="SHOP"
        titleTemplate="%s | by team AI"
        defer={false}
      />

      {/* <Auth /> */}

      <Tokenprovider>
        <Layout>
          <Routes />
        </Layout>
      </Tokenprovider>

      <ToastContainer />

      {/* <LoadingBar show={this.props.showLoadingBar} />

      <Notification
        text={this.props.errorText}
        show={this.props.error}
        onOpen={this.props.onRemoveError}
        options={{ type: "fail" }}
      />

      <Notification
        text={this.props.notificationText}
        show={this.props.notification}
        onOpen={this.props.onRemoveNotification}
        options={{ type: "success" }}
      /> */}
    </div>
  );
}

export default App;
