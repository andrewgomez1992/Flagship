import * as FlagService from "../services/flagService.js";

export async function getFlags(req, res) {
  try {
    const flags = await FlagService.getAllFlags();
    res.json(flags);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addFlag(req, res) {
  try {
    const { name, description } = req.body;
    const [flag] = await FlagService.createFlag(name, description);
    res.status(201).json(flag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function toggleFlag(req, res) {
  try {
    const { id } = req.params;
    const [flag] = await FlagService.toggleFlag(id);
    res.json(flag);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteFlag(req, res) {
  try {
    const { id } = req.params;
    await FlagService.deleteFlag(id);
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
