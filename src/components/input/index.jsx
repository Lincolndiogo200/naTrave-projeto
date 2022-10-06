export const input = ({name, label, ...props}) =>(
    <div className="flex flex-col">
      <label htmlFor={name} className="text-sm font-bold text-gray-500 mb-2">{label}</label>
      <input {...props} name={name} id={name} />
  </div>   
)