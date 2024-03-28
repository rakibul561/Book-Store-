import { Link } from 'react-router-dom';
import wave from '../assets/pngwing 1 (1).png'
const Hero = () => {
    return (
        <div className="hero min-h-screen rounded-xl bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={wave} className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-7xl mb-14 font-bold">Books to freshen up
                        your bookshelf</h1>
                    <Link
                        to='/books'
                        className="font-bold hover:bg-yellow-500 rounded-xl text-white text-3xl p-4  bg-[#23BE0A]">View The List</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;