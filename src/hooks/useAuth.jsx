import { useContext } from "react"
import { UserContext } from "../context/user.context";
import { OrderContext } from "../context/order.context";


const useAuth = () => {
    return useContext(UserContext);
}

export function useOrder() {
    return useContext(OrderContext)
}

export default useAuth;