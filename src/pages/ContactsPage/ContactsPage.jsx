import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import Loader from "../../components/Loader/Loader";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";
import {  selectLoading } from "../../redux/contacts/selectors";



export default function ContactsPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectLoading);


    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);


    return (
        <>
          <PageTitle>Your contacts</PageTitle>
          <ContactForm />
          <SearchBox />
          <ContactList />
          {isLoading && <Loader>Please wait...</Loader>}
        </>
      );
    }

