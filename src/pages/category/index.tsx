import ProductCard from "@/components/shared/cards/ProductCard";
import Navbar from "@/components/shared/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import useScrollToTop from "@/utils/useScrollToTop";
import axios from "axios";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React from "react";

const Category = () => {
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(100);
  const [products, setProducts] = React.useState([]);
  const [selectedModels, setSelectedModels] = React.useState([]); // Tanlangan modellarga tegishli state

  const getProducts = async () => {
    try {
      const responsive = await axios('http://localhost:3000/products')
      console.log(responsive);
      setProducts(responsive.data)

    } catch (error) {
      alert(error.message)
    }
  }

  React.useEffect(() => {
    getProducts()
  }, [])

  useScrollToTop();

  const modelsInitialState = [
    "Artel", "Samsung", "Avalon", "Shivaki", "LG", "Xiaomi", "Microlab",
    "Sony", "2E", "Edifier", "F&D", "Premier", "Skilltech", "Eldifer",
    "Yandex", "Fenda", "Ssmart", "Sonor"
  ];

  const [models, setModels] = React.useState(modelsInitialState.slice(0, 5));

  const showOtherModels = () => {
    setModels((prev) =>
      prev.length === 5 ? modelsInitialState : modelsInitialState.slice(0, 5)
    );
  };

  const onUpdateRange = (values: string[]) => {
    const [min, max] = values.map(Number);
    setMinPrice(min);
    setMaxPrice(max);
  };

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinPrice(value >= 0 ? value : 0);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxPrice(value >= 0 ? value : 0);
  };

  const fetchFilteredProducts = async (filters) => {
    // 'filters' obyektini URL query stringga aylantirish
    const queryString = new URLSearchParams(filters).toString();
    console.log('Query String:', queryString);
    // Masalan: Agar filters = { brand: 'Apple', minPrice: '1000' } bo‘lsa, bu "brand=Apple&minPrice=1000" ko‘rinishida chiqadi

    // Serverga fetch orqali so‘rov yuborish
    const response = await fetch(`http://localhost:3000/products?${queryString}`);
    console.log('Response object:', response);
    // Bu fetch qilingan javob obyektini chiqaradi, bunda status, headers va boshqa ma'lumotlar bor.

    // Javobni JSON formatiga aylantirish
    const data = await response.json();
    console.log('Fetched Data:', data);
    // Bu serverdan olingan ma'lumotlarni konsolda ko‘rsatadi. Masalan: `[ { id: 1, name: "iPhone", price: 1000 }, ... ]`

    // Mahsulotlar holatini (state) yangilash
    setProducts(data);
    console.log('Products state updated:', data);
    // Bu holatga (state) yangi mahsulotlar ro‘yxati o‘tkazilganini ko‘rsatadi.
  };

  const handleModelChange = (model) => {
    setSelectedModels((prevSelectedModels) => {
      const updatedSelectedModels = prevSelectedModels.includes(model)
        ? prevSelectedModels.filter((item) => item !== model) // Agar model allaqachon tanlangan bo'lsa, uni olib tashlash
        : [...prevSelectedModels, model]; // Agar model tanlanmagan bo'lsa, uni qo'shish
      return updatedSelectedModels;
    });
  };

  const submit = async (e) => {
    e.preventDefault()
    try {
      fetchFilteredProducts({ brand: selectedModels })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 h-[100vh]">
        <div className="col-span-2 border-r px-3">
          <form onSubmit={submit}>
            <Accordion type="multiple" className="w-full">
              {/* Manufacturer Section */}
              <AccordionItem value="item-1">
                <AccordionTrigger>Производитель</AccordionTrigger>
                <AccordionContent>
                  <Input placeholder="Найти производителя" />
                  <div className="flex flex-col space-y-2 mt-4">
                    {models.map((model, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Checkbox
                          id={model}
                          checked={selectedModels.includes(model)}  // Tanlangan modellarga asoslangan holda tekshiruv
                          onCheckedChange={() => handleModelChange(model)}  // Tanlash va bekor qilish uchun onChange
                        />
                        <label htmlFor={model}>
                          {model}
                        </label>
                      </div>
                    ))}
                    <p
                      className="cursor-pointer text-sm text-primary"
                      onClick={showOtherModels}
                    >
                      {models.length === 5 ? "Показать еще" : "Скрыть"}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Price Range Section */}
              <AccordionItem value="item-2">
                <AccordionTrigger>Цена</AccordionTrigger>
                <AccordionContent className="mt-2">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <label
                        className="absolute text-sm text-slate-400 bg-white top-[-16px] left-2 z-50 p-1"
                      >
                        от
                      </label>
                      <Input
                        onChange={handleMinPriceChange}
                        value={minPrice}
                        type="number"
                        min={0}
                      />
                    </div>
                    <div className="relative">
                      <label
                        className="absolute text-sm text-slate-400 bg-white top-[-16px] left-2 z-50 p-1"
                      >
                        до
                      </label>
                      <Input
                        onChange={handleMaxPriceChange}
                        value={maxPrice}
                        type="number"
                        min={0}
                        max={100}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Nouislider
                      onSlide={onUpdateRange}
                      range={{ min: 0, max: 100 }}
                      start={[minPrice, maxPrice]}
                      connect
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Animation Section */}
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button type="submit">Click</Button>
          </form>
        </div>
        <div className="col-span-8">
          {JSON.stringify(selectedModels)}
          <div className="grid grid-cols-4 gap-3">
            {products.map((item) => (
              <ProductCard data={item} />
            ))}
          </div>
        </div>
        <div className="col-span-2 border-l">3</div>
      </div>
    </>
  );
};

export default Category;
