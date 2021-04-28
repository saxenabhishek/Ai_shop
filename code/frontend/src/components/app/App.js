import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";
import Layout from "../layout/Layout";
import Routes from "../routes/routes";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://unpkg.com/ionicons@5.4.0/dist/ionicons.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div>
      <Helmet
        defaultTitle="ERA by deebov"
        titleTemplate="%s | ERA by deebov"
        defer={false}
      />

      {/* <Auth /> */}

      <Layout>
        <Routes />
      </Layout>

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
