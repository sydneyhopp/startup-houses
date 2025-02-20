import styles from './ZoomParallax.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import blockPic from '/public/background/block.svg';
import doorPic from '/public/background/frontdoor.svg';
import firstPic from '/public/background/firstfloor.svg';
import secPic from '/public/background/secfloor.svg';
import housePic from '/public/background/wholehouse.svg';
import windowPic from '/public/background/window.svg';
import skyPic from '/public/background/skyline.svg';
import pic1 from '/public/houses/one.jpg';
import pic2 from '/public/houses/two.jpg';
import pic3 from '/public/houses/three.jpg';
import pic4 from '/public/houses/four.jpg';
import pic5 from '/public/houses/five.jpg';
import StickyTextBox from '../TextBox/TextBox';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, .4, 1], [1, 4, 4])
    const scale5 = useTransform(scrollYProgress, [0, .4, 1], [1, 5, 5])
    const scale6 = useTransform(scrollYProgress, [0, .4, 1], [1, 6, 6])
    const scale7 = useTransform(scrollYProgress, [0, .4, 1], [1, 7, 7])
    const scale8 = useTransform(scrollYProgress, [0, .4, 1], [1, 8, 8])
    const scale9 = useTransform(scrollYProgress, [0, .4, 1], [1, 9, 9])

    const pictures = [
        {src: pic1,scale: scale5},
        {src: pic2,scale: scale6},
        {src: pic3,scale: scale7},
        {src: pic4,scale: scale8},
        {src: pic5,scale: scale9},
        {src: blockPic,scale: scale4},
    ]

    const textTranslate = useTransform(scrollYProgress, [0.5, 0.6], ['100vh', '20vh'])


    return (
        <div ref={container} className={styles.container}>
            <div className={styles.sticky}>
                {pictures.map(({src, scale}, index) =>{
                    return <motion.div key = {index} style={{scale}} className={styles.element}>
                                <div  className={styles.imageContainer}>
                                    <Image
                                        src = {src}
                                        fill
                                        alt= "Illustration of the Painted Ladies in SF"
                                        //placeholder='blur' /* blurs the image  */
                                    />
                                </div>
                            </motion.div>
                })}
                <StickyTextBox
                    trans ={textTranslate}
                    left = '10vh'
                    height = '20vh'
                    width = '40vw'
                    back = 'white'
                    border = 'black'
                    text = "heeeeeyyyyyyyyy blah blah hey"
                >
                   

                </StickyTextBox>
            </div>
        </div>
    )
}