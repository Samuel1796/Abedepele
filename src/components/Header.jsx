// import DrawerMobileNavigation from './DrawerMobileNavigation'
import Gsapp from './Gsapp';

const Header = () => {
    return (
        <div>
            <nav className="backdrop-blur fixed w-full z-20 top-0 left-0 border-b border-gray-200">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-3xl font-bold whitespace-nowrap text-green-700">EcoSave</span>
                    </a>
                    <div className="flex md:order-2">
                        {/* Render the Gsapp component only on small screens */}
                        <div className="md:hidden">
                            <Gsapp />
                        </div>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="text-2xl flex flex-col p-4 md:p-0 mt-4 font-bold border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                            <li>
                                <a href="/" className="font-bold block mr-6 py-2 pl-3 pr-8 text-green-700 bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" className="block mr-6 py-2 pl-3 pr-8 text-green-700 rounded md:p-0 hover:font-extrabold hover:underline">Profile</a>
                            </li>
                            <li>
                                <a href="#" className="block mr-6 py-2 pl-3 pr-8 text-green-700 rounded md:p-0 hover:font-extrabold hover:underline">Check Points</a>
                            </li>
                            <li>
                                <a href="#" className="block mr-6 py-2 pl-3 pr-8 text-green-700 rounded md:p-0 hover:font-extrabold hover:underline">Redeem</a>
                            </li>
                            <li>
                                <a href="#" className="block mr-6 py-2 pl-3 pr-8 text-green-700 rounded md:p-0 hover:font-extrabold hover:underline">History</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
