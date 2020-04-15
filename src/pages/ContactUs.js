import React from "react";
import { makeStyles, useTheme} from "@material-ui/core/styles"
import { Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles( theme => ( {

   
}) );

export default function AboutUs(props) {

    const classes = useStyles();
    const theme = useTheme();
    
    return (<Grid container direction="row"> 
            <Grid item container direction="column">
                <Grid item lg={3}> 
                    <Typography variant="h2" style={{lineHeight: 1}}> Contact Us </Typography>
                    <Typography variant="body1" style={{color: theme.palette.primary.main}}> We are waiting </Typography>

                </Grid>
                <Grid item container className={classes.backgrouund} lg={9}> 
                </Grid>
            </Grid>
    </Grid>)
}

