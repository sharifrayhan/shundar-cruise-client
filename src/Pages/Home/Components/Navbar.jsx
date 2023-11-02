const Navbar = () => {
    return (
        
        <div className="flex justify-between p-3 z-10 sticky mx-10">

            <img className="h-10" src="https://i.ibb.co/XVxcHJh/logo-white.png" alt="" />

            <div>
                <ul className=" flex gap-5">
                    <li>Home</li>
                    <li>Gallery</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div>
                <button>Login</button>
            </div>

        </div>
    );
};

export default Navbar;