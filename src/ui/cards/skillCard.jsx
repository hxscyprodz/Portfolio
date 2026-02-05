import { motion } from "framer-motion";
import skills from "../../data/skills";
motion;

function SkillCard () {
    const skillsCards = skills.map((skill) => {
        //Destructuring the skill array
        const { stack, techs, key, x } = skill;
        return (
            <motion.div initial={{ opacity: 0, x: x}} 
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                key={key} className="hover-3d">
            <div className="bg-[#031233] rounded-2xl py-10 px-5 flex flex-col gap-5">
                <h2 className="text-2xl">{stack}</h2> 
                <div className="flex flex-col gap-3">
                    <div>
                        <p>{techs[0].name}</p>
                        <progress className="progress progress-info" value={techs[0].value}  max={100}></progress>
                    </div>
                    <div>
                        <p>{techs[1].name}</p>
                        <progress className="progress progress-info" value={techs[1].value}  max={100}></progress>
                    </div>
                    <div>
                        <p>{techs[2].name}</p>
                        <progress className="progress progress-info" value={techs[2].value}  max={100}></progress>
                    </div>
                    <div>
                        <p>{techs[3].name}</p>
                        <progress className="progress progress-info" value={techs[3].value}  max={100}></progress>
                    </div>
                </div>
            </div>
        </motion.div>
        )
    })
    return(
        <div className="flex flex-col gap-10 py-10">
            {skillsCards}
        </div>
    )
}

export default SkillCard;