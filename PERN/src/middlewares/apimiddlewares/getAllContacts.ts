import { Response } from "express";
import { Contacts } from "../interface";
import { db, sql } from "../../models/pg-connect";
import { validateContacts } from "../validation";

// get all contacts
export const getAllContacts = async (req: any, res: Response) => {
  try {
    const contacts = await db.query(
      sql`SELECT * FROM contacts WHERE user_id = ${req.user.id}`
    );
    res.status(200).json({ data: contacts });
  } catch (error) {
    console.log(error.message);
    res.status(401).json({ error: error.message });
  }
};

export const getAContact = async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const contact = await db.query(
      sql`SELECT * FROM contacts WHERE user_id = ${req.user.id} AND id =${id}`
    );
    res.status(200).json({ data: contact });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

// post a contact
export const postContacts = async (req: any, res: Response) => {
  const { error, value } = validateContacts(req.body);
  if (error) {
    return res.status(404).json({ error: error.details[0].message });
  }

  const { name, email, phone } = value;

  try {
    let contact = await db.query(
      sql`INSERT INTO contacts(name, user_id, email, phone) VALUES (${name}, ${req.user.id}, ${email}, ${phone}) returning *`
    );
    res.status(200).json({ data: contact });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const deleteContact = async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    await db.query(
      sql`DELETE FROM contacts WHERE id = ${id} AND user_id = ${req.user.id}`
    );
    res.status(200).json({ data: "Contact deleted" });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};

export const updateContact = async (req: any, res: Response) => {
  const { id } = req.params;
  try {
    const { name, phone, email } = req.body;
    const row = await db.query(
      sql`UPDATE contacts SET name=${name}, phone=${phone}, email=${email} WHERE id = ${id} AND user_id = ${req.user.id} returning *`
    );
    res.status(200).json({ data: row });
  } catch (error) {
    console.log(error.message);
    res.status(404).json({ error: error.message });
  }
};
