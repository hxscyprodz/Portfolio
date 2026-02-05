import Contact from "./contact";

function Discuss () {
    return (
        <section className="flex flex-col gap-3 bg-blue-50 rounded-md mx-5 p-5">
            <h2 className="text-center text-2xl text-black">Let's discuss your project</h2>
            <p className="text-sm text-gray-500 text-center">
                I'm always open to discussing product design work or partnership opportunities.
            </p>
            <Contact />
        </section>
    )
}

export default Discuss;