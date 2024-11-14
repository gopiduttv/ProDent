import { cn } from "~/lib/utils"

const Paragraph = (props) => {
  return <p className={cn("text-white/80 text-lg mb-5 font-medium md:max-w-3xl mt-4", props.className)}>
    {props.children}
  </p>
}

export default Paragraph
