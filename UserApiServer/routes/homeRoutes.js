const { crateUser, deleteUser, getUser, putUser } = require("../controllers/userContrller");
const express = require("express")
const router = express.Router();
router.route("/").post(crateUser).get(getUser);
router.route("/:id").put(putUser).delete(deleteUser);