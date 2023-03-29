import { Router} from "express";
import { signin, signup, get, detail, destory } from "../controllers/user.controller";
import { ValidationRequest } from "../../../middleware/validation-request";
import { currentUser } from "../../../middleware/current-user";
import { requireAuth } from "../../../middleware/require-auth";
import { AuthRequest } from "../request/auth";

const router = Router();

router.post('/', AuthRequest.signup(), ValidationRequest, signup);
router.post('/login', AuthRequest.signin(), ValidationRequest, signin);
router.get('/', currentUser, requireAuth, get)
router.get('/:id', currentUser, requireAuth, detail)
router.delete('/:id', currentUser, requireAuth, destory)


export {
    router as userRouter
}