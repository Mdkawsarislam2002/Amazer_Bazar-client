import brokenImage from "@/assets/illustration/gif/Photo.gif"
import Image from "next/image"
import type { DetailedHTMLProps, FC, HTMLAttributes } from "react"

interface ProductSkeletonProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const ProductErrorSkeleton: FC<ProductSkeletonProps> = ({ ...rest }) => {
  return (
    <div
      {...rest}
      role="status"
      className="max-w-sm  rounded border border-gray-200 bg-rose-100  p-4 shadow dark:border-gray-700 md:p-6">
      <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 ">
        <Image src={brokenImage} alt="broken image" width={200} height={200} />
      </div>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-rose-300 " />
      <div className="mb-2.5 h-2 rounded-full bg-rose-300 " />
      <div className="mb-2.5 h-2 rounded-full bg-rose-300 " />
      <div className="h-2 rounded-full bg-rose-300 " />
      <div className="mt-4 flex items-center">
        <div>
          <div className="mb-2 h-2.5 w-32 rounded-full bg-rose-300 " />
          <div className="h-2 w-48 rounded-full bg-rose-300 " />
        </div>
      </div>
    </div>
  )
}
