import ProductCard from "@/components/shared/cards/ProductCard";
import Navbar from "@/components/shared/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/multi-slider";
import { cn } from "@/lib/utils";
import useScrollToTop from "@/utils/useScrollToTop";
import axios from "axios";
import "nouislider/distribute/nouislider.css";
import React from "react";

const modelsInitialState = [
  "Artel", "Samsung", "Avalon", "Shivaki", "LG", "Xiaomi", "Microlab",
  "Sony", "2E", "Edifier", "F&D", "Premier", "Skilltech", "Eldifer",
  "Yandex", "Fenda", "Ssmart", "Sonor",
];

type FilterParams = Record<string, string | number | string[]>;

const Category = () => {
  const [models, setModels] = React.useState(modelsInitialState.slice(0, 5));
  const [minPrice, setMinPrice] = React.useState<number>(0);
  const [maxPrice, setMaxPrice] = React.useState<number>(100);
  const [products, setProducts] = React.useState([]);
  const [selectedModels, setSelectedModels] = React.useState<string[]>([]); // Tanlangan modellarga tegishli state

  const getProducts = async () => {
    try {
      const responsive = await axios('http://localhost:3000/products')
      setProducts(responsive.data)

    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('An unknown error occurred.')
      }
    }
  }

  React.useEffect(() => {
    // getProducts()
  }, [])

  useScrollToTop();

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

  const fetchFilteredProducts = async (filters: FilterParams) => {
    const queryString = new URLSearchParams(filters as Record<string, string>).toString();
    console.log('Query String:', queryString);

    const response = await fetch(`http://localhost:3000/products?${queryString}`);
    console.log('Response object:', response);

    const data = await response.json();
    console.log('Fetched Data:', data);

    setProducts(data);
    console.log('Products state updated:', data);
  };

  const handleModelChange = (model: string) => {
    setSelectedModels((prevSelectedModels: string[]) => {
      const updatedSelectedModels = prevSelectedModels.includes(model)
        ? prevSelectedModels.filter((item) => item !== model)
        : [...prevSelectedModels, model];

      return updatedSelectedModels;
    });
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await fetchFilteredProducts({ brand: selectedModels })
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message)
      } else {
        alert('An unknown error occurred.')
      }
    }
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 h-[100vh]">
        <div className="sidebar col-span-2 border-r dark:border-r-gray-900 px-3 !sticky top-0 h-[100vh] overflow-y-auto self-start">
          <form onSubmit={submit}>
            <Accordion type="multiple" className="w-full">
              {/* Manufacturer Section */}
              <AccordionItem value="item-1">
                <AccordionTrigger>Производитель</AccordionTrigger>
                <AccordionContent className="px-[1px]">
                  <Input className="mt-[1px]" placeholder="Найти производителя" />
                  <div className="flex flex-col space-y-2 mt-4">
                    {models.map((model, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Checkbox
                          id={model}
                          checked={selectedModels.includes(model)}  // Tanlangan modellarga asoslangan holda tekshiruv
                          onCheckedChange={() => handleModelChange(model)}  // Tanlash va bekor qilish uchun onChange
                        />
                        <label className="select-none cursor-pointer" htmlFor={model}>
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
                <AccordionContent className="mt-2 px-[1px]">
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <label
                        className="absolute text-sm text-slate-400 bg-white dark:bg-background top-[-12px] left-2 z-50"
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
                        className="absolute text-sm text-slate-400 bg-white dark:bg-background top-[-12px] left-2 z-50"
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
                    <Slider defaultValue={[minPrice, maxPrice]} className={cn('w-[100%]')} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </form>
        </div>
        <div className="col-span-8">
          <div className="grid grid-cols-4 gap-3">
            {products.map((item, idx) => (
              <ProductCard key={idx} data={item} />
            ))}
          </div>
        </div>
        <div className="col-span-2 border-l dark:border-l-gray-900">3</div>
      </div>
    </>
  );
};

export default Category;
