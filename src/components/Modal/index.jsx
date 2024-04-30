/* eslint-disable react-refresh/only-export-components */
import { useRef } from 'react';

const Frame = ({ children, onClose, open }) => {
  const container = useRef(null);

  return (
    <dialog open={open} onClose={onClose} className="bg-transparent inset-0">
      <div className="relative w-[min(50rem,90%)] mx-auto" ref={container}>
        {/* contents */}
        <div className="grid overflow-hidden bg-gray-200 rounded shadow-xl">
          {children}
        </div>
        {/* closer in the corner */}
        <button
          className="absolute -top-2 -right-2 flex justify-center rounded-full h-8 w-8 bg-gray-200 cursor-pointer shadow-xl outline-none border-2 border-gray-200 focus:border-blue-300"
          onClick={() => onClose()}
          title="Close"
        >
          <span className="text-2xl leading-6 select-none">&times;</span>
        </button>
      </div>
    </dialog>
  );
};

const Head = ({ children }) => (
  <div className="block px-4 py-2">
    <h1 className="text-lg">{children}</h1>
  </div>
);

const Body = ({ children }) => (
  <div className="grid place-items-center p-4 max-h-dvh overflow-y-scroll">
    {children}
  </div>
);

export const Modal = { Frame, Head, Body };
