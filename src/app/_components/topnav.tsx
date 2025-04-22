export function TopNav() {
    return (
            <nav className="max-w p-4 flex items-center justify-between">
                <div className="text-xl font-bold">Lcarpio's Flower Shop</div>
                
                <div className="flex gap-5 list-none class">
                    <a href="#" className=" text-white px-4 py-2 rounded hover:bg-gray-500">Home</a>
                    <li className="relative group">
                        <a href="#" className=" text-white px-4 py-2 rounded hover:bg-gray-500">Bouquet</a>
                        <ul className="absolute items-center pt-5 hidden group-hover:block bg-white text-black rounded">
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Small Bouquet</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Big Bouquet</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Funeral</a></li>
                            <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Wedding</a></li>
                        </ul>
                    </li>
                    <a href="#" className=" text-white px-4 py-2 rounded hover:bg-gray-500">Flowers</a>
                    <a href="#" className=" text-white px-4 py-2 rounded hover:bg-gray-500">Orders</a>
                </div>

                <div>
                    <button className=" text-white px-4 py-2 rounded hover:bg-gray-500">Log In</button>
                </div>
            </nav>

    );
}