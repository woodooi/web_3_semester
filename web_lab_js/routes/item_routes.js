const itemController = require("../controller/item_controller");
const router = require("express").Router();

// router.route("/api/planes").get(itemController.findAll).post(itemController.create)

// router.route("/api/planes/:id").get(itemController.findOne).put(itemController.update).delete(itemController.delete)

// Create a new item

function print() {
    console.log("im here");
}

router.post("/planes", itemController.create);

// Retrieve all itemss
router.get("/planes", itemController.findAll);

// Retrieve a single item with id
// router.get("/planes/:id", itemController.findOne);

// Update an item with id 
router.put("/planes/:id", itemController.findOne);

// Delete all items
router.delete("/planes", itemController.deleteAll);

// Delete an item with id
router.delete("/planes/:id", itemController.delete);

module.exports = router;
