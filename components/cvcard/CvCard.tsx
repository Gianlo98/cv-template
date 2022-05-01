import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { CvCardSpecs } from "./CvCard.types";

export function CvCard(cvCardSpecs: CvCardSpecs) {
    return <Card sx={{ minWidth: 275, marginBottom: 10 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {cvCardSpecs.overTitle}
            </Typography>
            <Typography variant="h4" component="div" style={{ fontWeight: 900, marginBottom: 20 }}>
                {cvCardSpecs.title}
            </Typography>
            <Typography variant="body1">
                {cvCardSpecs.children}
            </Typography>
            {cvCardSpecs.link && <CardActions style={{ float: "right" }}>
                <Button size="small" href={cvCardSpecs.link} target="_blank">More details</Button>
            </CardActions>}
        </CardContent>
    </Card>
}