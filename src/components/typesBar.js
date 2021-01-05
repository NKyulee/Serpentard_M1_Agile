import React from 'react';
import Box from '@material-ui/core/Box'
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks'


export default function NestedList(props) {

    const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })

    const DisplaySubTypes = []
    const SubType = (subtype) => (
        <MenuItem onClick={popupState.close} {...bindHover(popupState)}>
        {subtype.name}
      </MenuItem>
    )

    const DisplayTypes = []
    const Type = (type) => (
        <React.Fragment>
        <Button variant="contained" {...bindHover(popupState)}>
            {type.name}
        </Button>
        <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        {DisplaySubTypes}
      </Menu>
        
        
    </React.Fragment>
    );



    for (let t of props.types) {
        DisplayTypes.push(Type(t))
        for (let s of t.subTypes) {
            DisplaySubTypes.push(SubType(s))
        }
    }

    return (
        <Box component="div" >
            {DisplayTypes}
        </Box>
    )
}