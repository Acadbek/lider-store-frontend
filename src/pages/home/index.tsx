import React from "react";
import Navbar from "@/components/shared/Navbar";
import ProductCard from "../../components/cards/Card";
import { CardTitle } from "../../components/ui/card";
import categoryImage1 from '../../assets/images/lider-phone.png'
import categoryImage2 from '../../assets/images/lider-condi.png'
import categoryImage3 from '../../assets/images/lider-category.png'
import categoryImage4 from '../../assets/images/lider-ice.png'
import categoryImage5 from '../../assets/images/lider-computer.png'
import categoryImage6 from '../../assets/images/lider-darmol.png'
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Hero from "@/components/shared/Hero";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);
  const { t } = useTranslation();

  const products = [
    {
      name: "Wireless Headphones",
      brand: "SoundPro",
      price: 49.99,
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
      name: "Smartphone",
      brand: "Apple",
      price: 999.99,
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
      name: "Laptop",
      brand: "Dell",
      price: 1299.99,
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
      name: "Wireless Headphones",
      brand: "SoundPro",
      price: 49.99,
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
      name: "Smartphone",
      brand: "Apple",
      price: 999.99,
      image: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    }
  ]

  const categoryImages = [
    { link: categoryImage1, size: '50%', bgColor: '#FF6347', title: t('Смартфоны') },
    { link: categoryImage2, size: '70%', bgColor: '#A7F432', title: t('Кондиционеры') },
    { link: categoryImage3, size: '70%', bgColor: '#FFDAB9', title: t('Телевизоры') },
    { link: categoryImage4, size: '60%', bgColor: '#FF00FF', title: t('Холодильники') },
    { link: categoryImage5, size: '70%', bgColor: '#FAD1D3', title: t('Компьютеры') },
    { link: categoryImage6, size: '50%', bgColor: '#960018', title: t('Мелкая техника для дома') },
  ]
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <div className="container mx-auto">
        <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-bold mt-12 text-black dark:text-white">{t("Акции и видеообзоры")}</h2>
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-6">
            <div className="border p-4 h-[330px] rounded-lg">
              <img className="w-full rounded-lg h-[230px] object-cover" src="https://placehold.co/285x230" alt="" />
              <CardTitle className="text-xl font-bold mt-2 line-clamp-1">Скидки до 40% на смартфоны Скидки до 40% на смартфоны Скидки до 40% на смартфоны</CardTitle>              <div className="flex gap-2 mt-2">
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
              </div>
            </div>
            <div className="border p-4 h-[330px] rounded-lg">
              <img className="w-full rounded-lg h-[230px] object-cover" src="https://placehold.co/285x230" alt="" />
              <CardTitle className="text-xl font-bold mt-2 line-clamp-1">Скидки до 40% на смартфоны Скидки до 40% на смартфоны Скидки до 40% на смартфоны</CardTitle>
              <div className="flex gap-2 mt-2">
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
              </div>
            </div>
            <div className="border p-4 h-[330px] rounded-lg">
              <img className="w-full rounded-lg h-[230px] object-cover" src="https://placehold.co/285x230" alt="" />
              <CardTitle className="text-xl font-bold mt-2 line-clamp-1">Скидки до 40% на смартфоны Скидки до 40% на смартфоны Скидки до 40% на смартфоны</CardTitle>              <div className="flex gap-2 mt-2">
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
                <time className="text-gray-500 text-sm" dateTime="2024-01-01">01.01.2024</time>
              </div>
            </div>
          </div>
        </section>
        <h2 className="text-2xl font-bold mt-12 text-black dark:text-white">Категории</h2>
        <section className="flex items-start justify-between mt-6 gap-4">
          <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {categoryImages.map((item, index) => (
              <div
                key={index}
                className="group border p-4 w-[310px] h-[260px] rounded-lg cursor-pointer dark:hover:text-black"
                style={{
                  backgroundImage: `url(${item.link})`,
                  backgroundSize: item.size,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'bottom right',
                  backgroundColor: hoveredIndex === index ? item.bgColor : 'transparent',
                  transition: 'background-color 0.3s',
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h2 className="text-[20px] transition group-hover:text-black font-bold mb-4 text-black dark:text-white">{item.title}</h2>
              </div>
            ))}
          </div>
          <div className="border p-4 w-[310px] h-[535px] rounded-lg">
            <p className="text-2xl font-bold mb-4">{t("Люди часто ищут")}</p>
            <ul className="[&>li]:pb-2 [&>li]:mb-3 [&>li]:cursor-pointer [&>li]:border-b [&>li]:text-black dark:[&>li]:text-white">
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
              <li>
                <Link to="/products">Стиральные машины Premier</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
