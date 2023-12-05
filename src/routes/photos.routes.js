import {Router} from 'express';
import {getPhotos,getPhoto,createPhoto,updatePhoto,deletePhoto} from '../controller/photos.controller.js';

const router = Router();

// Ruta para obtener todos los elementos
router.get('/photos',getPhotos );
  
  // Ruta para obtener un elemento por ID
router.get('/photos/:id', getPhoto);
  
  // Ruta para crear un nuevo elemento
router.post('/photos', createPhoto);
  
  // Ruta para actualizar un elemento existente
router.put('/photos/:id', updatePhoto);

  // Ruta para eliminar un elemento por ID
router.delete('/photos/:id', deletePhoto);


export default router;