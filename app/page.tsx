import Image from 'next/image';
import { DM_Sans } from '@next/font/google';

const DMSans = DM_Sans({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  let isYearly = true;
  return (
    <main className={`${DMSans.className} lg:container md:mx-auto`}>
      <header className="flex justify-between items-center mt-5 pb-20">
        <Image src="/logo.svg" width={200} height={40} alt="Logo" />
        <nav>
          <ul className="flex font-bold">
            <li className="mx-4">
              <a href="/#" className="active:border-b border-indigo-700 py-2">
                Home
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/#features"
                className="active:border-b border-indigo-700 py-2">
                Features
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/#pricing"
                className="active:border-b border-indigo-700 py-2">
                Pricing
              </a>
            </li>
            <li className="mx-4">
              <a
                href="/#blog"
                className="active:border-b-2 border-indigo-700 py-2 ">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <button className="py-4 px-14 bg-orange-500 rounded-lg text-white text-lg  transition hover:bg-orange-800">
          Get Started
        </button>
      </header>

      <section className="flex items-center justify-around pb-20">
        <div className="w-1/3">
          <h1 className="text-7xl font-bold mb-3">
            Grow your subscription business
          </h1>
          <p className="mb-6">
            Outcome-centered products that reduce churn, optimize pricing, and
            grow your subscription business end-to-end.
          </p>
          <div>
            <button className="py-3 px-12 bg-indigo-600 rounded-lg text-white text-lg transition hover:bg-indigo-800">
              Get Started
            </button>

            <button className="mis-4 rounded-full border w-10 h-10 font-bold animate-bounce">
              &#8595;
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <Image src="/hero.png" width={610} height={650} alt="Hero" />
        </div>
      </section>
      <section className="flex justify-around pb-20">
        <Image
          className="transition-all hover:drop-shadow-lg"
          src="/partners/1.svg"
          width={110}
          height={30}
          alt="1"
        />
        <Image
          className="transition-all hover:drop-shadow-lg"
          src="/partners/2.svg"
          width={110}
          height={30}
          alt="2"
        />
        <Image
          className="transition-all hover:drop-shadow-lg"
          src="/partners/3.svg"
          width={110}
          height={30}
          alt="3"
        />
        <Image
          className="transition-all hover:drop-shadow-lg"
          src="/partners/4.svg"
          width={110}
          height={30}
          alt="4"
        />
        <Image
          className="transition-all hover:drop-shadow-lg"
          src="/partners/5.svg"
          width={110}
          height={30}
          alt="5"
        />
      </section>
      <section className="flex items-center justify-evenly pb-20">
        <div>
          <Image
            src="/content_1.svg"
            width={350}
            height={475}
            alt="content_1"
          />
        </div>
        <div className="w-1/3">
          <h3 className="font-bold text-4xl text-gray-900 mb-4">
            Subscription index
          </h3>
          <p className="text-base text-gray-500 mb-4">
            A daily dataset to keep you up to date on subscription market trends
            and what&apos;s happening in your vertical.
          </p>
          <a className="text-sm font-bold text-indigo-700" href="#">
            Learn more
          </a>
        </div>
      </section>
      <section className="flex items-center justify-evenly pb-20">
        <div className="w-1/3">
          <h3 className="font-bold text-4xl text-gray-900 mb-4">
            In-depth metrics
          </h3>
          <p className="text-base text-gray-500 mb-4">
            Accurate, real-time reporting at your fingertips. Getting data has
            never been easier.
          </p>
          <a className="text-sm font-bold text-indigo-700" href="#">
            Learn more
          </a>
        </div>
        <div>
          <Image
            src="/content_2.svg"
            width={350}
            height={475}
            alt="content_2"
          />
        </div>
      </section>
      <section className="flex items-center justify-evenly pb-20" id="features">
        <div className="flex flex-col items-center text-center w-1/5">
          <Image
            src="/icons/icon_1.svg"
            width={150}
            height={100}
            alt="icon_1"
          />
          <h3 className="font-bold text-lg text-gray-900 mb-4">Benchmarks</h3>
          <p className="text-sm text-gray-500 mb-4">
            Make sure your system meets a benchmark before you use it.
          </p>
        </div>
        <div className="flex flex-col items-center text-center  w-1/5">
          <Image
            src="/icons/icon_2.svg"
            width={150}
            height={100}
            alt="icon_1"
          />
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Pricing Audit
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            These are just a few of the common pricing schemes used on website.
          </p>
        </div>
        <div className="flex flex-col items-center text-center  w-1/5">
          <Image
            src="/icons/icon_3.svg"
            width={150}
            height={100}
            alt="icon_1"
          />
          <h3 className="font-bold text-lg text-gray-900 mb-4">
            Retention Audit
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            Build and release the retention policy to maintain the website.
          </p>
        </div>
      </section>
      <section className="pb-20" id="pricing">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-6xl w-1/3">
            Get the right plan for future product.
          </h2>
          <div>
            <button
              className={`py-3 px-12  rounded-tl rounded-bl  text-lg ${
                isYearly ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-black'
              }`}>
              Yearly
            </button>
            <button
              className={`py-3 px-12  rounded-tr rounded-br  text-lg ${
                !isYearly
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-black'
              }`}>
              Monthly
            </button>
          </div>
        </div>

        <div className="flex justify-center pt-20">
          <div className=" p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
            <span className="text-gray-700 font-semibold text-sm">Basic</span>
            <p className="pt-2 tracking-wide">
              <span className="text-3xl font-semibold">Free</span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8 font-semibold">
              <p className=" text-gray-400">Get started with messaging</p>
              <p className=" text-gray-400 pt-5">Flexible team meetings</p>
              <p className="  text-gray-400 pt-5">5 TB cloud storage</p>

              <a href="#" className="">
                <p className="w-full py-4 bg-indigo-600 mt-8 rounded-xl text-white font-medium">
                  Choose Plan
                </p>
              </a>
            </div>
          </div>
          <div className="w-80 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
            <h1 className="text-white font-semibold text-2xl">Startup</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">$ </span>
              <span className="text-3xl font-semibold">24</span>
              <span className="text-gray-400 font-medium">
                / {isYearly ? 'Year' : 'Month'}
              </span>
            </p>
            <hr className="mt-4 border-1 border-gray-600" />
            <div className="pt-8 text-center">
              <p className="font-semibold text-white">All features in Basic</p>
              <p className="font-semibold text-white pt-5">
                Flexible call scheduling
              </p>
              <p className="font-semibold text-white pt-5">
                15 TB cloud storage
              </p>

              <a href="#" className="">
                <p className="w-full py-4 bg-indigo-600 mt-8 rounded-xl text-white font-medium">
                  Choose Plan
                </p>
              </a>
            </div>
            <div className="absolute top-4 right-4">
              <p className="bg-indigo-700 font-semibold px-4 py-1 rounded-full uppercase text-xs">
                Popular
              </p>
            </div>
          </div>
          <div className="p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
            <h1 className="text-black font-semibold text-2xl">Enterprise</h1>
            <p className="pt-2 tracking-wide">
              <span className="text-gray-400 align-top">$ </span>
              <span className="text-3xl font-semibold">35</span>
              <span className="text-gray-400 font-medium">
                / {isYearly ? 'Year' : 'Month'}
              </span>
            </p>
            <hr className="mt-4 border-1" />
            <div className="pt-8 text-center font-semibold">
              <p className=" text-gray-400">All features in Startup</p>
              <p className=" text-gray-400 pt-5">Growth oriented</p>
              <p className=" text-gray-400 pt-5">Unlimited cloud storage</p>

              <a href="#" className="">
                <p className="w-full py-4 bg-indigo-600 mt-8 rounded-xl text-white font-medium">
                  Choose Plan
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
