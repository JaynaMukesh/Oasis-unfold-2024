import { AiOutlineLoading } from "react-icons/ai";
import { cn } from "../functions/fn";
export default function Preloader(
  { className, loaderClassName, text, textClassName },
  props
) {
  return (
    <div
      className={cn(
        "flex text-white items-center justify-center w-full h-[80dvh] flex-col",
        className
      )}
      {...props}
    >
      <AiOutlineLoading
        className={cn("text-4xl animate-spin text-[#fd6219]", loaderClassName)}
      />
      {text && <p className={cn("text-sm mt-4", textClassName)}>{text}</p>}
    </div>
  );
}
