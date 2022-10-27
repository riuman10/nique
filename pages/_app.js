import Layout from '../components/layout'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

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
        duration : .65,
        ease : 'easeOut'
      }}
      variants = {{
        initialState : {
          opacity : 0,
          clipPath: 'circle(3.3% at 51% 45%)'
        },
        animateState : {
          opacity : 1,
          clipPath: 'circle(74.7% at 49% 45%)'
        },
        exitState : {
          clipPath: 'circle(0% at 50% 50%)'
        }
      }}
      >
      <Component {...pageProps} />
      </motion.div>
      </AnimatePresence>
    </Layout>
  )
}