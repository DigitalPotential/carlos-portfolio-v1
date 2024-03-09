import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { SignupForm } from "./SignUpForm";
import { MovingButton } from "./ui/movingBorderButton";

export function DrawerWithForm() {
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
