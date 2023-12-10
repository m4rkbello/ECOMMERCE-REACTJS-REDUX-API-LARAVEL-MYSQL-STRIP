import React from "react";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";


const NotFound = props => {
    const { title } = props;
    useDocumentTitle(title);

    return (<h4>Not Found!</h4>)
}



export default NotFound;