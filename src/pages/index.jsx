import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/Navbar";
import { BsTelephoneFill } from "react-icons/bs";
import { FaMobileAlt, FaMapPin } from "react-icons/fa";

import Head from "next/head";
import MenuSpecials from "@/components/Menu/MenuSpecials";
import MenuOriginals from "@/components/Menu/MenuOriginals";
import MenuFuture from "@/components/Menu/MenuFuture";

export default function Home() {
  function getToday() {
    return new Date().getDay();
  }

  const dayToday = getToday();

  return (
    <>
      <Head>
        <title>Lindenhof Pätz</title>
        <meta name="description" content="Nur das beste Restaurant in Pätz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-600  text-stone-300">
        <Navbar />
        <div className="flex flex-col  py-16">
          <MenuSpecials />
          <MenuOriginals />
          <MenuFuture />
        </div>

        <div className="flex justify-center bg-slate-700 px-3 text-stone-400">
          <div className="grid w-[800px] grid-cols-2 px-4 max-sm:grid-cols-1">
            <div className="pt-16">
              <h2 className="mb-4 border-l-2 border-slate-600 ps-2 text-2xl uppercase max-sm:text-lg">
                Kontakt
              </h2>
              <ul className="max-sm:text-md  px-2 leading-8 max-sm:leading-8">
                <li className="flex flex-row items-center gap-2 py-2">
                  <div>
                    <a
                      href={`tel:+49 337 636 3360`}
                      rel="nofollow noreferrer noopener"
                    >
                      <BsTelephoneFill className="hover:scale-150 hover:fill-stone-300" />
                    </a>
                  </div>
                  <div>+49 337 636 3360</div>
                </li>
                <li className="flex flex-row items-center gap-2 py-2">
                  <a
                    href={`tel:+49 174 807 6935`}
                    rel="nofollow noreferrer noopener"
                  >
                    <FaMobileAlt className="hover:scale-150 hover:fill-stone-300" />
                  </a>
                  <div>+49 174 807 6935</div>
                </li>
                <li className="flex flex-row items-center gap-2 py-2">
                  <a
                    href="https://maps.google.com/maps?ll=52.226494,13.657365&z=14&t=m&hl=en&gl=DE&mapclient=embed&cid=3786600781970887142"
                    rel="nofollow noreferrer noopener"
                  >
                    <FaMapPin className="hover:scale-150 hover:fill-stone-300" />
                  </a>
                  <div className="max-sm:leading-4">
                    Lindenstraße 4, 15741, Bestensee
                  </div>
                </li>
              </ul>
            </div>
            {/* Enable this if you put open times in the db */}
            {/* <OpenTimes /> */}
            {/* <div className="my-2">
            <h2 className="text-2xl max-sm:text-lg uppercase ps-1 border-l-2 border-slate-600 mb-4">
              Opening Hours
            </h2>
            <div className="text-slate-500 px-2 leading-8 max-sm:text-sm">
              <ul className="px-2 leading-8 max-sm:text-sm max-sm:leading-8">
                {openHours.map((today) => {
                  return (
                    <li
                      key={today.id}
                      className={
                        dayToday === today.dayasint
                          ? "text-stone-300 border-b border-slate-600"
                          : "border-b border-slate-600"
                      }
                    >
                      {dayToday === today.dayasint ? "Heute" : today.day}
                      <span className="float-right">{today.times}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div> */}
            {/* END <OpenTimes /> */}
            {/* <OpenTimes /> */}
            <div className="py-16">
              <h2 className="mb-4 border-l-2 border-slate-600 ps-2 text-2xl uppercase max-sm:text-lg">
                Öffnungszeiten
              </h2>
              <ul className="max-sm:text-md px-2 leading-8 text-slate-500">
                <li
                  className={
                    dayToday === 0
                      ? "border-b border-slate-600 text-stone-300"
                      : "border-b border-slate-600"
                  }
                >
                  {dayToday === 0 ? "Heute" : "Sonntag"}
                  <span className="float-right">10:00-20:00</span>
                </li>
                <li
                  className={
                    dayToday === 1
                      ? "border-b border-slate-600 text-stone-300"
                      : "border-b border-slate-600"
                  }
                >
                  {dayToday === 1 ? "Heute" : "Montag"}
                  <span className="float-right">Geschlossen</span>
                </li>
                <li
                  className={
                    dayToday === 2
                      ? "border-b border-slate-600 text-stone-300"
                      : "border-b border-slate-600"
                  }
                >
                  {dayToday === 2 ? "Heute" : "Dienstag"}
                  <span className="float-right">Geschlossen</span>
                </li>
                <li
                  className={
                    dayToday === 3
                      ? "border-b border-slate-600 text-stone-300"
                      : "border-b border-slate-600"
                  }
                >
                  {dayToday === 3 ? "Heute" : "Mittwoch"}
                  <span className="float-right">Geschlossen</span>
                </li>
                <li
                  className={
                    dayToday === 4
                      ? "border-b border-slate-600 text-stone-300"
                      : "border-b border-slate-600"
                  }
                >
                  {dayToday === 4 ? "Heute" : "Donnerstag"}
                  <span className="float-right">16:00-22:00</span>
                </li>
                <li
                  className={
                    dayToday === 5
                      ? "border-b border-slate-600 text-stone-300"
                      : "border-b border-slate-600"
                  }
                >
                  {dayToday === 5 ? "Heute" : "Freitag"}
                  <span className="float-right">16:00-23:30</span>
                </li>
                <li
                  className={
                    dayToday === 6
                      ? "mb-2 border-b border-slate-600 text-stone-300"
                      : "mb-2 border-b border-slate-600"
                  }
                >
                  {dayToday === 6 ? "Heute" : "Samstag"}
                  <span className="float-right">10:00-23:30</span>
                </li>
              </ul>
            </div>{" "}
          </div>
        </div>

        <footer>
          <div className="mx-4 flex justify-center pb-4 md:mb-0 ">
            <iframe
              width="100%"
              height={240}
              className="rounded bg-black/25 grayscale backdrop-blur-sm"
              title="location map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6912.749519168954!2d13.65194608249894!3d52.22474487266107!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a8166bd79f1dd1%3A0x348cb559539751e6!2sLindenhof%20P%C3%A4tz!5e0!3m2!1sen!2sde!4v1676908879463!5m2!1sen!2sde"
              loading="lazy"
            ></iframe>
          </div>
        </footer>
      </main>
    </>
  );
}
