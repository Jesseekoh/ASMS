import { Link } from 'react-router-dom';
import {
    BellIcon,
    DocumentChartBarIcon,
    BookOpenIcon,
    RectangleGroupIcon,
    TableCellsIcon,
    BanknotesIcon,
} from '@heroicons/react/24/solid';
import './SideNav.css';
import { useRef } from 'react';
import { useResolvedPath } from 'react-router-dom';
import { useMatch } from 'react-router-dom';

/**
 * Represents a sidenav component
 * @returns a react element
 */
const SideNav = () => {
    const path = window.location.pathname;
    const resolvedPath = useResolvedPath({ to: path });
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    const sideNavRef = useRef(null);
    return (
        <div className="sidenav  absolute h-[calc(h-full -  72px)]  w-max bg-yellow-500 overflow-y-auto">
            <ul className="flex flex-col" ref={sideNavRef}>
                <li className="hover:bg-yellow-400">
                    <Link
                        to={'/dashboard'}
                        className={
                            'flex items-center gap-3 px-4 py-4 ' +
                            (isActive && (path == '/dashboard' || path == '/')
                                ? 'bg-black text-white border-l-4'
                                : '')
                        }
                    >
                        <span>
                            <RectangleGroupIcon width={20} />
                        </span>
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li className="hover:bg-yellow-400">
                    <Link
                        to={'/biodata'}
                        className={
                            'flex items-center gap-3 px-4 py-4 ' +
                            (isActive && path == '/biodata'
                                ? 'bg-black text-white border-l-4'
                                : '')
                        }
                    >
                        <span>
                            <TableCellsIcon width={20} />
                        </span>
                        <span>Biodata</span>
                    </Link>
                </li>
                <li className="hover:bg-yellow-400">
                    <Link
                        to={'/announcements'}
                        className={
                            'flex items-center gap-3 px-4 py-4 ' +
                            (isActive && path == '/announcements'
                                ? 'bg-black text-white border-l-4'
                                : '')
                        }
                    >
                        <span>
                            <BellIcon width={20} />
                        </span>
                        <span>Announcement</span>
                    </Link>
                </li>
                <li className="hover:bg-yellow-400">
                    <Link
                        to={'/courses'}
                        className={
                            'flex items-center gap-3 px-4 py-4 ' +
                            (isActive && path == '/courses'
                                ? 'bg-black text-white border-l-4'
                                : '')
                        }
                    >
                        <span>
                            <BookOpenIcon width={20} />
                        </span>
                        <span>Courses</span>
                    </Link>
                </li>
                <li className="hover:bg-yellow-400">
                    <Link
                        to={'/fees'}
                        className={
                            'flex items-center gap-3 px-4 py-4 ' +
                            (isActive && path == '/fees'
                                ? 'bg-black text-white border-l-4'
                                : '')
                        }
                    >
                        <span>
                            <BanknotesIcon width={20} />
                        </span>
                        <span>Fees</span>
                    </Link>
                </li>
                <li className="hover:bg-yellow-400">
                    <Link
                        to={'/results'}
                        className={
                            'flex items-center gap-3 px-4 py-4 ' +
                            (isActive && path == '/results'
                                ? 'bg-black text-white border-l-4'
                                : '')
                        }
                    >
                        <span>
                            <DocumentChartBarIcon width={20} />
                        </span>
                        <span>Results</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default SideNav;
