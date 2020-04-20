import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import TextFieldWithButton from '../textFieldWithButton/textFieldWithButton';
import LabelWithEditButton from '../labelWithEditButton/labelWithEditButton';
import Container from '@material-ui/core/Container';

function ChooseWidget(props) {
    switch (props.type) {
        default:
            console.error('Wrong widget type ' + props.type);
            break;
        case 'label':
            return <LabelWithEditButton {...props} />
        case 'edit':
            return <TextFieldWithButton {...props} />
    }
}

export default function Username({
    username,
    onChange,
    onButtonClick,
    type,
}) {
    return (
        <AppBar position='static'>
            <Container>
                <ChooseWidget
                    onChange={onChange}
                    value={username}
                    buttonText='apply'
                    type={type}
                    onButtonClick={onButtonClick}
                    mainXS={3}
                />
            </Container>
        </AppBar>
    )
}