import {Router} from 'express';
import JogadorController from './app/controllers/JogadorController';
import EnderecoController from './app/controllers/EnderecoController';
import LocalController from './app/controllers/LocalController';
import MapaController from './app/controllers/MapaController';

const router = Router();


router.post('/jogador/store', JogadorController.store);
router.post('/jogador/update', JogadorController.update);
router.post('/jogador/delete', JogadorController.delete);
router.post('/jogador/list', JogadorController.list);


router.post('/mapa/store', MapaController.store);
router.post('/mapa/list', MapaController.list);

router.post('/enderecos', EnderecoController.store);
router.get('/enderecos', EnderecoController.list);
router.delete('/enderecos', EnderecoController.delete);


router.post('/local/store', LocalController.store);
router.post('/local/list', LocalController.list);




export default router;


