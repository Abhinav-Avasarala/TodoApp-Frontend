import { Card } from "react-bootstrap";
import CompactTask from "./Task";
import CompactTimeBock from "./Timeblock";

function TimeBlockBar() {

    return (
        <>
            <Card>
                <Card.Header>Featured</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <CompactTask task="finish this" duration="30 mins" priority="p1" />
                        <CompactTimeBock block="12:00 to 1:00" />
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )


}

export default TimeBlockBar;


