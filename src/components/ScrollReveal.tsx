import {motion, useAnimation, useInView} from 'framer-motion';
import {FC, memo, PropsWithChildren, useEffect, useRef} from 'react';

interface ScrollRevealProps {
  width?: 'fit-content' | '100%';
  delay?: number;
}

const ScrollReveal: FC<PropsWithChildren<ScrollRevealProps>> = memo(
  ({children, width = 'fit-content', delay = 0.25}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const mainControls = useAnimation();

    useEffect(() => {
      if (isInView) {
        mainControls.start('visible');
      }
    }, [isInView, mainControls]);

    return (
      <div ref={ref} style={{position: 'relative', width, overflow: 'hidden'}}>
        <motion.div
          animate={mainControls}
          initial="hidden"
          transition={{duration: 0.5, delay}}
          variants={{
            hidden: {opacity: 0, y: 75},
            visible: {opacity: 1, y: 0},
          }}>
          {children}
        </motion.div>
      </div>
    );
  },
);

export default ScrollReveal;
