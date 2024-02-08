import { BellAlertIcon } from '@heroicons/react/24/solid'

const Announcements = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        Announcements
        <span className="inline-block">
          <BellAlertIcon width={30} color="rebeccapurple" />
        </span>
      </h1>
    </div>
  )
}

export default Announcements
