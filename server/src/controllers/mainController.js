import mainService from "../services/mainService.js";

// import {
//   mouse,
//   left,
//   right,
//   up,
//   down,
//   screen,
//   Button,
//   keyboard,
//   Key,
//   clipboard,
// } from "@nut-tree-fork/nut-js";

export const getData = async (req, res) => {
  try {
    console.log("getData");
    const data = mainService.getData();

    return res.status(200).json({
      success: true,
      data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
    });
  }
};

// export const moveMouse = async (req, res) => {
//   let position = await mouse.getPosition();
//   let X = 20;
//   let Y = 1060;
//   let deltX = position.x - X;
//   let deltY = position.y - Y;
//   await mouse.move(left(deltX));
//   await mouse.move(up(deltY));
//   await mouse.click(Button.LEFT);
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   position = await mouse.getPosition();
//   X = 20;
//   Y = 1015;
//   deltX = position.x - X;
//   deltY = position.y - Y;
//   await mouse.move(left(deltX));
//   await mouse.move(up(deltY));
//   await mouse.click(Button.LEFT);
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   position = await mouse.getPosition();
//   X = 20;
//   Y = 935;
//   deltX = position.x - X;
//   deltY = position.y - Y;
//   await mouse.move(left(deltX));
//   await mouse.move(up(deltY));

//   return res.status(200).json({
//     success: true,
//   });
// };
