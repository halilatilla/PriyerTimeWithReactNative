import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import SehirSec from './SehirSec';
import Liste from './Liste';

const RouterComponent = () => {
return (
<Router>
    <Scene key="basla" >
    <Scene key="anaekran" component={SehirSec} title="Ana Ekran" />
    <Scene key="listeekran" component={Liste} title="Naman Vakitleri" initial />

    </Scene>

</Router>

);
};

export default RouterComponent;

