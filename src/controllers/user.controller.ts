import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from 'express';

import * as userService from "../services/user.service";

export const createUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name, describtion } = req.body;

    const createUser = await userService.createUser({ name, describtion });
    if (!createUser) res.status(400).json({ error: `User Can't be created!` });
    else res.status(201).json(createUser)
});

export const updateUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const userData = {
        id: parseInt(req.params.id),
        name: req.body.name,
        describtion: req.body.describtion
    }

    const updateUser = await userService.updateUser(userData);
    if (!updateUser) res.status(400).json({ error: `User Can't be Updated!` });
    else res.status(200).json(createUser)
});

export const deleteUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id = parseInt(req.params.id);

    const deleteUser = await userService.deleteUser(id);
    if (!deleteUser) res.status(400).json({ error: `User Can't be Deleted!` });
    else res.status(204).json({ message: "User deleted successfully" })
});

export const getUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const users = await userService.getUsers();
    res.status(200).json({ users });
});

export const getUser = asyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const id = parseInt(req.params.id);

    const user = await userService.getUser(id);
    if (!user) res.status(204).json({ error: `User for this id ${id} not exist` })
    res.status(200).json({ user });
});
