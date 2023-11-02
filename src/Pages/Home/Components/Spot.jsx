

const Spot = ({spot}) => {
    return (
        <div className=" relative">
            <img className=" h-[300px] rounded-md" src={spot?.image_one} alt="" />
            <div className=" w-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1 className=" text-xl mb-1 uppercase text-white">{spot?.name}</h1>
                <button className=" py-2 px-3 border-3 text-sm border text-white border-white rounded-md">EXPLORE MORE</button>
            </div>
        </div>
    );
};

export default Spot;