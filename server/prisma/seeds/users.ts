import { profile } from "console";
import { E_Role } from "../../generated/prisma";


export const users = [
  {
    name: 'Oscar',
    lastName: 'Ramírez',
    email: 'oscar@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.ADMIN,
    profileImage: 'oscar-profile.jpg',
  },
  {
    name: 'Lucía',
    lastName: 'Gómez',
    email: 'lucia@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.ADMIN,
    profileImage: 'lucia-profile.jpg',
  },
  {
    name: 'Carlos',
    lastName: 'Méndez',
    email: 'carlos@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.USER,
    profileImage: 'carlos-profile.jpg',
  },
  {
    name: 'Ana',
    lastName: 'Jiménez',
    email: 'ana@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.USER,
    profileImage: 'ana-profile.jpg',
  },
  {
    name: 'Roberto',
    lastName: 'Salas',
    email: 'roberto@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.USER,  
    profileImage: 'roberto-profile.jpg',
  },
  {
    name: 'María',
    lastName: 'Fernández',
    email: 'maria@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.TECHNICIAN,
    profileImage: 'maria-profile.jpg',
  },
  {
    name: 'Jorge',
    lastName: 'Alvarado',
    email: 'jorge@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.TECHNICIAN,
    profileImage: 'jorge-profile.jpg',
  },
  {
    name: 'Sofía',
    lastName: 'Martínez',
    email: 'sofia@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.TECHNICIAN,
    profileImage: 'sofia-profile.jpg',
  },
  {
    name: 'Luis',
    lastName: 'Castro',
    email: 'luis@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.TECHNICIAN,
    profileImage: 'luis-profile.jpg',
  },
  {
    name: 'Andrea',
    lastName: 'Vargas',
    email: 'andrea@tech.com',
    password: '$2b$10$1BaQqXuZYNLDAC42PY5fN.ufSOKjApmjkaZrQUYf7ms71PaS1mASO',
    role: E_Role.TECHNICIAN,
    profileImage: 'andrea-profile.jpg',
  },

];

