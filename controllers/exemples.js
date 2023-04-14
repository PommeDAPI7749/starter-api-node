// const Exemple = require('../models/exempleModel');

// exports.registerExemple = async (req, res, next) => {
//     let exemple = new Exemple({
//         ...req.body,
//         ownerId: req.user.firebaseId
//     })
//     try {
//         await exemple.save().then(savedExemple => { exemple = savedExemple})
//         res.status(201).json({
//             error: null,
//             data: exemple
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: "INTERNAL_ERROR",
//             data: {}
//         });
//     }
// }

// exports.getExemple = async (req, res, next) => {
//     const filter = { _id: req.params.exempleId };

//     try {
//         let exemple = await Exemple.findOne(filter);
//         res.status(201).json({
//             error: null,
//             data: exemple
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: "INTERNAL_ERROR",
//             data: {}
//         });
//     }
// }

// exports.getAllExemples = async (req, res, next) => {
//     try {
//         let exemples = await Exemple.find({});
//         res.status(201).json({
//             error: null,
//             data: exemples
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: "INTERNAL_ERROR",
//             data: {}
//         });
//     }
// }

// exports.updateExemple = async (req, res, next) => {
//     const filter = { _id: req.params.exempleId };
//     const update = { ...req.body };

//     try {
//         let exempleUpdated = await Exemple.findOneAndUpdate(filter, update, {new: true});
//         res.status(201).json({
//             error: null,
//             data: exempleUpdated
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: "INTERNAL_ERROR",
//             data: {}
//         });
//     }
// }

// exports.deleteExemple = async (req, res, next) => {
//     const filter = { _id: req.params.exempleId };

//     try {
//         const exemple = Exemple.findOne(filter);
//         if (exemple.ownerId != req.user.firebaseId) {
//             return res.status(401).json({
//                 error: "NOT_OWNER_ERROR",
//                 data: {}
//             });
//         }
//         await Exemple.deleteOne(filter);
//         res.status(201).json({
//             error: null,
//             data: {}
//         });
//     } catch (error) {
//         res.status(400).json({
//             error: "INTERNAL_ERROR",
//             data: {}
//         });
//     }
// }

