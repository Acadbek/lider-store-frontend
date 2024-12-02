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

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="dark:bg-black bg-white">
      <div className="border-b">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex gap-5">
              <div className="flex gap-2 items-center">
                <Icon icon="Percent" color="hsl(var(--primary))" width={24} height={24} />
                <h6 className="text-[14px]">{t("Акции и скидки")}</h6>
              </div>
              <div className="flex gap-2 items-center">
                <Icon icon="Map" color="hsl(var(--primary))" width={24} height={24} />
                <h6 className="text-[14px]">{t('Карта магазинов')}</h6>
              </div>
            </div>
            <div className="flex gap-10 py-[2px]">
              <div className="flex gap-2 items-center">
                <Icon icon="Phone" color="hsl(var(--primary))" width={24} height={24} />
                <h6 className="text-[14px]">{t("Контакты")}</h6>
              </div>
              <Select onValueChange={changeLanguage} defaultValue="uz">
                <SelectTrigger className="w-[180px]">
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
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-50 bg-white dark:bg-black">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold text-primary">LIDER</h1>
          <Button>
            {t('Каталог')} <Icon icon="BurgerMenu" color="#fff" width={24} height={24} />
          </Button>
          <div className="relative">
            <Input className="shadow-none w-[600px]" placeholder={t('Поиск')} />
            <Icon className="absolute right-2 top-1/2 -translate-y-1/2" icon="Search" width={24} height={24} />
          </div>
          <div className="flex gap-6 items-center">
            <div className="flex flex-col items-center">
              <Icon icon="HeartBold" width={28} height={28} color="hsl(var(--primary))" />
              <p className="text-xs">{t('Избранное')}</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="Archive" width={28} height={28} color="hsl(var(--primary))" />
              <p className="text-xs">{t('Корзина')}</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="Chandelier" width={28} height={28} color="hsl(var(--primary))" />
              <p className="text-xs">{t('Сравнение')}</p>
            </div>
            <div className="flex flex-col items-center">
              <Icon icon="User" width={28} height={28} color="hsl(var(--primary))" />
              <p className="text-xs">{t('Войти')}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>

  )
}

export default Navbar;
