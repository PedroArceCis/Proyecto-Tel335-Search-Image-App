import fs from 'fs';

export const getPhotos = async (req, res) => {
    // Cargar datos desde el archivo JSON
    const data = JSON.parse(fs.readFileSync('data.json'));
    
    // Obtener la lista de fotos
    const photos = data.photos.photo;
    res.json(photos);
};

export const getPhoto = async (req, res) => {
    const id = req.params.id;
    // Cargar datos desde el archivo JSON
    const data = JSON.parse(fs.readFileSync('data.json'));

    // Buscar la foto por ID
    const photo = data.photos.photo.find((item) => item.id === id);

    if (photo) {
        res.json(photo);
    } else {
        res.status(404).json({ error: 'Foto no encontrada' });
    }
};

export const createPhoto = async (req, res) => {
    const newPhoto = req.body;

    // Cargar datos desde el archivo JSON
    const data = JSON.parse(fs.readFileSync('data.json'));

    // Agregar la nueva foto a la lista
    data.photos.photo.push(newPhoto);

    // Guardar los cambios en el archivo JSON
    fs.writeFileSync('data.json', JSON.stringify(data));

    res.json({ message: 'Foto creada exitosamente' });
};

export const updatePhoto = async (req, res) => {
    const id = req.params.id;
    const updatedPhoto = req.body;

    // Cargar datos desde el archivo JSON
    const data = JSON.parse(fs.readFileSync('data.json'));

    // Buscar la foto por ID
    const photoIndex = data.photos.photo.findIndex((item) => item.id === id);

    if (photoIndex !== -1) {
        // Actualizar los datos de la foto
        data.photos.photo[photoIndex] = updatedPhoto;

        // Guardar los cambios en el archivo JSON
        fs.writeFileSync('data.json', JSON.stringify(data));

        res.json({ message: 'Foto actualizada exitosamente' });
    } else {
        res.status(404).json({ error: 'Foto no encontrada' });
    }
};

export const deletePhoto = async (req, res) => {
    const id = req.params.id;

    // Cargar datos desde el archivo JSON
    const data = JSON.parse(fs.readFileSync('data.json'));

    // Buscar la foto por ID
    const photoIndex = data.photos.photo.findIndex((item) => item.id === id);

    if (photoIndex !== -1) {
        // Eliminar la foto de la lista
        data.photos.photo.splice(photoIndex, 1);

        // Guardar los cambios en el archivo JSON
        fs.writeFileSync('data.json', JSON.stringify(data));

        res.json({ message: 'Foto eliminada exitosamente' });
    } else {
        res.status(404).json({ error: 'Foto no encontrada' });
    }
};