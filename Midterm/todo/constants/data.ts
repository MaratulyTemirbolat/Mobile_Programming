import User from '../models/User';
import Task from '../models/Task';

export let users: User[] = [];
export let tasks: Task[] = [];
export let currentUser: User | null = null;

export function login(email: string, password: string): boolean {
  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    currentUser = user;
    return true;
  }
  return false;
}

export function register(email: string, name: string, password: string): boolean {
  if (users.some(u => u.email === email)) {
    return false;
  }
  const newUser = new User(Date.now(), email, name, password);
  users.push(newUser);
  currentUser = newUser;
  return true;
}

export function logout(): void {
  currentUser = null;
}

export function getTasksByUser(userId: number): Task[] {
  return tasks.filter(task => task.ownerId === userId);
}

export function saveTask(task: Task): void {
  const index = tasks.findIndex(t => t.id === task.id);
  if (index > -1) {
    tasks[index] = task;
  } else {
    tasks.push(task);
  }
}

export function updateTask(task: Task): boolean {
  const index = tasks.findIndex(t => t.id === task.id);
  if (index > -1) {
    tasks[index] = task;
    return true;
  }
  return false;
}

export function deleteTask(taskId: number): void {
  tasks = tasks.filter(task => task.id !== taskId);
  console.log(tasks);
}

export function getTaskById(taskId: number): Task | null {
  const task = tasks.find(t => t.id === taskId);
  return task ? task : null;
}
