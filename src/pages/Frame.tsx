import { FunctionComponent } from "react";

const Frame: FunctionComponent = () => {
  return (
    <div className="relative bg-olivedrab w-full overflow-hidden flex flex-row py-[113px] px-4 box-border items-center justify-center text-left text-inherit text-base-white font-inherit">
      <div className="relative inline-block w-[584px] shrink-0">
        <ul className="m-0 pl-[43px]">
          <li className="mb-0">The calendar opens by default.</li>
          <li className="mb-0">{`Play the prototype and you should a basic understanding of how it should work. `}</li>
          <li className="mb-0">{`For the mobile, the input task field at the bottom is how you can add task.  `}</li>
        </ul>
        <p className="m-0">{` `}</p>
      </div>
    </div>
  );
};

export default Frame;
