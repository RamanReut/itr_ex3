import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function MessageMenu({
    anchorEl,
    onClose,
    onDelete,
    onEdit,
}) {
    return (
        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={onClose}
        >
            <MenuItem onClick={() => {onEdit();onClose();}}>Edit</MenuItem>
            <MenuItem onClick={() => {onDelete(); onClose();}}>Delete</MenuItem>
        </Menu>
    );
}