import styles from './TextBox.module.scss';
import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

// ill pass in  translateY consts as props as well as height, width, left and top positions
/*
props: 
- scrollyprogress
- translateY
- top, left, width, height
- background color
- border color
- text color
*/
export default function StickyTextBox(props) {
    
    return (

        <div className={styles.container}>
            <motion.div
                style={{
                    display: 'flex',
                    translateY: props.trans,
                    position: 'sticky',
                    left: props.left,
                    width: 'auto',
                    maxWidth: props.width,
                    zIndex: 1
                }}
            >
                <div className={styles.text}>
                        {props.children}
                </div>

            </motion.div>       
        </div>
    )
};