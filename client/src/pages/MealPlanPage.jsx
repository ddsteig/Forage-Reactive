import React from "react"
import { Button, Grid, Typography } from "@material-ui/core"
import NavTabs from "../components/NavBar"
import DisplayFood from "../components/DisplayFood"

function MealPlanPage() {
    // TODO - On click ask the db for that specific type of the food. (i.e. click lunch will only show the type of food the user saved that was labeled as a type to lunch per the users choice)

    return (
        <React.Fragment> {this.props.isLoggedIn ? (
            <React.Fragment>
                <NavTabs />
                <Typography variant="h2" style={{ textAlign: "center" }}>
                    Your Meal Plan 🗓
            </Typography>
                <Grid container alignContent="center" justify="space-around" style={{ textAlign: "center" }}>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Button onClick={() => {
                            alert("Breakfast");
                        }}
                        >Breakfast</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Button onClick={() => {
                            alert("Lunch");
                        }}>Lunch</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Button onClick={() => {
                            alert("Dinner");
                        }}>Dinner</Button>
                    </Grid>
                    <Grid item xs={6} sm={6} md={3} lg={3}>
                        <Button onClick={() => {
                            alert("Snack");
                        }}>Snack</Button>
                    </Grid>
                    {fakeData.map(data => (
                        <DisplayFood key={data.id} {...data} />
                    ))}
                </Grid>
            </React.Fragment>
        ) : (
                <p>Error: This page is for logged in users only!</p>
            )}
        </React.Fragment>

    )
}

export default MealPlanPage
