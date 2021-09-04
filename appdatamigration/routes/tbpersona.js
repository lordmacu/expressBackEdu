const { Router } = require('express');
const { getTBpersonasAll,getTBpersonasPaises } = require('../controllers/tbpersona');
//const { validateFields } = require('../middlewares/validate-fields');
//const { login, googleSignIn } = require('../controllers/auth');


const router = Router();

//router.get('/people',getTBpersonas);
router.get('/',getTBpersonasPaises);


// router.post('/google', [
//     check('id_token','El google token es obligatorio').not().isEmpty(),
//     validateFields
// ],googleSignIn);

module.exports = router;