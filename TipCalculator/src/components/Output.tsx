type billdata = {
  bill: number;
  TotalTip: number;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};
export default function Output({
  bill,
  TotalTip,
  onClick,
}: billdata): React.JSX.Element {
  return (
    <div>
      <p>
        You Pay {bill + TotalTip} (`${bill} & ${TotalTip}`)
      </p>
      <button onClick={onClick}>Reset</button>
    </div>
  );
}
