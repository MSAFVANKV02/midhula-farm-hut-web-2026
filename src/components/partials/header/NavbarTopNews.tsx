import { Phone, MapPin } from "lucide-react";
import { FARM_INFO } from "@/data/farmData";

type Props = {};

const NavbarTopNews = (props: Props) => {
  return (
    <div className="bg-slate-900 sm:block hidden text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto md:flex-row flex-col flex md:items-center md:justify-between gap-4">
        <div className="flex md:items-center md:flex-row flex-col gap-2 mx-auto sm:mx-0">
         <div className="flex items-center gap-2">
           <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold text-white">
            Live Dispatches Active:
          </span>
         </div>
          <span className="text-slate-300 text-xs">
            Safe Pan-India Delivery in Thermocol Vaults with 72h Pure Oxygen
          </span>
        </div>

        <div className="hidden md:flex items-center gap-4 text-xs">
          <span className="flex items-center gap-1.5 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-blue-400" />
            Nedupuzha, Thrissur, Kerala
          </span>
          <span className="text-slate-700">|</span>
          <a
            href={`tel:${FARM_INFO.whatsappDigits}`}
            className="hover:text-white transition-colors flex items-center gap-1.5 font-medium text-slate-300"
          >
            <Phone className="w-3 h-3 text-red-400" />
            {FARM_INFO.whatsappNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarTopNews;
