import Skills from "./skills";
import { motion } from "framer-motion";
motion;

function AboutMe () {
    return (
        <section id="About"
            className="bg-blue-950 py-10 px-5">
            <div className="flex flex-col items-center gap-5 justify-self-center">
                <div className="bg-green-400 w-3 h-3 rounded-full"></div>
                <h1 className="text-3xl text-center">Allow me to tell you about myself</h1>  
            </div>
            <div className="grid grid-cols-1">
                <div></div>
                <div className="flex flex-col gap-7 my-10">
                    <div className="flex flex-col gap-5">
                        <motion.p className="text-blue-600 text-[20px]"
                            initial={{ opacity: 0, x:-100}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            >
                            Engineering with purpose
                        </motion.p>
                        <motion.p className="italic border-l border-blue-600 border-dashed px-5 mx-5
                            text-[14px]"
                            initial={{ opacity: 0, x:100}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, delay: 0.2 }}
                            >
                            I am Thabani Ndabambi, a 19-year-old Software Developer dedicated 
                            to crafting high-performance digital solutions that bridge the gap 
                            between complex logic and human-centric design. My journey into 
                            engineering began with a drive to understand the "how" behind the 
                            web, which quickly evolved into a mastery of TypeScript and React. 
                            I don't just write code; I architect systems that are scalable, maintainable, 
                            and designed to solve real-world problems with efficiency.
                        </motion.p>
                    </div>
                    <div className="flex flex-col gap-5">
                        <motion.p initial={{ opacity: 0, x:-100}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            className="text-blue-600 text-[20px]">Evolution and Exploration</motion.p>
                        <motion.p className="italic border-l border-blue-600 border-dashed px-5 mx-5 text-[14px]"
                            initial={{ opacity: 0, x:100}}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9 }}
                            >
                            Beyond the syntax, I am a firm believer in the philosophy of continuous 
                            iteration. In an industry that moves as fast as software development, I 
                            pride myself on my ability to rapidly adopt new frameworks and contribute 
                            to open-source communities. When I’m not at my terminal, I’m likely 
                            researching System Architecture and AI automation 
                            or looking for ways to streamline my development workflow. I’m currently 
                            looking to collaborate on projects that push the boundaries of what’s 
                            possible in the modern web.
                        </motion.p>
                    </div>
                </div>
            </div>
            <Skills />
        </section>
    )
}

export default AboutMe;