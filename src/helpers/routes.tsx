import { NavListOptionsRoutes } from "../constants/constants";

export const HasThisRoute = (routeKey: string) => {
    if (!Object.keys(NavListOptionsRoutes).includes(routeKey)){
        return false
    }
    else{
        return true
    }
};