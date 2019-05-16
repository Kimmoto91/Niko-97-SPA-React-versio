import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/InfoKit" active>Etusivu</NavigationItem>
        <NavigationItem link="/">Kysely</NavigationItem>
        <NavigationItem link="/">Sosiaalisuus</NavigationItem>
        <NavigationItem link="/InfoKit2">Seksuaalisuus</NavigationItem>
    </ul>
);

export default navigationItems;
