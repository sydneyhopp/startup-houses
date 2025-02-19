import styles from './styles.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export default function Index() {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])

    return (
        <div className={styles.container}>
            <div className={styles.sticky}>
                <div className={styles.element}>
                    <motion.div style={{scale:scale4}} className={styles.imageContainer}>
                        <Image
                            src = '/background/frontdoor.svg'
                            fill
                            alt= "Illustration of the Painted Ladies in SF"
                            // placeholder='blur' {/* blurs the image  */}
                        />
                    </motion.div>

                </div>
            </div>
        </div>
    )
}