import prop from "./children";

type PercentageData = prop & {
  tip: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
};

function Percentage({
  tip,
  onChange,
  children,
}: PercentageData): React.JSX.Element {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onChange(Number(e.target.value))}>
        <option value={0}>Dissatisfied</option>
        <option value={5}>It was Okay</option>
        <option value={10}>It was Nice</option>
        <option value={20}>Amazing</option>
      </select>
    </div>
  );
}
export default Percentage;
