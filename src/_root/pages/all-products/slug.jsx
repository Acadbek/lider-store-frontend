import { ChevronRight, Plus } from "lucide-react"
import { useCallback, useEffect, useState } from "react";
import ImageViewer from 'react-simple-image-viewer';

export default function ProductDetailPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images = [
    'https://framerusercontent.com/images/9BjIH4JGc22obR8CZEcdsSjMEHo.png',
    'https://framerusercontent.com/images/jdqv859e9CxxrI9yBY9HdTkkh5g.png',
    'https://framerusercontent.com/images/8a0OApHbGU7WGut7Y6CjmuV68.png',
    'https://framerusercontent.com/images/kUOQ8u8fRfnwNx6SFLSesC5Von0.png',
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <div className="py-4 flex items-center text-sm text-gray-500">
        <span>Home</span>
        <ChevronRight className="h-3 w-3 mx-1" />
        <span>Headphones x-28m</span>
      </div>

      {/* Product Section */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
          <div className="col-span-5 flex gap-4 h-[576px]">
            <div className="flex flex-col h-[576px] gap-4">
              {images.slice(0, 3).map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Preview ${index}`}
                  className="object-cover w-[250px] h-[181.33px] rounded-[12px] cursor-pointer"
                  onClick={() => openImageViewer(index)}
                />
              ))}
            </div>
            <div className="w-full">
              <img
                src={images[3]}
                alt="Headphones x-28m"
                className="w-full h-full object-cover rounded-[12px] cursor-pointer"
                onClick={() => openImageViewer(3)}
              />
            </div>
          </div>
          {/* Product Images */}
          {/* <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center">
              <img
                src="https://framerusercontent.com/images/kUOQ8u8fRfnwNx6SFLSesC5Von0.png"
                alt="Headphones x-28m"
                width={400}
                height={400}
                className="object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/9BjIH4JGc22obR8CZEcdsSjMEHo.png"
                  alt="Headphones side view"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/jdqv859e9CxxrI9yBY9HdTkkh5g.png"
                  alt="Headphones front view"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div className="bg-gray-50 rounded-lg p-2 flex items-center justify-center">
                <img
                  src="https://framerusercontent.com/images/8a0OApHbGU7WGut7Y6CjmuV68.png"
                  alt="Headphones detail view"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div> */}

          {/* Product Details */}
          <div className="col-span-3">
            <h1 className="text-4xl mb-2">Headphones x-28m</h1>
            <p className="text-gray-600 mb-5">
              Immerse yourself in the music or powerful through your workout. These headphones are designed to keep up
              with you without distraction.
            </p>

            <div className="mb-6">
              <p className="text-3xl">USD 149.99</p>
            </div>

            <button className="w-full bg-black text-white py-3 px-6 rounded-full mb-3">Buy now</button>

            <div className="text-xs text-gray-500 text-center mb-6">
              Secure checkout below for easy transactions
              <br />
              Buy in weekly or monthly installments if that works with your finances
            </div>

            {/* Accordion sections */}
            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))"><g color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))" weight="regular"><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path></g></svg>
                  <span className="font-medium">Warranty</span>
                </div>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))"><g color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))" weight="regular"><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path></g></svg>
                  <span className="font-medium">Shipping & Delivery</span>
                </div>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="border-t border-gray-200 py-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))"><g color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))" weight="regular"><path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path></g></svg>
                  <span className="font-medium">Support</span>
                </div>
                <Plus className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-10 border-t border-gray-200 mt-10">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src="/placeholder.svg?height=24&width=24" alt="Shipping icon" width={24} height={24} />
            </div>
            <div>
              <h3 className="font-medium">Free Shipping</h3>
              <p className="text-sm text-gray-500">$50+ orders ship free</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src="/placeholder.svg?height=24&width=24" alt="Payment icon" width={24} height={24} />
            </div>
            <div>
              <h3 className="font-medium">Secure Payments</h3>
              <p className="text-sm text-gray-500">Trusted payment options</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex-shrink-0">
              <img src="/placeholder.svg?height=24&width=24" alt="Return icon" width={24} height={24} />
            </div>
            <div>
              <h3 className="font-medium">45-Day Free Return</h3>
              <p className="text-sm text-gray-500">Easy, no-fuss returns</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="my-10">
          <div className="rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=500&width=1200"
              alt="Woman wearing headphones outdoors"
              width={1200}
              height={500}
              className="w-full object-cover h-[300px] md:h-[400px]"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Person with headphones"
                width={300}
                height={300}
                className="w-full object-cover aspect-square"
              />
            </div>
            <h3 className="font-medium text-lg mb-2">Sound Superiority, Anywhere</h3>
            <p className="text-gray-600 text-sm">
              Experience top-tier audio quality. Whether you're at home, commuting, or at the gym, enjoy exceptional
              sound across all genres.
            </p>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Person with headphones"
                width={300}
                height={300}
                className="w-full object-cover aspect-square"
              />
            </div>
            <h3 className="font-medium text-lg mb-2">Power on the Move</h3>
            <p className="text-gray-600 text-sm">
              Stay charged with extended battery life, giving you a full day of listening without worrying about
              recharging.
            </p>
          </div>

          <div>
            <div className="rounded-lg overflow-hidden mb-4">
              <img
                src="/placeholder.svg?height=300&width=300"
                alt="Headphones detail"
                width={300}
                height={300}
                className="w-full object-cover aspect-square"
              />
            </div>
            <h3 className="font-medium text-lg mb-2">Tailored Comfort</h3>
            <p className="text-gray-600 text-sm">
              With a form-hugging style, our headphones provide the perfect fit with cushioning specifically designed
              for comfort during extended wear.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="my-16">
          <h2 className="text-2xl font-medium mb-8">What customers are saying</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600 italic">
                "Couldn't be happier with my purchase from this shop. The headphones I received are exactly as
                described. The level of sound quality and comfort is exceptional."
              </p>
              <p className="font-medium">Alex R.</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 italic">
                "I was skeptical about buying headphones online, but I'm so glad I did. These headphones far exceeded my
                expectations. The battery life is amazing, and the sound quality is amazing."
              </p>
              <p className="font-medium">Emily J.</p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 italic">
                "I've been searching for the perfect pair of headphones for ages, and I finally found them! The sound is
                crystal clear, the bass is incredible, but they're also comfortable enough to wear all day and couldn't
                be happier with my purchase."
              </p>
              <p className="font-medium">Michael S.</p>
            </div>
          </div>

          <div className="mt-8 text-sm text-gray-500">
            <p>
              Experience the convenience and satisfaction enjoyed by a growing community of shoppers who trust our
              exceptional audio for their every purchase.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="my-16">
          <h2 className="text-2xl font-medium mb-8">Related Products</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-3">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Headphones x-27h"
                  width={200}
                  height={200}
                  className="object-contain h-40"
                />
              </div>
              <h3 className="font-medium">Headphones x-27h</h3>
              <p className="text-sm text-gray-500">USD 99.99</p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-3">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Headphones x-30c"
                  width={200}
                  height={200}
                  className="object-contain h-40"
                />
              </div>
              <h3 className="font-medium">Headphones x-30c</h3>
              <p className="text-sm text-gray-500">USD 129.99</p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-3">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Headphones x-22c"
                  width={200}
                  height={200}
                  className="object-contain h-40"
                />
              </div>
              <h3 className="font-medium">Headphones x-22c</h3>
              <p className="text-sm text-gray-500">USD 149.99</p>
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center mb-3">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt="Headphones x-35e"
                  width={200}
                  height={200}
                  className="object-contain h-40"
                />
              </div>
              <h3 className="font-medium">Headphones x-35e</h3>
              <p className="text-sm text-gray-500">USD 169.99</p>
            </div>
          </div>
        </div>
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  )
}
