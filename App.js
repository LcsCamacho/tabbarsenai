import Cart from './src/components/cart';
import Routes from './src/routes'

import { NavigationContainer } from '@react-navigation/native'

export default function App() {
  return (
    <>
      <Cart/>
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </>
  );
}


