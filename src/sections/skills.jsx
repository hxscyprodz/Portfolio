import SkillCard from "../ui/cards/skillCard";

function Skills () {
    return (
        <section id="Skills" className="py-10">
            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-5 items-center">
                    <div className="bg-red-500 w-3 h-3 rounded-full"></div>
                    <h1 className="text-3xl text-center">Let's take a look at my skills</h1>
                </div>
                <p className="text-sm px-8 text-center">
                    My toolkit is focused on speed, scalability, and clean code. I use
                    a modern stack to build seamless applications from the database to the browser.
                </p>
            </div>
            <SkillCard />
        </section>
    )
}

export default Skills;