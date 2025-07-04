import {
  CloudDownload,
  CloudUpload,
  Facebook,
  Headset,
  Instagram,
  LucideCloudUpload,
  Microchip,
  Monitor,
  MonitorIcon,
  Mouse,
  Printer,
  Store,
  Twitter,
} from "lucide-react";
import "./App.css";
import crop from "./assets/Dark Blue Simple Dark Tech and Gaming Bio-Link Website.png";
function App() {
  return (
    <div className="w-full relative">
      <img className="w-full h-screen" src={crop} alt="" />
      <div className=" absolute top-50 left-[30%] flex flex-col items-center ">
        <div className="text-center">
          <h1 className="text-white text-[45px]">Portal Tech Co.</h1>
          <p className="text-white text-[20px] uppercase">choose a category</p>
        </div>
        <div className="grid grid-cols-3 py-12 px-14 gap-6 my-4  bg-slate-600 opacity-50">
          <div className="flex flex-col px-12 items-center">
            <Printer className="cursor-pointer" color="white" size={60} />
            <p className="p-style">Printers</p>
          </div>
          <div className="flex flex-col items-center">
            <Monitor className="cursor-pointer" color="white" size={60} />
            <p className="p-style">Monitors</p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <Headset className="cursor-pointer" color="white" size={60} />
            <p className="p-style">Headsets</p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <LucideCloudUpload
              className="cursor-pointer"
              color="white"
              size={60}
            />
            <p className="p-style">Storage</p>
          </div>{" "}
          <div className="flex flex-col items-center">
            <Microchip className="cursor-pointer" color="white" size={60} />
            <p className="p-style">Processors</p>
          </div>{" "}
          <div className="flex flex-col items-center ">
            <Mouse className="cursor-pointer" color="white" size={60} />
            <p className="p-style">Mouse</p>
          </div>{" "}
        </div>
        <div className="flex gap-6">
          <Instagram className=".icon-style" color="white" size={30} />
          <Facebook className=".icon-style" color="white" size={30} />
          <Twitter className=".icon-style" color="white" size={30} />
        </div>
      </div>
    </div>
  );
}

export default App;
