import H3 from '../typography/H3'
import RichAvatar from './RichAvatar'
import Paragraph from '../typography/Paragraph'

const TestimonialCard = ({ props }) => {
  // const { width: windowWidth } = useWindowSize();
  return (
    <div className="rounded-3xl bg-[#f9f6fe] p-8 md:p-10 flex flex-col gap-4 w-[380px] md:w-3/4  ">
      <div>
        <p className="!text-gray-400 !text-base">
          {`${props.numberOflocation} Locations, ${props.location}`}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <H3 className="text-2xl font-semibold text-[#111827]">
          {props?.testimonialheading}
        </H3>
      </div>
      <div>
        <Paragraph className="text-[16px] text-gray-600 text-ellipsis md:line-clamp-4">
          {props.testimonialDescription}
        </Paragraph>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
        <RichAvatar
          AuthorImage={props?.AuthorImage}
          user={props.authorname}
          tenant={props.authordesignation}
        />
      </div>
    </div>
  )
}

export default TestimonialCard
