"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_model_1 = require("./product.model");
exports.ProductController = {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield product_model_1.Product.find();
            res.json(products);
        });
    },
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.Product.findById(req.params.id);
            if (!product)
                return res.status(404).json({ error: 'Product not found' });
            res.json(product);
        });
    },
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productName, productPrice } = req.body;
            const newProduct = yield product_model_1.Product.create({ productName, productPrice });
            res.status(201).json(newProduct);
        });
    },
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { productName, productPrice } = req.body;
            const updated = yield product_model_1.Product.findByIdAndUpdate(req.params.id, { productName, productPrice }, { new: true });
            if (!updated)
                return res.status(404).json({ error: 'Product not found' });
            res.json(updated);
        });
    },
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const deleted = yield product_model_1.Product.findByIdAndDelete(req.params.id);
            if (!deleted)
                return res.status(404).json({ error: 'Product not found' });
            res.status(204).send();
        });
    }
};
