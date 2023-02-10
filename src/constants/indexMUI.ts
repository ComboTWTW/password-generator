import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox';

export const PrettoSlider = withStyles({
    root: {
      color: 'rgb(40, 255, 174)',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);


  export const CustomCheck = withStyles({
    root: {
      marginLeft: -13,
      color: "#fff",
      '&$checked': {
        color: "rgb(40, 255, 174)",
      },
    },
  })(Checkbox);
