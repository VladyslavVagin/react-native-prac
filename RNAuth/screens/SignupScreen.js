// @ts-nocheck
import React, { useState, useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { AuthContext } from "../context/auth-context";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { createUser } from "../util/Auth";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);
  async function signupHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        "Authentication failed",
        "Please check your credentials and try again."
      );
      setIsAuthenticating(false);
    }
  }

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
