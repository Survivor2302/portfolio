"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="scroll-smooth overflow-auto mb-28">
      <section className=" mb-96 md:px-28 px-8 mt-36 flex flex-col items-center">
        <h2 className="text-3xl text-center mb-8 font-bold bg-gradient-to-r from-pink-light to-purple-light bg-clip-text text-transparent">
          Pour me contacter
        </h2>
        <div className="mt-6 flex flex-col items-center w-full max-w-lg gap-4">
          {/* Email */}
          <div className="flex items-center p-4 bg-white rounded-2xl shadow-md w-full">
            <div className="flex items-center flex-grow space-x-4">
              <span className="p-2 size-10 flex justify-center items-center rounded-full">
                📧
              </span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-500 text-sm">Get in touch via email</p>
              </div>
            </div>
            <button
              onClick={() =>
                (window.location.href = "mailto:example@example.com")
              }
              className="bg-gradient-to-r from-pink-light to-purple-light font-bold text-white px-4 py-2 rounded-lg w-36 hover:cursor-pointer text-center"
            >
              Send Email
            </button>
          </div>

          {/* GitHub */}
          <div className="flex items-center p-4 bg-white rounded-2xl shadow-md w-full">
            <div className="flex items-center flex-grow space-x-4">
              <span className="p-2 size-10 flex justify-center items-center rounded-full">
                🐙
              </span>
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <p className="text-gray-500 text-sm">Check out my projects</p>
              </div>
            </div>
            <Link
              href="https://github.com/Survivor2302"
              className="bg-gradient-to-r from-pink-light to-purple-light font-bold text-white px-4 py-2 rounded-lg w-36 hover:cursor-pointer text-center"
            >
              View Profile
            </Link>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center p-4 bg-white rounded-2xl shadow-md w-full">
            <div className="flex items-center flex-grow space-x-4">
              <span className="p-2 size-10 flex justify-center items-center rounded-full">
                🔗
              </span>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <p className="text-gray-500 text-sm">Connect professionally</p>
              </div>
            </div>
            <Link
              href="https://www.linkedin.com/in/leo-bournizien-0a75a3209/"
              className="bg-gradient-to-r from-pink-light to-purple-light font-bold text-white px-4 py-2 rounded-lg w-36 hover:cursor-pointer text-center"
            >
              Connect
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
