import { useQuery } from "@tanstack/react-query"

import avatarImg from "$assets/illustration/others/user.jpg"
import { UserSkeleton } from "$components/Skeleton"
import { $GET, useAuth } from "$hooks"
import { Image } from "$ui/Image"
import { Button } from "$ui/button"
import { Fragment } from "react"

interface UserProfileInfoResponse {
  statusCode: number
  message: string
  data: {
    name: string
    avatar: string
    city: string | null
    country: string | null
  } | null
}

export const UserProfileInfo = () => {
  const { logOut } = useAuth()

  const { data, isError, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: () =>
      $GET({
        url: `/user/info/`,
      }) as Promise<UserProfileInfoResponse>,
  })

  const loadingComponent = (
    <Fragment>
      <UserSkeleton />
    </Fragment>
  )
  const errorComponent = (
    <div>
      <p className="text-red-500">Something went wrong</p>
    </div>
  )

  console.log(data?.data)
  const mainComponents = (
    <Fragment>
      <div className="flex items-center gap-x-3">
        <Image src={avatarImg} alt="avatar" width={50} className="rounded-full" />
        <div>
          <p className="text-2xl font-bold text-gray-800">{data?.data?.name}</p>
          <p>
            {data?.data?.city} {data?.data?.country}
          </p>
        </div>
      </div>
    </Fragment>
  )

  return (
    <div>
      <div className="my-6 flex items-center justify-between">
        {isError ? errorComponent : isLoading ? loadingComponent : mainComponents}
        <Button
          onClick={() => {
            logOut("/")
          }}>
          Log Out
        </Button>
      </div>
    </div>
  )
}
