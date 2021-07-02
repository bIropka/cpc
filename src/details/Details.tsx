import React, {useMemo} from 'react';
import './Details.css';
import {Detail, details} from "./details-data";
import {Grid, makeStyles, Paper} from "@material-ui/core";
import DetailsCell from "./DetailsCell";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        width: 250,
        height: '100%'
    }
}));

const Details = (props: { id: number }) => {
    const classes = useStyles();

    const data: Detail = useMemo(() => details[props.id - 1], [props.id]);
    return (
        <div className="details-wrapper">
            <div className="details">
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12}>
                        <Grid container justify="center" spacing={0}>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <DetailsCell title={'Contact Information'} value={"Add new contact"}/>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <DetailsCell title={'CONTACT # 1 / BILL TO'} value={data.contact_1.name} list={data.contact_1.list}/>
                                    <DetailsCell title={'CONTACT # 2'} value={data.contact_2.name}  list={data.contact_2.list}/>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <DetailsCell title={'ADDRESS'} value={data.address_1}/>
                                    <DetailsCell title={'ADDRESS'} value={data.address_2}/>
                                </Paper>
                            </Grid>
                            <Grid item>
                                <Paper className={classes.paper}>
                                    <DetailsCell title={'SOLD TO'} value={data.soldTo}/>
                                </Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Details;