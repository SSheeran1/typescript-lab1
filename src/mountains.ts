import { Mountain } from "./models/Mountain";

const mountains: Mountain[] = [
  {
    name: "Kilimanjaro",
    height: 19341,
  },
  {
    name: "Everest",
    height: 29029,
  },
  {
    name: "Denali",
    height: 20310,
  },
];

const findNameOfTallestMountains = (array: Mountain[]): string => {
  if (array.length > 0) {
    let currentMountain: Mountain = array[0];
    array.forEach((mountain) => {
      if (currentMountain.height < mountain.height) {
        currentMountain = mountain;
      }
    });
    return currentMountain.name;
  } else {
    return "";
  }
};
// console.log(findNameOfTallestMountains([]));
