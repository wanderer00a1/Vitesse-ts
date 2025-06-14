import { memo, type SetStateAction } from "react";

interface sounds {
  allowSound: boolean;
  setAllowSound: React.Dispatch<SetStateAction<boolean>>;
}
function ToggleSounds({ allowSound, setAllowSound }: sounds) {
  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow: boolean) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
