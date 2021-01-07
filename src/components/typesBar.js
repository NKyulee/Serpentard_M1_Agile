import React from 'react';
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Popover from 'material-ui-popup-state/HoverPopover'
import Button from '@material-ui/core/Button'
import 'leaflet/dist/leaflet.css';
import {
  usePopupState,
  bindHover,
  bindPopover,
} from 'material-ui-popup-state/hooks'
export default function NestedList(props) {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 1,
  })
  const DisplayTypes = []
  const SubType = (subtype) => (
    <Typography {...bindHover(popupState)} style={{ margin: 10 }}>
      {subtype.name}
    </Typography>
  )
  const Type = (type) => {
    const DisplaySubTypes = []
    for (let s of type.subTypes) {
      DisplaySubTypes.push(SubType(s))
    }
    return (
      <React.Fragment>
        <Button variant="contained" {...bindHover(popupState)}>
          {type.name}
        </Button>
        <Popover 
          popupId={type.keyType}
          {...bindPopover(popupState)}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          disableRestoreFocus
        >
          {DisplaySubTypes}
      </Popover>
      </React.Fragment>
    )
  };
  for (let t of props.types) {
    DisplayTypes.push(Type(t))
  }
  return (
    <Box component="div" >
      {DisplayTypes}
    </Box>
  )
}