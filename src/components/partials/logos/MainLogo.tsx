import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  logo?: string;
};

const MainLogo = ({ logo }: Props) => {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <div className="relative w-14 h-14  flex items-center justify-center">
        <Image
          fill
          alt="nav logo"
          src={logo??"/logo/main_nav_logo_02.png" }
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* <div>
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950 font-display">
                  MIDHULA
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                  FARM HUT
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-500 tracking-wide">
                Exotic Fish &amp; Crayfish Breeder • Thrissur
              </p>
            </div> */}
    </Link>
  );
};

export default MainLogo;
