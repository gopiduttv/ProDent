import useWindowSize from '~/hooks/useWindowSize';
import H3 from '../typography/H3'
import RichAvatar from './RichAvatar'

const TestimonialCard = (props) => {
  const { width: windowWidth } = useWindowSize();
  return (
    <div className="rounded-3xl bg-[#f9f6fe] p-10 flex flex-col gap-4 w-[380px] md:w-3/4  ">
      <div className="flex items-center justify-between">
        <H3 className="text-lg font-semibold text-primary">{props.title}</H3>
      </div>
      <div>
        <p className="text-lg text-gray-600 text-ellipsis line-clamp-4">
          {props.feedback}
        </p>
      </div>
      <div className="flex flex-row justify-between items-end">
        <RichAvatar user={props.user} tenant={props.tenant} />
        <div>
          <p style={{ fontSize: windowWidth < 750 ? 11 : undefined }} className=" text-gray-900">{props.infoString}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
