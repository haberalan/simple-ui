"use client";

import { Avatar, Button, Card, Popover } from "../ui";
import img from "@/assets/images/avatar.png";

const PopoverPreview = () => {
  return (
    <div className="flex flex-col gap-1">
      <Popover
        triggerComponent={
          <Button variant="secondary" size="md">
            Trigger
          </Button>
        }
      >
        <Card>
          <div className="flex w-full items-center gap-2">
            <Avatar src={img} alt="AH" size={48} />
            <div>
              <p className="text-sm">Username</p>
              <p className="text-xs text-gray-600">username@email.com</p>
            </div>
          </div>
        </Card>
      </Popover>
    </div>
  );
};

export default PopoverPreview;
