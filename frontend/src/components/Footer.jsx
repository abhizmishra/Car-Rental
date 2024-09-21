import { IconMail, IconPhoneCall } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <footer>
        <div className="flex flex-wrap items-center justify-around mt-36 ">
          <div className="flex justify-evenly gap-5 ">
            <ul className="">
              <li className="text-2xl">
                <span className="font-bold text-2xl  ">CAR</span> Rental
              </li>
              <li className="text-gray-500 max-w-56">
                We offers a big range of vehicles for all your driving needs. We
                have the perfect car to meet your needs.
              </li>
              <li>
                <a href="tel:123456789">
                  <IconPhoneCall /> &nbsp; (123) -456-789
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                carrental@gmail.com"
                >
                  <IconMail />
                  &nbsp; carrental@gmail.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href=""
                >
                  Design by abhizmishra
                </a>
              </li>
            </ul>

            <ul className="">
              <li className="font-bold text-2xl  ">Company</li>
              <li>
                <a href="#home">New York</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="">
              <li className="font-bold text-2xl  ">Working Hours</li>
              <li>Mon - Fri: 9:00AM - 9:00PM</li>
              <li>Sat: 9:00AM - 19:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="">
              <li className="font-bold text-2xl  ">Subscription</li>
              <li>
                <p>Subscribe your Email address for latest news & updates.</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
