import { AppBar } from "@mui/material";
import { AiOutlineMenu } from "react-icons/ai"

const Header = () => {
    return (
        <div className="w-full fixed">

<AppBar/>
            <div className="flex gap-5 w-full text-center bg-white p-3 shadow-md align-middle">
                <div className="hover:bg-slate-300 rounded-full p-2">
                    <AiOutlineMenu />
                </div>
                <div >Simple To Do Application</div>
            </div>

        </div>
    );
}

export default Header;