import { Request, Response } from "express";

const homePage = (req: Request, res: Response) => {
  return res.status(200).json({ message: "Welcome to My Favorite Media!" });
};

export default { homePage };
