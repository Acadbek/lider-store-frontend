import Navbar from "@/components/shared/Navbar";
import useScrollToTop from "@/utils/useScrollToTop";

const Category = () => {
  useScrollToTop();

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-12 gap-4 h-[100vh]">
        <div className="col-span-2 border-r">1</div>
        <div className="col-span-8">2</div>
        <div className="col-span-2 border-l">3</div>
      </div>
    </>
  )
}

export default Category;
