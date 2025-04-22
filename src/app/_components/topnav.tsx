export function TopNav() {
    return (
            <nav className="max-w p-4 flex items-center justify-between">
                <div className="text-xl font-bold">Lcarpio's Flower Shop</div>
                
                <div className="flex gap-5">
                    <p className=" text-white px-4 py-2 rounded hover:bg-gray-500"><a href="#">Home</a></p>
                    <p className=" text-white px-4 py-2 rounded hover:bg-gray-500"><a href="#"></a>Bonquet</p>
                    <p className=" text-white px-4 py-2 rounded hover:bg-gray-500"><a href="#"></a>Flowers</p>
                    <p className=" text-white px-4 py-2 rounded hover:bg-gray-500"><a href="#"></a>Orders</p>
                </div>

                <div>
                    <button className=" text-white px-4 py-2 rounded hover:bg-gray-500">Log Out</button>
                </div>
            </nav>
    );
}