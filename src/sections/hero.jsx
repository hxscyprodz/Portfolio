import { motion } from "framer-motion";
import PrimaryButton from "../ui/button";
import DownloadCVButton from "../ui/downloadCvButton";
import { Phone } from "lucide-react";
motion;

function Hero () {
    return(
            <section className="grid grid-cols-1 relative px-5 py-30 mt-10 gap-5"
                id="Home">
                <div className="flex flex-col justify-center gap-8">
                    <motion.div initial={{ opacity: 0, x:-100}} whileInView={{ opacity: 1, x: 0}}
                        transition={{ duration: 0.9}} viewport={{ once: true }}
                        className="flex gap-5 items-center">
                        <div className="bg-green-400 w-2 h-2 rounded-full"></div>
                        <p>let's build together</p>
                    </motion.div>
                    <div className="flex flex-col gap-5">
                        <h1 className="text-3xl font-semibold">Building Innovative Solutions for a Smarter World</h1>
                        <p className="text-[12px] font-semibold text-gray-400">
                            Building digital products that meet your unique needs and goals.
                        </p>
                        <div className="grid grid-cols-1 gap-5 items-center">
                            <PrimaryButton text={"Get started"}/>
                            <DownloadCVButton text={"Download CV"} />
                        </div>
                        <div className="flex gap-5 items-center mt-5">
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src="/profile.png" alt="" />
                                <Phone size={20} className="absolute top-5 left-7 bg-blue-500 rounded-full p-1
                                    border-[#031233] border-2" />
                            </div>
                            <div className="text-[12px]">
                                <p>Need help? <a href="/contact" className="text-blue-500">Contact me</a></p>
                                <p>Tell me about your project</p>
                            </div>
                        </div>
                    </div>

                    {/* Statistics*/}
                    <div className="grid grid-cols-3 gap-2 text-slate-950 shadow-blue-950">
                        <motion.div initial={{ opacity: 0, y:10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9}}
                            viewport={{ once: true}}
                            className="text-center py-3 bg-blue-200 rounded-md">
                            <div className="text-3xl font-bold">2</div>
                            <div className="text-[9px]">Experience</div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y:10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 0.6}}
                            viewport={{ once: true}}
                            className="text-center py-3 bg-blue-200 rounded-md">
                            <div className="font-bold text-3xl">10</div>
                            <div className="text-[9px]">Projects Completed</div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y:10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, delay: 1.2 }}
                            viewport={{ once: true}}
                            className="text-center py-3 bg-blue-200 rounded-md">
                            <div className="font-bold text-3xl">7</div>
                            <div className="text-[9px]">Projects Pending</div>
                        </motion.div>
                    </div>
                </div>
                <motion.div className="flex justify-center items-center"
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    <img className="min-w-70 rounded-4xl shadow-2xl shadow-blue-500" 
                        src="/profile.png" alt="" />
                </motion.div>
            </section>
    )
}

export default Hero;