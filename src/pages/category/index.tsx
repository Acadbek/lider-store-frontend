import useScrollToTop from "../../utils/useScrollToTop";

const Category = () => {
  useScrollToTop();

  return (
    <div className="grid grid-cols-12 gap-4 h-[100vh]">
      <div className="col-span-3 border-r">1</div>
      <div className="col-span-7">2</div>
      <div className="col-span-2 border-l">2</div>
    </div>
  )
}

export default Category;
