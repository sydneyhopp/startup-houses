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
        // <div className="container">
            <motion.div
                style={{
                    translateY: props.trans,
                    position: 'sticky',
                    // top: props.top,
                    left: props.left,
                    height: props.height,
                    width: props.width,
                    background: props.back,
                    border: `3px solid ${props.border}`,
                    borderRadius: '10px',
                    zIndex: 1
                }}
            >
                <div className="text">
                        <p>{props.text}</p>

                </div>

            </motion.div>       
        // </div>
    )
};