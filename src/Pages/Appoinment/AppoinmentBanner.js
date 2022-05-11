import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppoinmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen bg-chair bg-cover">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt='Chair' />
                <div>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                    <p>You have selected: {format(date, 'PP')}.</p>
                </div>
            </div>
        </div>
    );
};

export default AppoinmentBanner;