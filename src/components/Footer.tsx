import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col  h-30 pt-10 pb-5  border-t-2 border-gray-600 border-b-2  ">
      <section className="flex justify-around">
        <div className="flex-col flex text-xs md:text-xl">
          ©2023 Javier Garcia.
          <span className="pt-2 ml-2">All rights reserved.</span>
        </div>
        <div className="flex gap-2 ">
          <Image
            src="/1.png"
            width={20}
            height={15}
            alt="Facebook Account"
            className="w-5 h-5 aspect-auto"
          />
          <Image
            src="/2.png"
            width={20}
            height={15}
            alt="Instagram Account"
            className="w-5 h-5 aspect-auto"
          />
          <Image
            src="/3.png"
            width={20}
            height={15}
            alt="Twitter Account"
            className="w-5 h-5 aspect-auto"
          />
          <Image
            src="/4.png"
            width={20}
            height={15}
            alt="Youtube Account"
            className="w-5 h-5 aspect-auto"
          />
        </div>
      </section>
      <section className="pt-20">
        <nav>
          <ul className="flex justify-around border-t-2 border-x-slate-950 pt-3">
            <li>Legal Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>
        </nav>
      </section>
    </div>
  );
};

export default Footer;
