import { useDispatch } from "react-redux";
import { FaUser } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import css from './Contact.module.css';
import { deleteContact } from "../../redux/contacts/operations";
import { MdDelete } from "react-icons/md";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import ModalDelete from "../ModalDelete/ModalDelete";
import { useState } from "react";


export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleDelete = () => setIsModalOpen(true);
  
    const confirmDelete = () => {
      dispatch(deleteContact(contact.id))
        .unwrap()
        .then(() => {
          toast.success('Contact deleted successfully');
        })
        .catch(() => {
          toast.error('Failed to delete contact');
        });
      setIsModalOpen(false);
    };
  
    return (
      <div className={css.container}>
        <div>
          <p className={css.text}><FaUser className={css.icon} />{contact.name}</p>
          <p className={css.text}><IoIosCall className={css.icon} />{contact.number}</p>
        </div>
        <Link onClick={handleDelete}><MdDelete className={css.iconDelete} /></Link>
  
        <ModalDelete
          open={isModalOpen}
          handleClose={() => setIsModalOpen(false)}
          handleConfirm={confirmDelete}
        />
      </div>
    );
  }
