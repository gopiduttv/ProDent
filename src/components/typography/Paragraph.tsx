const Paragraph = (props) => {
  return <p className="text-white/80 text-lg mb-5 font-medium md:max-w-3xl mt-4">
    {props.children}
  </p>
}

export default Paragraph
