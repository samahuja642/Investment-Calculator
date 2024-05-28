import { useState } from 'react';
export default function UserInputField({ changeHandler }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required onChange={changeHandler} name="initialInvestment" defaultValue={0} />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required onChange={changeHandler} name="annualInvestment" defaultValue={0} />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required onChange={changeHandler} name="expectedReturn" defaultValue={0} />
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required onChange={changeHandler} name="duration" defaultValue={0} />
                </p>
            </div>
        </section>
    );
}