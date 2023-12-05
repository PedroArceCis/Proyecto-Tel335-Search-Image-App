let users = [{
    "username": "johndoe",
    "name": "John Doe",
    "profileImage": "https://example.com/images/profiles/johndoe.jpg",
    "bio": "Photography enthusiast and nature lover",
    "location": "New York, USA",
    "categories": ["Game Development", "Art", "Nature"],
    "interests": ["Artworks", "3D Models", "Textures"],
    "website": "https://www.example.com"
},
{
    "username": "janedoe",
    "name": "Jane Doe",
    "profileImage": "https://example.com/images/profiles/janedoe.jpg",
    "bio": "Passionate about digital art and design",
    "location": "Los Angeles, USA",
    "categories": ["Digital Art", "Illustration", "Photography"],
    "interests": ["Concept Art", "Character Design", "Photo Manipulation"],
    "website": "https://www.janedoeportfolio.com"
},
{
    "username": "alexsmith",
    "name": "Alex Smith",
    "profileImage": "https://example.com/images/profiles/alexsmith.jpg",
    "bio": "Nature photographer and outdoor adventurer",
    "location": "Vancouver, Canada",
    "categories": ["Nature", "Landscape", "Travel"],
    "interests": ["Wildlife Photography", "Aerial Shots", "Adventure Travel"],
    "website": "https://www.alexsmithphotography.com"
}
]


export const getUser = async(req, res) => {
    const username = req.params.username;
  
    const user = users.find(user => user.username === username);
  
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
};

export const createUser = async(req, res)  => {
    const newUser = req.body;

    // Verifica si el nombre de usuario ya existe
    const existingUser = users.find(user => user.username === newUser.username);
    if (existingUser) {
        res.status(400).json({ message: "El nombre de usuario ya está en uso" });
    } else {
        users.push(newUser);
        res.json(users);
    }
};

export const updateUser = async(req, res) => {
    const username = req.params.username;
    const updatedUser = req.body;
  
    // Encuentra el índice del usuario en el array
    const userIndex = users.findIndex(user => user.username === username);
  
    if (userIndex !== -1) {
      users[userIndex] = updatedUser;
      console.log(users.length);
      res.json(users);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
};

export const deleteUser = async(req, res) => {
    const username = req.params.username;
  
    // Encuentra el índice del usuario en el array
    const userIndex = users.findIndex(user => user.username === username);
  
    if (userIndex !== -1) {
      users.splice(userIndex, 1);
      res.json({ message: `Usuario ${username} eliminado exitosamente`, users });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
};