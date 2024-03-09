import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { MovingButton } from "./ui/movingBorderButton";
import { ContactForm } from "./ContactForm";
import { MdOutlineClose } from "react-icons/md";

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
        <div>
          <ContactForm />
          <DrawerFooter>
            <DrawerClose asChild>
              <div className="flex xs:justify-start justify-center">
                <MovingButton
                  borderRadius="0.5rem"
                  className="bg-bodyColor px-1 text-white border-slate-600 mt-0"
                >
                  <MdOutlineClose className="text-3xl text-textGreen cursor-pointer hover:text-red-500" />
                </MovingButton>
              </div>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
