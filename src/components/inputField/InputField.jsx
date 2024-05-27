import { Search } from 'lucide-react';


const InputField = () => {
  return (
    <div className="px-1 flex items-center border-2 border-blue-900 ">
      <input type="text" placeholder="Search..." className="p-1 outline-none" />
      <span>
        <Search />
      </span>
    </div>
  );
};

export default InputField;
