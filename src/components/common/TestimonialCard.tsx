const TestimonialCard = ({ title, role, location, feedback }) => {
    return (
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h6 className="text-lg font-semibold text-primary">{title}</h6>
            <p className="text-sm text-gray-600">{role}, {location}</p>
          </div>
        </div>
        <p className="text-base text-gray-800">{feedback}</p>
      </div>
    );
  };
  
  export default TestimonialCard;
  