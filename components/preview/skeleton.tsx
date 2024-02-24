import { Skeleton } from "../ui";

const SkeletonPreview = () => {
  return (
    <div className="flex w-3/4 flex-wrap gap-1">
      <Skeleton className="h-8 w-full rounded-1" />
      <Skeleton className="h-8 w-full flex-1 rounded-1" />
      <Skeleton className="h-8 w-full flex-[2] rounded-1" />
    </div>
  );
};

export default SkeletonPreview;
