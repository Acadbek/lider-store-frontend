import React from "react";
import Navbar from "@/components/shared/Navbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import ProductCard from "../../components/cards/Card";
import { CardTitle } from "../../components/ui/card";
import categoryImage1 from '../../assets/images/lider-phone.png'
import categoryImage2 from '../../assets/images/lider-condi.png'
import categoryImage3 from '../../assets/images/lider-category.png'
import categoryImage4 from '../../assets/images/lider-ice.png'
import categoryImage5 from '../../assets/images/lider-computer.png'
import categoryImage6 from '../../assets/images/lider-darmol.png'
import { Link } from "react-router-dom";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const products = [
    {
      name: "Wireless Headphones",
      brand: "SoundPro",
      price: 49.99,
      image: "https://example.com/images/headphones.jpg"
    },
    {
      name: "Smartphone",
      brand: "Apple",
      price: 999.99,
      image: "https://example.com/images/iphone.jpg"
    },
    {
      name: "Laptop",
      brand: "Dell",
      price: 1299.99,
      image: "https://example.com/images/laptop.jpg"
    },
    {
      name: "Wireless Headphones",
      brand: "SoundPro",
      price: 49.99,
      image: "https://example.com/images/headphones.jpg"
    },
    {
      name: "Smartphone",
      brand: "Apple",
      price: 999.99,
      image: "https://example.com/images/iphone.jpg"
    },
    {
      name: "Laptop",
      brand: "Dell",
      price: 1299.99,
      image: "https://example.com/images/laptop.jpg"
    }
  ]

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const carouselImages = [
    {
      id: 1,
      link: 'https://placehold.co/600x330'
    },
    {
      id: 2,
      link: 'https://placehold.co/600x330'
    },
    {
      id: 3,
      link: 'https://placehold.co/600x430'
    },
    {
      id: 4,
      link: 'https://placehold.co/600x330'
    },
  ]

  const categoryImages = [
    { link: categoryImage1, size: '50%', bgColor: '#FF6347', title: 'Смартфоны' },
    { link: categoryImage2, size: '70%', bgColor: '#A7F432', title: 'Кондиционеры' },
    { link: categoryImage3, size: '70%', bgColor: '#FFDAB9', title: 'Телевизоры' },
    { link: categoryImage4, size: '60%', bgColor: '#FF00FF', title: 'Холодильники' },
    { link: categoryImage5, size: '70%', bgColor: '#FAD1D3', title: 'Компьютеры' },
    { link: categoryImage6, size: '50%', bgColor: '#960018', title: 'Мелкая техника для дома' },
  ]
  return (
    <>
      <Navbar />
      <header className="container mx-auto">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2 w-full rounded-lg">
            <Carousel
              plugins={[plugin.current]}
              className="col-span-2 w-full rounded-lg"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {carouselImages.map((item) => (
                  <CarouselItem key={item.id} className="overflow-hidden rounded-md">
                    <img className="w-full rounded-lg h-[330px] object-cover" src={item.link} alt="" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <img className="rounded-lg h-[330px] object-cover w-full" src="https://placehold.co/330x350" alt="" />
          <img className="rounded-lg h-[330px] object-cover w-full" src="https://placehold.co/330x350" alt="" />
        </div>
      </header>
      <main className="container mx-auto">
        <section className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] mt-6">
          {products.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </section>
        <section>
          <h2 className="text-2xl font-bold mt-12 text-black dark:text-white">Акции и видеообзоры</h2>
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
          <div className="grid gap-4 grid-cols-3">
            {categoryImages.map((item, index) => (
              <div
                key={index}
                className="group border transition p-4 w-[310px] h-[260px] rounded-lg cursor-pointer dark:hover:text-black"
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
            <p className="text-2xl font-bold mb-4">Люди часто ищут</p>
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
      </main >
    </>
  );
};

export default Home;
