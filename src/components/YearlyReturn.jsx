import {formatter} from '../util/investment';
export default function YearlyReturn({data,totalInterest}){
    return (
        <tr>
            <td key={data.year}>{data.year}</td>
            <td key={data.year}>{formatter.format(data.valueEndOfYear)}</td>
            <td key={data.year}>{formatter.format(data.interest)}</td>
            <td key={data.year}>{formatter.format(totalInterest)}</td>
            <td key={data.year}>{formatter.format(data.investedValue - totalInterest)}</td>
        </tr>
    );
}