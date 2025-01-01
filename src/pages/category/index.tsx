import Navbar from "@/components/shared/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import useScrollToTop from "@/utils/useScrollToTop";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import React from "react";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

const Category = () => {
  const [minPrice, setMinPrice] = React.useState('0')
  const [maxPrice, setMaxPrice] = React.useState('100');

  useScrollToTop();
  const modelsInitialState = ['Artel', 'Samsung', 'Avalon', 'Shivaki', 'LG', 'Xiaomi', 'Microlab', 'Sony', '2E', 'Edifier', 'F&D', 'Premier', 'Skilltech', 'Eldifer', 'Yandex', 'Fenda', 'Ssmart', 'Sonor']

  const [models, setModels] = React.useState(modelsInitialState.slice(0, 5))

  const showOtherModels = () => {
    if (models.length === 5) return setModels(modelsInitialState)
    else return setModels(modelsInitialState.slice(0, 5))
  }

  const onUpdateRange = (e) => {
    setMinPrice(e[0])
    setMaxPrice(e[1])
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 h-[100vh]">
        <div className="col-span-2 border-r px-3">
          <Accordion type="multiple" collapsible="true" className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Производитель</AccordionTrigger>
              <AccordionContent>
                <Input placeholder="Найти производителя" />
                <div className="flex flex-col space-y-2 mt-4">
                  {models.map((model, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Checkbox id={model} />
                      <label
                        htmlFor={model}
                        className="cursor-pointer text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {model}
                      </label>
                    </div>
                  ))}
                  {/*   */}
                  <p className="cursor-pointer text-sm text-primary" onClick={showOtherModels}>
                    {models.length === 5 ? 'Показать еще' : 'Скрыть'}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Цена</AccordionTrigger>
              <AccordionContent className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <label className="absolute text-sm text-slate-400 bg-white top-[-16px] left-2 z-50 p-1">от</label>
                    <Input
                      onChange={({ target }) => setMinPrice(target.value)}
                      value={minPrice}
                      type="text"
                      min={1}
                      maxLength={10}
                    />
                  </div>
                  <div className="relative">
                    <label className="absolute text-sm text-slate-400 bg-white top-[-16px] left-2 z-50 p-1">до</label>
                    <Input
                      onChange={({ target }) => setMaxPrice(target.value)}
                      value={maxPrice}
                      type="text"
                      min={1}
                      maxLength={20}
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <Nouislider onSlide={onUpdateRange} range={{ min: 0, max: 100 }} start={[minPrice, maxPrice]} connect />
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="col-span-8">2</div>
        <div className="col-span-2 border-l">3</div>
      </div>
    </>
  )
}

export default Category;
