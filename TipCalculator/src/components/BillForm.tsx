
import prop from "./children";
type Bills = prop & {
  bill: number;
  onSetBill: React.Dispatch<React.SetStateAction<number>>;
};
function BillForm({ children, bill, onSetBill }: Bills): React.JSX.Element {
  return (
    <div>
      {children}
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
export default BillForm;
