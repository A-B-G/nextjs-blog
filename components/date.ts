//create a Date component
import { parseISO, format } from 'date-fns'

export default function Date({ dateString }: { dateString: string}) {
    const date = parseISO(dateString)
    // return <div dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</div>
}
