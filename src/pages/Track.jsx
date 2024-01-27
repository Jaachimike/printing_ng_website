import React from "react";
import PageHeader from "../components/PageHeader";
import arrow from "../assets/png/right-arrow.png";

const Track = () => {
  return (
    <>
      <PageHeader header="Track Order" />
      <div className="max-w-7xl mx-auto">
        <div className="flex space-x-7 mb-20">
          {/* TRACK YUR ORDER HERE */}
          <div className="w-7/12">
            <h2 className="font-bold text-xl  mb-4 text-[#0064A3]">
              Track your Order here
            </h2>
            <p className="mb-10">
              Track your print order without hassles Easily track the status
              your Printin.ng order using your order number and see step by step
              progress on your order.
            </p>
            <p className="font-bold mb-4">Having issues tracking your order?</p>
            <p>
              {" "}
              <span className="font-bold ">Tel:</span> +234 816 353 4401
            </p>
            <p>
              <span className="font-bold ">Email:</span> order@printin.ng
            </p>
          </div>

          {/* ENTER TRACKING NUMBER */}
          <div className="w-full bg-[#CAEFFF] pr-10 pl-16 py-16 rounded-3xl">
            <div className="w-10/12 mx-auto">
              <h2 className="font-semi-bold text-xl text-right mb-4 text-[#0064A3]">
                Enter Tracking Number
              </h2>
              <input type="text" className="block w-full rounded-xl h-10" />
              <div className="flex justify-end">
                <button className="bg-[#129FF7] px-10 py-2 rounded-xl mt-8 text-white font-semibold">
                  Track Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TRACKING STATUS AND SCHEDULE */}
        <div>
          <h2 className="font-bold text-xl text-center mb-4 text-[#0064A3]">
            Tracking Status & Schedule
          </h2>
          <div className="flex flex-col items-center gap-9">
            {/* Order Placed  */}
            <div className=" flex items-center">
              <div className="grid grid-cols-3 place-items-center">
                <p className="font-bold text-xl">Order Placed</p>
                <img src={arrow} alt="arrow svg" className="h-8" />
                <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                  1
                </div>
              </div>

              <div>
                <p>Order has been placed by customer</p>
                <p className="font-bold">@11:30am | Tue | Nov, 2024</p>
              </div>
            </div>
            {/* Order Processing  */}
            <div className=" flex items-center">
              <div className="grid grid-cols-3 place-items-center">
                <p className="font-bold text-xl block">Order Processing</p>
                <img src={arrow} alt="arrow svg" className="h-8 block" />
                <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                  1
                </div>
              </div>

              <div>
                <p>Order has been placed by customer</p>
                <p className="font-bold">@11:30am | Tue | Nov, 2024</p>
              </div>
            </div>
            {/* Order In Transit  */}
            <div className=" flex items-center ">
              <p className="font-bold text-xl">Order In Transit</p>
              <img src={arrow} alt="arrow svg" className="h-8" />
              <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                1
              </div>
              <div>
                <p>Order has been placed by customer</p>
                <p className="font-bold">@11:30am | Tue | Nov, 2024</p>
              </div>
            </div>
            {/* Order Delivered  */}
            <div className=" flex items-center ">
              <p className="font-bold text-xl">Order Delivered</p>
              <img src={arrow} alt="arrow svg" className="h-8" />
              <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                1
              </div>
              <div>
                <p>Order has been placed by customer</p>
                <p className="font-bold">@11:30am | Tue | Nov, 2024</p>
              </div>
            </div>
            {/* Order Completed  */}
            <div className=" flex items-center ">
              <p className="font-bold text-xl"> Order Completed</p>
              <img src={arrow} alt="arrow svg" className="h-8" />
              <div className="rounded-full bg-[#CAEFFF] text-[#CAEFFF] w-fit px-6 py-4 border-4 border-[#0064A3] ">
                1
              </div>
              <div>
                <p>Order has been placed by customer</p>
                <p className="font-bold">@11:30am | Tue | Nov, 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Track;
