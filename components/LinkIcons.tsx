import { cn } from "@/lib/utils";
import {
  User2,
  SettingsIcon,
  HouseIcon,
  MailIcon,
  LucideMessagesSquare,
  DollarSignIcon,
  Banknote,
  HistoryIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
  route: string;
}

const LinkIcons = ({ route }: Props ): JSX.Element => {
  const pathname = usePathname();
  const isActive = pathname === route || pathname.startsWith(`${route}/`);
  switch (route) {
    case "/dashboard":
      return (
        <div className="relative size-6">
          <HouseIcon
            className={cn('text-salsifyGrass-100', {'text-white': isActive})}
          />
        </div>
      )
    case "/account":
      return (
        <div className="relative size-6">
          <User2 className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )
    case "/settings":
      return (
        <div className="relative size-6">
          <SettingsIcon className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )
    case "/messages":
      return (
        <div className="relative size-6">
          <MailIcon className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )
    case "/community":
      return (
        <div className="relative size-6">
          <LucideMessagesSquare className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )
    case "/payments":
      return (
        <div className="relative size-6">
          <DollarSignIcon className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )
    case "/my-banks":
      return (
        <div className="relative size-6">
          <Banknote className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )
    case "/transactions-history":
      return (
        <div className="relative size-6">
          <HistoryIcon className={cn('text-salsifyGrass-100', {'text-white': isActive})} />
        </div>
      )

    default:
      return <></>; 
  }
}

export default LinkIcons;
