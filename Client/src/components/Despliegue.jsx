import { useState } from "react";

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        className="bg-zinc-600 text-white active:bg-[#424242] font-bold px-3 py-3 rounded  outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        filter
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed outline-none focus:outline-none">
            <div className="relative my-6 mx-auto">
              <div className="border-0 rounded-lg  relative flex flex-col w-full bg-[#424242] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-zinc-400 rounded-t ">
                  <h3 className="text-xl font=semibold">Include Options</h3>
                  <button
                    className=" text-white float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-white opacity-7 text-xl block bg-transparent pl-4 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-4 justify-auto">
                  <ul className="m-2 p-2 grid grid-flow-row-dense grid-cols-4 grid-rows-4">
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 1</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 2</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 3</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 4</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 1</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 2</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 3</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 4</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 1</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 2</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 3</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 4</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 1</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 2</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 3</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 4</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 1</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 2</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 3</li>
                    <li className="text-center m-2 p-2 rounded flex-auto border-[#f3c669] hover:bg-zinc-300">
                      Op 4</li>
                  </ul>

                </div>
                <div className="flex items-center justify-between p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-[#bac3c7] font-semibold uppercase px-4 py-2 text-sm hover:bg-[#d8d6d4]/10 mr-1 mb-1 rounded"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-[#f3c669] bg-transparent hover:bg-[#f3c669]/70 active:bg-[#e6c789] font-semibold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 select-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;