import PropTypes from 'prop-types'; // Import PropTypes for props validation
import { Search } from 'lucide-react';

const InputField = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  onSearch,
}) => {
  return (
    <div className="w-full px-1 flex items-center border-2 border-blue-900">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-1 outline-none"
        value={value}
        onChange={onChange}
      />
      <span className="transition-all duration-300 cursor-pointer hover:text-blue-500">
        <Search onClick={onSearch} />
      </span>
    </div>
  );
};

// Props validation using PropTypes
InputField.propTypes = {
  type: PropTypes.string, // Type of the input field
  placeholder: PropTypes.string, // Placeholder text for the input field
  value: PropTypes.string.isRequired, // Value of the input field (required)
  onChange: PropTypes.func.isRequired, // Function to handle onChange event (required)
  onSearch: PropTypes.func.isRequired, // Function to handle search event (required)
};

export default InputField;
