function Services () {
    return(
        <section id="Services"
            className="grid grid-cols-1 px-5 py-20 gap-20">
            <div className="flex flex-col gap-5">
                <div className="flex gap-3 items-center">
                    <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                    <h2 className="text-3xl font-semibold">What l do?</h2>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-400">
                        I specialize in designing user experiences, crafting engaging interfaces, 
                        and building robust web applications that deliver value and usability.
                    </p>
                    <p className="text-gray-400">
                        My approach combines creativity and technical expertise to deliver solutions 
                        that are both visually appealing and highly functional for users.
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <div className="flex flex-col bg-blue-950 p-10 gap-5 rounded-md border-4 border-blue-950
                    hover:border-l-white transition-all duration-500">
                    <h3 className="text-[20px] font-semibold">User Experience (U/X)</h3>
                    <p className="text-sm">
                        I design intuitive and enjoyable experiences by understanding user needs, conducting 
                        research, and creating wire-frames and prototypes that enhance usability.
                    </p>
                </div>
                <div className="flex flex-col bg-blue-950 p-10 gap-5 rounded-md border-4 border-blue-950
                    hover:border-l-white transition-all duration-500">
                    <h3 className="text-[20px] font-semibold">User Experience (U/X)</h3>
                    <p className="text-sm">
                        I design intuitive and enjoyable experiences by understanding user needs, conducting 
                        research, and creating wire-frames and prototypes that enhance usability.
                    </p>
                </div>
                <div className="flex flex-col bg-blue-950 p-10 gap-5 rounded-md border-4 border-blue-950
                    hover:border-l-white transition-all duration-500">
                    <h3 className="text-[20px] font-semibold">User Experience (U/X)</h3>
                    <p className="text-sm">
                        I design intuitive and enjoyable experiences by understanding user needs, conducting 
                        research, and creating wire-frames and prototypes that enhance usability.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Services;