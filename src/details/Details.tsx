import React, {useMemo} from 'react';
import './Details.css';
import {Detail, details} from "./details-data";
import {Grid, makeStyles} from "@material-ui/core";
import DetailsCell from "./DetailsCell";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
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
                                <DetailsCell title={'Contact Information'} value={"Add new contact"}/>
                            </Grid>
                            <Grid item>
                                <DetailsCell title={'CONTACT # 1 / BILL TO'} value={data.contact_1.name} list={data.contact_1.list}/>
                                <DetailsCell title={'CONTACT # 2'} value={data.contact_2.name}  list={data.contact_2.list}/>
                            </Grid>
                            <Grid item>
                                <DetailsCell title={'ADDRESS'} value={data.address_1}/>
                                <DetailsCell title={'ADDRESS'} value={data.address_2}/>
                            </Grid>
                            <Grid item>
                                <DetailsCell title={'SOLD TO'} value={data.soldTo}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Details;