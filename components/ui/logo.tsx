import Link from "next/link";
import Image from "next/image";

type LogoVariant = "default" | "white";
type LogoSize = "sm" | "md" | "lg" | "xl";

interface LogoProps {
    /** "default" uses the blue/colored logo; "white" uses the white logo for dark backgrounds */
    variant?: LogoVariant;
    size?: LogoSize;
    href?: string;
    className?: string;
    /** Show tagline below the company name */
    showTagline?: boolean;
}

const sizeConfig: Record<LogoSize, {
    icon: number;
    ashish: string;
    enterprises: string;
    gap: string;
    tagline: string;
}> = {
    sm: {
        icon: 32,
        ashish: "text-lg",
        enterprises: "text-[9px] tracking-[0.28em]",
        gap: "gap-2.5",
        tagline: "text-[8px]",
    },
    md: {
        icon: 44,
        ashish: "text-[26px]",
        enterprises: "text-[11px] tracking-[0.3em]",
        gap: "gap-3",
        tagline: "text-[9px]",
    },
    lg: {
        icon: 56,
        ashish: "text-[34px]",
        enterprises: "text-[13px] tracking-[0.32em]",
        gap: "gap-3.5",
        tagline: "text-[10px]",
    },
    xl: {
        icon: 80,
        ashish: "text-[52px]",
        enterprises: "text-[17px] tracking-[0.35em]",
        gap: "gap-5",
        tagline: "text-xs",
    },
};

const variantConfig: Record<LogoVariant, {
    imageSrc: string;
    ashish: string;
    enterprises: string;
    tagline: string;
}> = {
    default: {
        imageSrc: "/images/logo/logo.png",
        ashish: "text-slate-900",
        enterprises: "text-slate-500",
        tagline: "text-slate-400",
    },
    white: {
        imageSrc: "/images/logo/logo.png",
        ashish: "text-white",
        enterprises: "text-white/75",
        tagline: "text-white/45",
    },
};

export default function Logo({
                                 variant = "default",
                                 size = "md",
                                 href = "/",
                                 className = "",
                                 showTagline = false,
                             }: LogoProps) {
    const s = sizeConfig[size];
    const v = variantConfig[variant];

    const content = (
        <span className={`inline-flex items-center ${s.gap} ${className}`}>

      {/* ── Logo Image ── */}
            <span className="flex-shrink-0">
        <Image
            src={v.imageSrc}
            alt="Ashish Enterprises Logo"
            width={s.icon}
            height={s.icon}
            className="object-contain"
            priority
        />
      </span>

            {/* ── Text Stack ── */}
            <span className="flex flex-col leading-none">
        {/* ASHISH */}
                <span
                    className={`font-black uppercase ${s.ashish} ${v.ashish}`}
                    style={{
                        fontFamily: "'Barlow Condensed', 'Arial Black', sans-serif",
                        letterSpacing: "0.06em",
                    }}
                >
          ASHISH
        </span>

                {/* ENTERPRISES */}
                <span
                    className={`font-bold uppercase ${s.enterprises} ${v.enterprises} mt-0.5`}
                    style={{
                        fontFamily: "'Barlow Condensed', 'Arial Black', sans-serif",
                    }}
                >
          ENTERPRISES
        </span>

                {/* Optional tagline */}
                {showTagline && (
                    <span
                        className={`${s.tagline} ${v.tagline} mt-1 font-medium tracking-wide`}
                    >
            Premium Textile Importer
          </span>
                )}
      </span>
    </span>
    );

    if (!href) return content;

    return (
        <Link href={href} className="inline-flex items-center">
            {content}
        </Link>
    );
}