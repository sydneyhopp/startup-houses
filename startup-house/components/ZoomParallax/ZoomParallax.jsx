import styles from './ZoomParallax.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import blockPic from '/public/illustrations/frontdoor.png';
import pic1 from '/public/houses/rando1.png';
import pic2 from '/public/houses/rando2.png';
import pic3 from '/public/houses/rando3.png';
import pic4 from '/public/houses/rando4.png';
import pic5 from '/public/houses/rando5.png';
import StickyTextBox from '../TextBox/TextBox';

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
    const firstTranslate = useTransform(scrollYProgress, [0.1, 0.2, 1, 1.5], ['100vh', '5vh', '5vh', '5vh'])
    const secTranslate = useTransform(scrollYProgress, [0.3, 0.4, 1, 1.5], ['100vh', '7vh', '7vh', '7vh'])
    const thirdTranslate = useTransform(scrollYProgress, [0.4, 0.5, 1, 1.5], ['100vh', '9vh', '9vh', '9vh'])
    const fourthTranslate = useTransform(scrollYProgress, [0.5, 0.6, 1, 1.5], ['100vh', '11vh', '11vh', '11vh'])
    const fifthTranslate = useTransform(scrollYProgress, [0.6, 0.7, 1, 1.5], ['100vh', '13vh', '13vh', '13vh'])


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
                    trans ={firstTranslate}
                    left = '55vw'
                    width = '40vw'
                >
                    <p>The San Francisco Bay Area attracts <a href="https://www.startupblink.com/startup-ecosystem/san-francisco-ca-us?page=1">36% of all venture capital investments</a> in the U.S. and is home to over 15,000 startup tech companies.</p>
                </StickyTextBox>
                <StickyTextBox
                    trans ={secTranslate}
                    left = '55vw'
                    width = '40vw'
                >
                    <p>Startup homes play a key role in this ecosystem. They have been the birthplaces of successful companies like Crossmint and KreaAI which were started in the HF0 residence, and DataSift and Kaggle, of Founders Den. But they are more than a hub of innovation– they are home to community– a stark difference from the Silicon Valley startup culture.</p>
                </StickyTextBox>
                <StickyTextBox
                    trans ={thirdTranslate}
                    left = '55vw'
                    width = '40vw'
                >
                    <p>“You have the startup ecosystem in Silicon Valley, but it’s sterile and lacks community. The Residency is a home for people looking for community…it’s an open network for creative technologies and people doing all different things,” said  Community Architect Mackay, aged 23.</p>
                </StickyTextBox>
                <StickyTextBox
                    trans ={fourthTranslate}
                    left = '55vw'
                    width = '40vw'
                >
                    <p>The Residency’s startup homes provide strong support for young people considering startups. According to a study in 2020 from Junior Achievement USA, 66% of teens between the ages of 13 and 17 said they were "likely" to consider starting a business or becoming an entrepreneur. However (51%) said they would need "more information on what it would take to be successful" and (38%) said they would need "friends with similar interests”.</p>
                </StickyTextBox>
                <StickyTextBox
                    trans ={fifthTranslate}
                    left = '55vw'
                    width = '40vw'
                >
                    <p>Luckily, homes offer a robust program that pairs each resident with a coach to provide support and foster a welcoming community within each space.</p>
                </StickyTextBox>
            </div>
        </div>
    )
}