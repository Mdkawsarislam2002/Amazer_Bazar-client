import { cn } from "$lib/utils"
import { ChevronLeft } from "lucide-react"
import { DetailedHTMLProps, FC } from "react"
import { useNavigate } from "react-router-dom"

interface indexProps extends DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string
  iconClassName?: string
  color?: string
}
export const Back: FC<indexProps> = ({ className = "", iconClassName = "", color = "white", ...rest }) => {
  const navigate = useNavigate()

  return (
    <button
      {...rest}
      onClick={() => navigate(-1)}
      className={cn("absolute left-3 top-2 inline-block rounded-full bg-blue-800 md:p-2 2xl:p-4", className)}
    >
      <ChevronLeft color={color} className={cn(iconClassName)} />
    </button>
  )
}
