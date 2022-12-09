import * as React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { RootNavigator } from "./Navigation/RootNavigator";
import { AuthenticatedUserProvider } from "./providers";

const MyStack = () => {
  return (
    <AuthenticatedUserProvider>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </AuthenticatedUserProvider>
  );
};
export default MyStack;
