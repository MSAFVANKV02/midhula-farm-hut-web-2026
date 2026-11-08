
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { generateWhatsAppLink } from "@/lib/utils";
import {
  ChevronRight,
  Menu,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { webNavLinks } from "../navItems";
import { InstagramIcon } from "@/components/icons";
import MainLogo from "../logos/MainLogo";

const WebSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Open navigation menu"
          className="rounded-xl"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-full max-w-[360px] border-l border-slate-200 bg-white p-0"
      >
        <div className="flex h-full flex-col justify-between">
          {/* Header */}
          <div>
            <SheetHeader className="border-b border-slate-100 p-6 text-left">
              <div className="flex items-center gap-3">
                <MainLogo/>

                <div className="space-y-1">
                  <SheetTitle className="text-base font-bold text-slate-900">
                    Midhula Farm Hut
                  </SheetTitle>

                  <SheetDescription className="flex items-center gap-1 text-xs">
                    <MapPin className="h-3 w-3" />
                    Nedupuzha, Thrissur
                  </SheetDescription>
                </div>
              </div>
            </SheetHeader>

            {/* Navigation */}
            <nav className="space-y-1 p-4">
              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                Explore
              </p>

              {webNavLinks.map((link) => (
                <SheetClose key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-all duration-200 hover:bg-slate-50 hover:text-slate-950"
                  >
                    <span>{link.label}</span>

                    <ChevronRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-slate-900" />
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </div>

          {/* Footer / WhatsApp */}
          <div className="space-y-4 border-t border-slate-100 p-6">
            <div className="space-y-2">
              <p className="text-sm font-bold text-slate-900">
                Let's connect!
              </p>

              <p className="text-xs leading-relaxed text-slate-500">
                Have questions or want to know more about our farm?
                Get in touch with us.
              </p>
            </div>

            <a
              href={generateWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Button
                size="lg"
                className="w-full gap-2 rounded-xl bg-green-600 font-bold text-white hover:bg-green-700"
              >
                <MessageCircle className="h-5 w-5" />
                Chat with Sajith
                <ChevronRight className="ml-auto h-4 w-4" />
              </Button>
            </a>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
              <span>+91 8129120437</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <InstagramIcon className="h-3 w-3" />
                28.7K Followers
              </span>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WebSidebar;
