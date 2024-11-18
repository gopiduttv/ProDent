import H3 from '../typography/H3'
import RichAvatar from './RichAvatar'

const TestimonialCard = ({ props }) => {
  return (
    <div className="rounded-3xl bg-[#f9f6fe] p-10 flex flex-col gap-4 w-[380px] md:w-3/4  ">
      <div className="flex items-center justify-between">
        <H3 className="text-lg font-semibold text-primary">
          {props?.testimonialheading}
        </H3>
      </div>
      <div>
        <p className="text-lg text-gray-600 text-ellipsis line-clamp-4">
          {props.testimonialDescription}
        </p>
      </div>
      <div className="flex flex-row justify-between items-end">
        <RichAvatar
          AuthorImage={props?.AuthorImage}
          user={props.authorname}
          tenant={props.authordesignation}
        />
        <div>
          <p className="text-md text-gray-900">
            {`${props.numberOflocation} Locations, ${props.location}`}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
