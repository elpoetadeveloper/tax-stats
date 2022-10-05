import { ChartPieIcon, PlusCircleIcon } from "@heroicons/react/20/solid";
import { NextApiRequest, NextPage } from "next";
import Link from "next/link";
import supabase from "../supabase/supabaseClient";

const Home: NextPage = () => {
  return (
    <div className="container my-0 mx-auto flex flex-col items-center justify-center">
      <div className="opacity-80">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 300"
          className="w-[406px] md:w-[700px] lg:w-[900px]"
        >
          <title>_</title>
          <rect
            x="74.7"
            y="81.31"
            width="248.82"
            height="145.9"
            fill="#e6e6e6"
          ></rect>
          <rect
            x="74.7"
            y="59.93"
            width="248.82"
            height="21.38"
            fill="#c9c9c9"
          ></rect>
          <path
            d="M301.63,143c-34.57,4.93-20.88,45.35-52.34,43.1-30.17-2.15-17-68.25-50.18-66.19-25.85,1.6-28.52,35.5-50.19,36.94-31.16,2.09-29-31.59-50.18-31.37"
            fill="none"
            stroke="#c9c9c9"
            strokeMiterlimit="10"
            strokeWidth="4"
          ></path>
          <line
            x1="98.74"
            y1="111.23"
            x2="98.74"
            y2="197.29"
            fill="none"
            stroke="#c9c9c9"
            strokeMiterlimit="10"
          ></line>
          <line
            x1="148.92"
            y1="111.23"
            x2="148.92"
            y2="197.29"
            fill="none"
            stroke="#c9c9c9"
            strokeMiterlimit="10"
          ></line>
          <line
            x1="199.11"
            y1="111.23"
            x2="199.11"
            y2="197.29"
            fill="none"
            stroke="#c9c9c9"
            strokeMiterlimit="10"
          ></line>
          <line
            x1="249.29"
            y1="111.23"
            x2="249.29"
            y2="197.29"
            fill="none"
            stroke="#c9c9c9"
            strokeMiterlimit="10"
          ></line>
          <line
            x1="299.48"
            y1="111.23"
            x2="299.48"
            y2="197.29"
            fill="none"
            stroke="#c9c9c9"
            strokeMiterlimit="10"
          ></line>
          <rect
            x="74.7"
            y="98.25"
            width="70.35"
            height="47.73"
            opacity="0.08"
          ></rect>
          <rect
            x="111.46"
            y="183.25"
            width="70.35"
            height="43.96"
            opacity="0.08"
          ></rect>
          <rect
            x="204.37"
            y="169.55"
            width="71.4"
            height="57.66"
            opacity="0.08"
          ></rect>
          <rect
            x="260.45"
            y="99.68"
            width="63.07"
            height="25.6"
            opacity="0.08"
          ></rect>
          <rect
            x="64.26"
            y="93.88"
            width="76.92"
            height="47.55"
            fill="#0ea5e9"
          ></rect>
          <polygon
            points="71.65 129.57 71.65 121.01 84.7 113.84 90.95 121.71 105.67 111.2 112.11 120.39 133.8 105.74 133.8 129.57 71.65 129.57"
            fill="#fff"
            opacity="0.46"
          ></polygon>
          <rect
            x="71.65"
            y="106.99"
            width="13.95"
            height="2.39"
            fill="#ffd200"
          ></rect>
          <rect
            x="71.65"
            y="101.23"
            width="19.92"
            height="2.39"
            fill="#24285b"
          ></rect>
          <rect
            x="90.69"
            y="176.62"
            width="85.43"
            height="61.83"
            fill="#0ea5e9"
          ></rect>
          <rect
            x="102.73"
            y="211.92"
            width="11.75"
            height="20.24"
            fill="#ffd200"
          ></rect>
          <rect
            x="154.2"
            y="207.3"
            width="11.75"
            height="24.85"
            fill="#24285b"
          ></rect>
          <rect
            x="120.03"
            y="195.77"
            width="11.75"
            height="36.39"
            fill="#24285b"
          ></rect>
          <rect
            x="137.5"
            y="184.05"
            width="11.75"
            height="48.11"
            fill="#24285b"
          ></rect>
          <rect
            x="209.16"
            y="160.93"
            width="126.58"
            height="79.13"
            fill="#0ea5e9"
          ></rect>
          <path
            d="M250.76,228.77A28.27,28.27,0,1,1,279,200.5,28.31,28.31,0,0,1,250.76,228.77Zm0-48.92a20.65,20.65,0,1,0,20.66,20.65A20.67,20.67,0,0,0,250.76,179.85Z"
            opacity="0.08"
          ></path>
          <path
            d="M250.76,228.77A28.22,28.22,0,0,1,232,221.65l5.05-5.69a20.64,20.64,0,0,0,13.7,5.19Z"
            fill="#fff"
            opacity="0.46"
          ></path>
          <path
            d="M279,200.5h-7.61a20.68,20.68,0,0,0-20.66-20.65v-7.62A28.3,28.3,0,0,1,279,200.5Z"
            fill="#24285b"
          ></path>
          <path
            d="M250.76,228.77v-7.62a20.68,20.68,0,0,0,20.66-20.65H279A28.3,28.3,0,0,1,250.76,228.77Z"
            fill="#ffd200"
          ></path>
          <g opacity="0.08">
            <path d="M251.38,191.35c.51,0,.66.18.66.68v1.07a4.89,4.89,0,0,1,4,3c.26.53.15.81-.44,1.07l-1.07.48c-.5.24-.74.14-1-.39a2.74,2.74,0,0,0-2.79-1.68c-1.86,0-2.71.55-2.71,1.79a1.65,1.65,0,0,0,1.51,1.46,10.78,10.78,0,0,0,1.57.24,10.3,10.3,0,0,1,2.9.57,4.1,4.1,0,0,1,1.29.7,4.22,4.22,0,0,1,1.16,3c0,2.38-1.59,4-4.41,4.41V209c0,.5-.15.68-.66.68h-1.2c-.5,0-.67-.18-.67-.68v-1.11a5,5,0,0,1-4.37-3.37.71.71,0,0,1,.5-1l1.07-.39c.55-.2.79-.07,1,.48a2.85,2.85,0,0,0,2.95,1.83c2,0,3-.63,3-1.92a1.33,1.33,0,0,0-.94-1.35,7.49,7.49,0,0,0-2.16-.42,9.86,9.86,0,0,1-2.93-.63,4.3,4.3,0,0,1-1.26-.72,4,4,0,0,1-1.18-3c0-2.36,1.48-3.93,4.28-4.3V192c0-.5.17-.68.67-.68Z"></path>
          </g>
          <rect
            x="288.4"
            y="183.25"
            width="34"
            height="5.58"
            opacity="0.08"
          ></rect>
          <rect
            x="288.36"
            y="197.73"
            width="34"
            height="5.58"
            opacity="0.08"
          ></rect>
          <rect
            x="288.36"
            y="212.17"
            width="25.47"
            height="5.58"
            opacity="0.08"
          ></rect>
          <rect
            x="267.17"
            y="90.75"
            width="64.62"
            height="29.88"
            fill="#0ea5e9"
          ></rect>
          <circle cx="277.14" cy="100.2" r="3.84" fill="#24285b"></circle>
          <rect
            x="285.35"
            y="98.25"
            width="40.29"
            height="3.91"
            opacity="0.08"
          ></rect>
          <circle cx="277.14" cy="111.18" r="3.84" fill="#ffd200"></circle>
          <rect
            x="285.35"
            y="109.22"
            width="40.29"
            height="3.91"
            opacity="0.08"
          ></rect>
          <circle cx="88.59" cy="70.42" r="3.46" fill="#0ea5e9"></circle>
          <circle cx="99.66" cy="70.42" r="3.46" fill="#ffd200"></circle>
          <circle cx="110.72" cy="70.42" r="3.46" fill="#24285b"></circle>
        </svg>
      </div>
      <div className="grid gap-5 md:grid-cols-2 items-center justify-center">
        <div className="py-2 px-8 border-2 border-[#0ea5e9] rounded-md">
          <Link href="/newtax">
            <a className="flex items-center justify-center">
              <PlusCircleIcon className="h-10 w-10 fill-[#0ea5e9]"/>
              <span className="ml-2 font-bold">New</span>
            </a>
          </Link>         
        </div>
        <div className="py-2 px-8 border-2 border-[#0ea5e9] rounded-md">
          <Link href="/tax">
            <a className="flex items-center justify-center">
              <ChartPieIcon className="h-10 w-10 fill-[#0ea5e9]"/>
              <span className="ml-2 font-bold">Taxs</span>
            </a>
          </Link>         
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getServerSideProps({ req }: { req: NextApiRequest }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) {
    return { props: {}, redirect: { destination: "/signin" } };
  }

  return { props: { user } };
}