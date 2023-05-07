import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "@/interfaces";
import { whoami } from "@/service/auth";

// Création de l'interface UserContextType
interface UserContextType {
    user: IUser |null;
    update: (user: any) => void;
}
interface UserProviderProps {
    children: React.ReactNode;
}

// Création du contexte en passant l'interface
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Création du composant pour passer les données à l'enfant
export const UserProvider: React.FC<UserProviderProps> = ({ children }: any) => {
    const [user, setUser] = useState<IUser | null>({} as IUser);
    //récupère le user dans le local storage lorsque le composant est monté et le stock dans le context
    useEffect(() => {
         whoami().then((user: any) => {
            if(user.statusCode === 403){
                return setUser(null)
            }
            return setUser(user);
        })
    }, []);
    // Fonction permettant de modifier l'utilisateur
    const update = (newUser: any) => {
        setUser(newUser)
    }
    return <UserContext.Provider value={{ user, update }}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error("useUser doit être utilisé à l'intérieur d'un ThemeProvider");
    }
    return context;
};