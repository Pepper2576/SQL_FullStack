import express from 'express';
import {
  getAllEmployees,
  getEmployeeByID,
  createEmployee,
  deleteEmployee,
} from '../db.js';

const getAllData = async (req, res) => {
  try {
    res.send(await getAllEmployees()).status(200);
  } catch (error) {
    req.json({ error: error.message }).status(400);
  }
};

const getDataById = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    res.send(await getEmployeeByID(id)).status(200);
  } catch (error) {
    req.json({ error: error.message }).status(400);
  }
};

const createNewData = async (req, res) => {
  const { id, first_name, last_name, admin_rights } = req.body;
  try {
    const newEmployee = await createEmployee(
      id,
      first_name,
      last_name,
      admin_rights
    );
    res.send(newEmployee).status(201);
  } catch (error) {
    res.json({ error: error.message }).status(400);
  }
};

const deleteData = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    res.send(await deleteEmployee(id)).status(200);
  } catch (error) {
    res.json({ error: error.message }).status(400);
  }
};

export { getAllData, getDataById, createNewData, deleteData };
