import Card from "@/components/shared/Card"
import { useState } from "react"
import img from "../../../assets/images/webp/img.webp"
import img2 from "../../../assets/images/webp/img2.webp"
import img3 from "../../../assets/images/webp/tv.webp"

export default function ProductListingPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", "Clothing", "Accessories", "Footwear", "Home"]

  const products = [
    {
      id: 1,
      name: "Minimalist Watch",
      price: "$129.99",
      category: "Accessories",
      image: img,
    },
    {
      id: 2,
      name: "Cotton T-Shirt",
      price: "$39.99",
      category: "Clothing",
      image: img2,
    },
    {
      id: 3,
      name: "Leather Wallet",
      price: "$59.99",
      category: "Accessories",
      image: img3,
    },
    {
      id: 4,
      name: "Running Shoes",
      price: "$89.99",
      category: "Footwear",
      image: img3,
    },
    {
      id: 5,
      name: "Ceramic Vase",
      price: "$49.99",
      category: "Home",
      image: img3,
    },
    {
      id: 6,
      name: "Denim Jacket",
      price: "$79.99",
      category: "Clothing",
      image: img3,
    },
  ]

  const filteredProducts =
    activeCategory === "All" ? products : products.filter((product) => product.category === activeCategory)

  return (
    <div className="min-h-screen mt-12">
      <div className="">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-4xl md:text-6xl mb-4">Shop</h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Check out our full collection of products tailored to your needs
          </p>
        </header>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-8 py-2 rounded-full text-md transition-colors
                ${activeCategory === category ? "bg-black dark:bg-gray-800 text-white" : "text-gray-500 border border-gray-300 dark:text-gray-400 dark:border-gray-700"}
              `}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} img={product.image} title={product.name} price={product.price} id={product.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
