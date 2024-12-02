import React from "react"
import { Icon } from "./Icon";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="mt-8">
      <div className="bg-[#282F3C] py-14">
        <div className="container mx-auto">
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h1 className="text-white text-3xl">LIDER</h1>
              {/* <img width={120} src="public/logo.jpg" alt="" /> */}
              <div className="flex gap-4 mt-4">
                <Icon className="p-1.5 border border-[#7B7D8C] rounded-full" icon="Tg" color="#7B7D8C" width={32} height={32} />
                <Icon className="p-1.5 border border-[#7B7D8C] rounded-full" icon="Insta" color="#7B7D8C" width={32} height={32} />
                <Icon className="p-1.5 border border-[#7B7D8C] rounded-full" icon="FaceBook" color="#7B7D8C" width={32} height={32} />
              </div>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>Покупателям</p>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Как сделать заказ на сайте</Link>
                </li>
              </ul>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>lider.uz</p>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">О нас</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Наши магазины</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Контакты</Link>
                </li>
              </ul>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>Информация</p>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">Статьи</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Рассрочка</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Оферта</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Вакансии</Link>
                </li>
              </ul>
            </div>
            <div className="[&>p]:text-white [&>p]:mb-4">
              <p>Обратная связь</p>
              <Button className="mb-4" variant="outline">Написать нам</Button>
              <ul className="[&>li]:text-[#7B7D8C] [&>li]:text-sm flex flex-col gap-2">
                <li>
                  <Link to="/faq">Вопросы и ответы</Link>
                </li>
                <li>
                  <Link to="/how-to-order">Как сделать заказ на сайте</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center py-4 container mx-auto [&>p]:text-sm">
        <p>2024 © lider.uz - интернет-магазин»</p>
        <p>Разработка</p>
      </div>
    </footer>
  )
}

export default Footer;
