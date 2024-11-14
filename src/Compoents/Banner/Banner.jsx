import bannerImage from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='text-center text-white bg-purple-600 space-y-7 pt-10 pb-32 md:pb-48 lg:pb-56 xl:pb-72 2xl:pb-[400px] w-[96%] mx-auto relative rounded-b-3xl mb-32 sm:mb-72 2xl:mb-[600px]'>
            <h1 className='text-3xl sm:text-5xl font-bold'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
            <p className='sm:w-10/12 text-sm mx-auto'>Enhance your tech experience with Gadget Heaven! Discover premium accessories that bring style, functionality, and convenience to your favorite devices.</p>
            <button
            className='btn bg-white text-purple-600 rounded-full text-xl font-semibold px-4 py-2'>Shop Now</button>
            <div style={{ transform: 'translate(-50%)', background:"rgba(255, 255, 255, 0.30)"}} className='absolute w-9/12 md:w-9/12 lg:w-8/12 xl:w-7/12 left-1/2 border-2 border-white rounded-2xl p-4 2xl:p-10'>
                <img className='rounded-2xl' src={bannerImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;