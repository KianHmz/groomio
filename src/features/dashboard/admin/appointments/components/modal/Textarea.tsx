interface TextareaProps {
  value?: string;
}

const Textarea = ({ value, ...props }: TextareaProps) => {
  return (
    <textarea
      {...props}
      className="text-sm px-1 py-0.5 bg-cream focus:outline-none focus:ring-1 focus:ring-tan/50 w-md"
      onChange={() => {}}
    >
      {value}
    </textarea>
  );
};

export default Textarea;
