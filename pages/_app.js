import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import Layout from '../components/Layout';

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <Layout>
      <AnimatePresence exitBeforeEnter>
      <motion.div
      key={router.route}
      initial = 'initialState'
      animate = 'animateState'
      exit = 'exitState'
      transition = {{
        duration : .6,
        ease : 'easeOut'
      }}
      variants = {{
        initialState : {
          opacity : 0,
          // clipPath: 'circle(3.3% at 51% 45%)'
          clipPath: 'inset(100& 0 0 0)'
        },
        animateState : {
          opacity : 1,
          // clipPath: 'circle(74.7% at 49% 45%)'
          clipPath: 'inset(0% 0 0% 0)'
        },
        exitState : {
          // clipPath: 'circle(0% at 50% 50%)'
          clipPath:'inset(100% 0 0 0)'
        }
      }}
      >
      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}