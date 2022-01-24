import { motion } from "framer-motion"

export const FadeIn = ({ children, delay }) => {
    return (
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .7, delay: delay }}
        >
            {children}
        </motion.div>
    )
}