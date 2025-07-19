import { Router } from 'express';
import * as ResourceController from '../controllers';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Resources
 *   description: CRUD operations for resources
 */

/**
 * @swagger
 * /resources:
 *   get:
 *     summary: Get a list of resources (paginated, filterable, sortable)
 *     tags: [Resources]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Filter by resource name
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *           enum: [BOOK, VIDEO, ARTICLE, OTHER]
 *         description: Filter by resource type
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Page size
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort field (e.g. name, createdAt)
 *       - in: query
 *         name: order
 *         schema:
 *           type: string
 *           enum: [ASC, DESC]
 *         description: Sort order
 *     responses:
 *       200:
 *         description: List of resources
 */
router.get('/', ResourceController.findAll);

/**
 * @swagger
 * /resources:
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [BOOK, VIDEO, ARTICLE, OTHER]
 *     responses:
 *       201:
 *         description: Resource created
 */
router.post('/', ResourceController.create);

/**
 * @swagger
 * /resources/{id}:
 *   get:
 *     summary: Get a single resource by ID
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resource found
 *       404:
 *         description: Resource not found
 */
router.get('/:id', ResourceController.findById);

/**
 * @swagger
 * /resources/{id}:
 *   put:
 *     summary: Update a resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [BOOK, VIDEO, ARTICLE, OTHER]
 *     responses:
 *       200:
 *         description: Resource updated
 *       404:
 *         description: Resource not found
 */
router.put('/:id', ResourceController.update);

/**
 * @swagger
 * /resources/{id}:
 *   delete:
 *     summary: Delete a resource
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Resource deleted
 *       404:
 *         description: Resource not found
 */
router.delete('/:id', ResourceController.remove);

export default router;
