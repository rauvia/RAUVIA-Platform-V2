import { useState } from "react";
import { Hexagon } from "lucide-react";

interface LogoProps {
  variant?: 'default' | 'footer';
}

export default function Logo({ variant = 'default' }: LogoProps) {
  const [imgError, setImgError] = useState(false);
  const logoUrl = "/media/RAUVIA_CONSULTING_LOGO.png";

  if (variant === 'footer') {
    return (
      <div className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        {!imgError ? (
          <img 
            src={logoUrl} 
            alt="RAUVIA Consulting" 
            className="h-8 w-auto grayscale brightness-200"
            onError={() => setImgError(true)}
          />
        ) : (
          <>
            <Hexagon className="w-5 h-5" />
            <span className="font-bold text-sm tracking-wider">RAUVIA <span className="font-normal text-xs tracking-[0.2em]">CONSULTING</span></span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
      {!imgError ? (
        <img 
          src={logoUrl} 
          alt="RAUVIA Consulting" 
          className="h-12 w-auto"
          onError={() => setImgError(true)}
        />
      ) : (
        <>
          <Hexagon className="w-8 h-8 text-rauvia-navy fill-rauvia-navy/10" strokeWidth={1.5} />
          <div className="flex flex-col">
            <span className="font-bold text-lg tracking-wider text-rauvia-navy leading-none">RAUVIA</span>
            <span className="text-[0.65rem] tracking-[0.2em] text-slate-500 font-medium leading-none mt-1">CONSULTING</span>
          </div>
        </>
      )}
    </div>
  );
}
