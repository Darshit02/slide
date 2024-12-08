import AutomationList from "@/components/global/autometion-list";
import CreateAutometion from "@/components/global/create-autometion";
import { Check } from "lucide-react";
import React from "react";

type Props = {};

const AutomationPage = (props: Props) => {
  //WIP : connect real automation data
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-2">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col rounded-xl bg-background-80 gap-y-6 p-5 border-[1px] overflow-hidden border-in-active">
          <div className="">
            <h2 className="text-xl">AUTOMETION</h2>
            <p className="text-text-secondary">
              All the live automation will be shown here.
            </p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3].map((item, key) => (
              <div className="flex items-start justify-between" key={item}>
                <div className="flex flex-col">
                  <h3 className="font-medium">
                    Direct traffic towards your website
                  </h3>
                  <p className="text-text-secondary text-sm">
                    October 5th 2024
                  </p>
                </div>
                <Check />
              </div>
            ))}
          </div>
          <CreateAutometion />
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
