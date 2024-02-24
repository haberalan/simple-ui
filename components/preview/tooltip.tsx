import { Button, Card, Tooltip } from "../ui";

const TooltipPreview = () => {
  return (
    <Tooltip content={<Card>Hovered text.</Card>} direction="top">
      <Button variant="secondary" size="md">
        Hover
      </Button>
    </Tooltip>
  );
};

export default TooltipPreview;
