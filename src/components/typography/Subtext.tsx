const Subtext = (props) => {
  return <div className={`text-[#F768D1] text-sm font-bold pt-8 uppercase leading-snug ${props.className}`}>
    {props.children}
  </div>
}

export default Subtext
