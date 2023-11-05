import { useContext } from "react";
import { authContext } from "../../../authProvider/MyAuthContext";

const useAuth = () => {
    const auth = useContext(authContext);
    return auth
};

export default useAuth;