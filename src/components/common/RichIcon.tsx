const RichIcon = ({title, summary}) => {
  return (
    <li className="flex items-center bg-stone-950 p-4 rounded-lg">
      <i className="fi fi-tr-city text-2xl text-primary"></i>
      <div className="ml-5">
        <h4 className="text-lg text-stone-50">{title}</h4>
        <p className="text-md mb-0 text-primary text-stone-50">
          {summary}
        </p>
      </div>
    </li>
  )
}

export default RichIcon
