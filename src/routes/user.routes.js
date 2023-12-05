import {Router} from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controller/user.controller.js';

const router = Router();

router.get("/users/:username", getUser);
router.post("/users", createUser);
router.put("/user/:username", updateUser);
router.delete("/users/:username", deleteUser);

export default router;