let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

let capacitacionSchema = require("../models/Capacitaciones");

// CREAR Capacitacion
router.route("/create-capacitacion").post((req, res, next) => {
  capacitacionSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

// LEER Capacitacion
router.route("/").get((req, res, next) => {
  capacitacionSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Obtener un Capacitacion
router.route("/edit-capacitacion/:id").get((req, res, next) => {
  capacitacionSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

// Actualizar Capacitacion
router.route("/update-capacitacion/:id").put((req, res, next) => {
  capacitacionSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log("capacitacion updated successfully !");
      }
    }
  );
});

// BORRAR Capacitacion
router.route("/delete-capacitacion/:id").delete((req, res, next) => {
  capacitacionSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
});

module.exports = router;
