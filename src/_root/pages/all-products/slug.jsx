import React from "react";
import { ChevronRight, Plus } from "lucide-react"
import ImageViewer from 'react-simple-image-viewer';
import img from '@/assets/images/webp/content1.webp'
import img2 from '@/assets/images/webp/content2.webp'
import Card from "@/components/shared/Card";
import { Helmet } from "react-helmet";

export default function ProductDetailPage() {
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImageViewer = React.useCallback((index) => {
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
    <>
      <Helmet>
        <title>Headphones x-28m | Product Details</title>
        <meta name="description" content="Buy Headphones x-28m with superior sound and immersive experience. Free shipping and easy checkout." />
        <meta name="keywords" content="headphones, wireless headphones, x-28m, buy headphones online" />
        <meta property="og:title" content="Headphones x-28m | Product Details" />
        <meta property="og:description" content="Buy Headphones x-28m with superior sound and immersive experience." />
        <meta property="og:image" content={images[3]} />
        <meta property="og:type" content="product" />
      </Helmet>

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
                    loading="lazy"
                    alt={`Thumbnail view of Headphones x-28m image ${index + 1}`}
                    className="object-cover w-[250px] h-[181.33px] rounded-[12px] cursor-pointer"
                    onClick={() => openImageViewer(index)}
                  />
                ))}
              </div>
              <div className="w-full">
                <img
                  src={images[3]}
                  loading="lazy"
                  alt="Main view of Headphones x-28m"
                  className="w-full h-full object-cover rounded-[12px] cursor-pointer"
                  onClick={() => openImageViewer(3)}
                />
              </div>
            </div>

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
                    <h2 className="font-medium">Warranty</h2>
                  </div>
                  <Plus className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))"><g color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))" weight="regular"><path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z"></path></g></svg>
                    <h2 className="font-medium">Shipping & Delivery</h2>
                  </div>
                  <Plus className="h-4 w-4 text-gray-400" />
                </div>
              </div>

              <div className="border-t border-gray-200 py-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))"><g color="var(--token-4cfb3a28-a190-4230-b1db-5025cd040ee9, rgb(74, 74, 74))" weight="regular"><path d="M201.89,54.66A103.43,103.43,0,0,0,128.79,24H128A104,104,0,0,0,24,128v56a24,24,0,0,0,24,24H64a24,24,0,0,0,24-24V144a24,24,0,0,0-24-24H40.36A88.12,88.12,0,0,1,190.54,65.93,87.39,87.39,0,0,1,215.65,120H192a24,24,0,0,0-24,24v40a24,24,0,0,0,24,24h24a24,24,0,0,1-24,24H136a8,8,0,0,0,0,16h56a40,40,0,0,0,40-40V128A103.41,103.41,0,0,0,201.89,54.66ZM64,136a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V136Zm128,56a8,8,0,0,1-8-8V144a8,8,0,0,1,8-8h24v56Z"></path></g></svg>
                    <h2 className="font-medium">Support</h2>
                  </div>
                  <Plus className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid bg-secondary rounded-[12px] grid-cols-1 md:grid-cols-3 gap-4 py-10 mt-10">
            <div className="flex items-center gap-4 pl-24">
              <div className="flex-shrink-0 bg-white h-16 w-16 rounded-[12px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.688 19.116q-1.092 0-1.851-.763q-.76-.763-.76-1.853H2.5q-.343 0-.575-.232t-.233-.576V6.616q0-.691.463-1.153T3.308 5h11.615q.667 0 1.141.475t.475 1.14v2h1.5q.383 0 .726.172q.344.172.566.475l2.815 3.79q.081.101.121.222t.04.263v2.155q0 .344-.231.576t-.576.232h-.808q0 1.09-.764 1.853t-1.855.762t-1.852-.762t-.76-1.853H8.309q0 1.096-.764 1.856t-1.856.76m.004-1q.675 0 1.145-.47t.47-1.146t-.47-1.145t-1.145-.47t-1.145.47t-.47 1.145t.47 1.145t1.145.47m-3-2.615h.647q.213-.662.869-1.138t1.484-.478q.79 0 1.466.468q.675.467.888 1.148h7.493V6.616q0-.27-.174-.443T14.923 6H3.308q-.231 0-.423.192q-.193.193-.193.424zm15.385 2.616q.675 0 1.145-.47q.47-.471.47-1.146t-.47-1.145t-1.145-.47t-1.145.47t-.47 1.145t.47 1.145t1.145.47m-1.54-4.615h4.712L18.5 9.866q-.096-.116-.221-.183T18 9.616h-1.461zm-7.422-2.75" /></svg>
              </div>
              <div>
                <h3 className="text-xl">Free Shipping</h3>
                <p className="text-sm text-gray-500">$50+ orders ship free</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-24">
              <div className="flex-shrink-0 bg-white h-16 w-16 rounded-[12px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 13a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25zM4.75 5A1.75 1.75 0 0 0 3 6.75V8h14V6.75A1.75 1.75 0 0 0 15.25 5zM17 9H3v4.25c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 13.25z" /></svg>
              </div>
              <div>
                <h3 className="text-xl">Secure Payments</h3>
                <p className="text-sm text-gray-500">Trusted payment options</p>
              </div>
            </div>

            <div className="flex items-center gap-4 pl-24">
              <div className="flex-shrink-0 bg-white h-16 w-16 rounded-[12px] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m112 352l-64-64l64-64" /><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M64 288h294c58.76 0 106-49.33 106-108v-20" /></svg>
              </div>
              <div>
                <h3 className="text-xl">45-Day Free Return</h3>
                <p className="text-sm text-gray-500">Easy, no-fuss returns</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="my-10">
            <div className="rounded-lg overflow-hidden">
              <img
                src={img}
                loading="lazy"
                alt="Woman wearing headphones outdoors"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
            <div>
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={img2}
                  loading="lazy"
                  alt="Person with headphones"
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
                  src={img2}
                  loading="lazy"
                  alt="Person with headphones"
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
                  src={img2}
                  loading="lazy"
                  alt="Headphones detail"
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
          <div className="my-20">
            <div className="flex justify-between items-center">
              <h2 className="text-4xl font-medium text-gray-500"><span className="text-gray-900">What customers</span> <br /> are saying</h2>
              <p className="text-gray-600 text-lg leading-6">
                Experience the convenience and satisfaction shared <br /> by our thriving community of shoppers who trust <br /> our ecommerce store for their every purchase.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="space-y-4 bg-secondary p-6 rounded-lg">
                <p className="text-gray-600 italic">
                  "Couldn't be happier with my purchase from this shop. The headphones I received are exactly as
                  described. The level of sound quality and comfort is exceptional."
                </p>
                <p className="font-medium">Alex R.</p>
              </div>

              <div className="space-y-4 bg-secondary p-6 rounded-lg">
                <p className="text-gray-600 italic">
                  "I was skeptical about buying headphones online, but I'm so glad I did. These headphones far exceeded my
                  expectations. The battery life is amazing, and the sound quality is amazing."
                </p>
                <p className="font-medium">Emily J.</p>
              </div>

              <div className="space-y-4 bg-secondary p-6 rounded-lg">
                <p className="text-gray-600 italic">
                  "I've been searching for the perfect pair of headphones for ages, and I finally found them! The sound is
                  crystal clear, the bass is incredible, but they're also comfortable enough to wear all day and couldn't
                  be happier with my purchase."
                </p>
                <p className="font-medium">Michael S.</p>
              </div>
            </div>
          </div>
          <hr className="my-10 border-gray-300" />

          {/* Related Products */}
          <div>
            <h2 className="text-4xl font-medium mb-8">Related Products</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <Card />
              <Card />
              <Card />
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
    </>
  )
}
