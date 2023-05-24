import useRouter from "../../hooks/useRouter";

const sidebarData = [
    { id: 1, name: "users", link: "/dash-board/admin/manage-users" },
    { id: 2, name: "groups", link: "/dash-board/admin/manage-groups" },
    { id: 3, name: "roles", link: "/dash-board/admin/manage-roles" },
];

const RightSidebar = () => {
    const { pathname } = useRouter();
    const isActive = (link) => (link === pathname ? "active" : "");

    return (
        <div id="right-sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="sidebar-toggler">
                        <i className="bi bi-x bi-middle" />
                    </div>
                    <h4>Management</h4>
                    <p>Add, edit or delete users, groups and roles</p>
                </div>

                <div className="sidebar-menu">
                    <ul className="menu">
                        {sidebarData.map(({ id, name, link }, idx) => (
                            <li key={id} className={isActive(link)}>
                                <h3>{`${idx + 1}`.padStart(2, "0")}</h3>
                                <div>
                                    <h5>Manage {name}</h5> <p>Let&lsquo;s you manage {name}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default RightSidebar;
