
import React from "react";
import { Input, Kbd, Flex } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group"
import { useColorModeValue } from './ui/color-mode'
import { LuSearch } from "react-icons/lu"

// eslint-disable-next-line
const SearchBar = ({ search, onSearch ,text}: any) => {
    const placeholder=`Search ${text}...`
    return (
        <Flex pt={2} bg={useColorModeValue('white', '#0a0a0a')}
        color={useColorModeValue('gray.600', 'white')} align={"center"} width={['60%','20%']}>
            <InputGroup
                flex="1"
                startElement={<LuSearch />}
                endElement={<Kbd>⌘K</Kbd>}
            >
                <Input
                    value={search}
                    variant="subtle" 
                    onChange={onSearch}
                    placeholder={text?placeholder:'Search  Spot'} />
            </InputGroup>

        </Flex>
    );
};

export default SearchBar;
