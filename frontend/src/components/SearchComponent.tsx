import { AutoComplete } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Search } from "../api/apiHelper";
import { DefaultOptionType } from "antd/es/select";

const SearchComponent = () => {
    const [searchText, setSearchText] = useState('');
    const [options, setOptions] = useState<DefaultOptionType[]>([]);
    const navigate = useNavigate();
    const type = useLocation().pathname.split('/')[1];

    useEffect(() => {
        if (searchText) {
            const fetchSuggestions = async () => {
                try {
                    const response = await Search(searchText);
                    console.log(response);

                    const artists = response.artists.map(suggestion => ({
                        value: `/artists/${suggestion._id}`,
                        label: suggestion.name,
                    }));

                    const albums = response.albums.map(suggestion => ({
                        value: `/albums/${suggestion._id}`,
                        label: suggestion.title,
                    }));

                    const songs = response.songs.map(suggestion => ({
                        value: `/songs/${suggestion._id}`,
                        label: suggestion.title,
                    }));

                    const options = [...artists, ...albums, ...songs]

                    console.log(options);
                    setOptions(options);
                } catch (error) {
                    console.error('Error fetching search suggestions:', error);
                }
            };

            fetchSuggestions();
        } else {
            setOptions([]);
        }
    }, [searchText, type]);

    const onSelect = (value: string) => {
        navigate(value);
    };

    const onSearch = (value: string) => {
        setSearchText(value);
    };
    
    return (
        <AutoComplete
            options={options}
            onSelect={onSelect}
            onSearch={onSearch}
            style={{ width: 200 }}
            placeholder="Search"
        />
    );
}

export default SearchComponent;
