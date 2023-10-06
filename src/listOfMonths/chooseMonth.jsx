import classes from './chooseMonth.module.css'



export const ChooseMonth = ({value, setValue, nextMonth, months, valueDay}) => {

  return (
    <div className={classes.panel}>
      <div className="month">
        {nextMonth}
      </div>
      <div className="currentDay">
        {valueDay}
      </div>
    </div>
  )
};
