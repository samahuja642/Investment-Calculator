import YearlyReturn from "./YearlyReturn";

export default function Result({annualData}){
    const content = [];
    let totalInterest = 0;
    for(const data of annualData){
        console.log(data);
        totalInterest += data.interest;
        content.push(<YearlyReturn data={data} totalInterest={totalInterest}></YearlyReturn>);
    }
    let error = false;
    return (
        <table id="result">
            <thead>
                <td>Year</td>
                <td>Investment Value</td>
                <td>Interest (Year) </td>
                <td>Total Interest</td>
                <td>Invested Capital</td>
            </thead>
        </table>
    );
}