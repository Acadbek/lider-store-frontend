import { Link } from "react-router-dom";
import { Spotlight } from "../ui/spotlight";
import { SVGProps } from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const GenericCard = ({ gridCols = 3 }) => {
  const sections = [
    {
      title: "Cleaning tools",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      alt: "Men's gift collection including toiletries and accessories"
    },
    {
      title: "Home storage",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeStorage_2x._SY232_CB563137408_.jpg",
      alt: "Women's gift collection including beauty products and accessories"
    },
    {
      title: "Home decor",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/HomeDecor_2x._SY232_CB563137408_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "Bedding",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/Bedding_2x._SY232_CB563137408_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    },
    {
      title: "For kids",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      alt: "Kids' gift collection including toys and camera"
    },
    {
      title: "For teens",
      image: "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2024/BAU2024Sept/CleaningTool_2x._SY232_CB563137408_.jpg",
      alt: "Teen gift collection including instant camera and accessories"
    }
  ]

  return (
    <div className='relative aspect-video h-[300px] rounded border border-zinc-100 bg-white dark:border-zinc-800 dark:bg-black'>
      <Spotlight
        className='from-primary via-blue-500 to-blue-300 blur-xl dark:from-blue-900 dark:via-blue-500 dark:to-blue-900'
        size={200}
      />
      <div style={{
        display: "grid",
        gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
      }}
        className='gap-2 relative h-full w-full rounded-xl p-2'>
        {sections.map((item, index) => (
          <>
            <TooltipProvider skipDelayDuration={500} delayDuration={50}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div key={index} className="relative">
                    <Link to={`/category/${item.title}`}>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </Link>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="top">
                  <p className="text-sm text-zinc-100">{item.title}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </>
        ))}
      </div>
    </div>

  )
};

export default GenericCard;