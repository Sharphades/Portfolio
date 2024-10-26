import Card from "./Card";
export default function Grid() {
    return(
        <div className="container mt-4 mb-4">
            <div className="row g-5">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    );
}