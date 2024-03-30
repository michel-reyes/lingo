import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { routes } from '@/lib/routes';
import { SidebarItem } from './sidebar-item';

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        'flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col',
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Lingo
          </h1>
        </div>
      </Link>

      <div className="flex flex-col gap-y-2 flex-1">
        {routes.map((route) => (
          <SidebarItem
            key={route.path}
            label={route.label}
            href={route.path}
            iconSrc={route.icon}
          />
        ))}
      </div>
    </div>
  );
};
