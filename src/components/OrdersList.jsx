import { useState } from "react";

function OrdersList() {
  const [orders, setOrders] = useState([
    {
      id: "#FWB1273643",
      status: "Pre-order",
      date: "24 January 2024",
      email: "name@example.com",
      paymentMethod: "Credit card",
      expectedDelivery: "Monday 16 Jul 2024",
    },
    {
      id: "#FWB1273722",
      status: "In transit",
      date: "01 May 2024",
      email: "name@example.com",
      paymentMethod: "VISA",
      expectedDelivery: "Today",
    },
    {
      id: "#FWB1273756",
      status: "Completed",
      date: "01 May 2024",
      email: "name@example.com",
      paymentMethod: "VISA",
      deliveredOn: "Friday 04 May 2024",
    },
  ]);

  const handleCancelOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "Cancelled" } : order
      )
    );
  };

  return (
    <div className="bg-black text-white font-sans p-8 mt-14">
      <h1 className="text-3xl font-bold mb-8">My Orders</h1>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1 bg-gradient-to-b from-gray-900 via-gray-800 to-black p-6 rounded-lg">
          <div className="flex items-center mb-6">
            <img
              className="w-12 h-12 rounded-full mr-4"
              src="https://img.freepik.com/premium-photo/man-with-beard-green-shirt-with-word-s-it_1308172-488066.jpg?ga=GA1.1.442708528.1726944434&semt=ais_hybrid"
              alt="Profile"
            />
            <div className="text-center">
              <h2 className="text-lg text-center font-medium">Jese Leos lorem</h2>
              <p className="text-gray-400 text-center text-sm">jese@flowbite.com</p>
            </div>
          </div>
          <hr className="mb-4" />
          <nav>
            <ul className="leading-loose font-semibold">
              <li className="flex items-center py-2  rounded-xl px-1 hover:bg-gray-700 hover:cursor-pointer">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                Profile
              </li>
              <li className="flex items-center py-2  rounded-xl px-1 hover:bg-gray-700 hover:cursor-pointer">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Orders
              </li>
              <li className="flex items-center py-2  rounded-xl px-1 hover:bg-gray-700 hover:cursor-pointer">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17l3 3L22 9M13 6h8m-8 0V3m0 3L3 21"
                  />
                </svg>
                Gifts
              </li>
              <li className="flex items-center py-2  rounded-xl px-1 hover:bg-gray-700 hover:cursor-pointer">
                <svg
                  className="w-5 h-5 mr-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17l3 3L22 9M13 6h8m-8 0V3m0 3L3 21"
                  />
                </svg>
                Change address
              </li>
            </ul>
            <hr className="my-4" />
            <ul className="text-left text-md font-semibold text-lg ">
              <li className="py-2 cursor-pointer flex  items-center rounded-xl px-1 hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5h2m2 1a2 2 0 112-2 2 2 0 01-2 2m-5 7H7m5 4h2v4H7v-4m-3-2h2v-4H4v4M5 5h.01M17 16l2 2M19 14l-5-5a2 2 0 00-2 0l-5 5a2 2 0 000 2l5 5a2 2 0 002 0l5-5a2 2 0 000-2z"
                  />
                </svg>
                Edit Profile
              </li>
              <li className="py-2 font-semibold text-md cursor-pointer flex items-center rounded-xl px-1 hover:bg-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m10 4v1a2 2 0 002 2h3a2 2 0 002-2V5a2 2 0 00-2-2h-3a2 2 0 00-2 2v1"
                  />
                </svg>
                Log out
              </li>
            </ul>
          </nav>
        </div>

        {/* Orders List */}
        <div className="lg:col-span-3">
          <div className="mb-6 flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <input
              type="text"
              placeholder="Search by Order ID"
              className="bg-black border border-gray-600 rounded-lg p-2 w-full lg:w-1/2 text-white"
            />
            <button className="bg-gray-800 border border-gray-700 text-white rounded-lg p-2 w-full lg:w-auto">
              Search
            </button>
          </div>

          {/* Orders Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-black border border-gray-700 hover:shadow-lg p-6 rounded-lg transition-shadow duration-300"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-medium">{order.id}</h2>
                  <div className="flex items-center">
                    <p
                      className={`text-sm mr-4 ${
                        order.status === "Cancelled"
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {order.status}
                    </p>
                    {order.status !== "Cancelled" && (
                      <button
                        className="bg-blue-600 hover:bg-blue-700 font-bold rounded-lg px-4 py-2"
                        onClick={() => handleCancelOrder(order.id)}
                      >
                        Cancel
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <img
                    className="w-24 rounded-lg"
                    src="https://www.istore.co.za/media/catalog/product/cache/4ebc814e413626645aa42e369230a31f/i/p/iphone_16_pro_max_desert_titanium_pdp_image_position_1__gben_2.png"
                    alt="Product"
                  />
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">iPhone 14 Pro Max</h3>
                    <p className="text-sm text-gray-400">Price: ₹19,268</p>
                    <a href="/" className="text-blue-400 hover:underline">
                      Product Link
                    </a>
                  </div>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-sm text-gray-300">
                      Order Date: {order.date}
                    </p>
                    <p className="text-sm text-gray-300">
                      Payment Method: {order.paymentMethod}
                    </p>
                  </div>
                  <div>
                    {order.expectedDelivery && (
                      <p className="text-sm text-gray-300">
                        Expected Delivery: {order.expectedDelivery}
                      </p>
                    )}
                    {order.deliveredOn && (
                      <p className="text-sm text-gray-400">
                        Delivered On: {order.deliveredOn}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrdersList;