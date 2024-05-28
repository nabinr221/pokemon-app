import { Search } from 'lucide-react';


const InputField = () => {
  return (
    <div className="w-full px-1 flex items-center border-2 border-blue-900 ">
      <input type="text" placeholder="Search..." className="w-full p-1 outline-none" />
      <span>
        <Search />
      </span>
    </div>
  );
};

export default InputField;
