import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import { useState } from "react";
import truncate from "../utils/truncate";

const Home: NextPage = () => {
  const [bypassed, setBypassed] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    fetch(
      "https://bypass.bot.nu/bypass2?url=" +
        (document.getElementById("url") as HTMLInputElement)!.value
    )
      .then((res) => res.json())
      .then((res) => {
        setBypassed(res.destination);
      });
  }

  return (
    <>
      <Head>
        <title>Linkvertise Bypasser</title>
        <meta name="description" content="Bypass Linkvertise ads instantly!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-semibold text-center">
            Linkvertise Bypasser
          </h1>

          <form
            onSubmit={handleSubmit}
            className="mt-2 min-w-[27vw] items-center"
          >
            {/* Input box */}
            <div className="flex flex-col">
              <label className="relative block mt-2">
                <input
                  id="url"
                  type="text"
                  aria-label="Linkvertise URL"
                  placeholder="https://linkvertise.com/..."
                  className="w-full text-xs py-3 pr-4 pl-8 rounded-lg bg-white/5 flex flex-row justify-between items-center outline-none focus:ring-2 transition-all duration-200"
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 opacity-50">
                  <URLIcon />
                </span>
              </label>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-3 bg-[#434581] text-[#fff] text-xs text-opacity-80 rounded-lg px-6 py-3 uppercase font-semibold tracking-wider"
            >
              Bypass
            </motion.button>
            <p className="mt-1 text-[0.6rem] opacity-50 text-center">
              Made by{"  "}
              <span className="text-[#6b6ecc]">
                <strong>WendoJ#9239 | 591702761972695041</strong>
              </span>
            </p>
          </form>

          {/* Container for bypassed link */}
          <div className="mt-10">
            {bypassed ? (
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={bypassed}
                className="max-w-[5rem] hover:bg-white/10 transition-all duration-200 w-full bg-white/5 text-[#fff] text-xs text-opacity-80 rounded-lg px-6 py-3"
              >
                {truncate(bypassed)}
              </a>
            ) : null}
          </div>
        </div>
      </main>
    </>
  );
};

const URLIcon = () => (
  <svg
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="flex-grow-0 flex-shrink-0 w-[10px] h-[10px]"
    preserveAspectRatio="none"
  >
    <path
      d="M6.77103 9.2265C7.08303 9.64361 7.48108 9.98874 7.93819 10.2385C8.3953 10.4882 8.90078 10.6367 9.42034 10.6739C9.93989 10.7112 10.4614 10.6362 10.9494 10.4541C11.4374 10.2721 11.8806 9.9872 12.2489 9.61882L14.4284 7.4393C15.0901 6.7542 15.4562 5.83661 15.4479 4.88418C15.4397 3.93174 15.0576 3.02066 14.3841 2.34716C13.7106 1.67366 12.7996 1.29163 11.8471 1.28336C10.8947 1.27508 9.9771 1.64122 9.292 2.30291L8.04241 3.54523"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.67705 7.77349C9.36505 7.35639 8.967 7.01126 8.50989 6.76152C8.05278 6.51177 7.5473 6.36326 7.02774 6.32605C6.50819 6.28884 5.98671 6.36381 5.49867 6.54586C5.01064 6.72791 4.56746 7.01279 4.19921 7.38118L2.01969 9.5607C1.358 10.2458 0.991861 11.1634 1.00014 12.1158C1.00841 13.0683 1.39044 13.9793 2.06394 14.6528C2.73744 15.3263 3.64852 15.7084 4.60096 15.7166C5.5534 15.7249 6.47098 15.3588 7.15608 14.6971L8.39841 13.4548"
      stroke="white"
      strokeOpacity="0.5"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Home;
