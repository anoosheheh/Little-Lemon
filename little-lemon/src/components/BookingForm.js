import React from "react";

const BookingForm = (props) => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [guests, setGuests] = React.useState('');
    const [occassion, setOccasion] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange=(e) => {
        setDate(e);
        props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose date</label>
                            <input id="book-date" value={date} type='date' required onChange={(e)=>handleChange(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose time</label>
                            <select id="book-time" value={time} onChange={(e) => setTime(e.target.value)} required>
                                <option value="">Select a time</option>
                                {
                                    props.availableTime.availableTime.map(availableTime => (
                                        <option key={availableTime} value={availableTime}>{availableTime}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of guests</label>
                            <input id="book-guests" type='number' value={guests} onChange={(e) => setGuests(e.target.value)} min='1' max='10' required/>
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" value={occassion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an occasion</option>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                                <option value="Company Dinner">Company Dinner</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                                <input aria-label="On Click" type="submit" value={'Make Your Reservation'}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;