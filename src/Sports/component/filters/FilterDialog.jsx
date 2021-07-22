import Grid from '@material-ui/core/Grid';
import {DialogContentText} from "@material-ui/core";
import React, {useContext} from "react";
import {FilterContext} from "./FilterProvider";
import {SportTile} from "./FilterTile";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";


export default function FilterDialog(props) {
    const {sports} = useContext(FilterContext);

    let data = Array.from(sports.entries()); //Array of [key, value]
    if (props.open) {
        return (
            <Dialog open={props.open}
                    maxWidth="xl"
                    onClose={props.toggle}
                    aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">
                    Edit Feed Preferences
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="dialog-description">
                        Tap sport or competition to on/off the feed.
                    </DialogContentText>
                    <Grid container spacing={2}
                          direction="column"
                          justifyContent="space-between"
                          alignItems="stretch"
                    > {
                        data.map(obj => (
                            <Grid item xs={12}>
                                <SportTile
                                    key={obj[0]}
                                    value={obj[1]}
                                />
                            </Grid>
                        ))
                    }
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => {
                            props.toggle();
                        }}
                        color="primary"
                    >
                        Done
                    </Button>
                </DialogActions>
            </Dialog>
        )
            ;
    } else {
        return null;
    }
}


