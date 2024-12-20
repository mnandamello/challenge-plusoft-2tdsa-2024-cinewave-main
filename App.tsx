import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import MenuNavegation from "./components/MenuNavigation";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import EsqueceuSenha from "./pages/EsqueceuSenha";

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  EsqueceuSenha: undefined;
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App(): React.JSX.Element {
  return (

    //Essa é a estrutura para ver as páginas q terão dentro do site através do coponente de navegação
    // <NavigationContainer>
    //   <MenuNavegation />
    // </NavigationContainer>


    //Essa é a estrutura para que você consiga navegar entre essas páginas que ainda seria fora do site (sem o componente de navegação)
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//OBS: Como foi conversado com vc em sala de aula as navegações ficaram separadas pois vamos precisar realizar umas verificações que você ainda não msotrou (como ver se o usuario esta logado ou não para aparecer uma estrutura ou outra) e tinha nos falado que não precisava ter esse tipo de fluxo que você queria apenas um jeito de ver as 5 páginas e testar a requisição, pois vc ainda não iria disponibilizar o material a tempo da 2 entrega, somente para a GS então após realizar o login aparecerá apenas um toast informando que o login foi bem sucedido, mas ainda não conseguirá passar para a home.