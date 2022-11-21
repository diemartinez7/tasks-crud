import { Router } from 'express';
import { renderTasks, createTask, renderTaskEdit, editTask, deleteTask, taskToggleDone } from "../controllers/tasks.controller";


const router = Router();

// Listar tareas

router.get('/', renderTasks);

// Agregar tareas

router.post('/tasks/add', createTask);


// Editar tareas 

router.get('/tasks/:id/edit', renderTaskEdit);

router.post('/tasks/:id/edit', editTask);

// Eliminar tareas

router.get('/tasks/:id/delete', deleteTask);

// Done

router.get('/tasks/:id/toggleDone', taskToggleDone);

export default router;