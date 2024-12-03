import H3 from '../typography/H3'
import RichAvatar from './RichAvatar'
import Paragraph from '../typography/Paragraph'
import ImageLoader from './imageLoader/imageLoader'

const TestimonialCard = ({ props }) => {
  return (
    <div
      className="rounded-3xl p-8 md:p-10 bg-gradient-to-tr from-[#8639f8] via-[#8f3cf4] to-[#f768d1]"
    >
      <div className="flex flex-col items-center md:flex-row gap-8">
        <ImageLoader
          radius={12}
          className="!w-[250px] !h-[250px] !rounded-2xl"
          image={props.AuthorImage}
        />
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <H3 className="text-2xl font-semibold text-white">
                {props?.testimonialheading}
              </H3>
            </div>
            <div>
              <Paragraph className="text-[16px] text-white text-ellipsis md:line-clamp-4">
                {props.testimonialDescription}
              </Paragraph>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:justify-between md:items-end">
            <div className="flex flex-col">
              <p className="text-base text-white md:text-lg font-medium ">
                {props.authorname}
              </p>
              <p className="text-white font-normal text-md">
                {props.authordesignation}
              </p>
              <p className="text-white/70 font-normal !text-md">
                {`${props.numberOflocation} Locations, ${props.location}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
