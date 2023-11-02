import image from "$assets/temp/category/book.svg";
import { Image } from "$ui";
import { HTMLAttributes } from "react";
interface CategoryItemProps extends HTMLAttributes<HTMLDivElement> {}
//  
export const CategoryItem = ({ ...rest }: CategoryItemProps) => {
    return (
        <div
            className=" flex-col into-center aspect-square group cursor-pointer "
            {...rest}
        >
            <span className="rounded-full bg-gray-300/50 w-28 h-28 into-center ">
                <Image
                    src={image}
                    alt={""}
                    className="w-full h-full p-4 group-hover:scale-105 transition-all"
                />
            </span>
            <h2 className="font-bold    text-xl text-slate-900 mt-4 mb-2 font-serif">
                Category Name
            </h2>
            <p className="font-medium text-base text-slate-600">3 Product</p>
        </div>
    );
};
