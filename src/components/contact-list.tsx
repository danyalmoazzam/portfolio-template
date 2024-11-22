import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faGithub,
  faTiktok,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import MotionList from "./motion-list";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
type Contact = {
  name: string;
  className: string;
  href: string;
  icon: any;
};
const contacts: Contact[] = [
  {
    name: "Email",
    className: "bg-foreground",
    href: "mailto:abdulbaqi.dev@gmail.com",
    icon: faEnvelope,
  },

  {
    name: "X",
    className: "bg-foreground",
    href: "https://x.com/abdulbaqi_dev",
    icon: faXTwitter,
  },
  {
    name: "Github",
    className: "bg-foreground",
    href: "https://github.com/abdulbaqi-dev",
    icon: faGithub,
  },
  {
    name: "Instagram",
    className: "bg-foreground",
    href: "https://instagram.com/abdulbaqi_dev/",
    icon: faInstagram,
  },
  {
    name: "TikTok",
    className: "bg-foreground",
    href: "https://tiktok.com/@abdulbaqi_dev",
    icon: faTiktok,
  },
];
export default function ContactList({
  delayOffset = 0,
  showWhenInView = true,
}: {
  delayOffset?: number;
  showWhenInView?: boolean;
}) {
  return (
    <MotionList delayOffset={delayOffset} showWhenInView={showWhenInView}>
      {contacts.map((contact, index) => (
        <TooltipProvider delayDuration={0} key={index}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full bg-foreground p-3 md:h-12 md:w-12",
                  contact.className,
                )}
                asChild
                aria-label={contact.name}
              >
                <a
                  href={contact.href}
                  target="_blank"
                  aria-label={contact.name}
                >
                  <FontAwesomeIcon
                    icon={contact.icon}
                    className="w-fit scale-150"
                  />
                </a>
              </Button>
            </TooltipTrigger>
            <TooltipContent sideOffset={6}>
              <p>{contact.name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </MotionList>
  );
}
