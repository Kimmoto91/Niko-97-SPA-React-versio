import React from 'react';

import nikoLogo from '../../assets/images/Niko97_tunnus_valkoinen_web.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={nikoLogo} alt="Niko-97" />
    </div>
);

export default logo;
