import styles from './ZoomParallax.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import blockPic from '/public/final/zoom.svg';
import pic1 from '/public/houses/rando1.png';
import pic2 from '/public/final/rando2.png';
import pic3 from '/public/final/rando1.png';
import pic4 from '/public/houses/rando4.png';
import pic5 from '/public/houses/rando5.png';
import StickyTextBox from '../TextBox/TextBox';
import AnimateOnScroll from '../AnimateScroll/AnimateScroll';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, .2, 1], [1, 4, 4])
    const scale5 = useTransform(scrollYProgress, [0, .2, 1], [1, 5, 5])
    const scale6 = useTransform(scrollYProgress, [0, .2, 1], [1, 6, 6])
    const scale7 = useTransform(scrollYProgress, [0, .2, 1], [1, 7, 7])
    const scale8 = useTransform(scrollYProgress, [0, .2, 1], [1, 8, 8])
    const scale9 = useTransform(scrollYProgress, [0, .2, 1], [1, 9, 9])

    const pictures = [
        {src: pic1,scale: scale5},
        {src: pic2,scale: scale6},
        {src: pic3,scale: scale7},
        {src: pic4,scale: scale8},
        {src: pic5,scale: scale9},
        {src: blockPic,scale: scale4},
    ]


// maybe create a separate container for the text boxes...
    const firstTranslate = useTransform(scrollYProgress, [0.1, 0.5, 1, 1.5], ['100vh', '5vh', '5vh', '5vh'])


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

             
                    <motion.div className="parallaxTextContainer"
                        style={{translateY: firstTranslate}}>

                        <p>The San Francisco Bay Area attracts <a href="https://www.startupblink.com/startup-ecosystem/san-francisco-ca-us?page=1">36% of all venture capital investments</a> in the U.S. and is home to over 15,000 startup tech companies.</p> <br />
                        <p>Startup homes play a key role in this ecosystem. They have been the birthplaces of successful companies like Crossmint and KreaAI, which were started in the <a href="https://www.hf0.com/facts">HF0 residence</a>, and DataSift and Kaggle, of <a href="https://www.linkedin.com/company/founders-den/">Founders Den</a>. But they are more than a hub of innovation — they are home to community — a stark difference from the Silicon Valley startup culture.</p>
                    </motion.div>
            </div>
        </div>
    )
}