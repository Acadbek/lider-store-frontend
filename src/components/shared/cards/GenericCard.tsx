import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";
import { Spotlight } from "../../ui/spotlight";

type Products = {
  gridCols?: number
  products: {
    title: string
    image: string
  }[]
  title: string
}

const GenericCard = ({ gridCols = 3, products, title }: Products) => {
  return (
    <div className="border border-zinc-100 bg-white rounded-[12px] dark:border-zinc-800 dark:bg-[#18181B]">
      <div className="flex gap-2 text-sm text-black dark:text-white mb-0 pl-2">
        <h2 className="text-black dark:text-white mb-0">{title}</h2>
        <Link to='' className="text-primary hover:underline mt-2">More...</Link>
      </div>
      <div className='relative aspect-video rounded-b-[12px]'>
        <Spotlight
          className='from-primary via-blue-500 to-blue-300 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900'
          size={200}
        />
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
        }}
          className='gap-2 relative h-full w-full p-2'>
          {products.map((item, index) => (
            <>
              <TooltipProvider key={index} skipDelayDuration={500} delayDuration={50}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div key={index} className="relative">
                      <Link to={`/category/?name=${item.title}`}>
                        <div className="w-full h-full aspect-ratio overflow-hidden rounded-lg">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </Link>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <Link to={`/category/${item.title}`}>
                      <h4 className="text-sm text-zinc-100">{item.title}</h4>
                    </Link>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </>
          ))}
        </div>
      </div>
    </div>
  )
};

export default GenericCard;