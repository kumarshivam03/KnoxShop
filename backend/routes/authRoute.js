import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//Register
router.post("/register", registerController);
//Login
router.post("/login", loginController);
//forgot-password
router.post("/forgot-password", forgotPasswordController);
//test
router.get("/test", requireSignIn, isAdmin, testController);

// protected User-route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
// protected Admin-route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

router.put("/profile", requireSignIn, updateProfileController);

//order
router.get("/orders", requireSignIn, getOrdersController);

//all order
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
