import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const TransactionSelect = (props) => {
    let toggle;
    const [dropdownOpen, setDropdownOpen] = useState(false);

    toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Transaction Select
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Available Transactions</DropdownItem>
                <DropdownItem>Auto Renewal</DropdownItem>
                <DropdownItem disabled>PLP Renewal (disabled)</DropdownItem>
                <DropdownItem>Property Renewal</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Auto Pre Renewal</DropdownItem>
                <DropdownItem>Property Pre Renewal</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}

export default TransactionSelect;
