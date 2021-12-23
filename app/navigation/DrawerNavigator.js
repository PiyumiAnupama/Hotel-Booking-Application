import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RoottBotomBar from './BottomBar';

import {Icon} from 'react-native-elements';
import {Colors} from '../global/styles';
import MenuBar from '../components/MenuBar';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <MenuBar {...props} />}>
      <Drawer.Screen
        name="RootBotomBar"
        component={RoottBotomBar}
        options={{
          title: 'Client',
          drawerIcon: ({focussed, size}) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? '#7cc' : Colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
