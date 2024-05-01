import React from "react";
import Topnav from "../components/Home/topnav";
import Background from "../components/Home/background";
import MainContent from "../components/Home/mainContent";
import Test from "../components/relicforms/test";

function Homepage() {
  const homescreencontent: {
    id: number;
    heading: string;
    text: string;
    images: string[];
    button: boolean;
    buttontext: string;
    imgopacity: string;
    imagewholebg: boolean;
    interobvcheck: boolean;
  }[] = [
    {
      id: 1,
      heading: "Set up your Online Business easily",
      text: "Get along with the fast moving world and setup your store online and market your products easily with us.",
      images: [
        "firstpage1.png",
        "firstpage2.png",
        "firstpage3.png",
        "firstpage4.png",
        "firstpage5.png",
        "firstpage6.png",
        "firstpage7.png",
        "firstpage8.png",
        "firstpage9.png",
      ],
      button: true,
      buttontext: "Lets get started!",
      imgopacity: "100",
      imagewholebg: false,
      interobvcheck: false,
    },
    {
      id: 2,
      heading: "Get help with delivery solutions.",
      text: "We will provide delivery services that will help your product reach the destination.",
      images: ["secondslide1.png"],
      button: false,
      buttontext: "",
      imgopacity: "100",
      imagewholebg: false,
      interobvcheck: true,
    },
    {
      id: 3,
      heading: "Get your orders tracked easily.",
      text: "You can track where your orders have reached easily.",
      images: ["thirdslide1.png"],
      button: false,
      buttontext: "",
      imgopacity: "100",
      imagewholebg: false,
      interobvcheck: false,
    },
    {
      id: 4,
      heading: "Get full support on social media marketing.",
      text: "Run adds on social media platforms and attract customers.",
      images: ["fourthslide1.png"],
      button: false,
      buttontext: "",
      imgopacity: "100",
      imagewholebg: false,
      interobvcheck: false,
    },
    {
      id: 5,
      heading: "Supported by real people.",
      text: "We are a community of happy and excited people who are working everyday to improve the product.",
      images: ["fifthslide1.png"],
      button: false,
      buttontext: "",
      imgopacity: "18",
      imagewholebg: true,
      interobvcheck: true,
    },
    {
      id: 6,
      heading: "",
      text: "",
      images: [],
      button: false,
      buttontext: "",
      imgopacity: "18",
      imagewholebg: true,
      interobvcheck: true,
    },
  ];

  return (
    <div className="w-screen h-screen bg-slate-300 overflow-hidden">
      <Topnav />
      {/* <Test /> */}

      <div className="relative overflow-y-scroll overflow-x-hidden scroll-design h-screen z-10 w-full snap-y snap-mandatory">
        {homescreencontent.map((e, i) => {
          return <MainContent pagedata={e} key={i} />;
        })}
      </div>
      <Background />
    </div>
  );
}

export default Homepage;
