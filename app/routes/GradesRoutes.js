const router = require('express')();

const GradesController = require('../controllers/GradesController');

router.get('/',
  GradesController.getAll,
  (req, res) => res.json({ grades: res.locals.grades }));

router.get('/:id',
  GradesController.getOneGrade,
  (req, res) => res.json(res.locals.grade));

router.post('/:id',
  GradesController.createOne,
  (req, res) => res.json({ grades: res.locals.grades }));

router.put('/:id',
  GradesController.updateGrade,
  (req, res) => res.json({ grades: res.locals.grades }));


module.exports = router;
