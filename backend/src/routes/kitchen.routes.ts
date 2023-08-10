import { Router } from "express";
import { kitchenController } from "../controllers/kitchen.controller";
import { userController } from "../controllers/user.controller";
import multer from "multer";


//multer setup
const storage = multer.memoryStorage()
const upload = multer({ storage: storage })

const routes = Router();

routes.post("/",  upload.single('file'),userController.authmiddleware, kitchenController.createKitchen)
routes.get("/:id", kitchenController.findUniqueKitchen);
routes.get("/", kitchenController.findAllKitchens);

export default routes;