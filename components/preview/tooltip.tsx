import { Button, Card, Tooltip } from "../ui";

const TooltipPreview = () => {
  return (
    <Tooltip
      content={<Card className="px-3 py-2 text-xs">Hovered text.</Card>}
      direction="top"
    >
      <Button variant="secondary" size="md">
        Hover
      </Button>
    </Tooltip>
  );
};

export default TooltipPreview;
