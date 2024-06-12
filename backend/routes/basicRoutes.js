import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({ message: "Root Page" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
