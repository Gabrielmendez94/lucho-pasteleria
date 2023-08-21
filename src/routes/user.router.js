import { Router } from "express";
import { getUserById, getUsers, saveUser } from "../controllers/user.controller.js";

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', saveUser);

export default router;