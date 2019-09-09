import React from 'react';
import {Slide} from "spectacle";
import ResponsiveText from "../../shared/ResponsiveText";
import styles from './BlowingMyOwnHorn.module.css';

function BlowingMyOwnHorn() {
    return (
        <Slide bgColor="primary">
            <ResponsiveText className={styles.fadeIn} textColor="quaternary">
                I do not enjoy <em>blowing my own horn</em> but here we go...
            </ResponsiveText>
        </Slide>
    );
}

export default BlowingMyOwnHorn;