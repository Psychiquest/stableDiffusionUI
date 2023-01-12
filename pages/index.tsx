import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines";

const Home: NextPage = () => {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Face Photo Restorer</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-24 mt-20">
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-slate-900 sm:text-7xl">
          Bringing Text to Image{" "}
          <span className="relative whitespace-nowrap text-[#3290EE]">
            <SquigglyLines />
            <span className="relative">using AI</span>
          </span>{" "}
          for everyone.
        </h1>
        <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-7">
          Want to try out the recent advances in AI? Let AI create images just by using your imagination
        </p>
        <Link
          className="bg-black rounded-full text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80"
          href="/restore"
        >
          Try it out
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4">
            <div className="flex sm:space-x-2 sm:flex-row flex-col">
              <div>
                <h2 className="mb-1 font-medium text-lg">Original Prompt</h2>
                <p className="mx-auto mt-12 max-w-xl text-lg text-slate-700 leading-10">A unicorn riding in the streets of Mumbai</p>
              </div>
              <div className="sm:mt-0 mt-8">
                <h2 className="mb-1 font-medium text-lg">Retrieved Image</h2>
                <Image
                  alt="Retrieved image of unicorn in the streets of Mumbai"
                  width={320}
                  height={320}
                  src="/unicorn.jpg"
                  className="w-80 h-80 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
          <p className="text-gray-500 mt-3 mb-10 sm:text-base text-sm">
            Check out this prompt.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
