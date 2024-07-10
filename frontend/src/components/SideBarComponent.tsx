import { HomeFilled, AudioFilled, CustomerServiceFilled, ProfileFilled } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
): MenuItem {
  return {
    key,
    icon,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
    getItem('Home', 'home', <HomeFilled />),
    getItem('Artists', 'artists', <AudioFilled />),
    getItem('Albums', 'albums', <ProfileFilled />),
    getItem('Songs', 'songs', <CustomerServiceFilled />),
    ];

const SideBarComponent = () => {
    const route = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const navigate = useNavigate();

  const handleMenuSelect = ({ key }: { key: string }) => {
    if (key === 'home') {
      navigate('/')
    } else if (key === 'artists') {
      navigate('/artists');
    } else if (key === 'albums') {
      navigate('/albums');
    } else if (key === 'songs') {
      navigate('/songs');
    }
  };

    return (
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={70} height={70} color={"#ffffff"} fill={"none"}>
                    <path d="M2 3L20 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 10L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M2 17L9 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M18.25 19C18.25 20.6569 16.8509 22 15.125 22C13.3991 22 12 20.6569 12 19C12 17.3431 13.3991 16 15.125 16C16.8509 16 18.25 17.3431 18.25 19ZM18.25 19V10C18.6667 10.6 19 13.12 22 13.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <Menu theme="dark" defaultSelectedKeys={[route.pathname.split('/')[1] as string]} mode="inline" items={items} onSelect={handleMenuSelect}/>
        </Sider>
    );
};

export default SideBarComponent;