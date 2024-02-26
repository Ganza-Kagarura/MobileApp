import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import NetworkStatus from "./src/components/NetworkStatus"
import { ThemeProvider } from "./src/components/ThemeContext"
import TabNavigation from "./src/components/TabNavigation"
import DrawerNavigator from "./src/components/DrawerNavigation"


const App = () => {
  return (
    <ThemeProvider>
      <NetworkStatus />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
      {/* <NavigationContainer>
        <TabNavigation />
      </NavigationContainer> */}
    </ThemeProvider>
  )
}

export default App

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   header: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });
