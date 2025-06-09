
const FeatureItem = ({item}) => {
  return (
    <div className="flex gap-4 mb-2  items-center">
        <img src={item.icon} alt="" />
        <div className="flex flex-col">
            <p className="font-semibold text-[20px] text-gray-700">{item.title}</p>
            <p className="text-gray-400 text-[14px] -mt-0.5">{item.description}</p>
        </div>
    </div>
  )
}

export default FeatureItem