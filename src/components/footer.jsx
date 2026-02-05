import Logo from "./logo";

function Footer () {
    return (
        <footer className="pt-10 pb-2">
            <div className="justify-self-center">
                <Logo />
            </div>
            <p className="text-center text-sm text-gray-400">
                {new Date().getFullYear()} Thabani. &copy; All rights reserved
            </p>
        </footer>
    )
}

export default Footer;