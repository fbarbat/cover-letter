import React from 'react';
import ResponsiveText from "../../shared/ResponsiveText";
import styles from './BlowingMyOwnHorn.module.css';
import { SlideLayout } from 'spectacle'

function BlowingMyOwnHorn() {
    return (
        <SlideLayout.Center backgroundColor="white">
            <ResponsiveText className={styles.fadeIn} color="quaternary">
                I don't enjoy <em>blowing my own horn</em> but here we go...
            </ResponsiveText>
        </SlideLayout.Center>
    );
}

export default BlowingMyOwnHorn;