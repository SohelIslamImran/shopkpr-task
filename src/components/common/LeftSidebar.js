import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import useRouter from "../../hooks/useRouter";
import sidebarMenus from "./sidebarMenuData";

const LeftSidebar = ({ sidebarClass, setSidebarClass }) => {
    const { pathname } = useRouter();
    const isActive = (link) => (link === pathname ? "active" : "");

    return (
        <div id="left-sidebar" className={sidebarClass}>
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <Link to="/">
                                <Logo width="140" title="Logo" />
                            </Link>
                        </div>
                        <div className="sidebar-toggler" onClick={() => setSidebarClass("")}>
                            <i className="bi bi-x bi-middle" />
                        </div>
                    </div>
                </div>

                <div className="sidebar-menu">
                    <ul className="menu">
                        {sidebarMenus.map(({ id, sidebarItem, link, icon }) => (
                            <li key={link + id} className={`sidebar-item ${isActive(link)}`}>
                                <Link
                                    to={link}
                                    className="sidebar-link"
                                    onClick={() => {
                                        setSidebarClass(window.innerWidth < 1200 ? "" : "active");
                                    }}
                                >
                                    <i className={icon} />
                                    <span>{sidebarItem}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
