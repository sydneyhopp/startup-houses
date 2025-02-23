import Image from 'next/image';
import styles from './ImageStick.module.scss'
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import StickyTextBox from '../TextBox/TextBox';

// props include:
// image src
// image alt text
// dictionary of text boxes: width, height, left, content, enter, stick, exit
// array of textbox dimensions and location: width, height + top, left

// array of text box content
// array of text box enter and exit times

export default function ImageStick(props) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    // define text box transforms here like:
    // const textTranslate = useTransform(scrollYProgress, [0.4, 0.5, 0.9, .91], ['100vh', '20vh', '20vh', '-30vh'])

    props.boxes.forEach(box => {
        box.transform = useTransform(scrollYProgress, [0, box.enter, box.stick, box.exit], ['100vh', box.top, box.top, box.top])
    })
   

    return (
        <div ref={container} className={styles.container}>
            <div className = {styles.sticky} >
                <Image
                fill 
                objectFit="cover" 
                src = {props.src}
                alt = {props.alt}
                />
                {props.boxes.map(({content, width, left, transform}, index) => {
                    return <StickyTextBox
                    trans ={transform}
                    left = {left}
                    //height = {height}
                    width = {width}
                    >
                        {content}
                    </StickyTextBox>
                })}
            </div>
        </div>
    )

}