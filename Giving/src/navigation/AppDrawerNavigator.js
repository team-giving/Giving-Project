import { createDrawerNavigator } from 'react-navigation';

import AppStackNavigator from './AppStackNavigator';
import { Fonts } from "../constants.js";

export default AppDrawerNavigator = createDrawerNavigator({
    Giving: AppStackNavigator
},
{
    contentOptions: {
        labelStyle: {
            fontFamily: Fonts.Metropolis,
            fontSize: 15,
            marginLeft: 10,
        },
    }
});