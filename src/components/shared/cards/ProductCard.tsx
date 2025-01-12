import { ProductTypes } from "@/types";
import { Link } from "react-router-dom";

const ProductCard = ({ data }: ProductTypes) => {
  return (
    <Link to={'/'} className="overflow-hidden">
      <div className="relative">
        <img className="rounded-t-[var(--radius)]" src={data?.image[0]} alt={data?.name} />
        {/* <Link className="translate-x-6 hover:translate-x-0 absolute transition-all text-white text-sm px-1 rounded-tl-[var(--radius)] bg-primary right-0 bottom-0 flex gap-1" to={`/category`}>
          <h3>{data?.brand}</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345.009.203-.15.363-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37 1.37-1.37 1.37-3.361T12.9 6.14 9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36 3.36 1.37"
            />
          </svg>
        </Link> */}
      </div>
      <div className="px-2">
        <h3 className="line-clamp-3">{data?.name}</h3>
        <p className="text-lg text-primary mt-1">{data?.price}</p>
      </div>
    </Link>
  )
}

export default ProductCard