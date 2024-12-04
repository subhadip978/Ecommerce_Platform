
import express from "express";
import { deleteUser, getAllUsers, getUser, signUp ,signin} from "../controllers/user.js"; // Correct import path




const router = express.Router();


router.post("/new",signUp);
router.post("/signin",signin);
router.get("/all",getAllUsers);

router.get("/:id",getUser)
router.delete("/:id",deleteUser)


export default router;
