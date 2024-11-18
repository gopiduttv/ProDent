import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'

const RichAvatar = (props) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar>
        <AvatarImage src="/michealJordan.png" alt="user-avatar" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex flex-col">
        <p className="text-lg font-semibold">{props.user}</p>
        <p className="text-[#F768D1]">{props.tenant}</p>
      </div>
    </div>
  )
}

export default RichAvatar
