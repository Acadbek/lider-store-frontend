import { Icon } from "../shared/Icon";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ModeToggle } from "./mode-toggle";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav>
      <div className="flex items-center justify-between p-4 border-b">
        <Link to={'/'}>
          <h1>LOGO</h1>
        </Link>
        <Link to="/address" className="flex gap-2 items-center hover:cursor-pointer hover:text-primary px-2 py-1">
          <Icon icon="Map" color="hsl(var(--primary))" width={24} height={24} />
          <h6 className="text-[14px]">{t('Карта магазинов')}</h6>
        </Link>
        <div className="flex items-center">
          <Select>
            <SelectTrigger className="border rounded-r-none">
              <SelectValue placeholder={t('Все')} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div>
            <Input className="shadow-none w-[700px] rounded-none border-l-0" placeholder={t('Поиск')} />
          </div>
          <Button className="border-l-0 rounded-l-none">
            <Icon className="cursor-pointer" icon="Search" width={32} height={32} />
          </Button>
        </div>
        <div className="flex gap-5 items-center">
          <ModeToggle />
          <Select onValueChange={changeLanguage} defaultValue="uz">
            <SelectTrigger className="w-[120px] border">
              <SelectValue placeholder="Languages" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup className="border-none">
                <SelectItem value="uz">O'zbekcha</SelectItem>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="ru">Русский</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Link
            to="/my-lovely-product"
            className="flex flex-col items-center hover:cursor-pointer group"
          >
            <Icon icon="Archive" width={28} height={28} color="hsl(var(--primary))" />
            <p className="text-xs group-hover:text-primary">{t('Корзина')}</p>
          </Link>
        </div>
      </div>
      <div className="py-1 border-b mb-4 flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button className="border-none hover:bg-transparent hover:text-primary" variant='ghost'>
              <Icon icon="BurgerMenu" width={24} height={24} />
              {t('Все')}
            </Button>
          </SheetTrigger>
          <SheetContent>
            Hello
          </SheetContent>
        </Sheet>
        <Link
          to="/"
          className="flex gap-2 text-sm font-[500] items-center hover:cursor-pointer hover:text-primary px-2 py-1"
        >
          Today's deals
        </Link>
        <Link
          to="/"
          className="flex gap-2 text-sm font-[500] items-center hover:cursor-pointer hover:text-primary px-2 py-1"
        >
          Customer Service
        </Link>
        <Link
          to="/"
          className="flex gap-2 text-sm font-[500] items-center hover:cursor-pointer hover:text-primary px-2 py-1"
        >
          Customer Service
        </Link>
        <Link
          to="/"
          className="flex gap-2 text-sm font-[500] items-center hover:cursor-pointer hover:text-primary px-2 py-1"
        >
          Customer Service
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;