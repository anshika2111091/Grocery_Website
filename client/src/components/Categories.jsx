import { categories } from "../assets/assets";
import Card from "./Card";

const Categories = () => {
  return (
    <>
      <div className="xl:w-[80vw] w-[95vw] mx-auto my-10">
        <p class="text-2xl md:text-3xl font-medium text-gray-700 mb-5 ">
          Categories
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {" "}
          {categories.map((item, index) => (
            <>
              <Card item={item} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
