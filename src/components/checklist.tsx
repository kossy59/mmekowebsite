const Checklist = () => {
  const rules = [
    "Make sure all information is correct.",
    "Ensure your document is valid and not expired.",
    "Photo must be clear and in color.",
    "ID must be fully in frame.",
  ];

  return (
    <div className="mb-6 p-4 rounded-lg bg-[#101435] border border-[#1f233e] shadow-md">
      <h4 className="font-bold text-orange-500 text-lg mb-3">Checklist</h4>
      <ul className="space-y-2">
        {rules.map((rule, index) => (
          <li
            key={index}
            className="text-sm text-gray-300 hover:text-orange-400 transition duration-200"
          >
            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2 mt-1 align-middle"></span>
            {rule}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
