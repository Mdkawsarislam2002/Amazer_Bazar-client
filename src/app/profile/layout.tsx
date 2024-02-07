import { ProfileAndDashboardSidebar } from "$components/sidebar/ProfileAndDashboardSidebar"
import { Heart, Settings, ShoppingCart, User } from "lucide-react"
import { FC } from "react"

const profileMenu = [
  {
    title: "Profile",
    url: "/profile",
    icon: <User className="size-4 sm:size-6 " />,
  },
  {
    title: "orders",
    url: "/profile/checkout",
    icon: <ShoppingCart className="size-4 sm:size-6 " />,
  },
  {
    title: "wishlist",
    url: "/profile/wishlist",
    icon: <Heart className="size-4 sm:size-6 " />,
  },
  {
    title: "settings",
    url: "/profile/settings",
    icon: <Settings className="size-4 sm:size-6 " />,
  },
]

type indexProps = {
  children: React.ReactNode
}

const ProfileLayout: FC<indexProps> = ({ children }: indexProps) => {
  return (
    <section className=" flex h-full w-full      ">
      <ProfileAndDashboardSidebar menuItem={profileMenu} containerStyle="bg-gray-400 " />
      {children}
    </section>
  )
}

export default ProfileLayout
