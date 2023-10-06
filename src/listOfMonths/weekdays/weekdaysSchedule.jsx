import classes from './weekdaysSchedule.module.css'

export const Weekdays = ({ months, calendar, thisMonth, weekdays, daysMatrix, setValueDay }) => {
  return (
    <table className={classes.table}>
      <thead>
        <tr className={classes.schedule}>
          {weekdays.map((weekday, index) => (
            <th key={index} className={classes.weekday}>
              {weekday.substring(0,3)}
            </th>
          ))}
        </tr>
      </thead>
      
      <tbody className={classes.numbers}> 
          {months.map((month, index) => (
            month.name === thisMonth && (
              <>
                {months.map((month, index) => (
                  month.name === thisMonth && (
                    <>
                      {daysMatrix(month.days, month, months[index - 1], months[index - 1].days)}
                    </>
                    ) 
                  ))
                }
              </>
            )
          ))}
          
      </tbody>
    </table>
  )
}
            {/* {[...Array(month.days).keys()].map((monthDay) => (
               (monthDay + 1) === 1 ? (
                <tr className={classes.days}>

                  <td key={monthDay}>{monthDay + 1}</td>
                </tr>
               )
                :<td key={monthDay}>{monthDay + 1}</td>
              
              
            ))}
             */}
  