import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SignupForm } from "./SignUpForm";
import { MovingButton } from "./ui/movingBorderButton";

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function DrawerWithForm() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <MovingButton
          borderRadius="0.5rem"
          className="bg-bodyColor px-4 text-white border-slate-600"
          type="submit"
        >
          Open form - Contact me &rarr;
        </MovingButton>
      </DrawerTrigger>
      <DrawerContent>
        <div className="">
          <SignupForm />
          <DrawerFooter>
            <DrawerClose asChild>
              <div className="w-52">
                <MovingButton
                  borderRadius="0.5rem"
                  className="bg-bodyColor px-4 text-white border-slate-600"
                >
                  Close
                </MovingButton>
              </div>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
