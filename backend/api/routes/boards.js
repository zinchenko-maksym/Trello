const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');


const BoardsController = require('../controllers/boards')

router.get('/', BoardsController.boards_get_all);

router.post('/', /*checkAuth,*/ BoardsController.boards_create_board);

router.delete('/', BoardsController.deleate_all_boards);


module.exports = router;
