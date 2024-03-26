import wave from '../assets/pngwing 1 (1).png'
const Hero = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={wave} className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-7xl font-bold">Books to freshen up
                        your bookshelf</h1>
                    <button className="  mt-8 w-[150px] h-[70px] font-bold hover:bg-yellow-500 rounded-xl text-white text-xl  bg-[#23BE0A]">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;