import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { FaChair } from "react-icons/fa";

const BookingForm = (props) => {
    const [date, setDate] = React.useState('');
    const [time, setTime] = React.useState('');
    const [guests, setGuests] = React.useState(1);
    const [occasion, setOccasion] = React.useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await Swal.fire({
            title: 'Confirm Reservation',
            text: 'Are you sure you want to make this reservation?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes, reserve!',
            cancelButtonText: 'Cancel'
        });
        if (result.isConfirmed) {
            props.SubmitForm(e);
            await Swal.fire({
                title: 'Reservation Confirmed!',
                text: 'Your reservation has been made.',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            navigate("/");
        }
    }
    const handleChange=(e) => {
        setDate(e);
        props.dispatch(e);
    }

    // Animation key for react re-mount
    const [animKey, setAnimKey] = React.useState(0);
    React.useEffect(() => { setAnimKey(k => k + 1); }, [guests]);

    return(
        <header>
            <section style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between"}}>
                <form onSubmit={handleSubmit} style={{flex: 1, display: "flex", gap: 40}}>
                    <fieldset style={{flex: 2}}>
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
                            <input
                                id="book-guests"
                                type='number'
                                value={guests}
                                onChange={(e) => setGuests(Math.max(1, Math.min(10, Number(e.target.value))))}
                                min='1'
                                max='10'
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id="book-occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} required>
                                <option value="">Select an occasion</option>
                                <option value="Birthday">&#x1F382; Birthday</option>
                                <option value="Anniversary">&#x1F48D; Anniversary</option>
                                <option value="Company Dinner">&#x1F4BC; Company Dinner</option>
                                <option value="Other">&#x2B50; Other</option>
                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={'Make Your Reservation'}/>
                        </div>
                    </fieldset>
                    {/* Table animation inside the form box */}
                    <div
                        className="table-animation"
                        key={animKey}
                        style={{
                            flex: 1,
                            minWidth: 120,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            background: "#f9f9f9",
                            borderRadius: 12,
                            boxShadow: "0 2px 8px #0001",
                            marginTop: 20,
                            padding: 20,
                            height: "fit-content"
                        }}
                    >
                        <div style={{fontWeight: "bold", marginBottom: 10}}>Table</div>
                        <div style={{display: "flex", gap: 6}}>
                            {[...Array(guests)].map((_, i) => (
                                <FaChair
                                    key={i}
                                    size={32}
                                    color={"#EE9972"}
                                    className="chair-animate"
                                    style={{
                                        filter: i === guests - 1 ? "drop-shadow(0 0 6px #ecdd92ff)" : "none"
                                    }}
                                />
                            ))}
                        </div>
                        <div style={{marginTop: 8, fontSize: 14, color: "#888"}}>
                            {guests} {guests === 1 ? "guest" : "guests"}
                        </div>
                    </div>
                </form>
            </section>
        </header>
    );
}

export default BookingForm;