import React from "react";
import { FiSearch } from "react-icons/fi";
import { Input } from 'antd';

function SongsFilter() {
    return (
        <div class="w-full p-2 bg-grayFilter flex items-center justify-between rounded font-montserrat">
            <div class="flex items-center gap-4 pl-4">
                <FiSearch size={24} />
                <Input placeholder="Buscar canción..." bordered={false} style={{ backgroundColor: '#F6E2F8', height: '4vh', width: '30vw', borderRadius:'0.2rem'}} />
            </div>
        </div>
    );
}

export default SongsFilter;