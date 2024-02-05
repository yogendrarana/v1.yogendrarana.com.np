import { motion } from 'framer-motion'

const Footer = () => {
    const heading = "Footer"
    return (
        <div id="work" className="h-[80vh] p-[1rem] border bg-black text-white">
            <h1 className="text-center text-[10rem] tracking-widest" >
                {
                    heading.split("").map((char, index) => {
                        return (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                {char}
                            </motion.span>
                        )
                    })
                }
            </h1>
        </div>
    )
}

export default Footer;