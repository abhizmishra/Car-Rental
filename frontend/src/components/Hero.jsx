import { Link } from "react-router-dom";

import HeroCar from "../images/hero/main-car.png";
import { useEffect, useState } from "react";
import { IconChevronRight, IconCircleCheck } from "@tabler/icons-react";

function Hero() {
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  const bookBtn = () => {
    document
      .querySelector("#booking-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.pageYOffset > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);
  return (
    <>
      <section id="" className="">
        <div className="">
       
          <div className="">
            <div className="">
              <h4 className="text-[22px] font-bold">Plan your trip now</h4>
              <h1>
                Save <span>big</span> with our car rental
              </h1>
              <p>
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pick-up options and much more.
              </p>
              <div className="">
                <Link
                  onClick={bookBtn}
                  className=""
                  to="/"
                >
                  Book Ride &nbsp; <IconCircleCheck />
                </Link>
                <Link className="" to="/">
                  Learn More &nbsp; <IconChevronRight />
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt=""
              className=""
            />
          </div>
        </div>

        {/* page up */}
        <div
          onClick={scrollToTop}
          className={` ${goUp ? "" : ""}`}
        >
          ^
        </div>
      </section>
    </>
  );
}

export default Hero;
