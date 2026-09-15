import Image from 'next/image';
import { brand, footer } from '@/data/property';

export default function Footer() {
  return (
    <footer className="bg-bone">
      <div className="shell py-12 sm:py-16">
        <div className="rule" />

        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <Image
            src={brand.logoDark}
            alt={brand.name}
            width={brand.logoWidth}
            height={brand.logoHeight}
            loading="lazy"
            className="h-9 w-auto self-start sm:h-11"
          />
          <p className="text-[12px] text-body/80 sm:text-right sm:text-[13px]">{footer.copyright}</p>
        </div>

        <p className="mt-10 max-w-4xl text-[11px] leading-relaxed text-body/75 sm:text-[12px]">
          {footer.disclaimer}
        </p>
      </div>
    </footer>
  );
}
