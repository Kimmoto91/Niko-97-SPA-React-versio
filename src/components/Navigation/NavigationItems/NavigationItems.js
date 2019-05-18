import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/">Etusivu</NavigationItem>
        <NavigationItem link="/kysely">Kysely</NavigationItem>
        <NavigationItem link="/sosiaalisuus">Sosiaalisuus</NavigationItem>
        <NavigationItem link="/seksuaalisuus">Seksuaalisuus</NavigationItem>
    </ul>
);

export default navigationItems;
