import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function App() {
  const handleSuccess = async (credentialResponse) => {
    try {
      const res = await axios.post("http://localhost:5000/auth/google-login", {
        token: credentialResponse.credential
      });
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
     <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div style={{ marginTop: "100px", textAlign: "center" }}>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Login Failed")}
        />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
