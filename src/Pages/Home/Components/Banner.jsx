

const Banner = () => {
    return (
        <div className="relative -mt-[65px]">
            <video autoPlay loop muted className="w-full h-full object-cover">
                <source src="/src/assets/web.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-7xl font-chelsea font-bold">Sundarbans</h1>
            </div>
      </div>
    )
};

export default Banner;